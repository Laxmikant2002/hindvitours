'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaSearchLocation, FaClipboardCheck, FaCreditCard, FaSmileBeam } from 'react-icons/fa';

interface Step {
  title: string;
  icon: React.ReactNode;
  description: string;
  link?: {
    text: string;
    href: string;
  };
}

const steps: Step[] = [
  {
    title: 'Find Your Dream Tour',
    icon: <FaSearchLocation className="h-8 w-8 text-indigo-600" />,
    description: 'Browse our curated routes and destinations across India. Use filters to find the perfect trip for you or your group.',
    link: {
      text: 'Browse Routes',
      href: '/routes'
    }
  },
  {
    title: 'Book Easily Online',
    icon: <FaClipboardCheck className="h-8 w-8 text-indigo-600" />,
    description: 'Select your dates, customize your package, and reserve your spot in just a few clicks with our secure booking system.',
    link: {
      text: 'Book Now',
      href: '/booking'
    }
  },
  {
    title: 'Secure Payment',
    icon: <FaCreditCard className="h-8 w-8 text-indigo-600" />,
    description: 'Pay safely using multiple payment options. Receive instant confirmation and all your travel details by email.'
  },
  {
    title: 'Enjoy Your Journey',
    icon: <FaSmileBeam className="h-8 w-8 text-indigo-600" />,
    description: 'Relax and let us handle the rest! Our team ensures a smooth, memorable, and safe travel experience from start to finish.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const decorationVariants = {
  hidden: { scale: 0.8, opacity: 0.2 },
  visible: {
    scale: 1,
    opacity: 0.3,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

const HowItWorks = () => (
  <section className="relative py-16 bg-gradient-to-b from-white to-indigo-50 overflow-hidden">
    <div className="container mx-auto px-6 sm:px-8 relative z-10">
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          How It Works
        </h2>
        <p className="text-lg text-gray-600">
          Planning your dream Indian adventure has never been easier. Follow these simple steps to begin your journey.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            variants={stepVariants}
            whileHover={{ y: -8 }}
            className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center group"
          >
            {/* Step Number */}
            <div className="absolute -top-4 left-4 bg-indigo-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
              {idx + 1}
            </div>

            {/* Icon */}
            <motion.div
              className="mb-6 relative"
              whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-indigo-100 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
              {step.icon}
            </motion.div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              {step.description}
            </p>

            {/* Link */}
            {step.link && (
              <Link 
                href={step.link.href}
                className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors mt-auto"
              >
                {step.link.text} →
              </Link>
            )}

            {/* Decorative line connecting steps */}
            {idx < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-indigo-200" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Decorative background elements */}
    <motion.div
      variants={decorationVariants}
      initial="hidden"
      animate="visible"
      className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl z-0"
    />
    <motion.div
      variants={decorationVariants}
      initial="hidden"
      animate="visible"
      className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl z-0"
    />
  </section>
);

export default HowItWorks; 