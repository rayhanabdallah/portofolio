import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

function getClosestSection(fallback: string) {
  const focusY = 120;
  let closestId = fallback;
  let closestDistance = Number.POSITIVE_INFINITY;

  sections.forEach(({ id }) => {
    const element = document.getElementById(id);
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const distance = Math.abs(rect.top - focusY);
    if (rect.top <= window.innerHeight && rect.bottom >= 0 && distance < closestDistance) {
      closestDistance = distance;
      closestId = id;
    }
  });

  return closestId;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSectionRef = useRef(activeSection);
  const isClickScrollingRef = useRef(false);
  const clickScrollTimeoutRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const updateNavigation = () => {
      frameRef.current = null;

      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0);
      setIsScrolled(window.scrollY > 20);

      if (isClickScrollingRef.current) return;

      const bottomOffset = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
      const nextActive = bottomOffset <= 8 ? 'contact' : getClosestSection(activeSectionRef.current);

      if (activeSectionRef.current !== nextActive) {
        activeSectionRef.current = nextActive;
        setActiveSection(nextActive);
      }
    };

    const handleScroll = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(updateNavigation);
      }
    };

    updateNavigation();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
      if (clickScrollTimeoutRef.current !== null) window.clearTimeout(clickScrollTimeoutRef.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    isClickScrollingRef.current = true;
    activeSectionRef.current = id;
    setActiveSection(id);
    setIsOpen(false);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (clickScrollTimeoutRef.current !== null) window.clearTimeout(clickScrollTimeoutRef.current);
    clickScrollTimeoutRef.current = window.setTimeout(() => {
      isClickScrollingRef.current = false;
      activeSectionRef.current = id;
      setActiveSection(id);
    }, 700);
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
          onClick={() => scrollToSection('about')}
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
