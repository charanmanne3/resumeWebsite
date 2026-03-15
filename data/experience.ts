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
    title: "AI/ML Engineer Intern",
    company: "Aeries Technology (Victory Live)",
    location: "Remote",
    period: "May 2025 – Aug 2025",
    type: "Internship",
    achievements: [
      "Built AI chatbot and analytics solutions using Snowflake, Cortex AI, Cortex Analytics, Python, and Streamlit",
      "Designed a multi-agent AI system that routed requests to specialized agents for natural-language-to-SQL queries, analytics Q&A, and summarization",
      "Automated analytics workflows and enabled natural-language querying over enterprise datasets",
      "Integrated SQL-based enterprise datasets and documented production workflows",
    ],
    technologies: ["Python", "Streamlit", "Snowflake", "Cortex AI", "Cortex Analytics", "SQL"],
  },
];
