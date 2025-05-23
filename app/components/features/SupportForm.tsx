'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaEnvelope, FaTicketAlt, FaComments, FaCheckCircle, FaPhone } from 'react-icons/fa';

interface SupportFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  bookingId: string;
  priority: 'low' | 'normal' | 'high' | 'urgent';
  phone: string;
}

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const inputVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const successVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export default function SupportForm() {
  const [formData, setFormData] = useState<SupportFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    bookingId: '',
    priority: 'normal',
    phone: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Handle form submission here
      console.log('Support request submitted:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting support request:', error);
    }
  };

  const InputField = ({ 
    icon: Icon, 
    label, 
    name, 
    type = 'text',
    ...props 
  }: { 
    icon: React.ElementType;
    label: string;
    name: keyof SupportFormData;
    type?: string;
    [key: string]: any;
  }) => (
    <motion.div variants={inputVariants}>
      <label htmlFor={name} className="block text-gray-700 mb-2">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type={type}
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          {...props}
        />
      </div>
    </motion.div>
  );

  if (isSubmitted) {
    return (
      <motion.div
        className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl text-center"
        variants={successVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        </motion.div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
        <p className="text-gray-600 mb-6">
          Your support request has been submitted successfully. We'll get back to you within 24 hours.
        </p>
        <motion.button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: '',
              bookingId: '',
              priority: 'normal',
              phone: ''
            });
          }}
          className="text-indigo-600 hover:text-indigo-800 font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit Another Request
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 
        className="text-2xl font-bold mb-6 text-gray-800"
        variants={inputVariants}
      >
        Contact Support
      </motion.h2>

      <motion.form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            icon={FaUser}
            label="Full Name"
            name="name"
            required
            placeholder="John Doe"
          />

          <InputField
            icon={FaEnvelope}
            label="Email Address"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
          />

          <InputField
            icon={FaPhone}
            label="Phone Number"
            name="phone"
            required
            placeholder="+91 98765 43210"
          />

          <InputField
            icon={FaTicketAlt}
            label="Booking ID (Optional)"
            name="bookingId"
            placeholder="Enter your booking ID"
          />
        </div>

        <InputField
          icon={FaComments}
          label="Subject"
          name="subject"
          required
          placeholder="How can we help you?"
        />

        <motion.div variants={inputVariants}>
          <label htmlFor="priority" className="block text-gray-700 mb-2">Priority</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="low">Low - General Inquiry</option>
            <option value="normal">Normal - Need Assistance</option>
            <option value="high">High - Important Issue</option>
            <option value="urgent">Urgent - Critical Problem</option>
          </select>
        </motion.div>

        <motion.div variants={inputVariants}>
          <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Please describe your issue in detail..."
          />
        </motion.div>

        <motion.button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 flex items-center justify-center space-x-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Submit Request</span>
        </motion.button>
      </motion.form>

      <motion.div 
        className="mt-8 text-center space-y-2"
        variants={inputVariants}
      >
        <p className="text-gray-600">For urgent matters, please call our 24/7 support line:</p>
        <a 
          href="tel:+919876543210"
          className="font-semibold text-indigo-600 hover:text-indigo-800 text-lg block"
        >
          +91 98765 43210
        </a>
      </motion.div>
    </motion.div>
  );
} 