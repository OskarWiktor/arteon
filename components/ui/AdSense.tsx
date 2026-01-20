'use client';

import { useEffect, useRef } from 'react';

export interface AdSenseProps {
  adClient: string;
  adSlot: string;
  adFormat?: 'auto' | 'fixed' | 'in-article';
  width?: number;
  height?: number;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdSense({ adClient, adSlot, adFormat = 'auto', width, height, className = '' }: AdSenseProps) {
  const adRef = useRef<HTMLModElement>(null);
  const isAdPushed = useRef(false);

  useEffect(() => {
    if (isAdPushed.current) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      isAdPushed.current = true;
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  const isFixed = adFormat === 'fixed' && width && height;
  const isInArticle = adFormat === 'in-article';

  const insStyle: React.CSSProperties = isFixed ? { display: 'inline-block', width: `${width}px`, height: `${height}px` } : { display: 'block', textAlign: isInArticle ? 'center' : undefined };

  const getAdAttributes = () => {
    if (isFixed) return {};
    if (isInArticle) {
      return {
        'data-ad-layout': 'in-article',
        'data-ad-format': 'fluid',
      };
    }
    return {
      'data-ad-format': 'auto',
      'data-full-width-responsive': 'true',
    };
  };

  return (
    <div className={className}>
      <ins ref={adRef} className="adsbygoogle" style={insStyle} data-ad-client={adClient} data-ad-slot={adSlot} {...getAdAttributes()} />
    </div>
  );
}
