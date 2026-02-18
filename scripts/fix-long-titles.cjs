/**
 * Fix meta titles that exceed 60 characters.
 * Each fix is a linguistically correct, SEO-optimized rewrite.
 * Usage: node scripts/fix-long-titles.cjs
 */
const fs = require('fs');
const path = require('path');

// Map: file → new title (linguistically rewritten, ≤60 chars)
const FIXES = {
  // LT (Lithuanian)
  'data/lt/tools/image-editor.json': 'Nemokamas paveikslėlių redaktorius – Apkarpykite greitai',
  'data/lt/tools/palette-extractor.json': 'Nemokamas spalvų ištraukimas iš paveikslėlio',
  'data/lt/tools/word-counter.json': 'Nemokamas žodžių ir simbolių skaitiklis – SEO',
  'data/lt/tools/meta-counter.json': 'Meta pavadinimo ir aprašymo tikrintuvas – Nemokamai',
  'data/lt/tools/color-palette.json': 'Spalvų paletių generatorius – 9 paletės nemokamai',
  'data/lt/tools/favicon.json': 'Nemokamas favicon generatorius – ICO ir PNG',

  // TL (Tagalog)
  'data/tl/tools/word-counter.json': 'Libreng Tagabilang ng Salita – Suriin ang Teksto',
  'data/tl/tools/favicon.json': 'Libreng Favicon Generator – Mula sa Anumang Larawan',
  'data/tl/tools/color-palette.json': 'Libreng Generator ng Palette – 9 Mula sa Isang Kulay',
  'data/tl/tools/image-editor.json': 'Libreng Editor ng Larawan – I-crop at I-resize',
  'data/tl/tools/email-signature.json': 'Libreng Email Signature Generator – HTML Gmail',

  // SQ (Albanian)
  'data/sq/tools/word-counter.json': 'Numërues fjalësh dhe karakteresh – Kontrolloni SEO',
  'data/sq/tools/image-editor.json': 'Redaktues imazhesh falas – Preni për rrjetet sociale',

  // SL (Slovenian)
  'data/sl/tools/image-editor.json': 'Brezplačni urejevalnik slik – Obrezovanje za omrežja',
  'data/sl/tools/palette-extractor.json': 'Brezplačno izvlečenje barv iz slike – Paleta',
  'data/sl/tools/word-counter.json': 'Brezplačni števec besed in znakov – Dolžina za SEO',
  'data/sl/tools/email-signature.json': 'Brezplačni generator e-poštnega podpisa – HTML',

  // SW (Swahili)
  'data/sw/tools/image-editor.json': 'Kihariri cha Picha Bure – Kata na Ubadilishe Ukubwa',
  'data/sw/tools/word-counter.json': 'Kihesabuji Maneno na Herufi Bure – Urefu wa Maandishi',

  // FI (Finnish)
  'data/fi/tools/email-signature.json': 'Ilmainen sähköpostiallekirjoitusgeneraattori – HTML',
  'data/fi/tools/word-counter.json': 'Ilmainen sana- ja merkkilaskuri – Tekstin pituus',
  'data/fi/tools/palette-extractor.json': 'Ilmainen värien poiminta kuvasta – Väripaletti',
  'data/fi/tools/meta-counter.json': 'Meta-otsikon ja -kuvauksen tarkistus – Pikseleinä',
  'data/fi/tools/qr-code.json': 'Ilmainen QR-koodigeneraattori – PNG ja SVG',
  'data/fi/tools/color-palette.json': 'Ilmainen väripalettien generaattori – 9 palettia',

  // SK (Slovak)
  'data/sk/tools/image-editor.json': 'Bezplatný editor obrázkov – Orezanie pre sociálne médiá',
  'data/sk/tools/palette-extractor.json': 'Bezplatná extrakcia farieb z obrázka – Paleta',
  'data/sk/tools/word-counter.json': 'Bezplatné počítadlo slov a znakov – Dĺžka pre SEO',
  'data/sk/tools/email-signature.json': 'Bezplatný generátor e-mailového podpisu – HTML',

  // HR (Croatian)
  'data/hr/tools/image-editor.json': 'Besplatni uređivač slika – Obrezivanje za mreže',
  'data/hr/tools/palette-extractor.json': 'Besplatno izdvajanje boja iz slike – Paleta',
  'data/hr/tools/word-counter.json': 'Besplatni brojač riječi i znakova – Duljina za SEO',

  // CS (Czech)
  'data/cs/tools/image-editor.json': 'Editor obrázků zdarma – Ořízněte pro sociální sítě',
  'data/cs/tools/word-counter.json': 'Počítadlo slov a znaků zdarma – Délka textu pro SEO',

  // SV (Swedish)
  'data/sv/tools/image-editor.json': 'Gratis bildredigerare – Beskär för sociala medier',

  // MS (Malay)
  'data/ms/tools/word-counter.json': 'Pengira Perkataan dan Aksara Percuma – Panjang Teks',
  'data/ms/tools/email-signature.json': 'Penjana Tandatangan E-mel Percuma – HTML Gmail',

  // ID (Indonesian)
  'data/id/tools/image-editor.json': 'Editor Gambar Gratis – Potong & Ubah Ukuran Cepat',
  'data/id/tools/email-signature.json': 'Generator Tanda Tangan Email Gratis – HTML Gmail',

  // IT (Italian)
  'data/it/tools/qr-code.json': 'Generatore di codici QR gratuito – PNG e SVG',
};

let fixCount = 0;
for (const [file, newTitle] of Object.entries(FIXES)) {
  const fp = path.join(process.cwd(), file);
  if (!fs.existsSync(fp)) {
    console.log(`  SKIP (not found): ${file}`);
    continue;
  }
  const data = JSON.parse(fs.readFileSync(fp, 'utf-8'));
  const oldTitle = data.metadata.title;
  const oldLen = oldTitle.length;
  data.metadata.title = newTitle;
  // Also update openGraph title if it matches the old one
  if (data.metadata.ogTitle === oldTitle) data.metadata.ogTitle = newTitle;
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  console.log(`  ${newTitle.length} ← ${oldLen} | ${file}`);
  fixCount++;
}

console.log(`\nFixed ${fixCount} titles.`);

// Verify no remaining >60
const fg = require('fast-glob');
const files = fg.sync(['data/*/tools/*.json'], { cwd: process.cwd() });
let remaining = 0;
for (const f of files) {
  const d = JSON.parse(fs.readFileSync(f, 'utf-8'));
  if (d.metadata && d.metadata.title && d.metadata.title.length > 60) {
    remaining++;
    if (remaining <= 5) console.log(`  STILL LONG (${d.metadata.title.length}): ${f} | ${d.metadata.title}`);
  }
}
console.log(`\nRemaining titles >60 chars: ${remaining}`);
