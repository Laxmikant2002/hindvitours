import Image from "next/image";
import Link from 'next/link';
import RouteCard from './components/RouteCard';

const featuredRoutes = [
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
  {
    id: 'mumbai-goa',
    title: 'Mumbai to Goa Coastal Route',
    description: 'Scenic coastal journey from Mumbai to the beaches of Goa.',
    image: '/images/goa-beach.jpg',
    duration: '2 Days',
    price: '5999',
    startLocation: 'Mumbai',
    endLocation: 'Goa',
    highlights: [
      'Scenic Coastal Drive',
      'Beach Stops',
      'Luxury Overnight Stay',
      'Meals Included'
    ]
  },
  {
    id: 'jaipur-udaipur',
    title: 'Royal Rajasthan Tour',
    description: 'Journey through the royal cities of Rajasthan.',
    image: '/images/rajasthan-palace.jpg',
    duration: '3 Days',
    price: '8999',
    startLocation: 'Jaipur',
    endLocation: 'Udaipur',
    highlights: [
      'Visit Royal Palaces',
      'Cultural Experiences',
      'Luxury Accommodations',
      'Traditional Cuisine'
    ]
  }
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Indian Tourism"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover India's Beauty
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience the rich culture, stunning landscapes, and unforgettable journeys across India
          </p>
          <Link
            href="/routes"
            className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Explore Routes
          </Link>
        </div>
      </section>

      {/* Featured Routes Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRoutes.map(route => (
              <RouteCard key={route.id} route={route} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-blue-600">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Trusted Service</h3>
              <p className="text-gray-600">
                Over 10,000 satisfied customers and counting. Your safety and comfort are our top priorities.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-blue-600">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Best Prices</h3>
              <p className="text-gray-600">
                Competitive prices with no hidden charges. Get the best value for your money.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-blue-600">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Instant Booking</h3>
              <p className="text-gray-600">
                Easy and instant booking process. Secure your journey in minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">
            Book your next adventure with us and create memories that last a lifetime.
          </p>
          <Link
            href="/booking"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
}
