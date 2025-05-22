'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PageTransition from '../components/PageTransition';

export default function AccountPage() {
  const content = require('../pages/account.jsx').default();
  return (
    <PageTransition>
      {content}
    </PageTransition>
  );
}
