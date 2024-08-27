import { expect, test } from 'vitest';

import { loadStateFromLocalStorage, saveStateToLocalStorage, LOCAL_STORAG_KEY } from './storage';
import { initialResumeState } from './resumeSlice';
import { RootState } from './store';

test('loadStateFromLocalStorage', () => {
  const state: RootState = {
    resume: initialResumeState
  };
  localStorage.setItem(LOCAL_STORAG_KEY, JSON.stringify(state));
  const result = loadStateFromLocalStorage();
  expect(result).toEqual(state);
});

test('loadStateFromLocalStorage with no data', () => {
  localStorage.removeItem(LOCAL_STORAG_KEY);
  const result = loadStateFromLocalStorage();
  expect(result).toBeUndefined();
});

test('saveStateToLocalStorage', () => {
  const state: RootState = {
    resume: initialResumeState
  };

  expect(saveStateToLocalStorage(state)).toBeUndefined();
  const result = loadStateFromLocalStorage();
  expect(result).toEqual(state);
});
