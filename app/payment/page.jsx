'use client';

import { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';

export default function PaymentPage() {
  const content = require('../pages/payment.jsx').default();
  return (
    <PageTransition>
      {content}
    </PageTransition>
  );
}
