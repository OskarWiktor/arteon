import LocaleLayout from '@/components/shared/LocaleLayout';
import RootHtml from '@/components/shared/RootHtml';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function DaLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang="da">
      <LocaleLayout locale="da">{children}</LocaleLayout>
    </RootHtml>
  );
}
