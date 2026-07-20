import React from 'react';
import { motion } from 'framer-motion';
import './Subtitle.css';

export const Subtitle = ({ children, className = '', ...props }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className={`subtitle-common text-base sm:text-lg max-w-2xl ${className}`}
      {...props}
    >
      {children}
    </motion.p>
  );
};

export default Subtitle;
