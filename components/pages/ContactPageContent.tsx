import HeroBanner from '@/components/organisms/HeroBanner';
import CTABanner from '@/components/organisms/CTABanner';
import ContactForm from '@/components/organisms/ContactForm';
import Divider from '@/components/atoms/Divider';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import SectionSteps from '@/components/organisms/sections/SectionSteps';
import Wrapper from '@/components/atoms/Wrapper';
import { RiMailLine, RiMapPinTimeLine } from 'react-icons/ri';

import type { Locale } from '@/types/locale';
import { LOCALE_CONFIG } from '@/lib/i18n/locales';
import { getContactPageData } from '@/lib/i18n/pages/contact';

export default function ContactPageContent({ locale }: { locale: Locale }) {
  const data = getContactPageData(locale);
  if (!data) return null;

  const config = LOCALE_CONFIG[locale];
  const email = locale === 'pl' ? 'kontakt@arteonagency.pl' : 'contact@arteonagency.com';

  return (
    <>
      <HeroBanner
        title={data.hero.title}
        description={data.hero.description}
        backgroundImage='/assets/bg/abstract-bg10.webp'
        overlay='black'
      />

      <Wrapper>
        <Divider size='sm' />

        <SectionInfo title={data.intro.title}>
          <p>
            {data.intro.textBefore}{' '}
            <a href={`mailto:${email}`} className='inline-link'>
              {email}
            </a>
            {data.intro.textAfter}
          </p>
        </SectionInfo>

        <Divider line />

        <ContactForm title={data.formTitle} locale={locale} />

        <Divider line />

        <SectionSteps
          variant='contact'
          items={[
            {
              title: data.details.emailLabel,
              icon: <RiMailLine className='h-6 w-6' />,
              description: (
                <p>
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
              ),
            },
            {
              title: data.details.hoursLabel,
              icon: <RiMapPinTimeLine className='h-6 w-6' />,
              description: <p>{data.details.hoursValue}</p>,
            },
          ]}
          title={data.details.title}
        />

        <Divider size='sm' />
      </Wrapper>

      <CTABanner
        title={data.cta.title}
        description={data.cta.description}
        btnOne={data.cta.btnOne}
        btnOneHref={config.toolsIndexHref}
        backgroundImage='/assets/bg/abstract-bg10.webp'
        overlay='black'
      />
    </>
  );
}
