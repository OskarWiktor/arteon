import LocaleLayout from '@/components/shared/LocaleLayout';
import RootHtml from '@/components/shared/RootHtml';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function PlLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang="pl-PL">
      <LocaleLayout locale="pl">{children}</LocaleLayout>
    </RootHtml>
  );
}
