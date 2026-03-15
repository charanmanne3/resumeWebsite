export interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Tech Job Market Analytics Pipeline",
    description:
      "Engineered an end-to-end ETL pipeline that ingests tech job postings from APIs, transforms the data, and loads analytics-ready datasets into PostgreSQL. Airflow DAGs orchestrate extraction and transformation while a Streamlit dashboard visualizes hiring trends, skills demand, and market signals.",
    longDescription:
      "A comprehensive ETL pipeline that automates the collection and analysis of tech job market data. Built with Apache Airflow for workflow orchestration, Python for data processing, Pandas for transformation, and Streamlit for interactive dashboards. The pipeline ingests data from job APIs, cleans and transforms it, and loads it into PostgreSQL for analytics. The Streamlit dashboard provides visualizations of hiring trends, in-demand skills, and market signals.",
    technologies: ["Python", "Apache Airflow", "Docker", "PostgreSQL", "Pandas", "Streamlit"],
    featured: true,
  },
  {
    title: "Autonomous Data Science Lab",
    description:
      "Built a modular multi-agent workflow that automates dataset loading, cleaning, feature engineering, model training, evaluation, and reporting. Implemented experiment tracking with MLflow and exposed the pipeline via FastAPI with scheduled orchestration using Airflow.",
    longDescription:
      "An automated machine learning pipeline that orchestrates the full data science lifecycle. The multi-agent system handles dataset loading, data cleaning, feature engineering, model training with scikit-learn, evaluation, and reporting. MLflow tracks experiments for reproducibility. The pipeline is exposed via FastAPI and scheduled with Apache Airflow for automated runs.",
    technologies: ["Python", "FastAPI", "Airflow", "MLflow", "scikit-learn", "Docker", "PostgreSQL"],
    featured: true,
  },
  {
    title: "Real-Time Cloud Data Pipeline",
    description:
      "Built a cloud-native pipeline that ingests data from Salesforce APIs and web sources into S3, transforms records using PySpark in AWS Glue, and exposes analytics-ready datasets through Athena with dashboards in QuickSight.",
    longDescription:
      "A serverless data pipeline on AWS that ingests data from Salesforce APIs and web sources into S3. AWS Glue with PySpark handles transformation and schema evolution. Amazon Athena provides SQL querying over the data lake, and QuickSight dashboards enable business intelligence and reporting.",
    technologies: ["AWS Glue", "PySpark", "Athena", "QuickSight", "S3", "Salesforce APIs"],
    featured: true,
  },
];
