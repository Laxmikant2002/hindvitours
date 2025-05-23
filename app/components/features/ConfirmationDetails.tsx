'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQrcode, FaShareAlt } from 'react-icons/fa';
import QRCode from 'qrcode.react';

export type BookingDetails = {
  bookingId: string;
  tourName: string;
  date: string;
  passengers: number;
  amount: number;
  paymentStatus: 'confirmed' | 'pending' | 'failed';
  pickupLocation: string;
  dropLocation: string;
  departureTime: string;
  duration: string;
  inclusions: readonly string[];
}

interface ConfirmationDetailsProps {
  booking: BookingDetails;
}

export default function ConfirmationDetails({ booking }: ConfirmationDetailsProps) {
  const [showQR, setShowQR] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Tour Booking Confirmation',
          text: `Booking confirmed for ${booking.tourName} on ${booking.date}. Booking ID: ${booking.bookingId}`,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      setShowShareOptions(true);
    }
  };

  return (
    <div className="space-y-6">
      {/* Booking Status */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{booking.tourName}</h3>
          <p className="text-gray-600">
            {new Date(booking.date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
        <div className={`px-4 py-2 rounded-full ${
          booking.paymentStatus === 'confirmed'
            ? 'bg-green-100 text-green-800'
            : booking.paymentStatus === 'pending'
            ? 'bg-yellow-100 text-yellow-800'
            : 'bg-red-100 text-red-800'
        }`}>
          {booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1)}
        </div>
      </div>

      {/* Booking Details */}
      <div className="grid grid-cols-2 gap-4 py-4 border-t border-b">
        <div>
          <p className="text-sm text-gray-500">Booking ID</p>
          <p className="font-medium text-gray-900">{booking.bookingId}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Passengers</p>
          <p className="font-medium text-gray-900">{booking.passengers}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Amount Paid</p>
          <p className="font-medium text-gray-900">₹{booking.amount.toLocaleString('en-IN')}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Duration</p>
          <p className="font-medium text-gray-900">{booking.duration}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowQR(!showQR)}
          className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700"
        >
          <FaQrcode className="w-5 h-5" />
          <span>{showQR ? 'Hide QR Code' : 'Show QR Code'}</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShare}
          className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700"
        >
          <FaShareAlt className="w-5 h-5" />
          <span>Share</span>
        </motion.button>
      </div>

      {/* QR Code */}
      {showQR && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center p-4 bg-gray-50 rounded-xl"
        >
          <QRCode
            value={`${window.location.origin}/booking/${booking.bookingId}`}
            size={200}
            level="H"
            includeMargin
            className="rounded-lg"
          />
        </motion.div>
      )}

      {/* Share Options */}
      {showShareOptions && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-end sm:items-center justify-center p-4"
          onClick={() => setShowShareOptions(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-t-2xl sm:rounded-2xl p-6 w-full max-w-sm"
            onClick={e => e.stopPropagation()}
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Share Booking</h4>
            <div className="space-y-3">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  setShowShareOptions(false);
                }}
                className="w-full py-3 px-4 bg-gray-50 rounded-xl text-left hover:bg-gray-100 transition-colors"
              >
                Copy Link
              </button>
              <button
                onClick={() => {
                  window.open(`mailto:?subject=Tour Booking Confirmation&body=Booking confirmed for ${booking.tourName} on ${booking.date}. Booking ID: ${booking.bookingId}%0D%0A%0D%0AView details: ${window.location.href}`);
                  setShowShareOptions(false);
                }}
                className="w-full py-3 px-4 bg-gray-50 rounded-xl text-left hover:bg-gray-100 transition-colors"
              >
                Email
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
} 