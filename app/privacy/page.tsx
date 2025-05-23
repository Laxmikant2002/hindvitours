'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/ui/PageLayout';
import { 
  FaShieldAlt, 
  FaUserSecret, 
  FaCookieBite, 
  FaEnvelope,
  FaDatabase,
  FaLock,
  FaGlobe,
  FaUserFriends
} from 'react-icons/fa';

interface PolicySection {
  id: string;
  title: string;
  content: string;
  icon: React.ElementType;
}

const policySections: PolicySection[] = [
  {
    id: 'data-collection',
    title: 'Information We Collect',
    content: 'We collect information that you provide directly to us, including name, contact information, payment details, and travel preferences. We also automatically collect certain information about your device when you use our services.',
    icon: FaDatabase
  },
  {
    id: 'data-usage',
    title: 'How We Use Your Information',
    content: 'We use your information to process bookings, provide customer support, send important updates about your travel arrangements, and improve our services. We may also use your data to personalize your experience and send relevant promotional offers.',
    icon: FaUserSecret
  },
  {
    id: 'data-sharing',
    title: 'Information Sharing',
    content: 'We share your information with travel providers and partners necessary to fulfill your booking. We do not sell your personal information to third parties. We may share anonymous, aggregated data for analytical purposes.',
    icon: FaUserFriends
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
    icon: FaLock
  },
  {
    id: 'cookies',
    title: 'Cookies & Tracking',
    content: 'We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookie settings through your browser.',
    icon: FaCookieBite
  },
  {
    id: 'international',
    title: 'International Transfers',
    content: 'Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this policy.',
    icon: FaGlobe
  },
  {
    id: 'your-rights',
    title: 'Your Rights & Choices',
    content: 'You have the right to access, correct, or delete your personal information. You can also opt-out of marketing communications at any time. Contact us to exercise these rights.',
    icon: FaShieldAlt
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: 'If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at privacy@hindvitours.com.',
    icon: FaEnvelope
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

export default function Privacy() {
  return (
    <PageLayout>
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {policySections.map((section) => (
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
              <h2 className="text-3xl font-bold mb-4">Have Questions About Your Privacy?</h2>
              <p className="text-lg mb-8 opacity-90">
                Our team is here to help you understand how we protect your data.
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