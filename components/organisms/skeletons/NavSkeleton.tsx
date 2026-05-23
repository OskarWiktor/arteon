export function DesktopNavSkeleton() {
  return (
    <div className='hidden items-center gap-6 lg:flex' aria-hidden='true'>
      <div className='h-3 w-16 rounded bg-neutral-100' />
      <div className='h-3 w-20 rounded bg-neutral-100' />
      <div className='h-3 w-16 rounded bg-neutral-100' />
      <div className='h-3 w-14 rounded bg-neutral-100' />
    </div>
  );
}
