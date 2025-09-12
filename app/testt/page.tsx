// app/pl/grafika/page.tsx
import Keywords from '@/components/sections/Keywords';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Grafika i identyfikacja wizualna - Arteon',
  description: 'Logo, identyfikacja wizualna, szablony social media, materiały drukowane i grafiki firmowe. Know-how globalnych marek dla małych i średnich firm.',
  alternates: { canonical: 'https://twojadomena.pl/pl/grafika' },
  openGraph: {
    title: 'Grafika i identyfikacja wizualna - Arteon',
    description: 'Projektujemy logo, branding, szablony social media, materiały drukowane i grafiki firmowe. Minimalizm. Prestiż. Efekt.',
    type: 'website',
    url: 'https://twojadomena.pl/pl/grafika',
    siteName: 'Arteon',
  },
};

export default function GraphicsPage() {
  return (
    <main className="bg-[#F5F5F7] text-[#0A0A0A]">
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm tracking-widest text-neutral-500 uppercase">Design</p>
          <h1 className="mt-3 text-4xl leading-tight font-semibold md:text-5xl">Grafika, która buduje markę.</h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-700">
            Logo, identyfikacja wizualna, szablony social media, treści do druku i grafiki firmowe. Tworzymy spójny system, który działa w internecie i offline.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/kontakt" className="rounded-2xl bg-black px-5 py-3 text-white outline-offset-4 focus:outline focus:outline-2 focus:outline-black">
              Umów konsultację
            </Link>
            <Link href="/portfolio" className="rounded-2xl border border-neutral-300 px-5 py-3 outline-offset-4 focus:outline focus:outline-2 focus:outline-black">
              Zobacz portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ZAKRES USŁUG */}
      <section aria-labelledby="zakres-heading" className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 id="zakres-heading" className="text-2xl font-semibold">
            Zakres usług
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                h: 'Logo i identyfikacja wizualna',
                p: 'Projekty logo, palety kolorów i typografie. Wszystko, aby Twoja marka była spójna i rozpoznawalna.',
                list: ['Logo i sygnet', 'Pełne brandingi', 'Pliki wektorowe Adobe CC'],
              },
              {
                h: 'Szablony social media',
                p: 'Gotowe zestawy postów, stories i rolek dopasowane do psychologii odbiorców i Twojej branży.',
                list: ['Posty i karuzele', 'Stories i rolki', 'Pakiety startowe'],
              },
              {
                h: 'Materiały drukowane',
                p: 'Wizytówki, ulotki, katalogi, banery, książki. Profesjonalny skład i przygotowanie do druku.',
                list: ['Wizytówki i ulotki', 'Foldery i katalogi', 'Publikacje i książki'],
              },
              {
                h: 'Grafiki firmowe',
                p: 'Projekty graficzne na ubrania i firmowe materiały. Gotowe do druku i wdrożenia.',
                list: ['Firmowe ubrania', 'Banery i roll-upy', 'Teczki i papier firmowy'],
              },
              {
                h: 'Obróbka i montaż',
                p: 'Obróbka zdjęć pod www oraz montaż materiałów video na TikToka i Instagrama.',
                list: ['Retusz zdjęć', 'Montaż rolek', 'Content + treść w pakiecie'],
              },
            ].map((card) => (
              <article key={card.h} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5" aria-label={card.h}>
                <h3 className="text-lg font-semibold">{card.h}</h3>
                <p className="mt-2 text-neutral-700">{card.p}</p>
                <ul className="mt-4 list-disc pl-5 text-neutral-700 marker:text-neutral-800">
                  {card.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CENNIK - przykładowe pakiety */}
      <section aria-labelledby="cennik-heading" className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 id="cennik-heading" className="text-2xl font-semibold">
            Przykładowe pakiety
          </h2>

          <div role="list" className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                name: 'Logo Start',
                price: '1 200 - 2 000 zł',
                desc: 'Podstawowe logo + pliki wektorowe.',
                feats: ['2 kierunki', 'Pliki źródłowe', 'Mini-instrukcja użycia'],
              },
              {
                name: 'Identyfikacja Core',
                price: '2 000 - 3 200 zł',
                desc: 'Logo, kolorystyka, typografia. Spójność marki od podstaw.',
                feats: ['Logo i sygnet', 'Paleta kolorów', 'Typografia marki'],
              },
              {
                name: 'Identyfikacja Premium',
                price: '4 500 - 6 500 zł',
                desc: 'Pełna identyfikacja wizualna + rozszerzone materiały firmowe.',
                feats: ['Księga znaku', 'Materiały drukowane', 'Pakiet social media'],
              },
            ].map((p) => (
              <div key={p.name} role="listitem" className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div className="text-sm tracking-wider text-neutral-500 uppercase">{p.name}</div>
                <div className="mt-2 text-2xl font-semibold">{p.price}</div>
                <p className="mt-3 text-neutral-700">{p.desc}</p>
                <ul className="mt-4 list-disc pl-5 text-neutral-700 marker:text-neutral-800">
                  {p.feats.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/kontakt" className="inline-block rounded-2xl bg-black px-4 py-2 text-white outline-offset-4 focus:outline focus:outline-2 focus:outline-black">
                    Wyceń projekt
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-neutral-600">Ceny orientacyjne. Finalna wycena zależy od zakresu i liczby wariantów.</p>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 id="faq-heading" className="text-2xl font-semibold">
            FAQ
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                q: 'Czy dostanę pliki źródłowe?',
                a: 'Tak. Otrzymasz pliki wektorowe i instrukcję użycia.',
              },
              {
                q: 'Czy robicie projekty pod social media?',
                a: 'Tak. Przygotowujemy szablony, posty, stories i rolki wraz z treścią.',
              },
              {
                q: 'Czy mogę zamówić tylko wizytówki?',
                a: 'Tak. Projektujemy materiały firmowe również jako osobne zlecenia.',
              },
              {
                q: 'Czy zajmujecie się też ubraniami?',
                a: 'Tak. Tworzymy projekty graficzne na ubrania firmowe, gotowe do druku.',
              },
            ].map((item) => (
              <details key={item.q} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <summary className="cursor-pointer text-lg font-medium">{item.q}</summary>
                <p className="mt-3 text-neutral-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SŁOWA KLUCZOWE */}
      <Keywords
        keys="Projektowanie logo, identyfikacja wizualna, branding, brand book, palety kolorów, typografia marki, szablony social media,
        grafiki Instagram i Facebook, stories i karuzele, rolki video, montaż materiałów video, obróbka zdjęć pod www,
        materiały drukowane: wizytówki, ulotki, katalogi, banery, publikacje i książki, grafiki firmowe na ubrania,
        szablony prezentacji, roll-up, papier firmowy, projekty w Figmie, pliki wektorowe Adobe CC, projekty graficzne dla e-commerce"
      />

      {/* CTA */}
      <section aria-label="Wezwanie do działania" className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-3xl bg-black px-8 py-12 text-white">
            <h2 className="text-2xl font-semibold">Twoja marka zasługuje na spójny design.</h2>
            <p className="mt-3 max-w-2xl text-neutral-200">Od logo po wizytówki i social media. Zbuduj z nami pełną identyfikację.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/kontakt" className="rounded-2xl bg-white px-5 py-3 text-black outline-offset-4 focus:outline focus:outline-2 focus:outline-white">
                Umów konsultację
              </Link>
              <Link href="/oferta" className="rounded-2xl border border-white/30 px-5 py-3 outline-offset-4 focus:outline focus:outline-2 focus:outline-white">
                Zobacz ofertę
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
