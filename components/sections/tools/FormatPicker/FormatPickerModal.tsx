'use client';

import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState, cache } from 'react';
import { RiArrowDownSLine, RiCloseLine } from 'react-icons/ri';

import { useLocale } from '@/lib/LocaleContext';
import { getToolHref } from '@/lib/i18n/tool-registry';
import type { Locale } from '@/types/locale';
import { UNIT_CONVERSIONS } from '@/components/sections/tools/UnitConverter/conversions';
import { getUnitLabel, getCategoryLabel } from '@/utils/locale-utils';

import { FORMAT_CATEGORIES, FORMAT_DISPLAY_LABELS, getAllRoutes, getConversionHref, type FormatCategory, type UniversalFormat } from './allConversionRoutes';

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

const unitId = (field: UnitField): string => field.suffix || field.labelKey || field.label || '';
const unitDisplayLabel = (field: UnitField, locale: Locale): string => {
  if (field.labelKey) return getUnitLabel(field.labelKey, locale);
  return field.suffix || field.label || '';
};

const PICKER_HEADER: Record<PickerSide, Record<string, string>> = {
  source: {
    pl: 'Konwertuj z',
    en: 'Convert from',
    de: 'Konvertieren von',
    es: 'Convertir de',
    fr: 'Convertir de',
    pt: 'Converter de',
    it: 'Converti da',
    ro: 'Convertește din',
    nl: 'Converteer van',
    hu: 'Konvertálás forrás',
    cs: 'Převést z',
    sv: 'Konvertera från',
    da: 'Konvertér fra',
    no: 'Konverter fra',
    fi: 'Muunna muodosta',
    el: 'Μετατροπή από',
  },
  target: {
    pl: 'Konwertuj na',
    en: 'Convert to',
    de: 'Konvertieren nach',
    es: 'Convertir a',
    fr: 'Convertir vers',
    pt: 'Converter para',
    it: 'Converti in',
    ro: 'Convertește în',
    nl: 'Converteer naar',
    hu: 'Konvertálás cél',
    cs: 'Převést na',
    sv: 'Konvertera till',
    da: 'Konvertér til',
    no: 'Konverter til',
    fi: 'Muunna muotoon',
    el: 'Μετατροπή σε',
  },
};

const getUnitOptions = cache((side: 'source' | 'target', locale: Locale, currentToolKey?: string): UnitOption[] => {
  const seen = new Set<string>();
  const items: UnitOption[] = [];

  if (!UNIT_CONVERSIONS.length) return items;

  const current = currentToolKey ? UNIT_CONVERSIONS.find((c) => c.toolKey === currentToolKey) : undefined;
  const otherSideId = current ? unitId(side === 'source' ? current.targetField : current.sourceField) : undefined;

  for (const conv of UNIT_CONVERSIONS) {
    const href = getToolHref(conv.toolKey, locale);
    if (href === '#') continue;

    const field = side === 'source' ? conv.sourceField : conv.targetField;
    const id = unitId(field);

    if (seen.has(id)) continue;
    seen.add(id);

    if (otherSideId) {
      const hasPair = UNIT_CONVERSIONS.some((c) => {
        const cField = side === 'source' ? c.sourceField : c.targetField;
        const cOther = side === 'source' ? c.targetField : c.sourceField;
        return unitId(cField) === id && unitId(cOther) === otherSideId && getToolHref(c.toolKey, locale) !== '#';
      });
      items.push({ id, label: unitDisplayLabel(field, locale), href: hasPair ? href : '' });
    } else {
      items.push({ id, label: unitDisplayLabel(field, locale), href });
    }
  }

  return items;
});

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
// ---------------------------------------------------------------------------

