import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function JpgToAvif() {
  return <ImageFormatConverter sourceFormat="jpg" targetFormat="avif" acceptMime="image/jpeg" defaultQuality={80} />;
}
