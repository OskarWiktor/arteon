'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { RiArrowDownSLine, RiCloseLine } from 'react-icons/ri';

import { useLocale } from '@/lib/LocaleContext';

import { CATEGORY_LABELS, FORMAT_CATEGORIES, FORMAT_DISPLAY_LABELS, getConversionHref, type FormatCategory, type UniversalFormat } from './allConversionRoutes';

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

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type PickerSide = 'source' | 'target';

interface FormatPickerModalProps {
  /** Which side this picker controls */
  side: PickerSide;
  /** Current source format */
  currentSource: UniversalFormat;
  /** Current target format */
  currentTarget: UniversalFormat;
  /** Whether user has unsaved work (files in queue) */
  hasFiles?: boolean;
  /** Confirmation message when navigating with files */
  confirmMessage?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function FormatPickerModal({ side, currentSource, currentTarget, hasFiles, confirmMessage }: FormatPickerModalProps) {
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<FormatCategory>('images');
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const currentFormat = side === 'source' ? currentSource : currentTarget;

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
    // Set active category to match current format
    const cat = FORMAT_CATEGORIES.find((c) => c.formats.includes(currentFormat));
    if (cat) setActiveCategory(cat.key);
  }, [currentFormat]);

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
        {FORMAT_DISPLAY_LABELS[currentFormat]}
        <RiArrowDownSLine className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* Panel — desktop: absolute submenu, mobile: fixed modal */}
      {open && (
        <>
          {/* Mobile overlay */}
          <div ref={overlayRef} className="fixed inset-0 z-50 bg-black/40 md:hidden" onClick={() => setOpen(false)} />

          <div
            ref={panelRef}
            className="fixed inset-x-4 top-1/2 z-50 max-h-[80vh] -translate-y-1/2 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl md:absolute md:inset-x-auto md:top-full md:left-1/2 md:mt-2 md:max-h-[420px] md:w-[520px] md:-translate-x-1/2 md:-translate-y-0 md:rounded-xl md:shadow-xl"
            role="dialog"
            aria-modal="true"
          >
            {/* Header (mobile) */}
            <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3 md:hidden">
              <span className="text-sm font-semibold">{PICKER_HEADER[side][locale] ?? PICKER_HEADER[side].en}</span>
              <button type="button" onClick={() => setOpen(false)} className="rounded-lg p-1 hover:bg-neutral-100">
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
                    className={`rounded-lg px-3 py-2.5 text-left text-xs font-medium transition-colors ${activeCategory === cat.key ? 'bg-primary/10 text-primary' : 'text-mid hover:bg-neutral-100'}`}
                  >
                    {CATEGORY_LABELS[cat.key][locale] ?? CATEGORY_LABELS[cat.key].en}
                  </button>
                ))}
              </nav>

              {/* Formats grid */}
              <div className="flex-1 overflow-y-auto p-3">
                <div className="grid grid-cols-3 gap-2">
                  {formats.map((fmt) => {
                    const isCurrent = fmt === currentFormat;
                    // Determine the href: for "source" picker, we keep current target; for "target" picker, we keep current source
                    const newSource = side === 'source' ? fmt : currentSource;
                    const newTarget = side === 'target' ? fmt : currentTarget;
                    const href = newSource === newTarget ? null : getConversionHref(newSource, newTarget, locale);
                    const isAvailable = !!href;
                    const isDisabled = !isAvailable && !isCurrent;

                    if (isCurrent) {
                      return (
                        <span key={fmt} className="bg-primary flex items-center justify-center rounded-lg px-2 py-2.5 text-center text-xs font-semibold text-white" aria-current="true">
                          {FORMAT_DISPLAY_LABELS[fmt]}
                        </span>
                      );
                    }

                    if (isDisabled) {
                      return (
                        <span
                          key={fmt}
                          className="flex cursor-not-allowed items-center justify-center rounded-lg border border-neutral-100 bg-neutral-50 px-2 py-2.5 text-center text-xs font-medium text-neutral-300"
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
                        className="border-primary/20 hover:bg-primary/5 hover:border-primary/40 flex items-center justify-center rounded-lg border bg-white px-2 py-2.5 text-center text-xs font-semibold transition-colors"
                        prefetch={true}
                      >
                        {FORMAT_DISPLAY_LABELS[fmt]}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
