'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaCar, FaCarSide, FaStar, FaClock, FaRupeeSign, 
         FaUserFriends, FaSuitcase, FaAirConditioner } from 'react-icons/fa';
import PageLayout from '../components/ui/PageLayout';

interface VehicleType {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  pricePerKm: number;
  capacity: number;
  features: string[];
  image: string;
  estimatedTime?: number;
  category: 'economy' | 'premium' | 'luxury';
}

const vehicleTypes: VehicleType[] = [
  {
    id: 'economy-hatch',
    name: 'Economy Hatchback',
    description: 'Affordable and comfortable city rides',
    basePrice: 49,
    pricePerKm: 12,
    capacity: 4,
    features: ['AC', 'Music System', '4 Seats'],
    image: '/images/vehicles/hatchback.jpg',
    category: 'economy'
  },
  {
    id: 'economy-sedan',
    name: 'Economy Sedan',
    description: 'Spacious rides for small groups',
    basePrice: 59,
    pricePerKm: 14,
    capacity: 4,
    features: ['AC', 'Music System', 'Extra Legroom'],
    image: '/images/vehicles/sedan.jpg',
    category: 'economy'
  },
  {
    id: 'premium-sedan',
    name: 'Premium Sedan',
    description: 'Luxury rides with premium comfort',
    basePrice: 89,
    pricePerKm: 18,
    capacity: 4,
    features: ['Premium AC', 'Premium Sound', 'Leather Seats'],
    image: '/images/vehicles/premium-sedan.jpg',
    category: 'premium'
  },
  {
    id: 'premium-suv',
    name: 'Premium SUV',
    description: 'Spacious SUV for group travel',
    basePrice: 99,
    pricePerKm: 20,
    capacity: 6,
    features: ['Premium AC', 'Entertainment System', '6 Seats'],
    image: '/images/vehicles/suv.jpg',
    category: 'premium'
  },
  {
    id: 'luxury-sedan',
    name: 'Luxury Sedan',
    description: 'Premium luxury experience',
    basePrice: 149,
    pricePerKm: 25,
    capacity: 4,
    features: ['Premium Leather', 'Premium Entertainment', 'Driver Service'],
    image: '/images/vehicles/luxury-sedan.jpg',
    category: 'luxury'
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

export default function Routes() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'economy' | 'premium' | 'luxury'>('all');
  const [pickupLocation, setPickupLocation] = useState(searchParams.get('pickup') || '');
  const [dropLocation, setDropLocation] = useState(searchParams.get('drop') || '');
  const [distance, setDistance] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState(0);

  useEffect(() => {
    // In a real app, you would:
    // 1. Calculate distance between pickup and drop using Maps API
    // 2. Calculate estimated time based on traffic
    // 3. Update prices based on demand
    if (pickupLocation && dropLocation) {
      // Simulated API call
      setDistance(15); // 15 km
      setEstimatedTime(45); // 45 minutes
    }
  }, [pickupLocation, dropLocation]);

  const filteredVehicles = selectedCategory === 'all'
    ? vehicleTypes
    : vehicleTypes.filter(vehicle => vehicle.category === selectedCategory);

  const calculateFare = (vehicle: VehicleType) => {
    return vehicle.basePrice + (vehicle.pricePerKm * distance);
  };

  const handleBooking = (vehicleId: string) => {
    if (!pickupLocation || !dropLocation) {
      alert('Please enter pickup and drop locations');
      return;
    }
    
    router.push(`/booking?vehicle=${vehicleId}&pickup=${encodeURIComponent(pickupLocation)}&drop=${encodeURIComponent(dropLocation)}`);
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
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Ride
            </h1>
            <p className="text-xl text-gray-600">
              Select from our range of comfortable and reliable vehicles
            </p>
          </motion.div>

          {/* Location Input */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
              <div>
                <label htmlFor="pickup" className="block text-sm font-medium text-gray-700">
                  Pickup Location
                </label>
                <input
                  type="text"
                  id="pickup"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  placeholder="Enter pickup location"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="drop" className="block text-sm font-medium text-gray-700">
                  Drop Location
                </label>
                <input
                  type="text"
                  id="drop"
                  value={dropLocation}
                  onChange={(e) => setDropLocation(e.target.value)}
                  placeholder="Enter drop location"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-4 mb-8">
            {['all', 'economy', 'premium', 'luxury'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as any)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-indigo-50'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>

          {/* Vehicle Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredVehicles.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {vehicle.name}
                      </h3>
                      <p className="text-gray-600">{vehicle.description}</p>
                    </div>
                    <div className="flex items-center bg-indigo-100 px-3 py-1 rounded-full">
                      <FaUserFriends className="w-4 h-4 text-indigo-600 mr-1" />
                      <span className="text-indigo-600 font-medium">{vehicle.capacity}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <FaClock className="w-4 h-4 mr-2" />
                      <span>Est. {estimatedTime} mins</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaRupeeSign className="w-4 h-4 mr-2" />
                      <span>₹{calculateFare(vehicle)} for {distance} km</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {vehicle.features.map((feature, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleBooking(vehicle.id)}
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Book Now
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