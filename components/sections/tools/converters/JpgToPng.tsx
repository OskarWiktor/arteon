'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function JpgToPng() {
  return <ImageFormatConverter sourceFormat="jpg" targetFormat="png" acceptMime="image/jpeg,image/jpg" />;
}
