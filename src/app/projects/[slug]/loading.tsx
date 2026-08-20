import styles from "@/styles/Skeleton.module.css";

export default function ProjectLoading() {
  return (
    <div style={{ minHeight: "100vh", paddingBottom: "120px" }}>
      {/* Banner Skeleton */}
      <div className={`${styles.shimmer} ${styles.bannerBlock}`} />

      <div className="container">
        <div className={styles.detailGrid}>
          {/* Sidebar Meta Card Skeleton */}
          <div className={`${styles.shimmer} ${styles.sidebarCard}`} />

          {/* Main Case Study Body Skeleton */}
          <div className={styles.mainCol}>
            <div className={`${styles.shimmer} ${styles.headlineLine}`} />
            <div className={`${styles.shimmer} ${styles.line}`} />
            <div className={`${styles.shimmer} ${styles.line} ${styles.line90}`} />
            <div className={`${styles.shimmer} ${styles.line} ${styles.line75}`} />

            {/* Mockup Skeleton */}
            <div className={`${styles.shimmer} ${styles.mockupBlock}`} />

            <div className={`${styles.shimmer} ${styles.subline}`} style={{ height: "32px", width: "40%" }} />
            <div className={`${styles.shimmer} ${styles.line}`} />
            <div className={`${styles.shimmer} ${styles.line} ${styles.line90}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
