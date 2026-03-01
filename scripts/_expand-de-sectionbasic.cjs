/**
 * Expand thin "Why convert X to Y?" sectionBasic in DE converter files.
 *
 * Replaces the generic 3-4 sentence placeholder with 4 rich, factually accurate paragraphs:
 * 1. Source format description (specific to source format)
 * 2. Target format value proposition (specific to target format)
 * 3. Pair-specific technical detail (unique per converter pair)
 * 4. Privacy/free note (shared, DSGVO-specific)
 */
const fs = require('fs');
const path = require('path');

const DE_TOOLS = path.join(__dirname, '..', 'data', 'de', 'tools');

// --- Source format descriptions ---
const SOURCE = {
  png: 'Portable Network Graphics (PNG) ist ein verlustfreies Bildformat, das Millionen Farben und volle Alpha-Transparenz unterstützt. PNG eignet sich besonders für Logos, Icons, Screenshots und Grafiken mit scharfen Kanten oder Text – überall dort, wo jedes Pixel zählt.',
  jpg: 'JPEG (JPG) ist das weltweit meistverbreitete Format für digitale Fotos und Bilder. Es nutzt verlustbehaftete Komprimierung für kompakte Dateigrößen, unterstützt jedoch weder Transparenz noch verlustfreie Speicherung.',
  heic: 'High Efficiency Image Container (HEIC) ist das Standardformat für Fotos auf Apple-Geräten seit iOS 11. HEIC bietet kleinere Dateigrößen als JPEG bei vergleichbarer Qualität, wird jedoch außerhalb des Apple-Ökosystems – unter Windows, Android und auf vielen Webplattformen – nicht nativ unterstützt.',
  webp: 'WebP ist ein modernes Bildformat von Google, das sowohl verlustbehaftete als auch verlustfreie Komprimierung unterstützt. Es bietet deutlich kleinere Dateien als PNG und JPEG bei vergleichbarer visueller Qualität und wird von allen aktuellen Browsern unterstützt.',
  svg: 'Scalable Vector Graphics (SVG) ist ein XML-basiertes Vektorformat für zweidimensionale Grafiken. SVG-Dateien sind auflösungsunabhängig und bleiben bei jeder Größe scharf – ideal für Logos, Icons und Illustrationen.',
  gif: 'Graphics Interchange Format (GIF) unterstützt Animationen und eine Palette von maximal 256 Farben. GIF ist weit verbreitet für animierte Inhalte in sozialen Medien und Messenger-Diensten, eignet sich aber wegen der Farbeinschränkung nicht für fotorealistische Bilder.',
  bmp: 'Bitmap (BMP) ist ein älteres Windows-Bildformat, das Pixeldaten weitgehend unkomprimiert speichert. BMP-Dateien sind dadurch extrem groß und für den modernen Einsatz auf Webseiten, in E-Mails oder auf mobilen Geräten ungeeignet.',
  tiff: 'Tagged Image File Format (TIFF) ist der Industriestandard für professionelle Fotografie, Druck und Archivierung. TIFF speichert Bilder verlustfrei mit voller Farbtiefe, Ebenen und Metadaten – verlangt dafür aber entsprechend große Dateien.',
  avif: 'AV1 Image File Format (AVIF) ist ein Bildformat der nächsten Generation, basierend auf dem AV1-Videocodec. AVIF bietet die aktuell beste Komprimierung – bis zu 50% kleinere Dateien als WebP bei vergleichbarer visueller Qualität.',
};

