import HeroBaner from '@/components/sections/HeroBaner';
import HowWeWork from '@/components/sections/HowWeWork';
import Mission from '@/components/sections/Mission';
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
        buttonTopOne="test1"
        buttonTopTwo="test2"
        buttonTopThree="test3"
        buttonTopFour="test4"
      />
      <Mission />
      <ProjectsOverview />
      <HowWeWork />
      <TechStack />
<SectionBasic
  title="Strony internetowe dopasowane do Ciebie"
  description="Tworzymy witryny, które działają i wyglądają. Łączymy estetykę, strategię i wydajność, by Twoja marka zyskała nową jakość."
  imageSrc="/assets/test.jpg"
  imageAlt="Projektowanie stron"
  ctaText="Zobacz ofertę"
  ctaHref="/oferta"
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
  ctaText="Zobacz ofertę"
  ctaHref="/oferta"
>
  <ul className="list-disc pl-5 text-gray-700">
    <li>Indywidualny projekt graficzny</li>
    <li>Pełna optymalizacja SEO i dostępność</li>
    <li>Integracja z CMS lub e-commerce</li>
  </ul>
</SectionBasic>


    </>
  );
}
