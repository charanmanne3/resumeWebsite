export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: "Code2",
    skills: ["Python", "Java", "SQL", "JavaScript"],
  },
  {
    name: "Web",
    icon: "Globe",
    skills: ["HTML", "CSS", "Django", "Streamlit"],
  },
  {
    name: "Cloud",
    icon: "Cloud",
    skills: ["AWS", "Azure", "Snowflake"],
  },
  {
    name: "AI / Analytics",
    icon: "Brain",
    skills: ["CortexAI", "Cortex Analytics"],
  },
  {
    name: "Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub"],
  },
];
