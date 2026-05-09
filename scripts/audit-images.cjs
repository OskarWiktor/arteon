const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'public');
const EXT = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.avif']);
const SKIP_DIRS = new Set(['fonts', 'icons']);

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      yield* walk(path.join(dir, entry.name));
    } else if (EXT.has(path.extname(entry.name).toLowerCase())) {
      yield path.join(dir, entry.name);
    }
  }
}

(async () => {
  const all = [];
  for (const file of walk(ROOT)) {
    try {
      const stat = fs.statSync(file);
      const buf = fs.readFileSync(file);
      const meta = await sharp(buf).metadata();
      all.push({
        path: path.relative(ROOT, file).replace(/\\/g, '/'),
        size: stat.size,
        format: meta.format,
        w: meta.width || 0,
        h: meta.height || 0,
      });
    } catch (e) {
      console.error('FAIL', file, e.message);
    }
  }

  const fmt = (n) => (n / 1024).toFixed(1) + 'KB';
  const totalCount = all.length;
  const totalBytes = all.reduce((s, x) => s + x.size, 0);

  console.log('=== TOTAL ===');
  console.log(`Files: ${totalCount}, Size: ${(totalBytes / 1024 / 1024).toFixed(2)} MB`);

  console.log('\n=== BY FORMAT ===');
  const byFmt = {};
  for (const x of all) {
    byFmt[x.format] = byFmt[x.format] || { count: 0, bytes: 0 };
    byFmt[x.format].count++;
    byFmt[x.format].bytes += x.size;
  }
  for (const [k, v] of Object.entries(byFmt).sort((a, b) => b[1].bytes - a[1].bytes)) {
    console.log(`${k.padEnd(8)} ${String(v.count).padStart(4)} files  ${((v.bytes / 1024 / 1024).toFixed(2) + ' MB').padStart(10)}`);
  }

  console.log('\n=== NON-WEBP CANDIDATES (PNG/JPG) ===');
  const nonWebp = all.filter((x) => x.format === 'png' || x.format === 'jpeg').sort((a, b) => b.size - a.size);
  console.log(`Count: ${nonWebp.length}, Total: ${(nonWebp.reduce((s, x) => s + x.size, 0) / 1024 / 1024).toFixed(2)} MB`);
  console.log('Top 20 largest:');
  for (const x of nonWebp.slice(0, 20)) {
    console.log(`  ${fmt(x.size).padStart(9)}  ${x.format.padEnd(5)} ${(x.w + 'x' + x.h).padStart(11)}  ${x.path}`);
  }

  console.log('\n=== OVERSIZED WEBP (>100KB) ===');
  const bigWebp = all.filter((x) => x.format === 'webp' && x.size > 100 * 1024).sort((a, b) => b.size - a.size);
  console.log(`Count: ${bigWebp.length}, Total: ${(bigWebp.reduce((s, x) => s + x.size, 0) / 1024 / 1024).toFixed(2)} MB`);
  console.log('Top 20 largest:');
  for (const x of bigWebp.slice(0, 20)) {
    console.log(`  ${fmt(x.size).padStart(9)}  ${(x.w + 'x' + x.h).padStart(11)}  ${x.path}`);
  }

  console.log('\n=== HIGH RESOLUTION (>2000px on any axis) ===');
  const hiRes = all.filter((x) => x.w > 2000 || x.h > 2000).sort((a, b) => b.size - a.size);
  console.log(`Count: ${hiRes.length}, Total: ${(hiRes.reduce((s, x) => s + x.size, 0) / 1024 / 1024).toFixed(2)} MB`);
  for (const x of hiRes.slice(0, 30)) {
    console.log(`  ${fmt(x.size).padStart(9)}  ${x.format.padEnd(5)} ${(x.w + 'x' + x.h).padStart(11)}  ${x.path}`);
  }
})();
