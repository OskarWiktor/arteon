import LocaleLayout from '@/components/templates/LocaleLayout';
import RootHtml from '@/components/templates/RootHtml';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang='es'>
      <LocaleLayout locale='es'>{children}</LocaleLayout>
    </RootHtml>
  );
}
