import { z } from 'zod';
import {
  profileSchema,
  dateSchema,
  educationSchema,
  projectSchema,
  workSchema,
  skillSchema
} from './schema';

export type ResumeDate = z.infer<typeof dateSchema>;

export type ResumeProfile = z.infer<typeof profileSchema>;

export type ResumeEducation = z.infer<typeof educationSchema>;

export type ResumeProject = z.infer<typeof projectSchema>;

export type ResumeWork = z.infer<typeof workSchema>;

export type ResumeSkill = z.infer<typeof skillSchema>;

export interface Resume {
  profile: ResumeProfile;
  educations: ResumeEducation[];
  works: ResumeWork[];
  skills: ResumeSkill[];
}

// version control
export interface ResumeMap {
  [key: string]: Resume;
}

export interface ResumeState {
  resumes: ResumeMap;
  currentResumeId: string;
}
