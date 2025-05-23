'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCreditCard, FaLock, FaUser, FaCalendar, FaMobile, FaQrcode } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

export interface PaymentFormProps {
  amount: number;
  onPaymentComplete: () => void;
  isProcessing: boolean;
}

interface PaymentFormData {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
  upiId: string;
}

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const inputVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export default function PaymentForm({ amount, onPaymentComplete, isProcessing }: PaymentFormProps) {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi'>('card');
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    upiId: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number with spaces
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').match(/.{1,4}/g)?.join(' ') || '';
    }

    // Format expiry date
    if (name === 'expiryDate') {
      formattedValue = value
        .replace(/\D/g, '')
        .replace(/^(\d{2})/, '$1/')
        .substr(0, 5);
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPaymentComplete();
  };

  const InputField = ({ 
    icon: Icon, 
    label, 
    name, 
    type = 'text',
    maxLength,
    placeholder,
    pattern,
    ...props 
  }: { 
    icon: React.ElementType;
    label: string;
    name: keyof PaymentFormData;
    type?: string;
    maxLength?: number;
    placeholder?: string;
    pattern?: string;
    [key: string]: any;
  }) => (
    <motion.div variants={inputVariants}>
      <label htmlFor={name} className="block text-gray-700 mb-2">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type={type}
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          maxLength={maxLength}
          placeholder={placeholder}
          pattern={pattern}
          className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          {...props}
        />
      </div>
    </motion.div>
  );

  return (
    <motion.div
      className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 
        className="text-2xl font-bold mb-6 text-gray-800 text-center"
        variants={inputVariants}
      >
        Payment Details
      </motion.h2>

      <motion.div 
        className="mb-8"
        variants={inputVariants}
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Total Amount:</span>
          <span className="text-2xl font-bold text-indigo-600">₹{amount.toLocaleString('en-IN')}</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <motion.button
            type="button"
            onClick={() => setPaymentMethod('card')}
            className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-lg border-2 transition-all ${
              paymentMethod === 'card'
                ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                : 'border-gray-200 hover:border-indigo-600 hover:bg-indigo-50'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaCreditCard className="w-5 h-5" />
            <span>Credit/Debit Card</span>
          </motion.button>
          <motion.button
            type="button"
            onClick={() => setPaymentMethod('upi')}
            className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-lg border-2 transition-all ${
              paymentMethod === 'upi'
                ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                : 'border-gray-200 hover:border-indigo-600 hover:bg-indigo-50'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaQrcode className="w-5 h-5" />
            <span>UPI</span>
          </motion.button>
        </div>
      </motion.div>

      <motion.form onSubmit={handleSubmit}>
        {paymentMethod === 'card' ? (
          <div className="space-y-6">
            <InputField
              icon={FaCreditCard}
              label="Card Number"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              pattern="\d{4}\s\d{4}\s\d{4}\s\d{4}"
              required
            />

            <InputField
              icon={FaUser}
              label="Card Holder Name"
              name="cardHolder"
              placeholder="John Doe"
              required
            />

            <div className="grid grid-cols-2 gap-4">
              <InputField
                icon={FaCalendar}
                label="Expiry Date"
                name="expiryDate"
                placeholder="MM/YY"
                maxLength={5}
                pattern="\d{2}/\d{2}"
                required
              />
              <InputField
                icon={FaLock}
                label="CVV"
                name="cvv"
                type="password"
                placeholder="123"
                maxLength={4}
                pattern="\d{3,4}"
                required
              />
            </div>
          </div>
        ) : (
          <InputField
            icon={FaMobile}
            label="UPI ID"
            name="upiId"
            placeholder="username@upi"
            pattern="[a-zA-Z0-9\\.\\-\\_]{3,}@[a-zA-Z][a-zA-Z]{2,}"
            required
          />
        )}

        <motion.button
          type="submit"
          disabled={isProcessing}
          className={`mt-8 w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 flex items-center justify-center space-x-2 ${
            isProcessing ? 'bg-gray-400 cursor-not-allowed' : ''
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isProcessing ? (
            <div className="flex items-center justify-center space-x-2">
              <motion.div
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <span>Processing...</span>
            </div>
          ) : (
            <>
              <FaLock className="w-5 h-5" />
              <span>Pay ₹{amount.toLocaleString('en-IN')}</span>
            </>
          )}
        </motion.button>
      </motion.form>

      <motion.div 
        className="mt-6 text-center space-y-2"
        variants={inputVariants}
      >
        <p className="text-sm text-gray-600">
          Your payment is secured with industry-standard encryption
        </p>
        <div className="flex items-center justify-center space-x-4">
          <img src="/visa.png" alt="Visa" className="h-8" />
          <img src="/mastercard.png" alt="Mastercard" className="h-8" />
          <img src="/rupay.png" alt="RuPay" className="h-8" />
        </div>
      </motion.div>
    </motion.div>
  );
} 