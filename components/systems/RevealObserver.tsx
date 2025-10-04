'use client';

import { useEffect } from 'react';

export default function RevealObserver() {
  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

    const initEl = (el: Element) => {
      const delay = (el as HTMLElement).dataset.revealDelay;
      if (delay) (el as HTMLElement).style.setProperty('--reveal-delay', `${parseInt(delay, 10)}ms`);
      el.classList.add('reveal-animation');
    };

    const all = document.querySelectorAll('.reveal-animation');
    all.forEach(initEl);

    if (reduce) {
      all.forEach((el) => el.classList.add('is-inview'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const el = e.target as HTMLElement;
          const once = el.dataset.revealOnce === 'true';
          if (e.isIntersecting) {
            el.classList.add('is-inview');
            if (once) io.unobserve(el);
          } else if (!once) {
            el.classList.remove('is-inview');
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.01 },
    );

    all.forEach((el) => io.observe(el));

    const mo = new MutationObserver((muts) => {
      muts.forEach((m) => {
        m.addedNodes.forEach((n) => {
          if (!(n instanceof Element)) return;
          if (n.classList?.contains('reveal-animation')) {
            initEl(n);
            if (reduce) n.classList.add('is-inview');
            else io.observe(n);
          }
          n.querySelectorAll?.('.reveal-animation').forEach((el) => {
            initEl(el);
            if (reduce) el.classList.add('is-inview');
            else io.observe(el);
          });
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
