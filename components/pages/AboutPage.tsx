import HeroBanner from '@/components/organisms/HeroBanner';
import CTABanner from '@/components/organisms/CTABanner';
import Divider from '@/components/atoms/Divider';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import SectionSteps from '@/components/organisms/sections/SectionSteps';
import Wrapper from '@/components/atoms/Wrapper';
import {
  RiLockLine,
  RiInfinityFill,
  RiToolsFill,
  RiRocketLine,
  RiImageEditLine,
  RiSearchLine,
  RiMailLine,
  RiPaletteLine,
  RiQrCodeLine,
} from 'react-icons/ri';

import type { Locale } from '@/types/locale';
import { LOCALE_CONFIG } from '@/lib/i18n/locales';
import { getAboutPageData } from '@/lib/i18n/pages/about';
import { normalIconSizeClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';

const WHY_FREE_ICONS = [RiInfinityFill, RiLockLine, RiToolsFill, RiRocketLine];
const OUR_TOOLS_ICONS = [RiImageEditLine, RiSearchLine, RiMailLine, RiPaletteLine, RiQrCodeLine];

export default function AboutPage({ locale }: { locale: Locale }) {
  const data = getAboutPageData(locale);
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

      <Wrapper as='article' itemScope itemType='https://schema.org/AboutPage'>
        <Divider size='sm' />

        <SectionInfo title={data.whoWeAre.title}>
          <p>{data.whoWeAre.p1}</p>
          <p className='mt-2'>{data.whoWeAre.p2}</p>
        </SectionInfo>

        <Divider line />

        <SectionSteps
          title={data.whyFree.title}
          grid='two'
          items={data.whyFree.items.map((item, i) => ({
            title: item.title,
            icon: (() => {
              const Icon = WHY_FREE_ICONS[i];
              return <Icon className={cn('text-primary', normalIconSizeClasses)} />;
            })(),
            description: <p>{item.description}</p>,
          }))}
        />

        <Divider line />

        <SectionSteps
          title={data.ourTools.title}
          grid='three'
          items={data.ourTools.items.map((item, i) => ({
            title: item.title,
            icon: (() => {
              const Icon = OUR_TOOLS_ICONS[i];
              return <Icon className={cn('text-primary', normalIconSizeClasses)} />;
            })(),
            description: <p>{item.description}</p>,
          }))}
        />

        <Divider line />

        <SectionInfo title={data.whatsNext.title}>
          <p>{data.whatsNext.text}</p>
        </SectionInfo>

        <Divider line />

        <SectionInfo title={data.privacy.title}>
          <p>
            {data.privacy.textBefore}{' '}
            <a href={config.privacyHref} className='inline-link'>
              {data.privacy.linkLabel}
            </a>
            {data.privacy.textAfter}
          </p>
        </SectionInfo>

        <Divider size='sm' />
      </Wrapper>

      <CTABanner
        title={data.cta.title}
        description={data.cta.description}
        btnOne={data.cta.btnOne}
        btnOneHref={config.toolsIndexHref}
        btnTwo={data.cta.btnTwo}
        btnTwoHref={config.contactHref ?? '#'}
        backgroundImage='/assets/arteon-logo-on-mockup.webp'
        overlay='black'
      />
    </>
  );
}
