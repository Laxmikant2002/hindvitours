'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ConfirmationDetails from '../components/ConfirmationDetails';

export default function Confirmation() {
  const searchParams = useSearchParams();
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    // In a real application, you would fetch the booking details from an API
    // using the booking ID from the URL params
    const mockBookingDetails = {
      bookingId: searchParams.get('bookingId') || 'BOOK123',
      route: {
        title: 'Delhi to Agra Tour',
        startLocation: 'Delhi',
        endLocation: 'Agra',
        departureTime: '07:00 AM',
        arrivalTime: '11:00 AM'
      },
      passengers: 2,
      totalAmount: 5998,
      paymentStatus: 'completed',
      bookingDate: new Date().toISOString(),
      travelDate: '2024-04-15',
      customerDetails: {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+91 98765 43210'
      }
    };

    setBookingDetails(mockBookingDetails);
  }, [searchParams]);

  if (!bookingDetails) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading booking details...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <ConfirmationDetails booking={bookingDetails} />
      </div>
    </main>
  );
}