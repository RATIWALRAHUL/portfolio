"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { TrendingUp, ShieldCheck } from "lucide-react";
import styles from "./Stats.module.css";

interface StatItemData {
  id: string;
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
  isAccent?: boolean;
}

const statsData: StatItemData[] = [
  {
    id: "experience",
    value: 1.5,
    decimals: 1,
    suffix: "+",
    label: "Years Experience",
    isAccent: true,
  },
  {
    id: "products",
    value: 10,
    suffix: "+",
    label: "Concurrent Products Designed",
  },
  {
    id: "websites",
    value: 7,
    suffix: "",
    label: "Client Websites Delivered",
    isAccent: true,
  },
  {
    id: "dashboards",
    value: 4,
    suffix: "",
    label: "Interconnected Dashboards Shipped",
  },
];

function AnimatedCounter({
  value,
  decimals = 0,
  suffix = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    if (!isInView) return;

    const duration = 1500;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = value * ease;

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, value, shouldReduceMotion]);

  return (
    <span ref={ref}>
      {decimals > 0 ? displayValue.toFixed(decimals) : Math.floor(displayValue)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className={styles.statsSection} id="stats" aria-label="Key metrics and achievements">
      <div className="container">
        <div className={styles.grid}>
          {/* Left Column: Stat Blocks */}
          <motion.div
            className={styles.leftCol}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className={styles.header} variants={fadeUpVariants}>
              <p className="eyebrow">Impact &amp; Milestones</p>
              <h2 className={styles.headline}>
                Proven results in product design &amp; enterprise delivery.
              </h2>
              <p className={styles.description}>
                Hands-on execution across fintech portals, multi-tenant administrative
                suites, and client-facing web applications.
              </p>
            </motion.div>

            <div className={styles.statsGrid}>
              {statsData.map((stat) => (
                <motion.div
                  key={stat.id}
                  className={styles.statItem}
                  variants={fadeUpVariants}
                >
                  <div
                    className={`${styles.number} ${
                      stat.isAccent ? styles.numberAccent : ""
                    }`}
                  >
                    <AnimatedCounter
                      value={stat.value}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                    />
                  </div>
                  <span className={styles.label}>{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Supporting Mockup Showcase */}
          <motion.div
            className={styles.rightCol}
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.6, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.1 }}
            aria-hidden="true"
          >
            <div className={styles.mockupContainer}>
              <div className={styles.ambientGlow} />

              <div className={styles.mockupCard}>
                <div className={styles.mockupHeader}>
                  <div className={styles.mockupDots}>
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                  </div>
                  <span className={styles.mockupBadge}>Fintech &amp; OMS Suite</span>
                </div>

                <div className={styles.mockupChart}>
                  <div className={styles.chartMeta}>
                    <span className={styles.chartTitle}>Multi-Dashboard Sync</span>
                    <span className={styles.chartGrowth}>
                      <TrendingUp size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }} />
                      4-in-1 Suite
                    </span>
                  </div>

                  <div className={styles.mockupGraph}>
                    <div className={`${styles.bar} ${styles.barAccent1}`} />
                    <div className={`${styles.bar} ${styles.barAccent2}`} />
                    <div className={`${styles.bar} ${styles.barAccent3}`} />
                    <div className={`${styles.bar} ${styles.barAccent4}`} />
                    <div className={`${styles.bar} ${styles.barAccent2}`} />
                  </div>
                </div>

                <div className={styles.mockupStatsRow}>
                  <div className={styles.mockupMetric}>
                    <span className={styles.mockupMetricVal}>10+</span>
                    <span className={styles.mockupMetricLbl}>Live Products</span>
                  </div>
                  <div className={styles.mockupMetric}>
                    <span className={styles.mockupMetricVal}>100%</span>
                    <span className={styles.mockupMetricLbl}>Figma Handoff</span>
                  </div>
                  <div className={styles.mockupMetric}>
                    <span className={styles.mockupMetricVal}>7</span>
                    <span className={styles.mockupMetricLbl}>Websites</span>
                  </div>
                </div>
              </div>

              {/* Floating Highlight Badge */}
              <div className={styles.floatingBadge}>
                <ShieldCheck size={18} className={styles.sparkleIcon} />
                <span>Enterprise Fintech UX</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
