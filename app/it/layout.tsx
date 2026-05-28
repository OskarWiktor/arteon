import LocaleLayout from '@/components/templates/LocaleLayout';
import RootLayout from '@/components/templates/RootLayout';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function ItLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout lang='it'>
      <LocaleLayout locale='it'>{children}</LocaleLayout>
    </RootLayout>
  );
}
