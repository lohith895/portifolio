import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../../../data/socials';
import './SocialLinks.css';

const iconMap = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaTwitter: FaTwitter,
  FaEnvelope: FaEnvelope,
};

export const SocialLinks = ({ className = '', iconSize = 'text-xl' }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {SOCIAL_LINKS.map((link) => {
        const IconComponent = iconMap[link.icon] || FaGithub;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            className="social-link-item p-3 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 shadow-md"
          >
            <IconComponent className={iconSize} />
          </a>
        );
      })}
    </div>
  );
};
