import { FaLaptopCode, FaCoffee, FaMobileAlt, FaRobot, FaCheckCircle, FaBrain, FaServer, FaCloud, FaRocket, FaCogs } from 'react-icons/fa';

export const ABOUT_DATA = {
  badge: "Discover My Journey",
  heading: "About Me",
  subtitle: "Building software that is scalable, secure, and user-centric.",
  story: [
    "I am a results-driven Software Engineer with a strong computer science foundation and hands-on expertise across full-stack web, mobile app development, and AI integration.",
    "My engineering journey focuses on crafting robust backend services with Java and Spring Boot, interactive frontend interfaces using React, and cross-platform mobile apps with Flutter. I thrive on solving complex architectural challenges and delivering high-performance, real-world solutions."
  ],
  checkmarks: [
    "Full Stack Development (React & Node.js)",
    "Java & Spring Boot Enterprise Architecture",
    "Cross-Platform Mobile Apps with Flutter",
    "Generative AI & LLM Integration",
    "RESTful APIs & Microservices",
    "Cloud Telemetry & DevOps Automation"
  ],
  ctaText: "Let's Build Something Great Together",
};

export const HIGHLIGHTS = [
  {
    id: "h-1",
    title: "Full Stack Development",
    description: "Building scalable, high-performance web applications using modern React, Next.js, and Node.js.",
    icon: FaLaptopCode,
    color: "text-cyan-400"
  },
  {
    id: "h-2",
    title: "Java & Spring Boot",
    description: "Developing secure, enterprise-grade backend microservices and RESTful API endpoints.",
    icon: FaCoffee,
    color: "text-amber-400"
  },
  {
    id: "h-3",
    title: "Flutter Development",
    description: "Crafting fluid, high-fidelity cross-platform mobile apps for iOS and Android.",
    icon: FaMobileAlt,
    color: "text-purple-400"
  },
  {
    id: "h-4",
    title: "AI & Machine Learning",
    description: "Integrating intelligent automation, OpenAI APIs, and vector embeddings into real workflows.",
    icon: FaRobot,
    color: "text-pink-400"
  }
];

export const STATS_DATA = [
  { label: "Years Experience", value: 1, suffix: "+" },
  { label: "Professional Roles & Internships", value: 3, suffix: "+" },
  { label: "Major Production Projects", value: 4, suffix: "+" },
  { label: "Technologies Mastered", value: 25, suffix: "+" }
];

export const STRENGTHS = [
  { name: "Problem Solving", icon: FaBrain },
  { name: "System Design", icon: FaCogs },
  { name: "Backend Engineering", icon: FaServer },
  { name: "Performance Optimization", icon: FaRocket },
  { name: "Cloud Ready Architecture", icon: FaCloud },
  { name: "Agile Development", icon: FaCheckCircle }
];

export default ABOUT_DATA;
