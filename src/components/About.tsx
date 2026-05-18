import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';

const RadialRing = ({ size, progress, color, strokeWidth = 2, delay = 0, isFluid = false }: { size: number, progress: number, color: string, strokeWidth?: number, delay?: number, isFluid?: boolean }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="absolute rotate-[-90deg]">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke="currentColor"
        className="text-zinc-800/30"
        strokeWidth={strokeWidth}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={isFluid ? { duration: 1, ease: "linear" } : { duration: 1.5, delay, ease: "easeOut" }}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default function About() {
  const [time, setTime] = useState({ y: 0, m: 0, d: 0, h: 0, min: 0, s: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(2017, 0, 21, 9, 0, 0);
      const now = new Date();
      
      let y = now.getFullYear() - start.getFullYear();
      let m = now.getMonth() - start.getMonth();
      let d = now.getDate() - start.getDate();
      let h = now.getHours() - start.getHours();
      let min = now.getMinutes() - start.getMinutes();
      let s = now.getSeconds() - start.getSeconds();

      if (s < 0) { min--; s += 60; }
      if (min < 0) { h--; min += 60; }
      if (h < 0) { d--; h += 24; }
      if (d < 0) {
        m--;
        const daysInLastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        d += daysInLastMonth;
      }
      if (m < 0) { y--; m += 12; }
      
      return { y, m, d, h, min, s };
    };

    const timer = setInterval(() => setTime(calculateTime()), 1000);
    setTime(calculateTime());
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 mb-12">
            {/* COMPACT RADIAL HUD - MATHEMATICALLY PERFECT ALIGNMENT */}
            <div className="relative w-40 h-40 flex items-center justify-center shrink-0 scale-[0.85] sm:scale-100 origin-center">
               {/* Background Glow */}
               <div className="absolute inset-2 bg-white/5 blur-3xl rounded-full" />
               
               {/* Concentric Rings - Grayscale Version */}
               <RadialRing size={160} progress={(time.s / 60) * 100} color="#ffffff" strokeWidth={2} isFluid={true} /> {/* Seconds */}
               <RadialRing size={136} progress={(time.m / 12) * 100} color="#a1a1aa" strokeWidth={2} delay={0.2} /> {/* Months */}
               <RadialRing size={112} progress={(time.d / 30) * 100} color="#71717a" strokeWidth={2} delay={0.4} /> {/* Days */}
               <RadialRing size={88} progress={(time.h / 24) * 100} color="#52525b" strokeWidth={2} delay={0.6} />  {/* Hours */}
               
               {/* Center Experience Display - Vertically Balanced */}
               <div className="relative flex flex-col items-center justify-center">
                  <span className="text-zinc-500 font-mono text-[7px] uppercase tracking-[0.2em] mb-1">Experience</span>
                  <span className="text-4xl font-black text-white leading-[0.8]">{time.y}</span>
                  <span className="text-primary font-mono text-[7px] font-bold mt-2 tracking-[0.2em]">YEARS</span>
               </div>

               {/* Decorative Crosshair Elements */}
               <div className="absolute inset-0 border border-zinc-800/20 rounded-full scale-[1.08]" />
               <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1.5 w-px bg-primary/30" />
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-px bg-primary/30" />
               <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-px bg-primary/30" />
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-px bg-primary/30" />
            </div>

            <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
              <span className="text-white font-mono text-sm block uppercase tracking-widest mb-4">About Me</span>
              <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-3 text-[9px] sm:text-[10px] font-mono text-zinc-500 uppercase tracking-tighter sm:tracking-normal">
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,0.5)]" /> Seconds</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-zinc-400 rounded-full" /> Months</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-zinc-500 rounded-full" /> Days</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-zinc-600 rounded-full" /> Hours</span>
              </div>
              <div className="mt-6 flex items-center gap-3">
                 <div className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-[10px] font-mono text-zinc-400">
                   SYNC_TIME: {String(time.h).padStart(2, '0')}:{String(time.min).padStart(2, '0')}:{String(time.s).padStart(2, '0')}
                 </div>
                 <div className="flex items-center gap-1.5 px-2.5 py-1 bg-primary/5 border border-primary/20 rounded-md text-[10px] font-mono text-primary">
                   <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                   STATUS: SENIOR_DEV
                 </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 leading-tight text-center sm:text-left">
            BRIDGING <span className="text-zinc-500">GAMING</span> & <br />
            <span className="text-gradient">RESEARCH</span>
          </h2>
          <div className="space-y-6 text-zinc-400 leading-relaxed text-base sm:text-lg font-light text-center sm:text-left">
            <p>
              Indie <span className="text-zinc-100 font-medium">Game Developer</span> and <span className="text-zinc-100 font-medium">Unity Developer</span> since 2017. 
              I specialize in <span className="text-zinc-100 font-medium">3D environment development</span>, human-robot interaction, and <span className="text-zinc-100 font-medium">gamification</span> for research applications. 
              Currently, I work as a <span className="text-zinc-100 font-medium">Research Technologist</span> in Game-Based Interaction Systems at <span className="text-white font-bold">CRS4</span>, bridging the gap between advanced research and <span className="text-zinc-100 font-medium">immersive user experiences</span>.
            </p>
            <p>
              I hold a degree in <span className="text-zinc-100 font-medium">Computer Science</span> from the University of Cagliari, with expertise in <span className="text-zinc-100 font-medium">scientific writing</span> and <span className="text-zinc-100 font-medium">technical software architecture</span>.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square glass-card rounded-3xl overflow-hidden relative group p-8 flex flex-col items-center justify-center">
            {/* Animated CRS4 Logo Simulation */}
            <motion.div 
              animate={{ rotateY: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear", delay: 2 }}
              className="relative w-64 h-64 flex items-center justify-center"
              style={{ 
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
               {/* The Primary Frame - Grayscale Version */}
               <div 
                className="absolute inset-4 border-[16px] border-white/20 rounded-[48px] rotate-[15deg] shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                style={{ transform: 'translateZ(0px)' }}
               />
               
               {/* The Sphere and Hypercubes passing through - Follow the Leader logic */}
               <div 
                 className="relative w-full h-full flex items-center justify-center"
                 style={{ transformStyle: 'preserve-3d', transform: 'translateZ(40px)' }}
               >
                  {/* Movement Keyframes for Follow-the-leader */}
                  {/* Sphere at index 0, Hypercubes at indices 1-4 */}
                  {[0, 1, 2, 3, 4].map((index) => {
                    const isSphere = index === 0;
                    // Staggered follow delay: Increase gap between sphere (0) and first cube (1)
                    const delay = index === 0 ? 0 : 0.8 + (index - 1) * 0.5;
                    
                    // Descending scale: index 1 is largest, index 4 is smallest
                    const cubeScale = 0.8 - (index * 0.1); 
                    const scaleValues = isSphere ? [0.8, 1.2, 0.8] : [cubeScale, cubeScale * 1.2, cubeScale];

                    return (
                      <motion.div
                        key={index}
                        initial={{ x: -250, opacity: 0 }}
                        animate={{ 
                          x: [-200, 200],
                          y: [0, -40, 0, 40, 0], // Sinusoidal vertical path
                          scale: scaleValues,
                          opacity: [0, 1, 0],
                          rotateX: isSphere ? 0 : [0, 360],
                          rotateY: isSphere ? 0 : [0, 360],
                        }}
                        transition={{ 
                          duration: 5, 
                          repeat: Infinity, 
                          ease: "linear",
                          delay: delay
                        }}
                        className={`absolute flex items-center justify-center ${
                          isSphere 
                            ? "w-24 h-24 bg-gradient-to-br from-white to-zinc-400 rounded-full shadow-[0_0_50px_rgba(255,255,255,0.2)] z-20" 
                            : "w-10 h-10 z-10"
                        }`}
                        style={{
                          transformStyle: "preserve-3d"
                        }}
                      >
                         {!isSphere && (
                          <div className="w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
                             {/* Hypercube: Inner wireframe box */}
                             <div 
                              className="absolute inset-1 border-[2px] border-zinc-400 opacity-60" 
                              style={{ 
                                transform: 'translateZ(5px)',
                                transformStyle: 'preserve-3d'
                              }} 
                             >
                               <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                className="w-full h-full border border-zinc-400/20"
                               />
                             </div>
                             
                             {/* Hypercube: Outer wireframe box */}
                             <div className="absolute inset-0 border-[2.5px] border-zinc-200/40" style={{ transformStyle: 'preserve-3d' }}>
                                <div className="absolute inset-0 border border-zinc-200/20" style={{ transform: 'translateZ(12px)' }} />
                                <div className="absolute inset-0 border border-zinc-200/20" style={{ transform: 'translateZ(-12px)' }} />
                                
                                {/* Connecting hyper-edges */}
                                <div className="absolute top-0 left-0 w-px h-full bg-zinc-200/10" style={{ transform: 'rotateY(90deg)' }} />
                                <div className="absolute top-0 right-0 w-px h-full bg-zinc-200/10" style={{ transform: 'rotateY(90deg)' }} />
                             </div>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
               </div>
            </motion.div>

            <a 
              href="https://www.crs4.it/people/federico-bachis/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-8 left-8 right-8 z-10 block group/link"
            >
              <div className="flex justify-between items-end bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-zinc-800 group-hover:border-white/30 group-hover:bg-black/80 transition-all duration-300">
                <div>
                   <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1 group-hover:text-white transition-colors">Company Uplink</p>
                   <p className="text-sm font-black text-zinc-100 uppercase tracking-tight">CRS4 RESEARCH</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Portfolio</p>
                   <p className="text-sm font-bold text-white italic uppercase">View Page</p>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
