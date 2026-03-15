export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    icon: "Code2",
    skills: ["Python", "SQL", "Java", "JavaScript", "C", "C++"],
  },
  {
    name: "Data Engineering",
    icon: "Database",
    skills: [
      "Apache Airflow",
      "ETL / ELT",
      "Spark",
      "PySpark",
      "Kafka",
      "PostgreSQL",
      "MongoDB",
      "Pandas",
      "Data Modeling",
      "API Integration",
      "AWS Glue",
      "Athena",
    ],
  },
  {
    name: "AI / Machine Learning",
    icon: "Brain",
    skills: [
      "LangChain",
      "LangGraph",
      "Ollama",
      "PyTorch",
      "scikit-learn",
      "MLflow",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    name: "Cloud / DevOps",
    icon: "Cloud",
    skills: [
      "AWS",
      "Snowflake",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Lambda",
      "S3",
      "API Gateway",
      "CloudWatch",
      "EventBridge",
      "EKS",
      "EC2",
      "VPC",
      "Secrets Manager",
    ],
  },
  {
    name: "Web",
    icon: "Globe",
    skills: [
      "React",
      "Angular",
      "FastAPI",
      "Django",
      "Streamlit",
      "HTML",
      "CSS",
    ],
  },
];
