'use client';

import { useState } from 'react';
import RouteCard from '../components/RouteCard';

const allRoutes = [
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
    ],
    category: 'heritage'
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
    ],
    category: 'beach'
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
    ],
    category: 'heritage'
  },
  {
    id: 'manali-leh',
    title: 'Himalayan Adventure',
    description: 'Epic journey through the mighty Himalayas.',
    image: '/images/himalayas.jpg',
    duration: '5 Days',
    price: '15999',
    startLocation: 'Manali',
    endLocation: 'Leh',
    highlights: [
      'Mountain Views',
      'Adventure Activities',
      'Camping Experience',
      'Local Culture'
    ],
    category: 'adventure'
  },
  {
    id: 'kerala-backwaters',
    title: 'Kerala Backwaters Tour',
    description: 'Serene journey through the backwaters of Kerala.',
    image: '/images/kerala.jpg',
    duration: '3 Days',
    price: '9999',
    startLocation: 'Kochi',
    endLocation: 'Alleppey',
    highlights: [
      'Houseboat Stay',
      'Traditional Kerala Cuisine',
      'Village Experiences',
      'Ayurvedic Spa'
    ],
    category: 'nature'
  },
  {
    id: 'varanasi-spiritual',
    title: 'Spiritual Varanasi Tour',
    description: 'Experience the spiritual heart of India.',
    image: '/images/varanasi.jpg',
    duration: '2 Days',
    price: '4999',
    startLocation: 'Varanasi',
    endLocation: 'Varanasi',
    highlights: [
      'Ganga Aarti',
      'Temple Visits',
      'Boat Rides',
      'Cultural Shows'
    ],
    category: 'spiritual'
  }
];

const categories = [
  { id: 'all', name: 'All Routes' },
  { id: 'heritage', name: 'Heritage' },
  { id: 'beach', name: 'Beach' },
  { id: 'adventure', name: 'Adventure' },
  { id: 'nature', name: 'Nature' },
  { id: 'spiritual', name: 'Spiritual' }
];

export default function Routes() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recommended');

  const filteredRoutes = allRoutes
    .filter(route => {
      const matchesCategory = selectedCategory === 'all' || route.category === selectedCategory;
      const matchesSearch = route.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          route.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          route.startLocation.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          route.endLocation.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') {
        return parseInt(a.price) - parseInt(b.price);
      } else if (sortBy === 'price-high') {
        return parseInt(b.price) - parseInt(a.price);
      } else if (sortBy === 'duration') {
        return parseInt(a.duration) - parseInt(b.duration);
      }
      return 0; // Default/recommended sorting
    });

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Explore Our Routes</h1>

        {/* Filters Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <input
                type="text"
                placeholder="Search routes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredRoutes.length} {filteredRoutes.length === 1 ? 'route' : 'routes'}
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRoutes.map(route => (
            <RouteCard key={route.id} route={route} />
          ))}
        </div>

        {/* No Results */}
        {filteredRoutes.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No routes found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </main>
  );
}