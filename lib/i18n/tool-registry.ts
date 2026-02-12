import { RiAppsLine, RiArticleLine, RiContrast2Line, RiCropLine, RiFileTextLine, RiImageEditLine, RiMailLine, RiPaletteLine, RiPantoneLine, RiQrCodeLine, RiSearchLine } from 'react-icons/ri';

import type { Locale } from '@/types/locale';
import type { ToolItemKey, ToolDefinition, ToolsSectionDefinition, ToolSectionItem, ToolsSection } from '@/types/tools/common';
export type { ToolItemKey, ToolsSectionKey, ToolLocaleText, ToolDefinition, ToolsSectionLocaleText, ToolsSectionDefinition, ToolSectionItem, ToolsSection } from '@/types/tools/common';
import { LOCALE_CONFIG } from '@/lib/i18n/locales';

// ---------------------------------------------------------------------------
// Section definitions
// ---------------------------------------------------------------------------
export const TOOL_SECTIONS: ToolsSectionDefinition[] = [
  {
    key: 'obrazy',
    icon: RiImageEditLine,
    locales: {
      pl: { title: 'Obrazy i favicony' },
      en: { title: 'Images & favicons' },
      de: { title: 'Bilder & Favicons' },
    },
  },
  {
    key: 'seo',
    icon: RiSearchLine,
    locales: {
      pl: { title: 'Meta i SEO' },
      en: { title: 'Meta & SEO' },
      de: { title: 'Meta & SEO' },
    },
  },
  {
    key: 'email',
    icon: RiMailLine,
    locales: {
      pl: { title: 'E-mail i komunikacja' },
      en: { title: 'Email & communication' },
      de: { title: 'E-Mail & Kommunikation' },
    },
  },
  {
    key: 'kolory',
    icon: RiPaletteLine,
    locales: {
      pl: { title: 'Kolory i dostępność' },
      en: { title: 'Colors & accessibility' },
      de: { title: 'Farben & Barrierefreiheit' },
    },
  },
  {
    key: 'druk',
    icon: RiQrCodeLine,
    locales: {
      pl: { title: 'Druk i materiały' },
      en: { title: 'Print & materials' },
      de: { title: 'Druck & Materialien' },
    },
  },
];

