'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import RouteCard from '../components/RouteCard';
import LoadingSpinner from '../components/LoadingSpinner';
import PageTransition from '../components/PageTransition';
import { allRoutes } from '../config/routes';

const categories = [
  { id: 'all', name: 'All Routes' },
  { id: 'heritage', name: 'Heritage' },
  { id: 'beach', name: 'Beach' },
  { id: 'adventure', name: 'Adventure' },
  { id: 'nature', name: 'Nature' },
  { id: 'spiritual', name: 'Spiritual' }
];

// Container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Routes() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recommended');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Update URL with filters
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory !== 'all') params.set('category', selectedCategory);
    if (searchQuery) params.set('search', searchQuery);
    if (sortBy !== 'recommended') params.set('sort', sortBy);
    
    const newUrl = params.toString() ? `?${params.toString()}` : '';
    router.push(`/routes${newUrl}`, { scroll: false });
  }, [selectedCategory, searchQuery, sortBy]);

  // Initialize filters from URL
  useEffect(() => {
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const sort = searchParams.get('sort');

    if (category) setSelectedCategory(category);
    if (search) setSearchQuery(search);
    if (sort) setSortBy(sort);
  }, []);

  useEffect(() => {
    // Simulate loading state for smoother transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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

  if (isLoading) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      </PageTransition>
    );
  }

  if (error) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center" role="alert" aria-live="polite">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Try Again
            </button>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <main className="min-h-screen bg-gray-50 py-8" role="main">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-8 text-black"
          >
            Explore Our Routes
          </motion.h1>

          {/* Filters Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg shadow-md mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div>
                <label htmlFor="route-search" className="sr-only">Search routes</label>
                <input
                  id="route-search"
                  type="text"
                  placeholder="Search routes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-black"
                  aria-label="Search routes"
                />
              </div>

              {/* Category Filter */}
              <div>
                <label htmlFor="category-filter" className="sr-only">Filter by category</label>
                <select
                  id="category-filter"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-black"
                  aria-label="Filter by category"
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
                <label htmlFor="sort-filter" className="sr-only">Sort routes</label>
                <select
                  id="sort-filter"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-black"
                  aria-label="Sort routes"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="duration">Duration</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <p className="text-black" role="status" aria-live="polite">
              Showing {filteredRoutes.length} {filteredRoutes.length === 1 ? 'route' : 'routes'}
            </p>
          </motion.div>

          {/* Routes Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
            aria-label="Available routes"
          >
            {filteredRoutes.map(route => (
              <RouteCard key={route.id} route={route} />
            ))}
          </motion.div>

          {/* No Results */}
          {filteredRoutes.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
              role="alert"
              aria-live="polite"
            >
              <h3 className="text-xl font-semibold text-black mb-2">No routes found</h3>
              <p className="text-black">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </main>
    </PageTransition>
  );
}
