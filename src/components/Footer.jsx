import { META } from '../data';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href={META.github}   target="_blank" rel="noreferrer">GitHub</a>
        <a href={META.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={META.resume}   download>Resume</a>
      </div>
      <p>© {new Date().getFullYear()} {META.name} · All rights reserved</p>
    </footer>
  );
}
