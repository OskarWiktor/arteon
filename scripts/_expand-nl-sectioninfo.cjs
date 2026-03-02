/**
 * Differentiate "in practice" sectionInfo in NL converter files.
 */
const fs = require('fs');
const path = require('path');
const TOOLS = path.join(__dirname, '..', 'data', 'nl', 'tools');

const P = {
  'png-to-webp': [
    "Webdesigners en webshophouders in Nederland en België gebruiken PNG voor logo's, productfreistellers en UI-elementen met transparantie. Bij de overstap naar WebP blijft de transparantie volledig behouden, terwijl de bestandsgrootte met 25–35% afneemt – een direct voordeel voor laadtijden en Core Web Vitals.",
    "Afbeeldingen met grote effen vlakken (logo's, iconen) profiteren het meest: bestanden van 200–500 KB krimpen vaak tot onder de 100 KB. Voor productfoto's op Bol.com, Marktplaats, Amazon.nl of Shopify-winkels betekent dit snellere categoriepagina's en een betere mobiele ervaring.",
    'De volledige verwerking vindt lokaal in uw browser plaats – ideaal voor bureaus en bedrijven die AVG/GDPR-conform moeten werken. Productafbeeldingen of klantgrafiek verlaten nooit uw apparaat.',
  ],
  'png-to-jpg': [
    "PNG-bestanden met transparantie zijn vaak meerdere megabytes groot. Wanneer transparantie niet nodig is – sollicitatiefoto's, documentscans of social-mediaposts – reduceert de conversie naar JPG de bestandsgrootte drastisch.",
    'Veel platforms zoals LinkedIn, Indeed of vacatureportals accepteren uitsluitend JPG. Ook e-mailbijlagen profiteren: een PNG-screenshot van 3 MB wordt als JPG vaak slechts 200–400 KB. De kwaliteitsinstelling van 85% biedt het beste compromis.',
    'Voor sollicitatiedocumenten en vertrouwelijke bestanden is lokale verwerking essentieel – uw bestanden verlaten nooit uw apparaat. Volledig AVG-conform.',
  ],
  'png-to-avif': [
    'AVIF is het meest efficiënte beeldformaat van de huidige generatie en kan PNG-bestanden tot 50% verkleinen. Voor prestatiekritische webprojecten waar elke kilobyte telt, is PNG-naar-AVIF de optimale conversie.',
    'AVIF ondersteunt transparantie, HDR en een kleurdiepte tot 12 bit per kanaal. Chrome, Firefox en Safari 16+ ondersteunen AVIF native. Voor oudere browsers is een fallback via <code>&lt;picture&gt;</code> met PNG of WebP aanbevolen.',
    'Nederlandse en Belgische bedrijven die hun PageSpeed-scores willen optimaliseren, profiteren bijzonder: AVIF verbetert de Largest Contentful Paint (LCP) meetbaar. Lokale verwerking garandeert AVG-conformiteit.',
  ],
  'png-to-gif': [
    "Eenvoudige afbeeldingen zoals iconen, logo's of diagrammen met een beperkt kleurenpalet worden als GIF compacter opgeslagen dan als PNG. De conversie is nuttig wanneer het doelformaat GIF voorgeschreven is.",
    'GIF ondersteunt maximaal 256 kleuren. Fotorealistische PNG-afbeeldingen verliezen zichtbaar aan kwaliteit. Transparantie wordt alleen binair ondersteund (zichtbaar/onzichtbaar), niet als geleidelijk alfakanaal zoals bij PNG.',
    'Voor presentaties, nieuwsbriefgrafiek of systemen die uitsluitend GIF accepteren, is deze conversie een snelle oplossing – volledig lokaal en zonder bestandsupload.',
  ],
  'png-to-tiff': [
    'Drukkerijen, uitgeverijen en archiveringssystemen eisen vaak TIFF in plaats van PNG. De conversie behoudt de volledige beeldkwaliteit en transparantie en voegt professionele metadata-ondersteuning toe.',
    'TIFF-bestanden zijn groter dan PNG, maar bieden voordelen voor professionele workflows: laagondersteuning in Photoshop, CMYK-kleurruimten voor drukwerk en uitgebreide metadata. TIFF is de industriestandaard voor langetermijnarchivering.',
    'Drukkerijen in Nederland en België werken vaak met TIFF. Lokale conversie maakt het verwerken van vertrouwelijke ontwerpen mogelijk zonder cloud-upload.',
  ],
  'jpg-to-webp': [
    "JPEG is het standaardformaat voor digitale foto's, maar voor websites zijn de bestandsgroottes vaak te hoog. WebP comprimeert JPEG-afbeeldingen 25–35% extra zonder zichtbaar kwaliteitsverlies, waardoor laadtijden en Core Web Vitals direct verbeteren.",
    "Voor webshops op Shopify, WooCommerce of Lightspeed betekent de overstap van JPG naar WebP meetbaar snellere productpagina's. Google PageSpeed Insights beveelt WebP expliciet aan als next-gen formaat. Bij kwaliteitsniveau 80–85% is het verschil visueel niet waarneembaar.",
    "In Nederland en België, waar strikte privacyregels gelden, is lokale beeldverwerking in de browser bijzonder waardevol. Productfoto's en klantbeelden verlaten uw apparaat niet.",
  ],
  'jpg-to-png': [
    'Soms moet een JPEG-afbeelding worden geconverteerd naar een formaat met transparantie-ondersteuning of verliesvrije opslag – bijvoorbeeld voor verdere bewerking in Photoshop, Figma of Canva.',
    'De conversie van JPG naar PNG herstelt niet de door JPEG-compressie verloren details, maar voorkomt verdere kwaliteitsverliezen bij toekomstige bewerkingen. PNG is ideaal wanneer de afbeelding als basis dient voor collages, overlays of druklay-outs.',
    'Voor grafisch ontwerpers en bureaus in Nederland is lokale verwerking ideaal: klantmateriaal blijft op uw eigen computer zonder dat een externe dienst toegang krijgt.',
  ],
  'jpg-to-avif': [
    "AVIF bereikt tot 50% betere compressie dan JPEG bij vergelijkbare visuele kwaliteit. Voor websites met veel foto's – vastgoedportals, online magazines, reiswebsites – betekent dit aanzienlijk kortere laadtijden.",
    'Platforms zoals Funda.nl, Booking.com of Marktplaats adopteren steeds vaker AVIF voor een betere mobiele ervaring. Chrome, Firefox en Safari 16+ ondersteunen AVIF native. Voor oudere browsers is een WebP- of JPG-fallback aanbevolen.',
    "Lokale conversie in de browser beschermt uw beelden: vastgoedfoto's, productafbeeldingen of portretten – niets wordt naar een server geüpload. Volledig AVG-conform.",
  ],
  'jpg-to-gif': [
    'De conversie van JPG naar GIF is zinvol wanneer een foto nodig is als eenvoudige grafiek met beperkt kleurenpalet – thumbnails in oudere systemen of nieuwsbrieven die alleen GIF ondersteunen.',
    "GIF beperkt het kleurenpalet tot 256 kleuren. Bij foto's leidt dit tot zichtbaar kwaliteitsverlies door dithering. Voor de meeste toepassingen zijn WebP of PNG betere keuzes.",
    'Als uw workflow uitsluitend GIF vereist, biedt lokale conversie een snelle en privacyconforme oplossing zonder externe diensten.',
  ],
  'jpg-to-tiff': [
    'Professionele drukkerijen en beeldbanken eisen vaak TIFF in plaats van JPEG. De conversie behoudt de huidige beeldkwaliteit en slaat deze verliesvrij op voor verdere verwerking.',
    'Door JPEG-compressie reeds verloren details worden niet hersteld, maar TIFF voorkomt verdere verliezen bij nabewerkingen. TIFF ondersteunt CMYK-kleurruimten, lagen en uitgebreide metadata – ideaal voor professionele drukworkflows.',
    "Fotografen en bureaus in Nederland en België profiteren van lokale verwerking: klantfoto's en drukbestanden blijven op uw eigen apparaat.",
  ],
  'heic-to-jpg': [
    "iPhone-gebruikers kennen het probleem: HEIC-foto's kunnen niet overal worden geopend. Windows-pc's, Android-apparaten, veel webformulieren en e-mailclients ondersteunen HEIC niet. De conversie naar JPG lost dit compatibiliteitsprobleem direct op.",
    "Bij kwaliteitsniveau 85–90% is het verschil tussen het HEIC-origineel en het JPG-resultaat visueel nauwelijks waarneembaar. De bestandsgrootte blijft vergelijkbaar. Bijzonder handig: meerdere iPhone-foto's tegelijk converteren.",
    "Voor sollicitatiefoto's, identiteitsbewijzen of persoonlijke documenten is lokale verwerking essentieel – gevoelige gegevens verlaten nooit uw apparaat.",
  ],
  'heic-to-png': [
    "Als u iPhone-foto's verliesvrij wilt hergebruiken – als basis in Photoshop, Figma of voor drukprojecten – is PNG het ideale doelformaat. De conversie behoudt de volledige kwaliteit van het HEIC-origineel.",
    'PNG ondersteunt in tegenstelling tot JPG transparantie en verliesvrije opslag. PNG-bestanden zijn echter aanzienlijk groter dan HEIC of JPG. Voor verdere bewerking is dat geen nadeel – voor webgebruik is een aansluitende conversie naar WebP aanbevolen.',
    "Creatieve bureaus en fotografen profiteren van lokale verwerking: iPhone-foto's van klanten of shoots blijven vertrouwelijk op uw eigen computer.",
  ],
  'heic-to-webp': [
    "iPhone-foto's in HEIC-formaat direct voor websites gebruiken? WebP is de ideale brug: het combineert de efficiënte compressie van HEIC met universele browsercompatibiliteit (Chrome, Firefox, Safari 14+, Edge).",
    "De conversie van HEIC naar WebP is bijzonder efficiënt doordat beide formaten moderne compressie-algoritmen gebruiken. De bestandsgrootte blijft compact, de beeldkwaliteit hoog. Voor blogs, webshops en portfolio's is dit de snelste weg om iPhone-foto's webgeoptimaliseerd te publiceren.",
    "Bloggers, webshophouders en freelancers in Nederland en België kunnen hun iPhone-foto's lokaal en AVG-conform converteren – zonder clouddiensten of externe tools.",
  ],
  'heic-to-avif': [
    "AVIF biedt vergelijkbare compressie-efficiëntie als HEIC, maar is als open formaat niet gebonden aan Apple's ecosysteem. HEIC naar AVIF maakt de modernste compressie mogelijk met brede platformondersteuning.",
    "Chrome, Firefox en Safari 16+ ondersteunen AVIF native. Voor prestatiekritische webprojecten – fotogalerijen, portfolio's, vastgoedportals – biedt AVIF de beste balans tussen bestandsgrootte en kwaliteit.",
    'Lokale conversie is bijzonder relevant voor fotografen en creatieven: iPhone-shoots worden direct in het meest efficiënte webformaat omgezet – zonder omweg via clouddiensten.',
  ],
  'heic-to-tiff': [
    'Professionele fotografen die met iPhones werken, hebben vaak TIFF nodig voor nabewerking in Lightroom, Capture One of Photoshop. HEIC naar TIFF behoudt de volledige beeldkwaliteit in een branchestandaard formaat.',
    'TIFF ondersteunt 16-bit kleurdiepte, lagen en uitgebreide EXIF/IPTC-metadata. Voor drukprojecten, beeldarchivering en professionele retouche is TIFF het voorkeursformaat. De bestanden worden echter aanzienlijk groter dan HEIC.',
    'In Nederland en België, waar drukkerijen en beeldbanken TIFF als standaard hanteren, biedt lokale conversie een veilige workflow voor vertrouwelijke shoots.',
  ],
  'webp-to-jpg': [
    'WebP is optimaal voor het web, maar drukdiensten, Microsoft Office, oudere beeldbewerkingssoftware en sommige social-mediaplatforms vereisen JPG.',
    'WebP naar JPG garandeert maximale compatibiliteit. Bij kwaliteitsniveau 85–90% blijft de visuele kwaliteit nagenoeg identiek. Bijzonder handig voor het versturen van afbeeldingen per e-mail aan ontvangers die WebP niet kunnen openen.',
    'Voor bureaus die klanten afbeeldingen in universeel compatibele formaten moeten leveren, is lokale conversie ideaal – snel, veilig en AVG-conform.',
  ],
  'webp-to-png': [
    "WebP-afbeeldingen met transparantie moeten soms naar PNG worden geconverteerd – voor grafische programma's zonder WebP-ondersteuning of voor drukbestanden waarbij verliesvrije kwaliteit vereist is.",
    'De conversie behoudt transparantie en beeldkwaliteit volledig. PNG-bestanden zijn groter, maar beter geschikt voor verdere bewerking in Photoshop, Illustrator of InDesign en voor platforms zonder WebP-ondersteuning.',
    'Grafisch ontwerpers in Nederland kunnen WebP-assets lokaal omzetten naar drukklare PNG-bestanden – zonder clouddiensten en volledig AVG-conform.',
  ],
  'webp-to-avif': [
    'AVIF biedt nog betere compressie dan WebP – de volgende logische stap voor websites die hun laadtijden verder willen optimaliseren.',
    'Bij vergelijkbare visuele kwaliteit zijn AVIF-bestanden 20–30% kleiner dan WebP. Voor websites met honderden afbeeldingen telt de besparing aanzienlijk op. Een WebP-fallback via <code>&lt;picture&gt;</code> dekt oudere browsers.',
    'Nederlandse en Belgische webshops die hun Core Web Vitals optimaliseren, profiteren bijzonder van AVIF. Lokale conversie maakt de overstap mogelijk zonder cloud-upload.',
  ],
  'webp-to-gif': [
    'Soms is het GIF-formaat nodig – voor oudere systemen, nieuwsbrieftools of platforms die uitsluitend GIF accepteren. WebP naar GIF is dan de snelste oplossing.',
    "GIF ondersteunt maximaal 256 kleuren. Fotorealistische WebP-afbeeldingen verliezen zichtbaar aan kwaliteit. De conversie is het meest geschikt voor eenvoudige grafiek, iconen of logo's.",
    'Lokale verwerking in de browser biedt een snel en veilig alternatief voor cloudgebaseerde conversiediensten.',
  ],
  'webp-to-tiff': [
    'Professionele drukworkflows vereisen vaak TIFF als invoerformaat. WebP naar TIFF maakt het mogelijk webgeoptimaliseerde afbeeldingen voor drukwerk voor te bereiden.',
    'TIFF slaat het beeld verliesvrij op met volledige metadata-ondersteuning. Door eerdere WebP-compressie verloren details worden niet hersteld. Voor de beste drukkwaliteit verdient het aanbeveling van het originele beeld uit te gaan.',
    'Voor bureaus en drukkerijen in Nederland biedt lokale conversie een veilige manier om web-assets voor drukprojecten voor te bereiden.',
  ],
  'svg-to-jpg': [
    "SVG-vectorafbeeldingen kunnen niet overal worden gebruikt: social-mediaplatforms, marktplaatsen en veel CMS'en accepteren alleen rasterformaten. De conversie naar JPG levert universeel compatibele bestanden op.",
    'Bij rasterisatie wordt de vectorafbeelding omgezet in een pixelafbeelding met vaste resolutie. Transparante gebieden worden gevuld met een achtergrondkleur (standaard wit). Voor webgebruik is een breedte van 1200–2000px aanbevolen.',
    'Voor social-mediaposts en advertenties op Marktplaats, Bol.com of Amazon.nl is SVG-naar-JPG-conversie een gebruikelijke vereiste.',
  ],
  'svg-to-png': [
    'SVG-vectorafbeeldingen worden vaak naar PNG geconverteerd voor social-mediaposts, berichtendiensten en e-mailhandtekeningen – met behoud van transparantie en brede compatibiliteit.',
    "Rasterisatie naar PNG behoudt transparante gebieden volledig – ideaal voor logo's op verschillende achtergrondkleuren. PNG is ook uitstekend voor screenshots van documentatie en presentaties.",
    "Voor bureaus die klanten logo's in verschillende formaten leveren, is lokale SVG-naar-PNG-conversie een snelle en privacyconforme workflow.",
  ],
  'svg-to-webp': [
    "Voor websites die SVG niet direct kunnen inbedden – CMS'en met beperkte SVG-ondersteuning – biedt WebP een compacte pixelweergave met minimale bestandsgrootte.",
    "WebP-bestanden uit SVG-bronnen zijn doorgaans zeer klein (5–30 KB) en laden razendsnel. Voor iconen, logo's en UI-elementen is dit vaak de pragmatischste oplossing wanneer SVG niet direct kan worden gebruikt.",
    "WordPress, Shopify, Lightspeed en veel andere CMS'en in Nederland ondersteunen WebP native – de conversie maakt het gebruik van vectorafbeeldingen ook in deze omgevingen mogelijk.",
  ],
  'svg-to-avif': [
    'AVIF biedt de beste beschikbare compressie voor gerasteriseerde vectorafbeeldingen. Voor prestatiekritische websites is SVG-naar-AVIF de optimale keuze wanneer SVG niet direct kan worden ingebed.',
    'AVIF-bestanden uit SVG-bronnen zijn extreem compact – vaak slechts 3–15 KB. Voor Core Web Vitals is elke kilobyte relevant: snellere laadtijden verbeteren de LCP-score en daarmee de Google-ranking.',
    'Webontwikkelaars en SEO-specialisten in Nederland gebruiken AVIF steeds vaker als standaard – lokale conversie vereenvoudigt de overstap.',
  ],
  'svg-to-gif': [
    'GIF is soms nodig voor eenvoudige iconen in oudere systemen, e-mailtemplates of forums. SVG naar GIF levert compatibele bestanden met minimale bestandsgrootte.',
    "GIF beperkt het kleurenpalet tot 256 kleuren. Voor eenkleurige logo's en iconen is dat geen probleem; voor complexe illustraties met kleurovergangen echter niet ideaal. Transparantie is alleen binair.",
    'Voor nieuwsbrieftemplates en oudere webplatforms die alleen GIF accepteren, biedt deze conversie een snelle lokale oplossing.',
  ],
  'svg-to-tiff': [
    'Drukkerijen hebben voor de productie vaak pixelafbeeldingen in TIFF nodig in plaats van vectorbestanden. SVG naar TIFF produceert hoogwaardige, verliesvrije rasterbestanden voor professioneel drukwerk.',
    'TIFF slaat de gerasteriseerde grafiek op in de hoogste kwaliteit met volledige kleurdiepte en metadata-ondersteuning. Voor visitekaartjes, flyers en posters is een hoge uitvoerresolutie (300 DPI of meer) aanbevolen.',
    "Drukkerijen in Nederland en België accepteren TIFF als standaard pixelformaat. Lokale conversie beschermt vertrouwelijke ontwerpen en merklogo's.",
  ],
  'gif-to-jpg': [
    'Oudere GIF-afbeeldingen moeten soms naar JPG worden geconverteerd – voor platforms die alleen JPEG accepteren of om de bestandsgrootte voor e-mailverzending te optimaliseren. Alleen het eerste beeld van een geanimeerde GIF wordt geconverteerd.',
    "JPG biedt de volledige 16,7 miljoen kleuren in plaats van het 256-kleurenpalet van GIF. Foto's die per ongeluk als GIF zijn opgeslagen, profiteren van de volledige kleurdiepte.",
    'Voor het archiveren van oudere grafiek in een modern, universeel compatibel formaat is lokale conversie snel en privacyconform.',
  ],
  'gif-to-png': [
    "GIF-afbeeldingen naar PNG converteren is zinvol wanneer de grafiek verliesvrij moet worden opgeslagen of in grafische programma's wordt bewerkt. PNG ondersteunt volledige 32-bit kleuren en geleidelijke alfatransparantie.",
    'Bij geanimeerde GIF-bestanden wordt alleen het eerste beeld geconverteerd. De kwaliteit blijft verliesvrij behouden. PNG is bijzonder geschikt als tussenformaat voor verdere bewerking in Photoshop, Figma of Canva.',
    'Voor het moderniseren van oudere webgrafiek en iconen biedt lokale conversie een snelle, veilige oplossing zonder externe diensten.',
  ],
  'gif-to-webp': [
    'WebP biedt aanzienlijk betere compressie dan GIF. Het moderniseren van oudere GIF-afbeeldingen naar WebP versnelt websites merkbaar.',
    'Statische GIF-bestanden worden als WebP doorgaans 30–60% kleiner. WebP ondersteunt miljoenen kleuren in plaats van 256, wat de visuele kwaliteit bij gelijke of kleinere bestandsgrootte duidelijk verbetert.',
    'Voor het optimaliseren van oudere websites en blogs in Nederland is de overstap van GIF naar WebP een eenvoudige manier om Core Web Vitals te verbeteren.',
  ],
  'gif-to-avif': [
    'AVIF overtreft GIF in elk opzicht: betere compressie, miljoenen kleuren, moderne animatie-ondersteuning. Voor het moderniseren van oudere webcontent is GIF-naar-AVIF de meest efficiënte keuze.',
    'AVIF-bestanden uit GIF-bronnen zijn drastisch kleiner en visueel duidelijk beter. Oudere browsers ondersteunen AVIF echter nog niet – een GIF- of WebP-fallback via <code>&lt;picture&gt;</code> is aanbevolen.',
    'Voor websites die hun laadtijden willen maximaliseren, biedt de overstap van GIF naar AVIF het grootste individuele effect van alle formaatwijzigingen.',
  ],
  'tiff-to-jpg': [
    'TIFF-bestanden uit professionele fotografie of scanners zijn vaak 20–100 MB groot. De conversie naar JPG levert compacte bestanden voor web, e-mail en social media – met een typische verkleining van meer dan 95%.',
    'Transparantie en laaginformatie gaan bij de conversie verloren. Voor pure fotografie is dat geen probleem. Bij kwaliteitsniveau 85–90% blijft de visuele kwaliteit uitstekend, terwijl de bestandsgrootte tot enkele honderden kilobytes daalt.',
    "Fotografen en scannergebruikers in Nederland kunnen hun TIFF-bestanden lokaal en AVG-conform omzetten naar verzendklare JPG's – ideaal voor klantpresentaties en online galerijen.",
  ],
  'tiff-to-png': [
    "Wanneer TIFF-bestanden nodig zijn voor verdere bewerking in grafische programma's of voor websites met transparantie-eisen, is PNG het geschikte doelformaat – verliesvrij en universeel compatibel.",
    'PNG behoudt de volledige beeldkwaliteit en transparantie van het TIFF-origineel. De bestanden zijn kleiner dan TIFF, maar groter dan JPEG of WebP. Voor verdere bewerking in Figma, Canva of Photoshop is PNG ideaal.',
    'Voor het voorbereiden van scanneruitvoer en archiefbeelden voor online gebruik biedt lokale conversie een veilige en snelle workflow.',
  ],
  'tiff-to-webp': [
    "De conversie van TIFF naar WebP bereikt de grootste bestandsverkleining van alle gangbare formaatwijzigingen: TIFF-bestanden van 20–100 MB krimpen vaak tot 200 KB – 2 MB. Voor het publiceren van professionele foto's op het web is dit de meest efficiënte weg.",
    'WebP behoudt bij kwaliteitsniveau 80–85% een uitstekende visuele kwaliteit. Voor fotogalerijen, portfoliowebsites en online magazines betekent dit: professionele beeldkwaliteit bij een fractie van de oorspronkelijke bestandsgrootte.',
    'Fotografen en bureaus in Nederland kunnen hoogwaardige shootresultaten lokaal omzetten naar webgeoptimaliseerde formaten – zonder cloud-upload en volledig AVG-conform.',
  ],
  'tiff-to-avif': [
    "AVIF biedt de meest efficiënte compressie voor de omzetting van grote TIFF-bestanden. Professionele foto's en hoogwaardige scans worden tot een fractie van hun originele grootte gereduceerd – bij minimaal kwaliteitsverlies.",
    'Voor fotogalerijen en portfoliowebsites die de best mogelijke laadtijden nastreven, is TIFF-naar-AVIF de optimale workflow. Chrome, Firefox en Safari 16+ ondersteunen AVIF native; een WebP-fallback is aanbevolen voor oudere browsers.',
    "Professionele fotografen en beeldbanken in Nederland profiteren van lokale verwerking: hoogwaardige klantfoto's worden veilig en AVG-conform geoptimaliseerd.",
  ],
  'bmp-to-jpg': [
    'BMP-bestanden stammen vaak uit oudere Windows-toepassingen, scanners of screenshot-tools. Ze zijn ongecomprimeerd en daardoor extreem groot – de conversie naar JPG reduceert de bestandsgrootte met meer dan 95%.',
    'Een BMP-screenshot van 10 MB wordt als JPG doorgaans slechts 200–400 KB. Voor e-mailverzending, documentatie en archivering is de conversie naar JPG de eenvoudigste manier om opslagruimte te besparen.',
    'Voor het migreren van oudere beeldarchieven en het voorbereiden van scanneruitvoer biedt lokale conversie een snelle en privacyconforme oplossing.',
  ],
  'bmp-to-png': [
    'BMP naar PNG converteren reduceert de bestandsgrootte aanzienlijk door verliesvrije compressie – de volledige beeldkwaliteit blijft behouden. Ideaal voor grafiek met scherpe randen, tekst of screenshots.',
    'In tegenstelling tot JPG behoudt PNG de exacte pixelkwaliteit zonder compressie-artefacten. Voor technische documentaties, screenshots en grafiek met tekst is PNG de betere keuze.',
    'Lokale conversie is bijzonder geschikt voor vertrouwelijke documenten en interne screenshots – niets wordt naar een externe server geüpload.',
  ],
  'bmp-to-webp': [
    'BMP-bestanden zijn voor modern webgebruik volstrekt ongeschikt – ongecomprimeerd en enorm. WebP reduceert de bestandsgrootte tot 97% bij goede visuele kwaliteit en maakt oudere beelden webgeschikt.',
    "De conversie moderniseert oude bestanden uit Windows-systemen voor actuele websites, CMS'en en webshops. WebP wordt door alle moderne browsers ondersteund en verbetert laadtijden direct.",
    'Voor bedrijven in Nederland die oudere beeldarchieven voor hun webpresence willen voorbereiden, is lokale conversie efficiënt en AVG-conform.',
  ],
  'bmp-to-avif': [
    'AVIF biedt de best mogelijke compressie voor ongecomprimeerde BMP-bestanden: verkleiningen van meer dan 98% zijn realistisch. Voor het moderniseren van oudere beeldarchieven is BMP-naar-AVIF de meest efficiënte keuze.',
    'AVIF ondersteunt HDR, brede kleurruimten en een kleurdiepte tot 12 bit – de oorspronkelijke beeldkwaliteit wordt optimaal behouden. Chrome, Firefox en Safari 16+ ondersteunen AVIF native.',
    'Lokale conversie in de browser maakt de migratie van complete beeldarchieven mogelijk zonder clouddiensten – snel, veilig en privacyconform.',
  ],
  'bmp-to-gif': [
    'De conversie van BMP naar GIF is in speciale gevallen zinvol: voor systemen die uitsluitend GIF accepteren, of voor eenvoudige grafiek met weinig kleuren, waarbij GIF compacter is dan BMP.',
    "GIF ondersteunt maximaal 256 kleuren. Fotorealistische BMP-afbeeldingen verliezen aanzienlijk aan kwaliteit. Voor foto's zijn JPG of WebP de betere keuze. GIF is alleen geschikt voor eenvoudige grafiek.",
    'Voor specifieke compatibiliteitseisen van oudere systemen biedt lokale conversie een snelle en veilige oplossing.',
  ],
  'bmp-to-tiff': [
    'BMP naar TIFF converteren is zinvol wanneer professionele metadata-ondersteuning nodig is – voor archivering, drukvoorbereiding of verwerking in professionele beeldbewerkingssoftware.',
    'TIFF behoudt de volledige beeldkwaliteit van het BMP-origineel en voegt professionele functies toe: EXIF-metadata, CMYK-kleurruimten en laagondersteuning. Voor langetermijnarchivering is TIFF duidelijk superieur aan BMP.',
    'Archieven, bibliotheken en bedrijven in Nederland die oude bestanden digitaliseren, profiteren van lokale conversie zonder cloud-afhankelijkheid.',
  ],
  'avif-to-jpg': [
    'AVIF wordt door oudere apparaten, beeldbewerkingssoftware en sommige platforms nog niet ondersteund. De conversie naar JPG garandeert maximale compatibiliteit – JPEG wordt door elk apparaat en elke software ondersteund.',
    'Bij kwaliteitsniveau 85–90% blijft de visuele kwaliteit nagenoeg identiek aan het AVIF-origineel. Bijzonder nuttig voor e-mailverzending aan ontvangers met oudere systemen of drukdiensten die alleen JPEG accepteren.',
    'Voor bedrijven in Nederland die afbeeldingen zowel webgeoptimaliseerd (AVIF) als universeel compatibel (JPG) willen aanbieden, is lokale conversie een efficiënte workflow.',
  ],
  'avif-to-png': [
    "AVIF-afbeeldingen met transparantie moeten soms naar PNG worden geconverteerd – voor verdere bewerking in grafische programma's of voor platforms zonder AVIF-ondersteuning.",
    'PNG behoudt transparantie en beeldkwaliteit verliesvrij. De bestanden zijn groter dan AVIF, maar geschikt voor bewerking in Photoshop, Figma of Canva en voor drukwerk.',
    'Grafisch ontwerpers in Nederland gebruiken lokale conversie om AVIF-assets veilig en AVG-conform voor te bereiden voor verschillende uitvoerkanalen.',
  ],
  'avif-to-webp': [
    'WebP biedt bredere browserondersteuning dan AVIF (Safari 14+ vs. Safari 16+) bij goede compressie. Als uw doelgroep oudere browsers gebruikt, is WebP de veiligere keuze.',
    "AVIF naar WebP is bijzonder relevant voor CMS'en en CDN's die AVIF nog niet ondersteunen. WebP wordt native ondersteund door WordPress, Shopify, Cloudflare en alle moderne browsers.",
    'Voor webprojecten in Nederland die maximale browserdekking bij goede compressie nodig hebben, is WebP nog steeds het betrouwbaarste moderne formaat.',
  ],
};

function extractFormats(f) {
  const m = f.match(/converter-(\w+)-to-(\w+)\.json/);
  return m ? { key: `${m[1]}-to-${m[2]}` } : null;
}
let updated = 0,
  skipped = 0;
const files = fs.readdirSync(TOOLS).filter((f) => f.startsWith('converter-') && f.endsWith('.json'));
for (const file of files) {
  const fmt = extractFormats(file);
  if (!fmt || !P[fmt.key]) {
    skipped++;
    continue;
  }
  const [p1, p2, p3] = P[fmt.key];
  const fp = path.join(TOOLS, file);
  const data = JSON.parse(fs.readFileSync(fp, 'utf-8'));
  const block = data.contentBlocks.find((b) => b.type === 'sectionInfo' && !b.html.includes('<table') && (b.title.includes('praktijk') || b.title.includes('in de praktijk')));
  if (!block) {
    skipped++;
    continue;
  }
  block.html = `<p class="text-mid mb-4">${p1}</p><p class="text-mid mb-4">${p2}</p><p class="text-mid">${p3}</p>`;
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  updated++;
}
console.log(`NL sectionInfo: Updated: ${updated}, Skipped: ${skipped}`);
