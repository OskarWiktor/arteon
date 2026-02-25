/**
 * Phase 3: Contrast Checker — expand content for 14 non-EN/non-PL locales.
 * Adds: country-specific legal section, contrast math section, expanded FAQ.
 * Each locale gets UNIQUE content — no mirror translations.
 * Run: node scripts/_cc-locale-expand.cjs
 */
const fs = require('fs');
const path = require('path');

// Legal sections per locale — unique country-specific content
const LEGAL_SECTIONS = {
  cs: {
    title: "Právní požadavky na přístupnost v České republice",
    html: `<p class="text-mid mb-4">Česká republika implementovala směrnici EU o přístupnosti webu prostřednictvím <strong>Zákona č. 99/2019 Sb. o přístupnosti internetových stránek a mobilních aplikací</strong>. Zákon vyžaduje, aby veřejné instituce splňovaly normu EN 301 549, která odkazuje na WCAG 2.1 úrovně AA.</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Veřejný sektor</strong> — od roku 2020 musí weby státní správy, krajů, obcí a organizací zřízených zákonem splňovat WCAG 2.1 AA.</li><li><strong>Evropský akt o přístupnosti (EAA)</strong> — od června 2025 se povinnost rozšiřuje na soukromý sektor: e-shopy, bankovnictví, dopravní služby a mediální platformy.</li><li><strong>Slovensko</strong> — zákon č. 95/2019 Z. z. stanovuje obdobné požadavky. Pokud obsluhujete český i slovenský trh, platí pro oba stejné standardy WCAG 2.1 AA.</li></ul><p class="text-mid mt-3">Kontrastní poměr 4,5:1 pro běžný text a 3:1 pro velký text je vyžadován všemi výše uvedenými předpisy. Tento nástroj kontroluje přesně tyto prahy.</p>`
  },
  da: {
    title: "Tilgængelighedskrav i Danmark",
    html: `<p class="text-mid mb-4">Danmark har implementeret EU's webtilgængelighedsdirektiv gennem <strong>Webtilgængelighedsloven (Lov nr. 692 af 8. juni 2018)</strong>. Loven kræver, at alle offentlige organers websteder og mobilapplikationer overholder WCAG 2.1 niveau AA.</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Offentlig sektor</strong> — alle statslige, regionale og kommunale websteder skal overholde WCAG 2.1 AA. Digitaliseringsstyrelsen fører tilsyn.</li><li><strong>EU's tilgængelighedslov (EAA)</strong> — fra juni 2025 udvides kravene til den private sektor: webshops, banker, transporttjenester og medieplatforme.</li><li><strong>Skandinavisk kontekst</strong> — Danmark, Sverige og Norge deler en stærk tilgængelighedskultur. Danske virksomheder, der opererer i hele Skandinavien, bør opfylde det strengeste krav (Norges lov dækker også den private sektor).</li></ul><p class="text-mid mt-3">Kontrastforholdet 4,5:1 for normal tekst og 3:1 for stor tekst er lovkrav. Dette værktøj kontrollerer netop disse tærskler.</p>`
  },
  de: {
    title: "Barrierefreiheitsgesetze in Deutschland, Österreich und der Schweiz",
    html: `<p class="text-mid mb-4">Die DACH-Region hat umfassende Vorschriften zur digitalen Barrierefreiheit:</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Deutschland — BFSG (Barrierefreiheitsstärkungsgesetz)</strong>: Seit Juni 2025 müssen Produkte und Dienstleistungen im Online-Handel barrierefrei sein. Die BITV 2.0 verweist auf WCAG 2.1 AA als technischen Standard für Bundesbehörden.</li><li><strong>Deutschland — BGG (Behindertengleichstellungsgesetz)</strong>: Verpflichtet Bundesbehörden zur barrierefreien Gestaltung ihrer Webauftritte.</li><li><strong>Österreich — Web-Zugänglichkeits-Gesetz (WZG)</strong>: Setzt die EU-Richtlinie um. Öffentliche Stellen müssen WCAG 2.1 AA erfüllen. Die Monitoring-Stelle der FFG prüft die Einhaltung.</li><li><strong>Schweiz — BehiG (Behindertengleichstellungsgesetz)</strong>: Gilt für Bundesverwaltung und bundesnahe Betriebe. Die eCH-Standards empfehlen WCAG 2.1 AA für alle öffentlichen Webauftritte.</li></ul><p class="text-mid mt-3">Alle genannten Vorschriften verlangen einen Kontrastwert von mindestens 4,5:1 für Fließtext und 3:1 für große Schrift. Dieses Tool prüft exakt diese Schwellenwerte.</p>`
  },
  el: {
    title: "Νομικές απαιτήσεις προσβασιμότητας στην Ελλάδα",
    html: `<p class="text-mid mb-4">Η Ελλάδα ενσωμάτωσε την Οδηγία της ΕΕ για την προσβασιμότητα του ιστού μέσω του <strong>Ν. 4591/2019</strong>. Ο νόμος απαιτεί από τους φορείς του δημόσιου τομέα να πληρούν το πρότυπο EN 301 549, που αντιστοιχεί στο WCAG 2.1 επιπέδου AA.</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Δημόσιος τομέας</strong> — ιστότοποι δημόσιων υπηρεσιών, δήμων και οργανισμών κοινής ωφέλειας πρέπει να πληρούν WCAG 2.1 AA.</li><li><strong>Ευρωπαϊκός Νόμος Προσβασιμότητας (EAA)</strong> — από τον Ιούνιο 2025, οι υποχρεώσεις επεκτείνονται στον ιδιωτικό τομέα: ηλεκτρονικό εμπόριο, τράπεζες, μεταφορές.</li><li><strong>Κύπρος</strong> — ο Ν. 50(Ι)/2019 θέτει αντίστοιχες απαιτήσεις. Αν εξυπηρετείτε και τις δύο αγορές, ισχύουν τα ίδια πρότυπα WCAG 2.1 AA.</li><li><strong>Τουριστικός κλάδος</strong> — ιστότοποι ξενοδοχείων, αεροπορικών εταιρειών και τουριστικών υπηρεσιών αποτελούν προτεραιότητα, καθώς εξυπηρετούν διεθνές κοινό με ποικίλες ανάγκες προσβασιμότητας.</li></ul>`
  },
  es: {
    title: "Legislación de accesibilidad en España y Latinoamérica",
    html: `<p class="text-mid mb-4">España cuenta con una legislación detallada sobre accesibilidad digital, y varios países latinoamericanos están adoptando estándares similares:</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>España — Real Decreto 1112/2018</strong>: Exige que los sitios web y aplicaciones del sector público cumplan la norma EN 301 549, que referencia WCAG 2.1 nivel AA. El organismo supervisor es el Ministerio de Asuntos Económicos.</li><li><strong>Ley Europea de Accesibilidad (EAA)</strong> — desde junio de 2025, la obligación se extiende al sector privado: comercio electrónico, banca, transporte y plataformas de medios.</li><li><strong>México — NOM-IMNC-I (en desarrollo)</strong>: México trabaja en una norma nacional de accesibilidad web basada en WCAG. Varias instituciones públicas ya aplican WCAG 2.0 AA.</li><li><strong>Argentina — Ley 26.653 (2010)</strong>: Obliga a organismos estatales a hacer sus sitios web accesibles conforme a las WCAG.</li><li><strong>Colombia — Resolución 1519 de 2020</strong>: Exige a entidades públicas cumplir WCAG 2.1 AA.</li></ul><p class="text-mid mt-3">Los umbrales de contraste son universales en todos estos estándares: 4,5:1 para texto normal y 3:1 para texto grande.</p>`
  },
  fi: {
    title: "Saavutettavuusvaatimukset Suomessa",
    html: `<p class="text-mid mb-4">Suomi on implementoinut EU:n saavutettavuusdirektiivin <strong>Lailla digitaalisten palvelujen tarjoamisesta (306/2019)</strong>. Laki edellyttää julkisen sektorin verkkopalveluilta WCAG 2.1 AA -tason noudattamista.</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Julkinen sektori</strong> — valtion, kuntien ja hyvinvointialueiden verkkopalvelujen on täytettävä WCAG 2.1 AA. Etelä-Suomen aluehallintovirasto (AVI) valvoo noudattamista.</li><li><strong>EU:n esteettömyysdirektiivi (EAA)</strong> — kesäkuusta 2025 alkaen vaatimukset laajenevat yksityiselle sektorille: verkkokaupat, pankit, liikennepalvelut ja mediapalvelut.</li><li><strong>Suomalainen erityispiirre</strong> — Suomen digitaalinen julkishallinto on Euroopan edistyneimpiä. Suurin osa viranomaispalveluista toimii verkossa, mikä tekee saavutettavuudesta erityisen tärkeää.</li></ul><p class="text-mid mt-3">Kontrastisuhde 4,5:1 tavalliselle tekstille ja 3:1 suurelle tekstille on lakisääteinen vaatimus. Tämä työkalu tarkistaa juuri nämä kynnysarvot.</p>`
  },
  fr: {
    title: "Obligations légales d'accessibilité en France, Belgique et Suisse",
    html: `<p class="text-mid mb-4">La France dispose d'un cadre réglementaire parmi les plus stricts d'Europe en matière d'accessibilité numérique :</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>France — RGAA 4.1</strong> (Référentiel Général d'Amélioration de l'Accessibilité) : basé sur les WCAG 2.1 AA, il s'applique aux administrations publiques et aux entreprises dont le chiffre d'affaires dépasse 250 millions d'euros. Les amendes atteignent 50 000 € par infraction.</li><li><strong>Loi Européenne sur l'Accessibilité (EAA)</strong> — depuis juin 2025, les obligations s'étendent au secteur privé : e-commerce, banques, transports et plateformes médias.</li><li><strong>Belgique</strong> — le Bestuursdecreet (Flandre) et les équivalents wallons/bruxellois imposent WCAG 2.1 AA aux sites publics.</li><li><strong>Suisse</strong> — la LHand (Loi sur l'égalité pour les handicapés) couvre l'administration fédérale. La norme eCH-0059 recommande WCAG 2.1 AA.</li></ul><p class="text-mid mt-3">Le ratio de contraste de 4,5:1 pour le texte courant et 3:1 pour le grand texte est requis par l'ensemble de ces réglementations.</p>`
  },
  hu: {
    title: "Akadálymentesítési követelmények Magyarországon",
    html: `<p class="text-mid mb-4">Magyarország az EU webes akadálymentesítési irányelvét az <strong>1998. évi XXVI. törvény (Akadálymentesítési törvény)</strong> módosításával ültette át. A digitális akadálymentesítés szabályozása azonban korlátozott a fizikai akadálymentesítéshez képest.</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Közszféra</strong> — a 2018/1784. Korm. rendelet előírja az EN 301 549 szabvány teljesítését, amely a WCAG 2.1 AA szintre hivatkozik. Az állami, önkormányzati és közintézményi weboldalakra vonatkozik.</li><li><strong>Európai Akadálymentesítési Irányelv (EAA)</strong> — 2025 júniusától a követelmények kiterjednek a magánszektorra: webáruházak, banki szolgáltatások, közlekedés és médiaplatformok.</li><li><strong>Magyar sajátosság</strong> — a digitális akadálymentesítés felügyelete egyelőre kevésbé kidolgozott, mint Nyugat-Európában, de az EAA hatálybalépése várhatóan felgyorsítja a fejlődést.</li></ul><p class="text-mid mt-3">A kontraszt arány 4,5:1 a normál szöveghez és 3:1 a nagy szöveghez az összes fenti előírás által megkövetelt érték.</p>`
  },
  it: {
    title: "Requisiti di accessibilità in Italia",
    html: `<p class="text-mid mb-4">L'Italia ha una delle legislazioni sull'accessibilità digitale più consolidate d'Europa:</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Legge Stanca (L. 4/2004)</strong> — impone l'accessibilità dei siti web della pubblica amministrazione secondo le linee guida AgID, basate sulle WCAG 2.1 AA.</li><li><strong>Decreto Legislativo 106/2018</strong> — recepisce la direttiva UE sull'accessibilità web, estendendo gli obblighi a enti pubblici e concessionari di servizi pubblici.</li><li><strong>Obbligo per il settore privato (2025)</strong> — dal giugno 2025 le aziende con fatturato superiore a 500 milioni di euro devono rendere accessibili i propri servizi digitali. L'AgID è l'organismo di vigilanza.</li><li><strong>Legge Europea sull'Accessibilità (EAA)</strong> — estende ulteriormente gli obblighi a e-commerce, servizi bancari, trasporti e piattaforme multimediali.</li></ul><p class="text-mid mt-3">Il rapporto di contrasto minimo di 4,5:1 per il testo normale e 3:1 per il testo grande è richiesto da tutte le normative citate.</p>`
  },
  nl: {
    title: "Toegankelijkheidsvereisten in Nederland en België",
    html: `<p class="text-mid mb-4">Nederland en België hebben uitgebreide regelgeving voor digitale toegankelijkheid:</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Nederland — Besluit digitale toegankelijkheid overheid</strong>: verplicht overheidswebsites en -apps om te voldoen aan WCAG 2.1 niveau AA. Logius voert de monitoring uit.</li><li><strong>Tijdelijk besluit digitale toegankelijkheid</strong> — overgangsregeling die de naleving stapsgewijs uitbreidt naar meer overheidsinstanties.</li><li><strong>België — Bestuursdecreet (Vlaanderen)</strong>: verplicht Vlaamse overheidssites tot WCAG 2.1 AA. Wallonië en Brussel hebben vergelijkbare besluiten.</li><li><strong>EU-Toegankelijkheidswet (EAA)</strong> — vanaf juni 2025 gelden de eisen ook voor de private sector: webshops, banken, vervoersdiensten en mediaplatforms.</li></ul><p class="text-mid mt-3">De contrastverhouding van 4,5:1 voor normale tekst en 3:1 voor grote tekst is een wettelijke verplichting in beide landen.</p>`
  },
  no: {
    title: "Krav til universell utforming i Norge",
    html: `<p class="text-mid mb-4">Norge har en av Europas strengeste lover om universell utforming — den gjelder <strong>også privat sektor</strong>, ikke bare offentlige virksomheter:</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Forskrift om universell utforming av IKT</strong> — krever at alle nettsteder og apper rettet mot allmennheten oppfyller WCAG 2.1 nivå AA. Gjelder både offentlig og privat sektor.</li><li><strong>Likestillings- og diskrimineringsloven</strong> — forbyr diskriminering på grunn av funksjonsnedsettelse, inkludert utilgjengelige digitale tjenester.</li><li><strong>Digitaliseringsdirektoratet (Digdir)</strong> — fører tilsyn og kan gi pålegg og dagbøter ved brudd.</li><li><strong>Strengere enn EU</strong> — mens EU-direktivet primært dekker offentlig sektor (med EAA fra 2025 for privat), har Norge allerede krevd universell utforming fra privat sektor i mange år.</li></ul><p class="text-mid mt-3">Kontrastforholdet 4,5:1 for vanlig tekst og 3:1 for stor tekst er lovpålagt. Dette verktøyet sjekker nøyaktig disse tersklene.</p>`
  },
  pt: {
    title: "Requisitos de acessibilidade em Portugal e no Brasil",
    html: `<p class="text-mid mb-4">Portugal e o Brasil possuem legislações distintas mas convergentes em matéria de acessibilidade digital:</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Portugal — DL 83/2018</strong>: transpõe a diretiva europeia de acessibilidade web. Obriga organismos públicos a cumprir a norma EN 301 549, que referencia as WCAG 2.1 nível AA.</li><li><strong>Lei Europeia de Acessibilidade (EAA)</strong> — desde junho de 2025, as obrigações estendem-se ao setor privado: comércio eletrónico, banca, transportes e plataformas de media.</li><li><strong>Brasil — Lei Brasileira de Inclusão (13.146/2015)</strong>: exige que sítios web de organismos públicos e de empresas com presença digital significativa sejam acessíveis.</li><li><strong>Brasil — eMAG</strong> (Modelo de Acessibilidade em Governo Eletrônico): referencia as WCAG e define diretrizes específicas para portais governamentais brasileiros.</li></ul><p class="text-mid mt-3">O rácio de contraste de 4,5:1 para texto normal e 3:1 para texto grande é exigido por todas as regulamentações acima.</p>`
  },
  ro: {
    title: "Cerințe de accesibilitate în România",
    html: `<p class="text-mid mb-4">România a transpus directiva europeană privind accesibilitatea web prin <strong>OUG 112/2018</strong>, ulterior modificată prin Legea 198/2019.</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Sectorul public</strong> — site-urile instituțiilor publice, autorităților locale și entităților finanțate din fonduri publice trebuie să respecte EN 301 549, care face referire la WCAG 2.1 nivel AA.</li><li><strong>ANCOM</strong> — Autoritatea Națională pentru Administrare și Reglementare în Comunicații monitorizează conformitatea.</li><li><strong>Actul European de Accesibilitate (EAA)</strong> — din iunie 2025, obligațiile se extind la sectorul privat: magazine online, servicii bancare, transport și platforme media.</li><li><strong>Piața digitală emergentă</strong> — România are una dintre cele mai rapide creșteri de digitalizare din UE, ceea ce face accesibilitatea deosebit de importantă pe măsură ce tot mai multe servicii se mută online.</li></ul><p class="text-mid mt-3">Raportul de contrast de 4,5:1 pentru text normal și 3:1 pentru text mare este cerut de toate reglementările menționate.</p>`
  },
  sv: {
    title: "Tillgänglighetskrav i Sverige",
    html: `<p class="text-mid mb-4">Sverige har implementerat EU:s webbtillgänglighetsdirektiv genom <strong>DOS-lagen (2018:1937)</strong> — Lagen om tillgänglighet till digital offentlig service.</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Offentlig sektor</strong> — alla statliga, regionala och kommunala webbplatser och appar ska uppfylla WCAG 2.1 nivå AA. Myndigheten för digital förvaltning (DIGG) övervakar efterlevnaden.</li><li><strong>EU:s tillgänglighetsdirektiv (EAA)</strong> — från juni 2025 utvidgas kraven till den privata sektorn: e-handel, banker, transporttjänster och medieplattformar.</li><li><strong>Svensk tillgänglighetskultur</strong> — Sverige har en stark tradition av inkluderande design. Många svenska företag uppfyller redan WCAG AA frivilligt, och konsumenter förväntar sig tillgängliga digitala tjänster.</li></ul><p class="text-mid mt-3">Kontrastförhållandet 4,5:1 för normal text och 3:1 för stor text är ett lagkrav. Detta verktyg kontrollerar exakt dessa tröskelvärden.</p>`
  }
};

