import { cn } from '@/lib/utils';
import Shimmer from '../../atoms/skeletons/Shimmer';
import {
  flexCenterBetweenClasses,
  flexCenterClasses,
  largeIconSizeClasses,
} from '@/lib/ui-classes';
import Card from '@/components/organisms/Card';

export type ToolPanelVariant =
  | 'default'
  | 'word-count'
  | 'image-editor'
  | 'color-palette'
  | 'email-signature'
  | 'meta-counter'
  | 'contrast-checker'
  | 'upload-tool';

/**
 * Renders a centered horizontal shimmer banner placeholder.
 *
 * @returns A JSX element containing a centered shimmer used as a banner placeholder.
 */
function AdBannerShimmer() {
  return (
    <div className='my-3 flex justify-center'>
      <Shimmer className='h-22.5 w-full max-w-182 rounded-lg! bg-neutral-50!' />
    </div>
  );
}

function SectionBox({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn('rounded-lg border border-neutral-200 bg-white/80 p-7 shadow-sm', className)}
    >
      {children}
    </div>
  );
}

function InputShimmer() {
  return (
    <div className='space-y-2'>
      <Shimmer className='h-3.5 w-24' />
      <Shimmer className='h-10 w-full' />
    </div>
  );
}

function ButtonShimmer({ width = 'w-28' }: { width?: string }) {
  return <Shimmer className={cn('h-9', width)} />;
}

/**
 * Renders the default tool panel skeleton with input placeholders on the left and a preview area on the right.
 *
 * @returns The JSX element for the default (QR code) tool panel skeleton.
 */

function DefaultPanel() {
  return (
    <div className='grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]'>
      <SectionBox className='space-y-5'>
        <InputShimmer />
        <InputShimmer />
        <InputShimmer />
        <div className='flex gap-3 pt-2'>
          <ButtonShimmer />
          <ButtonShimmer width='w-24' />
        </div>
      </SectionBox>

      <SectionBox className='space-y-4'>
        <Shimmer className='h-5 w-32' />
        <Shimmer className='h-48 w-full bg-neutral-200!' />
        <div className='flex gap-2'>
          <Shimmer className='h-8 w-20' />
          <Shimmer className='h-8 w-20' />
        </div>
      </SectionBox>
    </div>
  );
}

/**
 * Skeleton UI for the Meta Counter tool panel, rendering two field rows and a Google preview placeholder.
 *
 * @returns A React element containing the meta-counter skeleton layout: two repeated field groups of input-like shimmers and an outlined preview card of shimmering lines.
 */

function MetaCounterPanel() {
  return (
    <SectionBox className='space-y-6'>
      {[1, 2].map(i => (
        <div key={i} className='space-y-2'>
          <div className={flexCenterBetweenClasses}>
            <Shimmer className='h-3.5 w-24' />
            <Shimmer className='h-6 w-16 rounded-lg!' />
          </div>
          <Shimmer className='h-10 w-full' />
          <Shimmer className='h-2 w-full rounded-lg!' />
          <Shimmer className='h-3 w-48' />
        </div>
      ))}
      <Card interactive={false} padding='lg' variant='outlined' className='space-y-2'>
        <Shimmer className='h-4 w-64' />
        <Shimmer className='h-3 w-full' />
        <Shimmer className='h-3 w-3/4' />
      </Card>
    </SectionBox>
  );
}

/**
 * Renders the loading skeleton for the contrast-checker tool panel, showing two color picker placeholders and a list of result rows.
 *
 * @returns A JSX element containing shimmer placeholders for two color pickers, a large preview block, a header, and three outlined result cards.
 */

function ContrastCheckerPanel() {
  return (
    <div className='space-y-4'>
      <SectionBox className='space-y-4'>
        <div className='grid gap-4 md:grid-cols-2'>
          {[1, 2].map(i => (
            <div key={i} className='space-y-2'>
              <Shimmer className='h-3.5 w-20' />
              <div className='flex items-center gap-3'>
                <Shimmer className='h-10 w-10' />
                <Shimmer className='h-10 flex-1' />
              </div>
            </div>
          ))}
        </div>
        <Shimmer className='mx-auto h-20 w-full rounded-lg! bg-neutral-200!' />
        <Shimmer className='mx-auto h-8 w-48' />
      </SectionBox>

      <SectionBox className='space-y-3'>
        <Shimmer className='h-5 w-40' />
        {[1, 2, 3].map(i => (
          <Card
            interactive={false}
            padding='lg'
            key={i}
            variant='outlined'
            className={flexCenterBetweenClasses}
          >
            <Shimmer className='h-4 w-32' />
            <div className='flex gap-2'>
              <Shimmer className='h-6 w-16 rounded-lg!' />
              <Shimmer className='h-6 w-16 rounded-lg!' />
            </div>
          </Card>
        ))}
      </SectionBox>
    </div>
  );
}

