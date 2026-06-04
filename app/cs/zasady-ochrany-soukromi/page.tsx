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

const LOCALE = 'cs' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/cs/zasady-ochrany-soukromi'),
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
          <h1>Zasady ochrany osobnich udaju</h1>
          <p className='mt-2 text-sm'>
            Verze: <strong>03.03.2026</strong>
          </p>
          <Divider size='xs' />
          <SectionInfo title='1. Spravce dat'>
            <p>
              Spravcem osobnich udaju je Arteon se sidlem v obci Czernichow,
              Zagacie, ul. Jasminowa 36, 32-070, Polsko.
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
          <SectionInfo title='2. Rozsah shromazdovanych dat'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                udaje zadane prostrednictvim kontaktniho formulare (jmeno,
                prijmeni, e-mail, obsah zpravy),
              </li>
              <li>
                technicke udaje shromazdovane automaticky (IP adresa, informace
                o zarizeni, soubory cookie),
              </li>
              <li>
                analyticke udaje z Google Analytics 4, Ahrefs Web Analytics,
                Vercel Analytics a Vercel Speed Insights,
              </li>
              <li>
                analyticke udaje z Metricool (statistiky navstev, zdroje
                provozu),
              </li>
              <li>
                udaje shromazdovane sluzbou Google AdSense za ucelem zobrazeni
                reklam (reklamni identifikatory, reklamni soubory cookie, udaje
                o interakci s reklamou, retezce souhlasu IAB TCF v2.3),
              </li>
              <li>
                serverove logy a bezpecnostni udalosti (napr. casova razitka, IP
                adresy, hlavicky pozadavku).
              </li>
            </ul>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='3. Ucely a pravni zaklad zpracovani'>
            <ol className='list-decimal space-y-1 pl-6'>
              <li>
                <strong>Komunikace se zakaznikem</strong> -- odpovidani na
                dotazy z kontaktniho formulare (cl. 6 odst. 1 pism. b) a f)
                GDPR).
              </li>
              <li>
                <strong>Marketing a analytika</strong> -- statistiky webu,
                optimalizace obsahu (cl. 6 odst. 1 pism. f) GDPR).
              </li>
              <li>
                <strong>Poskytovani sluzeb</strong> -- priprava nabidek, smluv,
                faktur (cl. 6 odst. 1 pism. b) GDPR).
              </li>
              <li>
                <strong>Pravni povinnosti</strong> -- napr. uchovavani ucetni
                dokumentace (cl. 6 odst. 1 pism. c) GDPR).
              </li>
              <li>
                <strong>Bezpecnost a naroky</strong> -- vedeni logu, prevence
                zneuziti, uplatneni/vymahani/obhajoba naroku (cl. 6 odst. 1
                pism. f) GDPR).
              </li>
              <li>
                <strong>Zobrazeni reklam</strong> -- zobrazeni reklam na zaklade
                zajmu prostrednictvim Google AdSense (cl. 6 odst. 1 pism. a)
                GDPR -- souhlas uzivatele udeleny prostrednictvim dialogu Google
                Privacy & Messaging).
              </li>
            </ol>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='4. Soubory cookie a souhlas'>
            <p>
              Webove stranky pouzivaji soubory cookie pro nasledujici ucely:
            </p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>zajisteni spravneho fungovani webovych stranek,</li>
              <li>
                analyza provozu (Google Analytics 4, Ahrefs Web Analytics,
                Vercel Analytics, Metricool),
              </li>
              <li>marketingove ucely,</li>
              <li>
                zobrazeni reklam na zaklade zajmu (Google AdSense /
                DoubleClick).
              </li>
            </ul>
            <p>
              Google AdSense muze pouzivat soubory cookie DoubleClick k
              zobrazovani reklam na zaklade predchozich navstev uzivatele nasich
              webovych stranek nebo jinych webovych stranek.
            </p>
            <h3 className='h5 mt-4 mb-3'>Sprava souhlasu (CMP)</h3>
            <p>
              Pro sber a spravu souhlasu s cookies a zpracovanim dat pro
              reklamni ucely vyuziva tento web Google Privacy &amp; Messaging
              &mdash; certifikovanou platformu pro spravu souhlasu (CMP)
              integrovanou se standardem IAB Transparency and Consent Framework
              (TCF) verze 2.3.
            </p>
            <p>
              Uzivatele z Evropskeho hospodarskeho prostoru (EHP), Velke
              Britanie a Svycarska budou pozadani o souhlas prostrednictvim
              dialogu Google. Uzivatele ze statu USA s predpisy o ochrane
              soukromi uvidi zpravu v souladu se statnimi predpisy (vcetne
              podpory signalu Global Privacy Control).
            </p>
            <p>
              Sve preference souhlasu muzete kdykoli zmenit kliknutim na odkaz
              &quot;Nastaveni cookies&quot; v zapati webu.
            </p>
            <h3 className='h5 mt-4 mb-3'>Google Consent Mode v2</h3>
            <p>
              Web vyuziva Google Consent Mode v2 v pokrocilem rezimu (Advanced).
              Pro uzivatele z regulovanych regionu jsou vsechny signaly souhlasu
              (ad_storage, ad_user_data, ad_personalization, analytics_storage)
              ve vychozim stavu nastaveny na &quot;denied&quot; a aktualizovany
              az po udeleni souhlasu. Pro uzivatele z ostatnich regionu jsou
              souhlasy ve vychozim stavu nastaveny na &quot;granted&quot;.
            </p>
            <p>
              Personalizovane reklamy muzete deaktivovat v{' '}
              <a
                href='https://adssettings.google.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-link'
              >
                Nastaveni Google Ads
              </a>{' '}
              nebo na{' '}
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
              Soubory cookie muzete spravovat v nastaveni prohlizece. Omezeni
              souboru cookie muze ovlivnit nektere funkce webu.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='5. Prijemci dat'>
            <p>
              Data mohou byt sdilena se subjekty, ktere nas podporuji pri
              poskytovani sluzeb, jako jsou:
            </p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>poskytovatel hostingu/aplikaci (napr. Vercel),</li>
              <li>
                poskytovatele analytickych nastroju (Google Ireland Ltd., Ahrefs
                Pte. Ltd., Vercel Inc., Metricool S.L.),
              </li>
              <li>
                poskytovatel reklamnich sluzeb (Google Ireland Ltd. -- Google
                AdSense),
              </li>
              <li>
                ucetni firma, zpracovatel plateb nebo pravni poradce -- pokud je
                to nutne.
              </li>
            </ul>
            <p>
              Vsichni prijemci zpracovavaji data v souladu s GDPR na zaklade
              prislusnych smluv.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='6. Smlouva o zpracovani dat (DPA)'>
            <p>
              Na pozadani uzavirame smlouvu o zpracovani dat (DPA), kdyz
              zpracovavame data jmenem klienta (napr. v ramci udrzby webu,
              konfigurace nastroju nebo systemu).
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='7. Predavani dat mimo EHP'>
            <p>
              Google a Vercel mohou zpracovavat data mimo Evropsky hospodsky
              prostor. Jsou aplikovany prislusne pravni zaruky (vcetne
              standardnich smluvnich dolozek schvalenych Evropskou komisi) a
              pokud je to mozne, technicka opatreni (pseudonymizace,
              minimalizace).
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='8. Doba uchovavani dat'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                Data z kontaktniho formulare -- az 12 mesicu po ukonceni
                korespondence.
              </li>
              <li>
                Data klientu -- po dobu vyzadovanou zakonem (ucetni
                dokumentace).
              </li>
              <li>
                Analyticka data -- dle zasad Google Analytics (napr. 26 mesicu).
              </li>
              <li>
                Logy -- po dobu nezbytnou pro bezpecnost a zodpovednost (obvykle
                az 12 mesicu, pokud predpisy nestanovi jinak).
              </li>
            </ul>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='9. Vase prava'>
            <p>Mate pravo na:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>pristup k vasum datum a ziskani jejich kopie,</li>
              <li>opravu dat,</li>
              <li>vymazani dat,</li>
              <li>omezeni zpracovani,</li>
              <li>prenositelnost dat,</li>
              <li>namitku proti zpracovani (vcetne marketingu),</li>
              <li>
                podani stiznosti u prislusneho dozoroveho uradu (v Polsku:
                predseda Uradu pro ochranu osobnich udaju, UODO).
              </li>
            </ul>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='10. Dobrovolne poskytovani dat'>
            <p>
              Poskytovani osobnich udaju je dobrovolne, ale nezbytne pro
              komunikaci nebo poskytovani sluzeb.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='11. Bezpecnostni opatreni'>
            <p>
              Zavadime technicka a organizacni opatreni k ochrane osobnich udaju
              pred neopravnenym pristupem, ztratou nebo znicenim.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='12. Zmeny zasad'>
            <p>
              Tyto zasady ochrany osobnich udaju mohou byt aktualizovany, aby
              odrazely zmeny v legislativne nebo technologiich. Nejaktualne
              verze je vzdy k dispozici na teto strance.
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
