import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

export const Button = ({
  children,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'ghost'
  size = 'md', // 'sm', 'md', 'lg'
  icon: Icon,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'btn-common focus:ring-2 focus:ring-cyan-500/50';

  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02]',
    secondary: 'bg-slate-800 text-slate-100 hover:bg-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 hover:scale-[1.02] border border-slate-700',
    outline: 'border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 hover:scale-[1.02]',
    ghost: 'text-slate-300 hover:bg-slate-800/50 hover:text-white',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5',
  };

  return (
    <motion.button
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon className="text-lg" />}
      <span>{children}</span>
    </motion.button>
  );
};
