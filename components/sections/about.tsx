"use client";

import { GraduationCap } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { education } from "@/data/education";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-12">About Me</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* About text - left column */}
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Motivated graduate student in Computer Information Sciences with
              hands-on experience building AI chatbots, cloud-based systems, and
              full-stack applications. Strong collaborator and fast learner
              seeking entry-level roles in Software Engineering, Cloud
              Engineering, or Data Engineering.
            </p>
          </FadeIn>

          {/* Education cards - right column */}
          <div>
            <FadeIn delay={0.2}>
              <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
                <GraduationCap className="h-5 w-5" />
                Education
              </h3>
            </FadeIn>
            <StaggerContainer delay={0.3}>
              <div className="space-y-4">
                {education.map((edu) => (
                  <StaggerItem key={edu.institution}>
                    <div className="glass rounded-xl p-5">
                      <div className="font-semibold text-foreground">
                        {edu.institution}
                      </div>
                      <div className="text-sm font-medium text-muted-foreground mt-1">
                        {edu.degree} in {edu.field}
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                        <span>{edu.period}</span>
                        {edu.gpa && <span>{edu.gpa}</span>}
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
