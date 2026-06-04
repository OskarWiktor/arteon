import { useState } from 'react';
import { RiStarFill, RiStarLine } from 'react-icons/ri';
import { focusRingClasses } from '@/lib/uiClasses';
import { cn } from '@/lib/utils';

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

/**
 * Renders an interactive star rating control that lets users view and set a rating.
 *
 * Renders up to `max` stars, highlights stars up to the current `value` (or the hovered star while hovering),
 * and calls `onChange` with the selected rating when a star is clicked.
 *
 * @param value - Current selected rating (0 to `max`)
 * @param onChange - Callback invoked with the new rating when a star is clicked
 * @param max - Number of stars to render (default `5`)
 * @param size - Visual size of the star icons: `'small' | 'medium' | 'large'` (default `'medium'`)
 * @param label - Optional label displayed above the stars and used as the group's accessible name
 * @returns The rendered star rating element
 */
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
      {label && (
        <span className='text-sm font-medium text-primary'>{label}</span>
      )}

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
              className={cn(
                'transition-transform hover:scale-110',
                focusRingClasses,
              )}
              aria-label={`${starValue} z ${max} gwiazdek`}
            >
              {isFilled ? (
                <RiStarFill
                  className={
                    SectionStarRatingSizeClasses[size] + ' text-accent'
                  }
                />
              ) : (
                <RiStarLine
                  className={
                    SectionStarRatingSizeClasses[size] + ' text-primary-light'
                  }
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
