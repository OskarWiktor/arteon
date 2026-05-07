'use client';

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import Button from '@/components/ui/buttons/Button';

type CarouselNavButtonsProps = {
  isScrollable: boolean;
  onPrev: () => void;
  onNext: () => void;
  prevLabel: string;
  nextLabel: string;
};

export function CarouselNavButtons({ isScrollable, onPrev, onNext, prevLabel, nextLabel }: CarouselNavButtonsProps) {
  if (!isScrollable) return null;

  const positionClass = 'absolute bottom-[-31px] z-10 max-h-13 max-w-13';

  return (
    <>
      <Button variant="circle" onClick={onPrev} ariaLabel={prevLabel} className={`${positionClass} left-2`}>
        <RiArrowLeftSLine className="h-8 w-8" aria-hidden="true" />
      </Button>
      <Button variant="circle" onClick={onNext} ariaLabel={nextLabel} className={`${positionClass} right-2`}>
        <RiArrowRightSLine className="h-8 w-8" aria-hidden="true" />
      </Button>
    </>
  );
}
