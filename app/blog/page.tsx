import type { Metadata } from "next";
import { BlogSection } from "@/components/sections/blog-section";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles about software engineering, cloud computing, AI development, and career insights by Sree Charan Sai Manne.",
};

export default function BlogPage() {
  return (
    <div className="pt-16">
      <BlogSection />
    </div>
  );
}
