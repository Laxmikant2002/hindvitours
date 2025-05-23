'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/ui/PageLayout';
import ConfirmationDetails from '../components/features/ConfirmationDetails';

// Mock booking data (replace with actual data from your backend)
const mockBooking = {
  bookingId: 'BK123456',
  tourName: 'Delhi to Agra Tour',
  date: '2024-03-15',
  passengers: 2,
  amount: 5998,
  paymentStatus: 'confirmed',
  pickupLocation: 'New Delhi Railway Station',
  dropLocation: 'Agra Fort',
  departureTime: '06:00 AM',
  duration: '1 Day',
  inclusions: [
    'AC Transportation',
    'Professional Guide',
    'Monument Entry Fees',
    'Lunch',
    'Water Bottles',
    'Travel Insurance'
  ]
} as const;

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
    transition: {
      duration: 0.5
    }
  }
};

export default function Confirmation() {
  return (
    <PageLayout>
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants}>
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Booking Confirmed!
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Thank you for choosing HindviTours. Your booking has been confirmed and we\'ve sent the details to your email.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <ConfirmationDetails booking={mockBooking} />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-6">
              Need help or have questions about your booking?
            </p>
            <div className="space-x-4">
              <button
                onClick={() => window.location.href = '/support'}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Contact Support
              </button>
              <button
                onClick={() => window.location.href = '/routes'}
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Browse More Tours
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    </PageLayout>
  );
} 