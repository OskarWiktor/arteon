/**
 * Differentiate "in practice" sectionInfo in RO converter files.
 */
const fs = require('fs');
const path = require('path');
const TOOLS = path.join(__dirname, '..', 'data', 'ro', 'tools');

const P = {
  'png-to-webp': [
    'Designerii web si proprietarii de magazine online din Romania folosesc PNG pentru logo-uri, decupaje de produse si elemente de interfata cu transparenta. La trecerea la WebP, transparenta se pastreaza complet, in timp ce dimensiunea fisierului scade cu 25–35% – un castig direct pentru timpii de incarcare si Core Web Vitals.',
    'Grafica cu suprafete mari de culoare uniforma (logo-uri, pictograme) beneficiaza cel mai mult: fisiere de 200–500 KB scad adesea sub 100 KB. Pentru fotografii de produse pe OLX.ro, eMAG.ro, Amazon sau magazine Shopify, aceasta inseamna pagini de categorie mai rapide si o experienta mobila mai buna.',
    'Toata procesarea are loc local in browser – ideal pentru agentii si companii care trebuie sa respecte GDPR. Imaginile de produse sau grafica clientilor nu parasesc niciodata dispozitivul dvs.',
  ],
  'png-to-jpg': [
    'Fisierele PNG cu transparenta cantaresc adesea mai multi megabytes. Cand transparenta nu este necesara – fotografii de CV, scanari de documente sau postari pe social media – conversia la JPG reduce drastic dimensiunea.',
    'Multe platforme precum LinkedIn, BestJobs sau portaluri de joburi accepta doar JPG. Atasamentele de e-mail beneficiaza si ele: o captura PNG de 3 MB devine doar 200–400 KB in JPG. Calitatea la 85% ofera cel mai bun compromis.',
    'Pentru documente de candidatura si fisiere confidentiale, procesarea locala este esentiala – fisierele dvs. nu parasesc niciodata dispozitivul. Complet conform cu GDPR.',
  ],
  'png-to-avif': [
    'AVIF este cel mai eficient format de imagine al generatiei actuale si poate reduce fisierele PNG cu pana la 50%. Pentru proiecte web critice in performanta, PNG la AVIF este conversia optima.',
    'AVIF suporta transparenta, HDR si adancime de culoare pana la 12 biti per canal. Chrome, Firefox si Safari 16+ il suporta nativ. Pentru browsere mai vechi, un fallback prin <code>&lt;picture&gt;</code> cu PNG sau WebP este recomandat.',
    'Companiile romanesti care doresc sa-si optimizeze scorurile PageSpeed beneficiaza in special: AVIF imbunatateste masurabil Largest Contentful Paint (LCP). Procesarea locala garanteaza conformitatea GDPR.',
  ],
  'png-to-gif': [
    'Grafica simpla precum pictograme, logo-uri sau diagrame cu paleta limitata se stocheaza mai compact in GIF. Conversia este utila cand platforma tinta cere format GIF.',
    'GIF suporta maximum 256 de culori. Imaginile PNG fotorealiste pierd vizibil calitate. Transparenta este suportata doar binar (vizibil/invizibil), nu ca alfa gradual ca in PNG.',
    'Pentru prezentari, grafica de newsletter sau sisteme care accepta doar GIF, aceasta conversie este o solutie rapida – complet local si fara upload de fisiere.',
  ],
  'png-to-tiff': [
    'Tipografiile, editurile si sistemele de arhivare cer adesea TIFF in loc de PNG. Conversia pastreaza calitatea completa, transparenta si adauga suport profesional de metadate.',
    'Fisierele TIFF sunt mai mari decat PNG, dar ofera avantaje pentru fluxuri profesionale: suport straturi in Photoshop, spatii de culoare CMYK pentru tipar si metadate complete. TIFF este standardul industrial pentru arhivare pe termen lung.',
    'Tipografiile din Romania lucreaza frecvent cu TIFF. Conversia locala permite procesarea machetelor confidentiale fara upload in cloud.',
  ],
  'jpg-to-webp': [
    'JPEG este formatul standard pentru fotografii digitale, dar pentru site-uri web dimensiunile sunt adesea prea mari. WebP comprima imaginile JPEG cu inca 25–35% fara pierdere vizibila de calitate, imbunatatind direct timpii de incarcare.',
    'Pentru magazine online pe Shopify, WooCommerce sau PrestaShop, trecerea de la JPG la WebP accelereaza masurabil paginile de produs. Google PageSpeed recomanda WebP ca format de noua generatie. La calitate 80–85%, diferenta este imperceptibila.',
    'In Romania, unde cerintele GDPR sunt stricte, procesarea locala a imaginilor in browser este deosebit de valoroasa. Fotografiile de produse nu parasesc dispozitivul dvs.',
  ],
  'jpg-to-png': [
    'Uneori un JPEG trebuie convertit intr-un format care suporta transparenta sau stocare fara pierderi – de exemplu pentru editare in Photoshop, Figma sau Canva.',
    'Conversia JPG la PNG nu restaureaza detaliile pierdute prin compresia JPEG, dar previne pierderi suplimentare in editarile viitoare. PNG este ideal cand imaginea serveste ca baza pentru colaje sau layout-uri de tipar.',
    'Pentru designeri si agentii din Romania, procesarea locala este ideala: materialul clientilor ramane pe propriul computer fara ca un serviciu extern sa aiba acces.',
  ],
  'jpg-to-avif': [
    'AVIF atinge pana la 50% compresie mai buna decat JPEG la calitate vizuala comparabila. Pentru site-uri cu multe fotografii – portaluri imobiliare, reviste online, site-uri de calatorii – timpii de incarcare se reduc considerabil.',
    'Platforme precum Imobiliare.ro, Booking.com sau OLX adopta tot mai mult AVIF pentru o experienta mobila mai buna. Chrome, Firefox si Safari 16+ il suporta nativ.',
    'Conversia locala in browser va protejeaza imaginile: fotografii imobiliare, de produse sau portrete – nimic nu se incarca pe server. Complet conform cu GDPR.',
  ],
  'jpg-to-gif': [
    'Conversia JPG la GIF este utila cand o fotografie este necesara ca grafica simpla – miniaturi in sisteme vechi sau newslettere care suporta doar GIF.',
    'GIF limiteaza paleta la 256 de culori, cauzand pierdere vizibila de calitate la fotografii. Pentru cele mai multe utilizari, WebP sau PNG sunt alegeri mai bune.',
    'Daca fluxul dvs. de lucru cere exclusiv GIF, conversia locala ofera o solutie rapida si conforma cu protectia datelor.',
  ],
  'jpg-to-tiff': [
    'Tipografiile profesionale si agentiile foto cer adesea TIFF in loc de JPEG. Conversia pastreaza calitatea actuala si o stocheaza fara pierderi pentru procesare ulterioara.',
    'Detaliile pierdute prin compresia JPEG nu se restaureaza, dar TIFF previne pierderi suplimentare. Suporta CMYK, straturi si metadate extinse – ideal pentru fluxuri profesionale de tipar.',
    'Fotografii si agentiile din Romania beneficiaza de procesarea locala: fotografiile clientilor si fisierele de tipar raman pe dispozitiv.',
  ],
  'heic-to-jpg': [
    'Utilizatorii de iPhone cunosc problema: fotografiile HEIC nu se deschid peste tot. PC-uri Windows, dispozitive Android, multe formulare web si clienti de e-mail nu suporta HEIC. Conversia la JPG rezolva imediat aceasta problema de compatibilitate.',
    'La calitate 85–90%, diferenta intre originalul HEIC si rezultatul JPG este vizual aproape imperceptibila. Dimensiunea ramane comparabila. Deosebit de practic: convertirea mai multor fotografii iPhone simultan.',
    'Pentru fotografii de CV, scanari de acte de identitate sau documente personale, procesarea locala este esentiala – datele sensibile nu parasesc niciodata dispozitivul dvs.',
  ],
  'heic-to-png': [
    'Daca doriti sa reutilizati fotografii iPhone fara pierderi – ca baza in Photoshop, Figma sau pentru proiecte de tipar – PNG este formatul tinta ideal.',
    'PNG suporta transparenta si stocare fara pierderi, spre deosebire de JPG. Fisierele PNG sunt insa semnificativ mai mari. Pentru editare in software grafic nu este un dezavantaj – pentru web se recomanda conversia ulterioara la WebP.',
    'Agentiile creative si fotografii beneficiaza de procesarea locala: fotografiile iPhone ale clientilor raman confidentiale pe propriul computer.',
  ],
  'heic-to-webp': [
    'Fotografii iPhone in format HEIC direct pentru site-uri web? WebP este puntea ideala: combina compresia eficienta a HEIC cu compatibilitatea universala a browserelor (Chrome, Firefox, Safari 14+, Edge).',
    'Conversia HEIC la WebP este deosebit de eficienta, ambele formate folosind algoritmi moderni. Pentru bloguri, magazine online si portofolii, este cea mai rapida cale de publicare a fotografiilor iPhone optimizate.',
    'Bloggeri si comercianti online din Romania pot converti fotografiile iPhone local si conform GDPR – fara servicii cloud sau instrumente externe.',
  ],
  'heic-to-avif': [
    'AVIF ofera eficienta de compresie similara cu HEIC, dar ca format deschis nu este legat de ecosistemul Apple. HEIC la AVIF permite compresia cea mai moderna cu suport larg multiplatforma.',
    'Chrome, Firefox si Safari 16+ suporta AVIF nativ. Pentru proiecte web critice in performanta – galerii, portofolii, portaluri imobiliare – AVIF ofera cel mai bun echilibru.',
    'Conversia locala este deosebit de relevanta pentru fotografi: sedintele iPhone se convertesc direct in cel mai eficient format web – fara cloud.',
  ],
  'heic-to-tiff': [
    'Fotografii profesionisti care lucreaza cu iPhone au adesea nevoie de TIFF pentru post-productie in Lightroom, Capture One sau Photoshop.',
    'TIFF suporta adancime de culoare 16 biti, straturi si metadate EXIF/IPTC extinse. Pentru tipar, arhivare si retusare profesionala, TIFF este formatul preferat. Fisierele devin insa considerabil mai mari.',
    'In Romania, unde tipografii si agentii foto cer TIFF ca standard, conversia locala ofera un flux de lucru sigur pentru sedinte confidentiale.',
  ],
  'webp-to-jpg': [
    'WebP este optim pentru web, dar servicii de tipar, Microsoft Office, software mai vechi si unele retele sociale cer JPG.',
    'WebP la JPG asigura compatibilitate maxima. La calitate 85–90%, calitatea ramane aproape identica. Practic pentru trimiterea imaginilor prin e-mail destinatarilor care nu pot deschide WebP.',
    'Pentru agentii care trebuie sa livreze imagini in formate universale, conversia locala este ideala – rapida, sigura si conforma cu GDPR.',
  ],
  'webp-to-png': [
    'Imaginile WebP cu transparenta trebuie uneori convertite la PNG – pentru programe grafice fara suport WebP sau fisiere de tipar care cer calitate fara pierderi.',
    'Conversia pastreaza complet transparenta si calitatea. PNG-urile sunt mai mari dar mai potrivite pentru Photoshop, Illustrator si platforme fara suport WebP.',
    'Designerii din Romania pot converti local asset-uri WebP in PNG-uri gata de tipar – fara cloud si conform GDPR.',
  ],
  'webp-to-avif': [
    'AVIF ofera compresie si mai buna decat WebP – urmatorul pas logic pentru site-uri care doresc sa optimizeze si mai mult timpii de incarcare.',
    'La calitate comparabila, fisierele AVIF sunt cu 20–30% mai mici decat WebP. Pentru site-uri cu sute de imagini, economia este considerabila. Fallback WebP prin <code>&lt;picture&gt;</code> acopera browserele mai vechi.',
    'Magazinele online romanesti care optimizeaza Core Web Vitals beneficiaza in special de AVIF. Conversia locala evita incarcarea in cloud.',
  ],
  'webp-to-gif': [
    'Formatul GIF este uneori necesar – sisteme vechi, instrumente de newsletter sau platforme care accepta doar GIF.',
    'GIF suporta maximum 256 de culori. Imaginile fotorealiste pierd calitate. Conversia este mai potrivita pentru grafica simpla, pictograme sau logo-uri.',
    'Procesarea locala ofera o alternativa rapida si sigura la serviciile de conversie online.',
  ],
  'webp-to-tiff': [
    'Fluxurile profesionale de tipar cer adesea TIFF. WebP la TIFF permite pregatirea imaginilor web-optimizate pentru tipar.',
    'TIFF stocheaza fara pierderi cu suport complet de metadate. Detaliile pierdute prin compresia WebP nu se restaureaza – pentru cea mai buna calitate, porniti de la original.',
    'Pentru agentii si tipografii din Romania, conversia locala ofera un mod sigur de a pregati asset-uri web pentru proiecte de tipar.',
  ],
  'svg-to-jpg': [
    'Grafica vectoriala SVG nu este acceptata peste tot: retele sociale, marketplace-uri si multe CMS-uri accepta doar formate raster. Conversia la JPG creeaza fisiere universal compatibile.',
    'Rasterizarea converteste vectorul in pixeli la rezolutie fixa. Zonele transparente se umplu cu culoare de fundal (alb implicit). Pentru web se recomanda 1200–2000 px latime.',
    'Pentru postari pe social media si anunturi pe OLX.ro, eMAG.ro sau Amazon, SVG la JPG este o cerinta obisnuita.',
  ],
  'svg-to-png': [
    'SVG este adesea convertit la PNG pentru retele sociale, mesagerie si semnaturi de e-mail – pastrand transparenta cu compatibilitate larga.',
    'Rasterizarea la PNG pastreaza complet zonele transparente – ideal pentru logo-uri pe fundauri diferite. Excelent si pentru capturi de documentatie si prezentari.',
    'Pentru agentii care livreaza logo-uri in diferite formate, SVG la PNG este un flux de lucru rapid si conform cu protectia datelor.',
  ],
  'svg-to-webp': [
    'Pentru site-uri care nu pot integra SVG direct – CMS-uri cu suport SVG limitat – WebP ofera o reprezentare pixel compacta cu dimensiune minima.',
    'Fisierele WebP din surse SVG sunt de obicei foarte usoare (5–30 KB) si se incarca instantaneu. Pentru pictograme si logo-uri, este solutia cea mai pragmatica.',
    'WordPress, PrestaShop si multe CMS-uri din Romania suporta WebP nativ – conversia permite utilizarea graficii vectoriale si in aceste medii.',
  ],
  'svg-to-avif': [
    'AVIF ofera cea mai buna compresie pentru grafica vectoriala rasterizata. Pentru site-uri critice in performanta, SVG la AVIF este alegerea optima.',
    'Fisierele AVIF din surse SVG sunt extrem de compacte (3–15 KB). Fiecare kilobyte conteaza pentru Core Web Vitals: incarcare mai rapida imbunatateste LCP si clasamentul Google.',
    'Dezvoltatori web si specialisti SEO din Romania folosesc tot mai mult AVIF – conversia locala simplifica tranzitia.',
  ],
  'svg-to-gif': [
    'GIF este uneori necesar pentru pictograme in sisteme vechi, sabloane de e-mail sau forumuri. SVG la GIF creeaza fisiere compatibile si usoare.',
    'GIF limiteaza la 256 de culori. Pentru logo-uri monocrome este suficient; pentru ilustratii complexe cu degradeuri, nu. Transparenta doar binara.',
    'Pentru sabloane de newsletter si platforme vechi care accepta doar GIF, este o solutie locala rapida.',
  ],
  'svg-to-tiff': [
    'Tipografiile au adesea nevoie de imagini TIFF in loc de vectori. SVG la TIFF creeaza fisiere de inalta rezolutie fara pierderi pentru tipar profesional.',
    'TIFF stocheaza in calitate maxima cu adancime completa de culoare si metadate. Pentru carti de vizita, flyere si postere, se recomanda minim 300 DPI.',
    'Tipografiile din Romania accepta TIFF ca standard. Conversia locala protejeaza machetele si logo-urile confidentiale.',
  ],
  'gif-to-jpg': [
    'Imaginile GIF vechi trebuie uneori convertite la JPG – platforme care accepta doar JPEG sau optimizare pentru e-mail. Doar prima imagine a unui GIF animat se converteste.',
    'JPG ofera 16,7 milioane de culori in loc de 256 ale GIF. Fotografiile salvate accidental ca GIF beneficiaza de adancimea completa de culoare.',
    'Pentru arhivarea graficii vechi intr-un format modern si universal, conversia locala este rapida si conforma cu protectia datelor.',
  ],
  'gif-to-png': [
    'Conversia GIF la PNG este utila pentru stocare fara pierderi sau editare in programe grafice. PNG suporta culori pe 32 de biti si transparenta alfa graduala.',
    'La GIF-uri animate, doar prima imagine se converteste. Calitatea se pastreaza fara pierderi. PNG este ideal ca format intermediar pentru Photoshop, Figma sau Canva.',
    'Pentru actualizarea graficii web vechi, conversia locala ofera o solutie rapida si sigura fara servicii externe.',
  ],
  'gif-to-webp': [
    'WebP ofera compresie mult mai buna decat GIF. Modernizarea GIF-urilor vechi la WebP accelereaza perceptibil site-urile web.',
    'GIF-urile statice devin cu 30–60% mai mici ca WebP, cu milioane de culori in loc de 256, imbunatatind vizibil calitatea vizuala.',
    'Pentru optimizarea site-urilor vechi din Romania, trecerea de la GIF la WebP este un mod simplu de a imbunatati Core Web Vitals.',
  ],
  'gif-to-avif': [
    'AVIF depaseste GIF in toate privintele: compresie mai buna, milioane de culori, animatie moderna. Pentru modernizarea continutului web vechi, GIF la AVIF este cel mai eficient.',
    'Fisierele AVIF din surse GIF sunt drastic mai mici si vizual mai bune. Browserele mai vechi nu suporta inca AVIF – un fallback prin <code>&lt;picture&gt;</code> este recomandat.',
    'Pentru maximizarea timpilor de incarcare, trecerea de la GIF la AVIF ofera cel mai mare castig individual din toate schimbarile de format.',
  ],
  'tiff-to-jpg': [
    'Fisierele TIFF din fotografie profesionala sau scanere cantaresc adesea 20–100 MB. Conversia la JPG creeaza fisiere compacte – reducere tipica peste 95%.',
    'Transparenta si straturile se pierd. Pentru fotografie pura nu este o problema. La calitate 85–90%, calitatea vizuala ramane excelenta la cateva sute de KB.',
    'Fotografii si utilizatorii de scanere din Romania pot converti TIFF local si conform GDPR in JPG gata de trimis.',
  ],
  'tiff-to-png': [
    'Cand fisierele TIFF sunt necesare pentru editare in programe grafice sau site-uri cu transparenta, PNG este formatul potrivit – fara pierderi si universal compatibil.',
    'PNG pastreaza calitatea completa si transparenta TIFF-ului. Fisierele sunt mai mici decat TIFF dar mai mari decat JPEG/WebP. Pentru Figma, Canva sau Photoshop, PNG este ideal.',
    'Pentru pregatirea iesirilor de scaner si imaginilor de arhiva pentru utilizare online, conversia locala ofera un flux sigur si rapid.',
  ],
  'tiff-to-webp': [
    'TIFF la WebP realizeaza cea mai mare reducere: fisiere de 20–100 MB se micsoreaza adesea la 200 KB – 2 MB. Pentru publicarea fotografiilor profesionale pe web, este cel mai eficient.',
    'La calitate 80–85%, WebP mentine calitate vizuala excelenta. Pentru galerii, portofolii si reviste online: calitate profesionala la o fractiune din dimensiunea originala.',
    'Fotografii si agentiile din Romania pot converti sedinte de inalta rezolutie local in formate web-optimizate – fara cloud, conform GDPR.',
  ],
  'tiff-to-avif': [
    'AVIF ofera cea mai eficienta compresie pentru fisiere TIFF mari. Fotografii si scanari de inalta rezolutie se reduc drastic cu pierdere minima de calitate.',
    'Pentru galerii si site-uri portofoliu care cauta cele mai bune timpi de incarcare, TIFF la AVIF este fluxul optim. Chrome, Firefox si Safari 16+ suporta AVIF.',
    'Fotografii profesionisti din Romania beneficiaza de procesarea locala: fotografiile clientilor de inalta rezolutie optimizate sigur si conform GDPR.',
  ],
  'bmp-to-jpg': [
    'Fisierele BMP provin adesea din aplicatii Windows vechi sau scanere. Necomprimate si foarte mari – conversia la JPG reduce dimensiunea cu peste 95%.',
    'Un BMP de 10 MB devine ca JPG de obicei doar 200–400 KB. Pentru e-mail, documentatie si arhivare, este cel mai simplu mod de a economisi spatiu.',
    'Pentru migrarea arhivelor de imagini vechi si pregatirea iesirilor de scaner, conversia locala este rapida si conforma cu protectia datelor.',
  ],
  'bmp-to-png': [
    'BMP la PNG reduce dimensiunea prin compresie fara pierderi – calitatea completa se pastreaza. Ideal pentru grafica cu margini ascutite, text sau capturi de ecran.',
    'Spre deosebire de JPG, PNG pastreaza calitatea pixel exacta fara artefacte. Pentru documentatii tehnice si capturi cu text, PNG este alegerea mai buna.',
    'Conversia locala este potrivita pentru documente confidentiale si capturi interne – nimic nu se trimite la un server extern.',
  ],
  'bmp-to-webp': [
    'BMP este complet nepotrivit pentru web modern – necomprimat si enorm. WebP reduce dimensiunea pana la 97% cu calitate buna, modernizand imagini vechi pentru web.',
    'Conversia modernizeaza fisiere vechi Windows pentru site-uri, CMS-uri si magazine actuale. WebP este suportat de toate browserele moderne.',
    'Pentru companiile romanesti care pregatesc arhive vechi pentru prezenta web, conversia locala este eficienta si conforma GDPR.',
  ],
  'bmp-to-avif': [
    'AVIF ofera cea mai buna compresie pentru BMP necomprimate: reduceri peste 98% sunt realiste.',
    'AVIF suporta HDR, spatii de culoare largi si pana la 12 biti – calitatea originala se pastreaza optimal. Chrome, Firefox si Safari 16+ suporta nativ.',
    'Conversia locala permite migrarea arhivelor intregi fara cloud – rapida, sigura si conforma cu protectia datelor.',
  ],
  'bmp-to-gif': [
    'BMP la GIF este util pentru sisteme care accepta doar GIF sau grafica simpla cu putine culori unde GIF este mai compact.',
    'GIF suporta doar 256 de culori. Imaginile fotorealiste pierd calitate. Pentru fotografii, JPG sau WebP sunt de preferat. GIF este potrivit doar pentru grafica simpla.',
    'Pentru cerinte de compatibilitate ale sistemelor vechi, conversia locala ofera o solutie rapida si sigura.',
  ],
  'bmp-to-tiff': [
    'BMP la TIFF este util pentru suport profesional de metadate – arhivare, pregatire de tipar sau procesare in software profesional.',
    'TIFF pastreaza calitatea completa a BMP si adauga: metadate EXIF, CMYK si straturi. Pentru arhivare pe termen lung, TIFF este clar superior BMP.',
    'Arhive, biblioteci si companii romanesti care digitalizeaza fonduri vechi beneficiaza de conversia locala fara dependenta de cloud.',
  ],
  'avif-to-jpg': [
    'AVIF nu este inca suportat de dispozitive vechi, software de editare si unele platforme. Conversia la JPG asigura compatibilitate maxima.',
    'La calitate 85–90%, calitatea este aproape identica cu originalul AVIF. Util pentru e-mail catre destinatari cu sisteme vechi sau servicii de tipar care accepta doar JPEG.',
    'Pentru companii care au nevoie de imagini web-optimizate (AVIF) si universale (JPG), conversia locala este un flux de lucru eficient.',
  ],
  'avif-to-png': [
    'Imaginile AVIF cu transparenta trebuie uneori convertite la PNG – pentru programe grafice sau platforme fara suport AVIF.',
    'PNG pastreaza transparenta si calitatea fara pierderi. Fisierele sunt mai mari decat AVIF dar potrivite pentru Photoshop, Figma, Canva si tipar.',
    'Designerii din Romania folosesc conversia locala pentru pregatirea sigura a asset-urilor AVIF pentru diferite canale – conform GDPR.',
  ],
  'avif-to-webp': [
    'WebP ofera suport mai larg de browsere decat AVIF (Safari 14+ vs. 16+) cu compresie buna. Daca audienta dvs. foloseste browsere mai vechi, WebP este mai sigur.',
    'AVIF la WebP este relevant pentru CMS-uri si CDN-uri fara suport AVIF. WebP este suportat nativ de WordPress, Shopify, Cloudflare si toate browserele moderne.',
    'Pentru proiecte web din Romania care au nevoie de acoperire maxima de browsere, WebP ramane cel mai fiabil format modern.',
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
  const block = data.contentBlocks.find(b => b.type === 'sectionInfo' && !b.html.includes('<table') && (b.title.includes('practică') || b.title.includes('practic')));
  if (!block) { skipped++; continue; }
  block.html = `<p class="text-mid mb-4">${p1}</p><p class="text-mid mb-4">${p2}</p><p class="text-mid">${p3}</p>`;
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  updated++;
}
console.log(`RO sectionInfo: Updated: ${updated}, Skipped: ${skipped}`);
