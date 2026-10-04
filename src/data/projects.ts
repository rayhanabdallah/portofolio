export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveDemo?: string;
  github?: string;
  image?: string;
  notes?: string;
}

export const projects: Project[] = [
  {
    id: 'ai-sales-assistant',
    title: 'AI Sales Assistant',
    description: 'An AI-powered sales assistant concept created as part of an AI learning/bootcamp project for a game account store.',
    technologies: ['AI', 'LangFlow', 'Google AI Studio', 'DataStax Astra DB'],
    notes: 'Learning Project',
  },
  {
    id: 'discord-store-bot',
    title: 'Discord Store Bot',
    description: 'A Discord-based automation system for a digital game store with product catalogue, checkout flow, private ticket system, admin interaction, and order management.',
    technologies: ['Discord.js', 'Node.js', 'JavaScript', 'Automation'],
    notes: 'Built with AI-assisted development',
  },
  {
    id: 'smart-plant-watering-system',
    title: 'Smart Plant Watering System',
    description: 'An Arduino-based automatic plant watering system using sensors and a water pump. Detects soil moisture and controls watering automatically.',
    technologies: ['Arduino Uno', 'C/C++', 'Capacitive Soil Moisture Sensor', 'DHT11'],
    notes: 'Hardware Project',
  },
  {
    id: 'personal-productivity-website',
    title: 'Personal Productivity Website',
    description: 'A productivity-focused web project with to-do list, Pomodoro timer, quick links, and light/dark mode support.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
    notes: 'Personal Project',
  },
];
