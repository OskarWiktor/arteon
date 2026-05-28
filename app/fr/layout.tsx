import LocaleLayout from '@/components/templates/LocaleLayout';
import RootLayout from '@/components/templates/RootLayout';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout lang='fr'>
      <LocaleLayout locale='fr'>{children}</LocaleLayout>
    </RootLayout>
  );
}
