import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'home', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0);
      setIsScrolled(window.scrollY > 20);

      let current = 'home';
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = rect.top + window.scrollY - 180;
          if (window.scrollY >= offset) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-[#16171d]/90 shadow-sm' : 'bg-white/80 dark:bg-[#16171d]/80'} backdrop-blur-md border-b border-[#e5e4e7] dark:border-[#2e303a]`}>
      <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#e5e4e7]/50 dark:bg-[#2e303a]/50">
        <motion.div
          className="h-full bg-[#aa3bff] dark:bg-[#c084fc]"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('home')}
          className="text-xl font-semibold text-[#08060d] dark:text-[#f3f4f6] hover:opacity-75 transition-opacity"
        >
          Rayhan Abdallah
        </button>

        <div className="hidden md:flex items-center gap-7">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-sm font-medium transition-colors relative py-2 ${
                activeSection === id
                  ? 'text-[#aa3bff] dark:text-[#c084fc]'
                  : 'text-[#6b6375] dark:text-[#9ca3af] hover:text-[#08060d] dark:hover:text-[#f3f4f6]'
              }`}
            >
              {label}
              {activeSection === id && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#aa3bff] dark:bg-[#c084fc]"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          className="md:hidden p-2 text-[#08060d] dark:text-[#f3f4f6]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t border-[#e5e4e7] dark:border-[#2e303a]"
        >
          <div className="px-6 py-4 space-y-3">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`block w-full text-left text-sm font-medium py-2 transition-colors ${activeSection === id ? 'text-[#aa3bff] dark:text-[#c084fc]' : 'text-[#6b6375] dark:text-[#9ca3af]'}`}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
