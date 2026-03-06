import ImageToPdfConverter from '@/components/sections/tools/ImageToPdfConverter/ImageToPdfConverter';

export default function BmpToPdf() {
  return <ImageToPdfConverter sourceFormat="bmp" acceptMime="image/bmp,image/x-ms-bmp,image/x-bmp,.bmp" />;
}
