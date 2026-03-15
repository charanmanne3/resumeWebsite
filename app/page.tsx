import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";

const ExperienceSection = dynamic(
  () =>
    import("@/components/sections/experience-section").then((mod) => ({
      default: mod.ExperienceSection,
    })),
  { loading: () => <SectionSkeleton /> }
);

const ProjectsSection = dynamic(
  () =>
    import("@/components/sections/projects-section").then((mod) => ({
      default: mod.ProjectsSection,
    })),
  { loading: () => <SectionSkeleton /> }
);

const SkillsSection = dynamic(
  () =>
    import("@/components/sections/skills-section").then((mod) => ({
      default: mod.SkillsSection,
    })),
  { loading: () => <SectionSkeleton /> }
);

const CertificationsSection = dynamic(
  () =>
    import("@/components/sections/certifications-section").then((mod) => ({
      default: mod.CertificationsSection,
    })),
  { loading: () => <SectionSkeleton /> }
);

const BlogSection = dynamic(
  () =>
    import("@/components/sections/blog-section").then((mod) => ({
      default: mod.BlogSection,
    })),
  { loading: () => <SectionSkeleton /> }
);

const ContactSection = dynamic(
  () =>
    import("@/components/sections/contact-section").then((mod) => ({
      default: mod.ContactSection,
    })),
  { loading: () => <SectionSkeleton /> }
);

function SectionSkeleton() {
  return (
    <div className="py-24 min-h-[200px] max-w-6xl mx-auto px-4">
      <div className="h-8 w-48 bg-muted/30 rounded animate-pulse mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-40 bg-muted/20 rounded-xl animate-pulse" />
        ))}
      </div>
    </div>
  );
}

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
