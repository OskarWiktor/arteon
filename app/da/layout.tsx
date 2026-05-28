import LocaleLayout from '@/components/templates/LocaleLayout';
import RootLayout from '@/components/templates/RootLayout';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function DaLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout lang='da'>
      <LocaleLayout locale='da'>{children}</LocaleLayout>
    </RootLayout>
  );
}
