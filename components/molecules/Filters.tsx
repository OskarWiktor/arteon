'use client';

import Button from '@/components/atoms/buttons/Button';
import ButtonLink from '@/components/atoms/buttons/ButtonLink';
import SectionHeader from './SectionHeader';

export type FilterItem = {
  /** Display text of the filter chip. */
  label: string;
  /** Stable identifier: a category slug (link mode) or category value (toggle mode). */
  value: string;
  /**
   * Destination for this chip in `link` mode. Passed as a plain string (not a
   * builder function) so the items stay serializable across the
   * Server -> Client Component boundary.
   */
  href?: string;
  /** Optional count shown in parentheses after the label (link mode). */
  count?: number;
};

type BaseProps = {
  items: FilterItem[];
  /** Optional heading rendered above the chips. */
  title?: string;
  /** Accessible name for the chip toolbar. */
  toolbarAriaLabel: string;
  /** Label of the reset/"all" chip. Defaults to "Wszystkie". */
  allLabel?: string;
};

/**
 * `toggle`: client-side multi-select on a single page (projects). Chips are
 * buttons that add/remove a category; the "all" chip clears the selection.
 */
type ToggleProps = BaseProps & {
  mode: 'toggle';
  selected: string[];
  onToggle: (value: string) => void;
  onClear: () => void;
};

/**
 * `link`: single-select navigation to indexable category URLs (articles). Chips
 * are links; the active one is highlighted. Keeps `/edukacja/[category]` pages
 * crawlable for SEO.
 */
type LinkProps = BaseProps & {
  mode: 'link';
  /** Active category value, or `undefined` when "all" is active. */
  activeValue?: string;
  allHref: string;
};

type FiltersProps = ToggleProps | LinkProps;

/**
 * Single filter component shared by the projects and articles listings. The
 * `mode` prop switches between client-side multi-select (`toggle`) and
 * navigation to category URLs (`link`) so there is one component instead of a
 * separate one per listing.
 */
export default function Filters(props: FiltersProps) {
  const { items, title, toolbarAriaLabel, allLabel = 'Wszystkie' } = props;

  return (
    <section className='w-full'>
      {title && <SectionHeader title={title} />}

      <div
        role='toolbar'
        aria-label={toolbarAriaLabel}
        className='flex w-full flex-wrap items-center gap-2 pb-6 md:pb-8 lg:pb-10'
      >
        {props.mode === 'toggle' ? (
          <>
            <Button
              variant={props.selected.length ? 'normal' : 'accent'}
              size='small'
              onClick={props.onClear}
              ariaPressed={props.selected.length === 0}
            >
              {allLabel}
            </Button>

            {items.map(item => {
              const isSelected = props.selected.includes(item.value);
              return (
                <Button
                  key={item.value}
                  variant={isSelected ? 'accent' : 'normal'}
                  size='small'
                  onClick={() => props.onToggle(item.value)}
                  ariaPressed={isSelected}
                >
                  {item.label}
                </Button>
              );
            })}
          </>
        ) : (
          <>
            <ButtonLink
              variant={props.activeValue ? 'normal' : 'accent'}
              size='small'
              weight='medium'
              href={props.allHref}
              ariaCurrent={props.activeValue ? undefined : 'page'}
            >
              {allLabel}
            </ButtonLink>

            {items.map(item => {
              const isActive = props.activeValue === item.value;
              return (
                <ButtonLink
                  key={item.value}
                  variant={isActive ? 'accent' : 'normal'}
                  size='small'
                  weight='medium'
                  href={item.href ?? '#'}
                  ariaCurrent={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {typeof item.count === 'number' && (
                    <span className='opacity-60'>&nbsp;({item.count})</span>
                  )}
                </ButtonLink>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
}
