import { useState, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Language, translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

export default function App() {
  const [language, setLanguage] = useState<Language>('en');

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className="bg-zinc-950 min-h-screen text-zinc-100 selection:bg-white/20 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Blog />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

