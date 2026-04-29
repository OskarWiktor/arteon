'use client';

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

type CarouselNavButtonsProps = {
  isScrollable: boolean;
  onPrev: () => void;
  onNext: () => void;
  prevLabel: string;
  nextLabel: string;
};

export function CarouselNavButtons({ isScrollable, onPrev, onNext, prevLabel, nextLabel }: CarouselNavButtonsProps) {
  if (!isScrollable) return null;

  const navBtn =
    'group absolute bottom-[-31px] z-10 cursor-pointer rounded-full border border-primary bg-primary p-1 md:p-2 text-white shadow-lg ' +
    'transition-colors hover:scale-105 hover:bg-white hover:text-mid focus:outline-none ' +
    'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white md:block';

  return (
    <>
      <button type="button" onClick={onPrev} className={`${navBtn} left-2 max-h-13 max-w-13`} aria-label={prevLabel}>
        <RiArrowLeftSLine className="h-8 w-8" aria-hidden="true" />
      </button>

      <button type="button" onClick={onNext} className={`${navBtn} right-2 max-h-13 max-w-13`} aria-label={nextLabel}>
        <RiArrowRightSLine className="h-8 w-8" aria-hidden="true" />
      </button>
    </>
  );
}
