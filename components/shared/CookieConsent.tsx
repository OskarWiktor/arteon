'use client';

import { useEffect, useRef, useState } from 'react';
import Button from '../ui/buttons/Button';
import { loadAhrefs } from '@/lib/consent/ahrefs';
import { loadGA } from '@/lib/consent/ga';
import { updateGtagConsent } from '@/lib/consent/gtag';
import { readConsent, writeConsent } from '@/lib/consent/consentCookie';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useRestoreFocus } from '@/hooks/useRestoreFocus';
import { useTimeout } from '@/hooks/useTimeout';

const ui = {
  pl: {
    title: 'Pliki cookie i prywatność',
    description: 'Używamy technologii niezbędnych do działania serwisu, <strong>analityki</strong> do ulepszania strony oraz <strong>reklam</strong>. Włączymy je wyłącznie po Twojej zgodzie.',
    setPreferences: 'Ustaw preferencje',
    privacyPolicy: 'Polityka prywatności',
    privacyPolicyHref: '/polityka-prywatnosci',
    reject: 'Odrzuć wszystkie',
    settings: 'Ustawienia',
    accept: 'Akceptuj wszystkie',
    panelTitle: 'Preferencje prywatności',
    panelDescription: 'Ustawienia zgód na przetwarzanie danych.',
    categoriesLegend: 'Kategorie',
    essentialTitle: 'Niezbędne',
    essentialDescription: 'Bez nich serwis nie działa. Nie zbierają danych do marketingu.',
    essentialStatus: 'Zawsze aktywne',
    analyticsTitle: 'Analityka (GA4)',
    analyticsDescription: 'Statystyki odwiedzin. Włącza Google Analytics 4 po Twojej zgodzie.',
    analyticsLabel: 'Włącz analitykę GA4',
    adsTitle: 'Reklamy (Google AdSense)',
    adsDescription: 'Personalizowane reklamy na podstawie Twoich zainteresowań.',
    adsLabel: 'Włącz personalizowane reklamy',
    changeDecision: 'W każdej chwili możesz zmienić decyzję',
    save: 'Zapisz',
  },
  en: {
    title: 'Cookies and privacy',
    description: 'We use technologies essential for the site to work, <strong>analytics</strong> to improve the site, and <strong>ads</strong>. We will only enable them with your consent.',
    setPreferences: 'Set preferences',
    privacyPolicy: 'Privacy Policy',
    privacyPolicyHref: '/en/privacy-policy',
    reject: 'Reject all',
    settings: 'Settings',
    accept: 'Accept all',
    panelTitle: 'Privacy preferences',
    panelDescription: 'Data processing consent settings.',
    categoriesLegend: 'Categories',
    essentialTitle: 'Essential',
    essentialDescription: 'The site cannot function without these. They do not collect marketing data.',
    essentialStatus: 'Always active',
    analyticsTitle: 'Analytics (GA4)',
    analyticsDescription: 'Visit statistics. Enables Google Analytics 4 with your consent.',
    analyticsLabel: 'Enable GA4 analytics',
    adsTitle: 'Ads (Google AdSense)',
    adsDescription: 'Personalized ads based on your interests.',
    adsLabel: 'Enable personalized ads',
    changeDecision: 'You can change your decision at any time',
    save: 'Save',
  },
  de: {
    title: 'Cookies und Datenschutz',
    description: 'Wir verwenden Technologien, die für den Betrieb der Website erforderlich sind, <strong>Analysen</strong> zur Verbesserung der Website und <strong>Werbung</strong>. Wir aktivieren sie nur mit Ihrer Zustimmung.',
    setPreferences: 'Einstellungen anpassen',
    privacyPolicy: 'Datenschutzrichtlinie',
    privacyPolicyHref: '/de/datenschutzrichtlinie',
    reject: 'Alle ablehnen',
    settings: 'Einstellungen',
    accept: 'Alle akzeptieren',
    panelTitle: 'Datenschutzeinstellungen',
    panelDescription: 'Einstellungen zur Datenverarbeitung.',
    categoriesLegend: 'Kategorien',
    essentialTitle: 'Erforderlich',
    essentialDescription: 'Ohne diese funktioniert die Website nicht. Sie sammeln keine Marketingdaten.',
    essentialStatus: 'Immer aktiv',
    analyticsTitle: 'Analyse (GA4)',
    analyticsDescription: 'Besuchsstatistiken. Aktiviert Google Analytics 4 mit Ihrer Zustimmung.',
    analyticsLabel: 'GA4-Analyse aktivieren',
    adsTitle: 'Werbung (Google AdSense)',
    adsDescription: 'Personalisierte Werbung basierend auf Ihren Interessen.',
    adsLabel: 'Personalisierte Werbung aktivieren',
    changeDecision: 'Sie können Ihre Entscheidung jederzeit ändern',
    save: 'Speichern',
  },
  es: {
    title: 'Cookies y privacidad',
    description: 'Utilizamos tecnologías esenciales para el funcionamiento del sitio, <strong>análisis</strong> para mejorar la web y <strong>publicidad</strong>. Solo las activaremos con su consentimiento.',
    setPreferences: 'Configurar preferencias',
    privacyPolicy: 'Política de privacidad',
    privacyPolicyHref: '/es/politica-de-privacidad',
    reject: 'Rechazar todo',
    settings: 'Configuración',
    accept: 'Aceptar todo',
    panelTitle: 'Preferencias de privacidad',
    panelDescription: 'Configuración de consentimiento de procesamiento de datos.',
    categoriesLegend: 'Categorías',
    essentialTitle: 'Esenciales',
    essentialDescription: 'Sin ellas el sitio no funciona. No recopilan datos de marketing.',
    essentialStatus: 'Siempre activas',
    analyticsTitle: 'Análisis (GA4)',
    analyticsDescription: 'Estadísticas de visitas. Activa Google Analytics 4 con su consentimiento.',
    analyticsLabel: 'Activar análisis GA4',
    adsTitle: 'Publicidad (Google AdSense)',
    adsDescription: 'Publicidad personalizada según sus intereses.',
    adsLabel: 'Activar publicidad personalizada',
    changeDecision: 'Puede cambiar su decisión en cualquier momento',
    save: 'Guardar',
  },
  fr: {
    title: 'Cookies et confidentialité',
    description: "Nous utilisons des technologies essentielles au fonctionnement du site, des <strong>analyses</strong> pour améliorer le site et de la <strong>publicité</strong>. Nous ne les activerons qu'avec votre consentement.",
    setPreferences: 'Définir les préférences',
    privacyPolicy: 'Politique de confidentialité',
    privacyPolicyHref: '/fr/politique-de-confidentialite',
    reject: 'Tout refuser',
    settings: 'Paramètres',
    accept: 'Tout accepter',
    panelTitle: 'Préférences de confidentialité',
    panelDescription: 'Paramètres de consentement au traitement des données.',
    categoriesLegend: 'Catégories',
    essentialTitle: 'Essentiels',
    essentialDescription: 'Le site ne fonctionne pas sans eux. Ils ne collectent pas de données marketing.',
    essentialStatus: 'Toujours actifs',
    analyticsTitle: 'Analyse (GA4)',
    analyticsDescription: 'Statistiques de visites. Active Google Analytics 4 avec votre consentement.',
    analyticsLabel: 'Activer l\'analyse GA4',
    adsTitle: 'Publicité (Google AdSense)',
    adsDescription: 'Publicité personnalisée selon vos centres d\'intérêt.',
    adsLabel: 'Activer la publicité personnalisée',
    changeDecision: 'Vous pouvez modifier votre choix à tout moment',
    save: 'Enregistrer',
  },
} as const;

