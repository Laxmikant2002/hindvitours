import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ 
  size = 'md', 
  color = 'indigo',
  text = 'Loading...',
  showText = true,
  center = true 
}) => {
  const sizeClasses = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const colorClasses = {
    indigo: 'border-indigo-500',
    purple: 'border-purple-500',
    blue: 'border-blue-500',
    white: 'border-white'
  };

  const containerClasses = `
    flex items-center gap-3
    ${center ? 'justify-center' : ''}
  `;

  return (
    <div className={containerClasses}>
      <motion.div
        animate={{ 
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`
          rounded-full 
          border-2 
          border-transparent 
          ${colorClasses[color]} 
          ${sizeClasses[size]}
        `}
      />
      {showText && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`
            text-${color === 'white' ? 'white' : 'gray-600'}
            ${size === 'xs' || size === 'sm' ? 'text-sm' : 'text-base'}
            font-medium
          `}
        >
          {text}
        </motion.span>
      )}
    </div>
  );
};

// Usage examples:
// <LoadingSpinner /> - Default medium size with loading text
// <LoadingSpinner size="sm" showText={false} /> - Small spinner without text
// <LoadingSpinner size="lg" color="purple" text="Please wait..." /> - Large purple spinner with custom text
// <LoadingSpinner size="xl" color="white" /> - Extra large white spinner for dark backgrounds

export default LoadingSpinner;
