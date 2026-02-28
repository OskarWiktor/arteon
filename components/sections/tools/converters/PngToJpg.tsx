'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function PngToJpg() {
  return <ImageFormatConverter sourceFormat="png" targetFormat="jpg" acceptMime="image/png" defaultQuality={85} />;
}
