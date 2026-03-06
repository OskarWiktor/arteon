import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function AvifToPng() {
  return <ImageFormatConverter sourceFormat="avif" targetFormat="png" acceptMime="image/avif" />;
}
