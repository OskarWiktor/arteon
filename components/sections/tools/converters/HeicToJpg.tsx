'use client';

import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function HeicToJpg() {
  return <ImageFormatConverter sourceFormat="heic" targetFormat="jpg" acceptMime="image/heic,image/heif,.heic,.heif" defaultQuality={85} />;
}
