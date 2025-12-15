export function updateGtagConsent(analytics: boolean) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;

  window.gtag('consent', 'update', {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    ad_storage: 'denied',
  });
}
