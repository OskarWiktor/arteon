'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function GifToPng() {
  return <ImageFormatConverter sourceFormat="gif" targetFormat="png" acceptMime="image/gif" />;
}
