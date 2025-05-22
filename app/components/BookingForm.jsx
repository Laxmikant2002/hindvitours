'use client';

import { useState } from 'react';

export default function BookingForm({ selectedRoute }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    route: selectedRoute ? selectedRoute.id : '',
    date: '',
    passengers: '1',
    specialRequirements: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Book Your Tour</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="route" className="block text-gray-700 mb-2">Select Route</label>
          <select
            id="route"
            name="route"
            value={formData.route}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >            <option value="">Select a route</option>
            <option value="delhi-agra">Delhi to Agra Tour</option>
            <option value="mumbai-goa">Mumbai to Goa Coastal Route</option>
            <option value="jaipur-udaipur">Royal Rajasthan Tour</option>
            <option value="manali-leh">Himalayan Adventure</option>
            <option value="kerala-backwaters">Kerala Backwaters Tour</option>
            <option value="varanasi-spiritual">Spiritual Varanasi Tour</option>
          </select>
        </div>

        <div>
          <label htmlFor="date" className="block text-gray-700 mb-2">Travel Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="passengers" className="block text-gray-700 mb-2">Number of Passengers</label>
          <input
            type="number"
            id="passengers"
            name="passengers"
            min="1"
            max="10"
            value={formData.passengers}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="specialRequirements" className="block text-gray-700 mb-2">Special Requirements</label>
        <textarea
          id="specialRequirements"
          name="specialRequirements"
          value={formData.specialRequirements}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
      >
        Proceed to Payment
      </button>
    </form>
  );
} 