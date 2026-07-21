import { cn } from '@/lib/clsx';
import Shimmer from '../../atoms/skeletons/Shimmer';

type CarouselCardVariant = 'project' | 'tool' | 'article';

/**
 * Aspect ratio of the card's image area, mirroring {@link CarouselCardShell}:
 * project cards keep the full 3:2 mockup, tool/article cards use 2:1.
 */
const imageAspectByVariant: Record<CarouselCardVariant, string> = {
  project: 'aspect-3/2',
  tool: 'aspect-2/1',
  article: 'aspect-2/1',
};

/**
 * Skeleton placeholder for a single carousel/grid card, matching the real dark
 * card rendered by `CarouselCardShell` + `CarouselCard` (background `#1C1F32`,
 * light text, image on top, divider, and a bottom link). Used by both the
 * carousel and card-grid skeletons so every card placeholder is identical to
 * the loaded card in size, padding and colour.
 */
export default function CarouselCardSkeleton({
  variant,
}: {
  variant: CarouselCardVariant;
}) {
  const textLineCount = variant === 'tool' ? 2 : 3;

  return (
    <div className='flex h-full flex-col gap-0 overflow-hidden bg-[#1C1F32] p-4 shadow-[1px_1px_3px_#C6B7A2] md:p-6'>
      <div
        className={cn(
          'relative w-full overflow-hidden',
          imageAspectByVariant[variant],
        )}
      >
        <Shimmer className='h-full w-full rounded-none! bg-white/10!' />
      </div>

      <div className='flex grow flex-col px-2 pt-4 md:px-4 md:pt-6'>
        <Shimmer className='h-6 w-4/5 bg-white/15!' />
        <Shimmer className='mt-2 h-6 w-2/5 bg-white/15!' />

        {variant === 'article' && (
          <Shimmer className='mt-3 h-3.5 w-32 bg-white/10!' />
        )}

        <div className='mt-4 space-y-2'>
          {Array.from({ length: textLineCount }).map((_, i) => (
            <Shimmer
              key={i}
              className={cn(
                'h-3.5 bg-white/10!',
                i === textLineCount - 1 ? 'w-3/5' : 'w-full',
              )}
            />
          ))}
        </div>

        <div className='mt-auto pt-4'>
          <div className='mb-3 h-px w-full bg-[#504E4C]' aria-hidden='true' />
          <Shimmer className='h-4 w-32 bg-white/15!' />
        </div>
      </div>
    </div>
  );
}
