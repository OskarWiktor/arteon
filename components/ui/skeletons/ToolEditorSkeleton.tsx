export default function ToolEditorSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-black/5 bg-neutral-50 p-6" role="status" aria-label="Loading tool...">
      <div className="mb-6 flex items-center gap-4">
        <div className="h-10 w-10 rounded-lg bg-neutral-200" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-48 rounded bg-neutral-200" />
          <div className="h-3 w-32 rounded bg-neutral-200" />
        </div>
      </div>

      <div className="mb-6 space-y-3">
        <div className="h-10 w-full rounded-lg bg-neutral-200" />
        <div className="h-10 w-full rounded-lg bg-neutral-200" />
        <div className="h-10 w-3/4 rounded-lg bg-neutral-200" />
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <div className="h-24 rounded-xl bg-neutral-200" />
        <div className="h-24 rounded-xl bg-neutral-200" />
        <div className="hidden h-24 rounded-xl bg-neutral-200 md:block" />
      </div>

      <div className="mt-6 flex gap-3">
        <div className="h-10 w-32 rounded-lg bg-neutral-200" />
        <div className="h-10 w-28 rounded-lg bg-neutral-200" />
      </div>

      <span className="sr-only">Loading tool editor...</span>
    </div>
  );
}
