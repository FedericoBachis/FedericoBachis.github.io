import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 selection:bg-primary/30 selection:text-primary-foreground">
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
  );
}

