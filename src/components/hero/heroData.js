import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from 'react-icons/fa';
import { FaReact, FaJava, FaAws } from 'react-icons/fa';
import { SiSpringboot, SiFlutter, SiMongodb } from 'react-icons/si';

export const HERO_DATA = {
  greeting: "Hi, I'm",
  name: "Appala Lohith Venkata Guptha",
  titles: [
    "Software Engineer",
    "Full Stack Developer",
    "Java Developer",
    "MERN Stack Developer",
    "Flutter Developer",
    "AI Enthusiast",
  ],
  description:
    "Building scalable web and mobile applications with Java, Spring Boot, React, Node.js, Flutter, and AI technologies. Passionate about creating reliable software that solves real-world problems.",
  resumeUrl: "/resume/Appala_Lohith_Resume.pdf",
};

export const HERO_SOCIALS = [
  {
    name: "GitHub",
    url: "https://github.com/lohith895",
    icon: FaGithub,
    color: "#333333",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/a-lohith-venkata-guptha-56532a269/",
    icon: FaLinkedin,
    color: "#0A66C2",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/A_LOHITH_VENKATA_GUPTHA/",
    icon: FaCode,
    color: "#FFA116",
  },
  {
    name: "Email",
    url: "mailto:lohi.valli@gmail.com",
    icon: FaEnvelope,
    color: "#EA4335",
  },
];

export const FLOATING_TECH_ITEMS = [
  { name: "React", icon: FaReact, color: "#61DAFB", position: "-top-5 -left-4" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", position: "-top-5 -right-4" },
  { name: "Java", icon: FaJava, color: "#5382A1", position: "top-1/2 -left-12 -translate-y-1/2" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B", position: "top-1/2 -right-12 -translate-y-1/2" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", position: "-bottom-5 -left-4" },
  { name: "AWS", icon: FaAws, color: "#FF9900", position: "-bottom-5 -right-4" },
];

export default HERO_DATA;
