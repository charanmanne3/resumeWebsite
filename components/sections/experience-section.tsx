"use client";

import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn, StaggerContainer, StaggerItem, motion } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn>
          <h2 className="flex items-center gap-2 text-3xl font-bold mb-12">
            <Briefcase className="h-8 w-8" />
            <span className="gradient-text">Experience</span>
          </h2>
        </FadeIn>

        <StaggerContainer>
          <div className="relative">
            {/* Vertical timeline line - hidden on mobile, visible on md+ */}
            <div
              className={cn(
                "absolute left-[11px] top-0 bottom-0 w-px bg-border",
                "hidden md:block"
              )}
              aria-hidden
            />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <StaggerItem key={`${exp.company}-${exp.period}`}>
                  <div className="relative flex gap-6 md:gap-8">
                    {/* Timeline dot - hidden on mobile, visible on md+ */}
                    <div
                      className={cn(
                        "absolute left-0 top-6 h-3 w-3 rounded-full border-2 border-primary bg-background shrink-0",
                        "hidden md:block"
                      )}
                      aria-hidden
                    />

                    <div className="md:pl-8 flex-1 min-w-0">
                      <motion.div
                        className={cn(
                          "rounded-xl border border-slate-700 bg-slate-900/70 backdrop-blur-md p-6",
                          "shadow-sm hover:shadow-md transition-shadow"
                        )}
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                          <h3 className="text-xl font-semibold text-foreground">
                            {exp.title}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">{exp.period}</Badge>
                            <Badge variant="outline">{exp.type}</Badge>
                          </div>
                        </div>

                        <p className="text-muted-foreground text-sm mb-4">
                          {exp.company} · {exp.location}
                        </p>

                        {exp.achievements.length > 0 && (
                          <ul className="space-y-2 mb-4">
                            {exp.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="text-sm text-muted-foreground flex gap-2"
                              >
                                <span className="text-primary mt-1.5 shrink-0">
                                  •
                                </span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {exp.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                            {exp.technologies.map((tech) => (
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
                      </motion.div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
