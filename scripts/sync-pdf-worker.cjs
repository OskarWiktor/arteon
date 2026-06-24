/**
 * Keep public/pdf.worker.min.mjs in sync with the installed pdfjs-dist version.
 * PDF.js refuses to run if the API (pdfjs-dist) and Worker versions differ,
 * so this must run on every install/build, not just once by hand.
 * Called from postinstall/prebuild scripts.
 */
const fs = require('fs');
const path = require('path');

const src = path.join(
  process.cwd(),
  'node_modules/pdfjs-dist/build/pdf.worker.min.mjs',
);
const dest = path.join(process.cwd(), 'public/pdf.worker.min.mjs');

if (!fs.existsSync(src)) {
  console.warn('sync-pdf-worker: pdfjs-dist worker not found, skipping.');
  process.exit(0);
}

const srcContent = fs.readFileSync(src);
const destContent = fs.existsSync(dest) ? fs.readFileSync(dest) : null;

if (!destContent || !srcContent.equals(destContent)) {
  fs.writeFileSync(dest, srcContent);
  console.log('Synced public/pdf.worker.min.mjs with installed pdfjs-dist.');
}
