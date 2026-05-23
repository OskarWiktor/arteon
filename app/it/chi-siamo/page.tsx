import AboutPageContent from '@/components/pages/AboutPageContent';
import { getAboutPageData, getAboutAlternates } from '@/lib/i18n/pages/about';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'it' as const;
const data = getAboutPageData(LOCALE)!;
const alternates = getAboutAlternates(LOCALE);

export const metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
  alternates,
  openGraph: {
    title: data.metadata.title,
    description: data.metadata.description,
    url: toAbsoluteUrl('/it/chi-siamo'),
    type: 'website',
    images: [
      { url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 },
    ],
  },
};

export default function ChiSiamoPage() {
  return <AboutPageContent locale={LOCALE} />;
}
