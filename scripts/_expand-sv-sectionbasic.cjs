/**
 * Expand "Why convert X to Y?" sectionBasic in SV converter files.
 */
const fs = require('fs');
const path = require('path');
const TOOLS = path.join(__dirname, '..', 'data', 'sv', 'tools');

const SOURCE = {
  png: 'Portable Network Graphics (PNG) är ett förlustfritt bildformat som stöder miljontals färger och full alfa-transparens. PNG är särskilt lämpligt för logotyper, ikoner, skärmbilder och grafik med skarpa kanter eller text.',
  jpg: 'JPEG (JPG) är världens mest använda bildformat för digitala fotografier. Det använder förlustbaserad komprimering för kompakta filer, men stöder varken transparens eller förlustfri lagring.',
  heic: 'High Efficiency Image Container (HEIC) är standardformatet för foton på Apple-enheter sedan iOS 11. HEIC ger mindre filer än JPEG vid jämförbar kvalitet, men stöds inte nativt utanför Apples ekosystem – varken på Windows, Android eller många webbplattformar.',
  webp: 'WebP är ett modernt bildformat utvecklat av Google som stöder både förlustbaserad och förlustfri komprimering. Det producerar avsevärt mindre filer än PNG och JPEG vid jämförbar visuell kvalitet och stöds av alla aktuella webbläsare.',
  svg: 'Scalable Vector Graphics (SVG) är ett XML-baserat vektorformat för tvådimensionell grafik. SVG-filer är upplösningsoberoende och förblir skarpa i alla storlekar – idealiska för logotyper, ikoner och illustrationer.',
  gif: 'Graphics Interchange Format (GIF) stöder animationer och en palett på maximalt 256 färger. GIF används flitigt för animerat innehåll i sociala medier, men färgbegränsningen gör det olämpligt för fotorealistiska bilder.',
  bmp: 'Bitmap (BMP) är ett äldre Windows-bildformat som lagrar pixeldata utan komprimering. BMP-filer är därför extremt stora och olämpliga för modern användning på webben eller mobila enheter.',
  tiff: 'Tagged Image File Format (TIFF) är branschstandarden för professionell fotografering, tryck och arkivering. TIFF lagrar bilder förlustfritt med full färgdjup, lager och metadata.',
  avif: 'AV1 Image File Format (AVIF) är ett nästa generations bildformat baserat på AV1-videocodecen. AVIF erbjuder den bästa tillgängliga komprimeringen – filer upp till 50% mindre än WebP vid jämförbar visuell kvalitet.',
};

const TARGET = {
  webp: 'WebP minskar filstorleken med 30–35% jämfört med äldre format utan synlig kvalitetsförlust. Alla moderna webbläsare (Chrome, Firefox, Safari 14+, Edge) stöder WebP fullt ut. För webbplatser innebär detta snabbare laddningstider och bättre Google-placering.',
  avif: 'AVIF erbjuder den mest effektiva komprimeringen av alla aktuella bildformat och kan minska filstorleken upp till 50% jämfört med JPEG. Chrome, Firefox och Safari 16+ stöder AVIF. Det är det optimala valet för prestandakritiska webbprojekt.',
  jpg: 'JPEG är det mest universella bildformatet – kompatibelt med alla enheter, webbläsare och plattformar. Konvertering till JPG säkerställer att dina bilder visas problemfritt överallt: från e-postbilagor till inlägg i sociala medier.',
  png: 'PNG bevarar full bildkvalitet utan komprimeringsartefakter och stöder full alfa-transparens. Detta förlustfria format är idealiskt för grafik som ska vidarebearbetas och bilder där transparenta områden måste bevaras.',
  gif: 'GIF är standardformatet för korta animationer, memes och enkel grafik med begränsad färgpalett. Med universellt webbläsarstöd är GIF särskilt lämpligt för animerat innehåll i sociala medier och meddelandeappar.',
  tiff: 'TIFF bevarar full bildkvalitet utan någon dataförlust och stöder lager och omfattande metadata. Som branschstandard för tryck och arkivering är TIFF lämpligt för professionella fotografer och tryckerier.',
};

