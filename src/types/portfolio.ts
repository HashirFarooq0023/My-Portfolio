export interface ProjectDetail {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'collaborative' | 'university' | 'self';
  categoryLabel: string;
  badge?: string;
  period?: string;
  courseContext?: string;
  description: string;
  technologies: string[];
  coverImage: string;
  gallery: string[];
  liveUrl?: string;
  githubUrl?: string;
  whatIBuilt?: string[];
  highlights?: string[];
  problem: {
    headline: string;
    description: string;
    points: string[];
  };
  solution: {
    headline: string;
    description: string;
    points: string[];
  };
  howWeHandledIt: {
    headline: string;
    description: string;
    steps: {
      title: string;
      detail: string;
    }[];
  };
  keyFeatures: string[];
  systemArchitecture?: string[];
  results?: string[];
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
  title: string;
  issuer: string;
  date: string;
  description: string;
  verifyUrl?: string;
  credentialId?: string;
}
