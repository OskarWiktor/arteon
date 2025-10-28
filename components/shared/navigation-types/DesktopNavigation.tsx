'use client';

import { JSX, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import {
  RiArrowDownSLine,
  RiCodeSSlashFill,
  RiShoppingCartLine,
  RiArticleLine,
  RiPaletteLine,
  RiFileTextLine,
  RiMegaphoneLine,
  RiSearchLine,
  RiAdvertisementLine,
  RiCameraLensLine,
  RiPriceTag3Line,
  RiBookOpenLine,
  RiShareForwardLine,
} from 'react-icons/ri';
import Wrapper from '@/components/ui/Wrapper';

type SectionItem = {
  href: string;
  title: string;
  desc?: string;
  icon?: JSX.Element;
};

type OfferSection = {
  key: 'witryny' | 'marketing' | 'grafika' | 'tresc';
  title: string;
  subtitle: string;
  items: SectionItem[];
  grid?: boolean;
  hubHref?: string;
};

export default function DesktopNavigation() {
  const pathname = usePathname();
  const [isOfferOpen, setIsOfferOpen] = useState(false);

  const offerLiRef = useRef<HTMLLIElement>(null);
  const offerBtnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const buttonId = 'offer-button';
  const menuId = 'offer-submenu';

  useEffect(() => {
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!offerLiRef.current) return;
      if (!offerLiRef.current.contains(e.target as Node)) setIsOfferOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOfferOpen(false);
        offerBtnRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => setIsOfferOpen(false), [pathname]);

  const navigationItems = [
    { href: '/realizacje', label: 'Realizacje', exact: true },
    { href: '/uslugi', label: 'Usługi' },
    { href: '/o-nas', label: 'O nas' },
    { href: '/edukacja', label: 'Edukacja' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  const offerSections: OfferSection[] = [
    {
      key: 'witryny',
      title: 'Witryny',
      subtitle: 'Strony, sklepy, blogi',
      items: [
        {
          href: '/uslugi/strony-internetowe',
          icon: <RiCodeSSlashFill className="h-6 w-6 text-slate-500" aria-hidden="true" />,
          title: 'Strony internetowe',
          desc: 'WCAG 2.2 AA, projekt na miarę',
        },
        {
          href: '/uslugi/sklepy-internetowe',
          icon: <RiShoppingCartLine className="h-6 w-6 text-slate-500" aria-hidden="true" />,
          title: 'Sklepy internetowe',
          desc: 'Płatności, integracje, automatyzacje',
        },
        {
          href: '/uslugi/blogi-internetowe',
          icon: <RiArticleLine className="h-6 w-6 text-slate-500" aria-hidden="true" />,
          title: 'Blogi internetowe',
          desc: 'Architektura treści i CMS',
        },
      ],
    },
    {
      key: 'marketing',
      title: 'Marketing',
      subtitle: 'Widoczność i wzrost',
      hubHref: '/uslugi/marketing',
      items: [
        {
          href: '/uslugi/marketing/audyt-seo',
          icon: <RiSearchLine className="h-6 w-6 text-slate-500" aria-hidden="true" />,
          title: 'Audyt SEO',
          desc: 'Diagnostyka i priorytety działań',
        },
        {
          href: '/uslugi/marketing/optymalizacja-seo',
          icon: <RiPriceTag3Line className="h-6 w-6 text-slate-500" aria-hidden="true" />,
          title: 'Optymalizacja SEO',
          desc: 'On-page, technikalia, treści',
        },
        {
          href: '/uslugi/marketing/pozycjonowanie-stron',
          icon: <RiMegaphoneLine className="h-6 w-6 text-slate-500" aria-hidden="true" />,
          title: 'Pozycjonowanie stron',
          desc: 'Strategia, linki, wzrost fraz',
        },
      ],
    },
    {
      key: 'grafika',
      title: 'Grafika',
      subtitle: 'Tożsamość i materiały',
      hubHref: '/uslugi/projekty-graficzne',
      grid: true,
      items: [
        { href: '/uslugi/projekty-graficzne/projekt-logo', title: 'Logo', icon: <RiPaletteLine className="h-5 w-5 text-slate-500" aria-hidden="true" /> },
        { href: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej', title: 'Identyfikacja wizualna', icon: <RiShareForwardLine className="h-5 w-5 text-slate-500" aria-hidden="true" /> },
        { href: '/uslugi/projekty-graficzne/projekt-wizytowki', title: 'Wizytówki', icon: <RiPriceTag3Line className="h-5 w-5 text-slate-500" aria-hidden="true" /> },
        { href: '/uslugi/projekty-graficzne/projekt-papieru-firmowego', title: 'Papier firmowy', icon: <RiFileTextLine className="h-5 w-5 text-slate-500" aria-hidden="true" /> },
        { href: '/uslugi/projekty-graficzne/projekt-teczki-ofertowej', title: 'Teczki ofertowe', icon: <RiBookOpenLine className="h-5 w-5 text-slate-500" aria-hidden="true" /> },
        { href: '/uslugi/projekty-graficzne/projekt-ulotki', title: 'Ulotki', icon: <RiAdvertisementLine className="h-5 w-5 text-slate-500" aria-hidden="true" /> },
        { href: '/uslugi/projekty-graficzne/projekt-katalogu', title: 'Katalogi', icon: <RiBookOpenLine className="h-5 w-5 text-slate-500" aria-hidden="true" /> },
        { href: '/uslugi/projekty-graficzne/projekt-odziezy-firmowej', title: 'Odzież firmowa', icon: <RiCameraLensLine className="h-5 w-5 text-slate-500" aria-hidden="true" /> },
        { href: '/uslugi/projekty-graficzne/projekt-graficzny-strony', title: 'Layout strony', icon: <RiArticleLine className="h-5 w-5 text-slate-500" aria-hidden="true" /> },
      ],
    },
    {
      key: 'tresc',
      title: 'Tworzenie treści',
      subtitle: 'Sprzedaż i SEO',
      hubHref: '/uslugi/tworzenie-tresci',
      items: [
        {
          href: '/uslugi/tworzenie-tresci',
          icon: <RiFileTextLine className="h-6 w-6 text-slate-500" aria-hidden="true" />,
          title: 'Tworzenie treści',
          desc: 'Teksty na strony, blog, oferty',
        },
      ],
    },
  ];

  const focusMenuItem = (idx: number) => {
    const items = menuRef.current?.querySelectorAll<HTMLAnchorElement>('a[href]');
    if (!items || items.length === 0) return;
    const i = Math.max(0, Math.min(idx, items.length - 1));
    items[i].focus();
  };

  const handleOfferButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isOfferOpen) setIsOfferOpen(true);
      requestAnimationFrame(() => focusMenuItem(0));
    }
  };

  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const items = menuRef.current?.querySelectorAll<HTMLAnchorElement>('a[href]');
    if (!items || items.length === 0) return;
    const currentIndex = Array.from(items).findIndex((el) => el === document.activeElement);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusMenuItem(currentIndex < 0 ? 0 : currentIndex + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusMenuItem(currentIndex <= 0 ? 0 : currentIndex - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      focusMenuItem(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      focusMenuItem(items.length - 1);
    }
  };

  return (
    <div className="hidden md:flex">
      <LayoutGroup>
        <ul className="relative flex gap-4 lg:gap-6">
          {navigationItems.map(({ href, label, exact }) => {
            const isActivePage = exact ? pathname === href : pathname.startsWith(href);

            if (label === 'Usługi') {
              return (
                <li ref={offerLiRef} className="group relative flex" key={label}>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setIsOfferOpen((p) => !p)}
                    onKeyDown={handleOfferButtonKeyDown}
                    aria-haspopup="menu"
                    aria-expanded={isOfferOpen}
                    aria-controls={menuId}
                    ref={offerBtnRef}
                    className="mr-[-10px] flex cursor-pointer items-center gap-1 rounded text-base font-medium text-[#2B2B2B] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    Usługi
                    <motion.span animate={{ rotate: isOfferOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <RiArrowDownSLine className="h-4 w-4" aria-hidden="true" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOfferOpen && (
                      <motion.div
                        id={menuId}
                        role="menu"
                        aria-labelledby={buttonId}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-full left-0 z-50 w-full bg-white/95 p-4 shadow-xl backdrop-blur-sm"
                      >
                        <Wrapper>
                          <div ref={menuRef} onKeyDown={handleMenuKeyDown} className="hidden gap-6 lg:grid" style={{ gridTemplateColumns: '1fr 1fr 2fr 1fr' }}>
                            {offerSections.map((section) => (
                              <div key={section.key} className="rounded-xl border border-slate-200 p-4">
                                <div className="mb-3">
                                  {section.hubHref ? (
                                    <Link
                                      href={section.hubHref}
                                      className="inline-block rounded px-1 py-0.5 text-sm font-semibold tracking-wide text-slate-900 ring-offset-2 ring-offset-white transition outline-none hover:bg-white focus-visible:ring-2 focus-visible:ring-slate-500"
                                    >
                                      {section.title}
                                    </Link>
                                  ) : (
                                    <div className="text-sm font-semibold tracking-wide text-slate-900">{section.title}</div>
                                  )}
                                  <div className="text-xs text-slate-500">{section.subtitle}</div>
                                </div>

                                {section.key !== 'grafika' && (
                                  <div className="flex flex-col gap-2">
                                    {section.items.map((item) => (
                                      <Link
                                        key={item.href + item.title}
                                        href={item.href}
                                        className="group/link flex gap-3 rounded-lg px-3 py-2 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                                      >
                                        {item.icon && <span className="mt-0.5 shrink-0">{item.icon}</span>}
                                        <span>
                                          <span className="block text-sm font-medium text-[#2B2B2B]">{item.title}</span>
                                          {item.desc && <span className="block text-xs text-slate-500">{item.desc}</span>}
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                )}

                                {section.key === 'grafika' && (
                                  <div className="grid grid-cols-2 gap-2">
                                    {section.items.map((item) => (
                                      <Link
                                        key={item.href + item.title}
                                        href={item.href}
                                        className="group/link flex items-start gap-3 rounded-lg px-3 py-2 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                                      >
                                        {item.icon ? <span className="mt-0.5 shrink-0">{item.icon}</span> : <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-slate-300" />}
                                        <span>
                                          <span className="block text-sm font-medium text-[#2B2B2B]">{item.title}</span>
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>

                          <div className="grid gap-6 md:grid-cols-2 lg:hidden">
                            {offerSections.map((section) => (
                              <div key={section.key} className="rounded-xl border border-slate-200 p-4">
                                <div className="mb-3">
                                  {section.hubHref ? (
                                    <Link
                                      href={section.hubHref}
                                      className="inline-block rounded px-1 py-0.5 text-sm font-semibold tracking-wide text-slate-900 ring-offset-2 ring-offset-white transition outline-none hover:bg-white focus-visible:ring-2 focus-visible:ring-slate-500"
                                    >
                                      {section.title}
                                    </Link>
                                  ) : (
                                    <div className="text-sm font-semibold tracking-wide text-slate-900">{section.title}</div>
                                  )}
                                  <div className="text-xs text-slate-500">{section.subtitle}</div>
                                </div>

                                {section.key !== 'grafika' && (
                                  <div className="flex flex-col gap-2">
                                    {section.items.map((item) => (
                                      <Link
                                        key={item.href + item.title}
                                        href={item.href}
                                        className="group/link flex gap-3 rounded-lg px-3 py-2 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                                      >
                                        {item.icon && <span className="mt-0.5 shrink-0">{item.icon}</span>}
                                        <span>
                                          <span className="block text-sm font-medium text-[#2B2B2B]">{item.title}</span>
                                          {item.desc && <span className="block text-xs text-slate-500">{item.desc}</span>}
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                )}

                                {section.key === 'grafika' && (
                                  <div className="grid grid-cols-2 gap-2">
                                    {section.items.map((item) => (
                                      <Link
                                        key={item.href + item.title}
                                        href={item.href}
                                        className="group/link flex items-start gap-3 rounded-lg px-3 py-2 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                                      >
                                        {item.icon ? <span className="mt-0.5 shrink-0">{item.icon}</span> : <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-slate-300" />}
                                        <span>
                                          <span className="block text-sm font-medium text-[#2B2B2B]">{item.title}</span>
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </Wrapper>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            }

            return (
              <li key={label} className="relative">
                <Link
                  href={href}
                  aria-current={isActivePage ? 'page' : undefined}
                  className={`hover-underline rounded text-base font-medium text-[#2B2B2B] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                    isActivePage ? 'font-semibold text-[#080808]' : ''
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </LayoutGroup>
    </div>
  );
}