// ---------------------------------------------------------------------------
// Tool definitions
// ---------------------------------------------------------------------------
export const TOOL_REGISTRY: ToolDefinition[] = [
  {
    key: 'jpgToWebp',
    section: 'obrazy',
    icon: RiImageEditLine,
    image: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
    desktopOnly: true,
    locales: {
      pl: {
        slug: 'jpg-png-na-webp-bez-limitu',
        title: 'Konwerter JPG/PNG na WebP',
        description: 'Zmniejsz wagę zdjęć bez utraty jakości. Konwertuj JPG i PNG do WebP i przyspiesz ładowanie strony.',
      },
      en: {
        slug: 'jpg-png-to-webp-unlimited',
        title: 'JPG/PNG to WebP converter',
        description: 'Reduce image file size without losing quality. Convert JPG and PNG to WebP and speed up your website.',
      },
      de: {
        slug: 'jpg-png-zu-webp-konverter',
        title: 'JPG/PNG-zu-WebP-Konverter',
        description: 'Reduzieren Sie die Dateigröße von Bildern ohne Qualitätsverlust. Konvertieren Sie JPG und PNG in WebP und beschleunigen Sie Ihre Website.',
      },
    },
  },
  {
    key: 'imageResize',
    section: 'obrazy',
    icon: RiCropLine,
    image: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
    desktopOnly: true,
    locales: {
      pl: {
        slug: 'edytor-zdjec-online',
        title: 'Edytor zdjęć online',
        description: 'Przygotuj idealny kadr pod media społecznościowe lub stronę WWW. Wybierz gotowy format lub wpisz własne wymiary.',
      },
      en: {
        slug: 'online-image-editor',
        title: 'Online image editor',
        description: 'Prepare the perfect crop for social media or your website. Choose a ready-made format or enter custom dimensions.',
      },
      de: {
        slug: 'online-bildeditor',
        title: 'Online-Bildeditor',
        description: 'Bereiten Sie den perfekten Zuschnitt für Social Media oder Ihre Website vor. Wählen Sie ein fertiges Format oder geben Sie eigene Maße ein.',
      },
    },
  },
  {
    key: 'favicon',
    section: 'obrazy',
    icon: RiAppsLine,
    image: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
    desktopOnly: true,
    locales: {
      pl: {
        slug: 'darmowy-generator-favicon-ico',
        title: 'Generator favicon',
        description: 'Z jednego obrazu wygeneruj favicon.ico oraz ikony PNG zgodne z wymaganiami przeglądarek i Lighthouse.',
      },
      en: {
        slug: 'free-favicon-generator',
        title: 'Favicon generator',
        description: 'Generate favicon.ico and PNG icons from a single image, compliant with browser and Lighthouse requirements.',
      },
      de: {
        slug: 'kostenloser-favicon-generator',
        title: 'Favicon-Generator',
        description: 'Generieren Sie favicon.ico und PNG-Symbole aus einem einzigen Bild - konform mit Browser- und Lighthouse-Anforderungen.',
      },
    },
  },
  {
    key: 'metaCounter',
    section: 'seo',
    icon: RiFileTextLine,
    image: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'licznik-dlugosci-meta-title-i-description',
        title: 'Licznik meta title i description',
        description: 'Sprawdź liczbę znaków i podgląd wyniku w Google. Uniknij uciętych tytułów i opisów w wynikach wyszukiwania.',
      },
      en: {
        slug: 'meta-title-description-length-checker',
        title: 'Meta title & description checker',
        description: 'Check character count and preview how your page looks in Google. Avoid truncated titles and descriptions in search results.',
      },
      de: {
        slug: 'meta-titel-beschreibung-laengenpruefer',
        title: 'Meta-Titel- & Beschreibungs-Checker',
        description: 'Prüfen Sie die Zeichenanzahl und sehen Sie eine Vorschau Ihrer Seite in Google. Vermeiden Sie abgeschnittene Titel und Beschreibungen in den Suchergebnissen.',
      },
    },
  },
  {
    key: 'wordCounter',
    section: 'seo',
    icon: RiArticleLine,
    image: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'licznik-slow-i-znakow',
        title: 'Licznik słów i znaków',
        description: 'Sprawdź długość tekstu i oceń, czy jest odpowiednia dla strony głównej, opisu usługi, artykułu czy opisu produktu.',
      },
      en: {
        slug: 'word-and-character-counter',
        title: 'Word & character counter',
        description: 'Check text length and evaluate whether it fits a homepage, service page, blog post, or product description.',
      },
      de: {
        slug: 'wort-und-zeichenzaehler',
        title: 'Wort- & Zeichenzähler',
        description: 'Überprüfen Sie die Textlänge und bewerten Sie, ob sie für eine Startseite, Dienstleistungsseite, einen Blogartikel oder eine Produktbeschreibung geeignet ist.',
      },
    },
  },
  {
    key: 'emailSignature',
    section: 'email',
    icon: RiMailLine,
    image: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
    desktopOnly: true,
    locales: {
      pl: {
        slug: 'darmowy-generator-stopki-mailowej',
        title: 'Generator stopki mailowej',
        description: 'Zbuduj profesjonalny podpis e-mail w kilka minut. Skopiuj gotowy kod HTML do Gmaila lub Outlooka.',
      },
      en: {
        slug: 'free-email-signature-generator',
        title: 'Email signature generator',
        description: 'Build a professional email signature in minutes. Copy the ready HTML code into Gmail or Outlook.',
      },
      de: {
        slug: 'kostenloser-e-mail-signatur-generator',
        title: 'E-Mail-Signatur-Generator',
        description: 'Erstellen Sie in wenigen Minuten eine professionelle E-Mail-Signatur. Kopieren Sie den fertigen HTML-Code in Gmail oder Outlook.',
      },
    },
  },
  {
    key: 'contrastChecker',
    section: 'kolory',
    icon: RiContrast2Line,
    image: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'kontrast-i-czytelnosc-kolorow',
        title: 'Kontrast i czytelność kolorów',
        description: 'Sprawdź czy kolory tekstu i tła są czytelne. Narzędzie oblicza kontrast według WCAG i pomoże dobrać odpowiedni kolor.',
      },
      en: {
        slug: 'color-contrast-checker',
        title: 'Color contrast checker',
        description: 'Check if your text and background colors are readable. The tool calculates contrast per WCAG and helps pick the right color.',
      },
      de: {
        slug: 'farbkontrast-checker',
        title: 'Farbkontrast-Checker',
        description: 'Prüfen Sie, ob Ihre Text- und Hintergrundfarben gut lesbar sind. Das Tool berechnet den Kontrast gemäß WCAG und hilft bei der Farbwahl.',
      },
    },
  },
  {
    key: 'paletteExtractor',
    section: 'kolory',
    icon: RiPantoneLine,
    image: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'ekstraktor-kolorow-z-obrazu',
        title: 'Ekstraktor kolorów z obrazu',
        description: 'Wgraj zdjęcie lub logo, a narzędzie wyciągnie dominujące kolory. Skopiuj kody wygenerowanych kolorów jednym kliknięciem.',
      },
      en: {
        slug: 'image-color-extractor',
        title: 'Image color extractor',
        description: 'Upload a photo or logo and the tool will extract dominant colors. Copy generated color codes with a single click.',
      },
      de: {
        slug: 'bild-farbextraktor',
        title: 'Bild-Farbextraktor',
        description: 'Laden Sie ein Foto oder Logo hoch und das Tool extrahiert die dominanten Farben. Kopieren Sie die Farbcodes mit einem Klick.',
      },
    },
  },
  {
    key: 'colorPalette',
    section: 'kolory',
    icon: RiPaletteLine,
    image: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'generator-palet-kolorow',
        title: 'Generator palet kolorów',
        description: 'Wybierz jeden kolor i wygeneruj 9 palet kolorów: monochromatyczną, komplementarną, triadyczną i inne.',
      },
      en: {
        slug: 'color-palette-generator',
        title: 'Color palette generator',
        description: 'Pick one color and generate 9 palettes: monochromatic, complementary, triadic, and more.',
      },
      de: {
        slug: 'farbpaletten-generator',
        title: 'Farbpaletten-Generator',
        description: 'Wählen Sie eine Farbe und generieren Sie 9 Paletten: monochromatisch, komplementär, triadisch und mehr.',
      },
    },
  },
  {
    key: 'qrCode',
    section: 'druk',
    icon: RiQrCodeLine,
    image: '/assets/tools/narzedzia-generator-kodu-qr.webp',
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'darmowy-generator-kodow-qr',
        title: 'Darmowy generator kodów QR',
        description: 'Stwórz kod QR do strony, wizytówki vCard, menu lub ulotki. Eksport PNG i SVG, bez logowania, bez limitu.',
      },
      en: {
        slug: 'free-qr-code-generator',
        title: 'Free QR code generator',
        description: 'Create a QR code for a website, vCard, menu, or flyer. Export to PNG and SVG, no login, no limits.',
      },
      de: {
        slug: 'kostenloser-qr-code-generator',
        title: 'Kostenloser QR-Code-Generator',
        description: 'Erstellen Sie einen QR-Code für eine Website, vCard, Speisekarte oder einen Flyer. Export als PNG und SVG, ohne Anmeldung, ohne Limits.',
      },
    },
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Get the full href for a tool in a given locale, e.g. `/narzedzia/generator-palet-kolorow` */
export function getToolHref(key: ToolItemKey, locale: Locale): string {
  const tool = TOOL_REGISTRY.find((t) => t.key === key);
  if (!tool) return '#';
  const config = LOCALE_CONFIG[locale];
  return `${config.toolsBasePath}/${tool.locales[locale].slug}`;
}

