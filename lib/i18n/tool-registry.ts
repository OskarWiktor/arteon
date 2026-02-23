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
      it: { title: 'Immagini e favicon' },
      ro: { title: 'Imagini și favicon-uri' },
      nl: { title: 'Afbeeldingen & favicons' },
      hu: { title: 'Képek és faviconok' },
      cs: { title: 'Obrázky a favicony' },
      sv: { title: 'Bilder & faviconer' },
      da: { title: 'Billeder & faviconer' },
      no: { title: 'Bilder og faviconer' },
      fi: { title: 'Kuvat ja faviconit' },
      el: { title: 'Εικόνες και favicon' },
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
      it: { title: 'Meta e SEO' },
      ro: { title: 'Meta și SEO' },
      nl: { title: 'Meta & SEO' },
      hu: { title: 'Meta és SEO' },
      cs: { title: 'Meta a SEO' },
      sv: { title: 'Meta & SEO' },
      da: { title: 'Meta & SEO' },
      no: { title: 'Meta & SEO' },
      fi: { title: 'Meta & SEO' },
      el: { title: 'Meta & SEO' },
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
      ro: { title: 'E-mail și comunicare' },
      nl: { title: 'E-mail & communicatie' },
      hu: { title: 'E-mail és kommunikáció' },
      cs: { title: 'E-mail a komunikace' },
      sv: { title: 'E-post & kommunikation' },
      da: { title: 'E-mail & kommunikation' },
      no: { title: 'E-post og kommunikasjon' },
      fi: { title: 'Sähköposti ja viestintä' },
      el: { title: 'Email & επικοινωνία' },
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
      ro: { title: 'Culori și accesibilitate' },
      nl: { title: 'Kleuren & toegankelijkheid' },
      hu: { title: 'Színek és akadálymentesség' },
      cs: { title: 'Barvy a přístupnost' },
      sv: { title: 'Färger & tillgänglighet' },
      da: { title: 'Farver & tilgængelighed' },
      no: { title: 'Farger og tilgjengelighet' },
      fi: { title: 'Värit ja saavutettavuus' },
      el: { title: 'Χρώματα & παλέτες' },
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
      ro: { title: 'Tipărire și materiale' },
      nl: { title: 'Drukwerk & materialen' },
      hu: { title: 'Nyomtatás és anyagok' },
      cs: { title: 'Tisk a materiály' },
      sv: { title: 'Tryck & material' },
      da: { title: 'Tryk & materialer' },
      no: { title: 'Trykk og materialer' },
      fi: { title: 'Painatus ja materiaalit' },
      el: { title: 'Εκτύπωση & QR' },
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
    image: '/assets/tools/jpg-png-to-webp-converter/jpg-png-to-webp-unlimited-en.webp',
    images: {
      pl: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
      en: '/assets/tools/jpg-png-to-webp-converter/jpg-png-to-webp-unlimited-en.webp',
      cs: '/assets/tools/jpg-png-to-webp-converter/konvertor-jpg-png-na-webp-cs.webp',
      da: '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverter-da.webp',
      de: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
      el: '/assets/tools/jpg-png-to-webp-converter/metatropeas-jpg-png-se-webp-el.webp',
      es: '/assets/tools/jpg-png-to-webp-converter/convertidor-jpg-png-a-webp-es.webp',
      fi: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-muunnin-fi.webp',
      fr: '/assets/tools/jpg-png-to-webp-converter/convertisseur-jpg-png-en-webp-fr.webp',
      hu: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-konverter-hu.webp',
      it: '/assets/tools/jpg-png-to-webp-converter/convertitore-jpg-png-in-webp-it.webp',
      ro: '/assets/tools/jpg-png-to-webp-converter/convertor-jpg-png-in-webp-ro.webp',
      nl: '/assets/tools/jpg-png-to-webp-converter/jpg-png-naar-webp-converter-nl.webp',
      no: '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverterer-no.webp',
      pt: '/assets/tools/jpg-png-to-webp-converter/conversor-jpg-png-para-webp-pt.webp',
      sv: '/assets/tools/jpg-png-to-webp-converter/jpg-png-till-webp-konverterare-sv.webp',
    },
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
      it: {
        slug: 'convertitore-jpg-png-in-webp',
        title: 'Convertitore JPG/PNG in WebP',
        description: 'Riduci il peso delle immagini senza perdita di qualità. Converti JPG e PNG in WebP e velocizza il tuo sito web.',
      },
      ro: {
        slug: 'convertor-jpg-png-in-webp',
        title: 'Convertor JPG/PNG în WebP',
        description: 'Reduceți dimensiunea imaginilor fără pierderi de calitate. Convertiți JPG și PNG în WebP și accelerați site-ul.',
      },
      nl: {
        slug: 'jpg-png-naar-webp-converter',
        title: 'JPG/PNG naar WebP-converter',
        description: 'Verklein afbeeldingen zonder kwaliteitsverlies. Converteer JPG en PNG naar WebP en versnel uw website.',
      },
      hu: {
        slug: 'jpg-png-webp-konverter',
        title: 'JPG/PNG WebP konverter',
        description: 'Csökkentse a képek méretét minőségromlás nélkül. Konvertálja a JPG és PNG fájlokat WebP formátumba, és gyorsítsa fel weboldalát.',
      },
      cs: {
        slug: 'konvertor-jpg-png-na-webp',
        title: 'Konvertor JPG/PNG na WebP',
        description: 'Zmenšete velikost obrázků bez ztráty kvality. Převeďte JPG a PNG do WebP a zrychlete svůj web.',
      },
      sv: {
        slug: 'jpg-png-till-webp-konverterare',
        title: 'JPG/PNG till WebP-konverterare',
        description: 'Minska bildstorleken utan kvalitetsförlust. Konvertera JPG och PNG till WebP och snabba upp din webbplats.',
      },
      da: {
        slug: 'jpg-png-til-webp-konverter',
        title: 'JPG/PNG til WebP-konverter',
        description: 'Reducer billedstørrelsen uden kvalitetstab. Konvertér JPG og PNG til WebP og gør din hjemmeside hurtigere.',
      },
      no: {
        slug: 'jpg-png-til-webp-konverterer',
        title: 'JPG/PNG til WebP-konverterer',
        description: 'Reduser bildestørrelsen uten kvalitetstap. Konverter JPG og PNG til WebP og gjør nettsiden din raskere.',
      },
      fi: {
        slug: 'jpg-png-webp-muunnin',
        title: 'JPG/PNG–WebP-muunnin',
        description: 'Pienennä kuvatiedostojen kokoa laadun kärsimättä. Muunna JPG- ja PNG-kuvat WebP-muotoon ja nopeuta sivustoasi.',
      },
      el: {
        slug: 'metatropeas-jpg-png-se-webp',
        title: 'Μετατροπέας JPG/PNG σε WebP',
        description: 'Μειώστε το μέγεθος εικόνων χωρίς απώλεια ποιότητας. Μετατρέψτε JPG και PNG σε WebP και επιταχύνετε τον ιστότοπό σας.',
      },
    },
  },
  {
    key: 'imageResize',
    section: 'obrazy',
    icon: RiCropLine,
    image: '/assets/tools/free-image-editor-crop-resize-and-convert/online-image-editor-en.webp',
    images: {
      pl: '/assets/tools/free-image-editor-crop-resize-and-convert/edytor-zdjec-online-pl.webp',
      en: '/assets/tools/free-image-editor-crop-resize-and-convert/online-image-editor-en.webp',
      cs: '/assets/tools/free-image-editor-crop-resize-and-convert/editor-obrazku-cs.webp',
      da: '/assets/tools/free-image-editor-crop-resize-and-convert/billedrediger-da.webp',
      de: '/assets/tools/free-image-editor-crop-resize-and-convert/online-bildeditor-de.webp',
      el: '/assets/tools/free-image-editor-crop-resize-and-convert/epexergasia-eikonas-el.webp',
      es: '/assets/tools/free-image-editor-crop-resize-and-convert/editor-de-imagenes-en-linea-es.webp',
      fi: '/assets/tools/free-image-editor-crop-resize-and-convert/kuvaeditori-fi.webp',
      fr: '/assets/tools/free-image-editor-crop-resize-and-convert/editeur-d-images-en-ligne-fr.webp',
      hu: '/assets/tools/free-image-editor-crop-resize-and-convert/kepszerkeszto-hu.webp',
      it: '/assets/tools/free-image-editor-crop-resize-and-convert/editor-di-immagini-online-it.webp',
      ro: '/assets/tools/free-image-editor-crop-resize-and-convert/editor-de-imagini-ro.webp',
      nl: '/assets/tools/free-image-editor-crop-resize-and-convert/afbeeldingeneditor-nl.webp',
      no: '/assets/tools/free-image-editor-crop-resize-and-convert/bilderedigerer-no.webp',
      pt: '/assets/tools/free-image-editor-crop-resize-and-convert/editor-de-imagens-online-pt.webp',
      sv: '/assets/tools/free-image-editor-crop-resize-and-convert/bildredigerare-sv.webp',
    },
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
        title: 'Bildeditor',
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
      it: {
        slug: 'editor-di-immagini-online',
        title: 'Editor di immagini online',
        description: 'Prepara il ritaglio perfetto per i social media o il tuo sito web. Scegli un formato predefinito o inserisci dimensioni personalizzate.',
      },
      ro: {
        slug: 'editor-de-imagini',
        title: 'Editor de imagini',
        description: 'Pregătiți decupajul perfect pentru rețelele sociale sau site-ul dvs. Alegeți un format predefinit sau introduceți dimensiuni personalizate.',
      },
      nl: {
        slug: 'afbeeldingeneditor',
        title: 'Afbeeldingeneditor',
        description: 'Maak de perfecte uitsnede voor social media of uw website. Kies een vooraf ingesteld formaat of voer aangepaste afmetingen in.',
      },
      hu: {
        slug: 'kepszerkeszto',
        title: 'Képszerkesztő',
        description: 'Készítse el a tökéletes vágást a közösségi médiához vagy weboldalához. Válasszon előre beállított formátumot, vagy adjon meg egyéni méreteket.',
      },
      cs: {
        slug: 'editor-obrazku',
        title: 'Editor obrázků',
        description: 'Připravte ideální ořez pro sociální sítě nebo svůj web. Vyberte přednastavený formát nebo zadejte vlastní rozměry.',
      },
      sv: {
        slug: 'bildredigerare',
        title: 'Bildredigerare',
        description: 'Förbered den perfekta beskärningen för sociala medier eller din webbplats. Välj ett färdigt format eller ange egna mått.',
      },
      da: {
        slug: 'billedrediger',
        title: 'Billedredigering',
        description: 'Forbered det perfekte udsnit til sociale medier eller din hjemmeside. Vælg et færdigt format eller indtast egne mål.',
      },
      no: {
        slug: 'bilderedigerer',
        title: 'Bilderedigerer',
        description: 'Forbered det perfekte utsnittet for sosiale medier eller nettsiden din. Velg et ferdig format eller skriv inn egne mål.',
      },
      fi: {
        slug: 'kuvaeditori',
        title: 'Kuvaeditori',
        description: 'Valmistele täydellinen rajaus sosiaalista mediaa tai verkkosivustoasi varten. Valitse valmis muoto tai syötä omat mitat.',
      },
      el: {
        slug: 'epexergasia-eikonas',
        title: 'Επεξεργασία εικόνας',
        description: 'Ετοιμάστε το τέλειο κάδρο για μέσα κοινωνικής δικτύωσης ή τον ιστότοπό σας. Επιλέξτε έτοιμη μορφή ή εισάγετε προσαρμοσμένες διαστάσεις.',
      },
    },
  },
  {
    key: 'favicon',
    section: 'obrazy',
    icon: RiAppsLine,
    image: '/assets/tools/favicon-generator/free-favicon-generator-en.webp',
    images: {
      pl: '/assets/tools/favicon-generator/darmowy-generator-favicon-ico-pl.webp',
      en: '/assets/tools/favicon-generator/free-favicon-generator-en.webp',
      cs: '/assets/tools/favicon-generator/generator-favicon-zdarma-cs.webp',
      da: '/assets/tools/favicon-generator/gratis-favicon-generator-da.webp',
      de: '/assets/tools/favicon-generator/kostenloser-favicon-generator-de.webp',
      el: '/assets/tools/favicon-generator/dorean-dimiourgia-favicon-el.webp',
      es: '/assets/tools/favicon-generator/generador-de-favicon-gratuito-es.webp',
      fi: '/assets/tools/favicon-generator/ilmainen-favicon-generaattori-fi.webp',
      fr: '/assets/tools/favicon-generator/generateur-de-favicon-gratuit-fr.webp',
      hu: '/assets/tools/favicon-generator/ingyenes-favicon-generator-hu.webp',
      it: '/assets/tools/favicon-generator/generatore-di-favicon-gratuito-it.webp',
      ro: '/assets/tools/favicon-generator/generator-favicon-gratuit-ro.webp',
      nl: '/assets/tools/favicon-generator/gratis-favicon-generator-nl.webp',
      no: '/assets/tools/favicon-generator/gratis-favicon-generator-no.webp',
      pt: '/assets/tools/favicon-generator/gerador-de-favicon-gratuito-pt.webp',
      sv: '/assets/tools/favicon-generator/gratis-favicon-generator-sv.webp',
    },
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
      it: {
        slug: 'generatore-di-favicon-gratuito',
        title: 'Generatore di favicon',
        description: 'Genera favicon.ico e icone PNG da una singola immagine, conforme ai requisiti dei browser e di Lighthouse.',
      },
      ro: {
        slug: 'generator-favicon-gratuit',
        title: 'Generator de favicon',
        description: 'Generați favicon.ico și pictograme PNG dintr-o singură imagine, conform cerințelor browserelor și Lighthouse.',
      },
      nl: {
        slug: 'gratis-favicon-generator',
        title: 'Favicon-generator',
        description: 'Genereer favicon.ico en PNG-pictogrammen vanuit één afbeelding, conform browser- en Lighthouse-vereisten.',
      },
      hu: {
        slug: 'ingyenes-favicon-generator',
        title: 'Favicon generátor',
        description: 'Generáljon favicon.ico-t és PNG ikonokat egyetlen képből, a böngészők és a Lighthouse követelményeinek megfelelően.',
      },
      cs: {
        slug: 'generator-favicon-zdarma',
        title: 'Generátor favicon',
        description: 'Z jednoho obrázku vygenerujte favicon.ico a PNG ikony v souladu s požadavky prohlížečů a Lighthouse.',
      },
      sv: {
        slug: 'gratis-favicon-generator',
        title: 'Favicon-generator',
        description: 'Generera favicon.ico och PNG-ikoner från en enda bild, i enlighet med webbläsar- och Lighthouse-krav.',
      },
      da: {
        slug: 'gratis-favicon-generator',
        title: 'Favicon-generator',
        description: 'Generér favicon.ico og PNG-ikoner fra et enkelt billede, i overensstemmelse med browser- og Lighthouse-krav.',
      },
      no: {
        slug: 'gratis-favicon-generator',
        title: 'Favicon-generator',
        description: 'Generer favicon.ico og PNG-ikoner fra et enkelt bilde, i samsvar med nettleser- og Lighthouse-krav.',
      },
      fi: {
        slug: 'ilmainen-favicon-generaattori',
        title: 'Favicon-generaattori',
        description: 'Luo favicon.ico- ja PNG-kuvakkeet yhdestä kuvasta selain- ja Lighthouse-vaatimusten mukaisesti.',
      },
      el: {
        slug: 'dorean-dimiourgia-favicon',
        title: 'Δημιουργία favicon',
        description: 'Δημιουργήστε favicon.ico και εικονίδια PNG από μία εικόνα, σύμφωνα με τις απαιτήσεις προγραμμάτων περιήγησης και Lighthouse.',
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
      it: {
        slug: 'verificatore-meta-titolo-e-descrizione',
        title: 'Verificatore meta titolo e descrizione',
        description: 'Controlla il numero di caratteri e visualizza in anteprima la tua pagina su Google. Evita titoli e descrizioni troncati nei risultati di ricerca.',
      },
      ro: {
        slug: 'verificator-meta-titlu-si-descriere',
        title: 'Verificator meta titlu și descriere',
        description: 'Verificați numărul de caractere și previzualizați pagina în Google. Evitați titlurile și descrierile trunchiate în rezultatele căutării.',
      },
      nl: {
        slug: 'meta-titel-beschrijving-checker',
        title: 'Meta-titel & beschrijving checker',
        description: 'Controleer het aantal tekens en bekijk een voorbeeld van uw pagina in Google. Vermijd afgekapte titels en beschrijvingen in zoekresultaten.',
      },
      hu: {
        slug: 'meta-cim-es-leiras-ellenorzo',
        title: 'Meta cím és leírás ellenőrző',
        description: 'Ellenőrizze a karakterek számát és tekintse meg az oldal előnézetét a Google-ban. Kerülje el a csonkolt címeket és leírásokat a keresési eredményekben.',
      },
      cs: {
        slug: 'kontrola-meta-titulku-a-popisu',
        title: 'Kontrola meta titulku a popisu',
        description: 'Zkontrolujte počet znaků a zobrazte si náhled stránky v Google. Vyhněte se oříznutým titulkům a popisům ve výsledcích vyhledávání.',
      },
      sv: {
        slug: 'meta-titel-och-beskrivning-kontroll',
        title: 'Meta-titel & beskrivningskontroll',
        description: 'Kontrollera antal tecken och förhandsgranska hur din sida visas i Google. Undvik avkortade titlar och beskrivningar i sökresultaten.',
      },
      da: {
        slug: 'meta-titel-og-beskrivelse-kontrol',
        title: 'Meta-titel & beskrivelseskontrol',
        description: 'Kontrollér antal tegn og forhåndsvis hvordan din side vises i Google. Undgå afkortede titler og beskrivelser i søgeresultaterne.',
      },
      no: {
        slug: 'meta-tittel-og-beskrivelse-sjekker',
        title: 'Meta-tittel- og beskrivelsessjekker',
        description: 'Sjekk antall tegn og forhåndsvis hvordan siden din vises i Google. Unngå avkortede titler og beskrivelser i søkeresultatene.',
      },
      fi: {
        slug: 'meta-otsikko-ja-kuvaus-tarkistus',
        title: 'Meta-otsikon ja -kuvauksen tarkistus',
        description: 'Tarkista merkkien määrä ja esikatsele, miltä sivusi näyttää Googlessa. Vältä katkenneet otsikot ja kuvaukset hakutuloksissa.',
      },
      el: {
        slug: 'elegkhos-meta-titlou-kai-perigrafis',
        title: 'Έλεγχος meta τίτλου και περιγραφής',
        description: 'Ελέγξτε τον αριθμό χαρακτήρων και δείτε πώς φαίνεται η σελίδα σας στο Google. Αποφύγετε κομμένους τίτλους και περιγραφές στα αποτελέσματα αναζήτησης.',
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
      it: {
        slug: 'contatore-di-parole-e-caratteri',
        title: 'Contatore di parole e caratteri',
        description: 'Verifica la lunghezza del testo e valuta se è adeguata per una homepage, pagina servizi, articolo del blog o descrizione prodotto.',
      },
      ro: {
        slug: 'contor-cuvinte-si-caractere',
        title: 'Contor de cuvinte și caractere',
        description: 'Verificați lungimea textului și evaluați dacă este adecvată pentru o pagină principală, pagină de servicii, articol de blog sau descriere de produs.',
      },
      nl: {
        slug: 'woorden-en-tekenteller',
        title: 'Woorden- & tekenteller',
        description: 'Controleer de tekstlengte en beoordeel of deze geschikt is voor een homepage, servicepagina, blogartikel of productbeschrijving.',
      },
      hu: {
        slug: 'szo-es-karakterszamlalo',
        title: 'Szó- és karakterszámláló',
        description: 'Ellenőrizze a szöveg hosszát és értékelje, hogy megfelel-e egy kezdőlap, szolgáltatásoldal, blogbejegyzés vagy termékleírás számára.',
      },
      cs: {
        slug: 'pocitadlo-slov-a-znaku',
        title: 'Počítadlo slov a znaků',
        description: 'Zkontrolujte délku textu a vyhodnotíte, zda se hodí pro hlavní stránku, stránku služeb, článek na blog nebo popis produktu.',
      },
      sv: {
        slug: 'ord-och-teckenraknare',
        title: 'Ord- & teckenräknare',
        description: 'Kontrollera textlängden och bedöm om den passar för en startsida, tjänstesida, blogginlägg eller produktbeskrivning.',
      },
      da: {
        slug: 'ord-og-tegntaeller',
        title: 'Ord- & tegntæller',
        description: 'Kontrollér tekstlængden og vurdér om den passer til en forside, serviceside, blogindlæg eller produktbeskrivelse.',
      },
      no: {
        slug: 'ord-og-tegnteller',
        title: 'Ord- og tegnteller',
        description: 'Sjekk tekstlengden og vurder om den passer for en forside, tjenesteside, blogginnlegg eller produktbeskrivelse.',
      },
      fi: {
        slug: 'sana-ja-merkkilaskuri',
        title: 'Sana- ja merkkilaskuri',
        description: 'Tarkista tekstin pituus ja arvioi, sopiiko se etusivulle, palvelusivulle, blogikirjoitukseen vai tuotekuvaukseen.',
      },
      el: {
        slug: 'metritis-lexeon-kai-charaktiron',
        title: 'Μετρητής λέξεων και χαρακτήρων',
        description: 'Ελέγξτε το μήκος κειμένου και αξιολογήστε αν ταιριάζει σε αρχική σελίδα, σελίδα υπηρεσιών, άρθρο ή περιγραφή προϊόντος.',
      },
    },
  },
  {
    key: 'emailSignature',
    section: 'email',
    icon: RiMailLine,
    image: '/assets/tools/free-html-email-signature-generator/free-email-signature-generator-en.webp',
    images: {
      pl: '/assets/tools/free-html-email-signature-generator/darmowy-generator-stopki-mailowej-pl.webp',
      en: '/assets/tools/free-html-email-signature-generator/free-email-signature-generator-en.webp',
      cs: '/assets/tools/free-html-email-signature-generator/generator-podpisu-emailu-zdarma-cs.webp',
      da: '/assets/tools/free-html-email-signature-generator/gratis-e-mail-signatur-generator-da.webp',
      de: '/assets/tools/free-html-email-signature-generator/kostenloser-e-mail-signatur-generator-de.webp',
      el: '/assets/tools/free-html-email-signature-generator/dorean-dimiourgia-ypografis-email-el.webp',
      es: '/assets/tools/free-html-email-signature-generator/generador-de-firma-de-correo-gratuito-es.webp',
      fi: '/assets/tools/free-html-email-signature-generator/ilmainen-sahkopostiallekirjoitus-generaattori-fi.webp',
      fr: '/assets/tools/free-html-email-signature-generator/generateur-de-signature-email-gratuit-fr.webp',
      hu: '/assets/tools/free-html-email-signature-generator/ingyenes-email-alairas-generator-hu.webp',
      it: '/assets/tools/free-html-email-signature-generator/generatore-di-firma-email-gratuito-it.webp',
      ro: '/assets/tools/free-html-email-signature-generator/generator-semnatura-email-gratuit-ro.webp',
      nl: '/assets/tools/free-html-email-signature-generator/gratis-e-mailhandtekening-generator-nl.webp',
      no: '/assets/tools/free-html-email-signature-generator/gratis-e-postsignatur-generator-no.webp',
      pt: '/assets/tools/free-html-email-signature-generator/gerador-de-assinatura-de-email-gratuito-pt.webp',
      sv: '/assets/tools/free-html-email-signature-generator/gratis-e-postsignatur-generator-sv.webp',
    },
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
      it: {
        slug: 'generatore-di-firma-email-gratuito',
        title: 'Generatore di firma e-mail',
        description: 'Crea una firma e-mail professionale in pochi minuti. Copia il codice HTML pronto in Gmail o Outlook.',
      },
      ro: {
        slug: 'generator-semnatura-email-gratuit',
        title: 'Generator de semnătură e-mail',
        description: 'Creați o semnătură e-mail profesională în câteva minute. Copiați codul HTML gata în Gmail sau Outlook.',
      },
      nl: {
        slug: 'gratis-e-mailhandtekening-generator',
        title: 'E-mailhandtekening generator',
        description: 'Maak in enkele minuten een professionele e-mailhandtekening. Kopieer de kant-en-klare HTML-code naar Gmail of Outlook.',
      },
      hu: {
        slug: 'ingyenes-email-alairas-generator',
        title: 'E-mail aláírás generátor',
        description: 'Készítsen professzionális e-mail aláírást percek alatt. Másolja a kész HTML-kódot a Gmailbe vagy az Outlookba.',
      },
      cs: {
        slug: 'generator-podpisu-emailu-zdarma',
        title: 'Generátor podpisu e-mailu',
        description: 'Vytvořte profesionální e-mailový podpis za pár minut. Zkopírujte hotový HTML kód do Gmailu nebo Outlooku.',
      },
      sv: {
        slug: 'gratis-e-postsignatur-generator',
        title: 'E-postsignatur-generator',
        description: 'Skapa en professionell e-postsignatur på några minuter. Kopiera den färdiga HTML-koden till Gmail eller Outlook.',
      },
      da: {
        slug: 'gratis-e-mail-signatur-generator',
        title: 'E-mail-signatur-generator',
        description: 'Opret en professionel e-mail-signatur på få minutter. Kopiér den færdige HTML-kode til Gmail eller Outlook.',
      },
      no: {
        slug: 'gratis-e-postsignatur-generator',
        title: 'E-postsignatur-generator',
        description: 'Lag en profesjonell e-postsignatur på få minutter. Kopier den ferdige HTML-koden til Gmail eller Outlook.',
      },
      fi: {
        slug: 'ilmainen-sahkopostiallekirjoitus-generaattori',
        title: 'Sähköpostiallekirjoitusgeneraattori',
        description: 'Luo ammattimainen sähköpostiallekirjoitus muutamassa minuutissa. Kopioi valmis HTML-koodi Gmailiin tai Outlookiin.',
      },
      el: {
        slug: 'dorean-dimiourgia-ypografis-email',
        title: 'Δημιουργία υπογραφής email',
        description: 'Δημιουργήστε επαγγελματική υπογραφή email σε λίγα λεπτά. Αντιγράψτε τον έτοιμο κώδικα HTML στο Gmail ή στο Outlook.',
      },
    },
  },
  {
    key: 'contrastChecker',
    section: 'kolory',
    icon: RiContrast2Line,
    image: '/assets/tools/color-contrast-and-readability-checker/color-contrast-checker-en.webp',
    images: {
      pl: '/assets/tools/color-contrast-and-readability-checker/kontrast-i-czytelnosc-kolorow-pl.webp',
      en: '/assets/tools/color-contrast-and-readability-checker/color-contrast-checker-en.webp',
      cs: '/assets/tools/color-contrast-and-readability-checker/kontrola-kontrastu-barev-cs.webp',
      da: '/assets/tools/color-contrast-and-readability-checker/farvekontrastkontrol-da.webp',
      de: '/assets/tools/color-contrast-and-readability-checker/farbkontrast-checker-de.webp',
      el: '/assets/tools/color-contrast-and-readability-checker/elegkhos-kontrast-chromaton-el.webp',
      es: '/assets/tools/color-contrast-and-readability-checker/comprobador-de-contraste-de-colores-es.webp',
      fi: '/assets/tools/color-contrast-and-readability-checker/varikontrasti-tarkistus-fi.webp',
      fr: '/assets/tools/color-contrast-and-readability-checker/verificateur-de-contraste-des-couleurs-fr.webp',
      hu: '/assets/tools/color-contrast-and-readability-checker/szinkontraszt-ellenorzo-hu.webp',
      it: '/assets/tools/color-contrast-and-readability-checker/verificatore-contrasto-colori-it.webp',
      ro: '/assets/tools/color-contrast-and-readability-checker/verificator-contrast-culori-ro.webp',
      nl: '/assets/tools/color-contrast-and-readability-checker/kleurcontrast-checker-nl.webp',
      no: '/assets/tools/color-contrast-and-readability-checker/fargekontrastsjekker-no.webp',
      pt: '/assets/tools/color-contrast-and-readability-checker/verificador-de-contraste-de-cores-pt.webp',
      sv: '/assets/tools/color-contrast-and-readability-checker/fargkontrastkontroll-sv.webp',
    },
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
      it: {
        slug: 'verificatore-contrasto-colori',
        title: 'Verificatore contrasto colori',
        description: 'Verifica se i colori del testo e dello sfondo sono leggibili. Lo strumento calcola il contrasto secondo WCAG e aiuta a scegliere il colore giusto.',
      },
      ro: {
        slug: 'verificator-contrast-culori',
        title: 'Verificator contrast culori',
        description: 'Verificați dacă culorile textului și fundalului sunt lizibile. Instrumentul calculează contrastul conform WCAG și ajută la alegerea culorii potrivite.',
      },
      nl: {
        slug: 'kleurcontrast-checker',
        title: 'Kleurcontrast checker',
        description: 'Controleer of uw tekst- en achtergrondkleuren leesbaar zijn. De tool berekent het contrast volgens WCAG en helpt bij het kiezen van de juiste kleur.',
      },
      hu: {
        slug: 'szinkontraszt-ellenorzo',
        title: 'Színkontraszt ellenőrző',
        description: 'Ellenőrizze, hogy a szöveg- és háttérszínek olvashatóak-e. Az eszköz a WCAG szerint számítja ki a kontrasztot, és segít a megfelelő szín kiválasztásában.',
      },
      cs: {
        slug: 'kontrola-kontrastu-barev',
        title: 'Kontrola kontrastu barev',
        description: 'Zkontrolujte, zda jsou barvy textu a pozadí čitelné. Nástroj vypočítá kontrast podle WCAG a pomůže vybrat správnou barvu.',
      },
      sv: {
        slug: 'fargkontrastkontroll',
        title: 'Färgkontrastkontroll',
        description: 'Kontrollera om dina text- och bakgrundsfärger är läsbara. Verktyget beräknar kontrasten enligt WCAG och hjälper dig välja rätt färg.',
      },
      da: {
        slug: 'farvekontrastkontrol',
        title: 'Farvekontrastkontrol',
        description: 'Kontrollér om dine tekst- og baggrundsfarver er læsbare. Værktøjet beregner kontrasten ifølge WCAG og hjælper med at vælge den rigtige farve.',
      },
      no: {
        slug: 'fargekontrastsjekker',
        title: 'Fargekontrastsjekker',
        description: 'Sjekk om tekst- og bakgrunnsfargene dine er lesbare. Verktøyet beregner kontrasten i henhold til WCAG og hjelper deg med å velge riktig farge.',
      },
      fi: {
        slug: 'varikontrasti-tarkistus',
        title: 'Värikontrastin tarkistus',
        description: 'Tarkista, ovatko teksti- ja taustavärisi luettavia. Työkalu laskee kontrastin WCAG-standardin mukaisesti ja auttaa valitsemaan oikean värin.',
      },
      el: {
        slug: 'elegkhos-kontrast-chromaton',
        title: 'Έλεγχος αντίθεσης χρωμάτων',
        description: 'Ελέγξτε αν τα χρώματα κειμένου και φόντου είναι ευανάγνωστα. Το εργαλείο υπολογίζει την αντίθεση σύμφωνα με το WCAG και βοηθά στην επιλογή χρώματος.',
      },
    },
  },
  {
    key: 'paletteExtractor',
    section: 'kolory',
    icon: RiPantoneLine,
    image: '/assets/tools/image-color-extractor/image-color-extractor-en.webp',
    images: {
      pl: '/assets/tools/image-color-extractor/ekstraktor-kolorow-z-obrazu-pl.webp',
      en: '/assets/tools/image-color-extractor/image-color-extractor-en.webp',
      cs: '/assets/tools/image-color-extractor/extraktor-barev-z-obrazku-cs.webp',
      da: '/assets/tools/image-color-extractor/farveudtraekker-fra-billede-da.webp',
      de: '/assets/tools/image-color-extractor/bild-farbextraktor-de.webp',
      el: '/assets/tools/image-color-extractor/exagogi-chromaton-apo-eikona-el.webp',
      es: '/assets/tools/image-color-extractor/extractor-de-colores-de-imagen-es.webp',
      fi: '/assets/tools/image-color-extractor/varien-poiminta-kuvasta-fi.webp',
      fr: '/assets/tools/image-color-extractor/extracteur-de-couleurs-d-image-fr.webp',
      hu: '/assets/tools/image-color-extractor/szinkinyero-kepbol-hu.webp',
      it: '/assets/tools/image-color-extractor/estrattore-di-colori-da-immagine-it.webp',
      ro: '/assets/tools/image-color-extractor/extractor-culori-din-imagine-ro.webp',
      nl: '/assets/tools/image-color-extractor/kleurextractor-uit-afbeelding-nl.webp',
      no: '/assets/tools/image-color-extractor/fargeutrekker-fra-bilde-no.webp',
      pt: '/assets/tools/image-color-extractor/extrator-de-cores-de-imagem-pt.webp',
      sv: '/assets/tools/image-color-extractor/fargextraktor-fran-bild-sv.webp',
    },
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
      it: {
        slug: 'estrattore-di-colori-da-immagine',
        title: 'Estrattore di colori da immagine',
        description: 'Carica una foto o un logo e lo strumento estraerà i colori dominanti. Copia i codici colore con un solo clic.',
      },
      ro: {
        slug: 'extractor-culori-din-imagine',
        title: 'Extractor de culori din imagine',
        description: 'Încărcați o fotografie sau un logo și instrumentul va extrage culorile dominante. Copiați codurile de culoare cu un singur clic.',
      },
      nl: {
        slug: 'kleurextractor-uit-afbeelding',
        title: 'Kleurextractor uit afbeelding',
        description: 'Upload een foto of logo en de tool extraheert de dominante kleuren. Kopieer de kleurcodes met één klik.',
      },
      hu: {
        slug: 'szinkinyero-kepbol',
        title: 'Színkinyerő képből',
        description: 'Töltsön fel egy fényképet vagy logót, és az eszköz kinyeri a domináns színeket. Másolja a színkódokat egyetlen kattintással.',
      },
      cs: {
        slug: 'extraktor-barev-z-obrazku',
        title: 'Extraktor barev z obrázku',
        description: 'Nahrajte fotografii nebo logo a nástroj extrahuje dominantní barvy. Zkopírujte vygenerované kódy barev jedním kliknutím.',
      },
      sv: {
        slug: 'fargextraktor-fran-bild',
        title: 'Färgextraktor från bild',
        description: 'Ladda upp ett foto eller logotyp och verktyget extraherar de dominerande färgerna. Kopiera genererade färgkoder med ett klick.',
      },
      da: {
        slug: 'farveudtraekker-fra-billede',
        title: 'Farveudtrækker fra billede',
        description: 'Upload et foto eller logo, og værktøjet udtrækker de dominerende farver. Kopiér genererede farvekoder med et enkelt klik.',
      },
      no: {
        slug: 'fargeutrekker-fra-bilde',
        title: 'Fargeutrekker fra bilde',
        description: 'Last opp et foto eller en logo, og verktøyet vil trekke ut de dominerende fargene. Kopier genererte fargekoder med et klikk.',
      },
      fi: {
        slug: 'varien-poiminta-kuvasta',
        title: 'Värien poiminta kuvasta',
        description: 'Lataa valokuva tai logo, ja työkalu poimii hallitsevat värit. Kopioi luodut värikoodit yhdellä napsautuksella.',
      },
      el: {
        slug: 'exagogi-chromaton-apo-eikona',
        title: 'Εξαγωγή χρωμάτων από εικόνα',
        description: 'Ανεβάστε μια φωτογραφία ή λογότυπο και το εργαλείο θα εξάγει τα κυρίαρχα χρώματα. Αντιγράψτε τους κωδικούς χρωμάτων με ένα κλικ.',
      },
    },
  },
  {
    key: 'colorPalette',
    section: 'kolory',
    icon: RiPaletteLine,
    image: '/assets/tools/color-palette-generator/color-palette-generator-en.webp',
    images: {
      pl: '/assets/tools/color-palette-generator/generator-palet-kolorow-pl.webp',
      en: '/assets/tools/color-palette-generator/color-palette-generator-en.webp',
      cs: '/assets/tools/color-palette-generator/generator-barevnych-palet-cs.webp',
      da: '/assets/tools/color-palette-generator/farvepaletgenerator-da.webp',
      de: '/assets/tools/color-palette-generator/farbpaletten-generator-de.webp',
      el: '/assets/tools/color-palette-generator/dimiourgia-paletas-chromaton-el.webp',
      es: '/assets/tools/color-palette-generator/generador-de-paletas-de-colores-es.webp',
      fi: '/assets/tools/color-palette-generator/varipaletti-generaattori-fi.webp',
      fr: '/assets/tools/color-palette-generator/generateur-de-palettes-de-couleurs-fr.webp',
      hu: '/assets/tools/color-palette-generator/szinpaletta-generator-hu.webp',
      it: '/assets/tools/color-palette-generator/generatore-di-palette-di-colori-it.webp',
      ro: '/assets/tools/color-palette-generator/generator-de-palete-de-culori-ro.webp',
      nl: '/assets/tools/color-palette-generator/kleurpalettengenerator-nl.webp',
      no: '/assets/tools/color-palette-generator/fargepalettgenerator-no.webp',
      pt: '/assets/tools/color-palette-generator/gerador-de-paletas-de-cores-pt.webp',
      sv: '/assets/tools/color-palette-generator/fargpalettgenerator-sv.webp',
    },
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
      it: {
        slug: 'generatore-di-palette-di-colori',
        title: 'Generatore di palette di colori',
        description: 'Scegli un colore e genera 9 palette: monocromatica, complementare, triadica e altre.',
      },
      ro: {
        slug: 'generator-de-palete-de-culori',
        title: 'Generator de palete de culori',
        description: 'Alegeți o culoare și generați 9 palete: monocromatică, complementară, triadică și altele.',
      },
      nl: {
        slug: 'kleurpalettengenerator',
        title: 'Kleurpalettengenerator',
        description: 'Kies één kleur en genereer 9 paletten: monochromatisch, complementair, triadisch en meer.',
      },
      hu: {
        slug: 'szinpaletta-generator',
        title: 'Színpaletta generátor',
        description: 'Válasszon egy színt és generáljon 9 palettát: monokromatikus, komplementer, triádikus és más.',
      },
      cs: {
        slug: 'generator-barevnych-palet',
        title: 'Generátor barevných palet',
        description: 'Vyberte jednu barvu a vygenerujte 9 palet: monochromatickou, komplementární, triádickou a další.',
      },
      sv: {
        slug: 'fargpalettgenerator',
        title: 'Färgpalettgenerator',
        description: 'Välj en färg och generera 9 paletter: monokromatisk, komplementär, triadisk och fler.',
      },
      da: {
        slug: 'farvepaletgenerator',
        title: 'Farvepaletgenerator',
        description: 'Vælg én farve og generér 9 paletter: monokromatisk, komplementær, triadisk og flere.',
      },
      no: {
        slug: 'fargepalettgenerator',
        title: 'Fargepalettgenerator',
        description: 'Velg én farge og generer 9 paletter: monokromatisk, komplementær, triadisk og flere.',
      },
      fi: {
        slug: 'varipaletti-generaattori',
        title: 'Väripalettien generaattori',
        description: 'Valitse yksi väri ja luo 9 palettia: monokromaattinen, komplementaarinen, triadinen ja muita.',
      },
      el: {
        slug: 'dimiourgia-paletas-chromaton',
        title: 'Δημιουργία παλέτας χρωμάτων',
        description: 'Επιλέξτε ένα χρώμα και δημιουργήστε 9 παλέτες: μονοχρωματική, συμπληρωματική, τριαδική και άλλες.',
      },
    },
  },
  {
    key: 'qrCode',
    section: 'druk',
    icon: RiQrCodeLine,
    image: '/assets/tools/qr-code-generator/free-qr-code-generator-en.webp',
    images: {
      pl: '/assets/tools/qr-code-generator/darmowy-generator-kodow-qr-pl.webp',
      en: '/assets/tools/qr-code-generator/free-qr-code-generator-en.webp',
      cs: '/assets/tools/qr-code-generator/generator-qr-kodu-zdarma-cs.webp',
      da: '/assets/tools/qr-code-generator/gratis-qr-kode-generator-da.webp',
      de: '/assets/tools/qr-code-generator/kostenloser-qr-code-generator-de.webp',
      el: '/assets/tools/qr-code-generator/dorean-dimiourgia-kodikou-qr-el.webp',
      es: '/assets/tools/qr-code-generator/generador-de-codigos-qr-gratuito-es.webp',
      fi: '/assets/tools/qr-code-generator/ilmainen-qr-koodi-generaattori-fi.webp',
      fr: '/assets/tools/qr-code-generator/generateur-de-codes-qr-gratuit-fr.webp',
      hu: '/assets/tools/qr-code-generator/ingyenes-qr-kod-generator-hu.webp',
      it: '/assets/tools/qr-code-generator/generatore-di-codici-qr-gratuito-it.webp',
      ro: '/assets/tools/qr-code-generator/generator-coduri-qr-gratuit-ro.webp',
      nl: '/assets/tools/qr-code-generator/gratis-qr-code-generator-nl.webp',
      no: '/assets/tools/qr-code-generator/gratis-qr-kode-generator-no.webp',
      pt: '/assets/tools/qr-code-generator/gerador-de-codigos-qr-gratuito-pt.webp',
      sv: '/assets/tools/qr-code-generator/gratis-qr-kodgenerator-sv.webp',
    },
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
      it: {
        slug: 'generatore-di-codici-qr-gratuito',
        title: 'Generatore di codici QR gratuito',
        description: 'Crea un codice QR per un sito web, vCard, menu o volantino. Esporta in PNG e SVG, senza registrazione, senza limiti.',
      },
      ro: {
        slug: 'generator-coduri-qr-gratuit',
        title: 'Generator de coduri QR gratuit',
        description: 'Creați un cod QR pentru un site web, vCard, meniu sau pliant. Export PNG și SVG, fără înregistrare, fără limite.',
      },
      nl: {
        slug: 'gratis-qr-code-generator',
        title: 'Gratis QR-code generator',
        description: 'Maak een QR-code voor een website, vCard, menu of flyer. Exporteer naar PNG en SVG, zonder registratie, zonder limieten.',
      },
      hu: {
        slug: 'ingyenes-qr-kod-generator',
        title: 'Ingyenes QR-kód generátor',
        description: 'Hozzon létre QR-kódot weboldalhoz, vCard-hoz, menühöz vagy szórólaphoz. Exportálás PNG és SVG formátumban, regisztráció és korlátozás nélkül.',
      },
      cs: {
        slug: 'generator-qr-kodu-zdarma',
        title: 'Generátor QR kódu zdarma',
        description: 'Vytvořte QR kód pro web, vCard, menu nebo leták. Export do PNG a SVG, bez přihlášení, bez limitů.',
      },
      sv: {
        slug: 'gratis-qr-kodgenerator',
        title: 'Gratis QR-kodgenerator',
        description: 'Skapa en QR-kod för en webbplats, vCard, meny eller flygblad. Exportera till PNG och SVG, utan inloggning, utan begränsningar.',
      },
      da: {
        slug: 'gratis-qr-kode-generator',
        title: 'Gratis QR-kode-generator',
        description: 'Opret en QR-kode til en hjemmeside, vCard, menu eller flyer. Eksportér til PNG og SVG, uden login, uden begrænsninger.',
      },
      no: {
        slug: 'gratis-qr-kode-generator',
        title: 'Gratis QR-kode-generator',
        description: 'Lag en QR-kode for en nettside, vCard, meny eller flygeblad. Eksporter til PNG og SVG, uten innlogging, uten begrensninger.',
      },
      fi: {
        slug: 'ilmainen-qr-koodi-generaattori',
        title: 'Ilmainen QR-koodigeneraattori',
        description: 'Luo QR-koodi verkkosivulle, vCard-käyntikortille, menulle tai esitteelle. Vie PNG- ja SVG-muotoon ilman kirjautumista ja rajoituksia.',
      },
      el: {
        slug: 'dorean-dimiourgia-kodikou-qr',
        title: 'Δωρεάν δημιουργία κωδικού QR',
        description: 'Δημιουργήστε κωδικό QR για ιστότοπο, vCard, μενού ή φυλλάδιο. Εξαγωγή σε PNG και SVG, χωρίς σύνδεση, χωρίς όρια.',
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
      image: tool.images?.[locale] ?? tool.image,
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
    image: tool.images?.[locale] ?? tool.image,
    icon: tool.icon,
  }));
}
