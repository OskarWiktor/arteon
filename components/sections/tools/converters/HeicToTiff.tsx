import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function HeicToTiff() {
  return <ImageFormatConverter sourceFormat="heic" targetFormat="tiff" acceptMime="image/heic,image/heif,.heic,.heif" />;
}
