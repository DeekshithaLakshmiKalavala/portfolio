import { useState } from 'react';
import useTyping from '../hooks/useTyping';
import { META, STATS } from '../data';
import styles from './HomePage.module.css';



export default function HomePage() {
  const { displayed, done } = useTyping(META.tagline, 55, 400);
  const [imgError, setImgError] = useState(false);

  const scrollTo = (id) => {
    if (id === 'resume') { window.open(META.resume, '_blank'); return; }
    if (id === 'github')  { window.open(META.github, '_blank'); return; }
    if (id === 'linkedin'){ window.open(META.linkedin, '_blank'); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className={styles.homeMain}>
      <div className={styles.bgAnim} aria-hidden="true" />

      {/* ── HERO SECTION (matches original index.html pattern) ── */}
      <section className={styles.homeHero}>

        <p className={styles.eyebrow}>{META.eyebrow}</p>

        {/* Profile image */}
        <div className={styles.profileWrapper}>
          {!imgError ? (
            <img
              src="/profile.jpeg"
              alt={META.shortName}
              className={styles.profileImg}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className={styles.profileFallback}>
              {META.initials}
            </div>
          )}
        </div>

        {/* Typing title */}
        <h1 className={styles.homeTitle}>
          <span>{displayed}</span>
          {!done && <span className={styles.caret} aria-hidden="true">|</span>}
        </h1>

        {/* Sub */}
        <p className={styles.homeSub}>
          Software Engineer &bull; Machine Learning &bull; Cloud (Azure/AWS)
        </p>

        {/* Actions */}
        <div className={styles.homeActions}>
          <a className={styles.btnOutline} href={META.resume} target="_blank" rel="noreferrer">
            View Resume
          </a>
          <button
            className={styles.btnGhost}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact
          </button>
        </div>

        

      </section>

      

    </main>
  );
}
