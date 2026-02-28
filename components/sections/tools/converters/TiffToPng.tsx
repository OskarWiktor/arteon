'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function TiffToPng() {
  return <ImageFormatConverter sourceFormat="tiff" targetFormat="png" acceptMime="image/tiff,.tiff,.tif" />;
}
