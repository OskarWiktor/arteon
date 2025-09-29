'use client';

import SectionSteps from '../../ui/sections/SectionSteps';

const missionItems = [
  {
    imageSrc: '/assets/woda.png',
    imageAlt: 'Woda - symbol płynności i dopasowania',
    title: 'Efemeryczny',
    description: (
      <p>
        Zaczynamy od Twojej oferty. Dopasowujemy strategię i technologię do Twoich odbiorców i celów
      </p>
    ),
  },
  {
    imageSrc: '/assets/ziemia.png',
    imageAlt: 'Ziemia - symbol stabilnych fundamentów',
    title: 'Stabilny',
    description: (
      <p>
        Budujemy solidne fundamenty: czytelna struktura, dostępność i zgodność z prawem. Szybkość działania i widoczność w wyszukiwarce od startu.
      </p>
    ),
  },
  {
    imageSrc: '/assets/ogien.png',
    imageAlt: 'Ogień - symbol energii i wzrostu',
    title: 'Aktywny',
    description: (
      <p>
        Wprowadzamy energię - marketing, który przyciąga odpowiednich klientów i skaluje Twój biznes
      </p>
    ),
  },
  {
    imageSrc: '/assets/powietrze.png',
    imageAlt: 'Powietrze - symbol klarowności i prostoty',
    title: 'Transparentny',
    description: (
      <p>
        Mówimy prostym językiem i transparentnie prowadzimy każdy etap współpracy. Masz pełną kontrolę
        nad projektem i spokojną głowę.
      </p>
    ),
  },
];

export default function Mission() {
  return (
    <SectionSteps
      subtitle="Cztery filary jakości"
      title="Elastyczny partner dla Twojej marki"
      description="Od startupu po globalną skalę - łączymy psychologię, design i technologię, aby przyciągać właściwych klientów."
      items={missionItems}
      grid="two"
    />
  );
}
