import type { Metadata } from "next";
import { CertificationsSection } from "@/components/sections/certifications-section";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Professional certifications including Google Associate Cloud Engineer, AWS Cloud Practitioner, and Microsoft Azure Fundamentals.",
};

export default function CertificationsPage() {
  return (
    <div className="pt-16">
      <CertificationsSection />
    </div>
  );
}
