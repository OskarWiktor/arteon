import LocaleLayout from '@/components/templates/LocaleLayout';
import RootLayout from '@/components/templates/RootLayout';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function FiLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout lang='fi'>
      <LocaleLayout locale='fi'>{children}</LocaleLayout>
    </RootLayout>
  );
}
