import Wrapper from '@/components/atoms/Wrapper';
import CTABanner from '@/components/organisms/CTABanner';
import HeroBanner from '@/components/organisms/HeroBanner';
import { LOCALE_CONFIG } from '@/lib/i18n/locales';
import { getTermsPageData } from '@/lib/i18n/pages/terms';
import type { Locale } from '@/types/locale';
import Divider from '../atoms/Divider';
import SectionInfo from '../organisms/sections/SectionInfo';

export default function TermsPage({ locale }: { locale: Locale }) {
  const data = getTermsPageData(locale);
  if (!data) return null;

  const config = LOCALE_CONFIG[locale];

  return (
    <>
      <HeroBanner
        title={data.hero.title}
        description={data.hero.description}
        backgroundImage='/assets/arteon-logo-on-mockup.webp'
        overlay='black'
      />

      <Wrapper as='article' itemScope itemType='https://schema.org/WebPage'>
        <Divider size='sm' />

        <p className='mb-6 text-sm opacity-70'>
          Version: <strong>{data.version}</strong>
        </p>

        {data.sections.map((section, index) => (
          <div key={section.id}>
            <SectionInfo id={section.id} title={section.title}>
              <p>{section.content}</p>
            </SectionInfo>
            {index < data.sections.length - 1 && <Divider line size='sm' />}
          </div>
        ))}

        <Divider size='sm' />
      </Wrapper>

      <CTABanner
        title={data.cta.title}
        description={data.cta.description}
        btnOne={data.cta.btnOne}
        btnOneHref={config.toolsIndexHref}
        backgroundImage='/assets/arteon-logo-on-mockup.webp'
        overlay='black'
      />
    </>
  );
}
