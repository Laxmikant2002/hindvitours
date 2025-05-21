'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function RouteCard({ route }) {
  const {
    id,
    title,
    description,
    image,
    duration,
    price,
    startLocation,
    endLocation,
    highlights
  } = route;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        
        <div className="flex items-center text-gray-600 mb-4">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{duration}</span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-gray-600">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{startLocation} to {endLocation}</span>
          </div>
          
          <div className="text-xl font-bold text-blue-600">
            ₹{price}
          </div>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        {highlights && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Highlights:</h4>
            <ul className="list-disc list-inside text-gray-600">
              {highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}

        <Link
          href={`/booking?route=${id}`}
          className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
} 