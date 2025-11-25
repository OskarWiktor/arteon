// Global type declarations for window extensions

interface Window {
  __GA_ID?: string;
  ArteonConsent?: {
    open: () => void;
  };
  gtag?: (
    command: 'consent',
    action: 'update' | 'default',
    params: {
      analytics_storage?: 'granted' | 'denied';
      ad_user_data?: 'denied';
      ad_personalization?: 'denied';
      ad_storage?: 'denied';
    }
  ) => void;
  dataLayer?: unknown[];
}

