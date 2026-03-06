import Link from 'next/link';
import Wrapper from '@/components/ui/Wrapper';

import type { NavItem } from '@/types/sitemap';

type SitemapPageClientProps = {
  services: NavItem[];
  portfolioIndex: NavItem;
  portfolioItems: NavItem[];
  blogArticleItems: NavItem[];
  tools: NavItem[];
  infoPages: NavItem[];
  jsonLd: object;
};

function SitemapSection({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <section className="mb-8">
      <h2 className="h3 mb-4">{title}</h2>
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} prefetch={false} className="text-primary hover:text-primary text-sm hover:underline">
              {item.title}
            </Link>
            {item.children && item.children.length > 0 && (
              <ul className="mt-1 ml-4 space-y-1">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href} prefetch={false} className="text-primary hover:text-primary text-sm hover:underline">
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function SitemapPageClient({ services, portfolioIndex, portfolioItems, blogArticleItems, tools, infoPages, jsonLd }: SitemapPageClientProps) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Wrapper className="py-12">
        <nav aria-label="okruszki" className="mb-6">
          <ol className="flex gap-2 text-sm">
            <li>
              <Link href="/" prefetch={false} className="text-primary hover:underline">
                Strona główna
              </Link>
              <span className="text-primary-mid ml-2">/</span>
            </li>
            <li>
              <span className="text-primary" aria-current="page">
                Mapa strony
              </span>
            </li>
          </ol>
        </nav>

        <h1 className="h2 mb-8">Mapa strony</h1>

        <SitemapSection title="Usługi" items={services} />
        <SitemapSection title="Realizacje" items={[portfolioIndex, ...portfolioItems]} />
        <SitemapSection title="Edukacja" items={blogArticleItems} />
        <SitemapSection title="Narzędzia" items={tools} />
        <SitemapSection title="Informacje" items={infoPages} />
      </Wrapper>
    </>
  );
}
