'use client';

import { useEffect, useState } from 'react';
import { RiArrowUpLine } from 'react-icons/ri';
import Button from './Button';

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
    <Button variant="totop" size="medium" onClick={scrollToTarget} className="rounded-full">
      <span className="sr-only">{label}</span>
      <RiArrowUpLine aria-hidden className="h-5 w-5" />
    </Button>
  );
}
