import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import ProjectsCarousel from '@/components/sections/projects/ProjectsCarousel';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import WorkSteps from '@/components/sections/steps/WorkSteps';
import TechStack from '@/components/sections/TechStack';
import Gap from '@/components/ui/Gap';
import SectionBasic from '@/components/ui/sections/SectionBasic';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import Link from 'next/link';
import { RiCodeSSlashFill, RiLightbulbFlashLine, RiMegaphoneLine, RiPaletteLine } from 'react-icons/ri';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getAboutAlternates } from '@/lib/i18n/pages/about';

const profilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: 'Arteon',
    url: siteUrl,
    foundingDate: '2020',
    knowsAbout: ['Web Development', 'Web Design', 'Graphic Design', 'E-commerce', 'SEO', 'WordPress', 'Next.js', 'Online Marketing', 'Brand Identity', 'UI/UX Design'],
  },
  dateCreated: '2024-01-01',
  dateModified: '2025-03-05',
};

export const metadata = {
  title: 'O nas - strategia, kreacja i widoczność - Arteon',
  description: 'Poznaj Arteon: łączymy strategię, branding, technologię i marketing w jeden proces. Zobacz, jak pracujemy i dlaczego klienci nam ufają.',
  alternates: getAboutAlternates('pl'),
  openGraph: {
    title: 'O nas - strategia, kreacja i widoczność - Arteon',
    description: 'Poznaj Arteon: łączymy strategię, branding, technologię i marketing w jeden proces. Zobacz, jak pracujemy i dlaczego klienci nam ufają.',
    url: toAbsoluteUrl('/o-nas'),
    type: 'website',
    // TODO: Add unique OpenGraph image for about page: /assets/og/o-nas.webp (1200x630px)
    images: [
      {
        url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'),
        width: 1200,
        height: 630,
        alt: 'O nas - Arteon',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }} />
      <HeroBanner
        title="O nas"
        description="Arteon - strategia, kreacja i widoczność, które przynoszą rezultaty"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
        variant="center"
      />
      <BenefitBelt
        items={[
          { icon: <RiLightbulbFlashLine className="text-primary h-6 w-6" />, label: 'Strategia i plan działania' },
          { icon: <RiPaletteLine className="text-primary h-6 w-6" />, label: 'Branding i design' },
          { icon: <RiCodeSSlashFill className="text-primary h-6 w-6" />, label: 'Technologia (strony i sklepy)' },
          { icon: <RiMegaphoneLine className="text-primary h-6 w-6" />, label: 'Widoczność i marketing' },
        ]}
      />
      <Wrapper as="article" itemScope itemType="https://schema.org/AboutPage">
        <Gap size="sm" />

        <SectionBasic imageSrc="/assets/arteon-sygnet-01.webp" imageAlt="logo arteon" title="Kim jesteśmy">
          <p>
            W Arteon łączymy strategię, design i technologię w jeden proces. Wdrażamy doświadczenie z pracy dla globalnych marek w małych i średnich biznesach - tak, żeby Twoja marka była spójna, a
            działania przynosiły konkretne rezultaty.
          </p>
          <p className="mt-2">
            Nie sprzedajemy „samej strony”. Zaczynamy od celu (zapytania, sprzedaż, rekrutacja, wizerunek), a dopiero potem dobieramy narzędzia: ofertę, identyfikację, treści, wdrożenie i kanały
            dotarcia.
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-6">
            <li>Strategia i architektura oferty</li>
            <li>Branding i projekty graficzne</li>
            <li>Strony, sklepy i aplikacje webowe</li>
            <li>Treści, SEO i widoczność</li>
            <li>Kampanie, analityka i optymalizacja</li>
          </ul>
        </SectionBasic>

        <Gap variant="line" />

        <SectionInfo
          title="Dlaczego powstaliśmy?"
          description="Widzimy powtarzający się problem: firmy inwestują w pojedyncze elementy (strona, reklamy, logo), ale bez spójnej oferty, treści i planu te działania nie składają się na wynik. Dlatego pracujemy w modelu: diagnoza → plan → realizacja → pomiar → optymalizacja."
        ></SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Co nas wyróżnia?"
          grid="two"
          items={[
            {
              title: 'Komplet usług wokół Twojej oferty i komunikacji',
              description: <p>Jedna odpowiedzialność, jeden plan: strategia, kreacja, wdrożenie i widoczność. Bez rozbijania pracy na kilku wykonawców.</p>,
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
              title: 'Widoczność i pomiar od startu',
              description: <p>SEO i analityka od pierwszego dnia: struktura, treści i techniczne podstawy. Po wdrożeniu dostajesz propozycję „co dalej”, żeby rosnąć szybciej.</p>,
            },

            {
              title: 'Gwarancja i proste rozliczenia',
              description: (
                <p>
                  Jasne zasady: faktura po realizacji (małe projekty), przy większych niska zaliczka i kamienie milowe. Gwarancja opisana w{' '}
                  <Link href="/regulamin" className="inline underline underline-offset-4">
                    regulaminie
                  </Link>
                  . Po wdrożeniu dwa miesiące wsparcia w cenie.
                </p>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <WorkSteps />

        <Gap variant="line" />

        <ProjectsCarousel title="Wybrane realizacje" />

        <Gap variant="line" />

        <TestimonialsCarousel title="Opinie klientów" />

        <Gap variant="line" />

        <TechStack />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Zacznijmy od rozmowy"
        description="Jasny plan i odpowiedzialność po naszej stronie. Niezależnie od wymagań znajdziemy najlepszą drogę do osiągnięcia zamierzonych celów."
        btnOne="Skontaktuj się"
        btnOneLink="/kontakt"
        btnTwo="Poznaj ofertę"
        btnTwoLink="/uslugi"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
