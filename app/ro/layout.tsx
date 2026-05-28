import LocaleLayout from '@/components/templates/LocaleLayout';
import RootLayout from '@/components/templates/RootLayout';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function RoLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout lang='ro'>
      <LocaleLayout locale='ro'>{children}</LocaleLayout>
    </RootLayout>
  );
}
