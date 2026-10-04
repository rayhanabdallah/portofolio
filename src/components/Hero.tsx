import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ChevronDown, Mail } from 'lucide-react';
import { Github, Linkedin, Instagram } from './Icons';

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center px-6 py-16 md:py-24 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-[#aa3bff]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-[#aa3bff]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Column: Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 flex flex-col items-start text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#aa3bff]/10 dark:bg-[#c084fc]/10 border border-[#aa3bff]/30 dark:border-[#c084fc]/30 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#aa3bff] dark:bg-[#c084fc] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#aa3bff] dark:bg-[#c084fc]"></span>
            </span>
            <span className="text-xs font-medium text-[#aa3bff] dark:text-[#c084fc]">
              Currently learning AI & Software Engineering
            </span>
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-2xl md:text-3xl font-semibold text-[#08060d] dark:text-[#f3f4f6] mb-2 tracking-wide"
          >
            Rayhan Abdallah
          </motion.h2>

          <p className="text-sm font-semibold tracking-wider uppercase text-[#aa3bff] dark:text-[#c084fc] mb-6">
            Informatics Student & AI Enthusiast
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#08060d] dark:text-[#f3f4f6] leading-[1.08] tracking-tight mb-6">
            Building with Software.
            <br />
            <span className="bg-gradient-to-r from-[#aa3bff] via-[#aa3bff]/80 to-[#aa3bff]/50 dark:from-[#c084fc] dark:via-[#c084fc]/80 dark:to-[#c084fc]/50 bg-clip-text text-transparent">
              Exploring with AI.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#6b6375] dark:text-[#9ca3af] max-w-xl leading-relaxed mb-8">
            An Informatics student from Universitas Pasundan exploring software engineering, artificial intelligence, automation, and intelligent systems.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <button
              onClick={scrollToProjects}
              className="px-7 py-3 bg-[#08060d] dark:bg-[#f3f4f6] text-white dark:text-[#08060d] rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Explore My Work
            </button>
            <a
              href="https://github.com/rayhanabdallah"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 border border-[#e5e4e7] dark:border-[#2e303a] text-[#08060d] dark:text-[#f3f4f6] rounded-xl font-medium hover:bg-[#f4f3ec] dark:hover:bg-[#1f2028] transition-all duration-300 flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-2 border-t border-[#e5e4e7]/60 dark:border-[#2e303a]/60 w-full">
            <span className="text-xs text-[#6b6375] dark:text-[#9ca3af] font-medium mr-2">Connect:</span>
            <a
              href="https://github.com/rayhanabdallah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#f4f3ec] dark:bg-[#1f2028] hover:bg-[#e5e4e7] dark:hover:bg-[#2e303a] rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} className="text-[#08060d] dark:text-[#f3f4f6]" />
            </a>
            <a
              href="https://www.linkedin.com/in/rayhan-abdallah/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#f4f3ec] dark:bg-[#1f2028] hover:bg-[#e5e4e7] dark:hover:bg-[#2e303a] rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="text-[#08060d] dark:text-[#f3f4f6]" />
            </a>
            <a
              href="mailto:rayhanabdallah.dev@gmail.com"
              className="p-2.5 bg-[#f4f3ec] dark:bg-[#1f2028] hover:bg-[#e5e4e7] dark:hover:bg-[#2e303a] rounded-lg transition-colors"
              aria-label="Email"
            >
              <Mail size={18} className="text-[#08060d] dark:text-[#f3f4f6]" />
            </a>
            <a
              href="https://instagram.com/rayhnx"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#f4f3ec] dark:bg-[#1f2028] hover:bg-[#e5e4e7] dark:hover:bg-[#2e303a] rounded-lg transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} className="text-[#08060d] dark:text-[#f3f4f6]" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Premium Portrait Card with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-5 flex justify-center md:justify-end"
        >
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="perspective-1000 relative group cursor-pointer"
          >
            {/* Ambient Backlight including subtle warmth for profile background integration */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#aa3bff]/20 via-red-500/15 to-[#c084fc]/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-700" />

            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-[280px] sm:w-[320px] lg:w-[340px] aspect-[4/5] rounded-2xl bg-white dark:bg-[#1f2028] p-3 border border-[#e5e4e7] dark:border-[#2e303a] shadow-2xl transition-shadow duration-300"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#16171d] flex flex-col justify-end">
                {!imgError ? (
                  <img
                    src="./images/profile.jpg"
                    alt="Rayhan Abdallah - Informatics Student & AI Enthusiast"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-[#16171d] via-[#1f2028] to-red-950/40 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-[#aa3bff]/20 flex items-center justify-center mb-4 border border-[#aa3bff]/30">
                      <span className="text-2xl font-bold text-[#c084fc]">RA</span>
                    </div>
                    <p className="text-sm text-[#f3f4f6] font-medium">Rayhan Abdallah</p>
                    <p className="text-xs text-[#9ca3af] mt-1">Place profile.jpg in public/images/</p>
                  </div>
                )}

                {/* Subtle bottom gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-3 left-3 right-3 p-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg text-white">
                  <p className="text-xs font-semibold tracking-wide">Rayhan Abdallah</p>
                  <p className="text-[11px] text-gray-300">Cimahi, Indonesia</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToProjects}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="self-center mt-12 p-2 hover:bg-[#f4f3ec] dark:hover:bg-[#1f2028] rounded-lg transition-colors cursor-pointer"
        aria-label="Scroll to projects"
      >
        <ChevronDown size={22} className="text-[#08060d] dark:text-[#f3f4f6]" />
      </motion.button>
    </section>
  );
}
