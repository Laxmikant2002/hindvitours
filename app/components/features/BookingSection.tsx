'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaPhone, FaCarSide, FaExchangeAlt, FaMapMarkedAlt } from 'react-icons/fa';
import { indianCities } from '../../lib/cities';

const BookingSection = () => {
  const [bookingType, setBookingType] = useState('oneWay');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [phone, setPhone] = useState('');

  const tabVariants = {
    active: {
      backgroundColor: '#6366F1',
      color: 'white',
      scale: 1.02,
    },
    inactive: {
      backgroundColor: '#EEF2FF',
      color: '#4B5563',
      scale: 1,
    }
  };

  return (
    <section className="relative -mt-8 z-20 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden border border-gray-100"
        >
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#EEF2FF] to-white rounded-full -mr-32 -mt-32 opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#EEF2FF] to-white rounded-full -ml-32 -mb-32 opacity-50" />

          {/* Content */}
          <div className="relative">
            {/* Booking Type Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { id: 'oneWay', label: 'One Way Trip', icon: FaCarSide },
                { id: 'roundTrip', label: 'Round Trip', icon: FaExchangeAlt },
                { id: 'localRental', label: 'Local Rental', icon: FaMapMarkedAlt }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setBookingType(tab.id)}
                  initial="inactive"
                  animate={bookingType === tab.id ? "active" : "inactive"}
                  variants={tabVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm"
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </motion.button>
              ))}
            </div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
            >
              {/* Pickup Location */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Pick Up Location
                </label>
                <div className="relative group">
                  <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#6366F1] transition-colors" />
                  <select
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="pl-10 w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] bg-[#EEF2FF] group-hover:border-[#6366F1] transition-colors"
                  >
                    <option value="">Select City</option>
                    {indianCities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Drop-off Location */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Drop Off Location
                </label>
                <div className="relative group">
                  <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#6366F1] transition-colors" />
                  <select
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    className="pl-10 w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] bg-[#EEF2FF] group-hover:border-[#6366F1] transition-colors"
                  >
                    <option value="">Select City</option>
                    {indianCities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Pick Up Date
                </label>
                <div className="relative group">
                  <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#6366F1] transition-colors" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="pl-10 w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] bg-[#EEF2FF] group-hover:border-[#6366F1] transition-colors"
                  />
                </div>
              </div>

              {/* Time */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Pick Up Time
                </label>
                <div className="relative group">
                  <FaClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#6366F1] transition-colors" />
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="pl-10 w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] bg-[#EEF2FF] group-hover:border-[#6366F1] transition-colors"
                  >
                    <option value="">Select Time</option>
                    {Array.from({ length: 24 }, (_, i) => {
                      const hour = i.toString().padStart(2, '0');
                      return (
                        <option key={hour} value={`${hour}:00`}>
                          {hour}:00
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              {/* Phone Number */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Mobile Number
                </label>
                <div className="relative flex group">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-200 bg-[#EEF2FF] text-gray-500 text-sm group-hover:border-[#6366F1] transition-colors">
                    +91
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter Mobile Number"
                    className="flex-1 p-3 border border-gray-200 rounded-r-xl focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] bg-[#EEF2FF] group-hover:border-[#6366F1] transition-colors"
                    maxLength={10}
                  />
                </div>
              </div>
            </motion.div>

            {/* Search Button and Coupon */}
            <div className="mt-8 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm font-medium bg-[#EEF2FF] px-4 py-2.5 rounded-full inline-flex items-center gap-2 border border-gray-200"
              >
                <span className="font-bold text-[#6366F1]">TICCAB599</span>
                <span className="text-gray-600">- ₹599 off on your first booking</span>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(99, 102, 241, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-[#6366F1] to-[#5558E6] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 min-w-[200px]"
              >
                Find a Vehicle
                <FaCarSide className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection; 