import { FaGithub, FaLinkedin, FaCode, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/lohith895",
    icon: FaGithub,
    color: "#ffffff"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/a-lohith-venkata-guptha-56532a269/",
    icon: FaLinkedin,
    color: "#0A66C2"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/919121946531",
    icon: FaWhatsapp,
    color: "#25D366"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/A_LOHITH_VENKATA_GUPTHA/",
    icon: FaCode,
    color: "#FFA116"
  },
  {
    name: "Gmail",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=lohi.valli@gmail.com",
    icon: SiGmail,
    color: "#EA4335"
  }
];

export const socials = SOCIAL_LINKS;
export default SOCIAL_LINKS;
