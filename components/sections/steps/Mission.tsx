'use client';

import SectionSteps from '../../ui/sections/SectionSteps';

const missionItems = [
  {
    imageSrc: '/assets/woda.png',
    imageAlt: 'Woda',
    title: 'Efemeryczny',
    subtitle: 'Woda',
    description: <p>Dopasowujemy strategię i technologię do Twoich odbiorców i celów</p>,
  },
  {
    imageSrc: '/assets/ziemia.png',
    imageAlt: 'Ziemia',
    title: 'Stabilny',
    subtitle: 'Ziemia',
    description: <p>Budujemy solidne fundamenty: SEO, zgodność z prawem i przejrzysta struktura</p>,
  },
  {
    imageSrc: '/assets/ogien.png',
    imageAlt: 'Ogień',
    title: 'Aktywny',
    subtitle: 'Ogień',
    description: <p>Wprowadzamy energię - marketing, który przyciąga klientów i skaluje Twój biznes</p>,
  },
  {
    imageSrc: '/assets/powietrze.png',
    imageAlt: 'Powietrze',
    title: 'Transparentny',
    subtitle: 'Powietrze',
    description: <p>Mówimy prostym językiem i transparentnie prowadzimy każdy etap współpracy</p>,
  },
];

export default function Mission() {
  return (
    <SectionSteps
      subtitle="Cztery filary jakości"
      title="Elastyczny partner dla Twojej marki"
      description="Od startupu po globalną skalę - łączymy psychologię, design i technologię, aby Twoja firma przyciągała właściwych klientów."
      items={missionItems}
      grid="two"
    />
  );
}
