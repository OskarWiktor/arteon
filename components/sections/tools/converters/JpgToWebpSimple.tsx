import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function JpgToWebpSimple() {
  return <ImageFormatConverter sourceFormat="jpg" targetFormat="webp" acceptMime="image/jpeg,image/jpg" defaultQuality={80} />;
}
