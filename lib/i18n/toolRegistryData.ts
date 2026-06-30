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
      nl: { title: 'Afbeeldingen & favicons' },
      cs: { title: 'Obrázky a favicony' },
      fi: { title: 'Kuvat ja faviconit' },
      el: { title: 'Εικόνες και favicon' },
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
      nl: { title: 'Tekst & SEO' },
      cs: { title: 'Text a SEO' },
      fi: { title: 'Teksti & SEO' },
      el: { title: 'Κείμενο & SEO' },
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
      nl: { title: 'E-mail & communicatie' },
      cs: { title: 'E-mail a komunikace' },
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
      nl: { title: 'Kleuren & toegankelijkheid' },
      cs: { title: 'Barvy a přístupnost' },
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
      nl: { title: 'Drukwerk & materialen' },
      cs: { title: 'Tisk a materiály' },
      fi: { title: 'Painatus ja materiaalit' },
      el: { title: 'Εκτύπωση & QR' },
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
      nl: { title: 'Beeldformaat-converters' },
      el: { title: 'Μετατροπείς μορφής' },
      cs: { title: 'Konvertory formátů' },
      fi: { title: 'Kuvaformaattimuuntimet' },
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
      nl: { title: 'Dataconverters' },
      cs: { title: 'Datové převodníky' },
      fi: { title: 'Datamuuntimet' },
      el: { title: 'Μετατροπείς δεδομένων' },
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
      nl: { title: 'Eenhedenconverters' },
      cs: { title: 'Převodníky jednotek' },
      fi: { title: 'Yksikkömuuntimet' },
      el: { title: 'Μετατροπείς μονάδων' },
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
      nl: {
        slug: 'afbeeldingeneditor',
        title: 'Afbeeldingeneditor',
        description:
          'Wijzig het formaat, snij bij en converteer uw afbeelding. Kant-en-klare formaten voor social media, ronde avatars, export JPG/PNG/WebP.',
      },
      cs: {
        slug: 'editor-obrazku',
        title: 'Editor obrázků',
        description:
          'Změňte velikost, ořízněte a převeďte obrázek. Hotové formáty pro sociální sítě, kulaté avatary, export JPG/PNG/WebP.',
      },
      fi: {
        slug: 'kuvaeditori',
        title: 'Kuvaeditori',
        description:
          'Muuta kokoa, rajaa ja muunna kuvasi. Valmiit muodot sosiaaliseen mediaan, pyöreät avatarit, vienti JPG/PNG/WebP.',
      },
      el: {
        slug: 'epexergasia-eikonas',
        title: 'Επεξεργασία εικόνας',
        description:
          'Αλλάξτε μέγεθος, περικόψτε και μετατρέψτε την εικόνα σας. Έτοιμες μορφές για κοινωνικά δίκτυα, στρογγυλά avatar, εξαγωγή JPG/PNG/WebP.',
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
      nl: {
        slug: 'gratis-favicon-generator',
        title: 'Favicon-generator',
        description:
          'Maak een complete favicon.ico-set voor uw website vanuit één afbeelding. Alle vereiste formaten, zonder registratie.',
      },
      cs: {
        slug: 'generator-favicon-zdarma',
        title: 'Generátor favicon',
        description:
          'Vytvořte kompletní sadu favicon.ico pro svůj web z jednoho obrázku. Všechny potřebné velikosti, bez přihlášení.',
      },
      fi: {
        slug: 'ilmainen-favicon-generaattori',
        title: 'Favicon-generaattori',
        description:
          'Luo täydellinen favicon.ico-setti verkkosivullesi yhdestä kuvasta. Kaikki tarvittavat koot, ilman kirjautumista.',
      },
      el: {
        slug: 'dorean-dimiourgia-favicon',
        title: 'Δημιουργία favicon',
        description:
          'Δημιουργήστε ένα πλήρες σετ favicon.ico για τον ιστότοπό σας από μία εικόνα. Όλα τα απαιτούμενα μεγέθη, χωρίς εγγραφή.',
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
      nl: {
        slug: 'meta-titel-beschrijving-checker',
        title: 'Meta-titel & beschrijving checker',
        description:
          'Controleer de titel- en beschrijvingslengte in pixels. Live Google-voorbeeld en optimalisatietips.',
      },
      cs: {
        slug: 'kontrola-meta-titulku-a-popisu',
        title: 'Kontrola meta titulku a popisu',
        description:
          'Zkontrolujte délku titulku a popisu v pixelech. Živý náhled v Google a tipy na optimalizaci.',
      },
      fi: {
        slug: 'meta-otsikko-ja-kuvaus-tarkistus',
        title: 'Meta-otsikon ja -kuvauksen tarkistus',
        description:
          'Tarkista otsikon ja kuvauksen pituus pikseleinä. Reaaliaikainen Google-esikatselu ja optimointivinkit.',
      },
      el: {
        slug: 'elegkhos-meta-titlou-kai-perigrafis',
        title: 'Έλεγχος meta τίτλου και περιγραφής',
        description:
          'Ελέγξτε το μήκος τίτλου και περιγραφής σε pixels. Ζωντανή προεπισκόπηση Google και συμβουλές βελτιστοποίησης.',
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
      nl: {
        slug: 'woorden-en-tekenteller',
        title: 'Woorden- & tekenteller',
        description:
          'Tel woorden, tekens, zinnen en leestijd. Controleer de leesbaarheid met de Flesch-Kincaid-score.',
      },
      cs: {
        slug: 'pocitadlo-slov-a-znaku',
        title: 'Počítadlo slov a znaků',
        description:
          'Spočítejte slova, znaky, věty a čas čtení. Zkontrolujte čitelnost pomocí skóre Flesch-Kincaid.',
      },
      fi: {
        slug: 'sana-ja-merkkilaskuri',
        title: 'Sana- ja merkkilaskuri',
        description:
          'Laske sanat, merkit, lauseet ja lukuaika. Tarkista luettavuus Flesch-Kincaid-pisteytyksellä.',
      },
      el: {
        slug: 'metritis-lexeon-kai-charaktiron',
        title: 'Μετρητής λέξεων και χαρακτήρων',
        description:
          'Μετρήστε λέξεις, χαρακτήρες, προτάσεις και χρόνο ανάγνωσης. Ελέγξτε την αναγνωσιμότητα με τη βαθμολογία Flesch-Kincaid.',
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
      nl: {
        slug: 'lorem-ipsum-generator',
        title: 'Lorem Ipsum-generator',
        description:
          'Gratis Lorem Ipsum-generator — 8 tekststijlen, paragrafen, zinnen of woorden. Kopieer met één klik.',
      },
      cs: {
        slug: 'generator-lorem-ipsum',
        title: 'Generátor Lorem Ipsum',
        description:
          'Bezplatný generátor Lorem Ipsum — 8 textových stylů, odstavce, věty nebo slova. Zkopírujte jedním kliknutím.',
      },
      fi: {
        slug: 'lorem-ipsum-generaattori',
        title: 'Lorem Ipsum -generaattori',
        description:
          'Ilmainen Lorem Ipsum -generaattori — 8 tekstityyliä, kappaleita, lauseita tai sanoja. Kopioi yhdellä klikkauksella.',
      },
      el: {
        slug: 'gennitra-lorem-ipsum',
        title: 'Γεννήτρια Lorem Ipsum',
        description:
          'Δωρεάν γεννήτρια Lorem Ipsum — 8 στυλ κειμένου, παραγράφους, προτάσεις ή λέξεις. Αντιγραφή με ένα κλικ.',
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
      nl: {
        slug: 'gratis-e-mailhandtekening-generator',
        title: 'E-mailhandtekening generator',
        description:
          'Maak een HTML e-mailhandtekening met volledige aanpassing. Kant-en-klare layouts, social media-iconen en code voor Gmail/Outlook.',
      },
      cs: {
        slug: 'generator-podpisu-emailu-zdarma',
        title: 'Generátor podpisu e-mailu',
        description:
          'Vytvořte HTML e-mailový podpis s plnou personalizací. Hotové rozložení, ikony sociálních sítí a kód pro Gmail/Outlook.',
      },
      fi: {
        slug: 'ilmainen-sahkopostiallekirjoitus-generaattori',
        title: 'Sähköpostiallekirjoitusgeneraattori',
        description:
          'Luo HTML-sähköpostiallekirjoitus täydellä mukauttamisella. Valmiit asettelut, sosiaalisen median kuvakkeet ja koodi Gmailiin/Outlookiin.',
      },
      el: {
        slug: 'dorean-dimiourgia-ypografis-email',
        title: 'Δημιουργία υπογραφής email',
        description:
          'Δημιουργήστε υπογραφή email HTML με πλήρη προσαρμογή. Έτοιμα layouts, εικονίδια κοινωνικών δικτύων και κώδικας για Gmail/Outlook.',
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
      nl: {
        slug: 'kleurcontrast-checker',
        title: 'Kleurcontrast checker',
        description:
          'Controleer tekst- en achtergrondcontrast volgens WCAG 2.1 AA en AAA. Automatische kleurcorrectie.',
      },
      cs: {
        slug: 'kontrola-kontrastu-barev',
        title: 'Kontrola kontrastu barev',
        description:
          'Zkontrolujte kontrast textu a pozadí podle WCAG 2.1 AA a AAA. Automatická korekce barev.',
      },
      fi: {
        slug: 'varikontrasti-tarkistus',
        title: 'Värikontrastin tarkistus',
        description:
          'Tarkista tekstin ja taustan kontrasti WCAG 2.1 AA ja AAA mukaan. Automaattinen värikorjaus.',
      },
      el: {
        slug: 'elegkhos-kontrast-chromaton',
        title: 'Έλεγχος αντίθεσης χρωμάτων',
        description:
          'Ελέγξτε την αντίθεση κειμένου και φόντου σύμφωνα με WCAG 2.1 AA και AAA. Αυτόματη διόρθωση χρωμάτων.',
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
      nl: {
        slug: 'kleurextractor-uit-afbeelding',
        title: 'Kleurextractor uit afbeelding',
        description:
          'Extraheer dominante kleuren uit een foto of logo. Kant-en-klare HEX- en RGB-codes om te kopiëren.',
      },
      cs: {
        slug: 'extraktor-barev-z-obrazku',
        title: 'Extraktor barev z obrázku',
        description:
          'Extrahujte dominantní barvy z fotografie nebo loga. Hotové HEX a RGB kódy ke zkopírování.',
      },
      fi: {
        slug: 'varien-poiminta-kuvasta',
        title: 'Värien poiminta kuvasta',
        description:
          'Poimi hallitsevat värit valokuvasta tai logosta. Valmiit HEX- ja RGB-koodit kopioitaviksi.',
      },
      el: {
        slug: 'exagogi-chromaton-apo-eikona',
        title: 'Εξαγωγή χρωμάτων από εικόνα',
        description:
          'Εξάγετε τα κυρίαρχα χρώματα από μια φωτογραφία ή λογότυπο. Έτοιμοι κωδικοί HEX και RGB για αντιγραφή.',
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
      nl: {
        slug: 'kleurpalettengenerator',
        title: 'Kleurpalettengenerator',
        description:
          'Genereer 9 paletten vanuit één kleur: monochromatisch, complementair, triadisch en meer. HEX-codes.',
      },
      cs: {
        slug: 'generator-barevnych-palet',
        title: 'Generátor barevných palet',
        description:
          'Vygenerujte 9 palet z jedné barvy: monochromatickou, komplementární, triádickou a další. Kódy HEX.',
      },
      fi: {
        slug: 'varipaletti-generaattori',
        title: 'Väripalettien generaattori',
        description:
          'Luo 9 palettia yhdestä väristä: monokromaattinen, komplementaarinen, triadinen ja muita. HEX-koodit.',
      },
      el: {
        slug: 'dimiourgia-paletas-chromaton',
        title: 'Δημιουργία παλέτας χρωμάτων',
        description:
          'Δημιουργήστε 9 παλέτες από ένα χρώμα: μονοχρωματική, συμπληρωματική, τριαδική και άλλες. Κωδικοί HEX.',
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
      nl: {
        slug: 'gratis-qr-code-generator',
        title: 'Gratis QR-code generator',
        description:
          'Maak een QR-code voor website, vCard-visitekaartje of drukwerk. Export PNG en SVG, zonder registratie.',
      },
      cs: {
        slug: 'generator-qr-kodu-zdarma',
        title: 'Generátor QR kódu zdarma',
        description:
          'Vytvořte QR kód pro web, vizitku vCard nebo tisk. Export PNG a SVG, bez registrace.',
      },
      fi: {
        slug: 'ilmainen-qr-koodi-generaattori',
        title: 'Ilmainen QR-koodigeneraattori',
        description:
          'Luo QR-koodi verkkosivulle, vCard-käyntikortille tai tulostukseen. Vie PNG ja SVG, ilman rekisteröitymistä.',
      },
      el: {
        slug: 'dorean-dimiourgia-kodikou-qr',
        title: 'Δωρεάν δημιουργία κωδικού QR',
        description:
          'Δημιουργήστε κωδικό QR για ιστότοπο, κάρτα vCard ή εκτύπωση. Εξαγωγή PNG και SVG, χωρίς εγγραφή.',
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
      nl: {
        slug: 'png-naar-jpg-converter',
        title: 'PNG naar JPG',
        description:
          'Converteer PNG-bestanden naar JPG in de browser. Zonder limiet, zonder registratie.',
      },
      el: {
        slug: 'metatropeas-png-se-jpg',
        title: 'PNG σε JPG',
        description:
          'Μετατρέψτε αρχεία PNG σε JPG στο πρόγραμμα περιήγησης. Χωρίς όριο, χωρίς εγγραφή.',
      },
      cs: {
        slug: 'prevodnik-png-na-jpg',
        title: 'PNG na JPG',
        description:
          'Převeďte soubory PNG na JPG v prohlížeči. Bez limitu, bez registrace.',
      },
      fi: {
        slug: 'png-jpg-muunnin',
        title: 'PNG JPG',
        description:
          'Muunna PNG-tiedostot JPG-muotoon selaimessa. Rajaton, ilman rekisteröitymistä.',
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
      nl: {
        slug: 'jpg-naar-png-converter',
        title: 'JPG naar PNG',
        description:
          'Converteer JPG-afbeeldingen naar verliesvrij PNG. Lokale verwerking in de browser.',
      },
      el: {
        slug: 'metatropeas-jpg-se-png',
        title: 'JPG σε PNG',
        description:
          'Μετατρέψτε εικόνες JPG σε PNG χωρίς απώλειες. Τοπική επεξεργασία στο πρόγραμμα περιήγησης.',
      },
      cs: {
        slug: 'prevodnik-jpg-na-png',
        title: 'JPG na PNG',
        description:
          'Převeďte obrázky JPG na bezeztrátové PNG. Lokální zpracování v prohlížeči.',
      },
      fi: {
        slug: 'jpg-png-muunnin',
        title: 'JPG PNG',
        description:
          'Muunna JPG-kuvat häviöttömään PNG-muotoon. Paikallinen käsittely selaimessa.',
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
      nl: {
        slug: 'webp-naar-jpg-converter',
        title: 'WebP naar JPG',
        description:
          'Converteer WebP-bestanden naar universeel compatibel JPG.',
      },
      el: {
        slug: 'metatropeas-webp-se-jpg',
        title: 'WebP σε JPG',
        description: 'Μετατρέψτε αρχεία WebP σε καθολικά συμβατό JPG.',
      },
      cs: {
        slug: 'prevodnik-webp-na-jpg',
        title: 'WebP na JPG',
        description: 'Převeďte soubory WebP na univerzálně kompatibilní JPG.',
      },
      fi: {
        slug: 'webp-jpg-muunnin',
        title: 'WebP JPG',
        description:
          'Muunna WebP-tiedostot yleisesti yhteensopivaän JPG-muotoon.',
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
      nl: {
        slug: 'webp-naar-png-converter',
        title: 'WebP naar PNG',
        description:
          'Converteer WebP-afbeeldingen naar verliesvrij PNG. Lokale verwerking.',
      },
      el: {
        slug: 'metatropeas-webp-se-png',
        title: 'WebP σε PNG',
        description:
          'Μετατρέψτε εικόνες WebP σε PNG χωρίς απώλειες. Τοπική μετατροπή.',
      },
      cs: {
        slug: 'prevodnik-webp-na-png',
        title: 'WebP na PNG',
        description:
          'Převeďte obrázky WebP na bezeztrátové PNG. Lokální zpracování.',
      },
      fi: {
        slug: 'webp-png-muunnin',
        title: 'WebP PNG',
        description:
          'Muunna WebP-kuvat häviöttömään PNG-muotoon. Paikallinen käsittely.',
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
      nl: {
        slug: 'svg-naar-png-converter',
        title: 'SVG naar PNG',
        description:
          'Converteer SVG-vectorafbeeldingen naar PNG. Ideaal voor documenten en social media.',
      },
      el: {
        slug: 'metatropeas-svg-se-png',
        title: 'SVG σε PNG',
        description:
          'Μετατρέψτε διανυσματικά SVG σε PNG. Ιδανικό για έγγραφα και κοινωνικά δίκτυα.',
      },
      cs: {
        slug: 'prevodnik-svg-na-png',
        title: 'SVG na PNG',
        description:
          'Převeďte vektorovou grafiku SVG na rastrové PNG. Ideální pro dokumenty a sociální sítě.',
      },
      fi: {
        slug: 'svg-png-muunnin',
        title: 'SVG PNG',
        description:
          'Muunna SVG-vektorigrafiikka PNG-muotoon. Ihanteellinen dokumentteihin ja sosiaaliseen mediaan.',
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
      nl: {
        slug: 'svg-naar-jpg-converter',
        title: 'SVG naar JPG',
        description:
          'Converteer SVG-afbeeldingen naar compact JPG. Kleiner bestand, volledige compatibiliteit.',
      },
      el: {
        slug: 'metatropeas-svg-se-jpg',
        title: 'SVG σε JPG',
        description:
          'Μετατρέψτε γραφικά SVG σε συμπαγές JPG. Μικρότερο αρχείο, πλήρης συμβατότητα.',
      },
      cs: {
        slug: 'prevodnik-svg-na-jpg',
        title: 'SVG na JPG',
        description:
          'Převeďte grafiku SVG na kompaktní JPG. Menší soubor, plná kompatibilita.',
      },
      fi: {
        slug: 'svg-jpg-muunnin',
        title: 'SVG JPG',
        description:
          'Muunna SVG-grafiikat kompaktiin JPG-muotoon. Pienempi tiedosto, täysi yhteensopivuus.',
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
      nl: {
        slug: 'bmp-naar-jpg-converter',
        title: 'BMP naar JPG',
        description:
          'Converteer BMP-bestanden naar lichtgewicht JPG. Drastische verkleining.',
      },
      el: {
        slug: 'metatropeas-bmp-se-jpg',
        title: 'BMP σε JPG',
        description:
          'Μετατρέψτε αρχεία BMP σε ελαφρύ JPG. Δραστική μείωση μεγέθους.',
      },
      cs: {
        slug: 'prevodnik-bmp-na-jpg',
        title: 'BMP na JPG',
        description:
          'Převeďte soubory BMP na lehké JPG. Drastické zmenšení velikosti.',
      },
      fi: {
        slug: 'bmp-jpg-muunnin',
        title: 'BMP JPG',
        description:
          'Muunna BMP-tiedostot kevyeen JPG-muotoon. Dramaattinen koon pienentyminen.',
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
      nl: {
        slug: 'bmp-naar-png-converter',
        title: 'BMP naar PNG',
        description:
          'Converteer BMP-afbeeldingen naar verliesvrij PNG. Kwaliteit behouden, kleiner bestand.',
      },
      el: {
        slug: 'metatropeas-bmp-se-png',
        title: 'BMP σε PNG',
        description:
          'Μετατρέψτε εικόνες BMP σε PNG χωρίς απώλειες. Ποιότητα διατηρημένη, μέγεθος μειωμένο.',
      },
      cs: {
        slug: 'prevodnik-bmp-na-png',
        title: 'BMP na PNG',
        description:
          'Převeďte obrázky BMP na bezeztrátové PNG. Kvalita zachována, velikost snížena.',
      },
      fi: {
        slug: 'bmp-png-muunnin',
        title: 'BMP PNG',
        description:
          'Muunna BMP-kuvat häviöttömään PNG-muotoon. Laatu säilyy, koko pienenee.',
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
      nl: {
        slug: 'gif-naar-png-converter',
        title: 'GIF naar PNG',
        description:
          'Exporteer het eerste frame van een GIF als statisch PNG. Zonder kwaliteitsverlies.',
      },
      el: {
        slug: 'metatropeas-gif-se-png',
        title: 'GIF σε PNG',
        description:
          'Εξαγωγή του πρώτου καρέ ενός GIF ως στατικό PNG. Χωρίς απώλεια ποιότητας.',
      },
      cs: {
        slug: 'prevodnik-gif-na-png',
        title: 'GIF na PNG',
        description:
          'Exportujte první snímek GIFu jako statické PNG. Bez ztráty kvality.',
      },
      fi: {
        slug: 'gif-png-muunnin',
        title: 'GIF PNG',
        description:
          'Vie GIF-kuvan ensimmäinen ruutu staattisena PNG-kuvana. Ilman laadun heikkenemistä.',
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
      nl: {
        slug: 'gif-naar-jpg-converter',
        title: 'GIF naar JPG',
        description:
          'Exporteer het eerste frame van een GIF als compact JPG. Kleiner bestand.',
      },
      el: {
        slug: 'metatropeas-gif-se-jpg',
        title: 'GIF σε JPG',
        description:
          'Εξαγωγή του πρώτου καρέ ενός GIF ως συμπαγές JPG. Μικρότερο αρχείο.',
      },
      cs: {
        slug: 'prevodnik-gif-na-jpg',
        title: 'GIF na JPG',
        description:
          'Exportujte první snímek GIFu jako kompaktní JPG. Menší soubor.',
      },
      fi: {
        slug: 'gif-jpg-muunnin',
        title: 'GIF JPG',
        description:
          'Vie GIF-kuvan ensimmäinen ruutu kompaktina JPG-kuvana. Pienempi tiedosto.',
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
      nl: {
        slug: 'jpg-naar-webp-converter',
        title: 'JPG naar WebP',
        description:
          "Converteer JPG-foto's naar lichtgewicht WebP. Bespaar tot 35% bestandsgrootte.",
      },
      el: {
        slug: 'metatropeas-jpg-se-webp',
        title: 'JPG σε WebP',
        description:
          'Μετατρέψτε φωτογραφίες JPG σε ελαφρύ WebP. Μείωση βάρους έως 35%.',
      },
      cs: {
        slug: 'prevodnik-jpg-na-webp',
        title: 'JPG na WebP',
        description:
          'Převeďte fotky JPG na lehké WebP. Snižte váhu obrázků až o 35%.',
      },
      fi: {
        slug: 'jpg-webp-muunnin',
        title: 'JPG WebP',
        description:
          'Muunna JPG-valokuvat kevyeen WebP-muotoon. Pienennä tiedostokokoa jopa 35%.',
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
      nl: {
        slug: 'png-naar-webp-converter',
        title: 'PNG naar WebP',
        description:
          'Converteer PNG-afbeeldingen naar WebP. Kleinere bestanden met behoud van transparantie.',
      },
      el: {
        slug: 'metatropeas-png-se-webp',
        title: 'PNG σε WebP',
        description:
          'Μετατρέψτε γραφικά PNG σε WebP. Μικρότερα αρχεία διατηρώντας τη διαφάνεια.',
      },
      cs: {
        slug: 'prevodnik-png-na-webp',
        title: 'PNG na WebP',
        description:
          'Převeďte grafiku PNG na WebP. Menší soubory se zachováním průhlednosti.',
      },
      fi: {
        slug: 'png-webp-muunnin',
        title: 'PNG WebP',
        description:
          'Muunna PNG-grafiikat WebP-muotoon. Pienemmät tiedostot läpinäkyvyys säilyttäen.',
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
      nl: {
        slug: 'svg-naar-webp-converter',
        title: 'SVG naar WebP',
        description:
          'Converteer SVG-afbeeldingen naar lichtgewicht WebP. Ideaal voor websites en social media.',
      },
      cs: {
        slug: 'prevodnik-svg-na-webp',
        title: 'SVG na WebP',
        description:
          'Převeďte grafiku SVG na lehke WebP. Ideální pro weby a socialni site.',
      },
      fi: {
        slug: 'svg-webp-muunnin',
        title: 'SVG WebP',
        description:
          'Muunna SVG-grafiikat kevyeen WebP-muotoon. Ihanteellinen verkkosivuille ja sosiaaliseen mediaan.',
      },
      el: {
        slug: 'metatropeas-svg-se-webp',
        title: 'SVG σε WebP',
        description:
          'Μετατρέψτε γραφικά SVG σε ελαφρυ WebP. Ιδανικο για ιστοσελιδες και κοινωνικα δικτυα.',
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
      nl: {
        slug: 'gif-naar-webp-converter',
        title: 'GIF naar WebP',
        description:
          'Exporteer het eerste GIF-frame als lichtgewicht WebP. Kleiner bestand, sneller laden.',
      },
      cs: {
        slug: 'prevodnik-gif-na-webp',
        title: 'GIF na WebP',
        description:
          'Exportujte první snímek GIFu jako lehke WebP. Mensi soubor, rychlejsi nacitani.',
      },
      fi: {
        slug: 'gif-webp-muunnin',
        title: 'GIF WebP',
        description:
          'Vie GIF-kuvan ensimmainen ruutu kevyena WebP-kuvana. Pienempi tiedosto, nopeampi lataus.',
      },
      el: {
        slug: 'metatropeas-gif-se-webp',
        title: 'GIF σε WebP',
        description:
          'Εξαγωγη του πρωτου καρε GIF ως ελαφρυ WebP. Μικροτερο αρχειο, ταχυτερη φορτωση.',
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
      nl: {
        slug: 'bmp-naar-webp-converter',
        title: 'BMP naar WebP',
        description:
          'Converteer BMP-bestanden naar lichtgewicht WebP. Tot 95% kleiner bestandsgrootte.',
      },
      cs: {
        slug: 'prevodnik-bmp-na-webp',
        title: 'BMP na WebP',
        description:
          'Převeďte soubory BMP na lehke WebP. Snizeni velikosti az o 95%.',
      },
      fi: {
        slug: 'bmp-webp-muunnin',
        title: 'BMP WebP',
        description:
          'Muunna BMP-tiedostot kevyeen WebP-muotoon. Jopa 95% pienempi tiedostokoko.',
      },
      el: {
        slug: 'metatropeas-bmp-se-webp',
        title: 'BMP σε WebP',
        description:
          'Μετατρέψτε αρχεια BMP σε ελαφρυ WebP. Μειωση μεγεθους εως 95%.',
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
      nl: {
        slug: 'avif-naar-jpg-converter',
        title: 'AVIF naar JPG',
        description:
          'Converteer AVIF-bestanden naar universeel JPG. Compatibel met elk programma en platform.',
      },
      cs: {
        slug: 'prevodnik-avif-na-jpg',
        title: 'AVIF na JPG',
        description:
          'Převeďte soubory AVIF na univerzální JPG. Kompatibilní s každým programem.',
      },
      fi: {
        slug: 'avif-jpg-muunnin',
        title: 'AVIF JPG',
        description:
          'Muunna AVIF-tiedostot yleiseen JPG-muotoon. Yhteensopiva kaikkien ohjelmien kanssa.',
      },
      el: {
        slug: 'metatropeas-avif-se-jpg',
        title: 'AVIF σε JPG',
        description:
          'Μετατρέψτε αρχεια AVIF σε καθολικο JPG. Συμβατό με κάθε πρόγραμμα και πλατφορμα.',
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
      nl: {
        slug: 'avif-naar-png-converter',
        title: 'AVIF naar PNG',
        description:
          'Converteer AVIF-bestanden naar verliesvrij PNG. Volledige kwaliteit en transparantie behouden.',
      },
      cs: {
        slug: 'prevodnik-avif-na-png',
        title: 'AVIF na PNG',
        description:
          'Převeďte soubory AVIF na bezztratove PNG. Zachovani plne kvality a pruhlednosti.',
      },
      fi: {
        slug: 'avif-png-muunnin',
        title: 'AVIF PNG',
        description:
          'Muunna AVIF-tiedostot haviottomaan PNG-muotoon. Taysi laatu ja lapinakyvyys sailytetty.',
      },
      el: {
        slug: 'metatropeas-avif-se-png',
        title: 'AVIF σε PNG',
        description:
          'Μετατρέψτε αρχεια AVIF σε PNG χωρις απωλειες. Διατηρηση πληρους ποιότητας.',
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
      nl: {
        slug: 'avif-naar-webp-converter',
        title: 'AVIF naar WebP',
        description:
          'Converteer AVIF-bestanden naar WebP. Brede compatibiliteit bij klein bestandsformaat.',
      },
      cs: {
        slug: 'prevodnik-avif-na-webp',
        title: 'AVIF na WebP',
        description:
          'Převeďte soubory AVIF na WebP. Siroka kompatibilita pri male velikosti.',
      },
      fi: {
        slug: 'avif-webp-muunnin',
        title: 'AVIF WebP',
        description:
          'Muunna AVIF-tiedostot WebP-muotoon. Laaja yhteensopivuus pienella tiedostokoolla.',
      },
      el: {
        slug: 'metatropeas-avif-se-webp',
        title: 'AVIF σε WebP',
        description:
          'Μετατρέψτε αρχεια AVIF σε WebP. Ευρεια συμβατότητα με μικρο μεγεθος.',
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
      nl: {
        slug: 'heic-naar-jpg-converter',
        title: 'HEIC naar JPG',
        description:
          'Converteer iPhone HEIC-fotos naar universeel JPG. Zonder registratie, zonder upload.',
      },
      cs: {
        slug: 'prevodnik-heic-na-jpg',
        title: 'HEIC na JPG',
        description:
          'Převeďte fotky HEIC z iPhonu na univerzální JPG. Bez registrace, bez nahravani na server.',
      },
      fi: {
        slug: 'heic-jpg-muunnin',
        title: 'HEIC JPG',
        description:
          'Muunna iPhone HEIC-valokuvat yleiseen JPG-muotoon. Ei rekisteroitymista, ei lahetysta palvelimelle.',
      },
      el: {
        slug: 'metatropeas-heic-se-jpg',
        title: 'HEIC σε JPG',
        description:
          'Μετατρέψτε φωτογραφίες HEIC απο iPhone σε JPG. Χωρις εγγραφη, χωρις αποστολη στο server.',
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
      nl: {
        slug: 'heic-naar-png-converter',
        title: 'HEIC naar PNG',
        description:
          'Converteer iPhone HEIC-fotos naar verliesvrij PNG. Volledige kwaliteit en transparantie.',
      },
      cs: {
        slug: 'prevodnik-heic-na-png',
        title: 'HEIC na PNG',
        description:
          'Převeďte fotky HEIC z iPhonu na bezztratove PNG. Plna kvalita a pruhlednost.',
      },
      fi: {
        slug: 'heic-png-muunnin',
        title: 'HEIC PNG',
        description:
          'Muunna iPhone HEIC-valokuvat haviottomaan PNG-muotoon. Taysi laatu ja lapinakyvyys.',
      },
      el: {
        slug: 'metatropeas-heic-se-png',
        title: 'HEIC σε PNG',
        description:
          'Μετατρέψτε φωτογραφίες HEIC απο iPhone σε PNG χωρις απωλειες. Πληρης ποιοτητα.',
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
      nl: {
        slug: 'heic-naar-webp-converter',
        title: 'HEIC naar WebP',
        description:
          'Converteer iPhone HEIC-fotos naar lichtgewicht WebP. Kleiner bestand, sneller laden.',
      },
      cs: {
        slug: 'prevodnik-heic-na-webp',
        title: 'HEIC na WebP',
        description:
          'Převeďte fotky HEIC z iPhonu na lehke WebP. Mensi velikost, rychlejsi nacitani.',
      },
      fi: {
        slug: 'heic-webp-muunnin',
        title: 'HEIC WebP',
        description:
          'Muunna iPhone HEIC-valokuvat kevyeen WebP-muotoon. Pienempi koko, nopeampi lataus.',
      },
      el: {
        slug: 'metatropeas-heic-se-webp',
        title: 'HEIC σε WebP',
        description:
          'Μετατρέψτε φωτογραφίες HEIC απο iPhone σε ελαφρυ WebP. Μικροτερο μεγεθος.',
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
      nl: {
        slug: 'tiff-naar-jpg-converter',
        title: 'TIFF naar JPG',
        description:
          'Converteer TIFF-bestanden naar compact JPG. Ideaal voor scans en fotoarchieven.',
      },
      cs: {
        slug: 'prevodnik-tiff-na-jpg',
        title: 'TIFF na JPG',
        description:
          'Převeďte soubory TIFF na kompaktni JPG. Ideální pro skeny a fotoarchivy.',
      },
      fi: {
        slug: 'tiff-jpg-muunnin',
        title: 'TIFF JPG',
        description:
          'Muunna TIFF-tiedostot kompaktiin JPG-muotoon. Ihanteellinen skannauksille ja kuva-arkistoille.',
      },
      el: {
        slug: 'metatropeas-tiff-se-jpg',
        title: 'TIFF σε JPG',
        description:
          'Μετατρέψτε αρχεια TIFF σε συμπαγες JPG. Ιδανικο για σαρωσεις και αρχεια φωτογραφιων.',
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
      nl: {
        slug: 'tiff-naar-png-converter',
        title: 'TIFF naar PNG',
        description:
          'Converteer TIFF-bestanden naar verliesvrij PNG. Behoud volledige kwaliteit van scans.',
      },
      cs: {
        slug: 'prevodnik-tiff-na-png',
        title: 'TIFF na PNG',
        description:
          'Převeďte soubory TIFF na bezztratove PNG. Zachovejte plnou kvalitu skenu.',
      },
      fi: {
        slug: 'tiff-png-muunnin',
        title: 'TIFF PNG',
        description:
          'Muunna TIFF-tiedostot haviottomaan PNG-muotoon. Sailyta skannausten taysi laatu.',
      },
      el: {
        slug: 'metatropeas-tiff-se-png',
        title: 'TIFF σε PNG',
        description:
          'Μετατρέψτε αρχεια TIFF σε PNG χωρις απωλειες. Διατηρηση ποιότητας σαρωσεων.',
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
      nl: {
        slug: 'tiff-naar-webp-converter',
        title: 'TIFF naar WebP',
        description:
          'Converteer TIFF-bestanden naar lichtgewicht WebP. Enorme reductie met behoud van kwaliteit.',
      },
      cs: {
        slug: 'prevodnik-tiff-na-webp',
        title: 'TIFF na WebP',
        description:
          'Převeďte soubory TIFF na lehke WebP. Masivni snizeni velikosti se zachovanim kvality.',
      },
      fi: {
        slug: 'tiff-webp-muunnin',
        title: 'TIFF WebP',
        description:
          'Muunna TIFF-tiedostot kevyeen WebP-muotoon. Valtava kokovahenema laadun sailyttaen.',
      },
      el: {
        slug: 'metatropeas-tiff-se-webp',
        title: 'TIFF σε WebP',
        description:
          'Μετατρέψτε αρχεια TIFF σε ελαφρυ WebP. Τεραστια μειωση μεγεθους με διατηρηση ποιότητας.',
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
      nl: {
        slug: 'jpg-naar-avif-converter',
        title: 'JPG naar AVIF',
        description:
          "Converteer JPG-foto's naar modern AVIF. Tot 50% betere compressie dän JPG met behoud van kwaliteit.",
      },
      cs: {
        slug: 'prevodnik-jpg-na-avif',
        title: 'JPG na AVIF',
        description:
          'Převeďte fotky JPG na moderní AVIF. Az o 50% lepší komprese než JPG pri zachování kvality.',
      },
      fi: {
        slug: 'jpg-avif-muunnin',
        title: 'JPG AVIF',
        description:
          'Muunna JPG-kuvat moderniin AVIF-muotoon. Jopa 50% parempi pakkaus kuin JPG.',
      },
      el: {
        slug: 'metatropeas-jpg-se-avif',
        title: 'JPG σε AVIF',
        description:
          'Μετατρέψτε φωτογραφίες JPG σε σύγχρονο AVIF. Εως 50% καλύτερη συμπίεση απο JPG.',
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
      nl: {
        slug: 'png-naar-avif-converter',
        title: 'PNG naar AVIF',
        description:
          'Converteer PNG-afbeeldingen naar AVIF met transparantie-ondersteuning. Aanzienlijk kleinere bestanden.',
      },
      cs: {
        slug: 'prevodnik-png-na-avif',
        title: 'PNG na AVIF',
        description:
          'Převeďte grafiku PNG na AVIF s podporou pruhlednosti. Vyrazne mensi soubory.',
      },
      fi: {
        slug: 'png-avif-muunnin',
        title: 'PNG AVIF',
        description:
          'Muunna PNG-grafiikat AVIF-muotoon lapinakvyystuella. Huomattavasti pienemmat tiedostot.',
      },
      el: {
        slug: 'metatropeas-png-se-avif',
        title: 'PNG σε AVIF',
        description:
          'Μετατρέψτε γραφικά PNG σε AVIF με υποστηριξη διαφάνειας. Σημαντικα μικρότερα αρχεια.',
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
      nl: {
        slug: 'webp-naar-avif-converter',
        title: 'WebP naar AVIF',
        description:
          'Converteer WebP-bestanden naar AVIF. Nog betere compressie in een modern formaat.',
      },
      cs: {
        slug: 'prevodnik-webp-na-avif',
        title: 'WebP na AVIF',
        description:
          'Převeďte soubory WebP na AVIF. Jeste lepší komprese v modernim formatu.',
      },
      fi: {
        slug: 'webp-avif-muunnin',
        title: 'WebP AVIF',
        description:
          'Muunna WebP-tiedostot AVIF-muotoon. Viela parempi pakkaus modernissa formaatissa.',
      },
      el: {
        slug: 'metatropeas-webp-se-avif',
        title: 'WebP σε AVIF',
        description:
          'Μετατρέψτε αρχεια WebP σε AVIF. Ακομη καλύτερη συμπίεση σε συγχρονη μορφή.',
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
      nl: {
        slug: 'svg-naar-avif-converter',
        title: 'SVG naar AVIF',
        description:
          'Converteer vector SVG-afbeeldingen naar compact AVIF-rasterformaat.',
      },
      cs: {
        slug: 'prevodnik-svg-na-avif',
        title: 'SVG na AVIF',
        description:
          'Převeďte vektorovou grafiku SVG na kompaktni rastrovy format AVIF.',
      },
      fi: {
        slug: 'svg-avif-muunnin',
        title: 'SVG AVIF',
        description:
          'Muunna vektori-SVG-grafiikat kompaktiin AVIF-rasterimuotoon.',
      },
      el: {
        slug: 'metatropeas-svg-se-avif',
        title: 'SVG σε AVIF',
        description:
          'Μετατρέψτε διανυσματικα γραφικά SVG σε συμπαγη μορφή raster AVIF.',
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
      nl: {
        slug: 'bmp-naar-avif-converter',
        title: 'BMP naar AVIF',
        description:
          'Converteer ongecomprimeerde BMP-bestanden naar ultracompact AVIF.',
      },
      cs: {
        slug: 'prevodnik-bmp-na-avif',
        title: 'BMP na AVIF',
        description:
          'Převeďte nekomprimované soubory BMP na ultrakompaktní AVIF.',
      },
      fi: {
        slug: 'bmp-avif-muunnin',
        title: 'BMP AVIF',
        description:
          'Muunna pakkaamattomat BMP-tiedostot ultrakompaktiin AVIF-muotoon.',
      },
      el: {
        slug: 'metatropeas-bmp-se-avif',
        title: 'BMP σε AVIF',
        description: 'Μετατρέψτε ασυμπίεστα αρχεια BMP σε υπερσυμπαγες AVIF.',
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
      nl: {
        slug: 'gif-naar-avif-converter',
        title: 'GIF naar AVIF',
        description:
          'Converteer het eerste GIF-frame naar statisch AVIF-beeld met uitstekende compressie.',
      },
      cs: {
        slug: 'prevodnik-gif-na-avif',
        title: 'GIF na AVIF',
        description:
          'Převeďte první snimek GIF na staticky obraz AVIF s vynikajici kompresi.',
      },
      fi: {
        slug: 'gif-avif-muunnin',
        title: 'GIF AVIF',
        description:
          'Muunna GIF:n ensimmainen ruutu staattiseksi AVIF-kuvaksi erinomaisella pakkauksella.',
      },
      el: {
        slug: 'metatropeas-gif-se-avif',
        title: 'GIF σε AVIF',
        description:
          'Μετατρέψτε το πρωτο καρε GIF σε στατικη εικονα AVIF με εξαιρετική συμπίεση.',
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
      nl: {
        slug: 'heic-naar-avif-converter',
        title: 'HEIC naar AVIF',
        description: "Converteer iPhone HEIC-foto's naar modern AVIF-formaat.",
      },
      cs: {
        slug: 'prevodnik-heic-na-avif',
        title: 'HEIC na AVIF',
        description: 'Převeďte fotky HEIC z iPhonu na moderní formát AVIF.',
      },
      fi: {
        slug: 'heic-avif-muunnin',
        title: 'HEIC AVIF',
        description: 'Muunna iPhonen HEIC-kuvat moderniin AVIF-muotoon.',
      },
      el: {
        slug: 'metatropeas-heic-se-avif',
        title: 'HEIC σε AVIF',
        description:
          'Μετατρέψτε φωτογραφίες HEIC του iPhone σε συγχρονη μορφή AVIF.',
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
      nl: {
        slug: 'tiff-naar-avif-converter',
        title: 'TIFF naar AVIF',
        description:
          'Converteer TIFF-bestanden naar modern AVIF. Enorme bestandsgrootte-reductie.',
      },
      cs: {
        slug: 'prevodnik-tiff-na-avif',
        title: 'TIFF na AVIF',
        description:
          'Převeďte soubory TIFF na moderní AVIF. Masivni snizeni velikosti souboru.',
      },
      fi: {
        slug: 'tiff-avif-muunnin',
        title: 'TIFF AVIF',
        description:
          'Muunna TIFF-tiedostot moderniin AVIF-muotoon. Valtava tiedostokoon pienennys.',
      },
      el: {
        slug: 'metatropeas-tiff-se-avif',
        title: 'TIFF σε AVIF',
        description:
          'Μετατρέψτε αρχεια TIFF σε σύγχρονο AVIF. Τεραστια μειωση μεγεθους αρχειου.',
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
      nl: {
        slug: 'jpg-naar-gif-converter',
        title: 'JPG naar GIF',
        description:
          "Converteer JPG-foto's naar GIF-formaat. Perfect voor eenvoudige afbeeldingen en iconen.",
      },
      cs: {
        slug: 'prevodnik-jpg-na-gif',
        title: 'JPG na GIF',
        description:
          'Převeďte fotky JPG na format GIF. Ideální pro jednoduchou grafiku a ikony.',
      },
      fi: {
        slug: 'jpg-gif-muunnin',
        title: 'JPG GIF',
        description:
          'Muunna JPG-kuvat GIF-muotoon. Taydellinen yksinkertaisille grafiikoille ja kuvakkeille.',
      },
      el: {
        slug: 'metatropeas-jpg-se-gif',
        title: 'JPG σε GIF',
        description:
          'Μετατρέψτε φωτογραφίες JPG σε μορφή GIF. Ιδανικο για απλα γραφικά και εικονιδια.',
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
      nl: {
        slug: 'png-naar-gif-converter',
        title: 'PNG naar GIF',
        description:
          'Converteer PNG-afbeeldingen naar GIF. Ideaal voor eenvoudige iconen en afbeeldingen.',
      },
      cs: {
        slug: 'prevodnik-png-na-gif',
        title: 'PNG na GIF',
        description:
          'Převeďte grafiku PNG na GIF. Ideální pro jednoduche ikony a grafiku.',
      },
      fi: {
        slug: 'png-gif-muunnin',
        title: 'PNG GIF',
        description:
          'Muunna PNG-grafiikat GIF-muotoon. Ihanteellinen yksinkertaisille kuvakkeille ja grafiikoille.',
      },
      el: {
        slug: 'metatropeas-png-se-gif',
        title: 'PNG σε GIF',
        description:
          'Μετατρέψτε γραφικά PNG σε GIF. Ιδανικο για απλα εικονιδια και γραφικά.',
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
      nl: {
        slug: 'webp-naar-gif-converter',
        title: 'WebP naar GIF',
        description:
          'Converteer WebP-afbeeldingen naar GIF-formaat voor maximale compatibiliteit.',
      },
      cs: {
        slug: 'prevodnik-webp-na-gif',
        title: 'WebP na GIF',
        description:
          'Převeďte obrazky WebP na format GIF pro maximalni kompatibilitu.',
      },
      fi: {
        slug: 'webp-gif-muunnin',
        title: 'WebP GIF',
        description:
          'Muunna WebP-kuvat GIF-muotoon maksimaalisen yhteensopivuuden saavuttamiseksi.',
      },
      el: {
        slug: 'metatropeas-webp-se-gif',
        title: 'WebP σε GIF',
        description:
          'Μετατρέψτε εικόνες WebP σε μορφή GIF για μέγιστη συμβατότητα.',
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
      nl: {
        slug: 'svg-naar-gif-converter',
        title: 'SVG naar GIF',
        description:
          'Converteer vector SVG-afbeeldingen naar GIF-rasterformaat.',
      },
      cs: {
        slug: 'prevodnik-svg-na-gif',
        title: 'SVG na GIF',
        description: 'Převeďte vektorovou grafiku SVG na rastrovy format GIF.',
      },
      fi: {
        slug: 'svg-gif-muunnin',
        title: 'SVG GIF',
        description: 'Muunna vektori-SVG-grafiikat GIF-rasterimuotoon.',
      },
      el: {
        slug: 'metatropeas-svg-se-gif',
        title: 'SVG σε GIF',
        description: 'Μετατρέψτε διανυσματικα γραφικά SVG σε μορφή raster GIF.',
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
      nl: {
        slug: 'bmp-naar-gif-converter',
        title: 'BMP naar GIF',
        description:
          'Converteer ongecomprimeerde BMP-bestanden naar lichtgewicht GIF.',
      },
      cs: {
        slug: 'prevodnik-bmp-na-gif',
        title: 'BMP na GIF',
        description: 'Převeďte nekomprimované soubory BMP na lehky GIF.',
      },
      fi: {
        slug: 'bmp-gif-muunnin',
        title: 'BMP GIF',
        description: 'Muunna pakkaamattomat BMP-tiedostot kevyeen GIF-muotoon.',
      },
      el: {
        slug: 'metatropeas-bmp-se-gif',
        title: 'BMP σε GIF',
        description: 'Μετατρέψτε ασυμπίεστα αρχεια BMP σε ελαφρυ GIF.',
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
      nl: {
        slug: 'jpg-naar-tiff-converter',
        title: 'JPG naar TIFF',
        description:
          "Converteer JPG-foto's naar lossless TIFF. Voor afdrukken en archivering.",
      },
      cs: {
        slug: 'prevodnik-jpg-na-tiff',
        title: 'JPG na TIFF',
        description:
          'Převeďte fotky JPG na bezztrátový TIFF. Pro tisk a archivaci.',
      },
      fi: {
        slug: 'jpg-tiff-muunnin',
        title: 'JPG TIFF',
        description:
          'Muunna JPG-kuvat haviottomaan TIFF-muotoon. Tulostukseen ja arkistointiin.',
      },
      el: {
        slug: 'metatropeas-jpg-se-tiff',
        title: 'JPG σε TIFF',
        description:
          'Μετατρέψτε φωτογραφίες JPG σε TIFF χωρις απωλειες. Για εκτύπωση και αρχειοθέτηση.',
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
      nl: {
        slug: 'png-naar-tiff-converter',
        title: 'PNG naar TIFF',
        description:
          'Converteer PNG-afbeeldingen naar professioneel TIFF-formaat.',
      },
      cs: {
        slug: 'prevodnik-png-na-tiff',
        title: 'PNG na TIFF',
        description: 'Převeďte grafiku PNG na profesionální formát TIFF.',
      },
      fi: {
        slug: 'png-tiff-muunnin',
        title: 'PNG TIFF',
        description: 'Muunna PNG-grafiikat ammattimaiseen TIFF-muotoon.',
      },
      el: {
        slug: 'metatropeas-png-se-tiff',
        title: 'PNG σε TIFF',
        description: 'Μετατρέψτε γραφικά PNG σε επαγγελματική μορφή TIFF.',
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
      nl: {
        slug: 'webp-naar-tiff-converter',
        title: 'WebP naar TIFF',
        description:
          'Converteer WebP-afbeeldingen naar professioneel TIFF voor afdrukken en archivering.',
      },
      cs: {
        slug: 'prevodnik-webp-na-tiff',
        title: 'WebP na TIFF',
        description:
          'Převeďte obrazky WebP na profesionální TIFF pro tisk a archivaci.',
      },
      fi: {
        slug: 'webp-tiff-muunnin',
        title: 'WebP TIFF',
        description:
          'Muunna WebP-kuvat ammattimaiseen TIFF-muotoon tulostukseen ja arkistointiin.',
      },
      el: {
        slug: 'metatropeas-webp-se-tiff',
        title: 'WebP σε TIFF',
        description:
          'Μετατρέψτε εικόνες WebP σε επαγγελματικο TIFF για εκτύπωση και αρχειοθέτηση.',
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
      nl: {
        slug: 'svg-naar-tiff-converter',
        title: 'SVG naar TIFF',
        description:
          'Converteer vector SVG-afbeeldingen naar hoogwaardig TIFF-raster.',
      },
      cs: {
        slug: 'prevodnik-svg-na-tiff',
        title: 'SVG na TIFF',
        description:
          'Převeďte vektorovou grafiku SVG na kvalitni rastrovy TIFF.',
      },
      fi: {
        slug: 'svg-tiff-muunnin',
        title: 'SVG TIFF',
        description:
          'Muunna vektori-SVG-grafiikat korkealaatuiseen TIFF-rasterimuotoon.',
      },
      el: {
        slug: 'metatropeas-svg-se-tiff',
        title: 'SVG σε TIFF',
        description:
          'Μετατρέψτε διανυσματικα γραφικά SVG σε υψηλής ποιότητας raster TIFF.',
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
      nl: {
        slug: 'bmp-naar-tiff-converter',
        title: 'BMP naar TIFF',
        description:
          'Converteer BMP-bestanden naar professioneel TIFF-formaat voor afdrukken.',
      },
      cs: {
        slug: 'prevodnik-bmp-na-tiff',
        title: 'BMP na TIFF',
        description:
          'Převeďte soubory BMP na profesionální formát TIFF pro tisk.',
      },
      fi: {
        slug: 'bmp-tiff-muunnin',
        title: 'BMP TIFF',
        description:
          'Muunna BMP-tiedostot ammattimaiseen TIFF-muotoon tulostusta varten.',
      },
      el: {
        slug: 'metatropeas-bmp-se-tiff',
        title: 'BMP σε TIFF',
        description:
          'Μετατρέψτε αρχεια BMP σε επαγγελματική μορφή TIFF για εκτύπωση.',
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
      nl: {
        slug: 'avif-naar-tiff-converter',
        title: 'AVIF naar TIFF',
        description:
          'Converteer AVIF-bestanden naar TIFF-formaat. Gratis, privé en onbeperkt.',
      },
      cs: {
        slug: 'prevodnik-avif-na-tiff',
        title: 'AVIF na TIFF',
        description:
          'Převeďte soubory AVIF do formátu TIFF. Zdarma, soukromě a bez omezení.',
      },
      fi: {
        slug: 'avif-tiff-muunnin',
        title: 'AVIF TIFF',
        description:
          'Muunna AVIF-tiedostot TIFF-muotoon. Ilmainen, yksityinen ja rajoittamaton.',
      },
      el: {
        slug: 'metatropeas-avif-se-tiff',
        title: 'AVIF σε TIFF',
        description:
          'Μετατρέψτε αρχεία AVIF σε μορφή TIFF. Δωρεάν, ιδιωτικό και απεριόριστο.',
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
      nl: {
        slug: 'heic-naar-tiff-converter',
        title: 'HEIC naar TIFF',
        description:
          "Converteer iPhone HEIC-foto's naar professioneel TIFF-formaat.",
      },
      cs: {
        slug: 'prevodnik-heic-na-tiff',
        title: 'HEIC na TIFF',
        description:
          'Převeďte fotky HEIC z iPhonu na profesionální formát TIFF.',
      },
      fi: {
        slug: 'heic-tiff-muunnin',
        title: 'HEIC TIFF',
        description: 'Muunna iPhonen HEIC-kuvat ammattimaiseen TIFF-muotoon.',
      },
      el: {
        slug: 'metatropeas-heic-se-tiff',
        title: 'HEIC σε TIFF',
        description:
          'Μετατρέψτε φωτογραφίες HEIC του iPhone σε επαγγελματική μορφή TIFF.',
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
      nl: {
        slug: 'jpg-naar-pdf-converter',
        title: 'JPG naar PDF',
        description:
          'Converteer JPG-afbeeldingen naar PDF-documenten. Combineer meerdere bestanden in één PDF. Gratis.',
      },
      cs: {
        slug: 'prevodnik-jpg-na-pdf',
        title: 'JPG na PDF',
        description:
          'Převeďte obrázky JPG na dokumenty PDF. Spojte více souborů do jednoho PDF. Zdarma.',
      },
      fi: {
        slug: 'jpg-pdf-muunnin',
        title: 'JPG PDF',
        description:
          'Muunna JPG-kuvat PDF-dokumenteiksi. Yhdistä useita tiedostoja yhdeksi PDF:ksi. Ilmainen.',
      },
      el: {
        slug: 'metatropeas-jpg-se-pdf',
        title: 'JPG σε PDF',
        description:
          'Μετατρέψτε εικόνες JPG σε PDF. Συνδυάστε πολλαπλά αρχεία σε ένα PDF. Δωρεάν.',
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
      nl: {
        slug: 'png-naar-pdf-converter',
        title: 'PNG naar PDF',
        description:
          'Converteer PNG-afbeeldingen naar PDF-documenten. Combineer meerdere bestanden in één PDF. Gratis.',
      },
      cs: {
        slug: 'prevodnik-png-na-pdf',
        title: 'PNG na PDF',
        description:
          'Převeďte obrázky PNG na dokumenty PDF. Spojte více souborů do jednoho PDF. Zdarma.',
      },
      fi: {
        slug: 'png-pdf-muunnin',
        title: 'PNG PDF',
        description:
          'Muunna PNG-kuvat PDF-dokumenteiksi. Yhdistä useita tiedostoja yhdeksi PDF:ksi. Ilmainen.',
      },
      el: {
        slug: 'metatropeas-png-se-pdf',
        title: 'PNG σε PDF',
        description:
          'Μετατρέψτε εικόνες PNG σε PDF. Συνδυάστε πολλαπλά αρχεία σε ένα PDF. Δωρεάν.',
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
      nl: {
        slug: 'webp-naar-pdf-converter',
        title: 'WebP naar PDF',
        description:
          'Converteer WebP-afbeeldingen naar PDF-documenten. Combineer meerdere bestanden in één PDF. Gratis.',
      },
      cs: {
        slug: 'prevodnik-webp-na-pdf',
        title: 'WebP na PDF',
        description:
          'Převeďte obrázky WebP na dokumenty PDF. Spojte více souborů do jednoho PDF. Zdarma.',
      },
      fi: {
        slug: 'webp-pdf-muunnin',
        title: 'WebP PDF',
        description:
          'Muunna WebP-kuvat PDF-dokumenteiksi. Yhdistä useita tiedostoja yhdeksi PDF:ksi. Ilmainen.',
      },
      el: {
        slug: 'metatropeas-webp-se-pdf',
        title: 'WebP σε PDF',
        description:
          'Μετατρέψτε εικόνες WebP σε PDF. Συνδυάστε πολλαπλά αρχεία σε ένα PDF. Δωρεάν.',
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
      nl: {
        slug: 'heic-naar-pdf-converter',
        title: 'HEIC naar PDF',
        description:
          'Converteer HEIC-afbeeldingen naar PDF-documenten. Combineer meerdere bestanden in één PDF. Gratis.',
      },
      cs: {
        slug: 'prevodnik-heic-na-pdf',
        title: 'HEIC na PDF',
        description:
          'Převeďte obrázky HEIC na dokumenty PDF. Spojte více souborů do jednoho PDF. Zdarma.',
      },
      fi: {
        slug: 'heic-pdf-muunnin',
        title: 'HEIC PDF',
        description:
          'Muunna HEIC-kuvat PDF-dokumenteiksi. Yhdistä useita tiedostoja yhdeksi PDF:ksi. Ilmainen.',
      },
      el: {
        slug: 'metatropeas-heic-se-pdf',
        title: 'HEIC σε PDF',
        description:
          'Μετατρέψτε εικόνες HEIC σε PDF. Συνδυάστε πολλαπλά αρχεία σε ένα PDF. Δωρεάν.',
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
      nl: {
        slug: 'bmp-naar-pdf-converter',
        title: 'BMP naar PDF',
        description:
          'Converteer BMP-afbeeldingen naar PDF-documenten. Combineer meerdere bestanden in één PDF. Gratis.',
      },
      cs: {
        slug: 'prevodnik-bmp-na-pdf',
        title: 'BMP na PDF',
        description:
          'Převeďte obrázky BMP na dokumenty PDF. Spojte více souborů do jednoho PDF. Zdarma.',
      },
      fi: {
        slug: 'bmp-pdf-muunnin',
        title: 'BMP PDF',
        description:
          'Muunna BMP-kuvat PDF-dokumenteiksi. Yhdistä useita tiedostoja yhdeksi PDF:ksi. Ilmainen.',
      },
      el: {
        slug: 'metatropeas-bmp-se-pdf',
        title: 'BMP σε PDF',
        description:
          'Μετατρέψτε εικόνες BMP σε PDF. Συνδυάστε πολλαπλά αρχεία σε ένα PDF. Δωρεάν.',
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
      nl: {
        slug: 'tiff-naar-pdf-converter',
        title: 'TIFF naar PDF',
        description:
          'Converteer TIFF-afbeeldingen naar PDF-documenten. Combineer meerdere bestanden in één PDF. Gratis.',
      },
      cs: {
        slug: 'prevodnik-tiff-na-pdf',
        title: 'TIFF na PDF',
        description:
          'Převeďte obrázky TIFF na dokumenty PDF. Spojte více souborů do jednoho PDF. Zdarma.',
      },
      fi: {
        slug: 'tiff-pdf-muunnin',
        title: 'TIFF PDF',
        description:
          'Muunna TIFF-kuvat PDF-dokumenteiksi. Yhdistä useita tiedostoja yhdeksi PDF:ksi. Ilmainen.',
      },
      el: {
        slug: 'metatropeas-tiff-se-pdf',
        title: 'TIFF σε PDF',
        description:
          'Μετατρέψτε εικόνες TIFF σε PDF. Συνδυάστε πολλαπλά αρχεία σε ένα PDF. Δωρεάν.',
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
      nl: {
        slug: 'svg-naar-pdf-converter',
        title: 'SVG naar PDF',
        description:
          'Converteer SVG-afbeeldingen naar PDF-documenten. Combineer meerdere bestanden in één PDF. Gratis.',
      },
      cs: {
        slug: 'prevodnik-svg-na-pdf',
        title: 'SVG na PDF',
        description:
          'Převeďte obrázky SVG na dokumenty PDF. Spojte více souborů do jednoho PDF. Zdarma.',
      },
      fi: {
        slug: 'svg-pdf-muunnin',
        title: 'SVG PDF',
        description:
          'Muunna SVG-kuvat PDF-dokumenteiksi. Yhdistä useita tiedostoja yhdeksi PDF:ksi. Ilmainen.',
      },
      el: {
        slug: 'metatropeas-svg-se-pdf',
        title: 'SVG σε PDF',
        description:
          'Μετατρέψτε εικόνες SVG σε PDF. Συνδυάστε πολλαπλά αρχεία σε ένα PDF. Δωρεάν.',
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
      nl: {
        slug: 'pdf-naar-jpg-converter',
        title: 'PDF naar JPG',
        description:
          "Converteer PDF-pagina's naar JPG-afbeeldingen. Hoge kwaliteit, geen limieten. Gratis.",
      },
      cs: {
        slug: 'prevodnik-pdf-na-jpg',
        title: 'PDF na JPG',
        description:
          'Převeďte stránky PDF na obrázky JPG. Vysoká kvalita, bez omezení. Zdarma.',
      },
      fi: {
        slug: 'pdf-jpg-muunnin',
        title: 'PDF JPG',
        description:
          'Muunna PDF-sivut JPG-kuviksi. Korkea laatu, ei rajoituksia. Ilmainen.',
      },
      el: {
        slug: 'metatropeas-pdf-se-jpg',
        title: 'PDF σε JPG',
        description:
          'Μετατρέψτε σελίδες PDF σε εικόνες JPG. Υψηλή ποιότητα, χωρίς όρια. Δωρεάν.',
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
      nl: {
        slug: 'pdf-naar-png-converter',
        title: 'PDF naar PNG',
        description:
          "Converteer PDF-pagina's naar PNG-afbeeldingen. Hoge kwaliteit, geen limieten. Gratis.",
      },
      cs: {
        slug: 'prevodnik-pdf-na-png',
        title: 'PDF na PNG',
        description:
          'Převeďte stránky PDF na obrázky PNG. Vysoká kvalita, bez omezení. Zdarma.',
      },
      fi: {
        slug: 'pdf-png-muunnin',
        title: 'PDF PNG',
        description:
          'Muunna PDF-sivut PNG-kuviksi. Korkea laatu, ei rajoituksia. Ilmainen.',
      },
      el: {
        slug: 'metatropeas-pdf-se-png',
        title: 'PDF σε PNG',
        description:
          'Μετατρέψτε σελίδες PDF σε εικόνες PNG. Υψηλή ποιότητα, χωρίς όρια. Δωρεάν.',
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
      nl: {
        slug: 'pdf-naar-webp-converter',
        title: 'PDF naar WebP',
        description:
          "Converteer PDF-pagina's naar WebP-afbeeldingen. Hoge kwaliteit, geen limieten. Gratis.",
      },
      cs: {
        slug: 'prevodnik-pdf-na-webp',
        title: 'PDF na WebP',
        description:
          'Převeďte stránky PDF na obrázky WebP. Vysoká kvalita, bez omezení. Zdarma.',
      },
      fi: {
        slug: 'pdf-webp-muunnin',
        title: 'PDF WebP',
        description:
          'Muunna PDF-sivut WebP-kuviksi. Korkea laatu, ei rajoituksia. Ilmainen.',
      },
      el: {
        slug: 'metatropeas-pdf-se-webp',
        title: 'PDF σε WebP',
        description:
          'Μετατρέψτε σελίδες PDF σε εικόνες WebP. Υψηλή ποιότητα, χωρίς όρια. Δωρεάν.',
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
      nl: {
        slug: 'csv-naar-json-converter',
        title: 'CSV naar JSON',
        description:
          'Converteer CSV naar JSON-formaat. Automatisch parsen en formatteren. Gratis.',
      },
      cs: {
        slug: 'prevodnik-csv-na-json',
        title: 'CSV na JSON',
        description:
          'Převeďte CSV do formátu JSON. Automatické parsování a formátování. Zdarma.',
      },
      fi: {
        slug: 'csv-json-muunnin',
        title: 'CSV JSON',
        description:
          'Muunna CSV JSON-muotoon. Automaattinen jäsennys ja muotoilu. Ilmainen.',
      },
      el: {
        slug: 'metatropeas-csv-se-json',
        title: 'CSV σε JSON',
        description:
          'Μετατρέψτε CSV σε μορφή JSON. Αυτόματη ανάλυση και μορφοποίηση. Δωρεάν.',
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
      nl: {
        slug: 'json-naar-csv-converter',
        title: 'JSON naar CSV',
        description:
          'Converteer JSON naar CSV-formaat. Automatisch parsen en formatteren. Gratis.',
      },
      cs: {
        slug: 'prevodnik-json-na-csv',
        title: 'JSON na CSV',
        description:
          'Převeďte JSON do formátu CSV. Automatické parsování a formátování. Zdarma.',
      },
      fi: {
        slug: 'json-csv-muunnin',
        title: 'JSON CSV',
        description:
          'Muunna JSON CSV-muotoon. Automaattinen jäsennys ja muotoilu. Ilmainen.',
      },
      el: {
        slug: 'metatropeas-json-se-csv',
        title: 'JSON σε CSV',
        description:
          'Μετατρέψτε JSON σε μορφή CSV. Αυτόματη ανάλυση και μορφοποίηση. Δωρεάν.',
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
      nl: {
        slug: 'xml-naar-json-converter',
        title: 'XML naar JSON',
        description:
          'Converteer XML naar JSON-formaat. Automatisch parsen en formatteren. Gratis.',
      },
      cs: {
        slug: 'prevodnik-xml-na-json',
        title: 'XML na JSON',
        description:
          'Převeďte XML do formátu JSON. Automatické parsování a formátování. Zdarma.',
      },
      fi: {
        slug: 'xml-json-muunnin',
        title: 'XML JSON',
        description:
          'Muunna XML JSON-muotoon. Automaattinen jäsennys ja muotoilu. Ilmainen.',
      },
      el: {
        slug: 'metatropeas-xml-se-json',
        title: 'XML σε JSON',
        description:
          'Μετατρέψτε XML σε μορφή JSON. Αυτόματη ανάλυση και μορφοποίηση. Δωρεάν.',
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
      nl: {
        slug: 'json-naar-xml-converter',
        title: 'JSON naar XML',
        description:
          'Converteer JSON naar XML-formaat. Automatisch parsen en formatteren. Gratis.',
      },
      cs: {
        slug: 'prevodnik-json-na-xml',
        title: 'JSON na XML',
        description:
          'Převeďte JSON do formátu XML. Automatické parsování a formátování. Zdarma.',
      },
      fi: {
        slug: 'json-xml-muunnin',
        title: 'JSON XML',
        description:
          'Muunna JSON XML-muotoon. Automaattinen jäsennys ja muotoilu. Ilmainen.',
      },
      el: {
        slug: 'metatropeas-json-se-xml',
        title: 'JSON σε XML',
        description:
          'Μετατρέψτε JSON σε μορφή XML. Αυτόματη ανάλυση και μορφοποίηση. Δωρεάν.',
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
      nl: {
        slug: 'yaml-naar-json-converter',
        title: 'YAML naar JSON',
        description:
          'Converteer YAML naar JSON-formaat. Automatisch parsen en formatteren. Gratis.',
      },
      cs: {
        slug: 'prevodnik-yaml-na-json',
        title: 'YAML na JSON',
        description:
          'Převeďte YAML do formátu JSON. Automatické parsování a formátování. Zdarma.',
      },
      fi: {
        slug: 'yaml-json-muunnin',
        title: 'YAML JSON',
        description:
          'Muunna YAML JSON-muotoon. Automaattinen jäsennys ja muotoilu. Ilmainen.',
      },
      el: {
        slug: 'metatropeas-yaml-se-json',
        title: 'YAML σε JSON',
        description:
          'Μετατρέψτε YAML σε μορφή JSON. Αυτόματη ανάλυση και μορφοποίηση. Δωρεάν.',
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
      nl: {
        slug: 'json-naar-yaml-converter',
        title: 'JSON naar YAML',
        description:
          'Converteer JSON naar YAML-formaat. Automatisch parsen en formatteren. Gratis.',
      },
      cs: {
        slug: 'prevodnik-json-na-yaml',
        title: 'JSON na YAML',
        description:
          'Převeďte JSON do formátu YAML. Automatické parsování a formátování. Zdarma.',
      },
      fi: {
        slug: 'json-yaml-muunnin',
        title: 'JSON YAML',
        description:
          'Muunna JSON YAML-muotoon. Automaattinen jäsennys ja muotoilu. Ilmainen.',
      },
      el: {
        slug: 'metatropeas-json-se-yaml',
        title: 'JSON σε YAML',
        description:
          'Μετατρέψτε JSON σε μορφή YAML. Αυτόματη ανάλυση και μορφοποίηση. Δωρεάν.',
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
      nl: {
        slug: 'markdown-naar-html-converter',
        title: 'Markdown naar HTML',
        description:
          'Converteer Markdown naar HTML-formaat. Automatisch parsen en formatteren. Gratis.',
      },
      cs: {
        slug: 'prevodnik-markdown-na-html',
        title: 'Markdown na HTML',
        description:
          'Převeďte Markdown do formátu HTML. Automatické parsování a formátování. Zdarma.',
      },
      fi: {
        slug: 'markdown-html-muunnin',
        title: 'Markdown HTML',
        description:
          'Muunna Markdown HTML-muotoon. Automaattinen jäsennys ja muotoilu. Ilmainen.',
      },
      el: {
        slug: 'metatropeas-markdown-se-html',
        title: 'Markdown σε HTML',
        description:
          'Μετατρέψτε Markdown σε μορφή HTML. Αυτόματη ανάλυση και μορφοποίηση. Δωρεάν.',
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
      nl: {
        slug: 'html-naar-markdown-converter',
        title: 'HTML naar Markdown',
        description:
          'Converteer HTML naar Markdown-formaat. Automatisch parsen en formatteren. Gratis.',
      },
      cs: {
        slug: 'prevodnik-html-na-markdown',
        title: 'HTML na Markdown',
        description:
          'Převeďte HTML do formátu Markdown. Automatické parsování a formátování. Zdarma.',
      },
      fi: {
        slug: 'html-markdown-muunnin',
        title: 'HTML Markdown',
        description:
          'Muunna HTML Markdown-muotoon. Automaattinen jäsennys ja muotoilu. Ilmainen.',
      },
      el: {
        slug: 'metatropeas-html-se-markdown',
        title: 'HTML σε Markdown',
        description:
          'Μετατρέψτε HTML σε μορφή Markdown. Αυτόματη ανάλυση και μορφοποίηση. Δωρεάν.',
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
      nl: {
        slug: 'afbeelding-naar-base64-converter',
        title: 'Afbeelding naar Base64',
        description:
          'Codeer afbeeldingen naar Base64-formaat. Kopieer kant-en-klare code voor CSS of HTML. Gratis.',
      },
      cs: {
        slug: 'prevodnik-obrazek-na-base64',
        title: 'Obrázek na Base64',
        description:
          'Zakódujte obrázky do formátu Base64. Zkopírujte hotový kód pro CSS nebo HTML. Zdarma.',
      },
      fi: {
        slug: 'kuva-base64-muunnin',
        title: 'Kuva Base64',
        description:
          'Koodaa kuvat Base64-muotoon. Kopioi valmis koodi CSS:ää tai HTML:ää varten. Ilmainen.',
      },
      el: {
        slug: 'metatropeas-eikona-se-base64',
        title: 'Εικόνα σε Base64',
        description:
          'Κωδικοποιήστε εικόνες σε Base64. Αντιγράψτε έτοιμο κώδικα για CSS ή HTML. Δωρεάν.',
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
      nl: {
        slug: 'base64-naar-afbeelding-converter',
        title: 'Base64 naar Afbeelding',
        description:
          'Decodeer Base64-strings naar afbeeldingen. Bekijk en download in je browser. Gratis.',
      },
      cs: {
        slug: 'prevodnik-base64-na-obrazek',
        title: 'Base64 na Obrázek',
        description:
          'Dekódujte řetězce Base64 na obrázky. Náhled a stažení v prohlížeči. Zdarma.',
      },
      fi: {
        slug: 'base64-kuva-muunnin',
        title: 'Base64 Kuva',
        description:
          'Dekoodaa Base64-merkkijonot kuviksi. Esikatsele ja lataa selaimessa. Ilmainen.',
      },
      el: {
        slug: 'metatropeas-base64-se-eikona',
        title: 'Base64 σε Εικόνα',
        description:
          'Αποκωδικοποιήστε συμβολοσειρές Base64 σε εικόνες. Προεπισκόπηση και λήψη στον browser. Δωρεάν.',
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
      nl: {
        slug: 'pt-naar-px-converter',
        title: 'pt naar px',
        description: 'Reken punten om naar pixels en andersom.',
      },
      cs: {
        slug: 'prevodnik-pt-na-px',
        title: 'pt na px',
        description: 'Převeďte body na pixely a naopak.',
      },
      fi: {
        slug: 'pt-px-muunnin',
        title: 'pt px:ksi',
        description: 'Muunna pisteet pikseleiksi ja päinvastoin.',
      },
      el: {
        slug: 'metatropeas-pt-se-px',
        title: 'pt σε px',
        description: 'Μετατρέψτε σημεία σε pixel και αντίστροφα.',
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
      nl: {
        slug: 'rem-naar-px-converter',
        title: 'rem naar px',
        description: 'Reken CSS rem om naar pixels en andersom.',
      },
      cs: {
        slug: 'prevodnik-rem-na-px',
        title: 'rem na px',
        description: 'Převeďte CSS rem na pixely a naopak.',
      },
      fi: {
        slug: 'rem-px-muunnin',
        title: 'rem px:ksi',
        description: 'Muunna CSS rem pikseleiksi ja päinvastoin.',
      },
      el: {
        slug: 'metatropeas-rem-se-px',
        title: 'rem σε px',
        description: 'Μετατρέψτε CSS rem σε pixel και αντίστροφα.',
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
      nl: {
        slug: 'em-naar-px-converter',
        title: 'em naar px',
        description: 'Reken CSS em om naar pixels en andersom.',
      },
      cs: {
        slug: 'prevodnik-em-na-px',
        title: 'em na px',
        description: 'Převeďte CSS em na pixely a naopak.',
      },
      fi: {
        slug: 'em-px-muunnin',
        title: 'em px:ksi',
        description: 'Muunna CSS em pikseleiksi ja päinvastoin.',
      },
      el: {
        slug: 'metatropeas-em-se-px',
        title: 'em σε px',
        description: 'Μετατρέψτε CSS em σε pixel και αντίστροφα.',
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
      nl: {
        slug: 'cm-naar-px-converter',
        title: 'cm naar px',
        description: 'Reken cm om naar pixels met DPI-ondersteuning.',
      },
      cs: {
        slug: 'prevodnik-cm-na-px',
        title: 'cm na px',
        description: 'Převeďte cm na pixely s podporou DPI.',
      },
      fi: {
        slug: 'cm-px-muunnin',
        title: 'cm px:ksi',
        description: 'Muunna cm pikseleiksi DPI-tuella.',
      },
      el: {
        slug: 'metatropeas-cm-se-px',
        title: 'cm σε px',
        description: 'Μετατρέψτε cm σε pixel με υποστήριξη DPI.',
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
      nl: {
        slug: 'px-naar-cm-converter',
        title: 'px naar cm',
        description: 'Reken pixels om naar cm met DPI-ondersteuning.',
      },
      cs: {
        slug: 'prevodnik-px-na-cm',
        title: 'px na cm',
        description: 'Převeďte pixely na cm s podporou DPI.',
      },
      fi: {
        slug: 'px-cm-muunnin',
        title: 'px cm:ksi',
        description: 'Muunna pikselit senttimetreiksi DPI-tuella.',
      },
      el: {
        slug: 'metatropeas-px-se-cm',
        title: 'px σε cm',
        description: 'Μετατρέψτε pixel σε cm με υποστήριξη DPI.',
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
      nl: {
        slug: 'mm-naar-px-converter',
        title: 'mm naar px',
        description: 'Reken mm om naar pixels met DPI-ondersteuning.',
      },
      cs: {
        slug: 'prevodnik-mm-na-px',
        title: 'mm na px',
        description: 'Převeďte mm na pixely s podporou DPI.',
      },
      fi: {
        slug: 'mm-px-muunnin',
        title: 'mm px:ksi',
        description: 'Muunna mm pikseleiksi DPI-tuella.',
      },
      el: {
        slug: 'metatropeas-mm-se-px',
        title: 'mm σε px',
        description: 'Μετατρέψτε mm σε pixel με υποστήριξη DPI.',
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
      nl: {
        slug: 'px-naar-mm-converter',
        title: 'px naar mm',
        description: 'Reken pixels om naar mm met DPI-ondersteuning.',
      },
      cs: {
        slug: 'prevodnik-px-na-mm',
        title: 'px na mm',
        description: 'Převeďte pixely na mm s podporou DPI.',
      },
      fi: {
        slug: 'px-mm-muunnin',
        title: 'px mm:ksi',
        description: 'Muunna pikselit millimetreiksi DPI-tuella.',
      },
      el: {
        slug: 'metatropeas-px-se-mm',
        title: 'px σε mm',
        description: 'Μετατρέψτε pixel σε mm με υποστήριξη DPI.',
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
      nl: {
        slug: 'inches-naar-px-converter',
        title: 'inches naar px',
        description: 'Reken inches om naar pixels met DPI-ondersteuning.',
      },
      cs: {
        slug: 'prevodnik-palce-na-px',
        title: 'palce na px',
        description: 'Převeďte palce na pixely s podporou DPI.',
      },
      fi: {
        slug: 'tuumat-px-muunnin',
        title: 'tuumat px:ksi',
        description: 'Muunna tuumat pikseleiksi DPI-tuella.',
      },
      el: {
        slug: 'metatropeas-intses-se-px',
        title: 'ίντσες σε px',
        description: 'Μετατρέψτε ίντσες σε pixel με υποστήριξη DPI.',
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
      nl: {
        slug: 'hex-naar-rgb-converter',
        title: 'HEX naar RGB',
        description: 'Reken HEX-kleurcodes om naar RGB en andersom.',
      },
      cs: {
        slug: 'prevodnik-hex-na-rgb',
        title: 'HEX na RGB',
        description: 'Převeďte HEX kódy barev na RGB a naopak.',
      },
      fi: {
        slug: 'hex-rgb-muunnin',
        title: 'HEX RGB:ksi',
        description: 'Muunna HEX-värikoodit RGB:ksi ja päinvastoin.',
      },
      el: {
        slug: 'metatropeas-hex-se-rgb',
        title: 'HEX σε RGB',
        description: 'Μετατρέψτε κωδικούς χρωμάτων HEX σε RGB και αντίστροφα.',
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
      nl: {
        slug: 'rgb-naar-cmyk-converter',
        title: 'RGB naar CMYK',
        description:
          'Reken RGB om naar CMYK en andersom. Voor drukvoorbereiding.',
      },
      cs: {
        slug: 'prevodnik-rgb-na-cmyk',
        title: 'RGB na CMYK',
        description: 'Převeďte RGB na CMYK a naopak. Pro přípravu tisku.',
      },
      fi: {
        slug: 'rgb-cmyk-muunnin',
        title: 'RGB CMYK:ksi',
        description: 'Muunna RGB CMYK:ksi ja päinvastoin. Painovalmisteluun.',
      },
      el: {
        slug: 'metatropeas-rgb-se-cmyk',
        title: 'RGB σε CMYK',
        description:
          'Μετατρέψτε RGB σε CMYK και αντίστροφα. Για προετοιμασία εκτύπωσης.',
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
        slug: 'konwerter-bajtow',
        title: 'bajty na KB/MB/GB',
        description:
          'Przelicz bajty na KB, MB, GB i odwrotnie. Szybka konwersja jednostek danych.',
      },
      en: {
        slug: 'bytes-converter',
        title: 'bytes to KB/MB/GB',
        description:
          'Convert bytes to KB, MB, GB and vice versa. Instant data unit conversion.',
      },
      de: {
        slug: 'bytes-umrechner',
        title: 'Bytes in KB/MB/GB',
        description: 'Bytes in KB, MB, GB umrechnen und umgekehrt.',
      },
      fr: {
        slug: 'convertisseur-octets',
        title: 'octets en Ko/Mo/Go',
        description: 'Convertissez octets en Ko, Mo, Go et inversement.',
      },
      es: {
        slug: 'convertidor-bytes',
        title: 'bytes a KB/MB/GB',
        description: 'Convierte bytes a KB, MB, GB y viceversa.',
      },
      pt: {
        slug: 'conversor-bytes',
        title: 'bytes para KB/MB/GB',
        description: 'Converta bytes em KB, MB, GB e vice-versa.',
      },
      it: {
        slug: 'convertitore-bytes',
        title: 'bytes in KB/MB/GB',
        description: 'Converti bytes in KB, MB, GB e viceversa.',
      },
      nl: {
        slug: 'bytes-converter',
        title: 'bytes naar KB/MB/GB',
        description: 'Reken bytes om naar KB, MB, GB en andersom.',
      },
      cs: {
        slug: 'prevodnik-bajtu',
        title: 'bajty na KB/MB/GB',
        description: 'Převeďte bajty na KB, MB, GB a naopak.',
      },
      fi: {
        slug: 'tavut-muunnin',
        title: 'tavut KB/MB/GB:ksi',
        description: 'Muunna tavut KB, MB, GB ja päinvastoin.',
      },
      el: {
        slug: 'metatropeas-bytes',
        title: 'bytes σε KB/MB/GB',
        description: 'Μετατρέψτε bytes σε KB, MB, GB και αντίστροφα.',
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
      nl: {
        slug: 'unix-timestamp-converter',
        title: 'Unix naar datum',
        description: 'Reken Unix-tijdstempel om naar datum en tijd.',
      },
      cs: {
        slug: 'prevodnik-unix-timestamp',
        title: 'Unix na datum',
        description: 'Převeďte Unix časové razítko na datum a čas.',
      },
      fi: {
        slug: 'unix-aikaleima-muunnin',
        title: 'Unix päiväksi',
        description: 'Muunna Unix-aikaleima päivämääräksi ja ajaksi.',
      },
      el: {
        slug: 'metatropeas-unix-timestamp',
        title: 'Unix σε ημ/νία',
        description: 'Μετατρέψτε Unix timestamp σε ημερομηνία και ώρα.',
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
      nl: {
        slug: 'decimaal-naar-binair-converter',
        title: 'DEC naar BIN',
        description: 'Reken decimale getallen om naar binair en andersom.',
      },
      cs: {
        slug: 'prevodnik-desitkovy-na-binarni',
        title: 'DEC na BIN',
        description: 'Převeďte desítková čísla na binární a naopak.',
      },
      fi: {
        slug: 'desimaali-binaari-muunnin',
        title: 'DEC BIN:ksi',
        description: 'Muunna desimaaliluvut binääriluvuiksi ja päinvastoin.',
      },
      el: {
        slug: 'metatropeas-dekadiko-se-dyad',
        title: 'DEC σε BIN',
        description: 'Μετατρέψτε δεκαδικούς σε δυαδικούς αριθμούς.',
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
      nl: {
        slug: 'decimaal-naar-hex-converter',
        title: 'DEC naar HEX',
        description:
          'Reken decimale getallen om naar hexadecimaal en andersom.',
      },
      cs: {
        slug: 'prevodnik-desitkovy-na-hex',
        title: 'DEC na HEX',
        description: 'Převeďte desítková čísla na hexadecimální a naopak.',
      },
      fi: {
        slug: 'desimaali-heksa-muunnin',
        title: 'DEC HEX:ksi',
        description:
          'Muunna desimaaliluvut heksadesimaaliluvuiksi ja päinvastoin.',
      },
      el: {
        slug: 'metatropeas-dekadiko-se-hex',
        title: 'DEC σε HEX',
        description: 'Μετατρέψτε δεκαδικούς σε δεκαεξαδικούς αριθμούς.',
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
      nl: {
        slug: 'mbps-naar-mbs-converter',
        title: 'Mbps naar MB/s',
        description: 'Reken Mbps om naar MB/s en andersom.',
      },
      cs: {
        slug: 'prevodnik-mbps-na-mbs',
        title: 'Mbps na MB/s',
        description: 'Převeďte Mbps na MB/s a naopak.',
      },
      fi: {
        slug: 'mbps-mbs-muunnin',
        title: 'Mbps MB/s:ksi',
        description: 'Muunna Mbps MB/s:ksi ja päinvastoin.',
      },
      el: {
        slug: 'metatropeas-mbps-se-mbs',
        title: 'Mbps σε MB/s',
        description: 'Μετατρέψτε Mbps σε MB/s και αντίστροφα.',
      },
    },
  },
];
