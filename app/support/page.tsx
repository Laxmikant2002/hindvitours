'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/ui/PageLayout';
import { 
  FaQuestionCircle, 
  FaEnvelope, 
  FaPhone, 
  FaWhatsapp, 
  FaClock,
  FaPlane,
  FaCreditCard,
  FaUserFriends,
  FaMapMarkedAlt,
  FaCalendarAlt,
  FaLock,
  FaShieldAlt
} from 'react-icons/fa';
import SupportForm from '../components/features/SupportForm';

interface FAQ {
  question: string;
  answer: string;
  category: 'booking' | 'payment' | 'general';
}

const faqs: FAQ[] = [
  {
    question: 'How do I book a tour?',
    answer: 'You can book a tour by selecting your desired route from our Tours page, choosing your dates, and following the simple booking process. We\'ll guide you through each step.',
    category: 'booking'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit/debit cards, UPI payments, net banking, and international payments through secure payment gateways.',
    category: 'payment'
  },
  {
    question: 'Can I modify my booking?',
    answer: 'Yes, you can modify your booking up to 48 hours before the tour start date. Please contact our support team for assistance.',
    category: 'booking'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We offer full refunds for cancellations made 7 days before the tour date. Cancellations within 3-7 days receive 50% refund. Please check our detailed policy for more information.',
    category: 'general'
  },
  {
    question: 'Is travel insurance included?',
    answer: 'Basic travel insurance is included in all our packages. Additional coverage can be purchased separately.',
    category: 'general'
  },
  {
    question: 'How do I get my booking confirmation?',
    answer: 'You will receive a booking confirmation email immediately after successful payment. You can also view your booking details in your account.',
    category: 'booking'
  }
];

const contactInfo = {
  phone: '+91 98765 43210',
  email: 'support@hindvitours.com',
  whatsapp: '+91 98765 43210',
  hours: '24/7 Customer Support'
};

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

export default function Support() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'booking' | 'payment' | 'general'>('all');

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <PageLayout>
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">How Can We Help?</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to make your travel experience smooth and enjoyable. Find answers to common questions or reach out to our support team.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                  <FaPhone className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Call Us</h3>
                  <p className="text-gray-600">{contactInfo.phone}</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">WhatsApp</h3>
                  <p className="text-gray-600">{contactInfo.whatsapp}</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <FaClock className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Support Hours</h3>
                  <p className="text-gray-600">{contactInfo.hours}</p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
            
            {/* Category Filters */}
            <div className="flex justify-center space-x-4 mb-8">
              {['all', 'booking', 'payment', 'general'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category as any)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="grid gap-6">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
                >
                  <div className="flex items-start">
                    <FaQuestionCircle className="w-6 h-6 text-indigo-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact Form Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl p-8 md:p-12"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Still Have Questions?</h2>
              <SupportForm />
            </div>
          </motion.section>
        </div>
      </main>
    </PageLayout>
  );
} 