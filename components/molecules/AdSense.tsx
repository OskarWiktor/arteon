'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import type { AdSenseProps } from '@/types/ui';
export type { AdVariant, AdSenseProps } from '@/types/ui';

const AD_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? '';
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

const AD_LABEL: Record<string, string> = {
  pl: 'REKLAMA',
  en: 'ADVERTISEMENT',
  de: 'WERBUNG',
  es: 'PUBLICIDAD',
  fr: 'PUBLICITÉ',
  pt: 'PUBLICIDADE',
  it: 'PUBBLICITÀ',
  ro: 'PUBLICITATE',
  nl: 'ADVERTENTIE',
  hu: 'HIRDETÉS',
  cs: 'REKLAMA',
  sv: 'ANNONS',
  da: 'REKLAME',
  no: 'ANNONSE',
  fi: 'MAINOS',
  el: 'ΔΙΑΦΗΜΙΣΗ',
};

const SLOT_ALIASES: Record<string, string> = {
  [LEGACY_IN_ARTICLE_SLOT]: PRESETS['in-article'].slot,
};

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

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
    scriptState = 'idle';
  }

  if (scriptState !== 'idle') return;

  const alreadyPresent = Array.from(document.scripts).some(s => s.src.includes('adsbygoogle.js'));
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

type ConsentCallback = () => void;
const consentListeners = new Set<ConsentCallback>();
let consentBusInitialized = false;

function initConsentBus() {
  if (consentBusInitialized || typeof window === 'undefined') return;
  consentBusInitialized = true;

  document.addEventListener('arteon:consent-updated', () => {
    for (const cb of consentListeners) cb();
  });

  const fc = window.googlefc;
  if (!fc) return;

  fc.callbackQueue = fc.callbackQueue || [];

  fc.callbackQueue.push({
    CONSENT_MODE_DATA_READY: () => {
      for (const cb of consentListeners) cb();
    },
  });
}

export default function AdSense({ variant, adSlot, className, locale }: AdSenseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pushed = useRef(false);
  const retryCount = useRef(0);
  const [, setFilled] = useState(false);
  const pathname = usePathname();
  const pathnameRef = useRef(pathname);
  const preset = PRESETS[variant];
  const rawSlot = adSlot || preset.slot;
  const slot = SLOT_ALIASES[rawSlot] ?? rawSlot;
  const isInArticleVariant = variant === 'in-article' || variant === 'in-article-new';

  const resetAd = () => {
    pushed.current = false;
    retryCount.current = 0;
    setFilled(false);
    if (containerRef.current) containerRef.current.replaceChildren();
  };

  const injectAd = (container: HTMLDivElement) => {
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
    } catch {}

    return pushed.current;
  };

  useEffect(() => {
    if (pathnameRef.current !== pathname) {
      pathnameRef.current = pathname;
      resetAd();
    }
  }, [pathname, resetAd]);

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

        if (injectAd(container)) return;

        if (typeof ResizeObserver !== 'undefined') {
          const ro = new ResizeObserver(() => {
            if (injectAd(container)) ro.disconnect();
          });
          ro.observe(container);
          cleanups.push(() => ro.disconnect());
        }
      });
    };

    if (typeof IntersectionObserver !== 'undefined') {
      const io = new IntersectionObserver(
        entries => {
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
      attemptRender();
    }
    const onConsentChange: ConsentCallback = () => {
      if (!container) return;

      if (retryCount.current >= 2) return;
      retryCount.current++;
      pushed.current = false;
      setFilled(false);
      container.replaceChildren();

      onScriptReady(() => {
        if (injectAd(container)) return;

        const t = setTimeout(() => injectAd(container), 300);
        cleanups.push(() => clearTimeout(t));
      });
    };
    consentListeners.add(onConsentChange);
    cleanups.push(() => consentListeners.delete(onConsentChange));

    return () => {
      for (const fn of cleanups) fn();
    };
  }, [variant, slot, isInArticleVariant, pathname, injectAd]);

  const label = locale && (AD_LABEL[locale] ?? AD_LABEL.en);
  const labelNode = label && (
    <span className='block text-center text-[10px] tracking-widest text-neutral-400'>{label}</span>
  );

  if (variant === 'tool-banner') {
    return (
      <div
        className={`ad-placeholder flex min-h-[110px] flex-col items-center rounded bg-neutral-50 ${className}`}
      >
        {labelNode}
        <div ref={containerRef} className='flex w-full items-center justify-center' />
      </div>
    );
  }

  if (variant === 'responsive') {
    return (
      <div className={`ad-placeholder min-h-[250px] w-full rounded bg-neutral-50 ${className}`}>
        {labelNode}
        <div ref={containerRef} className='w-full' />
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div
        className={`ad-placeholder inline-block min-h-[600px] w-[160px] rounded bg-neutral-50 ${className}`}
      >
        {labelNode}
        <div ref={containerRef} className='h-full w-full' />
      </div>
    );
  }

  if (isInArticleVariant) {
    return (
      <div className={`ad-placeholder min-h-[280px] w-full rounded bg-neutral-50 ${className}`}>
        {labelNode}
        <div ref={containerRef} className='w-full' />
      </div>
    );
  }

  return (
    <div className={`ad-placeholder rounded bg-neutral-50 ${className}`}>
      {labelNode}
      <div ref={containerRef} />
    </div>
  );
}
