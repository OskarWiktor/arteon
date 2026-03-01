/**
 * Expand "Why convert X to Y?" sectionBasic in RO converter files.
 */
const fs = require('fs');
const path = require('path');
const TOOLS = path.join(__dirname, '..', 'data', 'ro', 'tools');

const SOURCE = {
  png: 'Portable Network Graphics (PNG) este un format de imagine fără pierderi care acceptă milioane de culori și transparență alfa completă. PNG este deosebit de potrivit pentru logouri, pictograme, capturi de ecran și grafică cu margini clare sau text.',
  jpg: 'JPEG (JPG) este cel mai utilizat format de imagine din lume pentru fotografii digitale. Folosește compresie cu pierderi pentru fișiere compacte, dar nu acceptă transparența sau stocarea fără pierderi.',
  heic: 'High Efficiency Image Container (HEIC) este formatul implicit pentru fotografii pe dispozitivele Apple începând cu iOS 11. HEIC oferă fișiere mai mici decât JPEG la calitate comparabilă, dar nu este acceptat nativ în afara ecosistemului Apple – nici pe Windows, Android sau multe platforme web.',
  webp: 'WebP este un format modern de imagine dezvoltat de Google care acceptă atât compresie cu pierderi, cât și fără pierderi. Produce fișiere semnificativ mai mici decât PNG și JPEG la calitate vizuală comparabilă și este acceptat de toate browserele actuale.',
  svg: 'Scalable Vector Graphics (SVG) este un format vectorial bazat pe XML pentru grafică bidimensională. Fișierele SVG sunt independente de rezoluție și rămân clare la orice dimensiune – ideale pentru logouri, pictograme și ilustrații.',
  gif: 'Graphics Interchange Format (GIF) acceptă animații și o paletă de maximum 256 de culori. GIF este utilizat pe scară largă pentru conținut animat în rețelele sociale, dar limitarea de culori îl face nepotrivit pentru imagini fotorealiste.',
  bmp: 'Bitmap (BMP) este un format de imagine Windows mai vechi care stochează datele pixelilor fără compresie. Fișierele BMP sunt extrem de mari și nepotrivite pentru utilizarea modernă pe web sau pe dispozitive mobile.',
  tiff: 'Tagged Image File Format (TIFF) este standardul industrial pentru fotografia profesională, tipărire și arhivare. TIFF stochează imaginile fără pierderi cu adâncime completă de culoare, straturi și metadate.',
  avif: 'AV1 Image File Format (AVIF) este un format de imagine de nouă generație bazat pe codecul video AV1. AVIF oferă cea mai bună compresie disponibilă – fișiere cu până la 50% mai mici decât WebP la calitate vizuală comparabilă.',
};

const TARGET = {
  webp: 'WebP reduce dimensiunea fișierului cu 30–35% față de formatele mai vechi, fără pierderi vizibile de calitate. Toate browserele moderne (Chrome, Firefox, Safari 14+, Edge) acceptă pe deplin WebP. Pentru site-uri web, aceasta înseamnă timpi de încărcare mai rapizi și o poziționare mai bună în Google.',
  avif: 'AVIF oferă cea mai eficientă compresie dintre toate formatele de imagine actuale, reducând dimensiunea cu până la 50% față de JPEG. Chrome, Firefox și Safari 16+ acceptă AVIF. Este alegerea optimă pentru proiecte web critice în ceea ce privește performanța.',
  jpg: 'JPEG este cel mai universal format de imagine – compatibil cu orice dispozitiv, browser și platformă. Conversia în JPG asigură că imaginile dumneavoastră pot fi vizualizate oriunde fără probleme: de la atașamente email la postări pe rețele sociale.',
  png: 'PNG păstrează calitatea completă a imaginii fără artefacte de compresie și acceptă transparență alfa completă. Acest format fără pierderi este ideal pentru grafică destinată editării ulterioare și imagini unde zonele transparente trebuie păstrate.',
  gif: 'GIF este formatul standard pentru animații scurte, meme-uri și grafică simplă cu paletă de culori limitată. Cu suport universal în browsere, GIF este deosebit de potrivit pentru conținut animat în rețelele sociale și aplicațiile de mesagerie.',
  tiff: 'TIFF păstrează calitatea completă a imaginii fără nicio pierdere de date și acceptă straturi și metadate extinse. Ca standard industrial pentru tipărire și arhivare, TIFF este potrivit pentru fotografi profesioniști și tipografii.',
};

