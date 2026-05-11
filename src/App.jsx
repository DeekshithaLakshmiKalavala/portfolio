import { useState, useEffect } from 'react';
import ProgressBar    from './components/ProgressBar';
import Navbar         from './components/Navbar';
import HomePage       from './components/HomePage';
import About          from './components/About';
import Experience     from './components/Experience';
import Skills         from './components/Skills';
import Projects       from './components/Projects';
import Certifications from './components/Certifications';
import Education      from './components/Education';
import Contact        from './components/Contact';
import Footer         from './components/Footer';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <>
      <ProgressBar />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HomePage />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Experience />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Certifications />
      <div className="divider" />
      <Education />
      <div className="divider" />
      <Contact />
      <Footer />
    </>
  );
}
