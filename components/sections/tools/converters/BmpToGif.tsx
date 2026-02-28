'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function BmpToGif() {
  return <ImageFormatConverter sourceFormat="bmp" targetFormat="gif" acceptMime="image/bmp,image/x-ms-bmp,image/x-bmp" />;
}
