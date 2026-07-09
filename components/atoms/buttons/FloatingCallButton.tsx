import { RiPhoneFill } from 'react-icons/ri';

/**
 * Floating call button shown on service pages. A "Zadzwoń" label sits ABOVE a
 * round icon button; tapping either dials the company number (plain `tel:`
 * link — no JavaScript). Colours come from theme tokens that flip in `.dark`:
 * the button is dark with a light icon in light mode and inverts in dark mode.
 *
 * Positioning: instead of a plain `fixed; bottom-4` (which on iOS Safari does NOT
 * track the dynamic bottom toolbar and gets stuck above the real bottom), the
 * button lives in a full-height wrapper anchored to the TOP of the viewport with
 * `h-dvh` (dynamic viewport height that iOS updates as its toolbar shows/hides)
 * and is pushed to the bottom-right by flex, plus the bottom safe-area inset so
 * it clears the home indicator. The wrapper is `pointer-events-none` so it never
 * blocks the page — only the link itself is clickable.
 */
export default function FloatingCallButton() {
  return (
    <div className='pointer-events-none fixed inset-x-0 top-0 z-50 flex h-dvh flex-col items-end justify-end pr-4 pb-[calc(1rem+env(safe-area-inset-bottom))] md:pr-6 md:pb-[calc(1.5rem+env(safe-area-inset-bottom))]'>
      <a
        href='tel:+48516466255'
        aria-label='Zadzwoń: 516 466 255'
        className='group pointer-events-auto flex h-auto! flex-col items-center gap-1 focus-visible:outline-none'
      >
        <span className='bg-accent px-1 text-sm font-medium text-neutral-900 md:text-base'>
          Zadzwoń
        </span>
        <span className='flex h-14! w-14! items-center justify-center rounded-full bg-neutral-900 text-neutral-50 shadow-lg transition-transform group-hover:scale-105 group-focus-visible:ring-2 group-focus-visible:ring-neutral-500 group-focus-visible:ring-offset-2 md:h-16 md:w-16'>
          <RiPhoneFill
            className='text-[26px] md:text-[36px]'
            aria-hidden='true'
          />
        </span>
      </a>
    </div>
  );
}
