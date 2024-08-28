import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useSaveStateToLocalStorageOnChange, useAppDispatch } from './hooks';
import { store } from './store';
import { describe, it, expect, beforeEach } from 'vitest';
import { addResume, initialResume } from './resumeSlice';
import { LOCAL_STORAG_KEY } from './storage';

describe('useSaveStateToLocalStorageOnChange', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should save state to local storage on change', async () => {
    const { result } = renderHook(() => useSaveStateToLocalStorageOnChange(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
    });
    expect(result.current).toBeUndefined();

    const name = 'John';
    store.dispatch(addResume(name));
    expect(store.getState()['resume']['currentResumeId']).toEqual(name);

    await waitFor(() => {
      expect(
        JSON.parse(localStorage.getItem(LOCAL_STORAG_KEY)!)['resume']['currentResumeId']
      ).toEqual(name);
    });
  });
});

describe('useLoadInitialState', () => {
  it('should load state from local storage', async () => {
    const name = 'John';
    localStorage.setItem(
      LOCAL_STORAG_KEY,
      JSON.stringify({
        resume: {
          resumes: {
            [name]: initialResume
          },
          currentResumeId: name
        }
      })
    );

    const { result } = renderHook(() => useAppDispatch(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
    });

    expect(result.current).toBeDefined();
    expect(store.getState()['resume']['currentResumeId']).toEqual(name);
  });
});
