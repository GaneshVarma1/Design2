import React from 'react';

// SVG cloud for better visuals and scalability
const Cloud = ({ style, className = '' }: { style?: React.CSSProperties; className?: string }) => (
  <svg
    aria-hidden="true"
    className={`absolute ${className}`}
    style={style}
    width="100"
    height="40"
    viewBox="0 0 100 40"
    fill="none"
  >
    <ellipse cx="30" cy="20" rx="30" ry="20" fill="#fff" opacity="0.8" />
    <ellipse cx="70" cy="25" rx="20" ry="15" fill="#fff" opacity="0.7" />
  </svg>
);

// Pipe component for top or bottom pipes
const Pipe = ({ style, className = '', orientation = 'top' }: { style?: React.CSSProperties; className?: string; orientation?: 'top' | 'bottom' }) => (
  <div
    aria-hidden="true"
    className={`absolute w-16 bg-green-600 shadow-lg ${orientation === 'top' ? 'rounded-t-lg' : 'rounded-b-lg'} ${className}`}
    style={style}
  />
);

interface BackgroundProps {
  scrollY: number;
}

/**
 * Background component with SVG clouds and parallax pipes for a Flappy Bird effect.
 * Clouds and pipes move at different speeds for a layered parallax look.
 */
const Background: React.FC<BackgroundProps> = ({ scrollY }) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Parallax Clouds */}
      <Cloud style={{ top: '10%', left: `${20 + scrollY * 0.1}%`, transform: `translateX(-${scrollY * 0.2}px)` }} />
      <Cloud style={{ top: '25%', right: `${10 + scrollY * 0.05}%`, transform: `translateX(${scrollY * 0.1}px)` }} />
      <Cloud style={{ top: '60%', left: `${60 + scrollY * 0.08}%`, transform: `translateX(-${scrollY * 0.15}px)` }} />
      {/* Parallax Pipes */}
      <Pipe orientation="top" style={{ height: '300px', top: '40%', left: `${80 + scrollY * 0.1}%`, transform: `translateX(-${scrollY * 0.3}px)` }} />
      <Pipe orientation="bottom" style={{ height: '200px', bottom: '30%', right: `${70 + scrollY * 0.12}%`, transform: `translateX(${scrollY * 0.25}px)` }} />
    </div>
  );
};

export default Background; 