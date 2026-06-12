export interface GenerateExperienceDescriptionBody {
  experienceLevel: string;
  yearsOfExperience?: string | number;
  techStack: string;
  jobRole: string;
}

export interface GenerateProjectDescriptionBody {
  experienceLevel: string;
  jobTitle: string;
  techStack: string;
}

export interface GenerateSkillsBody {
  experienceLevel: string;
  jobTitle: string;
}

export interface GenerateSummaryBody {
  experienceLevel: string;
  skills: string | string[];
  jobTitle: string;
}
