'use client';

import PdfToImageConverter from '@/components/sections/tools/PdfToImageConverter/PdfToImageConverter';

export default function PdfToJpg() {
  return <PdfToImageConverter targetFormat="jpg" />;
}
