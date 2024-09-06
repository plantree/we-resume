'use client';

import { Provider } from 'react-redux';
import { store } from '../lib/redux/store';
import ResumeForm from '../components/resume-form';
import ResumePreview from '../components/resume-preview';

import React from 'react';

export default function Editor() {
  return (
    <Provider store={store}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4 border-2">
          <ResumeForm />
        </div>
        <div className="md:w-1/2 p-4 border-2">
          <ResumePreview />
        </div>
      </div>
    </Provider>
  );
}
