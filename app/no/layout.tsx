import LocaleLayout from '@/components/templates/LocaleLayout';
import RootLayout from '@/components/templates/RootLayout';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function NoLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout lang='no'>
      <LocaleLayout locale='no'>{children}</LocaleLayout>
    </RootLayout>
  );
}
