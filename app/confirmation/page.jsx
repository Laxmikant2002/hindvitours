'use client';

import { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';

export default function ConfirmationPage() {
  const content = require('../pages/confirmation.jsx').default();
  return (
    <PageTransition>
      {content}
    </PageTransition>
  );
}
