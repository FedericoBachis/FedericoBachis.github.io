export type SkillId =
  | 'coding'
  | 'unity'
  | 'csharp'
  | 'modeling'
  | 'xr'
  | 'robotics'
  | 'blender'
  | 'quest'
  | 'oculus'
  | 'steamvr'
  | 'ros'
  | 'arduino'
  | 'photon'
  | 'javascript'
  | 'python'
  | 'cpp'
  | 'vuforia'
  | 'zephyr';

export interface SkillBaseItem {
  id: SkillId;
  level: number;
}

export interface SkillLocalizedText {
  category: string;
  name: string;
  description: string;
  connections?: string[];
}

export type SkillTextMap = Record<SkillId, SkillLocalizedText>;

export interface SkillItemFormatted {
  level: number;
  category: string;
  name: string;
  description: string;
  connections?: string[];
}
