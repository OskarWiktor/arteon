import ImageToPdfConverter from '@/components/sections/tools/ImageToPdfConverter/ImageToPdfConverter';

export default function HeicToPdf() {
  return <ImageToPdfConverter sourceFormat="heic" acceptMime="image/heic,image/heif,.heic,.heif" />;
}
