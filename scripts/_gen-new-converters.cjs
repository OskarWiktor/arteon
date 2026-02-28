const fs = require('fs');
const path = require('path');

// ── 20 new converters ──────────────────────────────────────────────
const converters = [
  // → AVIF (8)
  { name: 'JpgToAvif', src: 'jpg', tgt: 'avif', accept: 'image/jpeg', quality: 80 },
  { name: 'PngToAvif', src: 'png', tgt: 'avif', accept: 'image/png', quality: 80 },
  { name: 'WebpToAvif', src: 'webp', tgt: 'avif', accept: 'image/webp', quality: 80 },
  { name: 'SvgToAvif', src: 'svg', tgt: 'avif', accept: 'image/svg+xml', quality: 80 },
  { name: 'BmpToAvif', src: 'bmp', tgt: 'avif', accept: 'image/bmp,image/x-ms-bmp,image/x-bmp', quality: 80 },
  { name: 'GifToAvif', src: 'gif', tgt: 'avif', accept: 'image/gif', quality: 80 },
  { name: 'HeicToAvif', src: 'heic', tgt: 'avif', accept: 'image/heic,image/heif,.heic,.heif', quality: 80 },
  { name: 'TiffToAvif', src: 'tiff', tgt: 'avif', accept: 'image/tiff,.tiff,.tif', quality: 80 },
  // → GIF (5)
  { name: 'JpgToGif', src: 'jpg', tgt: 'gif', accept: 'image/jpeg', quality: null },
  { name: 'PngToGif', src: 'png', tgt: 'gif', accept: 'image/png', quality: null },
  { name: 'WebpToGif', src: 'webp', tgt: 'gif', accept: 'image/webp', quality: null },
  { name: 'SvgToGif', src: 'svg', tgt: 'gif', accept: 'image/svg+xml', quality: null },
  { name: 'BmpToGif', src: 'bmp', tgt: 'gif', accept: 'image/bmp,image/x-ms-bmp,image/x-bmp', quality: null },
  // → TIFF (7)
  { name: 'JpgToTiff', src: 'jpg', tgt: 'tiff', accept: 'image/jpeg', quality: null },
  { name: 'PngToTiff', src: 'png', tgt: 'tiff', accept: 'image/png', quality: null },
  { name: 'WebpToTiff', src: 'webp', tgt: 'tiff', accept: 'image/webp', quality: null },
  { name: 'SvgToTiff', src: 'svg', tgt: 'tiff', accept: 'image/svg+xml', quality: null },
  { name: 'BmpToTiff', src: 'bmp', tgt: 'tiff', accept: 'image/bmp,image/x-ms-bmp,image/x-bmp', quality: null },
  { name: 'AvifToTiff', src: 'avif', tgt: 'tiff', accept: 'image/avif', quality: null },
  { name: 'HeicToTiff', src: 'heic', tgt: 'tiff', accept: 'image/heic,image/heif,.heic,.heif', quality: null },
];

const dir = path.join(__dirname, '..', 'components', 'sections', 'tools', 'converters');

for (const c of converters) {
  const qualityProp = c.quality !== null ? ` defaultQuality={${c.quality}}` : '';
  const content = `'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function ${c.name}() {
  return <ImageFormatConverter sourceFormat="${c.src}" targetFormat="${c.tgt}" acceptMime="${c.accept}"${qualityProp} />;
}
`;
  const filePath = path.join(dir, `${c.name}.tsx`);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Created:', c.name + '.tsx');
}

console.log(`\nCreated ${converters.length} converter components.`);
