# 🌟 HindviTours - Discover India's Beauty

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black.svg?style=for-the-badge&logo=vercel)](https://hindvitours-6g9homvg9-laxmikant2002s-projects.vercel.app)
[![Made with Next.js](https://img.shields.io/badge/Made%20with-Next.js-000.svg?style=for-the-badge&logo=next.js)](https://nextjs.org)

HindviTours is a modern travel booking platform designed to showcase the diverse beauty of India. Built with Next.js and featuring a beautiful, accessible UI, our platform makes it easy for travelers to discover and book incredible journeys across India.

## ✨ Features

- **Curated Tour Routes**: Carefully selected travel routes covering India's most beautiful destinations
- **Interactive Booking System**: Easy-to-use booking interface with real-time availability
- **Secure Payments**: Safe and reliable payment processing
- **Responsive Design**: Beautiful interface that works perfectly on all devices
- **Accessibility**: WCAG 2.1 compliant design for all users
- **Rich User Experience**: Smooth animations and intuitive navigation

## Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS, Framer Motion
- **UI Components**: Custom components with modern design principles
- **Authentication**: [Add your auth solution]
- **Payment Processing**: [Add your payment solution]
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/hindvitours.git
cd hindvitours
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add necessary environment variables:
```env
NEXT_PUBLIC_API_URL=your_api_url
# Add other required environment variables
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── (routes)/          # All route groups
│   │   ├── about/         # About page routes
│   │   ├── booking/       # Booking related routes
│   │   ├── routes/        # Tour routes pages
│   │   └── support/       # Support pages
│   ├── api/               # API routes
│   │   └── routes/        # API endpoints
│   └── layout.js          # Root layout
├── components/            # Reusable UI components
│   ├── booking/          # Booking related components
│   ├── common/           # Common/shared components
│   ├── layout/           # Layout components
│   └── tours/            # Tour related components
├── config/               # Configuration files
│   ├── routes.js        # Route definitions
│   └── site.js          # Site-wide settings
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and libraries
│   ├── api/            # API related utilities
│   └── utils/          # Helper functions
├── models/             # Data models and types
├── styles/             # Global styles and CSS modules
└── types/              # TypeScript type definitions

public/                 # Static assets
├── images/            # Image assets
└── icons/             # Icon assets
```

### 🔗 Deployment Status

```bash
🔗  Linked to laxmikant2002s-projects/hindvitours (created .vercel and added it to .gitignore)
🔍  Inspect: https://vercel.com/laxmikant2002s-projects/hindvitours/Fq3QJVDmGednbGziQmWcZHDkmXmM [4s]      
✅  Production: https://hindvitours-6g9homvg9-laxmikant2002s-projects.vercel.app [4s]
📝  Deployed to production. Run `vercel --prod` to overwrite later (https://vercel.link/2F).
```

## Key Components

- **HeroSection**: Main landing page showcase
- **RouteCard**: Displays tour route information
- **BookingForm**: Handles tour bookings
- **PaymentForm**: Processes payments
- **UserProfile**: Manages user information

## Contributing

We welcome contributions! Please read our contributing guidelines before submitting pull requests.

## 🚀 Deployment

The project is deployed on Vercel. You can view the live site at:
- **Production**: [https://hindvitours-6g9homvg9-laxmikant2002s-projects.vercel.app](https://hindvitours-6g9homvg9-laxmikant2002s-projects.vercel.app)
- **Inspect**: [https://vercel.com/laxmikant2002s-projects/hindvitours/Fq3QJVDmGednbGziQmWcZHDkmXmM](https://vercel.com/laxmikant2002s-projects/hindvitours/Fq3QJVDmGednbGziQmWcZHDkmXmM)

### Deployment Commands

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to development
vercel

# Deploy to production
vercel --prod
```

Note: The `.vercel` directory is automatically added to `.gitignore` for secure deployment.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 📬 Contact

For any queries regarding HindviTours, please contact:
- **Email**: [your.email@example.com](mailto:your.email@example.com)
- **Website**: [https://hindvitours-6g9homvg9-laxmikant2002s-projects.vercel.app](https://hindvitours-6g9homvg9-laxmikant2002s-projects.vercel.app)
- **GitHub**: [@laxmikant2002s-projects](https://github.com/laxmikant2002s-projects)
