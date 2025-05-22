import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaSearchLocation, FaClipboardCheck, FaCreditCard, FaSmileBeam } from 'react-icons/fa';

const steps = [
  {
    title: 'Find Your Dream Tour',
    icon: <FaSearchLocation className="h-8 w-8 text-indigo-600" />,
    description: 'Browse our curated routes and destinations across India. Use filters to find the perfect trip for you or your group.'
  },
  {
    title: 'Book Easily Online',
    icon: <FaClipboardCheck className="h-8 w-8 text-indigo-600" />,
    description: 'Select your dates, customize your package, and reserve your spot in just a few clicks with our secure booking system.'
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.7
    }
  }
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const HowItWorks = () => (
  <section className="relative py-8 bg-gradient-to-b from-white to-indigo-50 overflow-hidden">
    <div className="container mx-auto px-6 sm:px-8 relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-6"
      >
        How It Works
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            variants={stepVariants}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-indigo-200 transition-shadow duration-300"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">{`Step ${idx + 1}: ${step.title}`}</h3>
            <p className="text-gray-600 text-sm mb-4">{step.description}</p>
            {idx === 0 && (
              <Link href="/routes" className="text-indigo-600 font-medium hover:underline text-sm">Browse Routes</Link>
            )}
            {idx === 1 && (
              <Link href="/booking" className="text-indigo-600 font-medium hover:underline text-sm">Book Now</Link>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
    {/* Decorative background shapes */}
    <motion.div
      initial={{ scale: 0.9, opacity: 0.2 }}
      animate={{ scale: 1, opacity: 0.3 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl z-0"
    />
    <motion.div
      initial={{ scale: 1.1, opacity: 0.2 }}
      animate={{ scale: 1, opacity: 0.3 }}
      transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse' }}
      className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl z-0"
    />
  </section>
);

export default HowItWorks;
