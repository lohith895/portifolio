import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  gradientBorder = false,
  onClick,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -6 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={onClick}
      className={`card-common glass-card ${
        gradientBorder ? 'gradient-border' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
