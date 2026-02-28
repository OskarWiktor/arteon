'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function WebpToAvif() {
  return <ImageFormatConverter sourceFormat="webp" targetFormat="avif" acceptMime="image/webp" defaultQuality={80} />;
}
