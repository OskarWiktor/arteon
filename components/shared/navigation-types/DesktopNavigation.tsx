'use client';

import { useEffect, useRef, useState, type JSX } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import Wrapper from '@/components/ui/Wrapper';
import AppLink from '@/components/ui/Link';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useMenuKeyboardNavigation } from '@/hooks/useMenuKeyboardNavigation';

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
      items: {
        websites: 'Strony internetowe',
        websitesDesc: 'WCAG 2.2 AA, projekt na miarę',
        shops: 'Sklepy internetowe',
        shopsDesc: 'Płatności, integracje, automatyzacje',
        blogs: 'Blogi internetowe',
        blogsDesc: 'Architektura treści i CMS',
        auditSeo: 'Audyt SEO',
        auditSeoDesc: 'Diagnostyka i priorytety działań',
        optimizationSeo: 'Optymalizacja SEO',
        optimizationSeoDesc: 'On-page, technikalia, treści',
        positioning: 'Pozycjonowanie stron',
        positioningDesc: 'Strategia, linki, wzrost fraz',
        priceList: 'Cenniki',
        visualIdentity: 'Identyfikacja wizualna',
        loyaltyCard: 'Karty lojalnościowe',
        catalogs: 'Katalogi',
        coupons: 'Kupony i vouchery',
        websiteDesign: 'Projekt graficzny strony',
        logo: 'Logo',
        restaurantMenu: 'Menu restauracji',
        companyClothing: 'Odzież firmowa',
        companyPaper: 'Papier firmowy',
        socialTemplates: 'Szablony social media',
        offerFolder: 'Teczki ofertowe',
        flyers: 'Ulotki',
        businessCards: 'Wizytówki',
        contentCreation: 'Tworzenie treści',
        contentCreationDesc: 'Teksty na strony, blog, oferty',
      },
    },
    tools: {
      images: 'Obrazy i favicony',
      meta: 'Meta i SEO',
      email: 'E-mail i komunikacja',
      colors: 'Kolory i dostępność',
      items: {
        jpgToWebp: 'Konwerter JPG/PNG na WebP',
        imageResize: 'Kadrowanie i zmiana rozmiaru',
        favicon: 'Generator favicon',
        metaCounter: 'Licznik meta title i description',
        emailSignature: 'Generator stopki mailowej HTML',
        contrastChecker: 'Tester kontrastu kolorów WCAG',
        colorPalette: 'Generator palet kolorów',
      },
    },
    urls: {
      realizacje: '/realizacje',
      uslugi: '/uslugi',
      oNas: '/o-nas',
      edukacja: '/edukacja',
      narzedzia: '/narzedzia',
      kontakt: '/kontakt',
      websites: '/uslugi/strony-internetowe',
      shops: '/uslugi/sklepy-internetowe',
      blogs: '/uslugi/blogi-internetowe',
      marketing: '/uslugi/marketing',
      auditSeo: '/uslugi/marketing/audyt-seo',
      optimizationSeo: '/uslugi/marketing/optymalizacja-seo',
      positioning: '/uslugi/marketing/pozycjonowanie-stron',
      graphicProjects: '/uslugi/projekty-graficzne',
      priceList: '/uslugi/projekty-graficzne/projekt-cennika',
      visualIdentity: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
      loyaltyCard: '/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej',
      catalogs: '/uslugi/projekty-graficzne/projekt-katalogu',
      coupons: '/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera',
      websiteDesign: '/uslugi/projekty-graficzne/projekt-graficzny-strony',
      logo: '/uslugi/projekty-graficzne/projekt-logo',
      restaurantMenu: '/uslugi/projekty-graficzne/projekt-menu-restauracji',
      companyClothing: '/uslugi/projekty-graficzne/projekt-odziezy-firmowej',
      companyPaper: '/uslugi/projekty-graficzne/projekt-papieru-firmowego',
      socialTemplates: '/uslugi/projekty-graficzne/szablony-postow-social-media',
      offerFolder: '/uslugi/projekty-graficzne/projekt-teczki-ofertowej',
      flyers: '/uslugi/projekty-graficzne/projekt-ulotki',
      businessCards: '/uslugi/projekty-graficzne/projekt-wizytowki',
      contentCreation: '/uslugi/tworzenie-tresci',
      jpgToWebp: '/narzedzia/jpg-png-na-webp-bez-limitu',
      imageResize: '/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia',
      favicon: '/narzedzia/darmowy-generator-favicon-ico',
      metaCounter: '/narzedzia/licznik-dlugosci-meta-title-i-description',
      emailSignature: '/narzedzia/darmowy-generator-stopki-mailowej',
      contrastChecker: '/narzedzia/tester-kontrastu-kolorow-wcag',
      colorPalette: '/narzedzia/generator-palet-kolorow-online',
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

  const offerMenuKeyboard = useMenuKeyboardNavigation(menuRef);
  const toolsMenuKeyboard = useMenuKeyboardNavigation(toolsMenuRef);

  const buttonId = 'offer-button';
  const menuId = 'offer-submenu';

  const toolsButtonId = 'tools-button';
  const toolsMenuId = 'tools-submenu';

  useOutsideClick(offerLiRef, () => setIsOfferOpen(false), isOfferOpen);
  useOutsideClick(toolsLiRef, () => setIsToolsOpen(false), isToolsOpen);

  useEscapeKey(
    () => {
      setIsOfferOpen(false);
      setIsToolsOpen(false);
      (offerBtnRef.current ?? toolsBtnRef.current)?.focus();
    },
    isOfferOpen || isToolsOpen
  );

  useEffect(() => {
    setIsOfferOpen(false);
    setIsToolsOpen(false);
  }, [pathname]);

  const navigationItems = [
    { href: t.urls.realizacje, label: t.realizacje, exact: true },
    { href: t.urls.uslugi, label: t.uslugi },
    { href: t.urls.oNas, label: t.oNas },
    { href: t.urls.edukacja, label: t.edukacja },
    { href: t.urls.narzedzia, label: t.narzedzia },
    { href: t.urls.kontakt, label: t.kontakt },
  ];

  const offerSections: OfferSection[] = [
    {
      key: 'witryny',
      title: t.sections.websites,
      items: [
        { href: t.urls.websites, icon: <RiCodeSSlashFill className="h-6 w-6 text-slate-500" />, title: t.sections.items.websites, desc: t.sections.items.websitesDesc },
        { href: t.urls.shops, icon: <RiShoppingCartLine className="h-6 w-6 text-slate-500" />, title: t.sections.items.shops, desc: t.sections.items.shopsDesc },
        { href: t.urls.blogs, icon: <RiArticleLine className="h-6 w-6 text-slate-500" />, title: t.sections.items.blogs, desc: t.sections.items.blogsDesc },
      ],
    },
    {
      key: 'marketing',
      title: t.sections.marketing,
      hubHref: t.urls.marketing,
      items: [
        { href: t.urls.auditSeo, icon: <RiSearchLine className="h-6 w-6 text-slate-500" />, title: t.sections.items.auditSeo, desc: t.sections.items.auditSeoDesc },
        { href: t.urls.optimizationSeo, icon: <RiPriceTag3Line className="h-6 w-6 text-slate-500" />, title: t.sections.items.optimizationSeo, desc: t.sections.items.optimizationSeoDesc },
        { href: t.urls.positioning, icon: <RiMegaphoneLine className="h-6 w-6 text-slate-500" />, title: t.sections.items.positioning, desc: t.sections.items.positioningDesc },
      ],
    },
    {
      key: 'grafika',
      title: t.sections.graphicProjects,
      hubHref: t.urls.graphicProjects,
      items: [
        { href: t.urls.priceList, title: t.sections.items.priceList, icon: <RiPriceTag3Line className="h-5 w-5 text-slate-500" /> },
        { href: t.urls.visualIdentity, title: t.sections.items.visualIdentity, icon: <RiPantoneLine className="h-5 w-5 text-slate-500" /> },
        { href: t.urls.loyaltyCard, title: t.sections.items.loyaltyCard, icon: <RiPriceTag3Line className="h-5 w-5 text-slate-500" /> },
        { href: t.urls.catalogs, title: t.sections.items.catalogs, icon: <RiBookletLine className="h-5 w-5 text-slate-500" /> },
        { href: t.urls.coupons, title: t.sections.items.coupons, icon: <RiCoupon2Line className="h-5 w-5 text-slate-500" /> },
        { href: t.urls.websiteDesign, title: t.sections.items.websiteDesign, icon: <RiLayoutLine className="h-5 w-5 text-slate-500" /> },
        { href: t.urls.logo, title: t.sections.items.logo, icon: <RiQuillPenLine className="h-5 w-5 text-slate-500" /> },
        { href: t.urls.restaurantMenu, title: t.sections.items.restaurantMenu, icon: <RiRestaurant2Line className="h-5 w-5 text-slate-500" /> },
        { href: t.urls.companyClothing, title: t.sections.items.companyClothing, icon: <RiTShirt2Line className="h-5 w-5 text-slate-500" /> },
        { href: t.urls.companyPaper, title: t.sections.items.companyPaper, icon: <RiFileTextLine className="h-5 w-5 text-slate-500" /> },
        { href: t.urls.socialTemplates, title: t.sections.items.socialTemplates, icon: <RiLayoutLine className="h-5 w-5 text-slate-500" /> },
        { href: t.urls.offerFolder, title: t.sections.items.offerFolder, icon: <RiFolderOpenLine className="h-5 w-5 text-slate-500" /> },
        { href: t.urls.flyers, title: t.sections.items.flyers, icon: <RiFileList2Line className="h-5 w-5 text-slate-500" /> },
        { href: t.urls.businessCards, title: t.sections.items.businessCards, icon: <RiIdCardLine className="h-5 w-5 text-slate-500" /> },
      ],
    },
    {
      key: 'tresc',
      title: t.sections.contentCreation,
      hubHref: t.urls.contentCreation,
      items: [{ href: t.urls.contentCreation, icon: <RiFileTextLine className="h-6 w-6 text-slate-500" />, title: t.sections.items.contentCreation, desc: t.sections.items.contentCreationDesc }],
    },
  ];

  const toolsSections: ToolsSection[] = [
    {
      key: 'obrazy',
      title: t.tools.images,
      items: [
        { href: t.urls.jpgToWebp, title: t.tools.items.jpgToWebp, icon: <RiImageEditLine className="h-5 w-5 text-slate-500" /> },
        { href: t.urls.imageResize, title: t.tools.items.imageResize, icon: <RiCropLine className="h-5 w-5 text-slate-500" /> },
        { href: t.urls.favicon, title: t.tools.items.favicon, icon: <RiAppsLine className="h-5 w-5 text-slate-500" /> },
      ],
    },
    {
      key: 'seo',
      title: t.tools.meta,
      items: [
        {
          href: t.urls.metaCounter,
          title: t.tools.items.metaCounter,
          icon: <RiFileTextLine className="h-5 w-5 text-slate-500" />,
        },
      ],
    },
    {
      key: 'email',
      title: t.tools.email,
      items: [
        {
          href: t.urls.emailSignature,
          title: t.tools.items.emailSignature,
          icon: <RiMailLine className="h-5 w-5 text-slate-500" />,
        },
      ],
    },
    {
      key: 'kolory',
      title: t.tools.colors,
      items: [
        {
          href: t.urls.contrastChecker,
          title: t.tools.items.contrastChecker,
          icon: <RiContrast2Line className="h-5 w-5 text-slate-500" />,
        },
        {
          href: t.urls.colorPalette,
          title: t.tools.items.colorPalette,
          icon: <RiPaletteLine className="h-5 w-5 text-slate-500" />,
        },
      ],
    },
  ];

  const handleOfferButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isOfferOpen) setIsOfferOpen(true);
      requestAnimationFrame(() => offerMenuKeyboard.focusFirst());
    }
  };

  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => offerMenuKeyboard.onKeyDown(e);

  const handleToolsButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isToolsOpen) setIsToolsOpen(true);
      requestAnimationFrame(() => toolsMenuKeyboard.focusFirst());
    }
  };

  const handleToolsMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => toolsMenuKeyboard.onKeyDown(e);

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
                  <AppLink
                    href={t.urls.uslugi}
                    variant="navigation"
                    aria-current={isActive ? 'page' : undefined}
                    className={isActive ? 'font-semibold text-dark' : ''}
                  >
                    {t.uslugi}
                  </AppLink>

                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setIsOfferOpen((p) => !p)}
                    onKeyDown={handleOfferButtonKeyDown}
                    aria-haspopup="menu"
                    aria-expanded={isOfferOpen}
                    aria-controls={menuId}
                    ref={offerBtnRef}
                    className="mr-[-14px] flex h-7 w-7 cursor-pointer items-center justify-center rounded text-mid transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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
                                      <span className="block text-sm font-medium text-mid">{item.title}</span>
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
                  <AppLink
                    href={t.urls.narzedzia}
                    variant="navigation"
                    aria-current={isActive ? 'page' : undefined}
                    className={isActive ? 'font-semibold text-dark' : ''}
                  >
                    {t.narzedzia}
                  </AppLink>

                  <button
                    id={toolsButtonId}
                    type="button"
                    onClick={() => setIsToolsOpen((p) => !p)}
                    onKeyDown={handleToolsButtonKeyDown}
                    aria-haspopup="menu"
                    aria-expanded={isToolsOpen}
                    aria-controls={toolsMenuId}
                    ref={toolsBtnRef}
                    className="mr-[-14px] flex h-7 w-7 cursor-pointer items-center justify-center rounded text-mid transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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
                                      <span className="block text-sm font-medium text-mid">{item.title}</span>
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
                <AppLink
                  href={href}
                  variant="navigation"
                  aria-current={isActivePage ? 'page' : undefined}
                  className={isActivePage ? 'font-semibold text-dark' : ''}
                >
                  {label}
                </AppLink>
              </li>
            );
          })}
        </ul>
      </LayoutGroup>
    </div>
  );
}
