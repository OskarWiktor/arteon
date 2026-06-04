import ButtonLink from '@/components/atoms/buttons/ButtonLink';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { LOCALE_CONFIG } from '@/lib/i18n/locales';
import { flexCenterClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';
import type { Locale } from '@/types/locale';

/**
 * Renders a localized 404 Not Found page for the given locale.
 *
 * @param locale - Locale code used to load translations and determine the back-home link
 * @returns The Not Found page element localized to `locale`
 */
export default async function NotFoundPage({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  const t = dict.errorPages.notFound;
  const href = locale === 'pl' ? '/' : LOCALE_CONFIG[locale].toolsIndexHref;

  return (
    <div className={cn('min-h-screen flex-col px-6 text-center', flexCenterClasses)}>
      <h1 className='mb-4'>{t.title}</h1>
      <p className='mb-2 text-6xl font-bold text-light'>{t.code}</p>
      <p className='mb-8 max-w-md text-lg leading-relaxed'>{t.description}</p>
      <ButtonLink href={href} variant='accent'>
        {t.backHome}
      </ButtonLink>
    </div>
  );
}
