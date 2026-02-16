import AboutPageContent from '@/components/pages/AboutPageContent';
import { getAboutPageData, getAboutAlternates } from '@/lib/i18n/pages/about';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'tl' as const;
const data = getAboutPageData(LOCALE)!;
const alternates = getAboutAlternates(LOCALE);

export const metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
  alternates,
  openGraph: {
    title: data.metadata.title,
    description: data.metadata.description,
    url: toAbsoluteUrl('/tl/tungkol-sa-amin'),
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutPageContent locale={LOCALE} />;
}
