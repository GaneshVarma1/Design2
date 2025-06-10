import React from 'react';
import { contactData } from '../data/contact';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gray-900/90 rounded-lg p-8 border-4 border-green-400 shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-green-400 mb-8 font-mono text-center">
            {contactData.title}
          </h2>
          <p className="text-lg text-gray-300 mb-8 font-mono text-center">
            {contactData.description}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {contactData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/50 p-6 rounded-lg text-center hover:scale-105 transition-transform cursor-pointer"
              >
                <span className="text-white font-mono block mb-2">{link.type}</span>
                <span className="text-green-400 font-mono">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 