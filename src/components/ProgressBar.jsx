import { useEffect, useState } from 'react';
import styles from './ProgressBar.module.css';

export default function ProgressBar() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const d = document.documentElement;
      setPct(d.scrollTop / (d.scrollHeight - d.clientHeight) * 100);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className={styles.bar} style={{ width: `${pct}%` }} />;
}
