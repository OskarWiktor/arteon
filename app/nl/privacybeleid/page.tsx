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
    images: [
      {
        url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'),
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function PrivacybeleidPage() {
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
          <h1>Privacybeleid</h1>
          <p className='mt-2 text-sm'>
            Versie: <strong>03.03.2026</strong>
          </p>

          <Divider size='xs' />

          <SectionInfo title='1. Verwerkingsverantwoordelijke'>
            <p>
              De verwerkingsverantwoordelijke voor persoonsgegevens is Arteon,
              gevestigd in gemeente Czernichów, Zagacie, ul. Jaśminowa 36,
              32-070, Polen.
            </p>
            <p>
              Belastingnummer (NIP): <strong>9442284430</strong>, REGON:{' '}
              <strong>528888241</strong>
            </p>
            <p>
              Contact: <strong>contact@arteonagency.com</strong>, tel.:{' '}
              <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='2. Omvang van verzamelde gegevens'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                gegevens ingediend via het contactformulier (voornaam,
                achternaam, e-mail, berichtinhoud),
              </li>
              <li>
                automatisch verzamelde technische gegevens (IP-adres,
                apparaatinformatie, cookies),
              </li>
              <li>
                analytische gegevens van Google Analytics 4, Vercel Analytics en
                Vercel Speed Insights,
              </li>
              <li>
                gegevens verzameld door Google AdSense voor het weergeven van
                advertenties (advertentie-ID&apos;s, advertentiecookies,
                interactiegegevens met advertenties, IAB TCF
                v2.3-toestemmingsreeksen),
              </li>
              <li>
                server- en beveiligingslogboeken (bijv. tijdstempels, IP-adres,
                verzoekheaders).
              </li>
            </ul>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='3. Doeleinden en rechtsgronden van de verwerking'>
            <ol className='list-decimal space-y-1 pl-6'>
              <li>
                <strong>Klantencontact</strong> - beantwoording van vragen via
                het contactformulier (Art. 6 lid 1 sub b en f AVG).
              </li>
              <li>
                <strong>Marketing en analyse</strong> - sitestatistieken,
                contentoptimalisatie (Art. 6 lid 1 sub f AVG).
              </li>
              <li>
                <strong>Dienstverlening</strong> - voorbereiding van offertes,
                contracten, facturen (Art. 6 lid 1 sub b AVG).
              </li>
              <li>
                <strong>Wettelijke verplichtingen</strong> - bijv. bewaring van
                boekhoudkundige documentatie (Art. 6 lid 1 sub c AVG).
              </li>
              <li>
                <strong>Beveiliging en vorderingen</strong> - bijhouden van
                logboeken, voorkomen van misbruik,
                vaststelling/uitoefening/verdediging van vorderingen (Art. 6 lid
                1 sub f AVG).
              </li>
              <li>
                <strong>Weergave van advertenties</strong> - weergave van op
                interesses gebaseerde advertenties via Google AdSense (Art. 6
                lid 1 sub a AVG - toestemming van de gebruiker via het Google
                Privacy & Messaging-dialoogvenster).
              </li>
            </ol>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='4. Cookies en toestemming'>
            <p>
              De website maakt gebruik van cookies voor de volgende doeleinden:
            </p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>het waarborgen van de goede werking van de website,</li>
              <li>verkeersanalyse (Google Analytics 4, Vercel Analytics),</li>
              <li>marketingdoeleinden,</li>
              <li>
                weergave van op interesses gebaseerde advertenties (Google
                AdSense / DoubleClick).
              </li>
            </ul>
            <p>
              Google AdSense kan DoubleClick-cookies gebruiken om advertenties
              weer te geven op basis van eerdere bezoeken van de gebruiker aan
              onze website of andere websites. Externe partijen (waaronder
              Google) gebruiken deze cookies om advertenties weer te geven op
              basis van browsegeschiedenis.
            </p>
            <h3 className='h5 mt-4 mb-3'>Toestemmingsbeheer (CMP)</h3>
            <p>
              Voor het verzamelen en beheren van toestemming voor cookies en
              gegevensverwerking voor advertentiedoeleinden maakt deze website
              gebruik van Google Privacy &amp; Messaging &mdash; een
              gecertificeerd Consent Management Platform (CMP) dat is
              geïntegreerd met de IAB Transparency and Consent Framework (TCF)
              versie 2.3.
            </p>
            <p>
              Gebruikers uit de Europese Economische Ruimte (EER), het Verenigd
              Koninkrijk en Zwitserland worden via een Google-dialoogvenster om
              toestemming gevraagd. Gebruikers uit Amerikaanse staten met
              privacywetgeving zien een bericht dat voldoet aan de regelgeving
              van hun staat (inclusief ondersteuning voor Global Privacy
              Control-signalen).
            </p>
            <p>
              U kunt uw toestemmingsvoorkeuren op elk moment wijzigen door te
              klikken op de link &quot;Cookie-instellingen&quot; in de voettekst
              van de website.
            </p>
            <h3 className='h5 mt-4 mb-3'>Google Consent Mode v2</h3>
            <p>
              De website maakt gebruik van Google Consent Mode v2 in
              geavanceerde modus (Advanced). Voor gebruikers in gereguleerde
              regio&apos;s zijn alle toestemmingssignalen (ad_storage,
              ad_user_data, ad_personalization, analytics_storage) standaard
              ingesteld op &quot;denied&quot; en worden pas bijgewerkt nadat
              toestemming is verleend. Voor gebruikers in andere regio&apos;s
              zijn de toestemmingen standaard ingesteld op &quot;granted&quot;.
            </p>
            <p>
              U kunt gepersonaliseerde advertenties uitschakelen via{' '}
              <a
                href='https://adssettings.google.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-link'
              >
                Google Ads-instellingen
              </a>{' '}
              of via{' '}
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
              U kunt cookies beheren in uw browserinstellingen. Het beperken van
              cookies kan sommige functies van de website beïnvloeden.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='5. Ontvangers van gegevens'>
            <p>
              Gegevens kunnen worden gedeeld met partijen die ons ondersteunen
              bij het verlenen van diensten, zoals:
            </p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>hosting-/applicatieproviders (bijv. Vercel),</li>
              <li>
                aanbieders van analysetools (Google Ireland Ltd., Vercel Inc.),
              </li>
              <li>
                aanbieders van advertentiediensten (Google Ireland Ltd. - Google
                AdSense),
              </li>
              <li>
                boekhoudkantoor, betalingsverwerkers of juridische adviseurs -
                indien nodig.
              </li>
            </ul>
            <p>
              Alle ontvangers verwerken gegevens in overeenstemming met de AVG
              op basis van passende overeenkomsten.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='6. Verwerkersovereenkomst'>
            <p>
              Op verzoek sluiten wij een verwerkersovereenkomst wanneer wij
              gegevens verwerken namens een klant (bijv. in het kader van
              websiteonderhoud, configuratie van tools of systemen).
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='7. Gegevensoverdracht buiten de EER'>
            <p>
              Google en Vercel kunnen gegevens verwerken buiten de Europese
              Economische Ruimte. Er worden passende juridische waarborgen
              toegepast (waaronder Standaard Contractbepalingen goedgekeurd door
              de Europese Commissie) en, waar mogelijk, technische maatregelen
              (pseudonimisering, minimalisering).
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='8. Bewaartermijn van gegevens'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                Gegevens uit het contactformulier - tot 12 maanden na het einde
                van de correspondentie.
              </li>
              <li>
                Klantgegevens - voor de wettelijk vereiste periode
                (boekhoudkundige documentatie).
              </li>
              <li>
                Analytische gegevens - conform het Google Analytics-beleid
                (bijv. 26 maanden).
              </li>
              <li>
                Logboeken - voor de periode die nodig is voor beveiliging en
                verantwoording (doorgaans tot 12 maanden, tenzij regelgeving
                anders bepaalt).
              </li>
            </ul>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='9. Uw rechten'>
            <p>U heeft het recht op:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>inzage in uw gegevens en het verkrijgen van een kopie,</li>
              <li>rectificatie van gegevens,</li>
              <li>wissing van gegevens,</li>
              <li>beperking van de verwerking,</li>
              <li>overdraagbaarheid van gegevens,</li>
              <li>bezwaar tegen verwerking (inclusief marketing),</li>
              <li>
                het indienen van een klacht bij de bevoegde toezichthoudende
                autoriteit (in Polen: de Voorzitter van het Bureau voor de
                Bescherming van Persoonsgegevens, UODO).
              </li>
            </ul>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='10. Vrijwillige verstrekking van gegevens'>
            <p>
              Het verstrekken van persoonsgegevens is vrijwillig, maar
              noodzakelijk voor contact of dienstverlening.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='11. Beveiligingsmaatregelen'>
            <p>
              Wij passen technische en organisatorische maatregelen toe om
              persoonsgegevens te beschermen tegen ongeoorloofde toegang,
              verlies of vernietiging.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='12. Wijzigingen in het beleid'>
            <p>
              Dit privacybeleid kan worden bijgewerkt om wijzigingen in
              wetgeving of technologie weer te geven. De huidige versie is
              altijd beschikbaar op deze pagina.
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
