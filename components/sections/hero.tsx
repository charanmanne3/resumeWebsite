"use client";

import Link from "next/link";
import { MapPin, ArrowRight, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="hero-gradient absolute inset-0 -z-10" />

      {/* Grid pattern overlay */}
      <div className="grid-pattern absolute inset-0 -z-10 opacity-50" />

      <div className="max-w-4xl mx-auto px-4 text-center">
        <FadeIn delay={0.1}>
          <Badge variant="secondary" className="mb-6 gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {SITE_CONFIG.location}
          </Badge>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="gradient-text">{SITE_CONFIG.name}</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-muted-foreground mb-3">
            Software Engineer | Cloud | Data | AI
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8">
            Building scalable cloud systems and AI-powered applications.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/projects" className="gap-2">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={SITE_CONFIG.resumeUrl} className="gap-2" target="_blank" rel="noopener noreferrer">
                Download Resume
                <Download className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/contact" className="gap-2">
                Contact Me
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <motion.div
            className={cn(
              "glass rounded-xl p-4 mt-8 max-w-md mx-auto",
              "grid grid-cols-3 gap-4"
            )}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">1+</div>
              <div className="text-xs text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">4</div>
              <div className="text-xs text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">3</div>
              <div className="text-xs text-muted-foreground">Cloud Platforms</div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
