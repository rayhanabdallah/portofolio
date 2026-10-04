import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';

const commands: Record<string, string> = {
  who: `Rayhan Abdallah
Informatics Student & AI Enthusiast
Universitas Pasundan
Based in Cimahi, Indonesia`,
  skills: `Programming : Python, JavaScript, HTML, CSS
AI          : Artificial Intelligence, LLM, AI Agents, Prompt Engineering, LangFlow, Google AI Studio, 9Router, OpenCode
Development : Git, GitHub, Web Development, Automation, Discord Bot Development`,
  projects: `01. AI Sales Assistant      → LangFlow, Google AI Studio, Datastax Astra DB
02. Discord Store Bot       → Discord.js, Store Automation (AI-assisted)
03. Smart Plant Watering    → Arduino Uno, Sensors, DC Water Pump
04. Productivity Web App    → HTML, CSS, JavaScript, Local Storage`,
  contact: `Email    : rayhanabdallah.dev@gmail.com
GitHub   : github.com/rayhanabdallah
LinkedIn : linkedin.com/in/rayhan-abdallah
Instagram: @rayhnx`,
  hello: `Hey 👋 Welcome to Rayhan's portfolio.`,
  future: `Current destination: AI Engineer.
Status: still building.`,
  help: `Available commands:
  who       – who is Rayhan
  skills    – list of skills
  projects  – selected projects
  contact   – how to reach me
  clear     – clear terminal`,
  clear: '__CLEAR__',
};

const commandChips = ['who', 'skills', 'projects', 'contact', 'clear'];

interface Line {
  id: number;
  type: 'input' | 'output' | 'error';
  text: string;
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { id: 0, type: 'output', text: 'Rayhan Portfolio Terminal v1.0 — Type "help" to get started.' },
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = bottomRef.current?.parentElement;
    if (container) container.scrollTop = container.scrollHeight;
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();

    if (trimmed === 'clear') {
      setLines([]);
      return;
    }

    const output = commands[trimmed];

    const newLines: Line[] = [
      { id: Date.now(), type: 'input', text: cmd },
    ];

    if (output) {
      newLines.push({ id: Date.now() + 1, type: 'output', text: output });
    } else if (trimmed !== '') {
      newLines.push({ id: Date.now() + 1, type: 'error', text: `Command not found: ${trimmed}. Type "help" for available commands.` });
    }

    setLines((prev) => [...prev, ...newLines]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  return (
    <section className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f4f3ec] dark:bg-[#1f2028] border border-[#e5e4e7] dark:border-[#2e303a] rounded-full mb-4">
            <TerminalIcon size={14} className="text-[#aa3bff] dark:text-[#c084fc]" />
            <span className="text-xs font-medium text-[#6b6375] dark:text-[#9ca3af]">Interactive Terminal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#08060d] dark:text-[#f3f4f6] mb-3">
            Quick Terminal
          </h2>
          <p className="text-sm text-[#6b6375] dark:text-[#9ca3af]">
            Type commands or click the shortcut chips below
          </p>
        </motion.div>

        {/* Command Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {commandChips.map((chip) => (
            <button
              key={chip}
              onClick={() => handleCommand(chip)}
              className="px-3 py-1 bg-[#f4f3ec] dark:bg-[#1f2028] border border-[#e5e4e7] dark:border-[#2e303a] rounded-lg text-xs font-mono text-[#aa3bff] dark:text-[#c084fc] hover:bg-[#aa3bff]/10 dark:hover:bg-[#c084fc]/10 transition-colors cursor-pointer"
            >
              $ {chip}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#16171d] rounded-2xl overflow-hidden border border-[#2e303a] shadow-2xl"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#2e303a] bg-[#1a1b23]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
              <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
              <span className="ml-2 text-xs text-[#9ca3af] font-mono">rayhan@portfolio ~ %</span>
            </div>
            <span className="text-[11px] text-[#9ca3af]/60 font-mono hidden sm:inline">zsh</span>
          </div>

          <div className="p-5 h-72 overflow-y-auto font-mono text-xs sm:text-sm leading-relaxed">
            {lines.map((line) => (
              <div key={line.id} className="mb-2">
                {line.type === 'input' && (
                  <p className="text-[#c084fc]">
                    <span className="text-[#9ca3af]">rayhan@portfolio %</span> {line.text}
                  </p>
                )}
                {line.type === 'output' && (
                  <p className="text-[#f3f4f6] whitespace-pre-line pl-2 border-l-2 border-[#c084fc]/30 my-1">{line.text}</p>
                )}
                {line.type === 'error' && (
                  <p className="text-red-400 pl-2">{line.text}</p>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <form onSubmit={handleSubmit} className="flex items-center px-4 py-3 border-t border-[#2e303a] bg-[#1a1b23]">
            <span className="text-[#9ca3af] font-mono text-xs sm:text-sm mr-2">~ %</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-[#c084fc] font-mono text-xs sm:text-sm outline-none caret-[#c084fc]"
              placeholder='type "help" or click a chip...'
              autoComplete="off"
              spellCheck={false}
            />
          </form>
        </motion.div>
      </div>
    </section>
  );
}
