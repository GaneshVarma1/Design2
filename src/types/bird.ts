export interface BirdProps {
  src: string;
  alt: string;
  className?: string;
}

export interface BirdAnimationConfig {
  duration: number;
  delay: number;
  top: string;
}

export const BIRD_ANIMATION_CONFIGS: BirdAnimationConfig[] = [
  { duration: 15, delay: 0, top: '20%' },
  { duration: 15, delay: 2, top: '50%' },
  { duration: 15, delay: 4, top: '80%' }
]; 