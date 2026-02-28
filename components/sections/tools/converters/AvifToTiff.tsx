'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function AvifToTiff() {
  return <ImageFormatConverter sourceFormat="avif" targetFormat="tiff" acceptMime="image/avif" />;
}
