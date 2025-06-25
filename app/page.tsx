import HeroBaner from '@/components/sections/HeroBaner';
import HowWeWork from '@/components/sections/HowWeWork';
import ProjectsOverview from '@/components/sections/ProjectsOverview';
import TechStack from '@/components/sections/TechStack';
import SectionBasic from '@/components/ui/SectionBasic';

export default function Home() {
  return (
    <>
      <HeroBaner
        title="Lorem Ipsum Lorem Ipsum"
        description="njkbasdka sbdjabsd bjkbsajdb"
        backgroundImage="/assets/test.jpg"
        buttonTopOne="Strony i sklepy"
        buttonTopOneLink="#strony-i-sklepy"
        buttonTopTwo="Aplikacje"
        buttonTopTwoLink="#aplikacje"
        buttonTopThree="Grafika"
        buttonTopThreeLink="#grafika"
        buttonTopFour="Marketing"
        buttonTopFourLink="#marketing"
      />

      <ProjectsOverview />
      <SectionBasic
        title="Strony internetowe dopasowane do Ciebie"
        description="Tworzymy witryny, które działają i wyglądają. Łączymy estetykę, strategię i wydajność, by Twoja marka zyskała nową jakość."
        imageSrc="/assets/test.jpg"
        imageAlt="Projektowanie stron"
        buttonText="Zobacz ofertę"
        buttonLink="/oferta"
        id="strony-i-sklepy"
      >
        <ul className="list-disc pl-5 text-gray-700">
          <li>Indywidualny projekt graficzny</li>
          <li>Pełna optymalizacja SEO i dostępność</li>
          <li>Integracja z CMS lub e-commerce</li>
        </ul>
      </SectionBasic>
      <SectionBasic
        variant="left"
        title="Strony internetowe dopasowane do Ciebie"
        description="Tworzymy witryny, które działają i wyglądają. Łączymy estetykę, strategię i wydajność, by Twoja marka zyskała nową jakość."
        imageSrc="/assets/test.jpg"
        imageAlt="Projektowanie stron"
        buttonText="Zobacz ofertę"
        buttonLink="/oferta"
        id="aplikacje"
      >
        <ul className="list-disc pl-5 text-gray-800 md:text-lg">
          <li>Indywidualny projekt graficzny</li>
          <li>Pełna optymalizacja SEO i dostępność</li>
          <li>Integracja z CMS lub e-commerce</li>
        </ul>
      </SectionBasic>
      <HowWeWork />
      <SectionBasic
        title="Strony internetowe dopasowane do Ciebie"
        description="Tworzymy witryny, które działają i wyglądają. Łączymy estetykę, strategię i wydajność, by Twoja marka zyskała nową jakość."
        imageSrc="/assets/test.jpg"
        imageAlt="Projektowanie stron"
        buttonText="Zobacz ofertę"
        buttonLink="/oferta"
        id="grafika"
      >
        <ul className="list-disc pl-5 text-gray-800 md:text-lg">
          <li>Indywidualny projekt graficzny</li>
          <li>Pełna optymalizacja SEO i dostępność</li>
          <li>Integracja z CMS lub e-commerce</li>
        </ul>
      </SectionBasic>
      <SectionBasic
        variant="left"
        title="Strony internetowe dopasowane do Ciebie"
        description="Tworzymy witryny, które działają i wyglądają. Łączymy estetykę, strategię i wydajność, by Twoja marka zyskała nową jakość."
        imageSrc="/assets/test.jpg"
        imageAlt="Projektowanie stron"
        buttonText="Zobacz ofertę"
        buttonLink="/oferta"
        id="marketing"
      >
        <ul className="list-disc pl-5 text-gray-700">
          <li>Indywidualny projekt graficzny</li>
          <li>Pełna optymalizacja SEO i dostępność</li>
          <li>Integracja z CMS lub e-commerce</li>
        </ul>
      </SectionBasic>
      <TechStack />
    </>
  );
}
