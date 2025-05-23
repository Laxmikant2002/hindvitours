'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from '../ui/Logo';

const socialLinks = [
  { icon: FaFacebook, href: 'https://facebook.com/hindvitours', label: 'Facebook' },
  { icon: FaTwitter, href: 'https://twitter.com/hindvitours', label: 'Twitter' },
  { icon: FaInstagram, href: 'https://instagram.com/hindvitours', label: 'Instagram' },
  { icon: FaLinkedin, href: 'https://linkedin.com/company/hindvitours', label: 'LinkedIn' }
];

const quickLinks = [
  { name: 'Popular Routes', href: '/routes' },
  { name: 'Book a Tour', href: '/booking' },
  { name: 'About Us', href: '/about' },
  { name: 'Support', href: '/support' }
];

const legalLinks = [
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Refund Policy', href: '/refund' }
];

const contactInfo = {
  email: 'info@hindvitours.com',
  phone: '+91 98765 43210',
  address: '123 Tourism Street, New Delhi, 110001, India'
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Info */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <Logo variant="light" />
            <p className="text-sm text-gray-400 max-w-xs">
              Your trusted partner for memorable travel experiences across India. 
              Discover the beauty and culture of India with us.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <Link 
                    href={link.href} 
                    className="hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <Link 
                    href={link.href} 
                    className="hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-2">
                <FaEnvelope className="text-indigo-400" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-2">
                <FaPhone className="text-indigo-400" />
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-indigo-400 mt-1" />
                <address className="not-italic text-sm text-gray-400">
                  {contactInfo.address}
                </address>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 py-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              variants={itemVariants}
              className="text-sm text-gray-400"
            >
              © {currentYear} HindviTours. All rights reserved.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex space-x-6 text-sm"
            >
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 