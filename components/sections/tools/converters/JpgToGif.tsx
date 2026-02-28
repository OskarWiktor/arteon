'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function JpgToGif() {
  return <ImageFormatConverter sourceFormat="jpg" targetFormat="gif" acceptMime="image/jpeg" />;
}
