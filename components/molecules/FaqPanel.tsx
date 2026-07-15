'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { TriangleDown } from '@/components/atoms/icons/Triangle';
import { cn } from '@/lib/clsx';
import { focusRingClasses } from '@/lib/uiClasses';

interface FaqPanelProps {
  question: string;
  answer: ReactNode;
  icon?: ReactNode;
  name: string;
  defaultOpen?: boolean;
}

const ANIMATION_MS = 260;

/**
 * Tracks the currently-open panel per FAQ group so opening one animates the
 * previous one closed. This replaces the native `name` grouping, which closed
 * siblings instantly (an ugly snap) instead of letting them collapse smoothly.
 */
const openPanelByGroup = new Map<string, () => void>();

const detailsClasses =
  'faq-details group hover:border-neutral-300 open:border-neutral-300 mb-4 overflow-hidden bg-white shadow-[1px_1px_3px_#C6B7A2] transition open:shadow-sm hover:shadow-md';

const summaryClasses =
  'flex w-full cursor-pointer list-none items-center justify-between px-3.5 py-2.5 text-left transition-colors md:px-4.5 md:py-3.5 [&::-webkit-details-marker]:hidden';

const iconClasses =
  'bg-primary-light flex h-14 w-14 shrink-0 items-center justify-center text-neutral-900 transition group-open:bg-neutral-900 group-open:text-white';

/**
 * Collapsible FAQ panel built on the native `<details>` element, with its
 * height animated on open/close via the Web Animations API.
 *
 * The native element keeps it accessible and functional without JavaScript and
 * under `prefers-reduced-motion` (instant toggle). With JS we intercept the
 * toggle to tween the height, and coordinate one-open-at-a-time across the
 * group in JS so both the opening and the closing panel animate.
 */
export default function FaqPanel({
  question,
  answer,
  icon,
  name,
}: FaqPanelProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const isClosingRef = useRef(false);
  const isExpandingRef = useRef(false);

  // Stable identity for the group registry that always runs the latest
  // collapse. Declared up front so `settle` can reference it.
  const collapseRef = useRef<() => void>(() => {});
  const closeSelf = useRef(() => collapseRef.current()).current;

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const settle = (open: boolean) => {
    const details = detailsRef.current;
    if (!details) return;
    details.open = open;
    details.style.height = '';
    details.style.overflow = '';
    animationRef.current = null;
    isClosingRef.current = false;
    isExpandingRef.current = false;
    if (!open && openPanelByGroup.get(name) === closeSelf) {
      openPanelByGroup.delete(name);
    }
  };

  const runAnimation = (
    fromHeight: number,
    toHeight: number,
    open: boolean,
  ) => {
    const details = detailsRef.current;
    if (!details) return;
    animationRef.current?.cancel();
    const animation = details.animate(
      { height: [`${fromHeight}px`, `${toHeight}px`] },
      { duration: ANIMATION_MS, easing: 'ease' },
    );
    animationRef.current = animation;
    animation.onfinish = () => settle(open);
    animation.oncancel = () => {
      isClosingRef.current = false;
      isExpandingRef.current = false;
    };
  };

  const expand = () => {
    const details = detailsRef.current;
    const summary = summaryRef.current;
    const content = contentRef.current;
    if (!details || !summary || !content) return;
    isExpandingRef.current = true;
    runAnimation(
      details.offsetHeight,
      summary.offsetHeight + content.offsetHeight,
      true,
    );
  };

  const collapse = () => {
    const details = detailsRef.current;
    const summary = summaryRef.current;
    if (!details || !summary || !details.open || isClosingRef.current) return;
    if (prefersReducedMotion()) {
      settle(false);
      return;
    }
    isClosingRef.current = true;
    details.style.overflow = 'hidden';
    runAnimation(details.offsetHeight, summary.offsetHeight, false);
  };

  collapseRef.current = collapse;

  useEffect(
    () => () => {
      if (openPanelByGroup.get(name) === closeSelf) {
        openPanelByGroup.delete(name);
      }
    },
    [name, closeSelf],
  );

  const handleSummaryClick = (event: React.MouseEvent<HTMLElement>) => {
    const details = detailsRef.current;
    if (!details) return;
    event.preventDefault();

    const willOpen = isClosingRef.current || !details.open;

    if (willOpen) {
      // Close whichever sibling is currently open in this group (animated).
      const previous = openPanelByGroup.get(name);
      if (previous && previous !== closeSelf) previous();
      openPanelByGroup.set(name, closeSelf);

      if (prefersReducedMotion()) {
        details.open = true;
        return;
      }
      details.style.overflow = 'hidden';
      details.style.height = `${details.offsetHeight}px`;
      details.open = true;
      requestAnimationFrame(expand);
    } else {
      if (openPanelByGroup.get(name) === closeSelf) {
        openPanelByGroup.delete(name);
      }
      if (prefersReducedMotion()) {
        details.open = false;
        return;
      }
      collapse();
    }
  };

  return (
    <details ref={detailsRef} className={detailsClasses}>
      <summary
        ref={summaryRef}
        onClick={handleSummaryClick}
        className={cn(summaryClasses, focusRingClasses, icon && 'gap-4')}
      >
        {icon && <div className={iconClasses}>{icon}</div>}

        <h3 className='h6 flex-1 font-semibold!'>{question}</h3>

        <span className='ml-2 flex bg-[#E4D9CA] p-2' aria-hidden='true'>
          <TriangleDown className='h-5 w-5 transition-transform duration-200 group-open:rotate-180' />
        </span>
      </summary>

      <div ref={contentRef} className='border-t border-primary-light p-4'>
        <div className='leading-relaxed text-light'>
          {typeof answer === 'string' ? <p>{answer}</p> : answer}
        </div>
      </div>
    </details>
  );
}
