import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { GithubStats } from './sections/GithubStats';
import { CodingContributions } from './sections/CodingContributions';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';
import { BackToTop } from './components/BackToTop';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 selection:bg-cyan-500/30">
        <ParticleBackground />
        <Navbar />
        
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <GithubStats />
          <CodingContributions />
          <Contact />
        </main>
        
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
