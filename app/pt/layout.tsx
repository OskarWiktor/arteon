import LocaleLayout from '@/components/templates/LocaleLayout';
import RootHtml from '@/components/templates/RootHtml';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang='pt'>
      <LocaleLayout locale='pt'>{children}</LocaleLayout>
    </RootHtml>
  );
}
