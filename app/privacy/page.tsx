'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserSecret, FaMapMarkedAlt, FaCreditCard, 
         FaHistory, FaUserFriends, FaEnvelope, FaCookie } from 'react-icons/fa';
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

const privacySections = [
  {
    icon: FaShieldAlt,
    title: 'Data Protection',
    content: `We take the protection of your personal data seriously. All information collected through our services is encrypted and stored securely using industry-standard protocols. We regularly update our security measures to ensure your data remains protected.`
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Location Data',
    content: `As a taxi booking service, we collect and process location data to:
    • Provide accurate pickup and drop-off services
    • Optimize routes for better service
    • Track journey progress for safety
    • Calculate accurate fares
    Location data is only collected during active bookings and is automatically anonymized after trip completion.`
  },
  {
    icon: FaCreditCard,
    title: 'Payment Information',
    content: `We process payment information through secure, PCI-compliant payment gateways. We never store complete credit card details on our servers. All payment data is encrypted and processed through our trusted payment partner, Razorpay.`
  },
  {
    icon: FaHistory,
    title: 'Booking History',
    content: `We maintain a history of your bookings to:
    • Improve our services
    • Handle disputes and complaints
    • Provide personalized recommendations
    • Generate required tax documents
    You can request deletion of your booking history through our support team.`
  },
  {
    icon: FaUserFriends,
    title: 'Information Sharing',
    content: `We share your information only with:
    • Assigned drivers for trip completion
    • Payment processors for transaction processing
    • Legal authorities when required by law
    We never sell your personal data to third parties.`
  },
  {
    icon: FaCookie,
    title: 'Cookies & Tracking',
    content: `We use cookies and similar tracking technologies to:
    • Remember your preferences
    • Improve website performance
    • Analyze user behavior
    • Provide personalized experiences
    You can manage cookie preferences through your browser settings.`
  },
  {
    icon: FaUserSecret,
    title: 'Your Rights',
    content: `You have the right to:
    • Access your personal data
    • Request data correction
    • Request data deletion
    • Object to data processing
    • Export your data
    Contact our privacy team to exercise these rights.`
  }
];

export default function Privacy() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Your privacy is our priority. Learn how we protect and manage your data.
            </p>
          </motion.div>

          <div className="space-y-8">
            {privacySections.map((section, index) => (
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
                    Have Privacy Concerns?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our privacy team is here to help with any questions or concerns.
                  </p>
                  <a
                    href="/support"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                  >
                    Contact Privacy Team
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