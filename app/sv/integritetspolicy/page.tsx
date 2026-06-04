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

const LOCALE = 'sv' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/sv/integritetspolicy'),
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

export default function PrivacyPolicyPage() {
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
          <h1>Integritetspolicy</h1>
          <p className='mt-2 text-sm'>
            Version: <strong>03.03.2026</strong>
          </p>
          <Divider size='xs' />
          <SectionInfo title='1. Personuppgiftsansvarig'>
            <p>
              Personuppgiftsansvarig ar Arteon, med sate i gmina Czernichow,
              Zagacie, ul. Jasminowa 36, 32-070, Polen.
            </p>
            <p>
              NIP: <strong>9442284430</strong>, REGON:{' '}
              <strong>528888241</strong>
            </p>
            <p>
              Kontakt: <strong>contact@arteonagency.com</strong>, tel.:{' '}
              <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='2. Omfattning av insamlade uppgifter'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                uppgifter som skickas via kontaktformularet (fornamn, efternamn,
                e-post, meddelandeinnehall),
              </li>
              <li>
                tekniska uppgifter som samlas in automatiskt (IP-adress,
                enhetsinformation, kakor),
              </li>
              <li>
                analysdata fran Google Analytics 4, Ahrefs Web Analytics, Vercel
                Analytics och Vercel Speed Insights,
              </li>
              <li>
                analysdata fran Metricool (besoksstatistik, trafikkallor),
              </li>
              <li>
                uppgifter som samlas in av Google AdSense for att visa annonser
                (annonsidentifierare, annonskakor, annonsinteraktionsdata, IAB
                TCF v2.3-samtyckesstranger),
              </li>
              <li>
                serverloggar och sakerhetshandelser (t.ex. tidsstamplar,
                IP-adresser, forfragerubriker).
              </li>
            </ul>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='3. Andamal och rattslig grund for behandling'>
            <ol className='list-decimal space-y-1 pl-6'>
              <li>
                <strong>Kundkommunikation</strong> -- besvarande av fragor fran
                kontaktformularet (art. 6.1 b och f GDPR).
              </li>
              <li>
                <strong>Marknadsforing och analys</strong> --
                webbplatsstatistik, innehallsoptimering (art. 6.1 f GDPR).
              </li>
              <li>
                <strong>Tillhandahallande av tjanster</strong> -- forberedelse
                av offerter, avtal, fakturor (art. 6.1 b GDPR).
              </li>
              <li>
                <strong>Rattsliga skyldigheter</strong> -- t.ex. forvaring av
                bokforingsdokumentation (art. 6.1 c GDPR).
              </li>
              <li>
                <strong>Sakerhet och ansprak</strong> -- logghantering,
                missbruksprevention, faststallande/verkstallande/forsvar av
                ansprak (art. 6.1 f GDPR).
              </li>
              <li>
                <strong>Annonsvisning</strong> -- visning av intressebaserade
                annonser via Google AdSense (art. 6.1 a GDPR -- anvandarsamtycke
                som ges via Google Privacy & Messaging-dialog).
              </li>
            </ol>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='4. Kakor och samtycke'>
            <p>Webbplatsen anvander kakor for foljande andamal:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>sakerstalla korrekt funktion av webbplatsen,</li>
              <li>
                trafikanalys (Google Analytics 4, Ahrefs Web Analytics, Vercel
                Analytics, Metricool),
              </li>
              <li>marknadsforingsandamal,</li>
              <li>
                visning av intressebaserade annonser (Google AdSense /
                DoubleClick).
              </li>
            </ul>
            <p>
              Google AdSense kan anvanda DoubleClick-kakor for att visa annonser
              baserat pa anvandarens tidigare besok pa var webbplats eller andra
              webbplatser.
            </p>
            <h3 className='h5 mt-4 mb-3'>Samtyckehantering (CMP)</h3>
            <p>
              For insamling och hantering av samtycke till kakor och
              databehandling for annonseringsandamal anvander denna webbplats
              Google Privacy &amp; Messaging &mdash; en certifierad
              samtyckehanteringsplattform (CMP) integrerad med IAB Transparency
              and Consent Framework (TCF) version 2.3.
            </p>
            <p>
              Anvandare fran Europeiska ekonomiska samarbetsomradet (EES),
              Storbritannien och Schweiz ombeds ge sitt samtycke via en
              Google-dialog. Anvandare fran amerikanska delstater med
              integritetslagstiftning ser ett meddelande i enlighet med
              delstatens regler (inklusive stod for Global Privacy
              Control-signaler).
            </p>
            <p>
              Du kan andra dina samtyckesinstallningar nar som helst genom att
              klicka pa lanken &quot;Kakinstellningar&quot; i webbplatsens
              sidfot.
            </p>
            <h3 className='h5 mt-4 mb-3'>Google Consent Mode v2</h3>
            <p>
              Webbplatsen anvander Google Consent Mode v2 i avancerat lage
              (Advanced). For anvandare i reglerade regioner ar alla
              samtyckessignaler (ad_storage, ad_user_data, ad_personalization,
              analytics_storage) som standard installda pa &quot;denied&quot;
              och uppdateras forst efter samtycke. For anvandare i andra
              regioner ar samtycken som standard installda pa
              &quot;granted&quot;.
            </p>
            <p>
              Du kan inaktivera personaliserade annonser i{' '}
              <a
                href='https://adssettings.google.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-link'
              >
                Google Ads-installningar
              </a>{' '}
              eller pa{' '}
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
              Du kan hantera kakor i webblasarens installningar. Att begransa
              kakor kan paverka vissa funktioner pa webbplatsen.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='5. Mottagare av uppgifter'>
            <p>
              Uppgifter kan delas med enheter som stodar oss i att
              tillhandahalla tjanster, sasom:
            </p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>hosting-/applikationsleverantor (t.ex. Vercel),</li>
              <li>
                leverantorer av analysverktyg (Google Ireland Ltd., Ahrefs Pte.
                Ltd., Vercel Inc., Metricool S.L.),
              </li>
              <li>
                leverantor av annonstjanster (Google Ireland Ltd. -- Google
                AdSense),
              </li>
              <li>
                redovisningsbyra, betalningsformedlare eller juridisk radgivare
                -- om nodvandigt.
              </li>
            </ul>
            <p>
              Alla mottagare behandlar uppgifter i enlighet med GDPR baserat pa
              lampliga avtal.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='6. Personuppgiftsbitradesavtal (DPA)'>
            <p>
              Pa begaran uppratter vi personuppgiftsbitradesavtal (DPA) nar vi
              behandlar uppgifter for kundens rakning (t.ex. inom
              webbplatsunderhall, konfiguration av verktyg eller system).
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='7. Overforing av uppgifter utanfor EES'>
            <p>
              Google och Vercel kan behandla uppgifter utanfor Europeiska
              ekonomiska samarbetsomradet. Lampliga rattsliga skyddsatgarder
              tillampas (inklusive standardavtalsklausuler godkanda av
              Europeiska kommissionen) och, om mojligt, tekniska atgarder
              (pseudonymisering, minimering).
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='8. Lagringstid for uppgifter'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                Data fran kontaktformularet -- upp till 12 manader efter
                avslutad korrespondens.
              </li>
              <li>
                Kunddata -- under den period som kravs enligt lag
                (bokforingsdokumentation).
              </li>
              <li>
                Analysdata -- enligt Google Analytics policy (t.ex. 26 manader).
              </li>
              <li>
                Loggar -- under den period som kravs for sakerhet och
                ansvarsskyldighet (vanligtvis upp till 12 manader, om inte
                foreskrifter anger annat).
              </li>
            </ul>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='9. Dina rattigheter'>
            <p>Du har ratt att:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>fa tillgang till dina uppgifter och erhalla en kopia,</li>
              <li>rattelse av uppgifter,</li>
              <li>radering av uppgifter,</li>
              <li>begransning av behandling,</li>
              <li>dataportabilitet,</li>
              <li>invandning mot behandling (inklusive marknadsforing),</li>
              <li>
                lamna in klagomal till behorig tillsynsmyndighet (i Polen:
                Ordforanden for Byraan for skydd av personuppgifter, UODO).
              </li>
            </ul>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='10. Frivilligt tillhandahallande av uppgifter'>
            <p>
              Tillhandahallande av personuppgifter ar frivilligt men nodvandigt
              for kontakt eller tillhandahallande av tjanster.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='11. Sakerhetsatgarder'>
            <p>
              Vi tilllampar tekniska och organisatoriska atgarder for att skydda
              personuppgifter mot obehorig atkomst, forlust eller forstoring.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='12. Andringar av policyn'>
            <p>
              Denna integritetspolicy kan uppdateras for att atersspegla
              forandringar i lagstiftning eller teknik. Den senaste versionen
              finns alltid tillganglig pa denna sida.
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
