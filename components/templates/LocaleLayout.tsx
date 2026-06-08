import SkipToContent from '@/components/atoms/SkipToContent';
import Footer from '@/components/organisms/Footer';
import NavigationShell from '@/components/organisms/navigation/NavigationShell';
import {
  getClientDictionary,
  getLocaleConfigFor,
} from '@/lib/i18n/clientDictionary';
import { getDictionary } from '@/lib/i18n/getDictionary';
import { LocaleProvider } from '@/lib/LocaleContext';
import type { Locale } from '@/types/locale';

interface LocaleLayoutProps {
  locale: Locale;
  children: React.ReactNode;
}

export default async function LocaleLayout({
  locale,
  children,
}: LocaleLayoutProps) {
  const [clientDict, config, fullDict] = await Promise.all([
    getClientDictionary(locale),
    Promise.resolve(getLocaleConfigFor(locale)),
    getDictionary(locale),
  ]);

  return (
    <LocaleProvider value={locale} config={config} dict={clientDict}>
      <SkipToContent label={fullDict.skipToContent} />

      <NavigationShell />

      <main id='main-content' tabIndex={-1}>
        {children}
      </main>

      <Footer
        locale={locale}
        footerUi={clientDict.footer}
        legalLinks={clientDict.legal}
        toolsIndexHref={config.toolsIndexHref}
      />
    </LocaleProvider>
  );
}
