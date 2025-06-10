import React from 'react';
import { aboutData } from '../data/about';

/**
 * TimelineItem Component
 * 
 * A reusable component for displaying timeline entries (education or experience)
 * with consistent styling and hover effects.
 * 
 * @param title - The main title (degree or role)
 * @param subtitle - The secondary title (institution or company)
 * @param period - The time period
 * @param description - A brief description
 * @param achievements - List of achievements
 * @param color - The color theme for this item
 */
const TimelineItem: React.FC<{
  title: string;
  subtitle: string;
  period: string;
  description: string;
  achievements: string[];
  color: string;
}> = ({ title, subtitle, period, description, achievements, color }) => (
  <div className={`bg-${color}-500/20 p-6 rounded-lg border-2 border-${color}-400 mb-6 relative group hover:scale-105 transition-all duration-300`}>
    {/* Timeline dot with hover effect */}
    <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-gray-900 border-4 border-yellow-400 group-hover:scale-125 transition-transform"></div>
    
    {/* Content structure */}
    <h3 className={`text-2xl font-bold text-${color}-400 mb-2 font-mono`}>{title}</h3>
    <h4 className="text-xl text-white mb-1 font-mono">{subtitle}</h4>
    <p className={`text-${color}-300 mb-3 font-mono`}>{period}</p>
    <p className="text-gray-300 mb-4 font-mono">{description}</p>
    
    {/* Achievements list with bullet points */}
    <ul className="space-y-2">
      {achievements.map((achievement, index) => (
        <li key={index} className="flex items-start space-x-2 text-gray-300 font-mono">
          <span className="text-yellow-400">•</span>
          <span>{achievement}</span>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * About Component
 * 
 * The main About section of the portfolio, displaying:
 * - Personal introduction
 * - Quick statistics
 * - Education history
 * - Work experience
 * 
 * Uses a timeline-based layout for education and experience sections
 * with interactive elements and hover effects.
 */
const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main container with border and shadow */}
        <div className="bg-gray-900/90 rounded-lg p-8 border-4 border-green-400 shadow-2xl">
          {/* Section title */}
          <h2 className="text-4xl md:text-6xl font-bold text-green-400 mb-8 font-mono text-center">
            ABOUT ME
          </h2>
          
          {/* Introduction and Stats Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            {/* Left column: Introduction text and buttons */}
            <div>
              {aboutData.description.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-300 mb-6 font-mono leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {/* Action buttons */}
              <div className="flex space-x-4">
                <a
                  href={aboutData.cvLink}
                  download
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-mono transition-colors"
                >
                  Download CV
                </a>
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded font-mono transition-colors">
                  View Resume
                </button>
              </div>
            </div>

            {/* Right column: Quick stats box */}
            <div className="bg-green-500/20 p-6 rounded-lg border-2 border-green-400">
              <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">QUICK STATS</h3>
              <div className="space-y-3">
                {aboutData.stats.map((stat, index) => (
                  <div key={index} className="flex justify-between text-white font-mono">
                    <span>{stat.label}:</span>
                    <span className="text-yellow-400">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Section with Timeline */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-blue-400 mb-6 font-mono text-center">
              EDUCATION
            </h3>
            <div className="relative pl-6 border-l-2 border-blue-400">
              {aboutData.education.map((edu, index) => (
                <TimelineItem
                  key={index}
                  title={edu.degree}
                  subtitle={edu.institution}
                  period={edu.year}
                  description={edu.description}
                  achievements={edu.achievements}
                  color="blue"
                />
              ))}
            </div>
          </div>

          {/* Experience Section with Timeline */}
          <div>
            <h3 className="text-3xl font-bold text-purple-400 mb-6 font-mono text-center">
              EXPERIENCE
            </h3>
            <div className="relative pl-6 border-l-2 border-purple-400">
              {aboutData.experience.map((exp, index) => (
                <TimelineItem
                  key={index}
                  title={exp.role}
                  subtitle={exp.company}
                  period={exp.period}
                  description={exp.description}
                  achievements={exp.achievements}
                  color="purple"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 