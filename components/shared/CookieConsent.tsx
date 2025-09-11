'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Button from '../ui/Button';

type ConsentState = { v: number; analytics: boolean; updatedAt: string };
const COOKIE_NAME = 'arteon_consent';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

function readConsent(): ConsentState | null {
  const m = document.cookie.match(new RegExp('(?:^|; )' + COOKIE_NAME + '=([^;]+)'));
  if (!m) return null;
  try {
    return JSON.parse(decodeURIComponent(m[1])) as ConsentState;
  } catch {
    return null;
  }
}

function writeConsent(state: ConsentState) {
  const value = encodeURIComponent(JSON.stringify(state));
  const secure = location.protocol === 'https:' ? '; Secure' : '';
  let domainAttr = '';
  try {
    const parts = location.hostname.split('.');
    if (parts.length >= 2) {
      const base = parts.slice(-2).join('.');
      domainAttr = `; Domain=.${base}`;
    }
  } catch {}
  document.cookie = `${COOKIE_NAME}=${value}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax${secure}${domainAttr}`;
}

function updateGtag(analytics: boolean) {
  // @ts-ignore
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  // @ts-ignore
  window.gtag('consent', 'update', {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    ad_storage: 'denied',
  });
}

function loadGA(measurementId?: string) {
  if (!measurementId) return;
  if (document.getElementById('ga4-src')) return;
  const s1 = document.createElement('script');
  s1.id = 'ga4-src';
  s1.async = true;
  s1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(s1);

  const s2 = document.createElement('script');
  s2.text = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `;
  document.head.appendChild(s2);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [panel, setPanel] = useState(false);
  const [analyticsChoice, setAnalyticsChoice] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const firstNativeBtnRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const open = () => {
      previouslyFocused.current = document.activeElement as HTMLElement;
      setVisible(true);
      setPanel(true);
      setTimeout(() => firstNativeBtnRef.current?.focus(), 0);
    };
    document.addEventListener('arteon:open-consent', open);
    return () => document.removeEventListener('arteon:open-consent', open);
  }, []);

  useEffect(() => {
    const saved = readConsent();
    if (saved) {
      updateGtag(saved.analytics);
      if (saved.analytics) loadGA((window as any).__GA_ID);
      setVisible(false);
    } else {
      setVisible(true);
      setPanel(false);
      setTimeout(() => firstNativeBtnRef.current?.focus(), 0);
    }
  }, []);

  useLayoutEffect(() => {
    if (!visible) return;
    const root = dialogRef.current;
    if (!root) return;

    const focusableSelectors = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

    const trap = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        saveAndClose({ analytics: false });
        return;
      }
      if (e.key !== 'Tab') return;

      const nodes = Array.from(root.querySelectorAll<HTMLElement>(focusableSelectors)).filter((el) => !el.hasAttribute('disabled') && (el.offsetParent !== null || el === document.activeElement));

      if (nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', trap);
    return () => document.removeEventListener('keydown', trap);
  }, [visible]);

  function saveAndClose(next: { analytics: boolean }) {
    writeConsent({ v: 1, analytics: next.analytics, updatedAt: new Date().toISOString() });
    updateGtag(next.analytics);
    if (next.analytics) loadGA((window as any).__GA_ID);

    setVisible(false);
    setPanel(false);
    setTimeout(() => previouslyFocused.current?.focus(), 0);
  }

  if (!visible) return null;
  const titleId = panel ? 'cookie-panel-title' : 'cookie-title';
  const descId = panel ? 'cookie-panel-desc' : 'cookie-desc';

  return (
    <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={descId} className="fixed inset-x-0 bottom-0 z-[70] bg-transparent">
      <div className="mx-auto mb-4 w-[min(92vw,900px)] rounded bg-white p-5 text-black shadow-xl ring-1 ring-black/5">
        {!panel ? (
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <span id="cookie-title" className="h6">
                Cookies i prywatność
              </span>
              <p id="cookie-desc" className="text-sm text-black">
                Używamy technologii niezbędnych do działania serwisu oraz <strong>analityki</strong> do ulepszania strony.
                <strong> Vercel Analytics</strong> działa bez plików cookies.
                <strong> Google Analytics 4</strong> włączymy wyłącznie po Twojej zgodzie.
                <span className="ml-1">
                  <button
                    className="text-black underline underline-offset-2"
                    onClick={() => {
                      setPanel(true);
                      setTimeout(() => firstNativeBtnRef.current?.focus(), 0);
                    }}
                    aria-haspopup="dialog"
                    aria-controls="cookie-preferences"
                  >
                    Ustaw preferencje
                  </button>{' '}
                  •{' '}
                  <a className="text-black underline underline-offset-2" href="/polityka-prywatnosci" rel="noopener">
                    Polityka prywatności
                  </a>
                </span>
              </p>
            </div>

            <div className="flex gap-2">
              <button
                ref={firstNativeBtnRef}
                onClick={() => saveAndClose({ analytics: false })}
                className="inline-flex w-fit items-center rounded-md border border-slate-300 bg-white px-3 py-1 text-base font-medium text-black shadow-md transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
              >
                Odrzuć
              </button>

              <Button
                onClick={() => {
                  setPanel(true);
                }}
                size="small"
              >
                Ustawienia
              </Button>
              <Button onClick={() => saveAndClose({ analytics: true })} size="small" variant="dark">
                Akceptuj
              </Button>
            </div>
          </div>
        ) : (
          <div id="cookie-preferences" className="space-y-4">
            <span id="cookie-panel-title" className="h6">
              Preferencje prywatności
            </span>
            <p id="cookie-panel-desc" className="sr-only">
              Ustawienia zgód na przetwarzanie danych w celach analitycznych.
            </p>

            <fieldset className="space-y-2">
              <legend className="sr-only">Kategorie</legend>

              <div className="flex items-start justify-between gap-4 rounded border border-neutral-200 bg-white px-4 py-2">
                <div>
                  <span className="text-base font-medium">Niezbędne</span>
                  <span className="ml-2 text-sm font-medium text-black">Bez nich serwis nie działa. Nie zbierają danych do marketingu.</span>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-black">Zawsze aktywne</span>
              </div>

              <div className="flex items-start justify-between gap-4 rounded border border-neutral-200 bg-white px-4 py-2">
                <div>
                  <span className="text-base font-medium">Analityka (GA4)</span>
                  <span className="ml-2 text-sm font-medium text-black">Statystyki odwiedzin. Włącza Google Analytics 4 po Twojej zgodzie.</span>
                </div>
                <div className="flex w-[24px] items-center justify-center">
                  <input type="checkbox" className="h-4 w-4 rounded border-neutral-300" aria-label="Włącz analitykę GA4" checked={analyticsChoice} onChange={() => setAnalyticsChoice((v) => !v)} />
                </div>
              </div>
            </fieldset>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm font-medium text-black">
                W każdej chwili możesz zmienić decyzję:{' '}
                <button className="cursor-pointer border-b border-b-slate-900 text-black" onClick={() => (window as any).ArteonConsent?.open()}>
                  Zarządzaj zgodą
                </button>
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() => saveAndClose({ analytics: false })}
                  className="inline-flex w-fit items-center rounded-md border border-slate-300 bg-white px-3 py-1 text-sm font-medium text-black shadow transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                >
                  Zapisz i odrzuć
                </button>
                <Button onClick={() => saveAndClose({ analytics: analyticsChoice })} size="small" variant="dark">
                  Zapisz i akceptuj
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
