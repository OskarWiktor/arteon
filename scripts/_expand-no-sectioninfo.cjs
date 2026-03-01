/**
 * Differentiate "in practice" sectionInfo in NO converter files.
 */
const fs = require('fs');
const path = require('path');
const TOOLS = path.join(__dirname, '..', 'data', 'no', 'tools');

const P = {
  'png-to-webp': [
    'Norske webdesignere og nettbutikkeiere bruker PNG til logoer, produktutklipp og UI-elementer med gjennomsiktighet. Ved overgang til WebP beholdes gjennomsiktigheten fullt ut, mens filstørrelsen synker med 25–35 % – en direkte gevinst for lastetider og Core Web Vitals.',
    'Grafikk med store ensartede fargeflater (logoer, ikoner) drar størst nytte: filer på 200–500 KB krymper ofte til under 100 KB. For produktbilder på Finn.no, Komplett.no, Amazon eller Shopify-butikker betyr dette raskere kategorisider og bedre mobilopplevelse.',
    'All behandling skjer lokalt i nettleseren – ideelt for byråer og bedrifter som må overholde GDPR. Produktbilder og kundegrafikk forlater aldri enheten din.',
  ],
  'png-to-jpg': [
    'PNG-filer med gjennomsiktighet fyller ofte flere megabyte. Når gjennomsiktighet ikke trengs – CV-bilder, dokumentskanninger eller innlegg på sosiale medier – reduserer konvertering til JPG filstørrelsen drastisk.',
    'Mange plattformer som Finn.no, LinkedIn eller jobbportaler godtar kun JPG. E-postvedlegg drar også nytte: et PNG-skjermskudd på 3 MB blir som JPG bare 200–400 KB. Kvalitet på 85 % gir best kompromiss.',
    'For søknadsdokumenter og fortrolige filer er lokal behandling avgjørende – filene dine forlater aldri enheten. Fullt GDPR-kompatibelt.',
  ],
  'png-to-avif': [
    'AVIF er det mest effektive bildeformatet i nåværende generasjon og kan redusere PNG-filer med opptil 50 %. For ytelseskritiske webprosjekter er PNG til AVIF den optimale konverteringen.',
    'AVIF støtter gjennomsiktighet, HDR og fargedybde opptil 12 bit per kanal. Chrome, Firefox og Safari 16+ støtter AVIF nativt. For eldre nettlesere anbefales fallback via <code>&lt;picture&gt;</code>.',
    'Norske bedrifter som ønsker å optimalisere PageSpeed-resultater drar spesielt nytte: AVIF forbedrer Largest Contentful Paint (LCP) målbart. Lokal behandling sikrer GDPR-overholdelse.',
  ],
  'png-to-gif': [
    'Enkel grafikk som ikoner, logoer eller diagrammer med begrenset fargepalett lagres mer kompakt som GIF. Konverteringen er nyttig når målplattformen krever GIF-format.',
    'GIF støtter maksimalt 256 farger. Fotorealistiske PNG-bilder mister synlig kvalitet. Gjennomsiktighet støttes kun binært (synlig/usynlig), ikke som gradvis alfakanal.',
    'For presentasjoner, nyhetsbrevgrafikk eller systemer som kun godtar GIF, er dette en rask løsning – helt lokalt og uten filopplasting.',
  ],
  'png-to-tiff': [
    'Trykkerier, forlag og arkivsystemer krever ofte TIFF i stedet for PNG. Konverteringen bevarer full kvalitet, gjennomsiktighet og legger til profesjonell metadata-støtte.',
    'TIFF-filer er større enn PNG, men tilbyr fordeler for profesjonelle arbeidsflyter: lagstøtte i Photoshop, CMYK-fargerom for trykk og komplett metadata. TIFF er industristandard for langtidsarkivering.',
    'Trykkerier i Norge arbeider ofte med TIFF. Lokal konvertering gjør det mulig å behandle fortrolige design uten sky-opplasting.',
  ],
  'jpg-to-webp': [
    'JPEG er standardformatet for digitale bilder, men for nettsider er filstørrelsene ofte for høye. WebP komprimerer JPEG-bilder 25–35 % ekstra uten synlig kvalitetstap, og forbedrer lastetider direkte.',
    'For nettbutikker på Shopify, WooCommerce eller Magento betyr overgangen fra JPG til WebP målbart raskere produktsider. Google PageSpeed anbefaler WebP som neste generasjons format. Ved kvalitet 80–85 % er forskjellen visuelt umerkelig.',
    'I Norge, hvor strenge GDPR-regler gjelder, er lokal bildebehandling i nettleseren spesielt verdifullt. Produktbilder forlater ikke enheten din.',
  ],
  'jpg-to-png': [
    'Noen ganger må et JPEG-bilde konverteres til et format som støtter gjennomsiktighet eller tapsfri lagring – f.eks. for redigering i Photoshop, Figma eller Canva.',
    'Konvertering fra JPG til PNG gjenoppretter ikke detaljer tapt ved JPEG-komprimering, men forhindrer ytterligere tap ved fremtidige redigeringer. PNG er ideelt når bildet brukes som base for collager eller trykklayouter.',
    'For grafiske designere og byråer i Norge er lokal behandling ideelt: kundemateriale forblir på din egen datamaskin.',
  ],
  'jpg-to-avif': [
    'AVIF oppnår opptil 50 % bedre komprimering enn JPEG ved sammenlignbar visuell kvalitet. For nettsider med mange bilder – eiendomsportaler, nettmagasiner, reisesider – reduseres lastetidene betydelig.',
    'Plattformer som Finn.no, Booking.com eller Prisjakt.no tar i bruk AVIF for bedre mobilopplevelse. Chrome, Firefox og Safari 16+ støtter AVIF nativt.',
    'Lokal konvertering i nettleseren beskytter bildene dine: eiendomsbilder, produktbilder eller portretter – ingenting lastes opp. Fullt GDPR-kompatibelt.',
  ],
  'jpg-to-gif': [
    'Konvertering av JPG til GIF er nyttig når et bilde trengs som enkel grafikk – miniatyrbilder i eldre systemer eller nyhetsbrev som kun støtter GIF.',
    'GIF begrenser fargepaletten til 256 farger, noe som gir synlig kvalitetstap på bilder. For de fleste formål er WebP eller PNG bedre valg.',
    'Hvis arbeidsflyten din utelukkende krever GIF, tilbyr lokal konvertering en rask og GDPR-kompatibel løsning.',
  ],
  'jpg-to-tiff': [
    'Profesjonelle trykkerier og bildebyråer krever ofte TIFF i stedet for JPEG. Konverteringen bevarer nåværende kvalitet og lagrer den tapsfritt.',
    'Detaljer tapt ved JPEG-komprimering gjenopprettes ikke, men TIFF forhindrer ytterligere tap. Støtter CMYK, lag og utvidede metadata – ideelt for profesjonelle trykkearbeidsflyter.',
    'Fotografer og byråer i Norge drar nytte av lokal behandling: kundebilder og trykkfiler forblir på enheten din.',
  ],
  'heic-to-jpg': [
    'iPhone-brukere kjenner problemet: HEIC-bilder kan ikke åpnes overalt. Windows-PCer, Android-enheter, mange nettskjemaer og e-postklienter støtter ikke HEIC. Konvertering til JPG løser dette kompatibilitetsproblemet umiddelbart.',
    'Ved kvalitet 85–90 % er forskjellen mellom HEIC-originalen og JPG-resultatet visuelt nesten umerkelig. Filstørrelsen forblir sammenlignbar. Spesielt praktisk: konverter flere iPhone-bilder samtidig.',
    'For CV-bilder, ID-skanninger eller personlige dokumenter er lokal behandling avgjørende – sensitive data forlater aldri enheten din.',
  ],
  'heic-to-png': [
    'Vil du gjenbruke iPhone-bilder tapsfritt – som base i Photoshop, Figma eller til trykk – er PNG det ideelle målformatet.',
    'PNG støtter gjennomsiktighet og tapsfri lagring i motsetning til JPG. PNG-filer er imidlertid vesentlig større. For redigering er det ingen ulempe – for nettbruk anbefales konvertering til WebP etterpå.',
    'Kreative byråer og fotografer drar nytte av lokal behandling: iPhone-bilder fra kunder forblir fortrolige på din egen datamaskin.',
  ],
  'heic-to-webp': [
    'iPhone-bilder i HEIC-format direkte til nettsider? WebP er den ideelle broen: det kombinerer HEICs effektive komprimering med universell nettleserkompatibilitet (Chrome, Firefox, Safari 14+, Edge).',
    'Konvertering fra HEIC til WebP er spesielt effektiv da begge formatene bruker moderne komprimeringsalgoritmer. For blogger, nettbutikker og porteføljer er dette den raskeste veien til weboptimaliserte iPhone-bilder.',
    'Norske bloggere og nettbutikkeiere kan konvertere iPhone-bilder lokalt og GDPR-kompatibelt – uten skytjenester.',
  ],
  'heic-to-avif': [
    'AVIF tilbyr komprimeringseffektivitet tilsvarende HEIC, men som åpent format er det ikke bundet til Apples økosystem. HEIC til AVIF muliggjør den mest moderne komprimering med bred plattformstøtte.',
    'Chrome, Firefox og Safari 16+ støtter AVIF nativt. For ytelseskritiske prosjekter – fotogallerier, porteføljer, eiendomsportaler – tilbyr AVIF den beste balansen.',
    'Lokal konvertering er spesielt relevant for fotografer: iPhone-fotograferinger konverteres direkte til det mest effektive nettformatet – uten sky.',
  ],
  'heic-to-tiff': [
    'Profesjonelle fotografer som jobber med iPhones trenger ofte TIFF for etterbehandling i Lightroom, Capture One eller Photoshop.',
    'TIFF støtter 16-bit fargedybde, lag og utvidede EXIF/IPTC-metadata. For trykk, arkivering og profesjonell retusjering er TIFF det foretrukne formatet.',
    'I Norge, hvor trykkerier og bildebyråer krever TIFF som standard, tilbyr lokal konvertering en sikker arbeidsflyt for fortrolige fotograferinger.',
  ],
  'webp-to-jpg': [
    'WebP er optimalt for nett, men trykktjenester, Microsoft Office, eldre programvare og noen sosiale medier krever JPG.',
    'WebP til JPG sikrer maksimal kompatibilitet. Ved kvalitet 85–90 % er kvaliteten nesten identisk. Praktisk for å sende bilder til mottakere som ikke kan åpne WebP.',
    'For byråer som må levere bilder i universelle formater er lokal konvertering ideelt – raskt, sikkert og GDPR-kompatibelt.',
  ],
  'webp-to-png': [
    'WebP-bilder med gjennomsiktighet må noen ganger konverteres til PNG – for grafiske programmer uten WebP-støtte eller trykkfiler som krever tapsfri kvalitet.',
    'Konverteringen bevarer gjennomsiktighet og kvalitet fullstendig. PNG er større men bedre egnet til Photoshop, Illustrator og plattformer uten WebP-støtte.',
    'Grafiske designere i Norge kan lokalt konvertere WebP-assets til trykkklare PNG-filer – uten sky og fullt GDPR-kompatibelt.',
  ],
  'webp-to-avif': [
    'AVIF tilbyr enda bedre komprimering enn WebP – neste logiske steg for nettsider som vil optimalisere lastetider ytterligere.',
    'Ved sammenlignbar kvalitet er AVIF-filer 20–30 % mindre enn WebP. For nettsider med hundrevis av bilder er besparelsen betydelig. WebP-fallback via <code>&lt;picture&gt;</code> dekker eldre nettlesere.',
    'Norske nettbutikker som optimaliserer Core Web Vitals drar spesielt nytte av AVIF. Lokal konvertering unngår sky-opplasting.',
  ],
  'webp-to-gif': [
    'GIF-formatet trengs noen ganger – eldre systemer, nyhetsbrevverktøy eller plattformer som kun godtar GIF.',
    'GIF støtter maks 256 farger. Fotorealistiske bilder mister kvalitet. Konverteringen egner seg best for enkel grafikk, ikoner eller logoer.',
    'Lokal behandling i nettleseren tilbyr et raskt og sikkert alternativ til skybaserte konverteringstjenester.',
  ],
  'webp-to-tiff': [
    'Profesjonelle trykkearbeidsflyter krever ofte TIFF. WebP til TIFF gjør det mulig å forberede weboptimaliserte bilder for trykk.',
    'TIFF lagrer tapsfritt med full metadata-støtte. Detaljer tapt ved WebP-komprimering gjenopprettes ikke – for best kvalitet, start fra originalen.',
    'For byråer og trykkerier i Norge tilbyr lokal konvertering en sikker måte å forberede web-assets for trykkprosjekter.',
  ],
  'svg-to-jpg': [
    'SVG-vektorgrafikk kan ikke brukes overalt: sosiale medier, markedsplasser og mange CMSer godtar kun rasterformater. Konvertering til JPG skaper universelt kompatible filer.',
    'Rasterisering konverterer vektoren til piksler med fast oppløsning. Gjennomsiktige områder fylles med bakgrunnsfarge (standard hvit). For nettbruk anbefales 1200–2000 px bredde.',
    'For innlegg på sosiale medier og annonser på Finn.no, Komplett.no eller Amazon er SVG til JPG et vanlig krav.',
  ],
  'svg-to-png': [
    'SVG konverteres ofte til PNG for sosiale medier, meldingstjenester og e-postsignaturer – med bevaring av gjennomsiktighet og bred kompatibilitet.',
    'Rasterisering til PNG bevarer gjennomsiktige områder fullstendig – ideelt for logoer på ulike bakgrunner. Også utmerket for dokumentasjonsskjermbilder og presentasjoner.',
    'For byråer som leverer logoer i ulike formater er SVG til PNG en rask og GDPR-kompatibel arbeidsflyt.',
  ],
  'svg-to-webp': [
    'For nettsider som ikke kan integrere SVG direkte – CMSer med begrenset SVG-støtte – tilbyr WebP en kompakt pikselrepresentasjon med minimal filstørrelse.',
    'WebP-filer fra SVG-kilder er typisk svært små (5–30 KB) og laster lynraskt. For ikoner og logoer er dette den mest pragmatiske løsningen når SVG ikke kan brukes direkte.',
    'WordPress og mange andre CMSer i Norge støtter WebP nativt – konverteringen muliggjør bruk av vektorgrafikk i disse miljøene.',
  ],
  'svg-to-avif': [
    'AVIF tilbyr den beste komprimering for rasterisert vektorgrafikk. For ytelseskritiske nettsider er SVG til AVIF det optimale valget.',
    'AVIF-filer fra SVG-kilder er ekstremt kompakte (3–15 KB). Hver kilobyte teller for Core Web Vitals: raskere lasting forbedrer LCP og Google-rangering.',
    'Norske webutviklere og SEO-spesialister bruker AVIF i økende grad – lokal konvertering forenkler overgangen.',
  ],
  'svg-to-gif': [
    'GIF trengs noen ganger for ikoner i eldre systemer, e-postmaler eller forum. SVG til GIF skaper kompatible og lette filer.',
    'GIF begrenser til 256 farger. For enfargede logoer er det tilstrekkelig; for komplekse illustrasjoner med gradienter ikke. Gjennomsiktighet kun binær.',
    'For nyhetsbrevmaler og eldre nettplattformer som kun godtar GIF er dette en rask lokal løsning.',
  ],
  'svg-to-tiff': [
    'Trykkerier trenger ofte pikselbilder i TIFF i stedet for vektorfiler. SVG til TIFF produserer høykvalitets tapsfrie filer for profesjonelt trykk.',
    'TIFF lagrer rasterisert grafikk i høyeste kvalitet med full fargedybde og metadata. For visittkort, flyere og plakater anbefales min. 300 DPI.',
    'Trykkerier i Norge godtar TIFF som standard pikselformat. Lokal konvertering beskytter fortrolige design og merkevarelogoer.',
  ],
  'gif-to-jpg': [
    'Eldre GIF-bilder må noen ganger konverteres til JPG – for plattformer som kun godtar JPEG eller for å optimalisere filstørrelse for e-post. Kun første bilde i en animert GIF konverteres.',
    'JPG tilbyr fulle 16,7 millioner farger i stedet for GIFs 256-fargepalett. Bilder ved et uhell lagret som GIF drar nytte av full fargedybde.',
    'For arkivering av eldre grafikk i et moderne, universelt format er lokal konvertering rask og GDPR-kompatibel.',
  ],
  'gif-to-png': [
    'Konvertering av GIF til PNG er nyttig for tapsfri lagring eller redigering i grafiske programmer. PNG støtter 32-bit farger og gradvis alfa-gjennomsiktighet.',
    'For animerte GIFer konverteres kun første bilde. Kvaliteten bevares tapsfritt. PNG er ideelt som mellomformat til Photoshop, Figma eller Canva.',
    'For modernisering av eldre nettgrafikk tilbyr lokal konvertering en rask og sikker løsning uten eksterne tjenester.',
  ],
  'gif-to-webp': [
    'WebP tilbyr vesentlig bedre komprimering enn GIF. Modernisering av eldre GIFer til WebP akselererer nettsider merkbart.',
    'Statiske GIF-filer blir som WebP typisk 30–60 % mindre med millioner av farger i stedet for 256, noe som forbedrer visuell kvalitet markant.',
    'For optimalisering av eldre norske nettsider er overgangen fra GIF til WebP en enkel måte å forbedre Core Web Vitals.',
  ],
  'gif-to-avif': [
    'AVIF overgår GIF på alle punkter: bedre komprimering, millioner av farger, moderne animasjonsstøtte. For modernisering av eldre nettinnhold er GIF til AVIF mest effektivt.',
    'AVIF-filer fra GIF-kilder er drastisk mindre og visuelt bedre. Eldre nettlesere støtter ennå ikke AVIF – en fallback via <code>&lt;picture&gt;</code> anbefales.',
    'For å maksimere lastetider tilbyr overgangen fra GIF til AVIF den største enkeltgevinsten av alle formatendringer.',
  ],
  'tiff-to-jpg': [
    'TIFF-filer fra profesjonell fotografering eller skannere fyller ofte 20–100 MB. Konvertering til JPG skaper kompakte filer – typisk reduksjon over 95 %.',
    'Gjennomsiktighet og laginfo går tapt. For ren fotografering er det uproblematisk. Ved kvalitet 85–90 % forblir kvaliteten utmerket med filstørrelser på noen hundre KB.',
    'Fotografer og skannerbrukere i Norge kan konvertere TIFF lokalt og GDPR-kompatibelt til JPG klare for sending.',
  ],
  'tiff-to-png': [
    'Når TIFF-filer trengs for redigering i grafiske programmer eller nettsider med gjennomsiktighet, er PNG det egnede formatet – tapsfritt og universelt kompatibelt.',
    'PNG bevarer full kvalitet og gjennomsiktighet fra TIFF-originalen. Filene er mindre enn TIFF men større enn JPEG/WebP. For Figma, Canva eller Photoshop er PNG ideelt.',
    'For forberedelse av skannerutdata og arkivbilder til nettbruk tilbyr lokal konvertering en sikker og rask arbeidsflyt.',
  ],
  'tiff-to-webp': [
    'TIFF til WebP oppnår den største reduksjonen: filer på 20–100 MB krymper ofte til 200 KB – 2 MB. For publisering av profesjonelle bilder på nett er dette mest effektivt.',
    'Ved kvalitet 80–85 % bevarer WebP utmerket visuell kvalitet. For fotogallerier, porteføljer og nettmagasiner: profesjonell kvalitet til en brøkdel av originalstørrelsen.',
    'Fotografer og byråer i Norge kan konvertere høyoppløselige fotograferinger lokalt til weboptimaliserte formater – uten sky, GDPR-kompatibelt.',
  ],
  'tiff-to-avif': [
    'AVIF tilbyr den mest effektive komprimering for store TIFF-filer. Profesjonelle bilder og skanninger reduseres drastisk med minimalt kvalitetstap.',
    'For fotogallerier og porteføljesider som søker de beste lastetidene er TIFF til AVIF den optimale arbeidsflyten. Chrome, Firefox og Safari 16+ støtter AVIF.',
    'Profesjonelle fotografer i Norge drar nytte av lokal behandling: kundebilder i høy oppløsning optimaliseres sikkert og GDPR-kompatibelt.',
  ],
  'bmp-to-jpg': [
    'BMP-filer stammer ofte fra eldre Windows-applikasjoner eller skannere. Ukomprimerte og svært store – konvertering til JPG reduserer størrelsen med over 95 %.',
    'Et BMP-skjermskudd på 10 MB blir som JPG typisk bare 200–400 KB. For e-post, dokumentasjon og arkivering er dette den enkleste måten å spare plass.',
    'For migrering av eldre bildearkiver og forberedelse av skannerutdata tilbyr lokal konvertering en rask og GDPR-kompatibel løsning.',
  ],
  'bmp-to-png': [
    'BMP til PNG reduserer størrelsen via tapsfri komprimering – full kvalitet bevares. Ideelt for grafikk med skarpe kanter, tekst eller skjermbilder.',
    'I motsetning til JPG bevarer PNG den nøyaktige pikselkvaliteten uten artefakter. For teknisk dokumentasjon og skjermbilder med tekst er PNG det bedre valget.',
    'Lokal konvertering er velegnet for fortrolige dokumenter og interne skjermbilder – ingenting sendes til en ekstern server.',
  ],
  'bmp-to-webp': [
    'BMP er fullstendig uegnet for moderne nettbruk – ukomprimert og enormt. WebP reduserer størrelsen med opptil 97 % ved god kvalitet og moderniserer eldre bilder.',
    'Konverteringen moderniserer gamle filer fra Windows-systemer til aktuelle nettsider, CMSer og nettbutikker. WebP støttes av alle moderne nettlesere.',
    'For norske bedrifter som forbereder eldre arkiver for nettilstedeværelse er lokal konvertering effektiv og GDPR-kompatibel.',
  ],
  'bmp-to-avif': [
    'AVIF tilbyr den best mulige komprimering for ukomprimerte BMP-filer: reduksjoner på over 98 % er realistiske.',
    'AVIF støtter HDR, brede fargerom og fargedybde opptil 12 bit – original kvalitet bevares optimalt. Chrome, Firefox og Safari 16+ støtter AVIF nativt.',
    'Lokal konvertering i nettleseren muliggjør migrering av komplette bildearkiver uten skytjenester – raskt, sikkert og GDPR-kompatibelt.',
  ],
  'bmp-to-gif': [
    'BMP til GIF er nyttig for systemer som kun godtar GIF eller enkel grafikk med få farger hvor GIF er mer kompakt.',
    'GIF støtter maks 256 farger. Fotorealistiske bilder mister betydelig kvalitet. For bilder er JPG eller WebP bedre. GIF egner seg kun for enkel grafikk.',
    'For kompatibilitetskrav fra eldre systemer tilbyr lokal konvertering en rask og sikker løsning.',
  ],
  'bmp-to-tiff': [
    'BMP til TIFF er nyttig for profesjonell metadata-støtte – arkivering, trykkforberedelse eller behandling i profesjonell programvare.',
    'TIFF bevarer full kvalitet og legger til: EXIF-metadata, CMYK-fargerom og lagstøtte. For langtidsarkivering er TIFF klart overlegen BMP.',
    'Arkiver, biblioteker og norske bedrifter som digitaliserer eldre samlinger drar nytte av lokal konvertering uten skyavhengighet.',
  ],
  'avif-to-jpg': [
    'AVIF støttes ennå ikke av eldre enheter, bilderedigeringsprogramvare og visse plattformer. Konvertering til JPG sikrer maksimal kompatibilitet.',
    'Ved kvalitet 85–90 % er kvaliteten nesten identisk med AVIF-originalen. Nyttig for e-post til mottakere med eldre systemer eller trykktjenester som kun godtar JPEG.',
    'For bedrifter som trenger både weboptimaliserte (AVIF) og universelle (JPG) bilder er lokal konvertering en effektiv arbeidsflyt.',
  ],
  'avif-to-png': [
    'AVIF-bilder med gjennomsiktighet må noen ganger konverteres til PNG – for grafiske programmer eller plattformer uten AVIF-støtte.',
    'PNG bevarer gjennomsiktighet og kvalitet tapsfritt. Filene er større enn AVIF men egnet til Photoshop, Figma, Canva og trykk.',
    'Grafiske designere i Norge bruker lokal konvertering til sikker forberedelse av AVIF-assets for ulike utgangskanaler – GDPR-kompatibelt.',
  ],
  'avif-to-webp': [
    'WebP tilbyr bredere nettleserstøtte enn AVIF (Safari 14+ vs. 16+) ved god komprimering. Hvis målgruppen bruker eldre nettlesere er WebP det tryggere valget.',
    'AVIF til WebP er relevant for CMSer og CDNer uten AVIF-støtte. WebP støttes nativt av WordPress, Shopify, Cloudflare og alle moderne nettlesere.',
    'For norske webprosjekter som trenger maksimal nettleserdekning er WebP fortsatt det mest pålitelige moderne formatet.',
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
console.log(`NO sectionInfo: Updated: ${updated}, Skipped: ${skipped}`);
