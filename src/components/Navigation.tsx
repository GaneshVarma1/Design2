import React from 'react';
import { ASSETS } from '../constants/assets';

interface NavigationProps {
  onScrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onScrollToSection }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b-2 border-yellow-400">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={ASSETS.LOGO.src} 
              alt={ASSETS.LOGO.alt}
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="hidden md:flex space-x-6">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => onScrollToSection(item.toLowerCase())}
                className="text-white hover:text-yellow-400 transition-colors font-mono font-semibold"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 