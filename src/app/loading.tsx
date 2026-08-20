import styles from "@/styles/Skeleton.module.css";

export default function Loading() {
  return (
    <div className={styles.page}>
      <div className="container">
        {/* Hero Section Skeleton */}
        <div className={styles.heroGrid}>
          <div className={styles.leftCol}>
            <div className={`${styles.shimmer} ${styles.eyebrowLine}`} />
            <div className={`${styles.shimmer} ${styles.headlineLine}`} />
            <div className={`${styles.shimmer} ${styles.subline}`} />

            <div className={styles.paragraphBlock}>
              <div className={`${styles.shimmer} ${styles.line}`} />
              <div className={`${styles.shimmer} ${styles.line} ${styles.line90}`} />
              <div className={`${styles.shimmer} ${styles.line} ${styles.line75}`} />
            </div>

            <div className={styles.btnRow}>
              <div className={`${styles.shimmer} ${styles.btnBlock}`} />
              <div className={`${styles.shimmer} ${styles.btnBlock}`} />
            </div>
          </div>

          <div className={`${styles.shimmer} ${styles.portraitBlock}`} />
        </div>

        {/* Bento / Grid Skeleton */}
        <div className={styles.cardsGrid}>
          <div className={`${styles.shimmer} ${styles.cardBlock}`} />
          <div className={`${styles.shimmer} ${styles.cardBlock}`} />
          <div className={`${styles.shimmer} ${styles.cardBlock}`} />
          <div className={`${styles.shimmer} ${styles.cardBlock} ${styles.cardWide}`} />
          <div className={`${styles.shimmer} ${styles.cardBlock}`} />
        </div>
      </div>
    </div>
  );
}
