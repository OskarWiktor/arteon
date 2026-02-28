'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function SvgToWebp() {
  return <ImageFormatConverter sourceFormat="svg" targetFormat="webp" acceptMime="image/svg+xml" defaultQuality={80} />;
}