const PAIR = {
  'png-to-webp': 'WebP stöder alfa-transparens precis som PNG – alla transparenta områden i din bild bevaras fullständigt. Du kan välja mellan förlustbaserad och förlustfri komprimering för att hitta den optimala balansen mellan filstorlek och kvalitet.',
  'png-to-jpg': 'Vid konvertering från PNG till JPG förloras transparensen – transparenta områden fylls med en bakgrundsfärg. I gengäld får du avsevärt mindre filer, lämpligare för foton och webbinnehåll utan transparens.',
  'png-to-avif': 'AVIF erbjuder ännu bättre komprimering än WebP och kan minska dina PNG-bilders storlek upp till 50%. Alfa-transparens stöds fullt ut. Äldre webbläsare stöder kanske inte AVIF ännu.',
  'png-to-gif': 'Konverteringen reducerar paletten till maximalt 256 färger. Resultatet är lämpligt för enkel grafik, ikoner och logotyper. Transparens stöds endast binärt (synlig eller osynlig), inte gradvis.',
  'png-to-tiff': 'Konverteringen bevarar full kvalitet och transparens från PNG-originalet i TIFF-format. TIFF är lämpligt för vidare bearbetning i Photoshop eller professionellt tryck. TIFF-filer är större än PNG.',
  'jpg-to-webp': 'WebP kan minska dina JPEG-fotons storlek med 25–35% utan synlig kvalitetsförlust. Eftersom JPEG inte stöder transparens förloras ingen bildinformation vid denna konvertering.',
  'jpg-to-png': 'Konvertering från JPG till PNG omvandlar bilden till ett förlustfritt format. Detaljer som redan förlorats genom JPEG-komprimering kan dock inte återställas. PNG är lämpligt om du vill redigera bilden utan ytterligare kvalitetsförlust.',
  'jpg-to-avif': 'AVIF uppnår upp till 50% bättre komprimering än JPEG vid jämförbar visuell kvalitet. Detta nästa generations format är idealiskt för prestandakritiska webbplatser och stöds av Chrome, Firefox och Safari 16+.',
  'jpg-to-gif': 'Färgpaletten reduceras till 256, vilket vid fotografier leder till synliga kvalitetsförluster. Denna konvertering är främst lämplig för enkel grafik eller när GIF-formatet krävs av kompatibilitetsskäl.',
  'jpg-to-tiff': 'Konverteringen bevarar den aktuella kvaliteten hos din JPEG och lagrar den förlustfritt i TIFF-format. Detaljer som förlorats genom JPEG-komprimering kan inte återställas, men TIFF möjliggör vidare redigering utan ytterligare förluster.',
  'heic-to-jpg': 'Konvertering från HEIC till JPG omvandlar Apples proprietära format till det universellt kompatibla JPEG-formatet. Eventuell transparens och HDR-information förloras, men bildkvaliteten förblir praktiskt taget identisk med originalet vid inställningar från 85%.',
  'heic-to-png': 'Konverteringen bevarar full kvalitet från HEIC-originalet förlustfritt i PNG-format. PNG stöds av alla enheter och är särskilt lämpligt om du vill redigera bilden eller bevara transparensen.',
  'heic-to-webp': 'WebP erbjuder en utmärkt balans mellan filstorlek och kvalitet. Konvertering från HEIC till WebP producerar kompakta filer som stöds av alla moderna webbläsare – idealiskt för webbplatser.',
  'heic-to-avif': 'AVIF erbjuder liknande komprimeringseffektivitet som HEIC, men stöds som öppet format mycket bredare. Konverteringen möjliggör modern komprimering utan begränsningarna i Apples ekosystem.',
  'heic-to-tiff': 'Konverteringen omvandlar dina iPhone-foton till det professionella TIFF-formatet. Idealiskt för fotografer som vill arkivera mobilbilder i ett förlustfritt format och vidarebearbeta dem i Photoshop eller Lightroom.',
  'webp-to-jpg': 'Konvertering från WebP till JPEG säkerställer maximal kompatibilitet. JPG stöds av alla enheter och all programvara – oumbärligt för att skicka bilder via e-post eller ladda upp till plattformar som inte accepterar WebP.',
  'webp-to-png': 'Konvertering från WebP till PNG bevarar transparensen och lagrar bilden förlustfritt. PNG är lämpligt för vidare redigering i grafikprogram och för plattformar som inte stöder WebP.',
  'webp-to-avif': 'AVIF erbjuder ännu bättre komprimering än WebP vid jämförbar kvalitet. Om du vill optimera dina bilder för nästa generations webbstandarder är konvertering från WebP till AVIF ett logiskt steg.',
  'webp-to-gif': 'Konverteringen reducerar paletten till 256 färger. Den är lämplig för enkel grafik eller när GIF-formatet behövs för animationer eller kompatibilitetsskäl.',
  'webp-to-tiff': 'Konverteringen omvandlar dina WebP-filer till det professionella TIFF-formatet. Idealiskt för tryckproduktion och långtidsarkivering där förlustfri kvalitet och fullt metadatastöd krävs.',
  'svg-to-jpg': 'Rastrering från SVG till JPG konverterar den skalbara vektorgrafiken till en pixelbild med fast upplösning. Transparenta områden fylls med en bakgrundsfärg. Lämpligt för plattformar som inte accepterar SVG.',
  'svg-to-png': 'Rastrering från SVG till PNG konverterar vektorbilden till pixlar med full bevarande av transparens. PNG är lämpligt för sociala medier och meddelandeappar som inte stöder SVG.',
  'svg-to-webp': 'Konverteringen producerar kompakta pixelbilder från din vektorgrafik i WebP-format. WebP är idealiskt för webbplatser där små filer och snabba laddningstider är avgörande.',
  'svg-to-avif': 'AVIF erbjuder den bästa komprimeringen för rastrering av SVG-filer. Idealiskt för prestandakritiska webbplatser där varje kilobyte bidrar till bättre laddningstider och Core Web Vitals.',
  'svg-to-gif': 'Konverteringen omvandlar vektorbilden till en pixelbild med maximalt 256 färger. GIF är lämpligt för enkla ikoner och animerad grafik, men inte för komplexa illustrationer med färggradienter.',
  'svg-to-tiff': 'Rastrering från SVG till TIFF producerar en förlustfri pixelbild i högsta kvalitet. Idealiskt för professionellt tryck av vektorgrafik när en fast pixelupplösning behövs.',
  'gif-to-jpg': 'Vid konvertering från GIF till JPG förloras animationsramar och transparens – bara den första bilden konverteras. Du får ett universellt kompatibelt fotoformat med full färgdjup (16,7 miljoner färger).',
  'gif-to-png': 'Konverteringen bevarar kvaliteten förlustfritt och stöder binär transparens. Vid animerade GIF:ar konverteras bara den första ramen. PNG är lämpligt för vidare bearbetning av GIF-grafik.',
  'gif-to-webp': 'WebP stöder både stillbilder och animationer med avsevärt bättre komprimering än GIF. Vid statiska GIF:ar ger konverteringen mindre filer vid samma eller bättre kvalitet.',
  'gif-to-avif': 'AVIF erbjuder överlägsen komprimering jämfört med GIF och stöder miljontals färger istället för bara 256. Idealiskt för att modernisera äldre GIF-grafik på webbplatser.',
  'tiff-to-jpg': 'Konverteringen reducerar de ofta mycket stora TIFF-filerna till kompakta JPEG-storlekar. Transparens och lagerinformation förloras, men du får universellt kompatibla filer för webb, e-post och sociala medier.',
  'tiff-to-png': 'Konverteringen bevarar kvaliteten förlustfritt och bevarar transparens om sådan finns. PNG-filer är avsevärt mindre än TIFF och stöds av alla enheter och plattformar.',
  'tiff-to-webp': 'WebP minskar dina TIFF-filers storlek drastiskt – ofta med mer än 90%. Idealiskt för att optimera professionella foton eller högupplösta skanningar för webbanvändning.',
  'tiff-to-avif': 'AVIF erbjuder den mest effektiva komprimeringen för konvertering av stora TIFF-filer. Idealiskt för webboptimering av professionell fotografering med minimal kvalitetsförlust.',
  'bmp-to-jpg': 'BMP-filer är okomprimerade och därför extremt stora. Konvertering till JPEG minskar storleken drastiskt (ofta mer än 95%) och producerar universellt kompatibla filer.',
  'bmp-to-png': 'Konvertering från BMP till PNG minskar storleken avsevärt genom förlustfri komprimering. Till skillnad från JPEG bevaras full kvalitet – idealiskt för grafik med skarpa kanter och text.',
  'bmp-to-webp': 'WebP minskar de enorma BMP-filstorlekarna med upp till 97% med god visuell kvalitet. Konverteringen moderniserar dina äldre bilder för användning på webbplatser.',
  'bmp-to-avif': 'AVIF erbjuder den bästa komprimeringen för modernisering av okomprimerade BMP-filer. Storleken minskas med upp till 98% – idealiskt för migrering av gamla bildarkiv till moderna format.',
  'bmp-to-gif': 'Konverteringen reducerar paletten till 256 färger och komprimerar filen avsevärt. Lämpligt för enkel grafik från äldre system, men för fotorealistiska BMP-bilder rekommenderas JPG eller WebP.',
  'bmp-to-tiff': 'Konvertering från BMP till TIFF bevarar full kvalitet och lägger till professionellt metadatastöd. TIFF är lämpligare än BMP för långtidsarkivering och professionella tryckarbetsflöden.',
  'avif-to-jpg': 'Konvertering från AVIF till JPEG säkerställer maximal kompatibilitet. JPG stöds av alla enheter – nödvändigt när mottagare eller plattformar ännu inte stöder det nyare AVIF-formatet.',
  'avif-to-png': 'Konverteringen bevarar kvaliteten förlustfritt i det universellt stödda PNG-formatet. PNG är lämpligt om du vill bevara transparens eller redigera bilden i grafikprogram.',
  'avif-to-webp': 'WebP erbjuder bredare webbläsarstöd än AVIF med god komprimering. Konverteringen är meningsfull när din målplattform stöder WebP men ännu inte AVIF – ett vanligt scenario med äldre webbläsare och CMS-system.',
};

