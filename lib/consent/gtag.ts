export interface ConsentUpdate {
  analytics: boolean;
  ads: boolean;
}

export function updateGtagConsent({ analytics, ads }: ConsentUpdate) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;

  window.gtag('consent', 'update', {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: ads ? 'granted' : 'denied',
    ad_user_data: ads ? 'granted' : 'denied',
    ad_personalization: ads ? 'granted' : 'denied',
  });
}
