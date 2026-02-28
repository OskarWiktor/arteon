/**
 * Patch the PL hub page with:
 * 1. Updated tool/converter counts (34→54, 24→44)
 * 2. 20 new schema entries
 * 3. 20 new converter cards
 */
const fs = require('fs');
const path = require('path');

const hubPath = path.join(__dirname, '..', 'app', '(pl)', 'narzedzia', 'page.tsx');
let hub = fs.readFileSync(hubPath, 'utf8');

// ── 1. Update counts ──────────────────────────────────────────────────
hub = hub.replace(/34 darmowe narzędzia online/g, '54 darmowe narzędzia online');
hub = hub.replace(/34 darmowe narzędzia/g, '54 darmowe narzędzia');
hub = hub.replace(/24 konwertery obrazów/g, '44 konwertery obrazów');
hub = hub.replace(/numberOfItems: 34/g, 'numberOfItems: 54');

// ── 2. Add schema entries ────────────────────────────────────────────
// Find the last schema entry position (position: 34) and insert after its closing },
const newSchemaEntries = [
  // → AVIF (8)
  { pos: 35, name: 'Konwerter JPG na AVIF', desc: 'Zamień zdjęcia JPG na nowoczesny AVIF. Kompresja nawet 50% lepsza niż JPG.', slug: 'konwerter-jpg-na-avif' },
  { pos: 36, name: 'Konwerter PNG na AVIF', desc: 'Zamień grafiki PNG na AVIF z zachowaniem przezroczystości.', slug: 'konwerter-png-na-avif' },
  { pos: 37, name: 'Konwerter WebP na AVIF', desc: 'Zamień pliki WebP na AVIF. Jeszcze lepsza kompresja.', slug: 'konwerter-webp-na-avif' },
  { pos: 38, name: 'Konwerter SVG na AVIF', desc: 'Zamień grafikę wektorową SVG na nowoczesny AVIF.', slug: 'konwerter-svg-na-avif' },
  { pos: 39, name: 'Konwerter BMP na AVIF', desc: 'Zamień pliki BMP na nowoczesny AVIF. Ogromna redukcja rozmiaru.', slug: 'konwerter-bmp-na-avif' },
  { pos: 40, name: 'Konwerter GIF na AVIF', desc: 'Zamień klatkę GIF na nowoczesny AVIF.', slug: 'konwerter-gif-na-avif' },
  { pos: 41, name: 'Konwerter HEIC na AVIF', desc: 'Zamień zdjęcia HEIC z iPhone na nowoczesny AVIF.', slug: 'konwerter-heic-na-avif' },
  { pos: 42, name: 'Konwerter TIFF na AVIF', desc: 'Zamień pliki TIFF na nowoczesny AVIF.', slug: 'konwerter-tiff-na-avif' },
  // → GIF (5)
  { pos: 43, name: 'Konwerter JPG na GIF', desc: 'Zamień zdjęcia JPG na GIF.', slug: 'konwerter-jpg-na-gif' },
  { pos: 44, name: 'Konwerter PNG na GIF', desc: 'Zamień grafiki PNG na GIF.', slug: 'konwerter-png-na-gif' },
  { pos: 45, name: 'Konwerter WebP na GIF', desc: 'Zamień pliki WebP na GIF.', slug: 'konwerter-webp-na-gif' },
  { pos: 46, name: 'Konwerter SVG na GIF', desc: 'Zamień grafikę wektorową SVG na GIF.', slug: 'konwerter-svg-na-gif' },
  { pos: 47, name: 'Konwerter BMP na GIF', desc: 'Zamień pliki BMP na GIF.', slug: 'konwerter-bmp-na-gif' },
  // → TIFF (7)
  { pos: 48, name: 'Konwerter JPG na TIFF', desc: 'Zamień zdjęcia JPG na bezstratny TIFF. Do druku i archiwizacji.', slug: 'konwerter-jpg-na-tiff' },
  { pos: 49, name: 'Konwerter PNG na TIFF', desc: 'Zamień grafiki PNG na profesjonalny TIFF.', slug: 'konwerter-png-na-tiff' },
  { pos: 50, name: 'Konwerter WebP na TIFF', desc: 'Zamień pliki WebP na bezstratny TIFF.', slug: 'konwerter-webp-na-tiff' },
  { pos: 51, name: 'Konwerter SVG na TIFF', desc: 'Zamień grafikę wektorową SVG na profesjonalny TIFF.', slug: 'konwerter-svg-na-tiff' },
  { pos: 52, name: 'Konwerter BMP na TIFF', desc: 'Zamień pliki BMP na profesjonalny TIFF.', slug: 'konwerter-bmp-na-tiff' },
  { pos: 53, name: 'Konwerter AVIF na TIFF', desc: 'Zamień pliki AVIF na bezstratny TIFF.', slug: 'konwerter-avif-na-tiff' },
  { pos: 54, name: 'Konwerter HEIC na TIFF', desc: 'Zamień zdjęcia HEIC z iPhone na profesjonalny TIFF.', slug: 'konwerter-heic-na-tiff' },
];

