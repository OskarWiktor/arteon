'use client';

import { useEffect, useRef, useState } from 'react';
import Button from '../ui/Button';

type ConsentState = {
  v: number;
  analytics: boolean;
  updatedAt: string;
};

const COOKIE_NAME = 'arteon_consent';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

function readConsent(): ConsentState | null {
  const match = document.cookie.match(new RegExp('(^| )' + COOKIE_NAME + '=([^;]+)'));
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match[2])) as ConsentState;
  } catch {
    return null;
  }
}

function writeConsent(state: ConsentState) {
  const value = encodeURIComponent(JSON.stringify(state));
  const secure = location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${COOKIE_NAME}=${value}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
}

async function loadGA(id: string) {
  if (!id) return;
  if (document.querySelector(`script[data-ga4="${id}"]`)) return;

  await new Promise<void>((resolve, reject) => {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    (s as any).dataset.ga4 = id;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('GA4 script failed'));
    document.head.appendChild(s);
  });

  // @ts-ignore
  window.gtag?.('js', new Date());
  // @ts-ignore
  window.gtag?.('config', id, {
    send_page_view: true,
  });
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

  if (analytics) {
    // @ts-ignore
    const GA_ID: string | undefined = window.__GA_ID;
    if (GA_ID) {
      loadGA(GA_ID).catch(() => {});
    }
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [panel, setPanel] = useState(false);
  const firstBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const open = () => {
      setVisible(true);
      setPanel(true);
      setTimeout(() => firstBtnRef.current?.focus(), 0);
    };
    document.addEventListener('arteon:open-consent', open);
    return () => document.removeEventListener('arteon:open-consent', open);
  }, []);

  useEffect(() => {
    const saved = readConsent();
    if (saved) {
      updateGtag(saved.analytics);
      setVisible(false);
    } else {
      setVisible(true);
      setPanel(false);
      setTimeout(() => firstBtnRef.current?.focus(), 0);
    }
  }, []);

  function saveAndClose(next: { analytics: boolean }) {
    const state: ConsentState = { v: 1, analytics: next.analytics, updatedAt: new Date().toISOString() };
    writeConsent(state);
    updateGtag(next.analytics);
    setVisible(false);
    setPanel(false);
  }

  if (!visible) return null;

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="cookie-title" className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto mb-4 w-[min(92vw,900px)] rounded bg-white p-5 shadow-xl ring-1 ring-black/5">
        {!panel ? (
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <span id="cookie-title" className="h6">
                Cookies i prywatność
              </span>
              <span className="text-sm text-[#5e5e5e]">
                Używamy wyłącznie niezbędnych technologii oraz <strong>analityki</strong> do ulepszania serwisu. Vercel Analytics działa bez cookies. GA4 włączymy dopiero po Twojej zgodzie.
                <span className="ml-1">
                  <button className="underline underline-offset-2" onClick={() => setPanel(true)} aria-haspopup="dialog" aria-controls="cookie-preferences">
                    Ustaw preferencje
                  </button>{' '}
                  •{' '}
                  <a className="underline underline-offset-2" href="/polityka-prywatnosci" rel="noopener">
                    Polityka prywatności
                  </a>
                </span>
              </span>
            </div>

            <div className="flex gap-2">
              <button
                ref={firstBtnRef}
                onClick={() => saveAndClose({ analytics: false })}
                className="inline-flex w-fit items-center rounded-md border border-black/10 bg-white px-3 py-1 text-base font-medium text-[#080808] shadow-md transition hover:translate-y-[-2px] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
              >
                Odrzuć
              </button>
              <Button onClick={() => setPanel(true)} size="small" aria-controls="cookie-preferences" aria-haspopup="dialog">
                Ustawienia
              </Button>
              <Button onClick={() => saveAndClose({ analytics: true })} size="small" variant="dark">
                Akceptuj
              </Button>
            </div>
          </div>
        ) : (
          <div id="cookie-preferences" className="space-y-4">
            <span id="cookie-title" className='h6'>Preferencje prywatności</span>

            <fieldset className="space-y-2">
              <legend className="sr-only">Kategorie</legend>

              <div className="flex items-start justify-between gap-4 rounded border border-neutral-200 px-4 py-2">
                <div>
                  <span className="text-base font-medium">Niezbędne</span>
                  <span className="ml-2 text-sm font-medium text-[#5e5e5e]">Bez nich serwis nie działa. Nie zbierają danych do marketingu.</span>
                </div>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold">Zawsze aktywne</span>
              </div>

              <div className="flex items-start justify-between gap-4 rounded border border-neutral-200 px-4 py-2">
                <div>
                  <span className="text-base font-medium">Analityka (GA4)</span>
                  <span className="ml-2 text-sm font-medium text-[#5e5e5e]">Statystyki odwiedzin. Włącza Google Analytics 4 po Twojej zgodzie.</span>
                </div>
                <div className="flex w-[24px] items-center justify-center">
                  <input type="checkbox" className="h-4 w-4 rounded border-neutral-300" aria-label="Włącz analitykę GA4 (informacyjnie)" onChange={() => {}} checked={false} readOnly />
                </div>
              </div>
            </fieldset>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm font-medium text-[#5e5e5e]">
                W każdej chwili możesz zmienić decyzję:{' '}
                <button className="cursor-pointer border-b border-b-[#080808] text-[#080808]" onClick={() => (window as any).ArteonConsent?.open()}>
                  Zarządzaj zgodą
                </button>
              </span>

              <div className="flex gap-2">
                <Button onClick={() => saveAndClose({ analytics: false })} size="small">
                  Zapisz i odrzuć
                </Button>
                <Button onClick={() => saveAndClose({ analytics: true })} size="small" variant="dark">
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
