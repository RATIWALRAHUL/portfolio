import Link from "next/link";
import { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "dark";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
  "aria-expanded"?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  onClick,
  type = "button",
  "aria-label": ariaLabel,
  "aria-expanded": ariaExpanded,
}: ButtonProps) {
  const className = `${styles.btn} ${styles[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
    >
      {children}
    </button>
  );
}
