'use client';

import { useEffect } from 'react';
import { loadAhrefs } from '@/lib/consent/ahrefs';

const METRICOOL_HASH = process.env.NEXT_PUBLIC_METRICOOL_HASH;

function loadMetricool() {
  if (!METRICOOL_HASH) return;
  if (typeof document === 'undefined') return;
  if (document.getElementById('metricool-tracker-script')) return;

  const loader = document.createElement('script');
  loader.id = 'metricool-tracker-script';
  loader.async = true;
  loader.src = 'https://tracker.metricool.com/resources/be.js';
  loader.onload = () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).beTracker?.t({ hash: METRICOOL_HASH });
    } catch {
      /* silent */
    }
  };
  document.head.appendChild(loader);
}

/**
 * Checks if analytics consent allows loading third-party scripts.
 * Returns true when analytics_storage is granted, not applicable, or not configured.
 * Uses googlefc.ConsentModePurposeStatusEnum values (numeric enums).
 *
 * @see https://developers.google.com/funding-choices/fc-api-docs
 */
function isAnalyticsAllowed(fc: any): boolean {
  try {
    const cm = fc.getGoogleConsentModeValues?.();
    if (!cm) return true; // API not available - rest of world, defaults granted

    const status = cm.analyticsStoragePurposeConsentStatus;
    const StatusEnum = fc.ConsentModePurposeStatusEnum;

    if (!StatusEnum) return true; // Enum not loaded - safe fallback

    // Allow: GRANTED, NOT_APPLICABLE (region not regulated), NOT_CONFIGURED (not set up in P&M UI)
    return (
      status === StatusEnum.CONSENT_MODE_PURPOSE_STATUS_GRANTED || status === StatusEnum.CONSENT_MODE_PURPOSE_STATUS_NOT_APPLICABLE || status === StatusEnum.CONSENT_MODE_PURPOSE_STATUS_NOT_CONFIGURED
    );
  } catch {
    return true; // Error - safe fallback (defaults are granted for non-regulated regions)
  }
}

/**
 * Listens for Google CMP (Privacy & Messaging) consent decisions
 * and loads third-party analytics scripts when analytics_storage is granted.
 *
 * GA4 is loaded unconditionally in Advanced Consent Mode (see RootHtml.tsx)
 * and respects Consent Mode natively - no manual handling needed.
 *
 * Ahrefs and Metricool are NOT Consent-Mode-aware, so we load them
 * only after the user grants analytics consent (or if consent is
 * not required for their region).
 *
 * @see https://developers.google.com/funding-choices/fc-api-docs
 */
export default function ConsentListener() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fc = (window as any).googlefc;
    if (!fc) return;

    fc.callbackQueue = fc.callbackQueue || [];

    let loaded = false;
    const loadIfAllowed = () => {
      if (loaded) return;
      if (isAnalyticsAllowed(fc)) {
        loaded = true;
        loadAhrefs();
        loadMetricool();
      }
    };

    // CONSENT_MODE_DATA_READY fires when:
    // - consent mode doesn't apply (non-regulated region)
    // - user makes a consent decision (new user)
    // - stored consent is loaded (returning user)
    fc.callbackQueue.push({
      CONSENT_MODE_DATA_READY: loadIfAllowed,
    });

    // Fallback: if CMP is not yet configured in AdSense dashboard,
    // CONSENT_MODE_DATA_READY may not fire. Load scripts after timeout
    // since consent defaults are granted for non-regulated regions.
    const fallbackTimer = setTimeout(() => {
      if (!loaded && typeof window.gtag === 'function') {
        loaded = true;
        loadAhrefs();
        loadMetricool();
      }
    }, 3000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  return null;
}
