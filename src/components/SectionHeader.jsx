import styles from './SectionHeader.module.css';

export default function SectionHeader({ label, title }) {
  return (
    <div className={styles.wrap}>
      <p className={styles.label}>{label}</p>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
