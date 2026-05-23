'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

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
