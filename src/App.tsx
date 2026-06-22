import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import ResearchPaper from './components/ResearchPaper';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or defaults to dark
    const stored = localStorage.getItem('theme');
    if (stored) {
      return stored === 'dark';
    }
    return true; // default to a high contrast dark theme
  });

  // Handle active class bindings on page boot or change
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-[#030712] text-gray-900 dark:text-gray-100 selection:bg-blue-500/30">
      {/* Dynamic Navigation */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Primary Layout Nodes */}
      <main className="relative">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Achievements />
        <ResearchPaper />
        <Contact />
      </main>

      {/* Unified Footer */}
      <Footer />
    </div>
  );
}
