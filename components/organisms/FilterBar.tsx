'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  RiCloseLine,
  RiCheckLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';
import { useDialogFocus } from '@/hooks/useDialogFocus';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useIsMounted } from '@/hooks/useIsMounted';
import { cn } from '@/lib/clsx';
import {
  flexCenterBetweenClasses,
  modalBackdropClasses,
  modalContentClasses,
  normalIconSizeClasses,
  smallIconSizeClasses,
} from '@/lib/uiClasses';
import Backdrop from '../atoms/Backdrop';
import Button from '../atoms/buttons/Button';
import ButtonLink from '../atoms/buttons/ButtonLink';

type Cat = { label: string; slug: string; count: number };

const COLLAPSED_HEIGHT = 48;

export default function FilterBar({
  cats,
  active,
}: {
  cats: Cat[];
  active?: string;
}) {
  const pathname = usePathname();
  const isRoot = pathname === '/edukacja';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const mounted = useIsMounted();
  const [needsExpand, setNeedsExpand] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (navRef.current) {
        const scrollHeight = navRef.current.scrollHeight;
        setNeedsExpand(scrollHeight > COLLAPSED_HEIGHT + 16);
      }
    };
    checkOverflow();
    addEventListener('resize', checkOverflow);
    return () => removeEventListener('resize', checkOverflow);
  }, [cats]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleExpand = () => setIsExpanded(prev => !prev);

  useEscapeKey(closeModal, isModalOpen);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const activeLabel = active ? cats.find(c => c.slug === active)?.label : null;
  const mobileButtonLabel = activeLabel || 'Wszystkie';

  return (
    <>
      <h2>Filtry artykułów</h2>

      <div className='py-4 md:hidden'>
        <Button
          type='button'
          onClick={openModal}
          aria-haspopup='dialog'
          aria-expanded={isModalOpen}
        >
          <span>{mobileButtonLabel}</span>
          <span className='text-light'>({cats.length + 1})</span>
        </Button>
      </div>

      <div className='hidden py-2 md:block md:py-4 lg:py-6'>
        <div className='flex flex-wrap items-start gap-2'>
          <nav
            ref={navRef}
            aria-label='Kategorie artykułów'
            className='flex flex-1 flex-wrap gap-2 overflow-hidden transition-[max-height] duration-200 ease-out'
            style={{
              maxHeight: isExpanded ? '500px' : `${COLLAPSED_HEIGHT}px`,
            }}
          >
            <ButtonLink
              variant={isRoot ? 'accent' : 'normal'}
              href='/edukacja'
              aria-current={isRoot ? 'page' : undefined}
              size='small'
            >
              Wszystkie
            </ButtonLink>

            {cats.map(c => {
              const isActive = active === c.slug;
              return (
                <ButtonLink
                  key={c.slug}
                  variant={isActive ? 'accent' : 'normal'}
                  href={`/edukacja/${c.slug}`}
                  aria-current={isActive ? 'page' : undefined}
                  size='small'
                >
                  {c.label} <span className='opacity-60'>({c.count})</span>
                </ButtonLink>
              );
            })}
          </nav>

          {needsExpand && (
            <button
              type='button'
              onClick={toggleExpand}
              className='inline-flex shrink-0 items-center gap-1 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? 'Mniej filtrów' : 'Więcej filtrów'}</span>
              {isExpanded ? (
                <RiArrowUpSLine className={smallIconSizeClasses} />
              ) : (
                <RiArrowDownSLine className={smallIconSizeClasses} />
              )}
            </button>
          )}
        </div>
      </div>

      {mounted &&
        createPortal(
          <FilterModal
            isOpen={isModalOpen}
            onClose={closeModal}
            cats={cats}
            active={active}
            isRoot={isRoot}
          />,
          document.body,
        )}
    </>
  );
}

type FilterModalProps = {
  isOpen: boolean;
  onClose: () => void;
  cats: Cat[];
  active?: string;
  isRoot: boolean;
};

/**
 * Render a modal dialog that lists categories and allows the user to pick one.
 *
 * The modal displays an "All" item plus the provided categories, highlights the active category,
 * and closes when a category is selected, the backdrop is clicked, or the close button is pressed.
 * While open, the list supports ArrowUp/ArrowDown keyboard navigation and manages focus to the
 * currently focused list item.
 *
 * @param isOpen - Whether the modal is currently visible
 * @param onClose - Callback invoked to close the modal
 * @param cats - Array of category objects rendered as selectable items
 * @param active - Slug of the currently active category (used to determine the active item)
 * @param isRoot - True when the "All" item should be considered active
 */
function FilterModal({
  isOpen,
  onClose,
  cats,
  active,
  isRoot,
}: FilterModalProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useDialogFocus(dialogRef, isOpen);

  useEffect(() => {
    if (isOpen) {
      setActiveIndex(-1);
      setTimeout(() => {
        listRef.current?.querySelector('a')?.focus();
      }, 100);
    }
  }, [isOpen]);

  const allItems = [
    { label: 'Wszystkie', slug: '', count: 0, isAll: true },
    ...cats.map(c => ({ ...c, isAll: false })),
  ];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev < allItems.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev > 0 ? prev - 1 : allItems.length - 1));
    }
  };

  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const el = listRef.current.querySelector(
        `[data-index="${activeIndex}"]`,
      ) as HTMLElement;
      el?.focus();
    }
  }, [activeIndex]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-100 flex items-start justify-center px-4 pt-[10vh]'>
      <Backdrop onClose={onClose} className={modalBackdropClasses} />
      {/* Dialog obsługuje klawiaturę (Escape + strzałki do nawigacji po
          kategoriach) — to zamierzone i dostępne; reguła daje tu false-positive
          dla roli "dialog". */}
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <div
        ref={dialogRef}
        role='dialog'
        aria-modal='true'
        aria-label='Wybierz kategorię'
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        className={cn(
          'relative w-full max-w-lg overflow-hidden rounded-lg bg-white shadow-lg',
          modalContentClasses,
        )}
      >
        <div
          className={cn(
            'border-b border-neutral-200 px-4 py-3',
            flexCenterBetweenClasses,
          )}
        >
          <h3 className='text-base font-semibold'>Wybierz kategorię</h3>
          <button
            type='button'
            onClick={onClose}
            className='rounded-lg p-1.5 text-primary hover:bg-primary-light'
            aria-label='Zamknij'
          >
            <RiCloseLine className={normalIconSizeClasses} />
          </button>
        </div>

        <div
          ref={listRef}
          className='max-h-[60vh] overflow-y-auto py-2'
          role='listbox'
          aria-label='Kategorie artykułów'
        >
          {allItems.map((item, index) => {
            const isActive = item.isAll ? isRoot : active === item.slug;
            const href = item.isAll ? '/edukacja' : `/edukacja/${item.slug}`;

            return (
              <Link
                key={item.slug || 'all'}
                href={href}
                prefetch={false}
                data-index={index}
                onClick={onClose}
                role='option'
                aria-selected={isActive}
                className={cn(
                  'flex w-full items-center justify-between px-4 py-3 text-left transition',
                  {
                    'bg-primary-light': isActive,
                    'hover:bg-neutral-50': !isActive,
                  },
                )}
              >
                <span className='flex items-center gap-2'>
                  <span className='font-medium'>{item.label}</span>
                  {!item.isAll && (
                    <span className='text-sm text-light'>({item.count})</span>
                  )}
                </span>
                {isActive && (
                  <RiCheckLine
                    className={cn('text-primary', normalIconSizeClasses)}
                    aria-hidden='true'
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
