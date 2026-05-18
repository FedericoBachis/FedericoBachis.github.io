import { motion } from 'motion/react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';
import { Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-primary font-mono text-sm mb-4 block uppercase tracking-widest text-center">Get in touch</span>
        <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic leading-none">
          Let's Build <br />
          <span className="text-zinc-500">Something</span> <span className="text-primary">Immersive</span>
        </h2>
        
        <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto font-light">
          Whether you have a specific project in mind or just want to discuss the future of game-based interaction systems, my door is always open.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-3 px-8 py-5 bg-primary text-zinc-950 font-black rounded-2xl hover:bg-emerald-400 transition-all duration-300 w-full md:w-auto text-lg"
          >
            <Mail size={24} />
            SAY HELLO
          </motion.a>
          
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.name}
                whileHover={{ y: -5 }}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-400 hover:text-primary hover:border-primary/30 transition-all duration-300 shadow-xl"
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 inline-block px-12">
           <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs uppercase tracking-widest">
              <MessageCircle size={14} className="text-primary" />
              <span>Response time: ~24-48 hours</span>
           </div>
        </div>
      </div>
    </section>
  );
}