/** Get a tool definition by its key */
export function getToolByKey(key: ToolItemKey): ToolDefinition | undefined {
  return TOOL_REGISTRY.find((t) => t.key === key);
}

/** Find a tool by its slug in any locale, returns the tool + matched locale */
export function findToolBySlug(slug: string): { tool: ToolDefinition; locale: Locale } | null {
  for (const tool of TOOL_REGISTRY) {
    for (const [loc, text] of Object.entries(tool.locales)) {
      if (text.slug === slug) return { tool, locale: loc as Locale };
    }
  }
  return null;
}

/**
 * Given a path and current locale, return the alternate href for a target locale.
 * Works for both tool index and individual tool pages.
 */
export function getAlternateToolHref(currentPath: string, fromLocale: Locale, toLocale: Locale): string | null {
  const fromConfig = LOCALE_CONFIG[fromLocale];
  const toConfig = LOCALE_CONFIG[toLocale];

  // Tool index page
  if (currentPath === fromConfig.toolsIndexHref) {
    return toConfig.toolsIndexHref;
  }

  // Individual tool page - extract slug from path
  const prefix = fromConfig.toolsBasePath + '/';
  if (currentPath.startsWith(prefix)) {
    const slug = currentPath.slice(prefix.length).split('/')[0];
    const found = findToolBySlug(slug);
    if (found) {
      const targetSlug = found.tool.locales[toLocale]?.slug;
      if (targetSlug) return `${toConfig.toolsBasePath}/${targetSlug}`;
    }
  }

  return null;
}

// ---------------------------------------------------------------------------
// Navigation-compatible data structures
// (used by DesktopNavigation, MobileNavigation, Footer, ToolsCarousel)
// ---------------------------------------------------------------------------

/** Build navigation-compatible tool sections for a given locale */
export function getToolsSections(locale: Locale): ToolsSection[] {
  return TOOL_SECTIONS.map((section) => ({
    key: section.key,
    title: section.locales[locale].title,
    icon: section.icon,
    items: TOOL_REGISTRY.filter((t) => t.section === section.key).map((tool) => ({
      key: tool.key,
      href: getToolHref(tool.key, locale),
      title: tool.locales[locale].title,
      description: tool.locales[locale].description,
      image: tool.image,
      icon: tool.icon,
    })),
  }));
}

/** Flat list of all tool items for a given locale (used in Footer, etc.) */
export function getToolsList(locale: Locale): ToolSectionItem[] {
  return TOOL_REGISTRY.map((tool) => ({
    key: tool.key,
    href: getToolHref(tool.key, locale),
    title: tool.locales[locale].title,
    description: tool.locales[locale].description,
    image: tool.image,
    icon: tool.icon,
  }));
}
