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
    <figure className="surface-card-lift flex h-full w-full flex-col justify-between border-gray-300 p-5 md:px-6 md:py-8">
      <blockquote>
        <StarRating value={item.rating} />
        <p className="text-dark mt-2 text-base">"{displayedQuote}"</p>
      </blockquote>

      <figcaption className="mt-5 flex items-center gap-4">
        {item.avatarUrl ? (
          <Image src={item.avatarUrl} alt="" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
        ) : (
          <div aria-hidden className="h-12 w-12 rounded-full bg-gray-200" />
        )}
        <div className="min-w-0">
          <span className="text-dark truncate text-base font-semibold">{item.author}</span>
          {item.role && (
            <>
              <br />
              <span className="text-light truncate text-sm">{item.role}</span>
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
