'use client';

import React, { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaStar, FaReceipt, FaHome, FaDownload, FaShare, 
         FaMapMarkerAlt, FaClock, FaRupeeSign } from 'react-icons/fa';
import PageLayout from '../components/ui/PageLayout';

interface RideDetails {
  id: string;
  driverName: string;
  driverPhoto: string;
  vehicleNumber: string;
  pickupLocation: string;
  dropLocation: string;
  distance: number;
  duration: number;
  fare: number;
  date: string;
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

function RideCompleteContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [hasRated, setHasRated] = useState(false);

  // In a real app, this would be fetched from your API
  const rideDetails: RideDetails = {
    id: searchParams.get('id') || 'RD123456',
    driverName: 'Rajesh Kumar',
    driverPhoto: '/images/drivers/default.jpg',
    vehicleNumber: 'DL 1T 1234',
    pickupLocation: searchParams.get('pickup') || 'New Delhi Railway Station',
    dropLocation: searchParams.get('drop') || 'IGI Airport, Terminal 3',
    distance: 15,
    duration: 45,
    fare: 450,
    date: new Date().toLocaleString()
  };

  const handleRating = async () => {
    try {
      // In a real app, you would send this to your API
      console.log('Submitting rating:', { rating, feedback });
      setHasRated(true);
      // Show success message
      alert('Thank you for your feedback!');
    } catch (error) {
      console.error('Error submitting rating:', error);
      alert('Failed to submit rating. Please try again.');
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'My Ride with HindviTours',
        text: `Just completed a great ride from ${rideDetails.pickupLocation} to ${rideDetails.dropLocation}!`,
        url: window.location.href
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <PageLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Message */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Ride Completed!
            </h1>
            <p className="text-xl text-gray-600">
              Thank you for riding with us.
            </p>
          </motion.div>

          {/* Receipt Card */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Ride Receipt</h2>
                <span className="text-sm text-gray-500">{rideDetails.date}</span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="w-5 h-5 text-indigo-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Pickup</p>
                    <p className="text-gray-900">{rideDetails.pickupLocation}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="w-5 h-5 text-indigo-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Drop-off</p>
                    <p className="text-gray-900">{rideDetails.dropLocation}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Distance</p>
                  <p className="text-lg font-medium text-gray-900">{rideDetails.distance} km</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="text-lg font-medium text-gray-900">{rideDetails.duration} mins</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Fare</p>
                  <p className="text-lg font-medium text-gray-900">₹{rideDetails.fare}</p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <img
                    src={rideDetails.driverPhoto}
                    alt={rideDetails.driverName}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{rideDetails.driverName}</p>
                    <p className="text-sm text-gray-500">{rideDetails.vehicleNumber}</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={handleShare}
                    className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <FaShare className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <FaDownload className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Rating Section */}
          {!hasRated && (
            <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Rate Your Experience
              </h3>
              <div className="flex justify-center space-x-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="focus:outline-none"
                  >
                    <FaStar
                      className={`w-8 h-8 ${
                        star <= rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your experience (optional)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 mb-4"
                rows={3}
              />
              <button
                onClick={handleRating}
                disabled={rating === 0}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Rating
              </button>
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => router.push('/account')}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              View Ride History
            </button>
            <button
              onClick={() => router.push('/')}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FaHome className="w-5 h-5 mr-2" />
              Back to Home
            </button>
          </motion.div>
        </div>
      </motion.div>
    </PageLayout>
  );
}

export default function RideComplete() {
  return (
    <Suspense fallback={null}>
      <RideCompleteContent />
    </Suspense>
  );
}