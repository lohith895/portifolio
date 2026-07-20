import { FaReact, FaJava, FaPython, FaDatabase, FaCode } from 'react-icons/fa';
import { SiMongodb, SiNodedotjs, SiUdemy, SiHackerrank } from 'react-icons/si';

export const CERTIFICATIONS_DATA = [
  {
    id: "cert-1",
    title: "Full Stack Web Development – MEAN, MERN, MongoDB",
    issuer: "Udemy",
    date: "2024",
    credentialId: "UDEMY-FS-98421",
    credentialUrl: "https://udemy.com/certificate/fullstack",
    icon: SiUdemy,
    color: "#A435F0",
    skills: ["MERN Stack", "MEAN Stack", "MongoDB", "Express.js", "React.js", "Node.js"]
  },
  {
    id: "cert-2",
    title: "Backend Development with Node.js",
    issuer: "HackerRank",
    date: "2024",
    credentialId: "HR-NODE-77319",
    credentialUrl: "https://hackerrank.com/certificates/backend",
    icon: SiHackerrank,
    color: "#2EC866",
    skills: ["Node.js", "RESTful APIs", "JWT", "Backend Architecture"]
  },
  {
    id: "cert-3",
    title: "Front-end Development – HTML, JavaScript",
    issuer: "Professional Certification",
    date: "2024",
    credentialId: "FE-DEV-44120",
    credentialUrl: "https://coursera.org/verify/frontend",
    icon: FaReact,
    color: "#61DAFB",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive UI Design"]
  },
  {
    id: "cert-4",
    title: "Artificial Intelligence",
    issuer: "Infosys Springboard / Technical Certification",
    date: "2024",
    credentialId: "AI-CERT-33194",
    credentialUrl: "https://nptel.ac.in/noc/noc_certificates",
    icon: FaCode,
    color: "#8B5CF6",
    skills: ["AI Fundamentals", "Generative AI", "NLP", "Machine Learning"]
  },
  {
    id: "cert-5",
    title: "Python (Basic)",
    issuer: "HackerRank / Technical Certification",
    date: "2023",
    credentialId: "PY-BASIC-10492",
    credentialUrl: "https://hackerrank.com/certificates/python",
    icon: FaPython,
    color: "#3776AB",
    skills: ["Python", "Data Preprocessing", "Algorithms"]
  },
  {
    id: "cert-6",
    title: "Database Management Systems (DBMS)",
    issuer: "NPTEL / Technical Certification",
    date: "2023",
    credentialId: "DBMS-NPTEL-88214",
    credentialUrl: "https://nptel.ac.in/noc/noc_certificates",
    icon: FaDatabase,
    color: "#4169E1",
    skills: ["PostgreSQL", "MongoDB", "SQL", "Database Design", "Indexing"]
  }
];

export const certifications = CERTIFICATIONS_DATA;
export default CERTIFICATIONS_DATA;
