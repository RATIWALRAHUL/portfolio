import type { Metadata } from "next";
import BlogGrid from "@/components/sections/BlogGrid";

export const metadata: Metadata = {
  title: "Case Notes & Articles — Geeta Bisht",
  description:
    "Insights on fintech UX, enterprise admin panels, and brand design systems by Geeta Bisht.",
};

export default function BlogPage() {
  return (
    <main id="main-content">
      <BlogGrid />
    </main>
  );
}
