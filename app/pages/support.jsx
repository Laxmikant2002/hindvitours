'use client';

import { useState } from 'react';
import SupportForm from '../components/SupportForm';

const faqs = [
  {
    question: 'What is your cancellation policy?',
    answer: 'We offer free cancellation up to 24 hours before the journey. Cancellations made within 24 hours of departure may be subject to charges. Please refer to our refund policy for more details.'
  },
  {
    question: 'How can I modify my booking?',
    answer: 'You can modify your booking through your account dashboard up to 48 hours before departure. For last-minute changes, please contact our support team directly.'
  },
  {
    question: 'What documents do I need for travel?',
    answer: 'All passengers must carry a valid government-issued photo ID. For certain routes, additional documents may be required. Please check your booking confirmation for specific requirements.'
  },
  {
    question: 'What is included in the tour package?',
    answer: 'Our packages typically include transportation, guided tours, and accommodation where applicable. Meals and additional activities may be included depending on the specific tour. Please check the tour details for complete information.'
  },
  {
    question: 'How do I get my booking confirmation?',
    answer: 'Booking confirmations are sent immediately via email after successful payment. You can also view your booking details in your account dashboard.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit/debit cards, UPI payments, and net banking. All payments are processed through secure payment gateways.'
  }
];

export default function Support() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Help & Support</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <SupportForm />
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    className="w-full text-left px-6 py-4 focus:outline-none"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">{faq.question}</h3>
                      <svg
                        className={`w-5 h-5 transform transition-transform ${
                          expandedFaq === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Additional Support Information */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Need More Help?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">24/7 Phone Support</p>
                    <p className="text-gray-600">+91 XXX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">Email Support</p>
                    <p className="text-gray-600">support@hindvitours.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">Office Address</p>
                    <p className="text-gray-600">
                      123 Tourism Street, New Delhi, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 