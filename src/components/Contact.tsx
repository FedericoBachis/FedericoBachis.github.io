import { motion } from 'motion/react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';
import { Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../App';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-primary font-mono text-sm mb-4 block uppercase tracking-widest text-center">{t.contact.subtitle}</span>
        <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic leading-none">
          {t.contact.header_line1} <br />
          <span className="text-zinc-500">{t.contact.header_line2}</span> <span className="text-primary">{t.contact.header_line3}</span>
        </h2>
        
        <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          {t.contact.description}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-3 px-8 py-5 bg-primary text-zinc-950 font-black rounded-2xl hover:bg-emerald-400 transition-all duration-300 w-full md:w-auto text-lg uppercase tracking-tighter"
          >
            <Mail size={24} />
            {t.contact.button}
          </motion.a>
          
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.name}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
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
           <div className="flex items-center gap-2 text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em]">
              <MessageCircle size={14} className="text-primary" />
              <span>{t.contact.response_time}</span>
           </div>
        </div>
      </div>
    </section>
  );
}
