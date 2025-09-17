import { Metadata } from 'next';

const metadataMap: MetadataMap = {
  contact: {
    pl: {
      title: 'Kontakt - wycena strony, sklepu, brandingu | Arteon',
      description: 'Skontaktuj się z Arteon i opisz swój projekt strony, sklepu lub bloga. Szybko przygotujemy ofertę i plan działania dopasowany do Twoich potrzeb.',
      keywords: [
        'reklamy online',
        'nowa strona firmowa',
        'branding i design',
        'seo i reklama',
        'projekt graficzny',
      ],
    },
    en: {
      title: 'Contact | Arteon',
      description: 'Get in touch with Arteon and describe your website, store, or blog project. We’ll quickly prepare a tailored offer and action plan to meet your needs.',
      keywords: [
        'contact Arteon',
      ],
    },
  },

  home: {
    pl: {
      title: 'Strony, sklepy, branding i marketing | Arteon',
      description: 'Projektujemy responsywne strony internetowe, silne identyfikacje wizualne, angażujące treści oraz skuteczne kampanie marketingowe.',
      keywords: [
        'strony internetowe',
        'sklepu internetowe',
        'blogi internetowe',
        'grafika komputerowa',
        'identyfikacja wizualna',
        'tworzenie treści',
        'marketing',
      ],
    },
    en: {
      title: 'Websites, branding, marketing | Arteon',
      description: 'Arteon is a creative design studio. We design responsive websites, strong visual identities, engaging content, and effective marketing campaigns.',
      keywords: [
        'website design',
      ],
    },
  },

  projects: {
    pl: {
      title: 'Portfolio - strony, sklepy, grafika i marketing | Arteon',
      description: 'Zobacz wybrane Realizacje Arteon: strony internetowe, sklepy, blogi, grafiki i kampanie marketingowe. Tworzymy skuteczne i estetyczne rozwiązania dopasowane do potrzeb klientów.',
      keywords: [
        'realizacje stron internetowych',
        'Realizacje sklepów internetowych',
        'Realizacje blogów',
        'Realizacje graficzne',
      ],
    },
    en: {
      title: 'Projects | Arteon',
      description: 'See selected Arteon projects: websites, stores, blogs, graphics, and marketing campaigns. We create effective and aesthetic solutions tailored to clients’ needs.',
      keywords: [
        'Arteon projects',
      ],
    },
  },

  offer: {
    pl: {
      title: 'Usługi - strony, sklepy, branding i marketing | Arteon',
      description: 'Poznaj pełną ofertę Arteon: tworzenie stron, sklepów, blogów, projektowanie graficzne, content marketing, kampanie reklamowe i kompleksowy branding.',
      keywords: [
        'tworzenie stron internetowych',
        'tworzenie sklepów internetowych',
        'tworzenie blogów internetowych',
        'grafika komputerowa',
        'reklamy Google Ads',
        'social media marketing',
      ],
    },
    en: {
      title: 'Offer | Arteon',
      description: 'Discover the full Arteon offer: website and online store creation, graphic design, content marketing, advertising campaigns, and comprehensive branding.',
      keywords: [
        'Arteon offer',
      ],
    },
  },

  websites: {
    pl: {
      title: 'Strony internetowe - WordPress, Webflow, Next.js | Arteon',
      description: 'Tworzymy nowoczesne, szybkie i responsywne strony internetowe dopasowane do Twoich potrzeb. Arteon to połączenie estetyki, funkcjonalności i skuteczności',
      keywords: [
        'strony internetowe',
        'tworzenie stron internetowych',
        'projektowanie stron www',
        'nowoczesne strony internetowe',
        'responsywna strona internetowa',
      ],
    },
    en: {
      title: 'Websites | Arteon',
      description: 'We create modern, fast, and responsive websites tailored to your needs. Arteon combines aesthetics, functionality, and effectiveness.',
      keywords: [
        'Arteon websites',
      ],
    },
  },

  ecommerce: {
    pl: {
      title: 'Sklepy internetowe - WooCommerce, Webflow, Next.js | Arteon',
      description: 'Projektujemy funkcjonalne i atrakcyjne sklepy internetowe, które zwiększają sprzedaż i ułatwiają zarządzanie. Arteon - Twój partner w e-commerce.',
      keywords: [
        'sklepy internetowe Arteon',
        'sklepy internetowe',
        'tworzenie sklepów online',
        'projektowanie sklepów internetowych',
      ],
    },
    en: {
      title: 'Online Stores | Arteon',
      description: 'We design functional and attractive online stores that increase sales and simplify management. Arteon - your partner in e-commerce.',
      keywords: [
        'Arteon online stores',
      ],
    },
  },

  marketing: {
    pl: {
      title: 'Marketing internetowy - SEO, Google Ads, social media | Arteon',
      description:
        'Skuteczne strategie marketingu internetowego i reklamy online, które zwiększają widoczność Twojej marki i generują więcej klientów. Kompleksowa obsługa SEO, Google Ads, social media i więcej.',
      keywords: [
        'marketing internetowy',
        'reklama online',
        'pozycjonowanie stron internetowych',
        'marketing w social media',
        'strategia marketingowa online',
      ],
    },
    en: {
      title: 'Online Marketing | Arteon',
      description: 'Effective online marketing strategies and advertising that increase your brand visibility and bring in more clients. Full-service SEO, Google Ads, social media and more.',
      keywords: [
        'Arteon online marketing',
      ],
    },
  },

  design: {
    pl: {
      title: 'Grafika i branding - logo, identyfikacja wizualna | Arteon',
      description:
        'Profesjonalne usługi grafiki komputerowej online i offline: projektowanie logo, identyfikacji wizualnej, materiałów reklamowych oraz grafik na potrzeby stron i mediów społecznościowych.',
      keywords: [
        'grafika komputerowa',
        'projektowanie logo',
        'grafika na strony internetowe',
        'drukowane materiały reklamowe',
      ],
    },
    en: {
      title: 'Graphic Design | Arteon',
      description: 'Professional online and offline graphic design services: logo design, visual identity, advertising materials, and graphics for websites and social media.',
      keywords: [
        'Arteon graphic design',
      ],
    },
  },

  content: {
    pl: {
      title: 'Tworzenie treści - strony, blogi, e-commerce | Arteon',
      description: 'Tworzenie treści dla stron internetowych, sklepów, blogów i mediów społecznościowych. Skuteczny content, który angażuje, sprzedaje i wzmacnia Twoją markę online.',
      keywords: [
        'content marketing',
        'teksty na stronę internetową',
        'copywriting SEO',
        'treści do social mediów',
        'pisanie tekstów sprzedażowych',
      ],
    },
    en: {
      title: 'Content Creation | Arteon',
      description: 'Content creation for websites, online stores, blogs, and social media. Effective content that engages, sells, and strengthens your brand online.',
      keywords: [
        'Arteon content creation',
      ],
    },
  },

  blog: {
    pl: {
      title: 'Blogi internetowe - projekt i wdrożenie | Arteon',
      description: 'Tworzymy funkcjonalne i estetyczne blogi internetowe, które przyciągają czytelników i wspierają Twoją markę. Profesjonalna budowa bloga dostosowana do Twoich potrzeb.',
      keywords: [
        'blogi internetowe',
        'tworzenie blogów',
        'projektowanie blogów internetowych',
        'blog SEO',
        'blog dla marki osobistej',
      ],
    },
    en: {
      title: 'Online Blogs | Arteon',
      description: 'We create functional and aesthetic online blogs that attract readers and support your brand. Professional blog development tailored to your needs.',
      keywords: [
        'Arteon online blogs',
      ],
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
