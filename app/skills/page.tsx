import type { Metadata } from "next";
import { SkillsSection } from "@/components/sections/skills-section";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Data Engineering and AI/ML skills: Python, SQL, Apache Airflow, Spark, PySpark, AWS, Snowflake, LangChain, PyTorch, and more.",
};

export default function SkillsPage() {
  return (
    <div className="pt-16">
      <SkillsSection />
    </div>
  );
}
