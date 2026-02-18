'use client';

import { useEffect, useRef, useState } from 'react';
import type { AdSenseProps } from '@/types/ui';
import { readConsent } from '@/lib/consent/consentCookie';
export type { AdVariant, AdSenseProps } from '@/types/ui';

const AD_CLIENT = 'ca-pub-7845947936813012';

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
  const [adsAllowed, setAdsAllowed] = useState(false);
  const preset = PRESETS[variant];
  const rawSlot = adSlot || preset.slot;
  const slot = SLOT_ALIASES[rawSlot] ?? rawSlot;
  const isInArticleVariant = variant === 'in-article' || variant === 'in-article-new';

  useEffect(() => {
    setAdsAllowed(readConsent()?.ads ?? false);

    const handleConsentUpdated = (event: Event) => {
      const next = (event as CustomEvent<{ ads?: boolean }>).detail;
      if (typeof next?.ads === 'boolean') {
        setAdsAllowed(next.ads);
        return;
      }

      setAdsAllowed(readConsent()?.ads ?? false);
    };

    window.addEventListener('arteon:consent-updated', handleConsentUpdated);
    return () => window.removeEventListener('arteon:consent-updated', handleConsentUpdated);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';
    pushed.current = false;

    if (!adsAllowed || pushed.current) return;

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
    } else if (variant === 'autorelaxed') {
      ins.style.display = 'block';
      ins.setAttribute('data-ad-format', 'autorelaxed');
    } else {
      ins.style.display = 'block';
      ins.setAttribute('data-ad-format', 'auto');
    }

    container.appendChild(ins);

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch (err) {
      console.error('AdSense push error:', err);
    }
  }, [variant, slot, adsAllowed]);

  if (variant === 'tool-banner') {
    return <div ref={containerRef} className={`flex justify-center ${className}`} />;
  }

  return <div ref={containerRef} className={className} />;
}
