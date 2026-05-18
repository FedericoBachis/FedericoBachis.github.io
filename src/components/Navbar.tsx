import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="glass-card flex items-center gap-4 md:gap-8 px-4 md:px-6 py-3 rounded-full shadow-2xl backdrop-blur-md">
        <a href="#" className="flex items-center gap-2 text-primary font-mono font-bold shrink-0">
          <Terminal size={18} />
          <span className="hidden lg:inline text-xs tracking-tighter">BACHIS_SYSTEM</span>
        </a>
        <div className="flex items-center gap-4 md:gap-6">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
