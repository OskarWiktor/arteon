import HeroBanner from '@/components/sections/HeroBanner';
import CTABanner from '@/components/sections/CTABanner';
import ContactForm from '@/components/sections/ContactForm';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';
import { RiMailLine, RiMapPinTimeLine } from 'react-icons/ri';

export const metadata = {
  title: 'Contact - Arteon',
  description: 'Have a question about our tools? Found a bug or have a suggestion for a new tool? Write to us — we respond within one business day.',
  alternates: {
    canonical: toAbsoluteUrl('/en/contact'),
    languages: {
      en: toAbsoluteUrl('/en/contact'),
      de: toAbsoluteUrl('/de/kontakt'),
      es: toAbsoluteUrl('/es/contacto'),
      fr: toAbsoluteUrl('/fr/contact'),
    },
  },
  openGraph: {
    title: 'Contact - Arteon',
    description: 'Have a question about our tools? Found a bug or have a suggestion for a new tool? Write to us — we respond within one business day.',
    url: toAbsoluteUrl('/en/contact'),
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <HeroBanner title="Contact" description="Have a question about our tools? Write to us" backgroundImage="/assets/bg/abstract-bg10.webp" overlay="black" variant="center" />

      <Wrapper>
        <Gap size="sm" />

        <SectionInfo title="Have a question or suggestion?">
          <p>
            We are happy to hear your feedback about our tools. If you found a bug, have an idea for a new tool, or need help — write to us at{' '}
            <a href="mailto:kontakt@arteonagency.pl" className="inline-link">
              kontakt@arteonagency.pl
            </a>
            . We respond within one business day.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <ContactForm title="Send us a message" locale="en" />

        <Gap variant="line" />

        <SectionSteps
          variant="contact"
          items={[
            {
              title: 'Email',
              icon: <RiMailLine className="h-6 w-6" />,
              description: (
                <p>
                  <a href="mailto:kontakt@arteonagency.pl">kontakt@arteonagency.pl</a>
                </p>
              ),
            },
            {
              title: 'Business hours',
              icon: <RiMapPinTimeLine className="h-6 w-6" />,
              description: <p>Monday – Friday: 8:00 – 16:00 (CET)</p>,
            },
          ]}
          title="Contact details"
        />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Back to tools"
        description="10 free online tools for working with images, text, and colors"
        btnOne="Tools"
        btnOneLink="/en/tools"
        backgroundImage="/assets/bg/abstract-bg10.webp"
        overlay="black"
      />
    </>
  );
}
