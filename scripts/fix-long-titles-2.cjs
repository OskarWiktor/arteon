const fs = require('fs');
const path = require('path');

const FIXES = {
  'data/sq/tools/meta-counter.json': 'Kontrollues meta titull dhe përshkrim – Pikselë',
  'data/tr/tools/favicon.json': 'Ücretsiz Favicon Oluşturucu – Görselden favicon.ico',
  'data/id/tools/favicon.json': 'Generator Favicon Gratis – Buat favicon.ico Cepat',
  'data/lt/tools/email-signature.json': 'Nemokamas el. pašto parašo generatorius – HTML',
  'data/sl/tools/meta-counter.json': 'Brezplačno preverjanje meta naslova in opisa',
  'data/sw/tools/color-palette.json': 'Kitengenezaji Paleti za Rangi Bure – Paleti 9',
  'data/sw/tools/email-signature.json': 'Kitengenezaji Saini Barua Pepe Bure – HTML',
  'data/tl/tools/palette-extractor.json': 'Libreng Image Color Extractor – Mula sa Litrato',
  'data/tl/tools/webp-converter.json': 'Libreng JPG/PNG sa WebP Converter – Walang Limit',
  'data/fr/tools/email-signature.json': 'Générateur de signature e-mail gratuit – HTML',
  'data/id/tools/word-counter.json': 'Penghitung Kata & Karakter Gratis – Panjang Teks',
  'data/it/tools/email-signature.json': 'Generatore di firma e-mail gratuito – HTML Gmail',
  'data/ms/tools/palette-extractor.json': 'Pengekstrak Warna dari Imej Percuma – Palet',
  'data/pl/tools/color-palette.json': 'Darmowy generator palet kolorów – 9 schematów',
  'data/sk/tools/color-palette.json': 'Bezplatný generátor farebných paliet – 9 paliet',
  'data/sk/tools/meta-counter.json': 'Bezplatná kontrola meta title a description',
  'data/tr/tools/palette-extractor.json': 'Ücretsiz Görsel Renk Çıkarıcı – Fotoğraf Paleti',
  'data/vi/tools/image-editor.json': 'Chỉnh Sửa Hình Ảnh Miễn Phí – Cắt & Đổi Kích Thước',
  'data/da/tools/image-editor.json': 'Gratis billedredigering – Beskær til sociale medier',
  'data/fr/tools/qr-code.json': 'Générateur de codes QR gratuit – PNG et SVG',
  'data/hr/tools/email-signature.json': 'Besplatni generator potpisa e-pošte – HTML Gmail',
  'data/lt/tools/qr-code.json': 'Nemokamas QR kodų generatorius – PNG ir SVG',
  'data/ms/tools/image-editor.json': 'Editor Imej Percuma – Potong dan Ubah Saiz Cepat',
  'data/no/tools/image-editor.json': 'Gratis bilderedigerer – Beskjær for sosiale medier',
  'data/no/tools/meta-counter.json': 'Gratis meta-tittel- og beskrivelsessjekker',
  'data/sq/tools/email-signature.json': 'Gjenerues nënshkrimi email falas – HTML Gmail',
  'data/sv/tools/word-counter.json': 'Gratis ord- och teckenräknare – Textlängd för SEO',
  'data/tr/tools/email-signature.json': 'Ücretsiz E-posta İmza Oluşturucu – HTML Gmail',
};

let fixCount = 0;
for (const [file, newTitle] of Object.entries(FIXES)) {
  const fp = path.join(process.cwd(), file);
  if (!fs.existsSync(fp)) { console.log('SKIP: ' + file); continue; }
  const data = JSON.parse(fs.readFileSync(fp, 'utf-8'));
  const oldLen = data.metadata.title.length;
  data.metadata.title = newTitle;
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  console.log(newTitle.length + ' <- ' + oldLen + ' | ' + file);
  fixCount++;
}
console.log('\nFixed ' + fixCount + ' titles.');

// Verify
const fg = require('fast-glob');
const files = fg.sync(['data/*/tools/*.json'], { cwd: process.cwd() });
let remaining = 0;
for (const f of files) {
  const d = JSON.parse(fs.readFileSync(f, 'utf-8'));
  if (d.metadata && d.metadata.title && d.metadata.title.length > 60) {
    remaining++;
    console.log('STILL: ' + d.metadata.title.length + ' | ' + f);
  }
}
console.log('Remaining >60: ' + remaining);
