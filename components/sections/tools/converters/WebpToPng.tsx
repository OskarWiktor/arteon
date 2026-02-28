'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function WebpToPng() {
  return <ImageFormatConverter sourceFormat="webp" targetFormat="png" acceptMime="image/webp" />;
}
