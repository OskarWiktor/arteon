import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function SvgToTiff() {
  return <ImageFormatConverter sourceFormat="svg" targetFormat="tiff" acceptMime="image/svg+xml" />;
}
