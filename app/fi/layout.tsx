import LocaleLayout from '@/components/shared/LocaleLayout';
import RootHtml from '@/components/shared/RootHtml';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function FiLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang="fi">
      <LocaleLayout locale="fi">{children}</LocaleLayout>
    </RootHtml>
  );
}
