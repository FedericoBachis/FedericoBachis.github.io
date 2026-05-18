import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../constants';
import { ExternalLink, X, PlayCircle, Info, ArrowRight } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const categories = ['All', 'Videogame', 'Research', 'Boardgame'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.type === filter);

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
            <span className="text-primary font-mono text-sm mb-4 block uppercase tracking-widest">Interactive Showcase</span>
            <h2 className="text-4xl md:text-5xl font-black italic tracking-tight uppercase">SELECTED <span className="text-zinc-500">WORKS</span></h2>
          </div>
          <div className="flex bg-zinc-950 p-1.5 rounded-2xl border border-zinc-800 shadow-2xl backdrop-blur-sm self-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-primary text-zinc-950' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {cat}
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
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                      <Info size={12} className="text-primary" />
                      View Details
                    </span>
                    <ArrowRight size={16} className="text-zinc-600 group-hover:text-primary transition-colors group-hover:translate-x-1" />
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
              className="fixed inset-4 md:inset-10 lg:inset-20 z-[70] glass-card rounded-[2rem] overflow-hidden flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-primary transition-all z-10"
              >
                <X size={20} />
              </button>

              {/* Visual Element Panel */}
              <div className="w-full md:w-3/5 bg-zinc-950 relative overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-zinc-800">
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
              <div className="w-full md:w-2/5 p-8 md:p-12 overflow-y-auto flex flex-col">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] font-mono tracking-widest uppercase">
                      Case Study
                    </span>
                    <span className="text-zinc-600 font-mono text-[10px] uppercase">
                      Project {filteredProjects.indexOf(selectedProject) + 1}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase">{selectedProject.title}</h2>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="space-y-8 mb-12">
                   <div>
                     <h4 className="text-xs font-mono text-primary uppercase tracking-widest mb-3">The Challenge</h4>
                     <p className="text-sm text-zinc-300 font-light leading-relaxed italic border-l-2 border-primary/30 pl-4">
                       "{selectedProject.caseStudy?.challenge}"
                     </p>
                   </div>
                   <div>
                     <h4 className="text-xs font-mono text-zinc-100 uppercase tracking-widest mb-2">My Role</h4>
                     <p className="text-sm text-zinc-400">{selectedProject.caseStudy?.role}</p>
                   </div>
                   <div>
                     <h4 className="text-xs font-mono text-zinc-100 uppercase tracking-widest mb-2">The Solution</h4>
                     <p className="text-sm text-zinc-400 leading-relaxed">
                       {selectedProject.caseStudy?.solution}
                     </p>
                   </div>
                   <div>
                     <h4 className="text-xs font-mono text-zinc-100 uppercase tracking-widest mb-2">Result</h4>
                     <p className="text-sm text-zinc-400">
                       {selectedProject.caseStudy?.result}
                     </p>
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
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-950 rounded-xl font-bold text-sm hover:bg-white transition-all shadow-lg"
                      >
                        Project Link
                        <ExternalLink size={16} />
                      </a>
                      {selectedProject.demoLink && (
                         <a 
                          href={selectedProject.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-zinc-950 rounded-xl font-bold text-sm hover:bg-emerald-400 transition-all shadow-lg"
                        >
                          Play Demo
                          <PlayCircle size={16} />
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

