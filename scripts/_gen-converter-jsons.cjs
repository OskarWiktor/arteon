/**
 * Generate JSON data files for all missing converter×locale combinations.
 * Uses PL JSON structure as template, generates proper localized content.
 */
const fs = require('fs');
const path = require('path');

const LOCALES = ['en', 'de', 'es', 'fr', 'pt', 'it', 'ro', 'nl', 'hu', 'cs', 'sv', 'da', 'no', 'fi', 'el'];
const dataDir = path.join(__dirname, '..', 'data');

// ═══════════════════════════════════════════════════════════════
// Format labels & locale config
// ═══════════════════════════════════════════════════════════════
const F = {
  jpg: 'JPG',
  png: 'PNG',
  webp: 'WebP',
  avif: 'AVIF',
  gif: 'GIF',
  bmp: 'BMP',
  svg: 'SVG',
  heic: 'HEIC',
  tiff: 'TIFF',
  pdf: 'PDF',
  csv: 'CSV',
  json: 'JSON',
  xml: 'XML',
  yaml: 'YAML',
  markdown: 'Markdown',
  html: 'HTML',
  base64: 'Base64',
};

const IMG_WORD = {
  en: 'image',
  de: 'Bild',
  es: 'imagen',
  fr: 'image',
  pt: 'imagem',
  it: 'immagine',
  ro: 'imagine',
  nl: 'afbeelding',
  hu: 'kép',
  cs: 'obrázek',
  sv: 'bild',
  da: 'billede',
  no: 'bilde',
  fi: 'kuva',
  el: 'εικόνα',
};

const TOOLS_LABEL = {
  en: 'Tools',
  de: 'Werkzeuge',
  es: 'Herramientas',
  fr: 'Outils',
  pt: 'Ferramentas',
  it: 'Strumenti',
  ro: 'Instrumente',
  nl: 'Tools',
  hu: 'Eszközök',
  cs: 'Nástroje',
  sv: 'Verktyg',
  da: 'Værktøjer',
  no: 'Verktøy',
  fi: 'Työkalut',
  el: 'Εργαλεία',
};

const TOOLS_BASE = {
  en: '/en/tools',
  de: '/de/werkzeuge',
  es: '/es/herramientas',
  fr: '/fr/outils',
  pt: '/pt/ferramentas',
  it: '/it/strumenti',
  ro: '/ro/instrumente',
  nl: '/nl/tools',
  hu: '/hu/eszkozok',
  cs: '/cs/nastroje',
  sv: '/sv/verktyg',
  da: '/da/vaerktojer',
  no: '/no/verktoy',
  fi: '/fi/tyokalut',
  el: '/el/ergaleia',
};

// ═══════════════════════════════════════════════════════════════
// Slug generation (same as registry script)
// ═══════════════════════════════════════════════════════════════
const IMG_SLUG = {
  en: 'image',
  de: 'bild',
  es: 'imagen',
  fr: 'image',
  pt: 'imagem',
  it: 'immagine',
  ro: 'imagine',
  nl: 'afbeelding',
  hu: 'kep',
  cs: 'obrazek',
  sv: 'bild',
  da: 'billede',
  no: 'bilde',
  fi: 'kuva',
  el: 'eikona',
};

function makeSlug(loc, src, tgt) {
  const s = src === 'image' ? IMG_SLUG[loc] : src;
  const t = tgt === 'image' ? IMG_SLUG[loc] : tgt;
  const m = {
    en: `${s}-to-${t}-converter`,
    de: `${s}-zu-${t}-konverter`,
    es: `convertidor-${s}-a-${t}`,
    fr: `convertisseur-${s}-en-${t}`,
    pt: `conversor-${s}-para-${t}`,
    it: `convertitore-${s}-in-${t}`,
    ro: `convertor-${s}-in-${t}`,
    nl: `${s}-naar-${t}-converter`,
    hu: `${s}-${t}-konverter`,
    cs: `prevodnik-${s}-na-${t}`,
    sv: `${s}-till-${t}-konverterare`,
    da: `${s}-til-${t}-konverter`,
    no: `${s}-til-${t}-konverterer`,
    fi: `${s}-${t}-muunnin`,
    el: `metatropeas-${s}-se-${t}`,
  };
  return m[loc];
}

function makeTitle(loc, src, tgt) {
  const s = src === 'image' ? IMG_WORD[loc] : F[src];
  const t = tgt === 'image' ? IMG_WORD[loc] : F[tgt];
  const m = {
    en: `${s} to ${t} converter`,
    de: `${s}-zu-${t}-Konverter`,
    es: `Convertidor ${s} a ${t}`,
    fr: `Convertisseur ${s} en ${t}`,
    pt: `Conversor ${s} para ${t}`,
    it: `Convertitore ${s} in ${t}`,
    ro: `Convertor ${s} în ${t}`,
    nl: `${s} naar ${t} converter`,
    hu: `${s} ${t} konverter`,
    cs: `Převodník ${s} na ${t}`,
    sv: `${s} till ${t}-konverterare`,
    da: `${s} til ${t}-konverter`,
    no: `${s} til ${t}-konverterer`,
    fi: `${s} ${t} -muunnin`,
    el: `Μετατροπέας ${s} σε ${t}`,
  };
  return m[loc];
}

// ═══════════════════════════════════════════════════════════════
// Tools config
// ═══════════════════════════════════════════════════════════════
const TOOLS = [
  { key: 'avifToTiff', src: 'avif', tgt: 'tiff', cat: 'img', subCat: 'ImageConverter' },
  { key: 'jpgToPdf', src: 'jpg', tgt: 'pdf', cat: 'imgToPdf', subCat: 'FileConverter' },
  { key: 'pngToPdf', src: 'png', tgt: 'pdf', cat: 'imgToPdf', subCat: 'FileConverter' },
  { key: 'webpToPdf', src: 'webp', tgt: 'pdf', cat: 'imgToPdf', subCat: 'FileConverter' },
  { key: 'heicToPdf', src: 'heic', tgt: 'pdf', cat: 'imgToPdf', subCat: 'FileConverter' },
  { key: 'bmpToPdf', src: 'bmp', tgt: 'pdf', cat: 'imgToPdf', subCat: 'FileConverter' },
  { key: 'tiffToPdf', src: 'tiff', tgt: 'pdf', cat: 'imgToPdf', subCat: 'FileConverter' },
  { key: 'svgToPdf', src: 'svg', tgt: 'pdf', cat: 'imgToPdf', subCat: 'FileConverter' },
  { key: 'pdfToJpg', src: 'pdf', tgt: 'jpg', cat: 'pdfToImg', subCat: 'FileConverter' },
  { key: 'pdfToPng', src: 'pdf', tgt: 'png', cat: 'pdfToImg', subCat: 'FileConverter' },
  { key: 'pdfToWebp', src: 'pdf', tgt: 'webp', cat: 'pdfToImg', subCat: 'FileConverter' },
  { key: 'csvToJson', src: 'csv', tgt: 'json', cat: 'data', subCat: 'DataConverter' },
  { key: 'jsonToCsv', src: 'json', tgt: 'csv', cat: 'data', subCat: 'DataConverter' },
  { key: 'jsonToXml', src: 'json', tgt: 'xml', cat: 'data', subCat: 'DataConverter' },
  { key: 'xmlToJson', src: 'xml', tgt: 'json', cat: 'data', subCat: 'DataConverter' },
  { key: 'yamlToJson', src: 'yaml', tgt: 'json', cat: 'data', subCat: 'DataConverter' },
  { key: 'jsonToYaml', src: 'json', tgt: 'yaml', cat: 'data', subCat: 'DataConverter' },
  { key: 'markdownToHtml', src: 'markdown', tgt: 'html', cat: 'data', subCat: 'DataConverter' },
  { key: 'htmlToMarkdown', src: 'html', tgt: 'markdown', cat: 'data', subCat: 'DataConverter' },
  { key: 'imageToBase64', src: 'image', tgt: 'base64', cat: 'b64enc', subCat: 'DataConverter' },
  { key: 'base64ToImage', src: 'base64', tgt: 'image', cat: 'b64dec', subCat: 'DataConverter' },
];

// ═══════════════════════════════════════════════════════════════
// Locale-specific text templates
// ═══════════════════════════════════════════════════════════════

