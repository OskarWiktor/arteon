'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { RiCloseLine, RiCheckLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import Button from '@/components/atoms/buttons/Button';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useIsMounted } from '@/hooks/useIsMounted';
import ButtonLink from '../atoms/buttons/ButtonLink';

type Cat = { label: string; slug: string; count: number };

const COLLAPSED_HEIGHT = 48;

export default function FilterBar({ cats, active }: { cats: Cat[]; active?: string }) {
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
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
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
      <h2 className='mb-4'>Filtry artykułów</h2>

      <div className='pb-6 md:hidden'>
        <button
          type='button'
          onClick={openModal}
          className='inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'
          aria-haspopup='dialog'
          aria-expanded={isModalOpen}
        >
          <span>{mobileButtonLabel}</span>
          <span className='text-light'>({cats.length + 1})</span>
        </button>
      </div>

      <div className='hidden pb-6 md:block md:pb-8 lg:pb-10'>
        <div className='flex flex-wrap items-start gap-2'>
          <nav
            ref={navRef}
            aria-label='Kategorie artykułów'
            className='flex flex-1 flex-wrap gap-2 overflow-hidden transition-[max-height] duration-200 ease-out'
            style={{ maxHeight: isExpanded ? '500px' : `${COLLAPSED_HEIGHT}px` }}
          >
            <ButtonLink
              variant={isRoot ? 'accent' : 'normal'}
              href='/edukacja'
              aria-current={isRoot ? 'page' : undefined}
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
              className='inline-flex shrink-0 items-center gap-1 rounded-lg border border-black/10 bg-white px-3 py-1.5 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? 'Mniej filtrów' : 'Więcej filtrów'}</span>
              {isExpanded ? (
                <RiArrowUpSLine className='h-4 w-4' />
              ) : (
                <RiArrowDownSLine className='h-4 w-4' />
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

function FilterModal({ isOpen, onClose, cats, active, isRoot }: FilterModalProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

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
      const el = listRef.current.querySelector(`[data-index="${activeIndex}"]`) as HTMLElement;
      el?.focus();
    }
  }, [activeIndex]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className='animate-modal-backdrop fixed inset-0 z-[100] flex items-start justify-center bg-black/40 px-4 pt-[10vh]'
      onClick={handleBackdropClick}
      role='dialog'
      aria-modal='true'
      aria-label='Wybierz kategorię'
    >
      <div
        className='animate-modal-content w-full max-w-lg overflow-hidden rounded-lg bg-white shadow-lg'
        onKeyDown={handleKeyDown}
      >
        <div className='flex items-center justify-between border-b border-neutral-200 px-4 py-3'>
          <h3 className='text-base font-semibold'>Wybierz kategorię</h3>
          <button
            type='button'
            onClick={onClose}
            className='text-primary hover:bg-primary-light rounded-full p-1.5'
            aria-label='Zamknij'
          >
            <RiCloseLine className='h-5 w-5' />
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
                className={`flex w-full items-center justify-between px-4 py-3 text-left transition ${isActive ? 'bg-primary-light' : 'hover:bg-neutral-50'}`}
              >
                <span className='flex items-center gap-2'>
                  <span className='font-medium'>{item.label}</span>
                  {!item.isAll && <span className='text-light text-sm'>({item.count})</span>}
                </span>
                {isActive && <RiCheckLine className='text-primary h-5 w-5' aria-hidden='true' />}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
