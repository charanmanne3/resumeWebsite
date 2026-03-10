import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/projects-section";
import { GitHubRepos } from "@/components/sections/github-repos";
import { fetchGitHubRepos } from "@/lib/github";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my software engineering projects including full-stack applications, AI chatbots, and cloud-deployed systems.",
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
