'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaShieldAlt, FaUserCheck, FaCarAlt, FaMapMarkedAlt, 
         FaPhoneAlt, FaBell, FaMask, FaHeadset } from 'react-icons/fa';
import PageLayout from '../components/ui/PageLayout';

interface SafetyFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  category: 'driver' | 'vehicle' | 'ride' | 'covid';
}

const safetyFeatures: SafetyFeature[] = [
  {
    id: '1',
    title: 'Driver Verification',
    description: 'All our drivers undergo thorough background checks and verification process. We verify their identity, driving license, and criminal records to ensure your safety.',
    icon: FaUserCheck,
    category: 'driver'
  },
  {
    id: '2',
    title: 'Vehicle Safety Checks',
    description: 'Regular vehicle inspections and maintenance checks are conducted to ensure all vehicles meet our safety standards. We monitor vehicle age, condition, and safety features.',
    icon: FaCarAlt,
    category: 'vehicle'
  },
  {
    id: '3',
    title: 'Real-time GPS Tracking',
    description: 'Track your ride in real-time and share your live location with trusted contacts. Our system monitors all rides 24/7 for any unusual activity.',
    icon: FaMapMarkedAlt,
    category: 'ride'
  },
  {
    id: '4',
    title: 'Emergency Assistance',
    description: 'In-app emergency button connects you directly to our 24/7 safety response team and local authorities. We provide immediate support during emergencies.',
    icon: FaPhoneAlt,
    category: 'ride'
  },
  {
    id: '5',
    title: 'Trip Alerts',
    description: 'Receive automated alerts for route deviations, unexpected stops, or speed violations. Family members can also receive ride status updates.',
    icon: FaBell,
    category: 'ride'
  },
  {
    id: '6',
    title: 'COVID-19 Safety',
    description: 'Regular sanitization of vehicles, mandatory masks, and daily temperature checks for drivers. We follow all health guidelines to ensure your safety.',
    icon: FaMask,
    category: 'covid'
  }
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

export default function Safety() {
  const router = useRouter();

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
              <FaShieldAlt className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your Safety is Our Priority
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've implemented comprehensive safety measures to ensure you have a secure and comfortable journey.
            </p>
          </motion.div>

          {/* Safety Features Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {safetyFeatures.map(feature => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
                  <feature.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Emergency Support Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="px-6 py-12 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-8 md:mb-0">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    24/7 Emergency Support
                  </h2>
                  <p className="text-indigo-100 text-lg max-w-xl">
                    Our dedicated support team is always ready to assist you. If you have any safety concerns or need immediate assistance, don't hesitate to reach out.
                  </p>
                </div>
                <div className="flex flex-col space-y-4">
                  <button
                    onClick={() => router.push('/support')}
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                  >
                    <FaHeadset className="w-5 h-5 mr-2" />
                    Contact Support
                  </button>
                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-xl text-white hover:bg-white hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white transition-colors"
                  >
                    <FaPhoneAlt className="w-5 h-5 mr-2" />
                    Emergency Helpline
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Safety Tips Section */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Safety Tips for Your Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Verify Your Ride
                </h3>
                <p className="text-gray-600">
                  Always check the driver's photo, vehicle number, and model before getting in.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Share Your Trip
                </h3>
                <p className="text-gray-600">
                  Use the in-app feature to share your ride details with trusted contacts.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Stay Connected
                </h3>
                <p className="text-gray-600">
                  Keep your phone charged and maintain network connectivity during the ride.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </PageLayout>
  );
} 