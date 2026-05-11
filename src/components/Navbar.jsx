import { useState, useEffect } from 'react';
import { META } from '../data';
import styles from './Navbar.module.css';

const NAV_LINKS = ['about','experience','skills','projects','certifications','education','contact'];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('home');
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const sections = [...NAV_LINKS].reverse();
      for (const id of sections) {
        if (id === 'home') { if (window.scrollY < 120) { setActive('home'); break; } continue; }
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 90) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>

          <div className={styles.logo} onClick={() => scrollTo('home')}>
            <span className={styles.logoIcon}>👩‍💻</span>
            {META.shortName}
          </div>

          <ul className={styles.links}>
            {NAV_LINKS.map(id => (
              <li key={id}>
                <button
                  className={`${styles.link} ${active === id ? styles.active : ''}`}
                  onClick={() => scrollTo(id)}
                >
                  {id === 'certifications' ? 'Certifications' : id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.right}>
            {/* pill toggle — always visible on desktop */}
            <button className={styles.themeBtn} onClick={toggleTheme}>
                    {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
            <button className={styles.menuBtn} onClick={() => setOpen(o => !o)} aria-label="menu">
              {open ? '✕' : '☰'}
            </button>
          </div>

        </div>
      </header>

      {open && (
        <div className={styles.backdrop} onClick={() => setOpen(false)}>
          <div className={styles.sheet} onClick={e => e.stopPropagation()}>
            {NAV_LINKS.map(id => (
              <button key={id} className={styles.sheetLink} onClick={() => scrollTo(id)}>
                {id === 'certifications' ? 'Certifications' : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
            <button className={styles.sheetThemeBtn} onClick={toggleTheme}>
                    {theme === 'dark' ? '☀️ Switch to Light' : '🌙 Switch to Dark'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
