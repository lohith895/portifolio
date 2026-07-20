import React from 'react';
import { motion } from 'framer-motion';
import { HERO_SOCIALS } from './heroData';

export const SocialLinks = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {HERO_SOCIALS.map((link, idx) => {
        const Icon = link.icon;
        const isGitHub = link.name === 'GitHub';
        return (
          <motion.a
            key={link.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + idx * 0.08 }}
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            className="p-3 rounded-xl glass-card text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300 shadow-md flex items-center justify-center"
          >
            <Icon
              className={`text-xl ${isGitHub ? 'github-icon' : ''}`}
              style={isGitHub ? {} : { color: link.color }}
            />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
