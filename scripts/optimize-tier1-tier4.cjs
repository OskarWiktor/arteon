const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC = path.join(__dirname, '..', 'public');

const TIER1 = [
  { src: 'assets/projects/nocturna/nocturna-menu-mockup.png', dst: 'assets/projects/nocturna/nocturna-menu-mockup.webp', q: 90, max: 1920 },
  { src: 'assets/projects/simba-group/simba-group-folder-reklamowy-mockup.webp', dst: 'assets/projects/simba-group/simba-group-folder-reklamowy-mockup.webp', q: 90, max: 1920 },
  { src: 'assets/projects/restoquality/mockup-gazetka-restoquality.webp', dst: 'assets/projects/restoquality/mockup-gazetka-restoquality.webp', q: 90, max: 1920 },
  { src: 'assets/projects/arteon-a-msc2.webp', dst: 'assets/projects/arteon-a-msc2.webp', q: 90, max: 1920 },
];

async function processOne(spec) {
  const inputPath = path.join(PUBLIC, spec.src);
  const outputPath = path.join(PUBLIC, spec.dst);
  if (!fs.existsSync(inputPath)) return { skipped: true, src: spec.src };

  const buf = fs.readFileSync(inputPath);
  const inSize = buf.length;
  const meta = await sharp(buf).metadata();

  const needsResize = meta.width > spec.max || meta.height > spec.max;
  let pipe = sharp(buf);
  if (needsResize) pipe = pipe.resize({ width: spec.max, height: spec.max, fit: 'inside', withoutEnlargement: true });
  pipe = pipe.webp({ quality: spec.q, alphaQuality: 100, effort: 6 });
  const outBuf = await pipe.toBuffer();
  const outMeta = await sharp(outBuf).metadata();

  if (outBuf.length >= inSize && spec.src === spec.dst && meta.format === 'webp') {
    return { kept: true, src: spec.src, inSize, outSize: outBuf.length, inDim: `${meta.width}x${meta.height}` };
  }

  if (spec.src !== spec.dst) fs.unlinkSync(inputPath);
  fs.writeFileSync(outputPath, outBuf);

  return {
    src: spec.src,
    dst: spec.dst,
    inSize,
    outSize: outBuf.length,
    inDim: `${meta.width}x${meta.height}`,
    outDim: `${outMeta.width}x${outMeta.height}`,
    inFmt: meta.format,
    outFmt: 'webp',
  };
}

(async () => {
  let totalIn = 0;
  let totalOut = 0;

  console.log('=== TIER 1 — top oversized files (max 1920px, q90) ===');
  for (const spec of TIER1) {
    const r = await processOne(spec);
    if (r.skipped) {
      console.log(`SKIP ${r.src} (missing)`);
      continue;
    }
    if (r.kept) {
      console.log(`KEEP ${r.src} (re-encode would not improve: ${(r.inSize / 1024).toFixed(0)}KB -> ${(r.outSize / 1024).toFixed(0)}KB)`);
      totalIn += r.inSize;
      totalOut += r.inSize;
      continue;
    }
    totalIn += r.inSize;
    totalOut += r.outSize;
    const reduction = (((r.inSize - r.outSize) / r.inSize) * 100).toFixed(0);
    console.log(`${r.src.padEnd(80)} ${r.inDim.padStart(11)} ${(r.inSize / 1024).toFixed(0).padStart(5)}KB ${r.inFmt.padEnd(5)}  ->  ${r.outDim.padStart(11)} ${(r.outSize / 1024).toFixed(0).padStart(5)}KB webp  (-${reduction}%)`);
  }

  console.log('\n=== TIER 4 — blog covers (re-encode q80, no resize) ===');
  const blogDir = path.join(PUBLIC, 'assets', 'blog');
  function* walkBlog(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (e.isDirectory()) yield* walkBlog(path.join(dir, e.name));
      else if (path.extname(e.name).toLowerCase() === '.webp') yield path.join(dir, e.name);
    }
  }

  let blogIn = 0;
  let blogOut = 0;
  let blogSaved = 0;
  let blogKept = 0;

  for (const file of walkBlog(blogDir)) {
    const rel = path.relative(PUBLIC, file).replace(/\\/g, '/');
    const buf = fs.readFileSync(file);
    const inSize = buf.length;
    const outBuf = await sharp(buf).webp({ quality: 80, alphaQuality: 100, effort: 6 }).toBuffer();
    blogIn += inSize;

    if (outBuf.length >= inSize * 0.95) {
      blogOut += inSize;
      blogKept++;
      continue;
    }
    fs.writeFileSync(file, outBuf);
    blogOut += outBuf.length;
    blogSaved++;
    const reduction = (((inSize - outBuf.length) / inSize) * 100).toFixed(0);
    if (inSize > 200 * 1024) {
      console.log(`  ${rel.padEnd(110)} ${(inSize / 1024).toFixed(0).padStart(5)}KB -> ${(outBuf.length / 1024).toFixed(0).padStart(5)}KB (-${reduction}%)`);
    }
  }
  console.log(`Blog: ${blogSaved} re-encoded, ${blogKept} unchanged. Total ${(blogIn / 1024 / 1024).toFixed(2)}MB -> ${(blogOut / 1024 / 1024).toFixed(2)}MB`);

  totalIn += blogIn;
  totalOut += blogOut;
  console.log(`\n=== TOTAL: ${(totalIn / 1024 / 1024).toFixed(2)}MB -> ${(totalOut / 1024 / 1024).toFixed(2)}MB (-${(((totalIn - totalOut) / totalIn) * 100).toFixed(1)}%) ===`);
})();
