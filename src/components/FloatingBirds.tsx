import React from 'react';
import { BIRD_IMAGE, ANIMATION_CONFIG } from '../constants/bird';
import { BirdProps, BirdAnimationConfig } from '../types/bird';
import './FloatingBirds.css';

/**
 * Bird component that renders a single bird with animation
 */
const Bird: React.FC<BirdProps> = ({ src, alt, className }) => (
  <img 
    src={src}
    alt={alt}
    className={className}
  />
);

/**
 * FloatingBirds component that renders multiple birds with floating and flapping animations
 */
const FloatingBirds: React.FC = () => {
  const birdConfigs: BirdAnimationConfig[] = [
    { duration: ANIMATION_CONFIG.float.duration, delay: 0, top: '20%' },
    { duration: ANIMATION_CONFIG.float.duration, delay: 2, top: '50%' },
    { duration: ANIMATION_CONFIG.float.duration, delay: 4, top: '80%' }
  ];

  return (
    <div className="birds-container" role="presentation">
      {birdConfigs.map((config: BirdAnimationConfig, index: number) => (
        <div 
          key={`bird-${index}`}
          className="bird"
          style={{
            top: config.top,
            animationDelay: `${config.delay}s`,
            animationDuration: `${config.duration}s`
          }}
        >
          <Bird
            src={BIRD_IMAGE.src}
            alt={BIRD_IMAGE.alt}
            className="bird-image"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingBirds; 