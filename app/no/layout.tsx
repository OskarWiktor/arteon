import LocaleLayout from '@/components/shared/LocaleLayout';
import RootHtml from '@/components/shared/RootHtml';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function NoLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang="nb">
      <LocaleLayout locale="no">{children}</LocaleLayout>
    </RootHtml>
  );
}
