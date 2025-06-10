import React from 'react';
import { projects } from '../data/projects';

const getColorClasses = (color: string) => {
  const colorMap: { [key: string]: string } = {
    green: 'bg-green-500/20 border-green-400 text-green-400 text-green-300 bg-green-500 hover:bg-green-600 bg-green-500/50 hover:bg-green-600/50',
    purple: 'bg-purple-500/20 border-purple-400 text-purple-400 text-purple-300 bg-purple-500 hover:bg-purple-600 bg-purple-500/50 hover:bg-purple-600/50',
    yellow: 'bg-yellow-500/20 border-yellow-400 text-yellow-400 text-yellow-300 bg-yellow-500 hover:bg-yellow-600 bg-yellow-500/50 hover:bg-yellow-600/50',
    red: 'bg-red-500/20 border-red-400 text-red-400 text-red-300 bg-red-500 hover:bg-red-600 bg-red-500/50 hover:bg-red-600/50',
    cyan: 'bg-cyan-500/20 border-cyan-400 text-cyan-400 text-cyan-300 bg-cyan-500 hover:bg-cyan-600 bg-cyan-500/50 hover:bg-cyan-600/50',
    orange: 'bg-orange-500/20 border-orange-400 text-orange-400 text-orange-300 bg-orange-500 hover:bg-orange-600 bg-orange-500/50 hover:bg-orange-600/50'
  };
  return colorMap[color] || colorMap.cyan;
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gray-900/90 rounded-lg p-8 border-4 border-blue-400 shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-blue-400 mb-8 font-mono text-center">
            PROJECTS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const colors = getColorClasses(project.color).split(' ');
              return (
                <div
                  key={index}
                  className={`${colors[0]} p-6 rounded-lg border-2 ${colors[1]} hover:scale-105 transition-transform cursor-pointer`}
                >
                  <h3 className={`text-xl font-bold ${colors[2]} mb-3 font-mono`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 font-mono text-sm">
                    {project.description}
                  </p>
                  <p className={`${colors[3]} font-mono text-xs mb-4`}>
                    {project.tech}
                  </p>
                  <div className="flex space-x-2">
                    {project.projectLink && (
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${colors[4]} ${colors[5]} text-white px-3 py-1 rounded text-sm font-mono transition-colors`}
                      >
                        View Project
                      </a>
                    )}
                    {project.sourceLink && (
                      <a
                        href={project.sourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${colors[6]} ${colors[7]} text-white px-3 py-1 rounded text-sm font-mono transition-colors`}
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 