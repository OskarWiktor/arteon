import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function PngToAvif() {
  return <ImageFormatConverter sourceFormat="png" targetFormat="avif" acceptMime="image/png" defaultQuality={80} />;
}
