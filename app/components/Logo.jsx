'use client';

import { motion } from 'framer-motion';

const Logo = ({ className = '', size = 40 }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        initial="hidden"
        animate="visible"
        className="mr-2"
      >
        {/* Circle background with gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="url(#logoGradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* Stylized H for Hindvi */}
        <motion.path
          d="M35 25 L35 75 M35 50 L65 50 M65 25 L65 75"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        />
        
        {/* Abstract mountain shape representing tours/travel */}
        <motion.path
          d="M20 80 L40 50 L60 70 L80 40"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
        />
      </motion.svg>
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="flex flex-col"
      >
        <span className="text-xl font-bold text-gray-900">Hindvi</span>
        <span className="text-sm text-indigo-600 font-medium">Tours</span>
      </motion.div>
    </div>
  );
};

export default Logo;
