'use client';

import { useState } from 'react';

export default function UserProfile({ user, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address || '',
    preferences: user.preferences || {}
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onUpdate(formData);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Profile Information</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-blue-600 hover:text-blue-800"
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-gray-700 mb-2">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <h3 className="text-gray-700 mb-2">Travel Preferences</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="preferences.emailNotifications"
                    checked={formData.preferences.emailNotifications}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      preferences: {
                        ...prev.preferences,
                        emailNotifications: e.target.checked
                      }
                    }))}
                    className="mr-2"
                  />
                  Receive email notifications
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="preferences.smsNotifications"
                    checked={formData.preferences.smsNotifications}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      preferences: {
                        ...prev.preferences,
                        smsNotifications: e.target.checked
                      }
                    }))}
                    className="mr-2"
                  />
                  Receive SMS notifications
                </label>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 border rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="mb-2"><span className="text-gray-600">Name:</span> {user.name}</p>
              <p className="mb-2"><span className="text-gray-600">Email:</span> {user.email}</p>
              <p className="mb-2"><span className="text-gray-600">Phone:</span> {user.phone}</p>
              {user.address && (
                <p><span className="text-gray-600">Address:</span> {user.address}</p>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Preferences</h3>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="mb-2">
                <span className="text-gray-600">Email Notifications:</span>
                {' '}
                {user.preferences?.emailNotifications ? 'Enabled' : 'Disabled'}
              </p>
              <p>
                <span className="text-gray-600">SMS Notifications:</span>
                {' '}
                {user.preferences?.smsNotifications ? 'Enabled' : 'Disabled'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 