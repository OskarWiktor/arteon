/**
 * Part 4: Fix remaining partial DE contamination in already-translated content,
 * mixed FAQ questions, and leftover sectionBasic blocks.
 * Run: node scripts/fix-unit-i18n-part4.cjs
 */
const fs = require('node:fs');
const path = require('node:path');
const DATA = path.join(__dirname, '..', 'data');
const LOCALES = ['el', 'hu', 'ro', 'fi', 'nl'];

const REPLACEMENTS = [
  // ═══════════ hex-to-rgb: sectionBasic still fully DE in HU/RO/FI ═══════════
  // The partial replacement left DE text after the translated beginning
  ['ugyanazt an Farben in unterschiedlicher Notation dar. HEX ist in CSS und Design-Tools üblich, RGB in der Programmierung.</p><p class=\\"text-mid mb-4\\">Jede HEX-Farbe hat 6 Ziffern: die ersten 2 für Rot (00–FF), die nächsten 2 für Grün, die letzten 2 für Blau. RGB verwendet Dezimalwerte 0–255.</p><p class=\\"text-mid\\">Alle Berechnungen werden lokal in Ihrem Browser durchgeführt.</p>', {
    hu: 'ugyanazt a színt képviselik, csak eltérő jelölésben. A HEX a CSS-ben és a tervezőeszközökben elterjedt, az RGB a programozásban.</p><p class=\\"text-mid mb-4\\">Minden HEX-szín 6 számjegyből áll: az első 2 a pirosért (00–FF), a következő 2 a zöldért, az utolsó 2 a kékért. Az RGB decimális értékeket használ 0–255.</p><p class=\\"text-mid\\">Minden számítás helyben, a böngészőjében történik.</p>',
    ro: 'aceeași culoare, doar în notație diferită. HEX este comun în CSS și instrumente de design, RGB în programare.</p><p class=\\"text-mid mb-4\\">Fiecare culoare HEX are 6 cifre: primele 2 pentru roșu (00–FF), următoarele 2 pentru verde, ultimele 2 pentru albastru. RGB folosește valori zecimale 0–255.</p><p class=\\"text-mid\\">Toate calculele se efectuează local în browserul dumneavoastră.</p>',
    fi: 'samaa väriä, vain eri merkintätavalla. HEX on yleinen CSS:ssä ja suunnittelutyökaluissa, RGB ohjelmoinnissa.</p><p class=\\"text-mid mb-4\\">Jokaisessa HEX-värissä on 6 numeroa: ensimmäiset 2 punaiselle (00–FF), seuraavat 2 vihreälle, viimeiset 2 siniselle. RGB käyttää desimaaliarvoja 0–255.</p><p class=\\"text-mid\\">Kaikki laskelmat suoritetaan paikallisesti selaimessasi.</p>',
  }],
  // hex-to-rgb FAQ still fully DE in HU/RO
  ['"question": "Wie rechnet man HEX in RGB um?"', {
    hu: '"question": "Hogyan lehet HEX-et RGB-re váltani?"',
    ro: '"question": "Cum se convertește HEX în RGB?"',
    fi: '"question": "Miten HEX muunnetaan RGB:ksi?"',
  }],
  ['"answer": "Rechnen Sie jedes Hex-Paar in Dezimal um. #FF5733: FF=255, 57=87, 33=51 → rgb(255, 87, 51)."', {
    hu: '"answer": "Váltsa át az egyes hex-párokat decimálisra. #FF5733: FF=255, 57=87, 33=51 → rgb(255, 87, 51)."',
    ro: '"answer": "Convertiți fiecare pereche hex în zecimal. #FF5733: FF=255, 57=87, 33=51 → rgb(255, 87, 51)."',
    fi: '"answer": "Muunna jokainen hex-pari desimaaliksi. #FF5733: FF=255, 57=87, 33=51 → rgb(255, 87, 51)."',
  }],

  // ═══════════ FAQ questions with "Pixel sind" pattern ═══════════
  // inches-to-px-dpi
  ['"question": "Πόσα Pixel sind 1 Zoll bei 300 DPI?"', { el: '"question": "Πόσα pixel είναι 1 ίντσα στα 300 DPI;"' }],
  ['"question": "Hány Pixel sind 1 Zoll bei 300 DPI?"', { hu: '"question": "Hány pixel 1 hüvelyk 300 DPI-nál?"' }],
  ['"question": "Câți Pixel sind 1 Zoll bei 300 DPI?"', { ro: '"question": "Câți pixeli sunt 1 inch la 300 DPI?"' }],
  ['"question": "Kuinka monta Pixel sind 1 Zoll bei 300 DPI?"', { fi: '"question": "Kuinka monta pikseliä on 1 tuuma 300 DPI:llä?"' }],

  // mm-to-px-dpi
  ['"question": "Πόσα Pixel sind 1 mm bei 300 DPI?"', { el: '"question": "Πόσα pixel είναι 1 mm στα 300 DPI;"' }],
  ['"question": "Hány Pixel sind 1 mm bei 300 DPI?"', { hu: '"question": "Hány pixel 1 mm 300 DPI-nál?"' }],
  ['"question": "Câți Pixel sind 1 mm bei 300 DPI?"', { ro: '"question": "Câți pixeli sunt 1 mm la 300 DPI?"' }],

  // cm-to-px-dpi
  ['"question": "Hány Pixel sind 1 cm bei 300 DPI?"', { hu: '"question": "Hány pixel 1 cm 300 DPI-nál?"' }],
  ['"question": "Câți Pixel sind 1 cm bei 300 DPI?"', { ro: '"question": "Câți pixeli sunt 1 cm la 300 DPI?"' }],

  // em-to-px
  ['"question": "Hány Pixel sind 1em?"', { hu: '"question": "Hány pixel 1em?"' }],
  ['"question": "Câți Pixel sind 1em?"', { ro: '"question": "Câți pixeli sunt 1em?"' }],

  // pt-to-px
  ['"question": "Câți Pixel sind 12 pt?"', { ro: '"question": "Câți pixeli sunt 12 pt?"' }],

  // rem-to-px
  ['"question": "Câți Pixel sind 1rem?"', { ro: '"question": "Câți pixeli sunt 1rem?"' }],

  // ═══════════ bytes-converter: sectionBasic partially translated ═══════════
  // EL: already starts with Greek, but continues with EN
  // Need to check exact remaining content
  // HU: starts with Hungarian, continues with EN
  // RO: starts with Romanian, continues with EN

  // ═══════════ unix-timestamp: sectionBasic partially translated ═══════════
  // These have the beginning translated but the rest is still DE/EN
  // The Part 3 script only partially matched because the strings got cut

  // ═══════════ vw-to-px: sectionBasic partially translated ═══════════
  // EL/HU/RO: beginning translated, rest still has DE fragments
  ['1920px-Bildschirm: 1', {
    el: '1920px: 1',
    hu: '1920px-es képernyőn: 1',
    ro: '1920px: 1',
  }],
  ['vw = 19,2px, 50vw = 960px.</p><p class=\\"text-mid mb-4\\">vw wird für responsive Layouts verwendet: Full-Width-Sektionen, skalierte Typografie und Abstände, die mit der Bildschirmbreite wachsen.</p><p class=\\"text-mid\\">Alle Berechnungen werden lokal in Ihrem Browser durchgeführt.</p>', {
    el: 'vw = 19,2px, 50vw = 960px.</p><p class=\\"text-mid mb-4\\">Το vw χρησιμοποιείται για responsive διατάξεις: τμήματα πλήρους πλάτους, κλιμακούμενη τυπογραφία και αποστάσεις που μεγαλώνουν με το πλάτος οθόνης.</p><p class=\\"text-mid\\">Όλοι οι υπολογισμοί εκτελούνται τοπικά στον browser σας.</p>',
    hu: 'vw = 19,2px, 50vw = 960px.</p><p class=\\"text-mid mb-4\\">A vw reszponzív elrendezésekhez használatos: teljes szélességű szekciók, skálázott tipográfia és a képernyő szélességével növekvő térközök.</p><p class=\\"text-mid\\">Minden számítás helyben, a böngészőjében történik.</p>',
    ro: 'vw = 19,2px, 50vw = 960px.</p><p class=\\"text-mid mb-4\\">vw este utilizat pentru layout-uri responsive: secțiuni la lățime completă, tipografie scalată și spațiere care crește cu lățimea ecranului.</p><p class=\\"text-mid\\">Toate calculele se efectuează local în browserul dumneavoastră.</p>',
  }],

  // ═══════════ unix-timestamp sectionBasic remaining DE/EN ═══════════
  // The Part 3 script replaced a fragment but the surrounding text still has issues
  // Let me replace the full remaining DE/EN portions
  [', 00:00:00 UTC. Dieser Zeitpunkt wurde als Standardreferenz für alle POSIX-kompatiblen Systeme gewählt.</p><p class=\\"text-mid mb-4\\">Aktuelle Werte liegen bei ca. 1,7 Milliarden. Am 19. Januar 2038 werden 32-Bit-Zeitstempel überlaufen (Y2K38-Problem).</p><p class=\\"text-mid\\">Alle Berechnungen werden lokal in Ihrem Browser durchgeführt.</p>', {
    el: ', 00:00:00 UTC. Αυτή η στιγμή επιλέχθηκε ως πρότυπη αναφορά για όλα τα συστήματα συμβατά με POSIX.</p><p class=\\"text-mid mb-4\\">Οι τρέχουσες τιμές είναι περίπου 1,7 δισεκατομμύρια. Στις 19 Ιανουαρίου 2038 οι 32-bit χρονοσφραγίδες θα υπερχειλίσουν (πρόβλημα Y2K38).</p><p class=\\"text-mid\\">Όλοι οι υπολογισμοί εκτελούνται τοπικά στον browser σας.</p>',
    hu: ', 00:00:00 UTC. Ezt az időpontot választották standard referenciaként minden POSIX-kompatibilis rendszer számára.</p><p class=\\"text-mid mb-4\\">A jelenlegi értékek kb. 1,7 milliárd körül vannak. 2038. január 19-én a 32 bites időbélyegek túlcsordulnak (Y2K38-probléma).</p><p class=\\"text-mid\\">Minden számítás helyben, a böngészőjében történik.</p>',
    ro: ', 00:00:00 UTC. Acest moment a fost ales ca referință standard pentru toate sistemele compatibile POSIX.</p><p class=\\"text-mid mb-4\\">Valorile curente sunt în jurul a 1,7 miliarde. Pe 19 ianuarie 2038, marcajele temporale pe 32 de biți vor depăși (problema Y2K38).</p><p class=\\"text-mid\\">Toate calculele se efectuează local în browserul dumneavoastră.</p>',
    fi: ', 00:00:00 UTC. Tämä hetki valittiin standardiviitteeksi kaikille POSIX-yhteensopiville järjestelmille.</p><p class=\\"text-mid mb-4\\">Nykyiset arvot ovat noin 1,7 miljardia. 19. tammikuuta 2038 32-bittiset aikaleimat ylivuotavat (Y2K38-ongelma).</p><p class=\\"text-mid\\">Kaikki laskelmat suoritetaan paikallisesti selaimessasi.</p>',
  }],

  // ═══════════ unix-timestamp sectionInfo EN ═══════════
  ['Unix time counts seconds from the epoch: January 1, 1970, 00:00:00 UTC. This date was chosen as the standard reference for all POSIX-compatible systems.</p><p class=\\"text-mid mb-4\\">Current values are around 1.7 billion. On January 19, 2038, 32-bit timestamps will overflow (Y2K38 problem).</p><p class=\\"text-mid\\">To convert: multiply timestamp by 1000 for JavaScript (uses milliseconds). In PHP: date() accepts seconds directly.</p>', {
    el: 'Ο χρόνος Unix μετράει δευτερόλεπτα από τη στιγμή αναφοράς: 1 Ιανουαρίου 1970, 00:00:00 UTC. Αυτή η ημερομηνία επιλέχθηκε ως πρότυπη αναφορά για όλα τα συστήματα POSIX.</p><p class=\\"text-mid mb-4\\">Οι τρέχουσες τιμές είναι περίπου 1,7 δισεκατομμύρια. Στις 19 Ιανουαρίου 2038, οι 32-bit χρονοσφραγίδες θα υπερχειλίσουν (πρόβλημα Y2K38).</p><p class=\\"text-mid\\">Για μετατροπή: πολλαπλασιάστε το timestamp επί 1000 για JavaScript (χρησιμοποιεί χιλιοστά δευτερολέπτου). Σε PHP: η date() δέχεται δευτερόλεπτα απευθείας.</p>',
    hu: 'A Unix idő az epochából számolt másodperceket jelenti: 1970. január 1., 00:00:00 UTC. Ezt a dátumot választották standard referenciaként minden POSIX-kompatibilis rendszer számára.</p><p class=\\"text-mid mb-4\\">A jelenlegi értékek kb. 1,7 milliárd körül vannak. 2038. január 19-én a 32 bites időbélyegek túlcsordulnak (Y2K38-probléma).</p><p class=\\"text-mid\\">Átváltáshoz: szorozza meg a timestampot 1000-rel JavaScripthez (ezredmásodperceket használ). PHP-ben: a date() közvetlenül másodperceket fogad.</p>',
    ro: 'Timpul Unix numără secundele de la epoca de referință: 1 ianuarie 1970, 00:00:00 UTC. Această dată a fost aleasă ca referință standard pentru toate sistemele compatibile POSIX.</p><p class=\\"text-mid mb-4\\">Valorile curente sunt în jurul a 1,7 miliarde. Pe 19 ianuarie 2038, marcajele temporale pe 32 de biți vor depăși (problema Y2K38).</p><p class=\\"text-mid\\">Pentru conversie: înmulțiți timestamp-ul cu 1000 pentru JavaScript (folosește milisecunde). În PHP: date() acceptă secunde direct.</p>',
    fi: 'Unix-aika laskee sekunteja epookista: 1. tammikuuta 1970, 00:00:00 UTC. Tämä päivämäärä valittiin standardiviitteeksi kaikille POSIX-yhteensopiville järjestelmille.</p><p class=\\"text-mid mb-4\\">Nykyiset arvot ovat noin 1,7 miljardia. 19. tammikuuta 2038 32-bittiset aikaleimat ylivuotavat (Y2K38-ongelma).</p><p class=\\"text-mid\\">Muuntamiseen: kerro aikaleima 1000:lla JavaScriptille (käyttää millisekunteja). PHP:ssä: date() hyväksyy sekunteja suoraan.</p>',
  }],

  // ═══════════ bytes-converter sectionBasic EN continuation ═══════════
  ['B), gigabytes (GB), and terabytes (TB). There are two systems: decimal (SI) where 1 KB = 1,000 bytes, and binary (IEC) where 1 KiB = 1,024 bytes.</p><p class=\\"text-mid mb-4\\">This difference explains why a "1 TB" hard drive shows only ~931 GB in your operating system.</p><p class=\\"text-mid\\">All calculations run locally in your browser — nothing is sent to any server.</p>', {
    el: 'B), gigabytes (GB) και terabytes (TB). Υπάρχουν δύο συστήματα: δεκαδικό (SI) όπου 1 KB = 1.000 bytes, και δυαδικό (IEC) όπου 1 KiB = 1.024 bytes.</p><p class=\\"text-mid mb-4\\">Αυτή η διαφορά εξηγεί γιατί ένας σκληρός δίσκος "1 TB" εμφανίζει μόνο ~931 GB στο λειτουργικό σας σύστημα.</p><p class=\\"text-mid\\">Όλοι οι υπολογισμοί εκτελούνται τοπικά στον browser σας.</p>',
    hu: 'B), gigabájt (GB) és terabájt (TB). Két rendszer létezik: decimális (SI), ahol 1 KB = 1.000 bájt, és bináris (IEC), ahol 1 KiB = 1.024 bájt.</p><p class=\\"text-mid mb-4\\">Ez a különbség magyarázza, miért mutat egy "1 TB"-os merevlemez csak ~931 GB-ot az operációs rendszerben.</p><p class=\\"text-mid\\">Minden számítás helyben, a böngészőjében történik.</p>',
    ro: 'B), gigaocteți (GB) și teraocteți (TB). Există două sisteme: zecimal (SI) unde 1 KB = 1.000 octeți, și binar (IEC) unde 1 KiB = 1.024 octeți.</p><p class=\\"text-mid mb-4\\">Această diferență explică de ce un hard disk de "1 TB" arată doar ~931 GB în sistemul de operare.</p><p class=\\"text-mid\\">Toate calculele se efectuează local în browserul dumneavoastră.</p>',
  }],

  // ═══════════ mbps-to-mbs sectionBasic EN continuation ═══════════
  ['nload speeds are shown in megabytes per second (MB/s). Since 1 byte = 8 bits: MB/s = Mbps ÷ 8.</p><p class=\\"text-mid mb-4\\">A 100 Mbps connection delivers a maximum of 12.5 MB/s. Real-world speeds are typically 10–20% lower due to protocol overhead.</p><p class=\\"text-mid\\">All calculations run locally in your browser — nothing is sent to any server.</p>', {
    el: 'ταχύτητες λήψης εμφανίζονται σε megabytes ανά δευτερόλεπτο (MB/s). Αφού 1 byte = 8 bits: MB/s = Mbps ÷ 8.</p><p class=\\"text-mid mb-4\\">Μια σύνδεση 100 Mbps παρέχει μέγιστο 12,5 MB/s. Οι πραγματικές ταχύτητες είναι τυπικά 10–20% χαμηλότερες λόγω overhead πρωτοκόλλου.</p><p class=\\"text-mid\\">Όλοι οι υπολογισμοί εκτελούνται τοπικά στον browser σας.</p>',
    hu: 'töltési sebességek megabájt per másodpercben (MB/s) jelennek meg. Mivel 1 bájt = 8 bit: MB/s = Mbps ÷ 8.</p><p class=\\"text-mid mb-4\\">Egy 100 Mbps-es kapcsolat legfeljebb 12,5 MB/s-t nyújt. A valós sebességek jellemzően 10–20%-kal alacsonyabbak a protokoll overhead miatt.</p><p class=\\"text-mid\\">Minden számítás helyben, a böngészőjében történik.</p>',
    ro: 'viteze de descărcare sunt afișate în megaocteți pe secundă (MB/s). Deoarece 1 octet = 8 biți: MB/s = Mbps ÷ 8.</p><p class=\\"text-mid mb-4\\">O conexiune de 100 Mbps oferă maxim 12,5 MB/s. Vitezele reale sunt de obicei cu 10–20% mai mici din cauza overhead-ului protocolului.</p><p class=\\"text-mid\\">Toate calculele se efectuează local în browserul dumneavoastră.</p>',
  }],

  // ═══════════ mbps-to-mbs EL FAQ mixed question ═══════════
  ['"question": "Πόσο μακρύe dauert 1 GB Download bei 100 Mbps?"', { el: '"question": "Πόσο χρόνο χρειάζεται η λήψη 1 GB με 100 Mbps;"' }],

  // ═══════════ vw-to-px EL FAQ answer ═══════════
  ['"answer": "1vw = 1 % der Viewport-Breite. Bei 1920px: 19,2px. Bei 375px: 3,75px."', {
    el: '"answer": "1vw = 1% του πλάτους viewport. Σε 1920px: 19,2px. Σε 375px: 3,75px."',
  }],
];

let totalFixed = 0;
let filesChanged = 0;

for (const locale of LOCALES) {
  const toolsDir = path.join(DATA, locale, 'tools');
  if (!fs.existsSync(toolsDir)) continue;
  const files = fs.readdirSync(toolsDir).filter(f => f.startsWith('unit-') && f.endsWith('.json'));
  for (const file of files) {
    const filePath = path.join(toolsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    for (const [find, translations] of REPLACEMENTS) {
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
console.log(`\n✓ Part 4: Fixed ${totalFixed} strings in ${filesChanged} files`);
