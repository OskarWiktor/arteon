import LocaleLayout from '@/components/templates/LocaleLayout';
import RootHtml from '@/components/templates/RootHtml';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function ItLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang='it'>
      <LocaleLayout locale='it'>{children}</LocaleLayout>
    </RootHtml>
  );
}
