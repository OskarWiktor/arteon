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

const LOCALE = 'fi' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/fi/tietosuojakaytanto'),
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
          <h1>Tietosuojakäytäntö</h1>
          <p className='mt-2 text-sm'>
            Versio: <strong>03.03.2026</strong>
          </p>
          <Divider size='xs' />
          <SectionInfo title='1. Rekisterinpitäjä'>
            <p>
              Henkilötietojen rekisterinpitäjä on Arteon, jonka kotipaikka on
              Czernichówin kunta, Zagacie, ul. Jasminowa 36, 32-070, Puola.
            </p>
            <p>
              NIP: <strong>9442284430</strong>, REGON:{' '}
              <strong>528888241</strong>
            </p>
            <p>
              Yhteystiedot: <strong>contact@arteonagency.com</strong>, puh.:{' '}
              <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='2. Kerättävien tietojen laajuus'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                yhteydenottolomakkeen kautta lähetetyt tiedot (etunimi,
                sukunimi, sähköposti, viestin sisältö),
              </li>
              <li>
                automaattisesti kerätyt tekniset tiedot (IP-osoite, laitetiedot,
                evästeet),
              </li>
              <li>
                analytiikkatiedot Google Analytics 4:stä, Vercel Analyticsistä
                ja Vercel Speed Insightsistä,
              </li>
              <li>
                Google AdSensen keräämät tiedot mainosten näyttämiseksi
                (mainostunnisteet, mainosevästeet, mainosvuorovaikutustiedot,
                IAB TCF v2.3 -suostumusmerkkijonot),
              </li>
              <li>
                palvelinlokitiedostot ja turvallisuustapahtumat (esim.
                aikaleimat, IP-osoitteet, pyyntöotsikot).
              </li>
            </ul>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='3. Käsittelyn tarkoitukset ja oikeusperusta'>
            <ol className='list-decimal space-y-1 pl-6'>
              <li>
                <strong>Asiakasviestintä</strong> - yhteydenottolomakkeen kautta
                tulleiden tiedustelujen käsittely (GDPR:n 6 artiklan 1 kohdan b
                ja f alakohta).
              </li>
              <li>
                <strong>Markkinointi ja analytiikka</strong> - verkkosivuston
                tilastot, sisällön optimointi (GDPR:n 6 artiklan 1 kohdan f
                alakohta).
              </li>
              <li>
                <strong>Palvelujen toimittaminen</strong> - tarjousten,
                sopimusten ja laskujen laatiminen (GDPR:n 6 artiklan 1 kohdan b
                alakohta).
              </li>
              <li>
                <strong>Lakisääteiset velvoitteet</strong> - esim.
                kirjanpitoasiakirjojen säilyttäminen (GDPR:n 6 artiklan 1 kohdan
                c alakohta).
              </li>
              <li>
                <strong>Turvallisuus ja vaatimukset</strong> - lokien käsittely,
                väärinkäytösten ehkäisy, vaatimusten
                vahvistaminen/täytäntöönpano/puolustaminen (GDPR:n 6 artiklan 1
                kohdan f alakohta).
              </li>
              <li>
                <strong>Mainosten näyttäminen</strong> - kiinnostuksiin
                perustuvien mainosten näyttäminen Google AdSensen kautta (GDPR:n
                6 artiklan 1 kohdan a alakohta - käyttäjän Google Privacy &
                Messaging -dialogin kautta antama suostumus).
              </li>
            </ol>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='4. Evästeet ja suostumus'>
            <p>Verkkosivusto käyttää evästeitä seuraaviin tarkoituksiin:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>verkkosivuston asianmukaisen toiminnan varmistaminen,</li>
              <li>
                liikenteen analysointi (Google Analytics 4, Vercel Analytics),
              </li>
              <li>markkinointitarkoitukset,</li>
              <li>
                kiinnostuksiin perustuvien mainosten näyttäminen (Google AdSense
                / DoubleClick).
              </li>
            </ul>
            <p>
              Google AdSense voi käyttää DoubleClick-evästeitä mainosten
              näyttämiseksi käyttäjän aiempien vierailujen perusteella
              sivustollamme tai muilla sivustoilla.
            </p>
            <h3 className='h5 mt-4 mb-3'>Suostumuksen hallinta (CMP)</h3>
            <p>
              Evästeiden ja mainostarkoituksiin tapahtuvan tietojenkäsittelyn
              suostumuksen keräämiseksi ja hallitsemiseksi tämä sivusto käyttää
              Google Privacy &amp; Messaging &mdash; sertifioitua suostumuksen
              hallintaympäristöä (CMP), joka on integroitu IAB Transparency and
              Consent Framework (TCF) -standardin versioon 2.3.
            </p>
            <p>
              Euroopan talousalueen (ETA), Yhdistyneen kuningaskunnan ja
              Sveitsin käyttäjiä pyydetään antamaan suostumuksensa
              Google-dialogin kautta. Yhdysvaltain osavaltioiden käyttäjät,
              joilla on tietosuojalainsäädäntö, näkevät osavaltion säännösten
              mukaisen viestin (mukaan lukien Global Privacy Control -signaalien
              tuki).
            </p>
            <p>
              Voit muuttaa suostumusasetuksiasi milloin tahansa napsauttamalla
              &quot;Evästeasetukset&quot; -linkkiä sivuston alatunnisteessa.
            </p>
            <h3 className='h5 mt-4 mb-3'>Google Consent Mode v2</h3>
            <p>
              Sivusto käyttää Google Consent Mode v2:ta edistyneessä tilassa
              (Advanced). Säännellyillä alueilla olevien käyttäjien kaikki
              suostumussignaalit (ad_storage, ad_user_data, ad_personalization,
              analytics_storage) ovat oletuksena &quot;denied&quot; ja
              päivittyvät vasta suostumuksen antamisen jälkeen. Muilla alueilla
              olevien käyttäjien suostumukset ovat oletuksena
              &quot;granted&quot;.
            </p>
            <p>
              Voit poistaa personoidut mainokset käytöstä{' '}
              <a
                href='https://adssettings.google.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-link'
              >
                Google Ads -asetuksissa
              </a>{' '}
              tai osoitteessa{' '}
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
              Voit hallita evästeitä selaimesi asetuksissa. Evästeiden
              rajoittaminen voi vaikuttaa joihinkin sivuston toimintoihin.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='5. Tietojen vastaanottajat'>
            <p>
              Tietoja voidaan jakaa tahoille, jotka tukevat meitä palvelujen
              toimittamisessa, kuten:
            </p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>hosting-/sovelluspalveluntarjoaja (esim. Vercel),</li>
              <li>
                analytiikkatyökalujen tarjoajat (Google Ireland Ltd., Vercel
                Inc.),
              </li>
              <li>
                mainospalveluntarjoaja (Google Ireland Ltd. - Google AdSense),
              </li>
              <li>
                tilintarkastusyhtiö, maksunvälittäjä tai oikeudellinen
                neuvonantaja - tarvittaessa.
              </li>
            </ul>
            <p>
              Kaikki vastaanottajat käsittelevät tietoja GDPR:n mukaisesti
              asianmukaisten sopimusten perusteella.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='6. Tietojenkäsittelysopimus (DPA)'>
            <p>
              Pyynnöstä solmimme tietojenkäsittelysopimuksen (DPA), kun
              käsittelemme tietoja asiakkaan puolesta (esim. verkkosivuston
              ylläpidon, työkalujen tai järjestelmien konfiguroinnin
              yhteydessä).
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='7. Tietojen siirto ETA:n ulkopuolelle'>
            <p>
              Google ja Vercel voivat käsitellä tietoja Euroopan talousalueen
              ulkopuolella. Asianmukaisia oikeudellisia suojatoimia käytetään
              (mukaan lukien EU-komission hyväksymät vakiosopimuslausekkeet)
              sekä mahdollisuuksien mukaan teknisiä toimenpiteitä
              (pseudonymisointi, minimointi).
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='8. Tietojen säilytysaika'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                Yhteydenottolomakkeen tiedot - enintään 12 kuukautta
                kirjeenvaihdon päättymisestä.
              </li>
              <li>
                Asiakastiedot - lain edellyttämän ajan (kirjanpitoasiakirjat).
              </li>
              <li>
                Analytiikkatiedot - Google Analytics -käytäntöjen mukaisesti
                (esim. 26 kuukautta).
              </li>
              <li>
                Lokitiedostot - turvallisuuden ja vastuullisuuden edellyttämän
                ajan (yleensä enintään 12 kuukautta, ellei säännöksistä muuta
                johdu).
              </li>
            </ul>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='9. Oikeutesi'>
            <p>Sinulla on oikeus:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>saada pääsy tietoihisi ja saada niistä kopio,</li>
              <li>tietojen oikaiseminen,</li>
              <li>tietojen poistaminen,</li>
              <li>käsittelyn rajoittaminen,</li>
              <li>tietojen siirrettävyys,</li>
              <li>vastustaa käsittelyä (mukaan lukien markkinointi),</li>
              <li>
                tehdä valitus asianomaiselle valvontaviranomaiselle (Puolassa:
                Henkilötietosuojan viraston johtaja, UODO).
              </li>
            </ul>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='10. Tietojen antamisen vapaaehtoisuus'>
            <p>
              Henkilötietojen antaminen on vapaaehtoista, mutta välttämätöntä
              yhteydenottoa tai palvelujen toimittamista varten.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='11. Turvatoimet'>
            <p>
              Toteutamme teknisiä ja organisatorisia toimenpiteitä
              henkilötietojen suojaamiseksi luvattomalta pääsyltä, katoamiselta
              tai tuhoutumiselta.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='12. Käytännön muutokset'>
            <p>
              Tätä tietosuojakäytäntöä voidaan päivittää lainsäädännön tai
              teknologian muutosten vuoksi. Uusin versio on aina saatavilla
              tällä sivulla.
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