/**
 * Renders the upload-tool skeleton panel with a dropzone placeholder and result tiles.
 *
 * The panel is layout-only and uses shimmer placeholders to represent a file dropzone, action buttons,
 * and a grid of result previews.
 *
 * @returns A JSX element containing the upload-tool skeleton: a dashed dropzone shimmer, two action button shimmers, and a 2×2 grid of result shimmers.
 */

function UploadToolPanel() {
  return (
    <div className='grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]'>
      <SectionBox className='space-y-4'>
        <Shimmer className='h-5 w-28' />
        <Shimmer className='h-32 w-full rounded-lg! border border-dashed border-neutral-200! bg-neutral-50!' />
        <Shimmer className='h-3 w-48' />
        <div className='flex gap-3 pt-2'>
          <ButtonShimmer />
          <ButtonShimmer width='w-24' />
        </div>
      </SectionBox>

      <SectionBox className='space-y-4'>
        <Shimmer className='h-5 w-32' />
        <div className='grid gap-3 sm:grid-cols-2'>
          {[1, 2, 3, 4].map(i => (
            <Shimmer key={i} className='h-20 w-full rounded-lg! bg-neutral-200!' />
          ))}
        </div>
      </SectionBox>
    </div>
  );
}

/**
 * Render a skeleton layout for the Word Count tool.
 *
 * @returns A JSX element containing the word-count panel skeleton with a left column of statistic placeholders and a right column with input/textarea placeholders.
 */

function WordCountPanel() {
  return (
    <div className='grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]'>
      <SectionBox className='space-y-5'>
        <div className='space-y-2'>
          <Shimmer className='h-5 w-28' />
          <Shimmer className='h-3 w-44' />
        </div>
        <div className='space-y-3'>
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className={flexCenterBetweenClasses}>
              <Shimmer className='h-4 w-28' />
              <Shimmer className='h-5 w-12' />
            </div>
          ))}
        </div>
        <div className='space-y-2'>
          <div className={flexCenterBetweenClasses}>
            <Shimmer className='h-4 w-32' />
            <Shimmer className='h-6 w-16 rounded-lg!' />
          </div>
          <Shimmer className='h-2 w-full rounded-lg!' />
        </div>
        <ButtonShimmer width='w-full' />
      </SectionBox>

      <SectionBox className='space-y-5'>
        <InputShimmer />
        <Shimmer className='h-8 w-full' />
        <div className='space-y-2'>
          <Shimmer className='h-3.5 w-32' />
          <Shimmer className='min-h-80 w-full' />
        </div>
      </SectionBox>
    </div>
  );
}

/**
 * Renders the Image Editor tool panel skeleton with upload controls on the left and a canvas preview on the right.
 *
 * @returns A JSX element containing the image editor loading placeholder layout composed of shimmered inputs, controls, and a preview area.
 */

function ImageEditorPanel() {
  return (
    <div className='grid gap-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,2.5fr)]'>
      <SectionBox className='space-y-4'>
        <Shimmer className='h-5 w-28' />
        <Shimmer className='h-32 w-full rounded-lg! border border-dashed border-neutral-200! bg-neutral-50!' />
        <Shimmer className='h-3 w-48' />

        <Shimmer className='mt-2 h-5 w-36' />
        <div className='space-y-1'>
          <Shimmer className='h-3.5 w-full' />
          <Shimmer className='h-3.5 w-3/4' />
        </div>

        <div className='flex gap-2 pt-2'>
          {[1, 2, 3, 4].map(i => (
            <Shimmer key={i} className={largeIconSizeClasses} />
          ))}
        </div>

        <div className='grid gap-3 md:grid-cols-2'>
          <InputShimmer />
          <InputShimmer />
        </div>

        <div className='flex gap-3 pt-2'>
          <ButtonShimmer />
          <ButtonShimmer width='w-24' />
        </div>
      </SectionBox>

      <SectionBox className={cn('flex-col space-y-4', flexCenterClasses)}>
        <Shimmer className='aspect-video w-full max-w-xl bg-neutral-200!' />
        <Shimmer className='h-3.5 w-56' />
      </SectionBox>
    </div>
  );
}

/* ── Variant: color-palette (stacked - toolbar + palette grid) ── */

