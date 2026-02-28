'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function SvgToPng() {
  return <ImageFormatConverter sourceFormat="svg" targetFormat="png" acceptMime="image/svg+xml" />;
}
