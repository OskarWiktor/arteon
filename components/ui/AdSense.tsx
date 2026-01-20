'use client';

import { useEffect, useRef } from 'react';

export interface AdSenseProps {
  adClient: string;
  adSlot: string;
  adFormat?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  fullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const CONTAINER_STYLES: Record<string, React.CSSProperties> = {
  auto: {},
  horizontal: { maxHeight: '90px', overflow: 'hidden' },
  vertical: { maxWidth: '160px', maxHeight: '600px', overflow: 'hidden' },
  rectangle: { maxWidth: '336px', maxHeight: '280px', overflow: 'hidden' },
};

export default function AdSense({ adClient, adSlot, adFormat = 'auto', fullWidthResponsive = true, className = '', style }: AdSenseProps) {
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

  const containerStyle = CONTAINER_STYLES[adFormat] || CONTAINER_STYLES.auto;

  return (
    <div className={className} style={containerStyle}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style ?? { display: 'block' }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      />
    </div>
  );
}
