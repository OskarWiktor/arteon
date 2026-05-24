import LocaleLayout from '@/components/templates/LocaleLayout';
import RootHtml from '@/components/templates/RootHtml';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function ElLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang='el'>
      <LocaleLayout locale='el'>{children}</LocaleLayout>
    </RootHtml>
  );
}
