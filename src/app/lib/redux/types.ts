export interface ResumeDate {
  start: Date;
  end: Date;
}

export interface ResumeProfile {
  name: string;
  email: string;
  phone: string;
  location: string;
  targetPosition: string;
  age?: number;
  url?: string;
}

export interface ResumeEducation {
  institution: string;
  degree: string;
  date: ResumeDate;
  score: number;
  awards: string[];
}

export interface ResumeProject {
  name: string;
  date: ResumeDate;
  descriptions: string[];
}

export interface ResumeWork {
  company: string;
  position: string;
  location: string;
  date: ResumeDate;
  projects: ResumeProject[];
}

export interface ResumeSkill {
  name: string;
  level: string;
}

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
