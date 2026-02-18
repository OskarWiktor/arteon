'use client';

import { useEffect, useRef } from 'react';
import type { AdSenseProps } from '@/types/ui';
export type { AdVariant, AdSenseProps } from '@/types/ui';

const AD_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-7845947936813012';

const PRESETS = {
  'tool-banner': { slot: '7551147298' },
  'in-article': { slot: '8632270964' },
  'in-article-new': { slot: '8632270964' },
  autorelaxed: { slot: '4600483034' },
  vertical: { slot: '7442268796' },
} as const;

const LEGACY_IN_ARTICLE_SLOT = '9459125335';

const SLOT_ALIASES: Record<string, string> = {
  [LEGACY_IN_ARTICLE_SLOT]: PRESETS['in-article'].slot,
};

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

/**
 * AdSense ad component — uses direct DOM injection to match Google's
 * intended flow: create <ins> → append to DOM → push() immediately.
 *
 * No React rendering of <ins> (avoids SSR hydration / auto-scan conflicts).
 * The container <div> is React-managed; the <ins> inside is DOM-managed.
 */
export default function AdSense({ variant, adSlot, className = '' }: AdSenseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pushed = useRef(false);
  const preset = PRESETS[variant];
  const rawSlot = adSlot || preset.slot;
  const slot = SLOT_ALIASES[rawSlot] ?? rawSlot;
  const isInArticleVariant = variant === 'in-article' || variant === 'in-article-new';

  useEffect(() => {
    const container = containerRef.current;
    if (!container || pushed.current) return;

    const tryRender = () => {
      if (pushed.current) return true;

      // Auto/fluid units can collapse to 0px if pushed while hidden (e.g. responsive sidebars).
      if (variant !== 'tool-banner' && container.getBoundingClientRect().width === 0) {
        return false;
      }

      const ins = document.createElement('ins');
      ins.className = 'adsbygoogle';
      ins.setAttribute('data-ad-client', AD_CLIENT);
      ins.setAttribute('data-ad-slot', slot);

      if (variant === 'tool-banner') {
        ins.style.display = 'inline-block';
        ins.style.width = '728px';
        ins.style.height = '90px';
      } else if (isInArticleVariant) {
        ins.style.display = 'block';
        ins.style.textAlign = 'center';
        ins.setAttribute('data-ad-layout', 'in-article');
        ins.setAttribute('data-ad-format', 'fluid');
        ins.setAttribute('data-full-width-responsive', 'true');
      } else if (variant === 'vertical') {
        ins.style.display = 'inline-block';
        ins.style.width = '160px';
        ins.style.height = '600px';
      } else if (variant === 'autorelaxed') {
        ins.style.display = 'block';
        ins.setAttribute('data-ad-format', 'autorelaxed');
      } else {
        ins.style.display = 'block';
        ins.setAttribute('data-ad-format', 'auto');
      }

      container.replaceChildren(ins);

      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      } catch (err) {
        console.error('AdSense push error:', err);
      }

      return pushed.current;
    };

    if (tryRender()) return;

    if (typeof ResizeObserver === 'undefined') return;

    const observer = new ResizeObserver(() => {
      if (tryRender()) observer.disconnect();
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, [variant, slot]);

  if (variant === 'tool-banner') {
    return <div ref={containerRef} className={`flex justify-center ${className}`} />;
  }

  if (variant === 'vertical') {
    return <div ref={containerRef} className={`mx-auto min-h-[600px] w-[160px] ${className}`} />;
  }

  if (isInArticleVariant) {
    return <div ref={containerRef} className={`min-h-[280px] w-full ${className}`} />;
  }

  return <div ref={containerRef} className={className} />;
}
