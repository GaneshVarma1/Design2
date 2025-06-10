import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import FloatingBirds from './components/FloatingBirds';
import { siteTitle } from './constants/meta';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = siteTitle;
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openGame = () => {
    window.open('https://ganeshvarma1.github.io/flappy-bird/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-400 to-blue-500 overflow-x-hidden relative">
      <Background scrollY={scrollY} />
      <FloatingBirds />
      <Navigation onScrollToSection={scrollToSection} />
      <Hero onPlayClick={openGame} onStartJourney={() => scrollToSection('about')} />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;