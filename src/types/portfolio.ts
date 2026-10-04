export interface ProjectTechStackGroup {
  category: string;
  technologies: string[];
}

export interface ProjectHowHandledItem {
  number: string;
  title: string;
  description: string;
}

export interface ProjectArchitectureLayer {
  name: string;
  tech: string;
  description?: string;
}

export interface ProjectArchitecture {
  layers: ProjectArchitectureLayer[];
}

export interface ProjectFeatureItem {
  number: string;
  title: string;
  description: string;
}

export interface ProjectChallengeItem {
  number: string;
  title: string;
  description: string;
}

export interface ProjectLinks {
  live?: string;
  github?: string;
  video?: string;
  writeup?: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  tag?: string;
  category: 'collaborative' | 'university' | 'self' | 'ai' | 'automation' | 'fullstack';
  categoryLabel: string;
  status: string;
  shortDescription: string;
  overview: string;
  coverImage: string;
  gallery?: string[];
  problem: string;
  solution: string;
  howHandled: ProjectHowHandledItem[];
  architecture?: ProjectArchitecture;
  features: ProjectFeatureItem[];
  challenges: ProjectChallengeItem[];
  techStack: ProjectTechStackGroup[];
  links?: ProjectLinks;
  nextProjectSlug?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  points: string[];
  website?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location?: string;
}

export interface CertificationItem {
  id?: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  verifyUrl?: string;
  credentialId?: string;
  image?: string;
}

export interface TechnicalCapabilityGroup {
  category: string;
  skills: string[];
}
