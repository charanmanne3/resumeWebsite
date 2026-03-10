"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE_CONFIG } from "@/lib/constants";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: SITE_CONFIG.location,
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect",
    href: SITE_CONFIG.linkedin,
  },
];

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus({ type: null, message: "" });
    setSending(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          from_email: email,
          subject,
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err instanceof Error ? err.message : "Failed to send message. Please try again.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            Have a question or want to work together? I&apos;d love to hear from
            you.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-md hover:bg-slate-900/80 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium truncate">{item.value}</p>
                    </div>
                  </div>
                );

                if (item.href) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      target={item.label === "LinkedIn" ? "_blank" : undefined}
                      rel={
                        item.label === "LinkedIn"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block"
                    >
                      {content}
                    </Link>
                  );
                }

                return <div key={item.label}>{content}</div>;
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium leading-none"
                >
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={sending}
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={sending}
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium leading-none"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  disabled={sending}
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  disabled={sending}
                  rows={5}
                  className="w-full resize-none"
                />
              </div>
              <Button type="submit" disabled={sending} className="w-full">
                {sending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
              {status.type && (
                <div
                  className={cn(
                    "flex items-center gap-2 p-3 rounded-lg text-sm",
                    status.type === "success"
                      ? "bg-green-500/10 text-green-600 dark:text-green-400"
                      : "bg-destructive/10 text-destructive"
                  )}
                >
                  {status.type === "success" ? (
                    <CheckCircle className="h-4 w-4 shrink-0" />
                  ) : (
                    <AlertCircle className="h-4 w-4 shrink-0" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
