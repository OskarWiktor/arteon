const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC = path.join(__dirname, '..', 'public');

const TIER5 = [
  { src: 'assets/projects/brewerynka/brewerynka-plakat-z-limitowana-oferta.webp', max: 1200, q: 85 },
  { src: 'assets/projects/luxnova/luxnova-teczka-ofertowa-dla-kancelarii-przod.webp', max: 1200, q: 85 },
  { src: 'assets/projects/luxnova/luxnova-teczka-ofertowa-dla-kancelarii-srodek-lewa-strona.webp', max: 1200, q: 85 },
  { src: 'assets/projects/luxnova/luxnova-teczka-ofertowa-dla-kancelarii-srodek-prawa-strona.webp', max: 1200, q: 85 },
  { src: 'assets/projects/luxnova/luxnova-teczka-ofertowa-03.webp', max: 1200, q: 85 },
  { src: 'assets/projects/izoluk/strona-internetowa-firma-budowlana-ocieplenia-izoluk-projekt-realizacji-stworzony-w-figma.webp', max: 800, q: 80 },
  { src: 'assets/projects/perly-mocy/strona-internetowa-osrodek-psychoterapii-dzieci-i-mlodziezy-perla-mocy-wyglad-strony-glownej-na-zywo.webp', max: 800, q: 80 },
];

(async () => {
  let totalIn = 0;
  let totalOut = 0;
  for (const t of TIER5) {
    const p = path.join(PUBLIC, t.src);
    if (!fs.existsSync(p)) {
      console.log('SKIP', t.src);
      continue;
    }
    const buf = fs.readFileSync(p);
    const meta = await sharp(buf).metadata();
    const inSize = buf.length;

    const needsResize = meta.width > t.max;
    let pipe = sharp(buf);
    if (needsResize) pipe = pipe.resize({ width: t.max, fit: 'inside', withoutEnlargement: true });
    const outBuf = await pipe.webp({ quality: t.q, alphaQuality: 100, effort: 6 }).toBuffer();
    const outMeta = await sharp(outBuf).metadata();

    if (outBuf.length >= inSize * 0.95) {
      console.log(`KEEP ${t.src}  (${(inSize / 1024).toFixed(0)}KB ${meta.width}x${meta.height}, re-encode would not improve)`);
      totalIn += inSize;
      totalOut += inSize;
      continue;
    }

    fs.writeFileSync(p, outBuf);
    totalIn += inSize;
    totalOut += outBuf.length;
    const reduction = (((inSize - outBuf.length) / inSize) * 100).toFixed(0);
    console.log(`${t.src.padEnd(110)} ${(meta.width + 'x' + meta.height).padStart(11)} ${(inSize / 1024).toFixed(0).padStart(4)}KB -> ${(outMeta.width + 'x' + outMeta.height).padStart(11)} ${(outBuf.length / 1024).toFixed(0).padStart(4)}KB (-${reduction}%)`);
  }
  console.log(`\nTOTAL: ${(totalIn / 1024).toFixed(0)}KB -> ${(totalOut / 1024).toFixed(0)}KB (-${(((totalIn - totalOut) / totalIn) * 100).toFixed(1)}%)`);
})();
