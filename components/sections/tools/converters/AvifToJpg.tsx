import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function AvifToJpg() {
  return <ImageFormatConverter sourceFormat="avif" targetFormat="jpg" acceptMime="image/avif" defaultQuality={85} />;
}
