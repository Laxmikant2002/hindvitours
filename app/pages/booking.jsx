'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import BookingForm from '../components/BookingForm';
import RouteCard from '../components/RouteCard';

// This would typically come from an API or database
const routes = [
  {
    id: 'delhi-agra',
    title: 'Delhi to Agra Tour',
    description: 'Experience the majestic Taj Mahal and rich history of Agra Fort.',
    image: '/images/taj-mahal.jpg',
    duration: '1 Day',
    price: '2999',
    startLocation: 'Delhi',
    endLocation: 'Agra',
    highlights: [
      'Visit the iconic Taj Mahal',
      'Explore Agra Fort',
      'Luxury AC Bus Travel',
      'Professional Guide'
    ]
  },
  // ... other routes
];

export default function Booking() {
  const searchParams = useSearchParams();
  const [selectedRoute, setSelectedRoute] = useState(null);

  useEffect(() => {
    const routeId = searchParams.get('route');
    if (routeId) {
      const route = routes.find(r => r.id === routeId);
      setSelectedRoute(route);
    }
  }, [searchParams]);

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Book Your Journey</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <BookingForm selectedRoute={selectedRoute} />
          </div>

          {/* Selected Route Details */}
          <div>
            {selectedRoute ? (
              <div className="sticky top-8">
                <RouteCard route={selectedRoute} />
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">No Route Selected</h2>
                <p className="text-gray-600">
                  Please select a route from our available options to proceed with booking.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}