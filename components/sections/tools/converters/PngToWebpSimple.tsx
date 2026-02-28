'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function PngToWebpSimple() {
  return <ImageFormatConverter sourceFormat="png" targetFormat="webp" acceptMime="image/png" defaultQuality={80} />;
}