// --- Metadata description ---
function metaDesc(loc, S, T, cat) {
  const t = {
    img: {
      en: `Convert ${S} files to ${T} format. Free, private, unlimited. Works in your browser.`,
      de: `${S}-Dateien in ${T}-Format umwandeln. Kostenlos, privat, unbegrenzt.`,
      es: `Convierte archivos ${S} a formato ${T}. Gratis, privado y sin límites.`,
      fr: `Convertissez vos fichiers ${S} en ${T}. Gratuit, privé et illimité.`,
      pt: `Converta ficheiros ${S} para ${T}. Gratuito, privado e ilimitado.`,
      it: `Converti file ${S} in formato ${T}. Gratuito, privato e illimitato.`,
      ro: `Convertește fișiere ${S} în format ${T}. Gratuit, privat și nelimitat.`,
      nl: `Converteer ${S}-bestanden naar ${T}-formaat. Gratis, privé en onbeperkt.`,
      hu: `${S} fájlok konvertálása ${T} formátumba. Ingyenes, privát, korlátlan.`,
      cs: `Převeďte soubory ${S} do formátu ${T}. Zdarma, soukromě a bez omezení.`,
      sv: `Konvertera ${S}-filer till ${T}-format. Gratis, privat och obegränsat.`,
      da: `Konverter ${S}-filer til ${T}-format. Gratis, privat og ubegrænset.`,
      no: `Konverter ${S}-filer til ${T}-format. Gratis, privat og ubegrenset.`,
      fi: `Muunna ${S}-tiedostot ${T}-muotoon. Ilmainen, yksityinen ja rajoittamaton.`,
      el: `Μετατρέψτε αρχεία ${S} σε μορφή ${T}. Δωρεάν, ιδιωτικό και απεριόριστο.`,
    },
    imgToPdf: {
      en: `Convert ${S} images to PDF documents. Combine multiple files into one PDF. Free, no registration.`,
      de: `${S}-Bilder in PDF-Dokumente umwandeln. Mehrere Dateien zu einem PDF kombinieren. Kostenlos.`,
      es: `Convierte imágenes ${S} a documentos PDF. Combina varios archivos en un PDF. Gratis.`,
      fr: `Convertissez vos images ${S} en PDF. Combinez plusieurs fichiers en un seul PDF. Gratuit.`,
      pt: `Converta imagens ${S} para documentos PDF. Combine vários ficheiros num só PDF. Gratuito.`,
      it: `Converti immagini ${S} in documenti PDF. Combina più file in un unico PDF. Gratuito.`,
      ro: `Convertește imagini ${S} în documente PDF. Combină mai multe fișiere într-un PDF. Gratuit.`,
      nl: `Converteer ${S}-afbeeldingen naar PDF-documenten. Combineer meerdere bestanden in één PDF. Gratis.`,
      hu: `${S} képek konvertálása PDF dokumentummá. Több fájl egyesítése egy PDF-be. Ingyenes.`,
      cs: `Převeďte obrázky ${S} na dokumenty PDF. Spojte více souborů do jednoho PDF. Zdarma.`,
      sv: `Konvertera ${S}-bilder till PDF-dokument. Kombinera flera filer till en PDF. Gratis.`,
      da: `Konverter ${S}-billeder til PDF-dokumenter. Kombiner flere filer til én PDF. Gratis.`,
      no: `Konverter ${S}-bilder til PDF-dokumenter. Kombiner flere filer til én PDF. Gratis.`,
      fi: `Muunna ${S}-kuvat PDF-dokumenteiksi. Yhdistä useita tiedostoja yhdeksi PDF:ksi. Ilmainen.`,
      el: `Μετατρέψτε εικόνες ${S} σε PDF. Συνδυάστε πολλαπλά αρχεία σε ένα PDF. Δωρεάν.`,
    },
    pdfToImg: {
      en: `Convert PDF pages to ${T} images. High quality, no file limits. Free, no registration.`,
      de: `PDF-Seiten in ${T}-Bilder umwandeln. Hohe Qualität, ohne Limits. Kostenlos.`,
      es: `Convierte páginas PDF a imágenes ${T}. Alta calidad, sin límites. Gratis.`,
      fr: `Convertissez les pages PDF en images ${T}. Haute qualité, sans limites. Gratuit.`,
      pt: `Converta páginas PDF em imagens ${T}. Alta qualidade, sem limites. Gratuito.`,
      it: `Converti pagine PDF in immagini ${T}. Alta qualità, senza limiti. Gratuito.`,
      ro: `Convertește pagini PDF în imagini ${T}. Calitate înaltă, fără limite. Gratuit.`,
      nl: `Converteer PDF-pagina's naar ${T}-afbeeldingen. Hoge kwaliteit, geen limieten. Gratis.`,
      hu: `PDF oldalak konvertálása ${T} képekké. Kiváló minőség, korlátok nélkül. Ingyenes.`,
      cs: `Převeďte stránky PDF na obrázky ${T}. Vysoká kvalita, bez omezení. Zdarma.`,
      sv: `Konvertera PDF-sidor till ${T}-bilder. Hög kvalitet, inga begränsningar. Gratis.`,
      da: `Konverter PDF-sider til ${T}-billeder. Høj kvalitet, ingen begrænsninger. Gratis.`,
      no: `Konverter PDF-sider til ${T}-bilder. Høy kvalitet, ingen begrensninger. Gratis.`,
      fi: `Muunna PDF-sivut ${T}-kuviksi. Korkea laatu, ei rajoituksia. Ilmainen.`,
      el: `Μετατρέψτε σελίδες PDF σε εικόνες ${T}. Υψηλή ποιότητα, χωρίς όρια. Δωρεάν.`,
    },
    data: {
      en: `Convert ${S} to ${T} format. Automatic parsing and formatting. Free, no registration.`,
      de: `${S} in ${T}-Format konvertieren. Automatisches Parsen und Formatieren. Kostenlos.`,
      es: `Convierte ${S} a formato ${T}. Análisis y formato automáticos. Gratis.`,
      fr: `Convertissez ${S} en format ${T}. Analyse et formatage automatiques. Gratuit.`,
      pt: `Converta ${S} para formato ${T}. Análise e formatação automáticas. Gratuito.`,
      it: `Converti ${S} in formato ${T}. Analisi e formattazione automatiche. Gratuito.`,
      ro: `Convertește ${S} în format ${T}. Parsare și formatare automată. Gratuit.`,
      nl: `Converteer ${S} naar ${T}-formaat. Automatisch parsen en formatteren. Gratis.`,
      hu: `${S} konvertálása ${T} formátumba. Automatikus elemzés és formázás. Ingyenes.`,
      cs: `Převeďte ${S} do formátu ${T}. Automatické parsování a formátování. Zdarma.`,
      sv: `Konvertera ${S} till ${T}-format. Automatisk parsning och formatering. Gratis.`,
      da: `Konverter ${S} til ${T}-format. Automatisk parsing og formatering. Gratis.`,
      no: `Konverter ${S} til ${T}-format. Automatisk parsing og formatering. Gratis.`,
      fi: `Muunna ${S} ${T}-muotoon. Automaattinen jäsennys ja muotoilu. Ilmainen.`,
      el: `Μετατρέψτε ${S} σε μορφή ${T}. Αυτόματη ανάλυση και μορφοποίηση. Δωρεάν.`,
    },
    b64enc: {
      en: `Encode images to Base64 format. Copy ready code for CSS or HTML. Free, no registration.`,
      de: `Bilder in Base64 kodieren. Fertigen Code für CSS oder HTML kopieren. Kostenlos.`,
      es: `Codifica imágenes en formato Base64. Copia el código listo para CSS o HTML. Gratis.`,
      fr: `Encodez des images en Base64. Copiez le code prêt pour CSS ou HTML. Gratuit.`,
      pt: `Codifique imagens em Base64. Copie o código pronto para CSS ou HTML. Gratuito.`,
      it: `Codifica immagini in formato Base64. Copia il codice pronto per CSS o HTML. Gratuito.`,
      ro: `Codifică imagini în format Base64. Copiază codul gata pentru CSS sau HTML. Gratuit.`,
      nl: `Codeer afbeeldingen naar Base64-formaat. Kopieer kant-en-klare code voor CSS of HTML. Gratis.`,
      hu: `Képek kódolása Base64 formátumba. Másolja a kész kódot CSS-hez vagy HTML-hez. Ingyenes.`,
      cs: `Zakódujte obrázky do formátu Base64. Zkopírujte hotový kód pro CSS nebo HTML. Zdarma.`,
      sv: `Koda bilder till Base64-format. Kopiera färdig kod för CSS eller HTML. Gratis.`,
      da: `Kod billeder til Base64-format. Kopier færdig kode til CSS eller HTML. Gratis.`,
      no: `Kod bilder til Base64-format. Kopier ferdig kode for CSS eller HTML. Gratis.`,
      fi: `Koodaa kuvat Base64-muotoon. Kopioi valmis koodi CSS:ää tai HTML:ää varten. Ilmainen.`,
      el: `Κωδικοποιήστε εικόνες σε Base64. Αντιγράψτε έτοιμο κώδικα για CSS ή HTML. Δωρεάν.`,
    },
    b64dec: {
      en: `Decode Base64 strings to images. Preview and download in your browser. Free, no registration.`,
      de: `Base64-Zeichenketten in Bilder dekodieren. Vorschau und Download im Browser. Kostenlos.`,
      es: `Decodifica cadenas Base64 a imágenes. Vista previa y descarga en tu navegador. Gratis.`,
      fr: `Décodez les chaînes Base64 en images. Aperçu et téléchargement dans votre navigateur. Gratuit.`,
      pt: `Decodifique strings Base64 em imagens. Pré-visualize e descarregue no navegador. Gratuito.`,
      it: `Decodifica stringhe Base64 in immagini. Anteprima e download nel browser. Gratuito.`,
      ro: `Decodifică șiruri Base64 în imagini. Previzualizare și descărcare în browser. Gratuit.`,
      nl: `Decodeer Base64-strings naar afbeeldingen. Bekijk en download in je browser. Gratis.`,
      hu: `Base64 karakterláncok dekódolása képekké. Előnézet és letöltés a böngészőben. Ingyenes.`,
      cs: `Dekódujte řetězce Base64 na obrázky. Náhled a stažení v prohlížeči. Zdarma.`,
      sv: `Avkoda Base64-strängar till bilder. Förhandsgranska och ladda ner i webbläsaren. Gratis.`,
      da: `Afkod Base64-strenge til billeder. Forhåndsvisning og download i browseren. Gratis.`,
      no: `Dekod Base64-strenger til bilder. Forhåndsvisning og nedlasting i nettleseren. Gratis.`,
      fi: `Dekoodaa Base64-merkkijonot kuviksi. Esikatsele ja lataa selaimessa. Ilmainen.`,
      el: `Αποκωδικοποιήστε συμβολοσειρές Base64 σε εικόνες. Προεπισκόπηση και λήψη στον browser. Δωρεάν.`,
    },
  };
  return t[cat][loc];
}

