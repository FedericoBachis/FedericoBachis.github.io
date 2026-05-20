import { LucideIcon } from 'lucide-react';

export interface ProjectBaseItem {
  pubYear: string;
  icon: LucideIcon;
  image: string;
  link: string;
  demoLink?: string;
  videoUrl?: string;
  isPaper?: boolean;
  doi?: string;
  authors?: string;
  tags: string[];
}

export type ProjectId =
  | 'goodnightPotion'
  | 'distordi'
  | 'myStupidBigFamily'
  | 'treeOfHeroes'
  | 'digitalTwins'
  | 'conversationalNPC'
  | 'rossana'
  | 'fireEvacuation'
  | 'sarim'
  | 'outOfHere'
  | 'pinguini'
  | 'wurmSlayer'
  | 'trafficSystem';

export interface ProjectLocalizedText {
  title: string;
  type: string;
  description: string;
  journal?: string;
  pubDate?: string;
  paperSubtitle?: string;
  caseStudy?: {
    challenge: string;
    role: string;
    solution: string;
    result: string;
  };
}

export type ProjectTextMap = Record<ProjectId, ProjectLocalizedText>;

export interface ProjectItemFormatted {
  pubYear: string;
  icon: LucideIcon;
  image: string;
  link: string;
  demoLink?: string;
  videoUrl?: string;
  isPaper?: boolean;
  journal?: string;
  pubDate?: string;
  doi?: string;
  authors?: string;
  tags: string[];
  title: string;
  type: string;
  description: string;
  paperSubtitle?: string;
  caseStudy?: {
    challenge: string;
    role: string;
    solution: string;
    result: string;
  };
}
