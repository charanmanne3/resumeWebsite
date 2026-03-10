"use client";

import {
  Code2,
  Globe,
  Cloud,
  Brain,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  StaggerContainer,
  StaggerItem,
  motion,
} from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Globe,
  Cloud,
  Brain,
  Wrench,
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">
          <span className="gradient-text">Skills & Technologies</span>
        </h2>

        <StaggerContainer>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const IconComponent = iconMap[category.icon] ?? Code2;
              return (
                <StaggerItem key={category.name}>
                  <motion.div
                    whileHover={{
                      boxShadow:
                        "0 0 20px -5px rgba(120, 119, 198, 0.3), 0 0 40px -10px rgba(120, 119, 198, 0.2)",
                    }}
                    transition={{ duration: 0.2 }}
                    className="h-full"
                  >
                    <Card className="relative h-full overflow-hidden border-border">
                      {/* Gradient top border */}
                      <div
                        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500"
                        aria-hidden
                      />
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <IconComponent className="h-5 w-5 text-primary" />
                          {category.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <motion.div
                              key={skill}
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.15 }}
                            >
                              <Badge variant="secondary">{skill}</Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
