"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, ArrowDown, Send, Globe, AtSign, MessageCircle } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
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

  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={`container ${styles.grid}`}>
        {/* Left Column */}
        <motion.div
          className={styles.leftCol}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
        >
          {/* Eyebrow with line & peace hand */}
          <div className={styles.eyebrowWrap}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className={styles.eyebrowText}>Hello, I&apos;m ✌</span>
          </div>

          {/* Large Name — Single Line & Fully Responsive */}
          <div className={styles.headlineWrap}>
            <h1 className={styles.headline}>
              Geeta Bisht
            </h1>
          </div>

          {/* Role line */}
          <p className={styles.role}>
            UI/UX Designer | Based in India
          </p>

          {/* Action Buttons with ↗ arrows */}
          <div className={styles.actions}>
            <Link href="/contact" className={styles.btnPrimary}>
              Let&apos;s Talk <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/projects" className={styles.btnOutline}>
              My Work <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>

          {/* Bottom inline metrics & social icons */}
          <div className={styles.bottomMetricsRow}>
            <div className={styles.metricBlock}>
              <span className={styles.statHighlight}>1.5+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <span className={styles.divider}>|</span>
            <div className={styles.socialIcons} aria-label="Social links">
              <a
                href="https://behance.net"
                className={styles.socialLink}
                aria-label="Behance"
                target="_blank"
                rel="noreferrer"
              >
                <Globe size={18} aria-hidden="true" />
              </a>
              <a
                href="mailto:geetamanish9591@gmail.com"
                className={styles.socialLink}
                aria-label="Email Geeta Bisht"
              >
                <AtSign size={18} aria-hidden="true" />
              </a>
              <a
                href="https://dribbble.com"
                className={styles.socialLink}
                aria-label="Dribbble"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com"
                className={styles.socialLink}
                aria-label="Twitter / X"
                target="_blank"
                rel="noreferrer"
              >
                <Send size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column — Exact Match to Reference */}
        <motion.div
          className={styles.portraitWrap}
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0.1 : 0.65,
            ease: "easeOut",
            delay: shouldReduceMotion ? 0 : 0.15,
          }}
        >
          {/* Angled Organic Warm Background Container */}
          <div className={styles.shapeContainer}>
            {/* Cursive Signature Watermark Running Diagonally */}
            <span className={styles.watermarkText} aria-hidden="true">
              Geeta Bisht
            </span>
          </div>

          {/* Cutout Portrait standing over shape */}
          <div className={styles.portrait}>
            <Image
              src="/geeta-bisht.png"
              alt="Geeta Bisht — UI/UX Designer"
              fill
              priority
              sizes="(max-width: 860px) 360px, 500px"
              className={styles.portraitImage}
            />

            {/* Soft bottom grounding fade */}
            <div className={styles.bottomGroundFade} aria-hidden="true" />
          </div>

          {/* Grounding Base Pedestal Badge */}
          <div className={styles.groundBaseDock}>
            <div className={styles.groundBadge}>
              <span className={styles.groundPulseDot} aria-hidden="true" />
              <span className={styles.groundText}>UI/UX Designer • Available for Projects</span>
            </div>
          </div>

          {/* Underneath Radial Ground Shadow */}
          <div className={styles.groundShadow} aria-hidden="true" />

          {/* Rotating Circular Contact Badge with Down Arrow */}
          <Link
            href="/contact"
            className={styles.contactStamp}
            aria-label="Contact Geeta Bisht"
          >
            <svg
              viewBox="0 0 100 100"
              className={styles.stampSvg}
              aria-hidden="true"
            >
              <path
                id="contactCirclePath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              />
              <text className={styles.stampText}>
                <textPath href="#contactCirclePath" startOffset="0%">
                  CONTACT ME • CONTACT ME •
                </textPath>
              </text>
            </svg>
            <div className={styles.stampCenter}>
              <ArrowDown size={18} strokeWidth={2.5} aria-hidden="true" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
