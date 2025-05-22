'use client';

import { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';

export default function TermsAndConditionsPage() {
  const content = require('../pages/terms&condition.jsx').default();
  return (
    <PageTransition>
      {content}
    </PageTransition>
  );
}
