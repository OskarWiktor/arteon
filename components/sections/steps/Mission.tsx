'use client';

import Image from 'next/image';
import SectionSteps from '../../ui/sections/SectionSteps';

const missionItems = [
  {
    icon: <Image src="/assets/woda.png" width={60} height={60} alt="Woda" />,
    title: 'Woda',
    borderClassName: 'border-b-[#5f9ea0]',
    description: <>Woda to płynność formy i głębia przekazu. Projektujemy strony, które poruszają zmysły i zostają w pamięci.</>,
  },
  {
    icon: <Image src="/assets/ziemia.png" width={60} height={60} alt="Ziemia" />,
    title: 'Ziemia',
    borderClassName: 'border-b-[#bdb76b]',
    description: <>Ziemia to struktura. Stabilna, cicha siła działania. Kodujemy z precyzją i dbamy o solidny fundament Twojej obecności w sieci.</>,
  },
  {
    icon: <Image src="/assets/ogien.png" width={60} height={60} alt="Ogień" />,
    title: 'Ogień',
    borderClassName: 'border-b-[#a52a2a]',
    description: <>Ogień to intencja. Energia strategii i wizji. Rozpalamy uwagę, kierujemy ruchem, sprawiamy, że marka zaczyna żyć w świadomości odbiorcy.</>,
  },
  {
    icon: <Image src="/assets/powietrze.png" width={60} height={60} alt="Powietrze" />,
    title: 'Powietrze',
    borderClassName: 'border-b-[#778899]',
    description: <>Powietrze to przekaz. Lekki, szybki i skuteczny. Budujemy komunikację, która niesie wartość – przez słowo, obraz i zasięg.</>,
  },
];

export default function Mission() {
  return <SectionSteps items={missionItems} />;
}
