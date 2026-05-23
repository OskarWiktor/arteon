import LocaleLayout from '@/components/pages/LocaleLayout';
import RootHtml from '@/components/pages/RootHtml';
import { baseMetadata } from '@/lib/shared-metadata';

export const metadata = baseMetadata;

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang='en'>
      <LocaleLayout locale='en'>{children}</LocaleLayout>
    </RootHtml>
  );
}
