// Common route paths
export const ROUTES = {
  HOME: '/',
  ROUTES: '/routes',
  BOOKING: '/booking',
};

// Route utilities
export const createBookingUrl = (routeId) => {
  return `${ROUTES.BOOKING}${routeId ? `?route=${routeId}` : ''}`;
};

// Navigation functions
export const handleBookNow = (router, routeId = null) => {
  router.push(createBookingUrl(routeId), {
    scroll: true, // Scroll to top on navigation
  });
};
