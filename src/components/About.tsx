import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../App';

const RadialRing = ({ size, progress, color, strokeWidth = 2, isReversed = false }: { size: number, progress: number, color: string, strokeWidth?: number, isReversed?: boolean }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className={`absolute rotate-[-90deg] ${isReversed ? 'scale-x-[-1]' : ''}`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke="currentColor"
        className="text-zinc-800/30"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default function About() {
  const { t } = useLanguage();
  const [time, setTime] = useState({ y: 0, pMin: 0, pHr: 0, pDay: 0, pMonth: 0 });

  useEffect(() => {
    let requestRef: number;
    
    const calculateTime = () => {
      const start = new Date(2017, 0, 1);
      const now = new Date();
      
      let y = now.getFullYear() - start.getFullYear();
      let m = now.getMonth() - start.getMonth();
      let d = now.getDate() - start.getDate();
      
      if (d < 0) {
        m--;
        const daysInLastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        d += daysInLastMonth;
      }
      if (m < 0) { y--; m += 12; }

      // smooth fractions
      const ms = now.getMilliseconds();
      const s = now.getSeconds() + ms / 1000;
      const min = now.getMinutes() + s / 60;
      const h = now.getHours() + min / 60;
      const date = now.getDate() + (h / 24);
      const month = now.getMonth();
      const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

      const pMin = (min / 60) * 100;
      const pHr = (h / 24) * 100;
      const pDay = (date / daysInMonth) * 100;
      const pMonth = ((month + (date / daysInMonth)) / 12) * 100;
      
      setTime({ y, pMin, pHr, pDay, pMonth });
      requestRef = requestAnimationFrame(calculateTime);
    };

    requestRef = requestAnimationFrame(calculateTime);
    return () => cancelAnimationFrame(requestRef);
  }, []);

  const renderFormattedText = (text: string) => {
    return text.split('**').map((part, i) => 
      i % 2 === 1 ? <span key={i} className="text-zinc-100 font-medium">{part}</span> : part
    );
  };

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr] gap-16 lg:gap-24 items-start">
        {/* Left Column: Headline and Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 leading-[0.9] uppercase">
            BRIDGING <span className="text-zinc-500">GAMING</span> & <br />
            <span className="text-primary italic">RESEARCH</span>
          </h2>
          <div className="space-y-8 text-zinc-400 leading-relaxed text-lg font-light">
            <p className="text-xl text-zinc-300 font-normal">
              {renderFormattedText(t.about.bio1)}
            </p>
            <p>{renderFormattedText(t.about.bio2)}</p>
            <p>{renderFormattedText(t.about.bio3)}</p>
          </div>
        </motion.div>

        {/* Right Column: Logo on top, HUD below */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          {/* Logo Card with button at top */}
          <div className="aspect-[4/3] glass-card rounded-3xl overflow-hidden relative group p-8 flex flex-col items-center justify-center mb-12">
            {/* Button on top */}
            <a 
              href="https://www.crs4.it/people/federico-bachis/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-8 left-8 right-8 z-20 block group/link"
            >
              <div className="flex justify-between items-center bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-zinc-800 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                <div>
                   <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-0.5 group-hover:text-primary transition-colors">{t.about.uplink}</p>
                   <p className="text-xs font-black text-zinc-100 uppercase tracking-tight">CRS4 RESEARCH</p>
                </div>
                <div className="text-right">
                   <p className="text-xs font-bold text-primary italic uppercase flex items-center gap-2">
                     {t.about.view_page}
                   </p>
                </div>
              </div>
            </a>

            {/* Animated Logo */}
            <div 
              className="relative w-48 h-48 flex items-center justify-center mt-8"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
               {/* Linear Moving Elements - Positioned behind (translateZ) */}
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(-40px)' }}>
                  {[0, 1, 2, 3].map((index) => {
                    const isSphere = index === 0;
                    const delay = index * 0.6; // Staggered entry
                    return (
                      <motion.div
                        key={index}
                        initial={{ x: -180, opacity: 0 }}
                        animate={{ 
                          x: [-180, 180],
                          y: [0, -40, 0, 40, 0], // Oscillatory motion increased
                          opacity: [0, 1, 1, 0],
                        }}
                        transition={{ 
                           duration: 4, 
                           repeat: Infinity, 
                           ease: "linear", 
                           delay: delay 
                        }}
                        className={`absolute flex items-center justify-center ${
                          isSphere 
                            ? "w-12 h-12 bg-gradient-to-br from-primary to-emerald-600 rounded-full shadow-[0_0_30px_rgba(20,184,166,0.4)]" 
                            : "w-5 h-5 border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] bg-white/10"
                        }`}
                        style={{ 
                           transformStyle: "preserve-3d" 
                        }}
                      />
                    );
                  })}
               </div>

               {/* Primary Rotating Frame - Positioned in front */}
               <motion.div 
                animate={{ rotateY: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute inset-4 border-[12px] border-primary/20 rounded-[40px] shadow-[0_0_20px_rgba(20,184,166,0.1)]"
                style={{ 
                  transformStyle: 'preserve-3d', 
                  translateZ: '0px',
                  rotate: '15deg'
                }}
               />
            </div>
          </div>

          {/* Stats Bar Below Logo */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 bg-zinc-950/50 p-8 rounded-3xl border border-white/5">
             <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <h3 className="text-primary font-mono text-xs block uppercase tracking-[0.3em] mb-6">{t.about.title}</h3>
                <div className="grid grid-cols-1 gap-y-2 text-[10px] font-mono uppercase tracking-widest">
                  <span className="flex items-center gap-2 text-primary"><div className="w-1 h-1 bg-primary rounded-full" /> {t.about.minutes}</span>
                  <span className="flex items-center gap-2 text-purple-400"><div className="w-1 h-1 bg-purple-400 rounded-full" /> {t.about.hours}</span>
                  <span className="flex items-center gap-2 text-indigo-400"><div className="w-1 h-1 bg-indigo-400 rounded-full" /> {t.about.days}</span>
                  <span className="flex items-center gap-2 text-sky-400"><div className="w-1 h-1 bg-sky-400 rounded-full" /> {t.about.months}</span>
                </div>
             </div>

             {/* Experience HUD on the Right */}
             <div className="relative w-40 h-40 flex items-center justify-center shrink-0">
                <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
                <RadialRing size={160} progress={time.pMin} color="#14b8a6" strokeWidth={2} /> 
                <RadialRing size={136} progress={time.pHr} color="#a855f7" strokeWidth={2} isReversed={true} /> 
                <RadialRing size={112} progress={time.pDay} color="#818cf8" strokeWidth={2} /> 
                <RadialRing size={88} progress={time.pMonth} color="#38bdf8" strokeWidth={2} isReversed={true} />  
                
                <div className="relative flex flex-col items-center justify-center">
                   <span className="text-3xl font-black text-primary leading-[0.8]">{time.y}</span>
                </div>

                <div className="absolute inset-0 border border-primary/10 rounded-full scale-[1.05]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1.5 w-px bg-primary/30" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-px bg-primary/30" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-px bg-primary/30" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-px bg-primary/30" />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
