import LocaleLayout from '@/components/templates/LocaleLayout';
import RootLayout from '@/components/templates/RootLayout';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function SvLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout lang='sv'>
      <LocaleLayout locale='sv'>{children}</LocaleLayout>
    </RootLayout>
  );
}
