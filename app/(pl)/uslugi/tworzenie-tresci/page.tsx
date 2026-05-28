import Script from 'next/script';
import { IoSparkles } from 'react-icons/io5';
import {
  RiBookOpenLine,
  RiTeamLine,
  RiArticleLine,
  RiChatQuoteLine,
  RiFileSearchLine,
  RiPencilRuler2Line,
  RiShareForwardLine,
  RiFilePdfLine,
  RiFileTextLine,
  RiPencilLine,
  RiShoppingCartLine,
} from 'react-icons/ri';

import BenefitBelt from '@/components/organisms/BenefitBelt';
import Breadcrumbs from '@/components/molecules/BreadCrumbs';
import SectionContactForm from '@/components/organisms/sections/SectionContactForm';
import CTABanner from '@/components/organisms/CTABanner';
import FeatureGrid from '@/components/organisms/FeatureGrid';
import HeroBanner from '@/components/organisms/HeroBanner';
import SectionBento from '@/components/organisms/sections/SectionBento';
import WorkSteps from '@/components/organisms/WorkSteps';
import TestimonialsCarousel from '@/components/organisms/carousels/TestimonialsCarousel';
import ButtonLink from '@/components/atoms/buttons/ButtonLink';
import SectionFaqPanels from '@/components/organisms/sections/SectionFaqPanels';
import Divider from '@/components/atoms/Divider';
import SectionSteps from '@/components/organisms/sections/SectionSteps';
import Wrapper from '@/components/atoms/Wrapper';
import { buildServiceSchema } from '@/lib/serviceSchema';
import ArticlesCarousel from '@/components/organisms/carousels/ArticlesCarousel';
import { getArticlePreviewsByCategory } from '@/lib/blogDataService';
import { siteUrl } from '@/utils/absoluteUrl';
import { largeIconSizeClasses, normalIconSizeClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/tworzenie-tresci',
    serviceName: 'Tworzenie treści',
    description:
      'Treści dla stron, sklepów i blogów: oferty, artykuły, opisy produktów i microcopy - pod intencje użytkownika i SEO.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id='schema-service-tworzenie-tresci' type='application/ld+json'>
      {JSON.stringify(json)}
    </Script>
  );
}

