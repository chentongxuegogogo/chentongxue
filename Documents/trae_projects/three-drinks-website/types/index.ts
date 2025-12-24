export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  xhsUrl: string;
  email?: string;
  socialLinks: SocialLink[];
}

export interface PhotographyProject {
  id: string;
  title: string;
  date: string;
  location?: string;
  coverImage: string;
  images: string[];
  description?: string;
}

export interface Article {
  id: string;
  title: string;
  url: string;
  date: string;
  tags: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  school: string;
  degree: string;
  year: string;
}

export interface Resume {
  pdfUrl: string;
  highlights: string[];
  experience: Experience[];
  education: Education[];
  skills: string[];
}

export interface SiteData {
  profile: Profile;
  photography: PhotographyProject[];
  articles: Article[];
  resume: Resume;
}
