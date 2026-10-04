import { motion } from 'framer-motion';
import { journey } from '../data/journey';

export default function Journey() {
  return (
    <section id="journey" className="px-6 py-20 bg-[#f4f3ec]/30 dark:bg-[#1f2028]/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#08060d] dark:text-[#f3f4f6] mb-16">
          My Journey
        </h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#e5e4e7] dark:bg-[#2e303a]" />

          {journey.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center justify-between mb-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-5/12" />
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#aa3bff] dark:bg-[#c084fc] border-4 border-[#fff] dark:border-[#16171d]" />
              <div className="w-full md:w-5/12 pl-12 md:pl-0">
                <div className="bg-white dark:bg-[#1f2028] border border-[#e5e4e7] dark:border-[#2e303a] p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-[#08060d] dark:text-[#f3f4f6]">
                    {step.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
