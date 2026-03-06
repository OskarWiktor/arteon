import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function GifToWebp() {
  return <ImageFormatConverter sourceFormat="gif" targetFormat="webp" acceptMime="image/gif" defaultQuality={80} />;
}
