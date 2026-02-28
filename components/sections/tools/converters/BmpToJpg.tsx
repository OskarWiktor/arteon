'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function BmpToJpg() {
  return <ImageFormatConverter sourceFormat="bmp" targetFormat="jpg" acceptMime="image/bmp,image/x-ms-bmp,image/x-bmp" defaultQuality={85} />;
}
