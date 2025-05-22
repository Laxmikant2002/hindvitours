'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlane, FaHotel, FaRoute, FaMapMarkedAlt, FaPassport, FaUserFriends } from 'react-icons/fa';

// Import components
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import LoadingSpinner from './components/LoadingSpinner';
import RouteCard from './components/RouteCard';

// Feature Card Component
const FeatureCard = React.memo(({ feature, isActive }) => (
  <motion.div
    key={feature.title}
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: isActive ? 1 : 0,
      scale: isActive ? 1 : 0.9,
      y: isActive ? 0 : 20
    }}
    transition={{ duration: 0.5 }}
    className="absolute inset-0 text-center"
  >
    <div className="flex justify-center mb-6">
      <div className="text-indigo-600 text-4xl">
        {feature.icon}
      </div>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
    <p className="text-gray-600 max-w-md mx-auto">{feature.description}</p>
  </motion.div>
));

// Featured Routes data
const featuredRoutes = [
  {
    id: 'delhi-agra',
    title: 'Delhi to Agra Tour',
    description: 'Experience the majestic Taj Mahal and rich history of Agra Fort.',
    image: '/images/taj-mahal.jpg',
    duration: '1 Day',
    price: '2999',
    startLocation: 'Delhi',
    endLocation: 'Agra',
    highlights: [
      'Visit the iconic Taj Mahal',
      'Explore Agra Fort',
      'Luxury AC Bus Travel',
      'Professional Guide'
    ]
  },
  {
    id: 'mumbai-goa',
    title: 'Mumbai to Goa Coastal Route',
    description: 'Scenic coastal journey from Mumbai to the beaches of Goa.',
    image: '/images/goa-beach.jpg',
    duration: '2 Days',
    price: '5999',
    startLocation: 'Mumbai',
    endLocation: 'Goa',
    highlights: [
      'Scenic Coastal Drive',
      'Beach Stops',
      'Luxury Overnight Stay',
      'Meals Included'
    ]
  },
  {
    id: 'jaipur-udaipur',
    title: 'Royal Rajasthan Tour',
    description: 'Journey through the royal cities of Rajasthan.',
    image: '/images/rajasthan-palace.jpg',
    duration: '3 Days',
    price: '8999',
    startLocation: 'Jaipur',
    endLocation: 'Udaipur',
    highlights: [
      'Visit Royal Palaces',
      'Cultural Experiences',
      'Luxury Accommodations',
      'Traditional Cuisine'
    ]
  }
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Features data
  const features = useMemo(() => [
    {
      title: 'Curated Tours',
      description: 'Hand-picked destinations and expertly crafted itineraries for unforgettable experiences.',
      icon: <FaRoute />
    },
    {
      title: 'Luxury Stays',
      description: 'Premium accommodations at carefully selected hotels and resorts across India.',
      icon: <FaHotel />
    },
    {
      title: 'Expert Guides',
      description: 'Local guides who bring history and culture to life with their deep knowledge.',
      icon: <FaMapMarkedAlt />
    },
    {
      title: 'Easy Travel',
      description: 'Hassle-free bookings with all transportation and accommodations arranged.',
      icon: <FaPlane />
    }
  ], []);

  useEffect(() => {
    // Simulate loading state
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  // Auto-advance features
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [features.length, isPaused]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <LoadingSpinner size="lg" color="indigo" text="Loading amazing experiences..." />
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* How It Works */}
      <HowItWorks />

      {/* Features Section */}
      <section className="py-8 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl font-bold text-black mb-4">Why Choose HindviTours</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience India like never before with our premium travel services
            </p>
          </motion.div>
          
          <div className="relative h-80">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                isActive={activeFeature === index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Routes Section */}
      <section className="py-8 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-black text-center mb-12"
          >
            Popular Routes
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRoutes.map((route, index) => (
              <motion.div
                key={route.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <RouteCard route={route} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-indigo-600 text-white text-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="mb-8 text-lg text-indigo-100">
            Book your dream Indian tour today and create memories that last a lifetime
          </p>
          <Link
            href="/booking"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </motion.section>
    </main>
  );
}

FeatureCard.displayName = 'FeatureCard';
