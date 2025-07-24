import HeroBaner from '@/components/components/HeroBaner';
import HowWeWork from '@/components/components/HowWeWork';
import ProjectsOverview from '@/components/components/ProjectsOverview';
import TechStack from '@/components/components/TechStack';
import SectionBasic from '@/components/ui/SectionBasic';
import SectionInfo from '@/components/ui/SectionInfo';

export default function Home() {
  return (
    <>
      <HeroBaner
        title="Zbuduj markę, która rośnie i sprzedaje"
        description="Od pomysłu do rezultatu — pomagamy firmom działać skutecznie w świecie online."
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
        title="Arteon — elastyczny partner dla Twojej firmy"
        description="Budujesz od zera, rozwijasz, skalujesz? Porządkujemy każdy etap. Tworzymy spójny plan, który przyciąga właściwych klientów i pozwala Twojej marce rosnąć."
      />

      <ProjectsOverview title="Realizacje" />

      <SectionBasic
        title="Witryna — fundament Twojej obecności"
        description="Tworzymy strony, sklepy i aplikacje, które prowadzą Twojego klienta krok po kroku — od pierwszego kliknięcia do zakupu."
        imageSrc="/assets/test.jpg"
        imageAlt="Projektowanie stron"
        buttonText="Zobacz ofertę"
        buttonLink="/oferta"
        id="www"
      >
        <ul className="list-disc pl-5">
          <li>Analiza branży i konkurencji w cenie</li>
          <li>Projekt dopasowany do realnych zachowań klientów</li>
          <li>Witryna przygotowana na skalowanie i rozwój</li>
          <li>Stały kontakt i pełna przejrzystość na każdym etapie</li>
        </ul>
      </SectionBasic>

      <SectionBasic
        variant="left"
        title="Treść — komunikat, który przyciąga uwagę i sprzedaje"
        description="Budujemy treści, które pracują dla algorytmów, ale mówią do ludzi. Pomagamy stworzyć przekaz, by Twoja marka żyła nie tylko w Google, ale i w pamięci klientów."
        imageSrc="/assets/test.jpg"
        imageAlt="Projektowanie stron"
        buttonText="Zobacz ofertę"
        buttonLink="/oferta"
        id="tresc"
      >
        <ul className="list-disc pl-5">
          <li>Analiza słów kluczowych i potrzeb klientów</li>
          <li>Optymalizację tekstów pod wyszukiwarki</li>
          <li>Gotowe teksty: od artykułów po posty w social media</li>
        </ul>
      </SectionBasic>

      <SectionInfo title="Dlaczego klienci wybierają Arteon?" description="Bo działamy jak system. Łączymy estetykę z strategią i procesem, który naprawdę działa.">
        <ul className="list-disc pl-5">
          <li>Od analizy po marketing — jeden partner</li>
          <li>Indywidualne podejście — zero szablonów</li>
          <li>Transparentność, mentoring i zrozumienie</li>
        </ul>
      </SectionInfo>

      <HowWeWork />

      <SectionBasic
        title="Design — wygląd, który działa jak magnez"
        description="Projektujemy system wizualny, który przyciąga właściwych klientów, buduje zaufanie i odróżnia Twoją markę na tle innych. Psychologia, estetyka, spójność — z myślą o długofalowym rozwoju."
        imageSrc="/assets/test.jpg"
        imageAlt="Projektowanie stron"
        buttonText="Zobacz ofertę"
        buttonLink="/oferta"
        id="design"
      >
        <ul className="list-disc pl-5">
          <li>Indywidualny projekt graficzny (zero szablonów)</li>
          <li>Pełna identyfikacja: logo, typografia, paleta barw</li>
          <li>Materiały spójne online i offline</li>
          <li>Ulepszenia, które zwiększają konwersję</li>
        </ul>
      </SectionBasic>

      <SectionBasic
        variant="left"
        title="Marketing — kropla drąży skałę"
        description="Planujemy działania, które trafiają tam, gdzie są klienci. Skupiamy się na tym, co ma największy potencjał i wdrażamy rozwiązania — krok po kroku."
        imageSrc="/assets/test.jpg"
        imageAlt="Projektowanie stron"
        buttonText="Zobacz ofertę"
        buttonLink="/oferta"
        id="marketing"
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
