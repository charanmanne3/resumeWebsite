export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "AI Developer Intern",
    company: "Aeries Technology (Victory Live)",
    location: "Remote",
    period: "May 2025 – Aug 2025",
    type: "Internship",
    achievements: [
      "Built AI chatbots using Snowflake CortexAI, enabling natural language interaction with enterprise datasets",
      "Developed intuitive chatbot interfaces using Python and Streamlit, reducing user onboarding time by 40%",
      "Optimized enterprise datasets using advanced SQL queries, improving query performance by 30%",
      "Documented production workflows and created technical guides for team knowledge transfer",
    ],
    technologies: ["Python", "Streamlit", "Snowflake", "CortexAI", "SQL"],
  },
];
