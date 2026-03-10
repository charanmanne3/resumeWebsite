"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink, Code2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import type { GitHubRepo } from "@/lib/github";

const languageColors: Record<string, string> = {
  Python: "bg-blue-500",
  Java: "bg-orange-500",
  JavaScript: "bg-yellow-500",
  TypeScript: "bg-blue-600",
  HTML: "bg-red-500",
  CSS: "bg-purple-500",
  Jupyter: "bg-orange-400",
  Shell: "bg-green-500",
};

export function GitHubRepos({ repos }: { repos: GitHubRepo[] }) {
  if (!repos.length) return null;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="gradient-text">GitHub Repositories</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Automatically synced from GitHub. Check out my latest work.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <StaggerItem key={repo.id}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="h-full hover:border-foreground/20 transition-colors group">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <Code2 className="h-4 w-4 text-muted-foreground" />
                          <CardTitle className="text-base group-hover:text-blue-400 transition-colors">
                            {repo.name}
                          </CardTitle>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {repo.description || "No description available"}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        {repo.language && (
                          <span className="flex items-center gap-1.5">
                            <span
                              className={`h-2.5 w-2.5 rounded-full ${
                                languageColors[repo.language] || "bg-gray-500"
                              }`}
                            />
                            {repo.language}
                          </span>
                        )}
                        {repo.stargazers_count > 0 && (
                          <span className="flex items-center gap-1">
                            <Star className="h-3.5 w-3.5" />
                            {repo.stargazers_count}
                          </span>
                        )}
                        {repo.forks_count > 0 && (
                          <span className="flex items-center gap-1">
                            <GitFork className="h-3.5 w-3.5" />
                            {repo.forks_count}
                          </span>
                        )}
                      </div>
                      {repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {repo.topics.slice(0, 4).map((topic) => (
                            <Badge
                              key={topic}
                              variant="secondary"
                              className="text-[10px] px-2 py-0"
                            >
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
