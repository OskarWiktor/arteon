'use client';

import { useEffect, useRef, useState, type JSX } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import Text from '../../ui/typography/Text';
import Eyebrow from '../../ui/typography/Eyebrow';
import IconText from '../../ui/IconText';

const ui = {
  pl: {
    close: 'Zamknij',
    services: 'Usługi',
    mobileMenu: 'Menu mobilne',
    terms: 'Regulamin świadczenia usług',
    privacy: 'Polityka Prywatności',
    instagramLabel: 'Firmowy Instagram',
    facebookLabel: 'Firmowy Facebook',
    bookConsultation: 'Umów konsultację',
    nav: {
      realizacje: 'Realizacje',
      oNas: 'O nas',
      edukacja: 'Edukacja',
      narzedzia: 'Narzędzia',
      kontakt: 'Kontakt',
    },
    sections: {
      websites: {
        title: 'Witryny',
        items: {
          websites: 'Strony internetowe',
          shops: 'Sklepy internetowe',
          blogs: 'Blogi internetowe',
        },
      },
      marketing: {
        title: 'Marketing',
        items: {
          auditSeo: 'Audyt SEO',
          optimizationSeo: 'Optymalizacja SEO',
          positioning: 'Pozycjonowanie stron',
        },
      },
      graphicProjects: {
        title: 'Projekty graficzne',
        items: {
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
        },
      },
      contentCreation: {
        title: 'Tworzenie treści',
        items: {
          contentCreation: 'Tworzenie treści',
        },
      },
    },
    urls: {
      realizacje: '/realizacje',
      oNas: '/o-nas',
      edukacja: '/edukacja',
      narzedzia: '/narzedzia',
      kontakt: '/kontakt',
      regulamin: '/regulamin',
      privacy: '/polityka-prywatnosci',
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
  RiInstagramLine,
  RiFacebookFill,
} from 'react-icons/ri';

type NavItem = { href: string; label: string; exact?: boolean };

function getNavItems(): NavItem[] {
  const t = ui.pl;
  return [
    { href: t.urls.realizacje, label: t.nav.realizacje, exact: true },
    { href: t.urls.oNas, label: t.nav.oNas },
    { href: t.urls.edukacja, label: t.nav.edukacja },
    { href: t.urls.narzedzia, label: t.nav.narzedzia },
    { href: t.urls.kontakt, label: t.nav.kontakt },
  ];
}

type SectionLink = { href: string; title: string; icon?: JSX.Element };
type Section = {
  key: 'witryny' | 'marketing' | 'grafika' | 'tresc';
  title: string;
  hubHref?: string;
  items: SectionLink[];
};

function getSections(): Section[] {
  const t = ui.pl;
  return [
    {
      key: 'witryny',
      title: t.sections.websites.title,
      items: [
        { href: t.urls.websites, title: t.sections.websites.items.websites, icon: <RiCodeSSlashFill aria-hidden className="h-5 w-5" /> },
        { href: t.urls.shops, title: t.sections.websites.items.shops, icon: <RiShoppingCartLine aria-hidden className="h-5 w-5" /> },
        { href: t.urls.blogs, title: t.sections.websites.items.blogs, icon: <RiArticleLine aria-hidden className="h-5 w-5" /> },
      ],
    },
    {
      key: 'marketing',
      title: t.sections.marketing.title,
      hubHref: t.urls.marketing,
      items: [
        { href: t.urls.auditSeo, title: t.sections.marketing.items.auditSeo, icon: <RiSearchLine aria-hidden className="h-5 w-5" /> },
        { href: t.urls.optimizationSeo, title: t.sections.marketing.items.optimizationSeo, icon: <RiPriceTag3Line aria-hidden className="h-5 w-5" /> },
        { href: t.urls.positioning, title: t.sections.marketing.items.positioning, icon: <RiMegaphoneLine aria-hidden className="h-5 w-5" /> },
      ],
    },
    {
      key: 'grafika',
      title: t.sections.graphicProjects.title,
      hubHref: t.urls.graphicProjects,
      items: [
        { href: t.urls.priceList, title: t.sections.graphicProjects.items.priceList, icon: <RiPriceTag3Line aria-hidden className="h-5 w-5" /> },
        { href: t.urls.visualIdentity, title: t.sections.graphicProjects.items.visualIdentity, icon: <RiPantoneLine aria-hidden className="h-5 w-5" /> },
        { href: t.urls.loyaltyCard, title: t.sections.graphicProjects.items.loyaltyCard, icon: <RiPriceTag3Line aria-hidden className="h-5 w-5" /> },
        { href: t.urls.catalogs, title: t.sections.graphicProjects.items.catalogs, icon: <RiBookletLine aria-hidden className="h-5 w-5" /> },
        { href: t.urls.coupons, title: t.sections.graphicProjects.items.coupons, icon: <RiCoupon2Line aria-hidden className="h-5 w-5" /> },
        { href: t.urls.websiteDesign, title: t.sections.graphicProjects.items.websiteDesign, icon: <RiLayoutLine aria-hidden className="h-5 w-5" /> },
        { href: t.urls.logo, title: t.sections.graphicProjects.items.logo, icon: <RiQuillPenLine aria-hidden className="h-5 w-5" /> },
        { href: t.urls.restaurantMenu, title: t.sections.graphicProjects.items.restaurantMenu, icon: <RiRestaurant2Line aria-hidden className="h-5 w-5" /> },
        { href: t.urls.companyClothing, title: t.sections.graphicProjects.items.companyClothing, icon: <RiTShirt2Line aria-hidden className="h-5 w-5" /> },
        { href: t.urls.companyPaper, title: t.sections.graphicProjects.items.companyPaper, icon: <RiFileTextLine aria-hidden className="h-5 w-5" /> },
        { href: t.urls.socialTemplates, title: t.sections.graphicProjects.items.socialTemplates, icon: <RiLayoutLine aria-hidden className="h-5 w-5" /> },
        { href: t.urls.offerFolder, title: t.sections.graphicProjects.items.offerFolder, icon: <RiFolderOpenLine aria-hidden className="h-5 w-5" /> },
        { href: t.urls.flyers, title: t.sections.graphicProjects.items.flyers, icon: <RiFileList2Line aria-hidden className="h-5 w-5" /> },
        { href: t.urls.businessCards, title: t.sections.graphicProjects.items.businessCards, icon: <RiIdCardLine aria-hidden className="h-5 w-5" /> },
      ],
    },
    {
      key: 'tresc',
      title: t.sections.contentCreation.title,
      hubHref: t.urls.contentCreation,
      items: [{ href: t.urls.contentCreation, title: t.sections.contentCreation.items.contentCreation, icon: <RiFileTextLine aria-hidden className="h-5 w-5" /> }],
    },
  ];
}

function Portal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

export default function MobileNavigation({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (val: boolean) => void }) {
  const t = ui.pl;
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const NAV = getNavItems();
  const SECTIONS = getSections();

  const [panelWidth, setPanelWidth] = useState(0);
  useEffect(() => {
    const update = () => setPanelWidth(Math.min(window.innerWidth * 0.88, 300));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  useEffect(() => {
    const root = document.documentElement;
    if (isOpen) root.classList.add('overflow-hidden');
    else root.classList.remove('overflow-hidden');
    return () => root.classList.remove('overflow-hidden');
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
      if (e.key === 'Tab' && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),[tabindex="0"]');
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          (last as HTMLElement).focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          (first as HTMLElement).focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    setTimeout(() => {
      const first = panelRef.current?.querySelector<HTMLElement>('a[href],button:not([disabled]),[tabindex="0"]');
      first?.focus();
    }, 0);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, setIsOpen]);

  const [openKeys, setOpenKeys] = useState<Record<Section['key'], boolean>>({
    witryny: false,
    marketing: false,
    grafika: false,
    tresc: false,
  });

  const toggleKey = (key: Section['key']) => setOpenKeys((s) => ({ ...s, [key]: !s[key] }));

  const onListKeyDown = (container: HTMLElement, e: React.KeyboardEvent) => {
    const items = container.querySelectorAll<HTMLAnchorElement>('a[href]');
    if (!items.length) return;
    const arr = Array.from(items);
    const idx = arr.findIndex((el) => el === document.activeElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      arr[Math.min(idx + 1, arr.length - 1)]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      arr[Math.max(idx - 1, 0)]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      arr[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      arr[arr.length - 1]?.focus();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Portal>
            <motion.div
              className="fixed inset-y-0 left-0 z-[999] bg-black/30 backdrop-blur-[1px]"
              style={{ right: `${panelWidth}px` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
          </Portal>

          <motion.nav
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={t.mobileMenu}
            className="z[1000] fixed top-0 right-0 h-[100dvh] w-[88vw] max-w-[300px] bg-white shadow-xl"
            initial={{ x: 24, opacity: 0.98 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 24, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
          >
            <div className="flex items-center justify-end px-4 pt-3">
              <button onClick={() => setIsOpen(false)} className="rounded px-3 pt-1 ring-slate-700 ring-offset-2 outline-none focus-visible:ring-2">
                <Text variant="small" tone="muted" as="span" className="font-medium">
                  {t.close}
                </Text>
              </button>
            </div>

            <div className="flex h-[calc(100dvh-49px)] flex-col overflow-y-auto px-4 py-3">
              <Eyebrow variant="dynamic" className="px-3 pb-1 text-[11px] tracking-wider">
                {t.services}
              </Eyebrow>

              <div className="flex flex-col">
                {SECTIONS.map((sec) => {
                  const expanded = openKeys[sec.key];
                  return (
                    <div key={sec.key} className="mb-1 rounded-xl border border-neutral-200">
                      <div className="flex items-center justify-between">
                        {sec.hubHref ? (
                          <Link
                            href={sec.hubHref}
                            onClick={() => setIsOpen(false)}
                            className="m-2 inline-block rounded px-2 py-1 outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
                          >
                            <Text variant="small" as="span" className="font-semibold">
                              {sec.title}
                            </Text>
                          </Link>
                        ) : (
                          <div className="m-2 px-2 py-1">
                            <Text variant="small" as="span" className="font-semibold">
                              {sec.title}
                            </Text>
                          </div>
                        )}

                        <button
                          type="button"
                          aria-expanded={expanded}
                          aria-controls={`sec-${sec.key}`}
                          onClick={() => toggleKey(sec.key)}
                          className="m-2 inline-flex items-center gap-1 rounded px-2 py-1 outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
                        >
                          <RiArrowDownSLine className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
                        </button>
                      </div>

                      <AnimatePresence initial={false}>
                        {expanded && (
                          <motion.div
                            id={`sec-${sec.key}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            className="overflow-hidden border-t border-neutral-200"
                          >
                            <ul
                              className="p-2"
                              onKeyDown={(e) => {
                                const container = e.currentTarget as unknown as HTMLElement;
                                onListKeyDown(container, e);
                              }}
                            >
                              {sec.items.map((it) => (
                                <li key={it.href}>
                                  <Link
                                    href={it.href}
                                    onClick={() => setIsOpen(false)}
                                    className="group flex items-center gap-3 rounded-xl px-3 py-2 text-[15px] text-[#080808] transition outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
                                  >
                                    <IconText
                                      icon={
                                        it.icon ? (
                                          <span className="text-[#5e5e5e] group-hover:text-slate-600">{it.icon}</span>
                                        ) : undefined
                                      }
                                      gap="3"
                                      className="min-w-0"
                                    >
                                      <Text variant="body" as="span">
                                        {it.title}
                                      </Text>
                                    </IconText>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <div className="my-3 h-px w-full bg-neutral-200" />

              <ul className="mb-2 flex flex-col gap-1">
                {NAV.map(({ href, label, exact }) => {
                  const isActive = exact ? pathname === href : pathname.startsWith(href);
                  return (
                    <li key={label}>
                      <Link
                        href={href}
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`block rounded-xl px-3 py-[7px] text-[15px] ring-slate-700 ring-offset-2 outline-none focus-visible:ring-2 ${
                          isActive ? 'bg-zinc-100 font-semibold text-[#080808]' : 'text-[#080808] hover:bg-neutral-100'
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <ul className="mb-2 flex flex-col gap-1">
                {[
                  { href: t.urls.regulamin, label: t.terms },
                  { href: t.urls.privacy, label: t.privacy },
                ].map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-xl px-3 py-[7px] text-[15px] text-[#080808] outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-zinc-200 pt-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.instagram.com/arteon.pl"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t.instagramLabel}
                      className="rounded outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
                    >
                      <RiInstagramLine className="h-5 w-5 text-[#2B2B2B] transition hover:text-slate-600" aria-hidden="true" />
                    </a>
                    <a
                      href="https://www.facebook.com/people/Arteon/61583260915021/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t.facebookLabel}
                      className="rounded outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
                    >
                      <RiFacebookFill className="h-5 w-5 text-[#2B2B2B] transition hover:text-slate-600" aria-hidden="true" />
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={t.urls.kontakt}
                      onClick={() => setIsOpen(false)}
                      className="rounded-2xl bg-slate-600 px-3 py-2 text-sm font-semibold text-white transition outline-none hover:opacity-90 focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
                    >
                      {t.bookConsultation}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
