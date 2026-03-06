import ImageToPdfConverter from '@/components/sections/tools/ImageToPdfConverter/ImageToPdfConverter';

export default function WebpToPdf() {
  return <ImageToPdfConverter sourceFormat="webp" acceptMime="image/webp,.webp" />;
}