// --- "Why convert" title ---
function whyTitle(loc, S, T) {
  return {
    en: `Why convert ${S} to ${T}?`,
    de: `Warum ${S} in ${T} konvertieren?`,
    es: `¿Por qué convertir ${S} a ${T}?`,
    fr: `Pourquoi convertir ${S} en ${T} ?`,
    pt: `Por que converter ${S} para ${T}?`,
    it: `Perché convertire ${S} in ${T}?`,
    ro: `De ce să convertiți ${S} în ${T}?`,
    nl: `Waarom ${S} naar ${T} converteren?`,
    hu: `Miért érdemes ${S}-t ${T}-vé konvertálni?`,
    cs: `Proč převádět ${S} na ${T}?`,
    sv: `Varför konvertera ${S} till ${T}?`,
    da: `Hvorfor konvertere ${S} til ${T}?`,
    no: `Hvorfor konvertere ${S} til ${T}?`,
    fi: `Miksi muuntaa ${S} ${T}-muotoon?`,
    el: `Γιατί να μετατρέψετε ${S} σε ${T};`,
  }[loc];
}

// --- "How to convert" title ---
function howTitle(loc, S, T) {
  return {
    en: `How to convert ${S} to ${T}`,
    de: `So konvertieren Sie ${S} in ${T}`,
    es: `Cómo convertir ${S} a ${T}`,
    fr: `Comment convertir ${S} en ${T}`,
    pt: `Como converter ${S} para ${T}`,
    it: `Come convertire ${S} in ${T}`,
    ro: `Cum convertiți ${S} în ${T}`,
    nl: `Hoe ${S} naar ${T} converteren`,
    hu: `Hogyan konvertáljuk ${S}-t ${T}-vé`,
    cs: `Jak převést ${S} na ${T}`,
    sv: `Hur man konverterar ${S} till ${T}`,
    da: `Sådan konverterer du ${S} til ${T}`,
    no: `Slik konverterer du ${S} til ${T}`,
    fi: `Kuinka muuntaa ${S} ${T}-muotoon`,
    el: `Πώς να μετατρέψετε ${S} σε ${T}`,
  }[loc];
}

// --- Steps ---
function steps(loc, S, T, cat) {
  const isData = cat === 'data';
  const isB64enc = cat === 'b64enc';
  const isB64dec = cat === 'b64dec';
  const isPdfToImg = cat === 'pdfToImg';
  const L = {
    en: {
      upload: isData ? 'Paste your data' : isB64dec ? 'Paste Base64 string' : `Upload your ${S} file`,
      uploadDesc: isData
        ? `Paste or type your ${S} data into the input field.`
        : isB64dec
          ? 'Paste the Base64 encoded string into the input field.'
          : `Drag and drop your ${S} file onto the converter or click to browse.`,
      convert: isPdfToImg ? 'Convert pages' : 'Convert',
      convertDesc: isData
        ? `Click Convert to transform your ${S} data into ${T} format.`
        : isPdfToImg
          ? `Each PDF page is converted to a separate ${T} image.`
          : isB64enc
            ? 'The tool instantly generates Base64 code ready to use.'
            : `Click Convert — files are processed locally in your browser.`,
      download: isData ? 'Copy or download' : `Download your ${T}`,
      downloadDesc: isData
        ? `Copy the ${T} output to clipboard or download as a file.`
        : isB64enc
          ? 'Copy the Base64 code for use in CSS, HTML, or your application.'
          : `Download the converted ${T} file.`,
    },
    de: {
      upload: isData ? 'Daten einfügen' : isB64dec ? 'Base64-String einfügen' : `${S}-Datei hochladen`,
      uploadDesc: isData
        ? `Fügen Sie Ihre ${S}-Daten in das Eingabefeld ein.`
        : isB64dec
          ? 'Fügen Sie den Base64-kodierten String in das Eingabefeld ein.'
          : `Ziehen Sie Ihre ${S}-Datei auf den Konverter oder klicken Sie zum Durchsuchen.`,
      convert: 'Konvertieren',
      convertDesc: isData ? `Klicken Sie auf Konvertieren, um Ihre ${S}-Daten in ${T}-Format umzuwandeln.` : `Klicken Sie auf Konvertieren — die Verarbeitung erfolgt lokal in Ihrem Browser.`,
      download: isData ? 'Kopieren oder herunterladen' : `${T}-Datei herunterladen`,
      downloadDesc: isData ? `Kopieren Sie die ${T}-Ausgabe oder laden Sie sie als Datei herunter.` : `Laden Sie die konvertierte ${T}-Datei herunter.`,
    },
    es: {
      upload: isData ? 'Pega tus datos' : `Sube tu archivo ${S}`,
      uploadDesc: isData ? `Pega tus datos ${S} en el campo de entrada.` : `Arrastra tu archivo ${S} al convertidor o haz clic para buscar.`,
      convert: 'Convertir',
      convertDesc: isData ? `Haz clic en Convertir para transformar tus datos ${S} a formato ${T}.` : `Haz clic en Convertir — los archivos se procesan localmente en tu navegador.`,
      download: isData ? 'Copiar o descargar' : `Descarga tu ${T}`,
      downloadDesc: isData ? `Copia la salida ${T} al portapapeles o descárgala como archivo.` : `Descarga el archivo ${T} convertido.`,
    },
    fr: {
      upload: isData ? 'Collez vos données' : `Téléchargez votre fichier ${S}`,
      uploadDesc: isData ? `Collez vos données ${S} dans le champ de saisie.` : `Glissez votre fichier ${S} sur le convertisseur ou cliquez pour parcourir.`,
      convert: 'Convertir',
      convertDesc: isData ? `Cliquez sur Convertir pour transformer vos données ${S} en format ${T}.` : `Cliquez sur Convertir — le traitement est local dans votre navigateur.`,
      download: isData ? 'Copier ou télécharger' : `Téléchargez votre ${T}`,
      downloadDesc: isData ? `Copiez la sortie ${T} ou téléchargez-la.` : `Téléchargez le fichier ${T} converti.`,
    },
    pt: {
      upload: isData ? 'Cole seus dados' : `Carregue seu arquivo ${S}`,
      uploadDesc: isData ? `Cole os dados ${S} no campo de entrada.` : `Arraste o ficheiro ${S} para o conversor ou clique para procurar.`,
      convert: 'Converter',
      convertDesc: isData ? `Clique em Converter para transformar os dados ${S} em formato ${T}.` : `Clique em Converter — os ficheiros são processados localmente no navegador.`,
      download: isData ? 'Copiar ou descarregar' : `Descarregue o ${T}`,
      downloadDesc: isData ? `Copie a saída ${T} ou descarregue como ficheiro.` : `Descarregue o ficheiro ${T} convertido.`,
    },
    it: {
      upload: isData ? 'Incolla i tuoi dati' : `Carica il tuo file ${S}`,
      uploadDesc: isData ? `Incolla i dati ${S} nel campo di input.` : `Trascina il file ${S} sul convertitore o clicca per sfogliare.`,
      convert: 'Converti',
      convertDesc: isData ? `Clicca su Converti per trasformare i dati ${S} in formato ${T}.` : `Clicca su Converti — i file vengono elaborati localmente nel browser.`,
      download: isData ? 'Copia o scarica' : `Scarica il tuo ${T}`,
      downloadDesc: isData ? `Copia l'output ${T} o scaricalo come file.` : `Scarica il file ${T} convertito.`,
    },
    ro: {
      upload: isData ? 'Lipiți datele' : `Încărcați fișierul ${S}`,
      uploadDesc: isData ? `Lipiți datele ${S} în câmpul de introducere.` : `Trageți fișierul ${S} pe convertor sau faceți clic pentru a răsfoi.`,
      convert: 'Convertiți',
      convertDesc: isData ? `Faceți clic pe Convertiți pentru a transforma datele ${S} în format ${T}.` : `Faceți clic pe Convertiți — fișierele sunt procesate local în browser.`,
      download: isData ? 'Copiați sau descărcați' : `Descărcați ${T}`,
      downloadDesc: isData ? `Copiați rezultatul ${T} sau descărcați-l ca fișier.` : `Descărcați fișierul ${T} convertit.`,
    },
    nl: {
      upload: isData ? 'Plak je gegevens' : `Upload je ${S}-bestand`,
      uploadDesc: isData ? `Plak je ${S}-gegevens in het invoerveld.` : `Sleep je ${S}-bestand naar de converter of klik om te bladeren.`,
      convert: 'Converteren',
      convertDesc: isData ? `Klik op Converteren om je ${S}-gegevens naar ${T}-formaat om te zetten.` : `Klik op Converteren — bestanden worden lokaal in je browser verwerkt.`,
      download: isData ? 'Kopiëren of downloaden' : `Download je ${T}`,
      downloadDesc: isData ? `Kopieer de ${T}-uitvoer of download als bestand.` : `Download het geconverteerde ${T}-bestand.`,
    },
    hu: {
      upload: isData ? 'Illessze be az adatokat' : `Töltse fel a ${S} fájlt`,
      uploadDesc: isData ? `Illessze be a ${S} adatokat a beviteli mezőbe.` : `Húzza a ${S} fájlt a konverterre, vagy kattintson a tallózáshoz.`,
      convert: 'Konvertálás',
      convertDesc: isData ? `Kattintson a Konvertálás gombra a ${S} adatok ${T} formátumba alakításához.` : `Kattintson a Konvertálás gombra — a fájlok helyben, a böngészőben kerülnek feldolgozásra.`,
      download: isData ? 'Másolás vagy letöltés' : `Töltse le a ${T} fájlt`,
      downloadDesc: isData ? `Másolja a ${T} kimenetet, vagy töltse le fájlként.` : `Töltse le a konvertált ${T} fájlt.`,
    },
    cs: {
      upload: isData ? 'Vložte data' : `Nahrajte ${S} soubor`,
      uploadDesc: isData ? `Vložte ${S} data do vstupního pole.` : `Přetáhněte ${S} soubor na převodník nebo klikněte pro procházení.`,
      convert: 'Převést',
      convertDesc: isData ? `Klikněte na Převést pro transformaci ${S} dat do formátu ${T}.` : `Klikněte na Převést — soubory se zpracovávají lokálně v prohlížeči.`,
      download: isData ? 'Zkopírovat nebo stáhnout' : `Stáhněte ${T}`,
      downloadDesc: isData ? `Zkopírujte výstup ${T} nebo stáhněte jako soubor.` : `Stáhněte převedený ${T} soubor.`,
    },
    sv: {
      upload: isData ? 'Klistra in dina data' : `Ladda upp din ${S}-fil`,
      uploadDesc: isData ? `Klistra in dina ${S}-data i inmatningsfältet.` : `Dra din ${S}-fil till konverteraren eller klicka för att bläddra.`,
      convert: 'Konvertera',
      convertDesc: isData ? `Klicka på Konvertera för att omvandla dina ${S}-data till ${T}-format.` : `Klicka på Konvertera — filerna bearbetas lokalt i din webbläsare.`,
      download: isData ? 'Kopiera eller ladda ner' : `Ladda ner din ${T}`,
      downloadDesc: isData ? `Kopiera ${T}-utdatan eller ladda ner som fil.` : `Ladda ner den konverterade ${T}-filen.`,
    },
    da: {
      upload: isData ? 'Indsæt dine data' : `Upload din ${S}-fil`,
      uploadDesc: isData ? `Indsæt dine ${S}-data i inputfeltet.` : `Træk din ${S}-fil til konverteren eller klik for at gennemse.`,
      convert: 'Konverter',
      convertDesc: isData ? `Klik på Konverter for at omdanne dine ${S}-data til ${T}-format.` : `Klik på Konverter — filerne behandles lokalt i din browser.`,
      download: isData ? 'Kopier eller download' : `Download din ${T}`,
      downloadDesc: isData ? `Kopier ${T}-outputtet eller download som fil.` : `Download den konverterede ${T}-fil.`,
    },
    no: {
      upload: isData ? 'Lim inn dataene dine' : `Last opp ${S}-filen din`,
      uploadDesc: isData ? `Lim inn ${S}-dataene i inndatafeltet.` : `Dra ${S}-filen din til konvertereren eller klikk for å bla gjennom.`,
      convert: 'Konverter',
      convertDesc: isData ? `Klikk på Konverter for å gjøre om ${S}-data til ${T}-format.` : `Klikk på Konverter — filene behandles lokalt i nettleseren din.`,
      download: isData ? 'Kopier eller last ned' : `Last ned ${T}-filen`,
      downloadDesc: isData ? `Kopier ${T}-utdataene eller last ned som fil.` : `Last ned den konverterte ${T}-filen.`,
    },
    fi: {
      upload: isData ? 'Liitä tietosi' : `Lataa ${S}-tiedosto`,
      uploadDesc: isData ? `Liitä ${S}-tiedot syöttökenttään.` : `Vedä ${S}-tiedosto muuntimeen tai napsauta selataksesi.`,
      convert: 'Muunna',
      convertDesc: isData ? `Napsauta Muunna muuntaaksesi ${S}-tiedot ${T}-muotoon.` : `Napsauta Muunna — tiedostot käsitellään paikallisesti selaimessasi.`,
      download: isData ? 'Kopioi tai lataa' : `Lataa ${T}-tiedosto`,
      downloadDesc: isData ? `Kopioi ${T}-tulos tai lataa tiedostona.` : `Lataa muunnettu ${T}-tiedosto.`,
    },
    el: {
      upload: isData ? 'Επικολλήστε τα δεδομένα' : `Ανεβάστε το αρχείο ${S}`,
      uploadDesc: isData ? `Επικολλήστε τα δεδομένα ${S} στο πεδίο εισαγωγής.` : `Σύρετε το αρχείο ${S} στον μετατροπέα ή κάντε κλικ για περιήγηση.`,
      convert: 'Μετατροπή',
      convertDesc: isData ? `Κάντε κλικ στο Μετατροπή για να μετατρέψετε τα δεδομένα ${S} σε μορφή ${T}.` : `Κάντε κλικ στο Μετατροπή — τα αρχεία επεξεργάζονται τοπικά στον browser σας.`,
      download: isData ? 'Αντιγραφή ή λήψη' : `Κατεβάστε το ${T}`,
      downloadDesc: isData ? `Αντιγράψτε την έξοδο ${T} ή κατεβάστε ως αρχείο.` : `Κατεβάστε το μετατρεπόμενο αρχείο ${T}.`,
    },
  };
  return L[loc];
}

