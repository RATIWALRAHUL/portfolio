"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className={styles.placeholder} />;

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div className={styles.toggle} role="radiogroup" aria-label="Theme selector">
      <button
        type="button"
        className={`${styles.option} ${!isDark ? styles.active : ""}`}
        onClick={() => setTheme("light")}
        role="radio"
        aria-checked={!isDark}
        aria-label="Switch to light theme"
      >
        {!isDark && (
          <motion.div
            layoutId="activeThemePill"
            className={styles.indicator}
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          />
        )}
        <span className={styles.optionContent}>
          <Sun size={14} aria-hidden="true" /> Light
        </span>
      </button>

      <button
        type="button"
        className={`${styles.option} ${isDark ? styles.active : ""}`}
        onClick={() => setTheme("dark")}
        role="radio"
        aria-checked={isDark}
        aria-label="Switch to dark theme"
      >
        {isDark && (
          <motion.div
            layoutId="activeThemePill"
            className={styles.indicator}
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          />
        )}
        <span className={styles.optionContent}>
          <Moon size={14} aria-hidden="true" /> Dark
        </span>
      </button>
    </div>
  );
}
