"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles, Wrench } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "./About.module.css";

interface StatItem {
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
}

const stats: StatItem[] = [
  { value: 1.5, decimals: 1, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Concurrent Products Designed" },
  { value: 7, suffix: "", label: "Client Websites Delivered" },
  { value: 4, suffix: "", label: "Interconnected Dashboards Shipped" },
];

const workExperiences = [
  {
    role: "UI/UX Designer",
    company: "Gatecode Technologies Pvt. Ltd.",
    period: "Jan 3, 2026 – Present",
    bullets: [
      "Designed and delivered end-to-end UI/UX across 10+ concurrent digital products spanning fintech, HR-tech, and consumer mobile apps.",
      "Led design for payment gateway app Kortya Pay, creating seamless onboarding, wallet balance, and QR-scan payment flows.",
      "Architected 4-in-1 Office Management Software suite connecting Admin, Employee, Company, and Branch dashboards with a unified component system.",
      "Built Visa OMS B2B platform for travel agents with multi-tenant workflows and centralized order management.",
      "Designed, prototyped, and shipped 7 client business websites (Cocofina Sugar, Gatecode, Gatexpay, RMAX, SDPT, Ecobin, Damru) with tailored brand identities.",
      "Designed a modern Dating App end-to-end including swipe gesture matching, real-time messaging, and profile verification.",
      "Built and maintained a scalable, shared Figma design system reducing dev handoff cycles.",
    ],
  },
  {
    role: "UI/UX Designer",
    company: "JSONSDIGISOFT Pvt. Ltd.",
    period: "Dec 2024 – Dec 2025",
    bullets: [
      "Created end-to-end UI/UX for responsive web and mobile products using Figma.",
      "Mapped user flows, built low-to-high fidelity wireframes, and conducted interactive prototype usability tests.",
      "Designed high-density administrative panels, operational dashboards, and permission hierarchies.",
      "Crafted marketing collateral, brand guidelines, and vector visual assets using Adobe Illustrator and Canva.",
    ],
  },
  {
    role: "UI/UX Design & Frontend Developer",
    company: "Creative Clicks",
    period: "Apr 1, 2024 – Nov 30, 2024",
    bullets: [
      "Designed user-centered landing pages, mobile viewports, and interactive UI components.",
      "Translated Figma prototypes into clean, responsive HTML, CSS, and Bootstrap frontends.",
      "Collaborated closely with founders and engineers to ensure pixel-perfect production implementation.",
    ],
  },
];

const educationHistory = [
  {
    degree: "Master of Commerce (M.Com.), Economics",
    institution: "Alankar PG Girls College",
    period: "2015 – 2017",
  },
  {
    degree: "Bachelor of Commerce (B.Com.), Economics",
    institution: "Maharani College",
    period: "2012 – 2015",
  },
  {
    degree: "Senior Secondary (12th), Commerce Maths",
    institution: "New Indian Academy",
    period: "2012",
  },
  {
    degree: "Secondary (10th)",
    institution: "Jaipur International Senior Secondary School",
    period: "2010",
  },
];

const skillCategories = [
  {
    category: "Design Tools",
    skills: ["Figma", "Adobe Illustrator", "Canva", "Adobe XD", "Adobe Photoshop"],
    dotClass: styles.dotOrange,
  },
  {
    category: "UI/UX Skills",
    skills: [
      "Wireframing & Prototyping",
      "User Flow & Information Architecture",
      "Dashboard & Admin Panel Design",
      "Mobile & Web UI Design",
      "Design Systems (Basic)",
    ],
    dotClass: styles.dotTeal,
  },
  {
    category: "Technical Basics",
    skills: ["HTML", "CSS", "Bootstrap", "Responsive Web Design"],
    dotClass: styles.dotLavender,
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

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.55,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  return (
    <main id="main-content" className={styles.aboutPage}>
      {/* SECTION 1 — Intro */}
      <section className={styles.introSection} aria-label="About introduction">
        <div className="container">
          <div className={styles.introGrid}>
            {/* Left: Text & Bio */}
            <motion.div
              className={styles.introLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariants}
            >
              <p className="eyebrow">About Me</p>
              <h1 className={styles.headline}>Geeta Bisht</h1>
              <p className={styles.role}>
                UI/UX Designer — Fintech, Admin Panels, Web &amp; Mobile Apps
              </p>

              <p className={styles.bio}>
                UI/UX Designer with hands-on experience designing fintech platforms,
                admin dashboards, and mobile applications. Strong expertise in Figma,
                Adobe Illustrator, and Canva, with a solid understanding of UX principles,
                user flows, and responsive design. Based in Jaipur, India.
              </p>

              {/* Signature element */}
              <div className={styles.signatureWrap} aria-hidden="true">
                <span className={styles.signature}>Geeta Bisht</span>
                <svg
                  className={styles.squiggle}
                  width="72"
                  height="16"
                  viewBox="0 0 72 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C12 2 18 14 28 8C38 2 46 14 56 8C62 5 66 12 70 8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className={styles.actions}>
                <Button href="/projects">View Selected Work</Button>
                <Button href="/contact" variant="outline">
                  Let&apos;s Connect
                </Button>
              </div>
            </motion.div>

            {/* Right: Portrait with Blob backdrop */}
            <motion.div
              className={styles.portraitWrap}
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.6, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.1 }}
              aria-hidden="true"
            >
              <div className={styles.blob} aria-hidden="true" />
              <div className={styles.portrait}>
                <Image
                  src="/geeta-bisht.png"
                  alt="Geeta Bisht — UI/UX Designer"
                  fill
                  priority
                  sizes="(max-width: 860px) 320px, 420px"
                  style={{ objectFit: "contain", objectPosition: "bottom center" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Vision + Impact Stats */}
      <section className={styles.visionSection} aria-label="Design philosophy and impact">
        <div className="container">
          <div className={styles.visionGrid}>
            {/* Left Column: Vision & Philosophy */}
            <motion.div
              className={styles.visionLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariants}
            >
              <p className="eyebrow">Design Philosophy</p>
              <h2 className={styles.visionTitle}>
                Crafting human-centered products that scale.
              </h2>
              <p className={styles.visionParagraph}>
                Good design turns complex business processes into clear, intuitive digital
                actions. Whether architecting a 4-in-1 enterprise suite, a high-frequency trading
                terminal, or a consumer payment app, my goal is always to deliver frictionless
                experiences that empower users.
              </p>
              <p className={styles.visionParagraph}>
                With a background in Commerce &amp; Economics, I look at product design through
                both an aesthetic lens and a business growth mindset—aligning user happiness
                with company milestones.
              </p>
            </motion.div>

            {/* Right Column: Stat blocks */}
            <motion.div
              className={styles.visionRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <div className={styles.statsGrid} aria-label="Key professional statistics">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className={styles.statCard}
                    variants={fadeUpVariants}
                  >
                    <div className={styles.statNum}>
                      <AnimatedCounter
                        value={stat.value}
                        decimals={stat.decimals}
                        suffix={stat.suffix}
                      />
                    </div>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Work Experience Timeline */}
      <section className={styles.experienceSection} aria-label="Work experience">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Career Journey</p>
            <h2 className={styles.sectionTitle}>
              <Briefcase size={28} style={{ display: "inline", verticalAlign: "middle", marginRight: 10 }} aria-hidden="true" />
              Work Experience
            </h2>
          </div>

          <motion.div
            className={styles.experienceList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {workExperiences.map((exp, idx) => (
              <motion.div key={idx} className={styles.experienceCard} variants={fadeUpVariants}>
                <div className={styles.expHeader}>
                  <div>
                    <h3 className={styles.expRole}>{exp.role}</h3>
                    <p className={styles.expCompany}>{exp.company}</p>
                  </div>
                  <span className={styles.expPeriod}>{exp.period}</span>
                </div>
                <ul className={styles.expBullets}>
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — Education */}
      <section className={styles.educationSection} aria-label="Education history">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Academic Background</p>
            <h2 className={styles.sectionTitle}>
              <GraduationCap size={28} style={{ display: "inline", verticalAlign: "middle", marginRight: 10 }} aria-hidden="true" />
              Education
            </h2>
          </div>

          <motion.div
            className={styles.educationGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {educationHistory.map((edu, idx) => (
              <motion.div key={idx} className={styles.educationCard} variants={fadeUpVariants}>
                <h3 className={styles.eduDegree}>{edu.degree}</h3>
                <p className={styles.eduSchool}>{edu.institution}</p>
                <span className={styles.eduYear}>{edu.period}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — Skills Grouped by Category */}
      <section className={styles.skillsSection} aria-label="Skills and tools">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Expertise &amp; Toolchain</p>
            <h2 className={styles.sectionTitle}>
              <Wrench size={28} style={{ display: "inline", verticalAlign: "middle", marginRight: 10 }} aria-hidden="true" />
              Skills &amp; Capabilities
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {skillCategories.map((cat, idx) => (
              <div key={idx} className={styles.skillCategoryGroup}>
                <h3 className={styles.categoryHeading}>
                  <Sparkles size={16} aria-hidden="true" />
                  {cat.category}
                </h3>
                <div className={styles.tagsWrap}>
                  {cat.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      className={styles.skillPill}
                      variants={fadeUpVariants}
                    >
                      <span className={cat.dotClass} aria-hidden="true" />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