// --- "What makes this different" title ---
function diffTitle(loc) {
  return {
    en: 'What makes this converter different?',
    de: 'Was macht diesen Konverter besonders?',
    es: '¿Qué hace diferente a este convertidor?',
    fr: "Qu'est-ce qui rend ce convertisseur différent ?",
    pt: 'O que torna este conversor diferente?',
    it: 'Cosa rende diverso questo convertitore?',
    ro: 'Ce face acest convertor diferit?',
    nl: 'Wat maakt deze converter anders?',
    hu: 'Mi teszi különlegessé ezt a konvertert?',
    cs: 'Čím je tento převodník jiný?',
    sv: 'Vad gör denna konverterare annorlunda?',
    da: 'Hvad gør denne konverter anderledes?',
    no: 'Hva gjør denne konvertereren annerledes?',
    fi: 'Mikä tekee tästä muuntimesta erilaisen?',
    el: 'Τι κάνει αυτόν τον μετατροπέα διαφορετικό;',
  }[loc];
}

// --- Privacy/unlimited/quality/speed feature cards ---
function featureCards(loc) {
  const L = {
    en: [
      { icon: 'RiShieldCheckLine', title: 'Complete privacy', desc: 'Your files are processed entirely in your browser. Nothing is uploaded to any server.' },
      { icon: 'RiInfinityLine', title: 'No limits', desc: 'Convert as many files as you need. No daily limits, no file size restrictions, no watermarks.' },
      { icon: 'RiImageEditLine', title: 'Quality control', desc: 'Adjust settings to find the perfect balance between file size and quality.' },
      { icon: 'RiFlashlightLine', title: 'Instant conversion', desc: 'All processing happens locally using modern browser APIs — fast and works offline after loading.' },
    ],
    de: [
      { icon: 'RiShieldCheckLine', title: 'Vollständige Privatsphäre', desc: 'Ihre Dateien werden vollständig in Ihrem Browser verarbeitet. Nichts wird auf einen Server hochgeladen.' },
      { icon: 'RiInfinityLine', title: 'Keine Limits', desc: 'Konvertieren Sie beliebig viele Dateien. Keine Tageslimits, keine Größenbeschränkungen, keine Wasserzeichen.' },
      { icon: 'RiImageEditLine', title: 'Qualitätskontrolle', desc: 'Passen Sie die Einstellungen an, um die perfekte Balance zwischen Dateigröße und Qualität zu finden.' },
      { icon: 'RiFlashlightLine', title: 'Sofortige Konvertierung', desc: 'Die gesamte Verarbeitung erfolgt lokal mit modernen Browser-APIs — schnell und funktioniert offline.' },
    ],
    es: [
      { icon: 'RiShieldCheckLine', title: 'Privacidad total', desc: 'Tus archivos se procesan completamente en tu navegador. Nada se sube a ningún servidor.' },
      { icon: 'RiInfinityLine', title: 'Sin límites', desc: 'Convierte tantos archivos como necesites. Sin límites diarios, sin restricciones de tamaño.' },
      { icon: 'RiImageEditLine', title: 'Control de calidad', desc: 'Ajusta la configuración para encontrar el equilibrio perfecto entre tamaño y calidad.' },
      { icon: 'RiFlashlightLine', title: 'Conversión instantánea', desc: 'Todo el procesamiento ocurre localmente con APIs modernas del navegador.' },
    ],
    fr: [
      { icon: 'RiShieldCheckLine', title: 'Confidentialité totale', desc: "Vos fichiers sont traités entièrement dans votre navigateur. Rien n'est envoyé sur un serveur." },
      { icon: 'RiInfinityLine', title: 'Sans limites', desc: 'Convertissez autant de fichiers que nécessaire. Pas de limites quotidiennes, pas de restrictions.' },
      { icon: 'RiImageEditLine', title: 'Contrôle qualité', desc: "Ajustez les paramètres pour trouver l'équilibre parfait entre taille et qualité." },
      { icon: 'RiFlashlightLine', title: 'Conversion instantanée', desc: 'Tout le traitement se fait localement avec les API modernes du navigateur.' },
    ],
    pt: [
      { icon: 'RiShieldCheckLine', title: 'Privacidade total', desc: 'Os seus ficheiros são processados inteiramente no navegador. Nada é enviado para servidores.' },
      { icon: 'RiInfinityLine', title: 'Sem limites', desc: 'Converta quantos ficheiros precisar. Sem limites diários, sem restrições de tamanho.' },
      { icon: 'RiImageEditLine', title: 'Controlo de qualidade', desc: 'Ajuste as definições para o equilíbrio perfeito entre tamanho e qualidade.' },
      { icon: 'RiFlashlightLine', title: 'Conversão instantânea', desc: 'Todo o processamento é local com APIs modernas do navegador.' },
    ],
    it: [
      { icon: 'RiShieldCheckLine', title: 'Privacy totale', desc: 'I tuoi file vengono elaborati interamente nel browser. Nulla viene caricato su server.' },
      { icon: 'RiInfinityLine', title: 'Senza limiti', desc: 'Converti quanti file vuoi. Nessun limite giornaliero, nessuna restrizione di dimensione.' },
      { icon: 'RiImageEditLine', title: 'Controllo qualità', desc: 'Regola le impostazioni per trovare il perfetto equilibrio tra dimensione e qualità.' },
      { icon: 'RiFlashlightLine', title: 'Conversione istantanea', desc: "Tutta l'elaborazione avviene localmente con le API moderne del browser." },
    ],
    ro: [
      { icon: 'RiShieldCheckLine', title: 'Confidențialitate totală', desc: 'Fișierele sunt procesate integral în browser. Nimic nu este trimis pe server.' },
      { icon: 'RiInfinityLine', title: 'Fără limite', desc: 'Convertiți oricâte fișiere aveți nevoie. Fără limite zilnice, fără restricții.' },
      { icon: 'RiImageEditLine', title: 'Control al calității', desc: 'Ajustați setările pentru echilibrul perfect între dimensiune și calitate.' },
      { icon: 'RiFlashlightLine', title: 'Conversie instantanee', desc: 'Toată procesarea are loc local cu API-uri moderne ale browserului.' },
    ],
    nl: [
      { icon: 'RiShieldCheckLine', title: 'Volledige privacy', desc: 'Je bestanden worden volledig in je browser verwerkt. Niets wordt naar een server geüpload.' },
      { icon: 'RiInfinityLine', title: 'Geen limieten', desc: 'Converteer zoveel bestanden als je nodig hebt. Geen daglimieten, geen beperkingen.' },
      { icon: 'RiImageEditLine', title: 'Kwaliteitscontrole', desc: 'Pas de instellingen aan voor de perfecte balans tussen bestandsgrootte en kwaliteit.' },
      { icon: 'RiFlashlightLine', title: 'Directe conversie', desc: "Alle verwerking gebeurt lokaal met moderne browser-API's — snel en werkt ook offline." },
    ],
    hu: [
      { icon: 'RiShieldCheckLine', title: 'Teljes adatvédelem', desc: 'A fájlok teljes mértékben a böngészőben kerülnek feldolgozásra. Semmi nem kerül szerverre.' },
      { icon: 'RiInfinityLine', title: 'Nincs korlát', desc: 'Konvertáljon annyi fájlt, amennyit csak akar. Nincs napi limit, nincs méretkorlátozás.' },
      { icon: 'RiImageEditLine', title: 'Minőségszabályozás', desc: 'Állítsa be a beállításokat a tökéletes egyensúly megtalálásához a fájlméret és a minőség között.' },
      { icon: 'RiFlashlightLine', title: 'Azonnali konverzió', desc: 'Minden feldolgozás helyben történik modern böngésző API-k segítségével.' },
    ],
    cs: [
      { icon: 'RiShieldCheckLine', title: 'Úplné soukromí', desc: 'Vaše soubory jsou zpracovány výhradně v prohlížeči. Nic není odesláno na server.' },
      { icon: 'RiInfinityLine', title: 'Bez omezení', desc: 'Převeďte tolik souborů, kolik potřebujete. Žádné denní limity, žádná omezení.' },
      { icon: 'RiImageEditLine', title: 'Kontrola kvality', desc: 'Upravte nastavení pro dokonalou rovnováhu mezi velikostí souboru a kvalitou.' },
      { icon: 'RiFlashlightLine', title: 'Okamžitý převod', desc: 'Veškeré zpracování probíhá lokálně pomocí moderních API prohlížeče.' },
    ],
    sv: [
      { icon: 'RiShieldCheckLine', title: 'Fullständig integritet', desc: 'Dina filer bearbetas helt i din webbläsare. Inget laddas upp till någon server.' },
      { icon: 'RiInfinityLine', title: 'Inga begränsningar', desc: 'Konvertera så många filer du behöver. Inga dagliga gränser, inga storleksbegränsningar.' },
      { icon: 'RiImageEditLine', title: 'Kvalitetskontroll', desc: 'Justera inställningarna för den perfekta balansen mellan filstorlek och kvalitet.' },
      { icon: 'RiFlashlightLine', title: 'Omedelbar konvertering', desc: 'All bearbetning sker lokalt med moderna webbläsar-API:er.' },
    ],
    da: [
      { icon: 'RiShieldCheckLine', title: 'Fuld privatlivsbeskyttelse', desc: 'Dine filer behandles helt i din browser. Intet uploades til nogen server.' },
      { icon: 'RiInfinityLine', title: 'Ingen begrænsninger', desc: 'Konverter så mange filer, som du har brug for. Ingen daglige grænser.' },
      { icon: 'RiImageEditLine', title: 'Kvalitetskontrol', desc: 'Juster indstillingerne for den perfekte balance mellem filstørrelse og kvalitet.' },
      { icon: 'RiFlashlightLine', title: 'Øjeblikkelig konvertering', desc: "Al behandling sker lokalt med moderne browser-API'er." },
    ],
    no: [
      { icon: 'RiShieldCheckLine', title: 'Fullstendig personvern', desc: 'Filene dine behandles helt i nettleseren din. Ingenting lastes opp til noen server.' },
      { icon: 'RiInfinityLine', title: 'Ingen begrensninger', desc: 'Konverter så mange filer du trenger. Ingen daglige grenser.' },
      { icon: 'RiImageEditLine', title: 'Kvalitetskontroll', desc: 'Juster innstillingene for den perfekte balansen mellom filstørrelse og kvalitet.' },
      { icon: 'RiFlashlightLine', title: 'Umiddelbar konvertering', desc: 'All behandling skjer lokalt med moderne nettleser-APIer.' },
    ],
    fi: [
      { icon: 'RiShieldCheckLine', title: 'Täydellinen yksityisyys', desc: 'Tiedostosi käsitellään kokonaan selaimessasi. Mitään ei ladata palvelimelle.' },
      { icon: 'RiInfinityLine', title: 'Ei rajoituksia', desc: 'Muunna niin monta tiedostoa kuin tarvitset. Ei päivittäisiä rajoja.' },
      { icon: 'RiImageEditLine', title: 'Laatukontrolli', desc: 'Säädä asetuksia löytääksesi täydellisen tasapainon tiedostokoon ja laadun välillä.' },
      { icon: 'RiFlashlightLine', title: 'Välitön muunnos', desc: 'Kaikki käsittely tapahtuu paikallisesti modernien selainrajapintojen avulla.' },
    ],
    el: [
      { icon: 'RiShieldCheckLine', title: 'Πλήρης ιδιωτικότητα', desc: 'Τα αρχεία σας επεξεργάζονται εξ ολοκλήρου στον browser σας. Τίποτα δεν ανεβαίνει σε server.' },
      { icon: 'RiInfinityLine', title: 'Χωρίς όρια', desc: 'Μετατρέψτε όσα αρχεία χρειάζεστε. Χωρίς ημερήσια όρια, χωρίς περιορισμούς.' },
      { icon: 'RiImageEditLine', title: 'Έλεγχος ποιότητας', desc: 'Ρυθμίστε τις παραμέτρους για την τέλεια ισορροπία μεταξύ μεγέθους και ποιότητας.' },
      { icon: 'RiFlashlightLine', title: 'Άμεση μετατροπή', desc: 'Όλη η επεξεργασία γίνεται τοπικά με σύγχρονα API του browser.' },
    ],
  };
  return L[loc];
}

