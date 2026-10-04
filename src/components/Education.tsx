import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

interface EducationItem {
  id: string;
  type: string;
  title: string;
  logo: string;
  program?: string;
  status?: string;
  location?: string;
  duration?: string;
  issueDate?: string;
  certificateId?: string;
  tooltip: string;
  highlight?: boolean;
}

const educationData: EducationItem[] = [
  {
    id: 'sma5',
    type: 'EDUCATION',
    title: 'SMA Negeri 5 Cimahi',
    logo: './images/education/sma5.png',
    status: 'Graduated',
    tooltip: 'High School',
  },
  {
    id: 'unpas',
    type: 'UNIVERSITY',
    title: 'Universitas Pasundan',
    logo: './images/education/unpas.png',
    program: 'Teknik Informatika',
    status: 'Currently Studying',
    location: 'Cimahi / Bandung area',
    tooltip: 'Current University',
    highlight: true,
  },
  {
    id: 'revou',
    type: 'BOOTCAMP',
    title: 'RevoU Coding Camp',
    logo: './images/bootcamps/revou.webp',
    program: 'Intro to Software Engineering',
    status: 'Certificate of Attendance',
    duration: '1-week certified online course',
    issueDate: '28 August 2026',
    certificateId: 'CCSE-240826-01-1-00044',
    tooltip: 'Software Engineering Bootcamp',
  },
  {
    id: 'hacktiv8',
    type: 'BOOTCAMP',
    title: 'Hacktiv8 × IBM SkillsBuild',
    logo: './images/bootcamps/hacktiv8.png',
    program: 'IT - AI Agent for Programming',
    status: 'Completed',
    duration: '9 hours',
    issueDate: '01 September 2026',
    certificateId: '12319/H8/CSR/ISUE/V/2026',
    tooltip: 'AI Agent for Programming',
  },
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10% 0px' });

  return (
    <section id="education" className="px-6 py-24 bg-[#f4f3ec]/40 dark:bg-[#16171d]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#aa3bff]/10 dark:bg-[#c084fc]/10 border border-[#aa3bff]/30 dark:border-[#c084fc]/30 rounded-full mb-4">
            <span className="text-xs font-medium text-[#aa3bff] dark:text-[#c084fc]">
              Academic & Professional
            </span>
          </div>
          <h2 className="text-4xl font-bold text-[#08060d] dark:text-[#f3f4f6]">
            Education & Learning
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative mt-8">
          {/* Timeline Track - Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-0.5 bg-[#e5e4e7] dark:bg-[#2e303a]">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-[#aa3bff] to-[#c084fc]"
            />
          </div>

          {/* Timeline Track - Mobile */}
          <div className="lg:hidden absolute top-0 bottom-0 left-[31px] w-0.5 bg-[#e5e4e7] dark:bg-[#2e303a]">
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="w-full bg-gradient-to-b from-[#aa3bff] to-[#c084fc]"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6 pt-0 lg:pt-0">
            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className="relative flex flex-row lg:flex-col gap-6 lg:gap-8 group"
              >
                {/* Node & Logo */}
                <div className="relative flex-shrink-0 z-10 flex flex-col items-center lg:items-start lg:block">
                  <div className="relative group/logo">
                    <div className={`w-16 h-16 rounded-2xl bg-white dark:bg-[#1f2028] border-2 transition-all duration-500 ease-out flex items-center justify-center shadow-sm overflow-hidden p-2
                      ${item.highlight 
                        ? 'border-[#aa3bff] dark:border-[#c084fc] shadow-[0_0_15px_rgba(170,59,255,0.2)]' 
                        : 'border-[#e5e4e7] dark:border-[#2e303a] group-hover:border-[#aa3bff]/50 dark:group-hover:border-[#c084fc]/50'
                      }`}
                    >
                      <img 
                        src={item.logo} 
                        alt={item.title}
                        className="w-full h-full object-contain grayscale opacity-80 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 group-hover/logo:scale-105 transition-all duration-500 ease-out"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#08060d] dark:bg-[#f3f4f6] text-white dark:text-[#08060d] text-xs rounded-md opacity-0 scale-95 pointer-events-none group-hover/logo:opacity-100 group-hover/logo:scale-100 transition-all duration-300 whitespace-nowrap z-20 hidden md:block">
                      {item.tooltip}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#08060d] dark:border-t-[#f3f4f6]" />
                    </div>
                  </div>
                  
                  {/* Timeline Connection Dot (Mobile) */}
                  <div className="hidden lg:none mt-auto h-full w-px bg-transparent" />
                </div>

                {/* Content Card */}
                <div className={`flex-1 bg-white dark:bg-[#1f2028] border rounded-2xl p-5 lg:p-6 transition-all duration-400 ease-out relative
                  ${item.highlight 
                    ? 'border-[#aa3bff]/30 dark:border-[#c084fc]/30 bg-gradient-to-b from-[#aa3bff]/[0.02] to-transparent shadow-md hover:-translate-y-1 hover:shadow-xl hover:border-[#aa3bff]/60 dark:hover:border-[#c084fc]/60' 
                    : 'border-[#e5e4e7] dark:border-[#2e303a] hover:-translate-y-1 hover:shadow-lg hover:border-[#aa3bff]/40 dark:hover:border-[#c084fc]/40'
                  }`}
                >
                  <p className="text-[10px] font-bold tracking-widest uppercase text-[#aa3bff] dark:text-[#c084fc] mb-3 flex items-center justify-between">
                    {item.type}
                    <span className="text-[#6b6375] dark:text-[#9ca3af] opacity-50 text-lg leading-none font-serif font-light">{`0${index + 1}`}</span>
                  </p>
                  
                  <h3 className={`font-bold text-[#08060d] dark:text-[#f3f4f6] mb-1 ${item.highlight ? 'text-xl' : 'text-lg'}`}>
                    {item.title}
                  </h3>
                  
                  {item.program && (
                    <p className="text-sm font-medium text-[#6b6375] dark:text-[#9ca3af] mb-3">
                      {item.program}
                    </p>
                  )}

                  <div className="space-y-2 mt-4 text-xs">
                    {item.status && (
                      <div className="flex items-center gap-2">
                        {item.highlight && (
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                          </span>
                        )}
                        <span className={`${item.highlight ? 'text-emerald-600 dark:text-emerald-400 font-medium' : 'text-[#6b6375] dark:text-[#9ca3af]'}`}>
                          {item.status}
                        </span>
                      </div>
                    )}
                    
                    {item.location && (
                      <p className="text-[#6b6375] dark:text-[#9ca3af] flex items-center gap-1.5">
                        <MapPin size={12} />
                        {item.location}
                      </p>
                    )}
                    
                    {item.duration && (
                      <p className="text-[#6b6375] dark:text-[#9ca3af]">
                        <span className="opacity-70">Duration:</span> {item.duration}
                      </p>
                    )}
                    
                    {item.issueDate && (
                      <p className="text-[#6b6375] dark:text-[#9ca3af]">
                        <span className="opacity-70">Issued:</span> {item.issueDate}
                      </p>
                    )}
                    
                    {item.certificateId && (
                      <p className="text-[#6b6375] dark:text-[#9ca3af] truncate">
                        <span className="opacity-70">ID:</span> <code className="font-mono">{item.certificateId}</code>
                      </p>
                    )}
                  </div>

                  <div className="absolute bottom-5 right-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 hidden sm:block">
                    <ArrowRight size={16} className="text-[#aa3bff] dark:text-[#c084fc]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
