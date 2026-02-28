'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function TiffToAvif() {
  return <ImageFormatConverter sourceFormat="tiff" targetFormat="avif" acceptMime="image/tiff,.tiff,.tif" defaultQuality={80} />;
}
