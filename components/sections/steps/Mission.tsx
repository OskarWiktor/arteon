'use client';

import SectionSteps from '../../ui/sections/SectionSteps';

const missionItems = [
  {
    imageSrc: '/assets/woda.png',
    imageAlt: 'Woda',
    title: 'Woda',
    subtitle: 'UX i płynność',
    description: (
      <ul className="list-disc space-y-1 pl-5">
        <li>Przejrzyste ścieżki</li>
        <li>Czytelne stany</li>
        <li>Zero tarcia</li>
      </ul>
    ),
  },
  {
    imageSrc: '/assets/ziemia.png',
    imageAlt: 'Ziemia',
    title: 'Ziemia',
    subtitle: 'SEO i fundamenty',
    description: (
      <ul className="list-disc space-y-1 pl-5">
        <li>Semantyka HTML</li>
        <li>Struktura danych</li>
        <li>Szybkie serwowanie</li>
      </ul>
    ),
  },
  {
    imageSrc: '/assets/ogien.png',
    imageAlt: 'Ogień',
    title: 'Ogień',
    subtitle: 'Marketing i energia',
    description: (
      <ul className="list-disc space-y-1 pl-5">
        <li>Analityka</li>
        <li>Piksele kampanii</li>
        <li>Automatyzacje</li>
      </ul>
    ),
  },
  {
    imageSrc: '/assets/powietrze.png',
    imageAlt: 'Powietrze',
    title: 'Powietrze',
    subtitle: 'Treść i klarowność',
    description: (
      <ul className="list-disc space-y-1 pl-5">
        <li>Ton marki</li>
        <li>Hierarchia nagłówków</li>
        <li>Mikrocopy</li>
      </ul>
    ),
  },
];

export default function Mission() {
  return <SectionSteps title="Cztery filary jakości" description="Żywioły jako narzędzie porządku. Technologia służy idei." items={missionItems} />;
}