// --- FAQ ---
function faqItems(loc, S, T) {
  const L = {
    en: [
      { q: `Is converting ${S} to ${T} free?`, a: `Yes, this converter is completely free with no limits. No registration, no watermarks.` },
      { q: `Does the converter upload my files?`, a: `No. All processing happens locally in your browser. Your files never leave your device.` },
      { q: `Can I convert multiple files at once?`, a: `Yes, the converter supports batch conversion. Add multiple files and convert them all simultaneously.` },
      { q: `Does the converter work on mobile?`, a: `Yes, the converter works on any device with a modern web browser, including smartphones and tablets.` },
    ],
    de: [
      { q: `Ist die Konvertierung von ${S} zu ${T} kostenlos?`, a: `Ja, dieser Konverter ist völlig kostenlos und ohne Einschränkungen. Keine Registrierung, keine Wasserzeichen.` },
      { q: `Werden meine Dateien hochgeladen?`, a: `Nein. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser. Ihre Dateien verlassen nie Ihr Gerät.` },
      { q: `Kann ich mehrere Dateien gleichzeitig konvertieren?`, a: `Ja, der Konverter unterstützt die Stapelkonvertierung.` },
      { q: `Funktioniert der Konverter auf Mobilgeräten?`, a: `Ja, der Konverter funktioniert auf jedem Gerät mit einem modernen Webbrowser.` },
    ],
    es: [
      { q: `¿Es gratis convertir ${S} a ${T}?`, a: `Sí, este convertidor es completamente gratuito y sin límites. Sin registro, sin marcas de agua.` },
      { q: `¿El convertidor sube mis archivos?`, a: `No. Todo el procesamiento ocurre localmente en tu navegador. Tus archivos nunca salen de tu dispositivo.` },
      { q: `¿Puedo convertir varios archivos a la vez?`, a: `Sí, el convertidor admite conversión por lotes.` },
      { q: `¿El convertidor funciona en móviles?`, a: `Sí, funciona en cualquier dispositivo con un navegador web moderno.` },
    ],
    fr: [
      { q: `La conversion ${S} en ${T} est-elle gratuite ?`, a: `Oui, ce convertisseur est entièrement gratuit et sans limites. Pas d'inscription, pas de filigrane.` },
      { q: `Le convertisseur envoie-t-il mes fichiers ?`, a: `Non. Tout le traitement se fait localement dans votre navigateur. Vos fichiers ne quittent jamais votre appareil.` },
      { q: `Puis-je convertir plusieurs fichiers à la fois ?`, a: `Oui, le convertisseur prend en charge la conversion par lot.` },
      { q: `Le convertisseur fonctionne-t-il sur mobile ?`, a: `Oui, il fonctionne sur tout appareil disposant d'un navigateur web moderne.` },
    ],
    pt: [
      { q: `A conversão de ${S} para ${T} é gratuita?`, a: `Sim, este conversor é completamente gratuito e sem limites. Sem registo, sem marcas de água.` },
      { q: `O conversor envia os meus ficheiros?`, a: `Não. Todo o processamento acontece localmente no seu navegador.` },
      { q: `Posso converter vários ficheiros de uma vez?`, a: `Sim, o conversor suporta conversão em lote.` },
      { q: `O conversor funciona no telemóvel?`, a: `Sim, funciona em qualquer dispositivo com um navegador web moderno.` },
    ],
    it: [
      { q: `La conversione da ${S} a ${T} è gratuita?`, a: `Sì, questo convertitore è completamente gratuito e senza limiti. Nessuna registrazione, nessun watermark.` },
      { q: `Il convertitore carica i miei file?`, a: `No. Tutta l'elaborazione avviene localmente nel browser. I tuoi file non lasciano mai il dispositivo.` },
      { q: `Posso convertire più file contemporaneamente?`, a: `Sì, il convertitore supporta la conversione batch.` },
      { q: `Il convertitore funziona su dispositivi mobili?`, a: `Sì, funziona su qualsiasi dispositivo con un browser web moderno.` },
    ],
    ro: [
      { q: `Conversia din ${S} în ${T} este gratuită?`, a: `Da, acest convertor este complet gratuit și fără limite. Fără înregistrare, fără filigran.` },
      { q: `Convertorul încarcă fișierele mele?`, a: `Nu. Toată procesarea are loc local în browser. Fișierele nu părăsesc niciodată dispozitivul.` },
      { q: `Pot converti mai multe fișiere simultan?`, a: `Da, convertorul acceptă conversia în lot.` },
      { q: `Convertorul funcționează pe mobil?`, a: `Da, funcționează pe orice dispozitiv cu un browser web modern.` },
    ],
    nl: [
      { q: `Is het converteren van ${S} naar ${T} gratis?`, a: `Ja, deze converter is volledig gratis en zonder limieten. Geen registratie, geen watermerken.` },
      { q: `Uploadt de converter mijn bestanden?`, a: `Nee. Alle verwerking vindt lokaal plaats in je browser. Je bestanden verlaten nooit je apparaat.` },
      { q: `Kan ik meerdere bestanden tegelijk converteren?`, a: `Ja, de converter ondersteunt batchconversie.` },
      { q: `Werkt de converter op mobiel?`, a: `Ja, de converter werkt op elk apparaat met een moderne webbrowser.` },
    ],
    hu: [
      { q: `Ingyenes a ${S} konvertálása ${T}-vé?`, a: `Igen, ez a konverter teljesen ingyenes és korlátlan. Nincs regisztráció, nincs vízjel.` },
      { q: `Feltölti a fájljaimat a konverter?`, a: `Nem. Minden feldolgozás helyben történik a böngészőben. A fájlok soha nem hagyják el az eszközét.` },
      { q: `Konvertálhatok egyszerre több fájlt?`, a: `Igen, a konverter támogatja a kötegelt konverziót.` },
      { q: `Működik a konverter mobilon?`, a: `Igen, minden modern böngészővel rendelkező eszközön működik.` },
    ],
    cs: [
      { q: `Je převod ${S} na ${T} zdarma?`, a: `Ano, tento převodník je zcela zdarma a bez omezení. Žádná registrace, žádné vodoznaky.` },
      { q: `Nahrává převodník moje soubory?`, a: `Ne. Veškeré zpracování probíhá lokálně v prohlížeči. Soubory nikdy neopustí vaše zařízení.` },
      { q: `Mohu převést více souborů najednou?`, a: `Ano, převodník podporuje dávkový převod.` },
      { q: `Funguje převodník na mobilu?`, a: `Ano, funguje na jakémkoli zařízení s moderním webovým prohlížečem.` },
    ],
    sv: [
      { q: `Är det gratis att konvertera ${S} till ${T}?`, a: `Ja, denna konverterare är helt gratis och utan begränsningar. Ingen registrering, inga vattenstämplar.` },
      { q: `Laddar konverteraren upp mina filer?`, a: `Nej. All bearbetning sker lokalt i din webbläsare. Dina filer lämnar aldrig din enhet.` },
      { q: `Kan jag konvertera flera filer samtidigt?`, a: `Ja, konverteraren stöder batchkonvertering.` },
      { q: `Fungerar konverteraren på mobilen?`, a: `Ja, den fungerar på alla enheter med en modern webbläsare.` },
    ],
    da: [
      { q: `Er konvertering af ${S} til ${T} gratis?`, a: `Ja, denne konverter er helt gratis og uden begrænsninger. Ingen registrering, ingen vandmærker.` },
      { q: `Uploader konverteren mine filer?`, a: `Nej. Al behandling sker lokalt i din browser. Dine filer forlader aldrig din enhed.` },
      { q: `Kan jeg konvertere flere filer på én gang?`, a: `Ja, konverteren understøtter batchkonvertering.` },
      { q: `Virker konverteren på mobil?`, a: `Ja, den virker på enhver enhed med en moderne webbrowser.` },
    ],
    no: [
      { q: `Er konvertering av ${S} til ${T} gratis?`, a: `Ja, denne konvertereren er helt gratis og uten begrensninger. Ingen registrering, ingen vannmerker.` },
      { q: `Laster konvertereren opp filene mine?`, a: `Nei. All behandling skjer lokalt i nettleseren din. Filene dine forlater aldri enheten din.` },
      { q: `Kan jeg konvertere flere filer samtidig?`, a: `Ja, konvertereren støtter batchkonvertering.` },
      { q: `Fungerer konvertereren på mobil?`, a: `Ja, den fungerer på alle enheter med en moderne nettleser.` },
    ],
    fi: [
      { q: `Onko ${S}-muunnos ${T}-muotoon ilmainen?`, a: `Kyllä, tämä muunnin on täysin ilmainen ja rajoittamaton. Ei rekisteröitymistä, ei vesileimoja.` },
      { q: `Lataako muunnin tiedostoni palvelimelle?`, a: `Ei. Kaikki käsittely tapahtuu paikallisesti selaimessasi. Tiedostosi eivät koskaan poistu laitteeltasi.` },
      { q: `Voinko muuntaa useita tiedostoja kerralla?`, a: `Kyllä, muunnin tukee erämuunnosta.` },
      { q: `Toimiiko muunnin mobiilissa?`, a: `Kyllä, se toimii kaikilla laitteilla, joissa on moderni verkkoselain.` },
    ],
    el: [
      { q: `Είναι δωρεάν η μετατροπή ${S} σε ${T};`, a: `Ναι, αυτός ο μετατροπέας είναι εντελώς δωρεάν και χωρίς περιορισμούς. Χωρίς εγγραφή, χωρίς υδατογράφημα.` },
      { q: `Ανεβάζει ο μετατροπέας τα αρχεία μου;`, a: `Όχι. Όλη η επεξεργασία γίνεται τοπικά στον browser σας. Τα αρχεία σας δεν φεύγουν ποτέ από τη συσκευή σας.` },
      { q: `Μπορώ να μετατρέψω πολλαπλά αρχεία ταυτόχρονα;`, a: `Ναι, ο μετατροπέας υποστηρίζει μαζική μετατροπή.` },
      { q: `Λειτουργεί ο μετατροπέας σε κινητά;`, a: `Ναι, λειτουργεί σε κάθε συσκευή με σύγχρονο browser.` },
    ],
  };
  return L[loc];
}

