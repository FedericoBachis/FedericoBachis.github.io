import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ArrowRight, X, ChevronDown, Clock, Tag } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: "The VR Frontier: Beyond Visual Immersion",
    date: "April 20, 2026",
    category: "Virtual Reality",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800&auto=format&fit=crop",
    excerpt: "Lo stato dell'arte del VR sta virando verso la multisensorialità. Non si tratta più solo di risoluzione dei display, ma di feedback aptico e latenza neurale.\nStiamo entrando in un'era dove il confine tra fisico e digitale svanisce grazie a Digital Twin sempre più complessi.",
    content: `Lo stato dell'arte della Virtual Reality (VR) nel 2026 ha superato la semplice sfida della risoluzione visiva. Grazie all'integrazione di pannelli micro-OLED ad altissima densità e foveated rendering avanzato, l'effetto "screen-door" è ormai un ricordo del passato. Tuttavia, la vera rivoluzione risiede nel feedback aptico e nell'interazione naturale.
    
    Oggi, lo sviluppo si concentra sulla creazione di Digital Twin persistenti e collaborativi. In ambiti di ricerca come quelli seguiti al CRS4, la VR non è più solo uno strumento di visualizzazione, ma un laboratorio di interazione uomo-macchina. L'integrazione con sistemi robotici (Human-Robot Interaction) permette di operare in ambienti virtuali che hanno ripercussioni fisiche immediate, aprendo la strada a nuove frontiere per la telemedicina e la conservazione dei beni culturali.
    
    Il futuro prossimo vedrà l'abbandono definitivo dei controller tradizionali a favore di un hand-tracking millimetrico potenziato da guanti aptici leggeri, rendendo l'immersione totale non solo visiva, ma anche tattile e cinetica.`
  },
  {
    id: 2,
    title: "AI & Synthesis: The New Creative Companion",
    date: "April 15, 2026",
    category: "Artificial Intelligence",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    excerpt: "L'Intelligenza Artificiale Generativa sta riscrivendo le regole del level design e del coding. Non è più uno strumento esterno, ma un partner integrato.\nLa sfida attuale è il controllo: come guidare l'AI per ottenere risultati coerenti con la visione artistica dell'autore.",
    content: `L'AI Generativa ha smesso di essere una curiosità per diventare il motore pulsante del moderno Game Development. Nel 2026, l'uso di LLM (Large Language Models) specializzati nel coding assistito ha drasticamente ridotto i tempi di prototipazione, permettendo agli sviluppatori di concentrarsi sulla logica di alto livello e sull'architettura dei sistemi.
    
    Nello sviluppo di ambienti 3D, l'AI procedurale assistita permette di generare asset e texture uniche in tempo reale, abbattendo i costi di produzione senza sacrificare la qualità. La frontiera attuale è l'AI-Driven Interaction: NPC che non seguono script prefissati, ma reagiscono organicamente alle azioni e al linguaggio del giocatore tramite sintesi vocale e comprensione semantica immediata.
    
    La vera sfida per noi sviluppatori Unity e tecnologi della ricerca è l'orchestrazione: bilanciare l'imprevedibilità creativa dell'AI con la necessità di sistemi robusti, sicuri e deterministici, specialmente in applicazioni scientifiche e cardgames dove la strategia è fondamentale.`
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null);

  return (
    <section id="blog" className="py-24 px-6 bg-zinc-950/50 relative overflow-hidden">
      {/* Decorative bg element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-10">
          <div className="text-center md:text-left">
            <span className="text-primary font-mono text-sm mb-4 block uppercase tracking-widest">Knowledge Base</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              LATEST <span className="text-zinc-500 italic">LOGS</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-mono text-[10px] max-w-xs text-center md:text-right border-zinc-800 md:border-r-2 md:border-primary/30 md:pr-6 leading-relaxed opacity-60">
            REGULAR SYSTEM UPDATES ON VR EVOLUTION <br className="hidden md:block" /> AND AI INTEGRATION ARCHITECTURES.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl overflow-hidden group border border-zinc-800/50 hover:border-primary/30 transition-all duration-500"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute top-4 left-4">
                   <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono text-primary uppercase">
                     {post.category}
                   </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {post.readTime}
                  </div>
                  <div className="w-1 h-1 bg-zinc-800 rounded-full" />
                  <span>{post.date}</span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-zinc-100 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-zinc-400 font-light mb-8 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <button 
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary hover:text-white transition-colors group/btn"
                >
                  Expand Data
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL OVERLAY */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-zinc-950/90 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-900 border border-zinc-800 rounded-[40px] overflow-hidden flex flex-col shadow-2xl"
            >
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 z-20 p-2 bg-zinc-800/50 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-all border border-white/5"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto custom-scrollbar">
                <div className="w-full aspect-[21/9] relative">
                  <img src={selectedPost.image} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                </div>

                <div className="p-8 md:p-16">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-xs font-mono uppercase">
                      {selectedPost.category}
                    </span>
                    <span className="text-zinc-500 font-mono text-xs">{selectedPost.date}</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tight leading-tight">
                    {selectedPost.title}
                  </h2>

                  <div className="prose prose-invert max-w-none text-zinc-400 text-lg font-light leading-relaxed space-y-6">
                    {selectedPost.content.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-16 pt-8 border-t border-zinc-800 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                       <Tag size={16} className="text-primary" />
                       <span className="text-xs font-mono text-zinc-500">TAGS: AI, VR, INNOVATION, RESEARCH</span>
                    </div>
                    <button 
                      onClick={() => setSelectedPost(null)}
                      className="text-xs font-mono text-zinc-500 hover:text-white uppercase tracking-widest"
                    >
                      Close Entry
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
