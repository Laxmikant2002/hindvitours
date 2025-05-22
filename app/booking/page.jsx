'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BookingForm from '../components/BookingForm';
import RouteCard from '../components/RouteCard';
import PageTransition from '../components/PageTransition';
import { allRoutes as routes } from '../config/routes';

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
    <PageTransition>
      <main className="min-h-screen bg-gray-50 py-8" role="main">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-8 text-black"
          >
            Book Your Journey
          </motion.h1>

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
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h2 className="text-xl font-semibold mb-4 text-black">No Route Selected</h2>
                  <p className="text-black">
                    Please select a route from our available options to proceed with booking.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
