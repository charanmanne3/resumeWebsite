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
    title: "Rental Management System",
    description:
      "Full-stack rental platform with booking, enquiry management, and package management deployed on AWS.",
    longDescription:
      "A comprehensive rental management solution featuring user authentication, property listings, booking management, enquiry tracking, and dynamic package management. Built with Django backend, MongoDB for flexible data storage, and deployed on AWS for scalable cloud hosting.",
    technologies: ["Django", "MongoDB", "AWS", "Python", "HTML", "CSS", "JavaScript"],
    featured: true,
  },
  {
    title: "Java Full Stack Application",
    description:
      "Book selling and recommendation system with REST APIs and microservices architecture.",
    longDescription:
      "A microservices-based book commerce platform featuring book catalog management, personalized recommendations, user reviews, and order processing. Built with Spring Boot microservices communicating via REST APIs with service discovery and API gateway patterns.",
    technologies: ["Spring Boot", "Java", "Microservices", "REST API", "MySQL"],
    featured: true,
  },
  {
    title: "AI Chatbot Platform",
    description:
      "Enterprise AI chatbot system powered by Snowflake CortexAI for natural language data interaction.",
    longDescription:
      "An intelligent chatbot platform that enables business users to interact with enterprise datasets using natural language. Powered by Snowflake CortexAI for advanced NLP capabilities with a Streamlit-based user interface.",
    technologies: ["Python", "Snowflake", "CortexAI", "Streamlit", "SQL"],
    featured: true,
  },
];
