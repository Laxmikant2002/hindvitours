'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
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
  FaPrayingHands,
  FaLandmark,
  FaBuilding
} from 'react-icons/fa';

interface Route {
  id: string;
  title: string;
  description: string;
  duration: string;
  startLocation: string;
  endLocation: string;
  price: number;
  highlights: string[];
  icon: React.ElementType;
}

interface RouteCardProps {
  route: Route;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: { 
    y: -5,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

const iconVariants = {
  hover: {
    scale: 1.1,
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const shimmerVariants = {
  animate: {
    x: ["100%", "-100%"],
    transition: {
      repeat: Infinity,
      duration: 3,
      ease: "linear"
    }
  }
};

const getRouteIcon = (id: string) => {
  const iconProps = {
    className: "w-12 h-12",
    "aria-hidden": true,
    role: "presentation"
  };

  switch (id) {
    case 'delhi-agra':
      return <FaLandmark {...iconProps} />;
    case 'mumbai-goa':
      return <FaUmbrellaBeach {...iconProps} />;
    case 'jaipur-udaipur':
      return <FaCity {...iconProps} />;
    case 'manali-leh':
      return <FaMountain {...iconProps} />;
    case 'kerala-backwaters':
      return <FaWater {...iconProps} />;
    case 'varanasi-spiritual':
      return <FaPrayingHands {...iconProps} />;
    default:
      return <FaMapMarkerAlt {...iconProps} />;
  }
};

const getGradient = (id: string) => {
  switch (id) {
    case 'delhi-agra':
      return 'from-red-500 to-orange-500';
    case 'mumbai-goa':
      return 'from-blue-500 to-teal-500';
    case 'jaipur-udaipur':
      return 'from-purple-500 to-pink-500';
    case 'manali-leh':
      return 'from-blue-600 to-indigo-600';
    case 'kerala-backwaters':
      return 'from-green-500 to-emerald-500';
    case 'varanasi-spiritual':
      return 'from-amber-500 to-yellow-500';
    case 'delhi-agra':
      return 'from-red-500 to-orange-500';
    case 'mumbai-goa':
      return 'from-blue-500 to-teal-500';
    default:
      return 'from-indigo-500 to-purple-500';
  }
};

const RouteCard = ({ route }: RouteCardProps) => {
  const router = useRouter();
  
  // Get the icon component based on the route ID
  const IconComponent = getRouteIcon(route.id);

  const handleBookNow = () => {
    router.push(`/booking?route=${route.id}`);
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-indigo-500"
      role="article"
      aria-labelledby={`route-title-${route.id}`}
    >
      {/* Header Image */}
      <div 
        className={`h-48 bg-gradient-to-r ${getGradient(route.id)} relative p-6 flex items-center justify-center overflow-hidden`}
        role="presentation"
      >
        <motion.div 
          className="text-white z-10"
          variants={iconVariants}
          whileHover="hover"
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-16 h-16 bg-indigo-100 rounded-lg mb-4 flex items-center justify-center">
            {IconComponent}
          </div>
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"
          initial={{ opacity: 0.2 }}
          whileHover={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/0 via-white/10 to-black/0"
          variants={shimmerVariants}
          animate="animate"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div 
        className="p-6 transition-all duration-300"
        style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,1))"
        }}
      >
        <h3 
          id={`route-title-${route.id}`} 
          className="text-xl font-bold text-gray-900 mb-2"
        >
          {route.title}
        </h3>
        <p 
          className="text-gray-600 text-sm mb-4" 
          aria-label={`Description: ${route.description}`}
        >
          {route.description}
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-500">
            <FaMapMarkerAlt className="w-4 h-4 mr-2" />
            <span>{route.startLocation} → {route.endLocation}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <FaClock className="w-4 h-4 mr-2" />
            <span>{route.duration}</span>
          </div>
          <div className="flex items-center text-sm font-semibold text-indigo-600">
            <FaRupeeSign className="w-4 h-4 mr-1" />
            <span>{route.price.toLocaleString('en-IN')}</span>
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

        <motion.button
          onClick={handleBookNow}
          className="mt-6 w-full text-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label={`Book ${route.title} tour starting from ₹${route.price.toLocaleString('en-IN')}`}
        >
          <motion.span
            className="absolute inset-0 bg-white/20"
            initial={{ x: "100%" }}
            whileHover={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
            aria-hidden="true"
          />
          <span className="relative z-10 font-medium">Book Now</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default RouteCard; 