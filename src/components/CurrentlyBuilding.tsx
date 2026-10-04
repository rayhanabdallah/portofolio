import { motion } from 'framer-motion';

export default function CurrentlyBuilding() {
  return (
    <section className="px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto relative overflow-hidden rounded-2xl border border-[#e5e4e7] dark:border-[#2e303a] bg-[#f4f3ec]/60 dark:bg-[#1f2028]/60 p-6 sm:p-8"
      >
        <div className="absolute -right-24 -top-24 w-64 h-64 bg-[#aa3bff]/10 dark:bg-[#c084fc]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#aa3bff] dark:text-[#c084fc] mb-3">Currently building</p>
            <h2 className="text-3xl font-bold text-[#08060d] dark:text-[#f3f4f6] mb-2">AI + Software Engineering</h2>
            <p className="text-[#6b6375] dark:text-[#9ca3af] max-w-xl">Learning by experimenting, building practical projects, and connecting software with intelligent systems.</p>
          </div>
          <div className="grid grid-cols-3 gap-3 shrink-0">
            {['Learning', 'Experimenting', 'Building'].map((status) => (
              <div key={status} className="flex flex-col items-center gap-2 px-3 sm:px-5 py-3 bg-white/70 dark:bg-[#16171d]/70 border border-[#e5e4e7] dark:border-[#2e303a] rounded-xl">
                <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full rounded-full bg-[#aa3bff] dark:bg-[#c084fc] opacity-50 animate-ping" /><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#aa3bff] dark:bg-[#c084fc]" /></span>
                <span className="text-[11px] sm:text-xs font-medium text-[#08060d] dark:text-[#f3f4f6]">{status}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
