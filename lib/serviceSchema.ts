interface ServiceSchema {
  '@context': string;
  '@type': string;
  name: string;
  serviceType: string[];
  url: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
    url: string;
    sameAs: string[];
  };
  areaServed: string;
  availableLanguage: string[];
  offers: Array<{
    '@type': string;
    priceCurrency: string;
    url: string;
  }>;
  availableChannel?: {
    '@type': string;
    serviceUrl: string;
    availableLanguage: string[];
    description: string;
  };
}

export function buildServiceSchema(params: { baseUrl: string; path: string; serviceName: string; description: string; availableLanguages?: string[]; includeServiceChannel?: boolean }) {
  const { baseUrl, path, serviceName, description, availableLanguages = ['pl'], includeServiceChannel = true } = params;

  const url = `${baseUrl}${path}`;

  const json: ServiceSchema = {
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
      description: 'Usługa świadczona zdalnie dla klientów polskojęzycznych na całym świecie.',
    };
  }

  return json;
}
