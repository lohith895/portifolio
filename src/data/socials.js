import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from 'react-icons/fa';

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/lohith895",
    icon: FaGithub,
    color: "#333333"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/a-lohith-venkata-guptha-56532a269/",
    icon: FaLinkedin,
    color: "#0A66C2"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/A_LOHITH_VENKATA_GUPTHA/",
    icon: FaCode,
    color: "#FFA116"
  },
  {
    name: "Email",
    url: "mailto:lohi.valli@gmail.com",
    icon: FaEnvelope,
    color: "#EA4335"
  }
];

export const socials = SOCIAL_LINKS;
export default SOCIAL_LINKS;
