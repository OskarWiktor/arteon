'use client';

import { useEffect, useState } from 'react';
import { RiArrowUpLine } from 'react-icons/ri';
import { useEventListener } from '@/hooks/useEventListener';
import ButtonCircle from './ButtonCircle';

interface ButtonToTop {
  targetId?: string;
  showAfter?: number;
  label?: string;
}

const PASSIVE_SCROLL: AddEventListenerOptions = { passive: true };

export default function ButtonToTop({
  targetId = 'article-root',
  showAfter = 400,
  label = 'Do góry',
}: ButtonToTop) {
  const [visible, setVisible] = useState(false);

  useEventListener(
    typeof window !== 'undefined' ? window : null,
    'scroll',
    () => setVisible(window.scrollY > showAfter),
    PASSIVE_SCROLL,
    true,
  );

  useEffect(() => {
    setVisible(window.scrollY > showAfter);
  }, [showAfter]);

  const scrollToTarget = () => {
    const el = document.getElementById(targetId);
    const top = el ? el.getBoundingClientRect().top + window.scrollY : 0;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <ButtonCircle
      onClick={scrollToTarget}
      ariaLabel={label}
      className='fixed right-5 bottom-5 z-50'
    >
      <RiArrowUpLine aria-hidden className='h-5 w-5' />
    </ButtonCircle>
  );
}
