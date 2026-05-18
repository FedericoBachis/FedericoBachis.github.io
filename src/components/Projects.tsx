import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, PlayCircle, Info, ArrowRight } from 'lucide-react';
import { useLanguage } from '../App';

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  
  // Get all unique types from project data
  const types = Array.from(new Set(t.projects.data.map(p => p.type)));
  const categories = ['All', ...types];

  const filteredProjects = filter === 'All' 
    ? t.projects.data 
    : t.projects.data.filter(p => p.type === filter);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 px-6 bg-zinc-900/30 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="text-center md:text-left">
            <span className="text-white font-mono text-xs mb-4 block uppercase tracking-widest opacity-50 italic">Interactive Showcase</span>
            <h2 className="text-4xl md:text-5xl font-black italic tracking-tight uppercase">{t.projects.title} <span className="text-zinc-500">WORKS</span></h2>
          </div>
          <div className="flex flex-wrap justify-center bg-zinc-950 p-1.5 rounded-2xl border border-zinc-800 shadow-2xl backdrop-blur-sm self-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-primary text-zinc-950 px-6 font-bold' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {cat === 'All' ? (t.language === 'it' ? 'Tutti' : 'All') : cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card group rounded-3xl overflow-hidden flex flex-col h-full cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden bg-zinc-800">
                   <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                   <div className="absolute bottom-4 left-4">
                      <div className="flex gap-2">
                        {project.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="px-2 py-0.5 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-700 text-[9px] font-mono text-zinc-300 uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                   </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">{project.title}</h3>
                    <div className="p-2 rounded-lg bg-zinc-800 text-primary group-hover:bg-primary group-hover:text-zinc-950 transition-colors">
                      <project.icon size={18} />
                    </div>
                  </div>
                  
                  <p className="text-zinc-400 text-sm font-light mb-6 flex-grow leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800 mt-auto">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2 group-hover:text-white transition-colors">
                      <Info size={12} className="text-zinc-300" />
                      View Details
                    </span>
                    <ArrowRight size={16} className="text-zinc-600 group-hover:text-white transition-colors group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal / Detailed Case Study */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-zinc-950/90 backdrop-blur-md z-[60] cursor-zoom-out"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="fixed inset-4 md:inset-10 lg:inset-20 z-[70] glass-card rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-[0_0_100px_rgba(20,184,166,0.1)] border border-white/10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-primary hover:border-primary transition-all z-20"
              >
                <X size={20} />
              </button>

              {/* Visual Element Panel */}
              <div className="w-full md:w-3/5 bg-zinc-950 relative overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-zinc-800 h-64 md:h-full">
                {selectedProject.videoUrl ? (
                  <iframe 
                    src={selectedProject.videoUrl}
                    className="w-full h-full border-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                )}
                {/* Dynamic abstract shapes overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/40 to-transparent pointer-events-none" />
              </div>

              {/* Info Panel */}
              <div className="w-full md:w-2/5 p-8 md:p-12 overflow-y-auto flex flex-col bg-zinc-950/50">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-white/10 text-white border border-white/20 rounded-full text-[10px] font-mono tracking-widest uppercase">
                      {t.projects.subtitle}
                    </span>
                    <span className="text-zinc-600 font-mono text-[10px] uppercase">
                      ID: {String(t.projects.data.indexOf(selectedProject) + 1).padStart(3, '0')}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase">{selectedProject.title}</h2>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="space-y-8 mb-12">
                   <div>
                     <h4 className="text-xs font-mono text-white italic uppercase tracking-widest mb-3 opacity-50">{t.projects.challenge}</h4>
                     <p className="text-sm text-zinc-200 font-light leading-relaxed border-l-2 border-white/20 pl-4 bg-white/5 py-3 rounded-r-lg shadow-inner">
                       "{selectedProject.caseStudy?.challenge}"
                     </p>
                   </div>
                   <div className="grid grid-cols-1 gap-6">
                     <div>
                       <h4 className="text-xs font-mono text-zinc-100 uppercase tracking-widest mb-2 opacity-50">{t.projects.role}</h4>
                       <p className="text-sm text-zinc-400">{selectedProject.caseStudy?.role}</p>
                     </div>
                     <div>
                       <h4 className="text-xs font-mono text-zinc-100 uppercase tracking-widest mb-2 opacity-50">{t.projects.solution}</h4>
                       <p className="text-sm text-zinc-400 leading-relaxed font-light">
                         {selectedProject.caseStudy?.solution}
                       </p>
                     </div>
                     <div>
                       <h4 className="text-xs font-mono text-zinc-100 uppercase tracking-widest mb-2 opacity-50">{t.projects.result}</h4>
                       <p className="text-sm text-zinc-400 font-light italic">
                         {selectedProject.caseStudy?.result}
                       </p>
                     </div>
                   </div>
                </div>

                <div className="mt-auto flex flex-col gap-4">
                   <div className="flex flex-wrap gap-2 mb-4">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <a 
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-4 bg-zinc-100 text-zinc-950 rounded-xl font-bold text-xs uppercase tracking-tighter hover:bg-white transition-all shadow-lg"
                      >
                         {t.projects.visit_site}
                        <ExternalLink size={14} />
                      </a>
                      {selectedProject.demoLink && (
                         <a 
                          href={selectedProject.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-6 py-4 bg-primary text-zinc-950 rounded-xl font-bold text-xs uppercase tracking-tighter hover:bg-emerald-400 transition-all shadow-lg"
                        >
                          {t.projects.view_demo}
                          <PlayCircle size={14} />
                        </a>
                      )}
                   </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

