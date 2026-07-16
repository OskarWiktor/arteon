import Card from '@/components/organisms/Card';

export default function ToolEditorSkeleton() {
  return (
    <Card
      variant='outlined'
      padding='md'
      className='animate-pulse'
      role='status'
      aria-label='Loading tool...'
    >
      <div className='mb-6 flex items-center gap-4'>
        <div className='h-10 w-10 bg-neutral-200' />
        <div className='flex-1 space-y-2'>
          <div className='h-4 w-48 rounded bg-neutral-200' />
          <div className='h-3 w-32 rounded bg-neutral-200' />
        </div>
      </div>

      <div className='mb-6 space-y-3'>
        <div className='h-10 w-full bg-neutral-200' />
        <div className='h-10 w-full bg-neutral-200' />
        <div className='h-10 w-3/4 bg-neutral-200' />
      </div>

      <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
        <div className='h-24 bg-neutral-200' />
        <div className='h-24 bg-neutral-200' />
        <div className='hidden h-24 bg-neutral-200 md:block' />
      </div>

      <div className='mt-6 flex gap-3'>
        <div className='h-10 w-32 bg-neutral-200' />
        <div className='h-10 w-28 bg-neutral-200' />
      </div>

      <span className='sr-only'>Loading tool editor...</span>
    </Card>
  );
}
