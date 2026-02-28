'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function WebpToTiff() {
  return <ImageFormatConverter sourceFormat="webp" targetFormat="tiff" acceptMime="image/webp" />;
}
