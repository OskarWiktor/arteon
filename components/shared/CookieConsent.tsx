'use client';

import { useEffect, useRef, useState } from 'react';
import Button from '../ui/buttons/Button';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useRestoreFocus } from '@/hooks/useRestoreFocus';
import { useTimeout } from '@/hooks/useTimeout';

const ui = {
  pl: {
    title: 'Cookies i prywatność',
    description:
      'Używamy technologii niezbędnych do działania serwisu oraz <strong>analityki</strong> do ulepszania strony. <strong> Google Analytics 4</strong> włączymy wyłącznie po Twojej zgodzie.',
    setPreferences: 'Ustaw preferencje',
    privacyPolicy: 'Polityka prywatności',
    reject: 'Odrzuć',
    settings: 'Ustawienia',
    accept: 'Akceptuj',
    panelTitle: 'Preferencje prywatności',
    panelDescription: 'Ustawienia zgód na przetwarzanie danych w celach analitycznych.',
    categoriesLegend: 'Kategorie',
    essentialTitle: 'Niezbędne',
    essentialDescription: 'Bez nich serwis nie działa. Nie zbierają danych do marketingu.',
    essentialStatus: 'Zawsze aktywne',
    analyticsTitle: 'Analityka (GA4)',
    analyticsDescription: 'Statystyki odwiedzin. Włącza Google Analytics 4 po Twojej zgodzie.',
    analyticsLabel: 'Włącz analitykę GA4',
    changeDecision: 'W każdej chwili możesz zmienić decyzję',
    save: 'Zapisz',
  },
} as const;

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
  } catch {
    domainAttr = '';
  }
  document.cookie = `${COOKIE_NAME}=${value}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax${secure}${domainAttr}`;
}

// 🔧 uproszczony typ gtag - zamiast kombinować z interfejsami Next/TS
function updateGtag(analytics: boolean) {
  if (typeof window === 'undefined') return;

  const win = window as typeof window & {
    gtag?: (..._args: unknown[]) => void;
  };

  if (typeof win.gtag !== 'function') return;

  win.gtag('consent', 'update', {
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
    gtag('config', '${measurementId}', { send_page_view: false });
  `;
  document.head.appendChild(s2);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [panel, setPanel] = useState(false);
  const [analyticsChoice, setAnalyticsChoice] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const firstNativeBtnRef = useRef<HTMLButtonElement>(null);

  const { start: focusFirstButton } = useTimeout();

  useRestoreFocus(visible);

  useEscapeKey(
    (e) => {
      e.preventDefault();
      saveAndClose({ analytics: false });
    },
    visible
  );

  useFocusTrap(dialogRef, visible);

  useEffect(() => {
    const open = () => {
      setVisible(true);
      setPanel(true);
      focusFirstButton(() => firstNativeBtnRef.current?.focus(), 0);
    };
    document.addEventListener('arteon:open-consent', open);
    return () => document.removeEventListener('arteon:open-consent', open);
  }, []);

  useEffect(() => {
    const saved = readConsent();
    if (saved) {
      updateGtag(saved.analytics);
      // zakładam, że gdzieś globalnie masz zdefiniowane window.__GA_ID
      if (saved.analytics) loadGA(window.__GA_ID);
      setVisible(false);
    } else {
      setVisible(true);
      setPanel(false);
      focusFirstButton(() => firstNativeBtnRef.current?.focus(), 0);
    }
  }, []);

  function saveAndClose(next: { analytics: boolean }) {
    writeConsent({
      v: 1,
      analytics: next.analytics,
      updatedAt: new Date().toISOString(),
    });
    updateGtag(next.analytics);
    if (next.analytics) loadGA(window.__GA_ID);

    setVisible(false);
    setPanel(false);
  }

  if (!visible) return null;
  const t = ui.pl;
  const titleId = panel ? 'cookie-panel-title' : 'cookie-title';
  const descId = panel ? 'cookie-panel-desc' : 'cookie-desc';

  return (
    <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={descId} className="fixed inset-x-0 bottom-0 z-[70] bg-transparent">
      <div className="mx-auto mb-4 w-[min(92vw,1280px)] rounded bg-white p-5 text-black shadow-xl ring-1 ring-black/5">
        {!panel ? (
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <span id="cookie-title" className="h6">
                {t.title}
              </span>
              <p id="cookie-desc" className="text-sm text-black">
                <span dangerouslySetInnerHTML={{ __html: t.description }} />
                <span className="ml-1">
                  <button
                    className="text-black underline underline-offset-2"
                    onClick={() => {
                      setPanel(true);
                      focusFirstButton(() => firstNativeBtnRef.current?.focus(), 0);
                    }}
                    aria-haspopup="dialog"
                    aria-controls="cookie-preferences"
                  >
                    {t.setPreferences}
                  </button>{' '}
                  •{' '}
                  <a className="text-black underline underline-offset-2" href="/polityka-prywatnosci" rel="noopener">
                    {t.privacyPolicy}
                  </a>
                </span>
              </p>
            </div>

            <div className="flex gap-2">
              <button
                ref={firstNativeBtnRef}
                onClick={() => saveAndClose({ analytics: false })}
                className="inline-flex w-fit items-center rounded-2xl border border-slate-300 bg-white px-3 py-1 text-base font-medium text-black shadow-md transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
              >
                {t.reject}
              </button>

              <Button size="small" onClick={() => setPanel(true)}>
                {t.settings}
              </Button>
              <Button onClick={() => saveAndClose({ analytics: true })} size="small" variant="dark">
                {t.accept}
              </Button>
            </div>
          </div>
        ) : (
          <div id="cookie-preferences" className="space-y-4">
            <span id="cookie-panel-title" className="h6">
              {t.panelTitle}
            </span>
            <p id="cookie-panel-desc" className="sr-only">
              {t.panelDescription}
            </p>

            <fieldset className="space-y-2">
              <legend className="sr-only">{t.categoriesLegend}</legend>

              <div className="flex items-start justify-between gap-4 rounded border border-neutral-200 bg-white px-4 py-2">
                <div>
                  <span className="text-base font-medium">{t.essentialTitle}</span>
                  <span className="ml-2 text-sm font-medium text-black">{t.essentialDescription}</span>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-black">{t.essentialStatus}</span>
              </div>

              <div className="flex items-start justify-between gap-4 rounded border border-neutral-200 bg-white px-4 py-2">
                <div>
                  <span className="text-base font-medium">{t.analyticsTitle}</span>
                  <span className="ml-2 text-sm font-medium text-black">{t.analyticsDescription}</span>
                </div>
                <div className="flex w-[24px] items-center justify-center">
                  <input type="checkbox" className="h-4 w-4 rounded border-neutral-300" aria-label={t.analyticsLabel} checked={analyticsChoice} onChange={() => setAnalyticsChoice((v) => !v)} />
                </div>
              </div>
            </fieldset>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm font-medium text-black">{t.changeDecision}</span>

              <div className="flex gap-2">
                <button
                  onClick={() => saveAndClose({ analytics: false })}
                  className="inline-flex w-fit items-center rounded-2xl border border-slate-300 bg-white px-3 py-1 text-sm font-medium text-black shadow transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                >
                  {t.reject}
                </button>
                <Button
                  onClick={() =>
                    saveAndClose({
                      analytics: analyticsChoice,
                    })
                  }
                  size="small"
                  variant="dark"
                >
                  {t.save}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
