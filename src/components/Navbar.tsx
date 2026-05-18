import { motion } from 'motion/react';
import { Terminal, Globe } from 'lucide-react';
import { useLanguage } from '../App';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="glass-card flex items-center gap-4 md:gap-8 px-4 md:px-6 py-3 rounded-full shadow-2xl backdrop-blur-md border border-white/10">
        <a href="#" className="flex items-center gap-2 text-primary font-mono font-bold shrink-0 hover:text-emerald-400 transition-colors">
          <Terminal size={18} className="text-primary" />
          <span className="hidden lg:inline text-xs tracking-tighter text-white">FB_Dev</span>
        </a>
        <div className="flex items-center gap-4 md:gap-6">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <div className="w-px h-4 bg-zinc-800" />
        
        <button 
          onClick={() => setLanguage(language === 'en' ? 'it' : 'en')}
          className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-[10px] font-mono uppercase tracking-tighter"
        >
          <Globe size={14} className="text-zinc-500" />
          <span>{language === 'en' ? 'IT' : 'EN'}</span>
        </button>
      </div>
    </motion.nav>
  );
}
