import { headers } from 'next/headers';
import Button from '@/components/ui/buttons/Button';
import { detectLocaleFromPath } from '@/lib/i18n/detect-locale';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { LOCALE_CONFIG } from '@/lib/i18n/locale-config';

export default async function NotFound() {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/';
  const locale = detectLocaleFromPath(pathname);
  const dict = await getDictionary(locale);
  const t = dict.errorPages.notFound;
  const homeHref = locale === 'pl' ? '/' : `/${locale}`;
  const lang = LOCALE_CONFIG[locale].lang;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center" lang={lang}>
      <h1 className="mb-4">{t.title}</h1>
      <p className="text-light mb-2 text-6xl font-bold">{t.code}</p>
      <p className="mb-8 max-w-md text-lg leading-relaxed">{t.description}</p>
      <Button link={homeHref} variant="accent">
        {t.backHome}
      </Button>
    </div>
  );
}
