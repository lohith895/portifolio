import { FaRobot, FaHospital, FaLaptopCode, FaBrain, FaAward, FaCheckCircle } from 'react-icons/fa';

export const ACHIEVEMENTS_DATA = [
  {
    id: "ach-1",
    title: "Anti-Proxy Smart Appearance Monitoring System",
    description: "Developed AI-powered attendance system using YOLOv8 face detection, InsightFace verification, and OpenCV.",
    icon: FaRobot,
    color: "text-blue-400",
    category: "AI & Computer Vision"
  },
  {
    id: "ach-2",
    title: "Hospital Management System Architecture",
    description: "Architected Spring Boot REST microservices backend with RBAC security, PostgreSQL indexing, and AI virtual assistant.",
    icon: FaHospital,
    color: "text-purple-400",
    category: "Java Enterprise SaaS"
  },
  {
    id: "ach-3",
    title: "Trainee Software Employee at B2B Infotech",
    description: "Built & maintained scalable MERN stack web applications and cross-platform Flutter mobile applications for Android & iOS.",
    icon: FaLaptopCode,
    color: "text-emerald-400",
    category: "Full-Stack & Mobile"
  },
  {
    id: "ach-4",
    title: "AI/ML & Generative AI Internships",
    description: "Built predictive analytics models (XGBoost, Keras DNN) at Blackbucks and GenAI/NLP chatbot at Aimers Society.",
    icon: FaBrain,
    color: "text-amber-400",
    category: "Machine Learning & GenAI"
  }
];

export const achievements = ACHIEVEMENTS_DATA;
export default ACHIEVEMENTS_DATA;
