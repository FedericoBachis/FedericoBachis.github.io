import { projectBase } from './projectBase';
import { projectText } from './texts';
import { ProjectId, ProjectItemFormatted } from './projectTypes';

export const getProjectsForLang = (lang: 'en' | 'it'): ProjectItemFormatted[] => {
  return (Object.keys(projectBase) as ProjectId[]).map(key => {
    const p = projectBase[key];
    const textObj = projectText[lang][key];
    return {
      pubYear: p.pubYear,
      icon: p.icon,
      image: p.image,
      link: p.link,
      demoLink: p.demoLink,
      videoUrl: p.videoUrl,
      isPaper: p.isPaper,
      doi: p.doi,
      authors: p.authors,
      tags: p.tags,
      title: textObj.title,
      type: textObj.type,
      description: textObj.description,
      journal: textObj.journal,
      pubDate: textObj.pubDate,
      paperSubtitle: textObj.paperSubtitle,
      caseStudy: textObj.caseStudy ? {
        challenge: textObj.caseStudy.challenge,
        role: textObj.caseStudy.role,
        solution: textObj.caseStudy.solution,
        result: textObj.caseStudy.result
      } : undefined
    };
  });
};
