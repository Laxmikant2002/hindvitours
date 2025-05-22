export const metadata = {
  title: 'Book Your Journey | HindviTours',
  description: 'Book your dream Indian tour with HindviTours. Easy booking process, secure payments, and unforgettable experiences.',
  openGraph: {
    title: 'Book Your Journey | HindviTours',
    description: 'Book your dream Indian tour with HindviTours. Easy booking process, secure payments, and unforgettable experiences.',
  },
};

export default function BookingLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
