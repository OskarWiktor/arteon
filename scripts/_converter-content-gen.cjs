const { FORMATS, TITLES, REGIONAL } = require('./_converter-data.cjs');

// ============================================================
// CONTENT GENERATORS PER LOCALE
// Each function returns HTML string for specific section content
// ============================================================

function getConversionReason(srcKey, tgtKey, locale) {
  const src = FORMATS[srcKey];
  const tgt = FORMATS[tgtKey];
  const S = src.name;
  const T = tgt.name;

  // Determine the primary reason for this conversion
  const reasons = [];

  // Lossy to lossless or vice versa
  if (src.lossy && !src.lossless && tgt.lossless && !tgt.lossy) reasons.push('quality');
  if (src.lossless && !src.lossy && tgt.lossy) reasons.push('compression');
  if (src.lossy && tgt.lossy && tgt.lossless) reasons.push('modern');

  // Transparency changes
  if (!src.transparency && tgt.transparency) reasons.push('transparency_gain');
  if (src.transparency && !tgt.transparency) reasons.push('transparency_loss');

  // Browser support
  if (src.browser !== 'universal' && tgt.browser === 'universal') reasons.push('compatibility');
  if (src.browser === 'universal' && tgt.browser !== 'universal') reasons.push('modern_format');

  // Vector to raster
  if (src.vector && !tgt.vector) reasons.push('rasterize');

  // Legacy format
  if (srcKey === 'bmp' || srcKey === 'tiff') reasons.push('legacy_source');
  if (srcKey === 'heic') reasons.push('apple_source');

  // Animation
  if (src.animation && !tgt.animation) reasons.push('static');
  if (!src.animation && tgt.animation) reasons.push('animation_target');

  return reasons.length > 0 ? reasons : ['general'];
}

