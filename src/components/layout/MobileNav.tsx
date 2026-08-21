"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Button from "@/components/ui/Button";
import styles from "./MobileNav.module.css";

interface NavLinkItem {
  href: string;
  label: string;
}

const links: NavLinkItem[] = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const overlayVariants: Variants = {
    closed: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : "100%",
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.28,
        ease: [0.32, 0, 0.67, 0],
      },
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.32,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const containerVariants: Variants = {
    closed: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: shouldReduceMotion ? 0 : 0.08,
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.3,
        ease: "easeOut",
      },
    },
  };

  // Lock body scroll & trap focus when overlay is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      // Focus first interactive element inside overlay
      const focusableElements = overlayRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements && focusableElements.length > 0) {
        focusableElements[0].focus();
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsOpen(false);
          triggerRef.current?.focus();
          return;
        }

        // Focus trap
        if (e.key === "Tab" && focusableElements && focusableElements.length > 0) {
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div className={styles.mobileNavWrapper}>
      {/* Hamburger / Close Button */}
      <button
        ref={triggerRef}
        type="button"
        className={styles.menuBtn}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-dialog"
      >
        {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
      </button>

      {/* Fullscreen Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-dialog"
            ref={overlayRef}
            className={styles.overlay}
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className={styles.topBar}>
              <Link
                href="/"
                className={styles.overlayLogo}
                onClick={closeMenu}
                aria-label="Geeta Bisht — Return to homepage"
              >
                GEETA BISHT
              </Link>
              <button
                type="button"
                className={styles.menuBtn}
                onClick={closeMenu}
                aria-label="Close mobile menu"
              >
                <X size={24} aria-hidden="true" />
              </button>
            </div>

            <div className={styles.content}>
              <motion.nav
                className={styles.linksList}
                variants={containerVariants}
                initial="closed"
                animate="open"
                exit="closed"
                aria-label="Mobile site navigation"
              >
                {links.map((link) => (
                  <motion.div key={link.href} variants={linkVariants}>
                    <Link
                      href={link.href}
                      className={styles.navLink}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              <motion.div
                className={styles.actions}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.25, duration: 0.25 }}
              >
                <div className={styles.toggleWrap}>
                  <span>Appearance</span>
                  <ThemeToggle />
                </div>
                <div onClick={closeMenu}>
                  <Button href="/contact">
                    Let&apos;s Talk
                  </Button>
                </div>
              </motion.div>
            </div>

            <div className={styles.bottomInfo}>
              <span>UI/UX Designer • Jaipur, India</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
