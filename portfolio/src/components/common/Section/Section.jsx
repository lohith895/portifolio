import React from 'react';
import './Section.css';

export const Section = ({ id, children, className = '', bg = 'transparent', ...props }) => {
  const bgStyles = {
    transparent: 'bg-transparent',
    muted: 'bg-slate-900/40',
    card: 'bg-slate-900/70',
  };

  return (
    <section id={id} className={`section-wrapper ${bgStyles[bg] || ''} ${className}`} {...props}>
      {children}
    </section>
  );
};

export default Section;
