import styles from "@/styles/Skeleton.module.css";

export default function BlogLoading() {
  return (
    <div className={styles.page}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <div className={`${styles.shimmer} ${styles.eyebrowLine}`} style={{ marginBottom: "16px" }} />
        <div className={`${styles.shimmer} ${styles.headlineLine}`} style={{ width: "90%", marginBottom: "24px" }} />
        <div className={`${styles.shimmer} ${styles.subline}`} style={{ marginBottom: "40px" }} />

        <div className={`${styles.shimmer} ${styles.mockupBlock}`} style={{ marginBottom: "40px" }} />

        <div className={styles.paragraphBlock}>
          <div className={`${styles.shimmer} ${styles.line}`} />
          <div className={`${styles.shimmer} ${styles.line} ${styles.line90}`} />
          <div className={`${styles.shimmer} ${styles.line}`} />
          <div className={`${styles.shimmer} ${styles.line} ${styles.line75}`} />
        </div>
      </div>
    </div>
  );
}
