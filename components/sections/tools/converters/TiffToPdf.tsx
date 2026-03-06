import ImageToPdfConverter from '@/components/sections/tools/ImageToPdfConverter/ImageToPdfConverter';

export default function TiffToPdf() {
  return <ImageToPdfConverter sourceFormat="tiff" acceptMime="image/tiff,.tiff,.tif" />;
}
