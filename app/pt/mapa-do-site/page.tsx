import type { Metadata } from 'next';
import LocaleSitemapPage from '@/components/pages/LocaleSitemapPage';
import {
  LOCALE_SITEMAP_META,
  getLocaleSitemapAlternates,
} from '@/lib/i18n/pages/localeSitemapMeta';

const LOCALE = 'pt' as const;

export const metadata: Metadata = {
  title: `${LOCALE_SITEMAP_META[LOCALE].title} | Arteon`,
  description: LOCALE_SITEMAP_META[LOCALE].description,
  alternates: getLocaleSitemapAlternates(LOCALE),
};

export default function Page() {
  return <LocaleSitemapPage locale={LOCALE} />;
}
