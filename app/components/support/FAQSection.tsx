'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    id: '1',
    category: 'booking',
    question: 'How do I book a taxi?',
    answer: 'You can book a taxi through our website or mobile app. Simply enter your pickup and drop-off locations, choose your preferred vehicle type, and confirm your booking. You\'ll receive instant confirmation and driver details.'
  },
  {
    id: '2',
    category: 'booking',
    question: 'Can I schedule a ride in advance?',
    answer: 'Yes, you can schedule rides up to 7 days in advance. Use the "Schedule" option when booking to select your preferred date and time.'
  },
  {
    id: '3',
    category: 'payment',
    question: 'What payment methods are accepted?',
    answer: 'We accept all major credit/debit cards, UPI payments, digital wallets like Paytm and Google Pay, and cash payments.'
  },
  {
    id: '4',
    category: 'payment',
    question: 'How is the fare calculated?',
    answer: 'Fares are calculated based on distance, time of day, and vehicle type. You can see an estimate before confirming your booking.'
  },
  {
    id: '5',
    category: 'ride',
    question: 'What if I need to cancel my ride?',
    answer: 'You can cancel your ride through the app or website. Cancellation fees may apply depending on how close to the pickup time you cancel.'
  },
  {
    id: '6',
    category: 'ride',
    question: 'Is there a waiting charge?',
    answer: 'Yes, waiting charges apply after the first 5 minutes of arrival at the pickup location. The rate is ₹2 per minute.'
  },
  {
    id: '7',
    category: 'safety',
    question: 'What safety measures are in place?',
    answer: 'We have GPS tracking, emergency assistance, driver verification, and regular vehicle inspections. All rides are insured and monitored.'
  },
  {
    id: '8',
    category: 'safety',
    question: 'Can I share my ride status with family?',
    answer: 'Yes, you can share your live ride status with trusted contacts through our "Share Ride" feature in the app.'
  }
];

const categories = [
  { id: 'all', label: 'All Questions' },
  { id: 'booking', label: 'Booking' },
  { id: 'payment', label: 'Payment' },
  { id: 'ride', label: 'During Ride' },
  { id: 'safety', label: 'Safety' }
];

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={false}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={onToggle}
      >
        <span className="text-lg font-medium text-gray-900">{faq.question}</span>
        {isOpen ? (
          <FaChevronUp className="w-5 h-5 text-indigo-600" />
        ) : (
          <FaChevronDown className="w-5 h-5 text-indigo-600" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFAQs, setOpenFAQs] = useState<string[]>([]);

  const filteredFAQs = activeCategory === 'all'
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (faqId: string) => {
    setOpenFAQs(prev =>
      prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId]
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* FAQs */}
      <div className="bg-white rounded-2xl shadow-lg divide-y divide-gray-200">
        {filteredFAQs.map(faq => (
          <FAQItem
            key={faq.id}
            faq={faq}
            isOpen={openFAQs.includes(faq.id)}
            onToggle={() => toggleFAQ(faq.id)}
          />
        ))}
      </div>
    </div>
  );
} 