/**
 * Differentiate "in practice" sectionInfo in SV converter files.
 */
const fs = require('fs');
const path = require('path');
const TOOLS = path.join(__dirname, '..', 'data', 'sv', 'tools');

const P = {
  'png-to-webp': [
    'Svenska webbdesigners och webbshopsägare använder PNG för logotyper, produktfriläggningar och UI-element med transparens. Vid övergång till WebP bevaras transparensen fullt ut medan filstorleken minskar med 25–35 % – en direkt vinst för laddningstider och Core Web Vitals.',
    'Grafik med stora enfärgade ytor (logotyper, ikoner) drar störst nytta: filer på 200–500 KB krymper ofta till under 100 KB. För produktbilder på Blocket.se, Prisjakt.se, Amazon eller Shopify-butiker innebär detta snabbare kategorisidor och bättre mobilupplevelse.',
    'All bearbetning sker lokalt i webbläsaren – idealiskt för byråer och företag som måste följa GDPR. Produktbilder och kundgrafik lämnar aldrig din enhet.',
  ],
  'png-to-jpg': [
    'PNG-filer med transparens är ofta flera megabyte stora. När transparens inte behövs – CV-foton, dokumentskanningar eller inlägg i sociala medier – minskar konvertering till JPG filstorleken drastiskt.',
    'Många plattformar som LinkedIn, Arbetsförmedlingen eller jobbportaler accepterar enbart JPG. E-postbilagor drar också nytta: en PNG-skärmbild på 3 MB blir som JPG bara 200–400 KB. Kvalitet på 85 % ger bäst kompromiss.',
    'För ansökningsdokument och konfidentiella filer är lokal bearbetning avgörande – dina filer lämnar aldrig enheten. Fullt GDPR-kompatibelt.',
  ],
  'png-to-avif': [
    'AVIF är det mest effektiva bildformatet i nuvarande generation och kan minska PNG-filer med upp till 50 %. För prestandakritiska webbprojekt är PNG till AVIF den optimala konverteringen.',
    'AVIF stöder transparens, HDR och färgdjup upp till 12 bit per kanal. Chrome, Firefox och Safari 16+ stöder AVIF nativt. För äldre webbläsare rekommenderas fallback via <code>&lt;picture&gt;</code>.',
    'Svenska företag som vill optimera PageSpeed-resultat drar särskild nytta: AVIF förbättrar Largest Contentful Paint (LCP) mätbart. Lokal bearbetning säkerställer GDPR-efterlevnad.',
  ],
  'png-to-gif': [
    'Enkel grafik som ikoner, logotyper eller diagram med begränsad färgpalett lagras mer kompakt som GIF. Konverteringen är användbar när målplattformen kräver GIF-format.',
    'GIF stöder maximalt 256 färger. Fotorealistiska PNG-bilder förlorar synlig kvalitet. Transparens stöds enbart binärt (synlig/osynlig), inte som gradvis alfakanal.',
    'För presentationer, nyhetsbrevsgrafik eller system som enbart accepterar GIF är detta en snabb lösning – helt lokalt och utan filuppladdning.',
  ],
  'png-to-tiff': [
    'Tryckerier, förlag och arkivsystem kräver ofta TIFF istället för PNG. Konverteringen bevarar full kvalitet, transparens och lägger till professionellt metadata-stöd.',
    'TIFF-filer är större än PNG men erbjuder fördelar för professionella arbetsflöden: lagerstöd i Photoshop, CMYK-färgrymder för tryck och komplett metadata. TIFF är industristandard för långtidsarkivering.',
    'Tryckerier i Sverige arbetar ofta med TIFF. Lokal konvertering möjliggör bearbetning av konfidentiella designer utan molnuppladdning.',
  ],
  'jpg-to-webp': [
    'JPEG är standardformatet för digitala foton, men för webbsidor är filstorlekarna ofta för höga. WebP komprimerar JPEG-bilder 25–35 % extra utan synlig kvalitetsförlust och förbättrar laddningstider direkt.',
    'För webbshoppar på Shopify, WooCommerce eller Magento innebär övergången från JPG till WebP mätbart snabbare produktsidor. Google PageSpeed rekommenderar WebP som nästa generations format. Vid kvalitet 80–85 % är skillnaden visuellt omärklig.',
    'I Sverige, där strikta GDPR-regler gäller, är lokal bildbearbetning i webbläsaren särskilt värdefull. Produktfoton lämnar inte din enhet.',
  ],
  'jpg-to-png': [
    'Ibland måste en JPEG-bild konverteras till ett format med transparensstöd eller förlustfri lagring – t.ex. för redigering i Photoshop, Figma eller Canva.',
    'Konvertering från JPG till PNG återställer inte detaljer förlorade vid JPEG-komprimering, men förhindrar ytterligare förluster vid framtida redigeringar. PNG är idealiskt när bilden används som bas för collage eller trycklayouter.',
    'För grafiska formgivare och byråer i Sverige är lokal bearbetning idealiskt: kundmaterial förblir på din egen dator.',
  ],
  'jpg-to-avif': [
    'AVIF uppnår upp till 50 % bättre komprimering än JPEG vid jämförbar visuell kvalitet. För webbsidor med många foton – fastighetsportaler, nättidningar, resesidor – minskas laddningstiderna avsevärt.',
    'Plattformar som Hemnet.se, Booking.com eller Blocket.se använder alltmer AVIF för bättre mobilupplevelse. Chrome, Firefox och Safari 16+ stöder AVIF nativt.',
    'Lokal konvertering i webbläsaren skyddar dina bilder: fastighetsfoton, produktbilder eller porträtt – inget laddas upp. Fullt GDPR-kompatibelt.',
  ],
  'jpg-to-gif': [
    'Konvertering av JPG till GIF är användbar när ett foto behövs som enkel grafik – miniatyrer i äldre system eller nyhetsbrev som enbart stöder GIF.',
    'GIF begränsar färgpaletten till 256 färger, vilket ger synlig kvalitetsförlust på foton. För de flesta ändamål är WebP eller PNG bättre val.',
    'Om ditt arbetsflöde uteslutande kräver GIF erbjuder lokal konvertering en snabb och GDPR-kompatibel lösning.',
  ],
  'jpg-to-tiff': [
    'Professionella tryckerier och bildbyråer kräver ofta TIFF istället för JPEG. Konverteringen bevarar nuvarande kvalitet och lagrar den förlustfritt.',
    'Detaljer förlorade vid JPEG-komprimering återställs inte, men TIFF förhindrar ytterligare förluster. Stöder CMYK, lager och utökad metadata – idealiskt för professionella tryckarbetsflöden.',
    'Fotografer och byråer i Sverige drar nytta av lokal bearbetning: kundfoton och tryckfiler förblir på din enhet.',
  ],
  'heic-to-jpg': [
    'iPhone-användare känner till problemet: HEIC-bilder kan inte öppnas överallt. Windows-datorer, Android-enheter, många webbformulär och e-postklienter stöder inte HEIC. Konvertering till JPG löser detta kompatibilitetsproblem omedelbart.',
    'Vid kvalitet 85–90 % är skillnaden mellan HEIC-originalet och JPG-resultatet visuellt nästan omärklig. Filstorleken förblir jämförbar. Särskilt praktiskt: konvertera flera iPhone-foton samtidigt.',
    'För CV-foton, ID-skanningar eller personliga dokument är lokal bearbetning avgörande – känsliga data lämnar aldrig din enhet.',
  ],
  'heic-to-png': [
    'Vill du återanvända iPhone-foton förlustfritt – som bas i Photoshop, Figma eller för tryckprojekt – är PNG det ideala målformatet.',
    'PNG stöder transparens och förlustfri lagring till skillnad från JPG. PNG-filer är dock väsentligt större. För redigering är det ingen nackdel – för webbbruk rekommenderas konvertering till WebP efteråt.',
    'Kreativa byråer och fotografer drar nytta av lokal bearbetning: iPhone-foton från kunder förblir konfidentiella på din egen dator.',
  ],
  'heic-to-webp': [
    'iPhone-foton i HEIC-format direkt till webbsidor? WebP är den ideala bryggan: det kombinerar HEICs effektiva komprimering med universell webbläsarkompatibilitet (Chrome, Firefox, Safari 14+, Edge).',
    'Konvertering från HEIC till WebP är särskilt effektiv då båda formaten använder moderna komprimeringsalgoritmer. För bloggar, webbshoppar och portfolior är detta snabbaste vägen till webbanpassade iPhone-foton.',
    'Svenska bloggare och webbshopsägare kan konvertera iPhone-foton lokalt och GDPR-kompatibelt – utan molntjänster.',
  ],
  'heic-to-avif': [
    'AVIF erbjuder komprimeringseffektivitet jämförbar med HEIC, men som öppet format är det inte bundet till Apples ekosystem. HEIC till AVIF möjliggör den mest moderna komprimeringen med brett plattformsstöd.',
    'Chrome, Firefox och Safari 16+ stöder AVIF nativt. För prestandakritiska projekt – fotogallerier, portfolior, fastighetsportaler – erbjuder AVIF bäst balans.',
    'Lokal konvertering är särskilt relevant för fotografer: iPhone-fotograferingar konverteras direkt till det mest effektiva webbformatet – utan moln.',
  ],
  'heic-to-tiff': [
    'Professionella fotografer som arbetar med iPhones behöver ofta TIFF för efterbearbetning i Lightroom, Capture One eller Photoshop.',
    'TIFF stöder 16-bitars färgdjup, lager och utökad EXIF/IPTC-metadata. För tryck, arkivering och professionell retusch är TIFF det föredragna formatet.',
    'I Sverige, där tryckerier och bildbyråer kräver TIFF som standard, erbjuder lokal konvertering ett säkert arbetsflöde för konfidentiella fotograferingar.',
  ],
  'webp-to-jpg': [
    'WebP är optimalt för webben, men trycktjänster, Microsoft Office, äldre programvara och vissa sociala medier kräver JPG.',
    'WebP till JPG säkerställer maximal kompatibilitet. Vid kvalitet 85–90 % är kvaliteten nästan identisk. Praktiskt för att skicka bilder till mottagare som inte kan öppna WebP.',
    'För byråer som måste leverera bilder i universella format är lokal konvertering idealiskt – snabbt, säkert och GDPR-kompatibelt.',
  ],
  'webp-to-png': [
    'WebP-bilder med transparens behöver ibland konverteras till PNG – för grafikprogram utan WebP-stöd eller tryckfiler som kräver förlustfri kvalitet.',
    'Konverteringen bevarar transparens och kvalitet fullständigt. PNG är större men bättre lämpat för Photoshop, Illustrator och plattformar utan WebP-stöd.',
    'Grafiska formgivare i Sverige kan lokalt konvertera WebP-tillgångar till tryckklara PNG-filer – utan moln och fullt GDPR-kompatibelt.',
  ],
  'webp-to-avif': [
    'AVIF erbjuder ännu bättre komprimering än WebP – nästa logiska steg för webbsidor som vill optimera laddningstider ytterligare.',
    'Vid jämförbar kvalitet är AVIF-filer 20–30 % mindre än WebP. För webbsidor med hundratals bilder är besparingen betydande. WebP-fallback via <code>&lt;picture&gt;</code> täcker äldre webbläsare.',
    'Svenska webbshoppar som optimerar Core Web Vitals drar särskild nytta av AVIF. Lokal konvertering undviker molnuppladdning.',
  ],
  'webp-to-gif': [
    'GIF-formatet behövs ibland – äldre system, nyhetsbrevverktyg eller plattformar som enbart accepterar GIF.',
    'GIF stöder max 256 färger. Fotorealistiska bilder förlorar kvalitet. Konverteringen passar bäst för enkel grafik, ikoner eller logotyper.',
    'Lokal bearbetning i webbläsaren erbjuder ett snabbt och säkert alternativ till molnbaserade konverteringstjänster.',
  ],
  'webp-to-tiff': [
    'Professionella tryckarbetsflöden kräver ofta TIFF. WebP till TIFF gör det möjligt att förbereda webboptimerade bilder för tryck.',
    'TIFF lagrar förlustfritt med fullt metadata-stöd. Detaljer förlorade vid WebP-komprimering återställs inte – för bäst kvalitet, utgå från originalet.',
    'För byråer och tryckerier i Sverige erbjuder lokal konvertering ett säkert sätt att förbereda webbtillgångar för tryckprojekt.',
  ],
  'svg-to-jpg': [
    'SVG-vektorgrafik kan inte användas överallt: sociala medier, marknadsplatser och många CMS:er accepterar enbart rasterformat. Konvertering till JPG skapar universellt kompatibla filer.',
    'Rastrering konverterar vektorn till pixlar med fast upplösning. Transparenta områden fylls med bakgrundsfärg (standard vit). För webbbruk rekommenderas 1200–2000 px bredd.',
    'För inlägg på sociala medier och annonser på Blocket.se, Prisjakt.se eller Amazon är SVG till JPG ett vanligt krav.',
  ],
  'svg-to-png': [
    'SVG konverteras ofta till PNG för sociala medier, meddelandetjänster och e-postsignaturer – med bevarad transparens och bred kompatibilitet.',
    'Rastrering till PNG bevarar transparenta områden fullständigt – idealiskt för logotyper på olika bakgrunder. Utmärkt även för dokumentationsskärmdumpar och presentationer.',
    'För byråer som levererar logotyper i olika format är SVG till PNG ett snabbt och GDPR-kompatibelt arbetsflöde.',
  ],
  'svg-to-webp': [
    'För webbsidor som inte kan integrera SVG direkt – CMS:er med begränsat SVG-stöd – erbjuder WebP en kompakt pixelrepresentation med minimal filstorlek.',
    'WebP-filer från SVG-källor är typiskt mycket små (5–30 KB) och laddas blixtsnabbt. För ikoner och logotyper är detta den mest pragmatiska lösningen när SVG inte kan användas direkt.',
    'WordPress och många andra CMS:er i Sverige stöder WebP nativt – konverteringen möjliggör användning av vektorgrafik i dessa miljöer.',
  ],
  'svg-to-avif': [
    'AVIF erbjuder bäst tillgänglig komprimering för rastrerad vektorgrafik. För prestandakritiska webbsidor är SVG till AVIF det optimala valet.',
    'AVIF-filer från SVG-källor är extremt kompakta (3–15 KB). Varje kilobyte räknas för Core Web Vitals: snabbare laddning förbättrar LCP och Google-ranking.',
    'Svenska webbutvecklare och SEO-specialister använder alltmer AVIF – lokal konvertering förenklar övergången.',
  ],
  'svg-to-gif': [
    'GIF behövs ibland för ikoner i äldre system, e-postmallar eller forum. SVG till GIF skapar kompatibla och lätta filer.',
    'GIF begränsar till 256 färger. För enfärgade logotyper räcker det; för komplexa illustrationer med gradienter inte. Transparens enbart binär.',
    'För nyhetsbrevmallar och äldre webbplattformar som enbart accepterar GIF är detta en snabb lokal lösning.',
  ],
  'svg-to-tiff': [
    'Tryckerier behöver ofta pixelbilder i TIFF istället för vektorfiler. SVG till TIFF producerar högkvalitativa förlustfria filer för professionellt tryck.',
    'TIFF lagrar rastrerad grafik i högsta kvalitet med fullt färgdjup och metadata. För visitkort, flygblad och affischer rekommenderas min. 300 DPI.',
    'Tryckerier i Sverige accepterar TIFF som standard pixelformat. Lokal konvertering skyddar konfidentiella designer och varumärkeslogotyper.',
  ],
  'gif-to-jpg': [
    'Äldre GIF-bilder behöver ibland konverteras till JPG – för plattformar som enbart accepterar JPEG eller för att optimera filstorlek för e-post. Enbart första bilden i en animerad GIF konverteras.',
    'JPG erbjuder fulla 16,7 miljoner färger istället för GIFs 256-färgpalett. Foton som av misstag sparats som GIF drar nytta av fullt färgdjup.',
    'För arkivering av äldre grafik i ett modernt, universellt format är lokal konvertering snabb och GDPR-kompatibel.',
  ],
  'gif-to-png': [
    'Konvertering av GIF till PNG är användbar för förlustfri lagring eller redigering i grafikprogram. PNG stöder 32-bitars färger och gradvis alfa-transparens.',
    'För animerade GIF:ar konverteras enbart första bilden. Kvaliteten bevaras förlustfritt. PNG är idealiskt som mellanformat till Photoshop, Figma eller Canva.',
    'För modernisering av äldre webbgrafik erbjuder lokal konvertering en snabb och säker lösning utan externa tjänster.',
  ],
  'gif-to-webp': [
    'WebP erbjuder väsentligt bättre komprimering än GIF. Modernisering av äldre GIF:ar till WebP accelererar webbsidor märkbart.',
    'Statiska GIF-filer blir som WebP typiskt 30–60 % mindre med miljontals färger istället för 256, vilket förbättrar visuell kvalitet markant.',
    'För optimering av äldre svenska webbsidor är övergången från GIF till WebP ett enkelt sätt att förbättra Core Web Vitals.',
  ],
  'gif-to-avif': [
    'AVIF överträffar GIF på alla punkter: bättre komprimering, miljontals färger, modernt animationsstöd. För modernisering av äldre webbinnehåll är GIF till AVIF mest effektivt.',
    'AVIF-filer från GIF-källor är drastiskt mindre och visuellt bättre. Äldre webbläsare stöder ännu inte AVIF – en fallback via <code>&lt;picture&gt;</code> rekommenderas.',
    'För att maximera laddningstider erbjuder övergången från GIF till AVIF den största enskilda vinsten av alla formatbyten.',
  ],
  'tiff-to-jpg': [
    'TIFF-filer från professionell fotografering eller skannrar fyller ofta 20–100 MB. Konvertering till JPG skapar kompakta filer – typisk minskning över 95 %.',
    'Transparens och lagerinformation går förlorad. För ren fotografering är det oproblematiskt. Vid kvalitet 85–90 % förblir kvaliteten utmärkt med filstorlekar på några hundra KB.',
    'Fotografer och skanneranvändare i Sverige kan konvertera TIFF lokalt och GDPR-kompatibelt till JPG redo att skickas.',
  ],
  'tiff-to-png': [
    'När TIFF-filer behövs för redigering i grafikprogram eller webbsidor med transparens är PNG det lämpliga formatet – förlustfritt och universellt kompatibelt.',
    'PNG bevarar full kvalitet och transparens från TIFF-originalet. Filerna är mindre än TIFF men större än JPEG/WebP. För Figma, Canva eller Photoshop är PNG idealiskt.',
    'För förberedelse av skannerutdata och arkivbilder för onlineanvändning erbjuder lokal konvertering ett säkert och snabbt arbetsflöde.',
  ],
  'tiff-to-webp': [
    'TIFF till WebP uppnår den största minskningen: filer på 20–100 MB krymper ofta till 200 KB – 2 MB. För publicering av professionella foton på webben är detta mest effektivt.',
    'Vid kvalitet 80–85 % bevarar WebP utmärkt visuell kvalitet. För fotogallerier, portfolior och nättidningar: professionell kvalitet till en bråkdel av originalstorleken.',
    'Fotografer och byråer i Sverige kan konvertera högupplösta fotograferingar lokalt till webboptimerade format – utan moln, GDPR-kompatibelt.',
  ],
  'tiff-to-avif': [
    'AVIF erbjuder mest effektiv komprimering för stora TIFF-filer. Professionella foton och skanningar minskas drastiskt med minimalt kvalitetsförlust.',
    'För fotogallerier och portfoliosidor som söker bäst laddningstider är TIFF till AVIF det optimala arbetsflödet. Chrome, Firefox och Safari 16+ stöder AVIF.',
    'Professionella fotografer i Sverige drar nytta av lokal bearbetning: kundfoton i hög upplösning optimeras säkert och GDPR-kompatibelt.',
  ],
  'bmp-to-jpg': [
    'BMP-filer härstammar ofta från äldre Windows-program eller skannrar. Okomprimerade och mycket stora – konvertering till JPG minskar storleken med över 95 %.',
    'En BMP-skärmbild på 10 MB blir som JPG typiskt bara 200–400 KB. För e-post, dokumentation och arkivering är detta enklaste sättet att spara utrymme.',
    'För migrering av äldre bildarkiv och förberedelse av skannerutdata erbjuder lokal konvertering en snabb och GDPR-kompatibel lösning.',
  ],
  'bmp-to-png': [
    'BMP till PNG minskar storleken via förlustfri komprimering – full kvalitet bevaras. Idealiskt för grafik med skarpa kanter, text eller skärmbilder.',
    'Till skillnad från JPG bevarar PNG den exakta pixelkvaliteten utan artefakter. För teknisk dokumentation och skärmbilder med text är PNG det bättre valet.',
    'Lokal konvertering är väl lämpad för konfidentiella dokument och interna skärmbilder – inget skickas till en extern server.',
  ],
  'bmp-to-webp': [
    'BMP är helt olämpligt för modern webbanvändning – okomprimerat och enormt. WebP minskar storleken med upp till 97 % vid god kvalitet och moderniserar äldre bilder.',
    'Konverteringen moderniserar gamla filer från Windows-system till aktuella webbsidor, CMS:er och webbshoppar. WebP stöds av alla moderna webbläsare.',
    'För svenska företag som förbereder äldre arkiv för webbnärvaro är lokal konvertering effektiv och GDPR-kompatibel.',
  ],
  'bmp-to-avif': [
    'AVIF erbjuder bäst möjlig komprimering för okomprimerade BMP-filer: minskningar på över 98 % är realistiska.',
    'AVIF stöder HDR, breda färgrymder och färgdjup upp till 12 bit – originalkvaliteten bevaras optimalt. Chrome, Firefox och Safari 16+ stöder AVIF nativt.',
    'Lokal konvertering i webbläsaren möjliggör migrering av kompletta bildarkiv utan molntjänster – snabbt, säkert och GDPR-kompatibelt.',
  ],
  'bmp-to-gif': [
    'BMP till GIF är användbart för system som enbart accepterar GIF eller enkel grafik med få färger där GIF är mer kompakt.',
    'GIF stöder max 256 färger. Fotorealistiska bilder förlorar betydande kvalitet. För foton är JPG eller WebP bättre. GIF lämpar sig enbart för enkel grafik.',
    'För kompatibilitetskrav från äldre system erbjuder lokal konvertering en snabb och säker lösning.',
  ],
  'bmp-to-tiff': [
    'BMP till TIFF är användbart för professionellt metadata-stöd – arkivering, tryckförberedelse eller bearbetning i professionell programvara.',
    'TIFF bevarar full kvalitet och lägger till: EXIF-metadata, CMYK-färgrymder och lagerstöd. För långtidsarkivering är TIFF klart överlägset BMP.',
    'Arkiv, bibliotek och svenska företag som digitaliserar äldre samlingar drar nytta av lokal konvertering utan molnberoende.',
  ],
  'avif-to-jpg': [
    'AVIF stöds ännu inte av äldre enheter, bildredigeringsprogram och vissa plattformar. Konvertering till JPG säkerställer maximal kompatibilitet.',
    'Vid kvalitet 85–90 % är kvaliteten nästan identisk med AVIF-originalet. Användbart för e-post till mottagare med äldre system eller trycktjänster som enbart accepterar JPEG.',
    'För företag som behöver både webboptimerade (AVIF) och universella (JPG) bilder är lokal konvertering ett effektivt arbetsflöde.',
  ],
  'avif-to-png': [
    'AVIF-bilder med transparens behöver ibland konverteras till PNG – för grafikprogram eller plattformar utan AVIF-stöd.',
    'PNG bevarar transparens och kvalitet förlustfritt. Filerna är större än AVIF men lämpade för Photoshop, Figma, Canva och tryck.',
    'Grafiska formgivare i Sverige använder lokal konvertering för säker förberedelse av AVIF-tillgångar för olika utmatningskanaler – GDPR-kompatibelt.',
  ],
  'avif-to-webp': [
    'WebP erbjuder bredare webbläsarstöd än AVIF (Safari 14+ vs. 16+) vid god komprimering. Om din målgrupp använder äldre webbläsare är WebP det säkrare valet.',
    'AVIF till WebP är relevant för CMS:er och CDN:er utan AVIF-stöd. WebP stöds nativt av WordPress, Shopify, Cloudflare och alla moderna webbläsare.',
    'För svenska webbprojekt som behöver maximal webbläsartäckning är WebP fortfarande det mest pålitliga moderna formatet.',
  ],
};

function extractFormats(f) {
  const m = f.match(/converter-(\w+)-to-(\w+)\.json/);
  return m ? { key: `${m[1]}-to-${m[2]}` } : null;
}
let updated = 0, skipped = 0;
const files = fs.readdirSync(TOOLS).filter(f => f.startsWith('converter-') && f.endsWith('.json'));
for (const file of files) {
  const fmt = extractFormats(file);
  if (!fmt || !P[fmt.key]) { skipped++; continue; }
  const [p1, p2, p3] = P[fmt.key];
  const fp = path.join(TOOLS, file);
  const data = JSON.parse(fs.readFileSync(fp, 'utf-8'));
  const block = data.contentBlocks.find(b => b.type === 'sectionInfo' && !b.html.includes('<table') && (b.title.includes('praktiken') || b.title.includes('i praktiken')));
  if (!block) { skipped++; continue; }
  block.html = `<p class="text-mid mb-4">${p1}</p><p class="text-mid mb-4">${p2}</p><p class="text-mid">${p3}</p>`;
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  updated++;
}
console.log(`SV sectionInfo: Updated: ${updated}, Skipped: ${skipped}`);