// ============================================================
// INTRO SECTION (sectionBasic) - HTML content per locale
// ============================================================
function generateIntroHtml(srcKey, tgtKey, locale) {
  const src = FORMATS[srcKey];
  const tgt = FORMATS[tgtKey];
  const S = src.name;
  const T = tgt.name;
  const SF = src.full;
  const TF = tgt.full;
  const reasons = getConversionReason(srcKey, tgtKey, locale);
  const R = REGIONAL[locale];

  const generators = {
    en: () => {
      let html = `<p class="text-mid mb-4">${SF} (${S}) is ${src.lossy ? 'a lossy' : 'a lossless'} image format ${src.vector ? 'based on vector graphics' : `supporting ${src.maxColors} colors`}. It is widely used for ${src.typical}${src.browser === 'universal' ? ' and is supported by virtually every browser and device' : ` with browser support in ${src.browser}`}.</p>`;
      html += `<p class="text-mid mb-4">Converting ${S} to ${T} (${TF}) ${reasons.includes('compatibility') ? 'ensures universal compatibility across all platforms, browsers, and devices' : reasons.includes('modern') ? 'takes advantage of modern compression technology for smaller file sizes without quality loss' : reasons.includes('compression') ? 'significantly reduces file size, making images faster to load and easier to share' : reasons.includes('quality') ? 'preserves every pixel of image data with lossless compression' : reasons.includes('rasterize') ? 'converts scalable vector graphics into a fixed-resolution raster image suitable for any context' : reasons.includes('apple_source') ? 'solves the compatibility challenge with Apple&apos;s proprietary format' : 'gives you more flexibility in how and where you use your images'}.</p>`;
      html += `<p class="text-mid mb-4">${tgt.transparency ? `${T} supports alpha transparency, preserving any transparent areas in your image.` : `Note that ${T} does not support transparency \u2013 any transparent areas will be filled with a solid background color (typically white).`} ${tgt.lossy && tgt.lossless ? `${T} supports both lossy and lossless compression, giving you control over the quality-to-size ratio.` : tgt.lossy ? `As a lossy format, ${T} achieves excellent compression ratios, especially for photographs and complex images.` : `As a lossless format, ${T} preserves all image data without any quality degradation.`}</p>`;
      html += `<p class="text-mid">This converter processes everything locally in your browser \u2013 your files never leave your device. No uploads, no servers, no registration. Convert as many ${S} files as you need, completely free.</p>`;
      return html;
    },
    pl: () => {
      let html = `<p class="text-mid mb-4">${SF} (${S}) to ${src.lossy ? 'stratny' : 'bezstratny'} format ${src.vector ? 'grafiki wektorowej' : `obs\u0142uguj\u0105cy ${src.maxColors === 'millions' ? 'miliony' : src.maxColors} kolor\u00f3w`}. Jest powszechnie stosowany do ${src.typical === 'photos' ? 'zdj\u0119\u0107' : src.typical === 'graphics with transparency' ? 'grafik z przezroczysto\u015bci\u0105' : src.typical === 'web images' ? 'obraz\u00f3w internetowych' : src.typical === 'modern web images' ? 'nowoczesnych obraz\u00f3w webowych' : src.typical === 'simple animations' ? 'prostych animacji' : src.typical === 'uncompressed images' ? 'obraz\u00f3w bez kompresji' : src.typical === 'print and archival' ? 'druku i archiwizacji' : src.typical === 'logos and icons' ? 'logo i ikon' : src.typical === 'Apple device photos' ? 'zdj\u0119\u0107 z urz\u0105dze\u0144 Apple' : src.typical}.</p>`;
      html += `<p class="text-mid mb-4">Konwersja ${S} na ${T} (${TF}) ${reasons.includes('compatibility') ? 'zapewnia uniwersaln\u0105 kompatybilno\u015b\u0107 z ka\u017cd\u0105 przegl\u0105dark\u0105 i urz\u0105dzeniem' : reasons.includes('modern') ? 'pozwala wykorzysta\u0107 nowoczesn\u0105 kompresj\u0119, kt\u00f3ra zmniejsza rozmiar plik\u00f3w bez utraty jako\u015bci' : reasons.includes('compression') ? 'znacznie zmniejsza rozmiar pliku, przyspieszaj\u0105c \u0142adowanie stron i u\u0142atwiaj\u0105c udost\u0119pnianie' : reasons.includes('quality') ? 'zachowuje ka\u017cdy piksel obrazu dzi\u0119ki kompresji bezstratnej' : reasons.includes('rasterize') ? 'zamienia skalowaln\u0105 grafik\u0119 wektorow\u0105 w obraz rastrowy o ustalonej rozdzielczo\u015bci' : reasons.includes('apple_source') ? 'rozwi\u0105zuje problem kompatybilno\u015bci z w\u0142a\u015bciwo\u015bciowym formatem Apple' : 'daje wi\u0119cej elastyczno\u015bci w u\u017cyciu obraz\u00f3w'}.</p>`;
      html += `<p class="text-mid mb-4">${tgt.transparency ? `${T} obs\u0142uguje kana\u0142 alfa \u2013 przezroczyste obszary zostan\u0105 zachowane.` : `${T} nie obs\u0142uguje przezroczysto\u015bci \u2013 przezroczyste fragmenty zostan\u0105 wype\u0142nione jednolitym kolorem t\u0142a (zazwyczaj bia\u0142ym).`} ${tgt.lossy && tgt.lossless ? `${T} obs\u0142uguje zar\u00f3wno kompresj\u0119 stratn\u0105, jak i bezstratn\u0105, co daje pe\u0142n\u0105 kontrol\u0119 nad stosunkiem jako\u015bci do rozmiaru pliku.` : tgt.lossy ? `Jako format stratny, ${T} osi\u0105ga doskona\u0142e wsp\u00f3\u0142czynniki kompresji, szczeg\u00f3lnie w przypadku zdj\u0119\u0107.` : `Jako format bezstratny, ${T} zachowuje pe\u0142n\u0105 jako\u015b\u0107 obrazu bez jakiejkolwiek degradacji.`}</p>`;
      html += `<p class="text-mid">Konwerter dzia\u0142a lokalnie w Twojej przegl\u0105darce \u2013 pliki nie opuszczaj\u0105 Twojego urz\u0105dzenia. Bez przesy\u0142ania, bez serwer\u00f3w, bez rejestracji. Konwertuj tyle plik\u00f3w ${S}, ile potrzebujesz \u2013 ca\u0142kowicie za darmo.</p>`;
      return html;
    },
    de: () => {
      let html = `<p class="text-mid mb-4">${SF} (${S}) ist ein ${src.lossy ? 'verlustbehaftetes' : 'verlustfreies'} Bildformat${src.vector ? ', das auf Vektorgrafiken basiert' : ` mit Unterst\u00fctzung f\u00fcr ${src.maxColors === 'millions' ? 'Millionen' : src.maxColors} Farben`}. Es wird h\u00e4ufig f\u00fcr ${src.typical === 'photos' ? 'Fotos' : src.typical === 'graphics with transparency' ? 'Grafiken mit Transparenz' : src.typical === 'web images' ? 'Webbilder' : src.typical === 'modern web images' ? 'moderne Webbilder' : src.typical === 'simple animations' ? 'einfache Animationen' : src.typical === 'uncompressed images' ? 'unkomprimierte Bilder' : src.typical === 'print and archival' ? 'Druck und Archivierung' : src.typical === 'logos and icons' ? 'Logos und Icons' : 'Apple-Ger\u00e4tefotos'} verwendet.</p>`;
      html += `<p class="text-mid mb-4">Die Konvertierung von ${S} in ${T} (${TF}) ${reasons.includes('compatibility') ? 'stellt universelle Kompatibilit\u00e4t mit allen Browsern und Ger\u00e4ten sicher' : reasons.includes('modern') ? 'nutzt moderne Komprimierungstechnologie f\u00fcr kleinere Dateien ohne Qualit\u00e4tsverlust' : reasons.includes('compression') ? 'reduziert die Dateigr\u00f6\u00dfe erheblich und beschleunigt das Laden von Webseiten' : reasons.includes('apple_source') ? 'l\u00f6st das Kompatibilit\u00e4tsproblem mit Apples propriet\u00e4rem Format' : 'bietet mehr Flexibilit\u00e4t bei der Verwendung Ihrer Bilder'}.</p>`;
      html += `<p class="text-mid mb-4">${tgt.transparency ? `${T} unterst\u00fctzt Alpha-Transparenz \u2013 transparente Bereiche bleiben erhalten.` : `${T} unterst\u00fctzt keine Transparenz \u2013 transparente Bereiche werden mit einer Hintergrundfarbe gef\u00fcllt.`} ${tgt.lossy && tgt.lossless ? `${T} bietet sowohl verlustbehaftete als auch verlustfreie Komprimierung.` : tgt.lossy ? `Als verlustbehaftetes Format erreicht ${T} hervorragende Kompressionsraten.` : `Als verlustfreies Format bewahrt ${T} die vollst\u00e4ndige Bildqualit\u00e4t.`}</p>`;
      html += `<p class="text-mid">Dieser Konverter arbeitet lokal in Ihrem Browser \u2013 Ihre Dateien verlassen Ihr Ger\u00e4t nicht. Keine Uploads, keine Server, keine Registrierung. DSGVO-konform und vollst\u00e4ndig kostenlos.</p>`;
      return html;
    },
    fr: () => {
      let html = `<p class="text-mid mb-4">${SF} (${S}) est un format d\u2019image ${src.lossy ? 'avec perte' : 'sans perte'}${src.vector ? ' bas\u00e9 sur des graphiques vectoriels' : ` prenant en charge ${src.maxColors === 'millions' ? 'des millions' : src.maxColors} de couleurs`}. Il est largement utilis\u00e9 pour ${src.typical === 'photos' ? 'les photographies' : src.typical === 'graphics with transparency' ? 'les graphiques avec transparence' : src.typical === 'web images' ? 'les images web' : src.typical === 'modern web images' ? 'les images web modernes' : src.typical === 'simple animations' ? 'les animations simples' : src.typical === 'uncompressed images' ? 'les images non compress\u00e9es' : src.typical === 'print and archival' ? 'l\u2019impression et l\u2019archivage' : src.typical === 'logos and icons' ? 'les logos et ic\u00f4nes' : 'les photos Apple'}.</p>`;
      html += `<p class="text-mid mb-4">La conversion de ${S} en ${T} (${TF}) ${reasons.includes('compatibility') ? 'garantit une compatibilit\u00e9 universelle avec tous les navigateurs et appareils' : reasons.includes('modern') ? 'tire parti de la compression moderne pour des fichiers plus l\u00e9gers sans perte de qualit\u00e9' : reasons.includes('compression') ? 'r\u00e9duit consid\u00e9rablement la taille des fichiers' : reasons.includes('apple_source') ? 'r\u00e9sout le probl\u00e8me de compatibilit\u00e9 avec le format propri\u00e9taire d\u2019Apple' : 'offre plus de flexibilit\u00e9'}.</p>`;
      html += `<p class="text-mid mb-4">${tgt.transparency ? `${T} prend en charge la transparence alpha.` : `${T} ne prend pas en charge la transparence \u2013 les zones transparentes seront remplies d\u2019une couleur de fond.`} ${tgt.lossy && tgt.lossless ? `${T} offre une compression avec et sans perte.` : tgt.lossy ? `En tant que format avec perte, ${T} atteint d\u2019excellents taux de compression.` : `En tant que format sans perte, ${T} pr\u00e9serve l\u2019int\u00e9gralit\u00e9 des donn\u00e9es de l\u2019image.`}</p>`;
      html += `<p class="text-mid">Ce convertisseur fonctionne localement dans votre navigateur \u2013 vos fichiers ne quittent jamais votre appareil. Aucun t\u00e9l\u00e9chargement, aucun serveur, aucune inscription. Conforme au RGPD et enti\u00e8rement gratuit.</p>`;
      return html;
    },
    es: () => {
      let html = `<p class="text-mid mb-4">${SF} (${S}) es un formato de imagen ${src.lossy ? 'con p\u00e9rdida' : 'sin p\u00e9rdida'}${src.vector ? ' basado en gr\u00e1ficos vectoriales' : ` que soporta ${src.maxColors === 'millions' ? 'millones' : src.maxColors} de colores`}. Se utiliza ampliamente para ${src.typical === 'photos' ? 'fotograf\u00edas' : src.typical === 'graphics with transparency' ? 'gr\u00e1ficos con transparencia' : src.typical === 'web images' ? 'im\u00e1genes web' : src.typical === 'modern web images' ? 'im\u00e1genes web modernas' : src.typical === 'simple animations' ? 'animaciones simples' : src.typical === 'uncompressed images' ? 'im\u00e1genes sin compresi\u00f3n' : src.typical === 'print and archival' ? 'impresi\u00f3n y archivo' : src.typical === 'logos and icons' ? 'logotipos e iconos' : 'fotos de dispositivos Apple'}.</p>`;
      html += `<p class="text-mid mb-4">Convertir ${S} a ${T} (${TF}) ${reasons.includes('compatibility') ? 'garantiza compatibilidad universal con todos los navegadores y dispositivos' : reasons.includes('modern') ? 'aprovecha la tecnolog\u00eda de compresi\u00f3n moderna para archivos m\u00e1s peque\u00f1os sin p\u00e9rdida de calidad' : reasons.includes('compression') ? 'reduce significativamente el tama\u00f1o del archivo' : reasons.includes('apple_source') ? 'resuelve el problema de compatibilidad con el formato propietario de Apple' : 'ofrece m\u00e1s flexibilidad'}.</p>`;
      html += `<p class="text-mid mb-4">${tgt.transparency ? `${T} soporta transparencia alfa.` : `${T} no soporta transparencia \u2013 las \u00e1reas transparentes se rellenar\u00e1n con un color de fondo.`} ${tgt.lossy && tgt.lossless ? `${T} ofrece compresi\u00f3n con y sin p\u00e9rdida.` : tgt.lossy ? `Como formato con p\u00e9rdida, ${T} logra excelentes ratios de compresi\u00f3n.` : `Como formato sin p\u00e9rdida, ${T} preserva todos los datos de la imagen.`}</p>`;
      html += `<p class="text-mid">Este convertidor funciona localmente en tu navegador \u2013 tus archivos nunca salen de tu dispositivo. Sin subidas, sin servidores, sin registro. Completamente gratuito.</p>`;
      return html;
    },
    it: () => {
      let html = `<p class="text-mid mb-4">${SF} (${S}) \u00e8 un formato immagine ${src.lossy ? 'con perdita' : 'senza perdita'}${src.vector ? ' basato sulla grafica vettoriale' : ` che supporta ${src.maxColors === 'millions' ? 'milioni' : src.maxColors} di colori`}. \u00c8 ampiamente utilizzato per ${src.typical === 'photos' ? 'le fotografie' : src.typical === 'graphics with transparency' ? 'la grafica con trasparenza' : src.typical === 'web images' ? 'le immagini web' : src.typical === 'modern web images' ? 'le immagini web moderne' : src.typical === 'simple animations' ? 'le animazioni semplici' : src.typical === 'uncompressed images' ? 'le immagini non compresse' : src.typical === 'print and archival' ? 'la stampa e l\u2019archiviazione' : src.typical === 'logos and icons' ? 'loghi e icone' : 'le foto Apple'}.</p>`;
      html += `<p class="text-mid mb-4">La conversione da ${S} a ${T} (${TF}) ${reasons.includes('compatibility') ? 'garantisce la compatibilit\u00e0 universale con tutti i browser e dispositivi' : reasons.includes('modern') ? 'sfrutta la compressione moderna per file pi\u00f9 leggeri senza perdita di qualit\u00e0' : reasons.includes('compression') ? 'riduce significativamente le dimensioni del file' : reasons.includes('apple_source') ? 'risolve il problema di compatibilit\u00e0 con il formato proprietario Apple' : 'offre maggiore flessibilit\u00e0'}.</p>`;
      html += `<p class="text-mid mb-4">${tgt.transparency ? `${T} supporta la trasparenza alfa.` : `${T} non supporta la trasparenza \u2013 le aree trasparenti saranno riempite con un colore di sfondo.`} ${tgt.lossy && tgt.lossless ? `${T} offre compressione con e senza perdita.` : tgt.lossy ? `Come formato con perdita, ${T} raggiunge eccellenti rapporti di compressione.` : `Come formato senza perdita, ${T} preserva tutti i dati dell\u2019immagine.`}</p>`;
      html += `<p class="text-mid">Questo convertitore funziona localmente nel tuo browser \u2013 i tuoi file non lasciano mai il tuo dispositivo. Nessun caricamento, nessun server, nessuna registrazione. Conforme al GDPR e completamente gratuito.</p>`;
      return html;
    },
    pt: () => {
      let html = `<p class="text-mid mb-4">${SF} (${S}) \u00e9 um formato de imagem ${src.lossy ? 'com perda' : 'sem perda'}${src.vector ? ' baseado em gr\u00e1ficos vetoriais' : ` que suporta ${src.maxColors === 'millions' ? 'milh\u00f5es' : src.maxColors} de cores`}. \u00c9 amplamente utilizado para ${src.typical === 'photos' ? 'fotografias' : src.typical === 'graphics with transparency' ? 'gr\u00e1ficos com transpar\u00eancia' : src.typical === 'web images' ? 'imagens web' : src.typical === 'modern web images' ? 'imagens web modernas' : src.typical === 'simple animations' ? 'anima\u00e7\u00f5es simples' : src.typical === 'uncompressed images' ? 'imagens sem compress\u00e3o' : src.typical === 'print and archival' ? 'impress\u00e3o e arquivo' : src.typical === 'logos and icons' ? 'logotipos e \u00edcones' : 'fotos de dispositivos Apple'}.</p>`;
      html += `<p class="text-mid mb-4">Converter ${S} para ${T} (${TF}) ${reasons.includes('compatibility') ? 'garante compatibilidade universal com todos os navegadores e dispositivos' : reasons.includes('modern') ? 'aproveita a compress\u00e3o moderna para ficheiros mais leves sem perda de qualidade' : reasons.includes('compression') ? 'reduz significativamente o tamanho do ficheiro' : reasons.includes('apple_source') ? 'resolve o problema de compatibilidade com o formato propriet\u00e1rio da Apple' : 'oferece mais flexibilidade'}.</p>`;
      html += `<p class="text-mid mb-4">${tgt.transparency ? `${T} suporta transpar\u00eancia alfa.` : `${T} n\u00e3o suporta transpar\u00eancia \u2013 as \u00e1reas transparentes ser\u00e3o preenchidas com uma cor de fundo.`} ${tgt.lossy && tgt.lossless ? `${T} oferece compress\u00e3o com e sem perda.` : tgt.lossy ? `Como formato com perda, ${T} atinge excelentes r\u00e1cios de compress\u00e3o.` : `Como formato sem perda, ${T} preserva todos os dados da imagem.`}</p>`;
      html += `<p class="text-mid">Este conversor funciona localmente no seu navegador \u2013 os seus ficheiros nunca saem do seu dispositivo. Sem uploads, sem servidores, sem registo. Completamente gratuito.</p>`;
      return html;
    },
    cs: () => {
      let html = `<p class="text-mid mb-4">${SF} (${S}) je ${src.lossy ? 'ztr\u00e1tov\u00fd' : 'bezeztr\u00e1tov\u00fd'} obrazov\u00fd form\u00e1t${src.vector ? ' zalo\u017een\u00fd na vektorov\u00e9 grafice' : ` podporuj\u00edc\u00ed ${src.maxColors === 'millions' ? 'miliony' : src.maxColors} barev`}. Je \u0161iroce pou\u017e\u00edv\u00e1n pro ${src.typical === 'photos' ? 'fotografie' : src.typical === 'graphics with transparency' ? 'grafiku s pr\u016fhlednost\u00ed' : src.typical === 'web images' ? 'webov\u00e9 obr\u00e1zky' : src.typical === 'modern web images' ? 'modern\u00ed webov\u00e9 obr\u00e1zky' : src.typical === 'simple animations' ? 'jednoduch\u00e9 animace' : src.typical === 'uncompressed images' ? 'nekomprimovan\u00e9 obr\u00e1zky' : src.typical === 'print and archival' ? 'tisk a archivaci' : src.typical === 'logos and icons' ? 'loga a ikony' : 'fotografie z Apple za\u0159\u00edzen\u00ed'}.</p>`;
      html += `<p class="text-mid mb-4">P\u0159evod ${S} na ${T} (${TF}) ${reasons.includes('compatibility') ? 'zaji\u0161\u0165uje univerz\u00e1ln\u00ed kompatibilitu se v\u0161emi prohl\u00ed\u017ee\u010di a za\u0159\u00edzen\u00edmi' : reasons.includes('modern') ? 'vyu\u017e\u00edv\u00e1 modern\u00ed kompresi pro men\u0161\u00ed soubory bez ztr\u00e1ty kvality' : reasons.includes('compression') ? 'v\u00fdrazn\u011b zmen\u0161uje velikost souboru' : reasons.includes('apple_source') ? '\u0159e\u0161\u00ed probl\u00e9m kompatibility s propriet\u00e1rn\u00edm form\u00e1tem Apple' : 'nab\u00edz\u00ed v\u00edce flexibility'}.</p>`;
      html += `<p class="text-mid mb-4">${tgt.transparency ? `${T} podporuje alfa pr\u016fhlednost.` : `${T} nepodporuje pr\u016fhlednost \u2013 pr\u016fhledn\u00e9 oblasti budou vypln\u011bny barvou pozad\u00ed.`} ${tgt.lossy && tgt.lossless ? `${T} nab\u00edz\u00ed ztr\u00e1tovou i bezeztr\u00e1tovou kompresi.` : tgt.lossy ? `Jako ztr\u00e1tov\u00fd form\u00e1t dosahuje ${T} vynikaj\u00edc\u00edch kompresn\u00edch pom\u011br\u016f.` : `Jako bezeztr\u00e1tov\u00fd form\u00e1t zachov\u00e1v\u00e1 ${T} ve\u0161ker\u00e1 obrazov\u00e1 data.`}</p>`;
      html += `<p class="text-mid">Tento p\u0159evodn\u00edk pracuje lok\u00e1ln\u011b ve va\u0161em prohl\u00ed\u017ee\u010di \u2013 soubory neopou\u0161t\u011bj\u00ed va\u0161e za\u0159\u00edzen\u00ed. \u017d\u00e1dn\u00e9 nahr\u00e1v\u00e1n\u00ed, \u017e\u00e1dn\u00e9 servery, \u017e\u00e1dn\u00e1 registrace. Zcela zdarma.</p>`;
      return html;
    },
    da: () => {
      let html = `<p class="text-mid mb-4">${SF} (${S}) er et ${src.lossy ? 'tabsgivende' : 'tabsfrit'} billedformat${src.vector ? ' baseret p\u00e5 vektorgrafik' : ` der underst\u00f8tter ${src.maxColors === 'millions' ? 'millioner' : src.maxColors} farver`}. Det bruges bredt til ${src.typical === 'photos' ? 'fotografier' : src.typical === 'graphics with transparency' ? 'grafik med gennemsigtighed' : src.typical === 'web images' ? 'webbilleder' : src.typical === 'modern web images' ? 'moderne webbilleder' : src.typical === 'simple animations' ? 'simple animationer' : src.typical === 'uncompressed images' ? 'ukomprimerede billeder' : src.typical === 'print and archival' ? 'print og arkivering' : src.typical === 'logos and icons' ? 'logoer og ikoner' : 'Apple-enhedsfotos'}.</p>`;
      html += `<p class="text-mid mb-4">Konvertering af ${S} til ${T} (${TF}) ${reasons.includes('compatibility') ? 'sikrer universel kompatibilitet med alle browsere og enheder' : reasons.includes('modern') ? 'udnytter moderne komprimering til mindre filer uden kvalitetstab' : reasons.includes('compression') ? 'reducerer filst\u00f8rrelsen markant' : reasons.includes('apple_source') ? 'l\u00f8ser kompatibilitetsproblemet med Apples propriet\u00e6re format' : 'giver mere fleksibilitet'}.</p>`;
      html += `<p class="text-mid mb-4">${tgt.transparency ? `${T} underst\u00f8tter alfa-gennemsigtighed.` : `${T} underst\u00f8tter ikke gennemsigtighed \u2013 gennemsigtige omr\u00e5der fyldes med en baggrundsfarve.`} ${tgt.lossy && tgt.lossless ? `${T} tilbyder b\u00e5de tabsgivende og tabsfri komprimering.` : tgt.lossy ? `Som tabsgivende format opn\u00e5r ${T} fremragende kompressionsforhold.` : `Som tabsfrit format bevarer ${T} alle billeddata.`}</p>`;
      html += `<p class="text-mid">Denne konverter arbejder lokalt i din browser \u2013 dine filer forlader aldrig din enhed. Ingen uploads, ingen servere, ingen registrering. Helt gratis.</p>`;
      return html;
    },
    el: () => {
      let html = `<p class="text-mid mb-4">\u03a4\u03bf ${SF} (${S}) \u03b5\u03af\u03bd\u03b1\u03b9 \u03ad\u03bd\u03b1 ${src.lossy ? '\u03bc\u03bf\u03c1\u03c6\u03cc\u03c4\u03c5\u03c0\u03bf \u03b5\u03b9\u03ba\u03cc\u03bd\u03b1\u03c2 \u03bc\u03b5 \u03b1\u03c0\u03ce\u03bb\u03b5\u03b9\u03b5\u03c2' : '\u03bc\u03bf\u03c1\u03c6\u03cc\u03c4\u03c5\u03c0\u03bf \u03b5\u03b9\u03ba\u03cc\u03bd\u03b1\u03c2 \u03c7\u03c9\u03c1\u03af\u03c2 \u03b1\u03c0\u03ce\u03bb\u03b5\u03b9\u03b5\u03c2'}. \u03a7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b5\u03af\u03c4\u03b1\u03b9 \u03b5\u03c5\u03c1\u03ad\u03c9\u03c2 \u03b3\u03b9\u03b1 ${src.typical === 'photos' ? '\u03c6\u03c9\u03c4\u03bf\u03b3\u03c1\u03b1\u03c6\u03af\u03b5\u03c2' : src.typical === 'graphics with transparency' ? '\u03b3\u03c1\u03b1\u03c6\u03b9\u03ba\u03ac \u03bc\u03b5 \u03b4\u03b9\u03b1\u03c6\u03ac\u03bd\u03b5\u03b9\u03b1' : src.typical === 'web images' ? '\u03b5\u03b9\u03ba\u03cc\u03bd\u03b5\u03c2 web' : src.typical === 'logos and icons' ? '\u03bb\u03bf\u03b3\u03cc\u03c4\u03c5\u03c0\u03b1 \u03ba\u03b1\u03b9 \u03b5\u03b9\u03ba\u03bf\u03bd\u03af\u03b4\u03b9\u03b1' : '\u03b5\u03b9\u03ba\u03cc\u03bd\u03b5\u03c2'}.</p>`;
      html += `<p class="text-mid mb-4">\u0397 \u03bc\u03b5\u03c4\u03b1\u03c4\u03c1\u03bf\u03c0\u03ae ${S} \u03c3\u03b5 ${T} (${TF}) ${reasons.includes('compatibility') ? '\u03b5\u03be\u03b1\u03c3\u03c6\u03b1\u03bb\u03af\u03b6\u03b5\u03b9 \u03ba\u03b1\u03b8\u03bf\u03bb\u03b9\u03ba\u03ae \u03c3\u03c5\u03bc\u03b2\u03b1\u03c4\u03cc\u03c4\u03b7\u03c4\u03b1 \u03bc\u03b5 \u03cc\u03bb\u03bf\u03c5\u03c2 \u03c4\u03bf\u03c5\u03c2 \u03c6\u03c5\u03bb\u03bb\u03bf\u03bc\u03b5\u03c4\u03c1\u03b7\u03c4\u03ad\u03c2 \u03ba\u03b1\u03b9 \u03c3\u03c5\u03c3\u03ba\u03b5\u03c5\u03ad\u03c2' : reasons.includes('modern') ? '\u03b1\u03be\u03b9\u03bf\u03c0\u03bf\u03b9\u03b5\u03af \u03c4\u03b7 \u03c3\u03cd\u03b3\u03c7\u03c1\u03bf\u03bd\u03b7 \u03c3\u03c5\u03bc\u03c0\u03af\u03b5\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03bc\u03b9\u03ba\u03c1\u03cc\u03c4\u03b5\u03c1\u03b1 \u03b1\u03c1\u03c7\u03b5\u03af\u03b1' : '\u03c0\u03c1\u03bf\u03c3\u03c6\u03ad\u03c1\u03b5\u03b9 \u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b7 \u03b5\u03c5\u03b5\u03bb\u03b9\u03be\u03af\u03b1'}.</p>`;
      html += `<p class="text-mid mb-4">${tgt.transparency ? `\u03a4\u03bf ${T} \u03c5\u03c0\u03bf\u03c3\u03c4\u03b7\u03c1\u03af\u03b6\u03b5\u03b9 \u03b4\u03b9\u03b1\u03c6\u03ac\u03bd\u03b5\u03b9\u03b1 alpha.` : `\u03a4\u03bf ${T} \u03b4\u03b5\u03bd \u03c5\u03c0\u03bf\u03c3\u03c4\u03b7\u03c1\u03af\u03b6\u03b5\u03b9 \u03b4\u03b9\u03b1\u03c6\u03ac\u03bd\u03b5\u03b9\u03b1 \u2013 \u03bf\u03b9 \u03b4\u03b9\u03b1\u03c6\u03b1\u03bd\u03b5\u03af\u03c2 \u03c0\u03b5\u03c1\u03b9\u03bf\u03c7\u03ad\u03c2 \u03b8\u03b1 \u03b3\u03b5\u03bc\u03af\u03c3\u03bf\u03c5\u03bd \u03bc\u03b5 \u03c7\u03c1\u03ce\u03bc\u03b1 \u03c6\u03cc\u03bd\u03c4\u03bf\u03c5.`}</p>`;
      html += `<p class="text-mid">\u0391\u03c5\u03c4\u03cc\u03c2 \u03bf \u03bc\u03b5\u03c4\u03b1\u03c4\u03c1\u03bf\u03c0\u03ad\u03b1\u03c2 \u03bb\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03b5\u03af \u03c4\u03bf\u03c0\u03b9\u03ba\u03ac \u03c3\u03c4\u03bf\u03bd \u03c6\u03c5\u03bb\u03bb\u03bf\u03bc\u03b5\u03c4\u03c1\u03b7\u03c4\u03ae \u03c3\u03b1\u03c2 \u2013 \u03c4\u03b1 \u03b1\u03c1\u03c7\u03b5\u03af\u03b1 \u03c3\u03b1\u03c2 \u03b4\u03b5\u03bd \u03c6\u03b5\u03cd\u03b3\u03bf\u03c5\u03bd \u03c0\u03bf\u03c4\u03ad \u03b1\u03c0\u03cc \u03c4\u03b7 \u03c3\u03c5\u03c3\u03ba\u03b5\u03c5\u03ae \u03c3\u03b1\u03c2. \u0394\u03c9\u03c1\u03b5\u03ac\u03bd \u03ba\u03b1\u03b9 \u03c7\u03c9\u03c1\u03af\u03c2 \u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03ae.</p>`;
      return html;
    },
    fi: () => {
      let html = `<p class="text-mid mb-4">${SF} (${S}) on ${src.lossy ? 'h\u00e4vi\u00f6llinen' : 'h\u00e4vi\u00f6t\u00f6n'} kuvaformaatti${src.vector ? ', joka perustuu vektorigrafiikkaan' : `. Sit\u00e4 k\u00e4ytet\u00e4\u00e4n laajalti ${src.typical === 'photos' ? 'valokuviin' : src.typical === 'web images' ? 'verkkokuviin' : src.typical === 'logos and icons' ? 'logoihin ja kuvakkeisiin' : 'kuviin'}`}.</p>`;
      html += `<p class="text-mid mb-4">${S}:n muuntaminen ${T}-muotoon (${TF}) ${reasons.includes('compatibility') ? 'varmistaa yleismaailmallisen yhteensopivuuden kaikkien selainten ja laitteiden kanssa' : reasons.includes('modern') ? 'hy\u00f6dynt\u00e4\u00e4 modernia pakkausta pienempiin tiedostoihin ilman laadun menetyst\u00e4' : 'tarjoaa lis\u00e4\u00e4 joustavuutta'}.</p>`;
      html += `<p class="text-mid mb-4">${tgt.transparency ? `${T} tukee alfa-l\u00e4pin\u00e4kyvyytt\u00e4.` : `${T} ei tue l\u00e4pin\u00e4kyvyytt\u00e4 \u2013 l\u00e4pin\u00e4kyv\u00e4t alueet t\u00e4ytet\u00e4\u00e4n taustav\u00e4rill\u00e4.`}</p>`;
      html += `<p class="text-mid">T\u00e4m\u00e4 muunnin toimii paikallisesti selaimessasi \u2013 tiedostosi eiv\u00e4t koskaan poistu laitteeltasi. Ei latauksia, ei palvelimia, ei rekister\u00f6inti\u00e4. T\u00e4ysin ilmainen.</p>`;
      return html;
    },
    hu: () => {
      let html = `<p class="text-mid mb-4">A ${SF} (${S}) egy ${src.lossy ? 'vesztes\u00e9ges' : 'vesztes\u00e9gmentes'} k\u00e9pform\u00e1tum${src.vector ? ', amely vektorgrafik\u00e1n alapul' : ''}. Sz\u00e9les k\u00f6rben haszn\u00e1lj\u00e1k ${src.typical === 'photos' ? 'f\u00e9nyk\u00e9pekhez' : src.typical === 'web images' ? 'webes k\u00e9pekhez' : src.typical === 'logos and icons' ? 'log\u00f3khoz \u00e9s ikonokhoz' : 'k\u00e9pekhez'}.</p>`;
      html += `<p class="text-mid mb-4">A ${S} konvert\u00e1l\u00e1sa ${T}-re (${TF}) ${reasons.includes('compatibility') ? 'univerz\u00e1lis kompatibilit\u00e1st biztos\u00edt minden b\u00f6ng\u00e9sz\u0151vel \u00e9s eszk\u00f6zzel' : reasons.includes('modern') ? 'modern t\u00f6m\u00f6r\u00edt\u00e9st haszn\u00e1l kisebb f\u00e1jlm\u00e9rethez min\u0151s\u00e9gvesztes\u00e9g n\u00e9lk\u00fcl' : 'nagyobb rugalmass\u00e1got biztos\u00edt'}.</p>`;
      html += `<p class="text-mid mb-4">${tgt.transparency ? `A ${T} t\u00e1mogatja az alfa \u00e1tl\u00e1tsz\u00f3s\u00e1got.` : `A ${T} nem t\u00e1mogatja az \u00e1tl\u00e1tsz\u00f3s\u00e1got \u2013 az \u00e1tl\u00e1tsz\u00f3 ter\u00fcletek h\u00e1tt\u00e9rsz\u00ednnel lesznek kit\u00f6ltve.`}</p>`;
      html += `<p class="text-mid">Ez a konverter helyben, a b\u00f6ng\u00e9sz\u0151j\u00e9ben m\u0171k\u00f6dik \u2013 a f\u00e1jljai soha nem hagyj\u00e1k el az eszk\u00f6z\u00e9t. Felt\u00f6lt\u00e9s, szerver \u00e9s regisztr\u00e1ci\u00f3 n\u00e9lk\u00fcl. Teljesen ingyenes.</p>`;
      return html;
    },
    nl: () => {
      let html = `<p class="text-mid mb-4">${SF} (${S}) is een ${src.lossy ? 'lossy' : 'lossless'} afbeeldingsformaat${src.vector ? ' gebaseerd op vectorafbeeldingen' : ''}. Het wordt veel gebruikt voor ${src.typical === 'photos' ? "foto's" : src.typical === 'graphics with transparency' ? 'afbeeldingen met transparantie' : src.typical === 'web images' ? 'webafbeeldingen' : src.typical === 'logos and icons' ? "logo's en pictogrammen" : 'afbeeldingen'}.</p>`;
      html += `<p class="text-mid mb-4">Het converteren van ${S} naar ${T} (${TF}) ${reasons.includes('compatibility') ? 'zorgt voor universele compatibiliteit met alle browsers en apparaten' : reasons.includes('modern') ? 'maakt gebruik van moderne compressie voor kleinere bestanden zonder kwaliteitsverlies' : 'biedt meer flexibiliteit'}.</p>`;
      html += `<p class="text-mid mb-4">${tgt.transparency ? `${T} ondersteunt alfa-transparantie.` : `${T} ondersteunt geen transparantie \u2013 transparante gebieden worden gevuld met een achtergrondkleur.`}</p>`;
      html += `<p class="text-mid">Deze converter werkt lokaal in uw browser \u2013 uw bestanden verlaten nooit uw apparaat. Geen uploads, geen servers, geen registratie. Volledig gratis.</p>`;
      return html;
    },
    no: () => {
      let html = `<p class="text-mid mb-4">${SF} (${S}) er et ${src.lossy ? 'tapsbringende' : 'tapsfritt'} bildeformat${src.vector ? ' basert p\u00e5 vektorgrafikk' : ''}. Det brukes mye til ${src.typical === 'photos' ? 'fotografier' : src.typical === 'web images' ? 'nettbilder' : src.typical === 'logos and icons' ? 'logoer og ikoner' : 'bilder'}.</p>`;
      html += `<p class="text-mid mb-4">Konvertering av ${S} til ${T} (${TF}) ${reasons.includes('compatibility') ? 'sikrer universell kompatibilitet med alle nettlesere og enheter' : reasons.includes('modern') ? 'utnytter moderne komprimering for mindre filer uten kvalitetstap' : 'gir mer fleksibilitet'}.</p>`;
      html += `<p class="text-mid mb-4">${tgt.transparency ? `${T} st\u00f8tter alfa-gjennomsiktighet.` : `${T} st\u00f8tter ikke gjennomsiktighet \u2013 gjennomsiktige omr\u00e5der fylles med en bakgrunnsfarge.`}</p>`;
      html += `<p class="text-mid">Denne konverteren jobber lokalt i nettleseren din \u2013 filene dine forlater aldri enheten din. Ingen opplastinger, ingen servere, ingen registrering. Helt gratis.</p>`;
      return html;
    },
    ro: () => {
      let html = `<p class="text-mid mb-4">${SF} (${S}) este un format de imagine ${src.lossy ? 'cu pierderi' : 'f\u0103r\u0103 pierderi'}${src.vector ? ' bazat pe grafic\u0103 vectorial\u0103' : ''}. Este utilizat pe scar\u0103 larg\u0103 pentru ${src.typical === 'photos' ? 'fotografii' : src.typical === 'web images' ? 'imagini web' : src.typical === 'logos and icons' ? 'logo-uri \u0219i pictograme' : 'imagini'}.</p>`;
      html += `<p class="text-mid mb-4">Conversia ${S} \u00een ${T} (${TF}) ${reasons.includes('compatibility') ? 'asigur\u0103 compatibilitate universal\u0103 cu toate browserele \u0219i dispozitivele' : reasons.includes('modern') ? 'folose\u0219te compresia modern\u0103 pentru fi\u0219iere mai mici f\u0103r\u0103 pierderea calit\u0103\u021bii' : 'ofer\u0103 mai mult\u0103 flexibilitate'}.</p>`;
      html += `<p class="text-mid mb-4">${tgt.transparency ? `${T} suport\u0103 transparen\u021ba alpha.` : `${T} nu suport\u0103 transparen\u021ba \u2013 zonele transparente vor fi umplute cu o culoare de fundal.`}</p>`;
      html += `<p class="text-mid">Acest convertor func\u021bioneaz\u0103 local \u00een browserul dumneavoastr\u0103 \u2013 fi\u0219ierele nu p\u0103r\u0103sesc niciodat\u0103 dispozitivul. F\u0103r\u0103 \u00eenc\u0103rc\u0103ri, f\u0103r\u0103 servere, f\u0103r\u0103 \u00eenregistrare. Complet gratuit.</p>`;
      return html;
    },
    sv: () => {
      let html = `<p class="text-mid mb-4">${SF} (${S}) \u00e4r ett ${src.lossy ? 'f\u00f6rlustbringande' : 'f\u00f6rlustfritt'} bildformat${src.vector ? ' baserat p\u00e5 vektorgrafik' : ''}. Det anv\u00e4nds i stor utstr\u00e4ckning f\u00f6r ${src.typical === 'photos' ? 'fotografier' : src.typical === 'web images' ? 'webbbilder' : src.typical === 'logos and icons' ? 'logotyper och ikoner' : 'bilder'}.</p>`;
      html += `<p class="text-mid mb-4">Konvertering av ${S} till ${T} (${TF}) ${reasons.includes('compatibility') ? 's\u00e4kerst\u00e4ller universell kompatibilitet med alla webbl\u00e4sare och enheter' : reasons.includes('modern') ? 'utnyttjar modern komprimering f\u00f6r mindre filer utan kvalitetsf\u00f6rlust' : 'ger mer flexibilitet'}.</p>`;
      html += `<p class="text-mid mb-4">${tgt.transparency ? `${T} st\u00f6djer alfa-transparens.` : `${T} st\u00f6djer inte transparens \u2013 transparenta omr\u00e5den fylls med en bakgrundsf\u00e4rg.`}</p>`;
      html += `<p class="text-mid">Denna konverterare arbetar lokalt i din webbl\u00e4sare \u2013 dina filer l\u00e4mnar aldrig din enhet. Inga uppladdningar, inga servrar, ingen registrering. Helt gratis.</p>`;
      return html;
    },
  };

  const gen = generators[locale];
  return gen ? gen() : generators.en();
}

module.exports = { generateIntroHtml, getConversionReason };
