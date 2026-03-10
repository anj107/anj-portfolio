import HeroSection from "@/components/hero";
import { ProjectSection } from "@/components/project";
import ContactSection from "@/components/contact";
import FooterSection from "@/components/footer";
import TechLogoSection from "@/components/Techstack";
import EducationSection from "@/components/Education";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TechLogoSection/>
      <EducationSection />
      <ProjectSection/>
      <ContactSection/>
      <FooterSection/>
    </div>
  );
}
