import HeroBanner from '@/components/sections/HeroBanner';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';
import { RiLockLine, RiInfinityFill, RiToolsFill, RiRocketLine, RiImageEditLine, RiSearchLine, RiMailLine, RiPaletteLine, RiQrCodeLine } from 'react-icons/ri';

export const metadata = {
  title: 'Sobre nosotros – Herramientas en línea gratuitas - Arteon',
  description: 'Arteon crea herramientas en línea gratuitas para propietarios de negocios, creadores web y cualquier persona que trabaje en línea. Sin registro, sin límites, sin subir archivos a servidores.',
  alternates: {
    canonical: toAbsoluteUrl('/es/sobre-nosotros'),
    languages: {
      en: toAbsoluteUrl('/en/about'),
      de: toAbsoluteUrl('/de/ueber-uns'),
      es: toAbsoluteUrl('/es/sobre-nosotros'),
      fr: toAbsoluteUrl('/fr/a-propos'),
    },
  },
  openGraph: {
    title: 'Sobre nosotros – Herramientas en línea gratuitas - Arteon',
    description: 'Arteon crea herramientas en línea gratuitas para propietarios de negocios, creadores web y cualquier persona que trabaje en línea. Sin registro, sin límites, sin subir archivos a servidores.',
    url: toAbsoluteUrl('/es/sobre-nosotros'),
    type: 'website',
  },
};

export default function SobreNosotrosPage() {
  return (
    <>
      <HeroBanner title="Sobre nosotros" description="Herramientas en línea gratuitas para propietarios de negocios, diseñadores, desarrolladores y todos los que trabajan en línea" backgroundImage="/assets/arteon-logo-on-mockup.webp" overlay="black" variant="center" />

      <Wrapper as="article" itemScope itemType="https://schema.org/AboutPage">
        <Gap size="sm" />

        <SectionInfo title="Quiénes somos">
          <p>
            Arteon es una agencia creativa polaca. Además de nuestro trabajo comercial, desarrollamos y mantenemos una colección creciente de herramientas en línea gratuitas diseñadas para propietarios
            de negocios, creadores de sitios web, diseñadores, especialistas en marketing y cualquier persona que trabaje con contenido digital.
          </p>
          <p className="mt-2">
            Cada herramienta que creamos resuelve un problema específico y cotidiano: convertir imágenes, verificar el contraste de colores, generar favicons, crear códigos QR y más. Nuestro objetivo es
            construir un conjunto completo de herramientas donde pueda encontrar todo lo que necesita en un solo lugar, sin tener que navegar entre docenas de sitios web diferentes.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Por qué ofrecemos herramientas gratuitas"
          grid="two"
          items={[
            {
              title: 'Sin registro, sin límites',
              icon: <RiInfinityFill className="text-primary h-6 w-6" />,
              description: <p>Cada herramienta funciona instantáneamente en su navegador. Sin cuenta, sin inicio de sesión, sin pago.</p>,
            },
            {
              title: 'Privacidad primero',
              icon: <RiLockLine className="text-primary h-6 w-6" />,
              description: <p>Sus archivos nunca salen de su dispositivo. Todo el procesamiento se realiza localmente en su navegador — no enviamos sus datos a ningún servidor.</p>,
            },
            {
              title: 'Creadas a partir de necesidades reales',
              icon: <RiToolsFill className="text-primary h-6 w-6" />,
              description: <p>Cada herramienta nació de un problema real que encontramos al trabajar en proyectos de clientes. Si nosotros lo necesitábamos, es probable que usted también.</p>,
            },
            {
              title: 'Financiadas por publicidad, gratuitas para usted',
              icon: <RiRocketLine className="text-primary h-6 w-6" />,
              description: (
                <p>
                  Utilizamos banners de Google AdSense para cubrir los costes de desarrollo y alojamiento. Gracias a los ingresos publicitarios, podemos mantener todas las herramientas gratuitas y
                  seguir creando nuevas.
                </p>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Nuestras herramientas"
          grid="three"
          items={[
            {
              title: 'Imágenes y favicons',
              icon: <RiImageEditLine className="text-primary h-6 w-6" />,
              description: <p>Convertidor WebP, editor de imágenes en línea y generador de favicon. 3 herramientas para el trabajo diario con imágenes.</p>,
            },
            {
              title: 'Meta y SEO',
              icon: <RiSearchLine className="text-primary h-6 w-6" />,
              description: <p>Verificador de meta título y descripción más un contador de palabras y caracteres para evaluar la longitud del texto.</p>,
            },
            {
              title: 'Correo electrónico y comunicación',
              icon: <RiMailLine className="text-primary h-6 w-6" />,
              description: <p>Generador de firma de correo HTML con código listo para Gmail y Outlook.</p>,
            },
            {
              title: 'Colores y accesibilidad',
              icon: <RiPaletteLine className="text-primary h-6 w-6" />,
              description: <p>Comprobador de contraste WCAG, extractor de colores de imagen y generador de paletas de colores. 3 herramientas para trabajar con color.</p>,
            },
            {
              title: 'Impresión y materiales',
              icon: <RiQrCodeLine className="text-primary h-6 w-6" />,
              description: <p>Generador de códigos QR para sitios web, vCards, menús y folletos. Exportación a PNG y SVG.</p>,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Qué viene después">
          <p>
            Estamos trabajando activamente en ampliar el conjunto de herramientas. Se añaden nuevas herramientas regularmente basándose en los comentarios de los usuarios y nuestra propia experiencia.
            El objetivo es una plataforma única donde propietarios de negocios, diseñadores y desarrolladores tengan acceso a cada herramienta esencial — todo en un lugar, todo gratis.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Privacidad y seguridad">
          <p>
            Respetamos su privacidad. Los archivos que sube a nuestras herramientas se procesan exclusivamente en su navegador y nunca se envían a ningún servidor. Utilizamos análisis (Google
            Analytics 4) y publicidad (Google AdSense) solo después de que usted dé su consentimiento a través del banner de cookies. Los detalles completos están disponibles en nuestra{' '}
            <a href="/es/politica-de-privacidad" className="inline-link">
              Política de privacidad
            </a>
            .
          </p>
        </SectionInfo>

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Pruebe nuestras herramientas"
        description="10 herramientas en línea gratuitas — sin registro, sin límites, sin subir archivos a servidores"
        btnOne="Ir a herramientas"
        btnOneLink="/es/herramientas"
        btnTwo="Contacto"
        btnTwoLink="/es/contacto"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
