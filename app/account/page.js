'use client';

import { motion } from 'framer-motion';

export default function UserAccount() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>
          {/* Add your account page content here */}
        </motion.div>
      </div>
    </div>
  );
