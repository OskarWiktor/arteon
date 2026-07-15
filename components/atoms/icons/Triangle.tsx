export type TriangleDirection = 'up' | 'down' | 'left' | 'right';

/**
 * Filled triangle taken from the Arteon logo mark: an isosceles triangle
 * inscribed in a square — the base spans one full side and the apex sits at the
 * midpoint of the opposite side, so the width always equals the height. No
 * shaft or tail, exactly like the two triangles in the sygnet.
 *
 * Replaces the outline arrow icons so buttons, FAQ panels, navigation and
 * carousels share the logo's shape language. The directional exports
 * (`TriangleDown` etc.) take the same `className`-only props as the icon
 * components they replaced, so they also work where an icon is passed as a
 * value (icon maps) and not just as a JSX tag.
 */
/**
 * A 12×12 triangle centred in the 24×24 viewBox — the same glyph size the
 * Remix icons use (their arrows span 6→18), so these drop in at the normal
 * icon size. Width equals height, and there is no tail.
 */
const TRIANGLE_PATHS: Record<TriangleDirection, string> = {
  down: 'M6 6H18L12 18Z',
  up: 'M6 18H18L12 6Z',
  right: 'M6 6V18L18 12Z',
  left: 'M18 6V18L6 12Z',
};

export interface TriangleProps {
  className?: string;
  title?: string;
}

interface TriangleBaseProps extends TriangleProps {
  direction?: TriangleDirection;
}

export default function Triangle({
  direction = 'down',
  className,
  title,
}: TriangleBaseProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : 'true'}
      focusable='false'
    >
      {title && <title>{title}</title>}
      <path d={TRIANGLE_PATHS[direction]} />
    </svg>
  );
}

export const TriangleDown = (props: TriangleProps) => (
  <Triangle direction='down' {...props} />
);
export const TriangleUp = (props: TriangleProps) => (
  <Triangle direction='up' {...props} />
);
export const TriangleLeft = (props: TriangleProps) => (
  <Triangle direction='left' {...props} />
);
export const TriangleRight = (props: TriangleProps) => (
  <Triangle direction='right' {...props} />
);
