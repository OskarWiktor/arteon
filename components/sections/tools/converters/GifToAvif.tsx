import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function GifToAvif() {
  return <ImageFormatConverter sourceFormat="gif" targetFormat="avif" acceptMime="image/gif" defaultQuality={80} />;
}
