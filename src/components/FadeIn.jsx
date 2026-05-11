import useInView from '../hooks/useInView';
import styles from './FadeIn.module.css';

export default function FadeIn({ children, delay = 0, className = '' }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`${styles.box} ${inView ? styles.show : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
