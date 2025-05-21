'use client';

import { useState } from 'react';

export default function PaymentForm({ amount, onPaymentComplete }) {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    upiId: ''
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
    // Handle payment processing here
    console.log('Processing payment:', { paymentMethod, formData });
    onPaymentComplete && onPaymentComplete();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Payment Details</h2>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Total Amount:</span>
          <span className="text-2xl font-bold text-blue-600">₹{amount}</span>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            type="button"
            onClick={() => setPaymentMethod('card')}
            className={`flex-1 py-3 px-4 rounded-md border ${
              paymentMethod === 'card'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
            }`}
          >
            Credit/Debit Card
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod('upi')}
            className={`flex-1 py-3 px-4 rounded-md border ${
              paymentMethod === 'upi'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
            }`}
          >
            UPI
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {paymentMethod === 'card' ? (
          <>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-gray-700 mb-2">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="cardHolder" className="block text-gray-700 mb-2">Card Holder Name</label>
              <input
                type="text"
                id="cardHolder"
                name="cardHolder"
                placeholder="John Doe"
                value={formData.cardHolder}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="expiryDate" className="block text-gray-700 mb-2">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-gray-700 mb-2">CVV</label>
                <input
                  type="password"
                  id="cvv"
                  name="cvv"
                  placeholder="123"
                  maxLength="4"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </>
        ) : (
          <div className="mb-4">
            <label htmlFor="upiId" className="block text-gray-700 mb-2">UPI ID</label>
            <input
              type="text"
              id="upiId"
              name="upiId"
              placeholder="username@upi"
              value={formData.upiId}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
        >
          Pay ₹{amount}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        <p>Your payment is secured with industry-standard encryption.</p>
      </div>
    </div>
  );
} 