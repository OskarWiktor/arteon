'use client';

import ImageToPdfConverter from '@/components/sections/tools/ImageToPdfConverter/ImageToPdfConverter';

export default function SvgToPdf() {
  return <ImageToPdfConverter sourceFormat="svg" acceptMime="image/svg+xml,.svg" />;
}
