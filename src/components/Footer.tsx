export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em]">
          Federico Bachis © {currentYear}
        </div>
        
        <div className="flex gap-8">
           <a href="#about" className="text-zinc-500 hover:text-zinc-300 transition-colors text-xs uppercase tracking-widest font-mono">About</a>
           <a href="#projects" className="text-zinc-500 hover:text-zinc-300 transition-colors text-xs uppercase tracking-widest font-mono">Projects</a>
           <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors text-xs uppercase tracking-widest font-mono">Back to top</a>
        </div>

        <div className="text-zinc-700 font-mono text-[10px] uppercase tracking-tighter cursor-default">
           Built with Unity Minds & Modern Code
        </div>
      </div>
    </footer>
  );
}
