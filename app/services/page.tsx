import { generatePageMetadata } from '@/lib/generatePageMetadata';

import HeroBaner from '@/components/sections/HeroBaner';
import Gap from '@/components/ui/Gap';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';

export async function generateMetadata() {
  return generatePageMetadata('offer');
}

export default function OfferPage() {
  return (
    <>
      <HeroBaner backgroundImage="/assets/bg/abstract-bg12.webp" overlay="black" title="Nasze usługi" variant="center" />

      <Gap size="sm" />

      <ServicesSteps />

      <Gap size="sm" />
    </>
  );
}
