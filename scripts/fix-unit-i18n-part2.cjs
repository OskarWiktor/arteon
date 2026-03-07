/**
 * Part 2: Fix remaining DE/EN contamination in sectionBasic, sectionInfo,
 * comparison tables, and FAQ blocks across all affected locales.
 * Run: node scripts/fix-unit-i18n-part2.cjs
 */
const fs = require('node:fs');
const path = require('node:path');
const DATA = path.join(__dirname, '..', 'data');
const LOCALES = ['el', 'hu', 'ro', 'fi', 'nl'];

// ─── Shared comparison table feature names (appear in multiple converters) ───
const COMP_SHARED = [
  ['"name": "Reference"', { el: '"name": "Αναφορά"', hu: '"name": "Hivatkozás"', ro: '"name": "Referință"', fi: '"name": "Viite"', nl: '"name": "Referentie"' }],
  ['"name": "Compounds"', { el: '"name": "Σώρευση"', hu: '"name": "Halmozódás"', ro: '"name": "Compunere"', fi: '"name": "Kasautuminen"', nl: '"name": "Cumulatie"' }],
  ['"name": "Responsive"', { el: '"name": "Ανταπόκριση"', hu: '"name": "Reszponzív"', ro: '"name": "Responsiv"', fi: '"name": "Responsiivinen"', nl: '"name": "Responsief"' }],
  ['"name": "Accessibility"', { el: '"name": "Προσβασιμότητα"', hu: '"name": "Akadálymentesség"', ro: '"name": "Accesibilitate"', fi: '"name": "Saavutettavuus"', nl: '"name": "Toegankelijkheid"' }],
  ['"name": "Predictability"', { el: '"name": "Προβλεψιμότητα"', hu: '"name": "Kiszámíthatóság"', ro: '"name": "Predictibilitate"', fi: '"name": "Ennustettavuus"', nl: '"name": "Voorspelbaarheid"' }],
  ['"name": "Definition"', { el: '"name": "Ορισμός"', hu: '"name": "Definíció"', ro: '"name": "Definiție"', fi: '"name": "Määritelmä"', nl: '"name": "Definitie"' }],
  ['"name": "Used in"', { el: '"name": "Χρήση"', hu: '"name": "Használat"', ro: '"name": "Utilizare"', fi: '"name": "Käyttö"', nl: '"name": "Gebruik"' }],
  ['"name": "Body text"', { el: '"name": "Κύριο κείμενο"', hu: '"name": "Törzsszöveg"', ro: '"name": "Text corp"', fi: '"name": "Leipäteksti"', nl: '"name": "Broodtekst"' }],
  ['"name": "Heading"', { el: '"name": "Επικεφαλίδα"', hu: '"name": "Címsor"', ro: '"name": "Titlu"', fi: '"name": "Otsikko"', nl: '"name": "Kop"' }],
  ['"name": "Use case"', { el: '"name": "Χρήση"', hu: '"name": "Felhasználás"', ro: '"name": "Caz de utilizare"', fi: '"name": "Käyttötapaus"', nl: '"name": "Toepassing"' }],
  ['"name": "File size"', { el: '"name": "Μέγεθος αρχείου"', hu: '"name": "Fájlméret"', ro: '"name": "Dimensiune fișier"', fi: '"name": "Tiedostokoko"', nl: '"name": "Bestandsgrootte"' }],
  ['"name": "Quality"', { el: '"name": "Ποιότητα"', hu: '"name": "Minőség"', ro: '"name": "Calitate"', fi: '"name": "Laatu"', nl: '"name": "Kwaliteit"' }],
  // Comparison values
  ['"unit1": "Root font size"', { el: '"unit1": "Μέγεθος ρίζας"', hu: '"unit1": "Gyökér betűméret"', ro: '"unit1": "Dimensiune font rădăcină"', fi: '"unit1": "Juurielementin fonttikoko"', nl: '"unit1": "Root lettergrootte"' }],
  ['"unit2": "Fixed pixel"', { el: '"unit2": "Σταθερό pixel"', hu: '"unit2": "Fix pixel"', ro: '"unit2": "Pixel fix"', fi: '"unit2": "Kiinteä pikseli"', nl: '"unit2": "Vast pixel"' }],
  ['"unit1": "No (always root)"', { el: '"unit1": "Όχι (πάντα ρίζα)"', hu: '"unit1": "Nem (mindig gyökér)"', ro: '"unit1": "Nu (întotdeauna rădăcină)"', fi: '"unit1": "Ei (aina juuri)"', nl: '"unit1": "Nee (altijd root)"' }],
  ['"unit1": "Parent font size"', { el: '"unit1": "Μέγεθος γονικού"', hu: '"unit1": "Szülő betűméret"', ro: '"unit1": "Dimensiune font părinte"', fi: '"unit1": "Emoelementin fonttikoko"', nl: '"unit1": "Bovenliggende lettergrootte"' }],
  ['"unit1": "Yes (nests)"', { el: '"unit1": "Ναι (εμφωλεύεται)"', hu: '"unit1": "Igen (halmozódik)"', ro: '"unit1": "Da (se acumulează)"', fi: '"unit1": "Kyllä (kasautuu)"', nl: '"unit1": "Ja (cumuleert)"' }],
  ['"unit1": "Respects user settings"', { el: '"unit1": "Σέβεται ρυθμίσεις χρήστη"', hu: '"unit1": "Tiszteletben tartja a felhasználói beállításokat"', ro: '"unit1": "Respectă setările utilizatorului"', fi: '"unit1": "Kunnioittaa käyttäjän asetuksia"', nl: '"unit1": "Respecteert gebruikersinstellingen"' }],
  ['"unit2": "Fixed size"', { el: '"unit2": "Σταθερό μέγεθος"', hu: '"unit2": "Fix méret"', ro: '"unit2": "Dimensiune fixă"', fi: '"unit2": "Kiinteä koko"', nl: '"unit2": "Vast formaat"' }],
  ['"unit1": "Consistent everywhere"', { el: '"unit1": "Συνεπές παντού"', hu: '"unit1": "Mindenhol egységes"', ro: '"unit1": "Consistent peste tot"', fi: '"unit1": "Johdonmukainen kaikkialla"', nl: '"unit1": "Overal consistent"' }],
  ['"unit1": "Always consistent"', { el: '"unit1": "Πάντα συνεπές"', hu: '"unit1": "Mindig egységes"', ro: '"unit1": "Întotdeauna consistent"', fi: '"unit1": "Aina johdonmukainen"', nl: '"unit1": "Altijd consistent"' }],
  ['"unit2": "Always consistent"', { el: '"unit2": "Πάντα συνεπές"', hu: '"unit2": "Mindig egységes"', ro: '"unit2": "Întotdeauna consistent"', fi: '"unit2": "Aina johdonmukainen"', nl: '"unit2": "Altijd consistent"' }],
  ['"unit1": "Context-dependent"', { el: '"unit1": "Εξαρτάται από το πλαίσιο"', hu: '"unit1": "Kontextusfüggő"', ro: '"unit1": "Depinde de context"', fi: '"unit1": "Kontekstiriippuvainen"', nl: '"unit1": "Contextafhankelijk"' }],
  ['"unit1": "Print, Word, PDF"', { el: '"unit1": "Εκτύπωση, Word, PDF"', hu: '"unit1": "Nyomtatás, Word, PDF"', ro: '"unit1": "Tipărire, Word, PDF"', fi: '"unit1": "Tulostus, Word, PDF"', nl: '"unit1": "Print, Word, PDF"' }],
  ['"unit2": "Web, CSS, screens"', { el: '"unit2": "Web, CSS, οθόνες"', hu: '"unit2": "Web, CSS, képernyők"', ro: '"unit2": "Web, CSS, ecrane"', fi: '"unit2": "Web, CSS, näytöt"', nl: '"unit2": "Web, CSS, schermen"' }],
  ['"unit1": "Standard print"', { el: '"unit1": "Τυπική εκτύπωση"', hu: '"unit1": "Szabványos nyomtatás"', ro: '"unit1": "Tipărire standard"', fi: '"unit1": "Vakiotulostus"', nl: '"unit1": "Standaard print"' }],
  ['"unit2": "Fine art / medical"', { el: '"unit2": "Καλλιτεχνική / ιατρική"', hu: '"unit2": "Műalkotás / orvosi"', ro: '"unit2": "Artă / medical"', fi: '"unit2": "Taide / lääketiede"', nl: '"unit2": "Fijne kunst / medisch"' }],
  ['"unit2": "4× larger"', { el: '"unit2": "4× μεγαλύτερο"', hu: '"unit2": "4× nagyobb"', ro: '"unit2": "4× mai mare"', fi: '"unit2": "4× suurempi"', nl: '"unit2": "4× groter"' }],
  ['"unit1": "Sharp at any size"', { el: '"unit1": "Ευκρινής σε κάθε μέγεθος"', hu: '"unit1": "Éles minden méretben"', ro: '"unit1": "Clar la orice dimensiune"', fi: '"unit1": "Terävä kaikissa koissa"', nl: '"unit1": "Scherp op elk formaat"' }],
  ['"unit2": "Screen-only"', { el: '"unit2": "Μόνο για οθόνη"', hu: '"unit2": "Csak képernyőre"', ro: '"unit2": "Doar ecran"', fi: '"unit2": "Vain näyttö"', nl: '"unit2": "Alleen scherm"' }],
  ['"unit1": "Professional print"', { el: '"unit1": "Επαγγελματική εκτύπωση"', hu: '"unit1": "Professzionális nyomtatás"', ro: '"unit1": "Tipărire profesională"', fi: '"unit1": "Ammattimainen tulostus"', nl: '"unit1": "Professionele print"' }],
  ['"unit2": "Web graphics"', { el: '"unit2": "Γραφικά web"', hu: '"unit2": "Webes grafika"', ro: '"unit2": "Grafică web"', fi: '"unit2": "Verkkografiikat"', nl: '"unit2": "Webafbeeldingen"' }],
  // mm-to-px-dpi comparison
  ['"name": "85 mm (card)"', { el: '"name": "85 mm (κάρτα)"', hu: '"name": "85 mm (névjegy)"', ro: '"name": "85 mm (carte vizită)"', fi: '"name": "85 mm (kortti)"', nl: '"name": "85 mm (kaartje)"' }],
  // Common DPI/mm comparison title
  ['"title": "MM to pixels at various DPI"', { el: '"title": "MM σε pixel σε διάφορα DPI"', hu: '"title": "MM pixelre különböző DPI-nél"', ro: '"title": "MM în pixeli la diferite DPI"', fi: '"title": "MM pikseleinä eri DPI-arvoilla"', nl: '"title": "MM naar pixels bij verschillende DPI"' }],
  ['"title": "Common DPI resolutions"', { el: '"title": "Συνηθισμένες αναλύσεις DPI"', hu: '"title": "Gyakori DPI-felbontások"', ro: '"title": "Rezoluții DPI comune"', fi: '"title": "Yleiset DPI-resoluutiot"', nl: '"title": "Veelgebruikte DPI-resoluties"' }],
  ['"name": "A4 width (21 cm)"', { el: '"name": "Πλάτος A4 (21 cm)"', hu: '"name": "A4 szélesség (21 cm)"', ro: '"name": "Lățime A4 (21 cm)"', fi: '"name": "A4 leveys (21 cm)"', nl: '"name": "A4 breedte (21 cm)"' }],
  ['"name": "A4 height (29.7 cm)"', { el: '"name": "Ύψος A4 (29,7 cm)"', hu: '"name": "A4 magasság (29,7 cm)"', ro: '"name": "Înălțime A4 (29,7 cm)"', fi: '"name": "A4 korkeus (29,7 cm)"', nl: '"name": "A4 hoogte (29,7 cm)"' }],
];

