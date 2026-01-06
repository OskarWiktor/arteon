'use client';

import { useState } from 'react';
import { RiStarFill, RiStarLine } from 'react-icons/ri';

interface SectionStarRatingProps {
  value: number;
  onChange: (value: number) => void;
  max?: number;
  size?: 'small' | 'medium' | 'large';
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

  const sizeClasses = {
    small: 'h-5 w-5',
    medium: 'h-7 w-7',
    large: 'h-9 w-9',
  };

  const displayValue = hoverValue !== null ? hoverValue : value;

  return (
    <div className="inline-flex flex-col items-center gap-2">
      {label && <span className="text-sm font-medium text-slate-800">{label}</span>}

      <div
        className="flex gap-1"
        role="group"
        aria-label={label || 'Ocena gwiazdkowa'}
        onMouseLeave={() => setHoverValue(null)}
      >
        {Array.from({ length: max }, (_, index) => {
          const starValue = index + 1;
          const isFilled = starValue <= displayValue;

          return (
            <button
              key={index}
              type="button"
              onClick={() => onChange(starValue)}
              onMouseEnter={() => setHoverValue(starValue)}
              className="transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
              aria-label={`${starValue} z ${max} gwiazdek`}
            >
              {isFilled ? (
                <RiStarFill className={`${sizeClasses[size]} text-amber-400`} />
              ) : (
                <RiStarLine className={`${sizeClasses[size]} text-slate-300`} />
              )}
            </button>
          );
        })}
      </div>

      {value > 0 && (
        <span className="text-light text-sm">
          {value} z {max}
        </span>
      )}
    </div>
  );
}
