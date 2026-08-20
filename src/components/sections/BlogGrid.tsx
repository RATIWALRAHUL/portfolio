"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";
import styles from "./BlogGrid.module.css";

export default function BlogGrid() {
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

  return (
    <section className={styles.section} aria-label="Blog articles and thoughts">
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow">Articles &amp; Insights</p>
          <h1 className={styles.title}>Writing &amp; Thoughts</h1>
          <p className={styles.subtitle}>
            Reflections on product craft, design system architecture, and building
            accessible, human-centric software.
          </p>
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.slug}
              className={styles.card}
              variants={cardVariants}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={post.coverImage}
                  alt={`Cover graphic for ${post.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.image}
                />
              </div>

              <div className={styles.content}>
                <div>
                  <div className={styles.metaRow}>
                    <span className={styles.metaItem}>
                      <Calendar size={13} aria-hidden="true" /> {post.date}
                    </span>
                    <span>•</span>
                    <span className={styles.metaItem}>
                      <Clock size={13} aria-hidden="true" /> {post.readTime}
                    </span>
                  </div>

                  <h2 className={styles.postTitle}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className={styles.titleLink}
                      aria-label={`Read article: ${post.title}`}
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className={styles.excerpt}>{post.excerpt}</p>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className={styles.readMore}
                  aria-label={`Read full article on ${post.title}`}
                >
                  Read Article <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
