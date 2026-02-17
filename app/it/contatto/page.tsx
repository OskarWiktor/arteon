import ContactPageContent from '@/components/pages/ContactPageContent';
import { getContactPageData, getContactAlternates } from '@/lib/i18n/pages/contact';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'it' as const;
const data = getContactPageData(LOCALE)!;
const alternates = getContactAlternates(LOCALE);

export const metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
  alternates,
  openGraph: {
    title: data.metadata.title,
    description: data.metadata.description,
    url: toAbsoluteUrl('/it/contatto'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

export default function ContattoPage() {
  return <ContactPageContent locale={LOCALE} />;
}
