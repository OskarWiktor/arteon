'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import type { AdSenseProps } from '@/types/ui';
export type { AdVariant, AdSenseProps } from '@/types/ui';

const AD_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-7845947936813012';
const AD_SCRIPT_SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`;

const PRESETS = {
  'tool-banner': { slot: '7551147298' },
  responsive: { slot: '1433221613' },
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
  if (typeof document === 'undefined') return;

  if (scriptState === 'error') {
    // Retry once on error (e.g. transient network issue)
    scriptState = 'idle';
  }

  if (scriptState !== 'idle') return;

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

/* ------------------------------------------------------------------ */
/*  Global consent-change bus                                         */
/*  Fires when Google CMP consent is granted (user clicks accept).    */
/*  All mounted AdSense instances that are unfilled re-request ads.   */
/* ------------------------------------------------------------------ */

type ConsentCallback = () => void;
const consentListeners = new Set<ConsentCallback>();
let consentBusInitialized = false;

function initConsentBus() {
  if (consentBusInitialized || typeof window === 'undefined') return;
  consentBusInitialized = true;

  const fc = window.googlefc;
  if (!fc) return;

  fc.callbackQueue = fc.callbackQueue || [];

  // CONSENT_MODE_DATA_READY fires when:
  // - user makes a consent choice (new visitor)
  // - stored consent is loaded (returning visitor)
  // - consent is not applicable (non-regulated region)
  fc.callbackQueue.push({
    CONSENT_MODE_DATA_READY: () => {
      for (const cb of consentListeners) cb();
    },
  });
}

/* ------------------------------------------------------------------ */
/*  AdSense component                                                 */
/*                                                                    */
/*  Strategy:                                                         */
/*  1. Push ad immediately when container has width (even pre-consent) */
/*     Google handles limited ads / queuing internally.                */
/*  2. If unfilled AND consent changes, destroy + re-push.            */
/*  3. On SPA nav, destroy + re-push.                                 */
/*  4. IntersectionObserver - only push when near viewport.           */
/*  5. Collapse wrapper via CSS when data-ad-status="unfilled".       */
/* ------------------------------------------------------------------ */

export default function AdSense({ variant, adSlot, className = '' }: AdSenseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pushed = useRef(false);
  const retryCount = useRef(0);
  const [filled, setFilled] = useState(false);
  const pathname = usePathname();
  const pathnameRef = useRef(pathname);
  const preset = PRESETS[variant];
  const rawSlot = adSlot || preset.slot;
  const slot = SLOT_ALIASES[rawSlot] ?? rawSlot;
  const isInArticleVariant = variant === 'in-article' || variant === 'in-article-new';

  const resetAd = useCallback(() => {
    pushed.current = false;
    retryCount.current = 0;
    setFilled(false);
    if (containerRef.current) containerRef.current.replaceChildren();
  }, []);

  const injectAd = useCallback(
    (container: HTMLDivElement) => {
      if (pushed.current) return true;
      if (container.getBoundingClientRect().width === 0) return false;

      const ins = document.createElement('ins');
      ins.className = 'adsbygoogle';
      ins.setAttribute('data-ad-client', AD_CLIENT);
      ins.setAttribute('data-ad-slot', slot);

      if (variant === 'tool-banner') {
        ins.style.display = 'inline-block';
        ins.style.width = '728px';
        ins.style.height = '90px';
      } else if (variant === 'responsive') {
        ins.style.display = 'block';
        ins.setAttribute('data-ad-format', 'auto');
        ins.setAttribute('data-full-width-responsive', 'true');
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
        setFilled(true);
      } catch {
        // Ad blocker or script not loaded - silent fail
      }

      return pushed.current;
    },
    [slot, variant, isInArticleVariant],
  );

  // Reset ad state on SPA navigation
  useEffect(() => {
    if (pathnameRef.current !== pathname) {
      pathnameRef.current = pathname;
      resetAd();
    }
  }, [pathname, resetAd]);

  // Main ad lifecycle
  useEffect(() => {
    const container = containerRef.current;
    if (!container || pushed.current) return;

    ensureAdScript();
    initConsentBus();

    const cleanups: Array<() => void> = [];

    const attemptRender = () => {
      if (pushed.current) return;
      onScriptReady(() => {
        if (pushed.current) return;

        // Try immediately
        if (injectAd(container)) return;

        // Wait for container to get width (e.g. layout shift, hidden tab)
        if (typeof ResizeObserver !== 'undefined') {
          const ro = new ResizeObserver(() => {
            if (injectAd(container)) ro.disconnect();
          });
          ro.observe(container);
          cleanups.push(() => ro.disconnect());
        }
      });
    };

    // Use IntersectionObserver - push ad when container is near viewport
    // rootMargin: 200px so ads load slightly before scrolling into view
    if (typeof IntersectionObserver !== 'undefined') {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            io.disconnect();
            attemptRender();
          }
        },
        { rootMargin: '200px' },
      );
      io.observe(container);
      cleanups.push(() => io.disconnect());
    } else {
      // Fallback: no IO support - render immediately
      attemptRender();
    }

    // Listen for consent changes - retry unfilled ads
    const onConsentChange: ConsentCallback = () => {
      if (!container) return;

      const ins = container.querySelector('ins.adsbygoogle');
      const status = ins?.getAttribute('data-ad-status');

      // Only retry if ad was unfilled or never pushed, max 2 retries
      if ((!pushed.current || status === 'unfilled') && retryCount.current < 2) {
        retryCount.current++;
        pushed.current = false;
        setFilled(false);
        container.replaceChildren();

        onScriptReady(() => {
          if (injectAd(container)) return;

          // Small delay - Google needs time to process consent update
          const t = setTimeout(() => injectAd(container), 300);
          cleanups.push(() => clearTimeout(t));
        });
      }
    };
    consentListeners.add(onConsentChange);
    cleanups.push(() => consentListeners.delete(onConsentChange));

    return () => {
      for (const fn of cleanups) fn();
    };
  }, [variant, slot, isInArticleVariant, pathname, injectAd]);

  if (variant === 'tool-banner') {
    return <div ref={containerRef} className={`flex items-center justify-center ${filled ? 'min-h-[90px]' : ''} ${className}`} />;
  }

  if (variant === 'responsive') {
    return <div ref={containerRef} className={`w-full ${filled ? 'min-h-[100px]' : ''} ${className}`} />;
  }

  if (variant === 'vertical') {
    return <div ref={containerRef} className={`inline-block w-[160px] ${filled ? 'min-h-[600px]' : ''} ${className}`} />;
  }

  if (isInArticleVariant) {
    return <div ref={containerRef} className={`w-full ${filled ? 'min-h-[280px]' : ''} ${className}`} />;
  }

  return <div ref={containerRef} className={className} />;
}
