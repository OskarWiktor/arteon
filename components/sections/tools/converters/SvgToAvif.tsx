'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function SvgToAvif() {
  return <ImageFormatConverter sourceFormat="svg" targetFormat="avif" acceptMime="image/svg+xml" defaultQuality={80} />;
}
