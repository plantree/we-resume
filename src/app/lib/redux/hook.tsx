import { useEffect } from 'react';
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import { store, type RootState, type AppDispatch } from './store';
import { loadStateFromLocalStorage, saveStateToLocalStorage } from './storage';
import { initialResume, setResume } from './resumeSlice';
import { deepMerge } from '../deepMerge';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * Hook to save store to localStorage on change
 */
export const useSaveStateToLocalStorageOnChange = () => {
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      saveStateToLocalStorage(store.getState());
    });
    return unsubscribe;
  }, []);
};

/**
 * Hook to load resume from localStorage
 */
export const useLoadInitialState = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const state = loadStateFromLocalStorage();
    if (state) {
      // Merge with initial state to avoid missing new fields.
      const mergedResumeState = deepMerge(initialResume, state.resume);
      dispatch(setResume(mergedResumeState));
    } else {
      dispatch(setResume(initialResume));
    }
  }, [dispatch]);
};
