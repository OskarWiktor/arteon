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

const LOCALE = 'no' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/no/personvernpolicy'),
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
          <h1>Personvernpolicy</h1>
          <p className='mt-2 text-sm'>
            Versjon: <strong>03.03.2026</strong>
          </p>
          <Divider size='xs' />
          <SectionInfo title='1. Behandlingsansvarlig'>
            <p>
              Behandlingsansvarlig for personopplysninger er Arteon med
              hovedkontor i gmina Czernichow, Zagacie, ul. Jasminowa 36, 32-070,
              Polen.
            </p>
            <p>
              NIP: <strong>9442284430</strong>, REGON:{' '}
              <strong>528888241</strong>
            </p>
            <p>
              Kontakt: <strong>contact@arteonagency.com</strong>, tlf.:{' '}
              <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='2. Omfang av innsamlede data'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                data sendt via kontaktskjemaet (fornavn, etternavn, e-post,
                meldingsinnhold),
              </li>
              <li>
                tekniske data samlet inn automatisk (IP-adresse,
                enhetsinformasjon, informasjonskapsler),
              </li>
              <li>
                analysedata fra Google Analytics 4, Ahrefs Web Analytics, Vercel
                Analytics og Vercel Speed Insights,
              </li>
              <li>
                analysedata fra Metricool (besoksstatistikk, trafikkkilder),
              </li>
              <li>
                data samlet inn av Google AdSense for visning av annonser
                (annonseidentifikatorer, annonseinformasjonskapsler,
                annonseinteraksjonsdata, IAB TCF v2.3-samtykkestrenger),
              </li>
              <li>
                serverloggfiler og sikkerhetshendelser (f.eks. tidsstempler,
                IP-adresser, foresporselsoverskrifter).
              </li>
            </ul>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='3. Formal og rettsgrunnlag for behandling'>
            <ol className='list-decimal space-y-1 pl-6'>
              <li>
                <strong>Kundekommunikasjon</strong> - besvarelse av henvendelser
                fra kontaktskjemaet (art. 6 nr. 1 bokstav b) og f) GDPR).
              </li>
              <li>
                <strong>Markedsforing og analyse</strong> - nettstedsstatistikk,
                innholdsoptimalisering (art. 6 nr. 1 bokstav f) GDPR).
              </li>
              <li>
                <strong>Levering av tjenester</strong> - utarbeidelse av tilbud,
                kontrakter, fakturaer (art. 6 nr. 1 bokstav b) GDPR).
              </li>
              <li>
                <strong>Rettslige forpliktelser</strong> - f.eks. oppbevaring av
                regnskapsdokumentasjon (art. 6 nr. 1 bokstav c) GDPR).
              </li>
              <li>
                <strong>Sikkerhet og krav</strong> - logghandtering, forebygging
                av misbruk, fastsettelse/handheving/forsvar av krav (art. 6 nr.
                1 bokstav f) GDPR).
              </li>
              <li>
                <strong>Annonsevisning</strong> - visning av interessebaserte
                annonser via Google AdSense (art. 6 nr. 1 bokstav a) GDPR -
                brukersamtykke gitt via Google Privacy & Messaging-dialog).
              </li>
            </ol>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='4. Informasjonskapsler og samtykke'>
            <p>Nettstedet bruker informasjonskapsler til folgende formal:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>sikring av korrekt funksjon av nettstedet,</li>
              <li>
                trafikkanalyse (Google Analytics 4, Ahrefs Web Analytics, Vercel
                Analytics, Metricool),
              </li>
              <li>markedsforingsformaal,</li>
              <li>
                visning av interessebaserte annonser (Google AdSense /
                DoubleClick).
              </li>
            </ul>
            <p>
              Google AdSense kan bruke DoubleClick-informasjonskapsler for aa
              vise annonser basert paa brukerens tidligere besok paa vaart
              nettsted eller andre nettsteder.
            </p>
            <h3 className='h5 mt-4 mb-3'>Samtykkehaandtering (CMP)</h3>
            <p>
              For innsamling og haandtering av samtykke til informasjonskapsler
              og databehandling for annonseformaal bruker dette nettstedet
              Google Privacy &amp; Messaging &mdash; en sertifisert
              samtykkehaandteringsplattform (CMP) integrert med IAB Transparency
              and Consent Framework (TCF) versjon 2.3.
            </p>
            <p>
              Brukere fra Det europeiske okonomiske samarbeidsomraadet (EOES),
              Storbritannia og Sveits vil bli bedt om samtykke via en
              Google-dialog. Brukere fra amerikanske stater med
              personvernlovgivning vil se en melding i samsvar med de relevante
              statlige reglene (inkludert stotte for Global Privacy
              Control-signaler).
            </p>
            <p>
              Du kan endre samtykkepreferansene dine naar som helst ved aa
              klikke paa lenken &quot;Informasjonskapselinnstillinger&quot; i
              bunnteksten paa nettstedet.
            </p>
            <h3 className='h5 mt-4 mb-3'>Google Consent Mode v2</h3>
            <p>
              Nettstedet bruker Google Consent Mode v2 i avansert modus
              (Advanced). For brukere i regulerte regioner er alle
              samtykke-signaler (ad_storage, ad_user_data, ad_personalization,
              analytics_storage) som standard satt til &quot;denied&quot; og
              oppdateres forst etter samtykke. For brukere i andre regioner er
              samtykke som standard satt til &quot;granted&quot;.
            </p>
            <p>
              Du kan deaktivere personaliserte annonser i{' '}
              <a
                href='https://adssettings.google.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-link'
              >
                Google Ads-innstillinger
              </a>{' '}
              eller paa{' '}
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
              Du kan administrere informasjonskapsler i nettleserens
              innstillinger. Begrensning av informasjonskapsler kan paavirke
              visse funksjoner paa nettstedet.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='5. Mottakere av data'>
            <p>
              Data kan deles med enheter som stotter oss i aa levere tjenester,
              slik som:
            </p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>hosting-/applikasjonsleverandor (f.eks. Vercel),</li>
              <li>
                leverandorer av analyseverktoy (Google Ireland Ltd., Ahrefs Pte.
                Ltd., Vercel Inc., Metricool S.L.),
              </li>
              <li>
                leverandor av annonsetjenester (Google Ireland Ltd. - Google
                AdSense),
              </li>
              <li>
                revisjonsfirma, betalingsformidler eller juridisk raadgiver - om
                nodvendig.
              </li>
            </ul>
            <p>
              Alle mottakere behandler data i samsvar med GDPR basert paa
              passende avtaler.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='6. Databehandleravtale (DPA)'>
            <p>
              Paa forespørsel inngaar vi databehandleravtale (DPA) naar vi
              behandler data paa vegne av kunden (f.eks. innenfor
              nettstedsvedlikehold, konfigurasjon av verktoy eller systemer).
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='7. Overforing av data utenfor EOES'>
            <p>
              Google og Vercel kan behandle data utenfor Det europeiske
              okonomiske samarbeidsomraadet. Passende juridiske
              beskyttelsestiltak benyttes (herunder
              standardkontraktsbestemmelser godkjent av EU-kommisjonen) og, der
              det er mulig, tekniske tiltak (pseudonymisering, minimering).
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='8. Oppbevaringsperiode for data'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                Data fra kontaktskjemaet - opptil 12 maaneder etter avslutning
                av korrespondansen.
              </li>
              <li>
                Kundedata - i den perioden som kreves ved lov
                (regnskapsdokumentasjon).
              </li>
              <li>
                Analysedata - i henhold til Google Analytics-retningslinjer
                (f.eks. 26 maaneder).
              </li>
              <li>
                Loggfiler - i den perioden som er nodvendig for sikkerhet og
                ansvarlighet (typisk opptil 12 maaneder, med mindre regler
                foreskriver annet).
              </li>
            </ul>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='9. Dine rettigheter'>
            <p>Du har rett til aa:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>faa tilgang til dine data og faa en kopi,</li>
              <li>retting av data,</li>
              <li>sletting av data,</li>
              <li>begrensning av behandling,</li>
              <li>dataportabilitet,</li>
              <li>innsigelse mot behandling (herunder markedsforing),</li>
              <li>
                klage til relevant tilsynsmyndighet (i Polen: Lederen for
                Kontoret for beskyttelse av personopplysninger, UODO).
              </li>
            </ul>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='10. Frivillig avgivelse av data'>
            <p>
              Avgivelse av personopplysninger er frivillig, men nodvendig for
              kontakt eller levering av tjenester.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='11. Sikkerhetstiltak'>
            <p>
              Vi implementerer tekniske og organisatoriske tiltak for aa
              beskytte personopplysninger mot uautorisert tilgang, tap eller
              odeleggelse.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='12. Endringer i policyen'>
            <p>
              Denne personvernpolicyen kan oppdateres for aa gjenspeile
              endringer i lovgivning eller teknologi. Den nyeste versjonen er
              alltid tilgjengelig paa denne siden.
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
