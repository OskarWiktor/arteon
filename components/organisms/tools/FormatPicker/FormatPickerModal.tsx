'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, cache } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { TriangleDown } from '@/components/atoms/icons/Triangle';
import { cn } from '@/lib/clsx';
import { getToolHref } from '@/lib/i18n/toolRegistry';
import { getUnitConverterI18n } from '@/lib/i18n/unitConverter';
import { useLocale } from '@/lib/LocaleContext';
import {
  FORMAT_CATEGORIES,
  FORMAT_DISPLAY_LABELS,
  getAllRoutes,
  getConversionHref,
  type FormatCategory,
  type UniversalFormat,
} from '@/lib/tools/conversionRoutes';
import { getUnitLabel, getCategoryLabel } from '@/lib/tools/unitLabels';
import { UNIT_CONVERSIONS } from '@/lib/tools/units/conversions';
import {
  flexCenterBetweenClasses,
  flexCenterClasses,
  focusRingClasses,
  normalIconSizeClasses,
  smallIconSizeClasses,
} from '@/lib/uiClasses';
import type { Locale } from '@/types/locale';

type PickerSide = 'source' | 'target';

interface UnitOption {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

type UnitField = {
  readonly label?: string;
  readonly labelKey?: string;
  readonly suffix: string;
};

const unitId = (field: UnitField): string =>
  field.suffix || field.labelKey || field.label || '';
const unitDisplayLabel = (field: UnitField, locale: Locale): string => {
  if (field.labelKey) return getUnitLabel(field.labelKey, locale);
  return field.suffix || field.label || '';
};

function hasMatchingUnitPair(
  side: 'source' | 'target',
  id: string,
  otherSideId: string,
  locale: Locale,
): boolean {
  return UNIT_CONVERSIONS.some(c => {
    const cField = side === 'source' ? c.sourceField : c.targetField;
    const cOther = side === 'source' ? c.targetField : c.sourceField;
    return (
      unitId(cField) === id &&
      unitId(cOther) === otherSideId &&
      getToolHref(c.toolKey, locale) !== '#'
    );
  });
}

const getUnitOptions = cache(
  (
    side: 'source' | 'target',
    locale: Locale,
    currentToolKey?: string,
  ): UnitOption[] => {
    const seen = new Set<string>();
    const items: UnitOption[] = [];

    if (!UNIT_CONVERSIONS.length) return items;

    const current = currentToolKey
      ? UNIT_CONVERSIONS.find(c => c.toolKey === currentToolKey)
      : undefined;
    let otherSideId: string | undefined;
    if (current) {
      const matchingField =
        side === 'source' ? current.targetField : current.sourceField;
      otherSideId = unitId(matchingField);
    }

    for (const conv of UNIT_CONVERSIONS) {
      const href = getToolHref(conv.toolKey, locale);
      if (href === '#') continue;

      const field = side === 'source' ? conv.sourceField : conv.targetField;
      const id = unitId(field);

      if (seen.has(id)) continue;
      seen.add(id);

      const isPaired =
        !otherSideId || hasMatchingUnitPair(side, id, otherSideId, locale);
      items.push({
        id,
        label: unitDisplayLabel(field, locale),
        href: isPaired ? href : '',
      });
    }

    return items;
  },
);

interface FormatPickerModalProps {
  side: PickerSide;
  currentSource?: UniversalFormat;
  currentTarget?: UniversalFormat;
  hasFiles?: boolean;
  confirmMessage?: string;
  unitToolKey?: string;
}

// ---------------------------------------------------------------------------
// Component
/**
 * Render a modal picker for choosing a format or unit for the given side.
 *
 * Renders a trigger button and a modal dialog that lets the user pick a target/source format or, when `unitToolKey` is provided, a unit. The modal handles keyboard and outside-click dismissal, body scroll locking while open, and optional confirmation when navigating away with unsaved files.
 *
 * @param side - Which side the picker controls: `'source'` or `'target'`
 * @param currentSource - Currently selected source format key (if any)
 * @param currentTarget - Currently selected target format key (if any)
 * @param hasFiles - When true, navigation actions will prompt the user for confirmation if `confirmMessage` is provided
 * @param confirmMessage - Confirmation message shown to the user when `hasFiles` is true and a navigation action is initiated
 * @param unitToolKey - When provided, switch the picker to unit-selection mode using the specified tool key
 * @returns The FormatPickerModal React element
 */

export default function FormatPickerModal({
  side,
  currentSource,
  currentTarget,
  hasFiles,
  confirmMessage,
  unitToolKey,
}: FormatPickerModalProps) {
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState<FormatCategory>('images');
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLButtonElement>(null);

  const currentFormat = side === 'source' ? currentSource : currentTarget;

  const { currentUnitId, unitTriggerLabel } = (() => {
    if (!unitToolKey) return { currentUnitId: null, unitTriggerLabel: null };
    const conv = UNIT_CONVERSIONS.find(c => c.toolKey === unitToolKey);
    if (!conv) return { currentUnitId: null, unitTriggerLabel: null };
    const field = side === 'source' ? conv.sourceField : conv.targetField;
    return {
      currentUnitId: unitId(field),
      unitTriggerLabel: unitDisplayLabel(field, locale),
    };
  })();

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  // Close on click outside (desktop submenu)
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        overlayRef.current !== e.target
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Lock body scroll when modal is open, compensate scrollbar width to prevent layout shift
  useEffect(() => {
    if (!open) return;
    const scrollbarWidth = innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [open]);

  const handleToggle = () => {
    setOpen(v => !v);
    if (unitToolKey) {
      setActiveCategory('units');
    } else if (currentFormat) {
      const cat = FORMAT_CATEGORIES.find(c =>
        c.formats.includes(currentFormat),
      );
      if (cat) setActiveCategory(cat.key);
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string | null,
  ) => {
    if (!href) {
      e.preventDefault();
      return;
    }
    if (hasFiles && confirmMessage) {
      if (!window.confirm(confirmMessage)) {
        e.preventDefault();
        return;
      }
    }
    setOpen(false);
  };

  const activeCategoryDef = FORMAT_CATEGORIES.find(
    c => c.key === activeCategory,
  );
  const formats = activeCategoryDef?.formats ?? [];

  return (
    <div className='relative inline-block'>
      <button
        ref={triggerRef}
        type='button'
        onClick={handleToggle}
        className={cn(
          'inline-flex items-center gap-1.5 border border-neutral-300 bg-white px-3 py-2 text-xs font-medium transition-colors hover:border-light',
          focusRingClasses,
        )}
        aria-expanded={open}
        aria-haspopup='dialog'
      >
        {unitTriggerLabel ??
          (currentFormat
            ? FORMAT_DISPLAY_LABELS[currentFormat as UniversalFormat]
            : '')}
        <TriangleDown
          className={cn('transition-transform', smallIconSizeClasses, {
            'rotate-180': open,
          })}
        />
      </button>

      {open && (
        <>
          <button
            ref={overlayRef}
            type='button'
            aria-hidden='true'
            tabIndex={-1}
            className='fixed inset-0 z-50 bg-black/40 md:hidden'
            onClick={() => setOpen(false)}
          />

          <div
            ref={panelRef}
            className='fixed inset-x-4 top-1/2 z-50 max-h-[80vh] -translate-y-1/2 overflow-hidden border border-neutral-200 bg-white shadow-2xl md:absolute md:inset-x-auto md:top-full md:left-1/2 md:mt-2 md:max-h-105 md:w-130 md:-translate-x-1/2 md:translate-y-0 md:shadow-lg'
            role='dialog'
            aria-modal='true'
          >
            {/* Header (mobile) */}
            <div
              className={cn(
                'border-b border-neutral-100 px-4 py-3 md:hidden',
                flexCenterBetweenClasses,
              )}
            >
              <span className='text-sm font-semibold'>
                {side === 'source'
                  ? getUnitConverterI18n(locale).pickerSource
                  : getUnitConverterI18n(locale).pickerTarget}
              </span>
              <button
                type='button'
                onClick={() => setOpen(false)}
                className='p-1 hover:bg-neutral-100'
              >
                <RiCloseLine className={normalIconSizeClasses} />
              </button>
            </div>

            <div className='flex h-full max-h-[calc(80vh-52px)] md:max-h-105'>
              {/* Category sidebar */}
              <nav className='flex w-28 shrink-0 flex-col gap-1 border-r border-neutral-100 bg-neutral-50/50 p-2 md:w-32'>
                {FORMAT_CATEGORIES.map(cat => (
                  <button
                    key={cat.key}
                    type='button'
                    onClick={() => setActiveCategory(cat.key)}
                    className={cn(
                      'px-3 py-2.5 text-left text-xs font-medium transition-colors',
                      {
                        'bg-primary/10 text-primary':
                          activeCategory === cat.key,
                        'text-mid hover:bg-neutral-100':
                          activeCategory !== cat.key,
                      },
                    )}
                  >
                    {getCategoryLabel(cat.key, locale)}
                  </button>
                ))}
              </nav>

              {/* Content area */}
              <div className='flex-1 overflow-y-auto p-3'>
                {activeCategory === 'units' ? (
                  <div className='grid grid-cols-3 gap-1.5'>
                    {getUnitOptions(side, locale, unitToolKey).map(item => {
                      if (currentUnitId === item.id) {
                        return (
                          <span
                            key={item.id}
                            className={cn(
                              'bg-primary px-2 py-2.5 text-center text-xs font-semibold text-white',
                              flexCenterClasses,
                            )}
                            aria-current='true'
                          >
                            {item.label}
                          </span>
                        );
                      }
                      if (!item.href) {
                        return (
                          <span
                            key={item.id}
                            className={cn(
                              'cursor-not-allowed border border-neutral-100 bg-neutral-50 px-2 py-2.5 text-center text-xs font-medium text-neutral-300',
                              flexCenterClasses,
                            )}
                            aria-disabled='true'
                          >
                            {item.label}
                          </span>
                        );
                      }
                      return (
                        <Link
                          key={item.id}
                          href={item.href}
                          scroll={false}
                          onClick={e => handleLinkClick(e, item.href)}
                          className={cn(
                            'border border-primary/20 bg-white px-2 py-2.5 text-center text-xs font-semibold transition-colors hover:border-primary/40 hover:bg-primary/5',
                            flexCenterClasses,
                          )}
                          prefetch={false}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className='grid grid-cols-3 gap-2'>
                    {formats.map(fmt => {
                      const isCurrent =
                        !!currentFormat && fmt === currentFormat;
                      const newSource = side === 'source' ? fmt : currentSource;
                      const newTarget = side === 'target' ? fmt : currentTarget;

                      let href: string | null = null;
                      if (newSource && newTarget && newSource !== newTarget) {
                        href = getConversionHref(newSource, newTarget, locale);
                      } else if (newSource && !newTarget) {
                        href =
                          getAllRoutes(locale).find(r => r.source === newSource)
                            ?.href ?? null;
                      } else if (!newSource && newTarget) {
                        href =
                          getAllRoutes(locale).find(r => r.target === newTarget)
                            ?.href ?? null;
                      }

                      const isAvailable = !!href;
                      const isDisabled = !isAvailable && !isCurrent;

                      if (isCurrent) {
                        return (
                          <span
                            key={fmt}
                            className={cn(
                              'bg-primary px-2 py-2.5 text-center text-xs font-semibold text-white',
                              flexCenterClasses,
                            )}
                            aria-current='true'
                          >
                            {FORMAT_DISPLAY_LABELS[fmt]}
                          </span>
                        );
                      }

                      if (isDisabled) {
                        return (
                          <span
                            key={fmt}
                            className={cn(
                              'cursor-not-allowed border border-neutral-100 bg-neutral-50 px-2 py-2.5 text-center text-xs font-medium text-neutral-300',
                              flexCenterClasses,
                            )}
                            aria-disabled='true'
                          >
                            {FORMAT_DISPLAY_LABELS[fmt]}
                          </span>
                        );
                      }

                      return (
                        <Link
                          key={fmt}
                          href={href!}
                          scroll={false}
                          onClick={e => handleLinkClick(e, href)}
                          className={cn(
                            'border border-primary/20 bg-white px-2 py-2.5 text-center text-xs font-semibold transition-colors hover:border-primary/40 hover:bg-primary/5',
                            flexCenterClasses,
                          )}
                          prefetch={false}
                        >
                          {FORMAT_DISPLAY_LABELS[fmt]}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
