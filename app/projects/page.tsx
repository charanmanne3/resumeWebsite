import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/projects-section";
import { GitHubRepos } from "@/components/sections/github-repos";
import { fetchGitHubRepos } from "@/lib/github";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Data engineering and AI/ML projects: ETL pipelines, analytics platforms, cloud-native workflows, and autonomous data science systems.",
};

export default async function ProjectsPage() {
  const repos = await fetchGitHubRepos();

  return (
    <div className="pt-16">
      <ProjectsSection />
      <GitHubRepos repos={repos} />
    </div>
  );
}
