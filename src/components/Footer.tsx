import { useLanguage } from '../App';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8">
        <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em] order-2 md:order-1 text-center md:text-left">
          {t.footer.rights} | 🄯 Federico Bachis {currentYear}
        </div>
        
        <div className="flex justify-center gap-8 order-1 md:order-2">
           <a href="#about" className="text-zinc-500 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-mono">{t.nav.about}</a>
           <a href="#projects" className="text-zinc-500 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-mono">{t.nav.projects}</a>
           <a href="#" className="text-zinc-500 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-mono">Top</a>
        </div>

        <div className="text-zinc-700 font-mono text-[10px] uppercase tracking-tighter cursor-default order-3 text-center md:text-right">
           {t.footer.location}
        </div>
      </div>
    </footer>
  );
}
