import { EDUCATION } from '../data';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <SectionHeader label="Academic" title="Education" />
      <div className={styles.grid}>
        {EDUCATION.map((e, i) => (
          <FadeIn key={e.badge} delay={i * 100}>
            <div className={styles.card}>
              <div className={styles.top}>
                <div />
                <span className={styles.badge}>{e.badge}</span>
              </div>
              <h3>{e.degree}</h3>
              <p className={styles.school}>{e.school}</p>
              <p className={styles.meta}>{e.meta}</p>
              <div className={styles.courses}>
                {e.courses.map(c => <span key={c} className={styles.course}>{c}</span>)}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
