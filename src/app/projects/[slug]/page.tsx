import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Building,
  User,
  Wrench,
  Calendar,
  ExternalLink,
  Sparkles,
  Key,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { projects } from "@/lib/data";
import DemoCredentialsCard from "@/components/ui/DemoCredentialsCard";
import LiveWebsitesDirectory from "@/components/ui/LiveWebsitesDirectory";
import ProjectGallery from "@/components/ui/ProjectGallery";
import styles from "./ProjectDetail.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found — Geeta",
    };
  }

  return {
    title: `${project.title} — Geeta Bisht Portfolio`,
    description: project.body,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  if (!projects[currentIndex]) {
    notFound();
  }

  const project = projects[currentIndex];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className={styles.pageContainer}>
      {/* 1. Full-Bleed Hero Banner */}
      <div className={styles.bannerWrap}>
        <Image
          src={project.bannerImage || project.thumbnail}
          alt={`Banner showcase for ${project.title}`}
          fill
          priority
          sizes="100vw"
          className={styles.bannerImage}
        />
        <div className={styles.bannerOverlay}>
          <div className={`container ${styles.bannerTop}`}>
            <Link href="/projects" className={styles.backLink} aria-label="Back to all projects">
              <ArrowLeft size={16} aria-hidden="true" />
              <span>Back to Projects</span>
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.livePlatformBtn}
              >
                <span>Visit Live Platform</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            )}
          </div>

          <div className={`container ${styles.bannerBottom}`}>
            <span className={styles.categoryPill}>{project.category}</span>
            <h1 className={styles.title}>{project.title}</h1>
            {project.subtitle && (
              <p className={styles.subtitle}>{project.subtitle}</p>
            )}
          </div>
        </div>
      </div>

      {/* 2. Main Content Grid */}
      <div className={`container ${styles.contentGrid}`}>
        {/* Left / Top: Metadata Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.metaCard}>
            <div className={styles.metaItem}>
              <div className={styles.metaIcon} aria-hidden="true">
                <Building size={18} />
              </div>
              <div className={styles.metaContent}>
                <span className={styles.metaLabel}>Client</span>
                <span className={styles.metaValue}>{project.client}</span>
              </div>
            </div>

            <div className={styles.metaItem}>
              <div className={styles.metaIcon} aria-hidden="true">
                <User size={18} />
              </div>
              <div className={styles.metaContent}>
                <span className={styles.metaLabel}>Role</span>
                <span className={styles.metaValue}>{project.role}</span>
              </div>
            </div>

            <div className={styles.metaItem}>
              <div className={styles.metaIcon} aria-hidden="true">
                <Calendar size={18} />
              </div>
              <div className={styles.metaContent}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>{project.timeline}</span>
              </div>
            </div>

            <div className={styles.metaItem}>
              <div className={styles.metaIcon} aria-hidden="true">
                <Wrench size={18} />
              </div>
              <div className={styles.metaContent}>
                <span className={styles.metaLabel}>Tools &amp; Methods</span>
                <div className={styles.toolsList}>
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className={styles.toolTag}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {project.liveUrl && (
              <div className={styles.metaItem}>
                <div className={styles.metaIcon} aria-hidden="true">
                  <Globe size={18} />
                </div>
                <div className={styles.metaContent}>
                  <span className={styles.metaLabel}>Live Production</span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "var(--accent-orange-text)",
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    Open Website <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Right: Case Study Story */}
        <main className={styles.mainStory} id="main-content">
          <article>
            {/* Overview / Introduction */}
            <section className={styles.sectionBlock} aria-labelledby="overview-heading">
              <h2 id="overview-heading" className={styles.sectionHeading}>Project Overview</h2>
              <p className={styles.leadParagraph}>{project.intro}</p>
            </section>

            {/* Live Demo Access & Test Credentials Box (for OMS) */}
            {project.slug === "office-management-software" && (
              <DemoCredentialsCard />
            )}

            {/* Live Client Project Links Grid (for corporate websites) */}
            {project.slug === "business-corporate-websites" && (
              <LiveWebsitesDirectory />
            )}

            {/* Live Interactive Figma Prototype Embed (if available) */}
            {project.figmaEmbedUrl && (
              <section className={styles.figmaSection} aria-label="Interactive Figma Prototype">
                <div className={styles.figmaHeader}>
                  <div className={styles.figmaTitleWrap}>
                    <Sparkles size={20} color="var(--accent-orange)" aria-hidden="true" />
                    <h2 className={styles.figmaTitle}>Interactive Figma Prototype</h2>
                    <span className={styles.figmaBadge}>Live Design Embed</span>
                  </div>
                  <a
                    href="https://www.figma.com/design/7kQG75VXD4vecbehE8CbPW/Damru-By-Namo--Copy-?node-id=2005-2"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.figmaDirectLink}
                  >
                    Open Fullscreen in Figma <ExternalLink size={14} aria-hidden="true" />
                  </a>
                </div>
                <div className={styles.figmaIframeContainer}>
                  <iframe
                    src={project.figmaEmbedUrl}
                    className={styles.figmaIframe}
                    title={`${project.title} Figma Design Prototype`}
                    allowFullScreen
                  />
                </div>
              </section>
            )}

            {/* Impact Highlights */}
            {project.impactMetrics && project.impactMetrics.length > 0 && (
              <div className={styles.metricsGrid} aria-label="Project impact metrics">
                {project.impactMetrics.map((metric, idx) => (
                  <div key={idx} className={styles.metricCard}>
                    <span className={styles.metricValue}>{metric.value}</span>
                    <span className={styles.metricLabel}>{metric.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Challenge Section */}
            <section className={styles.sectionBlock} aria-labelledby="challenge-heading">
              <h2 id="challenge-heading" className={styles.subheading}>The Challenge</h2>
              <p className={styles.paragraph}>{project.challenge}</p>
            </section>

            {/* Inline Mockup 1 */}
            {project.galleryImages?.[0] && (
              <div>
                <div className={styles.mockupContainer}>
                  <Image
                    src={project.galleryImages[0].url}
                    alt={`Interface visual for ${project.title}`}
                    fill
                    sizes="(max-width: 960px) 100vw, 70vw"
                    className={styles.mockupImage}
                  />
                </div>
                {project.galleryImages[0].caption && (
                  <p className={styles.imageCaption}>
                    {project.galleryImages[0].caption}
                  </p>
                )}
              </div>
            )}

            {/* Approach & Strategy Section */}
            <section className={styles.sectionBlock} aria-labelledby="approach-heading">
              <h2 id="approach-heading" className={styles.subheading}>Approach &amp; Discovery</h2>
              <p className={styles.paragraph}>{project.approach}</p>
            </section>

            {/* Solution & Outcome Section */}
            <section className={styles.sectionBlock} aria-labelledby="solution-heading">
              <h2 id="solution-heading" className={styles.subheading}>The Solution &amp; Outcome</h2>
              <p className={styles.paragraph}>{project.solution}</p>
              <p className={styles.paragraph}>{project.body}</p>
            </section>

            {/* Interactive Image Gallery with Click to Preview Lightbox */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <ProjectGallery
                images={project.galleryImages}
                projectTitle={project.title}
              />
            )}
          </article>

          {/* 3. Next Project Navigation Card */}
          <div className={styles.nextProjectWrap}>
            <Link
              href={`/projects/${nextProject.slug}`}
              className={styles.nextCard}
              aria-label={`Next Project: ${nextProject.title}`}
            >
              <div className={styles.nextInfo}>
                <span className={styles.nextEyebrow}>Next Project</span>
                <h3 className={styles.nextTitle}>{nextProject.title}</h3>
                <span className={styles.nextCategory}>{nextProject.category}</span>
              </div>
              <div className={styles.nextArrow} aria-hidden="true">
                <ArrowRight size={24} />
              </div>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
