import ImageFormatConverter from '@/components/sections/tools/ImageFormatConverter';

export default function TiffToJpg() {
  return <ImageFormatConverter sourceFormat="tiff" targetFormat="jpg" acceptMime="image/tiff,.tiff,.tif" defaultQuality={85} />;
}
