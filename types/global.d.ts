// Global type declarations for window extensions

type ConsentValue = 'granted' | 'denied';

interface Window {
  __GA_ID?: string;
  ArteonConsent?: {
    open: () => void;
  };
  gtag?: (
    command: 'consent',
    action: 'update' | 'default',
    params: {
      analytics_storage?: ConsentValue;
      ad_storage?: ConsentValue;
      ad_user_data?: ConsentValue;
      ad_personalization?: ConsentValue;
      wait_for_update?: number;
    },
  ) => void;
  dataLayer?: unknown[];
}
