import Footer from '@/components/shared/Footer';
import Navigation from '@/components/shared/Navigation';
import { LocaleProvider } from '@/lib/LocaleContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider value="cs">
      <Navigation />

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <Footer />
    </LocaleProvider>
  );
}
