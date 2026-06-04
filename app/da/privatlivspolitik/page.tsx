import ButtonToTop from '@/components/atoms/buttons/ButtonToTop';
import Divider from '@/components/atoms/Divider';
import Wrapper from '@/components/atoms/Wrapper';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import TableOfContents from '@/components/organisms/TableOfContent';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'da' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/da/privatlivspolitik'),
    type: 'website',
    images: [
      { url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 },
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
          <h1>Privatlivspolitik</h1>
          <p className='mt-2 text-sm opacity-70'>
            Version: <strong>03.03.2026</strong>
          </p>
          <Divider size='xs' />
          <SectionInfo title='1. Dataansvarlig'>
            <p>
              Den dataansvarlige for personoplysninger er Arteon med hjemsted i gmina Czernichow,
              Zagacie, ul. Jasminowa 36, 32-070, Polen.
            </p>
            <p>
              NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Kontakt: <strong>contact@arteonagency.com</strong>, tlf.:{' '}
              <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='2. Omfang af indsamlede data'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                data indsendt via kontaktformularen (fornavn, efternavn, e-mail, beskedindhold),
              </li>
              <li>tekniske data indsamlet automatisk (IP-adresse, enhedsoplysninger, cookies),</li>
              <li>
                analysedata fra Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics og Vercel
                Speed Insights,
              </li>
              <li>analysedata fra Metricool (besoegsstatistik, trafikkkilder),</li>
              <li>
                data indsamlet af Google AdSense med henblik pa visning af annoncer
                (annonceidentifikatorer, annoncecookies, annonceinteraktionsdata, IAB TCF
                v2.3-samtykkestrenge),
              </li>
              <li>
                serverlogfiler og sikkerhedshaendelser (f.eks. tidsstempler, IP-adresser,
                anmodningshoveder).
              </li>
            </ul>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='3. Formal og retsgrundlag for behandling'>
            <ol className='list-decimal space-y-1 pl-6'>
              <li>
                <strong>Kundekommunikation</strong> -- besvarelse af henvendelser fra
                kontaktformularen (art. 6, stk. 1, litra b) og f) GDPR).
              </li>
              <li>
                <strong>Markedsfoering og analyse</strong> -- webstedsstatistik, indholdsoptimering
                (art. 6, stk. 1, litra f) GDPR).
              </li>
              <li>
                <strong>Levering af tjenester</strong> -- udarbejdelse af tilbud, kontrakter,
                fakturaer (art. 6, stk. 1, litra b) GDPR).
              </li>
              <li>
                <strong>Retlige forpligtelser</strong> -- f.eks. opbevaring af
                regnskabsdokumentation (art. 6, stk. 1, litra c) GDPR).
              </li>
              <li>
                <strong>Sikkerhed og krav</strong> -- loghaandtering, forebyggelse af misbrug,
                fastlaeggelse/haandhaevelse/forsvar af krav (art. 6, stk. 1, litra f) GDPR).
              </li>
              <li>
                <strong>Annoncevisning</strong> -- visning af interessebaserede annoncer via Google
                AdSense (art. 6, stk. 1, litra a) GDPR -- brugersamtykke givet via Google Privacy &
                Messaging-dialog).
              </li>
            </ol>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='4. Cookies og samtykke'>
            <p>Webstedet anvender cookies til foelgende formal:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>sikring af korrekt funktion af webstedet,</li>
              <li>
                trafikanalyse (Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics,
                Metricool),
              </li>
              <li>markedsfoeringsformaal,</li>
              <li>visning af interessebaserede annoncer (Google AdSense / DoubleClick).</li>
            </ul>
            <p>
              Google AdSense kan anvende DoubleClick-cookies til at vise annoncer baseret pa
              brugerens tidligere besoeg pa vores websted eller andre websteder.
            </p>
            <h3 className='h5 mt-4 mb-3'>Samtykkehaandtering (CMP)</h3>
            <p>
              Til indsamling og haandtering af samtykke til cookies og databehandling til
              annonceformaal anvender dette websted Google Privacy &amp; Messaging &mdash; en
              certificeret samtykkehaandteringsplatform (CMP) integreret med IAB Transparency and
              Consent Framework (TCF) version 2.3.
            </p>
            <p>
              Brugere fra Det Europaeiske OEkonomiske Samarbejdsomraade (EOES), Det Forenede
              Kongerige og Schweiz vil blive bedt om samtykke via en Google-dialog. Brugere fra
              amerikanske stater med privatlivslovgivning vil se en meddelelse i overensstemmelse
              med de relevante statslige regler (herunder support for Global Privacy
              Control-signaler).
            </p>
            <p>
              Du kan aendre dine samtykkepraeferencer naar som helst ved at klikke pa linket
              &quot;Cookieindstillinger&quot; i webstedets sidefod.
            </p>
            <h3 className='h5 mt-4 mb-3'>Google Consent Mode v2</h3>
            <p>
              Webstedet anvender Google Consent Mode v2 i avanceret tilstand (Advanced). For brugere
              i regulerede regioner er alle samtykke-signaler (ad_storage, ad_user_data,
              ad_personalization, analytics_storage) som standard sat til &quot;denied&quot; og
              opdateres foerst efter samtykke. For brugere i andre regioner er samtykke som standard
              sat til &quot;granted&quot;.
            </p>
            <p>
              Du kan deaktivere personaliserede annoncer i{' '}
              <a
                href='https://adssettings.google.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-link'
              >
                Google Ads-indstillinger
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
              Du kan administrere cookies i browserens indstillinger. Begraensning af cookies kan
              paavirke visse funktioner pa webstedet.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='5. Modtagere af data'>
            <p>Data kan deles med enheder, der stoetter os i at levere tjenester, saasom:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>hosting-/applikationsudbyder (f.eks. Vercel),</li>
              <li>
                udbydere af analysevaerktojer (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc.,
                Metricool S.L.),
              </li>
              <li>udbyder af annoncetjenester (Google Ireland Ltd. -- Google AdSense),</li>
              <li>
                revisionsfirma, betalingsformidler eller juridisk raadgiver -- om noedvendigt.
              </li>
            </ul>
            <p>
              Alle modtagere behandler data i overensstemmelse med GDPR baseret pa passende aftaler.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='6. Databehandleraftale (DPA)'>
            <p>
              Pa anmodning indgaar vi databehandleraftale (DPA), naar vi behandler data pa vegne af
              kunden (f.eks. inden for webstedsvedligeholdelse, konfiguration af vaerktojer eller
              systemer).
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='7. Overfoersel af data uden for EOES'>
            <p>
              Google og Vercel kan behandle data uden for Det Europaeiske OEkonomiske
              Samarbejdsomraade. Passende juridiske beskyttelsesforanstaltninger anvendes (herunder
              standardkontraktbestemmelser godkendt af Europa-Kommissionen) og, hvor det er muligt,
              tekniske foranstaltninger (pseudonymisering, minimering).
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='8. Opbevaringsperiode for data'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                Data fra kontaktformularen -- op til 12 maaneder efter afslutning af
                korrespondancen.
              </li>
              <li>Kundedata -- i den periode, der kraeves ved lov (regnskabsdokumentation).</li>
              <li>Analysedata -- i henhold til Google Analytics politik (f.eks. 26 maaneder).</li>
              <li>
                Logfiler -- i den periode, der er noedvendig for sikkerhed og ansvarlighed (typisk
                op til 12 maaneder, medmindre regler foreskriver andet).
              </li>
            </ul>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='9. Dine rettigheder'>
            <p>Du har ret til at:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>faa adgang til dine data og faa en kopi,</li>
              <li>berigtigelse af data,</li>
              <li>sletning af data,</li>
              <li>begraensning af behandling,</li>
              <li>dataportabilitet,</li>
              <li>indsigelse mod behandling (herunder markedsfoering),</li>
              <li>
                indgive klage til den relevante tilsynsmyndighed (i Polen: Formanden for Kontoret
                for Beskyttelse af Personoplysninger, UODO).
              </li>
            </ul>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='10. Frivillig afgivelse af data'>
            <p>
              Afgivelse af personoplysninger er frivillig, men noedvendig for kontakt eller levering
              af tjenester.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='11. Sikkerhedsforanstaltninger'>
            <p>
              Vi implementerer tekniske og organisatoriske foranstaltninger for at beskytte
              personoplysninger mod uautoriseret adgang, tab eller oedelaeggelse.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='12. AEndringer af politikken'>
            <p>
              Denne privatlivspolitik kan opdateres for at afspejle aendringer i lovgivning eller
              teknologi. Den nyeste version er altid tilgaengelig pa denne side.
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