// Extra FAQ items per locale — unique questions per region
const EXTRA_FAQ = {
  cs: [
    { question: "Vyžaduje český zákon splnění kontrastu barev?", answer: "Ano. Zákon č. 99/2019 Sb. vyžaduje, aby veřejné webové stránky splňovaly normu EN 301 549, která odkazuje na WCAG 2.1 AA. To zahrnuje minimální kontrast 4,5:1 pro běžný text a 3:1 pro velký text. Od června 2025 Evropský akt o přístupnosti rozšiřuje povinnost i na soukromý sektor." },
    { question: "Co je standard WCAG a proč na něj odkazují české zákony?", answer: "WCAG (Web Content Accessibility Guidelines) je mezinárodní soubor pokynů pro přístupnost webu vyvinutý organizací W3C. Definuje mimo jiné minimální kontrastní hodnoty, strukturu nadpisů a podporu klávesnice. České zákony odkazují na WCAG prostřednictvím evropské normy EN 301 549." },
    { question: "Jak zjistím barvy použité na své webové stránce?", answer: "V prohlížeči (Chrome, Firefox, Edge) otevřete vývojářské nástroje (pravým kliknutím > Prozkoumat). Na kartě Styly vidíte barvy použité na stránce. Rozšíření jako ColorZilla umožňují vybrat barvu libovolného prvku bez otevírání kódu." },
    { question: "Funguje tento nástroj pro tmavý režim?", answer: "Ano. Nástroj kontroluje kontrastní poměr mezi libovolnými dvěma barvami bez ohledu na to, která je světlejší. Pro tmavý režim zadejte světlou barvu textu a tmavé pozadí. Platí stejné prahy WCAG — 4,5:1 pro běžný text (AA) a 7:1 (AAA)." },
    { question: "Jaký je rozdíl mezi WCAG 2.0, 2.1 a 2.2?", answer: "WCAG 2.0 (2008) zavedlo původní požadavky na kontrast. WCAG 2.1 (2018) přidalo kritéria pro mobilní přístupnost a zhoršené vidění. WCAG 2.2 (2023) přidává další kritéria, ale nemění prahy kontrastního poměru. Požadavky na kontrast (1.4.3 a 1.4.6) zůstávají stejné ve všech verzích." },
    { question: "Kde najdu kódy barev z mého webu?", answer: "V prohlížeči otevřete vývojářské nástroje (Ctrl+Shift+I). V panelu Styly uvidíte barvy prvků. Alternativně použijte rozšíření jako ColorZilla pro výběr barvy kliknutím na libovolný prvek stránky." }
  ],
  da: [
    { question: "Kræver dansk lov farvekontrast på websites?", answer: "Ja. Webtilgængelighedsloven (Lov nr. 692/2018) kræver, at offentlige websites overholder WCAG 2.1 AA, inkludert kontrastforhold på 4,5:1 for normal tekst og 3:1 for stor tekst. Fra juni 2025 udvider EU's tilgængelighedslov kravet til den private sektor." },
    { question: "Hvad er WCAG-standarden?", answer: "WCAG (Web Content Accessibility Guidelines) er internationale retningslinjer for webtilgængelighed udviklet af W3C. De definerer bl.a. minimumkontrastværdier, overskriftsstruktur og tastaturunderstøttelse. Danske love refererer til WCAG via den europæiske standard EN 301 549." },
    { question: "Hvordan finder jeg farvekoder fra min hjemmeside?", answer: "I browseren (Chrome, Firefox, Edge) kan du åbne udviklerværktøjer (højreklik > Inspicér). Under fanen Styles kan du se farverne på siden. Alternativt kan browserudvidelser som ColorZilla lade dig vælge farven på ethvert element." },
    { question: "Virker dette værktøj til mørk tilstand?", answer: "Ja. Værktøjet tjekker kontrastforholdet mellem to farver uanset hvilken der er lysere. For mørk tilstand indtaster du en lys tekstfarve og en mørk baggrundsfarve. De samme WCAG-tærskler gælder — 4,5:1 for normal tekst (AA) og 7:1 (AAA)." },
    { question: "Hvad er forskellen mellem WCAG-niveau AA og AAA?", answer: "AA kræver 4,5:1 kontrast for normal tekst og 3:1 for stor tekst — dette er det lovmæssige minimum. AAA kræver 7:1 for normal tekst og 4,5:1 for stor tekst — bedre læsbarhed, men sværere at opnå. For kritisk indhold (advarsler, sikkerhedsinstruktioner) anbefales AAA." },
    { question: "Hvilke farvepar på min hjemmeside skal jeg tjekke først?", answer: "Vigtigst: tekst på hovedbaggrunden, tekst på bannere og farvede sektioner, knapper (tekstfarve og knapbaggrund i forhold til sidebaggrunden), links og ikoner." }
  ],
  de: [
    { question: "Wie wirkt sich das BFSG auf meine Website aus?", answer: "Das Barrierefreiheitsstärkungsgesetz (BFSG) ist seit Juni 2025 in Kraft. Es verpflichtet Anbieter von Produkten und Dienstleistungen im Online-Handel zur digitalen Barrierefreiheit. Die referenzierte Norm EN 301 549 verweist auf WCAG 2.1 AA — einschließlich der Kontrast-Schwellenwerte 4,5:1 und 3:1, die dieses Tool prüft." },
    { question: "Muss ich als Schweizer Unternehmen die gleichen Standards erfüllen?", answer: "Ja. Das Schweizer BehiG (Behindertengleichstellungsgesetz) gilt für die Bundesverwaltung und bundesnahe Betriebe. Die eCH-Standards empfehlen WCAG 2.1 AA. Wenn Sie Kunden in der EU bedienen, gelten zusätzlich die EU-Vorschriften (EAA ab Juni 2025)." },
    { question: "Wo finde ich die Farbcodes meiner Website?", answer: "Im Browser (Chrome, Firefox, Edge) öffnen Sie die Entwicklertools (Rechtsklick > Untersuchen). Im Reiter Styles sehen Sie die verwendeten Farben. Alternativ können Browser-Erweiterungen wie ColorZilla die Farbe jedes Elements direkt auswählen." },
    { question: "Was ist der minimale sichere Grauton auf weißem Hintergrund?", answer: "Der dunkelste Grauton, der WCAG AA auf reinem Weiß (#ffffff) besteht, ist #767676 mit einem Verhältnis von 4,54:1. Hellere Töne wie #999999 (2,85:1) fallen durch. Für AAA (7:1) benötigen Sie mindestens #595959." }
  ],
  el: [
    { question: "Ο ελληνικός νόμος απαιτεί αντίθεση χρωμάτων;", answer: "Ναι. Ο Ν. 4591/2019 υποχρεώνει τους φορείς του δημόσιου τομέα να πληρούν το EN 301 549, που αντιστοιχεί στο WCAG 2.1 AA. Αυτό περιλαμβάνει αναλογία αντίθεσης 4,5:1 για κανονικό κείμενο και 3:1 για μεγάλο κείμενο. Από τον Ιούνιο 2025, η EAA επεκτείνει τις υποχρεώσεις στον ιδιωτικό τομέα." },
    { question: "Πού μπορώ να βρω κωδικούς χρωμάτων από τον ιστότοπό μου;", answer: "Στον browser (Chrome, Firefox, Edge) ανοίξτε τα εργαλεία ανάπτυξης (δεξί κλικ > Επιθεώρηση). Στην καρτέλα Styles βλέπετε τα χρώματα της σελίδας. Εναλλακτικά, επεκτάσεις όπως ColorZilla επιτρέπουν την επιλογή χρώματος οποιουδήποτε στοιχείου." },
    { question: "Λειτουργεί αυτό το εργαλείο για σκοτεινή λειτουργία;", answer: "Ναι. Το εργαλείο ελέγχει την αναλογία αντίθεσης μεταξύ δύο χρωμάτων ανεξάρτητα από το ποιο είναι φωτεινότερο. Για σκοτεινή λειτουργία, εισάγετε ανοιχτό χρώμα κειμένου και σκούρο φόντο. Ισχύουν τα ίδια κατώφλια WCAG." },
    { question: "Τι είναι η αναλογία αντίθεσης 4,5:1;", answer: "Σημαίνει ότι το φωτεινότερο χρώμα είναι τουλάχιστον 4,5 φορές πιο φωτεινό από το σκοτεινότερο. Η κλίμακα κυμαίνεται από 1:1 (κανένα κοντράστ) έως 21:1 (μαύρο σε λευκό). Η τιμή 4,5:1 είναι το ελάχιστο WCAG AA για κανονικό κείμενο." }
  ],
  es: [
    { question: "¿Cómo afecta la EAA a mi sitio web en España?", answer: "La Ley Europea de Accesibilidad (EAA) está en vigor desde junio de 2025. Obliga a empresas del sector privado que operan en la UE — comercio electrónico, banca, transporte — a garantizar la accesibilidad digital. La norma referenciada es EN 301 549, que mapea a WCAG 2.1 AA, incluidos los umbrales de contraste 4,5:1 y 3:1." },
    { question: "¿Los sitios web en Latinoamérica también deben cumplir el contraste?", answer: "Varios países tienen legislación: Argentina (Ley 26.653), Colombia (Resolución 1519/2020) y México (normas en desarrollo). Todos referencian WCAG. Aunque la aplicación varía, los umbrales de contraste 4,5:1 y 3:1 son universales." },
    { question: "¿Cuál es el color gris mínimo seguro sobre fondo blanco?", answer: "El gris más oscuro que pasa WCAG AA sobre blanco (#ffffff) es #767676, con una relación exacta de 4,54:1. Grises más claros como #999999 (2,85:1) no cumplen. Para AAA (7:1) se necesita al menos #595959." },
    { question: "¿Funciona esta herramienta para diseños en modo oscuro?", answer: "Sí. La herramienta calcula la relación de contraste entre dos colores cualesquiera sin importar cuál es más claro. Para modo oscuro, introduce un color de texto claro y un fondo oscuro. Los mismos umbrales WCAG aplican: 4,5:1 para texto normal (AA) y 7:1 (AAA)." }
  ],
  fi: [
    { question: "Vaatiiko Suomen laki värikontrastia verkkosivuilla?", answer: "Kyllä. Laki digitaalisten palvelujen tarjoamisesta (306/2019) edellyttää julkisen sektorin verkkosivujen noudattavan EN 301 549 -standardia, joka viittaa WCAG 2.1 AA:han. Tämä sisältää kontrastisuhteen 4,5:1 tavalliselle tekstille ja 3:1 suurelle tekstille. EU:n esteettömyysdirektiivi laajentaa vaatimuksen yksityiselle sektorille kesäkuusta 2025." },
    { question: "Mikä on WCAG-standardi?", answer: "WCAG (Web Content Accessibility Guidelines) on W3C:n kehittämä kansainvälinen verkkosisällön saavutettavuusohjeisto. Se määrittelee mm. vähimmäiskontrastiarvot, otsikkorakenteen ja näppäimistötuen. Suomen laki viittaa WCAG:hen eurooppalaisen EN 301 549 -standardin kautta." },
    { question: "Miten löydän verkkosivuni värikoodit?", answer: "Selaimessa (Chrome, Firefox, Edge) avaa kehittäjätyökalut (oikea klikkaus > Tutki). Styles-välilehdellä näet sivun värit. Vaihtoehtoisesti ColorZilla-laajennus mahdollistaa minkä tahansa elementin värin valinnan." },
    { question: "Toimiiko tämä työkalu tumman tilan suunnitteluun?", answer: "Kyllä. Työkalu laskee kontrastisuhteen minkä tahansa kahden värin välillä riippumatta siitä, kumpi on vaaleampi. Tummassa tilassa syötä vaalea tekstiväri ja tumma taustaväri. Samat WCAG-kynnysarvot pätevät." },
    { question: "Mikä on turvallinen harmaan vähimmäissävy valkoisella taustalla?", answer: "Tummin harmaa, joka läpäisee WCAG AA:n puhtaalla valkoisella (#ffffff), on #767676 suhteella 4,54:1. Vaaleammat sävyt kuten #999999 (2,85:1) eivät läpäise. AAA-vaatimukseen (7:1) tarvitaan vähintään #595959." },
    { question: "Mikä ero on WCAG 2.1 ja 2.2 välillä?", answer: "WCAG 2.1 (2018) lisäsi kriteerejä mobiilisaavutettavuudelle ja heikkonäköisyydelle. WCAG 2.2 (2023) lisää kriteerejä fokuksen näkyvyydelle ja vetotoiminnoille, mutta ei muuta kontrastirajoja. Kontrastivaatimukset (1.4.3 ja 1.4.6) pysyvät samoina." }
  ],
  fr: [
    { question: "Le RGAA impose-t-il un contraste de couleur minimum ?", answer: "Oui. Le RGAA 4.1 exige un ratio de contraste de 4,5:1 pour le texte courant et 3:1 pour le grand texte, conformément aux WCAG 2.1 AA. Le non-respect peut entraîner une amende pouvant atteindre 50 000 € par infraction." },
    { question: "Mon site belge ou suisse est-il aussi concerné ?", answer: "Oui. En Belgique, le Bestuursdecreet (Flandre) et les décrets wallons/bruxellois imposent WCAG 2.1 AA aux sites publics. En Suisse, la LHand couvre l'administration fédérale et la norme eCH-0059 recommande WCAG 2.1 AA. L'EAA étend les obligations au privé depuis juin 2025." },
    { question: "Comment tester le contraste d'un texte sur une image ?", answer: "Identifiez la zone la plus claire de l'image où le texte apparaît et testez cette couleur contre votre couleur de texte. Pour garantir la lisibilité, ajoutez un fond semi-transparent ou une ombre derrière le texte." },
    { question: "Quelle est la couleur grise minimale sur fond blanc ?", answer: "Le gris le plus foncé qui passe WCAG AA sur blanc pur (#ffffff) est #767676 avec un ratio de 4,54:1. Les gris plus clairs comme #999999 (2,85:1) échouent. Pour AAA (7:1), il faut au moins #595959." }
  ],
  hu: [
    { question: "A magyar jog megköveteli a színkontrasztot a weboldalakon?", answer: "Igen. A 2018/1784. Korm. rendelet előírja az EN 301 549 szabvány teljesítését a közszféra weboldalai számára, amely a WCAG 2.1 AA szintre hivatkozik. Ez magában foglalja a 4,5:1 kontrasztarányt normál szöveghez és 3:1-et nagy szöveghez. Az Európai Akadálymentesítési Irányelv (EAA) 2025 júniusától a magánszektorra is kiterjeszti a kötelezettséget." },
    { question: "Mi a WCAG szabvány?", answer: "A WCAG (Web Content Accessibility Guidelines) a W3C szervezet által kidolgozott nemzetközi webes akadálymentesítési irányelvek. Meghatározza többek között a minimális kontraszt értékeket, a címsorszerkezetet és a billentyűzet-támogatást." },
    { question: "Hogyan találom meg a weboldalam színkódjait?", answer: "A böngészőben (Chrome, Firefox, Edge) nyissa meg a fejlesztői eszközöket (jobb klikk > Vizsgálat). A Stílusok fülön láthatja az oldalon használt színeket. Alternatívaként a ColorZilla bővítmény lehetővé teszi bármely elem színének kiválasztását." },
    { question: "Működik ez az eszköz sötét módú tervezéshez?", answer: "Igen. Az eszköz bármely két szín kontrasztarányát ellenőrzi, függetlenül attól, melyik a világosabb. Sötét módhoz adjon meg világos szövegszínt és sötét háttérszínt. Ugyanazok a WCAG küszöbértékek érvényesek." }
  ],
  it: [
    { question: "La Legge Stanca impone un contrasto minimo?", answer: "Sì. La Legge 4/2004 e le linee guida AgID richiedono che i siti web della pubblica amministrazione rispettino le WCAG 2.1 AA, che includono un rapporto di contrasto minimo di 4,5:1 per il testo normale e 3:1 per il testo grande." },
    { question: "Dal 2025 anche i siti privati devono essere accessibili?", answer: "Sì. La Legge Europea sull'Accessibilità (EAA), in vigore da giugno 2025, estende gli obblighi al settore privato: e-commerce, servizi bancari, trasporti e piattaforme multimediali. In Italia, le aziende con fatturato superiore a 500 milioni di euro sono già soggette all'obbligo." },
    { question: "Come trovo i codici colore del mio sito web?", answer: "Nel browser (Chrome, Firefox, Edge) apri gli strumenti di sviluppo (clic destro > Ispeziona). Nella scheda Stili puoi vedere i colori della pagina. In alternativa, estensioni come ColorZilla permettono di selezionare il colore di qualsiasi elemento." },
    { question: "Funziona per il design in modalità scura?", answer: "Sì. Lo strumento verifica il rapporto di contrasto tra due colori qualsiasi, indipendentemente da quale sia più chiaro. Per la modalità scura, inserisci un colore di testo chiaro e uno sfondo scuro. Valgono le stesse soglie WCAG." }
  ],
  nl: [
    { question: "Vereist de Nederlandse wet kleurcontrast op websites?", answer: "Ja. Het Besluit digitale toegankelijkheid overheid verplicht overheidswebsites om te voldoen aan WCAG 2.1 AA, inclusief een contrastverhouding van 4,5:1 voor normale tekst en 3:1 voor grote tekst. Vanaf juni 2025 breidt de EU-Toegankelijkheidswet (EAA) de verplichting uit naar de private sector." },
    { question: "Geldt dit ook voor Belgische websites?", answer: "Ja. In Vlaanderen verplicht het Bestuursdecreet WCAG 2.1 AA voor overheidssites. Wallonië en Brussel hebben vergelijkbare regelgeving. De EAA geldt vanaf juni 2025 ook voor de private sector in heel de EU." },
    { question: "Hoe vind ik kleurcodes van mijn website?", answer: "In de browser (Chrome, Firefox, Edge) open je de ontwikkelaarstools (rechtermuisklik > Inspecteren). Op het tabblad Styles zie je de kleuren van de pagina. Als alternatief kun je een extensie zoals ColorZilla gebruiken." },
    { question: "Wat is de veiligste grijstint op een witte achtergrond?", answer: "De donkerste grijstint die WCAG AA haalt op puur wit (#ffffff) is #767676 met een verhouding van 4,54:1. Lichtere tinten zoals #999999 (2,85:1) zakken. Voor AAA (7:1) is minimaal #595959 nodig." }
  ],
  no: [
    { question: "Gjelder krav om fargekontrast også for private nettsider i Norge?", answer: "Ja. Forskrift om universell utforming av IKT krever at alle nettsteder og apper rettet mot allmennheten oppfyller WCAG 2.1 AA — dette gjelder både offentlig og privat sektor. Norge er strengere enn EU på dette punktet." },
    { question: "Hva er konsekvensene av å ikke oppfylle kravene?", answer: "Digitaliseringsdirektoratet (Digdir) kan gi pålegg om utbedring og dagbøter ved brudd. I tillegg kan manglende universell utforming utgjøre et brudd på Likestillings- og diskrimineringsloven." },
    { question: "Hvordan finner jeg fargekoder fra nettsiden min?", answer: "I nettleseren (Chrome, Firefox, Edge) kan du åpne utviklerverktøy (høyreklikk > Inspiser). Under fanen Styles kan du se fargene som brukes. Alternativt kan nettleserutvidelser som ColorZilla la deg velge fargen på et hvilket som helst element." },
    { question: "Fungerer dette verktøyet for mørk modus?", answer: "Ja. Verktøyet sjekker kontrastforholdet mellom to vilkårlige farger uansett hvilken som er lysere. For mørk modus skriver du inn en lys tekstfarge og en mørk bakgrunnsfarge. De samme WCAG-tersklene gjelder." },
    { question: "Hva er forskjellen mellom WCAG AA og AAA?", answer: "AA krever 4,5:1 kontrast for vanlig tekst og 3:1 for stor tekst — dette er det lovpålagte minimumskravet. AAA krever 7:1 for vanlig tekst og 4,5:1 for stor tekst — bedre lesbarhet, men vanskeligere å oppnå." },
    { question: "Hvilke fargepar bør jeg sjekke først?", answer: "Start med: tekst på hovedbakgrunnen, tekst på bannere og fargede seksjoner, knapper (tekstfarge og knappbakgrunn mot sidebakgrunnen), lenker og ikoner." }
  ],
  pt: [
    { question: "A legislação portuguesa exige contraste de cores?", answer: "Sim. O DL 83/2018 obriga os organismos públicos a cumprir a norma EN 301 549, que referencia as WCAG 2.1 nível AA. Isto inclui um rácio de contraste mínimo de 4,5:1 para texto normal e 3:1 para texto grande. Desde junho de 2025, a EAA estende a obrigação ao setor privado." },
    { question: "Os sites brasileiros também devem cumprir o contraste?", answer: "Sim. A Lei Brasileira de Inclusão (13.146/2015) exige acessibilidade digital para organismos públicos e empresas com presença digital significativa. O eMAG (Modelo de Acessibilidade em Governo Eletrônico) referencia as WCAG e define diretrizes específicas para portais governamentais." },
    { question: "Como encontro os códigos de cor do meu site?", answer: "No browser (Chrome, Firefox, Edge) abra as ferramentas de programador (clique direito > Inspecionar). No separador Estilos pode ver as cores da página. Em alternativa, extensões como ColorZilla permitem selecionar a cor de qualquer elemento." },
    { question: "Funciona para design em modo escuro?", answer: "Sim. A ferramenta verifica o rácio de contraste entre quaisquer duas cores. Para modo escuro, introduza uma cor de texto clara e um fundo escuro. Os mesmos limiares WCAG aplicam-se: 4,5:1 para texto normal (AA) e 7:1 (AAA)." }
  ],
  ro: [
    { question: "Legislația română cere contrast de culori pe site-uri?", answer: "Da. OUG 112/2018 obligă site-urile instituțiilor publice să respecte EN 301 549, care face referire la WCAG 2.1 nivel AA. Aceasta include un raport de contrast de 4,5:1 pentru text normal și 3:1 pentru text mare. Din iunie 2025, EAA extinde obligația la sectorul privat." },
    { question: "Ce este standardul WCAG?", answer: "WCAG (Web Content Accessibility Guidelines) este un set internațional de orientări pentru accesibilitatea conținutului web, dezvoltat de W3C. Definește, printre altele, valori minime de contrast, structura titlurilor și suportul pentru tastatură." },
    { question: "Cum găsesc codurile de culoare de pe site-ul meu?", answer: "În browser (Chrome, Firefox, Edge) deschideți instrumentele de dezvoltare (clic dreapta > Inspectare). În fila Stiluri puteți vedea culorile paginii. Alternativ, extensii precum ColorZilla permit selectarea culorii oricărui element." },
    { question: "Funcționează acest instrument pentru design în mod întunecat?", answer: "Da. Instrumentul verifică raportul de contrast între oricare două culori, indiferent care este mai deschisă. Pentru modul întunecat, introduceți o culoare de text deschisă și un fundal întunecat. Aceleași praguri WCAG se aplică." }
  ],
  sv: [
    { question: "Kräver svensk lag färgkontrast på webbplatser?", answer: "Ja. DOS-lagen (2018:1937) kräver att offentliga webbplatser uppfyller WCAG 2.1 AA, inklusive kontrastförhållandet 4,5:1 för normal text och 3:1 för stor text. Från juni 2025 utvidgar EU:s tillgänglighetsdirektiv (EAA) kravet till den privata sektorn." },
    { question: "Vad är WCAG-standarden?", answer: "WCAG (Web Content Accessibility Guidelines) är internationella riktlinjer för webbtillgänglighet som utvecklats av W3C. De definierar bland annat minimikontrastkrav, rubrikstruktur och tangentbordsstöd. Svensk lag hänvisar till WCAG via den europeiska standarden EN 301 549." },
    { question: "Hur hittar jag färgkoderna på min webbplats?", answer: "I webbläsaren (Chrome, Firefox, Edge) öppnar du utvecklarverktygen (högerklicka > Inspektera). Under fliken Stilar kan du se sidans färger. Alternativt kan webbläsartillägg som ColorZilla välja färgen på valfritt element." },
    { question: "Fungerar det här verktyget för mörkt läge?", answer: "Ja. Verktyget kontrollerar kontrastförhållandet mellan två valfria färger oavsett vilken som är ljusare. För mörkt läge anger du en ljus textfärg och en mörk bakgrundsfärg. Samma WCAG-tröskelvärden gäller." },
    { question: "Vad är skillnaden mellan WCAG AA och AAA?", answer: "AA kräver 4,5:1 kontrast för normal text och 3:1 för stor text — detta är det lagstadgade minimumet. AAA kräver 7:1 för normal text och 4,5:1 för stor text — bättre läsbarhet men svårare att uppnå." },
    { question: "Vilka färgpar bör jag kontrollera först?", answer: "Viktigast: text mot huvudbakgrunden, text på banners och färgade sektioner, knappar (textfärg och knappbakgrund mot sidans bakgrund), länkar och ikoner." }
  ]
};

