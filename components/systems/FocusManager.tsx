'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function FocusManager() {
  const pathname = usePathname();
  const search = useSearchParams();
  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        target.focus();
      }
      return;
    }

    (document.activeElement as HTMLElement | null)?.blur();

    requestAnimationFrame(() => {
      const skipLink = document.getElementById('skip-link') as HTMLElement | null;
      if (skipLink) {
        if (!skipLink.hasAttribute('tabindex')) skipLink.setAttribute('tabindex', '-1');
        skipLink.focus();
      } else {
        document.body.focus();
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  }, [pathname, search?.toString()]);

  return null;
}
