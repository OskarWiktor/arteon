import ArrowIcon from '@/components/atoms/ArrowIcon';
import type { Testimonial } from '@/types/testimonial';
import InlineLink from '../../atoms/InlineLink';
import { StarRating } from '../../atoms/StarRating';
import Card from '../Card';

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
        <span className='text-xl font-semibold text-dark'>{item.author}</span>
        {item.role && <p className='text-sm text-light'>{item.role}</p>}
        <div className='flex justify-center'>
          <StarRating value={item.rating} />
        </div>
      </figcaption>

      <blockquote>
        <p className='text-base text-dark'>"{displayedQuote}"</p>
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
