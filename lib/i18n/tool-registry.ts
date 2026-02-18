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
      id: { title: 'Gambar & favicon' },
      vi: { title: 'Hình ảnh & favicon' },
      tr: { title: 'Görseller ve faviconlar' },
      tl: { title: 'Mga larawan at favicon' },
      sw: { title: 'Picha na favicon' },
      ms: { title: 'Imej & favicon' },
      cs: { title: 'Obrázky a favicony' },
      sv: { title: 'Bilder & faviconer' },
      sq: { title: 'Imazhet dhe favicon-et' },
      da: { title: 'Billeder & faviconer' },
      no: { title: 'Bilder og faviconer' },
      fi: { title: 'Kuvat ja faviconit' },
      sk: { title: 'Obrázky a favicony' },
      hr: { title: 'Slike i faviconi' },
      lt: { title: 'Vaizdai ir faviconai' },
      sl: { title: 'Slike in faviconi' },
      el: { title: 'Εικόνες και favicon' },
      bg: { title: 'Изображения и favicon' },
      ha: { title: 'Hotuna da favicon' },
      yo: { title: 'Àwọn àwòrán àti favicon' },
      af: { title: 'Beelde en favicons' },
      uk: { title: 'Зображення та favicon' },
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
      id: { title: 'Meta & SEO' },
      vi: { title: 'Meta & SEO' },
      tr: { title: 'Meta & SEO' },
      tl: { title: 'Meta at SEO' },
      sw: { title: 'Meta na SEO' },
      ms: { title: 'Meta & SEO' },
      cs: { title: 'Meta a SEO' },
      sv: { title: 'Meta & SEO' },
      sq: { title: 'Meta dhe SEO' },
      da: { title: 'Meta & SEO' },
      no: { title: 'Meta & SEO' },
      fi: { title: 'Meta & SEO' },
      sk: { title: 'Meta a SEO' },
      hr: { title: 'Meta i SEO' },
      lt: { title: 'Meta ir SEO' },
      sl: { title: 'Meta in SEO' },
      el: { title: 'Meta & SEO' },
      bg: { title: 'Meta и SEO' },
      ha: { title: 'Meta & SEO' },
      yo: { title: 'Meta & SEO' },
      af: { title: 'Meta & SEO' },
      uk: { title: 'Meta та SEO' },
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
      id: { title: 'Email & komunikasi' },
      vi: { title: 'Email & giao tiếp' },
      tr: { title: 'E-posta ve iletişim' },
      tl: { title: 'Email at komunikasyon' },
      sw: { title: 'Barua pepe na mawasiliano' },
      ms: { title: 'E-mel & komunikasi' },
      cs: { title: 'E-mail a komunikace' },
      sv: { title: 'E-post & kommunikation' },
      sq: { title: 'Email dhe komunikim' },
      da: { title: 'E-mail & kommunikation' },
      no: { title: 'E-post og kommunikasjon' },
      fi: { title: 'Sähköposti ja viestintä' },
      sk: { title: 'E-mail a komunikácia' },
      hr: { title: 'E-pošta i komunikacija' },
      lt: { title: 'El. paštas ir komunikacija' },
      sl: { title: 'E-pošta in komunikacija' },
      el: { title: 'Email & επικοινωνία' },
      bg: { title: 'Имейл и комуникация' },
      ha: { title: 'Imel da sadarwa' },
      yo: { title: 'Ímeèlì àti ìbánisọ̀rọ̀' },
      af: { title: 'E-pos & kommunikasie' },
      uk: { title: 'Електронна пошта та комунікація' },
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
      id: { title: 'Warna & aksesibilitas' },
      vi: { title: 'Màu sắc & tiếp cận' },
      tr: { title: 'Renkler ve erişilebilirlik' },
      tl: { title: 'Mga kulay at accessibility' },
      sw: { title: 'Rangi na ufikivu' },
      ms: { title: 'Warna & kebolehcapaian' },
      cs: { title: 'Barvy a přístupnost' },
      sv: { title: 'Färger & tillgänglighet' },
      sq: { title: 'Ngjyrat dhe aksesibiliteti' },
      da: { title: 'Farver & tilgængelighed' },
      no: { title: 'Farger og tilgjengelighet' },
      fi: { title: 'Värit ja saavutettavuus' },
      sk: { title: 'Farby a prístupnosť' },
      hr: { title: 'Boje i pristupačnost' },
      lt: { title: 'Spalvos ir prieinamumas' },
      sl: { title: 'Barve in dostopnost' },
      el: { title: 'Χρώματα & παλέτες' },
      bg: { title: 'Цветове и палитри' },
      ha: { title: 'Launuka da fayafai' },
      yo: { title: 'Àwọ̀ àti pálẹ́ẹ̀tì' },
      af: { title: 'Kleure & palette' },
      uk: { title: 'Кольори та палітри' },
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
      id: { title: 'Cetak & materi' },
      vi: { title: 'In ấn & tài liệu' },
      tr: { title: 'Baskı ve materyaller' },
      tl: { title: 'Print at materyales' },
      sw: { title: 'Uchapishaji na vifaa' },
      ms: { title: 'Cetak & bahan' },
      cs: { title: 'Tisk a materiály' },
      sv: { title: 'Tryck & material' },
      sq: { title: 'Printim dhe materiale' },
      da: { title: 'Tryk & materialer' },
      no: { title: 'Trykk og materialer' },
      fi: { title: 'Painatus ja materiaalit' },
      sk: { title: 'Tlač a materiály' },
      hr: { title: 'Tisak i materijali' },
      lt: { title: 'Spauda ir medžiagos' },
      sl: { title: 'Tisk in materiali' },
      el: { title: 'Εκτύπωση & QR' },
      bg: { title: 'Печат и QR' },
      ha: { title: 'Bugu da QR' },
      yo: { title: 'Ìtẹ̀wé àti QR' },
      af: { title: 'Druk & QR' },
      uk: { title: 'Друк та QR' },
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
      id: {
        slug: 'konverter-jpg-png-ke-webp',
        title: 'Konverter JPG/PNG ke WebP',
        description: 'Kurangi ukuran file gambar tanpa kehilangan kualitas. Konversi JPG dan PNG ke WebP dan percepat situs web Anda.',
      },
      vi: {
        slug: 'chuyen-doi-jpg-png-sang-webp',
        title: 'Chuyển đổi JPG/PNG sang WebP',
        description: 'Giảm kích thước file hình ảnh mà không mất chất lượng. Chuyển đổi JPG và PNG sang WebP và tăng tốc trang web.',
      },
      tr: {
        slug: 'jpg-png-webp-donusturucu',
        title: 'JPG/PNG WebP dönüştürücü',
        description: 'Kalite kaybetmeden görsel dosya boyutunu küçültün. JPG ve PNG dosyalarını WebP formatına dönüştürün ve web sitenizi hızlandırın.',
      },
      tl: {
        slug: 'jpg-png-sa-webp-converter',
        title: 'JPG/PNG sa WebP converter',
        description: 'Bawasan ang laki ng file ng larawan nang hindi nawawala ang kalidad. I-convert ang JPG at PNG sa WebP at pabilisin ang website.',
      },
      sw: {
        slug: 'kibadilishaji-jpg-png-hadi-webp',
        title: 'Kibadilishaji JPG/PNG hadi WebP',
        description: 'Punguza ukubwa wa faili za picha bila kupoteza ubora. Badilisha JPG na PNG kuwa WebP na kuharakisha tovuti yako.',
      },
      ms: {
        slug: 'penukar-jpg-png-ke-webp',
        title: 'Penukar JPG/PNG ke WebP',
        description: 'Kurangkan saiz fail imej tanpa kehilangan kualiti. Tukar JPG dan PNG kepada WebP dan percepatkan laman web anda.',
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
      sq: {
        slug: 'konvertues-jpg-png-ne-webp',
        title: 'Konvertues JPG/PNG në WebP',
        description: 'Zvogëloni madhësinë e skedarëve të imazheve pa humbur cilësinë. Konvertoni JPG dhe PNG në WebP dhe përshpejtoni faqen tuaj.',
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
      sk: {
        slug: 'konvertor-jpg-png-na-webp',
        title: 'Konvertor JPG/PNG na WebP',
        description: 'Zmenšite veľkosť obrázkov bez straty kvality. Preveďte JPG a PNG do WebP a zrýchlite svoju webovú stránku.',
      },
      hr: {
        slug: 'pretvaranje-jpg-png-u-webp',
        title: 'Pretvaranje JPG/PNG u WebP',
        description: 'Smanjite veličinu slika bez gubitka kvalitete. Pretvorite JPG i PNG u WebP i ubrzajte svoju web stranicu.',
      },
      lt: {
        slug: 'jpg-png-i-webp-konverteris',
        title: 'JPG/PNG į WebP konverteris',
        description: 'Sumažinkite vaizdų dydį neprarasdami kokybės. Konvertuokite JPG ir PNG į WebP ir paspartinkite savo svetainę.',
      },
      sl: {
        slug: 'pretvornik-jpg-png-v-webp',
        title: 'Pretvornik JPG/PNG v WebP',
        description: 'Zmanjšajte velikost slik brez izgube kakovosti. Pretvorite JPG in PNG v WebP in pohitrite svojo spletno stran.',
      },
      el: {
        slug: 'metatropeas-jpg-png-se-webp',
        title: 'Μετατροπέας JPG/PNG σε WebP',
        description: 'Μειώστε το μέγεθος εικόνων χωρίς απώλεια ποιότητας. Μετατρέψτε JPG και PNG σε WebP και επιταχύνετε τον ιστότοπό σας.',
      },
      bg: {
        slug: 'konvertor-jpg-png-v-webp',
        title: 'Конвертор JPG/PNG в WebP',
        description: 'Намалете размера на изображенията без загуба на качество. Конвертирайте JPG и PNG в WebP и ускорете уебсайта си.',
      },
      ha: {
        slug: 'mai-canza-jpg-png-zuwa-webp',
        title: 'Mai canza JPG/PNG zuwa WebP',
        description: 'Rage girman hotuna ba tare da rasa inganci ba. Canza JPG da PNG zuwa WebP don saurin shafin yanar gizo.',
      },
      yo: {
        slug: 'oluyipada-jpg-png-si-webp',
        title: 'Olùyípadà JPG/PNG sí WebP',
        description: 'Dín ìwọ̀n àwọn àwòrán kù láìsí pípàdánù dídára. Yí JPG àti PNG padà sí WebP kí ojú-ìwé ayélujára rẹ lè yára.',
      },
      af: {
        slug: 'jpg-png-na-webp-omskakelaar',
        title: 'JPG/PNG-na-WebP-omskakelaar',
        description: 'Verminder beeldgrootte sonder kwaliteitverlies. Skakel JPG en PNG om na WebP en versnel jou webwerf.',
      },
      uk: {
        slug: 'konverter-jpg-png-u-webp',
        title: 'Конвертер JPG/PNG у WebP',
        description: 'Зменшуйте розмір зображень без втрати якості. Конвертуйте JPG та PNG у WebP і прискорте завантаження сайту.',
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
      id: {
        slug: 'editor-gambar',
        title: 'Editor gambar',
        description: 'Siapkan potongan sempurna untuk media sosial atau situs web Anda. Pilih format siap pakai atau masukkan dimensi kustom.',
      },
      vi: {
        slug: 'chinh-sua-hinh-anh',
        title: 'Chỉnh sửa hình ảnh',
        description: 'Chuẩn bị khung hình hoàn hảo cho mạng xã hội hoặc trang web của bạn. Chọn định dạng có sẵn hoặc nhập kích thước tùy chỉnh.',
      },
      tr: {
        slug: 'gorsel-duzenleyici',
        title: 'Görsel düzenleyici',
        description: 'Sosyal medya veya web siteniz için mükemmel kırpımı hazırlayın. Hazır bir format seçin veya özel boyutlar girin.',
      },
      tl: {
        slug: 'editor-ng-larawan',
        title: 'Editor ng larawan',
        description: 'Ihanda ang perpektong crop para sa social media o website. Pumili ng handa nang format o mag-type ng custom na sukat.',
      },
      sw: {
        slug: 'kihariri-cha-picha',
        title: 'Kihariri cha picha',
        description: 'Andaa upunguzi kamili wa picha kwa mitandao ya kijamii au tovuti yako. Chagua muundo uliokuwa tayari au weka vipimo maalum.',
      },
      ms: {
        slug: 'editor-imej',
        title: 'Editor imej',
        description: 'Sediakan potongan sempurna untuk media sosial atau laman web anda. Pilih format sedia ada atau masukkan dimensi tersuai.',
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
      sq: {
        slug: 'redaktues-imazhesh',
        title: 'Redaktues imazhesh',
        description: 'Përgatitni prerjen perfekte për rrjetet sociale ose faqen tuaj. Zgjidhni një format të gatshëm ose shkruani dimensione të personalizuara.',
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
      sk: {
        slug: 'editor-obrazkov',
        title: 'Editor obrázkov',
        description: 'Pripravte ideálny orez pre sociálne siete alebo webovú stránku. Vyberte prednastavenú veľkosť alebo zadajte vlastné rozmery.',
      },
      hr: {
        slug: 'urednik-slika',
        title: 'Urednik slika',
        description: 'Pripremite savršeni izrez za društvene mreže ili web stranicu. Odaberite gotov format ili unesite prilagodene dimenzije.',
      },
      lt: {
        slug: 'vaizdu-redaktorius',
        title: 'Vaizdų redaktorius',
        description: 'Paruoškite tobulą apkirpimą socialiniams tinklams ar savo svetainei. Pasirinkite gatavą formatą arba įveskite pasirinktinius matmenis.',
      },
      sl: {
        slug: 'urejevalnik-slik',
        title: 'Urejevalnik slik',
        description: 'Pripravite popoln obrez za družbena omrežja ali svojo spletno stran. Izberite prednastavljen format ali vnesite mere po meri.',
      },
      el: {
        slug: 'epexergasia-eikonas',
        title: 'Επεξεργασία εικόνας',
        description: 'Ετοιμάστε το τέλειο κάδρο για μέσα κοινωνικής δικτύωσης ή τον ιστότοπό σας. Επιλέξτε έτοιμη μορφή ή εισάγετε προσαρμοσμένες διαστάσεις.',
      },
      bg: {
        slug: 'redaktor-na-izobrazhenia',
        title: 'Редактор на изображения',
        description: 'Подгответе перфектното изрязване за социални мрежи или уебсайта си. Изберете готов формат или въведете персонализирани размери.',
      },
      ha: {
        slug: 'editan-hoto',
        title: 'Editan hoto',
        description: 'Shirya kyakkyawan yanki don kafofin watsa labarun ko shafin yanar gizo. Zabi tsari da aka riga aka yi ko shigar da girman da kake so.',
      },
      yo: {
        slug: 'olootu-aworan',
        title: 'Olóòtú àwòrán',
        description: 'Pèsè gégé tó dára jùlọ fún ojú-ìwé àwùjọ tàbí ojú-ìwé ayélujára rẹ. Yan ọ̀nà tó ti ṣetán tàbí tẹ ìwọ̀n àdáni.',
      },
      af: {
        slug: 'beeldredigeerder',
        title: 'Beeldredigeerder',
        description: "Berei die perfekte snywerk voor vir sosiale media of jou webwerf. Kies 'n voorafbepaalde formaat of voer pasgemaakte afmetings in.",
      },
      uk: {
        slug: 'redaktor-zobrazhen',
        title: 'Редактор зображень',
        description: 'Підготуйте ідеальний кадр для соціальних мереж або вебсайту. Оберіть готовий формат або введіть власні розміри.',
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
      id: {
        slug: 'generator-favicon-gratis',
        title: 'Generator favicon',
        description: 'Buat favicon.ico dan ikon PNG dari satu gambar, sesuai persyaratan browser dan Lighthouse.',
      },
      vi: {
        slug: 'tao-favicon-mien-phi',
        title: 'Tạo favicon',
        description: 'Tạo favicon.ico và biểu tượng PNG từ một hình ảnh duy nhất, phù hợp với yêu cầu của trình duyệt và Lighthouse.',
      },
      tr: {
        slug: 'ucretsiz-favicon-olusturucu',
        title: 'Favicon oluşturucu',
        description: 'Tek bir görselden favicon.ico ve PNG simgeleri oluşturun – tarayıcı ve Lighthouse gereksinimlerine uygun.',
      },
      tl: {
        slug: 'libreng-favicon-generator',
        title: 'Favicon generator',
        description: 'Gumawa ng favicon.ico at PNG icon mula sa isang larawan, naaayon sa mga kinakailangan ng browser at Lighthouse.',
      },
      sw: {
        slug: 'kitengenezaji-favicon-bure',
        title: 'Kitengenezaji favicon',
        description: 'Tengeneza favicon.ico na ikoni za PNG kutoka picha moja, kulingana na mahitaji ya kivinjari na Lighthouse.',
      },
      ms: {
        slug: 'penjana-favicon-percuma',
        title: 'Penjana favicon',
        description: 'Jana favicon.ico dan ikon PNG daripada satu imej, mematuhi keperluan pelayar dan Lighthouse.',
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
      sq: {
        slug: 'gjenerues-favicon-falas',
        title: 'Gjenerues favicon',
        description: 'Gjeneroni favicon.ico dhe ikona PNG nga një imazh i vetëm, në përputhje me kërkesat e shfletuesit dhe Lighthouse.',
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
      sk: {
        slug: 'generator-favicon-zadarmo',
        title: 'Generátor favicon',
        description: 'Z jedného obrázka vygenerujte favicon.ico a PNG ikony v súlade s požiadavkami prehliadačov a Lighthouse.',
      },
      hr: {
        slug: 'besplatni-generator-favicona',
        title: 'Generator favicona',
        description: 'Iz jedne slike generirajte favicon.ico i PNG ikone u skladu sa zahtjevima preglednika i Lighthousea.',
      },
      lt: {
        slug: 'nemokamas-favicon-generatorius',
        title: 'Favicon generatorius',
        description: 'Iš vieno vaizdo sugeneruokite favicon.ico ir PNG piktogramas, atitinkančias naršyklės ir Lighthouse reikalavimus.',
      },
      sl: {
        slug: 'brezplacni-generator-faviconov',
        title: 'Generator faviconov',
        description: 'Iz ene slike ustvarite favicon.ico in PNG ikone v skladu z zahtevami brskalnikov in Lighthouse.',
      },
      el: {
        slug: 'dorean-dimiourgia-favicon',
        title: 'Δημιουργία favicon',
        description: 'Δημιουργήστε favicon.ico και εικονίδια PNG από μία εικόνα, σύμφωνα με τις απαιτήσεις προγραμμάτων περιήγησης και Lighthouse.',
      },
      bg: {
        slug: 'bezplaten-generator-na-favicon',
        title: 'Генератор на favicon',
        description: 'Генерирайте favicon.ico и PNG икони от едно изображение, съобразено с изискванията на браузърите и Lighthouse.',
      },
      ha: {
        slug: 'samar-da-favicon-kyauta',
        title: 'Mai samar da favicon',
        description: 'Samar da favicon.ico da guntuwar PNG daga hoto guda, daidai da bukatun masu bincike da Lighthouse.',
      },
      yo: {
        slug: 'olupilese-favicon-ofe',
        title: 'Olùpilẹ̀ṣẹ̀ favicon',
        description: 'Ṣẹ̀dá favicon.ico àti àwọn àmì PNG láti àwòrán kan ṣoṣo, ní ìbámu pẹ̀lú àwọn ìlànà àwọn aṣàwákiri àti Lighthouse.',
      },
      af: {
        slug: 'gratis-favicon-generator',
        title: 'Favicon-generator',
        description: 'Genereer favicon.ico en PNG-ikone vanuit een beeld, wat voldoen aan blaaier- en Lighthouse-vereistes.',
      },
      uk: {
        slug: 'bezkoshtovnyi-generator-favicon',
        title: 'Генератор favicon',
        description: 'Створіть favicon.ico та PNG-іконки з одного зображення, що відповідають вимогам браузерів та Lighthouse.',
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
      id: {
        slug: 'pemeriksa-meta-judul-dan-deskripsi',
        title: 'Pemeriksa meta judul & deskripsi',
        description: 'Periksa jumlah karakter dan pratinjau halaman Anda di Google. Hindari judul dan deskripsi yang terpotong di hasil pencarian.',
      },
      vi: {
        slug: 'kiem-tra-meta-title-va-description',
        title: 'Kiểm tra meta title & description',
        description: 'Kiểm tra số ký tự và xem trước trang của bạn trên Google. Tránh tiêu đề và mô tả bị cắt trong kết quả tìm kiếm.',
      },
      tr: {
        slug: 'meta-baslik-ve-aciklama-kontrol',
        title: 'Meta başlık ve açıklama kontrolü',
        description: 'Karakter sayısını kontrol edin ve sayfanızın Google önizlemesini görün. Arama sonuçlarında kesilen başlık ve açıklamalardan kaçının.',
      },
      tl: {
        slug: 'tagasuri-ng-meta-title-at-description',
        title: 'Tagasuri ng meta title at description',
        description: 'Suriin ang bilang ng character at i-preview kung paano lumalabas ang page sa Google. Iwasan ang naputol na titulo at description sa search results.',
      },
      sw: {
        slug: 'kikaguzi-cha-meta-kichwa-na-maelezo',
        title: 'Kikaguzi cha meta kichwa na maelezo',
        description: 'Angalia idadi ya herufi na uone jinsi ukurasa wako unavyoonekana kwenye Google. Epuka vichwa na maelezo yaliyokatwa kwenye matokeo ya utafutaji.',
      },
      ms: {
        slug: 'penyemak-meta-tajuk-dan-penerangan',
        title: 'Penyemak meta tajuk dan penerangan',
        description: 'Semak bilangan aksara dan pratonton halaman anda di Google. Elak tajuk dan penerangan yang terpotong dalam hasil carian.',
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
      sq: {
        slug: 'kontrollues-meta-titull-dhe-pershkrim',
        title: 'Kontrollues meta titull dhe përshkrim',
        description: 'Kontrolloni numrin e karaktereve dhe shikoni parapamjen e faqes në Google. Shmangni titujt dhe përshkrimet e prera në rezultatet e kërkimit.',
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
      sk: {
        slug: 'kontrola-meta-titulku-a-popisu',
        title: 'Kontrola meta titulku a popisu',
        description: 'Skontrolujte počet znakov a pozrite si náhľad stránky v Google. Vyhnite sa skráteným titulkom a popisom vo výsledkoch vyhľadávania.',
      },
      hr: {
        slug: 'provjera-meta-naslova-i-opisa',
        title: 'Provjera meta naslova i opisa',
        description: 'Provjerite broj znakova i pogledajte kako vaša stranica izgleda u Googleu. Izbjegnite skraćene naslove i opise u rezultatima pretraživanja.',
      },
      lt: {
        slug: 'meta-pavadinimo-ir-aprasymo-tikrintuvas',
        title: 'Meta pavadinimo ir aprašymo tikrintuvas',
        description: 'Patikrinkite simbolių skaičių ir peržiūrėkite, kaip jūsų puslapis atrodo Google. Išvenkite sutrumpintų pavadinimų ir aprašymų paieškos rezultatuose.',
      },
      sl: {
        slug: 'preverjanje-meta-naslova-in-opisa',
        title: 'Preverjanje meta naslova in opisa',
        description: 'Preverite število znakov in si oglejte predogled strani v Googlu. Izognite se skrajšanim naslovom in opisom v rezultatih iskanja.',
      },
      el: {
        slug: 'elegkhos-meta-titlou-kai-perigrafis',
        title: 'Έλεγχος meta τίτλου και περιγραφής',
        description: 'Ελέγξτε τον αριθμό χαρακτήρων και δείτε πώς φαίνεται η σελίδα σας στο Google. Αποφύγετε κομμένους τίτλους και περιγραφές στα αποτελέσματα αναζήτησης.',
      },
      bg: {
        slug: 'proverka-na-meta-zaglavie-i-opisanie',
        title: 'Проверка на meta заглавие и описание',
        description: 'Проверете броя знаци и прегледайте как страницата ви изглежда в Google. Избягвайте отрязани заглавия и описания в резултатите от търсенето.',
      },
      ha: {
        slug: 'tantance-meta-take-da-bayani',
        title: 'Tantance meta take da bayani',
        description: 'Duba adadin haruffa kuma ka ga yadda shafinka yake a Google. Guje wa taken da bayanin da aka yanke a sakamakon bincike.',
      },
      yo: {
        slug: 'atunyewo-meta-akole-ati-apejuwe',
        title: 'Àtúnyẹ̀wò meta àkọlé àti àpèjúwe',
        description: 'Ṣàyẹ̀wò iye àwọn ohun kíkọ kí o sì ṣàgbéyẹ̀wò bí ojú-ìwé rẹ ṣe hàn nínú Google. Yẹra fún àwọn àkọlé àti àpèjúwe tí a gé kúrú nínú àbájáde ìwádìí.',
      },
      af: {
        slug: 'meta-titel-en-beskrywing-nagaaier',
        title: 'Meta-titel- en -beskrywing-nagaaier',
        description: 'Kontroleer die aantal karakters en sien hoe jou bladsy in Google lyk. Vermy afgekapte titels en beskrywings in soekresultate.',
      },
      uk: {
        slug: 'perevirka-meta-zaholovka-ta-opysu',
        title: 'Перевірка мета-заголовка та опису',
        description: 'Перевірте кількість символів і подивіться, як ваша сторінка виглядає у Google. Уникайте обрізаних заголовків та описів у результатах пошуку.',
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
      id: {
        slug: 'penghitung-kata-dan-karakter',
        title: 'Penghitung kata & karakter',
        description: 'Periksa panjang teks dan evaluasi apakah sesuai untuk halaman utama, halaman layanan, artikel blog, atau deskripsi produk.',
      },
      vi: {
        slug: 'dem-tu-va-ky-tu',
        title: 'Đếm từ và ký tự',
        description: 'Kiểm tra độ dài văn bản và đánh giá xem có phù hợp với trang chủ, trang dịch vụ, bài blog hay mô tả sản phẩm không.',
      },
      tr: {
        slug: 'kelime-ve-karakter-sayaci',
        title: 'Kelime ve karakter sayacı',
        description: 'Metin uzunluğunu kontrol edin ve ana sayfa, hizmet sayfası, blog yazısı veya ürün açıklaması için uygun olup olmadığını değerlendirin.',
      },
      tl: {
        slug: 'tagabilang-ng-salita-at-character',
        title: 'Tagabilang ng salita at character',
        description: 'Suriin ang haba ng teksto at i-evaluate kung angkop ito sa homepage, service page, blog post, o product description.',
      },
      sw: {
        slug: 'kihesabuji-maneno-na-herufi',
        title: 'Kihesabuji maneno na herufi',
        description: 'Angalia urefu wa maandishi na utathmini kama yanafaa kwa ukurasa wa nyumbani, huduma, chapisho la blogu au maelezo ya bidhaa.',
      },
      ms: {
        slug: 'pengira-perkataan-dan-aksara',
        title: 'Pengira perkataan dan aksara',
        description: 'Semak panjang teks dan nilaikan sama ada sesuai untuk halaman utama, halaman perkhidmatan, artikel blog, atau penerangan produk.',
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
      sq: {
        slug: 'numerues-fjalesh-dhe-karakteresh',
        title: 'Numerëes fjalësh dhe karakteresh',
        description: 'Kontrolloni gjatësinë e tekstit dhe vlerësoni nëse është e përshtatshme për faqen kryesore, faqen e shërbimeve, artikullin e blogut ose përshkrimin e produktit.',
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
      sk: {
        slug: 'pocitadlo-slov-a-znakov',
        title: 'Počítadlo slov a znakov',
        description: 'Skontrolujte dĺžku textu a posúďte, či sa hodí na hlavnú stránku, stránku služieb, článok na blog alebo popis produktu.',
      },
      hr: {
        slug: 'brojac-rijeci-i-znakova',
        title: 'Brojač riječi i znakova',
        description: 'Provjerite duljinu teksta i ocijenite odgovara li početnoj stranici, stranici usluga, članku na blogu ili opisu proizvoda.',
      },
      lt: {
        slug: 'zodziu-ir-simboliu-skaitiklis',
        title: 'Žodžių ir simbolių skaitiklis',
        description: 'Patikrinkite teksto ilgį ir įvertinkite, ar jis tinka pagrindiniam puslapiui, paslaugų puslapiui, tinklarasčio įrašui ar produkto aprašymui.',
      },
      sl: {
        slug: 'stevec-besed-in-znakov',
        title: 'Števec besed in znakov',
        description: 'Preverite dolžino besedila in ocenite, ali je primerno za domačo stran, stran storitev, članek na blogu ali opis izdelka.',
      },
      el: {
        slug: 'metritis-lexeon-kai-charaktiron',
        title: 'Μετρητής λέξεων και χαρακτήρων',
        description: 'Ελέγξτε το μήκος κειμένου και αξιολογήστε αν ταιριάζει σε αρχική σελίδα, σελίδα υπηρεσιών, άρθρο ή περιγραφή προϊόντος.',
      },
      bg: {
        slug: 'broiach-na-dumi-i-simvoli',
        title: 'Брояч на думи и символи',
        description: 'Проверете дължината на текста и преценете дали е подходяща за начална страница, страница за услуги, блог статия или описание на продукт.',
      },
      ha: {
        slug: 'kidaya-kalmomi-da-haruffa',
        title: 'Kidaya kalmomi da haruffa',
        description: 'Duba tsawon rubutu kuma tantance ko ya dace da shafin farko, shafin sabis, labarin blog, ko bayanin kaya.',
      },
      yo: {
        slug: 'oluka-oro-ati-ohun-kikoo',
        title: 'Olùkà ọ̀rọ̀ àti ohun kíkọ',
        description: 'Ṣàyẹ̀wò gígùn ọ̀rọ̀ kí o sì ṣe àyẹ̀wò bóyá ó tọ́ fún ojú-ìwé ilé, ojú-ìwé iṣẹ́, àkọlé blog, tàbí àpèjúwe ọjà.',
      },
      af: {
        slug: 'woord-en-karakter-teller',
        title: 'Woord- en karakterteller',
        description: "Kontroleer tekslengte en evalueer of dit pas vir 'n tuisblad, diensbladsy, bloginskrywing of produkbeskrywing.",
      },
      uk: {
        slug: 'lichylnyk-sliv-i-symvoliv',
        title: 'Лічильник слів та символів',
        description: 'Перевірте довжину тексту та оцініть, чи відповідає він головній сторінці, опису послуги, статті чи опису продукту.',
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
      id: {
        slug: 'generator-tanda-tangan-email-gratis',
        title: 'Generator tanda tangan email',
        description: 'Buat tanda tangan email profesional dalam hitungan menit. Salin kode HTML siap pakai ke Gmail atau Outlook.',
      },
      vi: {
        slug: 'tao-chu-ky-email-mien-phi',
        title: 'Tạo chữ ký email',
        description: 'Tạo chữ ký email chuyên nghiệp trong vài phút. Sao chép mã HTML sẵn vào Gmail hoặc Outlook.',
      },
      tr: {
        slug: 'ucretsiz-e-posta-imza-olusturucu',
        title: 'E-posta imza oluşturucu',
        description: 'Dakikalar içinde profesyonel bir e-posta imzası oluşturun. Hazır HTML kodunu Gmail veya Outlook’a kopyalayın.',
      },
      tl: {
        slug: 'libreng-email-signature-generator',
        title: 'Email signature generator',
        description: 'Gumawa ng propesyonal na email signature sa ilang minuto. Kopyahin ang handa nang HTML code sa Gmail o Outlook.',
      },
      sw: {
        slug: 'kitengenezaji-saini-barua-pepe-bure',
        title: 'Kitengenezaji saini barua pepe',
        description: 'Tengeneza saini ya barua pepe ya kitaalamu kwa dakika chache. Nakili msimbo wa HTML uliokuwa tayari kwenye Gmail au Outlook.',
      },
      ms: {
        slug: 'penjana-tandatangan-emel-percuma',
        title: 'Penjana tandatangan e-mel',
        description: 'Bina tandatangan e-mel profesional dalam beberapa minit. Salin kod HTML sedia ada ke Gmail atau Outlook.',
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
      sq: {
        slug: 'gjenerues-nenshkrimi-email-falas',
        title: 'Gjenerues nënshkrimi email',
        description: 'Krijoni një nënshkrim profesional email në pak minuta. Kopjoni kodin HTML të gatshëm në Gmail ose Outlook.',
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
      sk: {
        slug: 'generator-podpisu-emailu-zadarmo',
        title: 'Generátor podpisu e-mailu',
        description: 'Vytvorte profesionálny e-mailový podpis za pár minút. Skopírujte hotový HTML kód do Gmailu alebo Outlooku.',
      },
      hr: {
        slug: 'besplatni-generator-potpisa-emaila',
        title: 'Generator potpisa e-pošte',
        description: 'Izradite profesionalni potpis e-pošte u nekoliko minuta. Kopirajte gotov HTML kod u Gmail ili Outlook.',
      },
      lt: {
        slug: 'nemokamas-el-pasto-paraso-generatorius',
        title: 'El. pašto parašo generatorius',
        description: 'Sukurkite profesionalų el. pašto parašą per kelias minutes. Nukopijuokite gatavą HTML kodą į Gmail arba Outlook.',
      },
      sl: {
        slug: 'brezplacni-generator-podpisa-eposta',
        title: 'Generator podpisa e-pošte',
        description: 'Ustvarite profesionalni podpis e-pošte v nekaj minutah. Kopirajte končan HTML kodo v Gmail ali Outlook.',
      },
      el: {
        slug: 'dorean-dimiourgia-ypografis-email',
        title: 'Δημιουργία υπογραφής email',
        description: 'Δημιουργήστε επαγγελματική υπογραφή email σε λίγα λεπτά. Αντιγράψτε τον έτοιμο κώδικα HTML στο Gmail ή στο Outlook.',
      },
      bg: {
        slug: 'bezplaten-generator-na-podpis-za-email',
        title: 'Генератор на подпис за имейл',
        description: 'Създайте професионален подпис за имейл за минути. Копирайте готовия HTML код в Gmail или Outlook.',
      },
      ha: {
        slug: 'samar-da-sa-hannu-imel-kyauta',
        title: 'Mai samar da sa hannun imel',
        description: 'Gina sa hannun imel na kwararru a cikin mintuna kadan. Kwafa lambar HTML da aka riga aka yi zuwa Gmail ko Outlook.',
      },
      yo: {
        slug: 'olupilese-ibuwolu-imeeli-ofe',
        title: 'Olùpilẹ̀ṣẹ̀ ìbuwọ́lù ímeèlì',
        description: 'Kọ́ ìbuwọ́lù ímeèlì ọjọ́gbọ́n ní ìṣẹ́jú díẹ̀. Ṣe àdàkọ kóòdù HTML tó ti ṣetán sínú Gmail tàbí Outlook.',
      },
      af: {
        slug: 'gratis-e-pos-handtekening-generator',
        title: 'E-poshandtekeninggenerator',
        description: "Skep 'n professionele e-poshandtekening binne minute. Kopieer die klaargemaakte HTML-kode na Gmail of Outlook.",
      },
      uk: {
        slug: 'bezkoshtovnyi-generator-pidpysu-email',
        title: 'Генератор підпису електронної пошти',
        description: 'Створіть професійний підпис електронної пошти за кілька хвилин. Скопіюйте готовий HTML-код у Gmail або Outlook.',
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
      id: {
        slug: 'pemeriksa-kontras-warna',
        title: 'Pemeriksa kontras warna',
        description: 'Periksa apakah warna teks dan latar belakang Anda mudah dibaca. Alat ini menghitung kontras sesuai WCAG dan membantu memilih warna yang tepat.',
      },
      vi: {
        slug: 'kiem-tra-do-tuong-phan-mau',
        title: 'Kiểm tra độ tương phản màu',
        description: 'Kiểm tra xem màu chữ và màu nền của bạn có dễ đọc không. Công cụ tính độ tương phản theo WCAG và giúp chọn màu phù hợp.',
      },
      tr: {
        slug: 'renk-kontrast-kontrolu',
        title: 'Renk kontrast kontrolü',
        description: 'Metin ve arka plan renklerinizin okunaklı olup olmadığını kontrol edin. Araç WCAG’a göre kontrastı hesaplar ve doğru rengi seçmenize yardımcı olur.',
      },
      tl: {
        slug: 'tagasuri-ng-contrast-ng-kulay',
        title: 'Tagasuri ng contrast ng kulay',
        description: 'Suriin kung nababasa ang kulay ng teksto at background. Kinakalkula ng tool ang contrast ayon sa WCAG at tumutulong pumili ng tamang kulay.',
      },
      sw: {
        slug: 'kikaguzi-cha-utofautishaji-rangi',
        title: 'Kikaguzi cha utofautishaji rangi',
        description: 'Angalia kama rangi za maandishi na mandharinyuma zinasomeka. Zana huhesabu utofautishaji kulingana na WCAG na husaidia kuchagua rangi sahihi.',
      },
      ms: {
        slug: 'penyemak-kontras-warna',
        title: 'Penyemak kontras warna',
        description: 'Semak sama ada warna teks dan latar belakang anda boleh dibaca. Alat mengira kontras mengikut WCAG dan membantu memilih warna yang betul.',
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
      sq: {
        slug: 'kontrollues-kontrasti-ngjyrave',
        title: 'Kontrollues kontrasti ngjyrave',
        description: 'Kontrolloni nëse ngjyrat e tekstit dhe sfondit janë të lexueshme. Mjeti llogarit kontrastin sipas WCAG dhe ndihmon në zgjedhjen e ngjyrës së duhur.',
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
      sk: {
        slug: 'kontrola-kontrastu-farieb',
        title: 'Kontrola kontrastu farieb',
        description: 'Skontrolujte, či sú farby textu a pozadia čitateľné. Nástroj vypočíta kontrast podľa WCAG a pomôže vybrať správnu farbu.',
      },
      hr: {
        slug: 'provjera-kontrasta-boja',
        title: 'Provjera kontrasta boja',
        description: 'Provjerite jesu li boje teksta i pozadine čitljive. Alat računa kontrast prema WCAG-u i pomaže odabrati pravu boju.',
      },
      lt: {
        slug: 'spalvu-kontrasto-tikrintuvas',
        title: 'Spalvų kontrasto tikrintuvas',
        description: 'Patikrinkite, ar teksto ir fono spalvos yra įskaitomos. Įrankis apskaičiuoja kontrastą pagal WCAG ir padeda pasirinkti teisingą spalvą.',
      },
      sl: {
        slug: 'preverjanje-kontrasta-barv',
        title: 'Preverjanje kontrasta barv',
        description: 'Preverite, ali sta barvi besedila in ozadja berljivi. Orodje izračuna kontrast po WCAG in pomaga izbrati pravo barvo.',
      },
      el: {
        slug: 'elegkhos-kontrast-chromaton',
        title: 'Έλεγχος αντίθεσης χρωμάτων',
        description: 'Ελέγξτε αν τα χρώματα κειμένου και φόντου είναι ευανάγνωστα. Το εργαλείο υπολογίζει την αντίθεση σύμφωνα με το WCAG και βοηθά στην επιλογή χρώματος.',
      },
      bg: {
        slug: 'proverka-na-kontrast-na-tsvetove',
        title: 'Проверка на контраст на цветове',
        description: 'Проверете дали цветовете на текста и фона са четливи. Инструментът изчислява контраста по WCAG и помага при избора на правилния цвят.',
      },
      ha: {
        slug: 'tantance-bambancin-launuka',
        title: 'Tantance bambancin launuka',
        description: 'Duba ko launukan rubutu da bango suna da saukin karantawa. Kayan aiki yana lissafin bambanci bisa WCAG kuma yana taimakawa wajen zabar launi.',
      },
      yo: {
        slug: 'atunyewo-iyato-awon-awoo',
        title: 'Àtúnyẹ̀wò ìyàtọ̀ àwọn àwọ̀',
        description: 'Ṣàyẹ̀wò bóyá àwọ̀ ọ̀rọ̀ àti àwọ̀ ẹ̀yìn ṣé kà. Irinṣẹ́ náà ṣe ìṣirò ìyàtọ̀ gẹ́gẹ́ bí WCAG, ó sì ràn ọ́ lọ́wọ́ láti yan àwọ̀ tó tọ́.',
      },
      af: {
        slug: 'kleurkontras-nagaaier',
        title: 'Kleurkontras-nagaaier',
        description: 'Kontroleer of jou teks- en agtergrondkleure leesbaar is. Die gereedskap bereken kontras volgens WCAG en help om die regte kleur te kies.',
      },
      uk: {
        slug: 'perevirka-kontrastu-koloriv',
        title: 'Перевірка контрасту кольорів',
        description: 'Перевірте, чи читається текст на обраному фоні. Інструмент розраховує контраст згідно з WCAG і допоможе обрати правильний колір.',
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
      id: {
        slug: 'ekstraktor-warna-dari-gambar',
        title: 'Ekstraktor warna dari gambar',
        description: 'Unggah foto atau logo dan alat ini akan mengekstrak warna dominan. Salin kode warna yang dihasilkan dengan satu klik.',
      },
      vi: {
        slug: 'trich-xuat-mau-tu-hinh-anh',
        title: 'Trích xuất màu từ hình ảnh',
        description: 'Tải lên ảnh hoặc logo và công cụ sẽ trích xuất các màu chủ đạo. Sao chép mã màu được tạo với một lần nhấn.',
      },
      tr: {
        slug: 'gorsel-renk-cikarici',
        title: 'Görsel renk çıkarıcı',
        description: 'Bir fotoğraf veya logo yükleyin ve araç baskın renkleri çıkaracaktır. Oluşturulan renk kodlarını tek tıkla kopyalayın.',
      },
      tl: {
        slug: 'tagakuha-ng-kulay-mula-sa-larawan',
        title: 'Tagakuha ng kulay mula sa larawan',
        description: 'Mag-upload ng litrato o logo at kukunin ng tool ang mga nangingibabaw na kulay. Kopyahin ang mga code ng kulay sa isang click.',
      },
      sw: {
        slug: 'kitoa-rangi-kutoka-picha',
        title: 'Kitoa rangi kutoka picha',
        description: 'Pakia picha au nembo na zana itatoa rangi kuu. Nakili misimbo ya rangi iliyotengenezwa kwa kubofya moja.',
      },
      ms: {
        slug: 'pengekstrak-warna-dari-imej',
        title: 'Pengekstrak warna dari imej',
        description: 'Muat naik foto atau logo dan alat akan mengekstrak warna dominan. Salin kod warna yang dijana dengan satu klik.',
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
      sq: {
        slug: 'nxjerres-ngjyrash-nga-imazhi',
        title: 'Nxjerrës ngjyrash nga imazhi',
        description: 'Ngarkoni një foto ose logo dhe mjeti do të nxjerrë ngjyrat dominuese. Kopjoni kodet e ngjyrave të gjeneruara me një klikim.',
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
      sk: {
        slug: 'extraktor-farieb-z-obrazka',
        title: 'Extraktor farieb z obrázka',
        description: 'Nahrajte fotku alebo logo a nástroj extrahuje dominantné farby. Skopírujte vygenerované farebné kódy jedným kliknutím.',
      },
      hr: {
        slug: 'izdvajanje-boja-iz-slike',
        title: 'Izdvajanje boja iz slike',
        description: 'Prenesite fotografiju ili logo i alat će izdvojiti dominantne boje. Kopirajte generirane kodove boja jednim klikom.',
      },
      lt: {
        slug: 'spalvu-isrinkimas-is-vaizdo',
        title: 'Spalvų išrinkimas iš vaizdo',
        description: 'Įkelkite nuotrauką arba logotipą ir įrankis išrinks dominuojančias spalvas. Nukopijuokite sugeneruotus spalvų kodus vienu paspaudimu.',
      },
      sl: {
        slug: 'izlocanje-barv-iz-slike',
        title: 'Izločanje barv iz slike',
        description: 'Naložite fotografijo ali logotip in orodje bo izločilo prevladujoče barve. Kopirajte ustvarjene barvne kode z enim klikom.',
      },
      el: {
        slug: 'exagogi-chromaton-apo-eikona',
        title: 'Εξαγωγή χρωμάτων από εικόνα',
        description: 'Ανεβάστε μια φωτογραφία ή λογότυπο και το εργαλείο θα εξάγει τα κυρίαρχα χρώματα. Αντιγράψτε τους κωδικούς χρωμάτων με ένα κλικ.',
      },
      bg: {
        slug: 'ekstraktor-na-tsvetove-ot-izobrazhenie',
        title: 'Екстрактор на цветове от изображение',
        description: 'Качете снимка или лого и инструментът ще извлече доминиращите цветове. Копирайте генерираните цветови кодове с едно кликване.',
      },
      ha: {
        slug: 'fitar-launuka-daga-hoto',
        title: 'Fitar launuka daga hoto',
        description: 'Loda hoto ko alamar kasuwanci kuma kayan aiki zai fitar da manyan launuka. Kwafa lambobin launuka da aka samar da danna guda.',
      },
      yo: {
        slug: 'iseduro-awoo-lati-aworan',
        title: 'Ìṣèdúró àwọ̀ láti àwòrán',
        description: 'Gbé àwòrán tàbí àmì iṣẹ́ síta, irinṣẹ́ náà yóò fà àwọn àwọ̀ àkọ́kọ́ jáde. Ṣe àdàkọ àwọn kóòdù àwọ̀ pẹ̀lú ìtẹ̀ kan.',
      },
      af: {
        slug: 'kleur-onttrekker-uit-beeld',
        title: 'Kleuronttrekker uit beeld',
        description: "Laai 'n foto of logo op en die gereedskap sal die dominante kleure onttrek. Kopieer gegenereerde kleurkodes met een klik.",
      },
      uk: {
        slug: 'ekstraktor-koloriv-z-zobrazhennia',
        title: 'Екстрактор кольорів із зображення',
        description: 'Завантажте фото або логотип, і інструмент виділить домінуючі кольори. Скопіюйте коди кольорів одним кліком.',
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
      id: {
        slug: 'generator-palet-warna',
        title: 'Generator palet warna',
        description: 'Pilih satu warna dan hasilkan 9 palet: monokromatik, komplementer, triadik, dan lainnya.',
      },
      vi: {
        slug: 'tao-bang-mau',
        title: 'Tạo bảng màu',
        description: 'Chọn một màu và tạo 9 bảng màu: đơn sắc, bổ sung, bộ ba và nhiều hơn.',
      },
      tr: {
        slug: 'renk-paleti-olusturucu',
        title: 'Renk paleti oluşturucu',
        description: 'Bir renk seçin ve 9 palet oluşturun: monokromatik, komplementer, triadik ve daha fazlası.',
      },
      tl: {
        slug: 'generator-ng-palette-ng-kulay',
        title: 'Generator ng palette ng kulay',
        description: 'Pumili ng isang kulay at gumawa ng 9 na palette: monochromatic, complementary, triadic, at iba pa.',
      },
      sw: {
        slug: 'kitengenezaji-paleti-za-rangi',
        title: 'Kitengenezaji paleti za rangi',
        description: 'Chagua rangi moja na utengeneze paleti 9: rangi moja, nyongeza, tatu na zaidi.',
      },
      ms: {
        slug: 'penjana-palet-warna',
        title: 'Penjana palet warna',
        description: 'Pilih satu warna dan jana 9 palet: monokromatik, pelengkap, triadik dan lain-lain.',
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
      sq: {
        slug: 'gjenerues-paletash-ngjyrash',
        title: 'Gjenerues paletash ngjyrash',
        description: 'Zgjidhni një ngjyrë dhe gjeneroni 9 paleta: monokromatike, komplementare, triadike dhe më shumë.',
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
      sk: {
        slug: 'generator-farebnych-palet',
        title: 'Generátor farebných palét',
        description: 'Vyberte jednu farbu a vygenerujte 9 palét: monochromatickú, komplementárnu, triadickú a ďalšie.',
      },
      hr: {
        slug: 'generator-paleta-boja',
        title: 'Generator paleta boja',
        description: 'Odaberite jednu boju i generirajte 9 paleta: monokromatsku, komplementarnu, trijadsku i druge.',
      },
      lt: {
        slug: 'spalvu-paletes-generatorius',
        title: 'Spalvų paletių generatorius',
        description: 'Pasirinkite vieną spalvą ir sugeneruokite 9 paletes: monochromatinę, komplementarinę, triadinę ir kitas.',
      },
      sl: {
        slug: 'generator-barvnih-palet',
        title: 'Generator barvnih palet',
        description: 'Izberite eno barvo in ustvarite 9 palet: monokromatsko, komplementarno, triadsko in druge.',
      },
      el: {
        slug: 'dimiourgia-paletas-chromaton',
        title: 'Δημιουργία παλέτας χρωμάτων',
        description: 'Επιλέξτε ένα χρώμα και δημιουργήστε 9 παλέτες: μονοχρωματική, συμπληρωματική, τριαδική και άλλες.',
      },
      bg: {
        slug: 'generator-na-tsvetovi-palitri',
        title: 'Генератор на цветови палитри',
        description: 'Изберете един цвят и генерирайте 9 палитри: монохроматична, комплементарна, триадична и други.',
      },
      ha: {
        slug: 'samar-da-fayafayan-launuka',
        title: 'Mai samar da fayafayan launuka',
        description: 'Zabi launi guda kuma samar da fayafai 9: launi guda, karin launi, uku da sauransu.',
      },
      yo: {
        slug: 'olupilese-paleti-awoo',
        title: 'Olùpilẹ̀ṣẹ̀ pálẹ́ẹ̀tì àwọ̀',
        description: 'Yan àwọ̀ kan kí o sì ṣẹ̀dá pálẹ́ẹ̀tì 9: aláwọ̀kan, aláwọ̀ méjì, aláwọ̀ mẹ́ta àti àwọn mìíràn.',
      },
      af: {
        slug: 'kleurpalet-generator',
        title: 'Kleurpaletgenerator',
        description: 'Kies een kleur en genereer 9 palette: monochromaties, komplementêr, triadies en meer.',
      },
      uk: {
        slug: 'generator-kolirnykh-palitr',
        title: 'Генератор колірних палітр',
        description: 'Оберіть один колір і згенеруйте 9 палітр: монохромна, комплементарна, тріадна та інші.',
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
      id: {
        slug: 'generator-kode-qr-gratis',
        title: 'Generator kode QR gratis',
        description: 'Buat kode QR untuk situs web, vCard, menu, atau brosur. Ekspor ke PNG dan SVG, tanpa login, tanpa batasan.',
      },
      vi: {
        slug: 'tao-ma-qr-mien-phi',
        title: 'Tạo mã QR miễn phí',
        description: 'Tạo mã QR cho trang web, vCard, menu hoặc tờ rơi. Xuất ra PNG và SVG, không cần đăng nhập, không giới hạn.',
      },
      tr: {
        slug: 'ucretsiz-qr-kod-olusturucu',
        title: 'Ücretsiz QR kod oluşturucu',
        description: 'Web sitesi, vCard, menü veya broşür için QR kod oluşturun. PNG ve SVG olarak dışarı aktarın, giriş veya sınır yok.',
      },
      tl: {
        slug: 'libreng-qr-code-generator',
        title: 'Libreng QR code generator',
        description: 'Gumawa ng QR code para sa website, vCard, menu, o flyer. I-export sa PNG at SVG, walang login, walang limitasyon.',
      },
      sw: {
        slug: 'kitengenezaji-msimbo-qr-bure',
        title: 'Kitengenezaji msimbo QR bure',
        description: 'Tengeneza msimbo QR kwa tovuti, vCard, menyu au kipeperushi. Hamisha kama PNG na SVG, bila kuingia, bila kikomo.',
      },
      ms: {
        slug: 'penjana-kod-qr-percuma',
        title: 'Penjana kod QR percuma',
        description: 'Cipta kod QR untuk laman web, vCard, menu atau risalah. Eksport ke PNG dan SVG, tanpa log masuk, tanpa had.',
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
      sq: {
        slug: 'gjenerues-kodi-qr-falas',
        title: 'Gjenerues kodi QR falas',
        description: 'Krijoni një kod QR për faqe interneti, vCard, menu ose fletushkë. Eksportoni në PNG dhe SVG, pa hyrje, pa kufizime.',
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
        description: 'Luo QR-koodi verkkosivulle, vCard-k\u00e4yntikortille, menulle tai esitteelle. Vie PNG- ja SVG-muotoon ilman kirjautumista ja rajoituksia.',
      },
      sk: {
        slug: 'generator-qr-kodov-zadarmo',
        title: 'Generátor QR kódov zadarmo',
        description: 'Vytvorte QR kód pre web, vCard, menu alebo leták. Export do PNG a SVG, bez prihlásenia, bez limitov.',
      },
      hr: {
        slug: 'besplatni-generator-qr-kodova',
        title: 'Besplatni generator QR kodova',
        description: 'Izradite QR kod za web stranicu, vCard, jelovnik ili letak. Izvoz u PNG i SVG, bez prijave, bez ograničenja.',
      },
      lt: {
        slug: 'nemokamas-qr-kodo-generatorius',
        title: 'Nemokamas QR kodo generatorius',
        description: 'Sukurkite QR kodą svetainei, vCard, meniu ar skrajutei. Eksportuokite į PNG ir SVG, be prisijungimo, be apribojimų.',
      },
      sl: {
        slug: 'brezplacni-generator-qr-kod',
        title: 'Brezplačni generator QR kod',
        description: 'Ustvarite QR kodo za spletno stran, vCard, meni ali letak. Izvoz v PNG in SVG, brez prijave, brez omejitev.',
      },
      el: {
        slug: 'dorean-dimiourgia-kodikou-qr',
        title: 'Δωρεάν δημιουργία κωδικού QR',
        description: 'Δημιουργήστε κωδικό QR για ιστότοπο, vCard, μενού ή φυλλάδιο. Εξαγωγή σε PNG και SVG, χωρίς σύνδεση, χωρίς όρια.',
      },
      bg: {
        slug: 'bezplaten-generator-na-qr-kod',
        title: 'Безплатен генератор на QR код',
        description: 'Създайте QR код за уебсайт, vCard, меню или брошура. Експорт в PNG и SVG, без регистрация, без ограничения.',
      },
      ha: {
        slug: 'samar-da-lambar-qr-kyauta',
        title: 'Mai samar da lambar QR kyauta',
        description: 'Kirkiri lambar QR don shafin yanar gizo, vCard, menu, ko takarda. Fitar da PNG da SVG, ba tare da shiga ba, ba tare da iyaka ba.',
      },
      yo: {
        slug: 'olupilese-koodu-qr-ofe',
        title: 'Olùpilẹ̀ṣẹ̀ kóòdù QR ọ̀fẹ́',
        description: 'Ṣẹ̀dá kóòdù QR fún ojú-ìwé ayélujára, vCard, àkójọ oúnjẹ, tàbí ìwé pélébé. Gbé jáde sí PNG àti SVG, láìsí ìwọlé, láìsí ààlà.',
      },
      af: {
        slug: 'gratis-qr-kode-generator',
        title: 'Gratis QR-kode-generator',
        description: "Skep 'n QR-kode vir 'n webwerf, vCard, spyskaart of pamflet. Voer uit na PNG en SVG, sonder aanmelding, sonder perke.",
      },
      uk: {
        slug: 'bezkoshtovnyi-generator-qr-kodu',
        title: 'Безкоштовний генератор QR-коду',
        description: 'Створіть QR-код для вебсайту, vCard, меню або листівки. Експорт у PNG та SVG, без реєстрації, без обмежень.',
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
