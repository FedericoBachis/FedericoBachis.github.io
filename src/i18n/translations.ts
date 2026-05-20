import { Language } from './types';
import { commonText } from './common';
import { getProjectsForLang } from '../data/projects/projectMapper';
import { getSkillsForLang } from '../data/skills/skillMapper';

export type { Language };

export const translations = {
  en: {
    ...commonText.en,
    projects: {
      ...commonText.en.projects,
      data: getProjectsForLang('en')
    },
    skills_data: getSkillsForLang('en')
  },
  it: {
    ...commonText.it,
    projects: {
      ...commonText.it.projects,
      data: getProjectsForLang('it')
    },
    skills_data: getSkillsForLang('it')
  }
};
