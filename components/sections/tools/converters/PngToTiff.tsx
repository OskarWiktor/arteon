'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function PngToTiff() {
  return <ImageFormatConverter sourceFormat="png" targetFormat="tiff" acceptMime="image/png" />;
}
