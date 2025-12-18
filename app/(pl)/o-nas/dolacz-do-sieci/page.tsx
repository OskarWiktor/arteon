import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ContactForm from '@/components/sections/ContactForm';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import type { Metadata } from 'next';
import { RiAppsLine, RiPantoneLine, RiShareForwardLine } from 'react-icons/ri';

const SITE_URL = 'https://www.arteonagency.pl';
const PAGE_URL = `${SITE_URL}/o-nas/dolacz-do-sieci`;

export const metadata: Metadata = {
  title: 'Dołącz do sieci Arteon — współpraca partnerska',
  description:
    'Arteon rozwija sieć partnerów i podwykonawców, aby realizować projekty kompleksowo. Jeśli tworzysz wideo, animacje, 3D lub aplikacje mobilne, napisz kilka słów o sobie i o kierunku, w którym się rozwijasz.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Dołącz do sieci Arteon — współpraca partnerska',
    description:
      'Arteon rozwija sieć partnerów i podwykonawców, aby realizować projekty kompleksowo. Jeśli tworzysz wideo, animacje, 3D lub aplikacje mobilne, napisz kilka słów o sobie i o kierunku, w którym się rozwijasz.',
    url: PAGE_URL,
    type: 'website',
    images: [{ url: `${SITE_URL}/assets/arteon-logo-on-mockup.webp` }],
  },
};

export default function JoinNetworkPage() {
  return (
    <>
      <HeroBanner
        title="Dołącz do sieci Arteon"
        description="Arteon to przestrzeń tworzona przez ludzi, którzy lubią dowozić jakość. Łączymy kompetencje, kiedy projekt potrzebuje czegoś więcej niż web i grafika. Jeśli tworzysz wideo, animacje, 3D albo aplikacje mobilne, odezwij się. Chcemy poznawać osoby, które mają swój kierunek, dbają o estetykę i dobrze czują współpracę opartą na jasnych zasadach."
        buttonAccent="Napisz do nas"
        buttonAccentLink="#kontakt"
        buttonSecond="Zobacz FAQ"
        buttonSecondLink="/o-nas/faq"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
        variant="center"
      />

      <Breadcrumbs
        second={{ href: '/o-nas', label: 'O nas' }}
        third={{ href: '/o-nas/dolacz-do-sieci', label: 'Dołącz do sieci' }}
        includeJsonLd
      />

      <Wrapper as="article" itemScope itemType="https://schema.org/WebPage">
        <Gap size="xs" />

        <SectionInfo
          title="Tworzymy sieć partnerów, żeby robić projekty szerzej"
          description="Klienci coraz częściej potrzebują pełnego pakietu: strony, treści, motion, wideo, 3D albo aplikacji. Arteon zbiera wokół siebie osoby, z którymi da się dowieźć projekt od pomysłu do efektu, bez przypadków i bez kompromisów jakościowych."
        >
          <p className="mt-2 text-mid">
            Ta strona jest prostym zaproszeniem do kontaktu. Jeśli tworzysz rzeczy, z których jesteś dumny, i chcesz pracować z ludźmi, którzy szanują Twoją robotę, to jesteś w dobrym miejscu.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="W jakich obszarach najczęściej szukamy wsparcia?"
          description="Największe zapotrzebowanie pojawia się tam, gdzie marki walczą dziś o uwagę i emocje: wideo, animacje, 3D i produkty cyfrowe. Jeśli działasz w tych kierunkach, możemy do siebie wracać regularnie."
          grid="two"
          items={[
            {
              title: 'Wideo i montaż',
              icon: <RiShareForwardLine className="h-6 w-6 text-slate-500" />,
              description: (
                <p>
                  Montaż rolek i krótkich formatów, materiały do kampanii, content na social media i formaty, które dobrze wyglądają,
                  a przy okazji działają.
                </p>
              ),
            },
            {
              title: 'Animacje i motion',
              icon: <RiPantoneLine className="h-6 w-6 text-slate-500" />,
              description: (
                <p>
                  Motion design do reklam, stron, prezentacji i social media. Dobre tempo, estetyka i umiejętność dopasowania do marki.
                </p>
              ),
            },
            {
              title: 'Grafika 3D i wizualizacje',
              icon: <RiPantoneLine className="h-6 w-6 text-slate-500" />,
              description: (
                <p>
                  Wizualizacje produktów, sceny 3D, elementy do kampanii i content, który robi wrażenie, gdy marka potrzebuje „czegoś więcej”.
                </p>
              ),
            },
            {
              title: 'Aplikacje mobilne i rozwiązania produktowe',
              icon: <RiAppsLine className="h-6 w-6 text-slate-500" />,
              description: (
                <p>
                  iOS/Android, MVP, prototypy i rozwój funkcji. Projekty, które mają być czytelne dla użytkownika i gotowe do wdrożenia.
                </p>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo
          title="Jak wygląda współpraca?"
          description="W praktyce działa to prosto. Arteon prowadzi komunikację z klientem i dba o spójność projektu, a partner realizuje swój zakres pracy. Wybieramy model, który jest wygodny dla obu stron i pasuje do danego projektu."
        >
          <ul className="mt-4 list-disc space-y-2 pl-5 text-mid">
            <li>Ja pozyskuję klienta i zbieram potrzeby, a potem przekazuję Ci jasno określony zakres pracy.</li>
            <li>Rozliczamy się procentowo od ustalonego zakresu. To jest współpraca B2B lub umowa o dzieło, zależnie od sytuacji.</li>
            <li>Współpraca może być jednorazowa albo cykliczna. Jeśli dobrze się dogadujemy, wracamy do siebie naturalnie.</li>
            <li>Najważniejsze są trzy rzeczy: jakość, komunikacja i dotrzymywanie ustaleń.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <ContactForm
          title="Napisz kilka słów o sobie"
          description="Napisz, co tworzysz, co lubisz robić najbardziej i w jakim kierunku chcesz się rozwijać. Dodaj też, w jakiej formie najwygodniej Ci współpracować (B2B lub umowa o dzieło) i jaki masz zwykle tryb dostępności. Linków nie trzeba dodawać — najpierw chcemy poznać człowieka."
          defaultSubject="Sieć Arteon — współpraca partnerska"
        />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Poznajmy się"
        description="Jeśli tworzysz dopracowane rzeczy i chcesz współpracować w spokojnym, partnerskim stylu, napisz kilka zdań. Gdy pojawi się projekt z dopasowaniem, odezwiemy się z konkretem."
        btnOne="Napisz do nas"
        btnOneLink="#kontakt"
        btnTwo="Poznaj Arteon"
        btnTwoLink="/o-nas"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
