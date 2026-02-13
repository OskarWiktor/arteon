import Shimmer from './Shimmer';

export type ToolPanelVariant = 'default' | 'word-count' | 'image-editor' | 'color-palette' | 'email-signature';

/* ── Reusable inner blocks ────────────────────────────────────── */

function AdBannerShimmer() {
  return <Shimmer className="my-3 h-[90px] w-full !rounded-2xl !bg-neutral-50" />;
}

function SectionBox({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-black/10 bg-white/80 p-7 shadow-sm ${className}`}>{children}</div>;
}

function InputShimmer() {
  return (
    <div className="space-y-2">
      <Shimmer className="h-3.5 w-24 !rounded-md" />
      <Shimmer className="h-10 w-full" />
    </div>
  );
}

function ButtonShimmer({ width = 'w-28' }: { width?: string }) {
  return <Shimmer className={`h-9 ${width} !rounded-lg`} />;
}

/* ── Variant: default (2:3 grid — QR, Meta, WCAG, Extractor, Favicon, WebP) ── */

function DefaultPanel() {
  return (
    <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
      <SectionBox className="space-y-5">
        <InputShimmer />
        <InputShimmer />
        <InputShimmer />
        <div className="flex gap-3 pt-2">
          <ButtonShimmer />
          <ButtonShimmer width="w-24" />
        </div>
      </SectionBox>

      <SectionBox className="space-y-4">
        <Shimmer className="h-5 w-32 !rounded-md" />
        <Shimmer className="h-48 w-full" />
        <div className="flex gap-2">
          <Shimmer className="h-8 w-20 !rounded-lg" />
          <Shimmer className="h-8 w-20 !rounded-lg" />
        </div>
      </SectionBox>
    </div>
  );
}

/* ── Variant: word-count (1:2 grid — stats left, textarea right) ── */

function WordCountPanel() {
  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
      <SectionBox className="space-y-5">
        <div className="space-y-2">
          <Shimmer className="h-5 w-28 !rounded-md" />
          <Shimmer className="h-3 w-44 !rounded-md" />
        </div>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-between">
              <Shimmer className="h-4 w-28 !rounded-md" />
              <Shimmer className="h-5 w-12 !rounded-md" />
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Shimmer className="h-4 w-32 !rounded-md" />
            <Shimmer className="h-6 w-16 !rounded-full" />
          </div>
          <Shimmer className="h-2 w-full !rounded-full" />
        </div>
        <ButtonShimmer width="w-full" />
      </SectionBox>

      <SectionBox className="space-y-5">
        <InputShimmer />
        <Shimmer className="h-8 w-full" />
        <div className="space-y-2">
          <Shimmer className="h-3.5 w-32 !rounded-md" />
          <Shimmer className="min-h-[320px] w-full" />
        </div>
      </SectionBox>
    </div>
  );
}

/* ── Variant: image-editor (1.3:2.5 grid — upload left, canvas right) ── */

function ImageEditorPanel() {
  return (
    <div className="grid gap-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,2.5fr)]">
      <SectionBox className="space-y-4">
        <Shimmer className="h-5 w-28 !rounded-md" />
        <Shimmer className="h-32 w-full !rounded-xl border border-dashed !border-neutral-200 !bg-neutral-50" />
        <Shimmer className="h-3 w-48 !rounded-md" />

        <Shimmer className="mt-2 h-5 w-36 !rounded-md" />
        <div className="space-y-1">
          <Shimmer className="h-3.5 w-full !rounded-md" />
          <Shimmer className="h-3.5 w-3/4 !rounded-md" />
        </div>

        <div className="flex gap-2 pt-2">
          {[1, 2, 3, 4].map((i) => (
            <Shimmer key={i} className="h-8 w-8 !rounded-lg" />
          ))}
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <InputShimmer />
          <InputShimmer />
        </div>

        <div className="flex gap-3 pt-2">
          <ButtonShimmer />
          <ButtonShimmer width="w-24" />
        </div>
      </SectionBox>

      <SectionBox className="flex flex-col items-center justify-center space-y-4">
        <Shimmer className="aspect-video w-full max-w-xl" />
        <Shimmer className="h-3.5 w-56 !rounded-md" />
      </SectionBox>
    </div>
  );
}

/* ── Variant: color-palette (stacked — toolbar + palette grid) ── */

function ColorPalettePanel() {
  return (
    <div className="space-y-4">
      <SectionBox className="space-y-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <Shimmer className="h-10 w-10 !rounded-lg" />
            <Shimmer className="h-10 w-32" />
          </div>
          <div className="flex items-center gap-2">
            <ButtonShimmer />
            <ButtonShimmer width="w-24" />
          </div>
          <div className="flex items-center gap-3">
            <Shimmer className="h-7 w-7 !rounded-md" />
            <div className="space-y-1">
              <Shimmer className="h-4 w-20 !rounded-md" />
              <Shimmer className="h-3 w-32 !rounded-md" />
            </div>
          </div>
        </div>
      </SectionBox>

      <SectionBox className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-2 rounded-xl border border-black/5 bg-white/90 p-4">
              <Shimmer className="h-4 w-28 !rounded-md" />
              <Shimmer className="h-3 w-44 !rounded-md" />
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {[1, 2, 3, 4].map((j) => (
                  <Shimmer key={j} className="h-14 w-full !rounded-lg" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionBox>
    </div>
  );
}

/* ── Variant: email-signature (toolbar bars + form/preview grid) ── */

function EmailSignaturePanel() {
  return (
    <div className="space-y-4">
      <SectionBox className="flex flex-wrap items-center gap-3 !p-4">
        <Shimmer className="h-4 w-4 !rounded-md" />
        <Shimmer className="h-4 w-16 !rounded-md" />
        <div className="flex flex-wrap gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Shimmer key={i} className="h-7 w-16 !rounded-full" />
          ))}
        </div>
      </SectionBox>

      <SectionBox className="flex flex-wrap items-center gap-3 !p-4">
        <Shimmer className="h-4 w-20 !rounded-md" />
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <Shimmer key={i} className="h-8 w-20 !rounded-lg" />
          ))}
        </div>
      </SectionBox>

      <div className="grid items-stretch gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)]">
        <SectionBox className="min-h-[620px] space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            <InputShimmer />
            <InputShimmer />
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <InputShimmer />
            <InputShimmer />
          </div>
          <InputShimmer />
          <div className="grid gap-3 md:grid-cols-2">
            <InputShimmer />
            <InputShimmer />
          </div>
          <InputShimmer />
          <InputShimmer />
        </SectionBox>

        <SectionBox className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <Shimmer className="h-5 w-28 !rounded-md" />
            <div className="flex gap-2">
              <Shimmer className="h-8 w-8 !rounded-lg" />
              <Shimmer className="h-8 w-8 !rounded-lg" />
            </div>
          </div>
          <Shimmer className="min-h-[340px] w-full flex-1 !rounded-xl !bg-neutral-50" />
          <div className="flex flex-wrap gap-2">
            <ButtonShimmer width="w-32" />
            <ButtonShimmer width="w-32" />
            <ButtonShimmer width="w-24" />
          </div>
        </SectionBox>
      </div>
    </div>
  );
}

/* ── Main export ──────────────────────────────────────────────── */

interface ToolPanelSkeletonProps {
  variant?: ToolPanelVariant;
}

export default function ToolPanelSkeleton({ variant = 'default' }: ToolPanelSkeletonProps) {
  return (
    <div className="mx-auto w-[94%] max-w-[1420px]">
      <AdBannerShimmer />

      {variant === 'default' && <DefaultPanel />}
      {variant === 'word-count' && <WordCountPanel />}
      {variant === 'image-editor' && <ImageEditorPanel />}
      {variant === 'color-palette' && <ColorPalettePanel />}
      {variant === 'email-signature' && <EmailSignaturePanel />}
    </div>
  );
}