const PAIR = {
  'png-to-webp':
    'WebP acceptă transparența alfa exact ca PNG – toate zonele transparente ale imaginii sunt păstrate integral. Puteți alege între compresie cu și fără pierderi pentru a găsi echilibrul optim între dimensiune și calitate.',
  'png-to-jpg':
    'La conversia din PNG în JPG, transparența se pierde – zonele transparente sunt umplute cu o culoare de fundal. În schimb, obțineți fișiere semnificativ mai mici, potrivite pentru fotografii și conținut web fără transparență.',
  'png-to-avif':
    'AVIF oferă o compresie și mai bună decât WebP și poate reduce dimensiunea imaginilor PNG cu până la 50%. Transparența alfa este pe deplin acceptată. Browserele mai vechi pot să nu accepte încă AVIF.',
  'png-to-gif':
    'Conversia reduce paleta la maximum 256 de culori. Rezultatul este potrivit pentru grafică simplă, pictograme și logouri. Transparența este acceptată doar binar (vizibilă sau invizibilă), nu gradual.',
  'png-to-tiff':
    'Conversia păstrează calitatea completă și transparența PNG-ului original în format TIFF. TIFF este potrivit pentru procesare ulterioară în Photoshop sau tipărire profesională. Fișierele TIFF sunt mai mari decât PNG.',
  'jpg-to-webp':
    'WebP poate reduce dimensiunea fotografiilor JPEG cu 25–35% fără pierderi vizibile de calitate. Deoarece JPEG nu acceptă transparența, nicio informație de imagine nu se pierde la această conversie.',
  'jpg-to-png':
    'Conversia din JPG în PNG transformă imaginea într-un format fără pierderi. Detaliile deja pierdute prin compresia JPEG nu pot fi restaurate. PNG este potrivit dacă doriți să editați imaginea fără pierderi suplimentare de calitate.',
  'jpg-to-avif':
    'AVIF atinge o compresie cu până la 50% mai bună decât JPEG la calitate vizuală comparabilă. Acest format de nouă generație este ideal pentru site-uri web critice în performanță și este acceptat de Chrome, Firefox și Safari 16+.',
  'jpg-to-gif':
    'Paleta de culori se reduce la 256, provocând pierderi vizibile de calitate la fotografii. Această conversie este potrivită în principal pentru grafică simplă sau când formatul GIF este necesar din motive de compatibilitate.',
  'jpg-to-tiff':
    'Conversia păstrează calitatea actuală a JPEG-ului și o stochează fără pierderi în format TIFF. Detaliile pierdute prin compresia JPEG nu pot fi restaurate, dar TIFF permite editarea ulterioară fără pierderi suplimentare.',
  'heic-to-jpg':
    'Conversia din HEIC în JPG transformă formatul proprietar Apple în formatul JPEG universal compatibil. Transparența și informațiile HDR se pierd, dar calitatea imaginii rămâne practic identică cu originalul la setări de la 85%.',
  'heic-to-png':
    'Conversia păstrează calitatea completă a originalului HEIC fără pierderi în format PNG. PNG este acceptat de toate dispozitivele și este potrivit mai ales dacă doriți să editați imaginea sau să păstrați transparența.',
  'heic-to-webp':
    'WebP oferă un echilibru excelent între dimensiunea fișierului și calitate. Conversia din HEIC în WebP produce fișiere compacte acceptate de toate browserele moderne – ideal pentru site-uri web.',
  'heic-to-avif':
    'AVIF oferă o eficiență a compresiei similară cu HEIC, dar ca format deschis este mult mai larg acceptat. Conversia permite utilizarea compresiei moderne fără restricțiile ecosistemului Apple.',
  'heic-to-tiff':
    'Conversia transformă fotografiile iPhone în format TIFF profesional. Ideal pentru fotografi care doresc să arhiveze capturile mobile într-un format fără pierderi și să le editeze în Photoshop sau Lightroom.',
  'webp-to-jpg':
    'Conversia din WebP în JPEG asigură compatibilitate maximă. JPG este acceptat de orice dispozitiv și software – indispensabil pentru trimiterea imaginilor prin email sau încărcarea pe platforme care nu acceptă WebP.',
  'webp-to-png':
    'Conversia din WebP în PNG păstrează transparența imaginii și o stochează fără pierderi. PNG este potrivit pentru editarea ulterioară în programe grafice și pentru platforme care nu acceptă WebP.',
  'webp-to-avif':
    'AVIF oferă o compresie și mai bună decât WebP la calitate vizuală comparabilă. Dacă doriți să optimizați imaginile pentru standardele web de nouă generație, conversia din WebP în AVIF este un pas logic.',
  'webp-to-gif': 'Conversia reduce paleta la 256 de culori. Este potrivită pentru grafică simplă sau când formatul GIF este necesar pentru animații sau motive de compatibilitate.',
  'webp-to-tiff':
    'Conversia transformă fișierele WebP în format TIFF profesional. Ideal pentru producția tipografică și arhivarea pe termen lung unde sunt necesare calitate fără pierderi și suport complet de metadate.',
  'svg-to-jpg':
    'Rasterizarea SVG în JPG convertește grafica vectorială scalabilă într-o imagine de pixeli cu rezoluție fixă. Zonele transparente sunt umplute cu o culoare de fundal. Potrivit pentru platforme care nu acceptă SVG.',
  'svg-to-png':
    'Rasterizarea SVG în PNG convertește imaginea vectorială în pixeli păstrând integral transparența. PNG este potrivit pentru rețele sociale și aplicații de mesagerie care nu acceptă SVG.',
  'svg-to-webp':
    'Conversia produce imagini de pixeli compacte din graficele vectoriale în format WebP. WebP este ideal pentru site-uri web unde fișierele mici și timpii rapizi de încărcare sunt determinanți.',
  'svg-to-avif': 'AVIF oferă cea mai bună compresie pentru rasterizarea fișierelor SVG. Ideal pentru site-uri web critice în performanță unde fiecare kilobyte contribuie la Core Web Vitals mai bune.',
  'svg-to-gif':
    'Conversia transformă imaginea vectorială într-o imagine de pixeli cu maximum 256 de culori. GIF este potrivit pentru pictograme simple și grafică animată, dar nu pentru ilustrații complexe cu degradeuri.',
  'svg-to-tiff':
    'Rasterizarea SVG în TIFF produce o imagine de pixeli fără pierderi la calitate maximă. Ideal pentru tipărirea profesională a graficii vectoriale când este necesară o rezoluție fixă de pixeli.',
  'gif-to-jpg':
    'La conversia din GIF în JPG, cadrele de animație și transparența se pierd – se convertește doar prima imagine. Obțineți un format universal compatibil cu adâncime completă de culoare (16,7 milioane de culori).',
  'gif-to-png':
    'Conversia păstrează calitatea fără pierderi și acceptă transparența binară. La GIF-urile animate, se convertește doar primul cadru. PNG este potrivit pentru editarea ulterioară a graficii GIF.',
  'gif-to-webp':
    'WebP acceptă atât imagini statice, cât și animații cu compresie semnificativ mai bună decât GIF. La GIF-urile statice, conversia produce fișiere mai mici la calitate vizuală egală sau superioară.',
  'gif-to-avif': 'AVIF oferă compresie superioară față de GIF și acceptă milioane de culori în loc de doar 256. Ideal pentru modernizarea graficilor GIF vechi pe site-uri web.',
  'tiff-to-jpg':
    'Conversia reduce fișierele TIFF, adesea foarte mari, la dimensiuni JPEG compacte. Transparența și informațiile de straturi se pierd, dar obțineți fișiere universal compatibile pentru web, email și rețele sociale.',
  'tiff-to-png':
    'Conversia păstrează calitatea fără pierderi și conservă transparența dacă există. Fișierele PNG sunt semnificativ mai mici decât TIFF și sunt acceptate de toate dispozitivele și platformele.',
  'tiff-to-webp':
    'WebP reduce drastic dimensiunea fișierelor TIFF – adesea cu peste 90%. Ideal pentru optimizarea fotografiilor profesionale sau scanărilor de înaltă rezoluție pentru utilizare pe web.',
  'tiff-to-avif': 'AVIF oferă cea mai eficientă compresie pentru conversia fișierelor TIFF mari. Ideal pentru optimizarea web a fotografiei profesionale cu pierdere minimă de calitate.',
  'bmp-to-jpg': 'Fișierele BMP sunt necomprimate și extrem de mari. Conversia în JPEG reduce drastic dimensiunea (adesea peste 95%) și produce fișiere universal compatibile.',
  'bmp-to-png':
    'Conversia din BMP în PNG reduce semnificativ dimensiunea prin compresie fără pierderi. Spre deosebire de JPEG, calitatea completă este păstrată – ideal pentru grafică cu margini clare și text.',
  'bmp-to-webp': 'WebP reduce dimensiunile enorme ale BMP cu până la 97% la calitate vizuală bună. Conversia modernizează imaginile vechi pentru utilizare pe site-uri web și în aplicații moderne.',
  'bmp-to-avif':
    'AVIF oferă cea mai bună compresie pentru modernizarea fișierelor BMP necomprimate. Dimensiunea se reduce cu până la 98% – ideal pentru migrarea arhivelor de imagini vechi în formate moderne.',
  'bmp-to-gif':
    'Conversia reduce paleta la 256 de culori și comprimă semnificativ fișierul. Potrivit pentru grafică simplă din sisteme vechi, dar pentru imagini BMP fotorealiste se recomandă JPG sau WebP.',
  'bmp-to-tiff':
    'Conversia din BMP în TIFF păstrează calitatea completă și adaugă suport profesional de metadate. TIFF este mai potrivit decât BMP pentru arhivare pe termen lung și fluxuri de lucru de tipărire profesionale.',
  'avif-to-jpg': 'Conversia din AVIF în JPEG asigură compatibilitate maximă. JPG este acceptat de toate dispozitivele – necesar când destinatarii sau platformele nu acceptă încă formatul AVIF.',
  'avif-to-png': 'Conversia păstrează calitatea fără pierderi în formatul PNG universal acceptat. PNG este potrivit dacă doriți să păstrați transparența sau să editați imaginea în programe grafice.',
  'avif-to-webp':
    'WebP oferă compatibilitate mai largă cu browserele decât AVIF la compresie bună. Conversia are sens când platforma țintă acceptă WebP dar nu încă AVIF – un scenariu frecvent cu browsere și CMS-uri mai vechi.',
};

