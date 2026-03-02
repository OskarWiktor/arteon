import LocaleLayout from '@/components/shared/LocaleLayout';
import RootHtml from '@/components/shared/RootHtml';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang="de">
      <LocaleLayout locale="de">{children}</LocaleLayout>
    </RootHtml>
  );
}
