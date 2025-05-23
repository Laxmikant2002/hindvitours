'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHeadset, FaQuestionCircle, FaEnvelope, FaPhone } from 'react-icons/fa';
import PageLayout from '../components/ui/PageLayout';
import FAQSection from '../components/support/FAQSection';
import ContactForm from '../components/support/ContactForm';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: any;
  }
}

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Support() {
  useEffect(() => {
    // Initialize Tawk.to
    var s1 = document.createElement("script");
    var s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/YOUR_TAWK_TO_ID/default';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode?.insertBefore(s1, s0);
  }, []);

  return (
    <PageLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
              <FaHeadset className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How Can We Help?
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions or get in touch with our support team.
            </p>
          </motion.div>

          {/* Quick Contact Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <FaPhone className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  24/7 Phone Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Need immediate assistance? Our support team is available round the clock.
                </p>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center text-green-600 hover:text-green-800"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaEnvelope className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Email Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <a
                  href="mailto:support@hindvitours.com"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  support@hindvitours.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.section variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-4">
                <FaQuestionCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Find quick answers to common questions about our services.
              </p>
            </div>
            <FAQSection />
          </motion.section>

          {/* Contact Form Section */}
          <motion.section variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600">
                Can't find what you're looking for? Send us a message and we'll get back to you.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <ContactForm />
            </div>
          </motion.section>
        </div>
      </motion.div>
    </PageLayout>
  );
} 