import LocaleLayout from '@/components/templates/LocaleLayout';
import RootLayout from '@/components/templates/RootLayout';
import { baseMetadata } from '@/lib/seo/sharedMetadata';

export const metadata = baseMetadata;

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout lang='es'>
      <LocaleLayout locale='es'>{children}</LocaleLayout>
    </RootLayout>
  );
}
