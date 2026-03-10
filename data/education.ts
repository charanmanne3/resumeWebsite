export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  gpa?: string;
  location: string;
}

export const education: Education[] = [
  {
    institution: "University of North Texas",
    degree: "Master of Science",
    field: "Computer Information Sciences",
    period: "Aug 2024 – May 2026",
    location: "Denton, Texas",
  },
  {
    institution: "Koneru Lakshmaiah Education Foundation",
    degree: "Bachelor of Technology",
    field: "Computer Science",
    period: "2020 – 2024",
    gpa: "CGPA 8.5",
    location: "India",
  },
];
