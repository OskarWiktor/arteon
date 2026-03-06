import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function HeicToAvif() {
  return <ImageFormatConverter sourceFormat="heic" targetFormat="avif" acceptMime="image/heic,image/heif,.heic,.heif" defaultQuality={80} />;
}
