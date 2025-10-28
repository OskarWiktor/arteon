'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Testimonial } from '@/types/testimonial';
import { StarRating } from './StarRating';

type Props = { item: Testimonial };

export default function TestimonialCard({ item }: Props) {
  return (
    <figure className="flex h-full w-full flex-col justify-between rounded-2xl border-gray-300 bg-white p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg md:px-6 md:py-8">
      <blockquote>
        <StarRating value={item.rating} />
        <p className="mt-2 text-[#0A0A0A]">“{item.quote}”</p>
      </blockquote>

      <figcaption className="mt-5 flex items-center gap-4">
        {item.avatarUrl ? (
          <Image src={item.avatarUrl} alt="" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
        ) : (
          <div aria-hidden className="h-12 w-12 rounded-full bg-gray-200" />
        )}
        <div className="min-w-0">
          <h5 className="truncate text-base font-semibold text-[#0A0A0A]">{item.author}</h5>
          {item.role && <p className="truncate text-sm text-[#5e5e5e]">{item.role}</p>}
          {item.link && (
            <p className="mt-2 text-sm">
              <Link href={item.link} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 transition hover:opacity-80">
                Zobacz opinię u źródła
              </Link>
            </p>
          )}
        </div>
      </figcaption>
    </figure>
  );
}
