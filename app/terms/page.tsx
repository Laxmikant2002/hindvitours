'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/ui/PageLayout';
import { 
  FaFileContract, 
  FaMoneyBillWave, 
  FaBan, 
  FaShieldAlt,
  FaUserSecret,
  FaGavel,
  FaGlobe,
  FaExclamationTriangle
} from 'react-icons/fa';

interface TermsSection {
  id: string;
  title: string;
  content: string;
  icon: React.ElementType;
}

const termsSections: TermsSection[] = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: 'By accessing or using HindviTours services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
    icon: FaFileContract
  },
  {
    id: 'booking',
    title: 'Booking & Payments',
    content: 'All bookings are subject to availability. Payment must be made in full at the time of booking. We accept major credit cards and other payment methods as specified on our payment page.',
    icon: FaMoneyBillWave
  },
  {
    id: 'cancellation',
    title: 'Cancellation Policy',
    content: 'Cancellations made 7 days before the tour date are eligible for a full refund. Cancellations within 3-7 days receive a 50% refund. No refunds for cancellations within 72 hours of the tour.',
    icon: FaBan
  },
  {
    id: 'privacy',
    title: 'Privacy & Data',
    content: 'Your privacy is important to us. We collect and process your data in accordance with our Privacy Policy. By using our services, you consent to our data practices.',
    icon: FaUserSecret
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    content: 'While we strive to provide accurate information and reliable services, we are not liable for any indirect, incidental, or consequential damages arising from the use of our services.',
    icon: FaShieldAlt
  },
  {
    id: 'disputes',
    title: 'Dispute Resolution',
    content: 'Any disputes arising from these terms will be resolved through arbitration in accordance with Indian law. The arbitration shall take place in New Delhi, India.',
    icon: FaGavel
  },
  {
    id: 'modifications',
    title: 'Modifications',
    content: 'We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.',
    icon: FaGlobe
  },
  {
    id: 'prohibited',
    title: 'Prohibited Activities',
    content: 'Users must not engage in any unlawful conduct, interfere with our services, or use our platform for unauthorized commercial purposes.',
    icon: FaExclamationTriangle
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Terms() {
  const lastUpdated = '2024-02-23';

  return (
    <PageLayout>
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
              <br />
              <span className="text-sm">Last updated: {lastUpdated}</span>
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {termsSections.map((section) => (
              <motion.div
                key={section.id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                      <section.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Need Clarification?</h2>
              <p className="text-lg mb-8 opacity-90">
                If you have any questions about our Terms of Service, our support team is here to help.
              </p>
              <button
                onClick={() => window.location.href = '/support'}
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    </PageLayout>
  );
} 