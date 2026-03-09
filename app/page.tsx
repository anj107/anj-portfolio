import Education from "@/components/Education";
import HeroSection from "@/components/hero";
import TechLogo from "@/components/Techstack";
import { ProjectSection } from "@/components/Project-section";
import ContactSection from "@/components/contact";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TechLogo/>
      <Education />
      <ProjectSection/>
      <ContactSection/>
      <FooterSection/>
    </div>
  );
}
