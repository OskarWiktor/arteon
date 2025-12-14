'use client';

import { useEffect, useRef, useState, type JSX } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import Text from '../../ui/typography/Text';
import Eyebrow from '../../ui/typography/Eyebrow';
import IconText from '../../ui/IconText';
import SocialIconLink from '../../ui/SocialIconLink';
import { LEGAL_LINKS_PL, MOBILE_NAV_ITEMS_PL, OFFER_SECTIONS_PL } from '@/components/shared/navigation-data/pl';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useRestoreFocus } from '@/hooks/useRestoreFocus';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useEventListener } from '@/hooks/useEventListener';
import { useTimeout } from '@/hooks/useTimeout';
import { RiArrowDownSLine, RiInstagramLine, RiFacebookFill } from 'react-icons/ri';

const ui = {
  pl: {
    close: 'Zamknij',
    services: 'Usługi',
    mobileMenu: 'Menu mobilne',
    instagramLabel: 'Firmowy Instagram',
    facebookLabel: 'Firmowy Facebook',
    bookConsultation: 'Umów konsultację',
  },
} as const;

type SectionLink = { href: string; title: string; icon?: JSX.Element };
type Section = {
  key: 'witryny' | 'marketing' | 'grafika' | 'tresc';
  title: string;
  hubHref?: string;
  items: SectionLink[];
};

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
  const NAV = MOBILE_NAV_ITEMS_PL;
  const SECTIONS: Section[] = OFFER_SECTIONS_PL.map((section) => ({
    key: section.key,
    title: section.title,
    hubHref: section.hubHref,
    items: section.items.map((it) => {
      const Icon = it.icon;
      return {
        href: it.href,
        title: it.title,
        icon: Icon ? <Icon aria-hidden className="h-5 w-5" /> : undefined,
      };
    }),
  }));

  const contactHref = NAV.find((it) => it.key === 'kontakt')?.href ?? '/kontakt';

  const { start: focusFirst } = useTimeout();

  const [panelWidth, setPanelWidth] = useState(0);
  const updatePanelWidth = () => setPanelWidth(Math.min(window.innerWidth * 0.88, 300));
  useEventListener(typeof window !== 'undefined' ? window : null, 'resize', updatePanelWidth);

  useEffect(() => {
    updatePanelWidth();
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  useScrollLock(isOpen);
  useEscapeKey(() => setIsOpen(false), isOpen);
  useFocusTrap(panelRef, isOpen, 'a[href],button:not([disabled]),[tabindex="0"]');
  useRestoreFocus(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    focusFirst(() => {
      const first = panelRef.current?.querySelector<HTMLElement>('a[href],button:not([disabled]),[tabindex="0"]');
      first?.focus();
    }, 0);
  }, [isOpen]);

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
                                    className="group flex items-center gap-3 rounded-xl px-3 py-2 text-[15px] text-dark transition outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
                                  >
                                    <IconText
                                      icon={
                                        it.icon ? (
                                          <span className="text-light group-hover:text-slate-600">{it.icon}</span>
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
                          isActive ? 'bg-zinc-100 font-semibold text-dark' : 'text-dark hover:bg-neutral-100'
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <ul className="mb-2 flex flex-col gap-1">
                {LEGAL_LINKS_PL.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-xl px-3 py-[7px] text-[15px] text-dark outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-zinc-200 pt-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <SocialIconLink
                      href="https://www.instagram.com/arteon.pl"
                      label={t.instagramLabel}
                      className="rounded outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
                      icon={<RiInstagramLine className="h-5 w-5 text-mid transition hover:text-slate-600" aria-hidden="true" />}
                    />
                    <SocialIconLink
                      href="https://www.facebook.com/people/Arteon/61583260915021/"
                      label={t.facebookLabel}
                      className="rounded outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
                      icon={<RiFacebookFill className="h-5 w-5 text-mid transition hover:text-slate-600" aria-hidden="true" />}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={contactHref}
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
