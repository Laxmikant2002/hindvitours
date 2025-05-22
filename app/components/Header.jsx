'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { handleBookNow } from '../lib/navigation';
import { 
  FaBars, 
  FaTimes, 
  FaUserCircle, 
  FaSignOutAlt, 
  FaPhone, 
  FaEnvelope,
  FaLandmark,
  FaUmbrellaBeach,
  FaPalace
} from 'react-icons/fa';
import Logo from './Logo';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  
  const isActive = (path) => pathname === path;

  // Check user login status and fetch profile
  useEffect(() => {
    const checkLoginStatus = () => {
      const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
      setIsLoggedIn(userLoggedIn);
      
      if (userLoggedIn) {
        // Get user profile from localStorage
        const profile = JSON.parse(localStorage.getItem('userProfile') || '{}');
        setUserProfile(profile);
      }
    };

    checkLoginStatus();
    // Add event listener for storage changes
    window.addEventListener('storage', checkLoginStatus);
    return () => window.removeEventListener('storage', checkLoginStatus);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleLogout = () => {
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('userProfile');
    setIsLoggedIn(false);
    setUserProfile(null);
    setIsMenuOpen(false);
  };

  // Handle book now button click
  const onBookNowClick = () => {
    handleBookNow(router);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <header className="bg-white shadow-md relative z-20">
      {/* Top Bar */}
      <div className="bg-indigo-600 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:+919876543210" className="flex items-center hover:text-indigo-200">
              <FaPhone className="mr-2" /> +91 98765 43210
            </a>
            <a href="mailto:info@hindvitours.com" className="flex items-center hover:text-indigo-200">
              <FaEnvelope className="mr-2" /> info@hindvitours.com
            </a>
          </div>
          {isLoggedIn && userProfile && (
            <div className="flex items-center space-x-2">
              <span>Welcome, {userProfile.name || 'Guest'}</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                isActive('/') ? 'border-indigo-500 text-gray-900' : ''
              }`}
            >
              Home
            </Link>
            <Link
              href="/routes"
              className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                isActive('/routes') ? 'border-indigo-500 text-gray-900' : ''
              }`}
              prefetch={true}
            >
              Routes
            </Link>
            <button
              onClick={onBookNowClick}
              className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                isActive('/booking') ? 'border-indigo-500 text-gray-900' : ''
              }`}
            >
              Book Now
            </button>
            <Link
              href="/about"
              className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                isActive('/about') ? 'border-indigo-500 text-gray-900' : ''
              }`}
            >
              About
            </Link>
            <Link
              href="/support"
              className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                isActive('/support') ? 'border-indigo-500 text-gray-900' : ''
              }`}
            >
              Support
            </Link>
          </div>

          {/* User Account & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* User Account */}
            <div className="hidden md:flex items-center space-x-4">
              {isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  <Link 
                    href="/account" 
                    className={`text-gray-500 hover:text-indigo-600 transition-colors flex items-center ${
                      isActive('/account') ? 'text-indigo-600' : ''
                    }`}
                  >
                    <FaUserCircle className="mr-2" />
                    <span className="text-sm font-medium">My Account</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-gray-500 hover:text-red-600 transition-colors flex items-center text-sm font-medium"
                  >
                    <FaSignOutAlt className="mr-2" />
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  href="/account"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                >
                  Sign In
                </Link>
              )}
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg absolute w-full z-10`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/') ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/routes"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/routes') ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Routes
          </Link>
          <button
            onClick={onBookNowClick}
            className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${
              isActive('/booking') ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            Book Now
          </button>
          <Link
            href="/about"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/about') ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/support"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/support') ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Support
          </Link>

          {/* Mobile Account Section */}
          <div className="border-t border-gray-200 pt-4 pb-3">
            {isLoggedIn ? (
              <>
                <div className="px-3 space-y-1">
                  <Link
                    href="/account"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaUserCircle className="inline-block mr-2" />
                    My Account
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
                  >
                    <FaSignOutAlt className="inline-block mr-2" />
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <div className="px-3">
                <Link
                  href="/account"
                  className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}