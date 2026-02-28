import {
  RiAppsLine,
  RiArticleLine,
  RiContrast2Line,
  RiCropLine,
  RiFileTextLine,
  RiImageEditLine,
  RiLoopLeftLine,
  RiMailLine,
  RiPaletteLine,
  RiPantoneLine,
  RiQrCodeLine,
  RiSearchLine,
} from 'react-icons/ri';

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
  {
    key: 'konwertery',
    icon: RiLoopLeftLine,
    locales: {
      pl: { title: 'Konwertery formatów' },
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
      en: {
        slug: 'jpg-png-to-webp-unlimited',
        title: 'JPG/PNG to WebP converter',
        description: 'Convert JPG or PNG to WebP and reduce image size without quality loss. No file limits, no registration.',
      },
      de: {
        slug: 'jpg-png-zu-webp-konverter',
        title: 'JPG/PNG-zu-WebP-Konverter',
        description: 'JPG oder PNG in WebP konvertieren und Bildgröße ohne Qualitätsverlust reduzieren. Ohne Dateilimit, ohne Registrierung.',
      },
      es: {
        slug: 'convertidor-jpg-png-a-webp',
        title: 'Convertidor JPG/PNG a WebP',
        description: 'Convierta JPG o PNG a WebP y reduzca el tamaño de las imágenes sin pérdida de calidad. Sin límite de archivos, sin registro.',
      },
      fr: {
        slug: 'convertisseur-jpg-png-en-webp',
        title: 'Convertisseur JPG/PNG en WebP',
        description: 'Convertissez JPG ou PNG en WebP et réduisez le poids des images sans perte de qualité. Sans limite de fichiers, sans inscription.',
      },
      pt: {
        slug: 'conversor-jpg-png-para-webp',
        title: 'Conversor JPG/PNG para WebP',
        description: 'Converta JPG ou PNG para WebP e reduza o tamanho das imagens sem perda de qualidade. Sem limite de ficheiros, sem registo.',
      },
      it: {
        slug: 'convertitore-jpg-png-in-webp',
        title: 'Convertitore JPG/PNG in WebP',
        description: 'Converti JPG o PNG in WebP e riduci il peso delle immagini senza perdita di qualità. Senza limiti di file, senza registrazione.',
      },
      ro: {
        slug: 'convertor-jpg-png-in-webp',
        title: 'Convertor JPG/PNG în WebP',
        description: 'Convertiți JPG sau PNG în WebP și reduceți dimensiunea imaginilor fără pierderi de calitate. Fără limită de fișiere, fără înregistrare.',
      },
      nl: {
        slug: 'jpg-png-naar-webp-converter',
        title: 'JPG/PNG naar WebP-converter',
        description: 'Converteer JPG of PNG naar WebP en verklein afbeeldingen zonder kwaliteitsverlies. Zonder bestandslimiet, zonder registratie.',
      },
      hu: {
        slug: 'jpg-png-webp-konverter',
        title: 'JPG/PNG WebP konverter',
        description: 'Konvertálja a JPG vagy PNG fájlokat WebP formátumba, és csökkentse a képek méretét minőségromlás nélkül. Fájllimit és regisztráció nélkül.',
      },
      cs: {
        slug: 'konvertor-jpg-png-na-webp',
        title: 'Konvertor JPG/PNG na WebP',
        description: 'Převeďte JPG nebo PNG na WebP a zmenšete velikost obrázků bez ztráty kvality. Bez limitu souborů, bez registrace.',
      },
      sv: {
        slug: 'jpg-png-till-webp-konverterare',
        title: 'JPG/PNG till WebP-konverterare',
        description: 'Konvertera JPG eller PNG till WebP och minska bildstorleken utan kvalitetsförlust. Utan filbegränsning, utan registrering.',
      },
      da: {
        slug: 'jpg-png-til-webp-konverter',
        title: 'JPG/PNG til WebP-konverter',
        description: 'Konvertér JPG eller PNG til WebP og reducer billedstørrelsen uden kvalitetstab. Uden filbegrænsning, uden registrering.',
      },
      no: {
        slug: 'jpg-png-til-webp-konverterer',
        title: 'JPG/PNG til WebP-konverterer',
        description: 'Konverter JPG eller PNG til WebP og reduser bildestørrelsen uten kvalitetstap. Uten filbegrensning, uten registrering.',
      },
      fi: {
        slug: 'jpg-png-webp-muunnin',
        title: 'JPG/PNG–WebP-muunnin',
        description: 'Muunna JPG tai PNG WebP-muotoon ja pienennä kuvakokoa laadun kärsimättä. Ei tiedostorajoituksia, ei rekisteröitymistä.',
      },
      el: {
        slug: 'metatropeas-jpg-png-se-webp',
        title: 'Μετατροπέας JPG/PNG σε WebP',
        description: 'Μετατρέψτε JPG ή PNG σε WebP και μειώστε το μέγεθος εικόνων χωρίς απώλεια ποιότητας. Χωρίς όριο αρχείων, χωρίς εγγραφή.',
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
        description: 'Zmień rozmiar, wykadruj i przekonwertuj zdjęcie. Gotowe formaty, okrągłe avatary, eksport JPG/PNG/WebP.',
      },
      en: {
        slug: 'online-image-editor',
        title: 'Online image editor',
        description: 'Resize, crop and convert your image. Ready-made formats for social media, circular avatars, export to JPG/PNG/WebP.',
      },
      de: {
        slug: 'online-bildeditor',
        title: 'Bildeditor',
        description: 'Bildgröße ändern, zuschneiden und Format konvertieren. Fertige Formate für Social Media, runde Avatare, Export als JPG/PNG/WebP.',
      },
      es: {
        slug: 'editor-de-imagenes-en-linea',
        title: 'Editor de imágenes en línea',
        description: 'Cambie el tamaño, recorte y convierta su imagen. Formatos listos para redes sociales, avatares circulares, exportación a JPG/PNG/WebP.',
      },
      fr: {
        slug: 'editeur-d-images-en-ligne',
        title: "Éditeur d'images en ligne",
        description: 'Redimensionnez, recadrez et convertissez votre image. Formats prêts pour les réseaux sociaux, avatars circulaires, export JPG/PNG/WebP.',
      },
      pt: {
        slug: 'editor-de-imagens-online',
        title: 'Editor de imagens online',
        description: 'Redimensione, corte e converta a sua imagem. Formatos prontos para redes sociais, avatares circulares, exportação JPG/PNG/WebP.',
      },
      it: {
        slug: 'editor-di-immagini-online',
        title: 'Editor di immagini online',
        description: 'Ridimensiona, ritaglia e converti la tua immagine. Formati pronti per i social media, avatar circolari, esportazione JPG/PNG/WebP.',
      },
      ro: {
        slug: 'editor-de-imagini',
        title: 'Editor de imagini',
        description: 'Redimensionați, decupați și convertiți imaginea. Formate predefinite pentru rețelele sociale, avataruri circulare, export JPG/PNG/WebP.',
      },
      nl: {
        slug: 'afbeeldingeneditor',
        title: 'Afbeeldingeneditor',
        description: 'Wijzig het formaat, snij bij en converteer uw afbeelding. Kant-en-klare formaten voor social media, ronde avatars, export JPG/PNG/WebP.',
      },
      hu: {
        slug: 'kepszerkeszto',
        title: 'Képszerkesztő',
        description: 'Méretezze át, vágja ki és konvertálja képét. Kész formátumok közösségi médiához, kör alakú avatarok, export JPG/PNG/WebP.',
      },
      cs: {
        slug: 'editor-obrazku',
        title: 'Editor obrázků',
        description: 'Změňte velikost, ořízněte a převeďte obrázek. Hotové formáty pro sociální sítě, kulaté avatary, export JPG/PNG/WebP.',
      },
      sv: {
        slug: 'bildredigerare',
        title: 'Bildredigerare',
        description: 'Ändra storlek, beskär och konvertera din bild. Färdiga format för sociala medier, runda avatarer, export JPG/PNG/WebP.',
      },
      da: {
        slug: 'billedrediger',
        title: 'Billedredigering',
        description: 'Ændr størrelse, beskær og konvertér dit billede. Færdige formater til sociale medier, runde avatarer, eksport JPG/PNG/WebP.',
      },
      no: {
        slug: 'bilderedigerer',
        title: 'Bilderedigerer',
        description: 'Endre størrelse, beskjær og konverter bildet ditt. Ferdige formater for sosiale medier, runde avatarer, eksport JPG/PNG/WebP.',
      },
      fi: {
        slug: 'kuvaeditori',
        title: 'Kuvaeditori',
        description: 'Muuta kokoa, rajaa ja muunna kuvasi. Valmiit muodot sosiaaliseen mediaan, pyöreät avatarit, vienti JPG/PNG/WebP.',
      },
      el: {
        slug: 'epexergasia-eikonas',
        title: 'Επεξεργασία εικόνας',
        description: 'Αλλάξτε μέγεθος, περικόψτε και μετατρέψτε την εικόνα σας. Έτοιμες μορφές για κοινωνικά δίκτυα, στρογγυλά avatar, εξαγωγή JPG/PNG/WebP.',
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
        description: 'Stwórz favicon.ico dla swojej strony z jednego obrazu. Bez logowania i rejestracji.',
      },
      en: {
        slug: 'free-favicon-generator',
        title: 'Favicon generator',
        description: 'Create a complete favicon.ico set for your website from one image. All required sizes, no login.',
      },
      de: {
        slug: 'kostenloser-favicon-generator',
        title: 'Favicon-Generator',
        description: 'Erstellen Sie ein komplettes favicon.ico-Set für Ihre Website aus einem Bild. Alle erforderlichen Größen, ohne Anmeldung.',
      },
      es: {
        slug: 'generador-de-favicon-gratuito',
        title: 'Generador de favicon',
        description: 'Cree un conjunto completo de favicon.ico para su sitio web desde una imagen. Todos los tamaños necesarios, sin registro.',
      },
      fr: {
        slug: 'generateur-de-favicon-gratuit',
        title: 'Générateur de favicon',
        description: "Créez un jeu complet de favicon.ico pour votre site web à partir d'une image. Toutes les tailles requises, sans inscription.",
      },
      pt: {
        slug: 'gerador-de-favicon-gratuito',
        title: 'Gerador de favicon',
        description: 'Crie um conjunto completo de favicon.ico para o seu site a partir de uma imagem. Todos os tamanhos necessários, sem registo.',
      },
      it: {
        slug: 'generatore-di-favicon-gratuito',
        title: 'Generatore di favicon',
        description: 'Crea un set completo di favicon.ico per il tuo sito web da una immagine. Tutte le dimensioni richieste, senza registrazione.',
      },
      ro: {
        slug: 'generator-favicon-gratuit',
        title: 'Generator de favicon',
        description: 'Creați un set complet de favicon.ico pentru site-ul dvs. dintr-o imagine. Toate dimensiunile necesare, fără înregistrare.',
      },
      nl: {
        slug: 'gratis-favicon-generator',
        title: 'Favicon-generator',
        description: 'Maak een complete favicon.ico-set voor uw website vanuit één afbeelding. Alle vereiste formaten, zonder registratie.',
      },
      hu: {
        slug: 'ingyenes-favicon-generator',
        title: 'Favicon generátor',
        description: 'Hozzon létre teljes favicon.ico készletet weboldalához egyetlen képből. Minden szükséges méret, bejelentkezés nélkül.',
      },
      cs: {
        slug: 'generator-favicon-zdarma',
        title: 'Generátor favicon',
        description: 'Vytvořte kompletní sadu favicon.ico pro svůj web z jednoho obrázku. Všechny potřebné velikosti, bez přihlášení.',
      },
      sv: {
        slug: 'gratis-favicon-generator',
        title: 'Favicon-generator',
        description: 'Skapa en komplett favicon.ico-uppsättning för din webbplats från en bild. Alla nödvändiga storlekar, utan inloggning.',
      },
      da: {
        slug: 'gratis-favicon-generator',
        title: 'Favicon-generator',
        description: 'Opret et komplet favicon.ico-sæt til din hjemmeside fra et billede. Alle nødvendige størrelser, uden login.',
      },
      no: {
        slug: 'gratis-favicon-generator',
        title: 'Favicon-generator',
        description: 'Lag et komplett favicon.ico-sett for nettsiden din fra et bilde. Alle nødvendige størrelser, uten innlogging.',
      },
      fi: {
        slug: 'ilmainen-favicon-generaattori',
        title: 'Favicon-generaattori',
        description: 'Luo täydellinen favicon.ico-setti verkkosivullesi yhdestä kuvasta. Kaikki tarvittavat koot, ilman kirjautumista.',
      },
      el: {
        slug: 'dorean-dimiourgia-favicon',
        title: 'Δημιουργία favicon',
        description: 'Δημιουργήστε ένα πλήρες σετ favicon.ico για τον ιστότοπό σας από μία εικόνα. Όλα τα απαιτούμενα μεγέθη, χωρίς εγγραφή.',
      },
    },
  },
  {
    key: 'metaCounter',
    section: 'seo',
    icon: RiFileTextLine,
    image: '/assets/tools/free-meta-title-and-description-checker-pixel-width/meta-title-description-length-checker-en.webp',
    images: {
      pl: '/assets/tools/free-meta-title-and-description-checker-pixel-width/licznik-dlugosci-meta-title-i-description-pl.webp',
      en: '/assets/tools/free-meta-title-and-description-checker-pixel-width/meta-title-description-length-checker-en.webp',
      cs: '/assets/tools/free-meta-title-and-description-checker-pixel-width/kontrola-meta-titulku-a-popisu-cs.webp',
      da: '/assets/tools/free-meta-title-and-description-checker-pixel-width/meta-titel-og-beskrivelse-kontrol-da.webp',
      de: '/assets/tools/free-meta-title-and-description-checker-pixel-width/meta-titel-beschreibung-laengenpruefer-de.webp',
      el: '/assets/tools/free-meta-title-and-description-checker-pixel-width/elegkhos-meta-titlou-kai-perigrafis-el.webp',
      es: '/assets/tools/free-meta-title-and-description-checker-pixel-width/verificador-de-meta-titulo-y-descripcion-es.webp',
      fi: '/assets/tools/free-meta-title-and-description-checker-pixel-width/meta-otsikko-ja-kuvaus-tarkistus-fi.webp',
      fr: '/assets/tools/free-meta-title-and-description-checker-pixel-width/verificateur-meta-titre-et-description-fr.webp',
      hu: '/assets/tools/free-meta-title-and-description-checker-pixel-width/meta-cim-es-leiras-ellenorzo-hu.webp',
      it: '/assets/tools/free-meta-title-and-description-checker-pixel-width/verificatore-meta-titolo-e-descrizione-it.webp',
      ro: '/assets/tools/free-meta-title-and-description-checker-pixel-width/verificator-meta-titlu-si-descriere-ro.webp',
      nl: '/assets/tools/free-meta-title-and-description-checker-pixel-width/meta-titel-beschrijving-checker-nl.webp',
      no: '/assets/tools/free-meta-title-and-description-checker-pixel-width/meta-tittel-og-beskrivelse-sjekker-no.webp',
      pt: '/assets/tools/free-meta-title-and-description-checker-pixel-width/verificador-de-meta-titulo-e-descricao-pt.webp',
      sv: '/assets/tools/free-meta-title-and-description-checker-pixel-width/meta-titel-och-beskrivning-kontroll-sv.webp',
    },
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'licznik-dlugosci-meta-title-i-description',
        title: 'Licznik meta title i description',
        description: 'Sprawdź długość tytułu i opisu strony w pikselach. Podgląd wyniku w Google na żywo.',
      },
      en: {
        slug: 'meta-title-description-length-checker',
        title: 'Meta title & description checker',
        description: 'Check title and description length in pixels. Live Google preview and optimization tips.',
      },
      de: {
        slug: 'meta-titel-beschreibung-laengenpruefer',
        title: 'Meta-Tag-Checker',
        description: 'Titel- und Beschreibungslänge in Pixeln prüfen. Live-Google-Vorschau und Optimierungstipps.',
      },
      es: {
        slug: 'verificador-de-meta-titulo-y-descripcion',
        title: 'Verificador de meta título y descripción',
        description: 'Compruebe la longitud del título y la descripción en píxeles. Vista previa de Google en vivo y sugerencias de optimización.',
      },
      fr: {
        slug: 'verificateur-meta-titre-et-description',
        title: 'Vérificateur de méta titre et description',
        description: "Vérifiez la longueur du titre et de la description en pixels. Aperçu Google en direct et conseils d'optimisation.",
      },
      pt: {
        slug: 'verificador-de-meta-titulo-e-descricao',
        title: 'Verificador de meta título e descrição',
        description: 'Verifique o comprimento do título e da descrição em pixels. Pré-visualização Google em tempo real e dicas de otimização.',
      },
      it: {
        slug: 'verificatore-meta-titolo-e-descrizione',
        title: 'Verificatore meta titolo e descrizione',
        description: 'Verifica la lunghezza del titolo e della descrizione in pixel. Anteprima Google dal vivo e suggerimenti di ottimizzazione.',
      },
      ro: {
        slug: 'verificator-meta-titlu-si-descriere',
        title: 'Verificator meta titlu și descriere',
        description: 'Verificați lungimea titlului și descrierii în pixeli. Previzualizare Google live și sfaturi de optimizare.',
      },
      nl: {
        slug: 'meta-titel-beschrijving-checker',
        title: 'Meta-titel & beschrijving checker',
        description: 'Controleer de titel- en beschrijvingslengte in pixels. Live Google-voorbeeld en optimalisatietips.',
      },
      hu: {
        slug: 'meta-cim-es-leiras-ellenorzo',
        title: 'Meta cím és leírás ellenőrző',
        description: 'Ellenőrizze a cím és leírás hosszát pixelben. Élő Google-előnézet és optimalizálási tippek.',
      },
      cs: {
        slug: 'kontrola-meta-titulku-a-popisu',
        title: 'Kontrola meta titulku a popisu',
        description: 'Zkontrolujte délku titulku a popisu v pixelech. Živý náhled v Google a tipy na optimalizaci.',
      },
      sv: {
        slug: 'meta-titel-och-beskrivning-kontroll',
        title: 'Meta-titel & beskrivningskontroll',
        description: 'Kontrollera titel- och beskrivningslängd i pixlar. Live Google-förhandsgranskning och optimeringstips.',
      },
      da: {
        slug: 'meta-titel-og-beskrivelse-kontrol',
        title: 'Meta-titel & beskrivelseskontrol',
        description: 'Kontrollér titel- og beskrivelseslaengde i pixels. Live Google-forhåndsvisning og optimeringstips.',
      },
      no: {
        slug: 'meta-tittel-og-beskrivelse-sjekker',
        title: 'Meta-tittel- og beskrivelsessjekker',
        description: 'Sjekk tittel- og beskrivelseslengde i piksler. Live Google-forhåndsvisning og optimaliseringstips.',
      },
      fi: {
        slug: 'meta-otsikko-ja-kuvaus-tarkistus',
        title: 'Meta-otsikon ja -kuvauksen tarkistus',
        description: 'Tarkista otsikon ja kuvauksen pituus pikseleinä. Reaaliaikainen Google-esikatselu ja optimointivinkit.',
      },
      el: {
        slug: 'elegkhos-meta-titlou-kai-perigrafis',
        title: 'Έλεγχος meta τίτλου και περιγραφής',
        description: 'Ελέγξτε το μήκος τίτλου και περιγραφής σε pixels. Ζωντανή προεπισκόπηση Google και συμβουλές βελτιστοποίησης.',
      },
    },
  },
  {
    key: 'wordCounter',
    section: 'seo',
    icon: RiArticleLine,
    image: '/assets/tools/word-and-character-counter-with-text-formatting-tools/word-and-character-counter-en.webp',
    images: {
      pl: '/assets/tools/word-and-character-counter-with-text-formatting-tools/licznik-slow-i-znakow-pl.webp',
      en: '/assets/tools/word-and-character-counter-with-text-formatting-tools/word-and-character-counter-en.webp',
      cs: '/assets/tools/word-and-character-counter-with-text-formatting-tools/pocitadlo-slov-a-znaku-cs.webp',
      da: '/assets/tools/word-and-character-counter-with-text-formatting-tools/ord-og-tegntaeller-da.webp',
      de: '/assets/tools/word-and-character-counter-with-text-formatting-tools/wort-und-zeichenzaehler-de.webp',
      el: '/assets/tools/word-and-character-counter-with-text-formatting-tools/metritis-lexeon-kai-charaktiron-el.webp',
      es: '/assets/tools/word-and-character-counter-with-text-formatting-tools/contador-de-palabras-y-caracteres-es.webp',
      fi: '/assets/tools/word-and-character-counter-with-text-formatting-tools/sana-ja-merkkilaskuri-fi.webp',
      fr: '/assets/tools/word-and-character-counter-with-text-formatting-tools/compteur-de-mots-et-caracteres-fr.webp',
      hu: '/assets/tools/word-and-character-counter-with-text-formatting-tools/szo-es-karakterszamlalo-hu.webp',
      it: '/assets/tools/word-and-character-counter-with-text-formatting-tools/contatore-di-parole-e-caratteri-it.webp',
      ro: '/assets/tools/word-and-character-counter-with-text-formatting-tools/contor-cuvinte-si-caractere-ro.webp',
      nl: '/assets/tools/word-and-character-counter-with-text-formatting-tools/woorden-en-tekenteller-nl.webp',
      no: '/assets/tools/word-and-character-counter-with-text-formatting-tools/ord-og-tegnteller-no.webp',
      pt: '/assets/tools/word-and-character-counter-with-text-formatting-tools/contador-de-palavras-e-caracteres-pt.webp',
      sv: '/assets/tools/word-and-character-counter-with-text-formatting-tools/ord-och-teckenraknare-sv.webp',
    },
    desktopOnly: false,
    locales: {
      pl: {
        slug: 'licznik-slow-i-znakow',
        title: 'Licznik słów i znaków',
        description: 'Policz słowa, znaki, zdania i czas czytania. Zmień wielkość liter i sformatuj tekst jednym kliknięciem.',
      },
      en: {
        slug: 'word-and-character-counter',
        title: 'Word & character counter',
        description: 'Count words, characters, sentences and reading time. Change letter case and format text in one click.',
      },
      de: {
        slug: 'wort-und-zeichenzaehler',
        title: 'Wort- & Zeichenzähler',
        description: 'Wörter, Zeichen, Sätze und Lesezeit zählen. Groß-/Kleinschreibung ändern und Text mit einem Klick formatieren.',
      },
      es: {
        slug: 'contador-de-palabras-y-caracteres',
        title: 'Contador de palabras y caracteres',
        description: 'Cuente palabras, caracteres, oraciones y tiempo de lectura. Cambie las mayúsculas y formatee el texto con un clic.',
      },
      fr: {
        slug: 'compteur-de-mots-et-caracteres',
        title: 'Compteur de mots et caractères',
        description: 'Comptez les mots, caractères, phrases et temps de lecture. Changez la casse et mettez en forme le texte en un clic.',
      },
      pt: {
        slug: 'contador-de-palavras-e-caracteres',
        title: 'Contador de palavras e caracteres',
        description: 'Conte palavras, caracteres, frases e tempo de leitura. Altere as maiúsculas e formate o texto com um clique.',
      },
      it: {
        slug: 'contatore-di-parole-e-caratteri',
        title: 'Contatore di parole e caratteri',
        description: 'Conta parole, caratteri, frasi e tempo di lettura. Cambia maiuscole/minuscole e formatta il testo con un clic.',
      },
      ro: {
        slug: 'contor-cuvinte-si-caractere',
        title: 'Contor de cuvinte și caractere',
        description: 'Numărați cuvinte, caractere, propoziții și timp de citire. Schimbați majusculele și formatați textul cu un clic.',
      },
      nl: {
        slug: 'woorden-en-tekenteller',
        title: 'Woorden- & tekenteller',
        description: 'Tel woorden, tekens, zinnen en leestijd. Wijzig hoofdletters en formatteer tekst met één klik.',
      },
      hu: {
        slug: 'szo-es-karakterszamlalo',
        title: 'Szó- és karakterszámláló',
        description: 'Számolja meg a szavakat, karaktereket, mondatokat és az olvasási időt. Változtassa meg a betűméretet és formázza a szöveget egy kattintással.',
      },
      cs: {
        slug: 'pocitadlo-slov-a-znaku',
        title: 'Počítadlo slov a znaků',
        description: 'Spočítejte slova, znaky, věty a čas čtení. Změňte velikost písmen a naformátujte text jedním kliknutím.',
      },
      sv: {
        slug: 'ord-och-teckenraknare',
        title: 'Ord- & teckenräknare',
        description: 'Räkna ord, tecken, meningar och lästid. Ändra versaler och formatera text med ett klick.',
      },
      da: {
        slug: 'ord-og-tegntaeller',
        title: 'Ord- & tegntæller',
        description: 'Tæl ord, tegn, sætninger og læsetid. Skift store/små bogstaver og formatér tekst med ét klik.',
      },
      no: {
        slug: 'ord-og-tegnteller',
        title: 'Ord- og tegnteller',
        description: 'Tell ord, tegn, setninger og lesetid. Endre store/små bokstaver og formater tekst med ett klikk.',
      },
      fi: {
        slug: 'sana-ja-merkkilaskuri',
        title: 'Sana- ja merkkilaskuri',
        description: 'Laske sanat, merkit, lauseet ja lukuaika. Vaihda kirjainkokoa ja muotoile teksti yhdellä napsautuksella.',
      },
      el: {
        slug: 'metritis-lexeon-kai-charaktiron',
        title: 'Μετρητής λέξεων και χαρακτήρων',
        description: 'Μετρήστε λέξεις, χαρακτήρες, προτάσεις και χρόνο ανάγνωσης. Αλλάξτε κεφαλαία και μορφοποιήστε το κείμενο με ένα κλικ.',
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
        description: 'Stwórz profesjonalny podpis e-mail HTML. Gotowe układy, ikony social media i kod do Gmail/Outlook.',
      },
      en: {
        slug: 'free-email-signature-generator',
        title: 'Email signature generator',
        description: 'Create an HTML email signature with full customization. Ready layouts, social media icons and code for Gmail/Outlook.',
      },
      de: {
        slug: 'kostenloser-e-mail-signatur-generator',
        title: 'E-Mail-Signatur-Generator',
        description: 'HTML-E-Mail-Signatur mit voller Personalisierung erstellen. Fertige Layouts, Social-Media-Icons und Code für Gmail/Outlook.',
      },
      es: {
        slug: 'generador-de-firma-de-correo-gratuito',
        title: 'Generador de firma de correo',
        description: 'Cree una firma de correo HTML con personalización completa. Diseños listos, iconos de redes sociales y código para Gmail/Outlook.',
      },
      fr: {
        slug: 'generateur-de-signature-email-gratuit',
        title: 'Générateur de signature e-mail',
        description: 'Créez une signature e-mail HTML avec personnalisation complète. Mises en page prêtes, icônes réseaux sociaux et code pour Gmail/Outlook.',
      },
      pt: {
        slug: 'gerador-de-assinatura-de-email-gratuito',
        title: 'Gerador de assinatura de e-mail',
        description: 'Crie uma assinatura de e-mail HTML com personalização completa. Layouts prontos, ícones de redes sociais e código para Gmail/Outlook.',
      },
      it: {
        slug: 'generatore-di-firma-email-gratuito',
        title: 'Generatore di firma e-mail',
        description: 'Crea una firma e-mail HTML con personalizzazione completa. Layout pronti, icone social media e codice per Gmail/Outlook.',
      },
      ro: {
        slug: 'generator-semnatura-email-gratuit',
        title: 'Generator de semnătură e-mail',
        description: 'Creați o semnătură e-mail HTML cu personalizare completă. Machete gata, pictograme rețele sociale și cod pentru Gmail/Outlook.',
      },
      nl: {
        slug: 'gratis-e-mailhandtekening-generator',
        title: 'E-mailhandtekening generator',
        description: 'Maak een HTML e-mailhandtekening met volledige aanpassing. Kant-en-klare layouts, social media-iconen en code voor Gmail/Outlook.',
      },
      hu: {
        slug: 'ingyenes-email-alairas-generator',
        title: 'E-mail aláírás generátor',
        description: 'Hozzon létre HTML e-mail aláírást teljes testreszabással. Kész elrendezések, közösségi média ikonok és kód Gmail/Outlook számára.',
      },
      cs: {
        slug: 'generator-podpisu-emailu-zdarma',
        title: 'Generátor podpisu e-mailu',
        description: 'Vytvořte HTML e-mailový podpis s plnou personalizací. Hotové rozložení, ikony sociálních sítí a kód pro Gmail/Outlook.',
      },
      sv: {
        slug: 'gratis-e-postsignatur-generator',
        title: 'E-postsignatur-generator',
        description: 'Skapa en HTML e-postsignatur med full anpassning. Färdiga layouter, sociala medier-ikoner och kod för Gmail/Outlook.',
      },
      da: {
        slug: 'gratis-e-mail-signatur-generator',
        title: 'E-mail-signatur-generator',
        description: 'Opret en HTML e-mail-signatur med fuld tilpasning. Færdige layouts, sociale medie-ikoner og kode til Gmail/Outlook.',
      },
      no: {
        slug: 'gratis-e-postsignatur-generator',
        title: 'E-postsignatur-generator',
        description: 'Lag en HTML e-postsignatur med full tilpasning. Ferdige oppsett, sosiale medier-ikoner og kode for Gmail/Outlook.',
      },
      fi: {
        slug: 'ilmainen-sahkopostiallekirjoitus-generaattori',
        title: 'Sähköpostiallekirjoitusgeneraattori',
        description: 'Luo HTML-sähköpostiallekirjoitus täydellä mukauttamisella. Valmiit asettelut, sosiaalisen median kuvakkeet ja koodi Gmailiin/Outlookiin.',
      },
      el: {
        slug: 'dorean-dimiourgia-ypografis-email',
        title: 'Δημιουργία υπογραφής email',
        description: 'Δημιουργήστε υπογραφή email HTML με πλήρη προσαρμογή. Έτοιμα layouts, εικονίδια κοινωνικών δικτύων και κώδικας για Gmail/Outlook.',
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
        title: 'Tester kontrastu kolorów',
        description: 'Sprawdź kontrast tekstu i tła według WCAG 2.1 AA i AAA. Automatyczna korekta kolorów.',
      },
      en: {
        slug: 'color-contrast-checker',
        title: 'Color contrast checker',
        description: 'Check text and background contrast per WCAG 2.1 AA and AAA. Automatic color correction.',
      },
      de: {
        slug: 'farbkontrast-checker',
        title: 'Farbkontrast-Checker',
        description: 'Text- und Hintergrundkontrast nach WCAG 2.1 AA und AAA prüfen. Automatische Farbkorrektur.',
      },
      es: {
        slug: 'comprobador-de-contraste-de-colores',
        title: 'Comprobador de contraste de colores',
        description: 'Compruebe el contraste de texto y fondo según WCAG 2.1 AA y AAA. Corrección automática de colores.',
      },
      fr: {
        slug: 'verificateur-de-contraste-des-couleurs',
        title: 'Vérificateur de contraste des couleurs',
        description: 'Vérifiez le contraste texte et arrière-plan selon WCAG 2.1 AA et AAA. Correction automatique des couleurs.',
      },
      pt: {
        slug: 'verificador-de-contraste-de-cores',
        title: 'Verificador de contraste de cores',
        description: 'Verifique o contraste de texto e fundo segundo WCAG 2.1 AA e AAA. Correção automática de cores.',
      },
      it: {
        slug: 'verificatore-contrasto-colori',
        title: 'Verificatore contrasto colori',
        description: 'Verifica il contrasto testo e sfondo secondo WCAG 2.1 AA e AAA. Correzione automatica dei colori.',
      },
      ro: {
        slug: 'verificator-contrast-culori',
        title: 'Verificator contrast culori',
        description: 'Verificați contrastul textului și fundalului conform WCAG 2.1 AA și AAA. Corecție automată a culorilor.',
      },
      nl: {
        slug: 'kleurcontrast-checker',
        title: 'Kleurcontrast checker',
        description: 'Controleer tekst- en achtergrondcontrast volgens WCAG 2.1 AA en AAA. Automatische kleurcorrectie.',
      },
      hu: {
        slug: 'szinkontraszt-ellenorzo',
        title: 'Színkontraszt ellenőrző',
        description: 'Ellenőrizze a szöveg és háttér kontrasztját a WCAG 2.1 AA és AAA szerint. Automatikus színkorrekció.',
      },
      cs: {
        slug: 'kontrola-kontrastu-barev',
        title: 'Kontrola kontrastu barev',
        description: 'Zkontrolujte kontrast textu a pozadí podle WCAG 2.1 AA a AAA. Automatická korekce barev.',
      },
      sv: {
        slug: 'fargkontrastkontroll',
        title: 'Färgkontrastkontroll',
        description: 'Kontrollera text- och bakgrundskontrast enligt WCAG 2.1 AA och AAA. Automatisk färgkorrigering.',
      },
      da: {
        slug: 'farvekontrastkontrol',
        title: 'Farvekontrastkontrol',
        description: 'Kontrollér tekst- og baggrundskontrast ifølge WCAG 2.1 AA og AAA. Automatisk farvekorrektion.',
      },
      no: {
        slug: 'fargekontrastsjekker',
        title: 'Fargekontrastsjekker',
        description: 'Sjekk tekst- og bakgrunnskontrast i henhold til WCAG 2.1 AA og AAA. Automatisk fargekorrigering.',
      },
      fi: {
        slug: 'varikontrasti-tarkistus',
        title: 'Värikontrastin tarkistus',
        description: 'Tarkista tekstin ja taustan kontrasti WCAG 2.1 AA ja AAA mukaan. Automaattinen värikorjaus.',
      },
      el: {
        slug: 'elegkhos-kontrast-chromaton',
        title: 'Έλεγχος αντίθεσης χρωμάτων',
        description: 'Ελέγξτε την αντίθεση κειμένου και φόντου σύμφωνα με WCAG 2.1 AA και AAA. Αυτόματη διόρθωση χρωμάτων.',
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
        description: 'Wyciągnij dominujące kolory ze zdjęcia lub logo. Gotowe kody HEX i RGB do skopiowania.',
      },
      en: {
        slug: 'image-color-extractor',
        title: 'Image color extractor',
        description: 'Extract dominant colors from a photo or logo. Ready HEX and RGB codes to copy.',
      },
      de: {
        slug: 'bild-farbextraktor',
        title: 'Bild-Farbextraktor',
        description: 'Dominante Farben aus einem Foto oder Logo extrahieren. Fertige HEX- und RGB-Codes zum Kopieren.',
      },
      es: {
        slug: 'extractor-de-colores-de-imagen',
        title: 'Extractor de colores de imagen',
        description: 'Extraiga los colores dominantes de una foto o logotipo. Códigos HEX y RGB listos para copiar.',
      },
      fr: {
        slug: 'extracteur-de-couleurs-d-image',
        title: "Extracteur de couleurs d'image",
        description: "Extrayez les couleurs dominantes d'une photo ou d'un logo. Codes HEX et RGB prêts à copier.",
      },
      pt: {
        slug: 'extrator-de-cores-de-imagem',
        title: 'Extrator de cores de imagem',
        description: 'Extraia as cores dominantes de uma foto ou logótipo. Códigos HEX e RGB prontos para copiar.',
      },
      it: {
        slug: 'estrattore-di-colori-da-immagine',
        title: 'Estrattore di colori da immagine',
        description: 'Estrai i colori dominanti da una foto o un logo. Codici HEX e RGB pronti da copiare.',
      },
      ro: {
        slug: 'extractor-culori-din-imagine',
        title: 'Extractor de culori din imagine',
        description: 'Extrageți culorile dominante dintr-o fotografie sau logo. Coduri HEX și RGB gata de copiat.',
      },
      nl: {
        slug: 'kleurextractor-uit-afbeelding',
        title: 'Kleurextractor uit afbeelding',
        description: 'Extraheer dominante kleuren uit een foto of logo. Kant-en-klare HEX- en RGB-codes om te kopiëren.',
      },
      hu: {
        slug: 'szinkinyero-kepbol',
        title: 'Színkinyerő képből',
        description: 'Nyerje ki a domináns színeket egy fényképből vagy logóból. Kész HEX és RGB kódok másolásra.',
      },
      cs: {
        slug: 'extraktor-barev-z-obrazku',
        title: 'Extraktor barev z obrázku',
        description: 'Extrahujte dominantní barvy z fotografie nebo loga. Hotové HEX a RGB kódy ke zkopírování.',
      },
      sv: {
        slug: 'fargextraktor-fran-bild',
        title: 'Färgextraktor från bild',
        description: 'Extrahera dominerande färger från ett foto eller logotyp. Färdiga HEX- och RGB-koder att kopiera.',
      },
      da: {
        slug: 'farveudtraekker-fra-billede',
        title: 'Farveudtrækker fra billede',
        description: 'Udtræk dominerende farver fra et foto eller logo. Færdige HEX- og RGB-koder til kopiering.',
      },
      no: {
        slug: 'fargeutrekker-fra-bilde',
        title: 'Fargeutrekker fra bilde',
        description: 'Trekk ut dominerende farger fra et foto eller logo. Ferdige HEX- og RGB-koder å kopiere.',
      },
      fi: {
        slug: 'varien-poiminta-kuvasta',
        title: 'Värien poiminta kuvasta',
        description: 'Poimi hallitsevat värit valokuvasta tai logosta. Valmiit HEX- ja RGB-koodit kopioitaviksi.',
      },
      el: {
        slug: 'exagogi-chromaton-apo-eikona',
        title: 'Εξαγωγή χρωμάτων από εικόνα',
        description: 'Εξάγετε τα κυρίαρχα χρώματα από μια φωτογραφία ή λογότυπο. Έτοιμοι κωδικοί HEX και RGB για αντιγραφή.',
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
        description: 'Wygeneruj 9 palet z jednego koloru: monochromatyczną, komplementarną, triadyczną i inne. Kody HEX.',
      },
      en: {
        slug: 'color-palette-generator',
        title: 'Color palette generator',
        description: 'Generate 9 palettes from one color: monochromatic, complementary, triadic and more. HEX codes.',
      },
      de: {
        slug: 'farbpaletten-generator',
        title: 'Farbpaletten-Generator',
        description: '9 Paletten aus einer Farbe generieren: monochromatisch, komplementär, triadisch und mehr. HEX-Codes.',
      },
      es: {
        slug: 'generador-de-paletas-de-colores',
        title: 'Generador de paletas de colores',
        description: 'Genere 9 paletas a partir de un color: monocromática, complementaria, triádica y más. Códigos HEX.',
      },
      fr: {
        slug: 'generateur-de-palettes-de-couleurs',
        title: 'Générateur de palettes de couleurs',
        description: "Générez 9 palettes à partir d'une couleur\u00a0: monochromatique, complémentaire, triadique et plus. Codes HEX.",
      },
      pt: {
        slug: 'gerador-de-paletas-de-cores',
        title: 'Gerador de paletas de cores',
        description: 'Gere 9 paletas a partir de uma cor: monocromática, complementar, triádica e mais. Códigos HEX.',
      },
      it: {
        slug: 'generatore-di-palette-di-colori',
        title: 'Generatore di palette di colori',
        description: 'Genera 9 palette da un colore: monocromatica, complementare, triadica e altre. Codici HEX.',
      },
      ro: {
        slug: 'generator-de-palete-de-culori',
        title: 'Generator de palete de culori',
        description: 'Generați 9 palete dintr-o culoare: monocromatică, complementară, triadică și altele. Coduri HEX.',
      },
      nl: {
        slug: 'kleurpalettengenerator',
        title: 'Kleurpalettengenerator',
        description: 'Genereer 9 paletten vanuit één kleur: monochromatisch, complementair, triadisch en meer. HEX-codes.',
      },
      hu: {
        slug: 'szinpaletta-generator',
        title: 'Színpaletta generátor',
        description: 'Generáljon 9 palettát egy színből: monokromatikus, komplementer, triádikus és más. HEX kódok.',
      },
      cs: {
        slug: 'generator-barevnych-palet',
        title: 'Generátor barevných palet',
        description: 'Vygenerujte 9 palet z jedné barvy: monochromatickou, komplementární, triádickou a další. Kódy HEX.',
      },
      sv: {
        slug: 'fargpalettgenerator',
        title: 'Färgpalettgenerator',
        description: 'Generera 9 paletter från en färg: monokromatisk, komplementär, triadisk och fler. HEX-koder.',
      },
      da: {
        slug: 'farvepaletgenerator',
        title: 'Farvepaletgenerator',
        description: 'Generér 9 paletter fra én farve: monokromatisk, komplementær, triadisk og flere. HEX-koder.',
      },
      no: {
        slug: 'fargepalettgenerator',
        title: 'Fargepalettgenerator',
        description: 'Generer 9 paletter fra én farge: monokromatisk, komplementær, triadisk og flere. HEX-koder.',
      },
      fi: {
        slug: 'varipaletti-generaattori',
        title: 'Väripalettien generaattori',
        description: 'Luo 9 palettia yhdestä väristä: monokromaattinen, komplementaarinen, triadinen ja muita. HEX-koodit.',
      },
      el: {
        slug: 'dimiourgia-paletas-chromaton',
        title: 'Δημιουργία παλέτας χρωμάτων',
        description: 'Δημιουργήστε 9 παλέτες από ένα χρώμα: μονοχρωματική, συμπληρωματική, τριαδική και άλλες. Κωδικοί HEX.',
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
        title: 'Generator kodów QR',
        description: 'Stwórz kod QR do strony, wizytówki vCard lub druku. Eksport PNG i SVG, bez rejestracji.',
      },
      en: {
        slug: 'free-qr-code-generator',
        title: 'Free QR code generator',
        description: 'Create a QR code for a website, vCard business card or print. Export PNG and SVG, no registration.',
      },
      de: {
        slug: 'kostenloser-qr-code-generator',
        title: 'Kostenloser QR-Code-Generator',
        description: 'Erstellen Sie einen QR-Code für Website, vCard-Visitenkarte oder Druck. Export PNG und SVG, ohne Registrierung.',
      },
      es: {
        slug: 'generador-de-codigos-qr-gratuito',
        title: 'Generador de códigos QR gratuito',
        description: 'Cree un código QR para sitio web, tarjeta vCard o impresión. Exporte PNG y SVG, sin registro.',
      },
      fr: {
        slug: 'generateur-de-codes-qr-gratuit',
        title: 'Générateur de codes QR gratuit',
        description: 'Créez un code QR pour site web, carte vCard ou impression. Export PNG et SVG, sans inscription.',
      },
      pt: {
        slug: 'gerador-de-codigos-qr-gratuito',
        title: 'Gerador de códigos QR gratuito',
        description: 'Crie um código QR para site, cartão vCard ou impressão. Exporte PNG e SVG, sem registo.',
      },
      it: {
        slug: 'generatore-di-codici-qr-gratuito',
        title: 'Generatore di codici QR gratuito',
        description: 'Crea un codice QR per sito web, biglietto vCard o stampa. Esporta PNG e SVG, senza registrazione.',
      },
      ro: {
        slug: 'generator-coduri-qr-gratuit',
        title: 'Generator de coduri QR gratuit',
        description: 'Creați un cod QR pentru site web, carte de vizită vCard sau tipărire. Export PNG și SVG, fără înregistrare.',
      },
      nl: {
        slug: 'gratis-qr-code-generator',
        title: 'Gratis QR-code generator',
        description: 'Maak een QR-code voor website, vCard-visitekaartje of drukwerk. Export PNG en SVG, zonder registratie.',
      },
      hu: {
        slug: 'ingyenes-qr-kod-generator',
        title: 'Ingyenes QR-kód generátor',
        description: 'Hozzon létre QR-kódot weboldalhoz, vCard-névjegyhez vagy nyomtatáshoz. Export PNG és SVG, regisztráció nélkül.',
      },
      cs: {
        slug: 'generator-qr-kodu-zdarma',
        title: 'Generátor QR kódu zdarma',
        description: 'Vytvořte QR kód pro web, vizitku vCard nebo tisk. Export PNG a SVG, bez registrace.',
      },
      sv: {
        slug: 'gratis-qr-kodgenerator',
        title: 'Gratis QR-kodgenerator',
        description: 'Skapa en QR-kod för webbplats, vCard-visitkort eller utskrift. Export PNG och SVG, utan registrering.',
      },
      da: {
        slug: 'gratis-qr-kode-generator',
        title: 'Gratis QR-kode-generator',
        description: 'Opret en QR-kode til hjemmeside, vCard-visitkort eller tryk. Eksport PNG og SVG, uden registrering.',
      },
      no: {
        slug: 'gratis-qr-kode-generator',
        title: 'Gratis QR-kode-generator',
        description: 'Lag en QR-kode for nettside, vCard-visittkort eller trykk. Eksport PNG og SVG, uten registrering.',
      },
      fi: {
        slug: 'ilmainen-qr-koodi-generaattori',
        title: 'Ilmainen QR-koodigeneraattori',
        description: 'Luo QR-koodi verkkosivulle, vCard-käyntikortille tai tulostukseen. Vie PNG ja SVG, ilman rekisteröitymistä.',
      },
      el: {
        slug: 'dorean-dimiourgia-kodikou-qr',
        title: 'Δωρεάν δημιουργία κωδικού QR',
        description: 'Δημιουργήστε κωδικό QR για ιστότοπο, κάρτα vCard ή εκτύπωση. Εξαγωγή PNG και SVG, χωρίς εγγραφή.',
      },
    },
  },
  // -------------------------------------------------------------------------
  // Image format converters (PL only)
  // -------------------------------------------------------------------------
  {
    key: 'pngToJpg',
    section: 'obrazy',
    icon: RiLoopLeftLine,
    image: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
    desktopOnly: false,
    locales: { pl: { slug: 'konwerter-png-na-jpg', title: 'Konwerter PNG na JPG', description: 'Zamień pliki PNG na JPG. Konwersja w przeglądarce, bez limitu plików i rejestracji.' } },
  },
  {
    key: 'jpgToPng',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    image: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
    desktopOnly: false,
    locales: { pl: { slug: 'konwerter-jpg-na-png', title: 'Konwerter JPG na PNG', description: 'Zamień pliki JPG na bezstratny PNG. Konwersja w przeglądarce, bez limitu.' } },
  },
  {
    key: 'webpToJpg',
    section: 'obrazy',
    icon: RiLoopLeftLine,
    image: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
    desktopOnly: false,
    locales: { pl: { slug: 'konwerter-webp-na-jpg', title: 'Konwerter WebP na JPG', description: 'Zamień pliki WebP na JPG. Kompatybilność z każdym programem i platformą.' } },
  },
  {
    key: 'webpToPng',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    image: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
    desktopOnly: false,
    locales: { pl: { slug: 'konwerter-webp-na-png', title: 'Konwerter WebP na PNG', description: 'Zamień pliki WebP na bezstratny PNG. Konwersja lokalna, bez wysyłania na serwer.' } },
  },
  {
    key: 'svgToPng',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    image: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
    desktopOnly: false,
    locales: { pl: { slug: 'konwerter-svg-na-png', title: 'Konwerter SVG na PNG', description: 'Zamień grafikę wektorową SVG na rastrowy PNG. Idealne do dokumentów i mediów społecznościowych.' } },
  },
  {
    key: 'svgToJpg',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    image: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
    desktopOnly: false,
    locales: { pl: { slug: 'konwerter-svg-na-jpg', title: 'Konwerter SVG na JPG', description: 'Zamień grafikę wektorową SVG na JPG. Mniejszy plik, pełna kompatybilność.' } },
  },
  {
    key: 'bmpToJpg',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    image: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
    desktopOnly: false,
    locales: { pl: { slug: 'konwerter-bmp-na-jpg', title: 'Konwerter BMP na JPG', description: 'Zamień nieskompresowane pliki BMP na lekki JPG. Redukcja rozmiaru bez utraty jakości.' } },
  },
  {
    key: 'bmpToPng',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    image: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
    desktopOnly: false,
    locales: { pl: { slug: 'konwerter-bmp-na-png', title: 'Konwerter BMP na PNG', description: 'Zamień pliki BMP na bezstratny PNG. Zachowaj jakość przy mniejszym rozmiarze.' } },
  },
  {
    key: 'gifToPng',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    image: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
    desktopOnly: false,
    locales: { pl: { slug: 'konwerter-gif-na-png', title: 'Konwerter GIF na PNG', description: 'Wyeksportuj pierwszą klatkę GIF-a jako statyczny obraz PNG. Bez utraty jakości.' } },
  },
  {
    key: 'gifToJpg',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    image: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
    desktopOnly: false,
    locales: { pl: { slug: 'konwerter-gif-na-jpg', title: 'Konwerter GIF na JPG', description: 'Wyeksportuj pierwszą klatkę GIF-a jako JPG. Mniejszy plik, szybsze ładowanie.' } },
  },
  {
    key: 'jpgToWebpSimple',
    section: 'obrazy',
    icon: RiLoopLeftLine,
    image: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
    desktopOnly: true,
    locales: { pl: { slug: 'konwerter-jpg-na-webp', title: 'Konwerter JPG na WebP', description: 'Zamień zdjęcia JPG na lekki WebP. Zmniejsz wagę obrazów nawet o 35%.' } },
  },
  {
    key: 'pngToWebpSimple',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    image: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
    desktopOnly: true,
    locales: { pl: { slug: 'konwerter-png-na-webp', title: 'Konwerter PNG na WebP', description: 'Zamień grafiki PNG na WebP. Mniejsze pliki przy zachowaniu przezroczystości.' } },
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Get the full href for a tool in a given locale, e.g. `/narzedzia/generator-palet-kolorow` */
export function getToolHref(key: ToolItemKey, locale: Locale): string {
  const tool = TOOL_REGISTRY.find((t) => t.key === key);
  if (!tool) return '#';
  const localeText = tool.locales[locale];
  if (!localeText) return '#';
  const config = LOCALE_CONFIG[locale];
  return `${config.toolsBasePath}/${localeText.slug}`;
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
  return TOOL_SECTIONS.filter((section) => section.locales[locale]).map((section) => ({
    key: section.key,
    title: section.locales[locale]!.title,
    icon: section.icon,
    items: TOOL_REGISTRY.filter((t) => t.section === section.key && t.locales[locale]).map((tool) => ({
      key: tool.key,
      href: getToolHref(tool.key, locale),
      title: tool.locales[locale]!.title,
      description: tool.locales[locale]!.description,
      image: tool.images?.[locale] ?? tool.image,
      icon: tool.icon,
    })),
  }));
}

/** Flat list of all tool items for a given locale (used in Footer, etc.) */
export function getToolsList(locale: Locale): ToolSectionItem[] {
  return TOOL_REGISTRY.filter((tool) => tool.locales[locale]).map((tool) => ({
    key: tool.key,
    href: getToolHref(tool.key, locale),
    title: tool.locales[locale]!.title,
    description: tool.locales[locale]!.description,
    image: tool.images?.[locale] ?? tool.image,
    icon: tool.icon,
  }));
}
