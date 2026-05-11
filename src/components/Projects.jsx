import { useState } from 'react';
import { PROJECTS } from '../data';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';
import styles from './Projects.module.css';

const FILTERS = ['all', 'ml', 'backend', 'web'];

export default function Projects() {
  const [active, setActive] = useState('all');
  const visible = PROJECTS.filter(p => active === 'all' || p.category === active);

  return (
    <section id="projects" className={styles.section}>
      <SectionHeader label="Work" title="Featured Projects" />

      <div className={styles.filterRow}>
        {FILTERS.map(f => (
          <button
            key={f}
            className={`${styles.filterBtn} ${active === f ? styles.active : ''}`}
            onClick={() => setActive(f)}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visible.map((p, i) => (
          <FadeIn key={p.num} delay={i * 80}>
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.num}>{p.num}</span>
                <span className={styles.chip}>{p.chip}</span>
              </div>
              <div className={styles.icon}>{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className={styles.techStack}>
                {p.tech.map(t => <span key={t} className={styles.techTag}>{t}</span>)}
              </div>
              <div className={styles.links}>
                {p.links.map(l => (
                  <a key={l.label} className={styles.link} href={l.url} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
