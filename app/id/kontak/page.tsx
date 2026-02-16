import ContactPageContent from '@/components/pages/ContactPageContent';
import { getContactPageData, getContactAlternates } from '@/lib/i18n/pages/contact';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'id' as const;
const data = getContactPageData(LOCALE)!;
const alternates = getContactAlternates(LOCALE);

export const metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
  alternates,
  openGraph: {
    title: data.metadata.title,
    description: data.metadata.description,
    url: toAbsoluteUrl('/id/kontak'),
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactPageContent locale={LOCALE} />;
}
