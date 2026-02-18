'use client';

import { useEffect, useRef } from 'react';
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
  const preset = PRESETS[variant];
  const slot = adSlot || preset.slot;

  useEffect(() => {
    if (pushed.current) return;
    const id = requestAnimationFrame(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      } catch (err) {
        console.error('AdSense push error:', err);
      }
    });
    return () => cancelAnimationFrame(id);
  }, []);

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
   * in-article — fluid ad inside article/tool content
   * MUST match Google's exact in-article code: data-ad-layout="in-article"
   * + data-ad-format="fluid" (slot 9459125335 is an In-article unit)
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
   * vertical — responsive ad for side columns (160px)
   * data-ad-format="auto", NO data-full-width-responsive (stays in column)
   * --------------------------------------------------------------- */
  return (
    <div className={className}>
      <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client={AD_CLIENT} data-ad-slot={slot} data-ad-format="auto" />
    </div>
  );
}
