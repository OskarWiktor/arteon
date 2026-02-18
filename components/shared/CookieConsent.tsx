'use client';

import { useEffect, useRef, useState } from 'react';
import Button from '../ui/buttons/Button';
import { loadAhrefs } from '@/lib/consent/ahrefs';
import { loadGA, sendGAPageView } from '@/lib/consent/ga';
import { updateGtagConsent } from '@/lib/consent/gtag';
import { readConsent, writeConsent } from '@/lib/consent/consentCookie';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useRestoreFocus } from '@/hooks/useRestoreFocus';
import { useTimeout } from '@/hooks/useTimeout';

export type CookieConsentTranslations = {
  title: string;
  description: string;
  setPreferences: string;
  privacyPolicy: string;
  privacyPolicyHref: string;
  reject: string;
  settings: string;
  accept: string;
  panelTitle: string;
  panelDescription: string;
  categoriesLegend: string;
  essentialTitle: string;
  essentialDescription: string;
  essentialStatus: string;
  analyticsTitle: string;
  analyticsDescription: string;
  analyticsLabel: string;
  adsTitle: string;
  adsDescription: string;
  adsLabel: string;
  changeDecision: string;
  save: string;
};

function updateGtag(analytics: boolean, ads: boolean) {
  updateGtagConsent({ analytics, ads });
}

export default function CookieConsent({ translations: t }: { translations: CookieConsentTranslations }) {
  const [visible, setVisible] = useState(false);
  const [panel, setPanel] = useState(false);
  const [analyticsChoice, setAnalyticsChoice] = useState(false);
  const [adsChoice, setAdsChoice] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const firstNativeBtnRef = useRef<HTMLButtonElement>(null);

  const { start: focusFirstButton } = useTimeout();

  useRestoreFocus(visible);

  useEscapeKey((e) => {
    e.preventDefault();
    if (panel) {
      setPanel(false);
    } else {
      setPanel(true);
      focusFirstButton(() => firstNativeBtnRef.current?.focus(), 0);
    }
  }, visible);

  useFocusTrap(dialogRef, visible);

  useEffect(() => {
    const open = () => {
      const saved = readConsent();
      setAnalyticsChoice(saved?.analytics ?? false);
      setAdsChoice(saved?.ads ?? false);
      setVisible(true);
      setPanel(true);
      focusFirstButton(() => firstNativeBtnRef.current?.focus(), 0);
    };
    document.addEventListener('arteon:open-consent', open);
    window.ArteonConsent = { open };
    return () => document.removeEventListener('arteon:open-consent', open);
  }, [focusFirstButton]);

  useEffect(() => {
    const saved = readConsent();
    if (saved) {
      // Migracja starych ciasteczek bez pola ads
      const ads = saved.ads ?? false;
      updateGtag(saved.analytics, ads);
      if (saved.analytics) {
        loadGA(window.__GA_ID);
        loadAhrefs();
      }
      setVisible(false);
    } else {
      setVisible(true);
      setPanel(false);
      focusFirstButton(() => firstNativeBtnRef.current?.focus(), 0);
    }
  }, [focusFirstButton]);

  function saveAndClose(next: { analytics: boolean; ads: boolean }) {
    writeConsent({
      v: 2,
      analytics: next.analytics,
      ads: next.ads,
      updatedAt: new Date().toISOString(),
    });

    updateGtag(next.analytics, next.ads);
    if (next.analytics) {
      loadGA(window.__GA_ID);
      loadAhrefs();
      setTimeout(sendGAPageView, 200);
    }

    setVisible(false);
    setPanel(false);
  }

  if (!visible) return null;
  const titleId = panel ? 'cookie-panel-title' : 'cookie-title';
  const descId = panel ? 'cookie-panel-desc' : 'cookie-desc';

  return (
    <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={descId} className="fixed inset-x-0 bottom-0 z-[70] bg-transparent">
      <div className="text-dark mx-auto mb-4 w-[min(92vw,1280px)] rounded bg-white p-5 shadow-xl ring-1 ring-black/5">
        {!panel ? (
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <span id="cookie-title" className="h6">
                {t.title}
              </span>
              <p id="cookie-desc" className="text-dark text-sm">
                {t.description}{' '}
                <a className="text-dark underline underline-offset-2" href={t.privacyPolicyHref} rel="noopener">
                  {t.privacyPolicy}
                </a>
                .
              </p>
            </div>

            <div className="flex shrink-0 gap-2">
              <button
                ref={firstNativeBtnRef}
                onClick={() => saveAndClose({ analytics: true, ads: true })}
                className="bg-primary focus-visible:ring-primary inline-flex w-fit cursor-pointer items-center rounded-xl px-3 py-1.5 text-sm font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:px-4 md:py-2 md:text-base"
              >
                {t.accept}
              </button>
              <button
                onClick={() => {
                  setPanel(true);
                  focusFirstButton(() => firstNativeBtnRef.current?.focus(), 0);
                }}
                className="text-dark focus-visible:ring-primary inline-flex w-fit items-center rounded-xl border border-neutral-200 bg-white px-3 py-1 text-sm font-medium transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2"
              >
                {t.settings}
              </button>
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
                  <span className="text-dark ml-2 text-sm font-medium">{t.essentialDescription}</span>
                </div>
                <span className="text-dark bg-primary-light rounded-full px-3 py-1 text-xs font-semibold">{t.essentialStatus}</span>
              </div>

              <div className="flex items-start justify-between gap-4 rounded border border-neutral-200 bg-white px-4 py-2">
                <div>
                  <span className="text-base font-medium">{t.analyticsTitle}</span>
                  <span className="text-dark ml-2 text-sm font-medium">{t.analyticsDescription}</span>
                </div>
                <div className="flex w-[24px] items-center justify-center">
                  <input type="checkbox" className="h-4 w-4 rounded border-neutral-300" aria-label={t.analyticsLabel} checked={analyticsChoice} onChange={() => setAnalyticsChoice((v) => !v)} />
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 rounded border border-neutral-200 bg-white px-4 py-2">
                <div>
                  <span className="text-base font-medium">{t.adsTitle}</span>
                  <span className="text-dark ml-2 text-sm font-medium">{t.adsDescription}</span>
                </div>
                <div className="flex w-[24px] items-center justify-center">
                  <input type="checkbox" className="h-4 w-4 rounded border-neutral-300" aria-label={t.adsLabel} checked={adsChoice} onChange={() => setAdsChoice((v) => !v)} />
                </div>
              </div>
            </fieldset>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-dark text-sm font-medium">{t.changeDecision}</span>

              <div className="flex gap-2">
                <button
                  onClick={() => saveAndClose({ analytics: false, ads: false })}
                  className="text-dark border-primary-light focus-visible:ring-primary inline-flex w-fit items-center rounded-2xl border bg-white px-3 py-1 text-sm font-medium shadow transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2"
                >
                  {t.reject}
                </button>
                <Button
                  onClick={() =>
                    saveAndClose({
                      analytics: analyticsChoice,
                      ads: adsChoice,
                    })
                  }
                  size="small"
                  variant="accent"
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
