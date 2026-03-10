import type { Metadata } from "next";
import { SkillsSection } from "@/components/sections/skills-section";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills and technologies: Python, Java, SQL, AWS, Azure, Snowflake, Django, Spring Boot, and more.",
};

export default function SkillsPage() {
  return (
    <div className="pt-16">
      <SkillsSection />
    </div>
  );
}
