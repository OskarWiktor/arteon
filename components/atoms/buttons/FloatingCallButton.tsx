import { RiPhoneFill } from 'react-icons/ri';

/**
 * Floating call button shown on service pages. A "Zadzwoń" label sits ABOVE a
 * round icon button; tapping either dials the company number (plain `tel:`
 * link — no JavaScript). Colours come from theme tokens that flip in `.dark`:
 * the button is dark with a light icon in light mode and inverts in dark mode,
 * and the label stays readable on the page (dark on light, light on dark).
 */
export default function FloatingCallButton() {
  return (
    <a
      href='tel:+48516466255'
      aria-label='Zadzwoń: 516 466 255'
      className='group fixed right-4 bottom-4 z-50 flex h-auto! flex-col items-center gap-1 focus-visible:outline-none md:right-6 md:bottom-6'
    >
      <span className='text-sm font-medium text-neutral-900 md:text-base'>
        Zadzwoń
      </span>
      <span className='flex h-14! w-14! items-center justify-center rounded-full bg-neutral-900 text-neutral-50 shadow-lg transition-transform group-hover:scale-105 group-focus-visible:ring-2 group-focus-visible:ring-neutral-500 group-focus-visible:ring-offset-2 md:h-16 md:w-16'>
        <RiPhoneFill
          className='text-[26px] md:text-[36px]'
          aria-hidden='true'
        />
      </span>
    </a>
  );
}
