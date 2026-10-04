import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications, type Certification } from '../data/certifications';
import { Award, ExternalLink, X, Image as ImageIcon } from 'lucide-react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="certificates" className="scroll-mt-24 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#aa3bff]/10 dark:bg-[#c084fc]/10 border border-[#aa3bff]/30 dark:border-[#c084fc]/30 rounded-full mb-4">
            <Award size={14} className="text-[#aa3bff] dark:text-[#c084fc]" />
            <span className="text-xs font-medium text-[#aa3bff] dark:text-[#c084fc]">
              Verified Credentials
            </span>
          </div>
          <h2 className="text-4xl font-bold text-[#08060d] dark:text-[#f3f4f6] mb-4">
            Certifications & Learning
          </h2>
          <p className="text-lg text-[#6b6375] dark:text-[#9ca3af] max-w-xl mx-auto">
            Structured courses, bootcamps, and certified programs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-[#1f2028] border border-[#e5e4e7] dark:border-[#2e303a] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Certificate Image Preview */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative w-full h-48 sm:h-56 bg-[#f4f3ec] dark:bg-[#16171d] border-b border-[#e5e4e7] dark:border-[#2e303a] overflow-hidden cursor-pointer group-hover:opacity-95 transition-opacity"
                >
                  {cert.certificateImage && !imageErrors[cert.id] ? (
                    <img
                      src={cert.certificateImage}
                      alt={cert.title}
                      onError={() => handleImageError(cert.id)}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#6b6375] dark:text-[#9ca3af]">
                      <div className="p-3 bg-[#aa3bff]/10 dark:bg-[#c084fc]/10 rounded-full mb-3">
                        <ImageIcon size={24} className="text-[#aa3bff] dark:text-[#c084fc]" />
                      </div>
                      <p className="text-xs font-medium">Certificate Preview</p>
                      <p className="text-[11px] opacity-70 mt-1">Place {cert.id}.png in public/images/certificates/</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-xs font-medium text-white flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      <ExternalLink size={14} /> Click to expand
                    </span>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-[#aa3bff]/10 dark:bg-[#c084fc]/10 text-[#aa3bff] dark:text-[#c084fc] rounded-md border border-[#aa3bff]/20 dark:border-[#c084fc]/20">
                      {cert.type === 'certificate' ? 'Certification' : 'Certificate of Attendance'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#08060d] dark:text-[#f3f4f6] mb-2 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-[#aa3bff] dark:text-[#c084fc] mb-3">
                    {cert.organization}
                  </p>

                  <p className="text-sm text-[#6b6375] dark:text-[#9ca3af] leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-[#e5e4e7]/60 dark:border-[#2e303a]/60 mt-auto">
                <div className="flex flex-wrap items-center justify-between text-xs text-[#6b6375] dark:text-[#9ca3af] mb-4 gap-2">
                  <span>Issued: <strong className="text-[#08060d] dark:text-[#f3f4f6]">{cert.issueDate}</strong></span>
                  <span>Duration: <strong className="text-[#08060d] dark:text-[#f3f4f6]">{cert.duration}</strong></span>
                </div>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full py-2.5 bg-[#08060d] dark:bg-[#f3f4f6] text-white dark:text-[#08060d] rounded-xl text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ExternalLink size={16} />
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#1f2028] border border-[#e5e4e7] dark:border-[#2e303a] rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl my-auto max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 bg-[#f4f3ec] dark:bg-[#16171d] rounded-full text-[#6b6375] dark:text-[#9ca3af] hover:text-[#08060d] dark:hover:text-[#f3f4f6] transition-colors cursor-pointer z-10"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto flex-1 pr-1">
                {/* Large Certificate Preview Image */}
                <div className="w-full bg-[#f4f3ec] dark:bg-[#16171d] border border-[#e5e4e7] dark:border-[#2e303a] rounded-xl overflow-hidden mb-6 flex items-center justify-center min-h-[220px]">
                  {selectedCert.certificateImage && !imageErrors[selectedCert.id] ? (
                    <img
                      src={selectedCert.certificateImage}
                      alt={selectedCert.title}
                      className="w-full h-auto max-h-[50vh] object-contain"
                    />
                  ) : (
                    <div className="p-8 text-center text-[#6b6375] dark:text-[#9ca3af]">
                      <ImageIcon size={48} className="mx-auto mb-3 text-[#aa3bff] dark:text-[#c084fc] opacity-60" />
                      <p className="text-sm font-medium">Certificate Image</p>
                      <p className="text-xs opacity-75 mt-1">
                        Add standard image file at <code>public/images/certificates/{selectedCert.id === 'ibm-ai-agent' ? 'ibm-ai-agent.png' : 'revou-software-engineering.png'}</code>
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-[#aa3bff]/10 dark:bg-[#c084fc]/10 text-[#aa3bff] dark:text-[#c084fc] rounded-md">
                      {selectedCert.type === 'certificate' ? 'Certification' : 'Certificate of Attendance'}
                    </span>
                    <h3 className="text-2xl font-bold text-[#08060d] dark:text-[#f3f4f6] mt-2">
                      {selectedCert.title}
                    </h3>
                    <p className="text-sm font-medium text-[#aa3bff] dark:text-[#c084fc]">
                      {selectedCert.organization}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3 border-y border-[#e5e4e7] dark:border-[#2e303a]">
                    <div>
                      <p className="text-xs text-[#6b6375] dark:text-[#9ca3af]">Credential / Certificate ID</p>
                      <code className="text-xs font-mono font-semibold text-[#08060d] dark:text-[#f3f4f6] mt-0.5 inline-block">
                        {selectedCert.credentialId}
                      </code>
                    </div>
                    <div>
                      <p className="text-xs text-[#6b6375] dark:text-[#9ca3af]">Duration & Issue Date</p>
                      <p className="text-sm font-medium text-[#08060d] dark:text-[#f3f4f6]">
                        {selectedCert.duration} • {selectedCert.issueDate}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-[#6b6375] dark:text-[#9ca3af] mb-1">Details</p>
                    <p className="text-sm text-[#08060d] dark:text-[#f3f4f6] leading-relaxed">
                      {selectedCert.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#e5e4e7] dark:border-[#2e303a] mt-4">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-full py-3 bg-[#08060d] dark:bg-[#f3f4f6] text-white dark:text-[#08060d] rounded-xl font-medium hover:opacity-95 transition-opacity cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