// --- FAQ title ---
function faqTitle(loc, S, T) {
  return {
    en: `Frequently asked questions about ${S} to ${T} conversion`,
    de: `Häufig gestellte Fragen zur ${S}-zu-${T}-Konvertierung`,
    es: `Preguntas frecuentes sobre la conversión de ${S} a ${T}`,
    fr: `Questions fréquentes sur la conversion ${S} en ${T}`,
    pt: `Perguntas frequentes sobre a conversão de ${S} para ${T}`,
    it: `Domande frequenti sulla conversione da ${S} a ${T}`,
    ro: `Întrebări frecvente despre conversia ${S} în ${T}`,
    nl: `Veelgestelde vragen over ${S} naar ${T} conversie`,
    hu: `Gyakran ismételt kérdések a ${S}-${T} konverzióról`,
    cs: `Často kladené otázky o převodu ${S} na ${T}`,
    sv: `Vanliga frågor om ${S} till ${T}-konvertering`,
    da: `Ofte stillede spørgsmål om ${S} til ${T}-konvertering`,
    no: `Ofte stilte spørsmål om ${S} til ${T}-konvertering`,
    fi: `Usein kysytyt kysymykset ${S}-${T}-muunnoksesta`,
    el: `Συχνές ερωτήσεις σχετικά με τη μετατροπή ${S} σε ${T}`,
  }[loc];
}

