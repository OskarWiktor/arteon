import ArrowIcon from '@/components/atoms/ArrowIcon';
import type { Testimonial } from '@/types/testimonial';
import InlineLink from '../../atoms/InlineLink';
import { StarRating } from '../../atoms/StarRating';
import Card from '../Card';

type Props = { item: Testimonial };

const MAX_WORDS = 82;

function getDisplayedQuote(quote: string, maxWords: number) {
  if (!quote) return '';

  const words = quote.trim().split(/\s+/);
  if (words.length <= maxWords) {
    return quote;
  }

  return words.slice(0, maxWords).join(' ') + '...';
}

/**
 * Render a testimonial card that displays the author, optional role, star rating, a quote truncated to 32 words, and an optional external link.
 *
 * @param item - Testimonial data: `author`, optional `role`, `rating`, `quote`, and optional `link`
 * @returns A Card `figure` containing the testimonial's caption (author, role, rating), the truncated quote in a `blockquote`, and an optional `InlineLink` to the original source
 */
export default function TestimonialCard({ item }: Props) {
  const displayedQuote = getDisplayedQuote(item.quote, MAX_WORDS);

  return (
    <Card
      as='figure'
      padding='sm'
      className='flex h-full w-full flex-col justify-between border-neutral-300'
    >
      <figcaption>
        <p className='text-center text-xl! font-semibold! text-dark'>
          {item.author}
        </p>
        {item.role && (
          <p className='text-center text-sm text-light'>{item.role}</p>
        )}
        <div className='flex justify-center'>
          <StarRating value={item.rating} />
        </div>
      </figcaption>

      <blockquote>
        <p className='text-sm! text-dark'>"{displayedQuote}"</p>
      </blockquote>

      {item.link && (
        <InlineLink
          href={item.link}
          target='_blank'
          rel='noopener noreferrer'
          className='mx-auto mt-1 inline-flex text-center underline-offset-4 transition'
        >
          Zobacz opinię u źródła
          <ArrowIcon />
        </InlineLink>
      )}
    </Card>
  );
}
