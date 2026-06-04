import TermsPage from '@/components/pages/TermsPage';
import { getTermsPageData, getTermsAlternates } from '@/lib/i18n/pages/terms';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'de' as const;
const data = getTermsPageData(LOCALE)!;
const alternates = getTermsAlternates(LOCALE);

export const metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
  alternates,
  openGraph: {
    title: data.metadata.title,
    description: data.metadata.description,
    url: toAbsoluteUrl('/de/nutzungsbedingungen'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'),
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Page() {
  return <TermsPage locale={LOCALE} />;
}