// --- Contact form ---
function contactTitle(loc) {
  return {
    en: 'Help us improve our tools',
    de: 'Helfen Sie uns, unsere Werkzeuge zu verbessern',
    es: 'Ayúdanos a mejorar nuestras herramientas',
    fr: 'Aidez-nous à améliorer nos outils',
    pt: 'Ajude-nos a melhorar as nossas ferramentas',
    it: 'Aiutaci a migliorare i nostri strumenti',
    ro: 'Ajutați-ne să ne îmbunătățim instrumentele',
    nl: 'Help ons onze tools te verbeteren',
    hu: 'Segítsen javítani eszközeinket',
    cs: 'Pomozte nám vylepšit naše nástroje',
    sv: 'Hjälp oss förbättra våra verktyg',
    da: 'Hjælp os med at forbedre vores værktøjer',
    no: 'Hjelp oss å forbedre verktøyene våre',
    fi: 'Auta meitä parantamaan työkalujamme',
    el: 'Βοηθήστε μας να βελτιώσουμε τα εργαλεία μας',
  }[loc];
}
function contactDesc(loc) {
  return {
    en: 'Have an idea, found a bug, or want to suggest a feature? Drop us a message – we respond within 24 hours.',
    de: 'Haben Sie eine Idee, einen Fehler gefunden oder einen Vorschlag? Schreiben Sie uns – wir antworten innerhalb von 24 Stunden.',
    es: '¿Tienes una idea, encontraste un error o quieres sugerir algo? Escríbenos – respondemos en 24 horas.',
    fr: 'Une idée, un bug ou une suggestion ? Envoyez-nous un message – nous répondons sous 24 heures.',
    pt: 'Tem uma ideia, encontrou um erro ou quer sugerir algo? Envie-nos uma mensagem – respondemos em 24 horas.',
    it: "Hai un'idea, trovato un bug o vuoi suggerire qualcosa? Scrivici – rispondiamo entro 24 ore.",
    ro: 'Aveți o idee, ați găsit un bug sau doriți să sugerați ceva? Trimiteți-ne un mesaj – răspundem în 24 de ore.',
    nl: 'Heb je een idee, een bug gevonden of wil je iets voorstellen? Stuur ons een bericht – we reageren binnen 24 uur.',
    hu: 'Van ötlete, hibát talált vagy javaslatot szeretne tenni? Írjon nekünk – 24 órán belül válaszolunk.',
    cs: 'Máte nápad, našli jste chybu nebo chcete něco navrhnout? Napište nám – odpovíme do 24 hodin.',
    sv: 'Har du en idé, hittat en bugg eller vill föreslå något? Skicka oss ett meddelande – vi svarar inom 24 timmar.',
    da: 'Har du en idé, fundet en fejl eller vil foreslå noget? Send os en besked – vi svarer inden for 24 timer.',
    no: 'Har du en idé, funnet en feil eller vil foreslå noe? Send oss en melding – vi svarer innen 24 timer.',
    fi: 'Onko sinulla idea, löysitkö virheen tai haluatko ehdottaa jotain? Lähetä meille viesti – vastaamme 24 tunnin sisällä.',
    el: 'Έχετε μια ιδέα, βρήκατε bug ή θέλετε να προτείνετε κάτι; Στείλτε μας μήνυμα – απαντάμε εντός 24 ωρών.',
  }[loc];
}
function carouselTitle(loc) {
  return {
    en: 'Other tools',
    de: 'Andere Werkzeuge',
    es: 'Otras herramientas',
    fr: 'Autres outils',
    pt: 'Outras ferramentas',
    it: 'Altri strumenti',
    ro: 'Alte instrumente',
    nl: 'Andere tools',
    hu: 'Más eszközök',
    cs: 'Další nástroje',
    sv: 'Andra verktyg',
    da: 'Andre værktøjer',
    no: 'Andre verktøy',
    fi: 'Muut työkalut',
    el: 'Άλλα εργαλεία',
  }[loc];
}

// ═══════════════════════════════════════════════════════════════
// Feature comparison (reuse from previous script)
// ═══════════════════════════════════════════════════════════════

const IMAGE_FEATURES = {
  jpg: { lossy: true, lossless: false, transparency: false, animation: false, browser: true, compact: true, exif: true },
  png: { lossy: false, lossless: true, transparency: true, animation: false, browser: true, compact: false, exif: false },
  webp: { lossy: true, lossless: true, transparency: true, animation: true, browser: true, compact: true, exif: true },
  avif: { lossy: true, lossless: true, transparency: true, animation: true, browser: true, compact: true, exif: true },
  gif: { lossy: false, lossless: true, transparency: true, animation: true, browser: true, compact: false, exif: false },
  bmp: { lossy: false, lossless: true, transparency: false, animation: false, browser: true, compact: false, exif: false },
  svg: { lossy: false, lossless: true, transparency: true, animation: true, browser: true, compact: true, exif: false },
  heic: { lossy: true, lossless: true, transparency: true, animation: true, browser: false, compact: true, exif: true },
  tiff: { lossy: false, lossless: true, transparency: true, animation: false, browser: false, compact: false, exif: true },
  pdf: { lossy: false, lossless: true, transparency: true, animation: false, browser: false, compact: false, exif: false },
};
const DATA_FEATURES = {
  csv: { nested: false, tabular: true, schema: false, readable: true, api: false, compact: true },
  json: { nested: true, tabular: false, schema: true, readable: true, api: true, compact: true },
  xml: { nested: true, tabular: false, schema: true, readable: true, api: true, compact: false },
  yaml: { nested: true, tabular: false, schema: false, readable: true, api: false, compact: true },
  markdown: { nested: false, tabular: true, schema: false, readable: true, api: false, compact: true },
  html: { nested: true, tabular: true, schema: true, readable: false, api: false, compact: false },
};

const IMG_FEAT_NAMES = {
  lossy: {
    en: 'Lossy compression',
    de: 'Verlustbehaftete Komprimierung',
    es: 'Compresión con pérdida',
    fr: 'Compression avec perte',
    pt: 'Compressão com perda',
    it: 'Compressione con perdita',
    ro: 'Compresie cu pierderi',
    nl: 'Lossy-compressie',
    hu: 'Veszteséges tömörítés',
    cs: 'Ztrátová komprese',
    sv: 'Förlustrik komprimering',
    da: 'Tabsgivende komprimering',
    no: 'Komprimering med tap',
    fi: 'Häviöllinen pakkaus',
    el: 'Συμπίεση με απώλειες',
  },
  lossless: {
    en: 'Lossless compression',
    de: 'Verlustfreie Komprimierung',
    es: 'Compresión sin pérdida',
    fr: 'Compression sans perte',
    pt: 'Compressão sem perda',
    it: 'Compressione senza perdita',
    ro: 'Compresie fără pierderi',
    nl: 'Lossless-compressie',
    hu: 'Veszteségmentes tömörítés',
    cs: 'Bezeztrátová komprese',
    sv: 'Förlustfri komprimering',
    da: 'Tabsfri komprimering',
    no: 'Komprimering uten tap',
    fi: 'Häviötön pakkaus',
    el: 'Συμπίεση χωρίς απώλειες',
  },
  transparency: {
    en: 'Transparency (alpha channel)',
    de: 'Transparenz (Alphakanal)',
    es: 'Transparencia (canal alfa)',
    fr: 'Transparence (canal alpha)',
    pt: 'Transparência (canal alfa)',
    it: 'Trasparenza (canale alfa)',
    ro: 'Transparență (canal alfa)',
    nl: 'Transparantie (alfakanaal)',
    hu: 'Átlátszóság (alfa csatorna)',
    cs: 'Průhlednost (alfa kanál)',
    sv: 'Transparens (alfakanal)',
    da: 'Gennemsigtighed (alfakanal)',
    no: 'Gjennomsiktighet (alfakanal)',
    fi: 'Läpinäkyvyys (alfakanava)',
    el: 'Διαφάνεια (κανάλι άλφα)',
  },
  animation: {
    en: 'Animation support',
    de: 'Animationsunterstützung',
    es: 'Soporte de animación',
    fr: "Prise en charge de l'animation",
    pt: 'Suporte a animação',
    it: 'Supporto animazione',
    ro: 'Suport pentru animații',
    nl: 'Animatie-ondersteuning',
    hu: 'Animáció támogatás',
    cs: 'Podpora animací',
    sv: 'Animationsstöd',
    da: 'Animationsunderstøttelse',
    no: 'Animasjonsstøtte',
    fi: 'Animaatiotuki',
    el: 'Υποστήριξη κίνησης',
  },
  browser: {
    en: 'Web browser support',
    de: 'Webbrowser-Unterstützung',
    es: 'Compatibilidad con navegadores',
    fr: 'Prise en charge des navigateurs',
    pt: 'Suporte em navegadores',
    it: 'Supporto browser',
    ro: 'Suport în browsere',
    nl: 'Webbrowserondersteuning',
    hu: 'Böngészőtámogatás',
    cs: 'Podpora webových prohlížečů',
    sv: 'Webbläsarstöd',
    da: 'Webbrowserunderstøttelse',
    no: 'Nettleserstøtte',
    fi: 'Selaintuki',
    el: 'Υποστήριξη περιηγητών',
  },
  compact: {
    en: 'Compact file size',
    de: 'Kompakte Dateigröße',
    es: 'Tamaño de archivo compacto',
    fr: 'Taille de fichier compacte',
    pt: 'Tamanho de ficheiro compacto',
    it: 'Dimensione file compatta',
    ro: 'Dimensiune compactă',
    nl: 'Compact bestandsformaat',
    hu: 'Kis fájlméret',
    cs: 'Malá velikost souboru',
    sv: 'Kompakt filstorlek',
    da: 'Kompakt filstørrelse',
    no: 'Kompakt filstørrelse',
    fi: 'Pieni tiedostokoko',
    el: 'Συμπαγές μέγεθος αρχείου',
  },
  exif: {
    en: 'Metadata (EXIF)',
    de: 'Metadaten (EXIF)',
    es: 'Metadatos (EXIF)',
    fr: 'Métadonnées (EXIF)',
    pt: 'Metadados (EXIF)',
    it: 'Metadati (EXIF)',
    ro: 'Metadate (EXIF)',
    nl: 'Metadata (EXIF)',
    hu: 'Metaadatok (EXIF)',
    cs: 'Metadata (EXIF)',
    sv: 'Metadata (EXIF)',
    da: 'Metadata (EXIF)',
    no: 'Metadata (EXIF)',
    fi: 'Metatiedot (EXIF)',
    el: 'Μεταδεδομένα (EXIF)',
  },
};
const DATA_FEAT_NAMES = {
  nested: {
    en: 'Nested/hierarchical data',
    de: 'Verschachtelte Daten',
    es: 'Datos jerárquicos',
    fr: 'Données hiérarchiques',
    pt: 'Dados hierárquicos',
    it: 'Dati gerarchici',
    ro: 'Date ierarhice',
    nl: 'Geneste gegevens',
    hu: 'Beágyazott adatok',
    cs: 'Vnořená data',
    sv: 'Nästlade data',
    da: 'Indlejrede data',
    no: 'Nestede data',
    fi: 'Sisäkkäinen data',
    el: 'Ιεραρχικά δεδομένα',
  },
  tabular: {
    en: 'Tabular data',
    de: 'Tabellarische Daten',
    es: 'Datos tabulares',
    fr: 'Données tabulaires',
    pt: 'Dados tabulares',
    it: 'Dati tabulari',
    ro: 'Date tabulare',
    nl: 'Tabelgegevens',
    hu: 'Táblázatos adatok',
    cs: 'Tabulární data',
    sv: 'Tabelldata',
    da: 'Tabeldata',
    no: 'Tabelldata',
    fi: 'Taulukkodata',
    el: 'Δεδομένα πίνακα',
  },
  schema: {
    en: 'Schema validation',
    de: 'Schema-Validierung',
    es: 'Validación de esquema',
    fr: 'Validation de schéma',
    pt: 'Validação de schema',
    it: 'Validazione schema',
    ro: 'Validare schemă',
    nl: 'Schemavalidatie',
    hu: 'Sémavalidáció',
    cs: 'Validace schématu',
    sv: 'Schemavalidering',
    da: 'Skemavalidering',
    no: 'Skjemavalidering',
    fi: 'Skeemavalidointi',
    el: 'Επαλήθευση σχήματος',
  },
  readable: {
    en: 'Human readable',
    de: 'Menschenlesbar',
    es: 'Legible por humanos',
    fr: 'Lisible par un humain',
    pt: 'Legível por humanos',
    it: "Leggibile dall'uomo",
    ro: 'Lizibil pentru oameni',
    nl: 'Menselijk leesbaar',
    hu: 'Ember által olvasható',
    cs: 'Lidsky čitelné',
    sv: 'Läsbart för människor',
    da: 'Menneskelæsbart',
    no: 'Lesbart for mennesker',
    fi: 'Ihmisen luettavissa',
    el: 'Αναγνώσιμο από ανθρώπους',
  },
  api: {
    en: 'API standard',
    de: 'API-Standard',
    es: 'Estándar API',
    fr: 'Standard API',
    pt: 'Padrão API',
    it: 'Standard API',
    ro: 'Standard API',
    nl: 'API-standaard',
    hu: 'API-szabvány',
    cs: 'API standard',
    sv: 'API-standard',
    da: 'API-standard',
    no: 'API-standard',
    fi: 'API-standardi',
    el: 'Πρότυπο API',
  },
  compact: {
    en: 'Compact syntax',
    de: 'Kompakte Syntax',
    es: 'Sintaxis compacta',
    fr: 'Syntaxe compacte',
    pt: 'Sintaxe compacta',
    it: 'Sintassi compatta',
    ro: 'Sintaxă compactă',
    nl: 'Compacte syntaxis',
    hu: 'Kompakt szintaxis',
    cs: 'Kompaktní syntaxe',
    sv: 'Kompakt syntax',
    da: 'Kompakt syntaks',
    no: 'Kompakt syntaks',
    fi: 'Kompakti syntaksi',
    el: 'Συμπαγής σύνταξη',
  },
};

