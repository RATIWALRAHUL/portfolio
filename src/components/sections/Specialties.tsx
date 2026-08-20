"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Palette,
  Layers,
  Search,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import styles from "./Specialties.module.css";

interface SpecialtyItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "orange" | "teal" | "lavender" | "coral";
}

const specialties: SpecialtyItem[] = [
  {
    id: "fintech-web",
    title: "Fintech & Web Apps",
    description: "Designing data-intensive microfinance tools, trading dashboards, and payment flows.",
    icon: Palette,
    accent: "orange",
  },
  {
    id: "admin-dashboards",
    title: "Admin Panels & Dashboards",
    description: "Architecting multi-role enterprise portals, permission matrices, and operational suites.",
    icon: Layers,
    accent: "teal",
  },
  {
    id: "user-flows",
    title: "User Flows & Wireframing",
    description: "Translating business requirements into structured information architecture and prototypes.",
    icon: Search,
    accent: "lavender",
  },
  {
    id: "mobile-ui",
    title: "Mobile App UI/UX",
    description: "Crafting intuitive iOS & Android experiences for fintech, consumer apps, and booking portals.",
    icon: Sparkles,
    accent: "coral",
  },
];

export default function Specialties() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const cardVariants: Variants = {
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

  const accentCardStyles = {
    orange: styles.cardOrange,
    teal: styles.cardTeal,
    lavender: styles.cardLavender,
    coral: styles.cardCoral,
  };

  const accentIconStyles = {
    orange: styles.iconOrange,
    teal: styles.iconTeal,
    lavender: styles.iconLavender,
    coral: styles.iconCoral,
  };

  return (
    <section className={styles.specialties} id="specialties" aria-label="Specialties and Expertise">
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow">Expertise</p>
          <h2 className={styles.title}>Specialties</h2>
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Card 1: Fintech & Web Apps */}
          {(() => {
            const item = specialties[0];
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                className={`${styles.card} ${accentCardStyles[item.accent]}`}
                variants={cardVariants}
              >
                <div className={`${styles.iconWrap} ${accentIconStyles[item.accent]}`}>
                  <Icon size={28} strokeWidth={2} aria-hidden="true" />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.label}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </motion.div>
            );
          })()}

          {/* Card 2: Admin Panels */}
          {(() => {
            const item = specialties[1];
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                className={`${styles.card} ${accentCardStyles[item.accent]}`}
                variants={cardVariants}
              >
                <div className={`${styles.iconWrap} ${accentIconStyles[item.accent]}`}>
                  <Icon size={28} strokeWidth={2} aria-hidden="true" />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.label}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </motion.div>
            );
          })()}

          {/* Card 3: User Flows */}
          {(() => {
            const item = specialties[2];
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                className={`${styles.card} ${accentCardStyles[item.accent]}`}
                variants={cardVariants}
              >
                <div className={`${styles.iconWrap} ${accentIconStyles[item.accent]}`}>
                  <Icon size={28} strokeWidth={2} aria-hidden="true" />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.label}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </motion.div>
            );
          })()}

          {/* Bio Card (Spans 2 columns on desktop) */}
          <motion.div
            className={styles.bioCard}
            variants={cardVariants}
          >
            <div className={styles.avatar} style={{ position: "relative", overflow: "hidden", background: "var(--accent-orange)" }}>
              <Image
                src="/geeta-bisht.png"
                alt="Geeta Bisht"
                fill
                sizes="72px"
                style={{ objectFit: "contain", objectPosition: "bottom center" }}
              />
            </div>
            <div className={styles.bioContent}>
              <h3 className={styles.bioHeadline}>
                Geeta Bisht, UI/UX Designer
              </h3>
              <p className={styles.bioSub}>
                Based in Jaipur, India — specializing in fintech platforms, admin dashboards, and mobile applications.
              </p>
              <div className={styles.bioTag}>
                <span className={styles.pulseDot} aria-hidden="true" />
                Available for full-time roles &amp; freelance projects
              </div>
            </div>
          </motion.div>

          {/* Card 4: Mobile App UI */}
          {(() => {
            const item = specialties[3];
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                className={`${styles.card} ${accentCardStyles[item.accent]}`}
                variants={cardVariants}
              >
                <div className={`${styles.iconWrap} ${accentIconStyles[item.accent]}`}>
                  <Icon size={28} strokeWidth={2} aria-hidden="true" />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.label}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </motion.div>
            );
          })()}
        </motion.div>
      </div>
    </section>
  );
}
