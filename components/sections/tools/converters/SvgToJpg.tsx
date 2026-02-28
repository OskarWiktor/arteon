'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function SvgToJpg() {
  return <ImageFormatConverter sourceFormat="svg" targetFormat="jpg" acceptMime="image/svg+xml" defaultQuality={85} />;
}
