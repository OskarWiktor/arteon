import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function PngToGif() {
  return <ImageFormatConverter sourceFormat="png" targetFormat="gif" acceptMime="image/png" />;
}
