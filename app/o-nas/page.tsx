import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import HeroBaner from '@/components/sections/HeroBaner';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import WhatSetsUsApartSteps from '@/components/sections/steps/WhatSetsUsApartSteps';
import WorkSteps from '@/components/sections/steps/WorkSteps';
import TechStack from '@/components/sections/TechStack';
import Gap from '@/components/ui/Gap';
import SectionBasic from '@/components/ui/sections/SectionBasic';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { RiFileTextLine, RiMegaphoneLine } from 'react-icons/ri';

export const metadata = {
  title: 'O nas | Arteon',
  description: 'Kim jesteśmy, jak pracujemy i dlaczego klienci nam ufają. Poznaj proces, standardy jakości, narzędzia oraz historie projektów Arteon.',
  alternates: { canonical: '/o-nas' },
};

export default function AboutPage() {
  return (
    <>
      <HeroBaner
        title="O nas"
        subtitle="Arteon - Twój partner"
        description="Budujemy strony i komunikację, które sprzedają - z naciskiem na czytelność, szybkość i realny efekt biznesowy."
        backgroundImage="/assets/bg/abstract-bg2.webp"
        overlay="black"
      />
      <BenefitBelt
        items={[
          { icon: <RiMegaphoneLine />, label: 'Doświadczenie w pracy dla marek globalnych' },
          { icon: <RiFileTextLine />, label: 'Prosty proces i jasne zasady współpracy' },
        ]}
      />
      <Wrapper as="article" itemScope itemType="https://schema.org/AboutPage">
        <Gap size="sm" />

        <SectionBasic imageSrc="/assets/arteon-sygnet-01.png" imageAlt="logo arteon" title="Kim jesteśmy">
          <p>W Arteon wierzymy, że wysoka jakość usług online, powinna być dostępna dla każdego. Wdrażamy doświadczenie w pracy dla globalnych marek w małych i średnich biznesach.</p>
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
            modelu: strategia → projekt → wdrożenie → widoczność."
        ></SectionInfo>

        <Gap variant="line" />

        <WhatSetsUsApartSteps />

        <Gap variant="line" />

        <WorkSteps />

        <Gap variant="line" />

        <TechStack />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner
        title="Zacznijmy od rozmowy"
        description="Jasny plan i odpowiedzialność po naszej stronie. Niezależnie od wymagań - znajdziemy najlepszą drogę do efektu."
        primaryLabel="Skontaktuj się"
        primaryLink="/kontakt"
        secondaryLabel="Poznaj ofertę"
        secondaryLink="/uslugi"
        backgroundImage="/assets/bg/abstract-bg2.webp"
        overlay="black"
      />

      {/* JSON-LD: Organization + FAQ */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Arteon',
            url: 'https://www.arteonagency.pl',
            email: 'contact@arteonagency.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Zagacie',
              postalCode: '32-070',
              streetAddress: 'ul. Jaśminowa 36',
              addressCountry: 'PL',
            },
            sameAs: [],
          }),
        }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Ile trwa projekt strony?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'To zależy od zakresu. Strona firmowa z blogiem to zwykle kilka tygodni. Landing page szybciej. Kluczowe jest szybkie zatwierdzanie etapów.',
                },
              },
              {
                '@type': 'Question',
                name: 'Czy mogę samodzielnie edytować treści?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tak. Dostajesz panel CMS oraz krótkie instrukcje PDF/Video. W razie potrzeby wdrożymy dalsze automatyzacje.',
                },
              },
              {
                '@type': 'Question',
                name: 'Czy zajmujecie się hostingiem?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Nie świadczymy hostingu. Pomożemy dobrać i skonfigurować infrastrukturę lub wdrożymy na środowisku, z którego korzystasz.',
                },
              },
              {
                '@type': 'Question',
                name: 'Jak wyglądają rozliczenia?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Zgodnie z Regulaminem: progi płatności i kamienie milowe są znane z góry. Faktury VAT-zw. (jeśli przysługuje). Termin standardowy: 7 dni.',
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
