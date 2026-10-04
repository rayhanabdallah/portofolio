import { motion } from 'framer-motion';
import { Star, GitBranch } from 'lucide-react';
import { Github } from './Icons';

const pinnedRepos = [
  {
    name: 'ai-sales-assistant',
    description: 'AI-powered sales assistant concept for a game account store.',
    language: 'Python',
    color: '#3572A5'
  },
  {
    name: 'discord-store-bot',
    description: 'Discord-based automation system for a digital game store.',
    language: 'JavaScript',
    color: '#f1e05a'
  },
  {
    name: 'smart-plant-watering',
    description: 'Arduino-based automatic plant watering system.',
    language: 'C++',
    color: '#f34b7d'
  },
  {
    name: 'portfolio-website',
    description: 'Personal portfolio website built with React and Tailwind CSS.',
    language: 'TypeScript',
    color: '#3178c6'
  }
];

export default function GitHubSection() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="p-4 bg-[#f4f3ec] dark:bg-[#1f2028] rounded-xl border border-[#e5e4e7] dark:border-[#2e303a]">
            <Github size={32} className="text-[#08060d] dark:text-[#f3f4f6]" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#08060d] dark:text-[#f3f4f6]">GitHub</h2>
            <a 
              href="https://github.com/rayhanabdallah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6b6375] dark:text-[#9ca3af] hover:text-[#aa3bff] dark:hover:text-[#c084fc] transition-colors"
            >
              @rayhanabdallah
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {pinnedRepos.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="block p-6 bg-white dark:bg-[#1f2028] border border-[#e5e4e7] dark:border-[#2e303a] rounded-xl"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-[#08060d] dark:text-[#f3f4f6]">
                  {repo.name}
                </h3>
              </div>
              <p className="text-sm text-[#6b6375] dark:text-[#9ca3af] mb-6">
                {repo.description}
              </p>
              
              <div className="flex items-center gap-4 text-xs text-[#6b6375] dark:text-[#9ca3af]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.color }} />
                  {repo.language}
                </div>
                <div className="flex items-center gap-1 opacity-50">
                  <Star size={14} />
                  Learning project
                </div>
                <div className="flex items-center gap-1 opacity-50">
                  <GitBranch size={14} />
                  Private / Learning
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-6 bg-white dark:bg-[#1f2028] border border-[#e5e4e7] dark:border-[#2e303a] rounded-xl"
        >
          <p className="text-sm text-[#6b6375] dark:text-[#9ca3af] leading-relaxed">
            Explore public work and ongoing learning projects on GitHub. Repository details appear here when public links are available.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
