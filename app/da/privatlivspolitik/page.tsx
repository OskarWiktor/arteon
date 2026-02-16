import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'da' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: { title: meta.title, description: meta.description, url: toAbsoluteUrl('/da/privatlivspolitik'), type: 'website' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Gap size="xs" />
      <Wrapper as="article" id="article-root" itemScope itemType="https://schema.org/Article" className="flex flex-col-reverse gap-8 select-none lg:grid lg:grid-cols-[1fr_300px]">
        <div>
          <h1>Privatlivspolitik</h1>
          <p className="mt-2 text-sm opacity-70">
            Version: <strong>13.02.2026</strong>
          </p>
          <Gap size="xs" />
          <SectionInfo title="1. Dataansvarlig">
            <p>Den dataansvarlige for personoplysninger er Arteon med hjemsted i gmina Czernichow, Zagacie, ul. Jasminowa 36, 32-070, Polen.</p>
            <p>
              NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Kontakt: <strong>kontakt@arteonagency.pl</strong>, tlf.: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="2. Omfang af indsamlede data">
            <ul className="list-disc space-y-1 pl-6">
              <li>data indsendt via kontaktformularen (fornavn, efternavn, e-mail, beskedindhold),</li>
              <li>tekniske data indsamlet automatisk (IP-adresse, enhedsoplysninger, cookies),</li>
              <li>analysedata fra Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics og Vercel Speed Insights,</li>
              <li>analysedata fra Metricool (besoegsstatistik, trafikkkilder),</li>
              <li>data indsamlet af Google AdSense med henblik pa visning af annoncer (annonceidentifikatorer, annoncecookies, annonceinteraktionsdata),</li>
              <li>serverlogfiler og sikkerhedshaendelser (f.eks. tidsstempler, IP-adresser, anmodningshoveder).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="3. Formal og retsgrundlag for behandling">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Kundekommunikation</strong> -- besvarelse af henvendelser fra kontaktformularen (art. 6, stk. 1, litra b) og f) GDPR).
              </li>
              <li>
                <strong>Markedsfoering og analyse</strong> -- webstedsstatistik, indholdsoptimering (art. 6, stk. 1, litra f) GDPR).
              </li>
              <li>
                <strong>Levering af tjenester</strong> -- udarbejdelse af tilbud, kontrakter, fakturaer (art. 6, stk. 1, litra b) GDPR).
              </li>
              <li>
                <strong>Retlige forpligtelser</strong> -- f.eks. opbevaring af regnskabsdokumentation (art. 6, stk. 1, litra c) GDPR).
              </li>
              <li>
                <strong>Sikkerhed og krav</strong> -- loghaandtering, forebyggelse af misbrug, fastlaeggelse/haandhaevelse/forsvar af krav (art. 6, stk. 1, litra f) GDPR).
              </li>
              <li>
                <strong>Annoncevisning</strong> -- visning af interessebaserede annoncer via Google AdSense (art. 6, stk. 1, litra a) GDPR -- brugersamtykke givet via cookiebanner).
              </li>
            </ol>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="4. Cookies">
            <p>Webstedet anvender cookies til foelgende formal:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>sikring af korrekt funktion af webstedet,</li>
              <li>trafikanalyse (Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, Metricool),</li>
              <li>markedsfoeringsformaal,</li>
              <li>visning af interessebaserede annoncer (Google AdSense / DoubleClick).</li>
            </ul>
            <p>Google AdSense kan anvende DoubleClick-cookies til at vise annoncer baseret pa brugerens tidligere besoeg pa vores websted eller andre websteder.</p>
            <p>
              Du kan deaktivere personaliserede annoncer i{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                Google Ads-indstillinger
              </a>{' '}
              eller pa{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>Webstedet anvender Google Consent Mode v2. Det betyder, at Googles analyse- og annoncescripts ikke indsamler data, foer brugeren giver samtykke via cookiebanneret.</p>
            <p>Du kan administrere cookies i browserens indstillinger. Begraensning af cookies kan paavirke visse funktioner pa webstedet.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="5. Modtagere af data">
            <p>Data kan deles med enheder, der stoetter os i at levere tjenester, saasom:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>hosting-/applikationsudbyder (f.eks. Vercel),</li>
              <li>udbydere af analysevaerktojer (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>udbyder af annoncetjenester (Google Ireland Ltd. -- Google AdSense),</li>
              <li>revisionsfirma, betalingsformidler eller juridisk raadgiver -- om noedvendigt.</li>
            </ul>
            <p>Alle modtagere behandler data i overensstemmelse med GDPR baseret pa passende aftaler.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="6. Databehandleraftale (DPA)">
            <p>Pa anmodning indgaar vi databehandleraftale (DPA), naar vi behandler data pa vegne af kunden (f.eks. inden for webstedsvedligeholdelse, konfiguration af vaerktojer eller systemer).</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="7. Overfoersel af data uden for EOES">
            <p>
              Google og Vercel kan behandle data uden for Det Europaeiske OEkonomiske Samarbejdsomraade. Passende juridiske beskyttelsesforanstaltninger anvendes (herunder standardkontraktbestemmelser
              godkendt af Europa-Kommissionen) og, hvor det er muligt, tekniske foranstaltninger (pseudonymisering, minimering).
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="8. Opbevaringsperiode for data">
            <ul className="list-disc space-y-1 pl-6">
              <li>Data fra kontaktformularen -- op til 12 maaneder efter afslutning af korrespondancen.</li>
              <li>Kundedata -- i den periode, der kraeves ved lov (regnskabsdokumentation).</li>
              <li>Analysedata -- i henhold til Google Analytics politik (f.eks. 26 maaneder).</li>
              <li>Logfiler -- i den periode, der er noedvendig for sikkerhed og ansvarlighed (typisk op til 12 maaneder, medmindre regler foreskriver andet).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="9. Dine rettigheder">
            <p>Du har ret til at:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>faa adgang til dine data og faa en kopi,</li>
              <li>berigtigelse af data,</li>
              <li>sletning af data,</li>
              <li>begraensning af behandling,</li>
              <li>dataportabilitet,</li>
              <li>indsigelse mod behandling (herunder markedsfoering),</li>
              <li>indgive klage til den relevante tilsynsmyndighed (i Polen: Formanden for Kontoret for Beskyttelse af Personoplysninger, UODO).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="10. Frivillig afgivelse af data">
            <p>Afgivelse af personoplysninger er frivillig, men noedvendig for kontakt eller levering af tjenester.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="11. Sikkerhedsforanstaltninger">
            <p>Vi implementerer tekniske og organisatoriske foranstaltninger for at beskytte personoplysninger mod uautoriseret adgang, tab eller oedelaeggelse.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="12. AEndringer af politikken">
            <p>Denne privatlivspolitik kan opdateres for at afspejle aendringer i lovgivning eller teknologi. Den nyeste version er altid tilgaengelig pa denne side.</p>
          </SectionInfo>
          <Gap size="xs" />
        </div>
        <TableOfContents rootSelector="#article-root" size="large" />
      </Wrapper>
      <ButtonToTop />
      <Gap />
    </>
  );
}
