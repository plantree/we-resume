import type { RootState } from './store';

/**
 * LocalStorage
 */
const LOCAL_STORAG_KEY = 'we-resume';

export const loadStateFromLocalStorage = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem(LOCAL_STORAG_KEY);
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Failed to load state from localStorage', err);
    return undefined;
  }
};

export const saveStateToLocalStorage = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAG_KEY, serializedState);
  } catch {
    // ignore write errors
    console.error('Failed to save state to localStorage');
  }
};
