'use client';

import { Provider } from 'react-redux';
import { store } from 'lib/redux/store';

import React from 'react';

export default function Editor() {
  return (
    <Provider store={store}>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-50 dark:bg-gray-700">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Editor</h1>
      </div>
    </Provider>
  );
}
