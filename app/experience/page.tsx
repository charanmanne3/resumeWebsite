import type { Metadata } from "next";
import { ExperienceSection } from "@/components/sections/experience-section";
import { About } from "@/components/sections/about";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience and education background of Sree Charan Sai Manne, including internships and academic journey.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-16">
      <ExperienceSection />
      <About />
    </div>
  );
}
