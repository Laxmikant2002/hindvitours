'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import PageLayout from '../components/ui/PageLayout';
import PaymentForm from '../components/features/PaymentForm';
import { FaLock, FaShieldAlt, FaCreditCard } from 'react-icons/fa';

// Mock booking data (replace with actual data from your backend)
const mockBookingDetails = {
  tourName: 'Delhi to Agra Tour',
  date: '2024-03-15',
  passengers: 2,
  amount: 5998,
  bookingId: 'BK123456'
};

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

const securityFeatures = [
  {
    icon: FaLock,
    title: 'Secure Payments',
    description: 'Your payment information is encrypted and processed securely.'
  },
  {
    icon: FaShieldAlt,
    title: 'Protected Booking',
    description: 'Your booking is protected by our secure booking guarantee.'
  },
  {
    icon: FaCreditCard,
    title: 'Safe Transactions',
    description: 'We use industry-standard security protocols for all transactions.'
  }
];

export default function Payment() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePaymentComplete = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      router.push('/confirmation');
    }, 2000);
  };

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
            <motion.h1 
              variants={itemVariants}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Secure Payment
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Complete your booking securely. Your payment information is protected.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">Booking Details</h2>
                  <div className="grid grid-cols-2 gap-4 text-gray-600">
                    <div>
                      <p className="font-medium">Tour:</p>
                      <p>{mockBookingDetails.tourName}</p>
                    </div>
                    <div>
                      <p className="font-medium">Date:</p>
                      <p>{mockBookingDetails.date}</p>
                    </div>
                    <div>
                      <p className="font-medium">Passengers:</p>
                      <p>{mockBookingDetails.passengers}</p>
                    </div>
                    <div>
                      <p className="font-medium">Booking ID:</p>
                      <p>{mockBookingDetails.bookingId}</p>
                    </div>
                  </div>
                </div>
                <PaymentForm 
                  amount={mockBookingDetails.amount}
                  onPaymentComplete={handlePaymentComplete}
                  isProcessing={isProcessing}
                />
              </div>
            </motion.div>

            {/* Security Features */}
            <motion.div 
              variants={itemVariants}
              className="space-y-6"
            >
              {securityFeatures.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="bg-white rounded-xl shadow-md p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="ml-4 text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}

              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Total Amount</h3>
                <p className="text-3xl font-bold">₹{mockBookingDetails.amount.toLocaleString('en-IN')}</p>
                <p className="text-sm opacity-90 mt-2">Includes all taxes and fees</p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
} 