import ImageToPdfConverter from '@/components/sections/tools/ImageToPdfConverter/ImageToPdfConverter';

export default function PngToPdf() {
  return <ImageToPdfConverter sourceFormat="png" acceptMime="image/png,.png" />;
}
