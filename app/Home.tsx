'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import HeroSection from './components/features/HeroSection';
import HowItWorks from './components/features/HowItWorks';
import RouteCard from './components/features/RouteCard';
import { FaArrowRight, FaStar, FaUsers, FaRoute } from 'react-icons/fa';
import { Metadata } from 'next';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  image?: string;
}

interface Stats {
  label: string;
  value: string;
  icon: React.ElementType;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rahul Sharma',
    location: 'Mumbai',
    rating: 5,
    comment: 'Amazing experience with HindviTours! The Delhi-Agra tour was perfectly organized and our guide was very knowledgeable.',
    image: '/testimonials/rahul.jpg'
  },
  {
    id: 2,
    name: 'Priya Patel',
    location: 'Bangalore',
    rating: 5,
    comment: 'The Kerala backwaters tour was a dream come true. Everything from booking to the actual journey was smooth and memorable.',
    image: '/testimonials/priya.jpg'
  },
  {
    id: 3,
    name: 'Amit Kumar',
    location: 'Delhi',
    rating: 4,
    comment: 'Great service and professional team. The Rajasthan tour was well-planned with comfortable accommodations.',
    image: '/testimonials/amit.jpg'
  }
];

const stats: Stats[] = [
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

const popularRoutes = [
  {
    id: 'delhi-agra',
    title: 'Delhi to Agra Tour',
    description: 'Experience the majestic Taj Mahal and rich history of Agra Fort.',
    image: '/routes/taj-mahal.jpg',
    duration: '1 Day',
    price: 2999,
    rating: 4.9,
    reviewCount: 1250,
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
    image: '/routes/kerala-backwaters.jpg',
    duration: '2 Days',
    price: 8999,
    rating: 4.8,
    reviewCount: 890,
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
    image: '/routes/rajasthan-fort.jpg',
    duration: '5 Days',
    price: 24999,
    rating: 4.9,
    reviewCount: 750,
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
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
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    }
  }
};

export const metadata: Metadata = {
  title: 'HindviTours - Experience the Magic of Incredible India',
  description: 'Discover India with HindviTours. Book guided tours, premium stays, and unforgettable experiences across India. Expert local guides, secure booking, and 24/7 support.',
  keywords: 'India tours, travel packages, guided tours, cultural experiences, Indian tourism, travel booking',
  openGraph: {
    title: 'HindviTours - Experience the Magic of Incredible India',
    description: 'Discover India with HindviTours. Book guided tours, premium stays, and unforgettable experiences across India.',
    images: ['/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HindviTours - Experience the Magic of Incredible India',
    description: 'Discover India with HindviTours. Book guided tours, premium stays, and unforgettable experiences across India.',
    images: ['/og-image.jpg'],
  },
};

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How HindviTours Works</h2>
            <p className="text-xl text-gray-600">
              Experience hassle-free travel planning with our simple process
            </p>
          </motion.div>
          <HowItWorks />
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Routes</h2>
              <p className="text-xl text-gray-600">
                Discover our most loved travel experiences
              </p>
            </div>
            <Link
              href="/routes"
              className="hidden md:flex items-center space-x-2 text-indigo-600 hover:text-indigo-700"
            >
              <span>View All Routes</span>
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {popularRoutes.map((route) => (
              <motion.div key={route.id} variants={itemVariants}>
                <RouteCard route={route} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-center md:hidden"
          >
            <Link
              href="/routes"
              className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-700"
            >
              <span>View All Routes</span>
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-500">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                    <p className="text-indigo-100">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Travelers Say</h2>
            <p className="text-xl text-gray-600">
              Real experiences from our happy customers
            </p>
          </motion.div>

          <div className="relative h-[400px] max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                index === currentTestimonial && (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="absolute inset-0"
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-600 text-lg italic mb-6">
                          "{testimonial.comment}"
                        </p>
                      </div>
                      <div className="flex items-center space-x-4">
                        {testimonial.image ? (
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                            <span className="text-xl font-semibold text-indigo-600">
                              {testimonial.name[0]}
                            </span>
                          </div>
                        )}
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-500">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? 'bg-indigo-600'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join thousands of happy travelers exploring incredible India with us
            </p>
            <Link
              href="/routes"
              className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
            >
              Explore Routes
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 