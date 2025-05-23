'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaCreditCard, FaLock, FaUser, FaCalendar, FaMobile, FaQrcode, FaWallet } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export interface PaymentFormProps {
  amount: number;
  onPaymentComplete: () => void;
  isProcessing: boolean;
  bookingDetails: {
    bookingId: string;
    tourName: string;
    date: string;
    passengers: number;
  };
}

interface PaymentFormData {
  paymentMethod: 'card' | 'upi' | 'wallet';
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
  upiId: string;
  walletType?: 'paytm' | 'phonepe' | 'gpay';
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

export default function PaymentForm({ amount, onPaymentComplete, isProcessing, bookingDetails }: PaymentFormProps) {
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm<PaymentFormData>({
    defaultValues: {
      paymentMethod: 'card'
    }
  });

  const paymentMethod = watch('paymentMethod');

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleRazorpayPayment = async (formData: PaymentFormData) => {
    if (typeof window.Razorpay === 'undefined') {
      alert('Razorpay SDK failed to load. Please try again.');
      return;
    }

    // In a real app, you would make an API call to your backend to create an order
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: amount * 100, // Razorpay expects amount in paise
      currency: 'INR',
      name: 'HindviTours',
      description: `Booking for ${bookingDetails.tourName}`,
      order_id: '', // This would come from your backend
      prefill: {
        name: formData.cardHolder || '',
        email: '', // You would get this from your user context
        contact: '' // You would get this from your user context
      },
      handler: function(response: any) {
        // Handle successful payment
        onPaymentComplete();
      },
      modal: {
        ondismiss: function() {
          // Handle payment modal dismissal
        }
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const onSubmit = async (data: PaymentFormData) => {
    try {
      await handleRazorpayPayment(data);
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    }
  };

  const InputField = ({ 
    icon: Icon, 
    label, 
    name, 
    type = 'text',
    validation = {},
    ...props 
  }: { 
    icon: React.ElementType;
    label: string;
    name: keyof PaymentFormData;
    type?: string;
    validation?: object;
    [key: string]: any;
  }) => (
    <motion.div variants={inputVariants} className="space-y-1">
      <label htmlFor={name} className="block text-gray-700">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type={type}
          id={name}
          className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
            errors[name] ? 'border-red-500' : 'border-gray-300'
          }`}
          {...register(name, validation)}
          {...props}
        />
      </div>
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name]?.message as string}</p>
      )}
    </motion.div>
  );

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <div className="grid grid-cols-3 gap-4">
        <motion.button
          type="button"
          onClick={() => setValue('paymentMethod', 'card')}
          className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${
            paymentMethod === 'card'
              ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
              : 'border-gray-200 hover:border-indigo-600 hover:bg-indigo-50'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaCreditCard className="w-6 h-6 mb-2" />
          <span className="text-sm">Card</span>
        </motion.button>
        <motion.button
          type="button"
          onClick={() => setValue('paymentMethod', 'upi')}
          className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${
            paymentMethod === 'upi'
              ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
              : 'border-gray-200 hover:border-indigo-600 hover:bg-indigo-50'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaQrcode className="w-6 h-6 mb-2" />
          <span className="text-sm">UPI</span>
        </motion.button>
        <motion.button
          type="button"
          onClick={() => setValue('paymentMethod', 'wallet')}
          className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${
            paymentMethod === 'wallet'
              ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
              : 'border-gray-200 hover:border-indigo-600 hover:bg-indigo-50'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaWallet className="w-6 h-6 mb-2" />
          <span className="text-sm">Wallet</span>
        </motion.button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <AnimatePresence mode="wait">
          {paymentMethod === 'card' && (
            <motion.div
              key="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <InputField
                icon={FaCreditCard}
                label="Card Number"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                validation={{
                  required: 'Card number is required',
                  pattern: {
                    value: /^[\d\s]{16,19}$/,
                    message: 'Please enter a valid card number'
                  }
                }}
              />
              <InputField
                icon={FaUser}
                label="Card Holder Name"
                name="cardHolder"
                placeholder="John Doe"
                validation={{
                  required: 'Card holder name is required'
                }}
              />
              <div className="grid grid-cols-2 gap-4">
                <InputField
                  icon={FaCalendar}
                  label="Expiry Date"
                  name="expiryDate"
                  placeholder="MM/YY"
                  validation={{
                    required: 'Expiry date is required',
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                      message: 'Please enter a valid expiry date (MM/YY)'
                    }
                  }}
                />
                <InputField
                  icon={FaLock}
                  label="CVV"
                  name="cvv"
                  type="password"
                  maxLength={4}
                  placeholder="***"
                  validation={{
                    required: 'CVV is required',
                    pattern: {
                      value: /^[0-9]{3,4}$/,
                      message: 'Please enter a valid CVV'
                    }
                  }}
                />
              </div>
            </motion.div>
          )}

          {paymentMethod === 'upi' && (
            <motion.div
              key="upi"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <InputField
                icon={FaMobile}
                label="UPI ID"
                name="upiId"
                placeholder="username@upi"
                validation={{
                  required: 'UPI ID is required',
                  pattern: {
                    value: /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/,
                    message: 'Please enter a valid UPI ID'
                  }
                }}
              />
            </motion.div>
          )}

          {paymentMethod === 'wallet' && (
            <motion.div
              key="wallet"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-3 gap-4"
            >
              {['paytm', 'phonepe', 'gpay'].map((wallet) => (
                <motion.button
                  key={wallet}
                  type="button"
                  onClick={() => setValue('walletType', wallet as PaymentFormData['walletType'])}
                  className="flex flex-col items-center justify-center p-4 rounded-lg border-2 hover:border-indigo-600 hover:bg-indigo-50 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    src={`/images/wallets/${wallet}.png`}
                    alt={wallet}
                    className="w-12 h-12 mb-2"
                  />
                  <span className="text-sm capitalize">{wallet}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="submit"
          disabled={isProcessing}
          className={`w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium 
            ${isProcessing ? 'opacity-75 cursor-not-allowed' : 'hover:from-indigo-700 hover:to-purple-700'}`}
          whileHover={!isProcessing ? { scale: 1.02 } : {}}
          whileTap={!isProcessing ? { scale: 0.98 } : {}}
        >
          {isProcessing ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Processing...
            </div>
          ) : (
            'Confirm Payment'
          )}
        </motion.button>
      </form>

      <div className="flex items-center justify-center text-sm text-gray-500">
        <FaLock className="w-4 h-4 mr-2" />
        <span>Your payment information is secure and encrypted</span>
      </div>
    </motion.div>
  );
} 