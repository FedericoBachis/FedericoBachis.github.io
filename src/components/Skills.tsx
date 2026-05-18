import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS } from '../constants';
import { Cpu, Zap, Activity, ShieldCheck, Database, Layers, Binary, Satellite, MousePointer2, Box, Hash, Shapes, Gamepad2, Terminal, Code2, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const categoryIcons: Record<string, any> = {
  Engine: Box,
  Language: Binary,
  '3D': Layers,
  XR: Activity,
  Robotics: Cpu,
  Hardware: Zap,
  Network: Satellite,
  AR: Globe,
  Photogrammetry: Database
};

const BRAND_STYLES: Record<string, { color: string, bg: string, icon?: any }> = {
  'Unity': { color: '#ffffff', bg: 'rgba(39, 39, 42, 0.6)', icon: Box },
  'Coding': { color: '#ffffff', bg: 'rgba(39, 39, 42, 0.6)', icon: Binary },
  'C#': { color: '#ffffff', bg: 'rgba(39, 39, 42, 0.4)', icon: Hash },
  'Blender': { color: '#ffffff', bg: 'rgba(39, 39, 42, 0.3)', icon: Shapes },
  'Steam VR': { color: '#ffffff', bg: 'rgba(39, 39, 42, 0.3)', icon: Gamepad2 },
  'Meta Quest': { color: '#ffffff', bg: 'rgba(39, 39, 42, 0.2)', icon: Activity },
  'Oculus': { color: '#ffffff', bg: 'rgba(39, 39, 42, 0.2)', icon: Activity },
  'ROS': { color: '#ffffff', bg: 'rgba(39, 39, 42, 0.2)', icon: Cpu },
  'Python': { color: '#ffffff', bg: 'rgba(39, 39, 42, 0.2)', icon: Terminal },
  'Javascript': { color: '#ffffff', bg: 'rgba(39, 39, 42, 0.2)', icon: Code2 },
  'C++': { color: '#ffffff', bg: 'rgba(39, 39, 42, 0.2)', icon: Binary },
  'Arduino': { color: '#ffffff', bg: 'rgba(39, 39, 42, 0.2)', icon: Zap },
  '3DF Zephyr': { color: '#ffffff', bg: 'rgba(39, 39, 42, 0.15)', icon: Database },
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<typeof SKILLS[0] | null>(null);
  const [activeSkillName, setActiveSkillName] = useState<string | null>(null);
  const [seekerPos, setSeekerPos] = useState({ x: 0, y: 0 });
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [direction, setDirection] = useState(0); // 1 = right, -1 = left
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Grouping for the 4 specific lanes
  const laneUnityXR = ['Unity', 'XR', 'Meta Quest', 'Oculus', 'Steam VR', 'Vuforia'];
  const laneUnity3D = ['Unity', '3D Modeling', 'Blender', '3DF Zephyr', 'Photon'];
  const laneCodingBase = ['Coding', 'C#', 'Javascript', 'Python', 'C++'];
  const laneCodingRobo = ['Coding', 'Robotics', 'ROS', 'Arduino'];

  // Combined scanning sequence following the lanes
  const scanSequence = [
    ...laneUnityXR,
    ...laneUnity3D.slice(1),
    ...laneCodingBase,
    ...laneCodingRobo.slice(1)
  ];

  // Handle Resize for Mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSectionVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hoveredSkill) {
      setActiveSkillName(hoveredSkill.name);
      return;
    }

    const interval = setInterval(() => {
      handleManualNav(1);
    }, 8000); // Slower movement: 8 seconds

    return () => clearInterval(interval);
  }, [hoveredSkill, activeSkillName]);

  // Track Seeker position
  useEffect(() => {
    if (!activeSkillName || !containerRef.current || isMobile) return;

    const nodeId = `skill-${activeSkillName.replace(/\s+/g, '-').toLowerCase()}`;
    const element = document.getElementById(nodeId);
    
    if (element) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      
      setSeekerPos({
        x: elementRect.left - containerRect.left + elementRect.width / 2,
        y: elementRect.top - containerRect.top + elementRect.height / 2
      });
    }
  }, [activeSkillName, isMobile, isSectionVisible]); // Added isSectionVisible to sync when it enters viewport

  const getSkill = (name: string) => SKILLS.find(s => s.name === name);

  const handleManualNav = (dir: 1 | -1) => {
    setDirection(dir);
    setActiveSkillName(prev => {
      const currentIndex = scanSequence.indexOf(prev || '');
      let nextIndex = currentIndex + dir;
      if (nextIndex < 0) nextIndex = scanSequence.length - 1;
      if (nextIndex >= scanSequence.length) nextIndex = 0;
      return scanSequence[nextIndex];
    });
  };

  const currentDisplaySkill = SKILLS.find(s => s.name === activeSkillName);

  const slideVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "tween", duration: 0.6, ease: "linear" },
        opacity: { duration: 0.3 }
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-110%' : '110%',
      opacity: 0,
      transition: {
        x: { type: "tween", duration: 0.6, ease: "linear" },
        opacity: { duration: 0.3 }
      }
    })
  };

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-6 relative overflow-hidden bg-zinc-950">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.1),transparent_70%)]" />
        <div className="h-full w-full opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={containerRef}>
        {/* Luminous Seeker (Only on Desktop) */}
        {!isMobile && [0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ 
              x: seekerPos.x, 
              y: seekerPos.y,
              opacity: activeSkillName && isSectionVisible ? (1 - i * 0.25) : 0 
            }}
            transition={{ 
              type: "spring", 
              damping: 25 + i * 5, 
              stiffness: 100 - i * 20, // Slightly slower spring
              delay: i * 0.05 
            }}
            className="absolute top-0 left-0 z-50 pointer-events-none"
            style={{
              width: `${16 - i * 4}px`,
              height: `${16 - i * 4}px`,
              marginLeft: `-${(16 - i * 4) / 2}px`,
              marginTop: `-${(16 - i * 4) / 2}px`,
            }}
          >
            <div 
              className="w-full h-full rounded-full blur-[2px]" 
              style={{ 
                backgroundColor: '#ffffff',
                boxShadow: `0 0 ${20 - i * 5}px rgba(255,255,255,0.4)`,
                opacity: 0.5 - i * 0.15
              }} 
            />
          </motion.div>
        ))}

        <div className="text-center mb-12 md:mb-32 relative">
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 text-zinc-100 border border-zinc-800 rounded-lg text-[10px] font-mono tracking-[0.2em] uppercase mb-6">
             <Activity size={12} className="animate-pulse" />
             <span>Neural Network Sync: 100%</span>
           </div>
           
           <div className="relative">
             <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter italic text-zinc-900/30 absolute left-1/2 -top-12 md:-top-16 -translate-x-1/2 whitespace-nowrap pointer-events-none select-none z-0">
               TECH_TREE
             </h2>
             <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight relative z-10">
               SKILL <span className="text-white italic">PROGRESSION</span>
             </h2>
           </div>
        </div>

        {isMobile ? (
          /* MOBILE SLIDESHOW VIEW */
          <div className="relative px-0 py-12">
            <div className="relative h-[550px] w-full overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                {currentDisplaySkill && (
                  <motion.div
                    key={currentDisplaySkill.name}
                    custom={direction}
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute inset-0 glass-card rounded-3xl p-8 border-b-4 border-b-white/20 flex flex-col items-center"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-zinc-900 overflow-hidden">
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 8, ease: "linear" }}
                        className="origin-left h-full bg-white"
                      />
                    </div>

                    <div className="flex flex-col items-center text-center gap-6 mt-4">
                      <div className="p-4 bg-white/5 rounded-2xl text-white scale-125 mb-4">
                        {(() => {
                          const Icon = categoryIcons[currentDisplaySkill.category] || Cpu;
                          return <Icon size={48} />;
                        })()}
                      </div>
                      <div>
                        <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] mb-2">Tier {currentDisplaySkill.level} Specialized</h4>
                        <h3 className="text-3xl font-black text-white uppercase tracking-tight">{currentDisplaySkill.name}</h3>
                      </div>
                      <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-sm">
                        {currentDisplaySkill.description}
                      </p>
                      {currentDisplaySkill.connections && (
                        <div className="flex flex-wrap justify-center gap-2 mt-auto pb-4">
                          {currentDisplaySkill.connections.map(c => (
                            <span key={c} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-mono text-zinc-500 uppercase">
                              {c}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* MOBILE NAVIGATION ARROWS */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 pointer-events-none z-50">
              <button 
                onClick={() => handleManualNav(-1)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-950/90 border border-zinc-800 text-white pointer-events-auto active:scale-90 transition-transform shadow-2xl"
              >
                <ChevronLeft size={28} />
              </button>
              <button 
                onClick={() => handleManualNav(1)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-950/90 border border-zinc-800 text-white pointer-events-auto active:scale-90 transition-transform shadow-2xl"
              >
                <ChevronRight size={28} />
              </button>
            </div>
            
            <div className="flex justify-center gap-2 mt-8">
              {scanSequence.map((name) => (
                <div 
                  key={name}
                  className={`h-1.5 rounded-full transition-all duration-300 ${activeSkillName === name ? 'w-10 bg-white' : 'w-2 bg-zinc-800'}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* DESKTOP TECH TREE VIEW */
          <div className="flex flex-col gap-40">
            
            {/* UNITY BRANCH */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
              <div className="flex-shrink-0 z-30 lg:mr-16">
                <SkillNode skill={getSkill('Unity')} onHover={setHoveredSkill} size="large" isAutoActive={activeSkillName === 'Unity'} />
              </div>

              <div className="flex flex-col gap-16 flex-1 w-full relative">
                 <div className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2 w-16 h-32 border-l border-y border-zinc-800 rounded-l-3xl -z-10" />

                 <div className="flex flex-wrap items-center gap-6 lg:gap-12 justify-center lg:justify-start">
                    {['XR', 'Meta Quest', 'Oculus', 'Steam VR', 'Vuforia'].map((name, i) => (
                      <SkillNode 
                        key={name} 
                        skill={getSkill(name)} 
                        onHover={setHoveredSkill} 
                        size={i === 0 ? "medium" : "small"} 
                        isAutoActive={activeSkillName === name} 
                      />
                    ))}
                 </div>

                 <div className="flex flex-wrap items-center gap-6 lg:gap-12 justify-center lg:justify-start">
                    {['3D Modeling', 'Blender', '3DF Zephyr', 'Photon'].map((name, i) => (
                      <SkillNode 
                        key={name} 
                        skill={getSkill(name)} 
                        onHover={setHoveredSkill} 
                        size={i === 0 ? "medium" : "small"} 
                        isAutoActive={activeSkillName === name} 
                      />
                    ))}
                 </div>
              </div>
            </div>

            {/* CODING BRANCH */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 relative">
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden xl:block">
                 <span className="[writing-mode:vertical-lr] rotate-180 font-mono text-[9px] text-zinc-700 tracking-[0.4em] uppercase">Computational_Logic</span>
              </div>
              <div className="flex-shrink-0 z-30 lg:mr-16">
                <SkillNode skill={getSkill('Coding')} onHover={setHoveredSkill} size="large" isAutoActive={activeSkillName === 'Coding'} />
              </div>

              <div className="flex flex-col gap-16 flex-1 w-full relative">
                 <div className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2 w-16 h-32 border-l border-y border-zinc-800 rounded-l-3xl -z-10" />

                 <div className="flex flex-wrap items-center gap-6 lg:gap-12 justify-center lg:justify-start">
                    {['C#', 'Javascript', 'Python', 'C++'].map((name, i) => (
                      <SkillNode 
                        key={name} 
                        skill={getSkill(name)} 
                        onHover={setHoveredSkill} 
                        size={i === 0 ? "medium" : "small"} 
                        isAutoActive={activeSkillName === name} 
                      />
                    ))}
                 </div>

                 <div className="flex flex-wrap items-center gap-6 lg:gap-12 justify-center lg:justify-start">
                    {['Robotics', 'ROS', 'Arduino'].map((name, i) => (
                      <SkillNode 
                        key={name} 
                        skill={getSkill(name)} 
                        onHover={setHoveredSkill} 
                        size={i === 0 ? "medium" : "small"} 
                        isAutoActive={activeSkillName === name} 
                      />
                    ))}
                 </div>
              </div>
            </div>
          </div>
        )}

         {/* Legend */}
        <div className="mt-32 pt-12 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
           <div className="flex gap-12">
             <div className="flex flex-col gap-1">
               <span className="text-[10px] font-mono text-white uppercase tracking-[0.2em]">Tier 03</span>
               <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono">Core Mastery</span>
             </div>
             <div className="flex flex-col gap-1">
               <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em]">Tier 02</span>
               <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono">Expert Proficiency</span>
             </div>
             <div className="flex flex-col gap-1">
               <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">Tier 01</span>
               <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono">Technical Agility</span>
             </div>
           </div>

           <div className="flex items-center gap-8 opacity-40">
              <div className="flex items-center gap-2">
                 <MousePointer2 size={12} className="text-white" />
                 <span className="text-[9px] font-mono uppercase tracking-widest">Select Nodes for Bio</span>
              </div>
              <div className="w-px h-4 bg-zinc-800" />
              <p className="text-[9px] font-mono uppercase tracking-widest italic">Neural Interface Verified</p>
           </div>
        </div>
      </div>

      {/* SCI-FI POPUP OVERLAY (DESKTOP ONLY & VISIBILITY CHECK) */}
      <AnimatePresence mode="wait">
        {!isMobile && currentDisplaySkill && isSectionVisible && (
          <motion.div
            key={currentDisplaySkill.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed top-24 right-6 md:right-12 z-[100] w-72 pointer-events-none"
          >
            <div className="glass-card rounded-2xl p-6 border-r-4 border-r-white overflow-hidden relative shadow-2xl shadow-white/5">
               <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.02)_50%,transparent_100%)] bg-[size:100%_4px] animate-[pulse_2s_infinite]" />
               
               <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white">
                    {(() => {
                      const Icon = categoryIcons[currentDisplaySkill.category] || Cpu;
                      return <Icon size={18} />;
                    })()}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-none mb-1">Skill Node: {currentDisplaySkill.level}</h4>
                    <h3 className="text-lg font-bold text-zinc-100 uppercase leading-none">{currentDisplaySkill.name}</h3>
                  </div>
               </div>

               <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6 italic border-l-2 border-white/20 pl-3">
                 {currentDisplaySkill.description}
               </p>

               <div className="space-y-4">
                  <div className="flex justify-between items-end border-b border-zinc-800 pb-2">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase">Proficiency</span>
                    <span className="text-xs font-mono text-white">OPTIMIZED</span>
                  </div>
                  {currentDisplaySkill.connections && (
                    <div>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase mb-2 block">Linked Modules</span>
                      <div className="flex flex-wrap gap-2">
                        {currentDisplaySkill.connections.map(c => (
                          <span key={c} className="px-2 py-0.5 bg-zinc-950 border border-zinc-800 rounded text-[8px] font-mono text-zinc-400">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
               </div>

               <div className="absolute top-0 right-0 p-1 flex gap-1">
                 <div className="w-1 h-1 bg-primary/40 rounded-full" />
                 <div className="w-1 h-1 bg-primary/40 rounded-full" />
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

interface SkillNodeProps {
  key?: string | number;
  skill: any;
  onHover: (s: any | null) => void;
  size: 'large' | 'medium' | 'small';
  isAutoActive?: boolean;
}

function SkillNode({ skill, onHover, size, isAutoActive }: SkillNodeProps) {
  const brandStyle = BRAND_STYLES[skill.name];
  const Icon = brandStyle?.icon || categoryIcons[skill.category] || Cpu;
  const nodeId = `skill-${skill.name?.replace(/\s+/g, '-').toLowerCase()}`;

  if (!skill) return null;

  const sizeClasses = {
    large: "w-32 h-32 md:w-44 md:h-44",
    medium: "w-24 h-24 md:w-28 md:h-28",
    small: "w-16 h-16 md:w-20 md:h-20"
  };

  const iconSizes = {
    large: 32,
    medium: 22,
    small: 18
  };

  const activeState = isAutoActive;

  return (
    <motion.div
      id={nodeId}
      onMouseEnter={() => onHover(skill)}
      onMouseLeave={() => onHover(null)}
      animate={{ 
        scale: activeState ? 1.4 : 1,
        zIndex: activeState ? 50 : 10,
        opacity: activeState ? 1 : 0.6
      }}
      transition={{ 
        type: "spring", 
        damping: 30, 
        stiffness: 200 
      }}
      className={`relative group flex items-center justify-center cursor-crosshair ${sizeClasses[size]}`}
    >
      <motion.div 
        animate={{ 
          rotate: activeState ? 90 : 45,
          borderColor: activeState ? 'rgba(255, 255, 255, 0.4)' : 'rgba(82, 82, 91, 0.3)'
        }}
        className={`absolute inset-0 shadow-inner border transition-colors duration-500
          ${size === 'large' ? 'shadow-[0_0_20px_rgba(255,255,255,0.01)]' : ''}
          ${activeState ? 'shadow-[0_0_20px_rgba(255,255,255,0.1)]' : ''}`}
        style={{ 
          backgroundColor: activeState ? 'rgba(255, 255, 255, 0.05)' : 'rgba(24, 24, 27, 0.4)',
        }}
      />

      <AnimatePresence>
        {activeState && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 bg-white/10 blur-xl rounded-full -z-10"
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center gap-3 px-2 text-center pointer-events-none">
        <motion.div 
          animate={{ scale: activeState ? 1.2 : 1 }}
          className={`p-2 rounded-xl transition-all duration-500`}
          style={{ 
            color: activeState ? '#ffffff' : '#71717a',
            filter: activeState ? 'drop-shadow(0 0 12px rgba(255,255,255,0.3))' : 'none'
          }}
        >
          <Icon size={iconSizes[size]} />
        </motion.div>
        <span 
          className={`font-mono uppercase tracking-[0.1em] font-bold leading-tight transition-all duration-300 max-w-[80px]
            ${size === 'large' ? 'text-xs text-zinc-100' : 'text-[9px] text-zinc-500'} 
            ${activeState ? 'text-white' : ''}`}
          style={{
            textShadow: activeState ? '0 0 12px rgba(255,255,255,0.3)' : 'none'
          }}
        >
          {skill.name}
        </span>
      </div>

      {size === 'large' && (
        <>
          <div className={`absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 transition-colors duration-300
            ${activeState ? 'border-white' : 'border-zinc-800'}`} />
          <div className={`absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 transition-colors duration-300
            ${activeState ? 'border-white' : 'border-zinc-800'}`} />
        </>
      )}
    </motion.div>
  );
}


