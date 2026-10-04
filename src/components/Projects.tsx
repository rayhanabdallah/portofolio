import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects as projectsData, type Project } from '../data/projects';
import { ArrowUpRight, X } from 'lucide-react';
import { Github, ExternalLink } from './Icons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#aa3bff] dark:text-[#c084fc] mb-3">Selected work</p>
            <h2 className="text-4xl font-bold text-[#08060d] dark:text-[#f3f4f6] mb-3">Projects</h2>
            <p className="text-lg text-[#6b6375] dark:text-[#9ca3af]">Building through curiosity and hands-on experiments.</p>
          </div>
          <span className="text-sm font-mono text-[#6b6375] dark:text-[#9ca3af]">04 projects</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group text-left bg-white dark:bg-[#1f2028] border border-[#e5e4e7] dark:border-[#2e303a] rounded-2xl p-6 hover:-translate-y-1 hover:border-[#aa3bff]/50 dark:hover:border-[#c084fc]/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-7">
                <span className="text-sm font-mono text-[#aa3bff] dark:text-[#c084fc]">0{index + 1}</span>
                <ArrowUpRight size={19} className="text-[#6b6375] dark:text-[#9ca3af] group-hover:text-[#aa3bff] dark:group-hover:text-[#c084fc] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <div className="relative h-20 rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-[#aa3bff]/10 via-[#f4f3ec] to-[#c084fc]/10 dark:from-[#c084fc]/10 dark:via-[#16171d] dark:to-[#aa3bff]/10 border border-[#e5e4e7]/60 dark:border-[#2e303a]/60">
                <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_30%_30%,rgba(170,59,255,0.35),transparent_35%),radial-gradient(circle_at_75%_70%,rgba(192,132,252,0.2),transparent_40%)] group-hover:scale-110 transition-transform duration-700" />
                <span className="absolute bottom-3 left-4 text-xs font-mono text-[#6b6375] dark:text-[#9ca3af]">{project.technologies[0]}</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#08060d] dark:text-[#f3f4f6] mb-3 group-hover:text-[#aa3bff] dark:group-hover:text-[#c084fc] transition-colors">{project.title}</h3>
              <p className="text-[#6b6375] dark:text-[#9ca3af] mb-5 leading-relaxed line-clamp-3">{project.description}</p>
              {project.notes && <p className="text-xs text-[#aa3bff] dark:text-[#c084fc] mb-4 font-medium">{project.notes}</p>}
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-2.5 py-1 bg-[#f4f3ec] dark:bg-[#16171d] text-[#6b6375] dark:text-[#9ca3af] text-xs rounded-md border border-[#e5e4e7] dark:border-[#2e303a] group-hover:border-[#aa3bff]/20 dark:group-hover:border-[#c084fc]/20 transition-colors">{tech}</span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md" onClick={() => setSelectedProject(null)}>
          <motion.div initial={{ opacity: 0, scale: 0.96, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} onClick={(e) => e.stopPropagation()} className="relative bg-white dark:bg-[#1f2028] border border-[#e5e4e7] dark:border-[#2e303a] rounded-2xl max-w-xl w-full p-7 shadow-2xl">
            <button onClick={() => setSelectedProject(null)} aria-label="Close project details" className="absolute top-4 right-4 p-2 rounded-full bg-[#f4f3ec] dark:bg-[#16171d] text-[#6b6375] dark:text-[#9ca3af] hover:text-[#08060d] dark:hover:text-[#f3f4f6] cursor-pointer"><X size={18} /></button>
            <span className="text-sm font-mono text-[#aa3bff] dark:text-[#c084fc]">Project details</span>
            <h3 className="text-3xl font-bold text-[#08060d] dark:text-[#f3f4f6] mt-2 mb-3">{selectedProject.title}</h3>
            <p className="text-[#6b6375] dark:text-[#9ca3af] leading-relaxed mb-6">{selectedProject.description}</p>
            {selectedProject.notes && <p className="text-sm font-medium text-[#aa3bff] dark:text-[#c084fc] mb-6">{selectedProject.notes}</p>}
            <div className="mb-7"><p className="text-xs uppercase tracking-wider text-[#6b6375] dark:text-[#9ca3af] mb-3">Technologies</p><div className="flex flex-wrap gap-2">{selectedProject.technologies.map((tech) => <span key={tech} className="px-3 py-1.5 bg-[#f4f3ec] dark:bg-[#16171d] text-sm text-[#08060d] dark:text-[#f3f4f6] rounded-lg border border-[#e5e4e7] dark:border-[#2e303a]">{tech}</span>)}</div></div>
            <div className="flex gap-3">{selectedProject.github && <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2 text-sm"><Github size={16} /> GitHub</a>}{selectedProject.liveDemo && <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 text-sm"><ExternalLink size={16} /> Live Demo</a>}</div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
