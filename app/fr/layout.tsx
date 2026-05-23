import LocaleLayout from '@/components/pages/LocaleLayout';
import RootHtml from '@/components/pages/RootHtml';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang='fr'>
      <LocaleLayout locale='fr'>{children}</LocaleLayout>
    </RootHtml>
  );
}
