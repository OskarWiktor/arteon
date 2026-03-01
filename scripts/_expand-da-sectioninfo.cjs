/**
 * Differentiate "in practice" sectionInfo in DA converter files.
 */
const fs = require('fs');
const path = require('path');
const TOOLS = path.join(__dirname, '..', 'data', 'da', 'tools');

const P = {
  'png-to-webp': [
    'Webdesignere og webshopejere i Danmark bruger PNG til logoer, produktudklip og UI-elementer med gennemsigtighed. Ved skiftet til WebP bevares gennemsigtigheden fuldt ud, mens filstørrelsen falder med 25–35 % – en direkte gevinst for indlæsningstider og Core Web Vitals.',
    'Grafik med store ensartede farveflader (logoer, ikoner) drager størst fordel: filer på 200–500 KB krymper ofte til under 100 KB. For produktbilleder på DBA.dk, Proshop.dk, Amazon eller Shopify-butikker betyder det hurtigere kategorisider og bedre mobiloplevelse.',
    'Al behandling foregår lokalt i browseren – ideelt for bureauer og virksomheder, der skal overholde GDPR. Produktbilleder og kundegrafik forlader aldrig din enhed.',
  ],
  'png-to-jpg': [
    'PNG-filer med gennemsigtighed fylder ofte flere megabytes. Når gennemsigtighed ikke er nødvendig – CV-fotos, dokumentscanninger eller opslag på sociale medier – reducerer konvertering til JPG filstørrelsen drastisk.',
    'Mange platforme som Jobindex, LinkedIn eller jobportaler accepterer kun JPG. E-mailvedhæftninger drager også fordel: et PNG-skærmbillede på 3 MB bliver som JPG kun 200–400 KB. Kvalitet på 85 % giver det bedste kompromis.',
    'For ansøgningsdokumenter og fortrolige filer er lokal behandling afgørende – dine filer forlader aldrig din enhed. Fuldt GDPR-kompatibelt.',
  ],
  'png-to-avif': [
    'AVIF er den mest effektive billedformat i den nuværende generation og kan reducere PNG-filer med op til 50 %. For ydeevnekritiske webprojekter er PNG til AVIF den optimale konvertering.',
    'AVIF understøtter gennemsigtighed, HDR og farvedybde op til 12 bit per kanal. Chrome, Firefox og Safari 16+ understøtter AVIF native. For ældre browsere anbefales fallback via <code>&lt;picture&gt;</code> med PNG eller WebP.',
    'Danske virksomheder, der ønsker at optimere PageSpeed-scores, drager særlig fordel: AVIF forbedrer Largest Contentful Paint (LCP) målbart. Lokal behandling sikrer GDPR-overholdelse.',
  ],
  'png-to-gif': [
    'Simple grafik som ikoner, logoer eller diagrammer med begrænset farvepalette lagres mere kompakt som GIF. Konverteringen er nyttig, når målplatformen kræver GIF-format.',
    'GIF understøtter maksimalt 256 farver. Fotorealistiske PNG-billeder mister synlig kvalitet. Gennemsigtighed understøttes kun binært (synlig/usynlig), ikke som gradvis alfakanal.',
    'For præsentationer, nyhedsbrevsgrafikker eller systemer, der kun accepterer GIF, er denne konvertering en hurtig løsning – helt lokalt og uden filupload.',
  ],
  'png-to-tiff': [
    'Trykkerier, forlag og arkivsystemer kræver ofte TIFF i stedet for PNG. Konverteringen bevarer fuld kvalitet, gennemsigtighed og tilføjer professionel metadata-understøttelse.',
    'TIFF-filer er større end PNG, men tilbyder fordele for professionelle workflows: lagunderstøttelse i Photoshop, CMYK-farverum for tryk og komplet metadata. TIFF er industristandard for langtidsarkivering.',
    'Trykkerier i Danmark arbejder ofte med TIFF. Lokal konvertering muliggør behandling af fortrolige designs uden cloud-upload.',
  ],
  'jpg-to-webp': [
    'JPEG er standardformatet for digitale fotos, men for hjemmesider er filstørrelserne ofte for høje. WebP komprimerer JPEG-billeder 25–35 % ekstra uden synligt kvalitetstab og forbedrer indlæsningstider direkte.',
    'For webshops på Shopify, WooCommerce eller DanDomain betyder skiftet fra JPG til WebP målbart hurtigere produktsider. Google PageSpeed anbefaler WebP som next-gen-format. Ved kvalitet 80–85 % er forskellen visuelt umærkelig.',
    'I Danmark, hvor strenge GDPR-regler gælder, er lokal billedbehandling i browseren særlig værdifuld. Produktfotos forlader ikke din enhed.',
  ],
  'jpg-to-png': [
    'Nogle gange skal et JPEG-billede konverteres til et format med gennemsigtighed eller tabsfri lagring – f.eks. for redigering i Photoshop, Figma eller Canva.',
    'Konvertering fra JPG til PNG gendanner ikke detaljer tabt ved JPEG-kompression, men forhindrer yderligere tab ved fremtidige redigeringer. PNG er ideel, når billedet bruges som base for collager eller tryklayouts.',
    'For grafikere og bureauer i Danmark er lokal behandling ideal: kundemateriale forbliver på din egen computer.',
  ],
  'jpg-to-avif': [
    'AVIF opnår op til 50 % bedre kompression end JPEG ved sammenlignelig visuel kvalitet. For hjemmesider med mange fotos – ejendomsportaler, onlinemagasiner, rejsesider – reduceres indlæsningstiderne betydeligt.',
    'Platforme som Boliga.dk, Booking.com eller DBA.dk anvender i stigende grad AVIF for bedre mobiloplevelse. Chrome, Firefox og Safari 16+ understøtter AVIF native.',
    'Lokal konvertering i browseren beskytter dine billeder: ejendomsfotos, produktbilleder eller portrætter – intet uploades. Fuldt GDPR-kompatibelt.',
  ],
  'jpg-to-gif': [
    'Konvertering af JPG til GIF er nyttig, når et foto skal bruges som simpel grafik – thumbnails i ældre systemer eller nyhedsbreve, der kun understøtter GIF.',
    'GIF begrænser farvepaletten til 256 farver, hvilket medfører synligt kvalitetstab på fotos. For de fleste formål er WebP eller PNG bedre valg.',
    'Hvis dit workflow udelukkende kræver GIF, tilbyder lokal konvertering en hurtig og GDPR-kompatibel løsning.',
  ],
  'jpg-to-tiff': [
    'Professionelle trykkerier og billedbureauer kræver ofte TIFF i stedet for JPEG. Konverteringen bevarer den aktuelle kvalitet og gemmer den tabsfrit.',
    'Detaljer tabt ved JPEG-kompression gendannes ikke, men TIFF forhindrer yderligere tab. Understøtter CMYK, lag og udvidede metadata – ideel for professionelle trykworkflows.',
    'Fotografer og bureauer i Danmark drager fordel af lokal behandling: kundefotos og trykfiler forbliver på din enhed.',
  ],
  'heic-to-jpg': [
    'iPhone-brugere kender problemet: HEIC-fotos kan ikke åbnes overalt. Windows-pc\'er, Android-enheder, mange webformularer og e-mailklienter understøtter ikke HEIC. Konvertering til JPG løser dette kompatibilitetsproblem øjeblikkeligt.',
    'Ved kvalitet 85–90 % er forskellen mellem HEIC-originalen og JPG-resultatet visuelt næsten umærkelig. Filstørrelsen forbliver sammenlignelig. Særlig praktisk: konverter flere iPhone-fotos samtidig.',
    'For CV-fotos, scanninger af identitetsdokumenter eller personlige dokumenter er lokal behandling afgørende – følsomme data forlader aldrig din enhed.',
  ],
  'heic-to-png': [
    'Vil du genbruge iPhone-fotos tabsfrit – som base i Photoshop, Figma eller til trykprojekter – er PNG det ideelle målformat.',
    'PNG understøtter gennemsigtighed og tabsfri lagring i modsætning til JPG. PNG-filer er dog væsentligt større end HEIC eller JPG. For redigering er det ingen ulempe – for web anbefales efterfølgende konvertering til WebP.',
    'Kreative bureauer og fotografer drager fordel af lokal behandling: iPhone-fotos fra kunder forbliver fortrolige på din egen computer.',
  ],
  'heic-to-webp': [
    'iPhone-fotos i HEIC-format direkte til hjemmesider? WebP er den ideelle bro: det kombinerer HEIC\'s effektive kompression med universel browserkompatibilitet (Chrome, Firefox, Safari 14+, Edge).',
    'Konvertering fra HEIC til WebP er særlig effektiv, da begge formater bruger moderne kompressionsalgoritmer. For blogs, webshops og portfolios er det den hurtigste vej til weboptimerede iPhone-fotos.',
    'Bloggere og webshopejere i Danmark kan konvertere iPhone-fotos lokalt og GDPR-kompatibelt – uden cloudtjenester.',
  ],
  'heic-to-avif': [
    'AVIF tilbyder kompressionseffektivitet svarende til HEIC, men som åbent format er det ikke bundet til Apples økosystem. HEIC til AVIF muliggør den mest moderne kompression med bred platformunderstøttelse.',
    'Chrome, Firefox og Safari 16+ understøtter AVIF native. For ydeevnekritiske projekter – fotogallerier, portfolios, ejendomsportaler – tilbyder AVIF den bedste balance.',
    'Lokal konvertering er særlig relevant for fotografer: iPhone-shoots konverteres direkte til det mest effektive webformat – uden cloud.',
  ],
  'heic-to-tiff': [
    'Professionelle fotografer, der arbejder med iPhones, har ofte brug for TIFF til efterbehandling i Lightroom, Capture One eller Photoshop.',
    'TIFF understøtter 16-bit farvedybde, lag og udvidede EXIF/IPTC-metadata. For tryk, arkivering og professionel retouche er TIFF det foretrukne format. Filerne bliver dog væsentligt større.',
    'I Danmark, hvor trykkerier og billedbureauer kræver TIFF som standard, tilbyder lokal konvertering et sikkert workflow for fortrolige shoots.',
  ],
  'webp-to-jpg': [
    'WebP er optimalt for web, men tryktjenester, Microsoft Office, ældre software og nogle sociale medier kræver JPG.',
    'WebP til JPG sikrer maksimal kompatibilitet. Ved kvalitet 85–90 % er kvaliteten næsten identisk. Praktisk for at sende billeder til modtagere, der ikke kan åbne WebP.',
    'For bureauer, der skal levere billeder i universelle formater, er lokal konvertering ideel – hurtig, sikker og GDPR-kompatibel.',
  ],
  'webp-to-png': [
    'WebP-billeder med gennemsigtighed skal sommetider konverteres til PNG – for grafiske programmer uden WebP-understøttelse eller trykfiler, der kræver tabsfri kvalitet.',
    'Konverteringen bevarer gennemsigtighed og kvalitet fuldstændigt. PNG er større men bedre egnet til Photoshop, Illustrator og platforme uden WebP-understøttelse.',
    'Grafiske designere i Danmark kan lokalt konvertere WebP-assets til trykklare PNG-filer – uden cloud og fuldt GDPR-kompatibelt.',
  ],
  'webp-to-avif': [
    'AVIF tilbyder endnu bedre kompression end WebP – det næste logiske skridt for hjemmesider, der vil optimere indlæsningstider yderligere.',
    'Ved sammenlignelig kvalitet er AVIF-filer 20–30 % mindre end WebP. For hjemmesider med hundredvis af billeder er besparelsen betydelig. WebP-fallback via <code>&lt;picture&gt;</code> dækker ældre browsere.',
    'Danske webshops, der optimerer Core Web Vitals, drager særlig fordel af AVIF. Lokal konvertering undgår cloud-upload.',
  ],
  'webp-to-gif': [
    'GIF-formatet er sommetider nødvendigt – ældre systemer, nyhedsbrevsværktøjer eller platforme, der kun accepterer GIF.',
    'GIF understøtter maks. 256 farver. Fotorealistiske billeder mister kvalitet. Konverteringen er mest egnet til simple grafik, ikoner eller logoer.',
    'Lokal behandling i browseren tilbyder et hurtigt og sikkert alternativ til cloudbaserede konverteringstjenester.',
  ],
  'webp-to-tiff': [
    'Professionelle trykworkflows kræver ofte TIFF. WebP til TIFF gør det muligt at forberede weboptimerede billeder til tryk.',
    'TIFF gemmer tabsfrit med fuld metadata-understøttelse. Detaljer tabt ved WebP-kompression gendannes ikke – for bedste kvalitet, start fra originalen.',
    'For bureauer og trykkerier i Danmark tilbyder lokal konvertering en sikker måde at forberede web-assets til trykprojekter.',
  ],
  'svg-to-jpg': [
    'SVG-vektorgrafik kan ikke bruges overalt: sociale medier, markedspladser og mange CMS\'er accepterer kun rasterformater. Konvertering til JPG skaber universelt kompatible filer.',
    'Rasterisering konverterer vektoren til pixels med fast opløsning. Gennemsigtige områder udfyldes med baggrundsfarve (standard hvid). For web anbefales 1200–2000 px bredde.',
    'For opslag på sociale medier og annoncer på DBA.dk, Proshop.dk eller Amazon er SVG til JPG et almindeligt krav.',
  ],
  'svg-to-png': [
    'SVG konverteres ofte til PNG for sociale medier, beskedtjenester og e-mailsignaturer – med bevarelse af gennemsigtighed og bred kompatibilitet.',
    'Rasterisering til PNG bevarer gennemsigtige områder fuldstændigt – ideel for logoer på forskellige baggrunde. Også fremragende til dokumentationsskærmbilleder og præsentationer.',
    'For bureauer, der leverer logoer i forskellige formater, er SVG til PNG et hurtigt og GDPR-kompatibelt workflow.',
  ],
  'svg-to-webp': [
    'For hjemmesider, der ikke kan integrere SVG direkte – CMS\'er med begrænset SVG-understøttelse – tilbyder WebP en kompakt pixelrepræsentation med minimal filstørrelse.',
    'WebP-filer fra SVG-kilder er typisk meget små (5–30 KB) og indlæses lynhurtigt. For ikoner og logoer er det den mest pragmatiske løsning, når SVG ikke kan bruges direkte.',
    'WordPress, DanDomain og mange andre CMS\'er i Danmark understøtter WebP native – konverteringen muliggør brug af vektorgrafik i disse miljøer.',
  ],
  'svg-to-avif': [
    'AVIF tilbyder den bedste kompression for rasteriseret vektorgrafik. For ydeevnekritiske hjemmesider er SVG til AVIF det optimale valg.',
    'AVIF-filer fra SVG-kilder er ekstremt kompakte (3–15 KB). Hver kilobyte tæller for Core Web Vitals: hurtigere indlæsning forbedrer LCP og Google-rangering.',
    'Webudviklere og SEO-specialister i Danmark bruger i stigende grad AVIF – lokal konvertering forenkler overgangen.',
  ],
  'svg-to-gif': [
    'GIF er sommetider nødvendigt for ikoner i ældre systemer, e-mailskabeloner eller fora. SVG til GIF skaber kompatible og lette filer.',
    'GIF begrænser til 256 farver. For enfarvede logoer er det tilstrækkeligt; for komplekse illustrationer med gradienter ikke. Gennemsigtighed kun binær.',
    'For nyhedsbrevsskabeloner og ældre webplatforme, der kun accepterer GIF, er det en hurtig lokal løsning.',
  ],
  'svg-to-tiff': [
    'Trykkerier har ofte brug for pixelbilleder i TIFF i stedet for vektorfiler. SVG til TIFF producerer højkvalitets tabsfrie filer til professionelt tryk.',
    'TIFF gemmer den rasteriserede grafik i højeste kvalitet med fuld farvedybde og metadata. For visitkort, flyers og plakater anbefales min. 300 DPI.',
    'Trykkerier i Danmark accepterer TIFF som standard pixelformat. Lokal konvertering beskytter fortrolige designs og brandlogoer.',
  ],
  'gif-to-jpg': [
    'Ældre GIF-billeder skal sommetider konverteres til JPG – for platforme, der kun accepterer JPEG, eller for at optimere filstørrelse til e-mail. Kun det første billede i en animeret GIF konverteres.',
    'JPG tilbyder fulde 16,7 millioner farver i stedet for GIF\'s 256-farvepalette. Fotos ved et uheld gemt som GIF drager fordel af fuld farvedybde.',
    'For arkivering af ældre grafik i et moderne, universelt format er lokal konvertering hurtig og GDPR-kompatibel.',
  ],
  'gif-to-png': [
    'Konvertering af GIF til PNG er nyttigt for tabsfri lagring eller redigering i grafiske programmer. PNG understøtter 32-bit farver og gradvis alfagennemsigtighed.',
    'For animerede GIF\'er konverteres kun det første billede. Kvaliteten bevares tabsfrit. PNG er ideel som mellemformat til Photoshop, Figma eller Canva.',
    'For modernisering af ældre webgrafik tilbyder lokal konvertering en hurtig og sikker løsning uden eksterne tjenester.',
  ],
  'gif-to-webp': [
    'WebP tilbyder væsentligt bedre kompression end GIF. Modernisering af ældre GIF\'er til WebP accelererer hjemmesider mærkbart.',
    'Statiske GIF-filer bliver som WebP typisk 30–60 % mindre med millioner af farver i stedet for 256, hvilket forbedrer den visuelle kvalitet markant.',
    'For optimering af ældre hjemmesider i Danmark er skiftet fra GIF til WebP en enkel måde at forbedre Core Web Vitals.',
  ],
  'gif-to-avif': [
    'AVIF overgår GIF på alle punkter: bedre kompression, millioner af farver, moderne animationsunderstøttelse. For modernisering af ældre webindhold er GIF til AVIF mest effektivt.',
    'AVIF-filer fra GIF-kilder er drastisk mindre og visuelt bedre. Ældre browsere understøtter endnu ikke AVIF – en fallback via <code>&lt;picture&gt;</code> anbefales.',
    'For at maksimere indlæsningstider tilbyder skiftet fra GIF til AVIF den største individuelle gevinst af alle formatskift.',
  ],
  'tiff-to-jpg': [
    'TIFF-filer fra professionel fotografi eller scannere fylder ofte 20–100 MB. Konvertering til JPG skaber kompakte filer til web, e-mail og sociale medier – typisk reduktion over 95 %.',
    'Gennemsigtighed og laginfo går tabt. For ren fotografi er det uproblematisk. Ved kvalitet 85–90 % forbliver kvaliteten fremragende med filstørrelser på få hundrede KB.',
    'Fotografer og scannerbrugere i Danmark kan konvertere TIFF lokalt og GDPR-kompatibelt til JPG klar til afsendelse.',
  ],
  'tiff-to-png': [
    'Når TIFF-filer er nødvendige for redigering i grafiske programmer eller hjemmesider med gennemsigtighed, er PNG det egnede format – tabsfrit og universelt kompatibelt.',
    'PNG bevarer fuld kvalitet og gennemsigtighed fra TIFF-originalen. Filerne er mindre end TIFF men større end JPEG/WebP. For Figma, Canva eller Photoshop er PNG ideel.',
    'For forberedelse af scanneroutput og arkivbilleder til online brug tilbyder lokal konvertering et sikkert og hurtigt workflow.',
  ],
  'tiff-to-webp': [
    'TIFF til WebP opnår den største reduktion: filer på 20–100 MB krymper ofte til 200 KB – 2 MB. For publicering af professionelle fotos på web er det mest effektivt.',
    'Ved kvalitet 80–85 % bevarer WebP fremragende visuel kvalitet. For fotogallerier, portfolios og onlinemagasiner: professionel kvalitet til en brøkdel af originalstørrelsen.',
    'Fotografer og bureauer i Danmark kan konvertere højopløselige shoots lokalt til weboptimerede formater – uden cloud, GDPR-kompatibelt.',
  ],
  'tiff-to-avif': [
    'AVIF tilbyder den mest effektive kompression for store TIFF-filer. Professionelle fotos og scans reduceres drastisk med minimalt kvalitetstab.',
    'For fotogallerier og portfoliohjemmesider, der søger de bedste indlæsningstider, er TIFF til AVIF det optimale workflow. Chrome, Firefox og Safari 16+ understøtter AVIF.',
    'Professionelle fotografer i Danmark drager fordel af lokal behandling: kundefotos i høj opløsning optimeres sikkert og GDPR-kompatibelt.',
  ],
  'bmp-to-jpg': [
    'BMP-filer stammer ofte fra ældre Windows-applikationer eller scannere. Ukomprimerede og meget store – konvertering til JPG reducerer størrelsen med over 95 %.',
    'Et BMP-skærmbillede på 10 MB bliver som JPG typisk kun 200–400 KB. For e-mail, dokumentation og arkivering er det den enkleste måde at spare plads.',
    'For migrering af ældre billedarkiver og forberedelse af scanneroutput tilbyder lokal konvertering en hurtig og GDPR-kompatibel løsning.',
  ],
  'bmp-to-png': [
    'BMP til PNG reducerer størrelsen via tabsfri kompression – fuld kvalitet bevares. Ideel for grafik med skarpe kanter, tekst eller skærmbilleder.',
    'I modsætning til JPG bevarer PNG den præcise pixelkvalitet uden artefakter. For teknisk dokumentation og skærmbilleder med tekst er PNG det bedre valg.',
    'Lokal konvertering er velegnet til fortrolige dokumenter og interne skærmbilleder – intet sendes til en ekstern server.',
  ],
  'bmp-to-webp': [
    'BMP er fuldstændig uegnet til moderne web – ukomprimeret og enormt. WebP reducerer størrelsen med op til 97 % ved god kvalitet og moderniserer ældre billeder.',
    'Konverteringen moderniserer gamle filer fra Windows-systemer til aktuelle hjemmesider, CMS\'er og webshops. WebP understøttes af alle moderne browsere.',
    'For danske virksomheder, der forbereder ældre arkiver til deres webpræsence, er lokal konvertering effektiv og GDPR-kompatibel.',
  ],
  'bmp-to-avif': [
    'AVIF tilbyder den bedst mulige kompression for ukomprimerede BMP-filer: reduktioner på over 98 % er realistiske.',
    'AVIF understøtter HDR, brede farverum og farvedybde op til 12 bit – den originale kvalitet bevares optimalt. Chrome, Firefox og Safari 16+ understøtter AVIF native.',
    'Lokal konvertering i browseren muliggør migrering af komplette billedarkiver uden cloudtjenester – hurtigt, sikkert og GDPR-kompatibelt.',
  ],
  'bmp-to-gif': [
    'BMP til GIF er nyttigt for systemer, der kun accepterer GIF, eller simple grafik med få farver, hvor GIF er mere kompakt.',
    'GIF understøtter maks. 256 farver. Fotorealistiske billeder mister betydelig kvalitet. For fotos er JPG eller WebP bedre. GIF egner sig kun til simpel grafik.',
    'For kompatibilitetskrav fra ældre systemer tilbyder lokal konvertering en hurtig og sikker løsning.',
  ],
  'bmp-to-tiff': [
    'BMP til TIFF er nyttigt for professionel metadata-understøttelse – arkivering, trykforberedelse eller behandling i professionel software.',
    'TIFF bevarer fuld kvalitet og tilføjer: EXIF-metadata, CMYK-farverum og lagunderstøttelse. For langtidsarkivering er TIFF klart overlegen i forhold til BMP.',
    'Arkiver, biblioteker og danske virksomheder, der digitaliserer ældre samlinger, drager fordel af lokal konvertering uden cloud-afhængighed.',
  ],
  'avif-to-jpg': [
    'AVIF understøttes endnu ikke af ældre enheder, billedredigeringssoftware og visse platforme. Konvertering til JPG sikrer maksimal kompatibilitet.',
    'Ved kvalitet 85–90 % er kvaliteten næsten identisk med AVIF-originalen. Nyttigt for e-mail til modtagere med ældre systemer eller tryktjenester, der kun accepterer JPEG.',
    'For virksomheder, der har brug for både weboptimerede (AVIF) og universelle (JPG) billeder, er lokal konvertering et effektivt workflow.',
  ],
  'avif-to-png': [
    'AVIF-billeder med gennemsigtighed skal sommetider konverteres til PNG – for grafiske programmer eller platforme uden AVIF-understøttelse.',
    'PNG bevarer gennemsigtighed og kvalitet tabsfrit. Filerne er større end AVIF men egnede til Photoshop, Figma, Canva og tryk.',
    'Grafiske designere i Danmark bruger lokal konvertering til sikker forberedelse af AVIF-assets til forskellige outputkanaler – GDPR-kompatibelt.',
  ],
  'avif-to-webp': [
    'WebP tilbyder bredere browserunderstøttelse end AVIF (Safari 14+ vs. 16+) ved god kompression. Hvis dit publikum bruger ældre browsere, er WebP det sikrere valg.',
    'AVIF til WebP er relevant for CMS\'er og CDN\'er uden AVIF-understøttelse. WebP understøttes native af WordPress, Shopify, Cloudflare og alle moderne browsere.',
    'For webprojekter i Danmark, der kræver maksimal browserdækning, er WebP stadig det mest pålidelige moderne format.',
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
  const block = data.contentBlocks.find(b => b.type === 'sectionInfo' && !b.html.includes('<table') && (b.title.includes('praksis') || b.title.includes('i praksis')));
  if (!block) { skipped++; continue; }
  block.html = `<p class="text-mid mb-4">${p1}</p><p class="text-mid mb-4">${p2}</p><p class="text-mid">${p3}</p>`;
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  updated++;
}
console.log(`DA sectionInfo: Updated: ${updated}, Skipped: ${skipped}`);
