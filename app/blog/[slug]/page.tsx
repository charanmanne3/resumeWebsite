import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-1 mb-4 text-muted-foreground">
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("# ")) {
      flushList();
      elements.push(
        <h1 key={i} className="text-3xl font-bold mt-8 mb-4">
          {line.slice(2)}
        </h1>
      );
    } else if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={i} className="text-2xl font-semibold mt-8 mb-3">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={i} className="text-xl font-semibold mt-6 mb-2">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      inList = true;
      listItems.push(line.slice(2));
    } else if (line.match(/^\d+\.\s/)) {
      inList = true;
      listItems.push(line.replace(/^\d+\.\s/, ""));
    } else if (line.trim() === "") {
      flushList();
    } else {
      flushList();
      const rendered = line
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
        .replace(/`(.*?)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm">$1</code>');
      elements.push(
        <p
          key={i}
          className="text-muted-foreground leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: rendered }}
        />
      );
    }
  }
  flushList();
  return elements;
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="pt-24 pb-16">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 -ml-2">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <hr className="border-border mb-8" />

        <div className="prose-custom">{renderMarkdown(post.content)}</div>
      </article>
    </div>
  );
}