// ─── Per-converter sectionBasic html ───
const SECTION_BASIC = [
  // pt-to-px (EN)
  ['<p class=\\"text-mid mb-4\\">Points (pt) are a typographic unit used in print design: 1 pt = 1/72 inch. Pixels (px) are screen units. At the standard 96 PPI screen resolution: 1 pt = 1.333 px (96/72).</p><p class=\\"text-mid mb-4\\">This conversion is essential when translating print designs to web, setting CSS font sizes from print specifications, and understanding the relationship between print and screen typography.</p><p class=\\"text-mid mb-4\\">Common sizes: 12 pt = 16 px (browser default), 10 pt = 13.3 px, 14 pt = 18.7 px, 18 pt = 24 px, 24 pt = 32 px.</p><p class=\\"text-mid\\">All calculations run locally in your browser — nothing is sent to any server.</p>', {
    el: '<p class=\\"text-mid mb-4\\">Τα points (pt) είναι τυπογραφική μονάδα που χρησιμοποιείται στον σχεδιασμό εκτυπώσεων: 1 pt = 1/72 ίντσα. Τα pixels (px) είναι μονάδες οθόνης. Στην τυπική ανάλυση 96 PPI: 1 pt = 1,333 px (96/72).</p><p class=\\"text-mid mb-4\\">Αυτή η μετατροπή είναι απαραίτητη για τη μεταφορά σχεδίων εκτύπωσης στο web, τον ορισμό μεγεθών γραμματοσειράς CSS από προδιαγραφές εκτύπωσης και την κατανόηση της σχέσης μεταξύ τυπογραφίας εκτύπωσης και οθόνης.</p><p class=\\"text-mid mb-4\\">Συνήθη μεγέθη: 12 pt = 16 px (προεπιλογή browser), 10 pt = 13,3 px, 14 pt = 18,7 px, 18 pt = 24 px, 24 pt = 32 px.</p><p class=\\"text-mid\\">Όλοι οι υπολογισμοί εκτελούνται τοπικά στον browser σας.</p>',
    hu: '<p class=\\"text-mid mb-4\\">A pont (pt) egy tipográfiai egység a nyomtatott tervezésben: 1 pt = 1/72 hüvelyk. A pixelek (px) képernyőegységek. A szabványos 96 PPI képernyőfelbontásnál: 1 pt = 1,333 px (96/72).</p><p class=\\"text-mid mb-4\\">Ez az átváltás nélkülözhetetlen nyomtatott tervek webre adaptálásakor, CSS betűméretek megadásakor nyomtatási specifikációkból, és a nyomtatási és képernyős tipográfia kapcsolatának megértéséhez.</p><p class=\\"text-mid mb-4\\">Gyakori méretek: 12 pt = 16 px (böngésző alapértelmezés), 10 pt = 13,3 px, 14 pt = 18,7 px, 18 pt = 24 px, 24 pt = 32 px.</p><p class=\\"text-mid\\">Minden számítás helyben, a böngészőjében történik.</p>',
    ro: '<p class=\\"text-mid mb-4\\">Punctele (pt) sunt o unitate tipografică folosită în designul de tipărire: 1 pt = 1/72 inch. Pixelii (px) sunt unități de ecran. La rezoluția standard de 96 PPI: 1 pt = 1,333 px (96/72).</p><p class=\\"text-mid mb-4\\">Această conversie este esențială pentru adaptarea designurilor de tipărire la web, setarea dimensiunilor fonturilor CSS din specificații de tipărire și înțelegerea relației dintre tipografia de tipărire și cea de ecran.</p><p class=\\"text-mid mb-4\\">Dimensiuni comune: 12 pt = 16 px (implicit browser), 10 pt = 13,3 px, 14 pt = 18,7 px, 18 pt = 24 px, 24 pt = 32 px.</p><p class=\\"text-mid\\">Toate calculele se efectuează local în browserul dumneavoastră.</p>',
    fi: '<p class=\\"text-mid mb-4\\">Pisteet (pt) ovat painosuunnittelussa käytetty typografinen yksikkö: 1 pt = 1/72 tuumaa. Pikselit (px) ovat näyttöyksiköitä. Vakio 96 PPI -resoluutiolla: 1 pt = 1,333 px (96/72).</p><p class=\\"text-mid mb-4\\">Tämä muunnos on välttämätön painosuunnitelmien muuntamiseen verkkoon, CSS-fonttikokojen asettamiseen painomäärityksistä ja painon ja näytön typografian suhteen ymmärtämiseen.</p><p class=\\"text-mid mb-4\\">Yleiset koot: 12 pt = 16 px (selaimen oletus), 10 pt = 13,3 px, 14 pt = 18,7 px, 18 pt = 24 px, 24 pt = 32 px.</p><p class=\\"text-mid\\">Kaikki laskelmat suoritetaan paikallisesti selaimessasi.</p>',
    nl: '<p class=\\"text-mid mb-4\\">Punten (pt) zijn een typografische eenheid in printontwerp: 1 pt = 1/72 inch. Pixels (px) zijn schermeenheden. Bij de standaard 96 PPI-schermresolutie: 1 pt = 1,333 px (96/72).</p><p class=\\"text-mid mb-4\\">Deze conversie is essentieel bij het vertalen van printontwerpen naar web, het instellen van CSS-lettergroottes uit printspecificaties en het begrijpen van de relatie tussen print- en schermtypografie.</p><p class=\\"text-mid mb-4\\">Veelvoorkomende formaten: 12 pt = 16 px (browserstandaard), 10 pt = 13,3 px, 14 pt = 18,7 px, 18 pt = 24 px, 24 pt = 32 px.</p><p class=\\"text-mid\\">Alle berekeningen worden lokaal in uw browser uitgevoerd.</p>',
  }],
  // rem-to-px (EN)
  ['<p class=\\"text-mid mb-4\\">The CSS rem unit is relative to the root element (html) font size. By default, browsers set this to 16px, so 1rem = 16px. Unlike em, rem does not compound — it always references the root.</p><p class=\\"text-mid mb-4\\">Rem is the recommended unit for modern responsive web design. It provides consistent, scalable sizing that respects user accessibility preferences.</p><p class=\\"text-mid mb-4\\">Converting rem to px helps understand the actual rendered size when designing or debugging CSS layouts.</p><p class=\\"text-mid\\">All calculations run locally in your browser — nothing is sent to any server.</p>', {
    hu: '<p class=\\"text-mid mb-4\\">A CSS rem egység a gyökér elem (html) betűméretéhez viszonyított. Alapértelmezés szerint a böngészők 16px-re állítják, így 1rem = 16px. Az em-mel ellentétben a rem nem halmozódik — mindig a gyökérre hivatkozik.</p><p class=\\"text-mid mb-4\\">A rem az ajánlott egység a modern reszponzív webtervezéshez. Egységes, skálázható méretezést biztosít, amely tiszteletben tartja a felhasználó akadálymentesítési beállításait.</p><p class=\\"text-mid mb-4\\">A rem px-re konvertálása segít megérteni a tényleges megjelenített méretet CSS elrendezések tervezésekor vagy hibakeresésekor.</p><p class=\\"text-mid\\">Minden számítás helyben, a böngészőjében történik.</p>',
    ro: '<p class=\\"text-mid mb-4\\">Unitatea CSS rem este relativă la dimensiunea fontului elementului rădăcină (html). Implicit, browserele o setează la 16px, deci 1rem = 16px. Spre deosebire de em, rem nu se acumulează — face întotdeauna referire la rădăcină.</p><p class=\\"text-mid mb-4\\">Rem este unitatea recomandată pentru web designul responsiv modern. Oferă dimensionare consistentă și scalabilă care respectă preferințele de accesibilitate ale utilizatorului.</p><p class=\\"text-mid mb-4\\">Conversia rem în px ajută la înțelegerea dimensiunii reale afișate la proiectarea sau depanarea layout-urilor CSS.</p><p class=\\"text-mid\\">Toate calculele se efectuează local în browserul dumneavoastră.</p>',
    fi: '<p class=\\"text-mid mb-4\\">CSS:n rem-yksikkö on suhteessa juurielementin (html) fonttikokoon. Oletuksena selaimet asettavat sen 16px:iin, joten 1rem = 16px. Toisin kuin em, rem ei kasaudu — se viittaa aina juureen.</p><p class=\\"text-mid mb-4\\">Rem on suositeltu yksikkö moderniin responsiiviseen verkkosuunnitteluun. Se tarjoaa johdonmukaisen, skaalautuvan mitoituksen, joka kunnioittaa käyttäjän saavutettavuusasetuksia.</p><p class=\\"text-mid mb-4\\">Rem:n muuntaminen px:ksi auttaa ymmärtämään todellisen renderöidyn koon CSS-asettelujen suunnittelussa tai virheenkorjauksessa.</p><p class=\\"text-mid\\">Kaikki laskelmat suoritetaan paikallisesti selaimessasi.</p>',
    nl: '<p class=\\"text-mid mb-4\\">De CSS rem-eenheid is relatief ten opzichte van de lettergrootte van het root-element (html). Standaard stellen browsers dit in op 16px, dus 1rem = 16px. In tegenstelling tot em cumuleert rem niet — het verwijst altijd naar de root.</p><p class=\\"text-mid mb-4\\">Rem is de aanbevolen eenheid voor modern responsief webdesign. Het biedt consistente, schaalbare maatvoering die de toegankelijkheidsinstellingen van de gebruiker respecteert.</p><p class=\\"text-mid mb-4\\">Het omrekenen van rem naar px helpt bij het begrijpen van de werkelijk weergegeven grootte bij het ontwerpen of debuggen van CSS-lay-outs.</p><p class=\\"text-mid\\">Alle berekeningen worden lokaal in uw browser uitgevoerd.</p>',
  }],
  // hex-to-rgb (DE)
  ['<p class=\\"text-mid mb-4\\">Hexadezimale Farbcodes (#RRGGBB) sind die Standardnotation für Webfarben. RGB-Werte (0–255 pro Kanal) werden für CSS rgba(), JavaScript-Farbmanipulation und programmatische Farbberechnung benötigt.</p><p class=\\"text-mid mb-4\\">Beispiel: #3B82F6 → R:59, G:130, B:246. Bei 8-stelligen Hex-Codes enthält die letzte Stelle den Alpha-Kanal.</p><p class=\\"text-mid\\">Alle Berechnungen werden lokal in Ihrem Browser durchgeführt.</p>', {
    hu: '<p class=\\"text-mid mb-4\\">A hexadecimális színkódok (#RRGGBB) a webszínek standard jelölései. Az RGB-értékekre (0–255 csatornánként) szükség van a CSS rgba(), a JavaScript színmanipuláció és a programatikus színszámítás számára.</p><p class=\\"text-mid mb-4\\">Példa: #3B82F6 → R:59, G:130, B:246. A 8 jegyű hex-kódoknál az utolsó két jegy az alfa-csatornát tartalmazza.</p><p class=\\"text-mid\\">Minden számítás helyben, a böngészőjében történik.</p>',
    ro: '<p class=\\"text-mid mb-4\\">Codurile de culoare hexadecimale (#RRGGBB) sunt notația standard pentru culorile web. Valorile RGB (0–255 per canal) sunt necesare pentru CSS rgba(), manipularea culorilor în JavaScript și calculul programatic al culorilor.</p><p class=\\"text-mid mb-4\\">Exemplu: #3B82F6 → R:59, G:130, B:246. Pentru coduri hex cu 8 caractere, ultimele două cifre conțin canalul alfa.</p><p class=\\"text-mid\\">Toate calculele se efectuează local în browserul dumneavoastră.</p>',
    fi: '<p class=\\"text-mid mb-4\\">Heksadesimaalit värikoodit (#RRGGBB) ovat verkkosivuvärien vakiomerkintä. RGB-arvoja (0–255 kanavaa kohti) tarvitaan CSS rgba():ssa, JavaScriptin värikäsittelyssä ja ohjelmallisessa värilaskennassa.</p><p class=\\"text-mid mb-4\\">Esimerkki: #3B82F6 → R:59, G:130, B:246. 8-merkkisissä hex-koodeissa kaksi viimeistä merkkiä sisältävät alfa-kanavan.</p><p class=\\"text-mid\\">Kaikki laskelmat suoritetaan paikallisesti selaimessasi.</p>',
  }],
  // em-to-px (DE)
  ['<p class=\\"text-mid mb-4\\">Die CSS-Einheit em ist relativ zur Schriftgröße des übergeordneten Elements. Bei der Standardgröße von 16px: 1em = 16px, 1,5em = 24px, 2em = 32px.</p><p class=\\"text-mid mb-4\\">Im Gegensatz zu rem (relativ zum Wurzelelement) kaskadiert em: 1,5em × 1,5em = 2,25× der Basisgröße.</p><p class=\\"text-mid\\">Alle Berechnungen werden lokal in Ihrem Browser durchgeführt.</p>', {
    hu: '<p class=\\"text-mid mb-4\\">A CSS em egység a szülő elem betűméretéhez viszonyított. Az alapértelmezett 16px mellett: 1em = 16px, 1,5em = 24px, 2em = 32px.</p><p class=\\"text-mid mb-4\\">A rem-mel ellentétben (amely a gyökér elemre vonatkozik) az em halmozódik: 1,5em × 1,5em = 2,25× az alap méret.</p><p class=\\"text-mid\\">Minden számítás helyben, a böngészőjében történik.</p>',
    ro: '<p class=\\"text-mid mb-4\\">Unitatea CSS em este relativă la dimensiunea fontului elementului părinte. La dimensiunea implicită de 16px: 1em = 16px, 1,5em = 24px, 2em = 32px.</p><p class=\\"text-mid mb-4\\">Spre deosebire de rem (relativ la elementul rădăcină), em se acumulează: 1,5em × 1,5em = 2,25× dimensiunea de bază.</p><p class=\\"text-mid\\">Toate calculele se efectuează local în browserul dumneavoastră.</p>',
    fi: '<p class=\\"text-mid mb-4\\">CSS:n em-yksikkö on suhteessa emoelementin fonttikokoon. Oletuskoossa 16px: 1em = 16px, 1,5em = 24px, 2em = 32px.</p><p class=\\"text-mid mb-4\\">Toisin kuin rem (suhteessa juurielementtiin), em kasautuu: 1,5em × 1,5em = 2,25× peruskoko.</p><p class=\\"text-mid\\">Kaikki laskelmat suoritetaan paikallisesti selaimessasi.</p>',
  }],
  // cm-to-px-dpi (DE+EL mixed)
  ['Bei Präzisionsarbeiten werden Maße in Millimetern angegeben. Für digitale Bilder: Pixel = mm × DPI / 25,4', {
    el: 'Σε εργασίες ακριβείας οι διαστάσεις δίνονται σε χιλιοστά. Για ψηφιακές εικόνες: Pixel = mm × DPI / 25,4',
    hu: 'Precíziós munkáknál a méreteket milliméterben adják meg. Digitális képeknél: Pixel = mm × DPI / 25,4',
    ro: 'În lucrările de precizie dimensiunile se dau în milimetri. Pentru imagini digitale: Pixel = mm × DPI / 25,4',
    fi: 'Tarkkuustöissä mitat annetaan millimetreinä. Digitaalikuville: Pixel = mm × DPI / 25,4',
    nl: 'Bij precisiewerk worden maten in millimeters opgegeven. Voor digitale afbeeldingen: Pixel = mm × DPI / 25,4',
  }],
  ['Bei 300 DPI: 1 mm = 11,81 Pixel, 85 mm (Visitenkartenbreite) = 1.004 Pixel.</p><p class=\\"text-mid\\">Alle Berechnungen werden lokal in Ihrem Browser durchgeführt.</p>', {
    el: 'Στα 300 DPI: 1 mm = 11,81 pixel, 85 mm (πλάτος κάρτας) = 1.004 pixel.</p><p class=\\"text-mid\\">Όλοι οι υπολογισμοί εκτελούνται τοπικά στον browser σας.</p>',
    hu: '300 DPI-nál: 1 mm = 11,81 pixel, 85 mm (névjegykártya szélesség) = 1.004 pixel.</p><p class=\\"text-mid\\">Minden számítás helyben, a böngészőjében történik.</p>',
    ro: 'La 300 DPI: 1 mm = 11,81 pixeli, 85 mm (lățimea cărții de vizită) = 1.004 pixeli.</p><p class=\\"text-mid\\">Toate calculele se efectuează local în browserul dumneavoastră.</p>',
    fi: '300 DPI:llä: 1 mm = 11,81 pikseliä, 85 mm (käyntikortin leveys) = 1.004 pikseliä.</p><p class=\\"text-mid\\">Kaikki laskelmat suoritetaan paikallisesti selaimessasi.</p>',
    nl: 'Bij 300 DPI: 1 mm = 11,81 pixels, 85 mm (visitekaartje breedte) = 1.004 pixels.</p><p class=\\"text-mid\\">Alle berekeningen worden lokaal in uw browser uitgevoerd.</p>',
  }],
  // cm-to-px-dpi (DE)
  ['Im Druckdesign werden Maße in Zentimetern angegeben, digitale Bilder jedoch in Pixeln. Die μετατροπή hängt von der DPI-Auflösung ab: Pixel = cm × DPI / 2,54', {
    hu: 'A nyomtatott tervezésben a méretek centiméterben vannak megadva, a digitális képek viszont pixelekben. Az átváltás a DPI-felbontástól függ: Pixel = cm × DPI / 2,54',
    ro: 'În designul de tipărire dimensiunile sunt în centimetri, dar imaginile digitale sunt în pixeli. Conversia depinde de rezoluția DPI: Pixel = cm × DPI / 2,54',
  }],
  ['Standard-Druckauflösung 300 DPI: 10 cm = 1.181 Pixel, A4-Breite (21 cm) = 2.480 Pixel.</p><p class=\\"text-mid\\">Alle Berechnungen werden lokal in Ihrem Browser durchgeführt.</p>', {
    hu: 'Szabványos nyomtatási felbontás 300 DPI: 10 cm = 1.181 pixel, A4 szélesség (21 cm) = 2.480 pixel.</p><p class=\\"text-mid\\">Minden számítás helyben, a böngészőjében történik.</p>',
    ro: 'Rezoluția standard de tipărire 300 DPI: 10 cm = 1.181 pixeli, lățime A4 (21 cm) = 2.480 pixeli.</p><p class=\\"text-mid\\">Toate calculele se efectuează local în browserul dumneavoastră.</p>',
  }],
  // unix-timestamp (DE)
  ['Der Unix-Zeitstempel (Unix Timestamp oder Epoch) zählt die Sekunden seit dem 1. Januar 1970', {
    el: 'Η χρονοσφραγίδα Unix (Unix Timestamp ή Epoch) μετράει τα δευτερόλεπτα από την 1η Ιανουαρίου 1970',
    hu: 'A Unix időbélyeg (Unix Timestamp vagy Epoch) az 1970. január 1. óta eltelt másodperceket számolja',
    ro: 'Marca temporală Unix (Unix Timestamp sau Epoch) numără secundele de la 1 ianuarie 1970',
    fi: 'Unix-aikaleima (Unix Timestamp tai Epoch) laskee sekunteja 1. tammikuuta 1970 alkaen',
  }],
  // vw-to-px (DE mixed)
  ['Die CSS-Einheit vw', {
    el: 'Η μονάδα CSS vw',
    hu: 'A CSS vw egység',
    ro: 'Unitatea CSS vw',
    fi: 'CSS:n vw-yksikkö',
  }],
  ['der Viewport-Breite. Bei einem 1920px-Bildschirm: 1', {
    el: 'του πλάτους viewport. Σε οθόνη 1920px: 1',
    hu: 'a viewport szélességének. Egy 1920px-es képernyőn: 1',
    ro: 'din lățimea viewport-ului. Pe un ecran de 1920px: 1',
    fi: 'viewport-leveydestä. 1920px-näytöllä: 1',
  }],
];

