'use client';

import { useEffect, useState } from 'react';
import { RiArrowUpLine } from 'react-icons/ri';

export default function ButtonToTop({ targetId = 'article-root', showAfter = 400, label = 'Do góry' }: { targetId?: string; showAfter?: number; label?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > showAfter);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [showAfter]);

  const scrollToTarget = () => {
    const el = document.getElementById(targetId);
    const top = el ? el.getBoundingClientRect().top + window.scrollY : 0;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTarget}
      className={
        'fixed right-5 bottom-5 z-50 inline-flex w-fit cursor-pointer items-center rounded-full px-3 py-3 font-medium text-sm text-white shadow-lg transition hover:bg-black/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white bg-black border border-black/10'
      }
    >
      <span className="sr-only">{label}</span>
      <RiArrowUpLine aria-hidden className="h-5 w-5" />
    </button>
  );
}
