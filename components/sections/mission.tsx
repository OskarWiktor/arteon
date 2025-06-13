import Image from 'next/image';
import Wrapper from '../ui/Wrapper';

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
    <Wrapper>
      <section className="mt-24 flex flex-wrap">
        {missionItems.map(({ imageAlt, imageSrc, content, border }) => {
          return (
            <div key={imageAlt} className="flex min-h-72 w-full flex-col items-center pr-4 pl-4 md:w-1/2 lg:w-1/4">
              <Image src={imageSrc} width={60} height={60} className="mr-auto ml-auto" alt={imageAlt} />
              <h3 className={`mb-4 w-fit border-b-2 text-center text-xl capitalize ${border}`}>{imageAlt}</h3>
              <p className="text-center">{content}</p>
            </div>
          );
        })}
      </section>
    </Wrapper>
  );
}
