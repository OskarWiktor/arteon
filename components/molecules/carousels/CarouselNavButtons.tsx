'use client';

import { TriangleLeft, TriangleRight } from '@/components/atoms/icons/Triangle';
import { cn } from '@/lib/clsx';
import { normalIconSizeClasses } from '@/lib/uiClasses';
import ButtonCircle from '../../atoms/buttons/ButtonCircle';

type CarouselNavButtonsProps = {
  isScrollable: boolean;
  onPrev: () => void;
  onNext: () => void;
  prevLabel: string;
  nextLabel: string;
};

const carouselNavButtonsClasses =
  'absolute bottom-[-42px] z-10 h-12 w-12 bg-[#1C1F32]';

export function CarouselNavButtons({
  isScrollable,
  onPrev,
  onNext,
  prevLabel,
  nextLabel,
}: CarouselNavButtonsProps) {
  if (!isScrollable) return null;

  return (
    <>
      <ButtonCircle
        onClick={onPrev}
        ariaLabel={prevLabel}
        className={cn('left-2`', carouselNavButtonsClasses)}
      >
        <TriangleLeft
          className={cn(normalIconSizeClasses, 'mr-1')}
          aria-hidden='true'
        />
      </ButtonCircle>
      <ButtonCircle
        onClick={onNext}
        ariaLabel={nextLabel}
        className={cn('left-14 md:left-18', carouselNavButtonsClasses)}
      >
        <TriangleRight
          className={cn(normalIconSizeClasses, 'ml-1')}
          aria-hidden='true'
        />
      </ButtonCircle>
    </>
  );
}