let updated = 0;
let errors = 0;

for (const locale of Object.keys(LEGAL_SECTIONS)) {
  const filePath = path.join('data', locale, 'tools', 'contrast-checker.json');
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const cb = data.contentBlocks;

    // 1. Find the color blindness section and insert legal section after it
    const blindIdx = cb.findIndex(b => 
      b.type === 'sectionInfo' && b.title && 
      (b.title.includes('barvocit') || b.title.includes('farveblind') || b.title.includes('Farbenblindheit') || 
       b.title.includes('daltonism') || b.title.includes('color-blind') || b.title.includes('color blind') ||
       b.title.includes('daltonien') || b.title.includes('barvoslepost') || b.title.includes('daltonis') ||
       b.title.includes('kleurenblind') || b.title.includes('fargeblind') || b.title.includes('färgblind') ||
       b.title.includes('värisokea') || b.title.includes('χρωματικ') || b.title.includes('színtéveszt'))
    );

    // Check if legal section already exists
    const hasLegal = cb.some(b => 
      b.type === 'sectionInfo' && b.title && 
      (b.title.includes('ráv') || b.title.includes('Barriere') || b.title.includes('Obligations') || 
       b.title.includes('Legisl') || b.title.includes('Requisi') || b.title.includes('Toegankelijkheid') ||
       b.title.includes('universell utforming') || b.title.includes('Saavutettavuus') || b.title.includes('Tillgänglighet') ||
       b.title.includes('Akadálymentes') || b.title.includes('accesibil') || b.title.includes('προσβασιμ') ||
       b.title.includes('Právní') || b.title.includes('Tilgængelig'))
    );

    if (!hasLegal && blindIdx !== -1) {
      // Insert gap + legal section after color blindness section
      const insertIdx = blindIdx + 1;
      const legalBlock = {
        type: "sectionInfo",
        title: LEGAL_SECTIONS[locale].title,
        html: LEGAL_SECTIONS[locale].html
      };
      cb.splice(insertIdx, 0, { type: "gap", variant: "line" }, legalBlock);
      console.log(`  + Legal section added after index ${blindIdx}`);
    } else if (hasLegal) {
      console.log(`  ~ Legal section already exists`);
    } else {
      console.log(`  ! Could not find color blindness section to insert after`);
    }

    // 2. Add extra FAQ items
    const faqBlock = cb.find(b => b.type === 'faq');
    if (faqBlock && EXTRA_FAQ[locale]) {
      const currentCount = faqBlock.items.length;
      const newItems = EXTRA_FAQ[locale];
      // Only add items that don't already exist (check by question text start)
      for (const item of newItems) {
        const exists = faqBlock.items.some(existing => 
          existing.question.slice(0, 30) === item.question.slice(0, 30)
        );
        if (!exists) {
          faqBlock.items.push(item);
        }
      }
      console.log(`  + FAQ: ${currentCount} → ${faqBlock.items.length}`);
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
    
    // Validate
    JSON.parse(fs.readFileSync(filePath, 'utf8'));
    console.log(`OK   ${locale}`);
    updated++;
  } catch (e) {
    console.error(`ERR  ${locale}: ${e.message.slice(0, 80)}`);
    errors++;
  }
}

console.log(`\nDone: ${updated} updated, ${errors} errors`);
