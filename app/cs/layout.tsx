import LocaleLayout from '@/components/pages/LocaleLayout';
import RootHtml from '@/components/pages/RootHtml';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function CsLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang='cs'>
      <LocaleLayout locale='cs'>{children}</LocaleLayout>
    </RootHtml>
  );
}