const schemaBlock = newSchemaEntries.map(e => `      {
        '@type': 'WebApplication',
        position: ${e.pos},
        name: '${e.name}',
        description: '${e.desc}',
        url: toAbsoluteUrl('/narzedzia/${e.slug}'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      }`).join(',\n');

// Insert before the closing of itemListElement array
const schemaInsertMarker = `        alternateName: ['Image resizer', 'Resize zdjęć online'],
      },
    ],
  },
};`;

hub = hub.replace(schemaInsertMarker,
  `        alternateName: ['Image resizer', 'Resize zdjęć online'],
      },
${schemaBlock},
    ],
  },
};`);

// ── 3. Add converter cards ──────────────────────────────────────────
const newCards = [
  // → AVIF (8)
  { title: 'Konwerter JPG na AVIF', alt: 'Konwerter JPG na AVIF Arteon', desc: 'Zamień zdjęcia JPG na nowoczesny AVIF. Kompresja nawet 50% lepsza niż JPG przy zachowaniu jakości.', slug: 'konwerter-jpg-na-avif' },
  { title: 'Konwerter PNG na AVIF', alt: 'Konwerter PNG na AVIF Arteon', desc: 'Zamień grafiki PNG na AVIF z zachowaniem przezroczystości. Znacznie mniejsze pliki.', slug: 'konwerter-png-na-avif' },
  { title: 'Konwerter WebP na AVIF', alt: 'Konwerter WebP na AVIF Arteon', desc: 'Zamień pliki WebP na AVIF. Jeszcze lepsza kompresja w nowoczesnym formacie.', slug: 'konwerter-webp-na-avif' },
  { title: 'Konwerter SVG na AVIF', alt: 'Konwerter SVG na AVIF Arteon', desc: 'Zamień grafikę wektorową SVG na nowoczesny format rastrowy AVIF.', slug: 'konwerter-svg-na-avif' },
  { title: 'Konwerter BMP na AVIF', alt: 'Konwerter BMP na AVIF Arteon', desc: 'Zamień nieskompresowane pliki BMP na nowoczesny AVIF. Ogromna redukcja rozmiaru.', slug: 'konwerter-bmp-na-avif' },
  { title: 'Konwerter GIF na AVIF', alt: 'Konwerter GIF na AVIF Arteon', desc: 'Zamień pierwszą klatkę GIF na nowoczesny AVIF. Mniejszy plik, lepsza jakość.', slug: 'konwerter-gif-na-avif' },
  { title: 'Konwerter HEIC na AVIF', alt: 'Konwerter HEIC na AVIF Arteon', desc: 'Zamień zdjęcia HEIC z iPhone na AVIF. Nowoczesny format o doskonałej kompresji.', slug: 'konwerter-heic-na-avif' },
  { title: 'Konwerter TIFF na AVIF', alt: 'Konwerter TIFF na AVIF Arteon', desc: 'Zamień pliki TIFF na nowoczesny AVIF. Idealne do publikacji skanów w internecie.', slug: 'konwerter-tiff-na-avif' },
  // → GIF (5)
  { title: 'Konwerter JPG na GIF', alt: 'Konwerter JPG na GIF Arteon', desc: 'Zamień zdjęcia JPG na GIF. Statyczny obraz w uniwersalnym formacie.', slug: 'konwerter-jpg-na-gif' },
  { title: 'Konwerter PNG na GIF', alt: 'Konwerter PNG na GIF Arteon', desc: 'Zamień grafiki PNG na GIF. Idealne do prostych ikon i grafik.', slug: 'konwerter-png-na-gif' },
  { title: 'Konwerter WebP na GIF', alt: 'Konwerter WebP na GIF Arteon', desc: 'Zamień pliki WebP na GIF. Szeroka kompatybilność z programami.', slug: 'konwerter-webp-na-gif' },
  { title: 'Konwerter SVG na GIF', alt: 'Konwerter SVG na GIF Arteon', desc: 'Zamień grafikę wektorową SVG na rastrowy GIF.', slug: 'konwerter-svg-na-gif' },
  { title: 'Konwerter BMP na GIF', alt: 'Konwerter BMP na GIF Arteon', desc: 'Zamień nieskompresowane pliki BMP na lekki GIF.', slug: 'konwerter-bmp-na-gif' },
  // → TIFF (7)
  { title: 'Konwerter JPG na TIFF', alt: 'Konwerter JPG na TIFF Arteon', desc: 'Zamień zdjęcia JPG na bezstratny TIFF. Idealne do druku i archiwizacji.', slug: 'konwerter-jpg-na-tiff' },
  { title: 'Konwerter PNG na TIFF', alt: 'Konwerter PNG na TIFF Arteon', desc: 'Zamień grafiki PNG na profesjonalny TIFF. Do druku i dalszej obróbki.', slug: 'konwerter-png-na-tiff' },
  { title: 'Konwerter WebP na TIFF', alt: 'Konwerter WebP na TIFF Arteon', desc: 'Zamień pliki WebP na bezstratny TIFF. Z formatu webowego do profesjonalnego.', slug: 'konwerter-webp-na-tiff' },
  { title: 'Konwerter SVG na TIFF', alt: 'Konwerter SVG na TIFF Arteon', desc: 'Zamień grafikę wektorową SVG na profesjonalny TIFF. Do druku i DTP.', slug: 'konwerter-svg-na-tiff' },
  { title: 'Konwerter BMP na TIFF', alt: 'Konwerter BMP na TIFF Arteon', desc: 'Zamień pliki BMP na profesjonalny TIFF. Zachowaj jakość w formacie do druku.', slug: 'konwerter-bmp-na-tiff' },
  { title: 'Konwerter AVIF na TIFF', alt: 'Konwerter AVIF na TIFF Arteon', desc: 'Zamień pliki AVIF na bezstratny TIFF. Z formatu webowego do profesjonalnego.', slug: 'konwerter-avif-na-tiff' },
  { title: 'Konwerter HEIC na TIFF', alt: 'Konwerter HEIC na TIFF Arteon', desc: 'Zamień zdjęcia HEIC z iPhone na profesjonalny TIFF. Do druku i archiwizacji.', slug: 'konwerter-heic-na-tiff' },
];