export default function FormatPickerModal({ side, currentSource, currentTarget, hasFiles, confirmMessage, unitToolKey }: FormatPickerModalProps) {
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<FormatCategory>('images');
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const currentFormat = side === 'source' ? currentSource : currentTarget;

  const { currentUnitId, unitTriggerLabel } = useMemo(() => {
    if (!unitToolKey) return { currentUnitId: null, unitTriggerLabel: null };
    const conv = UNIT_CONVERSIONS.find((c) => c.toolKey === unitToolKey);
    if (!conv) return { currentUnitId: null, unitTriggerLabel: null };
    const field = side === 'source' ? conv.sourceField : conv.targetField;
    return { currentUnitId: unitId(field), unitTriggerLabel: unitDisplayLabel(field, locale) };
  }, [unitToolKey, side, locale]);

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
      if (panelRef.current && !panelRef.current.contains(e.target as Node) && triggerRef.current && !triggerRef.current.contains(e.target as Node) && overlayRef.current !== e.target) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Lock body scroll when modal is open, compensate scrollbar width to prevent layout shift
  useEffect(() => {
    if (!open) return;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
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

  const handleToggle = useCallback(() => {
    setOpen((v) => !v);
    if (unitToolKey) {
      setActiveCategory('units');
    } else if (currentFormat) {
      const cat = FORMAT_CATEGORIES.find((c) => c.formats.includes(currentFormat));
      if (cat) setActiveCategory(cat.key);
    }
  }, [currentFormat, unitToolKey]);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string | null) => {
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
    },
    [hasFiles, confirmMessage],
  );

  // Build the formats grid for the active category
  const activeCategoryDef = FORMAT_CATEGORIES.find((c) => c.key === activeCategory);
  const formats = activeCategoryDef?.formats ?? [];

  return (
    <div className="relative inline-block">
      {/* Trigger button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={handleToggle}
        className="focus:border-primary focus:ring-primary inline-flex items-center gap-1.5 rounded border border-neutral-300 bg-white px-3 py-2 text-xs font-medium transition-colors hover:border-neutral-400 focus:ring-1 focus:outline-none"
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        {unitTriggerLabel ?? (currentFormat ? FORMAT_DISPLAY_LABELS[currentFormat as UniversalFormat] : '')}
        <RiArrowDownSLine className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* Panel - desktop: absolute submenu, mobile: fixed modal */}
      {open && (
        <>
          {/* Mobile overlay */}
          <div ref={overlayRef} className="fixed inset-0 z-50 bg-black/40 md:hidden" onClick={() => setOpen(false)} />

          <div
            ref={panelRef}
            className="fixed inset-x-4 top-1/2 z-50 max-h-[80vh] -translate-y-1/2 overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-2xl md:absolute md:inset-x-auto md:top-full md:left-1/2 md:mt-2 md:max-h-[420px] md:w-[520px] md:-translate-x-1/2 md:-translate-y-0 md:rounded-lg md:shadow-lg"
            role="dialog"
            aria-modal="true"
          >
            {/* Header (mobile) */}
            <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3 md:hidden">
              <span className="text-sm font-semibold">{PICKER_HEADER[side][locale] ?? PICKER_HEADER[side].en}</span>
              <button type="button" onClick={() => setOpen(false)} className="rounded-md p-1 hover:bg-neutral-100">
                <RiCloseLine className="h-5 w-5" />
              </button>
            </div>

            <div className="flex h-full max-h-[calc(80vh-52px)] md:max-h-[420px]">
              {/* Category sidebar */}
              <nav className="flex w-28 shrink-0 flex-col gap-1 border-r border-neutral-100 bg-neutral-50/50 p-2 md:w-32">
                {FORMAT_CATEGORIES.map((cat) => (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setActiveCategory(cat.key)}
                    className={`rounded-md px-3 py-2.5 text-left text-xs font-medium transition-colors ${activeCategory === cat.key ? 'bg-primary/10 text-primary' : 'text-mid hover:bg-neutral-100'}`}
                  >
                    {getCategoryLabel(cat.key, locale)}
                  </button>
                ))}
              </nav>

              {/* Content area */}
              <div className="flex-1 overflow-y-auto p-3">
                {activeCategory === 'units' ? (
                  <div className="grid grid-cols-3 gap-1.5">
                    {getUnitOptions(side, locale, unitToolKey).map((item) => {
                      if (currentUnitId === item.id) {
                        return (
                          <span key={item.id} className="bg-primary flex items-center justify-center rounded-md px-2 py-2.5 text-center text-xs font-semibold text-white" aria-current="true">
                            {item.label}
                          </span>
                        );
                      }
                      if (!item.href) {
                        return (
                          <span
                            key={item.id}
                            className="flex cursor-not-allowed items-center justify-center rounded-md border border-neutral-100 bg-neutral-50 px-2 py-2.5 text-center text-xs font-medium text-neutral-300"
                            aria-disabled="true"
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
                          onClick={(e) => handleLinkClick(e, item.href)}
                          className="border-primary/20 hover:bg-primary/5 hover:border-primary/40 flex items-center justify-center rounded-md border bg-white px-2 py-2.5 text-center text-xs font-semibold transition-colors"
                          prefetch={false}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-2">
                    {formats.map((fmt) => {
                      const isCurrent = !!currentFormat && fmt === currentFormat;
                      const newSource = side === 'source' ? fmt : currentSource;
                      const newTarget = side === 'target' ? fmt : currentTarget;

                      let href: string | null = null;
                      if (newSource && newTarget && newSource !== newTarget) {
                        href = getConversionHref(newSource, newTarget, locale);
                      } else if (newSource && !newTarget) {
                        href = getAllRoutes(locale).find((r) => r.source === newSource)?.href ?? null;
                      } else if (!newSource && newTarget) {
                        href = getAllRoutes(locale).find((r) => r.target === newTarget)?.href ?? null;
                      }

                      const isAvailable = !!href;
                      const isDisabled = !isAvailable && !isCurrent;

                      if (isCurrent) {
                        return (
                          <span key={fmt} className="bg-primary flex items-center justify-center rounded-md px-2 py-2.5 text-center text-xs font-semibold text-white" aria-current="true">
                            {FORMAT_DISPLAY_LABELS[fmt]}
                          </span>
                        );
                      }

                      if (isDisabled) {
                        return (
                          <span
                            key={fmt}
                            className="flex cursor-not-allowed items-center justify-center rounded-md border border-neutral-100 bg-neutral-50 px-2 py-2.5 text-center text-xs font-medium text-neutral-300"
                            aria-disabled="true"
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
                          onClick={(e) => handleLinkClick(e, href)}
                          className="border-primary/20 hover:bg-primary/5 hover:border-primary/40 flex items-center justify-center rounded-md border bg-white px-2 py-2.5 text-center text-xs font-semibold transition-colors"
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
