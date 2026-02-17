import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'nl' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/nl/privacybeleid'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

export default function PrivacybeleidPage() {
  return (
    <>
      <Gap size="xs" />
      <Wrapper as="article" id="article-root" itemScope itemType="https://schema.org/Article" className="flex flex-col-reverse gap-8 select-none lg:grid lg:grid-cols-[1fr_300px]">
        <div>
          <h1>Privacybeleid</h1>
          <p className="mt-2 text-sm opacity-70">
            Versie: <strong>13.02.2026</strong>
          </p>

          <Gap size="xs" />

          <SectionInfo title="1. Verwerkingsverantwoordelijke">
            <p>De verwerkingsverantwoordelijke voor persoonsgegevens is Arteon, gevestigd in gemeente Czernichów, Zagacie, ul. Jaśminowa 36, 32-070, Polen.</p>
            <p>
              Belastingnummer (NIP): <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Contact: <strong>kontakt@arteonagency.pl</strong>, tel.: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="2. Omvang van verzamelde gegevens">
            <ul className="list-disc space-y-1 pl-6">
              <li>gegevens ingediend via het contactformulier (voornaam, achternaam, e-mail, berichtinhoud),</li>
              <li>automatisch verzamelde technische gegevens (IP-adres, apparaatinformatie, cookies),</li>
              <li>analytische gegevens van Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics en Vercel Speed Insights,</li>
              <li>analytische gegevens van Metricool (bezoekstatistieken, verkeersbronnen),</li>
              <li>gegevens verzameld door Google AdSense voor het weergeven van advertenties (advertentie-ID&apos;s, advertentiecookies, interactiegegevens met advertenties),</li>
              <li>server- en beveiligingslogboeken (bijv. tijdstempels, IP-adres, verzoekheaders).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="3. Doeleinden en rechtsgronden van de verwerking">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Klantencontact</strong> - beantwoording van vragen via het contactformulier (Art. 6 lid 1 sub b en f AVG).
              </li>
              <li>
                <strong>Marketing en analyse</strong> - sitestatistieken, contentoptimalisatie (Art. 6 lid 1 sub f AVG).
              </li>
              <li>
                <strong>Dienstverlening</strong> - voorbereiding van offertes, contracten, facturen (Art. 6 lid 1 sub b AVG).
              </li>
              <li>
                <strong>Wettelijke verplichtingen</strong> - bijv. bewaring van boekhoudkundige documentatie (Art. 6 lid 1 sub c AVG).
              </li>
              <li>
                <strong>Beveiliging en vorderingen</strong> - bijhouden van logboeken, voorkomen van misbruik, vaststelling/uitoefening/verdediging van vorderingen (Art. 6 lid 1 sub f AVG).
              </li>
              <li>
                <strong>Weergave van advertenties</strong> - weergave van op interesses gebaseerde advertenties via Google AdSense (Art. 6 lid 1 sub a AVG - toestemming van de gebruiker via de
                cookiebanner).
              </li>
            </ol>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="4. Cookies">
            <p>De website maakt gebruik van cookies voor de volgende doeleinden:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>het waarborgen van de goede werking van de website,</li>
              <li>verkeersanalyse (Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, Metricool),</li>
              <li>marketingdoeleinden,</li>
              <li>weergave van op interesses gebaseerde advertenties (Google AdSense / DoubleClick).</li>
            </ul>
            <p>
              Google AdSense kan DoubleClick-cookies gebruiken om advertenties weer te geven op basis van eerdere bezoeken van de gebruiker aan onze website of andere websites. Externe partijen
              (waaronder Google) gebruiken deze cookies om advertenties weer te geven op basis van browsegeschiedenis.
            </p>
            <p>
              U kunt gepersonaliseerde advertenties uitschakelen via{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                Google Ads-instellingen
              </a>{' '}
              of via{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>
              De website maakt gebruik van Google Consent Mode v2. Dit betekent dat Google-analyse- en advertentiescripts geen gegevens verzamelen totdat de gebruiker toestemming geeft via de
              cookiebanner.
            </p>
            <p>U kunt cookies beheren in uw browserinstellingen. Het beperken van cookies kan sommige functies van de website beïnvloeden.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="5. Ontvangers van gegevens">
            <p>Gegevens kunnen worden gedeeld met partijen die ons ondersteunen bij het verlenen van diensten, zoals:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>hosting-/applicatieproviders (bijv. Vercel),</li>
              <li>aanbieders van analysetools (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>aanbieders van advertentiediensten (Google Ireland Ltd. - Google AdSense),</li>
              <li>boekhoudkantoor, betalingsverwerkers of juridische adviseurs — indien nodig.</li>
            </ul>
            <p>Alle ontvangers verwerken gegevens in overeenstemming met de AVG op basis van passende overeenkomsten.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="6. Verwerkersovereenkomst">
            <p>Op verzoek sluiten wij een verwerkersovereenkomst wanneer wij gegevens verwerken namens een klant (bijv. in het kader van websiteonderhoud, configuratie van tools of systemen).</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="7. Gegevensoverdracht buiten de EER">
            <p>
              Google en Vercel kunnen gegevens verwerken buiten de Europese Economische Ruimte. Er worden passende juridische waarborgen toegepast (waaronder Standaard Contractbepalingen goedgekeurd
              door de Europese Commissie) en, waar mogelijk, technische maatregelen (pseudonimisering, minimalisering).
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="8. Bewaartermijn van gegevens">
            <ul className="list-disc space-y-1 pl-6">
              <li>Gegevens uit het contactformulier — tot 12 maanden na het einde van de correspondentie.</li>
              <li>Klantgegevens — voor de wettelijk vereiste periode (boekhoudkundige documentatie).</li>
              <li>Analytische gegevens — conform het Google Analytics-beleid (bijv. 26 maanden).</li>
              <li>Logboeken — voor de periode die nodig is voor beveiliging en verantwoording (doorgaans tot 12 maanden, tenzij regelgeving anders bepaalt).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="9. Uw rechten">
            <p>U heeft het recht op:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>inzage in uw gegevens en het verkrijgen van een kopie,</li>
              <li>rectificatie van gegevens,</li>
              <li>wissing van gegevens,</li>
              <li>beperking van de verwerking,</li>
              <li>overdraagbaarheid van gegevens,</li>
              <li>bezwaar tegen verwerking (inclusief marketing),</li>
              <li>het indienen van een klacht bij de bevoegde toezichthoudende autoriteit (in Polen: de Voorzitter van het Bureau voor de Bescherming van Persoonsgegevens, UODO).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="10. Vrijwillige verstrekking van gegevens">
            <p>Het verstrekken van persoonsgegevens is vrijwillig, maar noodzakelijk voor contact of dienstverlening.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="11. Beveiligingsmaatregelen">
            <p>Wij passen technische en organisatorische maatregelen toe om persoonsgegevens te beschermen tegen ongeoorloofde toegang, verlies of vernietiging.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="12. Wijzigingen in het beleid">
            <p>Dit privacybeleid kan worden bijgewerkt om wijzigingen in wetgeving of technologie weer te geven. De huidige versie is altijd beschikbaar op deze pagina.</p>
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
