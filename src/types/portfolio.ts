export interface Profile {
  name: string;
  titles: string[];
  summary: string;
  aboutImage: string;
  graduation: string;
  cgpa: string;
  location: string;
  email: string;
  phone: string;
  languages: string[];
  interests: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  score: string;
  details?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  skills?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  duration?: string;
  description: string;
  image: string;
  tech: string[];
  githubLink?: string;
  liveLink?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  provider: string;
  duration: string;
  image: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ResearchPaperItem {
  title: string;
  conference: string;
  duration: string;
  description: string;
  pdfLink?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  leetcode: string;
  email: string;
  hackerrank: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  mapEmbedUrl: string;
}
