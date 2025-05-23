'use client';

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
  mode?: 'fade' | 'slide' | 'scale';
}

const variants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slide: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 }
  }
};

export default function PageTransition({ 
  children, 
  className = '',
  mode = 'fade'
}: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants[mode]}
        transition={{ 
          duration: 0.3,
          ease: "easeInOut"
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 