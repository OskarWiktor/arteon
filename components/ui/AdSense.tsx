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
  const [mounted, setMounted] = useState(false);
  const preset = PRESETS[variant];
  const slot = adSlot || preset.slot;

  /*
   * tool-banner has fixed dimensions (728×90) — Google's script can auto-scan
   * and fill it from SSR HTML. All other variants (fluid / auto) MUST be
   * rendered client-side only so the <ins> isn't in the DOM when the script
   * loads and auto-scans. Fluid ads need an explicit push() to trigger sizing;
   * if the script auto-marks them first, the later push is ignored → 0 height.
   */
  const clientOnly = variant !== 'tool-banner';

  useEffect(() => {
    if (clientOnly) setMounted(true);
  }, [clientOnly]);

  useEffect(() => {
    if (clientOnly && !mounted) return;
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
  }, [mounted, clientOnly]);

  /* ----------------------------------------------------------------
   * tool-banner — fixed 728×90 leaderboard (SSR-safe)
   * Google code: display:inline-block;width:728px;height:90px
   * --------------------------------------------------------------- */
  if (variant === 'tool-banner') {
    return (
      <div className={`flex justify-center ${className}`}>
        <ins className="adsbygoogle" style={{ display: 'inline-block', width: '728px', height: '90px' }} data-ad-client={AD_CLIENT} data-ad-slot={slot} />
      </div>
    );
  }

  if (!mounted) return <div className={className} />;

  /* ----------------------------------------------------------------
   * in-article — fluid ad inside article/tool content (client-only)
   * Matches Google's exact code: data-ad-layout="in-article",
   * data-ad-format="fluid" (slot 9459125335 = In-article unit)
   * --------------------------------------------------------------- */
  if (variant === 'in-article') {
    return (
      <div className={className}>
        <ins className="adsbygoogle" style={{ display: 'block', textAlign: 'center' }} data-ad-layout="in-article" data-ad-format="fluid" data-ad-client={AD_CLIENT} data-ad-slot={slot} />
      </div>
    );
  }

  /* ----------------------------------------------------------------
   * autorelaxed — matched content / multiplex (client-only)
   * --------------------------------------------------------------- */
  if (variant === 'autorelaxed') {
    return (
      <div className={className}>
        <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client={AD_CLIENT} data-ad-slot={slot} data-ad-format="autorelaxed" />
      </div>
    );
  }

  /* ----------------------------------------------------------------
   * vertical — responsive ad for side columns (client-only)
   * --------------------------------------------------------------- */
  return (
    <div className={className}>
      <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client={AD_CLIENT} data-ad-slot={slot} data-ad-format="auto" />
    </div>
  );
}
