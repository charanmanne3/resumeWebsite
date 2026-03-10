"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { StaggerContainer, StaggerItem, motion } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { blogPosts } from "@/data/blog";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogSection() {
  return (
    <section id="blog" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-muted-foreground">
            Thoughts on software engineering, cloud, and AI
          </p>
        </div>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <motion.div
                    whileHover={{
                      y: -4,
                      boxShadow:
                        "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                    className="h-full"
                  >
                    <Card className="h-full transition-colors">
                      <CardHeader className="space-y-1">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            {formatDate(post.date)}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                        <CardTitle className="text-lg">{post.title}</CardTitle>
                        <CardDescription className="line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 text-sm font-medium",
                            "text-primary hover:underline"
                          )}
                        >
                          Read more
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
