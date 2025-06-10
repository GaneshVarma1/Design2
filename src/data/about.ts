/**
 * This file contains all the data for the About section of the portfolio.
 * It includes personal information, education history, work experience, and statistics.
 */

/**
 * Interface for quick statistics displayed in the About section
 * @property label - The name of the statistic (e.g., "Years Experience")
 * @property value - The value of the statistic (e.g., "5+")
 */
export interface Stat {
  label: string;
  value: string;
}

/**
 * Interface for education history entries
 * @property degree - The degree or qualification earned
 * @property institution - The name of the educational institution
 * @property year - The duration of the education
 * @property description - A brief description of the course/program
 * @property achievements - List of notable achievements during this period
 */
export interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
  achievements: string[];
}

/**
 * Interface for work experience entries
 * @property role - The job title or position
 * @property company - The name of the company
 * @property period - The duration of employment
 * @property description - A brief description of the role
 * @property achievements - List of key achievements in this role
 */
export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

/**
 * Main interface combining all data for the About section
 * @property description - Array of paragraphs for the introduction
 * @property stats - Array of quick statistics
 * @property cvLink - Link to the downloadable CV
 * @property education - Array of education history entries
 * @property experience - Array of work experience entries
 */
export interface AboutData {
  description: string[];
  stats: Stat[];
  cvLink: string;
  education: Education[];
  experience: Experience[];
}

/**
 * The actual data object containing all information for the About section.
 * This is the single source of truth for the About component.
 */
export const aboutData: AboutData = {
  // Personal introduction paragraphs
  description: [
    "Hello! I'm a passionate full-stack developer with a love for creating engaging and interactive web experiences. My journey in tech has been like a Flappy Bird game - challenging, exciting, and full of learning opportunities!",
    "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or playing retro games for inspiration."
  ],

  // Quick statistics displayed in the stats box
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Coffee Cups", value: "∞" }
  ],

  // Link to downloadable CV
  cvLink: "/path-to-your-cv.pdf",

  // Education history in chronological order
  education: [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      year: "2020 - 2022",
      description: "Specialized in Artificial Intelligence and Web Technologies",
      achievements: [
        "Graduated with Distinction",
        "Published 2 research papers",
        "Led the Web Development Club"
      ]
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "Digital College",
      year: "2016 - 2020",
      description: "Focused on Software Engineering and Database Systems",
      achievements: [
        "Dean's List for Academic Excellence",
        "Won Hackathon 2019",
        "Developed Campus Management System"
      ]
    }
  ],

  // Work experience in chronological order (most recent first)
  experience: [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading development of enterprise web applications",
      achievements: [
        "Reduced application load time by 40%",
        "Implemented CI/CD pipeline",
        "Mentored 5 junior developers"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects",
      achievements: [
        "Developed 10+ client projects",
        "Improved code quality by 60%",
        "Introduced automated testing"
      ]
    }
  ]
}; 