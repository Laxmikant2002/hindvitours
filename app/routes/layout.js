export const metadata = {
  title: 'Explore Our Routes | HindviTours',
  description: 'Discover handpicked travel routes across India - from heritage tours to beach getaways. Find your perfect journey with HindviTours.',
  keywords: 'India tours, travel routes, heritage tours, beach tours, adventure tours, spiritual tours',
  openGraph: {
    title: 'Explore Our Routes | HindviTours',
    description: 'Discover handpicked travel routes across India - from heritage tours to beach getaways. Find your perfect journey with HindviTours.',
    images: [
      {
        url: '/images/tours/taj-mahal.webp',
        width: 1200,
        height: 630,
        alt: 'HindviTours Routes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Explore Our Routes | HindviTours',
    description: 'Discover handpicked travel routes across India - from heritage tours to beach getaways. Find your perfect journey with HindviTours.',
    images: ['/images/tours/taj-mahal.webp'],
  },
};

export default function RouteLayout({ children }) {
  return children;
}
