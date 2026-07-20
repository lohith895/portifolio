import { FaJava, FaPython, FaReact, FaNodeJs, FaAws, FaGitAlt, FaHtml5, FaCss3Alt, FaBrain, FaServer, FaDatabase, FaShieldAlt, FaMobileAlt, FaCode, FaLinux, FaTerminal, FaCheckCircle } from 'react-icons/fa';
import { SiSpringboot, SiFlutter, SiMongodb, SiPostgresql, SiExpress, SiCplusplus, SiGitlab, SiPostman } from 'react-icons/si';

export const SKILL_CATEGORIES = [
  "All",
  "Programming Languages",
  "Backend & APIs",
  "Frontend & Mobile",
  "Databases",
  "Cloud & DevOps",
  "Tools & Platforms",
  "Software Engineering"
];

export const SKILLS_LIST = [
  // Programming Languages
  { id: "s-1", name: "Java", category: "Programming Languages", subtitle: "Object-Oriented Language", icon: FaJava, color: "#5382A1" },
  { id: "s-2", name: "Python", category: "Programming Languages", subtitle: "Data Science & AI", icon: FaPython, color: "#3776AB" },
  { id: "s-3", name: "JavaScript (ES6+)", category: "Programming Languages", subtitle: "Modern Web Logic", icon: FaCode, color: "#F7DF1E" },
  { id: "s-4", name: "C++", category: "Programming Languages", subtitle: "Data Structures & Systems", icon: SiCplusplus, color: "#00599C" },
  { id: "s-5", name: "Dart", category: "Programming Languages", subtitle: "Flutter Mobile Language", icon: SiFlutter, color: "#0175C2" },

  // Backend & APIs
  { id: "s-6", name: "Spring Boot", category: "Backend & APIs", subtitle: "Java Framework", icon: SiSpringboot, color: "#6DB33F" },
  { id: "s-7", name: "Spring MVC", category: "Backend & APIs", subtitle: "Enterprise Web Architecture", icon: FaServer, color: "#6DB33F" },
  { id: "s-8", name: "Node.js", category: "Backend & APIs", subtitle: "Server-side JavaScript", icon: FaNodeJs, color: "#339933" },
  { id: "s-9", name: "Express.js", category: "Backend & APIs", subtitle: "REST API Services", icon: SiExpress, color: "#000000" },
  { id: "s-10", name: "RESTful API Design", category: "Backend & APIs", subtitle: "Endpoint Architecture", icon: FaServer, color: "#3B82F6" },
  { id: "s-11", name: "JWT Authentication", category: "Backend & APIs", subtitle: "Secure Tokens", icon: FaShieldAlt, color: "#EC4899" },
  { id: "s-12", name: "RBAC Access Control", category: "Backend & APIs", subtitle: "Role-Based Permissions", icon: FaShieldAlt, color: "#8B5CF6" },

  // Frontend & Mobile
  { id: "s-13", name: "React.js", category: "Frontend & Mobile", subtitle: "Frontend UI Library", icon: FaReact, color: "#61DAFB" },
  { id: "s-14", name: "Flutter", category: "Frontend & Mobile", subtitle: "Cross-Platform Mobile Apps", icon: SiFlutter, color: "#02569B" },
  { id: "s-15", name: "HTML5", category: "Frontend & Mobile", subtitle: "Web Markup", icon: FaHtml5, color: "#E34F26" },
  { id: "s-16", name: "CSS3", category: "Frontend & Mobile", subtitle: "Responsive Styling", icon: FaCss3Alt, color: "#1572B6" },

  // Databases
  { id: "s-17", name: "MongoDB", category: "Databases", subtitle: "NoSQL Document Database", icon: SiMongodb, color: "#47A248" },
  { id: "s-18", name: "PostgreSQL", category: "Databases", subtitle: "Relational RDBMS", icon: SiPostgresql, color: "#4169E1" },

  // Cloud & DevOps
  { id: "s-19", name: "AWS S3", category: "Cloud & DevOps", subtitle: "Cloud Object Storage", icon: FaAws, color: "#FF9900" },
  { id: "s-20", name: "AWS CloudFront", category: "Cloud & DevOps", subtitle: "Content Delivery Network", icon: FaAws, color: "#FF9900" },

  // Tools & Platforms
  { id: "s-21", name: "Git", category: "Tools & Platforms", subtitle: "Version Control", icon: FaGitAlt, color: "#F05032" },
  { id: "s-22", name: "GitLab", category: "Tools & Platforms", subtitle: "DevOps & Repositories", icon: SiGitlab, color: "#FC6D26" },
  { id: "s-23", name: "Linux", category: "Tools & Platforms", subtitle: "OS & Shell Scripting", icon: FaLinux, color: "#FCC624" },
  { id: "s-24", name: "Postman", category: "Tools & Platforms", subtitle: "API Testing & Docs", icon: SiPostman, color: "#FF6C37" },

  // Software Engineering
  { id: "s-25", name: "Object-Oriented Programming (OOP)", category: "Software Engineering", subtitle: "Inheritance, Polymorphism, Encapsulation", icon: FaBrain, color: "#8B5CF6" },
  { id: "s-26", name: "Data Structures & Algorithms", category: "Software Engineering", subtitle: "Arrays, Trees, Graphs, Sorting", icon: FaCode, color: "#10B981" },
  { id: "s-27", name: "SDLC & Agile", category: "Software Engineering", subtitle: "Sprint Cycles & Reviews", icon: FaCheckCircle, color: "#3B82F6" },
  { id: "s-28", name: "Unit Testing & Debugging", category: "Software Engineering", subtitle: "Quality Assurance", icon: FaCheckCircle, color: "#EC4899" }
];

export const CORE_STRENGTHS = [
  "Object-Oriented Programming (OOP)",
  "Full-Stack Web Development",
  "Mobile App Development (Flutter)",
  "RESTful API Design & Integration",
  "JWT & Role-Based Access Control (RBAC)",
  "Performance Optimization & Scalability",
  "Agile Team Collaboration & Git Workflows",
  "Analytical Problem Solving"
];

export const CURRENTLY_LEARNING = [
  { name: "Microservices Architecture", description: "Service-oriented breakdown with Spring Cloud & Node.js" },
  { name: "Advanced AWS Cloud Services", description: "Deployment automation with AWS S3 & CloudFront" },
  { name: "Generative AI Integration", description: "NLP chatbots and LLM prompt engineering" },
  { name: "Database Performance Tuning", description: "Query optimization and index tuning on PostgreSQL & MongoDB" }
];

export const SKILLS = SKILLS_LIST;
export const skills = SKILLS_LIST;
export default skills;
