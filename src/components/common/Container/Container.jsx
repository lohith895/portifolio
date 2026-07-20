import React from 'react';
import './Container.css';

export const Container = ({ children, size = '7xl', className = '', ...props }) => {
  const sizeMap = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div className={`container-common ${sizeMap[size] || 'max-w-7xl'} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
