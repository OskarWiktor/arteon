import LocaleLayout from '@/components/pages/LocaleLayout';
import RootHtml from '@/components/pages/RootHtml';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function SvLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang='sv'>
      <LocaleLayout locale='sv'>{children}</LocaleLayout>
    </RootHtml>
  );
}
