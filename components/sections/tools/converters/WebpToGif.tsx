'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function WebpToGif() {
  return <ImageFormatConverter sourceFormat="webp" targetFormat="gif" acceptMime="image/webp" />;
}
