import Link from "next/link";
import { AtSign, Globe, MessageCircle, Send } from "lucide-react";
import styles from "./Footer.module.css";

const socials = [
  { icon: AtSign, href: "mailto:geetamanish9591@gmail.com", label: "Email" },
  { icon: Send, href: "https://twitter.com", label: "Twitter / X" },
  { icon: Globe, href: "https://behance.net", label: "Behance" },
  { icon: MessageCircle, href: "https://dribbble.com", label: "Dribbble" },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <p className={`eyebrow ${styles.eyebrow}`}>Get in touch</p>
        <h2 className={styles.headline}>
          Let&apos;s work <br /> together
        </h2>

        <div className={styles.row}>
          <a href="mailto:geetamanish9591@gmail.com" className={styles.email}>
            geetamanish9591@gmail.com
          </a>
          <div className={styles.socials}>
            {socials.map(({ icon: Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                className={styles.social}
                aria-label={`Follow Geeta on ${label}`}
                target="_blank"
                rel="noreferrer"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.wordmarkWrap} aria-hidden="true">
        <span className={styles.wordmark}>GEETA</span>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>&copy; {new Date().getFullYear()} Geeta Bisht. All rights reserved.</span>
        <span>Jaipur, India • UI/UX Designer</span>
      </div>
    </footer>
  );
}
