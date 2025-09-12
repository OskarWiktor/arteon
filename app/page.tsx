import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import ArteonFeatures from '@/components/sections/features/ArteonFeatures';
import HeroBaner from '@/components/sections/HeroBaner';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import Mission from '@/components/sections/steps/Mission';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import WorkSteps from '@/components/sections/steps/WorkSteps';
import Gap from '@/components/ui/Gap';
import { generatePageMetadata } from '@/lib/generatePageMetadata';
import { RiCodeSSlashFill, RiShoppingCartLine, RiArticleLine, RiPaletteLine, RiFileTextLine, RiMegaphoneLine } from 'react-icons/ri';

export async function generateMetadata() {
  return generatePageMetadata('home');
}

export default function HomePage() {
  return (
    <>
      <HeroBaner
        title="Zbuduj markę, która rośnie i sprzedaje"
        subtitle="Know-how globalnych marek"
        description="Arteon - sprawdzone praktyki wielkich marek dla Twojej firmy. Od strategii, przez strony, po marketing."
        backgroundImage="/assets/bg/abstract-bg12.jpg"
        overlay="black"
        variant="center"
      />

      <BenefitBelt
        items={[
          { icon: <RiCodeSSlashFill />, label: 'Strony' },
          { icon: <RiShoppingCartLine />, label: 'Sklepy' },
          { icon: <RiArticleLine />, label: 'Blogi' },
          { icon: <RiPaletteLine />, label: 'Grafika' },
          { icon: <RiFileTextLine />, label: 'Treści' },
          { icon: <RiMegaphoneLine />, label: 'Marketing' },
        ]}
      />

      <Gap size="sm" />

      <Mission />

      <Gap variant="line" />

      <ServicesSteps />

      <Gap variant="line" />

      <ProjectsOverview title="Nasze realizacje" category="strona" />

      <Gap variant="line" />

      <ArteonFeatures />

      <Gap variant="line" />

      <WorkSteps />

      <Gap variant="line" />

      <FeesSteps />

      <Gap />

      <section aria-label="Słowa kluczowe" className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-12 text-sm text-neutral-600">
          Strony internetowe, sklepy online, blogi firmowe, projektowanie logo, identyfikacja wizualna, branding, marketing internetowy, pozycjonowanie stron (SEO), kampanie Google Ads i Facebook Ads,
          copywriting, tworzenie treści, social media, automatyzacje marketingowe, audyty SEO i UX, dostępność cyfrowa WCAG 2.1 AA, polityka prywatności i regulaminy, projektowanie UX/UI, responsywne
          strony www, Next.js, Webflow, WordPress, WooCommerce, aplikacje webowe, optymalizacja Core Web Vitals, analityka internetowa, integracje płatności i systemów dostaw, treści do e-commerce,
          materiały do druku: wizytówki, ulotki, katalogi.
        </div>
      </section>

      <CTABaner
        title="Zacznijmy od rozmowy"
        description="Jasny plan i odpowiedzialność po naszej stronie. Niezależnie od wymagań - znajdziemy najlepszą drogę do efektu."
        primaryLabel="Umów konsultację"
        primaryLink="/contact"
        secondaryLabel="Poznaj ofertę"
        secondaryLink="/services"
        backgroundImage="/assets/bg/abstract-bg1.jpg"
        overlay="black"
      />
    </>
  );
}
