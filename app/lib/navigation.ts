import { useRouter } from 'next/navigation';

export type Router = ReturnType<typeof useRouter>;

export const ROUTES = {
  HOME: '/',
  ROUTES: '/routes',
  BOOKING: '/booking',
  PAYMENT: '/payment',
  CONFIRMATION: '/confirmation',
  ACCOUNT: '/account',
  SUPPORT: '/support',
  ABOUT: '/about',
  PRIVACY: '/privacy',
  TERMS: '/terms'
} as const;

export const navigateToRoute = (router: Router, routeId: string) => {
  router.push(`/routes_p/${routeId}`);
};

export const navigateToBooking = (router: Router, routeId: string) => {
  router.push(`/booking?route=${routeId}`);
};

export const navigateToPayment = (router: Router, bookingId: string) => {
  router.push(`/payment?booking=${bookingId}`);
};

export const navigateToConfirmation = (router: Router, bookingId: string) => {
  router.push(`/confirmation?booking=${bookingId}`);
};

export const navigateToAccount = (router: Router) => {
  router.push(ROUTES.ACCOUNT);
};

export const handleBookNow = (router: Router, routeId: string) => {
  router.push(`/booking?route=${routeId}`);
};

export const handlePaymentComplete = (router: Router, bookingId: string) => {
  router.push(`/confirmation?booking=${bookingId}`);
};

export const handleViewBooking = (router: Router, bookingId: string) => {
  router.push(`/confirmation?booking=${bookingId}`);
}; 