'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function WebpToJpg() {
  return <ImageFormatConverter sourceFormat="webp" targetFormat="jpg" acceptMime="image/webp" defaultQuality={85} />;
}
