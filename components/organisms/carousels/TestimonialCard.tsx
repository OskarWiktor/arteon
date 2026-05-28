import type { Testimonial } from '@/types/testimonial';
import InlineLink from '../../atoms/InlineLink';
import Card from '../Card';
import { StarRating } from '../../atoms/StarRating';
import ArrowIcon from '@/components/atoms/ArrowIcon';

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
    <Card
      as='figure'
      padding='md'
      className='flex h-full w-full flex-col justify-between border-neutral-300 text-center'
    >
      <figcaption>
        <span className='text-dark text-xl font-semibold'>{item.author}</span>
        {item.role && <p className='text-light text-sm'>{item.role}</p>}
        <div className='flex justify-center'>
          <StarRating value={item.rating} />
        </div>
      </figcaption>

      <blockquote>
        <p className='text-dark text-base'>"{displayedQuote}"</p>
      </blockquote>

      {item.link && (
        <InlineLink
          href={item.link}
          target='_blank'
          rel='noopener noreferrer'
          className='mx-auto mt-2 inline-flex underline-offset-4 transition'
        >
          Zobacz opinię u źródła
          <ArrowIcon />
        </InlineLink>
      )}
    </Card>
  );
}
