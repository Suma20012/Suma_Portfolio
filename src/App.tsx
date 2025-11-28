import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-black selection:bg-white selection:text-black relative">
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Global Noise Overlay for Texture */}
      <div className="noise-overlay" />
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