const cardBlocks = newCards.map(c => `            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: '${c.title}',
              topImageAlt: '${c.alt}',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>${c.desc}</p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/${c.slug}">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            }`).join(',\n');

// Insert before the closing of the converter SectionSteps items array
// Find the last TIFF na WebP card closing and append after it
const converterCloseMarker = `              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Konwerter TIFF na WebP',`;

const idx = hub.indexOf(converterCloseMarker);
if (idx === -1) {
  console.error('ERROR: Could not find TIFF na WebP card marker');
  process.exit(1);
}

// Find the closing of that card's block
let searchFrom = idx;
let braceCount = 0;
let foundStart = false;
for (let i = searchFrom; i < hub.length; i++) {
  if (hub[i] === '{') { braceCount++; foundStart = true; }
  if (hub[i] === '}') { braceCount--; }
  if (foundStart && braceCount === 0) {
    // i is the position of the closing } of the last card object
    // Insert the new cards after this }
    hub = hub.slice(0, i + 1) + ',\n' + cardBlocks + ',\n' + hub.slice(i + 1);
    break;
  }
}

// Also update the section description count
hub = hub.replace(
  '24 konwertery obrazów online',
  '44 konwertery obrazów online'
);

// Update FAQ answer to mention new formats
hub = hub.replace(
  'konwertować obrazy między formatami (JPG, PNG, WebP, SVG, BMP, GIF, AVIF, HEIC, TIFF)',
  'konwertować obrazy między formatami (JPG, PNG, WebP, SVG, BMP, GIF, AVIF, HEIC, TIFF) w tym do nowoczesnego AVIF, GIF i profesjonalnego TIFF'
);

fs.writeFileSync(hubPath, hub, 'utf8');
console.log('✅ Hub page patched successfully');
