'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaGift, FaClock, FaTags, FaCopy, FaCheck } from 'react-icons/fa';
import PageLayout from '../components/ui/PageLayout';

interface Promotion {
  id: string;
  code: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  terms: string[];
  category: 'all' | 'new-user' | 'seasonal' | 'special';
}

const promotions: Promotion[] = [
  {
    id: '1',
    code: 'FIRSTRIDE50',
    title: 'First Ride Discount',
    description: 'Get 50% off on your first ride with us',
    discount: '50% off up to ₹150',
    validUntil: '2024-12-31',
    terms: [
      'Valid for new users only',
      'Maximum discount of ₹150',
      'Cannot be combined with other offers'
    ],
    category: 'new-user'
  },
  {
    id: '2',
    code: 'SUMMER30',
    title: 'Summer Special',
    description: 'Beat the heat with 30% off on all rides',
    discount: '30% off up to ₹100',
    validUntil: '2024-06-30',
    terms: [
      'Valid on all rides',
      'Maximum discount of ₹100',
      'Valid between 11 AM to 4 PM'
    ],
    category: 'seasonal'
  },
  {
    id: '3',
    code: 'WEEKEND25',
    title: 'Weekend Offer',
    description: 'Enjoy your weekends with 25% off',
    discount: '25% off up to ₹75',
    validUntil: '2024-12-31',
    terms: [
      'Valid only on weekends',
      'Maximum discount of ₹75',
      'Valid on all vehicle types'
    ],
    category: 'special'
  },
  {
    id: '4',
    code: 'AIRPORT20',
    title: 'Airport Transfer Deal',
    description: 'Special discount on airport transfers',
    discount: '20% off up to ₹200',
    validUntil: '2024-12-31',
    terms: [
      'Valid only for airport rides',
      'Maximum discount of ₹200',
      'Advance booking required'
    ],
    category: 'special'
  }
];

const categories = [
  { id: 'all', label: 'All Offers' },
  { id: 'new-user', label: 'New User' },
  { id: 'seasonal', label: 'Seasonal' },
  { id: 'special', label: 'Special' }
];

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

export default function Promotions() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<'all' | 'new-user' | 'seasonal' | 'special'>('all');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const filteredPromotions = activeCategory === 'all'
    ? promotions
    : promotions.filter(promo => promo.category === activeCategory);

  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };

  const handleApplyOffer = (code: string) => {
    router.push(`/booking?promo=${code}`);
  };

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
              <FaGift className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Special Offers & Discounts
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Save big on your rides with our exclusive promotions and offers.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as any)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-indigo-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Promotions Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredPromotions.map(promo => (
              <motion.div
                key={promo.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {promo.title}
                      </h3>
                      <p className="text-gray-600">{promo.description}</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {promo.discount}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 mb-6">
                    <FaClock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">
                      Valid until {new Date(promo.validUntil).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <FaTags className="w-4 h-4 text-indigo-600 mr-2" />
                        <span className="font-medium text-gray-900">
                          Promo Code:
                        </span>
                      </div>
                      <button
                        onClick={() => handleCopyCode(promo.code)}
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                      >
                        <span className="font-mono font-medium mr-2">{promo.code}</span>
                        {copiedCode === promo.code ? (
                          <FaCheck className="w-4 h-4" />
                        ) : (
                          <FaCopy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-medium text-gray-900">Terms & Conditions:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {promo.terms.map((term, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-indigo-600 mr-2">•</span>
                          {term}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleApplyOffer(promo.code)}
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Apply Offer
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </PageLayout>
  );
} 