'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function JpgToTiff() {
  return <ImageFormatConverter sourceFormat="jpg" targetFormat="tiff" acceptMime="image/jpeg" />;
}
