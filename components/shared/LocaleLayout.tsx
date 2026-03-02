import Footer from '@/components/shared/Footer';
import LazyCookieConsent from '@/components/shared/LazyCookieConsent';
import Navigation from '@/components/shared/Navigation';
import SkipToContent from '@/components/shared/SkipToContent';
import { LocaleProvider } from '@/lib/LocaleContext';
import { getClientDictionary, getLocaleConfigFor } from '@/lib/i18n/client-dictionary';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import type { Locale } from '@/types/locale';

interface LocaleLayoutProps {
  locale: Locale;
  children: React.ReactNode;
}

export default async function LocaleLayout({ locale, children }: LocaleLayoutProps) {
  const [clientDict, config, fullDict] = await Promise.all([getClientDictionary(locale), Promise.resolve(getLocaleConfigFor(locale)), getDictionary(locale)]);

  return (
    <LocaleProvider value={locale} config={config} dict={clientDict}>
      <LazyCookieConsent translations={fullDict.cookie} />
      <SkipToContent label={fullDict.skipToContent} />

      <Navigation />

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <Footer />
    </LocaleProvider>
  );
}
