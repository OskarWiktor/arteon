import { getPageMetadata } from '@/data/seo';
import type { Metadata } from 'next';
import { headers } from 'next/headers';

import HeroBaner from '@/components/sections/HeroBaner';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import TechStack from '@/components/sections/TechStack';
import SectionBasic from '@/components/ui/sections/SectionBasic';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import WorkSteps from '@/components/sections/steps/WorkSteps';

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const locale = host.endsWith('.pl') ? 'pl' : 'en';

  return getPageMetadata('home', locale);
}

export default function Home() {
  return (
    <>
      <HeroBaner
        title="Zbuduj markę, która rośnie i sprzedaje"
        description="Studio projektowe Arteon – od strategii i brandingu, przez strony WWW, po marketing digital."
        backgroundImage="/assets/test.jpg"
        buttonTopOne="WWW"
        buttonTopOneLink="#www"
        buttonTopTwo="Treść"
        buttonTopTwoLink="#tresc"
        buttonTopThree="Design"
        buttonTopThreeLink="#design"
        buttonTopFour="Marketing"
        buttonTopFourLink="#marketing"
      />

      <SectionInfo
        title="Elastyczny partner dla Twojej marki"
        description="Od startupu po globalną skalę – łączymy psychologię, design i technologię, aby Twoja firma przyciągała właściwych klientów."
      />

      <ProjectsOverview title="Nasze realizacje" />

      <SectionBasic
        id="www"
        title={
          <>
            <span className="text-amber-500">Witryna</span> - fundament Twojej obecności
          </>
        }
        description="Tworzymy strony, sklepy oraz blogi, które angażują użytkowników i zwiększają konwersje."
        imageSrc="/assets/test.jpg"
        imageAlt="Responsywne strony WWW"
        buttonText="Zobacz ofertę"
        buttonLink="/oferta"
      >
        <ul className="list-disc pl-5">
          <li>Analiza branży i konkurencji w cenie</li>
          <li>Projekt dopasowany do realnych zachowań klientów</li>
          <li>Witryna przygotowana na skalowanie i rozwój</li>
          <li>Stały kontakt i pełna przejrzystość na każdym etapie</li>
        </ul>
      </SectionBasic>

      <SectionBasic
        id="tresc"
        variant="left"
        title="Treść - komunikat, który przyciąga uwagę"
        description="Budujemy treści, które pracują dla algorytmów, ale mówią do ludzi. Pomagamy stworzyć przekaz, by Twoja marka żyła nie tylko w Google, ale i w pamięci klientów."
        imageSrc="/assets/test.jpg"
        imageAlt="Content marketing"
        buttonText="Zobacz ofertę"
        buttonLink="/oferta"
      >
        <ul className="list-disc pl-5">
          <li>Analiza słów kluczowych i potrzeb klientów</li>
          <li>Optymalizację tekstów pod wyszukiwarki</li>
          <li>Gotowe teksty: od artykułów po posty w social media</li>
        </ul>
      </SectionBasic>

      <SectionInfo title="Dlaczego warto z nami pracować?" description="Działamy jak system: od strategii przez wdrożenie po analizę wyników — wszystko w jednym miejscu.">
        <ul className="list-disc pl-5">
          <li>Kompleksowe rozwiązania – jeden partner</li>
          <li>Indywidualne podejście – zero szablonów</li>
          <li>Pełna transparentność i mentoring</li>
        </ul>
      </SectionInfo>

      <WorkSteps />

      <SectionBasic
        title="Design - wygląd, który działa jak magnez"
        description="Projektujemy system wizualny, który przyciąga właściwych klientów, buduje zaufanie i odróżnia Twoją markę na tle innych. Psychologia, estetyka, spójność — z myślą o długofalowym rozwoju."
        imageSrc="/assets/test.jpg"
        imageAlt="Branding i identyfikacja wizualna"
        buttonText="Zobacz ofertę"
        buttonLink="/oferta"
      >
        <ul className="list-disc pl-5">
          <li>Logo i księga znaku</li>
          <li>Paleta kolorów i typografia</li>
          <li>Materiały online i offline</li>
          <li>Optymalizacja konwersji wizualnej</li>
        </ul>
      </SectionBasic>

      <SectionBasic
        id="marketing"
        variant="left"
        title="Marketing - reklama, która przynosi efekty"
        description="Planujemy działania, które trafiają tam, gdzie są klienci. Skupiamy się na tym, co ma największy potencjał i wdrażamy rozwiązania."
        imageSrc="/assets/test.jpg"
        imageAlt="Marketing cyfrowy"
        buttonText="Zobacz ofertę"
        buttonLink="/oferta"
      >
        <ul className="list-disc pl-5">
          <li>Działania dopasowane do Twojego wymarzonego klienta</li>
          <li>Kampanie reklamowe w Google i social mediach</li>
          <li>Prowadzenie i rozwój profili na IG, FB, LinkedIn</li>
          <li>Analiza wyników i rekomendacje dalszych kroków</li>
        </ul>
      </SectionBasic>

      <TechStack />
    </>
  );
}
