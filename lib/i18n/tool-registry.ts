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
      es: { title: 'Imágenes y favicons' },
      fr: { title: 'Images et favicons' },
      pt: { title: 'Imagens e favicons' },
    },
  },
  {
    key: 'seo',
    icon: RiSearchLine,
    locales: {
      pl: { title: 'Meta i SEO' },
      en: { title: 'Meta & SEO' },
      de: { title: 'Meta & SEO' },
      es: { title: 'Meta y SEO' },
      fr: { title: 'Méta et SEO' },
      pt: { title: 'Meta e SEO' },
    },
  },
  {
    key: 'email',
    icon: RiMailLine,
    locales: {
      pl: { title: 'E-mail i komunikacja' },
      en: { title: 'Email & communication' },
      de: { title: 'E-Mail & Kommunikation' },
      es: { title: 'Correo electrónico y comunicación' },
      fr: { title: 'E-mail et communication' },
      pt: { title: 'E-mail e comunicação' },
    },
  },
  {
    key: 'kolory',
    icon: RiPaletteLine,
    locales: {
      pl: { title: 'Kolory i dostępność' },
      en: { title: 'Colors & accessibility' },
      de: { title: 'Farben & Barrierefreiheit' },
      es: { title: 'Colores y accesibilidad' },
      fr: { title: 'Couleurs et accessibilité' },
      pt: { title: 'Cores e acessibilidade' },
    },
  },
  {
    key: 'druk',
    icon: RiQrCodeLine,
    locales: {
      pl: { title: 'Druk i materiały' },
      en: { title: 'Print & materials' },
      de: { title: 'Druck & Materialien' },
      es: { title: 'Impresión y materiales' },
      fr: { title: 'Impression et supports' },
      pt: { title: 'Impressão e materiais' },
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
      es: {
        slug: 'convertidor-jpg-png-a-webp',
        title: 'Convertidor JPG/PNG a WebP',
        description: 'Reduzca el tamaño de las imágenes sin perder calidad. Convierta JPG y PNG a WebP y acelere su sitio web.',
      },
      fr: {
        slug: 'convertisseur-jpg-png-en-webp',
        title: 'Convertisseur JPG/PNG en WebP',
        description: 'Réduisez le poids des images sans perte de qualité. Convertissez JPG et PNG en WebP pour accélérer votre site.',
      },
      pt: {
        slug: 'conversor-jpg-png-para-webp',
        title: 'Conversor JPG/PNG para WebP',
        description: 'Reduza o tamanho das imagens sem perda de qualidade. Converta JPG e PNG para WebP e acelere o seu site.',
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
      es: {
        slug: 'editor-de-imagenes-en-linea',
        title: 'Editor de imágenes en línea',
        description: 'Prepare el recorte perfecto para redes sociales o su sitio web. Elija un formato predefinido o introduzca dimensiones personalizadas.',
      },
      fr: {
        slug: 'editeur-d-images-en-ligne',
        title: "Éditeur d'images en ligne",
        description: 'Préparez le recadrage parfait pour les réseaux sociaux ou votre site. Choisissez un format prédéfini ou saisissez vos dimensions.',
      },
      pt: {
        slug: 'editor-de-imagens-online',
        title: 'Editor de imagens online',
        description: 'Prepare o recorte perfeito para redes sociais ou o seu site. Escolha um formato predefinido ou introduza dimensões personalizadas.',
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
      es: {
        slug: 'generador-de-favicon-gratuito',
        title: 'Generador de favicon',
        description: 'Genere favicon.ico e iconos PNG a partir de una sola imagen, conforme a los requisitos de navegadores y Lighthouse.',
      },
      fr: {
        slug: 'generateur-de-favicon-gratuit',
        title: 'Générateur de favicon',
        description: "Générez favicon.ico et des icônes PNG à partir d'une seule image, conforme aux exigences des navigateurs et de Lighthouse.",
      },
      pt: {
        slug: 'gerador-de-favicon-gratuito',
        title: 'Gerador de favicon',
        description: 'Gere favicon.ico e ícones PNG a partir de uma única imagem, em conformidade com os requisitos dos navegadores e do Lighthouse.',
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
        title: 'Meta-Tag-Checker',
        description: 'Prüfen Sie die Zeichenanzahl und sehen Sie eine Vorschau Ihrer Seite in Google. Vermeiden Sie abgeschnittene Titel und Beschreibungen in den Suchergebnissen.',
      },
      es: {
        slug: 'verificador-de-meta-titulo-y-descripcion',
        title: 'Verificador de meta título y descripción',
        description: 'Compruebe el número de caracteres y vea cómo se muestra su página en Google. Evite títulos y descripciones truncados en los resultados de búsqueda.',
      },
      fr: {
        slug: 'verificateur-meta-titre-et-description',
        title: 'Vérificateur de méta titre et description',
        description: 'Vérifiez le nombre de caractères et prévisualisez votre page dans Google. Évitez les titres et descriptions tronqués dans les résultats de recherche.',
      },
      pt: {
        slug: 'verificador-de-meta-titulo-e-descricao',
        title: 'Verificador de meta título e descrição',
        description: 'Verifique o número de caracteres e pré-visualize a sua página no Google. Evite títulos e descrições truncados nos resultados de pesquisa.',
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
      es: {
        slug: 'contador-de-palabras-y-caracteres',
        title: 'Contador de palabras y caracteres',
        description: 'Compruebe la extensión del texto y evalúe si es adecuada para una página de inicio, página de servicio, artículo de blog o descripción de producto.',
      },
      fr: {
        slug: 'compteur-de-mots-et-caracteres',
        title: 'Compteur de mots et caractères',
        description: "Vérifiez la longueur du texte et évaluez si elle convient à une page d'accueil, une page de service, un article de blog ou une fiche produit.",
      },
      pt: {
        slug: 'contador-de-palavras-e-caracteres',
        title: 'Contador de palavras e caracteres',
        description: 'Verifique o comprimento do texto e avalie se é adequado para uma página inicial, página de serviço, artigo de blog ou descrição de produto.',
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
      es: {
        slug: 'generador-de-firma-de-correo-gratuito',
        title: 'Generador de firma de correo',
        description: 'Cree una firma de correo profesional en minutos. Copie el código HTML listo en Gmail o Outlook.',
      },
      fr: {
        slug: 'generateur-de-signature-email-gratuit',
        title: 'Générateur de signature e-mail',
        description: 'Créez une signature e-mail professionnelle en quelques minutes. Copiez le code HTML prêt dans Gmail ou Outlook.',
      },
      pt: {
        slug: 'gerador-de-assinatura-de-email-gratuito',
        title: 'Gerador de assinatura de e-mail',
        description: 'Crie uma assinatura de e-mail profissional em minutos. Copie o código HTML pronto para o Gmail ou Outlook.',
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
      es: {
        slug: 'comprobador-de-contraste-de-colores',
        title: 'Comprobador de contraste de colores',
        description: 'Compruebe si los colores de texto y fondo son legibles. La herramienta calcula el contraste según WCAG y ayuda a elegir el color adecuado.',
      },
      fr: {
        slug: 'verificateur-de-contraste-des-couleurs',
        title: 'Vérificateur de contraste des couleurs',
        description: "Vérifiez si vos couleurs de texte et d'arrière-plan sont lisibles. L'outil calcule le contraste selon WCAG et aide à choisir la bonne couleur.",
      },
      pt: {
        slug: 'verificador-de-contraste-de-cores',
        title: 'Verificador de contraste de cores',
        description: 'Verifique se as cores do texto e do fundo são legíveis. A ferramenta calcula o contraste segundo WCAG e ajuda a escolher a cor certa.',
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
      es: {
        slug: 'extractor-de-colores-de-imagen',
        title: 'Extractor de colores de imagen',
        description: 'Suba una foto o un logotipo y la herramienta extraerá los colores dominantes. Copie los códigos de color con un solo clic.',
      },
      fr: {
        slug: 'extracteur-de-couleurs-d-image',
        title: "Extracteur de couleurs d'image",
        description: "Importez une photo ou un logo et l'outil extraira les couleurs dominantes. Copiez les codes couleur en un seul clic.",
      },
      pt: {
        slug: 'extrator-de-cores-de-imagem',
        title: 'Extrator de cores de imagem',
        description: 'Carregue uma foto ou logótipo e a ferramenta extrairá as cores dominantes. Copie os códigos de cor com um único clique.',
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
      es: {
        slug: 'generador-de-paletas-de-colores',
        title: 'Generador de paletas de colores',
        description: 'Elija un color y genere 9 paletas: monocromática, complementaria, triádica y más.',
      },
      fr: {
        slug: 'generateur-de-palettes-de-couleurs',
        title: 'Générateur de palettes de couleurs',
        description: 'Choisissez une couleur et générez 9 palettes\u00a0: monochromatique, complémentaire, triadique et plus.',
      },
      pt: {
        slug: 'gerador-de-paletas-de-cores',
        title: 'Gerador de paletas de cores',
        description: 'Escolha uma cor e gere 9 paletas: monocromática, complementar, triádica e mais.',
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
      es: {
        slug: 'generador-de-codigos-qr-gratuito',
        title: 'Generador de códigos QR gratuito',
        description: 'Cree un código QR para un sitio web, vCard, menú o folleto. Exporte a PNG y SVG, sin registro, sin límites.',
      },
      fr: {
        slug: 'generateur-de-codes-qr-gratuit',
        title: 'Générateur de codes QR gratuit',
        description: 'Créez un code QR pour un site web, une vCard, un menu ou un dépliant. Export en PNG et SVG, sans inscription, sans limite.',
      },
      pt: {
        slug: 'gerador-de-codigos-qr-gratuito',
        title: 'Gerador de códigos QR gratuito',
        description: 'Crie um código QR para um site, vCard, menu ou folheto. Exportação em PNG e SVG, sem registo, sem limites.',
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

  // Non-tool pages: about, contact, privacy
  if (fromConfig.aboutHref && currentPath === fromConfig.aboutHref && toConfig.aboutHref) {
    return toConfig.aboutHref;
  }
  if (fromConfig.contactHref && currentPath === fromConfig.contactHref && toConfig.contactHref) {
    return toConfig.contactHref;
  }
  if (fromConfig.privacyHref && currentPath === fromConfig.privacyHref && toConfig.privacyHref) {
    return toConfig.privacyHref;
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
