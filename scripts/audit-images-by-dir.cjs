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
    } catch (e) {}
  }

  const groupBy = (fn) => {
    const g = {};
    for (const x of all) {
      const k = fn(x);
      g[k] = g[k] || { count: 0, bytes: 0, files: [] };
      g[k].count++;
      g[k].bytes += x.size;
      g[k].files.push(x);
    }
    return g;
  };

  console.log('=== BY TOP-LEVEL DIR ===');
  const byTop = groupBy((x) => x.path.split('/').slice(0, 2).join('/'));
  for (const [k, v] of Object.entries(byTop).sort((a, b) => b[1].bytes - a[1].bytes)) {
    console.log(`${(v.bytes / 1024 / 1024).toFixed(2).padStart(6)} MB  ${String(v.count).padStart(4)} files  ${k}`);
  }

  console.log('\n=== BY assets/projects/* SUBDIR ===');
  const byProj = groupBy((x) => {
    const m = x.path.match(/^assets\/projects\/([^/]+)/);
    return m ? `assets/projects/${m[1]}` : null;
  });
  for (const [k, v] of Object.entries(byProj).sort((a, b) => b[1].bytes - a[1].bytes)) {
    if (!k || k === 'null') continue;
    console.log(`${(v.bytes / 1024 / 1024).toFixed(2).padStart(6)} MB  ${String(v.count).padStart(4)} files  ${k}`);
  }

  console.log('\n=== BY assets/blog/* SUBDIR (top 15) ===');
  const byBlog = groupBy((x) => {
    const m = x.path.match(/^assets\/blog\/([^/]+)/);
    return m ? `assets/blog/${m[1]}` : null;
  });
  const blogEntries = Object.entries(byBlog).filter(([k]) => k && k !== 'null').sort((a, b) => b[1].bytes - a[1].bytes);
  for (const [k, v] of blogEntries.slice(0, 15)) {
    console.log(`${(v.bytes / 1024).toFixed(0).padStart(6)} KB  ${String(v.count).padStart(3)} files  ${k}`);
  }
  console.log(`(${blogEntries.length} blog dirs total, sum ${(blogEntries.reduce((s, [, v]) => s + v.bytes, 0) / 1024 / 1024).toFixed(2)} MB)`);

  console.log('\n=== BY assets/tools/* SUBDIR ===');
  const byTools = groupBy((x) => {
    const m = x.path.match(/^assets\/tools\/([^/]+)/);
    return m ? `assets/tools/${m[1]}` : null;
  });
  for (const [k, v] of Object.entries(byTools).filter(([k]) => k && k !== 'null').sort((a, b) => b[1].bytes - a[1].bytes)) {
    console.log(`${(v.bytes / 1024).toFixed(0).padStart(6)} KB  ${String(v.count).padStart(3)} files  ${k}`);
  }
})();
