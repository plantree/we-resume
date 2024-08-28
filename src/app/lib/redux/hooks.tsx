import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store, type RootState, type AppDispatch } from './store';
import { loadStateFromLocalStorage, saveStateToLocalStorage } from './storage';
import { initialResumeState, setResumeState } from './resumeSlice';
import { deepMerge } from '../deepMerge';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

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
      const mergedResumeState = deepMerge(initialResumeState, state.resume);
      dispatch(setResumeState(mergedResumeState));
    } else {
      dispatch(setResumeState(initialResumeState));
    }
  }, [dispatch]);
};
