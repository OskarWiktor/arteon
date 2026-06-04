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

const LOCALE = 'hu' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/hu/adatvedelmi-iranyelvek'),
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

export default function AdatvedelmiIranyelvekPage() {
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
          <h1>Adatvédelmi irányelvek</h1>
          <p className='mt-2 text-sm'>
            Verzió: <strong>2026.02.13</strong>
          </p>

          <Divider size='xs' />

          <SectionInfo title='1. Adatkezelő'>
            <p>
              A személyes adatok kezelője az Arteon, székhelye: Czernichów
              község, Zagacie, ul. Jaśminowa 36, 32-070, Lengyelország.
            </p>
            <p>
              Adószám (NIP): <strong>9442284430</strong>, REGON:{' '}
              <strong>528888241</strong>
            </p>
            <p>
              Kapcsolat: <strong>contact@arteonagency.com</strong>, tel.:{' '}
              <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='2. A gyűjtött adatok köre'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                a kapcsolatfelvételi űrlapon megadott adatok (keresztnév,
                vezetéknév, e-mail, üzenet tartalma),
              </li>
              <li>
                automatikusan gyűjtött technikai adatok (IP-cím,
                eszközinformáció, cookie-k),
              </li>
              <li>
                elemzési adatok a Google Analytics 4, Ahrefs Web Analytics,
                Vercel Analytics és Vercel Speed Insights szolgáltatásokból,
              </li>
              <li>
                elemzési adatok a Metricool-ból (látogatási statisztikák,
                forgalmi források),
              </li>
              <li>
                a Google AdSense által hirdetések megjelenítése céljából
                gyűjtött adatok (hirdetési azonosítók, hirdetési cookie-k,
                hirdetés-interakciós adatok),
              </li>
              <li>
                szerver- és biztonsági eseménynaplók (pl. időbélyegek, IP-cím,
                kérésfejlécek).
              </li>
            </ul>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='3. Az adatkezelés céljai és jogalapjai'>
            <ol className='list-decimal space-y-1 pl-6'>
              <li>
                <strong>Ügyfélkapcsolat</strong> – a kapcsolatfelvételi űrlap
                megkeresésire való válaszadás (GDPR 6. cikk (1) bek. b) és f)
                pont).
              </li>
              <li>
                <strong>Marketing és elemzés</strong> – webhelyi statisztikák,
                tartalomoptimalizálás (GDPR 6. cikk (1) bek. f) pont).
              </li>
              <li>
                <strong>Szolgáltatásnyújtás</strong> – ajánlatok, szerződések,
                számlák készítése (GDPR 6. cikk (1) bek. b) pont).
              </li>
              <li>
                <strong>Jogi kötelezettségek</strong> – pl. könyvelési
                dokumentáció megőrzése (GDPR 6. cikk (1) bek. c) pont).
              </li>
              <li>
                <strong>Biztonság és igények</strong> – naplók vezetése,
                visszaélések megelőzése, igények
                megállapítása/érvényesítése/védelme (GDPR 6. cikk (1) bek. f)
                pont).
              </li>
              <li>
                <strong>Hirdetések megjelenítése</strong> – érdeklődésen alapuló
                hirdetések megjelenítése a Google AdSense-en keresztül (GDPR 6.
                cikk (1) bek. a) pont – a felhasználó hozzájárulása a
                cookie-banneren keresztül).
              </li>
            </ol>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='4. Cookie-k'>
            <p>A weboldal az alábbi célokra használ cookie-kat:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>a weboldal megfelelő működésének biztosítása,</li>
              <li>
                forgalomelemzés (Google Analytics 4, Ahrefs Web Analytics,
                Vercel Analytics, Metricool),
              </li>
              <li>marketing célok,</li>
              <li>
                érdeklődésen alapuló hirdetések megjelenítése (Google AdSense /
                DoubleClick).
              </li>
            </ul>
            <p>
              A Google AdSense DoubleClick cookie-kat használhat hirdetések
              megjelenítésére a felhasználó korábbi látogatásai alapján a
              weboldalunkon vagy más weboldalakon. Harmadik fél szolgáltatók
              (köztük a Google) ezeket a cookie-kat a böngészési előzmények
              alapján történő hirdetésmegjelenítésre használják.
            </p>
            <p>
              A személyre szabott hirdetésekről lemondhat a{' '}
              <a
                href='https://adssettings.google.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-link'
              >
                Google Ads beállítások
              </a>{' '}
              vagy az{' '}
              <a
                href='https://www.aboutads.info/choices/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-link'
              >
                aboutads.info
              </a>{' '}
              oldalon.
            </p>
            <p>
              A weboldal Google Consent Mode v2-t használ. Ez azt jelenti, hogy
              a Google elemzési és hirdetési szkriptjei nem gyűjtenek adatokat,
              amíg a felhasználó nem adja meg hozzájárulását a cookie-banneren
              keresztül.
            </p>
            <p>
              A cookie-kat a böngésző beállításaiban kezelheti. A cookie-k
              korlátozása befolyásolhatja a weboldal egyes funkcióit.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='5. Adatfogadók'>
            <p>
              Az adatok megoszthatók a szolgáltatásnyújtásban minket támogató
              szervezetekkel, mint például:
            </p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>hosting-/alkalmazásszolgáltatók (pl. Vercel),</li>
              <li>
                elemzőeszköz-szolgáltatók (Google Ireland Ltd., Ahrefs Pte.
                Ltd., Vercel Inc., Metricool S.L.),
              </li>
              <li>
                hirdetési szolgáltatók (Google Ireland Ltd. – Google AdSense),
              </li>
              <li>
                könyvelőiroda, fizetési szolgáltatók vagy jogi tanácsadók –
                szükség esetén.
              </li>
            </ul>
            <p>
              Minden fogadó fél a GDPR-nak megfelelően, megfelelő megállapodások
              alapján kezeli az adatokat.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='6. Adatfeldolgozási megállapodás (DPA)'>
            <p>
              Kérésre adatfeldolgozási megállapodást (DPA) kötünk, ha az ügyfél
              nevében dolgozunk fel adatokat (pl. weboldal karbantartás, eszköz-
              vagy rendszerkonfiguráció keretében).
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='7. Adattovábbítás az EGT-n kívülre'>
            <p>
              A Google és a Vercel az Európai Gazdasági Térségen kívül is
              feldolgozhat adatokat. Megfelelő jogi garanciákat alkalmaznak
              (beleértve az Európai Bizottság által jóváhagyott általános
              szerződési feltételeket) és – ahol lehetséges – technikai
              intézkedéseket (álnevesítés, minimalizálás).
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='8. Az adatok megőrzési ideje'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                Kapcsolatfelvételi űrlap adatai – a levelezés befejezésétől
                számított legfeljebb 12 hónapig.
              </li>
              <li>
                Ügyféladatok – a jogszabályban előírt ideig (könyvelési
                dokumentáció).
              </li>
              <li>
                Elemzési adatok – a Google Analytics szabályzatának megfelelően
                (pl. 26 hónap).
              </li>
              <li>
                Naplók – a biztonsághoz és elszámoltathatósághoz szükséges ideig
                (általában legfeljebb 12 hónap, hacsak a jogszabályok másként
                nem rendelkeznek).
              </li>
            </ul>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='9. Az Ön jogai'>
            <p>Önnek joga van:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>adataihoz való hozzáférésre és másolat kéréséhez,</li>
              <li>adatok helyesbítéséhez,</li>
              <li>adatok törléséhez,</li>
              <li>az adatkezelés korlátozásához,</li>
              <li>adathordozhatósághoz,</li>
              <li>
                az adatkezelés elleni tiltakozáshoz (beleértve a marketinget),
              </li>
              <li>
                panasz benyújtásához az illetékes felügyeleti hatóságnál
                (Lengyelországban: a Személyes Adatok Védelméért Felelős Hivatal
                elnöke, UODO).
              </li>
            </ul>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='10. Adatszolgáltatás önkéntessége'>
            <p>
              A személyes adatok megadása önkéntes, de szükséges a
              kapcsolatfelvételhez vagy a szolgáltatásnyújtáshoz.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='11. Biztonsági intézkedések'>
            <p>
              Technikai és szervezeti intézkedéseket alkalmazunk a személyes
              adatok jogosulatlan hozzáférés, elvesztés vagy megsemmisülés
              elleni védelmére.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='12. Az irányelvek módosítása'>
            <p>
              Ez az adatvédelmi irányelv frissíthető a jogszabályi vagy
              technológiai változások tükrözése érdekében. A jelenlegi verzió
              mindig elérhető ezen az oldalon.
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
