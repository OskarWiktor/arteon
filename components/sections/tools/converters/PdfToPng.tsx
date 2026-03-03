'use client';

import PdfToImageConverter from '@/components/sections/tools/PdfToImageConverter/PdfToImageConverter';

export default function PdfToPng() {
  return <PdfToImageConverter targetFormat="png" />;
}
