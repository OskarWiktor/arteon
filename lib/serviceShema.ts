// lib/schema.ts
export function buildServiceSchema(params: {
  baseUrl: string;        // np. https://www.arteonagency.pl
  path: string;           // np. /uslugi/marketing/audyt-seo
  serviceName: string;    // np. "Audyt SEO"
  description: string;    // krótki opis usługi
  availableLanguages?: string[];
  includeServiceChannel?: boolean;
}) {
  const {
    baseUrl,
    path,
    serviceName,
    description,
    availableLanguages = ['pl'],
    includeServiceChannel = true,
  } = params;

  const url = `${baseUrl}${path}`;

  const json: any = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    serviceType: [serviceName],
    url,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Arteon',
      url: baseUrl,
      sameAs: [baseUrl],
    },
    areaServed: 'Worldwide',
    availableLanguage: availableLanguages,
    offers: [
      { '@type': 'Offer', priceCurrency: 'PLN', url },
      { '@type': 'Offer', priceCurrency: 'EUR', url },
      { '@type': 'Offer', priceCurrency: 'GBP', url },
      { '@type': 'Offer', priceCurrency: 'USD', url },
    ],
  };

  if (includeServiceChannel) {
    json.availableChannel = {
      '@type': 'ServiceChannel',
      serviceUrl: `${baseUrl}/kontakt`,
      availableLanguage: availableLanguages,
      description:
        'Usługa świadczona zdalnie dla klientów polskojęzycznych na całym świecie.',
    };
  }

  return json;
}
