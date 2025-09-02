import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Strony www — Arteon',
  description: 'Strony, które sprzedają i rosną. SEO, WCAG, treść i technologia w standardzie. Transparentne ceny i jasny proces.',
};

function Section({ id, title, children, subtitle }: { id: string; title: string; children: React.ReactNode; subtitle?: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        {subtitle ? <p className="text-sm tracking-widest text-[#5e5e5e] uppercase">{subtitle}</p> : null}
        <h2 id={`${id}-title`}>
          {title}
        </h2>
      </div>
      <div className="prose prose-neutral max-w-none">{children}</div>
    </section>
  );
}

function CTA({ href, label, variant = 'primary', ariaLabel }: { href: string; label: string; variant?: 'primary' | 'secondary' | 'ghost'; ariaLabel?: string }) {
  const base = 'inline-flex items-center gap-2 rounded-md-md px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const v =
    variant === 'primary'
      ? 'bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:ring-neutral-900'
      : variant === 'secondary'
        ? 'bg-white text-[#080808] ring-1 ring-neutral-200 hover:bg-neutral-50 focus-visible:ring-neutral-400'
        : 'text-[#080808] hover:underline focus-visible:ring-neutral-400';
  return (
    <Link href={href} aria-label={ariaLabel ?? label} className={`${base} ${v}`}>
      {label}
      <span aria-hidden>→</span>
    </Link>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="rounded-md border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-[#5e5e5e]">{children}</span>;
}

export default function Page() {
  return (
    <main className="bg-[#F5F5F7] text-[#0A0A0A]">
      {/* Hero */}
      <section aria-labelledby="hero-title" className="mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 id="hero-title" className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Strony, które sprzedają i rosną.
            </h1>
            <p className="mt-4 text-lg text-[#5e5e5e]">SEO, WCAG, treść i technologia w standardzie. glassizm. Prestiż. Efekt.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CTA href="/kontakt" label="Wyceń projekt" ariaLabel="Wyceń projekt — formularz kontaktowy" />
              <CTA href="/kontakt" label="Umów rozmowę" variant="secondary" />
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <Pill>WCAG 2.1 AA</Pill>
              <Pill>SEO w cenie</Pill>
              <Pill>Deklaracja Dostępności</Pill>
              <Pill>Transparentna współpraca</Pill>
            </div>
          </div>

          {/* Żywioły – subtelna grafika opisowa */}
          <div aria-hidden className="justify-self-end">
            <div className="relative h-56 w-full max-w-md rounded-md bg-white p-6 shadow-sm ring-1 ring-neutral-200">
              <div className="grid grid-cols-2 gap-4">
                {/* Woda – UX */}
                <div className="rounded-md-lg border border-neutral-200 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-block h-3 w-3 rotate-180 border-t-[8px] border-l-8 border-t-transparent border-l-neutral-900"></span>
                    <span className="text-sm font-semibold">Woda</span>
                  </div>
                  <p className="text-xs text-[#5e5e5e]">Płynność UX.</p>
                </div>
                {/* Ziemia – SEO */}
                <div className="rounded-md-lg border border-neutral-200 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-block h-3 w-3 bg-neutral-900"></span>
                    <span className="text-sm font-semibold">Ziemia</span>
                  </div>
                  <p className="text-xs text-[#5e5e5e]">Fundamenty SEO.</p>
                </div>
                {/* Powietrze – Treść */}
                <div className="rounded-md-lg border border-neutral-200 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-block h-3 w-3 rounded-md bg-neutral-900"></span>
                    <span className="text-sm font-semibold">Powietrze</span>
                  </div>
                  <p className="text-xs text-[#5e5e5e]">Klarowna treść.</p>
                </div>
                {/* Ogień – Marketing */}
                <div className="rounded-md-lg border border-neutral-200 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-block h-3 w-3 border-r-[8px] border-b-[8px] border-l-[8px] border-r-transparent border-b-neutral-900 border-l-transparent"></span>
                    <span className="text-sm font-semibold">Ogień</span>
                  </div>
                  <p className="text-xs text-[#5e5e5e]">Energia sprzedaży.</p>
                </div>
              </div>
              <div className="absolute top-6 right-6 text-xs font-medium text-[#5e5e5e]">System Arteon</div>
            </div>
          </div>
        </div>
      </section>

      {/* Co dostajesz w standardzie */}
      <Section id="value" title="Wartość all-in" subtitle="Standard">
        <ul className="grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2">
          {[
            'Redakcja treści i microcopy.',
            'SEO techniczne i treściowe.',
            'Zgodność z WCAG 2.1 AA.',
            'Deklaracja Dostępności z danymi firmy.',
            'Wsparcie prawne: polityki i regulaminy.',
            'Szkolenie PDF z obsługi CMS.',
            'Doradztwo: domena i hosting.',
            'Audyty: wydajność, dostępność, prawo.',
          ].map((item) => (
            <li key={item} className="rounded-md-md flex items-start gap-3 bg-white p-4 ring-1 ring-neutral-200">
              <span aria-hidden className="mt-1 inline-block h-2 w-2 rounded-md bg-neutral-900" />
              <span className="text-sm text-neutral-800">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Technologia dobrana do celu */}
      <Section id="tech" title="Technologia służy celowi" subtitle="Stack">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-md bg-white p-6 ring-1 ring-neutral-200">
            <h3 className="text-base font-semibold">WordPress</h3>
            <p className="mt-2 text-sm text-[#5e5e5e]">Budżetowy start i prosta edycja. Dobre dla one-pagerów i stron 5–10 podstron. Dodatkowe zabezpieczenia i optymalizacje w cenie.</p>
          </div>
          <div className="rounded-md bg-white p-6 ring-1 ring-neutral-200">
            <h3 className="text-base font-semibold">Webflow</h3>
            <p className="mt-2 text-sm text-[#5e5e5e]">Prestiż, animacje, CMS i zgodność z WCAG. Idealne dla marek, które stawiają na wizerunek i wygodę edycji.</p>
          </div>
          <div className="rounded-md bg-white p-6 ring-1 ring-neutral-200">
            <h3 className="text-base font-semibold">Next.js</h3>
            <p className="mt-2 text-sm text-[#5e5e5e]">Wydajność i skalowalność klasy produktowej. Gdy potrzebujesz niestandardowych funkcji, integracji i logiki biznesowej.</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <CTA href="/kontakt" label="Dobierz stack" />
          <CTA href="#pricing" label="Zobacz ceny" variant="secondary" />
        </div>
      </Section>

      {/* Dostępność i prawo */}
      <Section id="a11y" title="Dostępność i prawo" subtitle="WCAG/EAA">
        <p className="text-[#5e5e5e]">
          Buduję serwisy zgodne z WCAG 2.1 AA. Pomagam w politykach i regulaminach. Wystawiam Deklarację Dostępności. Tworzę projekty na rynki międzynarodowe z uwzględnieniem lokalnych wymogów.
        </p>
        <div className="mt-6">
          <CTA href="/kontakt" label="Zapytaj o WCAG" />
        </div>
      </Section>

      {/* CMS i własność */}
      <Section id="cms" title="CMS i pełna kontrola" subtitle="Własność">
        <p className="text-[#5e5e5e]">Edytujesz treści i media samodzielnie. Na życzenie eksportuję kod i wdrażam na Twoim serwerze. Dostajesz szkolenie PDF i krótkie wideo z obsługi.</p>
      </Section>

      {/* Migracje i redesign */}
      <Section id="migrations" title="Migracje i redesign" subtitle="Upgrade">
        <p className="text-[#5e5e5e]">Migruję z WP/Elementor do Webflow, by spełnić WCAG i podnieść jakość. Redesign obejmuje serwis, brand i materiały. glassizm. Porządek. Wynik.</p>
        <div className="mt-6">
          <CTA href="/kontakt" label="Przenieś stronę" />
        </div>
      </Section>

      {/* Proces */}
      <Section id="process" title="Proces w 6 krokach" subtitle="Metodyka">
        <ol className="grid list-decimal gap-4 rounded-md bg-white p-6 ring-1 ring-neutral-200 md:grid-cols-2">
          {[
            'Diagnoza celów i rynku.',
            'Architektura informacji i treść.',
            'Projekt i prototyp.',
            'Development i SEO techniczne.',
            'Audyty: WCAG, prawo, wydajność.',
            'Szkolenie, start i wsparcie.',
          ].map((step, i) => (
            <li key={i} className="pl-2 text-sm text-neutral-800">
              {step}
            </li>
          ))}
        </ol>
      </Section>

      {/* Cennik – 3 poziomy */}
      <Section id="pricing" title="Ceny transparentne" subtitle="Pakiety">
        <div className="grid gap-6 md:grid-cols-3">
          {/* 1. Landing One Page — WordPress */}
          <div className="flex flex-col rounded-md bg-white p-6 ring-1 ring-neutral-200">
            <h3 className="text-base font-semibold">Landing One-Page</h3>
            <p className="mt-1 text-sm text-[#5e5e5e]">WordPress</p>
            <p className="mt-4 text-3xl font-semibold">
              4 900–7 900&nbsp;zł <span className="text-sm font-normal text-[#5e5e5e]">netto</span>
            </p>
            <p className="mt-2 text-sm text-[#5e5e5e]">Start, szybkie wdrożenie, pełen standard jakości.</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                '1 strona z sekcjami (one-page).',
                'Treści i microcopy w cenie.',
                'SEO on-page i techniczne.',
                'WCAG 2.1 AA + Deklaracja Dostępności.',
                'Formularz, analityka, podstawowe integracje.',
                'CMS + szkolenie PDF.',
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-md bg-neutral-900" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-x-2">
              <CTA href="/kontakt" label="Zamów landing" />
              <CTA href="#tech" label="Dobierz stack" variant="secondary" />
            </div>
          </div>

          {/* 2. Strona firmowa 5–10 — WordPress */}
          <div className="flex flex-col rounded-md bg-white p-6 ring-1 ring-neutral-200">
            <h3 className="text-base font-semibold">Strona firmowa 5–10</h3>
            <p className="mt-1 text-sm text-[#5e5e5e]">WordPress</p>
            <p className="mt-4 text-3xl font-semibold">
              9 900–15 900&nbsp;zł <span className="text-sm font-normal text-[#5e5e5e]">netto</span>
            </p>
            <p className="mt-2 text-sm text-[#5e5e5e]">Rozwój, blog, portfolio, więcej sekcji i integracji.</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                '5–10 podstron + blog/aktualności.',
                'Architektura informacji i treść.',
                'Zaawansowane SEO i schemy danych.',
                'WCAG 2.1 AA + Deklaracja Dostępności.',
                'Szybkość, cache, bezpieczeństwo.',
                'CMS + szkolenie PDF i wideo.',
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-md bg-neutral-900" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-x-2">
              <CTA href="/kontakt" label="Zamów stronę" />
              <CTA href="#value" label="Co w cenie" variant="secondary" />
            </div>
          </div>

          {/* 3. Prestiżowa strona — Webflow */}
          <div className="flex flex-col rounded-md bg-white p-6 ring-2 ring-neutral-900">
            <div className="mb-2 inline-flex items-center gap-2">
              <span aria-hidden className="h-2 w-2 border-r-[8px] border-b-[8px] border-l-[8px] border-r-transparent border-b-neutral-900 border-l-transparent"></span>
              <span className="text-xs font-semibold tracking-wider text-[#080808]">Polecane</span>
            </div>
            <h3 className="text-base font-semibold">Prestiżowa strona</h3>
            <p className="mt-1 text-sm text-[#5e5e5e]">Webflow</p>
            <p className="mt-4 text-3xl font-semibold">
              17 900–29 900&nbsp;zł <span className="text-sm font-normal text-[#5e5e5e]">netto</span>
            </p>
            <p className="mt-2 text-sm text-[#5e5e5e]">Luksus UX, animacje, CMS i perfekcyjny detal.</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                'Projekt premium, mikro-interakcje i animacje.',
                'CMS kolekcje: blog, portfolio, case studies.',
                'SEO i wydajność klasy enterprise.',
                'WCAG 2.1 AA + Deklaracja Dostępności.',
                'Komponenty i style jak w design systemie.',
                'Szkolenie PDF + wideo, dokumentacja edycji.',
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-md bg-neutral-900" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-x-2">
              <CTA href="/kontakt" label="Zamów prestiż" />
              <CTA href="#tech" label="Zobacz technologię" variant="secondary" />
            </div>
          </div>
        </div>

        {/* Notka o Next.js – liga aplikacji */}
        <div className="mt-8 rounded-md bg-white p-6 ring-1 ring-neutral-200">
          <p className="text-sm text-[#5e5e5e]">
            <strong>Potrzebujesz funkcji niestandardowych?</strong> Liga Next.js obsłuży aplikacje, panele, integracje i logikę biznesową. <em>Wycena indywidualna</em> po warsztacie celów.
          </p>
          <div className="mt-4">
            <CTA href="/kontakt" label="Porozmawiaj o Next.js" />
          </div>
        </div>

        {/* Uwaga prawna do cen */}
        <p className="mt-6 text-xs text-[#5e5e5e]">Ceny orientacyjne. Zakres prac potwierdzamy po krótkim warsztacie. Kwoty nie obejmują opłat zewnętrznych (domena, hosting, licencje).</p>
      </Section>

      {/* Płatności i gwarancja */}
      <Section id="payments" title="Płatności i gwarancja" subtitle="Zasady">
        <ul className="grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3">
          {['< 5 000 zł — faktura po zakończeniu, bez zaliczki.', '≥ 5 000 zł — zaliczka 10%.', '≥ 10 000 zł — zaliczka 20%.'].map((rule) => (
            <li key={rule} className="rounded-md-md bg-white p-4 text-sm text-neutral-800 ring-1 ring-neutral-200" dangerouslySetInnerHTML={{ __html: rule }} />
          ))}
        </ul>
        <p className="mt-6 text-sm text-[#5e5e5e]">Transparentność na każdym etapie. Aktualizacje tygodniowe. Możliwa zmiana koncepcji w trakcie — priorytetem jest efekt.</p>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="FAQ" subtitle="Najczęściej pytane">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              q: 'Czy robicie też sklepy i blogi?',
              a: 'Tak. Sklepy i blogi dostarczamy w tym samym standardzie: WCAG, SEO, treść, marketing.',
            },
            {
              q: 'Czy samodzielnie edytuję treści?',
              a: 'Tak. Dostajesz CMS i szkolenie PDF + krótkie wideo.',
            },
            {
              q: 'Czy projekt jest zgodny z prawem?',
              a: 'Tak. Pomagamy w politykach i regulaminach. Wystawiamy Deklarację Dostępności.',
            },
            {
              q: 'Czy działacie międzynarodowo?',
              a: 'Tak. Uwzględniamy lokalne wymogi i języki.',
            },
            {
              q: 'Czy pomożesz z domeną i hostingiem?',
              a: 'Tak. Doradzamy i konfigurujemy podstawy bezpłatnie.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="rounded-md bg-white p-6 ring-1 ring-neutral-200">
              <h3 className="text-sm font-semibold">{q}</h3>
              <p className="mt-2 text-sm text-[#5e5e5e]">{a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA końcowe */}
      <section aria-labelledby="cta-end" className="mx-auto max-w-7xl px-4 pt-8 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-md bg-neutral-900 p-8 text-white">
          <h2 id="cta-end" className="text-xl font-semibold">
            Zacznijmy od krótkiej rozmowy.
          </h2>
          <p className="mt-2 text-sm text-neutral-200">Dobierzemy poziom i technologię do Twojego celu. Prosto i skutecznie.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTA href="/kontakt" label="Wyceń projekt" variant="secondary" />
            <CTA href="/kontakt" label="Umów rozmowę" />
          </div>
        </div>
      </section>
    </main>
  );
}
