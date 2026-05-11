import { ABOUT } from '../data';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <SectionHeader label="Background" title="About Me" />
      <div className={styles.grid}>
        {ABOUT.map((card, i) => (
          <FadeIn key={card.title} delay={i * 80}>
            <div className={styles.card}>
              <h3>{card.title}</h3>
              {card.text && <p>{card.text}</p>}
              {card.list && (
                <ul>
                  {card.list.map(item => <li key={item}>{item}</li>)}
                </ul>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