const PRIVACY = 'Denna konverterare körs helt lokalt i din webbläsare – dina filer lämnar aldrig din enhet. Inga uppladdningar, inga servrar, ingen registrering. Helt GDPR-kompatibel och gratis utan några begränsningar.';

function extractFormats(f) {
  const m = f.match(/converter-(\w+)-to-(\w+)\.json/);
  return m ? { source: m[1], target: m[2], key: `${m[1]}-to-${m[2]}` } : null;
}
let updated = 0, skipped = 0;
const files = fs.readdirSync(TOOLS).filter(f => f.startsWith('converter-') && f.endsWith('.json'));
for (const file of files) {
  const fmt = extractFormats(file);
  if (!fmt) { skipped++; continue; }
  const s = SOURCE[fmt.source], t = TARGET[fmt.target], p = PAIR[fmt.key];
  if (!s || !t || !p) { console.log(`SKIP: ${file}`); skipped++; continue; }
  const fp = path.join(TOOLS, file);
  const data = JSON.parse(fs.readFileSync(fp, 'utf-8'));
  const block = data.contentBlocks.find(b => b.type === 'sectionBasic');
  if (!block) { skipped++; continue; }
  block.html = `<p class="text-mid mb-4">${s}</p><p class="text-mid mb-4">${t}</p><p class="text-mid mb-4">${p}</p><p class="text-mid">${PRIVACY}</p>`;
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  updated++;
}
console.log(`SV: Updated: ${updated}, Skipped: ${skipped}`);
