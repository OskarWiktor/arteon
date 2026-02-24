import HeroBanner from '@/components/sections/HeroBanner';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';

import type { Locale } from '@/types/locale';
import { LOCALE_CONFIG } from '@/lib/i18n/locales';
import { getTermsPageData } from '@/lib/i18n/pages/terms';

export default function TermsPageContent({ locale }: { locale: Locale }) {
  const data = getTermsPageData(locale);
  if (!data) return null;

  const config = LOCALE_CONFIG[locale];

  return (
    <>
      <HeroBanner title={data.hero.title} description={data.hero.description} backgroundImage="/assets/arteon-logo-on-mockup.webp" overlay="black" variant="center" />

      <Wrapper as="article" itemScope itemType="https://schema.org/WebPage">
        <Gap size="sm" />

        <p className="mb-6 text-sm opacity-70">
          Version: <strong>{data.version}</strong>
        </p>

        {data.sections.map((section, index) => (
          <div key={section.id}>
            <SectionInfo id={section.id} title={section.title}>
              <p>{section.content}</p>
            </SectionInfo>
            {index < data.sections.length - 1 && <Gap variant="line" size="sm" />}
          </div>
        ))}

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title={data.cta.title}
        description={data.cta.description}
        btnOne={data.cta.btnOne}
        btnOneLink={config.toolsIndexHref}
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