// ─── Per-converter sectionInfo "how it works" html ───
const SECTION_INFO = [
  // pt-to-px (EN)
  ['1 point = 1/72 inch. At 96 PPI (standard Windows/web): 1 pt = 96/72 = 1.333 px. At 72 PPI (old Mac): 1 pt = 1 px.</p><p class=\\"text-mid mb-4\\">The formula: px = pt × PPI / 72. At 96 PPI: px = pt × 1.333.</p><p class=\\"text-mid\\">CSS defines 1 px as 1/96 of an inch (at 96 DPI). On high-DPI screens, 1 CSS px may be multiple device pixels.</p>', {
    el: '1 point = 1/72 ίντσα. Σε 96 PPI (τυπικά Windows/web): 1 pt = 96/72 = 1,333 px. Σε 72 PPI (παλαιά Mac): 1 pt = 1 px.</p><p class=\\"text-mid mb-4\\">Ο τύπος: px = pt × PPI / 72. Σε 96 PPI: px = pt × 1,333.</p><p class=\\"text-mid\\">Το CSS ορίζει 1 px ως 1/96 ίντσας (σε 96 DPI). Σε οθόνες υψηλής ανάλυσης, 1 CSS px μπορεί να αντιστοιχεί σε πολλαπλά device pixels.</p>',
    hu: '1 pont = 1/72 hüvelyk. 96 PPI-nál (szabványos Windows/web): 1 pt = 96/72 = 1,333 px. 72 PPI-nál (régi Mac): 1 pt = 1 px.</p><p class=\\"text-mid mb-4\\">A képlet: px = pt × PPI / 72. 96 PPI-nál: px = pt × 1,333.</p><p class=\\"text-mid\\">A CSS 1 px-t 1/96 hüvelykként definiálja (96 DPI-nál). Nagy felbontású képernyőkön 1 CSS px több eszköz pixel lehet.</p>',
    ro: '1 punct = 1/72 inch. La 96 PPI (standard Windows/web): 1 pt = 96/72 = 1,333 px. La 72 PPI (Mac vechi): 1 pt = 1 px.</p><p class=\\"text-mid mb-4\\">Formula: px = pt × PPI / 72. La 96 PPI: px = pt × 1,333.</p><p class=\\"text-mid\\">CSS definește 1 px ca 1/96 dintr-un inch (la 96 DPI). Pe ecrane cu rezoluție mare, 1 CSS px poate fi mai mulți pixeli de dispozitiv.</p>',
    fi: '1 piste = 1/72 tuumaa. 96 PPI:llä (vakio Windows/web): 1 pt = 96/72 = 1,333 px. 72 PPI:llä (vanha Mac): 1 pt = 1 px.</p><p class=\\"text-mid mb-4\\">Kaava: px = pt × PPI / 72. 96 PPI:llä: px = pt × 1,333.</p><p class=\\"text-mid\\">CSS määrittelee 1 px:n 1/96 tuumaksi (96 DPI:llä). Korkean resoluution näytöillä 1 CSS px voi olla useita laitepikseleitä.</p>',
    nl: '1 punt = 1/72 inch. Bij 96 PPI (standaard Windows/web): 1 pt = 96/72 = 1,333 px. Bij 72 PPI (oude Mac): 1 pt = 1 px.</p><p class=\\"text-mid mb-4\\">De formule: px = pt × PPI / 72. Bij 96 PPI: px = pt × 1,333.</p><p class=\\"text-mid\\">CSS definieert 1 px als 1/96 inch (bij 96 DPI). Op hoge-DPI schermen kan 1 CSS px meerdere apparaatpixels zijn.</p>',
  }],
  // rem-to-px (EN)
  ['px = rem × root font size. Default root font size = 16px.</p><p class=\\"text-mid mb-4\\">If html { font-size: 62.5% }, root = 10px, so 1.6rem = 16px.</p><p class=\\"text-mid\\">Rem never compounds. 1rem is always the same regardless of nesting depth. This makes it more predictable than em.</p>', {
    hu: 'px = rem × gyökér betűméret. Alapértelmezett gyökér betűméret = 16px.</p><p class=\\"text-mid mb-4\\">Ha html { font-size: 62.5% }, gyökér = 10px, tehát 1,6rem = 16px.</p><p class=\\"text-mid\\">A rem soha nem halmozódik. 1rem mindig ugyanaz, függetlenül a beágyazási mélységtől. Ez kiszámíthatóbbá teszi az em-nél.</p>',
    ro: 'px = rem × dimensiunea fontului rădăcină. Dimensiunea implicită a fontului rădăcină = 16px.</p><p class=\\"text-mid mb-4\\">Dacă html { font-size: 62.5% }, rădăcină = 10px, deci 1,6rem = 16px.</p><p class=\\"text-mid\\">Rem nu se acumulează niciodată. 1rem este întotdeauna la fel, indiferent de adâncimea imbricării. Aceasta îl face mai predictibil decât em.</p>',
    fi: 'px = rem × juurielementin fonttikoko. Oletusfonttikoko = 16px.</p><p class=\\"text-mid mb-4\\">Jos html { font-size: 62.5% }, juuri = 10px, joten 1,6rem = 16px.</p><p class=\\"text-mid\\">Rem ei koskaan kasaudu. 1rem on aina sama sisäkkäisyyden syvyydestä riippumatta. Tämä tekee siitä ennustettavamman kuin em.</p>',
    nl: 'px = rem × root lettergrootte. Standaard root lettergrootte = 16px.</p><p class=\\"text-mid mb-4\\">Als html { font-size: 62.5% }, root = 10px, dus 1,6rem = 16px.</p><p class=\\"text-mid\\">Rem cumuleert nooit. 1rem is altijd hetzelfde ongeacht de nestdiepte. Dit maakt het voorspelbaarder dan em.</p>',
  }],
  // em-to-px (EN)
  ['px = em × parent font size. By default, the browser base font size is 16px.</p><p class=\\"text-mid mb-4\\">Em compounds through the DOM tree. If body is 16px and a div is 1.5em (24px), a paragraph inside at 1.5em will be 1.5 × 24 = 36px.</p><p class=\\"text-mid\\">For predictable sizing, consider using rem units instead — they always reference the root element font size.</p>', {
    hu: 'px = em × szülő betűméret. Alapértelmezés szerint a böngésző alap betűmérete 16px.</p><p class=\\"text-mid mb-4\\">Az em halmozódik a DOM-fán keresztül. Ha a body 16px és egy div 1,5em (24px), egy belső bekezdés 1,5em-nél 1,5 × 24 = 36px lesz.</p><p class=\\"text-mid\\">Kiszámíthatóbb méretezéshez használjon rem egységeket — ezek mindig a gyökér elem betűméretére hivatkoznak.</p>',
    ro: 'px = em × dimensiunea fontului părinte. Implicit, dimensiunea de bază a fontului browserului este 16px.</p><p class=\\"text-mid mb-4\\">Em se acumulează prin arborele DOM. Dacă body este 16px și un div este 1,5em (24px), un paragraf interior la 1,5em va fi 1,5 × 24 = 36px.</p><p class=\\"text-mid\\">Pentru dimensionare predictibilă, luați în considerare utilizarea unităților rem — acestea fac întotdeauna referire la dimensiunea fontului elementului rădăcină.</p>',
    fi: 'px = em × emoelementin fonttikoko. Oletuksena selaimen perusfonttikoko on 16px.</p><p class=\\"text-mid mb-4\\">Em kasautuu DOM-puun läpi. Jos body on 16px ja div on 1,5em (24px), sisäinen kappale 1,5em:ssä on 1,5 × 24 = 36px.</p><p class=\\"text-mid\\">Ennustettavampaan mitoitukseen harkitse rem-yksiköiden käyttöä — ne viittaavat aina juurielementin fonttikokoon.</p>',
  }],
  // cm-to-px-dpi (DE)
  ['Formel: Pixel = cm × DPI / 2,54. Bei 300 DPI: 1 cm = 118,11 Pixel.</p><p class=\\"text-mid\\">Mehr DPI = mehr Pixel pro cm = schärferer Druck. 300 DPI ist der professionelle Standard.</p>', {
    hu: 'Képlet: Pixel = cm × DPI / 2,54. 300 DPI-nál: 1 cm = 118,11 pixel.</p><p class=\\"text-mid\\">Több DPI = több pixel cm-enként = élesebb nyomtatás. 300 DPI a professzionális szabvány.</p>',
    ro: 'Formula: Pixel = cm × DPI / 2,54. La 300 DPI: 1 cm = 118,11 pixeli.</p><p class=\\"text-mid\\">Mai mult DPI = mai mulți pixeli per cm = tipărire mai clară. 300 DPI este standardul profesional.</p>',
  }],
];

