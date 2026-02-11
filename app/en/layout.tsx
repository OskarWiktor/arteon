import FooterEN from '@/components/shared/FooterEN';
import NavigationEN from '@/components/shared/NavigationEN';
import { LocaleProvider } from '@/lib/LocaleContext';

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider value="en">
      <NavigationEN />

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <FooterEN />
    </LocaleProvider>
  );
}
