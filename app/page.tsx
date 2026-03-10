import HeroSection from "@/components/hero";
import { ProjectSection } from "@/components/project";
import ContactSection from "@/components/contact";
import FooterSection from "@/components/footer";
import TechLogoSection from "@/components/Techstack";
import EducationSection from "@/components/Education";
import { Background } from "@/components/background";
import { AnimatedDivider } from '@/components/ui/animated-divider';

export default function Home() {
  return (
    <div>
      <Background />
      <HeroSection />
      <AnimatedDivider className="mx-auto w-1/3 md:w-1/3" colorVariant="blueToBlack" direction="center" />
      <TechLogoSection/>
      <AnimatedDivider className="mx-auto w-1/3 md:w-1/3" colorVariant="blueToBlack" direction="center" />
      <EducationSection />
      <AnimatedDivider className="mx-auto w-1/3 md:w-1/3" colorVariant="blueToBlack" direction="center" />
      <ProjectSection/>
      <AnimatedDivider className="mx-auto w-1/3 md:w-1/3" colorVariant="blueToBlack" direction="center" />
      <ContactSection/>
      <AnimatedDivider className="mx-auto w-1/3 md:w-1/3" colorVariant="blueToBlack" direction="center" />
      <FooterSection/>
    </div>
  );
}
