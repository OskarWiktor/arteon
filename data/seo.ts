// lib/getPageMetadata.ts lub data/seo.ts
import type { Metadata } from 'next';

type SupportedLocale = 'pl' | 'en';

type MetadataContent = {
  title: string;
  description: string;
  keywords?: string[];
};

type MetadataMap = {
  [slug: string]: {
    [locale in SupportedLocale]: MetadataContent;
  };
};

const metadataMap: MetadataMap = {
  calculator: {
    pl: {
      title: 'Kalkulator wycen | Arteon',
      description:
        'Skorzystaj z kalkulatora Arteon i sprawdź koszt stworzenia lub przebudowy strony, sklepu, bloga, grafiki, treści oraz działań marketingowych online.',
      keywords: [
        'kalkulator wycen',
        'wycena projektu',
        'wycena strony internetowej',
        'wycena sklepu internetowego',
        'wycena bloga',
        'koszt rozbudowy strony',
        'koszt przebudowy strony',
        'wycena tworzenia treści',
        'wycena artykułu',
        'copywriting na stronę',
        'wycena reklamy w Google',
        'wycena pozycjonowania SEO',
        'wycena grafik na zamówienie',
        'projekt graficzny wycena',
        'koszt marketingu online',
      ],
    },
    en: {
      title: 'Pricing calculator | Arteon',
      description:
        "Use Arteon's calculator to check the cost of creating or redesigning a website, store, blog, content, or online marketing campaign.",
      keywords: [
        'pricing calculator',
        'project quote',
        'website cost estimate',
        'e-commerce estimate',
        'blog pricing',
        'website redesign cost',
        'content creation pricing',
        'copywriting pricing',
        'Google Ads estimate',
        'SEO estimate',
        'custom graphics pricing',
        'graphic design quote',
        'online marketing cost',
      ],
    },
  },
};

export function getPageMetadata(
  slug: keyof typeof metadataMap,
  locale: SupportedLocale
): Metadata {
  const page = metadataMap[slug][locale];

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
  };
}
