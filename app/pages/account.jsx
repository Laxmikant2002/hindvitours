'use client';

import { useState } from 'react';
import UserProfile from '../components/UserProfile';
import Link from 'next/link';

// Mock user data - in a real application, this would come from an API
const mockUser = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+91 98765 43210',
  address: '123 Main Street, New Delhi, India',
  preferences: {
    emailNotifications: true,
    smsNotifications: false
  }
};

const mockBookings = [
  {
    id: 'BOOK123',
    route: {
      title: 'Delhi to Agra Tour',
      date: '2024-04-15',
      startLocation: 'Delhi',
      endLocation: 'Agra'
    },
    status: 'upcoming',
    amount: 5998,
    passengers: 2
  },
  {
    id: 'BOOK122',
    route: {
      title: 'Mumbai to Goa Coastal Route',
      date: '2024-03-10',
      startLocation: 'Mumbai',
      endLocation: 'Goa'
    },
    status: 'completed',
    amount: 11998,
    passengers: 2
  },
  {
    id: 'BOOK121',
    route: {
      title: 'Royal Rajasthan Tour',
      date: '2024-02-20',
      startLocation: 'Jaipur',
      endLocation: 'Udaipur'
    },
    status: 'cancelled',
    amount: 17998,
    passengers: 2
  }
];

export default function Account() {
  const [activeTab, setActiveTab] = useState('profile');

  const handleProfileUpdate = async (updatedData) => {
    // In a real application, this would make an API call to update the user profile
    console.log('Updating profile:', updatedData);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">My Account</h1>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'profile'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab('bookings')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'bookings'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              My Bookings
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'profile' ? (
          <UserProfile user={mockUser} onUpdate={handleProfileUpdate} />
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">My Bookings</h2>

              <div className="space-y-6">
                {mockBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="border rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{booking.route.title}</h3>
                        <p className="text-gray-600">
                          {new Date(booking.route.date).toLocaleDateString()}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full capitalize ${getStatusColor(
                          booking.status
                        )}`}
                      >
                        {booking.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-gray-600">From</p>
                        <p className="font-semibold">{booking.route.startLocation}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">To</p>
                        <p className="font-semibold">{booking.route.endLocation}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Passengers</p>
                        <p className="font-semibold">{booking.passengers}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-600">Total Amount</p>
                        <p className="text-lg font-semibold text-blue-600">₹{booking.amount}</p>
                      </div>
                      <Link
                        href={`/confirmation?bookingId=${booking.id}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}