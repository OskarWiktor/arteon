import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function BmpToTiff() {
  return <ImageFormatConverter sourceFormat="bmp" targetFormat="tiff" acceptMime="image/bmp,image/x-ms-bmp,image/x-bmp" />;
}
