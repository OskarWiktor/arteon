import { focusRingClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { RiStarFill, RiStarLine } from 'react-icons/ri';

type SectionStarRatingSize = 'small' | 'medium' | 'large';

const SectionStarRatingSizeClasses: Record<SectionStarRatingSize, string> = {
  small: 'h-5 w-5',
  medium: 'h-7 w-7',
  large: 'h-9 w-9',
};

interface SectionStarRatingProps {
  value: number;
  onChange: (value: number) => void;
  max?: number;
  size?: SectionStarRatingSize;
  label?: string;
}

export default function SectionStarRating({
  value,
  onChange,
  max = 5,
  size = 'medium',
  label,
}: SectionStarRatingProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const displayValue = hoverValue !== null ? hoverValue : value;

  return (
    <div className='inline-flex flex-col items-center gap-2'>
      {label && <span className='text-sm font-medium text-primary'>{label}</span>}

      <div
        className='flex gap-1'
        role='group'
        aria-label={label || 'Ocena gwiazdkowa'}
        onMouseLeave={() => setHoverValue(null)}
      >
        {Array.from({ length: max }, (_, index) => {
          const starValue = index + 1;
          const isFilled = starValue <= displayValue;

          return (
            <button
              key={index}
              type='button'
              onClick={() => onChange(starValue)}
              onMouseEnter={() => setHoverValue(starValue)}
              className={cn('transition-transform hover:scale-110', focusRingClasses)}
              aria-label={`${starValue} z ${max} gwiazdek`}
            >
              {isFilled ? (
                <RiStarFill className={SectionStarRatingSizeClasses[size] + ' text-accent'} />
              ) : (
                <RiStarLine
                  className={SectionStarRatingSizeClasses[size] + ' text-primary-light'}
                />
              )}
            </button>
          );
        })}
      </div>

      {value > 0 && (
        <span className='text-sm text-light'>
          {value} z {max}
        </span>
      )}
    </div>
  );
}
