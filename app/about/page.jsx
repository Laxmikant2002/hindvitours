'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/app/components/PageTransition';

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-8 text-black"
          >
            About HindviTours
          </motion.h1>
          
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md p-8 mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6 text-black">Our Story</h2>
            <p className="text-black leading-relaxed mb-8">
              HindviTours was founded with a passion for showcasing the rich cultural heritage and natural beauty of India. 
              Our journey began with a simple mission: to make Indian tourism accessible, comfortable, and memorable for everyone.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-center mb-8 text-black">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-black">Rajesh Kumar</h3>
                  <div className="text-black mb-4">Founder & CEO</div>
                  <p className="text-black">With over 20 years of experience in the tourism industry, Rajesh leads our vision of making Indian tourism accessible to all.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-black">Priya Sharma</h3>
                  <div className="text-black mb-4">Operations Director</div>
                  <p className="text-black">Priya ensures smooth operations across all our routes and maintains our high standards of service quality.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-black">Amit Patel</h3>
                  <div className="text-black mb-4">Customer Experience Head</div>
                  <p className="text-black">Amit leads our customer experience initiatives, ensuring every journey exceeds expectations.</p>
                </div>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h2 className="text-2xl font-semibold mb-6 text-black">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-black">Customer First</h3>
                <p className="text-black">We prioritize our customers' needs and ensure their satisfaction at every step.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-black">Quality Service</h3>
                <p className="text-black">We maintain high standards in all our services and continuously strive for improvement.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-black">Safety & Reliability</h3>
                <p className="text-black">Your safety is our top priority, and we ensure reliable service every time.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-black">Cultural Respect</h3>
                <p className="text-black">We promote and respect local cultures and traditions in all our tours.</p>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </PageTransition>
  );
}