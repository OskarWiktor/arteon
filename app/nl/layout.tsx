import LocaleLayout from '@/components/pages/LocaleLayout';
import RootHtml from '@/components/pages/RootHtml';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function NlLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang='nl'>
      <LocaleLayout locale='nl'>{children}</LocaleLayout>
    </RootHtml>
  );
}
