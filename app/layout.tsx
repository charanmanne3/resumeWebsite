import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Software Engineer",
    "Cloud Engineer",
    "Data Engineer",
    "AI Developer",
    "Full Stack Developer",
    "Python",
    "Java",
    "AWS",
    "Azure",
    "Snowflake",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
              email: SITE_CONFIG.email,
              jobTitle: "Software Engineer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Denton",
                addressRegion: "TX",
                addressCountry: "US",
              },
              sameAs: [SITE_CONFIG.github, SITE_CONFIG.linkedin],
              knowsAbout: [
                "Software Engineering",
                "Cloud Computing",
                "Artificial Intelligence",
                "Data Engineering",
                "Python",
                "Java",
                "AWS",
                "Azure",
                "Snowflake",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
