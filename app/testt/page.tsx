import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Arteon – Minimalizm. Prestiż. Efekt.',
  description: 'Przenosimy know-how globalnych marek do firm MŚP. Strony, sklepy, blogi, design, SEO, marketing i treści – wszystko pod Twoje cele.',
  keywords: [
    'strony internetowe',
    'sklepy internetowe',
    'Next.js',
    'Webflow',
    'WordPress',
    'SEO',
    'WCAG',
    'branding',
    'copywriting',
    'marketing internetowy',
    'projektowanie stron',
    'agencja interaktywna',
  ],
  alternates: { canonical: 'https://arteon.pl/' },
  openGraph: {
    title: 'Arteon – Minimalizm. Prestiż. Efekt.',
    description: 'Know‑how globalnych marek w produktach dla MŚP. WWW • Design • Marketing • Treści.',
    url: 'https://arteon.pl/',
    siteName: 'Arteon',
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arteon – Minimalizm. Prestiż. Efekt.',
    description: 'Know‑how globalnych marek w produktach dla MŚP. WWW • Design • Marketing • Treści.',
  },
};

export default function HomePage() {
  return (
    <main className="bg-[#F5F5F7] text-[#0A0A0A]">
      {/* Skip link */}
      <a href="#content" className="sr-only z-50 rounded-md bg-white px-3 py-2 text-black shadow focus:not-sr-only focus:absolute focus:top-4 focus:left-4">
        Przejdź do treści
      </a>

      {/* JSON-LD (Organization + WebSite) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Arteon',
            url: 'https://arteon.pl/',
            slogan: 'Minimalizm. Prestiż. Efekt.',
            sameAs: ['https://www.facebook.com/', 'https://www.instagram.com/', 'https://www.linkedin.com/'],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Arteon',
            url: 'https://arteon.pl/',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://arteon.pl/szukaj?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />

      {/* HERO */}
      <header className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 md:py-32">
          <p className="text-sm tracking-widest text-neutral-600 uppercase">Know-how globalnych marek</p>
          <h1 className="mt-3 text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">Minimalizm. Prestiż. Efekt.</h1>
          <p className="mt-5 max-w-2xl text-lg text-neutral-700">Przenosimy sprawdzone praktyki wielkich marek do MŚP. Projektujemy strony, sklepy i treści, które rosną z Twoim biznesem.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryLink href="/kontakt" ariaLabel="Umów konsultację">
              Umów konsultację
            </PrimaryLink>
            <SecondaryLink href="/portfolio" ariaLabel="Zobacz portfolio">
              Zobacz portfolio
            </SecondaryLink>
          </div>
        </div>
      </header>

      {/* VALUE PROPOSITION */}
      <section id="content" aria-labelledby="dlaczego" className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h2 id="dlaczego" className="text-2xl font-semibold md:text-3xl">
            Z nami jesteś bezpieczny. My wiemy, co robimy.
          </h2>
          <p className="mt-4 max-w-3xl text-neutral-700">
            Pracowaliśmy dla globalnych marek. Te same metody wdrażamy w Twojej firmie. Dopasowujemy technologię, zakres i budżet do Twoich celów. Zawsze dowozimy efekt.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Transparentny proces', desc: 'Etapy, terminy i raporty – zawsze wiesz, gdzie jesteśmy.' },
              { title: 'Elastyczna technologia', desc: 'WordPress, Webflow, Next.js – dobieramy do celu i skali.' },
              { title: 'SEO i WCAG w cenie', desc: 'Widoczność i dostępność są standardem, nie dodatkiem.' },
              { title: 'Treści, które sprzedają', desc: 'Redakcja pod SEO i sprzedaż – bez dopłat.' },
            ].map((item) => (
              <li key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-700">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PILLARS */}
      <section aria-labelledby="filary" className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h2 id="filary" className="text-2xl font-semibold md:text-3xl">
            Cztery filary Arteon
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <PillarCard title="WWW" desc="Strony, sklepy, blogi, aplikacje Next.js." href="/uslugi/www" />
            <PillarCard title="Design" desc="Logo, identyfikacja, materiały do druku i social." href="/uslugi/design" />
            <PillarCard title="Marketing" desc="SEO, reklamy, automatyzacje i strategie." href="/uslugi/marketing" />
            <PillarCard title="Treści" desc="Storytelling, artykuły, opisy produktów, oferty." href="/uslugi/tresci" />
          </div>
          <div className="mt-8">
            <SecondaryLink href="/oferta" ariaLabel="Poznaj naszą ofertę">
              Poznaj ofertę
            </SecondaryLink>
          </div>
        </div>
      </section>

      {/* PRICING SUMMARY (SEO + konwersja) */}
      <section aria-labelledby="ceny" className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h2 id="ceny" className="text-2xl font-semibold md:text-3xl">
            Przykładowe zakresy i ceny
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <PriceCard title="Strony www" price="od 1 900 zł" bullets={['Redakcja treści i SEO w cenie', 'WCAG 2.1 AA – deklaracja dostępności', 'WordPress / Webflow / Next.js']} href="/cennik#www" />
            <PriceCard title="Sklepy online" price="od 5 000 zł" bullets={['Integracje płatności i dostaw', 'SEO techniczne + treściowe', 'CMS do edycji produktów']} href="/cennik#sklepy" />
            <PriceCard
              title="Treści i marketing"
              price="od 300 zł"
              bullets={['Storytelling i oferty sprzedażowe', 'Audyty SEO i kampanie reklamowe', 'Social media i automatyzacje']}
              href="/cennik#tresci-marketing"
            />
          </div>
          <div className="mt-8">
            <PrimaryLink href="/cennik" ariaLabel="Sprawdź pełen cennik">
              Sprawdź pełen cennik
            </PrimaryLink>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section aria-labelledby="portfolio" className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h2 id="portfolio" className="text-2xl font-semibold md:text-3xl">
            Efekt zamiast obietnic
          </h2>
          <p className="mt-4 max-w-3xl text-neutral-700">Zobacz, jak podnosimy sprzedaż i wizerunek w różnych branżach. Każdy projekt jest unikalny i oparty o archetyp marki.</p>
          <div className="mt-8">
            <SecondaryLink href="/portfolio" ariaLabel="Zobacz realizacje">
              Zobacz realizacje
            </SecondaryLink>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section aria-labelledby="gwarancje" className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h2 id="gwarancje" className="text-2xl font-semibold md:text-3xl">
            Standard Arteon w cenie
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Redakcja treści pod SEO i sprzedaż',
              'Audyty WCAG 2.1 AA + Deklaracja Dostępności',
              'Polityka prywatności i regulaminy – wsparcie',
              'Dedykowane szkolenie PDF z obsługi',
              'Miesiąc wsparcia po wdrożeniu',
              'Transparentna komunikacja i raporty',
            ].map((point) => (
              <li key={point} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <span className="inline-block font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ABOUT */}
      <section aria-labelledby="onas" className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h2 id="onas" className="text-2xl font-semibold md:text-3xl">
            Arteon – architekt doświadczeń
          </h2>
          <p className="mt-4 max-w-3xl text-neutral-700">
            Łączymy technologię, emocje i wartości. Projektujemy minimalistycznie, z perfekcją detalu. Każda marka jest unikalna i autentyczna. Tworzymy realny efekt, nie gadżety.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section aria-labelledby="start" className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h2 id="start" className="text-2xl font-semibold md:text-3xl">
            Zacznijmy od rozmowy
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-700">Każdy projekt wyceniamy indywidualnie. Niezależnie od wymagań – znajdziemy najlepszą drogę do efektu.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryLink href="/kontakt" ariaLabel="Umów konsultację">
              Umów konsultację
            </PrimaryLink>
            <SecondaryLink href="/oferta" ariaLabel="Poznaj naszą ofertę">
              Poznaj ofertę
            </SecondaryLink>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE (SEO frazy naturalnie) */}
    </main>
  );
}

/* --- UI helpers --- */
function PrimaryLink({ href, ariaLabel, children }: { href: string; ariaLabel: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="inline-flex items-center justify-center rounded-2xl bg-black px-5 py-3 text-white outline-offset-2 transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
    >
      {children}
    </Link>
  );
}

function SecondaryLink({ href, ariaLabel, children }: { href: string; ariaLabel: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-5 py-3 text-black outline-offset-2 transition hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
    >
      {children}
    </Link>
  );
}

function PillarCard({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-neutral-700">{desc}</p>
      </div>
      <div className="mt-6">
        <Link
          href={href}
          className="text-sm font-medium underline underline-offset-4 outline-offset-2 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
          aria-label={`Przejdź do: ${title}`}
        >
          Sprawdź sekcję
        </Link>
      </div>
    </article>
  );
}

function PriceCard({ title, price, bullets, href }: { title: string; price: string; bullets: string[]; href: string }) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-2xl font-semibold tracking-tight">{price}</p>
        <ul className="mt-4 list-disc pl-5 text-sm text-neutral-700">
          {bullets.map((b) => (
            <li key={b} className="marker:text-neutral-500">
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <Link
          href={href}
          className="text-sm font-medium underline underline-offset-4 outline-offset-2 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
          aria-label={`Zobacz szczegóły: ${title}`}
        >
          Zobacz szczegóły
        </Link>
      </div>
    </article>
  );
}
