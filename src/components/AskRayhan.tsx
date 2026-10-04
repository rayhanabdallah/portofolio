import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { knowledgeBase } from '../data/knowledgeBase';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

function findBestAnswer(input: string): string {
  const lowerInput = input.toLowerCase();

  let bestMatch = { score: 0, answer: '' };
  for (const item of knowledgeBase) {
    let score = 0;
    for (const keyword of item.keywords) {
      if (lowerInput.includes(keyword.toLowerCase())) {
        score++;
      }
    }
    if (score > bestMatch.score) {
      bestMatch = { score, answer: item.answer };
    }
  }

  if (bestMatch.score > 0) return bestMatch.answer;

  return "I don't have specific information about that. You can ask me about Rayhan's projects, skills, education, certifications, career goals, or how to get in touch.";
}

const suggestedQuestions = [
  'What is Rayhan learning?',
  'What projects has Rayhan built?',
  'What AI tools has Rayhan used?',
  'What certificates does Rayhan have?',
  'How can I contact Rayhan?',
];

export default function AskRayhan() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, text: "Hi! I'm Rayhan's portfolio assistant. Ask me anything about his projects, skills, or background.", isUser: false },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = messagesEndRef.current?.parentElement;
    if (container) container.scrollTop = container.scrollHeight;
  }, [messages]);

  const handleSend = (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMessage: Message = { id: Date.now(), text: messageText, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const answer = findBestAnswer(messageText);
      const botMessage: Message = { id: Date.now() + 1, text: answer, isUser: false };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-4 bg-[#aa3bff] dark:bg-[#c084fc] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Ask Rayhan assistant"
      >
        <MessageCircle size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-white dark:bg-[#1f2028] border border-[#e5e4e7] dark:border-[#2e303a] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{ height: '500px' }}
          >
            <div className="p-4 border-b border-[#e5e4e7] dark:border-[#2e303a] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#aa3bff]/10 dark:bg-[#c084fc]/10 rounded-lg">
                  <Bot size={20} className="text-[#aa3bff] dark:text-[#c084fc]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#08060d] dark:text-[#f3f4f6] text-sm">Ask Rayhan</h3>
                  <p className="text-xs text-[#6b6375] dark:text-[#9ca3af]">Local Portfolio Assistant</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-[#f4f3ec] dark:hover:bg-[#16171d] rounded-lg" aria-label="Close">
                <X size={18} className="text-[#6b6375] dark:text-[#9ca3af]" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-xl text-sm leading-relaxed ${
                      msg.isUser
                        ? 'bg-[#aa3bff] dark:bg-[#c084fc] text-white'
                        : 'bg-[#f4f3ec] dark:bg-[#16171d] text-[#08060d] dark:text-[#f3f4f6]'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#f4f3ec] dark:bg-[#16171d] px-4 py-3 rounded-xl flex items-center gap-1">
                    <span className="w-2 h-2 bg-[#6b6375] dark:bg-[#9ca3af] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-[#6b6375] dark:bg-[#9ca3af] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-[#6b6375] dark:bg-[#9ca3af] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {messages.length <= 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-[#6b6375] dark:text-[#9ca3af] mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-1.5">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="px-3 py-1.5 bg-[#f4f3ec] dark:bg-[#16171d] border border-[#e5e4e7] dark:border-[#2e303a] text-[#08060d] dark:text-[#f3f4f6] rounded-full text-xs hover:bg-[#e5e4e7] dark:hover:bg-[#2e303a] transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="p-4 border-t border-[#e5e4e7] dark:border-[#2e303a]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Rayhan..."
                  className="flex-1 px-4 py-2.5 bg-[#f4f3ec] dark:bg-[#16171d] border border-[#e5e4e7] dark:border-[#2e303a] rounded-lg text-sm text-[#08060d] dark:text-[#f3f4f6] placeholder-[#6b6375] dark:placeholder-[#9ca3af] outline-none focus:border-[#aa3bff] dark:focus:border-[#c084fc]"
                />
                <button
                  type="submit"
                  className="p-2.5 bg-[#aa3bff] dark:bg-[#c084fc] text-white rounded-lg hover:opacity-90 transition-opacity"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
