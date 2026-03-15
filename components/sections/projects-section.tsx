"use client";

import Link from "next/link";
import { Folder, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn, StaggerContainer, StaggerItem, motion } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn>
          <h2 className="flex items-center gap-2 text-3xl font-bold mb-4">
            <Folder className="h-8 w-8" />
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            Data engineering and AI/ML projects — ETL pipelines, analytics platforms, and cloud-native workflows.
          </p>
        </FadeIn>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow:
                      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                  }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "h-full rounded-xl transition-all duration-200",
                    project.featured &&
                      "bg-gradient-to-br from-primary/30 via-primary/10 to-transparent p-[1px]"
                  )}
                >
                  <Card
                    className={cn(
                      "h-full transition-colors hover:border-primary/30",
                      project.featured && "border-0"
                    )}
                  >
                    <CardHeader className="flex flex-row items-start justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <Folder className="h-5 w-5 text-primary shrink-0" />
                        <CardTitle className="text-lg truncate">{project.title}</CardTitle>
                      </div>
                      {project.github && (
                        <Button
                          asChild
                          variant="ghost"
                          size="icon"
                          className="shrink-0 h-8 w-8"
                        >
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="line-clamp-3">
                        {project.description}
                      </CardDescription>
                      {project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                      {project.github && (
                        <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gap-2"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <Github className="h-4 w-4" />
                            GitHub
                          </Link>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
