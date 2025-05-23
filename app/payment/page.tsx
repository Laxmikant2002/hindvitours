'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCreditCard, FaLock } from 'react-icons/fa';
import PageLayout from '../components/ui/PageLayout';
import Script from 'next/script';

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface BookingData {
  sessionId: string;
  pickup: string;
  dropoff: string;
  rideType: string;
  fare: number;
  timestamp: string;
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

export default function Payment() {
  const [bookingData, setBookingData] = useState<BookingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const bookingId = urlParams.get('bookingId');

    if (bookingId) {
      const storedBooking = localStorage.getItem(bookingId);
      if (storedBooking) {
        setBookingData(JSON.parse(storedBooking));
      } else {
        setError('Booking not found');
      }
    } else {
      setError('Invalid booking ID');
    }
    setLoading(false);
  }, []);

  const handlePayment = () => {
    if (!bookingData) return;

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: bookingData.fare * 100, // Amount in paise
      currency: 'INR',
      name: 'Hindvi Tours',
      description: `${bookingData.pickup} to ${bookingData.dropoff} - ${bookingData.rideType}`,
      image: '/logo.png',
      handler: function(response: any) {
        // Handle successful payment
        const paymentData = {
          paymentId: response.razorpay_payment_id,
          bookingData,
          timestamp: new Date().toISOString()
        };

        // Store payment data
        localStorage.setItem(`payment_${paymentData.paymentId}`, JSON.stringify(paymentData));

        // Redirect to confirmation page
        window.location.href = `/confirmation?paymentId=${paymentData.paymentId}`;
      },
      prefill: {
        name: '',
        email: '',
        contact: ''
      },
      notes: {
        sessionId: bookingData.sessionId,
        pickup: bookingData.pickup,
        dropoff: bookingData.dropoff
      },
      theme: {
        color: '#4F46E5'
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  if (loading) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div role="status" className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{error}</h2>
            <button
              onClick={() => window.location.href = '/booking'}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Return to Booking
            </button>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
              <FaCreditCard className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Your Payment
            </h1>
            <p className="text-xl text-gray-600">
              Secure payment powered by Razorpay
            </p>
          </motion.div>

          {/* Booking Summary */}
          {bookingData && (
            <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Booking Summary</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">From</p>
                  <p className="text-lg text-gray-900">{bookingData.pickup}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">To</p>
                  <p className="text-lg text-gray-900">{bookingData.dropoff}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ride Type</p>
                  <p className="text-lg text-gray-900 capitalize">{bookingData.rideType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Fare</p>
                  <p className="text-2xl font-bold text-gray-900">₹{bookingData.fare}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Payment Button */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex items-center justify-center mb-6">
              <FaLock className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-sm text-gray-600">
                256-bit secure payment
              </span>
            </div>
            <button
              onClick={handlePayment}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Pay ₹{bookingData?.fare}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </PageLayout>
  );
} 