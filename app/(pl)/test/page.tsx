import SectionImageGallery from '@/components/organisms/sections/SectionImageGallery';

export default function HomePage() {
  return (
    <>
      <SectionImageGallery
        grid='six'
        images={[
          {
            alt: 'Autokorfu',
            src: '/assets/projects/autokorfu/autokorfu-optymalizacja-strony-wynik-przed.webp',
          },
          {
            alt: 'Autokorfu',
            src: '/assets/projects/autokorfu/autokorfu-optymalizacja-strony-wynik-po.webp',
          },
          {
            alt: 'Camper Albania',
            src: '/assets/projects/camper-albania/camper-albania-optymalizacja-strony-wynik-przed.webp',
          },
          {
            alt: 'Camper Albania',
            src: '/assets/projects/camper-albania/camper-albania-optymalizacja-strony-wynik-po.webp',
          },
          {
            alt: 'MSC Psychotherapy',
            src: '/assets/projects/msc/msc-optymalizacja-strony-wynik-przed.webp',
          },
          {
            alt: 'MSC Psychotherapy',
            src: '/assets/projects/msc/msc-optymalizacja-strony-wynik-po.webp',
          },
          {
            alt: 'Eliza Wrońska',
            src: '/assets/projects/eliza-wronska/eliza-wronska-optymalizacja-strony-wynik-przed.webp',
          },
          {
            alt: 'Eliza Wrońska',
            src: '/assets/projects/eliza-wronska/eliza-wronska-optymalizacja-strony-wynik-po.webp',
          },
          {
            alt: 'NaPilota',
            src: '/assets/projects/napilota/napilota-wynik-wydajnosci-witryny.webp',
          },
          {
            alt: 'StepArd',
            src: '/assets/projects/stepard/strona/stepard-wynik-wydajnosci-witryny.webp',
          },
          { alt: 'Izoluk', src: '/assets/projects/izoluk/izoluk-optymalizacja-strony-wynik.webp' },
          {
            alt: 'Finish Masters',
            src: '/assets/projects/finish-masters/strona/finish-masters-optymalizacja-strony-wynik.webp',
          },
        ]}
      />
    </>
  );
}
