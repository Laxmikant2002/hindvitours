'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaPassport, FaHotel, FaPlane, FaCar, FaUserFriends } from 'react-icons/fa';

const features = [
	{
		title: 'Guided Tours',
		icon: <FaMapMarkedAlt className="h-6 w-6" />,
		description: 'Expert local guides for authentic experiences',
	},
	{
		title: 'Easy Booking',
		icon: <FaPassport className="h-6 w-6" />,
		description: 'Simple and secure booking process',
	},
	{
		title: 'Premium Stays',
		icon: <FaHotel className="h-6 w-6" />,
		description: 'Luxury accommodations at prime locations',
	},
	{
		title: 'Air Travel',
		icon: <FaPlane className="h-6 w-6" />,
		description: 'Domestic & international flight bookings',
	},
	{
		title: 'Transport',
		icon: <FaCar className="h-6 w-6" />,
		description: 'Comfortable transportation services',
	},
	{
		title: 'Group Tours',
		icon: <FaUserFriends className="h-6 w-6" />,
		description: 'Special packages for group travelers',
	},
];

const HeroSection = () => {
	const [hasMounted, setHasMounted] = React.useState(false);
	const [activeFeature, setActiveFeature] = React.useState(0);
	const [isPaused, setIsPaused] = React.useState(false);

	// Handle mounting state
	React.useEffect(() => {
		setHasMounted(true);
	}, []);

	// Handle feature rotation only after hydration is complete
	React.useEffect(() => {
		if (!hasMounted) return;

		if (!isPaused) {
			const timer = setInterval(() => {
				setActiveFeature((prev) => (prev + 1) % features.length);
			}, 3000);
			return () => clearInterval(timer);
		}
	}, [isPaused, hasMounted]);

	// Initial SSR render without animations
	const content = (
		<section className="relative min-h-[85vh] overflow-hidden">
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/20 backdrop-blur-sm"></div>
			</div>
			<div className="container mx-auto px-6 py-8 sm:py-12 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
					<div className="text-center lg:text-left">
						<span className="text-indigo-600 font-semibold text-lg sm:text-xl mb-3 block tracking-wide">
							Discover India With Us
						</span>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
							Experience the Magic of
							<span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
								Incredible India
							</span>
						</h1>
						<p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
							Embark on unforgettable journeys through India's rich cultural heritage,
							breathtaking landscapes, and vibrant traditions. Let us guide you through
							the extraordinary.
						</p>
						<div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
							<Link href="/booking" className="group">
								<div className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg overflow-hidden">
									<span className="relative z-10 text-white font-medium">
										Start Your Journey
									</span>
									<div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
								</div>
							</Link>
							<Link href="/routes" className="group">
								<div className="relative inline-flex items-center px-8 py-4 bg-white border-2 border-indigo-600 rounded-lg overflow-hidden">
									<span className="relative z-10 text-indigo-600 font-medium">
										Explore Routes
									</span>
									<div className="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-20 transition-opacity" />
								</div>
							</Link>
						</div>
					</div>
					<div className="relative lg:ml-auto">
						<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
							{features.map((feature, index) => (
								<div
									key={feature.title}
									className={`bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg transition-all duration-300 cursor-pointer
                    ${activeFeature === index ? 'ring-2 ring-indigo-500 scale-105' : ''}
                  `}
								>
									<div className="flex flex-col items-center text-center space-y-2">
										<div className="text-indigo-600">{feature.icon}</div>
										<h3 className="text-sm font-semibold text-gray-900">
											{feature.title}
										</h3>
										<p className="text-xs text-gray-600 hidden sm:block">
											{feature.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);

	// Only add animations after client-side hydration
	if (!hasMounted) {
		return content;
	}

	// Client-side render with animations
	return (
		<section className="relative min-h-[85vh] overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/20 backdrop-blur-sm"></div>
			</div>
			<div className="container mx-auto px-6 py-8 sm:py-12 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center lg:text-left"
					>
						<motion.span
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
							className="text-indigo-600 font-semibold text-lg sm:text-xl mb-3 block tracking-wide"
						>
							Discover India With Us
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
						>
							Experience the Magic of
							<span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
								Incredible India
							</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.6 }}
							className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
						>
							Embark on unforgettable journeys through India's rich cultural heritage,
							breathtaking landscapes, and vibrant traditions. Let us guide you through
							the extraordinary.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8 }}
							className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
						>
							<Link href="/booking" className="group">
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg overflow-hidden"
								>
									<span className="relative z-10 text-white font-medium">
										Start Your Journey
									</span>
									<div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
								</motion.div>
							</Link>

							<Link href="/routes" className="group">
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="relative inline-flex items-center px-8 py-4 bg-white border-2 border-indigo-600 rounded-lg overflow-hidden"
								>
									<span className="relative z-10 text-indigo-600 font-medium">
										Explore Routes
									</span>
									<div className="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-20 transition-opacity" />
								</motion.div>
							</Link>
						</motion.div>
					</motion.div>

					{/* Feature Highlights */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="relative lg:ml-auto"
					>
						<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
							{features.map((feature, index) => (
								<motion.div
									key={feature.title}
									whileHover={{ scale: 1.05 }}
									className={`bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg transition-all duration-300 cursor-pointer
                    ${activeFeature === index ? 'ring-2 ring-indigo-500 scale-105' : ''}
                  `}
									onClick={() => {
										setActiveFeature(index);
										setIsPaused(true);
										setTimeout(() => setIsPaused(false), 10000);
									}}
								>
									<div className="flex flex-col items-center text-center space-y-2">
										<div className="text-indigo-600 transition-transform duration-300 group-hover:scale-110">
											{feature.icon}
										</div>
										<h3 className="text-sm font-semibold text-gray-900">
											{feature.title}
										</h3>
										<p className="text-xs text-gray-600 hidden sm:block">
											{feature.description}
										</p>
									</div>
								</motion.div>
							))}
						</div>

						{/* Decorative Elements */}
						<motion.div
							animate={{
								scale: [1, 1.02, 1],
								rotate: [0, 1, 0],
							}}
							transition={{
								duration: 4,
								repeat: Infinity,
								repeatType: 'reverse',
							}}
							className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full filter blur-3xl"></div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
