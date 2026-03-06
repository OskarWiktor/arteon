import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function SvgToGif() {
  return <ImageFormatConverter sourceFormat="svg" targetFormat="gif" acceptMime="image/svg+xml" />;
}
