import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import WorkSteps from '@/components/sections/steps/WorkSteps';
import TechStack from '@/components/sections/TechStack';
import Gap from '@/components/ui/Gap';
import SectionBasic from '@/components/ui/sections/SectionBasic';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import Link from 'next/link';
import { RiFileTextLine, RiMegaphoneLine } from 'react-icons/ri';

export const metadata = {
  title: 'O nas | Arteon',
  description: 'Kim jesteśmy, jak pracujemy i dlaczego klienci nam ufają. Poznaj proces, standardy jakości, narzędzia oraz historie projektów Arteon.',
  alternates: { canonical: '/o-nas' },
};

export default function AboutPage() {
  return (
    <>
      <HeroBanner title="O nas" description="Arteon - Elastyczny partner dla Twojej firmy" backgroundImage="/assets/bg/abstract-bg8.webp" overlay="black" variant="center" />
      <BenefitBelt
        items={[
          { icon: <RiMegaphoneLine />, label: 'Doświadczenie w pracy dla marek globalnych' },
          { icon: <RiFileTextLine />, label: 'Prosty proces i jasne zasady współpracy' },
        ]}
      />
      <Wrapper as="article" itemScope itemType="https://schema.org/AboutPage">
        <Gap size="sm" />

        <SectionBasic imageSrc="/assets/arteon-sygnet-01.png" imageAlt="logo arteon" title="Kim jesteśmy">
          <p>W Arteon wierzymy, że wysoka jakość usług, powinna być dostępna dla każdego. Wdrażamy doświadczenie w pracy dla globalnych marek w małych i średnich biznesach.</p>
          <p className="mt-2">
            Tworzymy nowoczesne strony internetowe, sklepy online, blogi i aplikacje webowe. Projektujemy identyfikacje wizualne, prowadzimy marketing internetowy, pozycjonowanie oraz kampanie
            reklamowe. Przygotowujemy treści sprzedażowe i blogowe, dbając o to, by Twoja firma była widoczna w sieci i przyciągała właściwych klientów. Łączymy design, technologię i strategię, aby
            Twój biznes rósł szybko i bezpiecznie.
          </p>
        </SectionBasic>

        <Gap variant="line" />

        <SectionInfo
          title="Dlaczego powstaliśmy?"
          description="Firmy nie potrzebują już „samej strony”. Potrzebują klarownej oferty, treści, które prowadzą odbiorcę krok po kroku, oraz widoczności, która buduje się od pierwszego dnia. Dlatego działamy w
            modelu: strategia → projekt → realizacja → widoczność."
        ></SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Co nas wyróżnia?"
          grid="two"
          items={[
            {
              title: 'Komplet usług wokół Twojej strony',
              description: (
                <p>Strona, sklep, blog. Do tego grafika, branding, marketing, treści i budowa widoczności - wszystko w jednym miejscu. Dbamy o WCAG i podstawy prawne, żebyś startował bez ryzyka.</p>
              ),
            },
            {
              title: 'Dobór technologii do celu',
              description: (
                <p>
                  Najpierw cel. Potem narzędzia. Dobieramy technologię tak, by szybciej dojść do wyniku, w ramach Twojego budżetu i skali. Tłumaczymy każdą decyzję prosto, bez technicznego żargonu.
                </p>
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
                  <Link href="/regulamin" className="inline underline underline-offset-4">
                    regulaminie
                  </Link>
                  . Po wdrożeniu, dwa miesiące wsparcia w cenie.
                </p>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <WorkSteps />

        <Gap variant="line" />

        <TechStack />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Zacznijmy od rozmowy"
        description="Jasny plan i odpowiedzialność po naszej stronie. Niezależnie od wymagań - znajdziemy najlepszą drogę do efektu."
        primaryLabel="Skontaktuj się"
        primaryLink="/kontakt"
        secondaryLabel="Poznaj ofertę"
        secondaryLink="/uslugi"
        backgroundImage="/assets/bg/abstract-bg8.webp"
        overlay="black"
      />
    </>
  );
}
