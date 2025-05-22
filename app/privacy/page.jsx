'use client';

import { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';

export default function PrivacyPage() {
  const content = require('../pages/privacy.jsx').default();
  return (
    <PageTransition>
      {content}
    </PageTransition>
  );
}
