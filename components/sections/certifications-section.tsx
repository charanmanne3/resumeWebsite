"use client";

import { Cloud, Server, Bot, Calendar, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  StaggerContainer,
  StaggerItem,
  motion,
} from "@/components/motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { certifications } from "@/data/certifications";

const iconMap: Record<string, LucideIcon> = {
  Cloud,
  Server,
  Bot,
};

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">
          <span className="gradient-text">Certifications</span>
        </h2>

        <StaggerContainer>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certifications.map((cert) => {
              const IconComponent = iconMap[cert.icon] ?? Cloud;
              return (
                <StaggerItem key={cert.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="h-full"
                  >
                    <Card className="h-full overflow-hidden border-border shadow-sm hover:shadow-lg transition-shadow">
                      {/* Gradient accent bar at top */}
                      <div
                        className={cn(
                          "h-1 rounded-t-xl bg-gradient-to-r",
                          cert.color
                        )}
                        aria-hidden
                      />
                      <CardHeader>
                        <div className="flex items-start gap-3">
                          <IconComponent className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                          <div>
                            <CardTitle className="text-lg">
                              {cert.title}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">
                              {cert.issuer}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 shrink-0" />
                          <span>{cert.period}</span>
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