function updateGtag(analytics: boolean, ads: boolean) {
  updateGtagConsent({ analytics, ads });
}

type ConsentLocale = keyof typeof ui;

export default function CookieConsent({ locale = 'pl' }: { locale?: string }) {
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
    saveAndClose({ analytics: false, ads: false });
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
    }

    setVisible(false);
    setPanel(false);
  }

  if (!visible) return null;
  const resolvedLocale: ConsentLocale = locale in ui ? (locale as ConsentLocale) : 'en';
  const t = ui[resolvedLocale];
  const titleId = panel ? 'cookie-panel-title' : 'cookie-title';
  const descId = panel ? 'cookie-panel-desc' : 'cookie-desc';

  return (
    <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={descId} className="fixed inset-x-0 bottom-0 z-[70] bg-transparent">
      <div className="text-dark mx-auto mb-4 w-[min(92vw,1280px)] rounded bg-white p-5 shadow-xl ring-1 ring-black/5">
        {!panel ? (
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <span id="cookie-title" className="h6">
                {t.title}
              </span>
              <p id="cookie-desc" className="text-dark text-sm">
                <span dangerouslySetInnerHTML={{ __html: t.description }} />
                <span className="ml-1">
                  <button
                    className="text-dark underline underline-offset-2"
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
                  <a className="text-dark underline underline-offset-2" href={t.privacyPolicyHref} rel="noopener">
                    {t.privacyPolicy}
                  </a>
                </span>
              </p>
            </div>

            <div className="flex gap-2">
              <button
                ref={firstNativeBtnRef}
                onClick={() => saveAndClose({ analytics: false, ads: false })}
                className="text-dark border-primary-light focus-visible:ring-primary inline-flex w-fit items-center rounded-2xl border bg-white px-3 py-1 text-base font-medium shadow-md transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2"
              >
                {t.reject}
              </button>

              <Button size="small" onClick={() => setPanel(true)}>
                {t.settings}
              </Button>
              <Button onClick={() => saveAndClose({ analytics: true, ads: true })} size="small" variant="accent">
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
