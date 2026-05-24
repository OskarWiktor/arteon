import LocaleLayout from '@/components/templates/LocaleLayout';
import RootHtml from '@/components/templates/RootHtml';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function FiLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang='fi'>
      <LocaleLayout locale='fi'>{children}</LocaleLayout>
    </RootHtml>
  );
}
