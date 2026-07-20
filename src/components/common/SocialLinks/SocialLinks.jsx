import React from 'react';
import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../../../data/socials';
import './SocialLinks.css';

const iconMap = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaCode: FaCode,
  FaEnvelope: FaEnvelope,
};

export const SocialLinks = ({ className = '', iconSize = 'text-xl' }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {SOCIAL_LINKS.map((link) => {
        const IconComponent = typeof link.icon === 'function' ? link.icon : (iconMap[link.icon] || FaGithub);
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            aria-label={link.name}
            className="social-link-item p-3 rounded-xl glass-card text-slate-300 hover:text-blue-400 hover:border-blue-500/50 shadow-md flex items-center justify-center min-h-[44px] min-w-[44px]"
          >
            <IconComponent className={iconSize} style={{ color: link.color }} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
