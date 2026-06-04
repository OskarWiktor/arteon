import LocaleLayout from '@/components/templates/LocaleLayout';
import RootLayout from '@/components/templates/RootLayout';
import { baseMetadata } from '@/lib/seo/sharedMetadata';

export const metadata = baseMetadata;

export default function PlLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout lang='pl-PL'>
      <LocaleLayout locale='pl'>{children}</LocaleLayout>
    </RootLayout>
  );
}
