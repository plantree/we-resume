import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

import type {
  ResumeMap,
  Resume,
  ResumeProfile,
  ResumeEducation,
  ResumeWork,
  ResumeSkill,
  ResumeProject,
  ResumeDate
} from './types';

export const initialProfile: ResumeProfile = {
  name: '',
  email: '',
  phone: '',
  location: '',
  targetPosition: '',
  url: ''
};

export const initialDate: ResumeDate = {
  start: new Date(),
  end: new Date()
};

export const initialEducation: ResumeEducation = {
  institution: '',
  degree: '',
  date: initialDate,
  score: 0,
  awards: []
};

export const initialProject: ResumeProject = {
  name: '',
  date: initialDate,
  descriptions: []
};

export const initialWork: ResumeWork = {
  company: '',
  position: '',
  location: '',
  date: initialDate,
  projects: [initialProject]
};

export const initialSkill: ResumeSkill = {
  name: '',
  level: ''
};

export const initialResume: Resume = {
  profile: initialProfile,
  educations: [initialEducation],
  works: [initialWork],
  skills: [initialSkill]
};

export const initialResumeMap: ResumeMap = {
  default: initialResume
};

export const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    // current version
    currentKey: 'default',
    resumeMap: initialResumeMap as ResumeMap
  },
  reducers: {
    addResume(state, action: PayloadAction<string>) {
      state.resumeMap[action.payload] = initialResume;
    },
    removeResume(state, action: PayloadAction<string>) {
      delete state.resumeMap[action.payload];
    },
    selectResume(state, action: PayloadAction<string>) {
      state.currentKey = action.payload;
    },
    setResume(state, action: PayloadAction<Resume>) {
      state.resumeMap[state.currentKey] = action.payload;
    },
    renameResume(state, action: PayloadAction<{ oldKey: string; newKey: string }>) {
      const { oldKey, newKey } = action.payload;
      state.resumeMap[newKey] = state.resumeMap[oldKey];
      delete state.resumeMap[oldKey];
      if (state.currentKey === oldKey) {
        state.currentKey = newKey;
      }
    },
    updateProfile(state, action: PayloadAction<ResumeProfile>) {
      state.resumeMap[state.currentKey].profile = action.payload;
    },
    updateEducation(state, action: PayloadAction<{ index: number; education: ResumeEducation }>) {
      const { index, education } = action.payload;
      state.resumeMap[state.currentKey].educations[index] = education;
    },
    updateWork(state, action: PayloadAction<{ index: number; work: ResumeWork }>) {
      const { index, work } = action.payload;
      state.resumeMap[state.currentKey].works[index] = work;
    },
    updateSkill(state, action: PayloadAction<{ index: number; skill: ResumeSkill }>) {
      const { index, skill } = action.payload;
      state.resumeMap[state.currentKey].skills[index] = skill;
    }
  }
});

export const {
  addResume,
  removeResume,
  selectResume,
  setResume,
  renameResume,
  updateProfile,
  updateEducation,
  updateWork,
  updateSkill
} = resumeSlice.actions;

export const selectCurrentKey = (state: RootState) => state.resume.currentKey;
export const selectProfile = (state: RootState) =>
  state.resume.resumeMap[state.resume.currentKey].profile;
export const selectEducations = (state: RootState) =>
  state.resume.resumeMap[state.resume.currentKey].educations;
export const selectWorks = (state: RootState) =>
  state.resume.resumeMap[state.resume.currentKey].works;
export const selectSkills = (state: RootState) =>
  state.resume.resumeMap[state.resume.currentKey].skills;

export default resumeSlice.reducer;
