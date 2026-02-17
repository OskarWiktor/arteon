import Footer from '@/components/shared/Footer';
import Navigation from '@/components/shared/Navigation';
import { LocaleProvider } from '@/lib/LocaleContext';
import { getClientDictionary, getLocaleConfigFor } from '@/lib/i18n/client-dictionary';
import type { Locale } from '@/types/locale';

interface LocaleLayoutProps {
  locale: Locale;
  children: React.ReactNode;
}

export default async function LocaleLayout({ locale, children }: LocaleLayoutProps) {
  const [dict, config] = await Promise.all([getClientDictionary(locale), Promise.resolve(getLocaleConfigFor(locale))]);

  return (
    <LocaleProvider value={locale} config={config} dict={dict}>
      <Navigation />

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <Footer />
    </LocaleProvider>
  );
}
