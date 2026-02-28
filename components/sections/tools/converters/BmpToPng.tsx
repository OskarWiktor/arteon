'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function BmpToPng() {
  return <ImageFormatConverter sourceFormat="bmp" targetFormat="png" acceptMime="image/bmp,image/x-ms-bmp,image/x-bmp" />;
}
