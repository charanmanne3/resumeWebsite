import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
