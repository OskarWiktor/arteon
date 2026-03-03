'use client';

import ImageToPdfConverter from '@/components/sections/tools/ImageToPdfConverter/ImageToPdfConverter';

export default function JpgToPdf() {
  return <ImageToPdfConverter sourceFormat="jpg" acceptMime="image/jpeg,.jpg,.jpeg" />;
}
