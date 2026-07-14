import Image from 'next/image';
import type { ReactNode } from 'react';
import ButtonGroup from '@/components/molecules/ButtonGroup';
import SectionHeader from '@/components/molecules/SectionHeader';
import { cn } from '@/lib/clsx';
import { columnGapClasses } from '@/lib/uiClasses';

/**
 * Which part of a cover image stays in frame when it is cropped to the box.
 * Mirrors CSS `object-position` (e.g. `'right'` keeps the right edge visible).
 */
type ImagePosition =
  | 'center'
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'left-top'
  | 'left-bottom'
  | 'right-top'
  | 'right-bottom';

const objectPositionClasses: Record<ImagePosition, string> = {
  center: 'object-center',
  left: 'object-left',
  right: 'object-right',
  top: 'object-top',
  bottom: 'object-bottom',
  'left-top': 'object-left-top',
  'left-bottom': 'object-left-bottom',
  'right-top': 'object-right-top',
  'right-bottom': 'object-right-bottom',
};

/**
 * Per-box `order` classes applied only below `md`. On the single-column mobile
 * layout stats take even slots and images odd slots, so the mosaic reads
 * block, image, block, image… instead of the desktop checkerboard's raw order.
 * They do not apply from `md` up, where the two-column checkerboard is kept.
 */
const MAX_MD_ORDER_CLASSES = [
  'max-md:order-none',
  'max-md:order-1',
  'max-md:order-2',
  'max-md:order-3',
  'max-md:order-4',
  'max-md:order-5',
  'max-md:order-6',
  'max-md:order-7',
];

/**
 * A single box in the right-hand mosaic. `image` boxes show a full-bleed proof
 * screenshot (cropped `object-cover`, framing controlled by `imagePosition`,
 * default centered); `stat` boxes are navy panels (an optional icon, a heading
 * and a line of copy) whose text colors and sizes mirror the blue carousel
 * cards.
 */
type HighlightBox =
  | { type: 'image'; image: string; alt: string; imagePosition?: ImagePosition }
  | { type: 'stat'; icon?: ReactNode; title: string; text: string };

interface SectionHighlightsProps {
  title: string;
  subtitle?: string;
  secondaryTitle?: string;
  description?: ReactNode;
  btnOne?: string;
  btnOneHref?: string;
  btnTwo?: string;
  btnTwoHref?: string;
  boxes: HighlightBox[];
  id?: string;
}

/**
 * A 50/50 split section: on the left the standard section text block (subtitle,
 * title, italic secondary title, copy and buttons — same options as the text
 * beside the carousels); on the right a two-column mosaic of proof boxes that
 * alternate between screenshots and navy stat panels. Answers "why does it
 * matter" with concrete evidence next to the pitch.
 */
export default function SectionHighlights({
  title,
  subtitle,
  secondaryTitle,
  description,
  btnOne,
  btnOneHref,
  btnTwo,
  btnTwoHref,
  boxes,
  id,
}: SectionHighlightsProps) {
  const headingId =
    id ?? `highlights-${title.toLowerCase().replace(/[^a-z0-9]+/gi, '-')}`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn('grid lg:grid-cols-2 lg:items-center', columnGapClasses)}
    >
      <div>
        <SectionHeader
          subtitle={subtitle}
          title={title}
          secondaryTitle={secondaryTitle}
          titleId={headingId}
          containerClassName='pb-0!'
        />

        {description && (
          <div className='mt-4 space-y-4 text-mid md:mt-6'>{description}</div>
        )}

        <ButtonGroup
          btnOne={btnOne}
          btnOneHref={btnOneHref}
          btnTwo={btnTwo}
          btnTwoHref={btnTwoHref}
          ariaLabel='Działania sekcji'
        />
      </div>

      <ul className='mt-8 grid grid-cols-1 md:auto-rows-fr md:grid-cols-2 lg:mt-0'>
        {boxes.map((box, index) => {
          // Interleave on mobile: stats fill even slots, images odd ones.
          const priorStats = boxes
            .slice(0, index)
            .filter(b => b.type === 'stat').length;
          const priorImages = index - priorStats;
          const mobileOrder =
            box.type === 'stat' ? priorStats * 2 : priorImages * 2 + 1;

          return (
            <li
              key={index}
              className={cn('flex', MAX_MD_ORDER_CLASSES[mobileOrder])}
            >
              {box.type === 'image' ? (
                <div className='relative min-h-45 w-full overflow-hidden'>
                  <Image
                    src={box.image}
                    alt={box.alt}
                    fill
                    className={cn(
                      'object-cover',
                      box.imagePosition &&
                        objectPositionClasses[box.imagePosition],
                    )}
                    sizes='(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw'
                  />
                </div>
              ) : (
                <div className='flex min-h-45 w-full flex-col items-center justify-center gap-2 bg-[#1C1F32] p-6 text-center'>
                  {box.icon && (
                    <span
                      className='mb-1 text-[#F9F5F2] [&>svg]:h-10 [&>svg]:w-10'
                      aria-hidden='true'
                    >
                      {box.icon}
                    </span>
                  )}
                  <h3 className='h5 text-[#F9F5F2]!'>{box.title}</h3>
                  <p className='text-[#B3B0AC]!'>{box.text}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
