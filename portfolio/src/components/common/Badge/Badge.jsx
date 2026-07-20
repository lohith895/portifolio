import React from 'react';
import './Badge.css';

export const Badge = ({
  children,
  variant = 'cyan', // 'cyan', 'purple', 'pink', 'outline'
  size = 'md',
  className = '',
}) => {
  const variants = {
    cyan: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
    pink: 'bg-pink-500/10 text-pink-400 border border-pink-500/20',
    outline: 'bg-slate-800/40 text-slate-300 border border-slate-700',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs font-medium',
    lg: 'px-4 py-1.5 text-sm font-semibold',
  };

  return (
    <span className={`badge-common ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};
