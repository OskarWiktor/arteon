'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function BmpToAvif() {
  return <ImageFormatConverter sourceFormat="bmp" targetFormat="avif" acceptMime="image/bmp,image/x-ms-bmp,image/x-bmp" defaultQuality={80} />;
}
