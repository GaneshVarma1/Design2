import React from 'react';
import { Play, ChevronDown } from 'lucide-react';
import { heroData } from '../data/hero';

interface HeroProps {
  onPlayClick: () => void;
  onStartJourney: () => void;
}

const Hero: React.FC<HeroProps> = ({ onPlayClick, onStartJourney }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center relative z-10">
     
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-900/80 rounded-lg p-8 border-4 border-yellow-400 shadow-2xl">
          <h1 className="text-6xl md:text-8xl font-bold text-yellow-400 mb-4 font-mono animate-pulse">
            {heroData.name}
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-8 font-mono">
            {heroData.title}
          </p>
          <p className="text-lg text-gray-300 mb-8 font-mono">
            {heroData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onPlayClick}
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-mono font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              <Play className="w-5 h-5" />
              <span>PLAY FLAPPY BIRD</span>
            </button>
            <button
              onClick={onStartJourney}
              className="flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-mono font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              <span>START JOURNEY</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 