'use client';

import { JSX, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import Wrapper from '@/components/ui/Wrapper';

const ui = {
  pl: {
    realizacje: 'Realizacje',
    uslugi: 'Usługi',
    oNas: 'O nas',
    edukacja: 'Edukacja',
    narzedzia: 'Narzędzia',
    kontakt: 'Kontakt',
    closeServicesList: 'Zamknij listę usług',
    openServicesList: 'Otwórz listę usług',
    closeToolsList: 'Zamknij listę narzędzi',
    openToolsList: 'Otwórz listę narzędzi',
    sections: {
      websites: 'Witryny',
      marketing: 'Marketing',
      graphicProjects: 'Projekty graficzne',
      contentCreation: 'Tworzenie treści',
    },
    tools: {
      images: 'Obrazy i favicony',
      meta: 'Meta i SEO',
      email: 'E-mail i komunikacja',
      colors: 'Kolory i dostępność',
    },
  },
} as const;

import {
  RiArrowDownSLine,
  RiCodeSSlashFill,
  RiShoppingCartLine,
  RiArticleLine,
  RiMegaphoneLine,
  RiSearchLine,
  RiPriceTag3Line,
  RiIdCardLine,
  RiFileList2Line,
  RiFolderOpenLine,
  RiFileTextLine,
  RiTShirt2Line,
  RiQuillPenLine,
  RiBookletLine,
  RiPantoneLine,
  RiLayoutLine,
  RiCoupon2Line,
  RiRestaurant2Line,
  RiImageEditLine,
  RiCropLine,
  RiAppsLine,
  RiMailLine,
  RiContrast2Line,
  RiPaletteLine,
} from 'react-icons/ri';

type SectionItem = {
  href: string;
  title: string;
  desc?: string;
  icon?: JSX.Element;
};

type OfferSection = {
  key: 'witryny' | 'marketing' | 'grafika' | 'tresc';
  title: string;
  items: SectionItem[];
  hubHref?: string;
};

type ToolsSection = {
  key: 'obrazy' | 'seo' | 'email' | 'kolory';
  title: string;
  items: SectionItem[];
};

export default function DesktopNavigation() {
  const t = ui.pl;
  const pathname = usePathname();
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  const offerLiRef = useRef<HTMLLIElement>(null);
  const offerBtnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toolsLiRef = useRef<HTMLLIElement>(null);
  const toolsBtnRef = useRef<HTMLButtonElement>(null);
  const toolsMenuRef = useRef<HTMLDivElement>(null);

  const buttonId = 'offer-button';
  const menuId = 'offer-submenu';

  const toolsButtonId = 'tools-button';
  const toolsMenuId = 'tools-submenu';

  useEffect(() => {
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (offerLiRef.current && !offerLiRef.current.contains(target)) setIsOfferOpen(false);
      if (toolsLiRef.current && !toolsLiRef.current.contains(target)) setIsToolsOpen(false);
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
        setIsToolsOpen(false);
        (offerBtnRef.current ?? toolsBtnRef.current)?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    setIsOfferOpen(false);
    setIsToolsOpen(false);
  }, [pathname]);

  const navigationItems = [
    { href: '/realizacje', label: t.realizacje, exact: true },
    { href: '/uslugi', label: t.uslugi },
    { href: '/o-nas', label: t.oNas },
    { href: '/edukacja', label: t.edukacja },
    { href: '/narzedzia', label: t.narzedzia },
    { href: '/kontakt', label: t.kontakt },
  ];

  const offerSections: OfferSection[] = [
    {
      key: 'witryny',
      title: t.sections.websites,
      items: [
        { href: '/uslugi/strony-internetowe', icon: <RiCodeSSlashFill className="h-6 w-6 text-slate-500" />, title: 'Strony internetowe', desc: 'WCAG 2.2 AA, projekt na miarę' },
        { href: '/uslugi/sklepy-internetowe', icon: <RiShoppingCartLine className="h-6 w-6 text-slate-500" />, title: 'Sklepy internetowe', desc: 'Płatności, integracje, automatyzacje' },
        { href: '/uslugi/blogi-internetowe', icon: <RiArticleLine className="h-6 w-6 text-slate-500" />, title: 'Blogi internetowe', desc: 'Architektura treści i CMS' },
      ],
    },
    {
      key: 'marketing',
      title: t.sections.marketing,
      hubHref: '/uslugi/marketing',
      items: [
        { href: '/uslugi/marketing/audyt-seo', icon: <RiSearchLine className="h-6 w-6 text-slate-500" />, title: 'Audyt SEO', desc: 'Diagnostyka i priorytety działań' },
        { href: '/uslugi/marketing/optymalizacja-seo', icon: <RiPriceTag3Line className="h-6 w-6 text-slate-500" />, title: 'Optymalizacja SEO', desc: 'On-page, technikalia, treści' },
        { href: '/uslugi/marketing/pozycjonowanie-stron', icon: <RiMegaphoneLine className="h-6 w-6 text-slate-500" />, title: 'Pozycjonowanie stron', desc: 'Strategia, linki, wzrost fraz' },
      ],
    },
    {
      key: 'grafika',
      title: t.sections.graphicProjects,
      hubHref: '/uslugi/projekty-graficzne',
      items: [
        { href: '/uslugi/projekty-graficzne/projekt-cennika', title: 'Cenniki', icon: <RiPriceTag3Line className="h-5 w-5 text-slate-500" /> },
        { href: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej', title: 'Identyfikacja wizualna', icon: <RiPantoneLine className="h-5 w-5 text-slate-500" /> },
        { href: '/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej', title: 'Karty lojalnościowe', icon: <RiPriceTag3Line className="h-5 w-5 text-slate-500" /> },
        { href: '/uslugi/projekty-graficzne/projekt-katalogu', title: 'Katalogi', icon: <RiBookletLine className="h-5 w-5 text-slate-500" /> },
        { href: '/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera', title: 'Kupony i vouchery', icon: <RiCoupon2Line className="h-5 w-5 text-slate-500" /> },
        { href: '/uslugi/projekty-graficzne/projekt-graficzny-strony', title: 'Projekt graficzny strony', icon: <RiLayoutLine className="h-5 w-5 text-slate-500" /> },
        { href: '/uslugi/projekty-graficzne/projekt-logo', title: 'Logo', icon: <RiQuillPenLine className="h-5 w-5 text-slate-500" /> },
        { href: '/uslugi/projekty-graficzne/projekt-menu-restauracji', title: 'Menu restauracji', icon: <RiRestaurant2Line className="h-5 w-5 text-slate-500" /> },
        { href: '/uslugi/projekty-graficzne/projekt-odziezy-firmowej', title: 'Odzież firmowa', icon: <RiTShirt2Line className="h-5 w-5 text-slate-500" /> },
        { href: '/uslugi/projekty-graficzne/projekt-papieru-firmowego', title: 'Papier firmowy', icon: <RiFileTextLine className="h-5 w-5 text-slate-500" /> },
        { href: '/uslugi/projekty-graficzne/szablony-postow-social-media', title: 'Szablony social media', icon: <RiLayoutLine className="h-5 w-5 text-slate-500" /> },
        { href: '/uslugi/projekty-graficzne/projekt-teczki-ofertowej', title: 'Teczki ofertowe', icon: <RiFolderOpenLine className="h-5 w-5 text-slate-500" /> },
        { href: '/uslugi/projekty-graficzne/projekt-ulotki', title: 'Ulotki', icon: <RiFileList2Line className="h-5 w-5 text-slate-500" /> },
        { href: '/uslugi/projekty-graficzne/projekt-wizytowki', title: 'Wizytówki', icon: <RiIdCardLine className="h-5 w-5 text-slate-500" /> },
      ],
    },
    {
      key: 'tresc',
      title: t.sections.contentCreation,
      hubHref: '/uslugi/tworzenie-tresci',
      items: [{ href: '/uslugi/tworzenie-tresci', icon: <RiFileTextLine className="h-6 w-6 text-slate-500" />, title: 'Tworzenie treści', desc: 'Teksty na strony, blog, oferty' }],
    },
  ];

  const toolsSections: ToolsSection[] = [
    {
      key: 'obrazy',
      title: t.tools.images,
      items: [
        { href: '/narzedzia/jpg-png-na-webp-bez-limitu', title: 'Konwerter JPG/PNG na WebP', icon: <RiImageEditLine className="h-5 w-5 text-slate-500" /> },
        { href: '/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia', title: 'Kadrowanie i zmiana rozmiaru', icon: <RiCropLine className="h-5 w-5 text-slate-500" /> },
        { href: '/narzedzia/darmowy-generator-favicon-ico', title: 'Generator favicon', icon: <RiAppsLine className="h-5 w-5 text-slate-500" /> },
      ],
    },
    {
      key: 'seo',
      title: t.tools.meta,
      items: [
        {
          href: '/narzedzia/licznik-dlugosci-meta-title-i-description',
          title: 'Licznik meta title i description',
          icon: <RiFileTextLine className="h-5 w-5 text-slate-500" />,
        },
      ],
    },
    {
      key: 'email',
      title: t.tools.email,
      items: [
        {
          href: '/narzedzia/darmowy-generator-stopki-mailowej',
          title: 'Generator stopki mailowej HTML',
          icon: <RiMailLine className="h-5 w-5 text-slate-500" />,
        },
      ],
    },
    {
      key: 'kolory',
      title: t.tools.colors,
      items: [
        {
          href: '/narzedzia/tester-kontrastu-kolorow-wcag',
          title: 'Tester kontrastu kolorów WCAG',
          icon: <RiContrast2Line className="h-5 w-5 text-slate-500" />,
        },
        {
          href: '/narzedzia/generator-palet-kolorow-online',
          title: 'Generator palet kolorów',
          icon: <RiPaletteLine className="h-5 w-5 text-slate-500" />,
        },
      ],
    },
  ];

  const focusMenuItem = (container: HTMLDivElement | null, idx: number) => {
    const items = container?.querySelectorAll<HTMLAnchorElement>('a[href]');
    if (!items?.length) return;
    const safeIdx = Math.max(0, Math.min(idx, items.length - 1));
    items[safeIdx].focus();
  };

  const handleOfferButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isOfferOpen) setIsOfferOpen(true);
      requestAnimationFrame(() => focusMenuItem(menuRef.current, 0));
    }
  };

  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const container = menuRef.current;
    const items = container?.querySelectorAll<HTMLAnchorElement>('a[href]');
    if (!items?.length) return;
    const currentIndex = Array.from(items).findIndex((el) => el === document.activeElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusMenuItem(container!, currentIndex < 0 ? 0 : currentIndex + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusMenuItem(container!, currentIndex <= 0 ? 0 : currentIndex - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      focusMenuItem(container!, 0);
    } else if (e.key === 'End') {
      e.preventDefault();
      focusMenuItem(container!, items.length - 1);
    }
  };

  const handleToolsButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isToolsOpen) setIsToolsOpen(true);
      requestAnimationFrame(() => focusMenuItem(toolsMenuRef.current, 0));
    }
  };

  const handleToolsMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const container = toolsMenuRef.current;
    const items = container?.querySelectorAll<HTMLAnchorElement>('a[href]');
    if (!items?.length) return;
    const currentIndex = Array.from(items).findIndex((el) => el === document.activeElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusMenuItem(container!, currentIndex < 0 ? 0 : currentIndex + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusMenuItem(container!, currentIndex <= 0 ? 0 : currentIndex - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      focusMenuItem(container!, 0);
    } else if (e.key === 'End') {
      e.preventDefault();
      focusMenuItem(container!, items.length - 1);
    }
  };

  return (
    <div className="hidden lg:flex">
      <LayoutGroup>
        <ul className="relative flex items-center gap-4 lg:gap-6">
          {navigationItems.map(({ href, label, exact }) => {
            const isActivePage = exact ? pathname === href : pathname.startsWith(href);

            // USŁUGI - link + strzałka
            if (label === t.uslugi) {
              const isActive = pathname.startsWith('/uslugi');
              return (
                <li ref={offerLiRef} className="group relative flex items-center gap-0.5" key={label}>
                  <Link
                    href="/uslugi"
                    aria-current={isActive ? 'page' : undefined}
                    className={`hover-underline rounded text-base font-medium text-[#2B2B2B] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                      isActive ? 'font-semibold text-[#080808]' : ''
                    }`}
                  >
                    {t.uslugi}
                  </Link>

                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setIsOfferOpen((p) => !p)}
                    onKeyDown={handleOfferButtonKeyDown}
                    aria-haspopup="menu"
                    aria-expanded={isOfferOpen}
                    aria-controls={menuId}
                    ref={offerBtnRef}
                    className="mr-[-14px] flex h-7 w-7 cursor-pointer items-center justify-center rounded text-[#2B2B2B] transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    aria-label={isOfferOpen ? t.closeServicesList : t.openServicesList}
                  >
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
                          <div ref={menuRef} onKeyDown={handleMenuKeyDown} className="grid gap-6" style={{ gridTemplateColumns: '1fr 1fr 2fr 1fr' }}>
                            {offerSections.map((section) => (
                              <div key={section.key} className="rounded-2xl border border-slate-200 p-4">
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
                                </div>

                                <div className={`grid ${section.key === 'grafika' ? 'grid-cols-2' : 'grid-cols-1'} gap-2`}>
                                  {section.items.map((item) => (
                                    <Link
                                      key={item.href + item.title}
                                      href={item.href}
                                      className="group/link flex items-start gap-3 rounded-xl px-3 py-2 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                                    >
                                      {item.icon ? <span className="mt-0.5 shrink-0">{item.icon}</span> : <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-slate-300" />}
                                      <span className="block text-sm font-medium text-[#2B2B2B]">{item.title}</span>
                                    </Link>
                                  ))}
                                </div>
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

            if (label === t.narzedzia) {
              const isActive = pathname.startsWith('/narzedzia');
              return (
                <li ref={toolsLiRef} className="group relative flex items-center gap-0.5" key={label}>
                  <Link
                    href="/narzedzia"
                    aria-current={isActive ? 'page' : undefined}
                    className={`hover-underline rounded text-base font-medium text-[#2B2B2B] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                      isActive ? 'font-semibold text-[#080808]' : ''
                    }`}
                  >
                    {t.narzedzia}
                  </Link>

                  <button
                    id={toolsButtonId}
                    type="button"
                    onClick={() => setIsToolsOpen((p) => !p)}
                    onKeyDown={handleToolsButtonKeyDown}
                    aria-haspopup="menu"
                    aria-expanded={isToolsOpen}
                    aria-controls={toolsMenuId}
                    ref={toolsBtnRef}
                    className="mr-[-14px] flex h-7 w-7 cursor-pointer items-center justify-center rounded text-[#2B2B2B] transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    aria-label={isToolsOpen ? t.closeToolsList : t.openToolsList}
                  >
                    <motion.span animate={{ rotate: isToolsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <RiArrowDownSLine className="h-4 w-4" aria-hidden="true" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isToolsOpen && (
                      <motion.div
                        id={toolsMenuId}
                        role="menu"
                        aria-labelledby={toolsButtonId}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-full left-0 z-50 w-full bg-white/95 p-4 shadow-xl backdrop-blur-sm"
                      >
                        <Wrapper>
                          <div ref={toolsMenuRef} onKeyDown={handleToolsMenuKeyDown} className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                            {toolsSections.map((section) => (
                              <div key={section.key} className="rounded-2xl border border-slate-200 p-4">
                                <div className="mb-3 text-sm font-semibold tracking-wide text-slate-900">{section.title}</div>

                                <div className="grid grid-cols-1 gap-2">
                                  {section.items.map((item) => (
                                    <Link
                                      key={item.href + item.title}
                                      href={item.href}
                                      className="group/link flex items-start gap-3 rounded-xl px-3 py-2 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                                    >
                                      {item.icon ? <span className="mt-0.5 shrink-0">{item.icon}</span> : <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-slate-300" />}
                                      <span className="block text-sm font-medium text-[#2B2B2B]">{item.title}</span>
                                    </Link>
                                  ))}
                                </div>
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
              <li key={label} className="relative flex items-center">
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
