import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import { ChevronDown, Sparkles } from 'lucide-react';
import heroImg from '../imgs/hero.png';
import { useLanguage } from '../App';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] -z-10 animate-pulse delay-1000" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative mb-8 flex justify-center"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-primary/30 p-1 relative group">
             <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl group-hover:bg-primary/40 transition-all duration-500" />
             <div className="w-full h-full rounded-full overflow-hidden relative z-10 glass-card">
               {/* Hero Image with "Background Removal" Effect via CSS focus and vignette */}
               <div className="absolute inset-0 bg-zinc-950 z-0" />
               <img 
                src={heroImg} 
                alt="Federico Bachis"
                className="w-full h-full object-cover relative z-10 opacity-90 brightness-110 contrast-110"
                style={{ 
                  filter: 'drop-shadow(0 0 20px rgba(20,184,166,0.3))',
                  maskImage: 'radial-gradient(circle, black 50%, transparent 95%)',
                  WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 95%)'
                }}
                referrerPolicy="no-referrer"
               />
               {/* Sci-fi Overlay to blend focus */}
               <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(9,9,11,0.8)_80%)] pointer-events-none" />
             </div>
             {/* Decorative tech elements */}
             <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full animate-ping opacity-20" />
             <div className="absolute inset-0 border border-t-primary border-transparent rounded-full animate-[spin_4s_linear_infinite]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-6 border border-primary/20"
        >
          <Sparkles size={14} />
          <span>{t.hero.greeting}</span>
        </motion.div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-6 leading-tight uppercase">
          {PERSONAL_INFO.name.split(' ').map((part, i) => (
            <span key={i} className={i === 1 ? 'text-primary block md:inline' : 'block md:inline'}>
              {part}{' '}
            </span>
          ))}
        </h1>
        
        <p className="text-lg md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          {t.hero.description}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#projects"
            className="px-8 py-4 bg-primary text-zinc-950 font-bold rounded-lg hover:bg-emerald-400 transition-all duration-300 shadow-xl shadow-primary/10"
          >
            {t.nav.projects}
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-zinc-100 font-bold rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 shadow-xl"
          >
            {t.nav.contact}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