export const metadata = {
  title: 'Tworzenie treści - strony, blogi, e-commerce | Arteon',
  description:
    'Klarowne teksty dopasowane do odbiorcy. Artykuły blogowe, opisy produktów i treści na strony z redakcją pod SEO.',
  alternates: { canonical: 'https://www.arteonagency.pl/uslugi/tworzenie-tresci' },
  openGraph: {
    title: 'Tworzenie treści - strony, blogi, e-commerce | Arteon',
    description:
      'Klarowne teksty dopasowane do odbiorcy. Artykuły blogowe, opisy produktów i treści na strony z redakcją pod SEO.',
    url: `${siteUrl}/uslugi/tworzenie-tresci`,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/assets/blog/czym-jest-content-marketing/czym-jest-content-marketing.webp`,
        width: 1200,
        height: 630,
      },
    ],
  },
} as const;

export default function OfferContentPage() {
  return (
    <>
      <HeroBanner
        title='Tworzenie treści'
        description={
          <>
            Tworzymy artykuły, opisy produktów i treści na strony. Redakcja pod SEO i spójny język
            marki.
          </>
        }
        secondaryCtaLabel='Bezpłatna wycena'
        secondaryCtaHref='#kontakt'
        variant='left'
        backgroundImage='/assets/blog/czym-jest-content-marketing/czym-jest-content-marketing.webp'
        overlay='black'
      />

      <BenefitBelt variant='carousel' />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/tworzenie-tresci`, label: 'Tworzenie treści' }}
        includeJsonLd
      />

      <Wrapper>
        <Divider size='xs' />

        <FeatureGrid
          title='Co zyskujesz tworząc treści z nami?'
          subtitle='Nasz standard pracy'
          items={[
            {
              title: 'Treści pod SEO - widoczność w Google',
              icon: <RiFileSearchLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Redakcja treści sprzedażowych i marketingowych',
              icon: <RiArticleLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Język marki - spójny ton komunikacji',
              icon: <RiChatQuoteLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Treści budujące emocje i transformację klienta',
              icon: <IoSparkles className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Artykuły i wpisy eksperckie na bloga',
              icon: <RiBookOpenLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Scenariusze do rolek i social mediów',
              icon: <RiShareForwardLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Opisy produktów wspierające SEO',
              icon: <RiPencilRuler2Line className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Treści dopasowane do archetypu i wartości marki',
              icon: <RiTeamLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
          ]}
        />

        <Divider line />

        <SectionSteps
          title='Oferta Tworzenia treści'
          items={[
            {
              icon: <RiFileTextLine className={largeIconSizeClasses} />,
              title: 'Strony www',
              subtitle: 'od 600 zł',
              description: (
                <div className='flex h-full flex-col'>
                  <ul className='mb-3 list-disc space-y-1 pl-4 text-sm'>
                    <li>Piszemy treści, które jasno przedstawiają ofertę</li>
                    <li>Układamy strukturę, by prowadziła odbiorcę przez kolejne etapy</li>
                    <li>Dostosowujemy język do Twojej branży i klientów</li>
                  </ul>
                  <div className='mt-auto'>
                    <ButtonLink arrow href='#kontakt'>
                      Wyceń treści do strony
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className={largeIconSizeClasses} />,
              title: 'Artykuły eksperckie',
              subtitle: 'od 300 zł',
              description: (
                <div className='flex h-full flex-col'>
                  <ul className='mb-3 list-disc space-y-1 pl-4 text-sm'>
                    <li>Przygotowujemy artykuły eksperckie i edukacyjne</li>
                    <li>Optymalizujemy je pod SEO, by wzmacniały widoczność</li>
                    <li>Planujemy publikacje, by utrzymać regularność i wspomóc SEO</li>
                  </ul>
                  <div className='mt-auto'>
                    <ButtonLink arrow href='#kontakt'>
                      Zamów artykuły
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiShoppingCartLine className={largeIconSizeClasses} />,
              title: 'E-commerce: opisy',
              subtitle: 'od 40 zł / szt.',
              description: (
                <div className='flex h-full flex-col'>
                  <ul className='mb-3 list-disc space-y-1 pl-4 text-sm'>
                    <li>Piszemy opisy produktów pokazujące korzyści</li>
                    <li>Tworzymy krótkie treści do szybkich decyzji zakupowych</li>
                    <li>Przygotowujemy rozbudowane opisy premium dla produktów wyższej klasy</li>
                  </ul>
                  <div className='mt-auto'>
                    <ButtonLink arrow href='#kontakt'>
                      Wyceń treści do sklepu
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiShareForwardLine className={largeIconSizeClasses} />,
              title: 'Media społecznościowe: treści',
              subtitle: 'od 30 zł',
              description: (
                <div className='flex h-full flex-col'>
                  <ul className='mb-3 list-disc space-y-1 pl-4 text-sm'>
                    <li>Przygotowujemy posty, które zatrzymują uwagę i reakcje</li>
                    <li>Piszemy scenariusze z jasnym wezwaniem do działania</li>
                    <li>Układamy scenariusze rolek pod większe zasięgi</li>
                  </ul>
                  <div className='mt-auto'>
                    <ButtonLink arrow href='#kontakt'>
                      Zamów copy do social
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiFilePdfLine className={largeIconSizeClasses} />,
              title: 'Oferty i case studies',
              subtitle: 'od 400 zł',
              description: (
                <div className='flex h-full flex-col'>
                  <ul className='mb-3 list-disc space-y-1 pl-4 text-sm'>
                    <li>Projektujemy oferty sprzedażowe podkreślające Twoją wartość</li>
                    <li>Opracowujemy case studies pokazujące efekty współpracy</li>
                  </ul>
                  <div className='mt-auto'>
                    <ButtonLink arrow href='#kontakt'>
                      Poproś o ofertę PDF
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPencilLine className={largeIconSizeClasses} />,
              title: 'Korekta i redakcja',
              subtitle: 'wycena indywidualna',
              description: (
                <div className='flex h-full flex-col'>
                  <ul className='mb-3 list-disc space-y-1 pl-4 text-sm'>
                    <li>Poprawiamy błędy językowe i stylistyczne</li>
                    <li>Ujednolicamy format, ton i układ treści</li>
                    <li>Dostosowujemy teksty pod SEO dla lepszej widoczności</li>
                  </ul>
                  <div className='mt-auto'>
                    <ButtonLink arrow href='#kontakt'>
                      Prześlij tekst do korekty
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <WorkSteps variant='content' />

        <Divider size='sm' />

        <SectionContactForm
          title='Sprawdź koszt tworzenia treści'
          description='Napisz czym zajmuje się Twoja firma, jakie treści chcesz tworzyć i na jakich kanałach publikujesz - otrzymasz darmową wycenę realizacji.'
          imageSrc='/assets/blog/czym-jest-content-marketing/czym-jest-content-marketing.webp'
          imageAlt='Content marketing - tworzenie treści dla firm'
          defaultSubject='Treści'
        />

        <Divider line />

        <SectionFaqPanels
          defaultOpenIndex={1}
          pageUrl='https://www.arteonagency.pl/uslugi/tworzenie-tresci'
          title='Najczęstsze pytania dotyczące tworzenia treści'
          items={[
            {
              question: 'Ile czasu trwa przygotowanie treści?',
              answer:
                'Standardowo od 2 do 10 dni roboczych - zależnie od długości, złożoności i naszej bieżącej dostępności.',
            },
            {
              question: 'Czy treści są unikalne i pisane ręcznie?',
              answer: 'Tak, wszystkie treści tworzymy indywidualnie.',
            },
            {
              question: 'Czy możemy mieć wpływ na styl i język treści?',
              answer:
                'Tak. Na początku wspólnie ustalamy ton komunikacji i dostosowujemy treści do Twojej marki oraz grupy docelowej.',
            },
            {
              question: 'Czy oferujecie też korektę i redakcję istniejących treści?',
              answer:
                'Tak, poprawiamy i przekształcamy obecne treści tak, aby były bardziej przekonujące, poprawne językowo i dopasowane do celów marketingowych.',
            },
            {
              question: 'Czy treści są zoptymalizowane pod SEO?',
              answer:
                'Tak, tworzymy je z uwzględnieniem fraz kluczowych, struktury nagłówków i zasad SEO copywritingu - tak, aby dobrze wypadały w Google.',
            },
            {
              question: 'Czy mogę zlecić regularne przygotowanie treści (np. co miesiąc)?',
              answer:
                'Tak, możliwa jest stała współpraca abonamentowa - np. comiesięczne artykuły, newslettery lub pakiety treści.',
            },
          ]}
        />

        <Divider line />

        <SectionBento
          title='Poznaj inne usługi'
          items={[
            {
              title: 'Pozycjonowanie stron',
              size: 'large',
              backgroundImage:
                '/assets/projects/kolorowe-talerze/moskup-strony-kolorowe-talerze.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/marketing/pozycjonowanie-stron',
            },
            {
              title: 'Strony internetowe',
              size: 'medium',
              backgroundImage: '/assets/projects/napilota/mockup-strony-napilota.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/tworzenie-stron-wordpress',
            },
            {
              title: 'Blogi internetowe',
              size: 'small',
              backgroundImage: '/assets/projects/perly-mocy/mockup-strony-perly-mocy.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/blogi-internetowe',
            },
            {
              title: 'Szablony media społecznościowe',
              size: 'small',
              backgroundImage: '/assets/projects/msc/mockup-szablon-social-media-msc-mockup.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/szablony-postow-media-spolecznosciowe',
            },
          ]}
        />

        <Divider line />

        <ArticlesCarousel
          title='Przydatne artykuły dotyczące tworzenia treści'
          categorySlug='tresci'
          articles={getArticlePreviewsByCategory('tresci', 6)}
        />

        <Divider size='sm' />
      </Wrapper>

      <CTABanner
        title='Stwórzmy treści, które działają jak magnez'
        description='Tworzymy treści, które trafiają do ludzi oraz algorytmów, wspierając sprzedaż'
        btnOne='Skontaktuj się'
        btnOneHref='#kontakt'
        backgroundImage='/assets/blog/czym-jest-content-marketing/czym-jest-content-marketing.webp'
        overlay='black'
      />
      <ServiceSchema />
    </>
  );
}
