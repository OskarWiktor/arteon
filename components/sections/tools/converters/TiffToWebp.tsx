'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function TiffToWebp() {
  return <ImageFormatConverter sourceFormat="tiff" targetFormat="webp" acceptMime="image/tiff,.tiff,.tif" defaultQuality={80} />;
}
