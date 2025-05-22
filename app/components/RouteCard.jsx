'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaMonument, 
  FaUmbrellaBeach, 
  FaCity, 
  FaMapMarkerAlt, 
  FaClock, 
  FaRupeeSign,
  FaMountain,
  FaWater,
  FaPrayingHands
} from 'react-icons/fa';

const getRouteIcon = (id) => {
  switch (id) {
    case 'delhi-agra':
      return <FaMonument className="w-12 h-12" />;
    case 'mumbai-goa':
      return <FaUmbrellaBeach className="w-12 h-12" />;
    case 'jaipur-udaipur':
      return <FaCity className="w-12 h-12" />;
    case 'manali-leh':
      return <FaMountain className="w-12 h-12" />;
    case 'kerala-backwaters':
      return <FaWater className="w-12 h-12" />;
    case 'varanasi-spiritual':
      return <FaPrayingHands className="w-12 h-12" />;
    default:
      return <FaMapMarkerAlt className="w-12 h-12" />;
  }
};

const getGradient = (id) => {
  switch (id) {
    case 'delhi-agra':
      return 'from-red-500 to-orange-500';
    case 'mumbai-goa':
      return 'from-blue-500 to-teal-500';
    case 'jaipur-udaipur':
      return 'from-purple-500 to-pink-500';
    default:
      return 'from-indigo-500 to-purple-500';
  }
};

const RouteCard = ({ route }) => {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className={`h-48 bg-gradient-to-r ${getGradient(route.id)} relative p-6 flex items-center justify-center`}>
        <div className="text-white transform hover:scale-110 transition-transform duration-300">
          {getRouteIcon(route.id)}
        </div>
        <motion.div
          initial={false}
          className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"
          whileHover={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{route.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{route.description}</p>
        
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-500">
            <FaClock className="w-4 h-4 mr-2" />
            <span>{route.duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <FaMapMarkerAlt className="w-4 h-4 mr-2" />
            <span>{route.startLocation} → {route.endLocation}</span>
          </div>
          <div className="flex items-center text-sm font-semibold text-indigo-600">
            <FaRupeeSign className="w-4 h-4 mr-1" />
            <span>{route.price}</span>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <h4 className="font-semibold text-gray-900">Highlights:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {route.highlights.map((highlight, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <Link 
          href={`/booking?route=${route.id}`}
          className="mt-6 block text-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </motion.div>
  );
};

export default RouteCard;