function ColorPalettePanel() {
  return (
    <div className='space-y-4'>
      <SectionBox className='space-y-4'>
        <div className='flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between'>
          <div className='flex items-center gap-3'>
            <Shimmer className='h-10 w-10' />
            <Shimmer className='h-10 w-32' />
          </div>
          <div className='flex items-center gap-2'>
            <ButtonShimmer />
            <ButtonShimmer width='w-24' />
          </div>
          <div className='flex items-center gap-3'>
            <Shimmer className='h-7 w-7' />
            <div className='space-y-1'>
              <Shimmer className='h-4 w-20' />
              <Shimmer className='h-3 w-32' />
            </div>
          </div>
        </div>
      </SectionBox>

      <SectionBox className='space-y-4'>
        <div className='grid gap-4 md:grid-cols-2'>
          {[1, 2, 3, 4].map(i => (
            <Card interactive={false} padding='lg' key={i} variant='outlined' className='space-y-2'>
              <Shimmer className='h-4 w-28' />
              <Shimmer className='h-3 w-44' />
              <div className='mt-2 grid gap-2 sm:grid-cols-2'>
                {[1, 2, 3, 4].map(j => (
                  <Shimmer key={j} className='h-14 w-full' />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </SectionBox>
    </div>
  );
}

/**
 * Render the "email-signature" tool panel skeleton comprising toolbar bars, a form grid of input placeholders, and a preview area.
 *
 * The layout includes two toolbar sections of small shimmers, a left column with multiple grouped input shimmers, and a right column with a title shimmer, two large icon shimmers, a large preview shimmer, and action button shimmers.
 *
 * @returns A JSX element containing the email-signature variant skeleton composed of toolbar shimmers, form/input shimmers, and a preview placeholder.
 */

function EmailSignaturePanel() {
  return (
    <div className='space-y-4'>
      <SectionBox className='flex flex-wrap items-center gap-3 p-4!'>
        <Shimmer className='h-4 w-4' />
        <Shimmer className='h-4 w-16' />
        <div className='flex flex-wrap gap-1'>
          {[1, 2, 3, 4, 5].map(i => (
            <Shimmer key={i} className='h-7 w-16 rounded-lg!' />
          ))}
        </div>
      </SectionBox>

      <SectionBox className='flex flex-wrap items-center gap-3 p-4!'>
        <Shimmer className='h-4 w-20' />
        <div className='flex flex-wrap gap-2'>
          {[1, 2, 3, 4, 5, 6, 7].map(i => (
            <Shimmer key={i} className='h-8 w-20' />
          ))}
        </div>
      </SectionBox>

      <div className='grid items-stretch gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)]'>
        <SectionBox className='min-h-155 space-y-4'>
          <div className='grid gap-3 md:grid-cols-2'>
            <InputShimmer />
            <InputShimmer />
          </div>
          <div className='grid gap-3 md:grid-cols-2'>
            <InputShimmer />
            <InputShimmer />
          </div>
          <InputShimmer />
          <div className='grid gap-3 md:grid-cols-2'>
            <InputShimmer />
            <InputShimmer />
          </div>
          <InputShimmer />
          <InputShimmer />
        </SectionBox>

        <SectionBox className='flex flex-col space-y-4'>
          <div className={flexCenterBetweenClasses}>
            <Shimmer className='h-5 w-28' />
            <div className='flex gap-2'>
              <Shimmer className={largeIconSizeClasses} />
              <Shimmer className={largeIconSizeClasses} />
            </div>
          </div>
          <Shimmer className='min-h-85 w-full flex-1 rounded-lg! bg-neutral-200!' />
          <div className='flex flex-wrap gap-2'>
            <ButtonShimmer width='w-32' />
            <ButtonShimmer width='w-32' />
            <ButtonShimmer width='w-24' />
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

/**
 * Renders a vertically sticky side-ad placeholder using a shimmer block.
 *
 * This component provides a non-interactive visual placeholder intended for side advertisements in large layouts.
 *
 * @returns A JSX element containing a vertically sticky shimmer used as a side ad placeholder.
 */
function SideAdShimmer() {
  return (
    <div className='sticky top-4'>
      <Shimmer className='h-150 w-full rounded-lg! bg-neutral-50!' />
    </div>
  );
}

/**
 * Render a skeleton (loading) UI for a selected tool panel variant.
 *
 * Renders the overall responsive layout including optional XL side ad shimmers, a top and bottom banner shimmer, and exactly one variant-specific skeleton panel determined by `variant`.
 *
 * @param variant - Which panel skeleton to display. One of: `'default' | 'word-count' | 'image-editor' | 'color-palette' | 'email-signature' | 'meta-counter' | 'contrast-checker' | 'upload-tool'`.
 * @returns The JSX element containing the composed skeleton layout and the selected variant panel.
 */
export default function ToolPanelSkeleton({ variant = 'default' }: ToolPanelSkeletonProps) {
  return (
    <div
      className={cn(
        'mx-auto w-[94%] max-w-355',
        'xl:grid xl:w-full xl:max-w-none xl:grid-cols-[1fr_160px_minmax(0,1420px)_160px_1fr] xl:gap-x-4',
      )}
    >
      <div className='hidden xl:col-start-2 xl:block'>
        <SideAdShimmer />
      </div>

      <div className='xl:col-start-3'>
        <AdBannerShimmer />

        {variant === 'default' && <DefaultPanel />}
        {variant === 'word-count' && <WordCountPanel />}
        {variant === 'image-editor' && <ImageEditorPanel />}
        {variant === 'color-palette' && <ColorPalettePanel />}
        {variant === 'email-signature' && <EmailSignaturePanel />}
        {variant === 'meta-counter' && <MetaCounterPanel />}
        {variant === 'contrast-checker' && <ContrastCheckerPanel />}
        {variant === 'upload-tool' && <UploadToolPanel />}

        <AdBannerShimmer />
      </div>

      <div className='hidden xl:col-start-4 xl:block'>
        <SideAdShimmer />
      </div>
    </div>
  );
}
