import { useRef, useEffect, useState } from 'react';
import { SKILLS, SKILL_BARS } from '../data';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';
import styles from './Skills.module.css';

function SkillBar({ label, level }) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setWidth(level); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [level]);

  return (
    <div ref={ref} className={styles.barRow}>
      <div className={styles.barTop}>
        <span>{label}</span>
        <span className={styles.barPct}>{width}%</span>
      </div>
      <div className={styles.barTrack}>
        <div className={styles.barFill} style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <SectionHeader label="Expertise" title="Technical Skills" />

      <div className={styles.grid}>
        {SKILLS.map((s, i) => (
          <FadeIn key={s.title} delay={i * 70}>
            <div className={styles.card}>
              <span className={styles.icon}>{s.icon}</span>
              <h4>{s.title}</h4>
              <div className={styles.tags}>
                {s.tags.map(t => (
                  <span key={t} className={`${styles.tag} ${s.primary.includes(t) ? styles.primary : ''}`}>{t}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={200}>
        <div className={styles.barsWrap}>
          <h4>Skill Proficiency</h4>
          <div className={styles.barList}>
            {SKILL_BARS.map(b => <SkillBar key={b.label} {...b} />)}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
