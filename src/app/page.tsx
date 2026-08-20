import Hero from "@/components/sections/Hero";
import Specialties from "@/components/sections/Specialties";
import Stats from "@/components/sections/Stats";
import ProjectGrid from "@/components/sections/ProjectGrid";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Specialties />
      <Stats />
      <ProjectGrid />
    </main>
  );
}



