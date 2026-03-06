import Education from "@/components/Education";
import HeroSection from "@/components/hero";
import TechLogo from "@/components/Techstack";
import { ProjectSection } from "@/components/Project-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TechLogo />
      <Education />
      <ProjectSection/>
    </div>
  );
}
