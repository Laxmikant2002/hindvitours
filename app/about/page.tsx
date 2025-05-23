'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/ui/PageLayout';
import { FaHeart, FaShieldAlt, FaUserFriends, FaGlobe } from 'react-icons/fa';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image?: string;
}

interface Value {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    description: 'With over 20 years of experience in the tourism industry, Rajesh leads our vision of making Indian tourism accessible to all.',
    image: '/team/rajesh.jpg'
  },
  {
    name: 'Priya Sharma',
    role: 'Operations Director',
    description: 'Priya ensures smooth operations across all our routes and maintains our high standards of service quality.',
    image: '/team/priya.jpg'
  },
  {
    name: 'Amit Patel',
    role: 'Customer Experience Head',
    description: 'Amit leads our customer experience initiatives, ensuring every journey exceeds expectations.',
    image: '/team/amit.jpg'
  }
];

const values: Value[] = [
  {
    title: 'Customer First',
    description: "We prioritize our customers' needs and ensure their satisfaction at every step.",
    icon: FaHeart,
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Safety & Reliability',
    description: 'Your safety is our top priority, and we ensure reliable service every time.',
    icon: FaShieldAlt,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Cultural Respect',
    description: 'We promote and respect local cultures and traditions in all our tours.',
    icon: FaGlobe,
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Community Focus',
    description: 'We believe in sustainable tourism that benefits local communities.',
    icon: FaUserFriends,
    gradient: 'from-green-500 to-emerald-500'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export default function AboutPage() {
  return (
    <PageLayout>
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About HindviTours</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the heart and soul of India with a team dedicated to creating unforgettable travel experiences.
            </p>
          </motion.div>
          
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mb-24 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl p-1">
              <div className="bg-white rounded-3xl p-8 sm:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  HindviTours was founded with a passion for showcasing the rich cultural heritage and natural beauty of India. 
                  Our journey began with a simple mission: to make Indian tourism accessible, comfortable, and memorable for everyone.
                  Today, we continue to innovate and enhance the travel experience while staying true to our core values.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-indigo-500 to-purple-500">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                      <div className="text-indigo-600 mb-3 font-medium">{member.role}</div>
                      <p className="text-gray-600">{member.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${value.gradient} flex items-center justify-center text-white mb-4 transform group-hover:scale-110 transition-transform`}>
                        <value.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-3xl p-12">
              <h2 className="text-3xl font-bold mb-6">Ready to Experience India?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join us on a journey through the incredible diversity of India.
              </p>
              <button
                onClick={() => window.location.href = '/routes'}
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Explore Our Tours
              </button>
            </div>
          </motion.section>
        </div>
      </main>
    </PageLayout>
  );
} 