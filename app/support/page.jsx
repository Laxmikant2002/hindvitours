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
      <div className="max-w-7xl mx-auto px-4">        <h1 className="text-3xl font-bold text-center mb-8 text-black">Support Center</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Support Form */}
          <section>
            <SupportForm />
          </section>

          {/* FAQs */}
          <section className="bg-white rounded-lg shadow-md p-6">            <h2 className="text-2xl font-bold mb-6 text-black">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    className="w-full text-left py-2 flex justify-between items-center focus:outline-none"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >                    <h3 className="text-lg font-semibold text-black">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 transform transition-transform ${
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
                  </button>                  {expandedFaq === index && (
                    <p className="mt-2 text-black">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4 text-black">Need Immediate Assistance?</h3>
          <p className="text-black mb-2">Our support team is available 24/7</p>          <div className="space-y-2">
            <p className="text-black">
              <span className="font-semibold">Phone:</span> +91 XXX XXX XXXX
            </p>
            <p className="text-black">
              <span className="font-semibold">Email:</span> support@hindvitours.com
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
