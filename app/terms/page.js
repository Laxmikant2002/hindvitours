'use client';

import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto prose prose-indigo"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
          {/* Add your terms and conditions content here */}
        </motion.div>
      </div>
    </div>
  );
