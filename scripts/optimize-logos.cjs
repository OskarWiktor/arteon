const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const LOGO_DIR = path.join(__dirname, '..', 'public', 'assets', 'projects', 'loga-firm');

const TARGETS = [
  { src: 'logo-autokorfu.webp', dst: 'logo-autokorfu.webp', height: 80 },
  { src: 'StepArd-logo-czarne.png', dst: 'StepArd-logo-czarne.webp', height: 72 },
  { src: 'finish-masters-logo-kolor.png', dst: 'finish-masters-logo-kolor.webp', height: 72 },
  { src: 'izoluk-logo-firmy.png', dst: 'izoluk-logo-firmy.webp', height: 104 },
  { src: 'logo-km2-czarne-pelne.png', dst: 'logo-km2-czarne-pelne.webp', height: 64 },
  { src: 'luxnova-logo.png', dst: 'luxnova-logo.webp', height: 112 },
  { src: 'eliza-wronska-logo.webp', dst: 'eliza-wronska-logo.webp', height: 112 },
  { src: 'logo-napilota.webp', dst: 'logo-napilota.webp', height: 96 },
];

(async () => {
  let totalIn = 0;
  let totalOut = 0;

  for (const t of TARGETS) {
    const inputPath = path.join(LOGO_DIR, t.src);
    const outputPath = path.join(LOGO_DIR, t.dst);
    const tempPath = outputPath + '.tmp';

    if (!fs.existsSync(inputPath)) {
      console.log(`SKIP ${t.src} (missing)`);
      continue;
    }

    const inputBuffer = fs.readFileSync(inputPath);
    const inputSize = inputBuffer.length;
    const meta = await sharp(inputBuffer).metadata();

    const outputBuffer = await sharp(inputBuffer)
      .resize({ height: t.height, fit: 'inside', withoutEnlargement: false })
      .webp({ quality: 90, alphaQuality: 100, effort: 6 })
      .toBuffer();

    const outMeta = await sharp(outputBuffer).metadata();
    const outSize = outputBuffer.length;

    fs.unlinkSync(inputPath);
    fs.writeFileSync(outputPath, outputBuffer);

    totalIn += inputSize;
    totalOut += outSize;

    const inDim = `${meta.width}x${meta.height}`;
    const outDim = `${outMeta.width}x${outMeta.height}`;
    const inKb = (inputSize / 1024).toFixed(1);
    const outKb = (outSize / 1024).toFixed(1);
    const reduction = (((inputSize - outSize) / inputSize) * 100).toFixed(0);
    console.log(`${t.src.padEnd(34)} ${inDim.padStart(11)} ${inKb.padStart(7)}KB  ->  ${t.dst.padEnd(34)} ${outDim.padStart(8)} ${outKb.padStart(6)}KB  (-${reduction}%)`);
  }

  const totalReduction = (((totalIn - totalOut) / totalIn) * 100).toFixed(1);
  console.log(`\nTotal: ${(totalIn / 1024).toFixed(1)}KB -> ${(totalOut / 1024).toFixed(1)}KB (-${totalReduction}%)`);
})();
