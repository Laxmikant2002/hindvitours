'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaStar, FaUsers, FaRoute, FaLandmark, FaUmbrellaBeach, FaBuilding, FaBus, FaCar, FaTaxi, FaCarSide, FaMapMarkerAlt } from 'react-icons/fa';
import HeroSection from './components/features/HeroSection';
import HowItWorks from './components/features/HowItWorks';
import RouteCard from './components/features/RouteCard';
import BookingSection from './components/features/BookingSection';


const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    location: 'Mumbai',
    rating: 5,
    comment: 'Amazing experience with HindviTours! The Delhi-Agra tour was perfectly organized and our guide was very knowledgeable.'
  },
  {
    id: 2,
    name: 'Priya Patel',
    location: 'Bangalore',
    rating: 5,
    comment: 'The Kerala backwaters tour was a dream come true. Everything from booking to the actual journey was smooth and memorable.'
  },
  {
    id: 3,
    name: 'Amit Kumar',
    location: 'Delhi',
    rating: 4,
    comment: 'Great service and professional team. The Rajasthan tour was well-planned with comfortable accommodations.'
  }
];

const stats = [
  {
    label: 'Happy Travelers',
    value: '50,000+',
    icon: FaUsers
  },
  {
    label: 'Routes Covered',
    value: '100+',
    icon: FaRoute
  },
  {
    label: '5-Star Reviews',
    value: '10,000+',
    icon: FaStar
  }
];

const fleetOptions = [
  {
    id: 'tempo-traveller',
    title: 'Tempo Traveller',
    description: 'OR Similar (16+1 Seater)',
    price: '28/KM',
    icon: FaBus,
    color: 'from-[#6366F1] to-[#5558E6]'
  },
  {
    id: 'hatchback',
    title: 'Hatchback (AC)',
    description: 'WagonR OR Similar (4 Seater)',
    price: '11/KM',
    icon: FaCar,
    color: 'from-[#6366F1] to-[#5558E6]'
  },
  {
    id: 'sedan',
    title: 'Sedan (AC)',
    description: 'Dzire, Etios OR Similar (4 Seater)',
    price: '12/KM',
    icon: FaTaxi,
    color: 'from-[#6366F1] to-[#5558E6]'
  },
  {
    id: 'prime-sedan',
    title: 'Prime Sedan cab (AC)',
    description: 'Dzire, Etios OR Similar (4 Seater)',
    price: '13.5/KM',
    icon: FaCarSide,
    color: 'from-[#6366F1] to-[#5558E6]'
  }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="space-y-20">
      <HeroSection />
      {/* Booking Section */}
      <BookingSection />

      {/* Fleet Showcase Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#6366F1] font-semibold text-xl mb-4 block"
          >
            Our Fleet
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Widest variety Our awesome fleet
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect ride for any occasion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fleetOptions.map((vehicle, index) => {
            const Icon = vehicle.icon;
            return (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100"
              >
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${vehicle.color} p-4 transform rotate-12 group-hover:rotate-0 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#6366F1] transition-colors">
                  {vehicle.title}
                </h3>
                <p className="text-gray-600 mb-4">{vehicle.description}</p>
                
                <div className="flex items-center justify-between">
                  <motion.div 
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-[#EEF2FF] rounded-full px-4 py-2"
                  >
                    <span className="text-[#6366F1] font-bold">₹ {vehicle.price}</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6366F1] to-[#5558E6] text-white flex items-center justify-center shadow-lg"
                  >
                    <FaArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#EEF2FF] to-white p-6 rounded-2xl border border-gray-100"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#6366F1] to-[#5558E6] rounded-xl flex items-center justify-center mb-4">
              <FaMapMarkerAlt className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Pan India Coverage</h3>
            <p className="text-gray-600">Available across all major cities and towns</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#EEF2FF] to-white p-6 rounded-2xl border border-gray-100"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#6366F1] to-[#5558E6] rounded-xl flex items-center justify-center mb-4">
              <FaUsers className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Professional Drivers</h3>
            <p className="text-gray-600">Experienced and courteous chauffeurs</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-[#EEF2FF] to-white p-6 rounded-2xl border border-gray-100"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#6366F1] to-[#5558E6] rounded-xl flex items-center justify-center mb-4">
              <FaRoute className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Flexible Routes</h3>
            <p className="text-gray-600">Customizable travel plans for your needs</p>
          </motion.div>
        </div>
      </section>

      <HowItWorks />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                    <p className="text-indigo-100">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Travelers Say</h2>
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                index === currentTestimonial && (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white rounded-lg shadow-lg p-8"
                  >
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6">"{testimonial.comment}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="text-xl font-semibold text-indigo-600">
                          {testimonial.name[0]}
                        </span>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join thousands of happy travelers exploring incredible India with us
            </p>
            <Link
              href="/routes_p"
              className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
            >
              Explore Routes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 