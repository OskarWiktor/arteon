/**
 * Add locale entries to tool-registry.ts for all PL-only converters.
 */
const fs = require('fs');
const path = require('path');

const LOCALES = ['en', 'de', 'es', 'fr', 'pt', 'it', 'ro', 'nl', 'hu', 'cs', 'sv', 'da', 'no', 'fi', 'el'];

// Format display names
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

// "image" word per locale (for base64 converters)
const IMG = {
  pl: 'obraz',
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

// Capitalized image word for titles
const IMGT = {
  pl: 'Obraz',
  en: 'Image',
  de: 'Bild',
  es: 'Imagen',
  fr: 'Image',
  pt: 'Imagem',
  it: 'Immagine',
  ro: 'Imagine',
  nl: 'Afbeelding',
  hu: 'Kép',
  cs: 'Obrázek',
  sv: 'Bild',
  da: 'Billede',
  no: 'Bilde',
  fi: 'Kuva',
  el: 'Εικόνα',
};

function slug(loc, src, tgt) {
  const s = src === 'image' ? IMG[loc] : src;
  const t = tgt === 'image' ? IMG[loc] : tgt;
  switch (loc) {
    case 'pl':
      return `konwerter-${s}-na-${t}`;
    case 'en':
      return `${s}-to-${t}-converter`;
    case 'de':
      return `${s}-zu-${t}-konverter`;
    case 'es':
      return `convertidor-${s}-a-${t}`;
    case 'fr':
      return `convertisseur-${s}-en-${t}`;
    case 'pt':
      return `conversor-${s}-para-${t}`;
    case 'it':
      return `convertitore-${s}-in-${t}`;
    case 'ro':
      return `convertor-${s}-in-${t}`;
    case 'nl':
      return `${s}-naar-${t}-converter`;
    case 'hu':
      return `${s}-${t}-konverter`;
    case 'cs':
      return `prevodnik-${s}-na-${t}`;
    case 'sv':
      return `${s}-till-${t}-konverterare`;
    case 'da':
      return `${s}-til-${t}-konverter`;
    case 'no':
      return `${s}-til-${t}-konverterer`;
    case 'fi':
      return `${s}-${t}-muunnin`;
    case 'el':
      return `metatropeas-${s}-se-${t}`;
  }
}

function title(loc, src, tgt) {
  const s = src === 'image' ? IMGT[loc] : F[src];
  const t = tgt === 'image' ? IMGT[loc] : F[tgt];
  switch (loc) {
    case 'pl':
      return `Konwerter ${s} na ${t}`;
    case 'en':
      return `${s} to ${t} converter`;
    case 'de':
      return `${s}-zu-${t}-Konverter`;
    case 'es':
      return `Convertidor ${s} a ${t}`;
    case 'fr':
      return `Convertisseur ${s} en ${t}`;
    case 'pt':
      return `Conversor ${s} para ${t}`;
    case 'it':
      return `Convertitore ${s} in ${t}`;
    case 'ro':
      return `Convertor ${s} în ${t}`;
    case 'nl':
      return `${s} naar ${t} converter`;
    case 'hu':
      return `${s} ${t} konverter`;
    case 'cs':
      return `Převodník ${s} na ${t}`;
    case 'sv':
      return `${s} till ${t}-konverterare`;
    case 'da':
      return `${s} til ${t}-konverter`;
    case 'no':
      return `${s} til ${t}-konverterer`;
    case 'fi':
      return `${s} ${t} -muunnin`;
    case 'el':
      return `Μετατροπέας ${s} σε ${t}`;
  }
}

// Description templates per locale
const DESC = {
  // Image format converters
  img: {
    en: (s, t) => `Convert ${s} files to ${t} format. Free, private, unlimited. Works in your browser.`,
    de: (s, t) => `${s}-Dateien in ${t}-Format umwandeln. Kostenlos, privat, unbegrenzt.`,
    es: (s, t) => `Convierte archivos ${s} a formato ${t}. Gratis, privado y sin límites.`,
    fr: (s, t) => `Convertissez vos fichiers ${s} en ${t}. Gratuit, privé et illimité.`,
    pt: (s, t) => `Converta ficheiros ${s} para ${t}. Gratuito, privado e ilimitado.`,
    it: (s, t) => `Converti file ${s} in formato ${t}. Gratuito, privato e illimitato.`,
    ro: (s, t) => `Convertește fișiere ${s} în format ${t}. Gratuit, privat și nelimitat.`,
    nl: (s, t) => `Converteer ${s}-bestanden naar ${t}-formaat. Gratis, privé en onbeperkt.`,
    hu: (s, t) => `${s} fájlok konvertálása ${t} formátumba. Ingyenes, privát, korlátlan.`,
    cs: (s, t) => `Převeďte soubory ${s} do formátu ${t}. Zdarma, soukromě a bez omezení.`,
    sv: (s, t) => `Konvertera ${s}-filer till ${t}-format. Gratis, privat och obegränsat.`,
    da: (s, t) => `Konverter ${s}-filer til ${t}-format. Gratis, privat og ubegrænset.`,
    no: (s, t) => `Konverter ${s}-filer til ${t}-format. Gratis, privat og ubegrenset.`,
    fi: (s, t) => `Muunna ${s}-tiedostot ${t}-muotoon. Ilmainen, yksityinen ja rajoittamaton.`,
    el: (s, t) => `Μετατρέψτε αρχεία ${s} σε μορφή ${t}. Δωρεάν, ιδιωτικό και απεριόριστο.`,
  },
  // Image → PDF
  imgToPdf: {
    en: (s) => `Convert ${s} images to PDF documents. Combine multiple files into one PDF. Free, no registration.`,
    de: (s) => `${s}-Bilder in PDF-Dokumente umwandeln. Mehrere Dateien zu einem PDF kombinieren. Kostenlos.`,
    es: (s) => `Convierte imágenes ${s} a documentos PDF. Combina varios archivos en un PDF. Gratis.`,
    fr: (s) => `Convertissez vos images ${s} en PDF. Combinez plusieurs fichiers en un seul PDF. Gratuit.`,
    pt: (s) => `Converta imagens ${s} para documentos PDF. Combine vários ficheiros num só PDF. Gratuito.`,
    it: (s) => `Converti immagini ${s} in documenti PDF. Combina più file in un unico PDF. Gratuito.`,
    ro: (s) => `Convertește imagini ${s} în documente PDF. Combină mai multe fișiere într-un PDF. Gratuit.`,
    nl: (s) => `Converteer ${s}-afbeeldingen naar PDF-documenten. Combineer meerdere bestanden in één PDF. Gratis.`,
    hu: (s) => `${s} képek konvertálása PDF dokumentummá. Több fájl egyesítése egy PDF-be. Ingyenes.`,
    cs: (s) => `Převeďte obrázky ${s} na dokumenty PDF. Spojte více souborů do jednoho PDF. Zdarma.`,
    sv: (s) => `Konvertera ${s}-bilder till PDF-dokument. Kombinera flera filer till en PDF. Gratis.`,
    da: (s) => `Konverter ${s}-billeder til PDF-dokumenter. Kombiner flere filer til én PDF. Gratis.`,
    no: (s) => `Konverter ${s}-bilder til PDF-dokumenter. Kombiner flere filer til én PDF. Gratis.`,
    fi: (s) => `Muunna ${s}-kuvat PDF-dokumenteiksi. Yhdistä useita tiedostoja yhdeksi PDF:ksi. Ilmainen.`,
    el: (s) => `Μετατρέψτε εικόνες ${s} σε PDF. Συνδυάστε πολλαπλά αρχεία σε ένα PDF. Δωρεάν.`,
  },
  // PDF → Image
  pdfToImg: {
    en: (t) => `Convert PDF pages to ${t} images. High quality, no file limits. Free, no registration.`,
    de: (t) => `PDF-Seiten in ${t}-Bilder umwandeln. Hohe Qualität, ohne Limits. Kostenlos.`,
    es: (t) => `Convierte páginas PDF a imágenes ${t}. Alta calidad, sin límites. Gratis.`,
    fr: (t) => `Convertissez les pages PDF en images ${t}. Haute qualité, sans limites. Gratuit.`,
    pt: (t) => `Converta páginas PDF em imagens ${t}. Alta qualidade, sem limites. Gratuito.`,
    it: (t) => `Converti pagine PDF in immagini ${t}. Alta qualità, senza limiti. Gratuito.`,
    ro: (t) => `Convertește pagini PDF în imagini ${t}. Calitate înaltă, fără limite. Gratuit.`,
    nl: (t) => `Converteer PDF-pagina's naar ${t}-afbeeldingen. Hoge kwaliteit, geen limieten. Gratis.`,
    hu: (t) => `PDF oldalak konvertálása ${t} képekké. Kiváló minőség, korlátok nélkül. Ingyenes.`,
    cs: (t) => `Převeďte stránky PDF na obrázky ${t}. Vysoká kvalita, bez omezení. Zdarma.`,
    sv: (t) => `Konvertera PDF-sidor till ${t}-bilder. Hög kvalitet, inga begränsningar. Gratis.`,
    da: (t) => `Konverter PDF-sider til ${t}-billeder. Høj kvalitet, ingen begrænsninger. Gratis.`,
    no: (t) => `Konverter PDF-sider til ${t}-bilder. Høy kvalitet, ingen begrensninger. Gratis.`,
    fi: (t) => `Muunna PDF-sivut ${t}-kuviksi. Korkea laatu, ei rajoituksia. Ilmainen.`,
    el: (t) => `Μετατρέψτε σελίδες PDF σε εικόνες ${t}. Υψηλή ποιότητα, χωρίς όρια. Δωρεάν.`,
  },
  // Data converters
  data: {
    en: (s, t) => `Convert ${s} to ${t} format. Automatic parsing and formatting. Free, no registration.`,
    de: (s, t) => `${s} in ${t}-Format konvertieren. Automatisches Parsen und Formatieren. Kostenlos.`,
    es: (s, t) => `Convierte ${s} a formato ${t}. Análisis y formato automáticos. Gratis.`,
    fr: (s, t) => `Convertissez ${s} en format ${t}. Analyse et formatage automatiques. Gratuit.`,
    pt: (s, t) => `Converta ${s} para formato ${t}. Análise e formatação automáticas. Gratuito.`,
    it: (s, t) => `Converti ${s} in formato ${t}. Analisi e formattazione automatiche. Gratuito.`,
    ro: (s, t) => `Convertește ${s} în format ${t}. Parsare și formatare automată. Gratuit.`,
    nl: (s, t) => `Converteer ${s} naar ${t}-formaat. Automatisch parsen en formatteren. Gratis.`,
    hu: (s, t) => `${s} konvertálása ${t} formátumba. Automatikus elemzés és formázás. Ingyenes.`,
    cs: (s, t) => `Převeďte ${s} do formátu ${t}. Automatické parsování a formátování. Zdarma.`,
    sv: (s, t) => `Konvertera ${s} till ${t}-format. Automatisk parsning och formatering. Gratis.`,
    da: (s, t) => `Konverter ${s} til ${t}-format. Automatisk parsing og formatering. Gratis.`,
    no: (s, t) => `Konverter ${s} til ${t}-format. Automatisk parsing og formatering. Gratis.`,
    fi: (s, t) => `Muunna ${s} ${t}-muotoon. Automaattinen jäsennys ja muotoilu. Ilmainen.`,
    el: (s, t) => `Μετατρέψτε ${s} σε μορφή ${t}. Αυτόματη ανάλυση και μορφοποίηση. Δωρεάν.`,
  },
  // Base64 encode
  b64enc: {
    en: () => `Encode images to Base64 format. Copy ready code for CSS or HTML. Free, no registration.`,
    de: () => `Bilder in Base64 kodieren. Fertigen Code für CSS oder HTML kopieren. Kostenlos.`,
    es: () => `Codifica imágenes en formato Base64. Copia el código listo para CSS o HTML. Gratis.`,
    fr: () => `Encodez des images en Base64. Copiez le code prêt pour CSS ou HTML. Gratuit.`,
    pt: () => `Codifique imagens em Base64. Copie o código pronto para CSS ou HTML. Gratuito.`,
    it: () => `Codifica immagini in formato Base64. Copia il codice pronto per CSS o HTML. Gratuito.`,
    ro: () => `Codifică imagini în format Base64. Copiază codul gata pentru CSS sau HTML. Gratuit.`,
    nl: () => `Codeer afbeeldingen naar Base64-formaat. Kopieer kant-en-klare code voor CSS of HTML. Gratis.`,
    hu: () => `Képek kódolása Base64 formátumba. Másolja a kész kódot CSS-hez vagy HTML-hez. Ingyenes.`,
    cs: () => `Zakódujte obrázky do formátu Base64. Zkopírujte hotový kód pro CSS nebo HTML. Zdarma.`,
    sv: () => `Koda bilder till Base64-format. Kopiera färdig kod för CSS eller HTML. Gratis.`,
    da: () => `Kod billeder til Base64-format. Kopier færdig kode til CSS eller HTML. Gratis.`,
    no: () => `Kod bilder til Base64-format. Kopier ferdig kode for CSS eller HTML. Gratis.`,
    fi: () => `Koodaa kuvat Base64-muotoon. Kopioi valmis koodi CSS:ää tai HTML:ää varten. Ilmainen.`,
    el: () => `Κωδικοποιήστε εικόνες σε Base64. Αντιγράψτε έτοιμο κώδικα για CSS ή HTML. Δωρεάν.`,
  },
  // Base64 decode
  b64dec: {
    en: () => `Decode Base64 strings to images. Preview and download in your browser. Free, no registration.`,
    de: () => `Base64-Zeichenketten in Bilder dekodieren. Vorschau und Download im Browser. Kostenlos.`,
    es: () => `Decodifica cadenas Base64 a imágenes. Vista previa y descarga en tu navegador. Gratis.`,
    fr: () => `Décodez les chaînes Base64 en images. Aperçu et téléchargement dans votre navigateur. Gratuit.`,
    pt: () => `Decodifique strings Base64 em imagens. Pré-visualize e descarregue no navegador. Gratuito.`,
    it: () => `Decodifica stringhe Base64 in immagini. Anteprima e download nel browser. Gratuito.`,
    ro: () => `Decodifică șiruri Base64 în imagini. Previzualizare și descărcare în browser. Gratuit.`,
    nl: () => `Decodeer Base64-strings naar afbeeldingen. Bekijk en download in je browser. Gratis.`,
    hu: () => `Base64 karakterláncok dekódolása képekké. Előnézet és letöltés a böngészőben. Ingyenes.`,
    cs: () => `Dekódujte řetězce Base64 na obrázky. Náhled a stažení v prohlížeči. Zdarma.`,
    sv: () => `Avkoda Base64-strängar till bilder. Förhandsgranska och ladda ner i webbläsaren. Gratis.`,
    da: () => `Afkod Base64-strenge til billeder. Forhåndsvisning og download i browseren. Gratis.`,
    no: () => `Dekod Base64-strenger til bilder. Forhåndsvisning og nedlasting i nettleseren. Gratis.`,
    fi: () => `Dekoodaa Base64-merkkijonot kuviksi. Esikatsele ja lataa selaimessa. Ilmainen.`,
    el: () => `Αποκωδικοποιήστε συμβολοσειρές Base64 σε εικόνες. Προεπισκόπηση και λήψη στον browser. Δωρεάν.`,
  },
};

// Tools to localize: key → { src, tgt, type }
const TOOLS = {
  avifToTiff: { src: 'avif', tgt: 'tiff', type: 'img' },
  jpgToPdf: { src: 'jpg', tgt: 'pdf', type: 'imgToPdf' },
  pngToPdf: { src: 'png', tgt: 'pdf', type: 'imgToPdf' },
  webpToPdf: { src: 'webp', tgt: 'pdf', type: 'imgToPdf' },
  heicToPdf: { src: 'heic', tgt: 'pdf', type: 'imgToPdf' },
  bmpToPdf: { src: 'bmp', tgt: 'pdf', type: 'imgToPdf' },
  tiffToPdf: { src: 'tiff', tgt: 'pdf', type: 'imgToPdf' },
  svgToPdf: { src: 'svg', tgt: 'pdf', type: 'imgToPdf' },
  pdfToJpg: { src: 'pdf', tgt: 'jpg', type: 'pdfToImg' },
  pdfToPng: { src: 'pdf', tgt: 'png', type: 'pdfToImg' },
  pdfToWebp: { src: 'pdf', tgt: 'webp', type: 'pdfToImg' },
  csvToJson: { src: 'csv', tgt: 'json', type: 'data' },
  jsonToCsv: { src: 'json', tgt: 'csv', type: 'data' },
  jsonToXml: { src: 'json', tgt: 'xml', type: 'data' },
  xmlToJson: { src: 'xml', tgt: 'json', type: 'data' },
  yamlToJson: { src: 'yaml', tgt: 'json', type: 'data' },
  jsonToYaml: { src: 'json', tgt: 'yaml', type: 'data' },
  markdownToHtml: { src: 'markdown', tgt: 'html', type: 'data' },
  htmlToMarkdown: { src: 'html', tgt: 'markdown', type: 'data' },
  imageToBase64: { src: 'image', tgt: 'base64', type: 'b64enc' },
  base64ToImage: { src: 'base64', tgt: 'image', type: 'b64dec' },
};

function getDesc(loc, tool) {
  const { src, tgt, type } = tool;
  const tmpl = DESC[type][loc];
  if (type === 'img') return tmpl(F[src], F[tgt]);
  if (type === 'imgToPdf') return tmpl(F[src]);
  if (type === 'pdfToImg') return tmpl(F[tgt]);
  if (type === 'data') return tmpl(F[src], F[tgt]);
  if (type === 'b64enc' || type === 'b64dec') return tmpl();
}

// Read tool-registry.ts
const filePath = path.join(__dirname, '..', 'lib', 'i18n', 'tool-registry.ts');
let content = fs.readFileSync(filePath, 'utf-8');

let updated = 0;
for (const [key, tool] of Object.entries(TOOLS)) {
  // Find the locales block for this tool
  const keyPattern = `key: '${key}',`;
  const keyIdx = content.indexOf(keyPattern);
  if (keyIdx === -1) {
    console.log(`WARN: key ${key} not found`);
    continue;
  }

  // Find "locales: {" after the key
  const localesStart = content.indexOf('locales: {', keyIdx);
  if (localesStart === -1) {
    console.log(`WARN: locales not found for ${key}`);
    continue;
  }

  // Find the closing of the locales block
  let braceCount = 0;
  let localesEnd = -1;
  for (let i = localesStart + 'locales: '.length; i < content.length; i++) {
    if (content[i] === '{') braceCount++;
    if (content[i] === '}') {
      braceCount--;
      if (braceCount === 0) {
        localesEnd = i;
        break;
      }
    }
  }
  if (localesEnd === -1) {
    console.log(`WARN: locales end not found for ${key}`);
    continue;
  }

  // Extract current locales content
  const localesContent = content.substring(localesStart + 'locales: {'.length, localesEnd);

  // Check which locales already exist
  const existingLocales = LOCALES.filter((l) => localesContent.includes(`${l}:`));
  const missingLocales = LOCALES.filter((l) => !localesContent.includes(`${l}:`));

  if (missingLocales.length === 0) {
    console.log(`SKIP: ${key} already has all locales`);
    continue;
  }

  // Generate new locale entries
  let newEntries = '';
  for (const loc of missingLocales) {
    const s = slug(loc, tool.src, tool.tgt);
    const t = title(loc, tool.src, tool.tgt);
    const d = getDesc(loc, tool);
    newEntries += `\n      ${loc}: { slug: '${s}', title: '${t}', description: '${d.replace(/'/g, "\\'")}' },`;
  }

  // Insert before the closing brace of locales
  content = content.substring(0, localesEnd) + newEntries + '\n    ' + content.substring(localesEnd);
  updated++;
  console.log(`OK: ${key} — added ${missingLocales.length} locales`);
}

fs.writeFileSync(filePath, content);
console.log(`\nDone: ${updated} tools updated in tool-registry.ts`);