// ─── Per-converter FAQ items (DE questions mixed with locale) ───
const FAQ_FIXES = [
  // pt-to-px
  ['"question": "Hány Pixel sind 12 pt?"', { hu: '"question": "Hány pixel 12 pt?"', ro: '"question": "Câți pixeli sunt 12 pt?"', el: '"question": "Πόσα pixel είναι 12 pt;"' }],
  ['"answer": "12 pt = 16 px bei 96 PPI. Das a szabványos-Schriftgröße der Browser."', { hu: '"answer": "12 pt = 16 px 96 PPI-nál. Ez a böngészők szabványos betűmérete."' }],
  ['"answer": "12 pt = 16 px bei 96 PPI. Das ist die Standard-Schriftgröße der Browser."', { ro: '"answer": "12 pt = 16 px la 96 PPI. Aceasta este dimensiunea standard a fontului browserelor."', el: '"answer": "12 pt = 16 px σε 96 PPI. Αυτό είναι το τυπικό μέγεθος γραμματοσειράς των browser."' }],
  // rem-to-px
  ['"question": "Hány Pixel sind 1rem?"', { hu: '"question": "Hány pixel 1rem?"' }],
  ['"answer": "Standardmäßig 1rem = 16px. Änderbar durch Anpassung der Wurzel-Schriftgröße."', { hu: '"answer": "Alapértelmezés szerint 1rem = 16px. Módosítható a gyökér betűméret beállításával."' }],
  ['"question": "Sollte man rem oder px verwenden?"', { hu: '"question": "Rem-et vagy px-et használjak?"' }],
  ['"answer": "Rem für Typografie, Abstände und Layout. Px für Rahmen, Schatten und nicht-skalierende Eigenschaften."', { hu: '"answer": "Rem a tipográfiához, térközökhöz és elrendezéshez. Px a keretekhez, árnyékokhoz és nem skálázandó tulajdonságokhoz."' }],
  ['"question": "Should I use rem or px?"', { hu: '"question": "Rem-et vagy px-et használjak?"', ro: '"question": "Ar trebui să folosesc rem sau px?"' }],
  ['"answer": "Use rem for typography, spacing, and layout. Use px for borders, box-shadows, and properties that should not scale."', { hu: '"answer": "Rem a tipográfiához, térközökhöz és elrendezéshez. Px a keretekhez, árnyékokhoz és nem skálázandó tulajdonságokhoz."', ro: '"answer": "Folosiți rem pentru tipografie, spațiere și layout. Px pentru borduri, umbre și proprietăți care nu trebuie să se scaleze."' }],
  // hex-to-rgb
  ['"Pixel sind 1 mm bei 300 DPI?"', { el: '"pixel είναι 1 mm στα 300 DPI;"', hu: '"pixel 1 mm 300 DPI-nál?"', ro: '"pixeli sunt 1 mm la 300 DPI?"' }],
  ['"answer": "1 mm bei 300 DPI = 11,811 Pixel."', { el: '"answer": "1 mm στα 300 DPI = 11,811 pixel."', hu: '"answer": "1 mm 300 DPI-nál = 11,811 pixel."', ro: '"answer": "1 mm la 300 DPI = 11,811 pixeli."' }],
  // em-to-px
  ['"Pixel sind 1em?"', { hu: '"pixel 1em?"', ro: '"pixeli sunt 1em?"' }],
  ['"answer": "Standardmäßig 1em = 16px (Browser-Standard). Aber em ist relativ zum übergeordneten Element."', { hu: '"answer": "Alapértelmezés szerint 1em = 16px (böngésző alapértelmezés). De az em a szülő elemhez viszonyított."', ro: '"answer": "Implicit 1em = 16px (implicit browser). Dar em este relativ la elementul părinte."' }],
  ['"question": "Τι είναι der Unterschied zwischen em und rem?"', { el: '"question": "Ποια είναι η διαφορά μεταξύ em και rem;"' }],
  ['"answer": "em bezieht sich auf die Eltern-Schriftgröße. rem bezieht sich auf die Wurzel-Schriftgröße (html). rem ist vorhersagbarer."', { el: '"answer": "Το em αναφέρεται στο μέγεθος γραμματοσειράς του γονικού. Το rem αναφέρεται στο μέγεθος γραμματοσειράς της ρίζας (html). Το rem είναι πιο προβλέψιμο."', hu: '"answer": "Az em a szülő betűméretére vonatkozik. A rem a gyökér betűméretre (html). A rem kiszámíthatóbb."', ro: '"answer": "Em se referă la dimensiunea fontului părinte. Rem se referă la dimensiunea fontului rădăcină (html). Rem este mai predictibil."' }],
  ['"Unterschied zwischen em und rem?"', { hu: '"különbség az em és a rem között?"', ro: '"diferență între em și rem?"' }],
  ['"question": "When should I use em instead of px?"', { hu: '"question": "Mikor használjak em-et px helyett?"', ro: '"question": "Când ar trebui să folosesc em în loc de px?"' }],
  ['"answer": "Use em for typography and spacing that should scale with font size. Use px for borders, shadows, and other properties that should stay fixed."', { hu: '"answer": "Em-et a tipográfiához és térközökhöz, amelyeknek a betűmérettel kell skálázódniuk. Px-et keretekhez, árnyékokhoz és tulajdonságokhoz, amelyeknek fixnek kell maradniuk."', ro: '"answer": "Folosiți em pentru tipografie și spațiere care trebuie să se scaleze cu dimensiunea fontului. Px pentru borduri, umbre și proprietăți care trebuie să rămână fixe."' }],
  // cm-to-px-dpi
  ['"Pixel sind 1 cm bei 300 DPI?"', { hu: '"pixel 1 cm 300 DPI-nál?"', ro: '"pixeli sunt 1 cm la 300 DPI?"' }],
  ['"answer": "1 cm bei 300 DPI = 118,11 Pixel."', { hu: '"answer": "1 cm 300 DPI-nál = 118,11 pixel."', ro: '"answer": "1 cm la 300 DPI = 118,11 pixeli."' }],
  // bytes-converter
  ['"Hány MB ist 1 GB?"', { hu: '"Hány MB 1 GB?"' }],
  ['"answer": "1 GB = 1.000 MB (dezimal) oder 1 GiB = 1.024 MiB (binär)."', { el: '"answer": "1 GB = 1.000 MB (δεκαδικό) ή 1 GiB = 1.024 MiB (δυαδικό)."', hu: '"answer": "1 GB = 1.000 MB (decimális) vagy 1 GiB = 1.024 MiB (bináris)."', ro: '"answer": "1 GB = 1.000 MB (zecimal) sau 1 GiB = 1.024 MiB (binar)."' }],
  ['"Hersteller verwenden dezimale Einheiten (1 TB = 1.000.000.000.000 Bytes), aber Ihr Betriebssystem verwendet binäre', {
    el: '"Οι κατασκευαστές χρησιμοποιούν δεκαδικές μονάδες (1 TB = 1.000.000.000.000 bytes), αλλά το λειτουργικό σύστημα χρησιμοποιεί δυαδικές',
    hu: '"A gyártók decimális egységeket használnak (1 TB = 1.000.000.000.000 bájt), de az operációs rendszer bináris',
    ro: '"Producătorii folosesc unități zecimale (1 TB = 1.000.000.000.000 octeți), dar sistemul de operare folosește unități binare',
  }],
  ['"Hány Fotos passen in 1 GB?"', { el: '"Πόσες φωτογραφίες χωρούν σε 1 GB;"', hu: '"Hány fénykép fér el 1 GB-ba?"', ro: '"Câte fotografii încap în 1 GB?"' }],
  ['"answer": "Ca. 200–300 Fotos bei 3–5 MB (12 MP Smartphone). RAW-Fotos (25–50 MB) passen 20–40 pro GB."', {
    el: '"answer": "Περίπου 200–300 φωτογραφίες στα 3–5 MB (smartphone 12 MP). Φωτογραφίες RAW (25–50 MB) χωρούν 20–40 ανά GB."',
    hu: '"answer": "Kb. 200–300 fotó 3–5 MB-nál (12 MP okostelefon). RAW fotók (25–50 MB) 20–40 darab fér el 1 GB-ba."',
    ro: '"answer": "Aprox. 200–300 fotografii la 3–5 MB (smartphone 12 MP). Fotografii RAW (25–50 MB) încap 20–40 pe GB."',
  }],
  // unix-timestamp
  ['"Mi az a die Unix-Epoche?"', { el: '"Τι είναι η εποχή Unix;"', hu: '"Mi az a Unix Epoch?"', ro: '"Ce este Unix Epoch?"' }],
  ['"answer": "Der 1. Januar 1970 um 00:00:00 UTC. Alle Zeitstempel werden ab diesem Punkt gemessen."', {
    el: '"answer": "1 Ιανουαρίου 1970 στις 00:00:00 UTC. Όλες οι χρονοσφραγίδες μετρούνται από αυτό το σημείο."',
    hu: '"answer": "1970. január 1. 00:00:00 UTC. Minden időbélyeg ettől a ponttól számítódik."',
    ro: '"answer": "1 ianuarie 1970 la 00:00:00 UTC. Toate marcajele temporale se măsoară de la acest punct."',
    fi: '"answer": "1. tammikuuta 1970 klo 00:00:00 UTC. Kaikki aikaleimat mitataan tästä pisteestä."',
  }],
  ['"32-Bit-Zeitstempel mit Vorzeichen laufen am 19. Januar 2038', {
    el: '"Οι 32-bit χρονοσφραγίδες με πρόσημο θα υπερχειλίσουν στις 19 Ιανουαρίου 2038',
    hu: '"A 32 bites előjeles időbélyegek 2038. január 19-én túlcsordulnak',
    ro: '"Marcajele temporale pe 32 de biți cu semn vor depăși la 19 ianuarie 2038',
    fi: '"32-bittiset etumerkityt aikaleimat ylivuotavat 19. tammikuuta 2038',
  }],
  ['03:14:07 UTC über. Moderne Systeme verwenden', {
    el: '03:14:07 UTC. Τα σύγχρονα συστήματα χρησιμοποιούν',
    hu: '03:14:07 UTC-kor. A modern rendszerek',
    ro: '03:14:07 UTC. Sistemele moderne folosesc',
    fi: '03:14:07 UTC. Nykyaikaiset järjestelmät käyttävät',
  }],
  // dec-to-bin
  ['"Mi az a 10 in Binär?"', { el: '"Τι είναι το 10 σε δυαδικό;"', hu: '"Mi a 10 binárisban?"', ro: '"Ce este 10 în binar?"' }],
  ['"answer": "Dezimal 10 = Binär 1010 (8+2)."', { el: '"answer": "Δεκαδικό 10 = Δυαδικό 1010 (8+2)."', hu: '"answer": "Decimális 10 = Bináris 1010 (8+2)."', ro: '"answer": "Zecimal 10 = Binar 1010 (8+2)."' }],
  ['"answer": "255 = 11111111 (acht Einsen). Maximum eines Bytes."', { el: '"answer": "255 = 11111111 (οκτώ άσσοι). Μέγιστο ενός byte."', hu: '"answer": "255 = 11111111 (nyolc egyes). Egy bájt maximuma."', ro: '"answer": "255 = 11111111 (opt de unu). Maximul unui octet."' }],
  // dec-to-hex
  ['"Mi az a 255 in Hex?"', { el: '"Τι είναι το 255 σε hex;"', hu: '"Mi a 255 hexadecimálisban?"', ro: '"Ce este 255 în hex?"' }],
  ['"answer": "255 = FF in Hexadezimal. Maximum eines Bytes."', { el: '"answer": "255 = FF σε δεκαεξαδικό. Μέγιστο ενός byte."', hu: '"answer": "255 = FF hexadecimálisban. Egy bájt maximuma."', ro: '"answer": "255 = FF în hexadecimal. Maximul unui octet."' }],
  ['"answer": "0x ist ein Präfix für Hexadezimalzahlen in den meisten Sprachen (C, JavaScript, Python)."', {
    el: '"answer": "0x είναι πρόθεμα για δεκαεξαδικούς αριθμούς στις περισσότερες γλώσσες (C, JavaScript, Python)."',
    hu: '"answer": "0x egy előtag hexadecimális számokhoz a legtöbb nyelvben (C, JavaScript, Python)."',
    ro: '"answer": "0x este un prefix pentru numere hexadecimale în majoritatea limbajelor (C, JavaScript, Python)."',
  }],
  // mbps-to-mbs
  ['"Hány MB/s sind 100 Mbps?"', { el: '"Πόσα MB/s είναι 100 Mbps;"', hu: '"Hány MB/s 100 Mbps?"', ro: '"Câți MB/s sunt 100 Mbps?"' }],
  ['"answer": "100 Mbps = 12,5 MB/s. Teilen Sie Mbps durch 8."', { el: '"answer": "100 Mbps = 12,5 MB/s. Διαιρέστε τα Mbps δια 8."', hu: '"answer": "100 Mbps = 12,5 MB/s. Ossza el az Mbps-t 8-cal."', ro: '"answer": "100 Mbps = 12,5 MB/s. Împărțiți Mbps la 8."' }],
  ['"ISPs werben in Mbps (Bits), Downloads zeigen MB/s (Bytes). 100 Mbps = max 12,5 MB/s.', {
    el: '"Οι πάροχοι διαφημίζουν σε Mbps (bits), οι λήψεις δείχνουν MB/s (bytes). 100 Mbps = μέγ. 12,5 MB/s.',
    hu: '"Az internetszolgáltatók Mbps-ben (bitek) hirdetnek, a letöltések MB/s-ben (bájtok) mutatnak. 100 Mbps = max 12,5 MB/s.',
    ro: '"Furnizorii de internet promovează în Mbps (biți), descărcările arată MB/s (octeți). 100 Mbps = max 12,5 MB/s.',
  }],
  ['"Milyen hosszúe dauert 1 GB Download bei 100 Mbps?"', { hu: '"Mennyi ideig tart 1 GB letöltése 100 Mbps-nél?"' }],
  ['"answer": "1 GB = 1.000 MB. Bei 12,5 MB/s: ~80 Sekunden. In der Praxis ca. 90–100 Sekunden."', {
    el: '"answer": "1 GB = 1.000 MB. Με 12,5 MB/s: ~80 δευτερόλεπτα. Στην πράξη περίπου 90–100 δευτερόλεπτα."',
    hu: '"answer": "1 GB = 1.000 MB. 12,5 MB/s-nél: ~80 másodperc. A gyakorlatban kb. 90–100 másodperc."',
    ro: '"answer": "1 GB = 1.000 MB. La 12,5 MB/s: ~80 secunde. În practică aprox. 90–100 secunde."',
  }],
  // vw-to-px
  ['"Mennyi ist 1vw in Pixel?"', { el: '"Πόσα pixel είναι 1vw;"', hu: '"Mennyi 1vw pixelben?"' }],
  ['"answer": "1vw = 1% der Viewport-Breite. Bei 1920px: 19,2px. Bei 375px: 3,75px."', {
    el: '"answer": "1vw = 1% του πλάτους viewport. Σε 1920px: 19,2px. Σε 375px: 3,75px."',
    hu: '"answer": "1vw = a viewport szélességének 1%-a. 1920px-nél: 19,2px. 375px-nél: 3,75px."',
  }],
  // tw-to-px
  ['"Mennyi ist p-4 in Pixel?"', { el: '"Πόσα pixel είναι p-4;"', hu: '"Mennyi p-4 pixelben?"' }],
  ['"answer": "p-4 = 1rem = 16px bei der Standard-Wurzelschriftgröße."', {
    el: '"answer": "p-4 = 1rem = 16px με το τυπικό μέγεθος γραμματοσειράς ρίζας."',
    hu: '"answer": "p-4 = 1rem = 16px az alapértelmezett gyökér betűméretnél."',
  }],
];

let totalFixed = 0;
let filesChanged = 0;
const ALL = [...COMP_SHARED, ...SECTION_BASIC, ...SECTION_INFO, ...FAQ_FIXES];

for (const locale of LOCALES) {
  const toolsDir = path.join(DATA, locale, 'tools');
  if (!fs.existsSync(toolsDir)) continue;
  const files = fs.readdirSync(toolsDir).filter(f => f.startsWith('unit-') && f.endsWith('.json'));
  for (const file of files) {
    const filePath = path.join(toolsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    for (const [find, translations] of ALL) {
      const replace = translations[locale];
      if (!replace) continue;
      if (content.includes(find)) {
        content = content.replaceAll(find, replace);
        changed = true;
        totalFixed++;
      }
    }
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      filesChanged++;
      console.log(`  ✓ ${locale}/${file}`);
    }
  }
}
console.log(`\n✓ Part 2: Fixed ${totalFixed} strings in ${filesChanged} files`);
