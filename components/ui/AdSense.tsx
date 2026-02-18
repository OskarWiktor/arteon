'use client';

import { useEffect, useRef, useState } from 'react';
import type { AdSenseProps } from '@/types/ui';
export type { AdVariant, AdSenseProps } from '@/types/ui';

const AD_CLIENT = 'ca-pub-7845947936813012';

const PRESETS = {
  'tool-banner': { slot: '7551147298' },
  'in-article': { slot: '9459125335' },
  autorelaxed: { slot: '4600483034' },
  vertical: { slot: '7442268796' },
} as const;

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdSense({ variant, adSlot, className = '' }: AdSenseProps) {
  const pushed = useRef(false);
  const [ready, setReady] = useState(false);
  const preset = PRESETS[variant];
  const slot = adSlot || preset.slot;

  /* Phase 1 — mark component as client-mounted so the real <ins> renders */
  useEffect(() => {
    setReady(true);
  }, []);

  /* Phase 2 — push to adsbygoogle one frame AFTER the <ins> is in the DOM */
  useEffect(() => {
    if (!ready || pushed.current) return;
    const id = requestAnimationFrame(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      } catch (err) {
        console.error('AdSense push error:', err);
      }
    });
    return () => cancelAnimationFrame(id);
  }, [ready]);

  /* ----------------------------------------------------------------
   * SSR / pre-mount placeholder — keeps layout stable, no <ins> yet
   * --------------------------------------------------------------- */
  if (!ready) {
    const h = variant === 'tool-banner' ? '90px' : variant === 'vertical' ? '600px' : undefined;
    return <div className={className} style={h ? { minHeight: h } : undefined} />;
  }

  /* ----------------------------------------------------------------
   * tool-top-banner-test — fixed 728×90 leaderboard
   * Google code: display:inline-block;width:728px;height:90px
   * No data-ad-format, no data-full-width-responsive
   * --------------------------------------------------------------- */
  if (variant === 'tool-banner') {
    return (
      <div className={`flex justify-center ${className}`}>
        <ins className="adsbygoogle" style={{ display: 'inline-block', width: '728px', height: '90px' }} data-ad-client={AD_CLIENT} data-ad-slot={slot} />
      </div>
    );
  }

  /* ----------------------------------------------------------------
   * in-article — fluid ad inside article content
   * Google code: display:block; text-align:center;
   * data-ad-layout="in-article", data-ad-format="fluid"
   * --------------------------------------------------------------- */
  if (variant === 'in-article') {
    return (
      <div className={className}>
        <ins className="adsbygoogle" style={{ display: 'block', textAlign: 'center' }} data-ad-client={AD_CLIENT} data-ad-slot={slot} data-ad-layout="in-article" data-ad-format="fluid" />
      </div>
    );
  }

  /* ----------------------------------------------------------------
   * autorelaxed — matched content / multiplex
   * Google code: display:block
   * data-ad-format="autorelaxed"
   * --------------------------------------------------------------- */
  if (variant === 'autorelaxed') {
    return (
      <div className={className}>
        <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client={AD_CLIENT} data-ad-slot={slot} data-ad-format="autorelaxed" />
      </div>
    );
  }

  /* ----------------------------------------------------------------
   * pionowe-tools — responsive vertical ad (side columns)
   * Google code: display:block
   * data-ad-format="auto" (NO data-full-width-responsive)
   * --------------------------------------------------------------- */
  return (
    <div className={className}>
      <ins className="adsbygoogle" style={{ display: 'block', minHeight: '600px' }} data-ad-client={AD_CLIENT} data-ad-slot={slot} data-ad-format="auto" />
    </div>
  );
}
