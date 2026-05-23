import LocaleLayout from '@/components/pages/LocaleLayout';
import RootHtml from '@/components/pages/RootHtml';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function RoLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang='ro'>
      <LocaleLayout locale='ro'>{children}</LocaleLayout>
    </RootHtml>
  );
}
