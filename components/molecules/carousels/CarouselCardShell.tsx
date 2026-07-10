import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/organisms/Card';

interface CarouselCardShellProps {
  children: React.ReactNode;
  href: string;
  image: string;
  title: string;
  multipleLinks?: boolean;
  /**
   * Tailwind aspect-ratio class for the card image container. Defaults to
   * `aspect-2/1` (tool/article cards). Project cards pass `aspect-3/2` so the
   * full 3:2 mockup — including the brand logo — is visible without cropping.
   */
  imageAspectClassName?: string;
}

export default function CarouselCardShell({
  children,
  href,
  image,
  title,
  multipleLinks = true,
  imageAspectClassName = 'aspect-2/1',
}: CarouselCardShellProps) {
  if (multipleLinks) {
    <Card
      as='article'
      className='group relative flex h-full flex-col gap-0'
      padding='md'
    >
      <Link href={href} prefetch={false} className='block'>
        <div
          className={`relative ${imageAspectClassName} w-full overflow-hidden`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover'
            sizes='(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw'
          />
        </div>
        <div className='flex grow flex-col px-2 pt-4 md:px-4 md:pt-6'>
          <h3 className='h5 line-clamp-2'>{title}</h3>
          {children}
        </div>
      </Link>
    </Card>;
  }

  return (
    <Card
      as='article'
      className='group relative flex h-full flex-col gap-0 bg-[#380911]'
      padding='md'
    >
      <div
        className={`relative ${imageAspectClassName} w-full overflow-hidden`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className='object-cover'
          sizes='(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw'
        />
      </div>
      <div className='flex grow flex-col px-2 pt-4 md:px-4 md:pt-6'>
        <h3 className='h5 line-clamp-2 text-[#F4ECE0]!'>{title}</h3>
        {children}
      </div>
    </Card>
  );
}
