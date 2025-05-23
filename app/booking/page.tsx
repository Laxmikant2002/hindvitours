'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCar, FaMoneyBillWave } from 'react-icons/fa';
import PageLayout from '../components/ui/PageLayout';
import { indianCities } from '../lib/cities';

interface RideType {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  pricePerKm: number;
  image: string;
}

const rideTypes: RideType[] = [
  {
    id: 'economy',
    name: 'Economy',
    description: 'Affordable rides for everyday use',
    basePrice: 50,
    pricePerKm: 12,
    image: '/images/economy.png'
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Luxury vehicles for a comfortable journey',
    basePrice: 100,
    pricePerKm: 18,
    image: '/images/premium.png'
  },
  {
    id: 'suv',
    name: 'SUV',
    description: 'Spacious vehicles for group travel',
    basePrice: 150,
    pricePerKm: 20,
    image: '/images/suv.png'
  }
];

// Predefined distances between cities (in km)
const cityDistances: { [key: string]: { [key: string]: number } } = {
  'Mumbai': {
    'Delhi': 1400,
    'Bangalore': 980,
    'Hyderabad': 700,
    'Chennai': 1200,
    'Kolkata': 1900,
    'Pune': 150,
    'Ahmedabad': 530,
    'Jaipur': 1150
  },
  'Delhi': {
    'Mumbai': 1400,
    'Bangalore': 2150,
    'Hyderabad': 1500,
    'Chennai': 2200,
    'Kolkata': 1500,
    'Pune': 1500,
    'Ahmedabad': 950,
    'Jaipur': 260
  },
  'Bangalore': {
    'Mumbai': 980,
    'Delhi': 2150,
    'Hyderabad': 570,
    'Chennai': 350,
    'Kolkata': 1900,
    'Pune': 840,
    'Ahmedabad': 1500,
    'Jaipur': 2000
  },
  'Hyderabad': {
    'Mumbai': 700,
    'Delhi': 1500,
    'Bangalore': 570,
    'Chennai': 630,
    'Kolkata': 1500,
    'Pune': 560,
    'Ahmedabad': 1200,
    'Jaipur': 1500
  },
  'Chennai': {
    'Mumbai': 1200,
    'Delhi': 2200,
    'Bangalore': 350,
    'Hyderabad': 630,
    'Kolkata': 1600,
    'Pune': 1100,
    'Ahmedabad': 1800,
    'Jaipur': 2100
  }
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
    transition: { duration: 0.5 }
  }
};

export default function Booking() {
  const [pickup, setPickup] = useState<string>('');
  const [dropoff, setDropoff] = useState<string>('');
  const [selectedRideType, setSelectedRideType] = useState<string>('economy');
  const [fareEstimate, setFareEstimate] = useState<number | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Generate or retrieve session ID
    const existingSessionId = localStorage.getItem('sessionId');
    if (existingSessionId) {
      setSessionId(existingSessionId);
    } else {
      const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('sessionId', newSessionId);
      setSessionId(newSessionId);
    }
  }, []);

  const handlePickupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPickup(e.target.value);
    setError(null);
    setFareEstimate(null);
  };

  const handleDropoffChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDropoff(e.target.value);
    setError(null);
    setFareEstimate(null);
  };

  const calculateFareEstimate = () => {
    if (!pickup || !dropoff) {
      setError('Please select both pickup and drop-off cities');
      return;
    }

    if (pickup === dropoff) {
      setError('Pickup and drop-off cities cannot be the same');
      return;
    }

    // Get approximate distance between cities
    let distance = 500; // Default distance if not found in the predefined distances
    if (cityDistances[pickup]?.[dropoff]) {
      distance = cityDistances[pickup][dropoff];
    } else if (cityDistances[dropoff]?.[pickup]) {
      distance = cityDistances[dropoff][pickup];
    } else {
      setError('Route not available between selected cities');
      return;
    }

    const selectedRide = rideTypes.find(ride => ride.id === selectedRideType);
    
    if (selectedRide) {
      const fare = selectedRide.basePrice + (distance * selectedRide.pricePerKm);
      setFareEstimate(Math.round(fare));
      setError(null);
    }
  };

  const handleBooking = async () => {
    if (!pickup || !dropoff || !fareEstimate) return;

    const bookingData = {
      sessionId,
      pickup,
      dropoff,
      rideType: selectedRideType,
      fare: fareEstimate,
      timestamp: new Date().toISOString()
    };

    // Store booking data in localStorage for tracking
    const bookingId = `booking_${Date.now()}`;
    localStorage.setItem(bookingId, JSON.stringify(bookingData));

    // Redirect to payment page
    window.location.href = `/payment?bookingId=${bookingId}`;
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
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Book Your Ride
            </h1>
            <p className="text-xl text-gray-600">
              Select your pickup and drop-off cities to get started
            </p>
          </motion.div>

          {/* Location Inputs */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-2">
                  Pickup City
                </label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
                  <select
                    id="pickup"
                    value={pickup}
                    onChange={handlePickupChange}
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Select a city</option>
                    {indianCities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="dropoff" className="block text-sm font-medium text-gray-700 mb-2">
                  Drop-off City
                </label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
                  <select
                    id="dropoff"
                    value={dropoff}
                    onChange={handleDropoffChange}
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Select a city</option>
                    {indianCities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>
              {error && (
                <div className="text-red-600 text-sm font-medium text-center">
                  {error}
                </div>
              )}
            </div>
          </motion.div>

          {/* Ride Types */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Select Ride Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rideTypes.map((ride) => (
                <div
                  key={ride.id}
                  className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${
                    selectedRideType === ride.id
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                  onClick={() => setSelectedRideType(ride.id)}
                >
                  <FaCar className="w-8 h-8 text-indigo-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">{ride.name}</h3>
                  <p className="text-sm text-gray-600">{ride.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Fare Estimate */}
          <motion.div variants={itemVariants} className="flex flex-col items-center space-y-6">
            <button
              onClick={calculateFareEstimate}
              disabled={!pickup || !dropoff}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaMoneyBillWave className="mr-2" />
              Get Fare Estimate
            </button>

            {fareEstimate && (
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">
                  Estimated Fare: ₹{fareEstimate}
                </p>
                <button
                  onClick={handleBooking}
                  className="mt-4 px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Book Now
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </PageLayout>
  );
} 