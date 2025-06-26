'use client';

import Image from 'next/image';
import SectionFour from '../ui/SectionFour';

const missionItems = [
  {
    imageAlt: 'woda',
    imageSrc: '/assets/woda.png',
    content: 'Woda to płynność formy i głębia przekazu. Projektujemy strony, które poruszają zmysły i zostają w pamięci.',
    border: 'border-b-[#5f9ea0]',
  },
  {
    imageAlt: 'ziemia',
    imageSrc: '/assets/ziemia.png',
    content: 'Ziemia to struktura. Stabilna, cicha siła działania. Kodujemy z precyzją i dbamy o solidny fundament Twojej obecności w sieci.',
    border: 'border-b-[#bdb76b]',
  },
  {
    imageAlt: 'ogień',
    imageSrc: '/assets/ogien.png',
    content: 'Ogień to intencja. Energia strategii i wizji. Rozpalamy uwagę, kierujemy ruchem, sprawiamy, że marka zaczyna żyć w świadomości odbiorcy.',
    border: 'border-b-[#a52a2a]',
  },
  {
    imageAlt: 'powietrze',
    imageSrc: '/assets/powietrze.png',
    content: 'Powietrze to przekaz. Lekki, szybki i skuteczny. Budujemy komunikację, która niesie wartość – przez słowo, obraz i zasięg.',
    border: 'border-b-[#778899]',
  },
];

export default function Mission() {
  return (
    <SectionFour
      items={missionItems}
      renderItem={({ imageAlt, imageSrc, content, border }, index) => (
        <article role="group" aria-labelledby={`mission-title-${index}`} aria-describedby={`mission-desc-${index}`} tabIndex={0} className="flex flex-col py-2">
          <Image src={imageSrc} width={60} height={60} alt={imageAlt} />
          <h4 id={`mission-title-${index}`} className={`mt-2 mb-4 w-fit border-b-2 capitalize ${border}`} tabIndex={0}>
            {imageAlt}
          </h4>
          <p id={`mission-desc-${index}`} tabIndex={0}>
            {content}
          </p>
        </article>
      )}
    />
  );
}
