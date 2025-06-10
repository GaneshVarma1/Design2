import React from 'react';
import { skillsData } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gray-900/90 rounded-lg p-8 border-4 border-green-400 shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-green-400 mb-8 font-mono text-center">
            SKILLS & POWER-UPS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">TECHNICAL ABILITIES</h3>
              <div className="space-y-4">
                {skillsData.technicalAbilities.map((ability, index) => (
                  <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-mono">{ability.skill}</span>
                      <span className="text-yellow-400 font-mono">{ability.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-green-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${ability.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">POWER-UPS</h3>
              <div className="grid grid-cols-2 gap-4">
                {skillsData.powerUps.map((powerUp, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 p-4 rounded-lg text-center hover:scale-105 transition-transform cursor-pointer"
                  >
                    <span className="text-white font-mono">{powerUp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 