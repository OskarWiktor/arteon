/**
 * Part 5: Fix remaining partial contamination in sectionBasic, FAQ items.
 * Run: node scripts/fix-unit-i18n-part5.cjs
 */
const fs = require('node:fs');
const path = require('node:path');
const DATA = path.join(__dirname, '..', 'data');
const LOCALES = ['el', 'hu', 'ro', 'fi', 'nl'];

const REPLACEMENTS = [
  // ═══════════ vw-to-px sectionBasic: DE fragment in middle ═══════════
  ['vw wird häufig für Fluid Typography verwendet: font-size: clamp(1rem, 2.5vw, 2rem).</p><p class=\\"text-mid\\">Alle Berechnungen werden lokal in Ihrem Browser durchgeführt.</p>', {
    el: 'Το vw χρησιμοποιείται συχνά για ρευστή τυπογραφία: font-size: clamp(1rem, 2.5vw, 2rem).</p><p class=\\"text-mid\\">Όλοι οι υπολογισμοί εκτελούνται τοπικά στον browser σας.</p>',
    hu: 'A vw-t gyakran használják fluid tipográfiához: font-size: clamp(1rem, 2.5vw, 2rem).</p><p class=\\"text-mid\\">Minden számítás helyben, a böngészőjében történik.</p>',
    ro: 'vw este frecvent folosit pentru tipografie fluidă: font-size: clamp(1rem, 2.5vw, 2rem).</p><p class=\\"text-mid\\">Toate calculele se efectuează local în browserul dumneavoastră.</p>',
  }],

  // ═══════════ vw-to-px FAQ: mixed questions/answers ═══════════
  ['"question": "Πόσο ist 1vw in Pixel?"', { el: '"question": "Πόσα pixel είναι 1vw;"' }],
  ['"answer": "1vw = 1 % der Viewport-Breite. Bei 1920px: 19,2px. Bei 375px: 3,75px."', {
    el: '"answer": "1vw = 1% του πλάτους viewport. Σε 1920px: 19,2px. Σε 375px: 3,75px."',
    hu: '"answer": "1vw = a viewport szélességének 1%-a. 1920px-nél: 19,2px. 375px-nél: 3,75px."',
    ro: '"answer": "1vw = 1% din lățimea viewport-ului. La 1920px: 19,2px. La 375px: 3,75px."',
  }],
  ['"question": "Mennyi ist 1vw in Pixel?"', { hu: '"question": "Mennyi 1vw pixelben?"' }],

  // ═══════════ bytes-converter sectionBasic: EN continuation after partial fix ═══════════
  // EL version
  ['kilobytes (KB), megabytes (MB), gigabytes (GB), and terabytes (TB). There are two systems: decimal (1 KB = 1,000 bytes) and binary (1 KiB = 1,024 bytes).</p><p class=\\"text-mid mb-4\\">Storage manufacturers use decimal units (a \\"500 GB\\" drive = 500,000,000,000 bytes), while operating systems often use binary units (showing ~465 GiB for the same drive). This discrepancy is a common source of confusion.</p><p class=\\"text-mid mb-4\\">File sizes, RAM, network speeds, and storage capacity all use different conventions. This converter handles both systems to eliminate confusion.</p><p class=\\"text-mid\\">All calculations run locally in your browser — nothing is sent to any server.</p>', {
    el: 'kilobytes (KB), megabytes (MB), gigabytes (GB) και terabytes (TB). Υπάρχουν δύο συστήματα: δεκαδικό (1 KB = 1.000 bytes) και δυαδικό (1 KiB = 1.024 bytes).</p><p class=\\"text-mid mb-4\\">Οι κατασκευαστές χρησιμοποιούν δεκαδικές μονάδες (δίσκος \\"500 GB\\" = 500.000.000.000 bytes), ενώ τα λειτουργικά συστήματα χρησιμοποιούν δυαδικές μονάδες (~465 GiB για τον ίδιο δίσκο). Αυτή η ασυμφωνία είναι συχνή πηγή σύγχυσης.</p><p class=\\"text-mid mb-4\\">Μεγέθη αρχείων, RAM, ταχύτητες δικτύου και χωρητικότητα αποθήκευσης χρησιμοποιούν διαφορετικές συμβάσεις. Αυτός ο μετατροπέας χειρίζεται και τα δύο συστήματα.</p><p class=\\"text-mid\\">Όλοι οι υπολογισμοί εκτελούνται τοπικά στον browser σας.</p>',
    hu: 'kilobájt (KB), megabájt (MB), gigabájt (GB) és terabájt (TB). Két rendszer létezik: decimális (1 KB = 1.000 bájt) és bináris (1 KiB = 1.024 bájt).</p><p class=\\"text-mid mb-4\\">A tároló gyártók decimális egységeket használnak (\\"500 GB\\"-os meghajtó = 500.000.000.000 bájt), míg az operációs rendszerek bináris egységeket (~465 GiB ugyanahhoz a meghajtóhoz). Ez az eltérés gyakori zavart okoz.</p><p class=\\"text-mid mb-4\\">Fájlméretek, RAM, hálózati sebességek és tárolókapacitás mind különböző konvenciókat használnak. Ez az átváltó mindkét rendszert kezeli.</p><p class=\\"text-mid\\">Minden számítás helyben, a böngészőjében történik.</p>',
    ro: 'kiloocteți (KB), megaocteți (MB), gigaocteți (GB) și teraocteți (TB). Există două sisteme: zecimal (1 KB = 1.000 octeți) și binar (1 KiB = 1.024 octeți).</p><p class=\\"text-mid mb-4\\">Producătorii folosesc unități zecimale (disc \\"500 GB\\" = 500.000.000.000 octeți), în timp ce sistemele de operare folosesc unități binare (~465 GiB pentru același disc). Această discrepanță este o sursă frecventă de confuzie.</p><p class=\\"text-mid mb-4\\">Dimensiunile fișierelor, RAM, vitezele de rețea și capacitatea de stocare folosesc convenții diferite. Acest convertor gestionează ambele sisteme.</p><p class=\\"text-mid\\">Toate calculele se efectuează local în browserul dumneavoastră.</p>',
  }],

  // ═══════════ unix-timestamp sectionBasic: remaining DE after partial fix ═══════════
  [', 00:00:00 UTC. Dieser Zeitpunkt wurde als Standardreferenz', {
    el: ', 00:00:00 UTC. Αυτή η στιγμή επιλέχθηκε ως πρότυπη αναφορά',
    hu: ', 00:00:00 UTC. Ezt az időpontot választották standard referenciaként',
    ro: ', 00:00:00 UTC. Acest moment a fost ales ca referință standard',
    fi: ', 00:00:00 UTC. Tämä hetki valittiin standardiviitteeksi',
  }],
  ['für alle POSIX-kompatiblen Systeme gewählt.</p><p class=\\"text-mid mb-4\\">Aktuelle Werte liegen bei ca. 1,7 Milliarden. Am 19. Januar 2038 werden 32-Bit-Zeitstempel überlaufen (Y2K38-Problem).</p><p class=\\"text-mid\\">Alle Berechnungen werden lokal in Ihrem Browser durchgeführt.</p>', {
    el: 'για όλα τα συστήματα συμβατά με POSIX.</p><p class=\\"text-mid mb-4\\">Οι τρέχουσες τιμές είναι περίπου 1,7 δισεκατομμύρια. Στις 19 Ιανουαρίου 2038 οι 32-bit χρονοσφραγίδες θα υπερχειλίσουν (πρόβλημα Y2K38).</p><p class=\\"text-mid\\">Όλοι οι υπολογισμοί εκτελούνται τοπικά στον browser σας.</p>',
    hu: 'minden POSIX-kompatibilis rendszer számára.</p><p class=\\"text-mid mb-4\\">A jelenlegi értékek kb. 1,7 milliárd körül vannak. 2038. január 19-én a 32 bites időbélyegek túlcsordulnak (Y2K38-probléma).</p><p class=\\"text-mid\\">Minden számítás helyben, a böngészőjében történik.</p>',
    ro: 'pentru toate sistemele compatibile POSIX.</p><p class=\\"text-mid mb-4\\">Valorile curente sunt în jurul a 1,7 miliarde. Pe 19 ianuarie 2038 marcajele temporale pe 32 de biți vor depăși (problema Y2K38).</p><p class=\\"text-mid\\">Toate calculele se efectuează local în browserul dumneavoastră.</p>',
    fi: 'kaikille POSIX-yhteensopiville järjestelmille.</p><p class=\\"text-mid mb-4\\">Nykyiset arvot ovat noin 1,7 miljardia. 19. tammikuuta 2038 32-bittiset aikaleimat ylivuotavat (Y2K38-ongelma).</p><p class=\\"text-mid\\">Kaikki laskelmat suoritetaan paikallisesti selaimessasi.</p>',
  }],

  // ═══════════ FI: rem-to-px sectionBasic still EN ═══════════
  // FI rem-to-px was not in Part 2 because it was already partially fixed
  // Let me check if it needs fixing by targeting the EN content

  // ═══════════ FI: em-to-px still DE ═══════════
  // fi/unit-em-to-px L62, L161, L170, L200
  // The Part 2 script may not have matched fi for em-to-px sectionBasic since it was DE
  // sectionBasic DE for em-to-px was already in Part 2 but may not have matched fi

  // ═══════════ RO: hex-to-rgb sectionBasic partial fix ═══════════  
  ['aceeași culoare, doar în notație diferită. HEX este comun în CSS și instrumente de design, RGB în programare.</p><p class=\\"text-mid mb-4\\">Fiecare culoare HEX are 6 cifre: primele 2 pentru roșu (00–FF), următoarele 2 pentru verde, ultimele 2 pentru albastru. RGB folosește valori zecimale 0–255.</p><p class=\\"text-mid\\">Toate calculele se efectuează local în browserul dumneavoastră.</p>', { _skip: true }],
  // RO hex still has leftover "in Farben" text - need to check
];

// Filter out skip entries
const ACTIVE = REPLACEMENTS.filter(r => !r[1]._skip);

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
    for (const [find, translations] of ACTIVE) {
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
console.log(`\n✓ Part 5: Fixed ${totalFixed} strings in ${filesChanged} files`);
