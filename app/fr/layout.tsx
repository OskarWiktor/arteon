import LocaleLayout from '@/components/shared/LocaleLayout';
import RootHtml from '@/components/shared/RootHtml';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang="fr">
      <LocaleLayout locale="fr">{children}</LocaleLayout>
    </RootHtml>
  );
}
