import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/organisms/Card';

interface CarouselCardShellProps {
  children: React.ReactNode;
  href: string;
  image: string;
  title: string;
}

export default function CarouselCardShell({
  children,
  href,
  image,
  title,
}: CarouselCardShellProps) {
  return (
    <Card as='article' className='group relative flex h-full flex-col' padding='md'>
      <Link href={href} prefetch={false} className='block'>
        <div className='relative aspect-[2/1] w-full overflow-hidden'>
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover'
            sizes='(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw'
          />
        </div>
        <div className='flex grow flex-col px-6 py-4 md:px-7 md:py-5'>
          <h3 className='h5 line-clamp-2'>{title}</h3>
          {children}
        </div>
      </Link>
    </Card>
  );
}