// --- Target format value propositions ---
const TARGET = {
  webp: 'WebP reduziert die Dateigröße um bis zu 30–35% gegenüber älteren Formaten, ohne sichtbaren Qualitätsverlust. Alle modernen Browser (Chrome, Firefox, Safari 14+, Edge) unterstützen WebP vollständig. Für Webseiten bedeutet das schnellere Ladezeiten, bessere Core Web Vitals und ein verbessertes Google-Ranking.',
  avif: 'AVIF bietet die effizienteste Komprimierung aller aktuellen Bildformate und kann die Dateigröße um bis zu 50% gegenüber JPEG reduzieren. Chrome, Firefox und Safari 16+ unterstützen AVIF. Besonders für leistungskritische Webprojekte und mobile Nutzung ist AVIF die optimale Wahl.',
  jpg: 'JPEG ist das universellste Bildformat – kompatibel mit jedem Gerät, jedem Browser und jeder Plattform weltweit. Die Konvertierung zu JPG stellt sicher, dass Ihre Bilder überall problemlos angezeigt werden können: von E-Mail-Anhängen über Social-Media-Posts bis hin zu Druckdiensten.',
  png: 'PNG bewahrt die volle Bildqualität ohne Kompressionsartefakte und unterstützt volle Alpha-Transparenz. Das verlustfreie Format eignet sich ideal für Grafiken, die weiterbearbeitet werden sollen, und für Bilder, bei denen transparente Bereiche erhalten bleiben müssen.',
  gif: 'GIF ist das Standardformat für kurze Animationen, Memes und einfache Grafiken mit begrenzter Farbpalette. Mit universeller Browser-Unterstützung eignet sich GIF besonders für animierte Inhalte in sozialen Medien, Messenger-Diensten und E-Mail-Signaturen.',
  tiff: 'TIFF bewahrt die volle Bildqualität ohne jeglichen Datenverlust und unterstützt Ebenen sowie umfangreiche Metadaten. Als Industriestandard für Druck und Archivierung eignet sich TIFF für professionelle Fotografen, Druckereien und alle, die Bilder in höchster Qualität aufbewahren möchten.',
};

