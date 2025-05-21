'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import PaymentForm from '../components/PaymentForm';

export default function Payment() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    // In a real application, you would fetch the booking details from an API
    // using the booking ID from the URL params
    const mockBookingDetails = {
      bookingId: searchParams.get('bookingId') || 'BOOK123',
      route: {
        title: 'Delhi to Agra Tour',
        price: '2999',
        date: '2024-04-15',
        passengers: 2
      },
      customer: {
        name: 'John Doe',
        email: 'john@example.com'
      },
      totalAmount: 5998 // price * passengers
    };

    setBookingDetails(mockBookingDetails);
  }, [searchParams]);

  const handlePaymentComplete = () => {
    // In a real application, you would handle the payment confirmation
    // and redirect to the confirmation page with the booking details
    router.push(`/confirmation?bookingId=${bookingDetails.bookingId}`);
  };

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
        <h1 className="text-3xl font-bold text-center mb-8">Complete Your Payment</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <PaymentForm
              amount={bookingDetails.totalAmount}
              onPaymentComplete={handlePaymentComplete}
            />
          </div>

          {/* Booking Summary */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-8">
              <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600">Booking ID</p>
                  <p className="font-semibold">{bookingDetails.bookingId}</p>
                </div>

                <div>
                  <p className="text-gray-600">Route</p>
                  <p className="font-semibold">{bookingDetails.route.title}</p>
                </div>

                <div>
                  <p className="text-gray-600">Travel Date</p>
                  <p className="font-semibold">
                    {new Date(bookingDetails.route.date).toLocaleDateString()}
                  </p>
                </div>

                <div>
                  <p className="text-gray-600">Number of Passengers</p>
                  <p className="font-semibold">{bookingDetails.route.passengers}</p>
                </div>

                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Price per person</span>
                    <span>₹{bookingDetails.route.price}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Passengers</span>
                    <span>× {bookingDetails.route.passengers}</span>
                  </div>
                  <div className="flex justify-between items-center font-semibold text-lg pt-2 border-t">
                    <span>Total Amount</span>
                    <span className="text-blue-600">₹{bookingDetails.totalAmount}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-600">
                <p className="mb-2">
                  <span className="font-semibold">Cancellation Policy:</span> Free cancellation up to 24 hours before the journey.
                </p>
                <p>
                  <span className="font-semibold">Note:</span> Please review all details before proceeding with the payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}