import {
  RiAppsLine,
  RiArticleLine,
  RiContrast2Line,
  RiCropLine,
  RiFilePdf2Line,
  RiFileTextLine,
  RiImageEditLine,
  RiLoopLeftLine,
  RiMailLine,
  RiPaletteLine,
  RiPantoneLine,
  RiQrCodeLine,
  RiRulerLine,
  RiSearchLine,
} from 'react-icons/ri';
import type {
  ToolDefinition,
  ToolsSectionDefinition,
} from '@/types/tools/common';

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
      it: { title: 'Immagini e favicon' },
      cs: { title: 'Obrázky a favicony' },
    },
  },
  {
    key: 'seo',
    icon: RiSearchLine,
    locales: {
      pl: { title: 'Teksty i SEO' },
      en: { title: 'Text & SEO' },
      de: { title: 'Text & SEO' },
      es: { title: 'Texto y SEO' },
      fr: { title: 'Texte et SEO' },
      pt: { title: 'Texto e SEO' },
      it: { title: 'Testo e SEO' },
      cs: { title: 'Text a SEO' },
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
      it: { title: 'E-mail e comunicazione' },
      cs: { title: 'E-mail a komunikace' },
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
      it: { title: 'Colori e accessibilità' },
      cs: { title: 'Barvy a přístupnost' },
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
      it: { title: 'Stampa e materiali' },
      cs: { title: 'Tisk a materiály' },
    },
  },
  {
    key: 'konwertery',
    icon: RiLoopLeftLine,
    locales: {
      pl: { title: 'Konwertery obrazów' },
      en: { title: 'Image format converters' },
      es: { title: 'Conversores de formato' },
      fr: { title: 'Convertisseurs de format' },
      de: { title: 'Bildformat' },
      pt: { title: 'Conversores de formato' },
      it: { title: 'Convertitori di formato' },
      cs: { title: 'Konvertory formátů' },
    },
  },
  {
    key: 'dokumenty',
    icon: RiFilePdf2Line,
    locales: {
      pl: { title: 'Konwertery danych' },
      en: { title: 'Data converters' },
      de: { title: 'Datenkonverter' },
      es: { title: 'Conversores de datos' },
      fr: { title: 'Convertisseurs de données' },
      pt: { title: 'Conversores de dados' },
      it: { title: 'Convertitori di dati' },
      cs: { title: 'Datové převodníky' },
    },
  },
  {
    key: 'jednostki',
    icon: RiRulerLine,
    locales: {
      pl: { title: 'Konwertery jednostek' },
      en: { title: 'Unit converters' },
      de: { title: 'Einheitenkonverter' },
      es: { title: 'Conversores de unidades' },
      fr: { title: "Convertisseurs d'unités" },
      pt: { title: 'Conversores de unidades' },
      it: { title: 'Convertitori di unità' },
      cs: { title: 'Převodníky jednotek' },
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
    desktopOnly: true,
    // DEPRECATED: replaced by jpgToWebpSimple + pngToWebpSimple.
    // Locale entries removed - old pages still build and are 301-redirected by middleware.
    locales: {},
  },
  {
    key: 'imageResize',
    section: 'obrazy',
    icon: RiCropLine,
    carouselOrder: 2,
    desktopOnly: true,
    locales: {
      pl: {
        slug: 'edytor-zdjec-online',
        title: 'Edytor zdjęć',
        description:
          'Zmień rozmiar, wykadruj i przekonwertuj zdjęcie. Gotowe formaty, okrągłe avatary, eksport JPG/PNG/WebP.',
      },
      en: {
        slug: 'online-image-editor',
        title: 'Online image editor',
        description:
          'Resize, crop and convert your image. Ready-made formats for social media, circular avatars, export to JPG/PNG/WebP.',
      },
      de: {
        slug: 'online-bildeditor',
        title: 'Bildeditor',
        description:
          'Bildgröße ändern, zuschneiden und Format konvertieren. Fertige Formate für Social Media, runde Avatare, Export als JPG/PNG/WebP.',
      },
      es: {
        slug: 'editor-de-imagenes-en-linea',
        title: 'Editor de imágenes en línea',
        description:
          'Cambie el tamaño, recorte y convierta su imagen. Formatos listos para redes sociales, avatares circulares, exportación a JPG/PNG/WebP.',
      },
      fr: {
        slug: 'editeur-d-images-en-ligne',
        title: "Éditeur d'images en ligne",
        description:
          'Redimensionnez, recadrez et convertissez votre image. Formats prêts pour les réseaux sociaux, avatars circulaires, export JPG/PNG/WebP.',
      },
      pt: {
        slug: 'editor-de-imagens-online',
        title: 'Editor de imagens',
        description:
          'Redimensione, corte e converta a sua imagem. Formatos prontos para redes sociais, avatares circulares, exportação JPG/PNG/WebP.',
      },
      it: {
        slug: 'editor-di-immagini-online',
        title: 'Editor di immagini',
        description:
          'Ridimensiona, ritaglia e converti la tua immagine. Formati pronti per i social media, avatar circolari, esportazione JPG/PNG/WebP.',
      },
      cs: {
        slug: 'editor-obrazku',
        title: 'Editor obrázků',
        description:
          'Změňte velikost, ořízněte a převeďte obrázek. Hotové formáty pro sociální sítě, kulaté avatary, export JPG/PNG/WebP.',
      },
    },
  },
  {
    key: 'favicon',
    section: 'obrazy',
    icon: RiAppsLine,
    carouselOrder: 5,
    desktopOnly: true,
    locales: {
      pl: {
        slug: 'darmowy-generator-favicon-ico',
        title: 'Generator favicon',
        description:
          'Stwórz favicon.ico dla swojej strony z jednego obrazu. Bez logowania i rejestracji.',
      },
      en: {
        slug: 'free-favicon-generator',
        title: 'Favicon generator',
        description:
          'Create a complete favicon.ico set for your website from one image. All required sizes, no login.',
      },
      de: {
        slug: 'kostenloser-favicon-generator',
        title: 'Favicon-Generator',
        description:
          'Erstellen Sie ein komplettes favicon.ico-Set für Ihre Website aus einem Bild. Alle erforderlichen Größen, ohne Anmeldung.',
      },
      es: {
        slug: 'generador-de-favicon-gratuito',
        title: 'Generador de favicon',
        description:
          'Cree un conjunto completo de favicon.ico para su sitio web desde una imagen. Todos los tamaños necesarios, sin registro.',
      },
      fr: {
        slug: 'generateur-de-favicon-gratuit',
        title: 'Générateur de favicon',
        description:
          "Créez un jeu complet de favicon.ico pour votre site web à partir d'une image. Toutes les tailles requises, sans inscription.",
      },
      pt: {
        slug: 'gerador-de-favicon-gratuito',
        title: 'Gerador de favicon',
        description:
          'Crie um conjunto completo de favicon.ico para o seu site a partir de uma imagem. Todos os tamanhos necessários, sem registo.',
      },
      it: {
        slug: 'generatore-di-favicon-gratuito',
        title: 'Generatore di favicon',
        description:
          'Crea un set completo di favicon.ico per il tuo sito web da una immagine. Tutte le dimensioni richieste, senza registrazione.',
      },
      cs: {
        slug: 'generator-favicon-zdarma',
        title: 'Generátor favicon',
        description:
          'Vytvořte kompletní sadu favicon.ico pro svůj web z jednoho obrázku. Všechny potřebné velikosti, bez přihlášení.',
      },
    },
  },
  {
    key: 'metaCounter',
    section: 'seo',
    icon: RiFileTextLine,
    carouselOrder: 3,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'licznik-dlugosci-meta-title-i-description',
        title: 'Licznik meta title i description',
        description:
          'Sprawdź długość tytułu i opisu strony w pikselach. Podgląd wyniku w Google na żywo.',
      },
      en: {
        slug: 'meta-title-description-length-checker',
        title: 'Meta title & description checker',
        description:
          'Check title and description length in pixels. Live Google preview and optimization tips.',
      },
      de: {
        slug: 'meta-titel-beschreibung-laengenpruefer',
        title: 'Meta-Tag-Checker',
        description:
          'Titel- und Beschreibungslänge in Pixeln prüfen. Live-Google-Vorschau und Optimierungstipps.',
      },
      es: {
        slug: 'verificador-de-meta-titulo-y-descripcion',
        title: 'Verificador de meta título y descripción',
        description:
          'Compruebe la longitud del título y la descripción en píxeles. Vista previa de Google en vivo y sugerencias de optimización.',
      },
      fr: {
        slug: 'verificateur-meta-titre-et-description',
        title: 'Vérificateur de méta titre et description',
        description:
          "Vérifiez la longueur du titre et de la description en pixels. Aperçu Google en direct et conseils d'optimisation.",
      },
      pt: {
        slug: 'verificador-de-meta-titulo-e-descricao',
        title: 'Verificador de meta título e descrição',
        description:
          'Verifique o comprimento do título e da descrição em pixels. Pré-visualização Google em tempo real e dicas de otimização.',
      },
      it: {
        slug: 'verificatore-meta-titolo-e-descrizione',
        title: 'Verificatore meta titolo e descrizione',
        description:
          'Verifica la lunghezza del titolo e della descrizione in pixel. Anteprima Google dal vivo e suggerimenti di ottimizzazione.',
      },
      cs: {
        slug: 'kontrola-meta-titulku-a-popisu',
        title: 'Kontrola meta titulku a popisu',
        description:
          'Zkontrolujte délku titulku a popisu v pixelech. Živý náhled v Google a tipy na optimalizaci.',
      },
    },
  },
  {
    key: 'wordCounter',
    section: 'seo',
    icon: RiArticleLine,
    carouselOrder: 10,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'licznik-slow-i-znakow',
        title: 'Licznik słów i znaków',
        description:
          'Policz słowa, znaki, zdania i czas czytania. Sprawdź czytelność tekstu wskaźnikiem Flesch-Kincaid.',
      },
      en: {
        slug: 'word-and-character-counter',
        title: 'Word & character counter',
        description:
          'Count words, characters, sentences and reading time. Check readability with the Flesch-Kincaid score.',
      },
      de: {
        slug: 'wort-und-zeichenzaehler',
        title: 'Wort- & Zeichenzähler',
        description:
          'Wörter, Zeichen, Sätze und Lesezeit zählen. Lesbarkeit mit dem Flesch-Kincaid-Wert prüfen.',
      },
      es: {
        slug: 'contador-de-palabras-y-caracteres',
        title: 'Contador de palabras y caracteres',
        description:
          'Cuente palabras, caracteres, oraciones y tiempo de lectura. Compruebe la legibilidad con la puntuación Flesch-Kincaid.',
      },
      fr: {
        slug: 'compteur-de-mots-et-caracteres',
        title: 'Compteur de mots et caractères',
        description:
          'Comptez les mots, caractères, phrases et temps de lecture. Vérifiez la lisibilité avec le score Flesch-Kincaid.',
      },
      pt: {
        slug: 'contador-de-palavras-e-caracteres',
        title: 'Contador de palavras e caracteres',
        description:
          'Conte palavras, caracteres, frases e tempo de leitura. Verifique a legibilidade com a pontuação Flesch-Kincaid.',
      },
      it: {
        slug: 'contatore-di-parole-e-caratteri',
        title: 'Contatore di parole e caratteri',
        description:
          'Conta parole, caratteri, frasi e tempo di lettura. Verifica la leggibilità con il punteggio Flesch-Kincaid.',
      },
      cs: {
        slug: 'pocitadlo-slov-a-znaku',
        title: 'Počítadlo slov a znaků',
        description:
          'Spočítejte slova, znaky, věty a čas čtení. Zkontrolujte čitelnost pomocí skóre Flesch-Kincaid.',
      },
    },
  },
  {
    key: 'loremIpsum',
    section: 'seo',
    icon: RiFileTextLine,
    carouselOrder: 11,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'generator-lorem-ipsum',
        title: 'Generator Lorem Ipsum',
        description:
          'Darmowy generator lorem ipsum — 8 stylów tekstu, akapity, zdania lub słowa. Kopiuj jednym kliknięciem.',
      },
      en: {
        slug: 'lorem-ipsum-generator',
        title: 'Lorem Ipsum Generator',
        description:
          'Free Lorem Ipsum generator — 8 text styles, paragraphs, sentences or words. Copy in one click.',
      },
      de: {
        slug: 'lorem-ipsum-generator',
        title: 'Lorem-Ipsum-Generator',
        description:
          'Kostenloser Lorem-Ipsum-Generator — 8 Textstile, Absätze, Sätze oder Wörter. Mit einem Klick kopieren.',
      },
      es: {
        slug: 'generador-lorem-ipsum',
        title: 'Generador Lorem Ipsum',
        description:
          'Generador Lorem Ipsum gratuito — 8 estilos de texto, párrafos, frases o palabras. Copie con un clic.',
      },
      fr: {
        slug: 'generateur-lorem-ipsum',
        title: 'Générateur Lorem Ipsum',
        description:
          'Générateur Lorem Ipsum gratuit — 8 styles de texte, paragraphes, phrases ou mots. Copiez en un clic.',
      },
      pt: {
        slug: 'gerador-lorem-ipsum',
        title: 'Gerador Lorem Ipsum',
        description:
          'Gerador Lorem Ipsum gratuito — 8 estilos de texto, parágrafos, frases ou palavras. Copie com um clique.',
      },
      it: {
        slug: 'generatore-lorem-ipsum',
        title: 'Generatore Lorem Ipsum',
        description:
          'Generatore Lorem Ipsum gratuito — 8 stili di testo, paragrafi, frasi o parole. Copia con un clic.',
      },
      cs: {
        slug: 'generator-lorem-ipsum',
        title: 'Generátor Lorem Ipsum',
        description:
          'Bezplatný generátor Lorem Ipsum — 8 textových stylů, odstavce, věty nebo slova. Zkopírujte jedním kliknutím.',
      },
    },
  },
  {
    key: 'emailSignature',
    section: 'email',
    icon: RiMailLine,
    desktopOnly: true,
    locales: {
      pl: {
        slug: 'darmowy-generator-stopki-mailowej',
        title: 'Generator stopki mailowej',
        description:
          'Stwórz profesjonalny podpis e-mail HTML. Gotowe układy, ikony social media i kod do Gmail/Outlook.',
      },
      en: {
        slug: 'free-email-signature-generator',
        title: 'Email signature generator',
        description:
          'Create an HTML email signature with full customization. Ready layouts, social media icons and code for Gmail/Outlook.',
      },
      de: {
        slug: 'kostenloser-e-mail-signatur-generator',
        title: 'E-Mail-Signatur-Generator',
        description:
          'HTML-E-Mail-Signatur mit voller Personalisierung erstellen. Fertige Layouts, Social-Media-Icons und Code für Gmail/Outlook.',
      },
      es: {
        slug: 'generador-de-firma-de-correo-gratuito',
        title: 'Generador de firma de correo',
        description:
          'Cree una firma de correo HTML con personalización completa. Diseños listos, iconos de redes sociales y código para Gmail/Outlook.',
      },
      fr: {
        slug: 'generateur-de-signature-email-gratuit',
        title: 'Générateur de signature e-mail',
        description:
          'Créez une signature e-mail HTML avec personnalisation complète. Mises en page prêtes, icônes réseaux sociaux et code pour Gmail/Outlook.',
      },
      pt: {
        slug: 'gerador-de-assinatura-de-email-gratuito',
        title: 'Gerador de assinatura de e-mail',
        description:
          'Crie uma assinatura de e-mail HTML com personalização completa. Layouts prontos, ícones de redes sociais e código para Gmail/Outlook.',
      },
      it: {
        slug: 'generatore-di-firma-email-gratuito',
        title: 'Generatore di firma e-mail',
        description:
          'Crea una firma e-mail HTML con personalizzazione completa. Layout pronti, icone social media e codice per Gmail/Outlook.',
      },
      cs: {
        slug: 'generator-podpisu-emailu-zdarma',
        title: 'Generátor podpisu e-mailu',
        description:
          'Vytvořte HTML e-mailový podpis s plnou personalizací. Hotové rozložení, ikony sociálních sítí a kód pro Gmail/Outlook.',
      },
    },
  },
  {
    key: 'contrastChecker',
    section: 'kolory',
    icon: RiContrast2Line,
    carouselOrder: 8,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'kontrast-i-czytelnosc-kolorow',
        title: 'Tester kontrastu kolorów',
        description:
          'Sprawdź kontrast tekstu i tła według WCAG 2.1 AA i AAA. Automatyczna korekta kolorów.',
      },
      en: {
        slug: 'color-contrast-checker',
        title: 'Color contrast checker',
        description:
          'Check text and background contrast per WCAG 2.1 AA and AAA. Automatic color correction.',
      },
      de: {
        slug: 'farbkontrast-checker',
        title: 'Farbkontrast-Checker',
        description:
          'Text- und Hintergrundkontrast nach WCAG 2.1 AA und AAA prüfen. Automatische Farbkorrektur.',
      },
      es: {
        slug: 'comprobador-de-contraste-de-colores',
        title: 'Comprobador de contraste de colores',
        description:
          'Compruebe el contraste de texto y fondo según WCAG 2.1 AA y AAA. Corrección automática de colores.',
      },
      fr: {
        slug: 'verificateur-de-contraste-des-couleurs',
        title: 'Vérificateur de contraste des couleurs',
        description:
          'Vérifiez le contraste texte et arrière-plan selon WCAG 2.1 AA et AAA. Correction automatique des couleurs.',
      },
      pt: {
        slug: 'verificador-de-contraste-de-cores',
        title: 'Verificador de contraste de cores',
        description:
          'Verifique o contraste de texto e fundo segundo WCAG 2.1 AA e AAA. Correção automática de cores.',
      },
      it: {
        slug: 'verificatore-contrasto-colori',
        title: 'Verificatore contrasto colori',
        description:
          'Verifica il contrasto testo e sfondo secondo WCAG 2.1 AA e AAA. Correzione automatica dei colori.',
      },
      cs: {
        slug: 'kontrola-kontrastu-barev',
        title: 'Kontrola kontrastu barev',
        description:
          'Zkontrolujte kontrast textu a pozadí podle WCAG 2.1 AA a AAA. Automatická korekce barev.',
      },
    },
  },
  {
    key: 'paletteExtractor',
    section: 'kolory',
    icon: RiPantoneLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'ekstraktor-kolorow-z-obrazu',
        title: 'Ekstraktor kolorów z obrazu',
        description:
          'Wyciągnij dominujące kolory ze zdjęcia lub logo. Gotowe kody HEX i RGB do skopiowania.',
      },
      en: {
        slug: 'image-color-extractor',
        title: 'Image color extractor',
        description:
          'Extract dominant colors from a photo or logo. Ready HEX and RGB codes to copy.',
      },
      de: {
        slug: 'bild-farbextraktor',
        title: 'Bild-Farbextraktor',
        description:
          'Dominante Farben aus einem Foto oder Logo extrahieren. Fertige HEX- und RGB-Codes zum Kopieren.',
      },
      es: {
        slug: 'extractor-de-colores-de-imagen',
        title: 'Extractor de colores de imagen',
        description:
          'Extraiga los colores dominantes de una foto o logotipo. Códigos HEX y RGB listos para copiar.',
      },
      fr: {
        slug: 'extracteur-de-couleurs-d-image',
        title: "Extracteur de couleurs d'image",
        description:
          "Extrayez les couleurs dominantes d'une photo ou d'un logo. Codes HEX et RGB prêts à copier.",
      },
      pt: {
        slug: 'extrator-de-cores-de-imagem',
        title: 'Extrator de cores de imagem',
        description:
          'Extraia as cores dominantes de uma foto ou logótipo. Códigos HEX e RGB prontos para copiar.',
      },
      it: {
        slug: 'estrattore-di-colori-da-immagine',
        title: 'Estrattore di colori da immagine',
        description:
          'Estrai i colori dominanti da una foto o un logo. Codici HEX e RGB pronti da copiare.',
      },
      cs: {
        slug: 'extraktor-barev-z-obrazku',
        title: 'Extraktor barev z obrázku',
        description:
          'Extrahujte dominantní barvy z fotografie nebo loga. Hotové HEX a RGB kódy ke zkopírování.',
      },
    },
  },
  {
    key: 'colorPalette',
    section: 'kolory',
    icon: RiPaletteLine,
    carouselOrder: 6,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'generator-palet-kolorow',
        title: 'Generator palet kolorów',
        description:
          'Wygeneruj 9 palet z jednego koloru: monochromatyczną, komplementarną, triadyczną i inne. Kody HEX.',
      },
      en: {
        slug: 'color-palette-generator',
        title: 'Color palette generator',
        description:
          'Generate 9 palettes from one color: monochromatic, complementary, triadic and more. HEX codes.',
      },
      de: {
        slug: 'farbpaletten-generator',
        title: 'Farbpaletten-Generator',
        description:
          '9 Paletten aus einer Farbe generieren: monochromatisch, komplementär, triadisch und mehr. HEX-Codes.',
      },
      es: {
        slug: 'generador-de-paletas-de-colores',
        title: 'Generador de paletas de colores',
        description:
          'Genere 9 paletas a partir de un color: monocromática, complementaria, triádica y más. Códigos HEX.',
      },
      fr: {
        slug: 'generateur-de-palettes-de-couleurs',
        title: 'Générateur de palettes de couleurs',
        description:
          "Générez 9 palettes à partir d'une couleur\u00a0: monochromatique, complémentaire, triadique et plus. Codes HEX.",
      },
      pt: {
        slug: 'gerador-de-paletas-de-cores',
        title: 'Gerador de paletas de cores',
        description:
          'Gere 9 paletas a partir de uma cor: monocromática, complementar, triádica e mais. Códigos HEX.',
      },
      it: {
        slug: 'generatore-di-palette-di-colori',
        title: 'Generatore di palette di colori',
        description:
          'Genera 9 palette da un colore: monocromatica, complementare, triadica e altre. Codici HEX.',
      },
      cs: {
        slug: 'generator-barevnych-palet',
        title: 'Generátor barevných palet',
        description:
          'Vygenerujte 9 palet z jedné barvy: monochromatickou, komplementární, triádickou a další. Kódy HEX.',
      },
    },
  },
  {
    key: 'qrCode',
    section: 'druk',
    icon: RiQrCodeLine,
    carouselOrder: 9,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'darmowy-generator-kodow-qr',
        title: 'Generator kodów QR',
        description:
          'Stwórz kod QR do strony, wizytówki vCard lub druku. Eksport PNG i SVG, bez rejestracji.',
      },
      en: {
        slug: 'free-qr-code-generator',
        title: 'Free QR code generator',
        description:
          'Create a QR code for a website, vCard business card or print. Export PNG and SVG, no registration.',
      },
      de: {
        slug: 'kostenloser-qr-code-generator',
        title: 'Kostenloser QR-Code-Generator',
        description:
          'Erstellen Sie einen QR-Code für Website, vCard-Visitenkarte oder Druck. Export PNG und SVG, ohne Registrierung.',
      },
      es: {
        slug: 'generador-de-codigos-qr-gratuito',
        title: 'Generador de códigos QR gratuito',
        description:
          'Cree un código QR para sitio web, tarjeta vCard o impresión. Exporte PNG y SVG, sin registro.',
      },
      fr: {
        slug: 'generateur-de-codes-qr-gratuit',
        title: 'Générateur de codes QR gratuit',
        description:
          'Créez un code QR pour site web, carte vCard ou impression. Export PNG et SVG, sans inscription.',
      },
      pt: {
        slug: 'gerador-de-codigos-qr-gratuito',
        title: 'Gerador de códigos QR gratuito',
        description:
          'Crie um código QR para site, cartão vCard ou impressão. Exporte PNG e SVG, sem registo.',
      },
      it: {
        slug: 'generatore-di-codici-qr-gratuito',
        title: 'Generatore di codici QR gratuito',
        description:
          'Crea un codice QR per sito web, biglietto vCard o stampa. Esporta PNG e SVG, senza registrazione.',
      },
      cs: {
        slug: 'generator-qr-kodu-zdarma',
        title: 'Generátor QR kódu zdarma',
        description:
          'Vytvořte QR kód pro web, vizitku vCard nebo tisk. Export PNG a SVG, bez registrace.',
      },
    },
  },
  // -------------------------------------------------------------------------
  // Image format converters
  // -------------------------------------------------------------------------
  {
    key: 'pngToJpg',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    carouselOrder: 4,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-png-na-jpg',
        title: 'PNG na JPG',
        description:
          'Zamień pliki PNG na JPG. Konwersja w przeglądarce, bez limitu plików i rejestracji.',
      },
      en: {
        slug: 'png-to-jpg-converter',
        title: 'PNG to JPG',
        description:
          'Convert PNG files to JPG in your browser. No file limits, no signup, no server uploads.',
      },
      es: {
        slug: 'convertidor-png-a-jpg',
        title: 'PNG a JPG',
        description:
          'Convierte archivos PNG a JPG en el navegador. Sin límite de archivos, sin registro.',
      },
      fr: {
        slug: 'convertisseur-png-en-jpg',
        title: 'PNG en JPG',
        description:
          'Convertissez vos fichiers PNG en JPG dans le navigateur. Sans limite, sans inscription.',
      },
      de: {
        slug: 'png-zu-jpg-konverter',
        title: 'PNG zu JPG',
        description:
          'PNG-Dateien im Browser in JPG umwandeln. Ohne Dateilimit, ohne Registrierung.',
      },
      pt: {
        slug: 'conversor-png-para-jpg',
        title: 'PNG para JPG',
        description:
          'Converta ficheiros PNG para JPG no navegador. Sem limite de ficheiros, sem registo.',
      },
      it: {
        slug: 'convertitore-png-in-jpg',
        title: 'PNG in JPG',
        description:
          'Converti file PNG in JPG nel browser. Senza limiti, senza registrazione.',
      },
      cs: {
        slug: 'prevodnik-png-na-jpg',
        title: 'PNG na JPG',
        description:
          'Převeďte soubory PNG na JPG v prohlížeči. Bez limitu, bez registrace.',
      },
    },
  },
  {
    key: 'jpgToPng',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-jpg-na-png',
        title: 'JPG na PNG',
        description:
          'Zamień pliki JPG na bezstratny PNG. Konwersja w przeglądarce, bez limitu.',
      },
      en: {
        slug: 'jpg-to-png-converter',
        title: 'JPG to PNG',
        description:
          'Convert JPG images to lossless PNG. Runs locally in your browser, unlimited files.',
      },
      es: {
        slug: 'convertidor-jpg-a-png',
        title: 'JPG a PNG',
        description:
          'Convierte imágenes JPG a PNG sin pérdida. Conversión local en el navegador, sin límites.',
      },
      fr: {
        slug: 'convertisseur-jpg-en-png',
        title: 'JPG en PNG',
        description:
          'Convertissez vos images JPG en PNG sans perte. Traitement local, fichiers illimités.',
      },
      de: {
        slug: 'jpg-zu-png-konverter',
        title: 'JPG zu PNG',
        description:
          'JPG-Bilder verlustfrei in PNG umwandeln. Lokale Verarbeitung, unbegrenzte Dateien.',
      },
      pt: {
        slug: 'conversor-jpg-para-png',
        title: 'JPG para PNG',
        description:
          'Converta imagens JPG para PNG sem perdas. Conversão local no navegador.',
      },
      it: {
        slug: 'convertitore-jpg-in-png',
        title: 'JPG in PNG',
        description:
          'Converti immagini JPG in PNG senza perdita. Conversione locale nel browser.',
      },
      cs: {
        slug: 'prevodnik-jpg-na-png',
        title: 'JPG na PNG',
        description:
          'Převeďte obrázky JPG na bezeztrátové PNG. Lokální zpracování v prohlížeči.',
      },
    },
  },
  {
    key: 'webpToJpg',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    carouselOrder: 7,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-webp-na-jpg',
        title: 'WebP na JPG',
        description:
          'Zamień pliki WebP na JPG. Kompatybilność z każdym programem i platformą.',
      },
      en: {
        slug: 'webp-to-jpg-converter',
        title: 'WebP to JPG',
        description:
          'Convert WebP files to universally compatible JPG. Works in every app and platform.',
      },
      es: {
        slug: 'convertidor-webp-a-jpg',
        title: 'WebP a JPG',
        description:
          'Convierte archivos WebP a JPG compatible con cualquier programa y plataforma.',
      },
      fr: {
        slug: 'convertisseur-webp-en-jpg',
        title: 'WebP en JPG',
        description:
          'Convertissez vos fichiers WebP en JPG universel. Compatible avec tous les logiciels.',
      },
      de: {
        slug: 'webp-zu-jpg-konverter',
        title: 'WebP zu JPG',
        description:
          'WebP-Dateien in universell kompatibles JPG umwandeln. Funktioniert überall.',
      },
      pt: {
        slug: 'conversor-webp-para-jpg',
        title: 'WebP para JPG',
        description:
          'Converta ficheiros WebP para JPG compatível com tudo. Sem limites, sem registo.',
      },
      it: {
        slug: 'convertitore-webp-in-jpg',
        title: 'WebP in JPG',
        description:
          'Converti file WebP in JPG compatibile ovunque. Senza limiti, senza registrazione.',
      },
      cs: {
        slug: 'prevodnik-webp-na-jpg',
        title: 'WebP na JPG',
        description: 'Převeďte soubory WebP na univerzálně kompatibilní JPG.',
      },
    },
  },
  {
    key: 'webpToPng',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-webp-na-png',
        title: 'WebP na PNG',
        description:
          'Zamień pliki WebP na bezstratny PNG. Konwersja lokalna, bez wysyłania na serwer.',
      },
      en: {
        slug: 'webp-to-png-converter',
        title: 'WebP to PNG',
        description:
          'Convert WebP images to lossless PNG. Local conversion, nothing sent to any server.',
      },
      es: {
        slug: 'convertidor-webp-a-png',
        title: 'WebP a PNG',
        description:
          'Convierte imágenes WebP a PNG sin pérdida. Conversión local, nada se envía al servidor.',
      },
      fr: {
        slug: 'convertisseur-webp-en-png',
        title: 'WebP en PNG',
        description:
          "Convertissez vos images WebP en PNG sans perte. Traitement local, rien n'est envoyé.",
      },
      de: {
        slug: 'webp-zu-png-konverter',
        title: 'WebP zu PNG',
        description:
          'WebP-Bilder verlustfrei in PNG umwandeln. Lokale Konvertierung, kein Server-Upload.',
      },
      pt: {
        slug: 'conversor-webp-para-png',
        title: 'WebP para PNG',
        description:
          'Converta imagens WebP para PNG sem perdas. Conversão local, nada enviado ao servidor.',
      },
      it: {
        slug: 'convertitore-webp-in-png',
        title: 'WebP in PNG',
        description:
          'Converti immagini WebP in PNG senza perdita. Conversione locale, niente server.',
      },
      cs: {
        slug: 'prevodnik-webp-na-png',
        title: 'WebP na PNG',
        description:
          'Převeďte obrázky WebP na bezeztrátové PNG. Lokální zpracování.',
      },
    },
  },
  {
    key: 'svgToPng',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-svg-na-png',
        title: 'SVG na PNG',
        description:
          'Zamień grafikę wektorową SVG na rastrowy PNG. Idealne do dokumentów i mediów społecznościowych.',
      },
      en: {
        slug: 'svg-to-png-converter',
        title: 'SVG to PNG',
        description:
          'Convert vector SVG graphics to raster PNG. Ideal for documents and social media.',
      },
      es: {
        slug: 'convertidor-svg-a-png',
        title: 'SVG a PNG',
        description:
          'Convierte gráficos vectoriales SVG a PNG. Ideal para documentos y redes sociales.',
      },
      fr: {
        slug: 'convertisseur-svg-en-png',
        title: 'SVG en PNG',
        description:
          'Convertissez vos graphiques vectoriels SVG en PNG. Idéal pour documents et réseaux sociaux.',
      },
      de: {
        slug: 'svg-zu-png-konverter',
        title: 'SVG zu PNG',
        description:
          'SVG-Vektorgrafiken in Raster-PNG umwandeln. Ideal für Dokumente und Social Media.',
      },
      pt: {
        slug: 'conversor-svg-para-png',
        title: 'SVG para PNG',
        description:
          'Converta gráficos vetoriais SVG para PNG. Ideal para documentos e redes sociais.',
      },
      it: {
        slug: 'convertitore-svg-in-png',
        title: 'SVG in PNG',
        description:
          'Converti grafiche vettoriali SVG in PNG. Ideale per documenti e social media.',
      },
      cs: {
        slug: 'prevodnik-svg-na-png',
        title: 'SVG na PNG',
        description:
          'Převeďte vektorovou grafiku SVG na rastrové PNG. Ideální pro dokumenty a sociální sítě.',
      },
    },
  },
  {
    key: 'svgToJpg',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-svg-na-jpg',
        title: 'SVG na JPG',
        description:
          'Zamień grafikę wektorową SVG na JPG. Mniejszy plik, pełna kompatybilność.',
      },
      en: {
        slug: 'svg-to-jpg-converter',
        title: 'SVG to JPG',
        description:
          'Convert vector SVG files to compact JPG. Smaller file size, full compatibility.',
      },
      es: {
        slug: 'convertidor-svg-a-jpg',
        title: 'SVG a JPG',
        description:
          'Convierte gráficos SVG a JPG compacto. Archivo más pequeño, compatibilidad total.',
      },
      fr: {
        slug: 'convertisseur-svg-en-jpg',
        title: 'SVG en JPG',
        description:
          'Convertissez vos graphiques SVG en JPG compact. Fichier réduit, compatibilité totale.',
      },
      de: {
        slug: 'svg-zu-jpg-konverter',
        title: 'SVG zu JPG',
        description:
          'SVG-Vektordateien in kompaktes JPG umwandeln. Kleinere Datei, volle Kompatibilität.',
      },
      pt: {
        slug: 'conversor-svg-para-jpg',
        title: 'SVG para JPG',
        description:
          'Converta gráficos SVG para JPG compacto. Ficheiro menor, compatibilidade total.',
      },
      it: {
        slug: 'convertitore-svg-in-jpg',
        title: 'SVG in JPG',
        description:
          'Converti grafiche SVG in JPG compatto. File più piccolo, compatibilità totale.',
      },
      cs: {
        slug: 'prevodnik-svg-na-jpg',
        title: 'SVG na JPG',
        description:
          'Převeďte grafiku SVG na kompaktní JPG. Menší soubor, plná kompatibilita.',
      },
    },
  },
  {
    key: 'bmpToJpg',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-bmp-na-jpg',
        title: 'BMP na JPG',
        description:
          'Zamień nieskompresowane pliki BMP na lekki JPG. Redukcja rozmiaru bez utraty jakości.',
      },
      en: {
        slug: 'bmp-to-jpg-converter',
        title: 'BMP to JPG',
        description:
          'Convert uncompressed BMP files to lightweight JPG. Reduce file size without quality loss.',
      },
      es: {
        slug: 'convertidor-bmp-a-jpg',
        title: 'BMP a JPG',
        description:
          'Convierte archivos BMP sin comprimir a JPG ligero. Reducción drástica del tamaño.',
      },
      fr: {
        slug: 'convertisseur-bmp-en-jpg',
        title: 'BMP en JPG',
        description:
          'Convertissez vos fichiers BMP non compressés en JPG léger. Réduction massive de taille.',
      },
      de: {
        slug: 'bmp-zu-jpg-konverter',
        title: 'BMP zu JPG',
        description:
          'Unkomprimierte BMP-Dateien in leichtes JPG umwandeln. Massive Größenreduktion.',
      },
      pt: {
        slug: 'conversor-bmp-para-jpg',
        title: 'BMP para JPG',
        description:
          'Converta ficheiros BMP para JPG leve. Redução drástica do tamanho.',
      },
      it: {
        slug: 'convertitore-bmp-in-jpg',
        title: 'BMP in JPG',
        description:
          'Converti file BMP in JPG leggero. Riduzione drastica delle dimensioni.',
      },
      cs: {
        slug: 'prevodnik-bmp-na-jpg',
        title: 'BMP na JPG',
        description:
          'Převeďte soubory BMP na lehké JPG. Drastické zmenšení velikosti.',
      },
    },
  },
  {
    key: 'bmpToPng',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-bmp-na-png',
        title: 'BMP na PNG',
        description:
          'Zamień pliki BMP na bezstratny PNG. Zachowaj jakość przy mniejszym rozmiarze.',
      },
      en: {
        slug: 'bmp-to-png-converter',
        title: 'BMP to PNG',
        description:
          'Convert BMP images to lossless PNG. Preserve quality at a smaller file size.',
      },
      es: {
        slug: 'convertidor-bmp-a-png',
        title: 'BMP a PNG',
        description:
          'Convierte imágenes BMP a PNG sin pérdida. Conserva la calidad con menor tamaño.',
      },
      fr: {
        slug: 'convertisseur-bmp-en-png',
        title: 'BMP en PNG',
        description:
          'Convertissez vos images BMP en PNG sans perte. Qualité préservée, taille réduite.',
      },
      de: {
        slug: 'bmp-zu-png-konverter',
        title: 'BMP zu PNG',
        description:
          'BMP-Bilder verlustfrei in PNG umwandeln. Qualität erhalten, Dateigröße reduzieren.',
      },
      pt: {
        slug: 'conversor-bmp-para-png',
        title: 'BMP para PNG',
        description:
          'Converta imagens BMP para PNG sem perdas. Qualidade preservada, tamanho reduzido.',
      },
      it: {
        slug: 'convertitore-bmp-in-png',
        title: 'BMP in PNG',
        description:
          'Converti immagini BMP in PNG senza perdita. Qualità preservata, dimensioni ridotte.',
      },
      cs: {
        slug: 'prevodnik-bmp-na-png',
        title: 'BMP na PNG',
        description:
          'Převeďte obrázky BMP na bezeztrátové PNG. Kvalita zachována, velikost snížena.',
      },
    },
  },
  {
    key: 'gifToPng',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-gif-na-png',
        title: 'GIF na PNG',
        description:
          'Wyeksportuj pierwszą klatkę GIF-a jako statyczny obraz PNG. Bez utraty jakości.',
      },
      en: {
        slug: 'gif-to-png-converter',
        title: 'GIF to PNG',
        description:
          'Export the first frame of a GIF as a static PNG image. No quality loss.',
      },
      es: {
        slug: 'convertidor-gif-a-png',
        title: 'GIF a PNG',
        description:
          'Exporta el primer fotograma de un GIF como imagen PNG estática. Sin pérdida de calidad.',
      },
      fr: {
        slug: 'convertisseur-gif-en-png',
        title: 'GIF en PNG',
        description:
          "Exportez la première image d'un GIF en PNG statique. Sans perte de qualité.",
      },
      de: {
        slug: 'gif-zu-png-konverter',
        title: 'GIF zu PNG',
        description:
          'Erstes Bild eines GIFs als statisches PNG exportieren. Ohne Qualitätsverlust.',
      },
      pt: {
        slug: 'conversor-gif-para-png',
        title: 'GIF para PNG',
        description:
          'Exporte o primeiro fotograma de um GIF como PNG estático. Sem perdas de qualidade.',
      },
      it: {
        slug: 'convertitore-gif-in-png',
        title: 'GIF in PNG',
        description:
          'Esporta il primo fotogramma di un GIF come PNG statico. Senza perdita di qualità.',
      },
      cs: {
        slug: 'prevodnik-gif-na-png',
        title: 'GIF na PNG',
        description:
          'Exportujte první snímek GIFu jako statické PNG. Bez ztráty kvality.',
      },
    },
  },
  {
    key: 'gifToJpg',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-gif-na-jpg',
        title: 'GIF na JPG',
        description:
          'Wyeksportuj pierwszą klatkę GIF-a jako JPG. Mniejszy plik, szybsze ładowanie.',
      },
      en: {
        slug: 'gif-to-jpg-converter',
        title: 'GIF to JPG',
        description:
          'Export the first frame of a GIF as a JPG. Smaller file, faster page loads.',
      },
      es: {
        slug: 'convertidor-gif-a-jpg',
        title: 'GIF a JPG',
        description:
          'Exporta el primer fotograma de un GIF como JPG. Archivo más pequeño, carga más rápida.',
      },
      fr: {
        slug: 'convertisseur-gif-en-jpg',
        title: 'GIF en JPG',
        description:
          "Exportez la première image d'un GIF en JPG. Fichier réduit, chargement rapide.",
      },
      de: {
        slug: 'gif-zu-jpg-konverter',
        title: 'GIF zu JPG',
        description:
          'Erstes Bild eines GIFs als JPG exportieren. Kleinere Datei, schnelleres Laden.',
      },
      pt: {
        slug: 'conversor-gif-para-jpg',
        title: 'GIF para JPG',
        description:
          'Exporte o primeiro fotograma de um GIF como JPG compacto. Ficheiro menor.',
      },
      it: {
        slug: 'convertitore-gif-in-jpg',
        title: 'GIF in JPG',
        description:
          'Esporta il primo fotogramma di un GIF come JPG compatto. File più piccolo.',
      },
      cs: {
        slug: 'prevodnik-gif-na-jpg',
        title: 'GIF na JPG',
        description:
          'Exportujte první snímek GIFu jako kompaktní JPG. Menší soubor.',
      },
    },
  },
  {
    key: 'jpgToWebpSimple',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    carouselOrder: 1,
    desktopOnly: true,
    locales: {
      pl: {
        slug: 'konwerter-jpg-na-webp',
        title: 'JPG na WebP',
        description:
          'Zamień zdjęcia JPG na lekki WebP. Zmniejsz wagę obrazów nawet o 35%.',
      },
      en: {
        slug: 'jpg-to-webp-converter',
        title: 'JPG to WebP',
        description:
          'Convert JPG photos to lightweight WebP. Cut image weight by up to 35%.',
      },
      es: {
        slug: 'convertidor-jpg-a-webp',
        title: 'JPG a WebP',
        description:
          'Convierte fotos JPG a WebP ligero. Reduce el peso de las imágenes hasta un 35%.',
      },
      fr: {
        slug: 'convertisseur-jpg-en-webp',
        title: 'JPG en WebP',
        description:
          "Convertissez vos photos JPG en WebP léger. Réduisez le poids des images jusqu'à 35%.",
      },
      de: {
        slug: 'jpg-zu-webp-konverter',
        title: 'JPG zu WebP',
        description:
          'JPG-Fotos in leichtes WebP umwandeln. Bildgewicht um bis zu 35% reduzieren.',
      },
      pt: {
        slug: 'conversor-jpg-para-webp',
        title: 'JPG para WebP',
        description:
          'Converta fotos JPG para WebP leve. Reduza o peso das imagens até 35%.',
      },
      it: {
        slug: 'convertitore-jpg-in-webp',
        title: 'JPG in WebP',
        description:
          'Converti foto JPG in WebP leggero. Riduci il peso delle immagini fino al 35%.',
      },
      cs: {
        slug: 'prevodnik-jpg-na-webp',
        title: 'JPG na WebP',
        description:
          'Převeďte fotky JPG na lehké WebP. Snižte váhu obrázků až o 35%.',
      },
    },
  },
  {
    key: 'pngToWebpSimple',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: true,
    locales: {
      pl: {
        slug: 'konwerter-png-na-webp',
        title: 'PNG na WebP',
        description:
          'Zamień grafiki PNG na WebP. Mniejsze pliki przy zachowaniu przezroczystości.',
      },
      en: {
        slug: 'png-to-webp-converter',
        title: 'PNG to WebP',
        description:
          'Convert PNG graphics to WebP. Smaller files while preserving transparency.',
      },
      es: {
        slug: 'convertidor-png-a-webp',
        title: 'PNG a WebP',
        description:
          'Convierte gráficos PNG a WebP. Archivos más pequeños conservando la transparencia.',
      },
      fr: {
        slug: 'convertisseur-png-en-webp',
        title: 'PNG en WebP',
        description:
          'Convertissez vos graphiques PNG en WebP. Fichiers réduits, transparence préservée.',
      },
      de: {
        slug: 'png-zu-webp-konverter',
        title: 'PNG zu WebP',
        description:
          'PNG-Grafiken in WebP umwandeln. Kleinere Dateien bei erhaltener Transparenz.',
      },
      pt: {
        slug: 'conversor-png-para-webp',
        title: 'PNG para WebP',
        description:
          'Converta gráficos PNG para WebP. Ficheiros menores mantendo a transparência.',
      },
      it: {
        slug: 'convertitore-png-in-webp',
        title: 'PNG in WebP',
        description:
          'Converti grafiche PNG in WebP. File più piccoli mantenendo la trasparenza.',
      },
      cs: {
        slug: 'prevodnik-png-na-webp',
        title: 'PNG na WebP',
        description:
          'Převeďte grafiku PNG na WebP. Menší soubory se zachováním průhlednosti.',
      },
    },
  },
  // -------------------------------------------------------------------------
  // Canvas-only converters (SVG/GIF/BMP → WebP)
  // -------------------------------------------------------------------------
  {
    key: 'svgToWebp',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-svg-na-webp',
        title: 'SVG na WebP',
        description:
          'Zamień grafikę wektorową SVG na lekki WebP. Idealne do stron internetowych i mediów społecznościowych.',
      },
      en: {
        slug: 'svg-to-webp-converter',
        title: 'SVG to WebP',
        description:
          'Convert vector SVG to lightweight WebP. Ideal for websites and social media.',
      },
      es: {
        slug: 'convertidor-svg-a-webp',
        title: 'SVG a WebP',
        description:
          'Convierte graficos SVG a WebP ligero. Ideal para sitios web y redes sociales.',
      },
      fr: {
        slug: 'convertisseur-svg-en-webp',
        title: 'SVG en WebP',
        description:
          'Convertissez vos graphiques SVG en WebP leger. Ideal pour sites web et reseaux sociaux.',
      },
      de: {
        slug: 'svg-zu-webp-konverter',
        title: 'SVG zu WebP',
        description:
          'SVG-Vektorgrafiken in leichtes WebP umwandeln. Ideal für Websites und Social Media.',
      },
      pt: {
        slug: 'conversor-svg-para-webp',
        title: 'SVG para WebP',
        description:
          'Converta graficos SVG para WebP leve. Ideal para sites e redes sociais.',
      },
      it: {
        slug: 'convertitore-svg-in-webp',
        title: 'SVG in WebP',
        description:
          'Converti grafiche SVG in WebP leggero. Ideale per siti web e social media.',
      },
      cs: {
        slug: 'prevodnik-svg-na-webp',
        title: 'SVG na WebP',
        description:
          'Převeďte grafiku SVG na lehke WebP. Ideální pro weby a socialni site.',
      },
    },
  },
  {
    key: 'gifToWebp',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-gif-na-webp',
        title: 'GIF na WebP',
        description:
          'Zamień pierwszą klatkę GIF na lekki WebP. Mniejszy plik, szybsze ładowanie strony.',
      },
      en: {
        slug: 'gif-to-webp-converter',
        title: 'GIF to WebP',
        description:
          'Convert first GIF frame to lightweight WebP. Smaller file, faster loading.',
      },
      es: {
        slug: 'convertidor-gif-a-webp',
        title: 'GIF a WebP',
        description:
          'Convierte el primer fotograma GIF a WebP ligero. Archivo mas pequeno, carga rapida.',
      },
      fr: {
        slug: 'convertisseur-gif-en-webp',
        title: 'GIF en WebP',
        description:
          'Exportez la première image GIF en WebP leger. Fichier plus petit, chargement plus rapide.',
      },
      de: {
        slug: 'gif-zu-webp-konverter',
        title: 'GIF zu WebP',
        description:
          'Erstes GIF-Bild als leichtes WebP exportieren. Kleinere Datei, schnelleres Laden.',
      },
      pt: {
        slug: 'conversor-gif-para-webp',
        title: 'GIF para WebP',
        description:
          'Converta o primeiro fotograma GIF para WebP leve. Ficheiro menor, carregamento rapido.',
      },
      it: {
        slug: 'convertitore-gif-in-webp',
        title: 'GIF in WebP',
        description:
          'Esporta il primo fotogramma GIF in WebP leggero. File più piccolo, caricamento rapido.',
      },
      cs: {
        slug: 'prevodnik-gif-na-webp',
        title: 'GIF na WebP',
        description:
          'Exportujte první snímek GIFu jako lehke WebP. Mensi soubor, rychlejsi nacitani.',
      },
    },
  },
  {
    key: 'bmpToWebp',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-bmp-na-webp',
        title: 'BMP na WebP',
        description:
          'Zamień nieskompresowane pliki BMP na lekki WebP. Redukcja rozmiaru nawet o 95%.',
      },
      en: {
        slug: 'bmp-to-webp-converter',
        title: 'BMP to WebP',
        description:
          'Convert uncompressed BMP to lightweight WebP. Up to 95% size reduction.',
      },
      es: {
        slug: 'convertidor-bmp-a-webp',
        title: 'BMP a WebP',
        description:
          'Convierte archivos BMP a WebP ligero. Reduccion de tamano de hasta el 95%.',
      },
      fr: {
        slug: 'convertisseur-bmp-en-webp',
        title: 'BMP en WebP',
        description:
          'Convertissez les fichiers BMP en WebP leger. Reduction de taille pouvant atteindre 95%.',
      },
      de: {
        slug: 'bmp-zu-webp-konverter',
        title: 'BMP zu WebP',
        description:
          'Unkomprimierte BMP-Dateien in leichtes WebP umwandeln. Bis zu 95% Größenreduktion.',
      },
      pt: {
        slug: 'conversor-bmp-para-webp',
        title: 'BMP para WebP',
        description:
          'Converta ficheiros BMP para WebP leve. Reducao de tamanho até 95%.',
      },
      it: {
        slug: 'convertitore-bmp-in-webp',
        title: 'BMP in WebP',
        description:
          'Converti file BMP in WebP leggero. Riduzione delle dimensioni fino al 95%.',
      },
      cs: {
        slug: 'prevodnik-bmp-na-webp',
        title: 'BMP na WebP',
        description:
          'Převeďte soubory BMP na lehke WebP. Snizeni velikosti az o 95%.',
      },
    },
  },
  {
    key: 'avifToJpg',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-avif-na-jpg',
        title: 'AVIF na JPG',
        description:
          'Zamień pliki AVIF na uniwersalny JPG. Kompatybilność z każdym programem i platformą.',
      },
      en: {
        slug: 'avif-to-jpg-converter',
        title: 'AVIF to JPG',
        description:
          'Convert AVIF files to universal JPG. Compatible with every app and platform.',
      },
      es: {
        slug: 'convertidor-avif-a-jpg',
        title: 'AVIF a JPG',
        description:
          'Convierte archivos AVIF a JPG universal. Compatible con cualquier programa y plataforma.',
      },
      fr: {
        slug: 'convertisseur-avif-en-jpg',
        title: 'AVIF en JPG',
        description:
          'Convertissez les fichiers AVIF en JPG universel. Compatible avec tous les programmes.',
      },
      de: {
        slug: 'avif-zu-jpg-konverter',
        title: 'AVIF zu JPG',
        description:
          'AVIF-Dateien in universelles JPG umwandeln. Kompatibel mit jedem Programm und Plattform.',
      },
      pt: {
        slug: 'conversor-avif-para-jpg',
        title: 'AVIF para JPG',
        description:
          'Converta ficheiros AVIF para JPG universal. Compativel com qualquer programa e plataforma.',
      },
      it: {
        slug: 'convertitore-avif-in-jpg',
        title: 'AVIF in JPG',
        description:
          'Converti file AVIF in JPG universale. Compatibile con ogni programma e piattaforma.',
      },
      cs: {
        slug: 'prevodnik-avif-na-jpg',
        title: 'AVIF na JPG',
        description:
          'Převeďte soubory AVIF na univerzální JPG. Kompatibilní s každým programem.',
      },
    },
  },
  {
    key: 'avifToPng',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-avif-na-png',
        title: 'AVIF na PNG',
        description:
          'Zamień pliki AVIF na bezstratny PNG. Zachowaj pełną jakość i przezroczystość obrazu.',
      },
      en: {
        slug: 'avif-to-png-converter',
        title: 'AVIF to PNG',
        description:
          'Convert AVIF files to lossless PNG. Preserve full quality and transparency.',
      },
      es: {
        slug: 'convertidor-avif-a-png',
        title: 'AVIF a PNG',
        description:
          'Convierte archivos AVIF a PNG sin pérdidas. Conserva calidad y transparencia.',
      },
      fr: {
        slug: 'convertisseur-avif-en-png',
        title: 'AVIF en PNG',
        description:
          'Convertissez les fichiers AVIF en PNG sans perte. Qualite et transparence preservees.',
      },
      de: {
        slug: 'avif-zu-png-konverter',
        title: 'AVIF zu PNG',
        description:
          'AVIF-Dateien in verlustfreies PNG umwandeln. Volle Qualität und Transparenz erhalten.',
      },
      pt: {
        slug: 'conversor-avif-para-png',
        title: 'AVIF para PNG',
        description:
          'Converta ficheiros AVIF para PNG sem perdas. Qualidade e transparência preservadas.',
      },
      it: {
        slug: 'convertitore-avif-in-png',
        title: 'AVIF in PNG',
        description:
          'Converti file AVIF in PNG lossless. Qualita e trasparenza preservate.',
      },
      cs: {
        slug: 'prevodnik-avif-na-png',
        title: 'AVIF na PNG',
        description:
          'Převeďte soubory AVIF na bezztratove PNG. Zachovani plne kvality a pruhlednosti.',
      },
    },
  },
  {
    key: 'avifToWebp',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-avif-na-webp',
        title: 'AVIF na WebP',
        description:
          'Zamień pliki AVIF na WebP. Szeroka kompatybilność przy zachowaniu małego rozmiaru.',
      },
      en: {
        slug: 'avif-to-webp-converter',
        title: 'AVIF to WebP',
        description:
          'Convert AVIF files to WebP. Wide compatibility at a small file size.',
      },
      es: {
        slug: 'convertidor-avif-a-webp',
        title: 'AVIF a WebP',
        description:
          'Convierte archivos AVIF a WebP. Amplia compatibilidad con tamano reducido.',
      },
      fr: {
        slug: 'convertisseur-avif-en-webp',
        title: 'AVIF en WebP',
        description:
          'Convertissez les fichiers AVIF en WebP. Large compatibilite, taille reduite.',
      },
      de: {
        slug: 'avif-zu-webp-konverter',
        title: 'AVIF zu WebP',
        description:
          'AVIF-Dateien in WebP umwandeln. Breite Kompatibilitat bei kleiner Dateigrose.',
      },
      pt: {
        slug: 'conversor-avif-para-webp',
        title: 'AVIF para WebP',
        description:
          'Converta ficheiros AVIF para WebP. Ampla compatibilidade com tamanho reduzido.',
      },
      it: {
        slug: 'convertitore-avif-in-webp',
        title: 'AVIF in WebP',
        description:
          'Converti file AVIF in WebP. Ampia compatibilità con dimensioni ridotte.',
      },
      cs: {
        slug: 'prevodnik-avif-na-webp',
        title: 'AVIF na WebP',
        description:
          'Převeďte soubory AVIF na WebP. Siroka kompatibilita pri male velikosti.',
      },
    },
  },
  // -------------------------------------------------------------------------
  // HEIC converters (heic2any - dynamic import)
  // -------------------------------------------------------------------------
  {
    key: 'heicToJpg',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-heic-na-jpg',
        title: 'HEIC na JPG',
        description:
          'Zamień zdjęcia HEIC z iPhone na uniwersalny JPG. Bez rejestracji, bez wysyłania na serwer.',
      },
      en: {
        slug: 'heic-to-jpg-converter',
        title: 'HEIC to JPG',
        description:
          'Convert iPhone HEIC photos to universal JPG. No signup, no server uploads.',
      },
      es: {
        slug: 'convertidor-heic-a-jpg',
        title: 'HEIC a JPG',
        description:
          'Convierte fotos HEIC de iPhone a JPG universal. Sin registro, sin subir al servidor.',
      },
      fr: {
        slug: 'convertisseur-heic-en-jpg',
        title: 'HEIC en JPG',
        description:
          'Convertissez les photos HEIC iPhone en JPG universel. Sans inscription, sans envoi serveur.',
      },
      de: {
        slug: 'heic-zu-jpg-konverter',
        title: 'HEIC zu JPG',
        description:
          'iPhone HEIC-Fotos in universelles JPG umwandeln. Ohne Registrierung, ohne Server-Upload.',
      },
      pt: {
        slug: 'conversor-heic-para-jpg',
        title: 'HEIC para JPG',
        description:
          'Converta fotos HEIC do iPhone para JPG universal. Sem registo, sem envio para servidor.',
      },
      it: {
        slug: 'convertitore-heic-in-jpg',
        title: 'HEIC in JPG',
        description:
          'Converti foto HEIC da iPhone in JPG universale. Senza registrazione, senza upload.',
      },
      cs: {
        slug: 'prevodnik-heic-na-jpg',
        title: 'HEIC na JPG',
        description:
          'Převeďte fotky HEIC z iPhonu na univerzální JPG. Bez registrace, bez nahravani na server.',
      },
    },
  },
  {
    key: 'heicToPng',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-heic-na-png',
        title: 'HEIC na PNG',
        description:
          'Zamień zdjęcia HEIC z iPhone na bezstratny PNG. Pełna jakość i przezroczystość.',
      },
      en: {
        slug: 'heic-to-png-converter',
        title: 'HEIC to PNG',
        description:
          'Convert iPhone HEIC photos to lossless PNG. Full quality and transparency.',
      },
      es: {
        slug: 'convertidor-heic-a-png',
        title: 'HEIC a PNG',
        description:
          'Convierte fotos HEIC de iPhone a PNG sin pérdidas. Calidad y transparencia completas.',
      },
      fr: {
        slug: 'convertisseur-heic-en-png',
        title: 'HEIC en PNG',
        description:
          'Convertissez les photos HEIC iPhone en PNG sans perte. Qualite et transparence completes.',
      },
      de: {
        slug: 'heic-zu-png-konverter',
        title: 'HEIC zu PNG',
        description:
          'iPhone HEIC-Fotos in verlustfreies PNG umwandeln. Volle Qualität und Transparenz.',
      },
      pt: {
        slug: 'conversor-heic-para-png',
        title: 'HEIC para PNG',
        description:
          'Converta fotos HEIC do iPhone para PNG sem perdas. Qualidade e transparência completas.',
      },
      it: {
        slug: 'convertitore-heic-in-png',
        title: 'HEIC in PNG',
        description:
          'Converti foto HEIC da iPhone in PNG lossless. Qualita e trasparenza complete.',
      },
      cs: {
        slug: 'prevodnik-heic-na-png',
        title: 'HEIC na PNG',
        description:
          'Převeďte fotky HEIC z iPhonu na bezztratove PNG. Plna kvalita a pruhlednost.',
      },
    },
  },
  {
    key: 'heicToWebp',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-heic-na-webp',
        title: 'HEIC na WebP',
        description:
          'Zamień zdjęcia HEIC z iPhone na lekki WebP. Mniejszy rozmiar, szybsze ładowanie.',
      },
      en: {
        slug: 'heic-to-webp-converter',
        title: 'HEIC to WebP',
        description:
          'Convert iPhone HEIC photos to lightweight WebP. Smaller size, faster loading.',
      },
      es: {
        slug: 'convertidor-heic-a-webp',
        title: 'HEIC a WebP',
        description:
          'Convierte fotos HEIC de iPhone a WebP ligero. Menor tamano, carga mas rapida.',
      },
      fr: {
        slug: 'convertisseur-heic-en-webp',
        title: 'HEIC en WebP',
        description:
          'Convertissez les photos HEIC iPhone en WebP leger. Taille reduite, chargement rapide.',
      },
      de: {
        slug: 'heic-zu-webp-konverter',
        title: 'HEIC zu WebP',
        description:
          'iPhone HEIC-Fotos in leichtes WebP umwandeln. Kleinere Datei, schnelleres Laden.',
      },
      pt: {
        slug: 'conversor-heic-para-webp',
        title: 'HEIC para WebP',
        description:
          'Converta fotos HEIC do iPhone para WebP leve. Menor tamanho, carregamento mais rapido.',
      },
      it: {
        slug: 'convertitore-heic-in-webp',
        title: 'HEIC in WebP',
        description:
          'Converti foto HEIC da iPhone in WebP leggero. Dimensioni ridotte, caricamento rapido.',
      },
      cs: {
        slug: 'prevodnik-heic-na-webp',
        title: 'HEIC na WebP',
        description:
          'Převeďte fotky HEIC z iPhonu na lehke WebP. Mensi velikost, rychlejsi nacitani.',
      },
    },
  },
  // -------------------------------------------------------------------------
  // TIFF converters (utif2 - dynamic import)
  // -------------------------------------------------------------------------
  {
    key: 'tiffToJpg',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-tiff-na-jpg',
        title: 'TIFF na JPG',
        description:
          'Zamień pliki TIFF na kompaktowy JPG. Idealne do skanów, dokumentów i archiwów fotograficznych.',
      },
      en: {
        slug: 'tiff-to-jpg-converter',
        title: 'TIFF to JPG',
        description:
          'Convert TIFF files to compact JPG. Ideal for scans, documents and photo archives.',
      },
      es: {
        slug: 'convertidor-tiff-a-jpg',
        title: 'TIFF a JPG',
        description:
          'Convierte archivos TIFF a JPG compacto. Ideal para escaneos y archivos fotograficos.',
      },
      fr: {
        slug: 'convertisseur-tiff-en-jpg',
        title: 'TIFF en JPG',
        description:
          'Convertissez les fichiers TIFF en JPG compact. Ideal pour scans et archives photo.',
      },
      de: {
        slug: 'tiff-zu-jpg-konverter',
        title: 'TIFF zu JPG',
        description:
          'TIFF-Dateien in kompaktes JPG umwandeln. Ideal für Scans, Dokumente und Fotoarchive.',
      },
      pt: {
        slug: 'conversor-tiff-para-jpg',
        title: 'TIFF para JPG',
        description:
          'Converta ficheiros TIFF para JPG compacto. Ideal para digitalizacoes e arquivos de fotos.',
      },
      it: {
        slug: 'convertitore-tiff-in-jpg',
        title: 'TIFF in JPG',
        description:
          'Converti file TIFF in JPG compatto. Ideale per scansioni, documenti e archivi foto.',
      },
      cs: {
        slug: 'prevodnik-tiff-na-jpg',
        title: 'TIFF na JPG',
        description:
          'Převeďte soubory TIFF na kompaktni JPG. Ideální pro skeny a fotoarchivy.',
      },
    },
  },
  {
    key: 'tiffToPng',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-tiff-na-png',
        title: 'TIFF na PNG',
        description:
          'Zamień pliki TIFF na bezstratny PNG. Zachowaj pełną jakość skanów i grafik.',
      },
      en: {
        slug: 'tiff-to-png-converter',
        title: 'TIFF to PNG',
        description:
          'Convert TIFF files to lossless PNG. Preserve full quality of scans and graphics.',
      },
      es: {
        slug: 'convertidor-tiff-a-png',
        title: 'TIFF a PNG',
        description:
          'Convierte archivos TIFF a PNG sin pérdidas. Conserva la calidad de escaneos y graficos.',
      },
      fr: {
        slug: 'convertisseur-tiff-en-png',
        title: 'TIFF en PNG',
        description:
          'Convertissez les fichiers TIFF en PNG sans perte. Qualite des scans preservee.',
      },
      de: {
        slug: 'tiff-zu-png-konverter',
        title: 'TIFF zu PNG',
        description:
          'TIFF-Dateien in verlustfreies PNG umwandeln. Volle Qualität von Scans erhalten.',
      },
      pt: {
        slug: 'conversor-tiff-para-png',
        title: 'TIFF para PNG',
        description:
          'Converta ficheiros TIFF para PNG sem perdas. Preserve a qualidade das digitalizacoes.',
      },
      it: {
        slug: 'convertitore-tiff-in-png',
        title: 'TIFF in PNG',
        description:
          'Converti file TIFF in PNG lossless. Preserva la qualità di scansioni e grafiche.',
      },
      cs: {
        slug: 'prevodnik-tiff-na-png',
        title: 'TIFF na PNG',
        description:
          'Převeďte soubory TIFF na bezztratove PNG. Zachovejte plnou kvalitu skenu.',
      },
    },
  },
  {
    key: 'tiffToWebp',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-tiff-na-webp',
        title: 'TIFF na WebP',
        description:
          'Zamień pliki TIFF na lekki WebP. Ogromna redukcja rozmiaru przy zachowaniu jakości.',
      },
      en: {
        slug: 'tiff-to-webp-converter',
        title: 'TIFF to WebP',
        description:
          'Convert TIFF files to lightweight WebP. Massive size reduction with quality preserved.',
      },
      es: {
        slug: 'convertidor-tiff-a-webp',
        title: 'TIFF a WebP',
        description:
          'Convierte archivos TIFF a WebP ligero. Enorme reduccion de tamano con calidad preservada.',
      },
      fr: {
        slug: 'convertisseur-tiff-en-webp',
        title: 'TIFF en WebP',
        description:
          'Convertissez les fichiers TIFF en WebP leger. Enorme reduction avec qualite preservee.',
      },
      de: {
        slug: 'tiff-zu-webp-konverter',
        title: 'TIFF zu WebP',
        description:
          'TIFF-Dateien in leichtes WebP umwandeln. Massive Größenreduktion bei erhaltener Qualität.',
      },
      pt: {
        slug: 'conversor-tiff-para-webp',
        title: 'TIFF para WebP',
        description:
          'Converta ficheiros TIFF para WebP leve. Enorme reducao de tamanho com qualidade preservada.',
      },
      it: {
        slug: 'convertitore-tiff-in-webp',
        title: 'TIFF in WebP',
        description:
          'Converti file TIFF in WebP leggero. Enorme riduzione con qualità preservata.',
      },
      cs: {
        slug: 'prevodnik-tiff-na-webp',
        title: 'TIFF na WebP',
        description:
          'Převeďte soubory TIFF na lehke WebP. Masivni snizeni velikosti se zachovanim kvality.',
      },
    },
  },
  {
    key: 'jpgToAvif',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-jpg-na-avif',
        title: 'JPG na AVIF',
        description:
          'Zamień zdjęcia JPG na nowoczesny AVIF. Kompresja nawet 50% lepsza niż JPG przy zachowaniu jakości.',
      },
      en: {
        slug: 'jpg-to-avif-converter',
        title: 'JPG to AVIF',
        description:
          'Convert JPG photos to modern AVIF. Up to 50% better compression thän JPG while maintaining quality.',
      },
      de: {
        slug: 'jpg-zu-avif-konverter',
        title: 'JPG zu AVIF',
        description:
          'JPG-Fotos in modernes AVIF umwandeln. Bis zu 50% bessere Kompression als JPG bei gleicher Qualität.',
      },
      es: {
        slug: 'convertidor-jpg-a-avif',
        title: 'JPG a AVIF',
        description:
          'Convierte fotos JPG a AVIF moderno. Compresión hasta un 50% mejor que JPG manteniendo la calidad.',
      },
      fr: {
        slug: 'convertisseur-jpg-en-avif',
        title: 'JPG en AVIF',
        description:
          "Convertissez les photos JPG en AVIF moderne. Compression jusqu'à 50% meilleure que JPG.",
      },
      pt: {
        slug: 'conversor-jpg-para-avif',
        title: 'JPG para AVIF',
        description:
          'Converta fotos JPG para AVIF moderno. Compressão até 50% melhor que JPG mantendo a qualidade.',
      },
      it: {
        slug: 'convertitore-jpg-in-avif',
        title: 'JPG in AVIF',
        description:
          'Converti foto JPG in AVIF moderno. Compressione fino al 50% migliore di JPG mantenendo la qualità.',
      },
      cs: {
        slug: 'prevodnik-jpg-na-avif',
        title: 'JPG na AVIF',
        description:
          'Převeďte fotky JPG na moderní AVIF. Az o 50% lepší komprese než JPG pri zachování kvality.',
      },
    },
  },
  {
    key: 'pngToAvif',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-png-na-avif',
        title: 'PNG na AVIF',
        description:
          'Zamień grafiki PNG na AVIF z zachowaniem przezroczystości. Znacznie mniejsze pliki.',
      },
      en: {
        slug: 'png-to-avif-converter',
        title: 'PNG to AVIF',
        description:
          'Convert PNG graphics to AVIF with transparency support. Significantly smaller files.',
      },
      de: {
        slug: 'png-zu-avif-konverter',
        title: 'PNG zu AVIF',
        description:
          'PNG-Grafiken in AVIF umwandeln mit Transparenzunterstützung. Deutlich kleinere Dateien.',
      },
      es: {
        slug: 'convertidor-png-a-avif',
        title: 'PNG a AVIF',
        description:
          'Convierte graficos PNG a AVIF con soporte de transparencia. Archivos significativamente más pequeños.',
      },
      fr: {
        slug: 'convertisseur-png-en-avif',
        title: 'PNG en AVIF',
        description:
          'Convertissez les graphiques PNG en AVIF avec transparence. Fichiers beaucoup plus petits.',
      },
      pt: {
        slug: 'conversor-png-para-avif',
        title: 'PNG para AVIF',
        description:
          'Converta graficos PNG para AVIF com suporte a transparência. Ficheiros significativamente menores.',
      },
      it: {
        slug: 'convertitore-png-in-avif',
        title: 'PNG in AVIF',
        description:
          'Converti grafiche PNG in AVIF con supporto trasparenza. File notevolmente più piccoli.',
      },
      cs: {
        slug: 'prevodnik-png-na-avif',
        title: 'PNG na AVIF',
        description:
          'Převeďte grafiku PNG na AVIF s podporou pruhlednosti. Vyrazne mensi soubory.',
      },
    },
  },
  {
    key: 'webpToAvif',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-webp-na-avif',
        title: 'WebP na AVIF',
        description:
          'Zamień pliki WebP na AVIF. Jeszcze lepsza kompresja w nowoczesnym formacie.',
      },
      en: {
        slug: 'webp-to-avif-converter',
        title: 'WebP to AVIF',
        description:
          'Convert WebP files to AVIF. Even better compression in a modern format.',
      },
      de: {
        slug: 'webp-zu-avif-konverter',
        title: 'WebP zu AVIF',
        description:
          'WebP-Dateien in AVIF umwandeln. Noch bessere Kompression im modernen Format.',
      },
      es: {
        slug: 'convertidor-webp-a-avif',
        title: 'WebP a AVIF',
        description:
          'Convierte archivos WebP a AVIF. Compresión aún mejor en formato moderno.',
      },
      fr: {
        slug: 'convertisseur-webp-en-avif',
        title: 'WebP en AVIF',
        description:
          'Convertissez les fichiers WebP en AVIF. Compression encore meilleure dans un format moderne.',
      },
      pt: {
        slug: 'conversor-webp-para-avif',
        title: 'WebP para AVIF',
        description:
          'Converta ficheiros WebP para AVIF. Compressão ainda melhor num formato moderno.',
      },
      it: {
        slug: 'convertitore-webp-in-avif',
        title: 'WebP in AVIF',
        description:
          'Converti file WebP in AVIF. Compressione ancora migliore in un formato moderno.',
      },
      cs: {
        slug: 'prevodnik-webp-na-avif',
        title: 'WebP na AVIF',
        description:
          'Převeďte soubory WebP na AVIF. Jeste lepší komprese v modernim formatu.',
      },
    },
  },
  {
    key: 'svgToAvif',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-svg-na-avif',
        title: 'SVG na AVIF',
        description:
          'Zamień grafikę wektorową SVG na nowoczesny format rastrowy AVIF.',
      },
      en: {
        slug: 'svg-to-avif-converter',
        title: 'SVG to AVIF',
        description:
          'Convert vector SVG graphics to compact AVIF raster format.',
      },
      de: {
        slug: 'svg-zu-avif-konverter',
        title: 'SVG zu AVIF',
        description:
          'Vektor-SVG-Grafiken in kompaktes AVIF-Rasterformat umwandeln.',
      },
      es: {
        slug: 'convertidor-svg-a-avif',
        title: 'SVG a AVIF',
        description:
          'Convierte graficos vectoriales SVG a formato raster AVIF compacto.',
      },
      fr: {
        slug: 'convertisseur-svg-en-avif',
        title: 'SVG en AVIF',
        description:
          'Convertissez les graphiques vectoriels SVG en format raster AVIF compact.',
      },
      pt: {
        slug: 'conversor-svg-para-avif',
        title: 'SVG para AVIF',
        description:
          'Converta graficos vetoriais SVG para formato raster AVIF compacto.',
      },
      it: {
        slug: 'convertitore-svg-in-avif',
        title: 'SVG in AVIF',
        description:
          'Converti grafiche vettoriali SVG in formato raster AVIF compatto.',
      },
      cs: {
        slug: 'prevodnik-svg-na-avif',
        title: 'SVG na AVIF',
        description:
          'Převeďte vektorovou grafiku SVG na kompaktni rastrovy format AVIF.',
      },
    },
  },
  {
    key: 'bmpToAvif',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-bmp-na-avif',
        title: 'BMP na AVIF',
        description:
          'Zamień nieskompresowane pliki BMP na nowoczesny AVIF. Ogromna redukcja rozmiaru.',
      },
      en: {
        slug: 'bmp-to-avif-converter',
        title: 'BMP to AVIF',
        description: 'Convert uncompressed BMP files to ultra-compact AVIF.',
      },
      de: {
        slug: 'bmp-zu-avif-konverter',
        title: 'BMP zu AVIF',
        description:
          'Unkomprimierte BMP-Dateien in ultrakompaktes AVIF umwandeln.',
      },
      es: {
        slug: 'convertidor-bmp-a-avif',
        title: 'BMP a AVIF',
        description:
          'Convierte archivos BMP sin comprimir a AVIF ultracompacto.',
      },
      fr: {
        slug: 'convertisseur-bmp-en-avif',
        title: 'BMP en AVIF',
        description:
          'Convertissez les fichiers BMP non compresses en AVIF ultra-compact.',
      },
      pt: {
        slug: 'conversor-bmp-para-avif',
        title: 'BMP para AVIF',
        description:
          'Converta ficheiros BMP não comprimidos para AVIF ultracompacto.',
      },
      it: {
        slug: 'convertitore-bmp-in-avif',
        title: 'BMP in AVIF',
        description: 'Converti file BMP non compressi in AVIF ultracompatto.',
      },
      cs: {
        slug: 'prevodnik-bmp-na-avif',
        title: 'BMP na AVIF',
        description:
          'Převeďte nekomprimované soubory BMP na ultrakompaktní AVIF.',
      },
    },
  },
  {
    key: 'gifToAvif',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-gif-na-avif',
        title: 'GIF na AVIF',
        description:
          'Zamień pierwszą klatkę GIF na nowoczesny AVIF. Mniejszy plik, lepsza jakość.',
      },
      en: {
        slug: 'gif-to-avif-converter',
        title: 'GIF to AVIF',
        description:
          'Convert GIF first frame to static AVIF image with excellent compression.',
      },
      de: {
        slug: 'gif-zu-avif-konverter',
        title: 'GIF zu AVIF',
        description:
          'Erstes GIF-Frame in statisches AVIF-Bild mit exzellenter Kompression umwandeln.',
      },
      es: {
        slug: 'convertidor-gif-a-avif',
        title: 'GIF a AVIF',
        description:
          'Convierte el primer fotograma GIF a imagen AVIF estatica con excelente compresion.',
      },
      fr: {
        slug: 'convertisseur-gif-en-avif',
        title: 'GIF en AVIF',
        description:
          'Convertissez la première image GIF en image AVIF statique avec excellente compression.',
      },
      pt: {
        slug: 'conversor-gif-para-avif',
        title: 'GIF para AVIF',
        description:
          'Converta o primeiro quadro GIF para imagem AVIF estatica com excelente compressao.',
      },
      it: {
        slug: 'convertitore-gif-in-avif',
        title: 'GIF in AVIF',
        description:
          'Converti il primo fotogramma GIF in immagine AVIF statica con compressione eccellente.',
      },
      cs: {
        slug: 'prevodnik-gif-na-avif',
        title: 'GIF na AVIF',
        description:
          'Převeďte první snimek GIF na staticky obraz AVIF s vynikajici kompresi.',
      },
    },
  },
  {
    key: 'heicToAvif',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-heic-na-avif',
        title: 'HEIC na AVIF',
        description:
          'Zamień zdjęcia HEIC z iPhone na AVIF. Nowoczesny format webowy o doskonałej kompresji.',
      },
      en: {
        slug: 'heic-to-avif-converter',
        title: 'HEIC to AVIF',
        description: 'Convert iPhone HEIC photos to modern AVIF format.',
      },
      de: {
        slug: 'heic-zu-avif-konverter',
        title: 'HEIC zu AVIF',
        description: 'iPhone HEIC-Fotos in modernes AVIF-Format umwandeln.',
      },
      es: {
        slug: 'convertidor-heic-a-avif',
        title: 'HEIC a AVIF',
        description: 'Convierte fotos HEIC del iPhone a formato AVIF moderno.',
      },
      fr: {
        slug: 'convertisseur-heic-en-avif',
        title: 'HEIC en AVIF',
        description:
          "Convertissez les photos HEIC d'iPhone en format AVIF moderne.",
      },
      pt: {
        slug: 'conversor-heic-para-avif',
        title: 'HEIC para AVIF',
        description: 'Converta fotos HEIC do iPhone para formato AVIF moderno.',
      },
      it: {
        slug: 'convertitore-heic-in-avif',
        title: 'HEIC in AVIF',
        description: "Converti foto HEIC dell'iPhone in formato AVIF moderno.",
      },
      cs: {
        slug: 'prevodnik-heic-na-avif',
        title: 'HEIC na AVIF',
        description: 'Převeďte fotky HEIC z iPhonu na moderní formát AVIF.',
      },
    },
  },
  {
    key: 'tiffToAvif',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-tiff-na-avif',
        title: 'TIFF na AVIF',
        description:
          'Zamień pliki TIFF na nowoczesny AVIF. Idealne do publikacji skanów w internecie.',
      },
      en: {
        slug: 'tiff-to-avif-converter',
        title: 'TIFF to AVIF',
        description:
          'Convert TIFF files to modern AVIF. Massive file size reduction.',
      },
      de: {
        slug: 'tiff-zu-avif-konverter',
        title: 'TIFF zu AVIF',
        description:
          'TIFF-Dateien in modernes AVIF umwandeln. Massive Dateigrossen-Reduzierung.',
      },
      es: {
        slug: 'convertidor-tiff-a-avif',
        title: 'TIFF a AVIF',
        description:
          'Convierte archivos TIFF a AVIF moderno. Reduccion masiva del tamano de archivo.',
      },
      fr: {
        slug: 'convertisseur-tiff-en-avif',
        title: 'TIFF en AVIF',
        description:
          'Convertissez les fichiers TIFF en AVIF moderne. Reduction massive de la taille.',
      },
      pt: {
        slug: 'conversor-tiff-para-avif',
        title: 'TIFF para AVIF',
        description:
          'Converta ficheiros TIFF para AVIF moderno. Reducao massiva do tamanho do ficheiro.',
      },
      it: {
        slug: 'convertitore-tiff-in-avif',
        title: 'TIFF in AVIF',
        description:
          'Converti file TIFF in AVIF moderno. Riduzione massiva delle dimensioni del file.',
      },
      cs: {
        slug: 'prevodnik-tiff-na-avif',
        title: 'TIFF na AVIF',
        description:
          'Převeďte soubory TIFF na moderní AVIF. Masivni snizeni velikosti souboru.',
      },
    },
  },
  {
    key: 'jpgToGif',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-jpg-na-gif',
        title: 'JPG na GIF',
        description:
          'Zamień zdjęcia JPG na format GIF. Statyczny obraz w formacie obsługiwanym przez każdą platformę.',
      },
      en: {
        slug: 'jpg-to-gif-converter',
        title: 'JPG to GIF',
        description:
          'Convert JPG photos to GIF format. Perfect for simple graphics and icons.',
      },
      de: {
        slug: 'jpg-zu-gif-konverter',
        title: 'JPG zu GIF',
        description:
          'JPG-Fotos in GIF-Format umwandeln. Perfekt für einfache Grafiken und Icons.',
      },
      es: {
        slug: 'convertidor-jpg-a-gif',
        title: 'JPG a GIF',
        description:
          'Convierte fotos JPG a formato GIF. Perfecto para graficos simples e iconos.',
      },
      fr: {
        slug: 'convertisseur-jpg-en-gif',
        title: 'JPG en GIF',
        description:
          'Convertissez les photos JPG en format GIF. Parfait pour graphiques simples et icones.',
      },
      pt: {
        slug: 'conversor-jpg-para-gif',
        title: 'JPG para GIF',
        description:
          'Converta fotos JPG para formato GIF. Perfeito para graficos simples e icones.',
      },
      it: {
        slug: 'convertitore-jpg-in-gif',
        title: 'JPG in GIF',
        description:
          'Converti foto JPG in formato GIF. Perfetto per grafiche semplici e icone.',
      },
      cs: {
        slug: 'prevodnik-jpg-na-gif',
        title: 'JPG na GIF',
        description:
          'Převeďte fotky JPG na format GIF. Ideální pro jednoduchou grafiku a ikony.',
      },
    },
  },
  {
    key: 'pngToGif',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-png-na-gif',
        title: 'PNG na GIF',
        description:
          'Zamień grafiki PNG na GIF. Idealne do prostych ikon i grafik z ograniczoną paletą kolorów.',
      },
      en: {
        slug: 'png-to-gif-converter',
        title: 'PNG to GIF',
        description:
          'Convert PNG graphics to GIF. Ideal for simple icons and graphics.',
      },
      de: {
        slug: 'png-zu-gif-konverter',
        title: 'PNG zu GIF',
        description:
          'PNG-Grafiken in GIF umwandeln. Ideal für einfache Icons und Grafiken.',
      },
      es: {
        slug: 'convertidor-png-a-gif',
        title: 'PNG a GIF',
        description:
          'Convierte graficos PNG a GIF. Ideal para iconos simples y graficos.',
      },
      fr: {
        slug: 'convertisseur-png-en-gif',
        title: 'PNG en GIF',
        description:
          'Convertissez les graphiques PNG en GIF. Ideal pour icones simples et graphiques.',
      },
      pt: {
        slug: 'conversor-png-para-gif',
        title: 'PNG para GIF',
        description:
          'Converta graficos PNG para GIF. Ideal para icones simples e graficos.',
      },
      it: {
        slug: 'convertitore-png-in-gif',
        title: 'PNG in GIF',
        description:
          'Converti grafiche PNG in GIF. Ideale per icone semplici e grafiche.',
      },
      cs: {
        slug: 'prevodnik-png-na-gif',
        title: 'PNG na GIF',
        description:
          'Převeďte grafiku PNG na GIF. Ideální pro jednoduche ikony a grafiku.',
      },
    },
  },
  {
    key: 'webpToGif',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-webp-na-gif',
        title: 'WebP na GIF',
        description:
          'Zamień pliki WebP na GIF. Szeroka kompatybilność z programami i platformami.',
      },
      en: {
        slug: 'webp-to-gif-converter',
        title: 'WebP to GIF',
        description:
          'Convert WebP images to GIF format for maximum compatibility.',
      },
      de: {
        slug: 'webp-zu-gif-konverter',
        title: 'WebP zu GIF',
        description:
          'WebP-Bilder in GIF-Format umwandeln für maximale Kompatibilitat.',
      },
      es: {
        slug: 'convertidor-webp-a-gif',
        title: 'WebP a GIF',
        description:
          'Convierte imagenes WebP a formato GIF para maxima compatibilidad.',
      },
      fr: {
        slug: 'convertisseur-webp-en-gif',
        title: 'WebP en GIF',
        description:
          'Convertissez les images WebP en format GIF pour une compatibilite maximale.',
      },
      pt: {
        slug: 'conversor-webp-para-gif',
        title: 'WebP para GIF',
        description:
          'Converta imagens WebP para formato GIF para maxima compatibilidade.',
      },
      it: {
        slug: 'convertitore-webp-in-gif',
        title: 'WebP in GIF',
        description:
          'Converti immagini WebP in formato GIF per massima compatibilità.',
      },
      cs: {
        slug: 'prevodnik-webp-na-gif',
        title: 'WebP na GIF',
        description:
          'Převeďte obrazky WebP na format GIF pro maximalni kompatibilitu.',
      },
    },
  },
  {
    key: 'svgToGif',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-svg-na-gif',
        title: 'SVG na GIF',
        description:
          'Zamień grafikę wektorową SVG na rastrowy GIF. Uniwersalny format dla prostych grafik.',
      },
      en: {
        slug: 'svg-to-gif-converter',
        title: 'SVG to GIF',
        description: 'Convert vector SVG graphics to GIF raster format.',
      },
      de: {
        slug: 'svg-zu-gif-konverter',
        title: 'SVG zu GIF',
        description: 'Vektor-SVG-Grafiken in GIF-Rasterformat umwandeln.',
      },
      es: {
        slug: 'convertidor-svg-a-gif',
        title: 'SVG a GIF',
        description: 'Convierte graficos vectoriales SVG a formato raster GIF.',
      },
      fr: {
        slug: 'convertisseur-svg-en-gif',
        title: 'SVG en GIF',
        description:
          'Convertissez les graphiques vectoriels SVG en format raster GIF.',
      },
      pt: {
        slug: 'conversor-svg-para-gif',
        title: 'SVG para GIF',
        description: 'Converta graficos vetoriais SVG para formato raster GIF.',
      },
      it: {
        slug: 'convertitore-svg-in-gif',
        title: 'SVG in GIF',
        description: 'Converti grafiche vettoriali SVG in formato raster GIF.',
      },
      cs: {
        slug: 'prevodnik-svg-na-gif',
        title: 'SVG na GIF',
        description: 'Převeďte vektorovou grafiku SVG na rastrovy format GIF.',
      },
    },
  },
  {
    key: 'bmpToGif',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-bmp-na-gif',
        title: 'BMP na GIF',
        description:
          'Zamień nieskompresowane pliki BMP na lekki GIF. Redukcja rozmiaru dla prostych grafik.',
      },
      en: {
        slug: 'bmp-to-gif-converter',
        title: 'BMP to GIF',
        description: 'Convert uncompressed BMP files to lightweight GIF.',
      },
      de: {
        slug: 'bmp-zu-gif-konverter',
        title: 'BMP zu GIF',
        description: 'Unkomprimierte BMP-Dateien in leichtes GIF umwandeln.',
      },
      es: {
        slug: 'convertidor-bmp-a-gif',
        title: 'BMP a GIF',
        description: 'Convierte archivos BMP sin comprimir a GIF ligero.',
      },
      fr: {
        slug: 'convertisseur-bmp-en-gif',
        title: 'BMP en GIF',
        description:
          'Convertissez les fichiers BMP non compresses en GIF leger.',
      },
      pt: {
        slug: 'conversor-bmp-para-gif',
        title: 'BMP para GIF',
        description: 'Converta ficheiros BMP não comprimidos para GIF leve.',
      },
      it: {
        slug: 'convertitore-bmp-in-gif',
        title: 'BMP in GIF',
        description: 'Converti file BMP non compressi in GIF leggero.',
      },
      cs: {
        slug: 'prevodnik-bmp-na-gif',
        title: 'BMP na GIF',
        description: 'Převeďte nekomprimované soubory BMP na lehky GIF.',
      },
    },
  },
  {
    key: 'jpgToTiff',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-jpg-na-tiff',
        title: 'JPG na TIFF',
        description:
          'Zamień zdjęcia JPG na bezstratny TIFF. Idealne do druku i archiwizacji.',
      },
      en: {
        slug: 'jpg-to-tiff-converter',
        title: 'JPG to TIFF',
        description:
          'Convert JPG photos to lossless TIFF. For printing and archiving.',
      },
      de: {
        slug: 'jpg-zu-tiff-konverter',
        title: 'JPG zu TIFF',
        description:
          'JPG-Fotos in verlustfreies TIFF umwandeln. Zum Drucken und Archivieren.',
      },
      es: {
        slug: 'convertidor-jpg-a-tiff',
        title: 'JPG a TIFF',
        description:
          'Convierte fotos JPG a TIFF sin pérdida. Para impresión y archivado.',
      },
      fr: {
        slug: 'convertisseur-jpg-en-tiff',
        title: 'JPG en TIFF',
        description:
          "Convertissez les photos JPG en TIFF sans perte. Pour l'impression et l'archivage.",
      },
      pt: {
        slug: 'conversor-jpg-para-tiff',
        title: 'JPG para TIFF',
        description:
          'Converta fotos JPG para TIFF sem perdas. Para impressão e arquivamento.',
      },
      it: {
        slug: 'convertitore-jpg-in-tiff',
        title: 'JPG in TIFF',
        description:
          'Converti foto JPG in TIFF lossless. Per stampa e archiviazione.',
      },
      cs: {
        slug: 'prevodnik-jpg-na-tiff',
        title: 'JPG na TIFF',
        description:
          'Převeďte fotky JPG na bezztrátový TIFF. Pro tisk a archivaci.',
      },
    },
  },
  {
    key: 'pngToTiff',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-png-na-tiff',
        title: 'PNG na TIFF',
        description:
          'Zamień grafiki PNG na profesjonalny format TIFF. Do druku i dalszej obróbki.',
      },
      en: {
        slug: 'png-to-tiff-converter',
        title: 'PNG to TIFF',
        description: 'Convert PNG graphics to professional TIFF format.',
      },
      de: {
        slug: 'png-zu-tiff-konverter',
        title: 'PNG zu TIFF',
        description: 'PNG-Grafiken in professionelles TIFF-Format umwandeln.',
      },
      es: {
        slug: 'convertidor-png-a-tiff',
        title: 'PNG a TIFF',
        description: 'Convierte graficos PNG a formato TIFF profesional.',
      },
      fr: {
        slug: 'convertisseur-png-en-tiff',
        title: 'PNG en TIFF',
        description:
          'Convertissez les graphiques PNG en format TIFF professionnel.',
      },
      pt: {
        slug: 'conversor-png-para-tiff',
        title: 'PNG para TIFF',
        description: 'Converta graficos PNG para formato TIFF profissional.',
      },
      it: {
        slug: 'convertitore-png-in-tiff',
        title: 'PNG in TIFF',
        description: 'Converti grafiche PNG in formato TIFF professionale.',
      },
      cs: {
        slug: 'prevodnik-png-na-tiff',
        title: 'PNG na TIFF',
        description: 'Převeďte grafiku PNG na profesionální formát TIFF.',
      },
    },
  },
  {
    key: 'webpToTiff',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-webp-na-tiff',
        title: 'WebP na TIFF',
        description:
          'Zamień pliki WebP na bezstratny TIFF. Z formatu webowego do profesjonalnego.',
      },
      en: {
        slug: 'webp-to-tiff-converter',
        title: 'WebP to TIFF',
        description:
          'Convert WebP images to professional TIFF for printing and archiving.',
      },
      de: {
        slug: 'webp-zu-tiff-konverter',
        title: 'WebP zu TIFF',
        description:
          'WebP-Bilder in professionelles TIFF für Druck und Archivierung umwandeln.',
      },
      es: {
        slug: 'convertidor-webp-a-tiff',
        title: 'WebP a TIFF',
        description:
          'Convierte imagenes WebP a TIFF profesional para impresión y archivado.',
      },
      fr: {
        slug: 'convertisseur-webp-en-tiff',
        title: 'WebP en TIFF',
        description:
          'Convertissez les images WebP en TIFF professionnel pour impression et archivage.',
      },
      pt: {
        slug: 'conversor-webp-para-tiff',
        title: 'WebP para TIFF',
        description:
          'Converta imagens WebP para TIFF profissional para impressão e arquivo.',
      },
      it: {
        slug: 'convertitore-webp-in-tiff',
        title: 'WebP in TIFF',
        description:
          'Converti immagini WebP in TIFF professionale per stampa e archiviazione.',
      },
      cs: {
        slug: 'prevodnik-webp-na-tiff',
        title: 'WebP na TIFF',
        description:
          'Převeďte obrazky WebP na profesionální TIFF pro tisk a archivaci.',
      },
    },
  },
  {
    key: 'svgToTiff',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-svg-na-tiff',
        title: 'SVG na TIFF',
        description:
          'Zamień grafikę wektorową SVG na profesjonalny TIFF. Do druku i DTP.',
      },
      en: {
        slug: 'svg-to-tiff-converter',
        title: 'SVG to TIFF',
        description: 'Convert vector SVG graphics to high-quality TIFF raster.',
      },
      de: {
        slug: 'svg-zu-tiff-konverter',
        title: 'SVG zu TIFF',
        description:
          'Vektor-SVG-Grafiken in hochwertiges TIFF-Raster umwandeln.',
      },
      es: {
        slug: 'convertidor-svg-a-tiff',
        title: 'SVG a TIFF',
        description:
          'Convierte graficos vectoriales SVG a raster TIFF de alta calidad.',
      },
      fr: {
        slug: 'convertisseur-svg-en-tiff',
        title: 'SVG en TIFF',
        description:
          'Convertissez les graphiques vectoriels SVG en raster TIFF haute qualite.',
      },
      pt: {
        slug: 'conversor-svg-para-tiff',
        title: 'SVG para TIFF',
        description:
          'Converta graficos vetoriais SVG para raster TIFF de alta qualidade.',
      },
      it: {
        slug: 'convertitore-svg-in-tiff',
        title: 'SVG in TIFF',
        description:
          'Converti grafiche vettoriali SVG in raster TIFF di alta qualità.',
      },
      cs: {
        slug: 'prevodnik-svg-na-tiff',
        title: 'SVG na TIFF',
        description:
          'Převeďte vektorovou grafiku SVG na kvalitni rastrovy TIFF.',
      },
    },
  },
  {
    key: 'bmpToTiff',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-bmp-na-tiff',
        title: 'BMP na TIFF',
        description:
          'Zamień pliki BMP na profesjonalny TIFF. Zachowaj jakość w formacie do druku.',
      },
      en: {
        slug: 'bmp-to-tiff-converter',
        title: 'BMP to TIFF',
        description:
          'Convert BMP files to professional TIFF format for printing.',
      },
      de: {
        slug: 'bmp-zu-tiff-konverter',
        title: 'BMP zu TIFF',
        description:
          'BMP-Dateien in professionelles TIFF-Format für den Druck umwandeln.',
      },
      es: {
        slug: 'convertidor-bmp-a-tiff',
        title: 'BMP a TIFF',
        description:
          'Convierte archivos BMP a formato TIFF profesional para impresión.',
      },
      fr: {
        slug: 'convertisseur-bmp-en-tiff',
        title: 'BMP en TIFF',
        description:
          'Convertissez les fichiers BMP en format TIFF professionnel pour impression.',
      },
      pt: {
        slug: 'conversor-bmp-para-tiff',
        title: 'BMP para TIFF',
        description:
          'Converta ficheiros BMP para formato TIFF profissional para impressão.',
      },
      it: {
        slug: 'convertitore-bmp-in-tiff',
        title: 'BMP in TIFF',
        description:
          'Converti file BMP in formato TIFF professionale per la stampa.',
      },
      cs: {
        slug: 'prevodnik-bmp-na-tiff',
        title: 'BMP na TIFF',
        description:
          'Převeďte soubory BMP na profesionální formát TIFF pro tisk.',
      },
    },
  },
  {
    key: 'avifToTiff',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-avif-na-tiff',
        title: 'AVIF na TIFF',
        description:
          'Zamień pliki AVIF na bezstratny TIFF. Z formatu webowego do profesjonalnego.',
      },

      en: {
        slug: 'avif-to-tiff-converter',
        title: 'AVIF to TIFF',
        description:
          'Convert AVIF files to TIFF format. Free, private, unlimited. Works in your browser.',
      },
      de: {
        slug: 'avif-zu-tiff-konverter',
        title: 'AVIF-zu-TIFF',
        description:
          'AVIF-Dateien in TIFF-Format umwandeln. Kostenlos, privat, unbegrenzt.',
      },
      es: {
        slug: 'convertidor-avif-a-tiff',
        title: 'AVIF a TIFF',
        description:
          'Convierte archivos AVIF a formato TIFF. Gratis, privado y sin límites.',
      },
      fr: {
        slug: 'convertisseur-avif-en-tiff',
        title: 'AVIF en TIFF',
        description:
          'Convertissez vos fichiers AVIF en TIFF. Gratuit, privé et illimité.',
      },
      pt: {
        slug: 'conversor-avif-para-tiff',
        title: 'AVIF para TIFF',
        description:
          'Converta ficheiros AVIF para TIFF. Gratuito, privado e ilimitado.',
      },
      it: {
        slug: 'convertitore-avif-in-tiff',
        title: 'AVIF in TIFF',
        description:
          'Converti file AVIF in formato TIFF. Gratuito, privato e illimitato.',
      },
      cs: {
        slug: 'prevodnik-avif-na-tiff',
        title: 'AVIF na TIFF',
        description:
          'Převeďte soubory AVIF do formátu TIFF. Zdarma, soukromě a bez omezení.',
      },
    },
  },
  {
    key: 'heicToTiff',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-heic-na-tiff',
        title: 'HEIC na TIFF',
        description:
          'Zamień zdjęcia HEIC z iPhone na profesjonalny TIFF. Do druku i archiwizacji.',
      },
      en: {
        slug: 'heic-to-tiff-converter',
        title: 'HEIC to TIFF',
        description: 'Convert iPhone HEIC photos to professional TIFF format.',
      },
      de: {
        slug: 'heic-zu-tiff-konverter',
        title: 'HEIC zu TIFF',
        description:
          'iPhone HEIC-Fotos in professionelles TIFF-Format umwandeln.',
      },
      es: {
        slug: 'convertidor-heic-a-tiff',
        title: 'HEIC a TIFF',
        description:
          'Convierte fotos HEIC del iPhone a formato TIFF profesional.',
      },
      fr: {
        slug: 'convertisseur-heic-en-tiff',
        title: 'HEIC en TIFF',
        description:
          "Convertissez les photos HEIC d'iPhone en format TIFF professionnel.",
      },
      pt: {
        slug: 'conversor-heic-para-tiff',
        title: 'HEIC para TIFF',
        description:
          'Converta fotos HEIC do iPhone para formato TIFF profissional.',
      },
      it: {
        slug: 'convertitore-heic-in-tiff',
        title: 'HEIC in TIFF',
        description:
          "Converti foto HEIC dell'iPhone in formato TIFF professionale.",
      },
      cs: {
        slug: 'prevodnik-heic-na-tiff',
        title: 'HEIC na TIFF',
        description:
          'Převeďte fotky HEIC z iPhonu na profesionální formát TIFF.',
      },
    },
  },
  // -------------------------------------------------------------------------
  // PDF converters (Image → PDF)
  // -------------------------------------------------------------------------
  {
    key: 'jpgToPdf',
    section: 'konwertery',
    icon: RiFilePdf2Line,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-jpg-na-pdf',
        title: 'JPG na PDF',
        description:
          'Zamień zdjęcia JPG na PDF jednym kliknięciem. Połącz wiele obrazów w jeden dokument. Bez rejestracji, bez wysyłania na serwer.',
      },

      en: {
        slug: 'jpg-to-pdf-converter',
        title: 'JPG to PDF',
        description:
          'Convert JPG images to PDF documents. Combine multiple files into one PDF. Free, no registration.',
      },
      de: {
        slug: 'jpg-zu-pdf-konverter',
        title: 'JPG-zu-PDF',
        description:
          'JPG-Bilder in PDF-Dokumente umwandeln. Mehrere Dateien zu einem PDF kombinieren. Kostenlos.',
      },
      es: {
        slug: 'convertidor-jpg-a-pdf',
        title: 'JPG a PDF',
        description:
          'Convierte imágenes JPG a documentos PDF. Combina varios archivos en un PDF. Gratis.',
      },
      fr: {
        slug: 'convertisseur-jpg-en-pdf',
        title: 'JPG en PDF',
        description:
          'Convertissez vos images JPG en PDF. Combinez plusieurs fichiers en un seul PDF. Gratuit.',
      },
      pt: {
        slug: 'conversor-jpg-para-pdf',
        title: 'JPG para PDF',
        description:
          'Converta imagens JPG para documentos PDF. Combine vários ficheiros num só PDF. Gratuito.',
      },
      it: {
        slug: 'convertitore-jpg-in-pdf',
        title: 'JPG in PDF',
        description:
          'Converti immagini JPG in documenti PDF. Combina più file in un unico PDF. Gratuito.',
      },
      cs: {
        slug: 'prevodnik-jpg-na-pdf',
        title: 'JPG na PDF',
        description:
          'Převeďte obrázky JPG na dokumenty PDF. Spojte více souborů do jednoho PDF. Zdarma.',
      },
    },
  },
  {
    key: 'pngToPdf',
    section: 'konwertery',
    icon: RiFilePdf2Line,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-png-na-pdf',
        title: 'PNG na PDF',
        description:
          'Zamień grafiki PNG na PDF. Połącz wiele plików w jeden dokument z zachowaniem jakości. Bez rejestracji.',
      },

      en: {
        slug: 'png-to-pdf-converter',
        title: 'PNG to PDF',
        description:
          'Convert PNG images to PDF documents. Combine multiple files into one PDF. Free, no registration.',
      },
      de: {
        slug: 'png-zu-pdf-konverter',
        title: 'PNG-zu-PDF',
        description:
          'PNG-Bilder in PDF-Dokumente umwandeln. Mehrere Dateien zu einem PDF kombinieren. Kostenlos.',
      },
      es: {
        slug: 'convertidor-png-a-pdf',
        title: 'PNG a PDF',
        description:
          'Convierte imágenes PNG a documentos PDF. Combina varios archivos en un PDF. Gratis.',
      },
      fr: {
        slug: 'convertisseur-png-en-pdf',
        title: 'PNG en PDF',
        description:
          'Convertissez vos images PNG en PDF. Combinez plusieurs fichiers en un seul PDF. Gratuit.',
      },
      pt: {
        slug: 'conversor-png-para-pdf',
        title: 'PNG para PDF',
        description:
          'Converta imagens PNG para documentos PDF. Combine vários ficheiros num só PDF. Gratuito.',
      },
      it: {
        slug: 'convertitore-png-in-pdf',
        title: 'PNG in PDF',
        description:
          'Converti immagini PNG in documenti PDF. Combina più file in un unico PDF. Gratuito.',
      },
      cs: {
        slug: 'prevodnik-png-na-pdf',
        title: 'PNG na PDF',
        description:
          'Převeďte obrázky PNG na dokumenty PDF. Spojte více souborů do jednoho PDF. Zdarma.',
      },
    },
  },
  {
    key: 'webpToPdf',
    section: 'konwertery',
    icon: RiFilePdf2Line,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-webp-na-pdf',
        title: 'WebP na PDF',
        description:
          'Zamień obrazy WebP na PDF. Konwersja w przeglądarce, bez limitu plików i rejestracji.',
      },

      en: {
        slug: 'webp-to-pdf-converter',
        title: 'WebP to PDF',
        description:
          'Convert WebP images to PDF documents. Combine multiple files into one PDF. Free, no registration.',
      },
      de: {
        slug: 'webp-zu-pdf-konverter',
        title: 'WebP-zu-PDF',
        description:
          'WebP-Bilder in PDF-Dokumente umwandeln. Mehrere Dateien zu einem PDF kombinieren. Kostenlos.',
      },
      es: {
        slug: 'convertidor-webp-a-pdf',
        title: 'WebP a PDF',
        description:
          'Convierte imágenes WebP a documentos PDF. Combina varios archivos en un PDF. Gratis.',
      },
      fr: {
        slug: 'convertisseur-webp-en-pdf',
        title: 'WebP en PDF',
        description:
          'Convertissez vos images WebP en PDF. Combinez plusieurs fichiers en un seul PDF. Gratuit.',
      },
      pt: {
        slug: 'conversor-webp-para-pdf',
        title: 'WebP para PDF',
        description:
          'Converta imagens WebP para documentos PDF. Combine vários ficheiros num só PDF. Gratuito.',
      },
      it: {
        slug: 'convertitore-webp-in-pdf',
        title: 'WebP in PDF',
        description:
          'Converti immagini WebP in documenti PDF. Combina più file in un unico PDF. Gratuito.',
      },
      cs: {
        slug: 'prevodnik-webp-na-pdf',
        title: 'WebP na PDF',
        description:
          'Převeďte obrázky WebP na dokumenty PDF. Spojte více souborů do jednoho PDF. Zdarma.',
      },
    },
  },
  {
    key: 'heicToPdf',
    section: 'konwertery',
    icon: RiFilePdf2Line,
    desktopOnly: true,
    locales: {
      pl: {
        slug: 'konwerter-heic-na-pdf',
        title: 'HEIC na PDF',
        description:
          'Zamień zdjęcia HEIC z iPhone na PDF. Połącz wiele zdjęć w jeden dokument. Bez rejestracji.',
      },

      en: {
        slug: 'heic-to-pdf-converter',
        title: 'HEIC to PDF',
        description:
          'Convert HEIC images to PDF documents. Combine multiple files into one PDF. Free, no registration.',
      },
      de: {
        slug: 'heic-zu-pdf-konverter',
        title: 'HEIC-zu-PDF',
        description:
          'HEIC-Bilder in PDF-Dokumente umwandeln. Mehrere Dateien zu einem PDF kombinieren. Kostenlos.',
      },
      es: {
        slug: 'convertidor-heic-a-pdf',
        title: 'HEIC a PDF',
        description:
          'Convierte imágenes HEIC a documentos PDF. Combina varios archivos en un PDF. Gratis.',
      },
      fr: {
        slug: 'convertisseur-heic-en-pdf',
        title: 'HEIC en PDF',
        description:
          'Convertissez vos images HEIC en PDF. Combinez plusieurs fichiers en un seul PDF. Gratuit.',
      },
      pt: {
        slug: 'conversor-heic-para-pdf',
        title: 'HEIC para PDF',
        description:
          'Converta imagens HEIC para documentos PDF. Combine vários ficheiros num só PDF. Gratuito.',
      },
      it: {
        slug: 'convertitore-heic-in-pdf',
        title: 'HEIC in PDF',
        description:
          'Converti immagini HEIC in documenti PDF. Combina più file in un unico PDF. Gratuito.',
      },
      cs: {
        slug: 'prevodnik-heic-na-pdf',
        title: 'HEIC na PDF',
        description:
          'Převeďte obrázky HEIC na dokumenty PDF. Spojte více souborů do jednoho PDF. Zdarma.',
      },
    },
  },
  {
    key: 'bmpToPdf',
    section: 'konwertery',
    icon: RiFilePdf2Line,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-bmp-na-pdf',
        title: 'BMP na PDF',
        description:
          'Zamień pliki BMP na PDF. Konwersja w przeglądarce, bez wysyłania plików na serwer.',
      },

      en: {
        slug: 'bmp-to-pdf-converter',
        title: 'BMP to PDF',
        description:
          'Convert BMP images to PDF documents. Combine multiple files into one PDF. Free, no registration.',
      },
      de: {
        slug: 'bmp-zu-pdf-konverter',
        title: 'BMP-zu-PDF',
        description:
          'BMP-Bilder in PDF-Dokumente umwandeln. Mehrere Dateien zu einem PDF kombinieren. Kostenlos.',
      },
      es: {
        slug: 'convertidor-bmp-a-pdf',
        title: 'BMP a PDF',
        description:
          'Convierte imágenes BMP a documentos PDF. Combina varios archivos en un PDF. Gratis.',
      },
      fr: {
        slug: 'convertisseur-bmp-en-pdf',
        title: 'BMP en PDF',
        description:
          'Convertissez vos images BMP en PDF. Combinez plusieurs fichiers en un seul PDF. Gratuit.',
      },
      pt: {
        slug: 'conversor-bmp-para-pdf',
        title: 'BMP para PDF',
        description:
          'Converta imagens BMP para documentos PDF. Combine vários ficheiros num só PDF. Gratuito.',
      },
      it: {
        slug: 'convertitore-bmp-in-pdf',
        title: 'BMP in PDF',
        description:
          'Converti immagini BMP in documenti PDF. Combina più file in un unico PDF. Gratuito.',
      },
      cs: {
        slug: 'prevodnik-bmp-na-pdf',
        title: 'BMP na PDF',
        description:
          'Převeďte obrázky BMP na dokumenty PDF. Spojte více souborů do jednoho PDF. Zdarma.',
      },
    },
  },
  {
    key: 'tiffToPdf',
    section: 'konwertery',
    icon: RiFilePdf2Line,
    desktopOnly: true,
    locales: {
      pl: {
        slug: 'konwerter-tiff-na-pdf',
        title: 'TIFF na PDF',
        description:
          'Zamień pliki TIFF na PDF. Połącz wiele obrazów w jeden dokument. Bez rejestracji.',
      },

      en: {
        slug: 'tiff-to-pdf-converter',
        title: 'TIFF to PDF',
        description:
          'Convert TIFF images to PDF documents. Combine multiple files into one PDF. Free, no registration.',
      },
      de: {
        slug: 'tiff-zu-pdf-konverter',
        title: 'TIFF-zu-PDF',
        description:
          'TIFF-Bilder in PDF-Dokumente umwandeln. Mehrere Dateien zu einem PDF kombinieren. Kostenlos.',
      },
      es: {
        slug: 'convertidor-tiff-a-pdf',
        title: 'TIFF a PDF',
        description:
          'Convierte imágenes TIFF a documentos PDF. Combina varios archivos en un PDF. Gratis.',
      },
      fr: {
        slug: 'convertisseur-tiff-en-pdf',
        title: 'TIFF en PDF',
        description:
          'Convertissez vos images TIFF en PDF. Combinez plusieurs fichiers en un seul PDF. Gratuit.',
      },
      pt: {
        slug: 'conversor-tiff-para-pdf',
        title: 'TIFF para PDF',
        description:
          'Converta imagens TIFF para documentos PDF. Combine vários ficheiros num só PDF. Gratuito.',
      },
      it: {
        slug: 'convertitore-tiff-in-pdf',
        title: 'TIFF in PDF',
        description:
          'Converti immagini TIFF in documenti PDF. Combina più file in un unico PDF. Gratuito.',
      },
      cs: {
        slug: 'prevodnik-tiff-na-pdf',
        title: 'TIFF na PDF',
        description:
          'Převeďte obrázky TIFF na dokumenty PDF. Spojte více souborů do jednoho PDF. Zdarma.',
      },
    },
  },
  {
    key: 'svgToPdf',
    section: 'konwertery',
    icon: RiFilePdf2Line,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-svg-na-pdf',
        title: 'SVG na PDF',
        description:
          'Zamień grafikę wektorową SVG na PDF. Konwersja w przeglądarce, bez limitu.',
      },

      en: {
        slug: 'svg-to-pdf-converter',
        title: 'SVG to PDF',
        description:
          'Convert SVG images to PDF documents. Combine multiple files into one PDF. Free, no registration.',
      },
      de: {
        slug: 'svg-zu-pdf-konverter',
        title: 'SVG-zu-PDF',
        description:
          'SVG-Bilder in PDF-Dokumente umwandeln. Mehrere Dateien zu einem PDF kombinieren. Kostenlos.',
      },
      es: {
        slug: 'convertidor-svg-a-pdf',
        title: 'SVG a PDF',
        description:
          'Convierte imágenes SVG a documentos PDF. Combina varios archivos en un PDF. Gratis.',
      },
      fr: {
        slug: 'convertisseur-svg-en-pdf',
        title: 'SVG en PDF',
        description:
          'Convertissez vos images SVG en PDF. Combinez plusieurs fichiers en un seul PDF. Gratuit.',
      },
      pt: {
        slug: 'conversor-svg-para-pdf',
        title: 'SVG para PDF',
        description:
          'Converta imagens SVG para documentos PDF. Combine vários ficheiros num só PDF. Gratuito.',
      },
      it: {
        slug: 'convertitore-svg-in-pdf',
        title: 'SVG in PDF',
        description:
          'Converti immagini SVG in documenti PDF. Combina più file in un unico PDF. Gratuito.',
      },
      cs: {
        slug: 'prevodnik-svg-na-pdf',
        title: 'SVG na PDF',
        description:
          'Převeďte obrázky SVG na dokumenty PDF. Spojte více souborů do jednoho PDF. Zdarma.',
      },
    },
  },
  // -------------------------------------------------------------------------
  // PDF converters (PDF → Image)
  // -------------------------------------------------------------------------
  {
    key: 'pdfToJpg',
    section: 'konwertery',
    icon: RiFilePdf2Line,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-pdf-na-jpg',
        title: 'PDF na JPG',
        description:
          'Zamień strony PDF na obrazy JPG. Konwersja w przeglądarce, bez wysyłania plików na serwer.',
      },

      en: {
        slug: 'pdf-to-jpg-converter',
        title: 'PDF to JPG',
        description:
          'Convert PDF pages to JPG images. High quality, no file limits. Free, no registration.',
      },
      de: {
        slug: 'pdf-zu-jpg-konverter',
        title: 'PDF-zu-JPG',
        description:
          'PDF-Seiten in JPG-Bilder umwandeln. Hohe Qualität, ohne Limits. Kostenlos.',
      },
      es: {
        slug: 'convertidor-pdf-a-jpg',
        title: 'PDF a JPG',
        description:
          'Convierte páginas PDF a imágenes JPG. Alta calidad, sin límites. Gratis.',
      },
      fr: {
        slug: 'convertisseur-pdf-en-jpg',
        title: 'PDF en JPG',
        description:
          'Convertissez les pages PDF en images JPG. Haute qualité, sans limites. Gratuit.',
      },
      pt: {
        slug: 'conversor-pdf-para-jpg',
        title: 'PDF para JPG',
        description:
          'Converta páginas PDF em imagens JPG. Alta qualidade, sem limites. Gratuito.',
      },
      it: {
        slug: 'convertitore-pdf-in-jpg',
        title: 'PDF in JPG',
        description:
          'Converti pagine PDF in immagini JPG. Alta qualità, senza limiti. Gratuito.',
      },
      cs: {
        slug: 'prevodnik-pdf-na-jpg',
        title: 'PDF na JPG',
        description:
          'Převeďte stránky PDF na obrázky JPG. Vysoká kvalita, bez omezení. Zdarma.',
      },
    },
  },
  {
    key: 'pdfToPng',
    section: 'konwertery',
    icon: RiFilePdf2Line,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-pdf-na-png',
        title: 'PDF na PNG',
        description:
          'Zamień strony PDF na obrazy PNG. Wysoka jakość, bez limitu plików i rejestracji.',
      },

      en: {
        slug: 'pdf-to-png-converter',
        title: 'PDF to PNG',
        description:
          'Convert PDF pages to PNG images. High quality, no file limits. Free, no registration.',
      },
      de: {
        slug: 'pdf-zu-png-konverter',
        title: 'PDF-zu-PNG',
        description:
          'PDF-Seiten in PNG-Bilder umwandeln. Hohe Qualität, ohne Limits. Kostenlos.',
      },
      es: {
        slug: 'convertidor-pdf-a-png',
        title: 'PDF a PNG',
        description:
          'Convierte páginas PDF a imágenes PNG. Alta calidad, sin límites. Gratis.',
      },
      fr: {
        slug: 'convertisseur-pdf-en-png',
        title: 'PDF en PNG',
        description:
          'Convertissez les pages PDF en images PNG. Haute qualité, sans limites. Gratuit.',
      },
      pt: {
        slug: 'conversor-pdf-para-png',
        title: 'PDF para PNG',
        description:
          'Converta páginas PDF em imagens PNG. Alta qualidade, sem limites. Gratuito.',
      },
      it: {
        slug: 'convertitore-pdf-in-png',
        title: 'PDF in PNG',
        description:
          'Converti pagine PDF in immagini PNG. Alta qualità, senza limiti. Gratuito.',
      },
      cs: {
        slug: 'prevodnik-pdf-na-png',
        title: 'PDF na PNG',
        description:
          'Převeďte stránky PDF na obrázky PNG. Vysoká kvalita, bez omezení. Zdarma.',
      },
    },
  },
  {
    key: 'pdfToWebp',
    section: 'konwertery',
    icon: RiFilePdf2Line,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-pdf-na-webp',
        title: 'PDF na WebP',
        description:
          'Zamień strony PDF na lekkie obrazy WebP. Konwersja w przeglądarce, bez rejestracji.',
      },

      en: {
        slug: 'pdf-to-webp-converter',
        title: 'PDF to WebP',
        description:
          'Convert PDF pages to WebP images. High quality, no file limits. Free, no registration.',
      },
      de: {
        slug: 'pdf-zu-webp-konverter',
        title: 'PDF-zu-WebP',
        description:
          'PDF-Seiten in WebP-Bilder umwandeln. Hohe Qualität, ohne Limits. Kostenlos.',
      },
      es: {
        slug: 'convertidor-pdf-a-webp',
        title: 'PDF a WebP',
        description:
          'Convierte páginas PDF a imágenes WebP. Alta calidad, sin límites. Gratis.',
      },
      fr: {
        slug: 'convertisseur-pdf-en-webp',
        title: 'PDF en WebP',
        description:
          'Convertissez les pages PDF en images WebP. Haute qualité, sans limites. Gratuit.',
      },
      pt: {
        slug: 'conversor-pdf-para-webp',
        title: 'PDF para WebP',
        description:
          'Converta páginas PDF em imagens WebP. Alta qualidade, sem limites. Gratuito.',
      },
      it: {
        slug: 'convertitore-pdf-in-webp',
        title: 'PDF in WebP',
        description:
          'Converti pagine PDF in immagini WebP. Alta qualità, senza limiti. Gratuito.',
      },
      cs: {
        slug: 'prevodnik-pdf-na-webp',
        title: 'PDF na WebP',
        description:
          'Převeďte stránky PDF na obrázky WebP. Vysoká kvalita, bez omezení. Zdarma.',
      },
    },
  },
  // -------------------------------------------------------------------------
  // Data converters
  // -------------------------------------------------------------------------
  {
    key: 'csvToJson',
    section: 'dokumenty',
    icon: RiFileTextLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-csv-na-json',
        title: 'CSV na JSON',
        description:
          'Zamień plik CSV na poprawny JSON. Automatyczne wykrywanie separatorów i formatowanie wyniku. Bez rejestracji.',
      },

      en: {
        slug: 'csv-to-json-converter',
        title: 'CSV to JSON',
        description:
          'Convert CSV to JSON format. Automatic parsing and formatting. Free, no registration.',
      },
      de: {
        slug: 'csv-zu-json-konverter',
        title: 'CSV-zu-JSON',
        description:
          'CSV in JSON-Format konvertieren. Automatisches Parsen und Formatieren. Kostenlos.',
      },
      es: {
        slug: 'convertidor-csv-a-json',
        title: 'CSV a JSON',
        description:
          'Convierte CSV a formato JSON. Análisis y formato automáticos. Gratis.',
      },
      fr: {
        slug: 'convertisseur-csv-en-json',
        title: 'CSV en JSON',
        description:
          'Convertissez CSV en format JSON. Analyse et formatage automatiques. Gratuit.',
      },
      pt: {
        slug: 'conversor-csv-para-json',
        title: 'CSV para JSON',
        description:
          'Converta CSV para formato JSON. Análise e formatação automáticas. Gratuito.',
      },
      it: {
        slug: 'convertitore-csv-in-json',
        title: 'CSV in JSON',
        description:
          'Converti CSV in formato JSON. Analisi e formattazione automatiche. Gratuito.',
      },
      cs: {
        slug: 'prevodnik-csv-na-json',
        title: 'CSV na JSON',
        description:
          'Převeďte CSV do formátu JSON. Automatické parsování a formátování. Zdarma.',
      },
    },
  },
  {
    key: 'jsonToCsv',
    section: 'dokumenty',
    icon: RiFileTextLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-json-na-csv',
        title: 'JSON na CSV',
        description:
          'Zamień dane JSON na plik CSV. Konwersja w przeglądarce, bez wysyłania danych na serwer.',
      },

      en: {
        slug: 'json-to-csv-converter',
        title: 'JSON to CSV',
        description:
          'Convert JSON to CSV format. Automatic parsing and formatting. Free, no registration.',
      },
      de: {
        slug: 'json-zu-csv-konverter',
        title: 'JSON-zu-CSV',
        description:
          'JSON in CSV-Format konvertieren. Automatisches Parsen und Formatieren. Kostenlos.',
      },
      es: {
        slug: 'convertidor-json-a-csv',
        title: 'JSON a CSV',
        description:
          'Convierte JSON a formato CSV. Análisis y formato automáticos. Gratis.',
      },
      fr: {
        slug: 'convertisseur-json-en-csv',
        title: 'JSON en CSV',
        description:
          'Convertissez JSON en format CSV. Analyse et formatage automatiques. Gratuit.',
      },
      pt: {
        slug: 'conversor-json-para-csv',
        title: 'JSON para CSV',
        description:
          'Converta JSON para formato CSV. Análise e formatação automáticas. Gratuito.',
      },
      it: {
        slug: 'convertitore-json-in-csv',
        title: 'JSON in CSV',
        description:
          'Converti JSON in formato CSV. Analisi e formattazione automatiche. Gratuito.',
      },
      cs: {
        slug: 'prevodnik-json-na-csv',
        title: 'JSON na CSV',
        description:
          'Převeďte JSON do formátu CSV. Automatické parsování a formátování. Zdarma.',
      },
    },
  },
  {
    key: 'xmlToJson',
    section: 'dokumenty',
    icon: RiFileTextLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-xml-na-json',
        title: 'XML na JSON',
        description:
          'Zamień dane XML na JSON. Konwersja w przeglądarce z walidacją struktury. Bez rejestracji.',
      },

      en: {
        slug: 'xml-to-json-converter',
        title: 'XML to JSON',
        description:
          'Convert XML to JSON format. Automatic parsing and formatting. Free, no registration.',
      },
      de: {
        slug: 'xml-zu-json-konverter',
        title: 'XML-zu-JSON',
        description:
          'XML in JSON-Format konvertieren. Automatisches Parsen und Formatieren. Kostenlos.',
      },
      es: {
        slug: 'convertidor-xml-a-json',
        title: 'XML a JSON',
        description:
          'Convierte XML a formato JSON. Análisis y formato automáticos. Gratis.',
      },
      fr: {
        slug: 'convertisseur-xml-en-json',
        title: 'XML en JSON',
        description:
          'Convertissez XML en format JSON. Analyse et formatage automatiques. Gratuit.',
      },
      pt: {
        slug: 'conversor-xml-para-json',
        title: 'XML para JSON',
        description:
          'Converta XML para formato JSON. Análise e formatação automáticas. Gratuito.',
      },
      it: {
        slug: 'convertitore-xml-in-json',
        title: 'XML in JSON',
        description:
          'Converti XML in formato JSON. Analisi e formattazione automatiche. Gratuito.',
      },
      cs: {
        slug: 'prevodnik-xml-na-json',
        title: 'XML na JSON',
        description:
          'Převeďte XML do formátu JSON. Automatické parsování a formátování. Zdarma.',
      },
    },
  },
  {
    key: 'jsonToXml',
    section: 'dokumenty',
    icon: RiFileTextLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-json-na-xml',
        title: 'JSON na XML',
        description:
          'Zamień dane JSON na XML. Konwersja w przeglądarce z formatowaniem wyniku. Bez rejestracji.',
      },

      en: {
        slug: 'json-to-xml-converter',
        title: 'JSON to XML',
        description:
          'Convert JSON to XML format. Automatic parsing and formatting. Free, no registration.',
      },
      de: {
        slug: 'json-zu-xml-konverter',
        title: 'JSON-zu-XML',
        description:
          'JSON in XML-Format konvertieren. Automatisches Parsen und Formatieren. Kostenlos.',
      },
      es: {
        slug: 'convertidor-json-a-xml',
        title: 'JSON a XML',
        description:
          'Convierte JSON a formato XML. Análisis y formato automáticos. Gratis.',
      },
      fr: {
        slug: 'convertisseur-json-en-xml',
        title: 'JSON en XML',
        description:
          'Convertissez JSON en format XML. Analyse et formatage automatiques. Gratuit.',
      },
      pt: {
        slug: 'conversor-json-para-xml',
        title: 'JSON para XML',
        description:
          'Converta JSON para formato XML. Análise e formatação automáticas. Gratuito.',
      },
      it: {
        slug: 'convertitore-json-in-xml',
        title: 'JSON in XML',
        description:
          'Converti JSON in formato XML. Analisi e formattazione automatiche. Gratuito.',
      },
      cs: {
        slug: 'prevodnik-json-na-xml',
        title: 'JSON na XML',
        description:
          'Převeďte JSON do formátu XML. Automatické parsování a formátování. Zdarma.',
      },
    },
  },
  {
    key: 'yamlToJson',
    section: 'dokumenty',
    icon: RiFileTextLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-yaml-na-json',
        title: 'YAML na JSON',
        description:
          'Zamień konfigurację YAML na JSON. Walidacja i formatowanie wyniku w przeglądarce. Bez rejestracji.',
      },

      en: {
        slug: 'yaml-to-json-converter',
        title: 'YAML to JSON',
        description:
          'Convert YAML to JSON format. Automatic parsing and formatting. Free, no registration.',
      },
      de: {
        slug: 'yaml-zu-json-konverter',
        title: 'YAML-zu-JSON',
        description:
          'YAML in JSON-Format konvertieren. Automatisches Parsen und Formatieren. Kostenlos.',
      },
      es: {
        slug: 'convertidor-yaml-a-json',
        title: 'YAML a JSON',
        description:
          'Convierte YAML a formato JSON. Análisis y formato automáticos. Gratis.',
      },
      fr: {
        slug: 'convertisseur-yaml-en-json',
        title: 'YAML en JSON',
        description:
          'Convertissez YAML en format JSON. Analyse et formatage automatiques. Gratuit.',
      },
      pt: {
        slug: 'conversor-yaml-para-json',
        title: 'YAML para JSON',
        description:
          'Converta YAML para formato JSON. Análise e formatação automáticas. Gratuito.',
      },
      it: {
        slug: 'convertitore-yaml-in-json',
        title: 'YAML in JSON',
        description:
          'Converti YAML in formato JSON. Analisi e formattazione automatiche. Gratuito.',
      },
      cs: {
        slug: 'prevodnik-yaml-na-json',
        title: 'YAML na JSON',
        description:
          'Převeďte YAML do formátu JSON. Automatické parsování a formátování. Zdarma.',
      },
    },
  },
  {
    key: 'jsonToYaml',
    section: 'dokumenty',
    icon: RiFileTextLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-json-na-yaml',
        title: 'JSON na YAML',
        description:
          'Zamień dane JSON na czytelny YAML. Konwersja w przeglądarce z formatowaniem. Bez rejestracji.',
      },

      en: {
        slug: 'json-to-yaml-converter',
        title: 'JSON to YAML',
        description:
          'Convert JSON to YAML format. Automatic parsing and formatting. Free, no registration.',
      },
      de: {
        slug: 'json-zu-yaml-konverter',
        title: 'JSON-zu-YAML',
        description:
          'JSON in YAML-Format konvertieren. Automatisches Parsen und Formatieren. Kostenlos.',
      },
      es: {
        slug: 'convertidor-json-a-yaml',
        title: 'JSON a YAML',
        description:
          'Convierte JSON a formato YAML. Análisis y formato automáticos. Gratis.',
      },
      fr: {
        slug: 'convertisseur-json-en-yaml',
        title: 'JSON en YAML',
        description:
          'Convertissez JSON en format YAML. Analyse et formatage automatiques. Gratuit.',
      },
      pt: {
        slug: 'conversor-json-para-yaml',
        title: 'JSON para YAML',
        description:
          'Converta JSON para formato YAML. Análise e formatação automáticas. Gratuito.',
      },
      it: {
        slug: 'convertitore-json-in-yaml',
        title: 'JSON in YAML',
        description:
          'Converti JSON in formato YAML. Analisi e formattazione automatiche. Gratuito.',
      },
      cs: {
        slug: 'prevodnik-json-na-yaml',
        title: 'JSON na YAML',
        description:
          'Převeďte JSON do formátu YAML. Automatické parsování a formátování. Zdarma.',
      },
    },
  },
  {
    key: 'markdownToHtml',
    section: 'dokumenty',
    icon: RiFileTextLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-markdown-na-html',
        title: 'Markdown na HTML',
        description:
          'Zamień tekst Markdown na czysty HTML. Podgląd wyniku w przeglądarce, kopiowanie jednym kliknięciem.',
      },

      en: {
        slug: 'markdown-to-html-converter',
        title: 'Markdown to HTML',
        description:
          'Convert Markdown to HTML format. Automatic parsing and formatting. Free, no registration.',
      },
      de: {
        slug: 'markdown-zu-html-konverter',
        title: 'Markdown-zu-HTML',
        description:
          'Markdown in HTML-Format konvertieren. Automatisches Parsen und Formatieren. Kostenlos.',
      },
      es: {
        slug: 'convertidor-markdown-a-html',
        title: 'Markdown a HTML',
        description:
          'Convierte Markdown a formato HTML. Análisis y formato automáticos. Gratis.',
      },
      fr: {
        slug: 'convertisseur-markdown-en-html',
        title: 'Markdown en HTML',
        description:
          'Convertissez Markdown en format HTML. Analyse et formatage automatiques. Gratuit.',
      },
      pt: {
        slug: 'conversor-markdown-para-html',
        title: 'Markdown para HTML',
        description:
          'Converta Markdown para formato HTML. Análise e formatação automáticas. Gratuito.',
      },
      it: {
        slug: 'convertitore-markdown-in-html',
        title: 'Markdown in HTML',
        description:
          'Converti Markdown in formato HTML. Analisi e formattazione automatiche. Gratuito.',
      },
      cs: {
        slug: 'prevodnik-markdown-na-html',
        title: 'Markdown na HTML',
        description:
          'Převeďte Markdown do formátu HTML. Automatické parsování a formátování. Zdarma.',
      },
    },
  },
  {
    key: 'htmlToMarkdown',
    section: 'dokumenty',
    icon: RiFileTextLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-html-na-markdown',
        title: 'HTML na Markdown',
        description:
          'Zamień kod HTML na czytelny Markdown. Konwersja w przeglądarce, bez wysyłania danych.',
      },

      en: {
        slug: 'html-to-markdown-converter',
        title: 'HTML to Markdown',
        description:
          'Convert HTML to Markdown format. Automatic parsing and formatting. Free, no registration.',
      },
      de: {
        slug: 'html-zu-markdown-konverter',
        title: 'HTML-zu-Markdown',
        description:
          'HTML in Markdown-Format konvertieren. Automatisches Parsen und Formatieren. Kostenlos.',
      },
      es: {
        slug: 'convertidor-html-a-markdown',
        title: 'HTML a Markdown',
        description:
          'Convierte HTML a formato Markdown. Análisis y formato automáticos. Gratis.',
      },
      fr: {
        slug: 'convertisseur-html-en-markdown',
        title: 'HTML en Markdown',
        description:
          'Convertissez HTML en format Markdown. Analyse et formatage automatiques. Gratuit.',
      },
      pt: {
        slug: 'conversor-html-para-markdown',
        title: 'HTML para Markdown',
        description:
          'Converta HTML para formato Markdown. Análise e formatação automáticas. Gratuito.',
      },
      it: {
        slug: 'convertitore-html-in-markdown',
        title: 'HTML in Markdown',
        description:
          'Converti HTML in formato Markdown. Analisi e formattazione automatiche. Gratuito.',
      },
      cs: {
        slug: 'prevodnik-html-na-markdown',
        title: 'HTML na Markdown',
        description:
          'Převeďte HTML do formátu Markdown. Automatické parsování a formátování. Zdarma.',
      },
    },
  },
  // -------------------------------------------------------------------------
  // Base64 converters
  // -------------------------------------------------------------------------
  {
    key: 'imageToBase64',
    section: 'konwertery',
    icon: RiFileTextLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-obraz-na-base64',
        title: 'Obraz na Base64',
        description:
          'Zakoduj obraz do formatu Base64. Skopiuj gotowy kod do CSS lub HTML. Bez rejestracji.',
      },

      en: {
        slug: 'image-to-base64-converter',
        title: 'Image to Base64',
        description:
          'Encode images to Base64 format. Copy ready code for CSS or HTML. Free, no registration.',
      },
      de: {
        slug: 'bild-zu-base64-konverter',
        title: 'Bild-zu-Base64',
        description:
          'Bilder in Base64 kodieren. Fertigen Code für CSS oder HTML kopieren. Kostenlos.',
      },
      es: {
        slug: 'convertidor-imagen-a-base64',
        title: 'Imagen a Base64',
        description:
          'Codifica imágenes en formato Base64. Copia el código listo para CSS o HTML. Gratis.',
      },
      fr: {
        slug: 'convertisseur-image-en-base64',
        title: 'Image en Base64',
        description:
          'Encodez des images en Base64. Copiez le code prêt pour CSS ou HTML. Gratuit.',
      },
      pt: {
        slug: 'conversor-imagem-para-base64',
        title: 'Imagem para Base64',
        description:
          'Codifique imagens em Base64. Copie o código pronto para CSS ou HTML. Gratuito.',
      },
      it: {
        slug: 'convertitore-immagine-in-base64',
        title: 'Immagine in Base64',
        description:
          'Codifica immagini in formato Base64. Copia il codice pronto per CSS o HTML. Gratuito.',
      },
      cs: {
        slug: 'prevodnik-obrazek-na-base64',
        title: 'Obrázek na Base64',
        description:
          'Zakódujte obrázky do formátu Base64. Zkopírujte hotový kód pro CSS nebo HTML. Zdarma.',
      },
    },
  },
  {
    key: 'base64ToImage',
    section: 'konwertery',
    icon: RiFileTextLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-base64-na-obraz',
        title: 'Base64 na obraz',
        description:
          'Odkoduj ciąg Base64 na obraz. Podgląd i pobieranie w przeglądarce. Bez rejestracji.',
      },

      en: {
        slug: 'base64-to-image-converter',
        title: 'Base64 to Image',
        description:
          'Decode Base64 strings to images. Preview and download in your browser. Free, no registration.',
      },
      de: {
        slug: 'base64-zu-bild-konverter',
        title: 'Base64-zu-Bild',
        description:
          'Base64-Zeichenketten in Bilder dekodieren. Vorschau und Download im Browser. Kostenlos.',
      },
      es: {
        slug: 'convertidor-base64-a-imagen',
        title: 'Base64 a Imagen',
        description:
          'Decodifica cadenas Base64 a imágenes. Vista previa y descarga en tu navegador. Gratis.',
      },
      fr: {
        slug: 'convertisseur-base64-en-image',
        title: 'Base64 en Image',
        description:
          'Décodez les chaînes Base64 en images. Aperçu et téléchargement dans votre navigateur. Gratuit.',
      },
      pt: {
        slug: 'conversor-base64-para-imagem',
        title: 'Base64 para Imagem',
        description:
          'Decodifique strings Base64 em imagens. Pré-visualize e descarregue no navegador. Gratuito.',
      },
      it: {
        slug: 'convertitore-base64-in-immagine',
        title: 'Base64 in Immagine',
        description:
          'Decodifica stringhe Base64 in immagini. Anteprima e download nel browser. Gratuito.',
      },
      cs: {
        slug: 'prevodnik-base64-na-obrazek',
        title: 'Base64 na Obrázek',
        description:
          'Dekódujte řetězce Base64 na obrázky. Náhled a stažení v prohlížeči. Zdarma.',
      },
    },
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // Unit converters - design/graphics
  // ═══════════════════════════════════════════════════════════════════════════
  {
    key: 'ptToPx',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-pt-na-px',
        title: 'pt na px',
        description:
          'Przelicz punkty typograficzne (pt) na piksele (px) i odwrotnie. Dla designerow i frontendowcow.',
      },
      en: {
        slug: 'pt-to-px-converter',
        title: 'pt to px',
        description:
          'Convert typographic points to pixels and vice versa. For designers and developers.',
      },
      de: {
        slug: 'pt-in-px-umrechner',
        title: 'pt in px',
        description: 'Punkte in Pixel umrechnen und umgekehrt.',
      },
      fr: {
        slug: 'convertisseur-pt-en-px',
        title: 'pt en px',
        description: 'Convertissez les points en pixels et inversement.',
      },
      es: {
        slug: 'convertidor-pt-a-px',
        title: 'pt a px',
        description: 'Convierte puntos a píxeles y viceversa.',
      },
      pt: {
        slug: 'conversor-pt-para-px',
        title: 'pt para px',
        description: 'Converta pontos em píxeis e vice-versa.',
      },
      it: {
        slug: 'convertitore-pt-in-px',
        title: 'pt in px',
        description: 'Converti punti in pixel e viceversa.',
      },
      cs: {
        slug: 'prevodnik-pt-na-px',
        title: 'pt na px',
        description: 'Převeďte body na pixely a naopak.',
      },
    },
  },
  {
    key: 'remToPx',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-rem-na-px',
        title: 'rem na px',
        description:
          'Przelicz jednostki rem na piksele (px) i odwrotnie. Z regulacja bazowego font-size.',
      },
      en: {
        slug: 'rem-to-px-converter',
        title: 'rem to px',
        description:
          'Convert CSS rem units to pixels and vice versa. Adjustable root font size.',
      },
      de: {
        slug: 'rem-in-px-umrechner',
        title: 'rem in px',
        description: 'CSS rem in Pixel umrechnen und umgekehrt.',
      },
      fr: {
        slug: 'convertisseur-rem-en-px',
        title: 'rem en px',
        description: 'Convertissez rem CSS en pixels et inversement.',
      },
      es: {
        slug: 'convertidor-rem-a-px',
        title: 'rem a px',
        description: 'Convierte rem CSS a píxeles y viceversa.',
      },
      pt: {
        slug: 'conversor-rem-para-px',
        title: 'rem para px',
        description: 'Converta rem CSS em píxeis e vice-versa.',
      },
      it: {
        slug: 'convertitore-rem-in-px',
        title: 'rem in px',
        description: 'Converti rem CSS in pixel e viceversa.',
      },
      cs: {
        slug: 'prevodnik-rem-na-px',
        title: 'rem na px',
        description: 'Převeďte CSS rem na pixely a naopak.',
      },
    },
  },
  {
    key: 'emToPx',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-em-na-px',
        title: 'em na px',
        description:
          'Przelicz jednostki em na piksele (px) i odwrotnie. Z regulacja font-size rodzica.',
      },
      en: {
        slug: 'em-to-px-converter',
        title: 'em to px',
        description:
          'Convert CSS em units to pixels and vice versa. Adjustable parent font size.',
      },
      de: {
        slug: 'em-in-px-umrechner',
        title: 'em in px',
        description: 'CSS em in Pixel umrechnen und umgekehrt.',
      },
      fr: {
        slug: 'convertisseur-em-en-px',
        title: 'em en px',
        description: 'Convertissez em CSS en pixels et inversement.',
      },
      es: {
        slug: 'convertidor-em-a-px',
        title: 'em a px',
        description: 'Convierte em CSS a píxeles y viceversa.',
      },
      pt: {
        slug: 'conversor-em-para-px',
        title: 'em para px',
        description: 'Converta em CSS em píxeis e vice-versa.',
      },
      it: {
        slug: 'convertitore-em-in-px',
        title: 'em in px',
        description: 'Converti em CSS in pixel e viceversa.',
      },
      cs: {
        slug: 'prevodnik-em-na-px',
        title: 'em na px',
        description: 'Převeďte CSS em na pixely a naopak.',
      },
    },
  },
  {
    key: 'cmToPxDpi',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-cm-na-px',
        title: 'cm na px',
        description:
          'Przelicz centymetry na piksele z uwzglednieniem DPI. Dla grafiki i druku.',
      },
      en: {
        slug: 'cm-to-px-converter',
        title: 'cm to px',
        description:
          'Convert centimeters to pixels with DPI support. For graphics and print.',
      },
      de: {
        slug: 'cm-in-px-umrechner',
        title: 'cm in px',
        description: 'Zentimeter in Pixel umrechnen mit DPI-Unterstützung.',
      },
      fr: {
        slug: 'convertisseur-cm-en-px',
        title: 'cm en px',
        description: 'Convertissez cm en pixels avec support DPI.',
      },
      es: {
        slug: 'convertidor-cm-a-px',
        title: 'cm a px',
        description: 'Convierte cm a píxeles con soporte DPI.',
      },
      pt: {
        slug: 'conversor-cm-para-px',
        title: 'cm para px',
        description: 'Converta cm em píxeis com suporte DPI.',
      },
      it: {
        slug: 'convertitore-cm-in-px',
        title: 'cm in px',
        description: 'Converti cm in pixel con supporto DPI.',
      },
      cs: {
        slug: 'prevodnik-cm-na-px',
        title: 'cm na px',
        description: 'Převeďte cm na pixely s podporou DPI.',
      },
    },
  },
  {
    key: 'pxToCmDpi',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-px-na-cm',
        title: 'px na cm',
        description:
          'Przelicz piksele na centymetry z uwzglednieniem DPI. Dla grafiki i druku.',
      },
      en: {
        slug: 'px-to-cm-converter',
        title: 'px to cm',
        description:
          'Convert pixels to centimeters with DPI support. For graphics and print.',
      },
      de: {
        slug: 'px-in-cm-umrechner',
        title: 'px in cm',
        description: 'Pixel in Zentimeter umrechnen mit DPI-Unterstützung.',
      },
      fr: {
        slug: 'convertisseur-px-en-cm',
        title: 'px en cm',
        description: 'Convertissez pixels en cm avec support DPI.',
      },
      es: {
        slug: 'convertidor-px-a-cm',
        title: 'px a cm',
        description: 'Convierte píxeles a cm con soporte DPI.',
      },
      pt: {
        slug: 'conversor-px-para-cm',
        title: 'px para cm',
        description: 'Converta píxeis em cm com suporte DPI.',
      },
      it: {
        slug: 'convertitore-px-in-cm',
        title: 'px in cm',
        description: 'Converti pixel in cm con supporto DPI.',
      },
      cs: {
        slug: 'prevodnik-px-na-cm',
        title: 'px na cm',
        description: 'Převeďte pixely na cm s podporou DPI.',
      },
    },
  },
  {
    key: 'mmToPxDpi',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-mm-na-px',
        title: 'mm na px',
        description:
          'Przelicz milimetry na piksele z uwzglednieniem DPI. Dla grafiki i druku.',
      },
      en: {
        slug: 'mm-to-px-converter',
        title: 'mm to px',
        description:
          'Convert millimeters to pixels with DPI support. For graphics and print.',
      },
      de: {
        slug: 'mm-in-px-umrechner',
        title: 'mm in px',
        description: 'Millimeter in Pixel umrechnen mit DPI-Unterstützung.',
      },
      fr: {
        slug: 'convertisseur-mm-en-px',
        title: 'mm en px',
        description: 'Convertissez mm en pixels avec support DPI.',
      },
      es: {
        slug: 'convertidor-mm-a-px',
        title: 'mm a px',
        description: 'Convierte mm a píxeles con soporte DPI.',
      },
      pt: {
        slug: 'conversor-mm-para-px',
        title: 'mm para px',
        description: 'Converta mm em píxeis com suporte DPI.',
      },
      it: {
        slug: 'convertitore-mm-in-px',
        title: 'mm in px',
        description: 'Converti mm in pixel con supporto DPI.',
      },
      cs: {
        slug: 'prevodnik-mm-na-px',
        title: 'mm na px',
        description: 'Převeďte mm na pixely s podporou DPI.',
      },
    },
  },
  {
    key: 'pxToMmDpi',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-px-na-mm',
        title: 'px na mm',
        description:
          'Przelicz piksele na milimetry z uwzglednieniem DPI. Dla grafiki i druku.',
      },
      en: {
        slug: 'px-to-mm-converter',
        title: 'px to mm',
        description:
          'Convert pixels to millimeters with DPI support. For graphics and print.',
      },
      de: {
        slug: 'px-in-mm-umrechner',
        title: 'px in mm',
        description: 'Pixel in Millimeter umrechnen mit DPI-Unterstützung.',
      },
      fr: {
        slug: 'convertisseur-px-en-mm',
        title: 'px en mm',
        description: 'Convertissez pixels en mm avec support DPI.',
      },
      es: {
        slug: 'convertidor-px-a-mm',
        title: 'px a mm',
        description: 'Convierte píxeles a mm con soporte DPI.',
      },
      pt: {
        slug: 'conversor-px-para-mm',
        title: 'px para mm',
        description: 'Converta píxeis em mm com suporte DPI.',
      },
      it: {
        slug: 'convertitore-px-in-mm',
        title: 'px in mm',
        description: 'Converti pixel in mm con supporto DPI.',
      },
      cs: {
        slug: 'prevodnik-px-na-mm',
        title: 'px na mm',
        description: 'Převeďte pixely na mm s podporou DPI.',
      },
    },
  },
  {
    key: 'inchesToPxDpi',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-cale-na-px',
        title: 'cale na px',
        description:
          'Przelicz cale na piksele z uwzglednieniem DPI. Dla grafiki i prepress.',
      },
      en: {
        slug: 'inches-to-px-converter',
        title: 'inches to px',
        description:
          'Convert inches to pixels with DPI support. For graphics and prepress.',
      },
      de: {
        slug: 'zoll-in-px-umrechner',
        title: 'Zoll in px',
        description: 'Zoll in Pixel umrechnen mit DPI-Unterstützung.',
      },
      fr: {
        slug: 'convertisseur-pouces-en-px',
        title: 'pouces en px',
        description: 'Convertissez pouces en pixels avec support DPI.',
      },
      es: {
        slug: 'convertidor-pulgadas-a-px',
        title: 'pulgadas a px',
        description: 'Convierte pulgadas a píxeles con soporte DPI.',
      },
      pt: {
        slug: 'conversor-polegadas-para-px',
        title: 'polegadas para px',
        description: 'Converta polegadas em píxeis com suporte DPI.',
      },
      it: {
        slug: 'convertitore-pollici-in-px',
        title: 'pollici in px',
        description: 'Converti pollici in pixel con supporto DPI.',
      },
      cs: {
        slug: 'prevodnik-palce-na-px',
        title: 'palce na px',
        description: 'Převeďte palce na pixely s podporou DPI.',
      },
    },
  },
  {
    key: 'cmToInches',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-cm-na-cale',
        title: 'cm na cale',
        description:
          'Przelicz centymetry na cale. Wzrost, rozmiary ubrań, ekrany TV, wymiary bagażu.',
      },
      en: {
        slug: 'cm-to-inches-converter',
        title: 'cm to inches',
        description:
          'Convert centimeters to inches. Height, clothing sizes, TV screen size, luggage dimensions.',
      },
      de: {
        slug: 'cm-in-zoll-umrechner',
        title: 'cm in Zoll',
        description:
          'Zentimeter in Zoll umrechnen. Körpergröße, Kleidergrößen, TV-Diagonale, Gepäckmaße.',
      },
      fr: {
        slug: 'convertisseur-cm-en-pouces',
        title: 'cm en pouces',
        description:
          'Convertissez les centimètres en pouces. Taille, vêtements, TV, bagages.',
      },
      es: {
        slug: 'convertidor-cm-a-pulgadas',
        title: 'cm a pulgadas',
        description:
          'Convierte centímetros a pulgadas. Estatura, ropa, televisores, equipaje.',
      },
      pt: {
        slug: 'conversor-cm-para-polegadas',
        title: 'cm para polegadas',
        description:
          'Converta centímetros em polegadas. Altura, roupa, televisão, bagagem.',
      },
      it: {
        slug: 'convertitore-cm-in-pollici',
        title: 'cm in pollici',
        description:
          'Converti centimetri in pollici. Altezza, taglie, televisori, bagagli.',
      },
      cs: {
        slug: 'prevodnik-cm-na-palce',
        title: 'cm na palce',
        description:
          'Převeď centimetry na palce. Výška, velikosti oblečení, televizory, zavazadla.',
      },
    },
  },
  {
    key: 'inchesToCm',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-cali-na-cm',
        title: 'cale na cm',
        description:
          'Przelicz cale na centymetry. Wzrost, telewizory, rozmiary ubrań z anglojęzycznych sklepów.',
      },
      en: {
        slug: 'inches-to-cm-converter',
        title: 'inches to cm',
        description:
          'Convert inches to centimeters. TV size, height in metric, clothing sizes, luggage.',
      },
      de: {
        slug: 'zoll-in-cm-umrechner',
        title: 'Zoll in cm',
        description:
          'Zoll in Zentimeter umrechnen. TV-Größe, Körpergröße, Kleidergrößen, Gepäckmaße.',
      },
      fr: {
        slug: 'convertisseur-pouces-en-cm',
        title: 'pouces en cm',
        description:
          'Convertissez les pouces en centimètres. TV, taille, vêtements, bagages.',
      },
      es: {
        slug: 'convertidor-pulgadas-a-cm',
        title: 'pulgadas a cm',
        description:
          'Convierte pulgadas a centímetros. TV, estatura, ropa, equipaje.',
      },
      pt: {
        slug: 'conversor-polegadas-para-cm',
        title: 'polegadas para cm',
        description:
          'Converta polegadas em centímetros. TV, altura, roupa, bagagem.',
      },
      it: {
        slug: 'convertitore-pollici-in-cm',
        title: 'pollici in cm',
        description:
          'Converti pollici in centimetri. TV, altezza, taglie, bagagli.',
      },
      cs: {
        slug: 'prevodnik-palcu-na-cm',
        title: 'palce na cm',
        description:
          'Převeď palce na centimetry. Televizory, výška, velikosti oblečení, zavazadla.',
      },
    },
  },
  {
    key: 'mmToInches',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-mm-na-cale',
        title: 'mm na cale',
        description:
          'Przelicz milimetry na cale. Wiertła, śruby, grubość materiałów, tabela ułamków cala.',
      },
      en: {
        slug: 'mm-to-inches-converter',
        title: 'mm to inches',
        description:
          'Convert millimeters to inches. Drill bits, bolts, material thickness, inch fraction table.',
      },
      de: {
        slug: 'mm-in-zoll-umrechner',
        title: 'mm in Zoll',
        description:
          'Millimeter in Zoll umrechnen. Bohrer, Schrauben, Materialstärken, Zollbruchtabelle.',
      },
      es: {
        slug: 'convertidor-mm-a-pulgadas',
        title: 'mm a pulgadas',
        description:
          'Convierte milímetros a pulgadas. Brocas, tornillos, grosores, tabla de fracciones de pulgada.',
      },
      fr: {
        slug: 'convertisseur-mm-en-pouces',
        title: 'mm en pouces',
        description:
          'Convertissez les millimètres en pouces. Forets, vis, épaisseurs, tableau des fractions de pouce.',
      },
      pt: {
        slug: 'conversor-mm-para-polegadas',
        title: 'mm para polegadas',
        description:
          'Converta milímetros em polegadas. Brocas, parafusos, espessuras, tabela de frações de polegada.',
      },
      it: {
        slug: 'convertitore-mm-in-pollici',
        title: 'mm in pollici',
        description:
          'Converti millimetri in pollici. Punte da trapano, viti, spessori, tabella delle frazioni di pollice.',
      },
      cs: {
        slug: 'prevodnik-mm-na-palce',
        title: 'mm na palce',
        description:
          'Převeď milimetry na palce. Vrtáky, šrouby, tloušťky materiálů, tabulka palcových zlomků.',
      },
    },
  },
  {
    key: 'inchesToMm',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-cali-na-mm',
        title: 'cale na mm',
        description:
          'Przelicz cale na milimetry. Wiertła, śruby, klucze nasadowe, pełna tabela ułamków cala.',
      },
      en: {
        slug: 'inches-to-mm-converter',
        title: 'inches to mm',
        description:
          'Convert inches to millimeters. Drill bits, bolts, socket wrenches, full inch fraction table.',
      },
      de: {
        slug: 'zoll-in-mm-umrechner',
        title: 'Zoll in mm',
        description:
          'Zoll in Millimeter umrechnen. Bohrer, Schrauben, Steckschlüssel, vollständige Zollbruchtabelle.',
      },
      es: {
        slug: 'convertidor-pulgadas-a-mm',
        title: 'pulgadas a mm',
        description:
          'Convierte pulgadas a milímetros. Brocas, tornillos, llaves de vaso, tabla completa de fracciones.',
      },
      fr: {
        slug: 'convertisseur-pouces-en-mm',
        title: 'pouces en mm',
        description:
          'Convertissez les pouces en millimètres. Forets, vis, douilles, tableau complet des fractions.',
      },
      pt: {
        slug: 'conversor-polegadas-para-mm',
        title: 'polegadas para mm',
        description:
          'Converta polegadas em milímetros. Brocas, parafusos, chaves de caixa, tabela completa de frações.',
      },
      it: {
        slug: 'convertitore-pollici-in-mm',
        title: 'pollici in mm',
        description:
          'Converti pollici in millimetri. Punte da trapano, viti, chiavi a bussola, tabella completa delle frazioni.',
      },
      cs: {
        slug: 'prevodnik-palcu-na-mm',
        title: 'palce na mm',
        description:
          'Převeď palce na milimetry. Vrtáky, šrouby, nástrčné klíče, úplná tabulka palcových zlomků.',
      },
    },
  },
  {
    key: 'milesToKm',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-mil-na-kilometry',
        title: 'mile na kilometry',
        description:
          'Przelicz mile na kilometry. Bieganie i maraton, limity prędkości (mph na km/h), podróże, mile morskie.',
      },
      en: {
        slug: 'miles-to-km-converter',
        title: 'miles to km',
        description:
          'Convert miles to kilometers. Running and marathon, speed limits (mph to km/h), travel, nautical miles.',
      },
      de: {
        slug: 'meilen-in-km-umrechner',
        title: 'Meilen in km',
        description:
          'Meilen in Kilometer umrechnen. Laufen und Marathon, Tempolimits (mph in km/h), Reisen, Seemeilen.',
      },
      es: {
        slug: 'convertidor-millas-a-km',
        title: 'millas a km',
        description:
          'Convierte millas a kilómetros. Correr y maratón, límites de velocidad (mph a km/h), viajes, millas náuticas.',
      },
      fr: {
        slug: 'convertisseur-miles-en-km',
        title: 'miles en km',
        description:
          'Convertissez des miles en kilomètres. Course et marathon, limitations (mph en km/h), voyages, milles marins.',
      },
      pt: {
        slug: 'conversor-milhas-para-km',
        title: 'milhas para km',
        description:
          'Converta milhas em quilómetros. Corrida e maratona, limites de velocidade (mph para km/h), viagens, milhas náuticas.',
      },
      it: {
        slug: 'convertitore-miglia-in-km',
        title: 'miglia in km',
        description:
          'Converti miglia in chilometri. Corsa e maratona, limiti di velocità (mph in km/h), viaggi, miglia nautiche.',
      },
      cs: {
        slug: 'prevodnik-mil-na-km',
        title: 'míle na km',
        description:
          'Převeď míle na kilometry. Běhání a maraton, rychlostní limity (mph na km/h), cesty, námořní míle.',
      },
    },
  },
  {
    key: 'kmToMiles',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-kilometrow-na-mile',
        title: 'kilometry na mile',
        description:
          'Przelicz kilometry na mile. Bieganie i maraton, prędkość (km/h na mph), podróże do USA i Wielkiej Brytanii.',
      },
      en: {
        slug: 'km-to-miles-converter',
        title: 'km to miles',
        description:
          'Convert kilometers to miles. Running and marathon, speed (km/h to mph), trips to the US and UK.',
      },
      de: {
        slug: 'km-in-meilen-umrechner',
        title: 'km in Meilen',
        description:
          'Kilometer in Meilen umrechnen. Laufen und Marathon, Geschwindigkeit (km/h in mph), Reisen in die USA und nach Großbritannien.',
      },
      es: {
        slug: 'convertidor-km-a-millas',
        title: 'km a millas',
        description:
          'Convierte kilómetros a millas. Correr y maratón, velocidad (km/h a mph), viajes a EE. UU. y al Reino Unido.',
      },
      fr: {
        slug: 'convertisseur-km-en-miles',
        title: 'km en miles',
        description:
          'Convertissez des kilomètres en miles. Course et marathon, vitesse (km/h en mph), voyages aux États-Unis et au Royaume-Uni.',
      },
      pt: {
        slug: 'conversor-km-para-milhas',
        title: 'km para milhas',
        description:
          'Converta quilómetros em milhas. Corrida e maratona, velocidade (km/h para mph), viagens aos EUA e ao Reino Unido.',
      },
      it: {
        slug: 'convertitore-km-in-miglia',
        title: 'km in miglia',
        description:
          'Converti chilometri in miglia. Corsa e maratona, velocità (km/h in mph), viaggi negli USA e nel Regno Unito.',
      },
      cs: {
        slug: 'prevodnik-km-na-mile',
        title: 'km na míle',
        description:
          'Převeď kilometry na míle. Běhání a maraton, rychlost (km/h na mph), cesty do USA a Velké Británie.',
      },
    },
  },
  {
    key: 'metersToFeet',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-metrow-na-stopy',
        title: 'metry na stopy',
        description:
          'Przelicz metry na stopy. Wzrost w stopach i calach, wymiary, tabela przeliczeniowa.',
      },
      en: {
        slug: 'meters-to-feet-converter',
        title: 'meters to feet',
        description:
          'Convert meters to feet. Height in feet and inches, room and equipment sizes, full conversion table.',
      },
      de: {
        slug: 'meter-in-fuss-umrechner',
        title: 'Meter in Fuß',
        description:
          'Meter in Fuß umrechnen. Körpergröße in Fuß und Zoll, Flughöhen, vollständige Umrechnungstabelle.',
      },
      es: {
        slug: 'convertidor-metros-a-pies',
        title: 'metros a pies',
        description:
          'Convierte metros a pies. Altura en pies y pulgadas, jugadores de la NBA, tabla de conversión completa.',
      },
      fr: {
        slug: 'convertisseur-metres-en-pieds',
        title: 'mètres en pieds',
        description:
          'Convertissez des mètres en pieds. Taille en pieds et pouces, altitude en aviation, tableau complet.',
      },
      pt: {
        slug: 'conversor-metros-para-pes',
        title: 'metros para pés',
        description:
          'Converta metros em pés. Altura em pés e polegadas, jogadores da NBA, tabela de conversão completa.',
      },
      it: {
        slug: 'convertitore-metri-in-piedi',
        title: 'metri in piedi',
        description:
          'Converti metri in piedi. Altezza in piedi e pollici, giocatori NBA, tabella di conversione completa.',
      },
      cs: {
        slug: 'prevodnik-metru-na-stopy',
        title: 'metry na stopy',
        description:
          'Převeď metry na stopy. Výška v stopách a palcích, letecké výšky, úplná převodní tabulka.',
      },
    },
  },
  {
    key: 'feetToMeters',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-stop-na-metry',
        title: 'stopy na metry',
        description:
          'Przelicz stopy na metry. Wzrost w stopach i calach, wysokość w lotnictwie, tabela przeliczeniowa.',
      },
      en: {
        slug: 'feet-to-meters-converter',
        title: 'feet to meters',
        description:
          'Convert feet to meters. Height in feet and inches, aviation altitude, full conversion table.',
      },
      de: {
        slug: 'fuss-in-meter-umrechner',
        title: 'Fuß in Meter',
        description:
          'Fuß in Meter umrechnen. Körpergröße in Fuß und Zoll, Flughöhen, vollständige Umrechnungstabelle.',
      },
      es: {
        slug: 'convertidor-pies-a-metros',
        title: 'pies a metros',
        description:
          'Convierte pies a metros. Altura en pies y pulgadas, altitud en aviación, tabla de conversión completa.',
      },
      fr: {
        slug: 'convertisseur-pieds-en-metres',
        title: 'pieds en mètres',
        description:
          'Convertissez des pieds en mètres. Taille en pieds et pouces, immobilier au Québec, tableau complet.',
      },
      pt: {
        slug: 'conversor-pes-para-metros',
        title: 'pés para metros',
        description:
          'Converta pés em metros. Altura em pés e polegadas, altitude em aviação, tabela de conversão completa.',
      },
      it: {
        slug: 'convertitore-piedi-in-metri',
        title: 'piedi in metri',
        description:
          'Converti piedi in metri. Altezza in piedi e pollici, quota in aviazione, tabella di conversione completa.',
      },
      cs: {
        slug: 'prevodnik-stop-na-metry',
        title: 'stopy na metry',
        description:
          'Převeď stopy na metry. Výška v stopách a palcích, letecké výšky, úplná převodní tabulka.',
      },
    },
  },
  {
    key: 'inchesToFeet',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-cali-na-stopy',
        title: 'cale na stopy',
        description:
          'Przelicz cale na stopy. Wzrost z cali na stopy i cale, tabela wzrostu, pełna tabela przeliczeniowa.',
      },
      en: {
        slug: 'inches-to-feet-converter',
        title: 'inches to feet',
        description:
          'Convert inches to feet. Height in feet and inches, height table, full conversion table.',
      },
      de: {
        slug: 'zoll-in-fuss-umrechner',
        title: 'Zoll in Fuß',
        description:
          'Zoll in Fuß umrechnen. Körpergröße in Fuß und Zoll, Größentabelle, vollständige Umrechnungstabelle.',
      },
      es: {
        slug: 'convertidor-pulgadas-a-pies',
        title: 'pulgadas a pies',
        description:
          'Convierte pulgadas a pies. Altura en pies y pulgadas, tabla de alturas, tabla de conversión completa.',
      },
      fr: {
        slug: 'convertisseur-pouces-en-pieds',
        title: 'pouces en pieds',
        description:
          'Convertissez des pouces en pieds. Taille en pieds et pouces, tableau des tailles, tableau complet.',
      },
      pt: {
        slug: 'conversor-polegadas-para-pes',
        title: 'polegadas para pés',
        description:
          'Converta polegadas em pés. Altura em pés e polegadas, tabela de alturas, tabela de conversão completa.',
      },
      it: {
        slug: 'convertitore-pollici-in-piedi',
        title: 'pollici in piedi',
        description:
          'Converti pollici in piedi. Altezza in piedi e pollici, tabella delle altezze, tabella di conversione completa.',
      },
      cs: {
        slug: 'prevodnik-palcu-na-stopy',
        title: 'palce na stopy',
        description:
          'Převeď palce na stopy. Výška ve stopách a palcích, tabulka výšek, úplná převodní tabulka.',
      },
    },
  },
  {
    key: 'feetToInches',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-stop-na-cale',
        title: 'stopy na cale',
        description:
          'Przelicz stopy na cale. Wzrost ze stóp i cali na cale, tabela wzrostu, pełna tabela przeliczeniowa.',
      },
      en: {
        slug: 'feet-to-inches-converter',
        title: 'feet to inches',
        description:
          'Convert feet to inches. Height in feet and inches to total inches, height table, full conversion table.',
      },
      de: {
        slug: 'fuss-in-zoll-umrechner',
        title: 'Fuß in Zoll',
        description:
          'Fuß in Zoll umrechnen. Körpergröße in Fuß und Zoll in Zoll gesamt, Größentabelle, vollständige Umrechnungstabelle.',
      },
      es: {
        slug: 'convertidor-pies-a-pulgadas',
        title: 'pies a pulgadas',
        description:
          'Convierte pies a pulgadas. Altura en pies y pulgadas a pulgadas totales, tabla de alturas, tabla de conversión completa.',
      },
      fr: {
        slug: 'convertisseur-pieds-en-pouces',
        title: 'pieds en pouces',
        description:
          'Convertissez des pieds en pouces. Taille en pieds et pouces en pouces au total, tableau des tailles, tableau complet.',
      },
      pt: {
        slug: 'conversor-pes-para-polegadas',
        title: 'pés para polegadas',
        description:
          'Converta pés em polegadas. Altura em pés e polegadas para polegadas totais, tabela de alturas, tabela de conversão completa.',
      },
      it: {
        slug: 'convertitore-piedi-in-pollici',
        title: 'piedi in pollici',
        description:
          'Converti piedi in pollici. Altezza in piedi e pollici in pollici totali, tabella delle altezze, tabella di conversione completa.',
      },
      cs: {
        slug: 'prevodnik-stop-na-palce',
        title: 'stopy na palce',
        description:
          'Převeď stopy na palce. Výška ve stopách a palcích na palce celkem, tabulka výšek, úplná převodní tabulka.',
      },
    },
  },
  {
    key: 'lbsToOz',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-funtow-na-uncje',
        title: 'funty na uncje',
        description:
          'Przelicz funty na uncje. Waga niemowląt w funtach i uncjach, tabela przeliczeniowa, dokładny wzór.',
      },
      en: {
        slug: 'lb-to-oz-converter',
        title: 'lb to oz',
        description:
          'Convert pounds to ounces. Baby weight in pounds and ounces, conversion table and the exact formula.',
      },
      de: {
        slug: 'pfund-in-unzen-umrechner',
        title: 'Pfund in Unzen',
        description:
          'Pfund in Unzen umrechnen. Säuglingsgewicht in Pfund und Unzen, Umrechnungstabelle und exakte Formel.',
      },
      fr: {
        slug: 'convertisseur-livres-en-onces',
        title: 'livres en onces',
        description:
          'Convertissez des livres en onces. Poids des bébés en livres et onces, tableau et formule exacte.',
      },
      es: {
        slug: 'convertidor-libras-a-onzas',
        title: 'libras a onzas',
        description:
          'Convierte libras a onzas. Peso de bebés en libras y onzas, tabla de conversión y fórmula exacta.',
      },
      pt: {
        slug: 'conversor-libras-para-oncas',
        title: 'libras para onças',
        description:
          'Converta libras para onças. Peso de bebés em libras e onças, tabela de conversão e fórmula exata.',
      },
      it: {
        slug: 'convertitore-libbre-in-once',
        title: 'libbre in once',
        description:
          'Converti libbre in once. Peso dei neonati in libbre e once, tabella di conversione e formula esatta.',
      },
      cs: {
        slug: 'prevodnik-liber-na-unce',
        title: 'libry na unce',
        description:
          'Převeď libry na unce. Hmotnost kojenců v librách a uncích, převodní tabulka a přesný vzorec.',
      },
    },
  },
  {
    key: 'ozToLbs',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-uncji-na-funty',
        title: 'uncje na funty',
        description:
          'Przelicz uncje na funty. Wynik jako funty i uncje, waga niemowląt, tabela przeliczeniowa.',
      },
      en: {
        slug: 'oz-to-lb-converter',
        title: 'oz to lb',
        description:
          'Convert ounces to pounds. Result as pounds and ounces, baby weight and a conversion table.',
      },
      de: {
        slug: 'unzen-in-pfund-umrechner',
        title: 'Unzen in Pfund',
        description:
          'Unzen in Pfund umrechnen. Ergebnis als Pfund und Unzen, Säuglingsgewicht und Umrechnungstabelle.',
      },
      fr: {
        slug: 'convertisseur-onces-en-livres',
        title: 'onces en livres',
        description:
          'Convertissez des onces en livres. Résultat en livres et onces, poids des bébés et un tableau.',
      },
      es: {
        slug: 'convertidor-onzas-a-libras',
        title: 'onzas a libras',
        description:
          'Convierte onzas a libras. Resultado como libras y onzas, peso de bebés y tabla de conversión.',
      },
      pt: {
        slug: 'conversor-oncas-para-libras',
        title: 'onças para libras',
        description:
          'Converta onças para libras. Resultado como libras e onças, peso de bebés e tabela de conversão.',
      },
      it: {
        slug: 'convertitore-once-in-libbre',
        title: 'once in libbre',
        description:
          'Converti once in libbre. Risultato come libbre e once, peso dei neonati e tabella di conversione.',
      },
      cs: {
        slug: 'prevodnik-unci-na-libry',
        title: 'unce na libry',
        description:
          'Převeď unce na libry. Výsledek jako libry a unce, hmotnost kojenců a převodní tabulka.',
      },
    },
  },
  {
    key: 'mlToOz',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-ml-na-uncje',
        title: 'ml na uncje',
        description:
          'Przelicz mililitry na uncje płynu. Uncja amerykańska i brytyjska, butelka wina, limit płynów w bagażu.',
      },
      en: {
        slug: 'ml-to-oz-converter',
        title: 'ml to oz',
        description:
          'Convert millilitres to fluid ounces. US or UK ounce switch, wine bottle, carry-on liquid limit.',
      },
      de: {
        slug: 'ml-in-unzen-umrechner',
        title: 'ml in Unzen',
        description:
          'Milliliter in Flüssigunzen umrechnen. Umschalter für US- oder UK-Unze, Weinflasche, Handgepäck-Limit.',
      },
      es: {
        slug: 'convertidor-ml-a-onzas',
        title: 'ml a onzas',
        description:
          'Convierte mililitros a onzas líquidas. Onza estadounidense o británica, botella de vino, límite de líquidos.',
      },
      fr: {
        slug: 'convertisseur-ml-en-onces',
        title: 'ml en onces',
        description:
          'Convertissez des millilitres en onces liquides. Once américaine ou britannique, bouteille de vin, bagage cabine.',
      },
      pt: {
        slug: 'conversor-ml-para-oncas',
        title: 'ml para onças',
        description:
          'Converta mililitros em onças líquidas. Onça norte-americana ou britânica, garrafa de vinho, limite de líquidos.',
      },
      it: {
        slug: 'convertitore-ml-in-once',
        title: 'ml in once',
        description:
          'Converti millilitri in once liquide. Oncia americana o britannica, bottiglia di vino, limite liquidi bagaglio.',
      },
      cs: {
        slug: 'prevodnik-ml-na-unce',
        title: 'ml na unce',
        description:
          'Převeď mililitry na tekuté unce. Přepínač americké nebo britské unce, láhev vína, limit tekutin.',
      },
    },
  },
  {
    key: 'ozToMl',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-uncji-na-ml',
        title: 'uncje na ml',
        description:
          'Przelicz uncje płynu na mililitry. Uncja amerykańska i brytyjska, kubek US, przepisy kuchenne.',
      },
      en: {
        slug: 'oz-to-ml-converter',
        title: 'oz to ml',
        description:
          'Convert fluid ounces to millilitres. US or UK ounce switch, US cup, kitchen recipes.',
      },
      de: {
        slug: 'unzen-in-ml-umrechner',
        title: 'Unzen in ml',
        description:
          'Flüssigunzen in Milliliter umrechnen. Umschalter für US- oder UK-Unze, US-Cup, Kochrezepte.',
      },
      es: {
        slug: 'convertidor-onzas-a-ml',
        title: 'onzas a ml',
        description:
          'Convierte onzas líquidas a mililitros. Onza estadounidense o británica, taza US, recetas de cocina.',
      },
      fr: {
        slug: 'convertisseur-onces-en-ml',
        title: 'onces en ml',
        description:
          'Convertissez des onces liquides en millilitres. Once américaine ou britannique, tasse US, recettes de cuisine.',
      },
      pt: {
        slug: 'conversor-oncas-para-ml',
        title: 'onças para ml',
        description:
          'Converta onças líquidas em mililitros. Onça norte-americana ou britânica, chávena US, receitas de cozinha.',
      },
      it: {
        slug: 'convertitore-once-in-ml',
        title: 'once in ml',
        description:
          'Converti once liquide in millilitri. Oncia americana o britannica, tazza US, ricette di cucina.',
      },
      cs: {
        slug: 'prevodnik-unci-na-ml',
        title: 'unce na ml',
        description:
          'Převeď tekuté unce na mililitry. Přepínač americké nebo britské unce, americký hrnek, kuchařské recepty.',
      },
    },
  },
  {
    key: 'kgToLb',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-kg-na-funty',
        title: 'kg na funty',
        description:
          'Przelicz kilogramy na funty. Waga ciała, trening, bagaż, waga niemowląt.',
      },
      en: {
        slug: 'kg-to-lb-converter',
        title: 'kg to lb',
        description:
          'Convert kilograms to pounds. Body weight, gym loads, baggage limits and newborn weight.',
      },
      de: {
        slug: 'kg-in-pfund-umrechner',
        title: 'kg in Pfund',
        description:
          'Kilogramm in Pfund umrechnen. Körpergewicht, Fitnessstudio, Gepäcklimits.',
      },
      fr: {
        slug: 'convertisseur-kg-en-livres',
        title: 'kg en livres',
        description:
          'Convertissez des kilogrammes en livres. Poids corporel, charges de salle et bagages.',
      },
      es: {
        slug: 'convertidor-kg-a-libras',
        title: 'kg a libras',
        description:
          'Convierte kilogramos a libras. Peso corporal, cargas de gimnasio y límites de equipaje.',
      },
      pt: {
        slug: 'conversor-kg-para-libras',
        title: 'kg para libras',
        description:
          'Converta quilogramas para libras. Peso corporal, cargas de academia e limites de bagagem.',
      },
      it: {
        slug: 'convertitore-kg-in-libbre',
        title: 'kg in libbre',
        description:
          'Converti chilogrammi in libbre. Peso corporeo, carichi in palestra e limiti bagaglio.',
      },
      cs: {
        slug: 'prevodnik-kg-na-libry',
        title: 'kg na libry',
        description:
          'Převeď kilogramy na libry. Tělesná hmotnost, posilovna, limity zavazadel.',
      },
    },
  },
  {
    key: 'lbToKg',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-funtow-na-kg',
        title: 'funty na kg',
        description:
          'Przelicz funty na kilogramy. Waga ciała z amerykańskich tabel, siłownia, przesyłki.',
      },
      en: {
        slug: 'lb-to-kg-converter',
        title: 'lb to kg',
        description:
          'Convert pounds to kilograms. Body weight from US apps, gym programs and baggage limits.',
      },
      de: {
        slug: 'pfund-in-kg-umrechner',
        title: 'Pfund in kg',
        description:
          'Pfund in Kilogramm umrechnen. Körpergewicht aus US-Apps, Fitnessstudio und Gepäcklimits.',
      },
      fr: {
        slug: 'convertisseur-livres-en-kg',
        title: 'livres en kg',
        description:
          'Convertissez des livres en kilogrammes. Poids corporel depuis des apps américaines, salle de sport.',
      },
      es: {
        slug: 'convertidor-libras-a-kg',
        title: 'libras a kg',
        description:
          'Convierte libras a kilogramos. Peso corporal desde apps de EE. UU., gimnasio y equipaje.',
      },
      pt: {
        slug: 'conversor-libras-para-kg',
        title: 'libras para kg',
        description:
          'Converta libras para quilogramas. Peso corporal de apps americanas, academia e bagagem.',
      },
      it: {
        slug: 'convertitore-libbre-in-kg',
        title: 'libbre in kg',
        description:
          'Converti libbre in chilogrammi. Peso corporeo da app americane, palestra e bagaglio.',
      },
      cs: {
        slug: 'prevodnik-liber-na-kg',
        title: 'libry na kg',
        description:
          'Převeď libry na kilogramy. Tělesná hmotnost z amerických aplikací, posilovna, zavazadla.',
      },
    },
  },
  {
    key: 'hexToRgb',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-hex-na-rgb',
        title: 'HEX na RGB',
        description:
          'Przelicz kolor HEX na RGB i odwrotnie. Szybka konwersja dla web designerow.',
      },
      en: {
        slug: 'hex-to-rgb-converter',
        title: 'HEX to RGB',
        description:
          'Convert HEX color codes to RGB values and vice versa. For web designers.',
      },
      de: {
        slug: 'hex-in-rgb-umrechner',
        title: 'HEX in RGB',
        description: 'HEX-Farbcodes in RGB umrechnen und umgekehrt.',
      },
      fr: {
        slug: 'convertisseur-hex-en-rgb',
        title: 'HEX en RGB',
        description:
          'Convertissez les codes couleur HEX en RGB et inversement.',
      },
      es: {
        slug: 'convertidor-hex-a-rgb',
        title: 'HEX a RGB',
        description: 'Convierte códigos de color HEX a RGB y viceversa.',
      },
      pt: {
        slug: 'conversor-hex-para-rgb',
        title: 'HEX para RGB',
        description: 'Converta códigos de cor HEX em RGB e vice-versa.',
      },
      it: {
        slug: 'convertitore-hex-in-rgb',
        title: 'HEX in RGB',
        description: 'Converti codici colore HEX in RGB e viceversa.',
      },
      cs: {
        slug: 'prevodnik-hex-na-rgb',
        title: 'HEX na RGB',
        description: 'Převeďte HEX kódy barev na RGB a naopak.',
      },
    },
  },
  {
    key: 'rgbToCmyk',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-rgb-na-cmyk',
        title: 'RGB na CMYK',
        description:
          'Przelicz kolor RGB na CMYK i odwrotnie. Niezbedny przy przygotowaniu do druku.',
      },
      en: {
        slug: 'rgb-to-cmyk-converter',
        title: 'RGB to CMYK',
        description:
          'Convert RGB to CMYK color values and vice versa. Essential for print preparation.',
      },
      de: {
        slug: 'rgb-in-cmyk-umrechner',
        title: 'RGB in CMYK',
        description:
          'RGB in CMYK umrechnen und umgekehrt. Für Druckvorbereitung.',
      },
      fr: {
        slug: 'convertisseur-rgb-en-cmyk',
        title: 'RGB en CMYK',
        description:
          "Convertissez RGB en CMYK et inversement. Pour la préparation d'impression.",
      },
      es: {
        slug: 'convertidor-rgb-a-cmyk',
        title: 'RGB a CMYK',
        description:
          'Convierte RGB a CMYK y viceversa. Para preparación de impresión.',
      },
      pt: {
        slug: 'conversor-rgb-para-cmyk',
        title: 'RGB para CMYK',
        description:
          'Converta RGB em CMYK e vice-versa. Para preparação de impressão.',
      },
      it: {
        slug: 'convertitore-rgb-in-cmyk',
        title: 'RGB in CMYK',
        description:
          'Converti RGB in CMYK e viceversa. Per la preparazione alla stampa.',
      },
      cs: {
        slug: 'prevodnik-rgb-na-cmyk',
        title: 'RGB na CMYK',
        description: 'Převeďte RGB na CMYK a naopak. Pro přípravu tisku.',
      },
    },
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // Unit converters - programming/technical
  // ═══════════════════════════════════════════════════════════════════════════
  {
    key: 'bytesConverter',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-bajtow-na-kb',
        title: 'bajty na kilobajty',
        description:
          'Przelicz bajty na kilobajty i odwrotnie. 1 KB to 1 024 bajty, wzór i tabela przeliczeniowa.',
      },
      en: {
        slug: 'bytes-to-kb-converter',
        title: 'bytes to KB',
        description:
          'Convert bytes to kilobytes and back. 1 KB is 1,024 bytes, with a formula and a conversion table.',
      },
      de: {
        slug: 'bytes-in-kb-umrechner',
        title: 'Bytes in KB',
        description:
          'Bytes in Kilobytes umrechnen und zurück. 1 KB sind 1.024 Byte, mit Formel und Umrechnungstabelle.',
      },
      fr: {
        slug: 'convertisseur-octets-en-ko',
        title: 'octets en Ko',
        description:
          'Convertissez des octets en kilo-octets et inversement. 1 Ko = 1 024 octets, formule et tableau.',
      },
      es: {
        slug: 'convertidor-bytes-a-kb',
        title: 'bytes a KB',
        description:
          'Convierte bytes a kilobytes y al revés. 1 KB son 1.024 bytes, con fórmula y tabla de conversión.',
      },
      pt: {
        slug: 'conversor-bytes-para-kb',
        title: 'bytes para KB',
        description:
          'Converta bytes para kilobytes e ao contrário. 1 KB são 1.024 bytes, com fórmula e tabela.',
      },
      it: {
        slug: 'convertitore-byte-in-kb',
        title: 'byte in KB',
        description:
          'Converti byte in kilobyte e viceversa. 1 KB è 1.024 byte, con formula e tabella di conversione.',
      },
      cs: {
        slug: 'prevodnik-bajtu-na-kb',
        title: 'bajty na kilobajty',
        description:
          'Převeď bajty na kilobajty a naopak. 1 KB je 1 024 bajtů, se vzorcem a převodní tabulkou.',
      },
    },
  },
  {
    key: 'kbToB',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-kb-na-bajty',
        title: 'kilobajty na bajty',
        description:
          'Przelicz kilobajty na bajty i odwrotnie. 1 KB to 1 024 bajty, wzór i tabela przeliczeniowa.',
      },
      en: {
        slug: 'kb-to-bytes-converter',
        title: 'KB to bytes',
        description:
          'Convert kilobytes to bytes and back. 1 KB is 1,024 bytes, with a formula and a conversion table.',
      },
      de: {
        slug: 'kb-in-bytes-umrechner',
        title: 'KB in Bytes',
        description:
          'Kilobytes in Bytes umrechnen und zurück. 1 KB sind 1.024 Byte, mit Formel und Umrechnungstabelle.',
      },
      fr: {
        slug: 'convertisseur-ko-en-octets',
        title: 'Ko en octets',
        description:
          'Convertissez des kilo-octets en octets et inversement. 1 Ko = 1 024 octets, formule et tableau.',
      },
      es: {
        slug: 'convertidor-kb-a-bytes',
        title: 'KB a bytes',
        description:
          'Convierte kilobytes a bytes y al revés. 1 KB son 1.024 bytes, con fórmula y tabla de conversión.',
      },
      pt: {
        slug: 'conversor-kb-para-bytes',
        title: 'KB para bytes',
        description:
          'Converta kilobytes para bytes e ao contrário. 1 KB são 1.024 bytes, com fórmula e tabela.',
      },
      it: {
        slug: 'convertitore-kb-in-byte',
        title: 'KB in byte',
        description:
          'Converti kilobyte in byte e viceversa. 1 KB è 1.024 byte, con formula e tabella di conversione.',
      },
      cs: {
        slug: 'prevodnik-kb-na-bajty',
        title: 'kilobajty na bajty',
        description:
          'Převeď kilobajty na bajty a naopak. 1 KB je 1 024 bajtů, se vzorcem a převodní tabulkou.',
      },
    },
  },
  {
    key: 'kbToMb',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-kb-na-mb',
        title: 'kilobajty na megabajty',
        description:
          'Przelicz kilobajty na megabajty i odwrotnie. 1 MB to 1 024 KB, wzór i tabela przeliczeniowa.',
      },
      en: {
        slug: 'kb-to-mb-converter',
        title: 'KB to MB',
        description:
          'Convert kilobytes to megabytes and back. 1 MB is 1,024 KB, with a formula and a conversion table.',
      },
      de: {
        slug: 'kb-in-mb-umrechner',
        title: 'KB in MB',
        description:
          'Kilobytes in Megabytes umrechnen und zurück. 1 MB sind 1.024 KB, mit Formel und Umrechnungstabelle.',
      },
      fr: {
        slug: 'convertisseur-ko-en-mo',
        title: 'Ko en Mo',
        description:
          'Convertissez des kilo-octets en méga-octets et inversement. 1 Mo = 1 024 Ko, formule et tableau.',
      },
      es: {
        slug: 'convertidor-kb-a-mb',
        title: 'KB a MB',
        description:
          'Convierte kilobytes a megabytes y al revés. 1 MB son 1.024 KB, con fórmula y tabla de conversión.',
      },
      pt: {
        slug: 'conversor-kb-para-mb',
        title: 'KB para MB',
        description:
          'Converta kilobytes para megabytes e ao contrário. 1 MB são 1.024 KB, com fórmula e tabela.',
      },
      it: {
        slug: 'convertitore-kb-in-mb',
        title: 'KB in MB',
        description:
          'Converti kilobyte in megabyte e viceversa. 1 MB è 1.024 KB, con formula e tabella di conversione.',
      },
      cs: {
        slug: 'prevodnik-kb-na-mb',
        title: 'kilobajty na megabajty',
        description:
          'Převeď kilobajty na megabajty a naopak. 1 MB je 1 024 KB, se vzorcem a převodní tabulkou.',
      },
    },
  },
  {
    key: 'mbToKb',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-mb-na-kb',
        title: 'megabajty na kilobajty',
        description:
          'Przelicz megabajty na kilobajty i odwrotnie. 1 MB to 1 024 KB, wzór i tabela przeliczeniowa.',
      },
      en: {
        slug: 'mb-to-kb-converter',
        title: 'MB to KB',
        description:
          'Convert megabytes to kilobytes and back. 1 MB is 1,024 KB, with a formula and a conversion table.',
      },
      de: {
        slug: 'mb-in-kb-umrechner',
        title: 'MB in KB',
        description:
          'Megabytes in Kilobytes umrechnen und zurück. 1 MB sind 1.024 KB, mit Formel und Umrechnungstabelle.',
      },
      fr: {
        slug: 'convertisseur-mo-en-ko',
        title: 'Mo en Ko',
        description:
          'Convertissez des méga-octets en kilo-octets et inversement. 1 Mo = 1 024 Ko, formule et tableau.',
      },
      es: {
        slug: 'convertidor-mb-a-kb',
        title: 'MB a KB',
        description:
          'Convierte megabytes a kilobytes y al revés. 1 MB son 1.024 KB, con fórmula y tabla de conversión.',
      },
      pt: {
        slug: 'conversor-mb-para-kb',
        title: 'MB para KB',
        description:
          'Converta megabytes para kilobytes e ao contrário. 1 MB são 1.024 KB, com fórmula e tabela.',
      },
      it: {
        slug: 'convertitore-mb-in-kb',
        title: 'MB in KB',
        description:
          'Converti megabyte in kilobyte e viceversa. 1 MB è 1.024 KB, con formula e tabella di conversione.',
      },
      cs: {
        slug: 'prevodnik-mb-na-kb',
        title: 'megabajty na kilobajty',
        description:
          'Převeď megabajty na kilobajty a naopak. 1 MB je 1 024 KB, se vzorcem a převodní tabulkou.',
      },
    },
  },
  {
    key: 'mbToGb',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-mb-na-gb',
        title: 'megabajty na gigabajty',
        description:
          'Przelicz megabajty na gigabajty i odwrotnie. 1 GB to 1 024 MB, wzór i tabela przeliczeniowa.',
      },
      en: {
        slug: 'mb-to-gb-converter',
        title: 'MB to GB',
        description:
          'Convert megabytes to gigabytes and back. 1 GB is 1,024 MB, with a formula and a conversion table.',
      },
      de: {
        slug: 'mb-in-gb-umrechner',
        title: 'MB in GB',
        description:
          'Megabytes in Gigabytes umrechnen und zurück. 1 GB sind 1.024 MB, mit Formel und Umrechnungstabelle.',
      },
      fr: {
        slug: 'convertisseur-mo-en-go',
        title: 'Mo en Go',
        description:
          'Convertissez des méga-octets en giga-octets et inversement. 1 Go = 1 024 Mo, formule et tableau.',
      },
      es: {
        slug: 'convertidor-mb-a-gb',
        title: 'MB a GB',
        description:
          'Convierte megabytes a gigabytes y al revés. 1 GB son 1.024 MB, con fórmula y tabla de conversión.',
      },
      pt: {
        slug: 'conversor-mb-para-gb',
        title: 'MB para GB',
        description:
          'Converta megabytes para gigabytes e ao contrário. 1 GB são 1.024 MB, com fórmula e tabela.',
      },
      it: {
        slug: 'convertitore-mb-in-gb',
        title: 'MB in GB',
        description:
          'Converti megabyte in gigabyte e viceversa. 1 GB è 1.024 MB, con formula e tabella di conversione.',
      },
      cs: {
        slug: 'prevodnik-mb-na-gb',
        title: 'megabajty na gigabajty',
        description:
          'Převeď megabajty na gigabajty a naopak. 1 GB je 1 024 MB, se vzorcem a převodní tabulkou.',
      },
    },
  },
  {
    key: 'gbToMb',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-gb-na-mb',
        title: 'gigabajty na megabajty',
        description:
          'Przelicz gigabajty na megabajty i odwrotnie. 1 GB to 1 024 MB, wzór i tabela przeliczeniowa.',
      },
      en: {
        slug: 'gb-to-mb-converter',
        title: 'GB to MB',
        description:
          'Convert gigabytes to megabytes and back. 1 GB is 1,024 MB, with a formula and a conversion table.',
      },
      de: {
        slug: 'gb-in-mb-umrechner',
        title: 'GB in MB',
        description:
          'Gigabytes in Megabytes umrechnen und zurück. 1 GB sind 1.024 MB, mit Formel und Umrechnungstabelle.',
      },
      fr: {
        slug: 'convertisseur-go-en-mo',
        title: 'Go en Mo',
        description:
          'Convertissez des giga-octets en méga-octets et inversement. 1 Go = 1 024 Mo, formule et tableau.',
      },
      es: {
        slug: 'convertidor-gb-a-mb',
        title: 'GB a MB',
        description:
          'Convierte gigabytes a megabytes y al revés. 1 GB son 1.024 MB, con fórmula y tabla de conversión.',
      },
      pt: {
        slug: 'conversor-gb-para-mb',
        title: 'GB para MB',
        description:
          'Converta gigabytes para megabytes e ao contrário. 1 GB são 1.024 MB, com fórmula e tabela.',
      },
      it: {
        slug: 'convertitore-gb-in-mb',
        title: 'GB in MB',
        description:
          'Converti gigabyte in megabyte e viceversa. 1 GB è 1.024 MB, con formula e tabella di conversione.',
      },
      cs: {
        slug: 'prevodnik-gb-na-mb',
        title: 'gigabajty na megabajty',
        description:
          'Převeď gigabajty na megabajty a naopak. 1 GB je 1 024 MB, se vzorcem a převodní tabulkou.',
      },
    },
  },
  {
    key: 'kbToGb',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-kb-na-gb',
        title: 'kilobajty na gigabajty',
        description:
          'Przelicz kilobajty na gigabajty i odwrotnie. 1 GB to 1 048 576 KB, wzór i tabela przeliczeniowa.',
      },
      en: {
        slug: 'kb-to-gb-converter',
        title: 'KB to GB',
        description:
          'Convert kilobytes to gigabytes and back. 1 GB is 1,048,576 KB, with a formula and a conversion table.',
      },
      de: {
        slug: 'kb-in-gb-umrechner',
        title: 'KB in GB',
        description:
          'Kilobytes in Gigabytes umrechnen und zurück. 1 GB sind 1.048.576 KB, mit Formel und Umrechnungstabelle.',
      },
      fr: {
        slug: 'convertisseur-ko-en-go',
        title: 'Ko en Go',
        description:
          'Convertissez des kilo-octets en giga-octets et inversement. 1 Go = 1 048 576 Ko, formule et tableau.',
      },
      es: {
        slug: 'convertidor-kb-a-gb',
        title: 'KB a GB',
        description:
          'Convierte kilobytes a gigabytes y al revés. 1 GB son 1.048.576 KB, con fórmula y tabla de conversión.',
      },
      pt: {
        slug: 'conversor-kb-para-gb',
        title: 'KB para GB',
        description:
          'Converta kilobytes para gigabytes e ao contrário. 1 GB são 1.048.576 KB, com fórmula e tabela.',
      },
      it: {
        slug: 'convertitore-kb-in-gb',
        title: 'KB in GB',
        description:
          'Converti kilobyte in gigabyte e viceversa. 1 GB è 1.048.576 KB, con formula e tabella di conversione.',
      },
      cs: {
        slug: 'prevodnik-kb-na-gb',
        title: 'kilobajty na gigabajty',
        description:
          'Převeď kilobajty na gigabajty a naopak. 1 GB je 1 048 576 KB, se vzorcem a převodní tabulkou.',
      },
    },
  },
  {
    key: 'gbToKb',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-gb-na-kb',
        title: 'gigabajty na kilobajty',
        description:
          'Przelicz gigabajty na kilobajty i odwrotnie. 1 GB to 1 048 576 KB, wzór i tabela przeliczeniowa.',
      },
      en: {
        slug: 'gb-to-kb-converter',
        title: 'GB to KB',
        description:
          'Convert gigabytes to kilobytes and back. 1 GB is 1,048,576 KB, with a formula and a conversion table.',
      },
      de: {
        slug: 'gb-in-kb-umrechner',
        title: 'GB in KB',
        description:
          'Gigabytes in Kilobytes umrechnen und zurück. 1 GB sind 1.048.576 KB, mit Formel und Umrechnungstabelle.',
      },
      fr: {
        slug: 'convertisseur-go-en-ko',
        title: 'Go en Ko',
        description:
          'Convertissez des giga-octets en kilo-octets et inversement. 1 Go = 1 048 576 Ko, formule et tableau.',
      },
      es: {
        slug: 'convertidor-gb-a-kb',
        title: 'GB a KB',
        description:
          'Convierte gigabytes a kilobytes y al revés. 1 GB son 1.048.576 KB, con fórmula y tabla de conversión.',
      },
      pt: {
        slug: 'conversor-gb-para-kb',
        title: 'GB para KB',
        description:
          'Converta gigabytes para kilobytes e ao contrário. 1 GB são 1.048.576 KB, com fórmula e tabela.',
      },
      it: {
        slug: 'convertitore-gb-in-kb',
        title: 'GB in KB',
        description:
          'Converti gigabyte in kilobyte e viceversa. 1 GB è 1.048.576 KB, con formula e tabella di conversione.',
      },
      cs: {
        slug: 'prevodnik-gb-na-kb',
        title: 'gigabajty na kilobajty',
        description:
          'Převeď gigabajty na kilobajty a naopak. 1 GB je 1 048 576 KB, se vzorcem a převodní tabulkou.',
      },
    },
  },
  {
    key: 'gbToTb',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-gb-na-tb',
        title: 'gigabajty na terabajty',
        description:
          'Przelicz gigabajty na terabajty i odwrotnie. 1 TB to 1 024 GB, wzór i tabela przeliczeniowa.',
      },
      en: {
        slug: 'gb-to-tb-converter',
        title: 'GB to TB',
        description:
          'Convert gigabytes to terabytes and back. 1 TB is 1,024 GB, with a formula and a conversion table.',
      },
      de: {
        slug: 'gb-in-tb-umrechner',
        title: 'GB in TB',
        description:
          'Gigabytes in Terabytes umrechnen und zurück. 1 TB sind 1.024 GB, mit Formel und Umrechnungstabelle.',
      },
      fr: {
        slug: 'convertisseur-go-en-to',
        title: 'Go en To',
        description:
          'Convertissez des giga-octets en téra-octets et inversement. 1 To = 1 024 Go, formule et tableau.',
      },
      es: {
        slug: 'convertidor-gb-a-tb',
        title: 'GB a TB',
        description:
          'Convierte gigabytes a terabytes y al revés. 1 TB son 1.024 GB, con fórmula y tabla de conversión.',
      },
      pt: {
        slug: 'conversor-gb-para-tb',
        title: 'GB para TB',
        description:
          'Converta gigabytes para terabytes e ao contrário. 1 TB são 1.024 GB, com fórmula e tabela.',
      },
      it: {
        slug: 'convertitore-gb-in-tb',
        title: 'GB in TB',
        description:
          'Converti gigabyte in terabyte e viceversa. 1 TB è 1.024 GB, con formula e tabella di conversione.',
      },
      cs: {
        slug: 'prevodnik-gb-na-tb',
        title: 'gigabajty na terabajty',
        description:
          'Převeď gigabajty na terabajty a naopak. 1 TB je 1 024 GB, se vzorcem a převodní tabulkou.',
      },
    },
  },
  {
    key: 'tbToGb',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-tb-na-gb',
        title: 'terabajty na gigabajty',
        description:
          'Przelicz terabajty na gigabajty i odwrotnie. 1 TB to 1 024 GB, wzór i tabela przeliczeniowa.',
      },
      en: {
        slug: 'tb-to-gb-converter',
        title: 'TB to GB',
        description:
          'Convert terabytes to gigabytes and back. 1 TB is 1,024 GB, with a formula and a conversion table.',
      },
      de: {
        slug: 'tb-in-gb-umrechner',
        title: 'TB in GB',
        description:
          'Terabytes in Gigabytes umrechnen und zurück. 1 TB sind 1.024 GB, mit Formel und Umrechnungstabelle.',
      },
      fr: {
        slug: 'convertisseur-to-en-go',
        title: 'To en Go',
        description:
          'Convertissez des téra-octets en giga-octets et inversement. 1 To = 1 024 Go, formule et tableau.',
      },
      es: {
        slug: 'convertidor-tb-a-gb',
        title: 'TB a GB',
        description:
          'Convierte terabytes a gigabytes y al revés. 1 TB son 1.024 GB, con fórmula y tabla de conversión.',
      },
      pt: {
        slug: 'conversor-tb-para-gb',
        title: 'TB para GB',
        description:
          'Converta terabytes para gigabytes e ao contrário. 1 TB são 1.024 GB, com fórmula e tabela.',
      },
      it: {
        slug: 'convertitore-tb-in-gb',
        title: 'TB in GB',
        description:
          'Converti terabyte in gigabyte e viceversa. 1 TB è 1.024 GB, con formula e tabella di conversione.',
      },
      cs: {
        slug: 'prevodnik-tb-na-gb',
        title: 'terabajty na gigabajty',
        description:
          'Převeď terabajty na gigabajty a naopak. 1 TB je 1 024 GB, se vzorcem a převodní tabulkou.',
      },
    },
  },
  {
    key: 'kbToTb',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-kb-na-tb',
        title: 'kilobajty na terabajty',
        description:
          'Przelicz kilobajty na terabajty i odwrotnie. 1 TB to 1 073 741 824 KB, wzór, formuła Excel i tabela.',
      },
      en: {
        slug: 'kb-to-tb-converter',
        title: 'KB to TB',
        description:
          'Convert kilobytes to terabytes and back. 1 TB is 1,073,741,824 KB, with a formula, Excel tip and table.',
      },
      de: {
        slug: 'kb-in-tb-umrechner',
        title: 'KB in TB',
        description:
          'Kilobytes in Terabytes umrechnen und zurück. 1 TB sind 1.073.741.824 KB, mit Formel, Excel-Tipp und Tabelle.',
      },
      fr: {
        slug: 'convertisseur-ko-en-to',
        title: 'Ko en To',
        description:
          'Convertissez des kilo-octets en téra-octets et inversement. 1 To = 1 073 741 824 Ko, formule, astuce Excel et tableau.',
      },
      es: {
        slug: 'convertidor-kb-a-tb',
        title: 'KB a TB',
        description:
          'Convierte kilobytes a terabytes y al revés. 1 TB son 1.073.741.824 KB, con fórmula, truco de Excel y tabla.',
      },
      pt: {
        slug: 'conversor-kb-para-tb',
        title: 'KB para TB',
        description:
          'Converta kilobytes para terabytes e ao contrário. 1 TB são 1.073.741.824 KB, com fórmula, dica de Excel e tabela.',
      },
      it: {
        slug: 'convertitore-kb-in-tb',
        title: 'KB in TB',
        description:
          'Converti kilobyte in terabyte e viceversa. 1 TB è 1.073.741.824 KB, con formula, consiglio Excel e tabella.',
      },
      cs: {
        slug: 'prevodnik-kb-na-tb',
        title: 'kilobajty na terabajty',
        description:
          'Převeď kilobajty na terabajty a naopak. 1 TB je 1 073 741 824 KB, se vzorcem, tipem pro Excel a tabulkou.',
      },
    },
  },
  {
    key: 'tbToKb',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-tb-na-kb',
        title: 'terabajty na kilobajty',
        description:
          'Przelicz terabajty na kilobajty i odwrotnie. 1 TB to 1 073 741 824 KB, wzór, formuła Excel i tabela.',
      },
      en: {
        slug: 'tb-to-kb-converter',
        title: 'TB to KB',
        description:
          'Convert terabytes to kilobytes and back. 1 TB is 1,073,741,824 KB, with a formula, Excel tip and table.',
      },
      de: {
        slug: 'tb-in-kb-umrechner',
        title: 'TB in KB',
        description:
          'Terabytes in Kilobytes umrechnen und zurück. 1 TB sind 1.073.741.824 KB, mit Formel, Excel-Tipp und Tabelle.',
      },
      fr: {
        slug: 'convertisseur-to-en-ko',
        title: 'To en Ko',
        description:
          'Convertissez des téra-octets en kilo-octets et inversement. 1 To = 1 073 741 824 Ko, formule, astuce Excel et tableau.',
      },
      es: {
        slug: 'convertidor-tb-a-kb',
        title: 'TB a KB',
        description:
          'Convierte terabytes a kilobytes y al revés. 1 TB son 1.073.741.824 KB, con fórmula, truco de Excel y tabla.',
      },
      pt: {
        slug: 'conversor-tb-para-kb',
        title: 'TB para KB',
        description:
          'Converta terabytes para kilobytes e ao contrário. 1 TB são 1.073.741.824 KB, com fórmula, dica de Excel e tabela.',
      },
      it: {
        slug: 'convertitore-tb-in-kb',
        title: 'TB in KB',
        description:
          'Converti terabyte in kilobyte e viceversa. 1 TB è 1.073.741.824 KB, con formula, consiglio Excel e tabella.',
      },
      cs: {
        slug: 'prevodnik-tb-na-kb',
        title: 'terabajty na kilobajty',
        description:
          'Převeď terabajty na kilobajty a naopak. 1 TB je 1 073 741 824 KB, se vzorcem, tipem pro Excel a tabulkou.',
      },
    },
  },
  {
    key: 'unixTimestamp',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-unix-timestamp',
        title: 'Unix na datę',
        description:
          'Przelicz Unix timestamp na date i czas. Niezbedne narzedzie dla programistow.',
      },
      en: {
        slug: 'unix-timestamp-converter',
        title: 'Unix to date',
        description:
          'Convert Unix timestamp to date and time. Essential tool for developers.',
      },
      de: {
        slug: 'unix-timestamp-umrechner',
        title: 'Unix in Datum',
        description: 'Unix-Zeitstempel in Datum und Uhrzeit umrechnen.',
      },
      fr: {
        slug: 'convertisseur-unix-timestamp',
        title: 'Unix en date',
        description: 'Convertissez un horodatage Unix en date et heure.',
      },
      es: {
        slug: 'convertidor-unix-timestamp',
        title: 'Unix a fecha',
        description: 'Convierte marca de tiempo Unix a fecha y hora.',
      },
      pt: {
        slug: 'conversor-unix-timestamp',
        title: 'Unix para data',
        description: 'Converta timestamp Unix em data e hora.',
      },
      it: {
        slug: 'convertitore-unix-timestamp',
        title: 'Unix in data',
        description: 'Converti timestamp Unix in data e ora.',
      },
      cs: {
        slug: 'prevodnik-unix-timestamp',
        title: 'Unix na datum',
        description: 'Převeďte Unix časové razítko na datum a čas.',
      },
    },
  },
  {
    key: 'decToBin',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-dziesietny-na-binarny',
        title: 'DEC na BIN',
        description:
          'Przelicz liczby dziesietne na binarne i odwrotnie. Szybka konwersja.',
      },
      en: {
        slug: 'decimal-to-binary-converter',
        title: 'DEC to BIN',
        description:
          'Convert decimal numbers to binary and vice versa. Instant results.',
      },
      de: {
        slug: 'dezimal-in-binaer-umrechner',
        title: 'DEC in BIN',
        description: 'Dezimalzahlen in Binärzahlen umrechnen und umgekehrt.',
      },
      fr: {
        slug: 'convertisseur-decimal-en-binaire',
        title: 'DÉC en BIN',
        description: 'Convertissez décimal en binaire et inversement.',
      },
      es: {
        slug: 'convertidor-decimal-a-binario',
        title: 'DEC a BIN',
        description: 'Convierte números decimales a binarios y viceversa.',
      },
      pt: {
        slug: 'conversor-decimal-para-binario',
        title: 'DEC para BIN',
        description: 'Converta números decimais em binários e vice-versa.',
      },
      it: {
        slug: 'convertitore-decimale-in-binario',
        title: 'DEC in BIN',
        description: 'Converti numeri decimali in binari e viceversa.',
      },
      cs: {
        slug: 'prevodnik-desitkovy-na-binarni',
        title: 'DEC na BIN',
        description: 'Převeďte desítková čísla na binární a naopak.',
      },
    },
  },
  {
    key: 'decToHex',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-dziesietny-na-szesnastkowy',
        title: 'DEC na HEX',
        description:
          'Przelicz liczby dziesietne na szesnastkowe (HEX) i odwrotnie.',
      },
      en: {
        slug: 'decimal-to-hex-converter',
        title: 'DEC to HEX',
        description:
          'Convert decimal numbers to hexadecimal and vice versa. Instant results.',
      },
      de: {
        slug: 'dezimal-in-hex-umrechner',
        title: 'DEC in HEX',
        description:
          'Dezimalzahlen in Hexadezimalzahlen umrechnen und umgekehrt.',
      },
      fr: {
        slug: 'convertisseur-decimal-en-hex',
        title: 'DÉC en HEX',
        description: 'Convertissez décimal en hexadécimal et inversement.',
      },
      es: {
        slug: 'convertidor-decimal-a-hex',
        title: 'DEC a HEX',
        description: 'Convierte números decimales a hexadecimales y viceversa.',
      },
      pt: {
        slug: 'conversor-decimal-para-hex',
        title: 'DEC para HEX',
        description: 'Converta números decimais em hexadecimais e vice-versa.',
      },
      it: {
        slug: 'convertitore-decimale-in-hex',
        title: 'DEC in HEX',
        description: 'Converti numeri decimali in esadecimali e viceversa.',
      },
      cs: {
        slug: 'prevodnik-desitkovy-na-hex',
        title: 'DEC na HEX',
        description: 'Převeďte desítková čísla na hexadecimální a naopak.',
      },
    },
  },
  {
    key: 'mbpsToMBs',
    section: 'jednostki',
    icon: RiRulerLine,
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'konwerter-mbps-na-mbs',
        title: 'Mbps na MB/s',
        description:
          'Przelicz megabity na sekunde na megabajty na sekunde i odwrotnie.',
      },
      en: {
        slug: 'mbps-to-mbs-converter',
        title: 'Mbps to MB/s',
        description:
          'Convert megabits per second to megabytes per second and vice versa.',
      },
      de: {
        slug: 'mbps-in-mbs-umrechner',
        title: 'Mbps in MB/s',
        description: 'Megabit pro Sekunde in Megabyte pro Sekunde umrechnen.',
      },
      fr: {
        slug: 'convertisseur-mbps-en-mos',
        title: 'Mbps en Mo/s',
        description: 'Convertissez Mbps en Mo/s et inversement.',
      },
      es: {
        slug: 'convertidor-mbps-a-mbs',
        title: 'Mbps a MB/s',
        description: 'Convierte Mbps a MB/s y viceversa.',
      },
      pt: {
        slug: 'conversor-mbps-para-mbs',
        title: 'Mbps para MB/s',
        description: 'Converta Mbps em MB/s e vice-versa.',
      },
      it: {
        slug: 'convertitore-mbps-in-mbs',
        title: 'Mbps in MB/s',
        description: 'Converti Mbps in MB/s e viceversa.',
      },
      cs: {
        slug: 'prevodnik-mbps-na-mbs',
        title: 'Mbps na MB/s',
        description: 'Převeďte Mbps na MB/s a naopak.',
      },
    },
  },
];
