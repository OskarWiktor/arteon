'use client';

import { useEffect, useRef } from 'react';
import type { AdSenseProps } from '@/types/ui';
export type { AdVariant, AdSenseProps } from '@/types/ui';

const AD_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-7845947936813012';
const AD_SCRIPT_SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`;

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

/* ------------------------------------------------------------------ */
/*  Singleton script loader                                           */
/* ------------------------------------------------------------------ */

let scriptState: 'idle' | 'loading' | 'ready' | 'error' = 'idle';
const readyCallbacks: Array<() => void> = [];

function onScriptReady(cb: () => void) {
  if (scriptState === 'ready') {
    cb();
  } else {
    readyCallbacks.push(cb);
  }
}

function flushReady() {
  scriptState = 'ready';
  for (const cb of readyCallbacks.splice(0)) cb();
}

function ensureAdScript() {
  if (scriptState !== 'idle') return;
  if (typeof document === 'undefined') return;

  const alreadyPresent = Array.from(document.scripts).some((s) => s.src.includes('adsbygoogle.js'));
  if (alreadyPresent) {
    flushReady();
    return;
  }

  scriptState = 'loading';
  const script = document.createElement('script');
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.src = AD_SCRIPT_SRC;
  script.onload = () => flushReady();
  script.onerror = () => {
    scriptState = 'error';
  };
  document.head.appendChild(script);
}

/**
 * AdSense ad component — uses direct DOM injection to match Google's
 * intended flow: create <ins> → append to DOM → push() immediately.
 *
 * The component self-loads the adsbygoogle.js script (singleton) so it
 * works correctly with SPA (client-side) navigation — no server-side
 * conditional loading needed.
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

    ensureAdScript();

    const tryRender = () => {
      if (pushed.current) return true;

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

    const attemptWithScript = () => {
      if (tryRender()) return;

      if (typeof ResizeObserver !== 'undefined') {
        const observer = new ResizeObserver(() => {
          if (tryRender()) observer.disconnect();
        });
        observer.observe(container);
        cleanups.push(() => observer.disconnect());
      }
    };

    const cleanups: Array<() => void> = [];

    onScriptReady(attemptWithScript);

    return () => {
      for (const fn of cleanups) fn();
    };
  }, [variant, slot, isInArticleVariant]);

  if (variant === 'tool-banner') {
    return <div ref={containerRef} className={`flex min-h-[90px] items-center justify-center ${className}`} />;
  }

  if (variant === 'vertical') {
    return <div ref={containerRef} className={`min-h-[600px] w-[160px] ${className}`} />;
  }

  if (isInArticleVariant) {
    return <div ref={containerRef} className={`min-h-[280px] w-full ${className}`} />;
  }

  return <div ref={containerRef} className={className} />;
}
