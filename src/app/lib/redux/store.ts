import { combineReducers, configureStore } from '@reduxjs/toolkit';
import resumeReducer from './resumeSlice';

// Create the root reducer independently to obtain the RootState type.
export const rootReducer = combineReducers({
  resume: resumeReducer
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
}

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
