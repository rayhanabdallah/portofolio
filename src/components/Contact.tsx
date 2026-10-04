import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Github, Linkedin, Instagram } from './Icons';

export default function Contact() {
  const socials = [
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:rayhanabdallah.dev@gmail.com',
      username: 'rayhanabdallah.dev@gmail.com'
    },
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/rayhanabdallah',
      username: '@rayhanabdallah'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/rayhanabdallah',
      username: 'rayhanabdallah'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={20} />,
      url: 'https://instagram.com/rayhnx',
      username: '@rayhnx'
    }
  ];

  return (
    <section id="contact" className="px-6 py-20 bg-[#f4f3ec]/30 dark:bg-[#1f2028]/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#08060d] dark:text-[#f3f4f6] mb-6">
            Let's build something.
          </h2>
          <p className="text-lg text-[#6b6375] dark:text-[#9ca3af] max-w-xl mx-auto">
            I'm currently looking for new opportunities, collaborations, and projects to work on. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 bg-white dark:bg-[#1f2028] border border-[#e5e4e7] dark:border-[#2e303a] rounded-xl hover:border-[#aa3bff] dark:hover:border-[#c084fc] transition-colors group"
            >
              <div className="p-3 bg-[#f4f3ec] dark:bg-[#16171d] rounded-lg group-hover:bg-[#aa3bff]/10 dark:group-hover:bg-[#c084fc]/10 text-[#08060d] dark:text-[#f3f4f6] group-hover:text-[#aa3bff] dark:group-hover:text-[#c084fc] transition-colors">
                {social.icon}
              </div>
              <div className="text-left">
                <p className="font-semibold text-[#08060d] dark:text-[#f3f4f6]">{social.name}</p>
                <p className="text-sm text-[#6b6375] dark:text-[#9ca3af]">{social.username}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
