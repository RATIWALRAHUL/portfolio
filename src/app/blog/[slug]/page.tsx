import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { blogPosts } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found — Geeta",
    };
  }

  return {
    title: `${post.title} — Geeta Portfolio`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main id="main-content" style={{ padding: "80px 0 120px" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <Link
          href="/blog"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "14px",
            fontWeight: 600,
            color: "var(--text-muted)",
            marginBottom: "36px",
          }}
          aria-label="Return to all articles"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Articles
        </Link>

        <article>
          <header style={{ marginBottom: "40px" }}>
            <span className="eyebrow">{post.category}</span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 5vw, 48px)",
                margin: "12px 0 20px",
                lineHeight: "1.15",
              }}
            >
              {post.title}
            </h1>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                fontSize: "13px",
                color: "var(--text-muted)",
                fontWeight: 500,
                borderBottom: "1px solid var(--border)",
                paddingBottom: "24px",
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <User size={14} aria-hidden="true" /> Geeta Bisht
              </span>
              <span>•</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <Calendar size={14} aria-hidden="true" /> {post.date}
              </span>
              <span>•</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <Clock size={14} aria-hidden="true" /> {post.readTime}
              </span>
            </div>
          </header>

          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              border: "1px solid var(--border)",
              marginBottom: "48px",
            }}
          >
            <Image
              src={post.coverImage}
              alt={`Cover illustration for ${post.title}`}
              fill
              sizes="(max-width: 900px) 100vw, 800px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              fontSize: "17px",
              lineHeight: "1.8",
              color: "var(--text)",
            }}
          >
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
