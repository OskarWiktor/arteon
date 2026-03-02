import LocaleLayout from '@/components/shared/LocaleLayout';
import RootHtml from '@/components/shared/RootHtml';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function HuLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang="hu">
      <LocaleLayout locale="hu">{children}</LocaleLayout>
    </RootHtml>
  );
}
