import LocaleLayout from '@/components/shared/LocaleLayout';
import RootHtml from '@/components/shared/RootHtml';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function ElLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang="el">
      <LocaleLayout locale="el">{children}</LocaleLayout>
    </RootHtml>
  );
}
