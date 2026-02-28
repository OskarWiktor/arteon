'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function GifToJpg() {
  return <ImageFormatConverter sourceFormat="gif" targetFormat="jpg" acceptMime="image/gif" defaultQuality={85} />;
}
