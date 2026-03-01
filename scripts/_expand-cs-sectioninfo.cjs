/**
 * Differentiate "in practice" sectionInfo in CS converter files.
 */
const fs = require('fs');
const path = require('path');
const TOOLS = path.join(__dirname, '..', 'data', 'cs', 'tools');

const P = {
  'png-to-webp': [
    'Webdesignéři a provozovatelé e-shopů v Česku používají PNG pro loga, výřezy produktů a prvky rozhraní s průhledností. Přechodem na WebP zůstane průhlednost plně zachována, zatímco velikost souboru klesne o 25–35 % – přímý přínos pro rychlost načítání a Core Web Vitals.',
    'Grafiky s velkými jednobarevnými plochami (loga, ikony) profitují nejvíce: soubory o 200–500 KB často klesnou pod 100 KB. Pro produktové fotografie na Heureka.cz, Alza.cz, Mall.cz nebo v Shopify obchodech to znamená rychlejší stránky kategorií a lepší mobilní zážitek.',
    'Veškeré zpracování probíhá lokálně v prohlížeči – ideální pro agentury a firmy, které musí splňovat GDPR. Produktové obrázky ani klientská grafika nikdy neopustí vaše zařízení.',
  ],
  'png-to-jpg': [
    'Soubory PNG s průhledností často zabírají několik megabajtů. Když průhlednost nepotřebujete – fotografie do životopisu, skeny dokumentů nebo příspěvky na sociální sítě – převod na JPG drasticky zmenší velikost.',
    'Mnoho platforem jako Jobs.cz, LinkedIn nebo portály pro uchazeče přijímá pouze JPG. I e-mailové přílohy profitují: snímek obrazovky PNG o 3 MB se jako JPG zmenší na pouhých 200–400 KB. Kvalita 85 % nabízí nejlepší kompromis.',
    'Pro dokumenty k přijímacímu řízení a důvěrné soubory je lokální zpracování zásadní – vaše soubory nikdy neopustí zařízení. Plně v souladu s GDPR.',
  ],
  'png-to-avif': [
    'AVIF je nejefektivnější obrazový formát současné generace a dokáže zmenšit soubory PNG až o 50 %. Pro výkonnostně kritické webové projekty je PNG na AVIF optimální volbou.',
    'AVIF podporuje průhlednost, HDR a barevnou hloubku až 12 bitů na kanál. Chrome, Firefox a Safari 16+ podporují AVIF nativně. Pro starší prohlížeče se doporučuje fallback přes <code>&lt;picture&gt;</code> s PNG nebo WebP.',
    'České firmy, které chtějí optimalizovat své skóre PageSpeed, zvláště profitují: AVIF měřitelně zlepšuje Largest Contentful Paint (LCP). Lokální zpracování zajišťuje soulad s GDPR.',
  ],
  'png-to-gif': [
    'Jednoduché grafiky jako ikony, loga nebo diagramy s omezenou paletou se v GIF uloží kompaktněji než v PNG. Převod je užitečný, když cílová platforma vyžaduje formát GIF.',
    'GIF podporuje maximálně 256 barev. Fotorealistické PNG obrázky při převodu viditelně ztrácejí kvalitu. Průhlednost je podporována pouze binárně (viditelná/neviditelná), nikoli jako plynulý alfa kanál.',
    'Pro prezentace, grafiky newsletterů nebo systémy přijímající pouze GIF je tento převod rychlým řešením – zcela lokálně a bez nahrávání souborů.',
  ],
  'png-to-tiff': [
    'Tiskárny, nakladatelství a archivní systémy často vyžadují TIFF místo PNG. Převod zachovává plnou kvalitu, průhlednost a přidává profesionální podporu metadat.',
    'Soubory TIFF jsou větší než PNG, ale nabízejí výhody pro profesionální workflow: podpora vrstev v Photoshopu, barevné prostory CMYK pro tisk a kompletní metadata. TIFF je průmyslový standard pro dlouhodobou archivaci.',
    'Tiskárny v České republice a na Slovensku často pracují s TIFF. Lokální převod umožňuje zpracovat důvěrné návrhy bez nahrávání do cloudu.',
  ],
  'jpg-to-webp': [
    'JPEG je standardní formát pro digitální fotografie, ale pro webové stránky jsou velikosti souborů často příliš vysoké. WebP komprimuje JPEG obrázky o dalších 25–35 % bez viditelné ztráty kvality, čímž přímo zlepšuje rychlost načítání.',
    'Pro e-shopy na Shoptet, Shopify nebo WooCommerce znamená přechod z JPG na WebP měřitelně rychlejší produktové stránky. Google PageSpeed doporučuje WebP jako formát nové generace. Při kvalitě 80–85 % je rozdíl vizuálně nepostřehnutelný.',
    'V Česku, kde platí přísná pravidla GDPR, je lokální zpracování obrázků v prohlížeči zvláště cenné. Produktové fotografie neopustí vaše zařízení.',
  ],
  'jpg-to-png': [
    'Někdy je potřeba převést JPEG do formátu s podporou průhlednosti nebo bezeztrátového ukládání – například pro úpravu v Photoshopu, Figmě nebo Canvě.',
    'Převod z JPG na PNG neobnoví detaily ztracené kompresí JPEG, ale zabrání dalším ztrátám při budoucích úpravách. PNG je ideální, když obrázek slouží jako základ pro koláže, překryvy nebo tiskové šablony.',
    'Pro grafiky a agentury v Česku je lokální zpracování ideální: materiál klientů zůstane na vlastním počítači bez přístupu externích služeb.',
  ],
  'jpg-to-avif': [
    'AVIF dosahuje až o 50 % lepší komprese než JPEG při srovnatelné vizuální kvalitě. Pro weby s mnoha fotografiemi – realitní portály, online magazíny, cestovatelské weby – to znamená výrazně kratší načítání.',
    'Platformy jako Sreality.cz, Booking.com nebo Bazos.cz stále častěji přecházejí na AVIF pro lepší mobilní zážitek. Chrome, Firefox a Safari 16+ podporují AVIF nativně.',
    'Lokální převod v prohlížeči chrání vaše obrázky: realitní fotografie, produktové snímky nebo portréty – nic se nenahrává na server. Plně v souladu s GDPR.',
  ],
  'jpg-to-gif': [
    'Převod JPG na GIF je užitečný, když je fotografie potřeba jako jednoduchá grafika s omezenou paletou – náhledy ve starších systémech nebo newslettery podporující pouze GIF.',
    'GIF omezuje paletu na 256 barev. U fotografií to způsobuje viditelnou ztrátu kvality ditherováním. Pro většinu použití jsou WebP nebo PNG lepší volbou.',
    'Pokud váš pracovní postup vyžaduje výhradně GIF, lokální převod nabízí rychlé a bezpečné řešení bez externích služeb.',
  ],
  'jpg-to-tiff': [
    'Profesionální tiskárny a fotoagentury často vyžadují TIFF místo JPEG. Převod zachovává aktuální kvalitu a ukládá ji bezeztrátově pro další zpracování.',
    'Detaily ztracené kompresí JPEG se neobnoví, ale TIFF zabrání dalším ztrátám při retušování. Podporuje CMYK, vrstvy a rozšířená metadata – ideální pro profesionální tiskové workflow.',
    'Fotografové a agentury v Česku profitují z lokálního zpracování: fotografie klientů a tiskové soubory zůstanou na vašem zařízení.',
  ],
  'heic-to-jpg': [
    'Uživatelé iPhonů znají problém: fotografie HEIC nelze otevřít všude. Počítače s Windows, zařízení s Androidem, mnohé webové formuláře a e-mailoví klienti HEIC nepodporují. Převod na JPG tento problém kompatibility okamžitě řeší.',
    'Při kvalitě 85–90 % je rozdíl mezi originálem HEIC a výsledkem JPG vizuálně téměř nepostřehnutelný. Velikost souboru zůstává srovnatelná. Zvláště praktické: převést více fotografií z iPhonu současně.',
    'Pro fotografie do životopisu, skeny dokladů nebo osobní dokumenty je lokální zpracování zásadní – citlivá data nikdy neopustí vaše zařízení.',
  ],
  'heic-to-png': [
    'Pokud chcete fotografie z iPhonu využít bezeztrátově – jako základ v Photoshopu, Figmě nebo pro tiskové projekty – PNG je ideální cílový formát.',
    'PNG na rozdíl od JPG podporuje průhlednost a bezeztrátové ukládání. Soubory PNG jsou však výrazně větší než HEIC nebo JPG. Pro úpravu v grafických programech to není nevýhoda – pro web se doporučuje následný převod na WebP.',
    'Kreativní agentury a fotografové profitují z lokálního zpracování: fotografie klientů z iPhonu zůstanou důvěrné na vlastním počítači.',
  ],
  'heic-to-webp': [
    'Používat fotografie z iPhonu ve formátu HEIC přímo na webových stránkách? WebP je ideální most: kombinuje efektivní kompresi HEIC s univerzální kompatibilitou prohlížečů (Chrome, Firefox, Safari 14+, Edge).',
    'Převod HEIC na WebP je zvláště efektivní, protože oba formáty využívají moderní kompresní algoritmy. Velikost zůstává kompaktní, kvalita vysoká. Pro blogy, e-shopy a portfolia je to nejrychlejší cesta k publikaci optimalizovaných fotografií z iPhonu.',
    'Blogeři a provozovatelé e-shopů v Česku mohou fotografie z iPhonu převádět lokálně a v souladu s GDPR – bez cloudových služeb či externích nástrojů.',
  ],
  'heic-to-avif': [
    'AVIF nabízí podobnou efektivitu komprese jako HEIC, ale jako otevřený formát není vázán na ekosystém Apple. HEIC na AVIF umožňuje nejmodernější kompresi s širokou platformovou podporou.',
    'Chrome, Firefox a Safari 16+ podporují AVIF nativně. Pro výkonnostně kritické projekty – fotogalerie, portfolia, realitní portály – AVIF nabízí nejlepší poměr velikosti a kvality.',
    'Lokální převod je zvláště relevantní pro fotografy: focení z iPhonu se převede přímo do nejefektivnějšího webového formátu – bez cloudu.',
  ],
  'heic-to-tiff': [
    'Profesionální fotografové pracující s iPhony často potřebují TIFF pro postprodukci v Lightroomu, Capture One nebo Photoshopu. HEIC na TIFF zachovává plnou kvalitu v oborovém standardním formátu.',
    'TIFF podporuje 16bitovou barevnou hloubku, vrstvy a rozšířená EXIF/IPTC metadata. Pro tisk, archivaci a profesionální retuš je TIFF preferovaným formátem.',
    'V Česku, kde tiskárny a fotoagentury vyžadují TIFF jako standard, lokální převod nabízí bezpečný workflow pro důvěrná focení.',
  ],
  'webp-to-jpg': [
    'WebP je optimální pro web, ale tiskové služby, Microsoft Office, starší software a některé sociální sítě vyžadují JPG.',
    'WebP na JPG zajišťuje maximální kompatibilitu. Při kvalitě 85–90 % zůstává vizuální kvalita téměř identická. Praktické pro odesílání obrázků e-mailem příjemcům, kteří WebP nemohou otevřít.',
    'Pro agentury, které musí dodávat obrázky v univerzálních formátech, je lokální převod ideální – rychlý, bezpečný a v souladu s GDPR.',
  ],
  'webp-to-png': [
    'Obrázky WebP s průhledností je někdy třeba převést na PNG – pro grafické programy bez podpory WebP nebo tiskové soubory vyžadující bezeztrátovou kvalitu.',
    'Převod zachovává průhlednost a kvalitu beze ztrát. Soubory PNG jsou větší, ale vhodnější pro Photoshop, Illustrator, InDesign a platformy bez podpory WebP.',
    'Grafici v Česku mohou lokálně převádět WebP assety na PNG připravené pro tisk – bez cloudu a plně v souladu s GDPR.',
  ],
  'webp-to-avif': [
    'AVIF nabízí ještě lepší kompresi než WebP – logický další krok pro weby, které chtějí dále optimalizovat načítání.',
    'Při srovnatelné kvalitě jsou soubory AVIF o 20–30 % menší než WebP. Pro weby se stovkami obrázků se úspora výrazně sčítá. Fallback WebP přes <code>&lt;picture&gt;</code> pokryje starší prohlížeče.',
    'České e-shopy optimalizující Core Web Vitals zvláště profitují z AVIF. Lokální převod umožňuje změnu formátu bez nahrávání do cloudu.',
  ],
  'webp-to-gif': [
    'Formát GIF je občas potřeba – starší systémy, nástroje pro newslettery nebo platformy přijímající pouze GIF. WebP na GIF je nejrychlejším řešením.',
    'GIF podporuje max. 256 barev. Fotorealistické obrázky ztrácejí kvalitu. Převod je nejvhodnější pro jednoduché grafiky, ikony nebo loga.',
    'Lokální zpracování nabízí rychlou a bezpečnou alternativu ke cloudovým konverzním službám.',
  ],
  'webp-to-tiff': [
    'Profesionální tiskové workflow často vyžadují TIFF. WebP na TIFF umožňuje připravit webově optimalizované obrázky pro tisk.',
    'TIFF ukládá bezeztrátově s plnou podporou metadat. Detaily ztracené kompresí WebP se neobnoví – pro nejlepší kvalitu vycházejte z originálu.',
    'Pro agentury a tiskárny v Česku nabízí lokální převod bezpečný způsob přípravy webových assetů pro tiskové projekty.',
  ],
  'svg-to-jpg': [
    'SVG vektory nelze použít všude: sociální sítě, tržiště a mnoho CMS přijímá pouze rastrové formáty. Převod na JPG vytváří univerzálně kompatibilní soubory.',
    'Rasterizace převede vektor na pixelový obraz s pevným rozlišením. Průhledné oblasti se vyplní barvou pozadí (standardně bílou). Pro web se doporučuje šířka 1200–2000 px.',
    'Pro příspěvky na sociálních sítích a inzeráty na Bazos.cz, Heureka.cz nebo Amazon.de je převod SVG na JPG běžným požadavkem.',
  ],
  'svg-to-png': [
    'SVG se často převádí na PNG pro sociální sítě, messengery a e-mailové podpisy – se zachováním průhlednosti a širokou kompatibilitou.',
    'Rasterizace do PNG plně zachovává průhledné oblasti – ideální pro loga na různobarevných pozadích. Výborné i pro screenshoty dokumentace a prezentace.',
    'Pro agentury dodávající loga v různých formátech je SVG na PNG rychlý workflow v souladu s ochranou dat.',
  ],
  'svg-to-webp': [
    'Pro weby, které nemohou přímo vložit SVG – CMS s omezenou podporou – WebP nabízí kompaktní pixelovou reprezentaci s minimální velikostí.',
    'Soubory WebP z SVG zdrojů jsou typicky velmi malé (5–30 KB) a načítají se okamžitě. Pro ikony a loga na webech je to nejpragmatičtější řešení, když SVG přímo nelze použít.',
    'WordPress, Shoptet a mnohé další CMS v Česku podporují WebP nativně – převod umožňuje používat vektorovou grafiku i v těchto prostředích.',
  ],
  'svg-to-avif': [
    'AVIF nabízí nejlepší kompresi pro rasterizovanou vektorovou grafiku. Pro výkonnostně kritické weby je SVG na AVIF optimální volbou.',
    'AVIF soubory z SVG zdrojů jsou extrémně kompaktní (3–15 KB). Každý kilobajt se počítá pro Core Web Vitals: rychlejší načítání zlepšuje LCP a tím i Google ranking.',
    'Weboví vývojáři a SEO specialisté v Česku používají AVIF stále častěji – lokální převod zjednodušuje přechod.',
  ],
  'svg-to-gif': [
    'GIF je občas potřeba pro ikony ve starších systémech, e-mailových šablonách nebo fórech. SVG na GIF vytváří kompatibilní a lehké soubory.',
    'GIF omezuje paletu na 256 barev. Pro jednobarevná loga stačí; pro složité ilustrace s přechody ne. Průhlednost pouze binární.',
    'Pro šablony newsletterů a starší webové platformy přijímající pouze GIF je to rychlé lokální řešení.',
  ],
  'svg-to-tiff': [
    'Tiskárny pro výrobu často potřebují pixelové obrázky v TIFF místo vektorů. SVG na TIFF vytváří vysoce kvalitní bezeztrátové soubory pro profesionální tisk.',
    'TIFF ukládá rasterizovanou grafiku v nejvyšší kvalitě s plnou barevnou hloubkou a podporou metadat. Pro vizitky, letáky a plakáty se doporučuje min. 300 DPI.',
    'Tiskárny v Česku a na Slovensku přijímají TIFF jako standardní pixelový formát. Lokální převod chrání důvěrné návrhy a firemní loga.',
  ],
  'gif-to-jpg': [
    'Starší GIF obrázky je někdy třeba převést na JPG – pro platformy přijímající pouze JPEG nebo pro optimalizaci velikosti pro e-mail. Převede se pouze první snímek animovaného GIF.',
    'JPG nabízí plných 16,7 milionu barev místo 256barevné palety GIF. Fotografie omylem uložené jako GIF profitují z plné barevné hloubky.',
    'Pro archivaci starší grafiky v moderním, univerzálně kompatibilním formátu je lokální převod rychlý a v souladu s ochranou dat.',
  ],
  'gif-to-png': [
    'Převod GIF na PNG je vhodný pro bezeztrátové uložení nebo úpravu v grafických programech. PNG podporuje 32bitové barvy a plynulou alfa průhlednost.',
    'U animovaných GIF se převede pouze první snímek. Kvalita zůstává bezeztrátově zachována. PNG je ideální jako meziprodukt pro úpravu v Photoshopu, Figmě nebo Canvě.',
    'Pro modernizaci starší webové grafiky nabízí lokální převod rychlé a bezpečné řešení bez externích služeb.',
  ],
  'gif-to-webp': [
    'WebP nabízí výrazně lepší kompresi než GIF. Modernizace starých GIF na WebP znatelně zrychluje webové stránky.',
    'Statické GIF soubory se jako WebP typicky zmenší o 30–60 %. WebP podporuje miliony barev místo 256, což výrazně zlepšuje vizuální kvalitu.',
    'Pro optimalizaci starších webů v Česku je přechod z GIF na WebP jednoduchý způsob, jak zlepšit Core Web Vitals.',
  ],
  'gif-to-avif': [
    'AVIF překonává GIF ve všech ohledech: lepší komprese, miliony barev, moderní podpora animací. Pro modernizaci starého webového obsahu je GIF na AVIF nejefektivnější.',
    'AVIF soubory z GIF zdrojů jsou drasticky menší a vizuálně lepší. Starší prohlížeče AVIF nepodporují – fallback přes <code>&lt;picture&gt;</code> je doporučen.',
    'Pro maximalizaci rychlosti načítání nabízí přechod z GIF na AVIF největší individuální přínos ze všech změn formátu.',
  ],
  'tiff-to-jpg': [
    'Soubory TIFF z profesionální fotografie nebo skeneru často zabírají 20–100 MB. Převod na JPG vytváří kompaktní soubory pro web, e-mail a sociální sítě – typická redukce přes 95 %.',
    'Průhlednost a informace o vrstvách se ztrácejí. Pro čistou fotografii to není problém. Při kvalitě 85–90 % zůstává vizuální kvalita vynikající s velikostí pár set KB.',
    'Fotografové a uživatelé skenerů v Česku mohou TIFF soubory lokálně a v souladu s GDPR převést na JPG připravené k odeslání.',
  ],
  'tiff-to-png': [
    'Když jsou TIFF soubory potřeba pro úpravu v grafických programech nebo pro weby s průhledností, PNG je vhodný formát – bezeztrátový a univerzálně kompatibilní.',
    'PNG zachovává plnou kvalitu a průhlednost TIFF originálu. Soubory jsou menší než TIFF, ale větší než JPEG/WebP. Pro Figmu, Canvu nebo Photoshop je PNG ideální.',
    'Pro přípravu výstupů ze skenerů a archivních obrázků pro online použití nabízí lokální převod bezpečný a rychlý workflow.',
  ],
  'tiff-to-webp': [
    'TIFF na WebP dosahuje největší redukce ze všech běžných změn formátu: soubory 20–100 MB se často zmenší na 200 KB – 2 MB. Pro publikaci profesionálních fotografií na webu je to nejefektivnější cesta.',
    'Při kvalitě 80–85 % si WebP zachovává vynikající vizuální kvalitu. Pro fotogalerie, portfolia a online magazíny: profesionální kvalita za zlomek původní velikosti.',
    'Fotografové a agentury v Česku mohou focení ve vysokém rozlišení lokálně převést do webově optimalizovaných formátů – bez cloudu, v souladu s GDPR.',
  ],
  'tiff-to-avif': [
    'AVIF nabízí nejefektivnější kompresi pro velké TIFF soubory. Profesionální fotografie a skeny se drasticky zmenší s minimální ztrátou kvality.',
    'Pro fotogalerie a portfolia usilující o nejlepší načítání je TIFF na AVIF optimální workflow. Chrome, Firefox a Safari 16+ podporují AVIF; fallback WebP pro starší prohlížeče.',
    'Profesionální fotografové a fotoagentury v Česku profitují z lokálního zpracování: klientské fotografie ve vysokém rozlišení optimalizované bezpečně a v souladu s GDPR.',
  ],
  'bmp-to-jpg': [
    'Soubory BMP pocházejí často ze starších Windows aplikací nebo skenerů. Nekomprimované a extrémně velké – převod na JPG redukuje velikost o více než 95 %.',
    'BMP screenshot o 10 MB se jako JPG typicky zmenší na 200–400 KB. Pro e-mail, dokumentaci a archivaci je to nejjednodušší způsob, jak ušetřit místo.',
    'Pro migraci starších obrazových archivů a přípravu výstupů ze skenerů nabízí lokální převod rychlé řešení v souladu s ochranou dat.',
  ],
  'bmp-to-png': [
    'BMP na PNG redukuje velikost bezeztrátovou kompresí – plná kvalita zůstává zachována. Ideální pro grafiku s ostrými hranami, textem nebo screenshoty.',
    'Na rozdíl od JPG zachovává PNG přesnou pixelovou kvalitu bez artefaktů. Pro technické dokumentace a screenshoty s textem je PNG lepší volbou.',
    'Lokální převod je vhodný pro důvěrné dokumenty a interní screenshoty – nic se neodesílá na externí server.',
  ],
  'bmp-to-webp': [
    'BMP jsou pro moderní web zcela nevhodné – nekomprimované a obrovské. WebP redukuje velikost až o 97 % při dobré kvalitě a modernizuje staré obrázky pro web.',
    'Převod modernizuje staré soubory z Windows systémů pro aktuální weby, CMS a e-shopy. WebP je podporován všemi moderními prohlížeči a přímo zlepšuje načítání.',
    'Pro české firmy připravující starší archivy pro webovou prezentaci je lokální převod efektivní a v souladu s GDPR.',
  ],
  'bmp-to-avif': [
    'AVIF nabízí nejlepší kompresi pro nekomprimované BMP: redukce přes 98 % jsou reálné. Pro modernizaci starších archivů je BMP na AVIF nejefektivnější.',
    'AVIF podporuje HDR, široké barevné prostory a až 12 bitů – původní kvalita je zachována co nejlépe. Chrome, Firefox a Safari 16+ podporují AVIF nativně.',
    'Lokální převod umožňuje migraci celých archivů bez cloudu – rychle, bezpečně a v souladu s ochranou dat.',
  ],
  'bmp-to-gif': [
    'BMP na GIF je užitečný pro systémy přijímající pouze GIF nebo jednoduché grafiky s málo barvami, kde je GIF kompaktnější.',
    'GIF podporuje max. 256 barev. Fotorealistické obrázky výrazně ztrácejí kvalitu. Pro fotky jsou JPG nebo WebP lepší. GIF se hodí jen pro jednoduchou grafiku.',
    'Pro požadavky kompatibility starších systémů nabízí lokální převod rychlé a bezpečné řešení.',
  ],
  'bmp-to-tiff': [
    'BMP na TIFF je vhodný pro profesionální podporu metadat – archivaci, předtiskovou přípravu nebo zpracování v profesionálním software.',
    'TIFF zachovává plnou kvalitu BMP a přidává: EXIF metadata, CMYK barevné prostory a podporu vrstev. Pro dlouhodobou archivaci je TIFF jasně lepší než BMP.',
    'Archivy, knihovny a české firmy digitalizující starší fondy profitují z lokálního převodu bez závislosti na cloudu.',
  ],
  'avif-to-jpg': [
    'AVIF zatím nepodporují starší zařízení, software pro úpravu obrázků a některé platformy. Převod na JPG zajišťuje maximální kompatibilitu.',
    'Při kvalitě 85–90 % je kvalita téměř identická s AVIF originálem. Užitečné pro e-mail příjemcům se staršími systémy nebo tiskové služby přijímající pouze JPEG.',
    'Pro firmy potřebující obrázky webově optimalizované (AVIF) i univerzálně kompatibilní (JPG) je lokální převod efektivní workflow.',
  ],
  'avif-to-png': [
    'Obrázky AVIF s průhledností je někdy třeba převést na PNG – pro úpravu v grafických programech nebo platformy bez podpory AVIF.',
    'PNG zachovává průhlednost a kvalitu bezeztrátově. Soubory jsou větší než AVIF, ale vhodné pro Photoshop, Figmu, Canvu a tisk.',
    'Grafici v Česku využívají lokální převod k bezpečné přípravě AVIF assetů pro různé výstupní kanály – v souladu s GDPR.',
  ],
  'avif-to-webp': [
    'WebP nabízí širší podporu prohlížečů než AVIF (Safari 14+ vs 16+) při dobré kompresi. Pokud vaše publikum používá starší prohlížeče, WebP je bezpečnější volba.',
    'AVIF na WebP je relevantní pro CMS a CDN bez podpory AVIF. WebP je nativně podporován WordPressem, Shopify, Cloudflare a všemi moderními prohlížeči.',
    'Pro webové projekty v Česku vyžadující maximální pokrytí prohlížečů je WebP stále nejspolehlivějším moderním formátem.',
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
  const block = data.contentBlocks.find(b => b.type === 'sectionInfo' && !b.html.includes('<table') && (b.title.includes('praxi') || b.title.includes('v praxi')));
  if (!block) { skipped++; continue; }
  block.html = `<p class="text-mid mb-4">${p1}</p><p class="text-mid mb-4">${p2}</p><p class="text-mid">${p3}</p>`;
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  updated++;
}
console.log(`CS sectionInfo: Updated: ${updated}, Skipped: ${skipped}`);
