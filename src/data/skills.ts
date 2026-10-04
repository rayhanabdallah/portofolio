export interface Skill {
  category: string;
  skills: string[];
}

export const skills: Skill[] = [
  {
    category: 'Programming',
    skills: ['Python', 'C++', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'Development',
    skills: ['Git', 'GitHub', 'Web Development', 'Discord Bot Development', 'Automation'],
  },
  {
    category: 'AI & ML',
    skills: ['Artificial Intelligence', 'LLM', 'AI Agents', 'Prompt Engineering', 'LangFlow', 'Google AI Studio', '9Router', 'OpenCode'],
  },
  {
    category: 'Backend & Database',
    skills: ['Basic Database Concepts', 'Basic Backend Concepts', 'Node.js', 'Datastax Astra DB'],
  },
];

export const exploring = [
  'AI Engineering',
  'Machine Learning',
  'LLMs',
  'AI Agents',
  'Software Engineering',
  'Automation',
  'Backend Development',
  'Web Development',
];
