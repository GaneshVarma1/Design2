export interface Project {
  title: string;
  description: string;
  tech: string;
  color: string;
  projectLink?: string; // Link to live project/demo
  sourceLink?: string;  // Link to source code
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack online store with React & Node.js",
    tech: "React, Node.js, MongoDB",
    color: "green",
    projectLink: "https://your-ecommerce-demo.com",
    sourceLink: "https://github.com/yourusername/ecommerce"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool",
    tech: "Vue.js, Express, PostgreSQL",
    color: "purple",
    projectLink: "https://your-taskapp-demo.com",
    sourceLink: "https://github.com/yourusername/taskapp"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather data visualization",
    tech: "React, D3.js, Weather API",
    color: "yellow",
    projectLink: "https://your-weather-demo.com",
    sourceLink: "https://github.com/yourusername/weather-dashboard"
  },
  {
    title: "Chat Application",
    description: "Real-time messaging with Socket.io",
    tech: "React, Socket.io, Redis",
    color: "red",
    projectLink: "https://your-chatapp-demo.com",
    sourceLink: "https://github.com/yourusername/chatapp"
  },
  {
    title: "Portfolio Website",
    description: "This Flappy Bird-inspired portfolio!",
    tech: "React, TypeScript, Tailwind",
    color: "cyan",
    projectLink: "https://your-portfolio-demo.com",
    sourceLink: "https://github.com/yourusername/portfolio"
  },
  {
    title: "Mobile Game",
    description: "HTML5 canvas-based arcade game",
    tech: "JavaScript, Canvas API, WebAudio",
    color: "orange",
    projectLink: "https://your-mobilegame-demo.com",
    sourceLink: "https://github.com/yourusername/mobilegame"
  }
]; 