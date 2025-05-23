'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkedAlt, FaCalendar, FaUsers } from 'react-icons/fa';

interface Route {
  id: string;
  title: string;
}

interface BookingFormProps {
  selectedRoute?: Route;
  onSubmit?: (formData: BookingFormData) => void;
}

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  route: string;
  date: string;
  passengers: string;
  specialRequirements: string;
}

const routes = [
  { id: 'delhi-agra', title: 'Delhi to Agra Tour' },
  { id: 'mumbai-goa', title: 'Mumbai to Goa Coastal Route' },
  { id: 'jaipur-udaipur', title: 'Royal Rajasthan Tour' },
  { id: 'manali-leh', title: 'Himalayan Adventure' },
  { id: 'kerala-backwaters', title: 'Kerala Backwaters Tour' },
  { id: 'varanasi-spiritual', title: 'Spiritual Varanasi Tour' }
];

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

export default function BookingForm({ selectedRoute, onSubmit }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    route: selectedRoute?.id || '',
    date: '',
    passengers: '1',
    specialRequirements: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
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
    name: keyof BookingFormData;
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

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-xl"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 
        className="text-2xl font-bold mb-6 text-gray-800 text-center"
        variants={inputVariants}
      >
        Book Your Tour
      </motion.h2>
      
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
          label="Email"
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

        <motion.div variants={inputVariants}>
          <label htmlFor="route" className="block text-gray-700 mb-2">Select Route</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaMapMarkedAlt className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="route"
              name="route"
              value={formData.route}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="">Select a route</option>
              {routes.map(route => (
                <option key={route.id} value={route.id}>
                  {route.title}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        <InputField
          icon={FaCalendar}
          label="Travel Date"
          name="date"
          type="date"
          required
        />

        <InputField
          icon={FaUsers}
          label="Number of Passengers"
          name="passengers"
          type="number"
          min="1"
          max="10"
          required
        />
      </div>

      <motion.div variants={inputVariants} className="mt-6">
        <label htmlFor="specialRequirements" className="block text-gray-700 mb-2">
          Special Requirements
        </label>
        <textarea
          id="specialRequirements"
          name="specialRequirements"
          value={formData.specialRequirements}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Any special requirements or preferences..."
        />
      </motion.div>

      <motion.button
        type="submit"
        className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 px-6 rounded-md hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Proceed to Payment
      </motion.button>

      <motion.p 
        variants={inputVariants}
        className="mt-4 text-center text-sm text-gray-500"
      >
        By proceeding, you agree to our terms and conditions
      </motion.p>
    </motion.form>
  );
} 