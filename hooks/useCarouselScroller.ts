'use client';

import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent, RefObject } from 'react';

type Params = {
  itemCount: number;
  scrollRef: RefObject<HTMLDivElement | null>;
  cardRef: RefObject<HTMLElement | null>;
};

export function useCarouselScroller({ itemCount, scrollRef, cardRef }: Params) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlides, setMaxSlides] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  const currentSlideRef = useRef(0);

  useEffect(() => {
    currentSlideRef.current = currentSlide;
  }, [currentSlide]);

  useEffect(() => {
    const container = scrollRef.current;
    const card = cardRef.current;
    if (!container || !card) return;

    const ro = new ResizeObserver(() => {
      const cs = getComputedStyle(container);
      const gap = parseFloat(cs.columnGap || '16') || 16;
      const w = card.getBoundingClientRect().width;
      const cardWithGap = w + gap;
      setCardWidth(cardWithGap);

      const epsilon = 0.01;
      const visible = Math.max(1, Math.floor((container.clientWidth + epsilon) / cardWithGap));
      const slides = Math.max(1, itemCount - visible + 1);

      setMaxSlides(slides);
      setIsScrollable(slides > 1);

      const nextIndex = Math.min(currentSlideRef.current, slides - 1);
      setCurrentSlide(nextIndex);

      container.scrollTo({
        left: nextIndex * cardWithGap,
        behavior: 'auto',
      });
    });

    ro.observe(container);
    ro.observe(card);

    return () => ro.disconnect();
  }, [itemCount, scrollRef, cardRef]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !cardWidth) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const idx = Math.round(el.scrollLeft / cardWidth);
        setCurrentSlide(idx);
        ticking = false;
      });
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [cardWidth, scrollRef]);

  const scrollByCards = (dir: 'left' | 'right') => {
    if (!scrollRef.current || !cardWidth) return;
    const delta = dir === 'left' ? -1 : 1;
    const next = Math.max(0, Math.min(currentSlide + delta, maxSlides - 1));
    scrollRef.current.scrollTo({ left: next * cardWidth, behavior: 'smooth' });
  };

  const goToSlide = (index: number) => {
    if (!scrollRef.current || !cardWidth) return;
    const next = Math.max(0, Math.min(index, maxSlides - 1));
    scrollRef.current.scrollTo({ left: next * cardWidth, behavior: 'smooth' });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!isScrollable) return;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollByCards('right');
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollByCards('left');
    } else if (e.key === 'Home') {
      e.preventDefault();
      scrollRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (e.key === 'End') {
      e.preventDefault();
      scrollRef.current?.scrollTo({
        left: (maxSlides - 1) * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return {
    currentSlide,
    maxSlides,
    cardWidth,
    isScrollable,
    scrollByCards,
    goToSlide,
    onKeyDown,
  };
}
