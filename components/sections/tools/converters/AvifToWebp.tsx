import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function AvifToWebp() {
  return <ImageFormatConverter sourceFormat="avif" targetFormat="webp" acceptMime="image/avif" defaultQuality={80} />;
}
