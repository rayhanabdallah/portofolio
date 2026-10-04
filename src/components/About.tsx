import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#08060d] dark:text-[#f3f4f6] mb-6">
            About Me
          </h2>
          <p className="text-lg text-[#6b6375] dark:text-[#9ca3af] leading-relaxed">
            I'm Rayhan Abdallah, an Informatics student at Universitas Pasundan based in Cimahi, Indonesia.
            <br />
            <br />
            I'm interested in the intersection of software engineering and artificial intelligence. I enjoy experimenting with new technologies, building practical projects, and understanding how software can be combined with AI to create useful systems.
            <br />
            <br />
            I'm currently developing my foundations in programming while exploring AI, LLMs, AI agents, automation, and software development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          <div className="bg-white dark:bg-[#1f2028] border border-[#e5e4e7] dark:border-[#2e303a] rounded-lg p-6">
            <h3 className="font-semibold text-[#08060d] dark:text-[#f3f4f6] mb-2">Personal Branding</h3>
            <p className="text-[#aa3bff] dark:text-[#c084fc] text-sm">AI + Software Engineering</p>
          </div>
          <div className="bg-white dark:bg-[#1f2028] border border-[#e5e4e7] dark:border-[#2e303a] rounded-lg p-6">
            <h3 className="font-semibold text-[#08060d] dark:text-[#f3f4f6] mb-2">Current Goal</h3>
            <p className="text-[#aa3bff] dark:text-[#c084fc] text-sm">Aspiring AI Engineer</p>
          </div>
          <div className="bg-white dark:bg-[#1f2028] border border-[#e5e4e7] dark:border-[#2e303a] rounded-lg p-6">
            <h3 className="font-semibold text-[#08060d] dark:text-[#f3f4f6] mb-2">Status</h3>
            <p className="text-[#aa3bff] dark:text-[#c084fc] text-sm">Informatics Student</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