const PRIVACY =
  'Acest convertor funcționează în întregime local în browserul dumneavoastră – fișierele nu părăsesc niciodată dispozitivul. Fără încărcare, fără servere, fără înregistrare. Complet conform cu GDPR și gratuit fără nicio limitare.';

function extractFormats(f) {
  const m = f.match(/converter-(\w+)-to-(\w+)\.json/);
  return m ? { source: m[1], target: m[2], key: `${m[1]}-to-${m[2]}` } : null;
}
let updated = 0,
  skipped = 0;
const files = fs.readdirSync(TOOLS).filter((f) => f.startsWith('converter-') && f.endsWith('.json'));
for (const file of files) {
  const fmt = extractFormats(file);
  if (!fmt) {
    skipped++;
    continue;
  }
  const s = SOURCE[fmt.source],
    t = TARGET[fmt.target],
    p = PAIR[fmt.key];
  if (!s || !t || !p) {
    console.log(`SKIP: ${file}`);
    skipped++;
    continue;
  }
  const fp = path.join(TOOLS, file);
  const data = JSON.parse(fs.readFileSync(fp, 'utf-8'));
  const block = data.contentBlocks.find((b) => b.type === 'sectionBasic');
  if (!block) {
    skipped++;
    continue;
  }
  block.html = `<p class="text-mid mb-4">${s}</p><p class="text-mid mb-4">${t}</p><p class="text-mid mb-4">${p}</p><p class="text-mid">${PRIVACY}</p>`;
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  updated++;
}
console.log(`RO: Updated: ${updated}, Skipped: ${skipped}`);
