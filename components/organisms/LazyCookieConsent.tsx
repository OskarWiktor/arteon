'use client';

import dynamic from 'next/dynamic';
import type { CookieConsentTranslations } from './CookieConsent';

const CookieConsent = dynamic(() => import('./CookieConsent'), { ssr: false });

export default function LazyCookieConsent({
  translations,
}: {
  translations: CookieConsentTranslations;
}) {
  return <CookieConsent translations={translations} />;
}
