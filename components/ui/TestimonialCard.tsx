'use client';

import Link from 'next/link';
import type { Testimonial } from '@/types/testimonial';
import { StarRating } from './StarRating';

type Props = { item: Testimonial };

const MAX_WORDS = 32;

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
    <figure className="surface-card-lift flex h-full w-full flex-col justify-between border-neutral-300 p-5 text-center md:px-6 md:py-8">
      <figcaption>
        <span className="text-dark text-xl font-semibold">{item.author}</span>
        {item.role && <p className="text-light text-sm">{item.role}</p>}
        <div className="flex justify-center">
          <StarRating value={item.rating} />
        </div>
      </figcaption>

      <blockquote className="mt-4">
        <p className="text-dark text-base">"{displayedQuote}"</p>
      </blockquote>

      {item.link && (
        <p className="mt-5">
          <Link href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm underline underline-offset-4 transition hover:opacity-80">
            Zobacz opinię u źródła
          </Link>
        </p>
      )}
    </figure>
  );
}
