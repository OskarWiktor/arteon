import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ContactForm from '@/components/sections/ContactForm';
import HeroBanner from '@/components/sections/HeroBanner';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import type { Metadata } from 'next';
import { RiAppsLine, RiPantoneLine, RiShareForwardLine } from 'react-icons/ri';
import { toAbsoluteUrl } from '@/lib/absoluteUrl';

export const metadata: Metadata = {
  title: 'Dołącz do sieci Arteon',
  description: 'Stale rozwijamy sieć partnerów, mając na celu stworzenie przestrzeni, w której można zrealizować wszystko. Sprawdź, kogo szukamy teraz.',
  alternates: { canonical: toAbsoluteUrl('/o-nas/dolacz-do-sieci') },
  openGraph: {
    title: 'Dołącz do sieci Arteon',
    description: 'Stale rozwijamy sieć partnerów, mając na celu stworzenie przestrzeni, w której można zrealizować wszystko. Sprawdź, kogo szukamy teraz.',
    url: toAbsoluteUrl('/o-nas/dolacz-do-sieci'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp') }],
  },
};

export default function JoinNetworkPage() {
  return (
    <>
      <HeroBanner
        title="Dołącz do sieci Arteon"
        description="Stale rozwijamy sieć partnerów, mając na celu stworzenie przestrzeni, w której można zrealizować wszystko. Sprawdź, kogo szukamy teraz."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
        variant="center"
      />

      <Breadcrumbs second={{ href: '/o-nas', label: 'O nas' }} third={{ href: '/o-nas/dolacz-do-sieci', label: 'Dołącz do sieci' }} includeJsonLd />

      <Wrapper as="article" itemScope itemType="https://schema.org/WebPage">
        <Gap size="xs" />

        <SectionInfo
          title="Przestrzeń do rozwoju"
          description="Budujemy przestrzeń dla utalentowanych ludzi, którzy stawiają na rozwój i jakość - w swoim tempie, w swoim kierunku, według własnych schematów."
        >
          <p className="mt-2">
            Naszą misją jest stworzenie przestrzeni, w której każdy może się rozwinąć w dowolnym kierunku, niezależnie od tego, z jakiego miejsca startuje. Dotyczy to zarówno naszych klientów, jak i
            naszych partnerów wykonawczych. Możesz być specjalistą od jednej rzeczy, ale możesz też łączyć kompetencje - na przykład robić projekty do druku i animacje. Nie narzucamy ścieżki.
            Interesuje nas to, co Ty lubisz tworzyć i w czym chcesz być coraz lepszy.
          </p>

          <p className="mt-3">
            W praktyce działa to tak: gdy pojawia się zlecenie, dopasowujemy projekt do osoby, której profil i styl pracy najlepiej pasują do oczekiwań klienta. Czasem przekazujemy konkretny etap, a
            czasem cały projekt - w zależności od zakresu i od tego, co będzie dla obu stron najwygodniejsze.
          </p>

          <p className="mt-3">Jeśli interesuje Cię rozwój w kierunku realizowania projektów dla różnych przedsiębiorców, napisz do nas.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="W jakich obszarach aktualnie szukamy partnerów?"
          description="W tym momencie widzimy największe zapotrzebowanie na usługi z tych obszarów:"
          items={[
            {
              title: 'Wideo i montaż',
              icon: <RiShareForwardLine className="h-6 w-6 text-slate-800" />,
              description: <p>Montaż rolek i krótkich formatów wideo do mediów społecznościowych.</p>,
            },
            {
              title: 'Animacje',
              icon: <RiPantoneLine className="h-6 w-6 text-slate-800" />,
              description: <p>Tworzenie animacji do krótkich filmów do mediów społecznościowych.</p>,
            },
            {
              title: 'Grafika 3D i wizualizacje',
              icon: <RiPantoneLine className="h-6 w-6 text-slate-800" />,
              description: <p>Tworzenie grafik 3D, w tym głównie wizualizacji produktów.</p>,
            },
            {
              title: 'Aplikacje mobilne',
              icon: <RiAppsLine className="h-6 w-6 text-slate-800" />,
              description: <p>Tworzenie dedykowanych rozwiązań biznesowych dla systemów Android i iOS (React Native).</p>,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Inne obszary współpracy" description="Lista obszarów zmienia się wraz z potrzebami klientów.">
          <p className="text-mid mt-2">
            Poza wymienionymi kierunkami współpracujemy również przy projektach związanych ze stronami internetowymi, blogami, e-commerce, brandingiem, projektami do druku, treściami, SEO, UX czy
            działaniami marketingowymi.
          </p>

          <p className="text-mid mt-3">
            Jeżeli Twojej specjalizacji nie ma na liście, ale wiesz, że tworzysz wartościowe materiały i chcesz mieć przestrzeń, która pozwoli Ci na rozwój na własnych zasadach, napisz do nas. Zależy
            nam na tym, aby znać osoby, do których możemy przekazywać naszych klientów.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo
          title="Jak wygląda współpraca?"
          description="W pierwszej kolejności chcemy poznać Ciebie jako człowieka - Twoje cele, wartości i to, w jakim kierunku chcesz iść. Po pierwszej rozmowie sprawdzamy Twój sposób myślenia i podejście do klienta na przykładowym, koncepcyjnym projekcie, który opieramy na ramach Twoich umiejętności. Po takim wstępnym projekcie decydujemy o formie współpracy. A jak ona wygląda w praktyce?"
        >
          <ul className="mt-4 list-disc pl-5">
            <li>Przekazujemy Ci klientów, dla których Twoje umiejętności są idealne.</li>
            <li>Realizujesz projekt zgodnie z oczekiwaniami klienta.</li>
            <li>Rozliczamy się poprzez umowę B2B lub umowę o dzieło.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <ContactForm
          title="Napisz kilka słów o sobie"
          description="Napisz, co tworzysz, co lubisz robić i w jakim kierunku chcesz się rozwijać."
          defaultSubject="Sieć Arteon - współpraca partnerska"
          messagePlaceholder="Hej! Zajmuję się tworzeniem... oraz... Poszukuję klientów w obszarze..."
        />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
