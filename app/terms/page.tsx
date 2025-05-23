'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGavel, FaUserShield, FaCar, FaMoneyBillWave, 
         FaBan, FaStar, FaExclamationTriangle, FaHandshake, 
         FaEnvelope } from 'react-icons/fa';
import PageLayout from '../components/ui/PageLayout';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const termsSection = [
  {
    icon: FaHandshake,
    title: 'Agreement to Terms',
    content: `By accessing or using HindviTours' services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.`
  },
  {
    icon: FaCar,
    title: 'Ride Services',
    content: `Our services include:
    • Booking and facilitating taxi rides
    • Route planning and fare estimation
    • Driver assignment and tracking
    • Electronic payment processing
    
    Users must provide accurate pickup/drop-off locations and passenger details.`
  },
  {
    icon: FaMoneyBillWave,
    title: 'Cancellation Policy',
    content: `Cancellation terms:
    • Free cancellation up to 24 hours before scheduled pickup
    • 50% charge for cancellations within 24 hours
    • Full charge for no-shows or cancellations after driver arrival
    • Force majeure exceptions may apply
    
    Refunds will be processed within 5-7 business days.`
  },
  {
    icon: FaStar,
    title: 'Rating System',
    content: `Our rating system:
    • Both drivers and passengers can rate each trip
    • Ratings are on a 1-5 star scale
    • Low-rated users may face account restrictions
    • False ratings may result in account suspension
    • Rating appeals can be submitted through support`
  },
  {
    icon: FaUserShield,
    title: 'User Responsibilities',
    content: `Users must:
    • Provide accurate personal information
    • Maintain appropriate behavior during rides
    • Follow local transportation laws
    • Report safety concerns immediately
    • Respect driver and vehicle guidelines`
  },
  {
    icon: FaBan,
    title: 'Prohibited Activities',
    content: `The following are prohibited:
    • Fraudulent bookings or payments
    • Harassment of drivers or other users
    • Damage to vehicles
    • Sharing accounts with unauthorized users
    • False reporting of incidents`
  },
  {
    icon: FaExclamationTriangle,
    title: 'Safety and Security',
    content: `Safety measures include:
    • Real-time ride tracking
    • Emergency assistance button
    • Driver background verification
    • Insurance coverage during rides
    • 24/7 customer support
    
    Users must follow safety guidelines provided during rides.`
  },
  {
    icon: FaGavel,
    title: 'Legal Disclaimers',
    content: `• We are not liable for indirect damages
    • Service availability is not guaranteed
    • Terms may be updated without notice
    • Governing law is Indian law
    • Disputes will be resolved through arbitration`
  }
];

export default function Terms() {
  return (
    <PageLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={sectionVariants}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Please read these terms carefully before using our services.
            </p>
          </motion.div>

          <div className="space-y-8">
            {termsSection.map((section, index) => (
              <motion.div
                key={section.title}
                variants={sectionVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mr-4">
                      <section.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  <div className="prose prose-indigo max-w-none">
                    <p className="text-gray-600 whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={sectionVariants}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center justify-center p-6 bg-indigo-50 rounded-2xl">
                <FaEnvelope className="w-6 h-6 text-indigo-600 mr-3" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Need Help Understanding Our Terms?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our support team is here to help clarify any questions about our terms.
                  </p>
                  <a
                    href="/support"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                  >
                    Contact Support
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={sectionVariants}
              className="text-center text-sm text-gray-500 mt-8"
            >
              <p>Last updated: March 2024</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
} 