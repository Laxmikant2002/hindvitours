'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    image: '/images/team/ceo.jpg',
    bio: 'With over 20 years of experience in the tourism industry, Rajesh leads our vision of making Indian tourism accessible to all.'
  },
  {
    name: 'Priya Sharma',
    role: 'Operations Director',
    image: '/images/team/operations.jpg',
    bio: 'Priya ensures smooth operations across all our routes and maintains our high standards of service quality.'
  },
  {
    name: 'Amit Patel',
    role: 'Customer Experience Head',
    image: '/images/team/customer.jpg',
    bio: 'Amit leads our customer experience initiatives, ensuring every journey exceeds expectations.'
  }
];

const stats = [
  {
    number: '10K+',
    label: 'Happy Customers',
    description: 'Satisfied travelers who have experienced our services'
  },
  {
    number: '50+',
    label: 'Tourist Destinations',
    description: 'Carefully selected locations across India'
  },
  {
    number: '15+',
    label: 'Years Experience',
    description: 'Providing quality travel services since 2010'
  }
];

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About HindviTours</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the story behind India's premier travel experience provider. We're dedicated to 
            showcasing the beauty and culture of India while ensuring comfort and safety for all our travelers.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6 bg-indigo-50 rounded-lg"
            >
              <h3 className="text-4xl font-bold text-indigo-600 mb-2">{stat.number}</h3>
              <p className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</p>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg mb-8">
              To be India's most trusted travel partner, making the country's rich cultural heritage 
              and natural beauty accessible to travelers from around the world while promoting 
              sustainable and responsible tourism.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
