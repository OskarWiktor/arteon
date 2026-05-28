import LocaleLayout from '@/components/templates/LocaleLayout';
import RootLayout from '@/components/templates/RootLayout';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function ElLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout lang='el'>
      <LocaleLayout locale='el'>{children}</LocaleLayout>
    </RootLayout>
  );
}
