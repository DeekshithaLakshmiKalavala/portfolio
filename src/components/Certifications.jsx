import { CERTIFICATIONS } from '../data';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';
import styles from './Certifications.module.css';

export default function Certifications() {
  return (
    <section id="certifications" className={styles.section}>
      <SectionHeader label="Credentials" title="Certifications" />
      <div className={styles.grid}>
        {CERTIFICATIONS.map((c, i) => (
          <FadeIn key={c.title} delay={i * 80}>
            <div className={styles.card}>
              <div className={styles.ico}>{c.icon}</div>
              <div>
                <h4>{c.title}</h4>
                <p>{c.issuer}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
