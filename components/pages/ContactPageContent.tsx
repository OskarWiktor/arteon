import HeroBanner from '@/components/sections/HeroBanner';
import CTABanner from '@/components/sections/CTABanner';
import ContactForm from '@/components/sections/ContactForm';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import { RiMailLine, RiMapPinTimeLine } from 'react-icons/ri';

import type { Locale } from '@/types/locale';
import { LOCALE_CONFIG } from '@/lib/i18n/locales';
import { getContactPageData } from '@/lib/i18n/pages/contact';

export default function ContactPageContent({ locale }: { locale: Locale }) {
  const data = getContactPageData(locale);
  if (!data) return null;

  const config = LOCALE_CONFIG[locale];

  return (
    <>
      <HeroBanner title={data.hero.title} description={data.hero.description} backgroundImage="/assets/bg/abstract-bg10.webp" overlay="black" variant="center" />

      <Wrapper>
        <Gap size="sm" />

        <SectionInfo title={data.intro.title}>
          <p>
            {data.intro.textBefore}{' '}
            <a href="mailto:kontakt@arteonagency.pl" className="inline-link">
              kontakt@arteonagency.pl
            </a>
            {data.intro.textAfter}
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <ContactForm title={data.formTitle} locale={locale} />

        <Gap variant="line" />

        <SectionSteps
          variant="contact"
          items={[
            {
              title: data.details.emailLabel,
              icon: <RiMailLine className="h-6 w-6" />,
              description: (
                <p>
                  <a href="mailto:kontakt@arteonagency.pl">kontakt@arteonagency.pl</a>
                </p>
              ),
            },
            {
              title: data.details.hoursLabel,
              icon: <RiMapPinTimeLine className="h-6 w-6" />,
              description: <p>{data.details.hoursValue}</p>,
            },
          ]}
          title={data.details.title}
        />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title={data.cta.title}
        description={data.cta.description}
        btnOne={data.cta.btnOne}
        btnOneLink={config.toolsIndexHref}
        backgroundImage="/assets/bg/abstract-bg10.webp"
        overlay="black"
      />
    </>
  );
}
