'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function HeicToWebp() {
  return <ImageFormatConverter sourceFormat="heic" targetFormat="webp" acceptMime="image/heic,image/heif,.heic,.heif" defaultQuality={80} />;
}
