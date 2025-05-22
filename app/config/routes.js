export const allRoutes = [
  {
    id: 'delhi-agra',
    title: 'Delhi to Agra Tour',
    description: 'Experience the majestic Taj Mahal and rich history of Agra Fort.',
    image: '/images/taj-mahal.webp',
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
    image: '/images/goa-beach.webp',
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
  }
];

export const siteRoutes = {
  home: {
    path: '/',
    label: 'Home'
  },
  routes: {
    path: '/routes',
    label: 'Routes'
  },
  booking: {
    path: '/booking',
    label: 'Book Now'
  },
  about: {
    path: '/about',
    label: 'About'
  },
  support: {
    path: '/support',
    label: 'Support'
  },
  account: {
    path: '/account',
    label: 'My Account'
  },
  privacy: {
    path: '/privacy',
    label: 'Privacy Policy'
  },
  terms: {
    path: '/terms&condition',
    label: 'Terms & Conditions'
  }
};
