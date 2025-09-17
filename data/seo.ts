import { Metadata } from 'next';

const metadataMap: MetadataMap = {
  home: {
    pl: {
      title: 'Strony, sklepy, branding i marketing | Arteon',
      description: 'Projektujemy responsywne strony internetowe, silne identyfikacje wizualne, angażujące treści oraz skuteczne kampanie marketingowe.',
      keywords: ['strony internetowe', 'sklepu internetowe', 'blogi internetowe', 'grafika komputerowa', 'identyfikacja wizualna', 'tworzenie treści', 'marketing'],
    },
    en: {
      title: 'Websites, branding, marketing | Arteon',
      description: 'Arteon is a creative design studio. We design responsive websites, strong visual identities, engaging content, and effective marketing campaigns.',
      keywords: ['website design'],
    },
  },

  projects: {
    pl: {
      title: 'Portfolio - strony, sklepy, grafika i marketing | Arteon',
      description: 'Zobacz nasze realizacje: strony WWW, sklepy e-commerce, identyfikacje wizualne i kampanie. Projekty, które działają.',
      keywords: ['realizacje stron internetowych', 'Realizacje sklepów internetowych', 'Realizacje blogów', 'Realizacje graficzne'],
    },
    en: {
      title: 'Projects | Arteon',
      description: 'See selected Arteon projects: websites, stores, blogs, graphics, and marketing campaigns. We create effective and aesthetic solutions tailored to clients’ needs.',
      keywords: ['Arteon projects'],
    },
  },

  offer: {
    pl: {
      title: 'Usługi - strony, sklepy, branding i marketing | Arteon',
      description: 'Zobacz nasze realizacje: strony WWW, sklepy e-commerce, identyfikacje wizualne i kampanie. Projekty, które działają.',
      keywords: ['tworzenie stron internetowych', 'tworzenie sklepów internetowych', 'tworzenie blogów internetowych', 'grafika komputerowa', 'reklamy Google Ads', 'social media marketing'],
    },
    en: {
      title: 'Offer | Arteon',
      description: 'Discover the full Arteon offer: website and online store creation, graphic design, content marketing, advertising campaigns, and comprehensive branding.',
      keywords: ['Arteon offer'],
    },
  },

  websites: {
    pl: {
      title: 'Strony internetowe - WordPress, Webflow, Next.js | Arteon',
      description: 'Tworzymy szybkie, dostępne i responsywne strony. WordPress, Webflow i Next.js. SEO i WCAG w standardzie.',
      keywords: ['strony internetowe', 'tworzenie stron internetowych', 'projektowanie stron www', 'nowoczesne strony internetowe', 'responsywna strona internetowa'],
    },
    en: {
      title: 'Websites | Arteon',
      description: 'We create modern, fast, and responsive websites tailored to your needs. Arteon combines aesthetics, functionality, and effectiveness.',
      keywords: ['Arteon websites'],
    },
  },

  onlineStores: {
    pl: {
      title: 'Sklepy internetowe - WooCommerce, Webflow, Next.js | Arteon',
      description: 'Projektujemy funkcjonalne i atrakcyjne sklepy internetowe, które zwiększają sprzedaż i ułatwiają zarządzanie. Arteon - Twój partner w e-commerce.',
      keywords: ['sklepy internetowe Arteon', 'sklepy internetowe', 'tworzenie sklepów online', 'projektowanie sklepów internetowych'],
    },
    en: {
      title: 'Online Stores | Arteon',
      description: 'We design functional and attractive online stores that increase sales and simplify management. Arteon - your partner in e-commerce.',
      keywords: ['Arteon online stores'],
    },
  },

  onlineBlogs: {
    pl: {
      title: 'Blogi internetowe - projekt i wdrożenie | Arteon',
      description: 'Budujemy blogi firmowe i eksperckie. SEO, CMS, UX i szkolenie. Publikuj treści, które przyciągają klientów.',
      keywords: ['blogi internetowe', 'tworzenie blogów', 'projektowanie blogów internetowych', 'blog SEO', 'blog dla marki osobistej'],
    },
    en: {
      title: 'Online Blogs | Arteon',
      description: 'We create functional and aesthetic online blogs that attract readers and support your brand. Professional blog development tailored to your needs.',
      keywords: ['Arteon online blogs'],
    },
  },

  marketing: {
    pl: {
      title: 'Marketing internetowy - SEO, Google Ads, social media | Arteon',
      description: 'Prowadzimy SEO, kampanie Google Ads i social media. Strategia i kreacje, które dają więcej klientów.',
      keywords: ['marketing internetowy', 'reklama online', 'pozycjonowanie stron internetowych', 'marketing w social media', 'strategia marketingowa online'],
    },
    en: {
      title: 'Online Marketing | Arteon',
      description: 'Effective online marketing strategies and advertising that increase your brand visibility and bring in more clients. Full-service SEO, Google Ads, social media and more.',
      keywords: ['Arteon online marketing'],
    },
  },

  design: {
    pl: {
      title: 'Grafika i branding - logo, identyfikacja wizualna | Arteon',
      description: 'Projektujemy logo, system identyfikacji, materiały druk i digital. Spójność i emocja marki od pierwszego kontaktu.',
      keywords: ['grafika komputerowa', 'projektowanie logo', 'grafika na strony internetowe', 'drukowane materiały reklamowe'],
    },
    en: {
      title: 'Graphic Design | Arteon',
      description: 'Professional online and offline graphic design services: logo design, visual identity, advertising materials, and graphics for websites and social media.',
      keywords: ['Arteon graphic design'],
    },
  },

  content: {
    pl: {
      title: 'Tworzenie treści - strony, blogi, e-commerce | Arteon',
      description: 'Pisanie treści pod SEO i sprzedaż. Artykuły, opisy produktów, social media. Język marki dopasowany do odbiorcy.',
      keywords: ['content marketing', 'teksty na stronę internetową', 'copywriting SEO', 'treści do social mediów', 'pisanie tekstów sprzedażowych'],
    },
    en: {
      title: 'Content Creation | Arteon',
      description: 'Content creation for websites, online stores, blogs, and social media. Effective content that engages, sells, and strengthens your brand online.',
      keywords: ['Arteon content creation'],
    },
  },

  contact: {
    pl: {
      title: 'Kontakt - wycena strony, sklepu, brandingu | Arteon',
      description: 'Opisz swój projekt. Przygotujemy darmową wycenę i plan: strony, sklepy, blogi, grafika, marketing.',
      keywords: ['reklamy online', 'nowa strona firmowa', 'branding i design', 'seo i reklama', 'projekt graficzny'],
    },
    en: {
      title: 'Contact | Arteon',
      description: 'Get in touch with Arteon and describe your website, store, or blog project. We’ll quickly prepare a tailored offer and action plan to meet your needs.',
      keywords: ['contact Arteon'],
    },
  },
};

export function getPageMetadata(slug: keyof typeof metadataMap, locale: SupportedLocale): Metadata {
  const page = metadataMap[slug][locale];

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
  };
}

export type SupportedLocale = 'pl' | 'en';

export type SupportedSlug = keyof typeof metadataMap;

export type MetadataContent = {
  title: string;
  description: string;
  keywords?: string[];
};

export type MetadataMap = {
  [slug: string]: {
    [locale in SupportedLocale]: MetadataContent;
  };
};
