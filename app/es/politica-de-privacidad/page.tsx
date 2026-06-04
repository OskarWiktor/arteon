import ButtonToTop from '@/components/atoms/buttons/ButtonToTop';
import Divider from '@/components/atoms/Divider';
import Wrapper from '@/components/atoms/Wrapper';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import TableOfContents from '@/components/organisms/TableOfContent';
import {
  getPrivacyPageMeta,
  getPrivacyAlternates,
} from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'es' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/es/politica-de-privacidad'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'),
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function PoliticaDePrivacidadPage() {
  return (
    <>
      <Divider size='xs' />
      <Wrapper
        as='article'
        id='article-root'
        itemScope
        itemType='https://schema.org/Article'
        className='flex flex-col-reverse gap-8 select-none lg:grid lg:grid-cols-[1fr_300px]'
      >
        <div>
          <h1>Política de privacidad</h1>
          <p className='mt-2 text-sm'>
            Versión: <strong>03.03.2026</strong>
          </p>

          <Divider size='xs' />

          <SectionInfo title='1. Responsable del tratamiento'>
            <p>
              El responsable del tratamiento de datos personales es Arteon, con
              sede en el municipio de Czernichów, Zagacie, ul. Jaśminowa 36,
              32-070, Polonia.
            </p>
            <p>
              NIF (NIP): <strong>9442284430</strong>, REGON:{' '}
              <strong>528888241</strong>
            </p>
            <p>
              Contacto: <strong>contact@arteonagency.com</strong>, tel.:{' '}
              <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='2. Alcance de los datos recopilados'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                datos proporcionados en el formulario de contacto (nombre,
                apellido, correo electrónico, contenido del mensaje),
              </li>
              <li>
                datos técnicos recopilados automáticamente (dirección IP,
                información del dispositivo, cookies),
              </li>
              <li>
                datos analíticos de Google Analytics 4, Ahrefs Web Analytics,
                Vercel Analytics y Vercel Speed Insights,
              </li>
              <li>
                datos analíticos de Metricool (estadísticas de visitas, fuentes
                de tráfico),
              </li>
              <li>
                datos recopilados por Google AdSense para mostrar anuncios
                (identificadores publicitarios, cookies publicitarias, datos de
                interacción con anuncios, cadenas de consentimiento IAB TCF
                v2.3),
              </li>
              <li>
                registros del servidor y eventos de seguridad (p. ej., marcas de
                tiempo, dirección IP, encabezados de solicitud).
              </li>
            </ul>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='3. Finalidades y bases jurídicas del tratamiento'>
            <ol className='list-decimal space-y-1 pl-6'>
              <li>
                <strong>Contacto con el cliente</strong> - respuesta a consultas
                del formulario de contacto (art. 6.1.b y f del RGPD).
              </li>
              <li>
                <strong>Marketing y análisis</strong> - estadísticas del sitio,
                optimización de contenidos (art. 6.1.f del RGPD).
              </li>
              <li>
                <strong>Prestación de servicios</strong> - preparación de
                presupuestos, contratos, facturas (art. 6.1.b del RGPD).
              </li>
              <li>
                <strong>Obligaciones legales</strong> - p. ej., conservación de
                documentación contable (art. 6.1.c del RGPD).
              </li>
              <li>
                <strong>Seguridad y reclamaciones</strong> - mantenimiento de
                registros, prevención de abusos, ejercicio/defensa de
                reclamaciones (art. 6.1.f del RGPD).
              </li>
              <li>
                <strong>Visualización de anuncios</strong> - visualización de
                publicidad basada en intereses a través de Google AdSense (art.
                6.1.a del RGPD - consentimiento del usuario a través del diálogo
                de Google Privacy & Messaging).
              </li>
            </ol>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='4. Cookies y consentimiento'>
            <p>El sitio web utiliza cookies con los siguientes fines:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>garantizar el correcto funcionamiento del sitio web,</li>
              <li>
                análisis de tráfico (Google Analytics 4, Ahrefs Web Analytics,
                Vercel Analytics, Metricool),
              </li>
              <li>fines de marketing,</li>
              <li>
                visualización de anuncios basados en intereses (Google AdSense /
                DoubleClick).
              </li>
            </ul>
            <p>
              Google AdSense puede utilizar cookies de DoubleClick para mostrar
              anuncios basados en visitas anteriores del usuario a nuestro sitio
              web u otros sitios. Los proveedores externos (incluido Google)
              utilizan estas cookies para ofrecer anuncios basados en el
              historial de navegación.
            </p>
            <h3 className='h5 mt-4 mb-3'>Gestión del consentimiento (CMP)</h3>
            <p>
              Para recopilar y gestionar el consentimiento para cookies y el
              tratamiento de datos con fines publicitarios, este sitio web
              utiliza Google Privacy &amp; Messaging &mdash; una plataforma de
              gestión de consentimiento (CMP) certificada, integrada con el
              estándar IAB Transparency and Consent Framework (TCF) versión 2.3.
            </p>
            <p>
              Los usuarios del Espacio Económico Europeo (EEE), el Reino Unido y
              Suiza serán invitados a otorgar su consentimiento a través de un
              diálogo de Google. Los usuarios de estados de EE. UU. con leyes de
              privacidad verán un mensaje conforme a las regulaciones estatales
              (incluida la compatibilidad con señales Global Privacy Control).
            </p>
            <p>
              Puede cambiar sus preferencias de consentimiento en cualquier
              momento haciendo clic en el enlace &quot;Configuración de
              cookies&quot; en el pie de página del sitio web.
            </p>
            <h3 className='h5 mt-4 mb-3'>Google Consent Mode v2</h3>
            <p>
              El sitio web utiliza Google Consent Mode v2 en modo avanzado
              (Advanced). Para los usuarios de regiones reguladas, todas las
              señales de consentimiento (ad_storage, ad_user_data,
              ad_personalization, analytics_storage) están configuradas por
              defecto como &quot;denied&quot; y se actualizan solo después de
              otorgar el consentimiento. Para los usuarios de otras regiones,
              los consentimientos están configurados por defecto como
              &quot;granted&quot;.
            </p>
            <p>
              Puede desactivar los anuncios personalizados en{' '}
              <a
                href='https://adssettings.google.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-link'
              >
                Configuración de anuncios de Google
              </a>{' '}
              o en{' '}
              <a
                href='https://www.aboutads.info/choices/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-link'
              >
                aboutads.info
              </a>
              .
            </p>
            <p>
              Puede gestionar las cookies en la configuración de su navegador.
              La restricción de cookies puede afectar a algunas funciones del
              sitio web.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='5. Destinatarios de los datos'>
            <p>
              Los datos pueden compartirse con entidades que nos apoyan en la
              prestación de servicios, tales como:
            </p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>proveedores de alojamiento/aplicaciones (p. ej., Vercel),</li>
              <li>
                proveedores de herramientas de análisis (Google Ireland Ltd.,
                Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),
              </li>
              <li>
                proveedores de servicios publicitarios (Google Ireland Ltd. -
                Google AdSense),
              </li>
              <li>
                asesoría contable, procesadores de pagos o entidades jurídicas,
                si fuera necesario.
              </li>
            </ul>
            <p>
              Todos los destinatarios tratan los datos de conformidad con el
              RGPD sobre la base de los acuerdos correspondientes.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='6. Acuerdo de tratamiento de datos (DPA)'>
            <p>
              A solicitud del cliente, celebramos un acuerdo de tratamiento de
              datos (DPA) cuando tratamos datos en nombre de un cliente (p. ej.,
              en el marco del mantenimiento del sitio web, configuración de
              herramientas o sistemas).
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='7. Transferencias de datos fuera del EEE'>
            <p>
              Google y Vercel pueden tratar datos fuera del Espacio Económico
              Europeo. Se aplican las garantías jurídicas adecuadas (incluidas
              las cláusulas contractuales tipo aprobadas por la Comisión
              Europea) y, cuando es posible, medidas técnicas (seudonimización,
              minimización).
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='8. Período de conservación de datos'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                Datos del formulario de contacto: hasta 12 meses después del fin
                de la correspondencia.
              </li>
              <li>
                Datos de clientes: durante el período exigido por la ley
                (documentación contable).
              </li>
              <li>
                Datos analíticos: de acuerdo con la política de Google Analytics
                (p. ej., 26 meses).
              </li>
              <li>
                Registros: durante el período necesario para la seguridad y la
                rendición de cuentas (generalmente hasta 12 meses, salvo que la
                normativa disponga lo contrario).
              </li>
            </ul>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='9. Sus derechos'>
            <p>Usted tiene derecho a:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>acceder a sus datos y obtener una copia,</li>
              <li>rectificación de los datos,</li>
              <li>supresión de los datos,</li>
              <li>limitación del tratamiento,</li>
              <li>portabilidad de los datos,</li>
              <li>oposición al tratamiento (incluido el marketing),</li>
              <li>
                presentar una reclamación ante la autoridad de control
                competente (en Polonia: Presidente de la Oficina de Protección
                de Datos Personales, UODO).
              </li>
            </ul>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='10. Carácter voluntario de la entrega de datos'>
            <p>
              La entrega de datos personales es voluntaria, pero necesaria para
              el contacto o la prestación de servicios.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='11. Medidas de seguridad'>
            <p>
              Aplicamos medidas técnicas y organizativas para proteger los datos
              personales contra el acceso no autorizado, la pérdida o la
              destrucción.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='12. Cambios en la política'>
            <p>
              Esta política de privacidad puede actualizarse para reflejar
              cambios en la legislación o la tecnología. La versión actual está
              siempre disponible en esta página.
            </p>
          </SectionInfo>

          <Divider size='xs' />
        </div>

        <TableOfContents rootSelector='#article-root' size='large' />
      </Wrapper>

      <ButtonToTop />

      <Divider />
    </>
  );
}
