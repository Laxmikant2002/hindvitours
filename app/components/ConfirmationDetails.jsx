'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ConfirmationDetails({ booking }) {
  const [showQR, setShowQR] = useState(false);

  const {
    bookingId,
    route,
    passengers,
    totalAmount,
    paymentStatus,
    bookingDate,
    travelDate,
    customerDetails
  } = booking;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="text-center mb-8">
        <div className="mb-4">
          <svg
            className="w-16 h-16 text-green-500 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Booking Confirmed!</h2>
        <p className="text-gray-600 mt-2">Your booking has been successfully confirmed.</p>
      </div>

      <div className="border-t border-b border-gray-200 py-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Booking ID:</span>
          <span className="font-semibold">{bookingId}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Route:</span>
          <span className="font-semibold">{route.title}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Travel Date:</span>
          <span className="font-semibold">{new Date(travelDate).toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Number of Passengers:</span>
          <span className="font-semibold">{passengers}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Amount:</span>
          <span className="font-semibold text-blue-600">₹{totalAmount}</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-3">Customer Details</h3>
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="mb-2"><span className="text-gray-600">Name:</span> {customerDetails.name}</p>
          <p className="mb-2"><span className="text-gray-600">Email:</span> {customerDetails.email}</p>
          <p><span className="text-gray-600">Phone:</span> {customerDetails.phone}</p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-3">Payment Status</h3>
        <div className={`inline-flex items-center px-3 py-1 rounded-full ${
          paymentStatus === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          <span className="capitalize">{paymentStatus}</span>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <button
          onClick={() => setShowQR(!showQR)}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
        >
          {showQR ? 'Hide QR Code' : 'Show QR Code'}
        </button>
        
        {showQR && (
          <div className="text-center p-4 border rounded-md">
            {/* Placeholder for QR Code */}
            <div className="w-48 h-48 mx-auto bg-gray-200 flex items-center justify-center">
              QR Code Placeholder
            </div>
            <p className="mt-2 text-sm text-gray-600">Scan this QR code at the pickup point</p>
          </div>
        )}

        <Link
          href={`/account/bookings/${bookingId}`}
          className="text-center text-blue-600 hover:text-blue-800"
        >
          View Booking Details
        </Link>
      </div>

      <div className="mt-8 text-center text-sm text-gray-600">
        <p>A confirmation email has been sent to {customerDetails.email}</p>
        <p className="mt-2">For any assistance, please contact our support team</p>
      </div>
    </div>
  );
} 