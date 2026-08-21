"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import styles from "./LiveWebsitesDirectory.module.css";

interface LiveSite {
  name: string;
  domain: string;
  url: string;
  image: string;
  description: string;
  tags: string[];
  role: string;
}

const liveSites: LiveSite[] = [
  {
    name: "Gatecode OMS",
    domain: "gatecode.net",
    url: "http://gatecode.net/",
    image: "/projects/gatecode-oms/live-dashboard.jpg",
    description: "Live 4-in-1 multi-dashboard enterprise system connecting Admin, Employee, Company, and Branch operations in real-time.",
    tags: ["Multi-Dashboard", "Live Demo Access", "Role Permissions"],
    role: "UI/UX System Architect",
  },
  {
    name: "Gatecode Technologies",
    domain: "gatecode.net",
    url: "http://gatecode.net/",
    image: "/projects/gatecode/corporate-home-hero.jpg",
    description: "Official corporate website for Gatecode Technologies showcasing full-cycle product engineering, client case studies, and career paths.",
    tags: ["Corporate Site", "Branding", "Case Studies"],
    role: "Lead UI/UX Designer",
  },
  {
    name: "SDPT Tech",
    domain: "sdpttech.com",
    url: "https://sdpttech.com/",
    image: "/projects/sdpt/live-website-screenshot.jpg",
    description: "Full-service enterprise software solutions, web development services, and cloud engineering corporate platform.",
    tags: ["Corporate Portal", "IT Solutions", "Responsive Web"],
    role: "Lead UI/UX & Web Designer",
  },
  {
    name: "Gatexpay",
    domain: "gatexpay.in",
    url: "https://www.gatexpay.in/",
    image: "/projects/gatexpay/live-hero.jpg",
    description: "High-trust fintech payment gateway web platform with merchant checkout flows, instant API settlement, and compliance security.",
    tags: ["Fintech Gateway", "Payment UI", "Merchant Onboarding"],
    role: "UI/UX & Payment Flow Designer",
  },
  {
    name: "Damru By Namo",
    domain: "damrubynamo.com",
    url: "https://damrubynamo.com/",
    image: "/projects/damru/live-hero.jpg",
    description: "Luxury Indian culinary brand and immersive dining web platform with interactive menu discovery and table reservation flows.",
    tags: ["Hospitality Web", "Brand Identity", "Interactive Menu"],
    role: "Lead UI/UX & Brand Designer",
  },
];

export default function LiveWebsitesDirectory() {
  return (
    <section className={styles.directorySection} aria-labelledby="live-directory-heading">
      <div className={styles.headerWrap}>
        <div className={styles.titleArea}>
          <p className="eyebrow" style={{ marginBottom: 4 }}>Production Portfolio</p>
          <h2 id="live-directory-heading" className={styles.heading}>
            Live Functional Web Properties
          </h2>
          <p className={styles.subtitle}>
            Real desktop browser screenshots captured directly from live deployed websites designed and shipped by Geeta Bisht:
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        {liveSites.map((site) => (
          <a
            key={site.domain}
            href={site.url}
            target="_blank"
            rel="noreferrer"
            className={styles.siteCard}
            aria-label={`Visit live website: ${site.name} at ${site.domain}`}
          >
            {/* Real Browser Mockup Header */}
            <div className={styles.browserFrame}>
              <div className={styles.browserTopBar}>
                <div className={styles.browserDots}>
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                </div>
                <span className={styles.browserUrl}>{site.domain}</span>
                <div className={styles.liveIndicator}>
                  <span className={styles.greenDot} aria-hidden="true" />
                  <span>Live</span>
                </div>
              </div>

              <div className={styles.imageContainer}>
                <Image
                  src={site.image}
                  alt={`Real live desktop browser screenshot of ${site.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className={styles.previewImage}
                />
              </div>
            </div>

            {/* Card Content */}
            <div className={styles.cardContent}>
              <div className={styles.cardBody}>
                <h3 className={styles.siteName}>{site.name}</h3>
                <p className={styles.siteDesc}>{site.description}</p>
                <div className={styles.featuresList}>
                  {site.tags.map((tag) => (
                    <span key={tag} className={styles.featureTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 500 }}>
                  {site.role}
                </span>
                <div className={styles.visitLabel}>
                  <span>Visit Live Site</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
