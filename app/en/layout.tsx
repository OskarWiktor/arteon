import LocaleLayout from '@/components/templates/LocaleLayout';
import RootLayout from '@/components/templates/RootLayout';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout lang='en'>
      <LocaleLayout locale='en'>{children}</LocaleLayout>
    </RootLayout>
  );
}
