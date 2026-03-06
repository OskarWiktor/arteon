import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function BmpToWebp() {
  return <ImageFormatConverter sourceFormat="bmp" targetFormat="webp" acceptMime="image/bmp,image/x-ms-bmp,image/x-bmp" defaultQuality={80} />;
}
