import LocaleLayout from '@/components/templates/LocaleLayout';
import RootLayout from '@/components/templates/RootLayout';
import { baseMetadata } from '@/lib/seo/sharedMetadata';

export const metadata = baseMetadata;

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout lang='de'>
      <LocaleLayout locale='de'>{children}</LocaleLayout>
    </RootLayout>
  );
}
