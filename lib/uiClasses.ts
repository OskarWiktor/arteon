export const focusRingClasses =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-primary';

export const disabledInteractiveClasses =
  'pointer-events-none cursor-not-allowed opacity-60';
export const buttonAccentVariantClasses =
  'bg-primary text-white shadow-sm hover:shadow-md';
export const buttonNormalVariantClasses =
  'border border-neutral-200 bg-white text-dark shadow-sm hover:shadow-md';

export const smallIconSizeClasses = 'h-4 w-4';
export const normalIconSizeClasses = 'h-6 w-6';
export const largeIconSizeClasses = 'h-8 w-8';

export const flexCenterClasses = 'flex items-center justify-center';
export const flexCenterBetweenClasses = 'flex items-center justify-between';

export const modalBackdropClasses =
  'animate-[modal-backdrop-in_0.15s_ease-out_both]';
export const modalContentClasses =
  'animate-[modal-content-in_0.15s_ease-out_both]';

export const noScrollbarClasses =
  '[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden';

/**
 * The single source of truth for the gap between columns and between cards
 * across the whole site (carousels, bento, SectionBasic, contact form, FAQ,
 * card grids, feature grids, steps, demo, tables, article + table-of-contents,
 * …). Change it here once to retune every section's spacing on any breakpoint.
 */
export const columnGapClasses = 'gap-6 md:gap-8';

/**
 * Shared carousel sizing so every carousel (projects, tools, articles,
 * testimonials) sizes and spaces its cards identically — change it here once,
 * not per carousel. `carouselTrackClasses` is the horizontal snap track (uses
 * the shared gap); `carouselCardClasses` is each card slide's width.
 */
export const carouselTrackClasses = `flex snap-x snap-mandatory ${columnGapClasses} overflow-x-auto scroll-smooth pb-8`;
export const carouselCardClasses = 'w-80 shrink-0 snap-start md:w-90 lg:w-110';

/**
 * Shared geometry for a carousel edge fade: a full-height, non-interactive band
 * (capped at 160px, 360px on md+) sitting above the track. `from-transparent`
 * keeps the inner edge see-through; each variant below adds the side, direction
 * and the color it fades into. Belongs inside a `relative` track container.
 */
const carouselEdgeFadeBaseClasses =
  'pointer-events-none absolute inset-y-0 z-10 w-[160px] md:w-[360px] from-transparent';

/** Right edge fading into the page background. */
export const carouselEdgeFadeClasses = `${carouselEdgeFadeBaseClasses} right-0 bg-gradient-to-r to-[var(--background)]`;

/** Left edge fading into the page background. */
export const carouselEdgeFadeLeftClasses = `${carouselEdgeFadeBaseClasses} left-0 bg-gradient-to-l to-[var(--background)]`;

/** Right edge fading into the primary maroon (matches carousel cards). */
export const carouselEdgeFadePrimaryRightClasses = `${carouselEdgeFadeBaseClasses} right-0 bg-gradient-to-r to-[var(--primary)]`;

/** Left edge fading into the primary maroon (matches carousel cards). */
export const carouselEdgeFadePrimaryLeftClasses = `${carouselEdgeFadeBaseClasses} left-0 bg-gradient-to-l to-[var(--primary)]`;
