import LocaleLayout from '@/components/templates/LocaleLayout';
import RootHtml from '@/components/templates/RootHtml';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function NoLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang='no'>
      <LocaleLayout locale='no'>{children}</LocaleLayout>
    </RootHtml>
  );
}
