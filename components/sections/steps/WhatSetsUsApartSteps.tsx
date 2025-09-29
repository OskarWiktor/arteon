'use client';

import Link from 'next/link';
import SectionSteps from '../../ui/sections/SectionSteps';

const REGULATIONS_URL = '/regulamin';

const WhatSetsUsApartItems = [
  {
    title: 'Komplet usług wokół Twojej strony',
    description: <p>Strona, sklep, blog. Do tego grafika, branding, marketing, treści i budowa widoczności - wszystko w jednym miejscu. Dbamy o WCAG i podstawy prawne, żebyś startował bez ryzyka.</p>,
  },
  {
    title: 'Dobór technologii do celu',
    description: (
      <p>Najpierw cel. Potem narzędzia. Dobieramy technologię tak, by szybciej dojść do wyniku, w ramach Twojego budżetu i skali. Tłumaczymy każdą decyzję prosto, bez technicznego żargonu.</p>
    ),
  },
  {
    title: 'Widoczność w pakiecie',
    description: (
      <p>Optymalizacja pod Google od pierwszego dnia: struktura, treści i techniczne pozycjonowanie są w cenie. Po wdrożeniu dostajesz darmową propozycję „co dalej”, by rosnąć szybciej.</p>
    ),
  },
  {
    title: 'Gwarancja i proste rozliczenia',
    description: (
      <p>
        Jasne zasady: faktura po realizacji (małe projekty), przy większych niska zaliczka i kamienie milowe. Gwarancja opisana w{' '}
        <Link href={REGULATIONS_URL} className="inline underline underline-offset-4">
          regulaminie
        </Link>
        . Po wdrożeniu, dwa miesiące wsparcia w cenie.
      </p>
    ),
  },
];

export default function WhatSetsUsApartSteps() {
  return <SectionSteps title="Co nas wyróżnia?" grid="two" items={WhatSetsUsApartItems} />;
}
