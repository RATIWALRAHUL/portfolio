import ProjectGrid from "@/components/sections/ProjectGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Case Studies — Geeta Bisht",
  description: "Explore 8 featured fintech, admin panel, and mobile application projects designed by Geeta Bisht.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content" style={{ paddingTop: 32 }}>
      <ProjectGrid showAll={true} />
    </main>
  );
}
