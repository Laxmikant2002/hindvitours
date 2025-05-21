'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            HindviTours
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/routes" className="text-gray-600 hover:text-gray-900">Routes</Link>
            <Link href="/booking" className="text-gray-600 hover:text-gray-900">Book</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/support" className="text-gray-600 hover:text-gray-900">Support</Link>
            <Link href="/account" className="text-gray-600 hover:text-gray-900">Account</Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <Link href="/routes" className="block py-2 text-gray-600">Routes</Link>
            <Link href="/booking" className="block py-2 text-gray-600">Book</Link>
            <Link href="/about" className="block py-2 text-gray-600">About</Link>
            <Link href="/support" className="block py-2 text-gray-600">Support</Link>
            <Link href="/account" className="block py-2 text-gray-600">Account</Link>
          </div>
        )}
      </nav>
    </header>
  );
} 