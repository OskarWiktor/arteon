'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RouteAnnouncer() {
  const pathname = usePathname();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const title = document.title?.trim();
    setMessage(title || `Załadowano ${pathname}`);
  }, [pathname]);

  return (
    <p aria-live='assertive' aria-atomic='true' className='sr-only'>
      {message}
    </p>
  );
}