// --- Pair-specific technical details ---
const PAIR = {
  'png-to-webp':
    'WebP unterstützt Alpha-Transparenz genau wie PNG – alle transparenten Bereiche Ihres Bildes bleiben vollständig erhalten. Sie können zwischen verlustbehafteter und verlustfreier Komprimierung wählen, um die optimale Balance zwischen Dateigröße und Bildqualität zu finden.',
  'png-to-jpg':
    'Bei der Konvertierung von PNG zu JPG geht die Transparenz verloren – transparente Bereiche werden mit einer Hintergrundfarbe (standardmäßig Weiß) gefüllt. Dafür erhalten Sie deutlich kleinere Dateien, die sich besser für Fotos und Webinhalte eignen, bei denen keine Transparenz benötigt wird.',
  'png-to-avif':
    'AVIF bietet noch bessere Komprimierung als WebP und kann die Dateigröße Ihrer PNG-Bilder um bis zu 50% reduzieren. Alpha-Transparenz wird vollständig unterstützt. Beachten Sie, dass ältere Browser AVIF möglicherweise noch nicht unterstützen.',
  'png-to-gif':
    'Bei der Konvertierung wird die Farbpalette auf maximal 256 Farben reduziert. Das Ergebnis eignet sich für einfache Grafiken, Icons und Logos, ist aber für fotorealistische Bilder weniger geeignet. Transparenz wird unterstützt, allerdings nur binär (sichtbar oder unsichtbar), nicht stufenweise wie bei PNG.',
  'png-to-tiff':
    'Die Konvertierung bewahrt die volle Bildqualität und Transparenz des PNG-Originals im TIFF-Format. TIFF eignet sich besonders für die Weiterverarbeitung in Programmen wie Photoshop oder für den professionellen Druck. Beachten Sie, dass TIFF-Dateien deutlich größer sein können als PNG.',
  'jpg-to-webp':
    'WebP kann die Dateigröße Ihrer JPEG-Fotos um 25–35% reduzieren, ohne dass ein sichtbarer Qualitätsverlust entsteht. Da JPEG keine Transparenz unterstützt, gehen bei dieser Konvertierung keine Bildinformationen verloren.',
  'jpg-to-png':
    'Die Konvertierung von JPG zu PNG wandelt Ihr Bild in ein verlustfreies Format um. Bereits durch JPEG-Komprimierung verlorene Details können jedoch nicht wiederhergestellt werden. PNG eignet sich, wenn Sie das Bild ohne zusätzliche Qualitätsverluste weiterbearbeiten möchten.',
  'jpg-to-avif':
    'AVIF erreicht eine bis zu 50% bessere Komprimierung als JPEG bei vergleichbarer visueller Qualität. Das Format der nächsten Generation ist ideal für leistungskritische Webseiten und wird von Chrome, Firefox und Safari 16+ unterstützt.',
  'jpg-to-gif':
    'Die Farbpalette wird auf 256 Farben reduziert, was bei Fotos zu sichtbaren Qualitätsverlusten führen kann. Diese Konvertierung eignet sich daher hauptsächlich für einfache Grafiken oder wenn das GIF-Format aus Kompatibilitätsgründen erforderlich ist.',
  'jpg-to-tiff':
    'Die Konvertierung bewahrt die aktuelle Bildqualität Ihres JPEGs und speichert sie verlustfrei im TIFF-Format. Bereits durch JPEG-Komprimierung verlorene Details können nicht wiederhergestellt werden, aber TIFF erlaubt verlustfreie Weiterbearbeitung ohne zusätzliche Qualitätseinbußen.',
  'heic-to-jpg':
    'Bei der Konvertierung von HEIC zu JPG wird das Apple-proprietäre Format in das universell kompatible JPEG-Format umgewandelt. Eventuelle Transparenz und HDR-Informationen gehen verloren, die Bildqualität bleibt bei Einstellungen ab 85% jedoch nahezu identisch zum Original.',
  'heic-to-png':
    'Die Konvertierung bewahrt die volle Bildqualität Ihres HEIC-Originals verlustfrei im PNG-Format. PNG wird von allen Geräten und Plattformen unterstützt und eignet sich besonders, wenn Sie das Bild weiterbearbeiten oder die Transparenz erhalten möchten.',
  'heic-to-webp':
    'WebP bietet eine ausgezeichnete Balance zwischen Dateigröße und Qualität. Die Konvertierung von HEIC zu WebP ergibt kompakte Dateien, die von allen modernen Browsern unterstützt werden – ideal für Webseiten und Online-Plattformen.',
  'heic-to-avif':
    'AVIF bietet ähnliche Komprimierungseffizienz wie HEIC, ist aber als offenes Format deutlich breiter unterstützt. Die Konvertierung ermöglicht die Nutzung moderner Komprimierung ohne die Einschränkungen des Apple-Ökosystems.',
  'heic-to-tiff':
    'Die Konvertierung wandelt Ihre iPhone-Fotos in das professionelle TIFF-Format um. Ideal für Fotografen, die ihre mobilen Aufnahmen in einem verlustfreien Archivformat speichern und in professionellen Programmen wie Photoshop oder Lightroom weiterbearbeiten möchten.',
  'webp-to-jpg':
    'Die Konvertierung von WebP zu JPEG stellt maximale Kompatibilität sicher. JPG wird von jedem Gerät und jeder Software unterstützt – notwendig, wenn Sie Bilder per E-Mail versenden oder auf Plattformen hochladen müssen, die kein WebP akzeptieren.',
  'webp-to-png':
    'Die Konvertierung von WebP zu PNG bewahrt die Transparenz Ihres Bildes und speichert es verlustfrei. PNG eignet sich besonders für die Weiterbearbeitung in Grafikprogrammen und für Plattformen, die das WebP-Format nicht unterstützen.',
  'webp-to-avif':
    'AVIF bietet eine noch bessere Komprimierung als WebP bei vergleichbarer visueller Qualität. Wenn Sie Ihre Bilder für die nächste Generation Webstandards optimieren möchten, ist die Konvertierung von WebP zu AVIF ein sinnvoller Schritt.',
  'webp-to-gif':
    'Bei der Konvertierung wird die Farbpalette auf 256 Farben reduziert. Diese Konvertierung eignet sich hauptsächlich für einfache Grafiken oder wenn das GIF-Format für Animationen oder aus Kompatibilitätsgründen erforderlich ist.',
  'webp-to-tiff':
    'Die Konvertierung wandelt Ihre WebP-Dateien in das professionelle TIFF-Format um. Ideal für Druckproduktion und langfristige Archivierung, wo verlustfreie Qualität und volle Metadaten-Unterstützung erforderlich sind.',
  'svg-to-jpg':
    'Bei der Rasterisierung von SVG zu JPG wird das skalierbare Vektorbild in ein Pixelbild mit fester Auflösung konvertiert. Transparente Bereiche werden mit einer Hintergrundfarbe gefüllt. Das Ergebnis eignet sich für Plattformen und Anwendungen, die kein SVG akzeptieren.',
  'svg-to-png':
    'Bei der Rasterisierung von SVG zu PNG wird das Vektorbild in ein Pixelbild umgewandelt, wobei die Transparenz vollständig erhalten bleibt. PNG eignet sich besonders für Social-Media-Plattformen, Messenger und E-Mail-Signaturen, die kein SVG unterstützen.',
  'svg-to-webp':
    'Die Konvertierung erzeugt kompakte Pixelbilder aus Ihren Vektorgrafiken im modernen WebP-Format. WebP eignet sich ideal für den Einsatz auf Webseiten, wo kleine Dateigrößen und schnelle Ladezeiten entscheidend sind.',
  'svg-to-avif':
    'AVIF bietet die beste Komprimierung für die Rasterisierung Ihrer SVG-Dateien. Ideal für leistungskritische Webseiten, auf denen jedes Kilobyte zu besseren Ladezeiten und Core Web Vitals beiträgt.',
  'svg-to-gif':
    'Die Konvertierung wandelt Ihr Vektorbild in ein Pixelbild mit maximal 256 Farben um. GIF eignet sich für einfache Icons und animierte Grafiken, nicht aber für komplexe Illustrationen mit vielen Farben oder Farbverläufen.',
  'svg-to-tiff':
    'Die Rasterisierung von SVG zu TIFF erzeugt ein verlustfreies Pixelbild in höchster Qualität. Ideal für den professionellen Druck von Vektorgrafiken, wenn eine feste Pixelauflösung benötigt wird.',
  'gif-to-jpg':
    'Bei der Konvertierung von GIF zu JPG gehen Animationsframes und Transparenz verloren – nur das erste Bild des GIFs wird konvertiert. Dafür erhalten Sie ein universell kompatibles Format mit voller Farbtiefe (16,7 Millionen Farben).',
  'gif-to-png':
    'Die Konvertierung bewahrt die Bildqualität verlustfrei und unterstützt binäre Transparenz. Bei animierten GIFs wird nur der erste Frame konvertiert. PNG eignet sich besonders für die Weiterbearbeitung von GIF-Grafiken.',
  'gif-to-webp':
    'WebP unterstützt sowohl Einzelbilder als auch Animationen und bietet dabei deutlich bessere Komprimierung als GIF. Bei statischen GIFs ergibt die Konvertierung kleinere Dateien bei gleicher oder besserer visueller Qualität.',
  'gif-to-avif':
    'AVIF bietet überlegene Komprimierung gegenüber GIF und unterstützt Millionen Farben statt nur 256. Ideal für die Modernisierung älterer GIF-Grafiken auf Webseiten für bessere Ladezeiten.',
  'tiff-to-jpg':
    'Die Konvertierung reduziert die oft sehr großen TIFF-Dateien auf kompakte JPEG-Größen. Eventuelle Transparenz und Ebeneninformationen gehen verloren, aber Sie erhalten universell kompatible Dateien für Web, E-Mail und Social Media.',
  'tiff-to-png':
    'Die Konvertierung bewahrt die Bildqualität verlustfrei und erhält die Transparenz, falls vorhanden. PNG-Dateien sind deutlich kleiner als TIFF und werden von allen Geräten, Browsern und Plattformen unterstützt.',
  'tiff-to-webp':
    'WebP reduziert die Dateigröße Ihrer TIFF-Dateien drastisch – oft um über 90%. Ideal, wenn Sie professionelle Fotos oder hochauflösende Scans für den Einsatz auf Webseiten optimieren möchten.',
  'tiff-to-avif':
    'AVIF bietet die effizienteste Komprimierung für die Umwandlung großer TIFF-Dateien. Ideal für die Weboptimierung professioneller Fotografie und hochauflösender Scans mit minimaler Qualitätseinbuße.',
  'bmp-to-jpg':
    'BMP-Dateien sind unkomprimiert und dadurch extrem groß. Die Konvertierung zu JPEG reduziert die Dateigröße drastisch (oft um über 95%) und erzeugt universell kompatible Dateien für alle modernen Anwendungszwecke.',
  'bmp-to-png':
    'Die Konvertierung von BMP zu PNG reduziert die Dateigröße erheblich durch verlustfreie Komprimierung. Im Gegensatz zu JPEG bleibt die volle Bildqualität erhalten – ideal für Grafiken mit scharfen Kanten und Text.',
  'bmp-to-webp':
    'WebP reduziert die enormen BMP-Dateigrößen um bis zu 97% bei guter visueller Qualität. Die Konvertierung modernisiert Ihre Legacy-Bilder für den Einsatz auf Webseiten und in modernen Anwendungen.',
  'bmp-to-avif':
    'AVIF bietet die beste Komprimierung für die Modernisierung unkomprimierter BMP-Dateien. Die Dateigröße wird um bis zu 98% reduziert – ideal für die Migration alter Bildbestände in moderne Formate.',
  'bmp-to-gif':
    'Die Konvertierung reduziert die Farbpalette auf 256 Farben und komprimiert die Datei erheblich. Geeignet für einfache Grafiken aus älteren Systemen, aber für fotorealistische BMP-Bilder wird JPG oder WebP empfohlen.',
  'bmp-to-tiff':
    'Die Konvertierung von BMP zu TIFF bewahrt die volle Bildqualität und fügt professionelle Metadaten-Unterstützung hinzu. TIFF eignet sich besser als BMP für langfristige Archivierung und professionelle Druck-Workflows.',
  'avif-to-jpg':
    'Die Konvertierung von AVIF zu JPEG stellt maximale Kompatibilität sicher. JPG wird von jedem Gerät und jeder Software unterstützt – notwendig, wenn Empfänger oder Plattformen das neuere AVIF-Format noch nicht verarbeiten können.',
  'avif-to-png':
    'Die Konvertierung bewahrt die Bildqualität verlustfrei im universell unterstützten PNG-Format. PNG eignet sich besonders, wenn Sie die Transparenz erhalten oder das Bild in Grafikprogrammen weiterbearbeiten möchten.',
  'avif-to-webp':
    'WebP bietet breitere Browser-Unterstützung als AVIF bei guter Komprimierung. Die Konvertierung ist sinnvoll, wenn Ihre Zielplattform WebP, aber noch nicht AVIF unterstützt – ein häufiges Szenario bei älteren Browsern und CMS-Systemen.',
};

