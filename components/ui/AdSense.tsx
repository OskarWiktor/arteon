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
  const adRef = useRef<HTMLModElement>(null);
  const isAdPushed = useRef(false);
  const preset = PRESETS[variant];
  const slot = adSlot || preset.slot;

  useEffect(() => {
    if (isAdPushed.current) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      isAdPushed.current = true;
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  /* ----------------------------------------------------------------
   * tool-top-banner-test — fixed 728×90 leaderboard
   * Google code: display:inline-block;width:728px;height:90px
   * No data-ad-format, no data-full-width-responsive
   * --------------------------------------------------------------- */
  if (variant === 'tool-banner') {
    return (
      <div className={`flex justify-center overflow-hidden ${className}`}>
        <ins ref={adRef} className="adsbygoogle" style={{ display: 'inline-block', width: '728px', height: '90px' }} data-ad-client={AD_CLIENT} data-ad-slot={slot} />
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
      <div className={`overflow-hidden ${className}`}>
        <ins ref={adRef} className="adsbygoogle" style={{ display: 'block', textAlign: 'center' }} data-ad-client={AD_CLIENT} data-ad-slot={slot} data-ad-layout="in-article" data-ad-format="fluid" />
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
      <div className={`overflow-hidden ${className}`}>
        <ins ref={adRef} className="adsbygoogle" style={{ display: 'block' }} data-ad-client={AD_CLIENT} data-ad-slot={slot} data-ad-format="autorelaxed" />
      </div>
    );
  }

  /* ----------------------------------------------------------------
   * pionowe-tools — responsive vertical ad (side columns)
   * Google code: display:block
   * data-ad-format="auto", data-full-width-responsive="true"
   * --------------------------------------------------------------- */
  return (
    <div className={`overflow-hidden ${className}`}>
      <ins ref={adRef} className="adsbygoogle" style={{ display: 'block' }} data-ad-client={AD_CLIENT} data-ad-slot={slot} data-ad-format="auto" data-full-width-responsive="true" />
    </div>
  );
}
