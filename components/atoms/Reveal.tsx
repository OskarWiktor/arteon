'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay before the entrance plays, for staggering sibling reveals. */
  delayMs?: number;
}

/**
 * Wrap content so it fades/rises in the first time it scrolls into view.
 *
 * Safe by design: the element is rendered visible on the server, so crawlers,
 * no-JS visitors and anyone with `prefers-reduced-motion: reduce` always see
 * the content. Only in the browser, and only for elements that start below the
 * fold, do we hide it (`reveal-init`) and then play the entrance (`reveal-in`)
 * once it enters the viewport. Elements already on screen at load are left
 * untouched to avoid a flash.
 */
export default function Reveal({
  children,
  className,
  delayMs = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) return;

    // Already visible on load → don't animate (would flash or replay unseen).
    if (element.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    // Hide only client-side, off-screen elements (never in SSR markup).
    element.classList.add('opacity-0');
    if (delayMs) element.style.animationDelay = `${delayMs}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.classList.remove('opacity-0');
        element.classList.add('animate-[fade-in_0.6s_ease-out_both]');
        observer.disconnect();
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delayMs]);

  return (
    <div ref={ref} data-reveal className={className}>
      {children}
    </div>
  );
}
