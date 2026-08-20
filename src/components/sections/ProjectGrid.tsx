"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { projects } from "@/lib/data";
import Button from "@/components/ui/Button";
import styles from "./ProjectGrid.module.css";

interface ProjectGridProps {
  showAll?: boolean;
}

const filterCategories = [
  "All",
  "Live Products",
  "Mobile App",
  "Admin Panel",
  "Fintech",
  "Web & Branding",
];

export default function ProjectGrid({ showAll = false }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.35,
        ease: "easeOut",
      },
    },
  };

  // Filtering Logic
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Live Products") return Boolean(project.liveUrl);
    if (activeFilter === "Mobile App") return project.category.toLowerCase().includes("mobile");
    if (activeFilter === "Admin Panel")
      return project.category.toLowerCase().includes("admin") || project.category.toLowerCase().includes("dashboard");
    if (activeFilter === "Fintech")
      return (
        project.category.toLowerCase().includes("fintech") ||
        project.category.toLowerCase().includes("trading") ||
        project.category.toLowerCase().includes("payment")
      );
    if (activeFilter === "Web & Branding")
      return (
        project.category.toLowerCase().includes("branding") ||
        project.category.toLowerCase().includes("web") ||
        project.category.toLowerCase().includes("enterprise")
      );
    return true;
  });

  const displayedProjects = showAll
    ? filteredProjects
    : activeFilter === "All"
    ? projects.slice(0, 6)
    : filteredProjects;

  return (
    <section className={styles.section} id="work" aria-label="Selected Projects">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <p className="eyebrow">Featured Work</p>
            <h2 className={styles.title}>
              {showAll ? "All Work & Case Studies" : "Crafted Projects"}
            </h2>
          </div>
          {!showAll && (
            <Button href="/projects" variant="outline">
              View All Projects ({projects.length})
            </Button>
          )}
        </div>

        {/* Category Filter Bar */}
        <div className={styles.filterBar} role="tablist" aria-label="Filter projects by category">
          {filterCategories.map((category) => {
            const count =
              category === "All"
                ? projects.length
                : category === "Live Products"
                ? projects.filter((p) => p.liveUrl).length
                : projects.filter((p) => {
                    if (category === "Mobile App") return p.category.toLowerCase().includes("mobile");
                    if (category === "Admin Panel")
                      return (
                        p.category.toLowerCase().includes("admin") ||
                        p.category.toLowerCase().includes("dashboard")
                      );
                    if (category === "Fintech")
                      return (
                        p.category.toLowerCase().includes("fintech") ||
                        p.category.toLowerCase().includes("trading") ||
                        p.category.toLowerCase().includes("payment")
                      );
                    if (category === "Web & Branding")
                      return (
                        p.category.toLowerCase().includes("branding") ||
                        p.category.toLowerCase().includes("web") ||
                        p.category.toLowerCase().includes("enterprise")
                      );
                    return true;
                  }).length;

            const isActive = activeFilter === category;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(category)}
                className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ""}`}
              >
                {category === "Live Products" && "🟢 "}
                {category} ({count})
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          key={activeFilter + (showAll ? "-all" : "-home")}
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              className={styles.gridItem}
              variants={cardVariants}
            >
              <article className={styles.card}>
                {/* Top Image Preview Canvas */}
                <Link
                  href={`/projects/${project.slug}`}
                  className={styles.imageCanvas}
                  aria-label={`View case study: ${project.title}`}
                >
                  <Image
                    src={project.thumbnail}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.image}
                    priority={index < 2}
                  />

                  {/* Top Badges */}
                  <div className={styles.topBadges}>
                    <span className={styles.categoryBadge}>
                      {project.category.split("/")[0].trim()}
                    </span>
                    {project.liveUrl && (
                      <span className={styles.livePulseBadge}>
                        <span className={styles.pulseDot} aria-hidden="true" />
                        <span>Live</span>
                      </span>
                    )}
                  </div>
                </Link>

                {/* Bottom Content Body */}
                <div className={styles.cardBody}>
                  <div className={styles.textStack}>
                    <Link href={`/projects/${project.slug}`} className={styles.titleLink}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                    </Link>
                    {project.subtitle && (
                      <p className={styles.projectSubtitle}>{project.subtitle}</p>
                    )}
                  </div>

                  <div className={styles.cardFooter}>
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.liveBtn}
                        title={`Visit live site: ${project.title}`}
                        aria-label={`Visit live site: ${project.title}`}
                      >
                        <span>Visit Live</span>
                        <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    ) : (
                      <span className={styles.figmaTag}>Figma UI/UX</span>
                    )}

                    <Link
                      href={`/projects/${project.slug}`}
                      className={styles.caseStudyBtn}
                      title={`Open case study: ${project.title}`}
                      aria-label={`Open case study: ${project.title}`}
                    >
                      <span>Case Study</span>
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}

          {/* Interactive CTA Card for Home */}
          {!showAll && activeFilter === "All" && (
            <motion.div className={styles.gridItem} variants={cardVariants}>
              <div className={styles.ctaCard}>
                <div className={styles.ctaTop}>
                  <div className={styles.ctaBadge}>
                    <Sparkles size={13} color="var(--accent-orange)" aria-hidden="true" />
                    <span>Available for Hire</span>
                  </div>
                  <h3 className={styles.ctaHeading}>
                    Have a project in mind? Let&apos;s build something great.
                  </h3>
                  <p className={styles.ctaDesc}>
                    Specialized in fintech web portals, enterprise multi-dashboards, and mobile application design systems.
                  </p>
                </div>

                <div className={styles.ctaBottom}>
                  <Link href="/contact" className={styles.ctaButton}>
                    <span>Start a Project</span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
