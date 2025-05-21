'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">HindviTours</h3>
            <p className="text-gray-300">
              Your trusted partner for memorable travel experiences across India.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/routes" className="text-gray-300 hover:text-white">Routes</Link></li>
              <li><Link href="/booking" className="text-gray-300 hover:text-white">Book Now</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/support" className="text-gray-300 hover:text-white">Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/refund" className="text-gray-300 hover:text-white">Refund Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@hindvitours.com</li>
              <li>Phone: +91 XXX XXX XXXX</li>
              <li>Address: New Delhi, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} HindviTours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 