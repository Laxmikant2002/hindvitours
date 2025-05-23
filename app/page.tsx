'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaStar, FaUsers, FaRoute, FaLandmark, FaUmbrellaBeach, FaBuilding } from 'react-icons/fa';
import HeroSection from './components/features/HeroSection';
import HowItWorks from './components/features/HowItWorks';
import RouteCard from './components/features/RouteCard';

const popularRoutes = [
  {
    id: 'delhi-agra',
    title: 'Delhi to Agra Tour',
    description: 'Experience the majestic Taj Mahal and rich history of Agra Fort.',
    icon: FaLandmark,
    duration: '1 Day',
    price: 2999,
    startLocation: 'Delhi',
    endLocation: 'Agra',
    highlights: [
      'Visit the iconic Taj Mahal',
      'Explore Agra Fort',
      'Professional guide',
      'AC transportation',
      'Lunch included'
    ]
  },
  {
    id: 'kerala-backwaters',
    title: 'Kerala Backwaters Tour',
    description: 'Cruise through the serene backwaters of Kerala in a traditional houseboat.',
    icon: FaUmbrellaBeach,
    duration: '2 Days',
    price: 8999,
    startLocation: 'Kochi',
    endLocation: 'Alleppey',
    highlights: [
      'Overnight houseboat stay',
      'Traditional Kerala cuisine',
      'Village experiences',
      'Sunset cruise',
      'Bird watching'
    ]
  },
  {
    id: 'rajasthan-heritage',
    title: 'Rajasthan Heritage Tour',
    description: 'Explore the royal palaces and majestic forts of Rajasthan.',
    icon: FaBuilding,
    duration: '5 Days',
    price: 24999,
    startLocation: 'Jaipur',
    endLocation: 'Udaipur',
    highlights: [
      'Visit Amber Fort',
      'City Palace tour',
      'Desert safari',
      'Cultural performances',
      'Heritage hotel stay'
    ]
  }
];

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

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularRoutes.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
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