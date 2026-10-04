import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import BuildingShowcase from './components/BuildingShowcase';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Journey from './components/Journey';
import GitHubSection from './components/GitHubSection';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AskRayhan from './components/AskRayhan';
import SceneTransition from './components/SceneTransition';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const updateCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('nav')) {
        setIsPointer(false);
        setCursorPos({ x: -100, y: -100 });
        return;
      }
      setCursorPos({ x: e.clientX, y: e.clientY });
      setIsPointer(Boolean(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ));
    };

    window.addEventListener('mousemove', updateCursor);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <div className="relative overflow-x-clip selection:bg-[#aa3bff]/20 dark:selection:bg-[#c084fc]/20">
      {!isMobile && (
        <div
          className={`fixed pointer-events-none z-[100] rounded-full transition-transform duration-100 mix-blend-difference ${
            isPointer ? 'w-8 h-8 -ml-4 -mt-4 bg-white/40 scale-125' : 'w-4 h-4 -ml-2 -mt-2 bg-white/60'
          }`}
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        />
      )}

      <Navbar />
      <main className="relative">
        <Hero />
        <SceneTransition tone="bg-gradient-to-b from-white via-[#f8f7fb] to-white dark:from-[#16171d] dark:via-[#191722] dark:to-[#16171d]">
          <About />
        </SceneTransition>
        <SceneTransition tone="bg-white dark:bg-[#16171d]">
          <CurrentlyBuilding />
        </SceneTransition>
        <SceneTransition tone="bg-gradient-to-b from-[#fbfaff] via-[#f5f1ff] to-white dark:from-[#171520] dark:via-[#1b1726] dark:to-[#16171d] shadow-[0_-18px_50px_rgba(76,29,149,0.05)]">
          <BuildingShowcase />
        </SceneTransition>
        <SceneTransition tone="bg-white dark:bg-[#16171d]">
          <Projects />
        </SceneTransition>
        <SceneTransition tone="bg-gradient-to-b from-[#fafafa] to-white dark:from-[#191a20] dark:to-[#16171d]">
          <Skills />
        </SceneTransition>
        <SceneTransition tone="bg-[#f9f8fc] dark:bg-[#181720]">
          <Education />
        </SceneTransition>
        <SceneTransition tone="bg-white dark:bg-[#16171d]">
          <Certifications />
        </SceneTransition>
        <SceneTransition tone="bg-gradient-to-b from-[#faf9fc] to-white dark:from-[#191822] dark:to-[#16171d]">
          <Journey />
        </SceneTransition>
        <SceneTransition tone="bg-white dark:bg-[#16171d]">
          <GitHubSection />
        </SceneTransition>
        <SceneTransition tone="bg-[#faf9fc] dark:bg-[#181720]">
          <Terminal />
        </SceneTransition>
        <SceneTransition tone="bg-gradient-to-b from-[#f2effb] to-[#eae6f6] dark:from-[#171520] dark:to-[#111218]">
          <Contact />
        </SceneTransition>
      </main>
      <Footer />
      <AskRayhan />
    </div>
  );
}

export default App;
