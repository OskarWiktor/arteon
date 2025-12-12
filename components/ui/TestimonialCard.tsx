'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Testimonial } from '@/types/testimonial';
import { StarRating } from './StarRating';

const ui = {
  pl: {
    viewSource: 'Zobacz opinię u źródła',
  },
} as const;

type Props = { item: Testimonial };

const MAX_WORDS = 30;

function getDisplayedQuote(quote: string, maxWords: number) {
  if (!quote) return '';

  const words = quote.trim().split(/\s+/);
  if (words.length <= maxWords) {
    return quote;
  }

  return words.slice(0, maxWords).join(' ') + '...';
}

export default function TestimonialCard({ item }: Props) {
  const displayedQuote = getDisplayedQuote(item.quote, MAX_WORDS);

  return (
    <figure className="flex h-full w-full flex-col justify-between rounded-2xl border-gray-300 bg-white p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg md:px-6 md:py-8">
      <blockquote>
        <StarRating value={item.rating} />
        <p className="mt-2 text-[#0A0A0A]">“{displayedQuote}”</p>
      </blockquote>

      <figcaption className="mt-5 flex items-center gap-4">
        {item.avatarUrl ? (
          <Image src={item.avatarUrl} alt="" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
        ) : (
          <div aria-hidden className="h-12 w-12 rounded-full bg-gray-200" />
        )}
        <div className="min-w-0">
          <span className="truncate text-base font-semibold text-[#0A0A0A]">{item.author}</span>
          {item.role && (
            <>
              <br />
              <span className="truncate text-sm text-[#5e5e5e]">{item.role}</span>
            </>
          )}
          {item.link && (
            <p>
              <Link href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm underline underline-offset-4 transition hover:opacity-80">
                {ui.pl.viewSource}
              </Link>
            </p>
          )}
        </div>
      </figcaption>
    </figure>
  );
}