const PRIVACY =
  'Dieser Konverter arbeitet vollständig lokal in Ihrem Browser – Ihre Dateien verlassen niemals Ihr Gerät. Keine Uploads, keine Server, keine Registrierung. Vollständig DSGVO-konform und ohne Einschränkungen kostenlos.';

function extractFormats(filename) {
  const m = filename.match(/converter-(\w+)-to-(\w+)\.json/);
  return m ? { source: m[1], target: m[2], key: `${m[1]}-to-${m[2]}` } : null;
}

let updated = 0;
let skipped = 0;

const files = fs.readdirSync(DE_TOOLS).filter((f) => f.startsWith('converter-') && f.endsWith('.json'));

for (const file of files) {
  const fmt = extractFormats(file);
  if (!fmt) {
    skipped++;
    continue;
  }

  const srcDesc = SOURCE[fmt.source];
  const tgtDesc = TARGET[fmt.target];
  const pairDesc = PAIR[fmt.key];

  if (!srcDesc || !tgtDesc || !pairDesc) {
    console.log(`SKIP (missing content): ${file} [src=${!!srcDesc} tgt=${!!tgtDesc} pair=${!!pairDesc}]`);
    skipped++;
    continue;
  }

  const filePath = path.join(DE_TOOLS, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  const block = data.contentBlocks.find((b) => b.type === 'sectionBasic');
  if (!block) {
    skipped++;
    continue;
  }

  const newHtml = `<p class="text-mid mb-4">${srcDesc}</p>` + `<p class="text-mid mb-4">${tgtDesc}</p>` + `<p class="text-mid mb-4">${pairDesc}</p>` + `<p class="text-mid">${PRIVACY}</p>`;

  block.html = newHtml;

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  updated++;
}

console.log(`Updated: ${updated}, Skipped: ${skipped}`);
