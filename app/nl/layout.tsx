import LocaleLayout from '@/components/templates/LocaleLayout';
import RootLayout from '@/components/templates/RootLayout';
import { baseMetadata } from '@/lib/seo/sharedMetadata';

export const metadata = baseMetadata;

export default function NlLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout lang='nl'>
      <LocaleLayout locale='nl'>{children}</LocaleLayout>
    </RootLayout>
  );
}