function comparisonTitle(loc, S, T) {
  return {
    en: `${S} vs ${T} – format comparison`,
    de: `${S} vs ${T} – Formatvergleich`,
    es: `${S} vs ${T} – comparación de formatos`,
    fr: `${S} vs ${T} – comparaison des formats`,
    pt: `${S} vs ${T} – comparação de formatos`,
    it: `${S} vs ${T} – confronto dei formati`,
    ro: `${S} vs ${T} – comparație de formate`,
    nl: `${S} vs ${T} – formaatsvergelijking`,
    hu: `${S} vs ${T} – formátum-összehasonlítás`,
    cs: `${S} vs ${T} – srovnání formátů`,
    sv: `${S} vs ${T} – formatjämförelse`,
    da: `${S} vs ${T} – formatsammenligning`,
    no: `${S} vs ${T} – formatsammenligning`,
    fi: `${S} vs ${T} – muotovertailu`,
    el: `${S} vs ${T} – σύγκριση μορφών`,
  }[loc];
}

function buildComparison(src, tgt, loc) {
  const S = F[src],
    T = F[tgt];
  if (!S || !T) return null;
  const isImg = !!IMAGE_FEATURES[src] && !!IMAGE_FEATURES[tgt];
  const isData = !!DATA_FEATURES[src] && !!DATA_FEATURES[tgt];
  if (isData) {
    const sF = DATA_FEATURES[src],
      tF = DATA_FEATURES[tgt];
    return {
      type: 'sectionFeatureComparison',
      title: comparisonTitle(loc, S, T),
      plans: [
        { id: src, name: S },
        { id: tgt, name: T, highlighted: true },
      ],
      features: Object.keys(DATA_FEAT_NAMES).map((k) => ({ name: DATA_FEAT_NAMES[k][loc], values: { [src]: sF[k], [tgt]: tF[k] } })),
    };
  }
  if (IMAGE_FEATURES[src] && IMAGE_FEATURES[tgt]) {
    const sF = IMAGE_FEATURES[src],
      tF = IMAGE_FEATURES[tgt];
    return {
      type: 'sectionFeatureComparison',
      title: comparisonTitle(loc, S, T),
      plans: [
        { id: src, name: S },
        { id: tgt, name: T, highlighted: true },
      ],
      features: Object.keys(IMG_FEAT_NAMES).map((k) => ({ name: IMG_FEAT_NAMES[k][loc], values: { [src]: sF[k], [tgt]: tF[k] } })),
    };
  }
  return null;
}

// ═══════════════════════════════════════════════════════════════
// Build JSON for a tool×locale
// ═══════════════════════════════════════════════════════════════

function buildJSON(tool, loc) {
  const { key, src, tgt, cat, subCat } = tool;
  const S = F[src] || IMG_WORD[loc];
  const T = F[tgt] || IMG_WORD[loc];
  const sl = makeSlug(loc, src, tgt);
  const ti = makeTitle(loc, src, tgt);
  const basePath = TOOLS_BASE[loc];
  const toolPath = `${basePath}/${sl}`;
  const desc = metaDesc(loc, S, T, cat);

  const st = steps(loc, S, T, cat);
  const fc = featureCards(loc);
  const fq = faqItems(loc, S, T);
  const comp = buildComparison(src, tgt, loc);

  const contentBlocks = [
    { type: 'gap', variant: 'line' },
    {
      type: 'sectionBasic',
      title: whyTitle(loc, S, T),
      html: `<p class="text-mid mb-4">${desc}</p>`,
      imageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
      imageAlt: `${S} to ${T} conversion`,
      variant: 'right',
    },
    { type: 'gap', size: 'xs' },
    {
      type: 'sectionSteps',
      title: howTitle(loc, S, T),
      grid: 'three',
      items: [
        { title: st.upload, description: st.uploadDesc, icon: 'RiUploadCloud2Line' },
        { title: st.convert, description: st.convertDesc, icon: 'RiSettings3Line' },
        { title: st.download, description: st.downloadDesc, icon: 'RiDownloadLine' },
      ],
    },
    { type: 'gap', variant: 'line' },
    { type: 'sectionSteps', title: diffTitle(loc), grid: 'two', items: fc.map((f) => ({ icon: f.icon, title: f.title, description: f.desc })) },
    { type: 'gap', variant: 'line' },
  ];

  if (comp) {
    contentBlocks.push(comp, { type: 'gap', variant: 'line' });
  }

  contentBlocks.push(
    { type: 'faq', title: faqTitle(loc, S, T), openByDefault: 0, items: fq.map((f) => ({ question: f.q, answer: f.a })) },
    { type: 'gap', variant: 'line' },
    {
      type: 'contactForm',
      title: contactTitle(loc),
      description: contactDesc(loc),
      imageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
      imageAlt: 'Contact',
      defaultSubject: ti,
    },
    { type: 'gap', variant: 'line' },
    { type: 'toolsCarousel', title: carouselTitle(loc) },
    { type: 'gap', size: 'sm' },
  );

  // HowTo schema steps
  const howToSteps = [
    { position: 1, name: st.upload, text: st.uploadDesc },
    { position: 2, name: st.convert, text: st.convertDesc },
    { position: 3, name: st.download, text: st.downloadDesc },
  ];

  return {
    toolKey: key,
    locale: loc,
    metadata: { title: `${ti} — ${S} ${T}`, description: desc, ogImage: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp', path: toolPath },
    hero: { title: ti, description: desc, backgroundImage: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp' },
    breadcrumbs: { second: { href: basePath, label: TOOLS_LABEL[loc] }, third: { href: toolPath, label: ti } },
    schemas: {
      software: {
        name: ti,
        applicationCategory: 'MultimediaApplication',
        applicationSubCategory: subCat,
        description: desc,
        featureList: [`${S} to ${T} conversion`, 'Batch conversion', 'Local browser processing'],
        alternateName: [`Convert ${S} to ${T}`, `${S} to ${T}`, `Free ${S} to ${T} converter`],
      },
      howTo: { name: howTitle(loc, S, T), description: desc, steps: howToSteps },
    },
    contentBlocks,
  };
}

// ═══════════════════════════════════════════════════════════════
// Generate all files
// ═══════════════════════════════════════════════════════════════

let created = 0,
  skipped = 0;

for (const tool of TOOLS) {
  for (const loc of LOCALES) {
    // Build filename
    let fn;
    if (tool.key === 'imageToBase64') fn = 'converter-image-to-base64.json';
    else if (tool.key === 'base64ToImage') fn = 'converter-base64-to-image.json';
    else fn = `converter-${tool.src}-to-${tool.tgt}.json`;

    const filePath = path.join(dataDir, loc, 'tools', fn);

    // Skip if already exists
    if (fs.existsSync(filePath)) {
      skipped++;
      continue;
    }

    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const json = buildJSON(tool, loc);
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n');
    created++;
  }
}

console.log(`Done: ${created} JSON files created, ${skipped} skipped (already exist)`);
