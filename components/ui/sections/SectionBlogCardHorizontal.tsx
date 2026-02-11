import Image from 'next/image';
import Link from 'next/link';

interface SectionBlogCardHorizontalProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  href: string;
  category?: string;
  readingTime?: string;
}

export default function SectionBlogCardHorizontal({ imageSrc, imageAlt, title, description, href, category, readingTime }: SectionBlogCardHorizontalProps) {
  return (
    <Link href={href} className="group flex flex-col gap-4 overflow-hidden rounded-2xl border border-black/10 bg-white p-4 transition hover:shadow-lg sm:flex-row sm:gap-6">
      <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-xl sm:w-48">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover transition group-hover:scale-105" sizes="(min-width:640px) 192px, 100vw" />
      </div>

      <div className="flex flex-1 flex-col justify-center">
        {category && <span className="text-xs font-medium tracking-wider text-primary-mid uppercase">{category}</span>}

        <h3 className="mt-1 font-semibold transition group-hover:text-primary-mid">{title}</h3>

        <p className="text-light mt-2 line-clamp-2 text-sm">{description}</p>

        {readingTime && (
          <div className="text-light mt-4 flex items-center gap-4 text-xs">
            <span>{readingTime}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
