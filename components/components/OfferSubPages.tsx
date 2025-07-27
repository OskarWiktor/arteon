'use client';

import Link from 'next/link';
import Wrapper from '../ui/Wrapper';

const offerSubPages = [
  {
    href: '/offer/web',
    title: 'Strony WWW',
    desc: 'Nowoczesne, szybkie i responsywne strony.',
    image: '/assets/test.jpg',
  },
  {
    href: '/offer/shop',
    title: 'Sklepy online',
    desc: 'Sklepy oparte o UX i konwersję.',
    image: '/assets/test.jpg',
  },
  {
    href: '/offer/blog',
    title: 'Blogi',
    desc: 'Systemy blogowe i treściowe.',
    image: '/assets/test.jpg',
  },
  {
    href: '/offer/design',
    title: 'Design',
    desc: 'Identyfikacja wizualna, logo.',
    image: '/assets/test.jpg',
  },
  {
    href: '/offer/content',
    title: 'Content',
    desc: 'Teksty, opisy i storytelling.',
    image: '/assets/test.jpg',
  },
  {
    href: '/offer/marketing',
    title: 'Marketing',
    desc: 'SEO, reklamy i strategia marki.',
    image: '/assets/test.jpg',
  },
];

export default function OfferSubPages() {
  return (
    <section className="mt-12 w-full md:mt-16 lg:mt-24">
      <Wrapper className="px-4 md:px-6 lg:px-0">
        <div className="grid auto-rows-max grid-cols-1 gap-8 pt-8 md:grid-cols-2 lg:grid-cols-3">
          {offerSubPages.map(({ href, title, desc, image }) => (
            <Link key={href} href={href} className="group relative overflow-hidden" aria-label={title}>
              <div className="h-40 w-full overflow-hidden rounded-md shadow-md transition-shadow hover:shadow-xl">
                <img src={image} alt={title} className="object-cover" />
              </div>
              <div className="p-4">
                <h5 className="text-lg font-semibold">{title}</h5>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
