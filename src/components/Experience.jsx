import { EXPERIENCE } from '../data';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <SectionHeader label="Career" title="Experience" />
      <div className={styles.timeline}>
        {EXPERIENCE.map((item, i) => (
          <FadeIn key={i} delay={i * 100}>
            <div className={styles.item}>
              <div className={styles.date}>{item.date}</div>
              <div className={styles.dot} />
              <div className={styles.body}>
                <h3>{item.title}</h3>
                <p className={styles.company}>{item.company}</p>
                <ul>
                  {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
