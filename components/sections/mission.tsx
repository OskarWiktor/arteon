import Image from 'next/image';

const missionItems = [
  { imageAlt: 'woda', imageSrc: '/assets/woda.png', content: 'asjjdnjw sdjansjdd asndjnasndj asdnasndjasdnans sdnsdjh dabd das d ad sdbd dahu uihuih njkj' },
  { imageAlt: 'ziemia', imageSrc: '/assets/ziemia.png', content: 'asjjdnjw sdjansjdd asndjnasndj asdnasndjasdnans sdnsdjh dabd das d ad sdbd dahu uihuih njkj' },
  { imageAlt: 'ogień', imageSrc: '/assets/ogien.png', content: 'asjjdnjw sdjansjdd asndjnasndj asdnasndjasdnans sdnsdjh dabd das d ad sdbd dahu uihuih njkj' },
  { imageAlt: 'powietrze', imageSrc: '/assets/powietrze.png', content: 'asjjdnjw sdjansjdd asndjnasndj asdnasndjasdnans sdnsdjh dabd das d ad sdbd dahu uihuih njkj' },
];

export default function Mission() {
  return (
    <section className="mt-16 flex flex-wrap">
      {missionItems.map(({ imageAlt, imageSrc, content }) => {
        return (
          <div className="min-h-72 w-full bg-amber-200 pt-6 pr-4 pb-10 pl-4 md:w-1/2 lg:w-1/4">
            <Image src={imageSrc} width={60} height={60} className="m-auto" alt={imageAlt} />
            <p className="mt-1">{content}</p>
          </div>
        );
      })}
    </section>
  );
}
