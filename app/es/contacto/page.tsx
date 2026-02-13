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
  title: 'Contacto - Arteon',
  description: '¿Tiene una pregunta sobre nuestras herramientas? ¿Encontró un error o tiene una sugerencia para una nueva herramienta? Escríbanos — respondemos en un día laborable.',
  alternates: {
    canonical: toAbsoluteUrl('/es/contacto'),
    languages: {
      en: toAbsoluteUrl('/en/contact'),
      de: toAbsoluteUrl('/de/kontakt'),
      es: toAbsoluteUrl('/es/contacto'),
      fr: toAbsoluteUrl('/fr/contact'),
    },
  },
  openGraph: {
    title: 'Contacto - Arteon',
    description: '¿Tiene una pregunta sobre nuestras herramientas? ¿Encontró un error o tiene una sugerencia para una nueva herramienta? Escríbanos — respondemos en un día laborable.',
    url: toAbsoluteUrl('/es/contacto'),
    type: 'website',
  },
};

export default function ContactoPage() {
  return (
    <>
      <HeroBanner title="Contacto" description="¿Tiene una pregunta sobre nuestras herramientas? Escríbanos" backgroundImage="/assets/bg/abstract-bg10.webp" overlay="black" variant="center" />

      <Wrapper>
        <Gap size="sm" />

        <SectionInfo title="¿Tiene una pregunta o sugerencia?">
          <p>
            Nos encanta recibir sus comentarios sobre nuestras herramientas. Si encontró un error, tiene una idea para una nueva herramienta o necesita ayuda — escríbanos a{' '}
            <a href="mailto:kontakt@arteonagency.pl" className="inline-link">
              kontakt@arteonagency.pl
            </a>
            . Respondemos en un día laborable.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <ContactForm title="Envíenos un mensaje" locale="es" />

        <Gap variant="line" />

        <SectionSteps
          variant="contact"
          items={[
            {
              title: 'Correo electrónico',
              icon: <RiMailLine className="h-6 w-6" />,
              description: (
                <p>
                  <a href="mailto:kontakt@arteonagency.pl">kontakt@arteonagency.pl</a>
                </p>
              ),
            },
            {
              title: 'Horario',
              icon: <RiMapPinTimeLine className="h-6 w-6" />,
              description: <p>Lunes – Viernes: 8:00 – 16:00 (CET)</p>,
            },
          ]}
          title="Datos de contacto"
        />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Volver a las herramientas"
        description="10 herramientas en línea gratuitas para trabajar con imágenes, texto y colores"
        btnOne="Herramientas"
        btnOneLink="/es/herramientas"
        backgroundImage="/assets/bg/abstract-bg10.webp"
        overlay="black"
      />
    </>
  );
}
