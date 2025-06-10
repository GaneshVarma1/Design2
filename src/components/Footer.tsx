import React from 'react';
import { ASSETS } from '../constants/assets';

/**
 * Footer Component
 *
 * Displays the Flappy Bird logo, copyright,
 * and a custom built-with-love message with author credit.
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t-4 border-yellow-400 py-8 relative z-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center space-y-4">
        {/* Flappy Bird Logo - centered and sized appropriately */}
        <img
          src={ASSETS.LOGO.src}
          alt={ASSETS.LOGO.alt}
          className="h-14 w-auto object-contain mx-auto"
        />
        {/* Copyright and built with love message */}
        <p className="text-white font-mono text-lg">
          © 2024 Flying High Portfolio.
        </p>
        <p className="text-white font-mono text-base">
          Built with <span className="text-red-500">❤️</span> by <a href="https://bit.ly/sriport" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline hover:text-yellow-300">Sri</a> and lots of <span role="img" aria-label="coffee">☕</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer; 