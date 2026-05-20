import { skillBase } from './skillBase';
import { skillText } from './texts';
import { SkillItemFormatted } from './skillTypes';

export const getSkillsForLang = (lang: 'en' | 'it'): SkillItemFormatted[] => {
  return skillBase.map(s => {
    const trans = skillText[lang][s.id];
    return {
      level: s.level,
      category: trans.category,
      name: trans.name,
      description: trans.description,
      connections: trans.connections
    };
  });
};
