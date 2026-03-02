import LocaleLayout from '@/components/shared/LocaleLayout';
import RootHtml from '@/components/shared/RootHtml';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang="pt">
      <LocaleLayout locale="pt">{children}</LocaleLayout>
    </RootHtml>
  );
}
