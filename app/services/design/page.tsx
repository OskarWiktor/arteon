import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import PricingSteps from '@/components/sections/steps/FeesSteps';
import { generatePageMetadata } from '@/lib/generatePageMetadata';
import DesignFeatures from '@/components/sections/features/DesignFeatures';
import FaqDesign from '@/components/sections/faqs/FaqDesign';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import Keywords from '@/components/sections/Keywords';
import DesignSteps from '@/components/sections/steps/DesignSteps';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine } from 'react-icons/ri';

export async function generateMetadata() {
  return generatePageMetadata('design');
}

export default function OfferDesignPage() {
  return (
    <>
      <HeroBanner
        title="Grafika i branding"
        description={
          <>
            Logo, identyfikacja, social media, materiały drukowane.
            <strong>Spójny design</strong>, który działa w sieci i offline.
          </>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="/contact"
        buttonSecond="Portfolio"
        buttonSecondLink="/projects"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg4.jpg"
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

      <Gap size="sm" />

      <DesignFeatures />

      <Gap variant="line" />

      <DesignSteps />

      <Gap size="sm" />

      <Gap variant="line" />

      <PricingSteps />

      <Gap size="sm" />

      <WorkSteps />

      <Gap size="sm" />

      <FaqDesign />

      <Gap variant="line" />

      <ServicesSteps />

      <Gap size="sm" />

      <Keywords
        keys="Projektowanie logo, identyfikacja wizualna, branding, rebranding, brand book, księga znaku, system identyfikacji,
  projekty graficzne dla firm, palety kolorów, typografia marki, szablony social media, grafiki Instagram i Facebook,
  karuzele i stories, rolki video, montaż materiałów wideo, obróbka zdjęć pod www, materiały drukowane: wizytówki, ulotki, katalogi, banery,
  projekty firmowe na ubrania, szablony prezentacji, infografiki, publikacje i książki, projekty etykiet i opakowań,
  grafiki wektorowe Adobe CC, mockupy, spójny design do stron www i sklepów, projekty w Figmie, design systemy dla marek,
  branding psychologiczny, spójność wizualna online i offline, grafika dla e-commerce, content do social media wraz z treścią,
  projekty graficzne szyte na miarę, minimalizm i prestiż w designie"
      />

      <CTABaner
        title="Zbudujmy stronę, która pracuje na Twoją markę"
        description="Jasny plan i odpowiedzialność po naszej stronie"
        primaryLabel="Wyceń projekt"
        primaryLink="/contact"
        backgroundImage="/assets/bg/abstract-bg1.jpg"
        overlay="black"
      />
    </>
  );
}
