import Shimmer from './Shimmer';

type CarouselVariant = 'project' | 'tool' | 'article' | 'testimonial';

interface CarouselSkeletonProps {
  variant?: CarouselVariant;
  count?: number;
}

function ProjectCardSkeleton() {
  return (
    <div className="w-[340px] shrink-0 snap-start md:w-[420px] lg:w-[520px]">
      <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
        <Shimmer className="aspect-[2/1] w-full !rounded-none !bg-neutral-300" />
        <div className="space-y-3 px-6 py-4 md:px-7 md:py-5">
          <Shimmer className="h-5 w-3/4 !rounded-md" />
          <Shimmer className="h-3.5 w-full !rounded-md" />
          <div className="mt-2 h-px w-full bg-neutral-200" />
          <Shimmer className="h-8 w-36 !rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

function ToolCardSkeleton() {
  return (
    <div className="w-[340px] shrink-0 snap-start md:w-[420px] lg:w-[520px]">
      <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
        <Shimmer className="aspect-[16/9] w-full !rounded-none !bg-neutral-250 !bg-neutral-300" />
        <div className="space-y-3 p-4 md:p-5">
          <Shimmer className="h-5 w-3/5 !rounded-md" />
          <Shimmer className="h-3.5 w-full !rounded-md" />
          <Shimmer className="h-3.5 w-4/5 !rounded-md" />
          <Shimmer className="mt-2 h-9 w-36 !rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

function ArticleCardSkeleton() {
  return (
    <div className="w-[340px] shrink-0 snap-start md:w-[420px] lg:w-[520px]">
      <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
        <Shimmer className="aspect-[16/9] w-full !rounded-none !bg-neutral-300" />
        <div className="space-y-2 p-4">
          <Shimmer className="h-5 w-4/5 !rounded-md" />
          <Shimmer className="h-3.5 w-full !rounded-md" />
          <Shimmer className="h-3.5 w-3/4 !rounded-md" />
          <div className="flex gap-2 pt-1">
            <Shimmer className="h-3.5 w-20 !rounded-md" />
            <Shimmer className="h-3.5 w-24 !rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCardSkeleton() {
  return (
    <div className="w-[340px] shrink-0 snap-start md:w-[420px] lg:w-[520px]">
      <div className="flex flex-col items-center rounded-2xl border border-black/5 bg-white p-5 shadow-sm md:px-6 md:py-8">
        <Shimmer className="h-6 w-40 !rounded-md" />
        <Shimmer className="mt-2 h-4 w-28 !rounded-md" />
        <div className="mt-2 flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Shimmer key={i} className="h-5 w-5 !rounded-sm !bg-amber-100" />
          ))}
        </div>
        <div className="mt-4 w-full space-y-2">
          <Shimmer className="mx-auto h-4 w-full !rounded-md" />
          <Shimmer className="mx-auto h-4 w-5/6 !rounded-md" />
          <Shimmer className="mx-auto h-4 w-3/4 !rounded-md" />
        </div>
      </div>
    </div>
  );
}

const cardMap: Record<CarouselVariant, () => React.JSX.Element> = {
  project: ProjectCardSkeleton,
  tool: ToolCardSkeleton,
  article: ArticleCardSkeleton,
  testimonial: TestimonialCardSkeleton,
};

export default function CarouselSkeleton({ variant = 'project', count = 3 }: CarouselSkeletonProps) {
  const Card = cardMap[variant];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Shimmer className="h-7 w-1/3 !rounded-md" />
        <Shimmer className="h-4 w-32 !rounded-md" />
      </div>
      <div className="no-scrollbar flex gap-4 overflow-hidden pb-2">
        {Array.from({ length: count }).map((_, i) => (
          <Card key={i} />
        ))}
      </div>
      <div className="flex justify-center gap-2">
        {Array.from({ length: Math.min(count, 5) }).map((_, i) => (
          <Shimmer key={i} className="h-2.5 w-2.5 !rounded-full" />
        ))}
      </div>
    </div>
  );
}
