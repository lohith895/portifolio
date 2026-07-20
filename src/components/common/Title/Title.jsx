import React from 'react';
import { motion } from 'framer-motion';
import './Title.css';

export const Title = ({ children, level = 'h2', className = '', ...props }) => {
  const Tag = level;
  const sizeStyles = {
    h1: 'text-4xl sm:text-6xl lg:text-7xl',
    h2: 'text-3xl sm:text-4xl md:text-5xl',
    h3: 'text-2xl sm:text-3xl',
    h4: 'text-xl sm:text-2xl',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
    >
      <Tag className={`title-common ${sizeStyles[level]} ${className}`} {...props}>
        {children}
      </Tag>
    </motion.div>
  );
};

export default Title;
