import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";
import Button from "@/components/ui/Button";
import styles from "./Navbar.module.css";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="Geeta Bisht — Return to homepage">
          GEETA BISHT
        </Link>

        <nav className={styles.links} aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.right}>
          <div className={styles.desktopActions}>
            <ThemeToggle />
            <Button href="/contact">Let&apos;s Talk</Button>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
