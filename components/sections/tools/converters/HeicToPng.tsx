import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function HeicToPng() {
  return <ImageFormatConverter sourceFormat="heic" targetFormat="png" acceptMime="image/heic,image/heif,.heic,.heif" />;
}
