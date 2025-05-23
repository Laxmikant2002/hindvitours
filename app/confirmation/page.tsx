'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHeadset, FaCompass, FaSpinner } from 'react-icons/fa';
import PageLayout from '../components/ui/PageLayout';
import ConfirmationDetails from '../components/features/ConfirmationDetails';
import type { BookingDetails } from '../components/features/ConfirmationDetails';

// This would come from your API
async function fetchBookingDetails(bookingId: string): Promise<BookingDetails> {
  // In a real app, this would be an API call
  // For now, returning mock data
  return {
    bookingId: bookingId || 'BK123456',
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
  };
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
    transition: {
      duration: 0.5
    }
  }
};

export default function Confirmation() {
  const [booking, setBooking] = useState<BookingDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBookingDetails = async () => {
      try {
        // In a real app, you'd get the booking ID from the URL or context
        const bookingId = new URLSearchParams(window.location.search).get('id') || 'BK123456';
        const data = await fetchBookingDetails(bookingId);
        setBooking(data);
      } catch (err) {
        setError('Unable to load booking details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadBookingDetails();
  }, []);

  if (loading) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <FaSpinner className="w-8 h-8 text-indigo-600 animate-spin" />
        </div>
      </PageLayout>
    );
  }

  if (error || !booking) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
          <div className="w-20 h-20 bg-red-100 rounded-full mb-6 flex items-center justify-center">
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h1>
          <p className="text-gray-600 mb-8">{error}</p>
          <Link
            href="/support"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Contact Support
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <main className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <p className="text-xl text-gray-600">
                Thank you for choosing HindviTours. Your booking has been confirmed and we've sent the details to your email.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <ConfirmationDetails booking={booking} />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 space-y-6"
          >
            <p className="text-gray-600 text-center">
              Need help or want to explore more destinations?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/support" className="group">
                <div className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors">
                  <FaHeadset className="w-5 h-5" />
                  <span className="font-medium">Contact Support</span>
                </div>
              </Link>
              <Link href="/routes" className="group">
                <div className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition-colors">
                  <FaCompass className="w-5 h-5" />
                  <span className="font-medium">Browse More Tours</span>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </PageLayout>
  );
} 