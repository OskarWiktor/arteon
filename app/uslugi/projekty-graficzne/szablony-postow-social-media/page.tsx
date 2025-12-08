import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionPrices from '@/components/ui/sections/SectionPrices';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Button from '@/components/ui/Button';
import { IoColorPalette } from 'react-icons/io5';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiFileTextLine, RiLayoutLine, RiMoneyDollarCircleLine } from 'react-icons/ri';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';

export const metadata = {
  title: 'Szablony postów social media | Arteon',
  description: 'Projektujemy spójne szablony postów do social mediów. Gotowe, edytowalne pliki ułatwiające regularną publikację.',
  alternates: {
    canonical: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/szablony-postow-social-media',
  },
  openGraph: {
    title: 'Szablony postów social media | Arteon',
    description: 'Projektujemy spójne szablony postów do social mediów. Gotowe, edytowalne pliki ułatwiające regularną publikację.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/szablony-postow-social-media',
    type: 'website',
  },
} as const;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/projekty-graficzne/szablony-postow-social-media',
    serviceName: 'Szablony postów social media',
    description: 'Szablony postów do social mediów: spójne z marką, łatwe do edycji, przygotowane pod wybrane media społecznościowe. Gotowe zestawy + instrukcja użycia.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-szablony-postow-social-media" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignSzablonyPostowPage() {
  return (
    <>
      <HeroBanner
        title="Szablony postów social media"
        description={
          <>
            Uporządkuj wygląd swoich profili i odzyskaj czas. Projektujemy edytowalne szablony do Instagrama, Facebooka, LinkedIna i TikToka - spójne z marką, gotowe do szybkiej edycji, pomagające w
            regularnej publikacji.
          </>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/projects/arteon-baner-szablon-social-media-msc-mockup.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiPencilRuler2Line />, label: 'Spójność marki' },
          { icon: <RiBrushLine />, label: 'Perfekcja detalu' },
          { icon: <RiBarChart2Fill />, label: 'Transparentna współpraca' },
          { icon: <RiLightbulbFlashLine />, label: 'Psychologia w praktyce' },
        ]}
      />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/projekty-graficzne`, label: 'Projekty graficzne' }}
        fourth={{
          href: `/uslugi/projekty-graficzne/szablony-postow-social-media`,
          label: 'Szablony postów social media',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskujesz dzięki szablonom postów?">
          <p>
            <strong>Stały, rozpoznawalny styl w całej komunikacji.</strong> Szablony utrzymują wspólny charakter postów, dzięki czemu odbiorca szybciej kojarzy Twoją markę, a profil wzbudza większe
            zaufanie wsród Twoich klientów.
          </p>

          <br />

          <p>
            Dzięki przemyślanej strukturze relacji, zaoszczędzisz czas na tworzeniu kolejnych publikacji. Gotowe szablony znacząco ułatwią Ci pracę, dzięki nim będziesz w stanie dodawać więcej relacji
            co bezpośrednio przełoży sie na szybszy wzrost obserwacji.
          </p>

          <br />

          <p>
            <strong>Dobrze zaprojektowane szablony robią za Ciebie trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Podnoszą zaufanie do marki, bo wszystko wygląda spójnie i profesjonalnie,</li>
            <li>Przyspieszają przygotowanie nowych treści,</li>
            <li>Wzmacniają rozpoznawalność, bo odbiorca zapamiętuje charakter Twoich publikacji.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co dostajesz w ramach usługi?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Spójny system wizualny',
              description: <>Dopasowujemy kolory, typografię i styl do Twojej marki lub tworzymy nowy kierunek od zera - zgodnie z grupą odbiorców i charakterem komunikacji.</>,
              icon: <IoColorPalette className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Edytowalne pliki',
              description: (
                <>Otrzymujesz pliki, które z łatwością edytujesz (np. w Figmie lub Canvie), wraz z krótką instrukcją. Tekst, zdjęcia czy kolory zmienisz bez znajomości zaawansowanych programów.</>
              ),
              icon: <RiFileTextLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'System pod różne typy postów',
              description: <>Projektujemy zestaw układów pod konkretne formaty: post informacyjny, oferta, opinia, poradnik, cytat, karuzela, okładka wideo czy zapowiedź wydarzenia.</>,
              icon: <RiLayoutLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Faktura po realizacji',
              description: <>Płacisz dopiero po otrzymaniu gotowego projektu w finalnej formie.</>,
              icon: <RiMoneyDollarCircleLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Dla kogo szablony postów mają największy sens?" subtitle="Dla kogo">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Dla mikro i małych firm,</strong> które chcą przyśpieszyć rozwój swojej firmy.
            </li>
            <li>
              <strong>Dla specjalistów i edukatorów</strong> - psychoterapeutów, trenerów, doradców - którzy regularnie dzielą się wiedzą i potrzebują estetycznych, czytelnych układów.
            </li>
            <li>
              <strong>Dla e-commerce i biznesów lokalnych,</strong> gdzie ważna jest powtarzalność promocji: nowości, rabaty, stałe cykle publikacji.
            </li>
            <li>
              <strong>Dla prywatnych osób,</strong> które dopiero zaczynają budować swój wizerunek w sieci.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Jakie efekty zobaczysz po wdrożeniu szablonów?" subtitle="Efekty po wdrożeniu">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Regularny rytm publikacji</strong> - łatwiej będzie Ci zaplanować serię postów, bo wizualna część będzie już przygotowana.
            </li>
            <li>
              <strong>Lepsze pierwsze wrażenie na profilu,</strong> szczególnie dla nowych osób, które wchodzą na Twój profil.
            </li>
            <li>
              <strong>Mniej poprawek graficznych,</strong> bo raz ustalony styl i gotowe układy pozwalają skupić się na treści.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <ProjectsOverview title="Wyróżnione realizacje projektów graficznych" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <SectionPrices
          title="Szablony postów - przykładowe pakiety"
          subtitle="Zakresy, które najczęściej wybierają klienci"
          plans={[
            {
              name: 'Pakiet Start - profil solo',
              price: 'wycena indywidualna',
              description: 'Dla jednoosobowych działalności i specjalistów, którzy chcą uporządkować podstawową komunikację w jednym kanale (np. Instagram lub Facebook).',
              features: [
                'Analiza obecnego profilu i stylu komunikacji',
                'Zestaw bazowych szablonów (np. informacyjny, oferta, opinia, cytat, okładka wideo)',
                'Dopasowanie kolorów i typografii do marki',
                'Przekazanie plików edytowalnych (Figma lub Canva)',
                'Krótka instrukcja korzystania z szablonów',
              ],
              btnOne: 'Zamów wycenę pakietu Start',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Pakiet Standard - marka i cykl treści',
              price: 'wycena indywidualna',
              description: 'Dla marek, które publikują regularnie i chcą mieć kompletny system szablonów pod różne formaty treści i kilkanaście typów postów.',
              features: [
                'Wszystko z pakietu Start, a dodatkowo:',
                'Rozbudowany zestaw szablonów pod różne serie treści (poradniki, case study, karuzele)',
                'Warianty pod kilka formatów: feed, stories, okładki Reels/Shorts',
                'Propozycja systemu oznaczeń (ikonki, kolory dla cykli treści)',
              ],
              btnOne: 'Zamów wycenę pakietu Standard',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Pakiet Pro - zestaw dla zespołu',
              price: 'wycena indywidualna',
              description: 'Dla firm, które prowadzą kilka profili lub komunikację w kilku językach i potrzebują wspólnego systemu dla całego zespołu.',
              features: [
                'Wszystko z pakietu Standard, a dodatkowo:',
                'Dostosowanie szablonów do kilku profili lub języków',
                'Rozszerzony zestaw widoków (np. LinkedIn, Pinterest, banery pod kampanie)',
                'Mini-brandbook social media: zasady stosowania, przykłady dobrych i złych zastosowań',
              ],
              btnOne: 'Porozmawiajmy o pakiecie Pro',
              btnOneLink: '#kontakt',
            },
          ]}
          legalNote="Zakres i liczba szablonów dopasowujemy indywidualnie do TWoich potrzeb Twojej marki i kanałów. Po krótkim briefie przygotujemy konkretną wycenę i harmonogram."
        />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap variant="line" />

        <ContactForm
          title="Zamów szablony postów social media"
          description="Opisz, czym się zajmujesz, na jakich platformach publikujesz treści (Instagram, Facebook, LinkedIn, TikTok) i jakie szablony chciałbyś stworzyć. Na tej podstawie przygotujemy wycenę, termin i rekomendacje"
          defaultSubject="Szablony postów social media"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/szablony-postow-social-media"
          title="Najczęstsze pytania o szablony postów"
          items={[
            {
              question: 'W jakich programach dostanę szablony postów?',
              answer:
                'Standardowo przekazujemy pliki w Figmie, Canvie lub Affinity. To wygodne narzędzia, dzięki którym z łatwością edytujesz teksty, wymienisz zdjęcia i dostosujesz kolory do aktualnych kampanii.',
            },
            {
              question: 'Jak szybko powstają szablony postów?',
              answer: 'Standardowo prace trwają około od 3 do 5 dni roboczych. Dokładny termin zależy od liczby wariantów i liczby platform, na które przygotowujemy szablony.',
            },
            {
              question: 'Czy szablony będą spójne z moją stroną i identyfikacją?',
              answer: 'Tak. Jeśli masz już identyfikację wizualną lub stronę internetową, dopasujemy szablony do istniejącego stylu.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Z czym najlepiej połączyć projekt szablonów do mediów społecznościowych"
          subtitle="Zobacz też"
          description="Projekt szablonów najczęściej łączymy z uporządkowaniem identyfikacji wizualnej i stworzeniem własnej strony internetowej."
          items={[
            {
              icon: <RiLayoutLine className="h-8 w-8" />,
              title: 'Strony internetowe',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Twoje szablony mogą odsyłać klientów do odwiedzenia Twojej witryna na której będą mogli np. przeczytać szczegóły Twojej oferty, zarezerwować spotkanie czy kupić produkt.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-graficzny-strony">
                      Zobacz ofertę stworzenia strony internetowej
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <IoColorPalette className="h-8 w-8" />,
              title: 'Projekt identyfikacji wizualnej',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Aby wszystko było spójne, możesz rozwarzyć stworzenie pełnej identyfikacji wizualnej: logo, wizytówki, ulotki - wszystko zrealizujesz w jednym miejscu.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej">
                      Zobacz projekt identyfikacji wizualnej
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
          grid="two"
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Stwórz spójną komunikację w mediach społecznościowych"
        description="Dostarczymy szablony, dzięki którym publikacje będą szybsze, prostsze i bardziej spójne z Twoją marką."
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        btnTwo="Poznaj inne usługi graficzne"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/projects/arteon-baner-szablon-social-media-msc-mockup.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
