export interface Certification {
  title: string;
  issuer: string;
  period: string;
  icon: string;
  color: string;
}

export const certifications: Certification[] = [
  {
    title: "Google Associate Cloud Engineer",
    issuer: "Google Cloud",
    period: "2024 – 2027",
    icon: "Cloud",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    period: "2022 – 2025",
    icon: "Server",
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    period: "2022 – 2025",
    icon: "Cloud",
    color: "from-blue-600 to-indigo-500",
  },
  {
    title: "Advanced RPA Professional",
    issuer: "UiPath",
    period: "2022 – 2024",
    icon: "Bot",
    color: "from-purple-500 to-pink-500",
  },
];
