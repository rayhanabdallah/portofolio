import { motion } from 'framer-motion';
import { skills, exploring } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 bg-[#f4f3ec]/30 dark:bg-[#1f2028]/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#08060d] dark:text-[#f3f4f6] mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-[#6b6375] dark:text-[#9ca3af]">
            Currently building foundations and exploring new technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-[#1f2028] border border-[#e5e4e7] dark:border-[#2e303a] rounded-lg p-6"
            >
              <h3 className="font-semibold text-[#08060d] dark:text-[#f3f4f6] mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#f4f3ec] dark:bg-[#16171d] text-[#6b6375] dark:text-[#9ca3af] text-sm rounded-full border border-[#e5e4e7] dark:border-[#2e303a]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-[#08060d] dark:text-[#f3f4f6] mb-8">
            Currently Exploring
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {exploring.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-4 py-2 bg-gradient-to-r from-[#aa3bff]/10 to-[#aa3bff]/5 dark:from-[#c084fc]/10 dark:to-[#c084fc]/5 border border-[#aa3bff]/30 dark:border-[#c084fc]/30 text-[#aa3bff] dark:text-[#c084fc] font-medium rounded-lg"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
