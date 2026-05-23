import AboutPageContent from '@/components/pages/AboutPageContent';
import { getAboutPageData, getAboutAlternates } from '@/lib/i18n/pages/about';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'es' as const;
const data = getAboutPageData(LOCALE)!;
const alternates = getAboutAlternates(LOCALE);

export const metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
  alternates,
  openGraph: {
    title: data.metadata.title,
    description: data.metadata.description,
    url: toAbsoluteUrl('/es/sobre-nosotros'),
    type: 'website',
    images: [
      { url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 },
    ],
  },
};

export default function SobreNosotrosPage() {
  return <AboutPageContent locale={LOCALE} />;
}
