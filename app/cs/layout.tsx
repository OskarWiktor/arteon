import LocaleLayout from '@/components/templates/LocaleLayout';
import RootLayout from '@/components/templates/RootLayout';
import { baseMetadata } from '@/lib/seo/sharedMetadata';

export const metadata = baseMetadata;

export default function CsLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout lang='cs'>
      <LocaleLayout locale='cs'>{children}</LocaleLayout>
    </RootLayout>
  );
}
