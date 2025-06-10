export interface SkillData {
  technicalAbilities: {
    skill: string;
    level: number;
  }[];
  powerUps: string[];
}

export const skillsData: SkillData = {
  technicalAbilities: [
    { skill: "JavaScript/TypeScript", level: 95 },
    { skill: "React/Vue.js", level: 90 },
    { skill: "Node.js/Express", level: 85 },
    { skill: "Database Design", level: 80 },
    { skill: "DevOps/Cloud", level: 75 },
    { skill: "Game Development", level: 70 }
  ],
  powerUps: [
    "Problem Solving",
    "Team Leadership",
    "Agile/Scrum",
    "Code Review",
    "Mentoring",
    "Documentation",
    "Testing",
    "Performance"
  ]
}; 