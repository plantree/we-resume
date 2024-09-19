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
  ResumeDate,
  ResumeState
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
  start: '',
  end: ''
};

export const initialEducation: ResumeEducation = {
  institution: '',
  degree: '',
  date: initialDate,
  awards: []
};

export const initialProject: ResumeProject = {
  name: '',
  date: initialDate,
  link: '',
  descriptions: []
};

export const initialWork: ResumeWork = {
  company: '',
  position: '',
  location: '',
  date: initialDate
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

export const initialResumeState: ResumeState = {
  resumes: initialResumeMap,
  // current version
  currentResumeId: 'default'
};

export const resumeSlice = createSlice({
  name: 'resume',
  initialState: initialResumeState,
  reducers: {
    setResumeState(state, action: PayloadAction<ResumeState>) {
      state.resumes = action.payload.resumes;
      state.currentResumeId = action.payload.currentResumeId;
    },
    addResume(state, action: PayloadAction<string>) {
      state.resumes[action.payload] = initialResume;
      state.currentResumeId = action.payload;
    },
    removeResume(state, action: PayloadAction<string>) {
      delete state.resumes[action.payload];
    },
    selectResume(state, action: PayloadAction<string>) {
      state.currentResumeId = action.payload;
    },
    setResume(state, action: PayloadAction<Resume>) {
      state.resumes[state.currentResumeId] = action.payload;
    },
    renameResume(state, action: PayloadAction<{ oldKey: string; newKey: string }>) {
      const { oldKey, newKey } = action.payload;
      state.resumes[newKey] = state.resumes[oldKey];
      delete state.resumes[oldKey];
      if (state.currentResumeId === oldKey) {
        state.currentResumeId = newKey;
      }
    },
    updateProfile(state, action: PayloadAction<ResumeProfile>) {
      state.resumes[state.currentResumeId].profile = action.payload;
    },
    updateEducation(state, action: PayloadAction<{ index: number; education: ResumeEducation }>) {
      const { index, education } = action.payload;
      state.resumes[state.currentResumeId].educations[index] = education;
    },
    updateWork(state, action: PayloadAction<{ index: number; work: ResumeWork }>) {
      const { index, work } = action.payload;
      state.resumes[state.currentResumeId].works[index] = work;
    },
    updateSkill(state, action: PayloadAction<{ index: number; skill: ResumeSkill }>) {
      const { index, skill } = action.payload;
      state.resumes[state.currentResumeId].skills[index] = skill;
    }
  }
});

export const {
  setResumeState,
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

export const selectCurrentKey = (state: RootState) => state.resume.currentResumeId;
export const selectProfile = (state: RootState) =>
  state.resume.resumes[state.resume.currentResumeId].profile;
export const selectEducations = (state: RootState) =>
  state.resume.resumes[state.resume.currentResumeId].educations;
export const selectWorks = (state: RootState) =>
  state.resume.resumes[state.resume.currentResumeId].works;
export const selectSkills = (state: RootState) =>
  state.resume.resumes[state.resume.currentResumeId].skills;

export default resumeSlice.reducer;
