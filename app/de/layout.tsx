import LocaleLayout from '@/components/pages/LocaleLayout';
import RootHtml from '@/components/pages/RootHtml';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang='de'>
      <LocaleLayout locale='de'>{children}</LocaleLayout>
    </RootHtml>
  );
}
