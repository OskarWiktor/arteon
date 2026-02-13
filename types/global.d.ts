// Global type declarations for window extensions

type ConsentValue = 'granted' | 'denied';

interface Window {
  __GA_ID?: string;
  ArteonConsent?: {
    open: () => void;
  };
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
}
