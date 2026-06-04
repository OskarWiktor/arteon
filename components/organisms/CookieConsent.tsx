'use client';

import { useEffect, useRef, useState } from 'react';
import Button from '../atoms/buttons/Button';
import { loadAhrefs } from '@/lib/consent/ahrefs';
import { loadGA, sendGAPageView } from '@/lib/consent/ga';
import { updateGtagConsent } from '@/lib/consent/gtag';
import { readConsent, writeConsent } from '@/lib/consent/consentCookie';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useRestoreFocus } from '@/hooks/useRestoreFocus';
import { useTimeout } from '@/hooks/useTimeout';
import InputCheckboxWithLabel from '../molecules/form/InputCheckboxWithLabel';
import { cn } from '@/lib/utils';
import { flexCenterClasses, focusRingClasses } from '@/lib/ui-classes';

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

export default function CookieConsent({
  translations: t,
}: {
  translations: CookieConsentTranslations;
}) {
  const [visible, setVisible] = useState(false);
  const [panel, setPanel] = useState(false);
  const [analyticsChoice, setAnalyticsChoice] = useState(false);
  const [adsChoice, setAdsChoice] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const firstNativeBtnRef = useRef<HTMLButtonElement>(null);

  const { start: focusFirstButton } = useTimeout();

  useRestoreFocus(visible);

  useEscapeKey(e => {
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
      const ads = saved.ads ?? true;
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
    document.dispatchEvent(new Event('arteon:consent-updated'));
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
    <div
      ref={dialogRef}
      role='dialog'
      aria-modal='true'
      aria-labelledby={titleId}
      aria-describedby={descId}
      className='fixed inset-x-0 bottom-0 z-[70] bg-transparent'
    >
      <div className='mx-auto mb-4 w-[min(92vw,1280px)] rounded bg-white p-5 text-dark shadow-lg ring-1 ring-black/5'>
        {!panel ? (
          <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
            <div className='space-y-1'>
              <span id='cookie-title' className='h6'>
                {t.title}
              </span>
              <p id='cookie-desc' className='text-sm text-dark'>
                {t.description}{' '}
                <a
                  className='text-dark underline underline-offset-2'
                  href={t.privacyPolicyHref}
                  rel='noopener'
                >
                  {t.privacyPolicy}
                </a>
                .
              </p>
            </div>

            <div className='flex shrink-0 gap-2'>
              <button
                ref={firstNativeBtnRef}
                onClick={() => saveAndClose({ analytics: true, ads: true })}
                className={cn(
                  'inline-flex w-fit cursor-pointer items-center rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:px-4 md:py-2 md:text-base',
                  focusRingClasses,
                )}
              >
                {t.accept}
              </button>
              <button
                onClick={() => {
                  setPanel(true);
                  focusFirstButton(() => firstNativeBtnRef.current?.focus(), 0);
                }}
                className={cn(
                  'inline-flex w-fit items-center rounded-lg border border-neutral-200 bg-white px-3 py-1 text-sm font-medium text-dark transition hover:bg-neutral-50',
                  focusRingClasses,
                )}
              >
                {t.settings}
              </button>
            </div>
          </div>
        ) : (
          <div id='cookie-preferences' className='space-y-4'>
            <span id='cookie-panel-title' className='h6'>
              {t.panelTitle}
            </span>
            <p id='cookie-panel-desc' className='sr-only'>
              {t.panelDescription}
            </p>

            <fieldset className='space-y-2'>
              <legend className='sr-only'>{t.categoriesLegend}</legend>

              <div className='flex items-start justify-between gap-4 rounded border border-neutral-200 bg-white px-4 py-2'>
                <div>
                  <span className='text-base font-medium'>{t.essentialTitle}</span>
                  <span className='ml-2 text-sm font-medium text-dark'>
                    {t.essentialDescription}
                  </span>
                </div>
                <span className='rounded-lg bg-primary-light px-3 py-1 text-xs font-semibold text-dark'>
                  {t.essentialStatus}
                </span>
              </div>

              <div className='flex items-start justify-between gap-4 rounded border border-neutral-200 bg-white px-4 py-2'>
                <div>
                  <span className='text-base font-medium'>{t.analyticsTitle}</span>
                  <span className='ml-2 text-sm font-medium text-dark'>
                    {t.analyticsDescription}
                  </span>
                </div>
                <div className={cn('w-[24px]', flexCenterClasses)}>
                  <InputCheckboxWithLabel
                    aria-label={t.analyticsLabel}
                    checked={analyticsChoice}
                    onChange={() => setAnalyticsChoice(v => !v)}
                    id={''}
                    label={''}
                  />
                </div>
              </div>

              <div className='flex items-start justify-between gap-4 rounded border border-neutral-200 bg-white px-4 py-2'>
                <div>
                  <span className='text-base font-medium'>{t.adsTitle}</span>
                  <span className='ml-2 text-sm font-medium text-dark'>{t.adsDescription}</span>
                </div>
                <div className={cn('w-[24px]', flexCenterClasses)}>
                  <InputCheckboxWithLabel
                    aria-label={t.adsLabel}
                    checked={adsChoice}
                    onChange={() => setAdsChoice(v => !v)}
                    id={''}
                    label={''}
                  />
                </div>
              </div>
            </fieldset>

            <div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
              <span className='text-sm font-medium text-dark'>{t.changeDecision}</span>

              <div className='flex gap-2'>
                <button
                  onClick={() => saveAndClose({ analytics: false, ads: false })}
                  className={cn(
                    'inline-flex w-fit items-center rounded-lg border border-primary-light bg-white px-3 py-1 text-sm font-medium text-dark shadow transition hover:-translate-y-0.5 hover:shadow-lg',
                    focusRingClasses,
                  )}
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
                  size='small'
                  variant='accent'
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
