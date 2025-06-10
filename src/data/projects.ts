export interface Project {
  title: string;
  description: string;
  tech: string;
  color: string;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack online store with React & Node.js",
    tech: "React, Node.js, MongoDB",
    color: "green"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool",
    tech: "Vue.js, Express, PostgreSQL",
    color: "purple"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather data visualization",
    tech: "React, D3.js, Weather API",
    color: "yellow"
  },
  {
    title: "Chat Application",
    description: "Real-time messaging with Socket.io",
    tech: "React, Socket.io, Redis",
    color: "red"
  },
  {
    title: "Portfolio Website",
    description: "This Flappy Bird-inspired portfolio!",
    tech: "React, TypeScript, Tailwind",
    color: "cyan"
  },
  {
    title: "Mobile Game",
    description: "HTML5 canvas-based arcade game",
    tech: "JavaScript, Canvas API, WebAudio",
    color: "orange"
  }
]; 