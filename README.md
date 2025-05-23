# Hindvi Tours - Taxi Booking Application

A simplified taxi booking web application built with Next.js, allowing users to book rides between major Indian cities.

## Features

- **Simple Booking Flow**
  - Select pickup and drop-off cities from predefined list
  - Choose from Economy, Premium, or SUV ride types
  - Get instant fare estimates based on city distances
  - No login required - uses session-based tracking

- **Secure Payments**
  - Integrated with Razorpay for secure payments
  - Guest checkout without registration
  - Instant booking confirmation
  - Downloadable receipts

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Razorpay Payment Gateway

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hindvitours.git
cd hindvitours
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with:
```
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Testing

The application includes comprehensive test coverage:

- Unit Tests: `npm test`
- E2E Tests: `npm run e2e`
- Test Coverage Report: `npm run test:coverage`

## Project Structure

```
hindvitours/
├── app/
│   ├── booking/       # Booking page and tests
│   ├── payment/       # Payment handling
│   ├── confirmation/  # Booking confirmation
│   ├── components/    # Reusable components
│   └── lib/          # Utilities and constants
├── cypress/          # E2E tests
└── public/          # Static assets
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
