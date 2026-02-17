import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'sk' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/sk/zasady-ochrany-osobnych-udajov'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Gap size="xs" />
      <Wrapper as="article" id="article-root" itemScope itemType="https://schema.org/Article" className="flex flex-col-reverse gap-8 select-none lg:grid lg:grid-cols-[1fr_300px]">
        <div>
          <h1>Zásady ochrany osobných údajov</h1>
          <p className="mt-2 text-sm opacity-70">
            Verzia: <strong>13.02.2026</strong>
          </p>
          <Gap size="xs" />
          <SectionInfo title="1. Správca údajov">
            <p>Správcom osobných údajov je spoločnosť Arteon so sídlom v obci Czernichów, Zagacie, ul. Jasminowa 36, 32-070, Poľsko.</p>
            <p>
              NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Kontakt: <strong>kontakt@arteonagency.pl</strong>, tel.: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="2. Rozsah zhromažďovaných údajov">
            <ul className="list-disc space-y-1 pl-6">
              <li>údaje odoslané prostredníctvom kontaktného formulára (meno, priezvisko, e-mail, obsah správy),</li>
              <li>automaticky zhromažďované technické údaje (IP adresa, informácie o zariadení, cookies),</li>
              <li>analytické údaje z Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics a Vercel Speed Insights,</li>
              <li>analytické údaje z Metricool (štatistiky návštevnosti, zdroje návštevnosti),</li>
              <li>údaje zhromažďované službou Google AdSense na zobrazovanie reklám (reklamné identifikátory, reklamné cookies, údaje o interakcii s reklamami),</li>
              <li>serverové logy a bezpečnostné udalosti (napr. časové razítka, IP adresy, hlavičky požiadaviek).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="3. Účely a právny základ spracovania">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Komunikácia so zákazníkmi</strong> — spracovanie dopytov z kontaktného formulára (čl. 6 ods. 1 písm. b a f GDPR).
              </li>
              <li>
                <strong>Marketing a analytika</strong> — štatistiky webovej stránky, optimalizácia obsahu (čl. 6 ods. 1 písm. f GDPR).
              </li>
              <li>
                <strong>Poskytovanie služieb</strong> — príprava ponúk, zmlúv a faktúr (čl. 6 ods. 1 písm. b GDPR).
              </li>
              <li>
                <strong>Zákonné povinnosti</strong> — napr. uchovávanie účtovných dokladov (čl. 6 ods. 1 písm. c GDPR).
              </li>
              <li>
                <strong>Bezpečnosť a nároky</strong> — spracovanie logov, predchádzanie zneužitiu, uplatnenie/presadzovanie/obhajoba nárokov (čl. 6 ods. 1 písm. f GDPR).
              </li>
              <li>
                <strong>Zobrazovanie reklám</strong> — zobrazovanie reklám na základe záujmov prostredníctvom Google AdSense (čl. 6 ods. 1 písm. a GDPR — súhlas udelený cez cookie banner).
              </li>
            </ol>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="4. Cookies">
            <p>Webová stránka používa cookies na tieto účely:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>zabezpečenie správneho fungovania webovej stránky,</li>
              <li>analýza návštevnosti (Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, Metricool),</li>
              <li>marketingové účely,</li>
              <li>zobrazovanie reklám na základe záujmov (Google AdSense / DoubleClick).</li>
            </ul>
            <p>Google AdSense môže používať cookies DoubleClick na zobrazovanie reklám na základe predchádzajúcich návštev na našej stránke alebo iných stránkach.</p>
            <p>
              Personalizované reklamy môžete vypnúť v{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                nastaveniach Google Ads
              </a>{' '}
              alebo na{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>Stránka využíva Google Consent Mode v2. To znamená, že analytické a reklamné skripty Google nezhromažďujú údaje, kým používateľ neudelí súhlas cez cookie banner.</p>
            <p>Cookies môžete spravovať v nastaveniach svojho prehliadača. Obmedzenie cookies môže ovplyvniť niektoré funkcie stránky.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="5. Príjemcovia údajov">
            <p>Údaje môžu byť zdieľané so subjektmi, ktoré nás podporujú pri poskytovaní služieb, ako:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>poskytovateľ hostingu/aplikácie (napr. Vercel),</li>
              <li>poskytovatelia analytických nástrojov (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>poskytovateľ reklamných služieb (Google Ireland Ltd. — Google AdSense),</li>
              <li>účtovná spoločnosť, sprostredkovateľ platieb alebo právny poradca — podľa potreby.</li>
            </ul>
            <p>Všetci príjemcovia spracúvajú údaje v súlade s GDPR na základe príslušných zmlúv.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="6. Zmluva o spracovaní údajov (DPA)">
            <p>Na požiadanie uzatvoríme zmluvu o spracovaní údajov (DPA), keď spracúvame údaje v mene klienta (napr. pri údržbe webovej stránky, konfigurácii nástrojov alebo systémov).</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="7. Prenos údajov mimo EHP">
            <p>
              Google a Vercel môžu spracúvať údaje mimo Európskeho hospodárskeho priestoru. Používajú sa primerané právne záruky (vrátane štandardných zmluvných doložiek schválených Európskou
              komisiou) a pokiaľ je to možné, technické opatrenia (pseudonymizácia, minimalizácia).
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="8. Doba uchovávania údajov">
            <ul className="list-disc space-y-1 pl-6">
              <li>Údaje z kontaktného formulára — najviac 12 mesiacov od ukončenia korešpondencie.</li>
              <li>Údaje klientov — po dobu vyžadovanú zákonom (účtovné doklady).</li>
              <li>Analytické údaje — v súlade s pravidlami Google Analytics (napr. 26 mesiacov).</li>
              <li>Logy — po dobu vyžadovanú z bezpečnostných dôvodov a zodpovednosti (spravidla najviac 12 mesiacov, ak právne predpisy nestanovia inak).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="9. Vaše práva">
            <p>Máte právo na:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>prístup k svojim údajom a získanie ich kópie,</li>
              <li>opravu údajov,</li>
              <li>vymazanie údajov,</li>
              <li>obmedzenie spracovania,</li>
              <li>prenosnosť údajov,</li>
              <li>namietanie voči spracovaniu (vrátane marketingu),</li>
              <li>podanie sťažnosti príslušnému dozornému orgánu (v Poľsku: Predseda Úradu na ochranu osobných údajov, UODO).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="10. Dobrovoľnosť poskytnutia údajov">
            <p>Poskytnutie osobných údajov je dobrovoľné, ale nevyhnutné na účely kontaktu alebo poskytovania služieb.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="11. Bezpečnostné opatrenia">
            <p>Uplatňujeme technické a organizačné opatrenia na ochranu osobných údajov pred neoprávneným prístupom, stratou alebo zničením.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="12. Zmeny zásad">
            <p>Tieto zásady ochrany osobných údajov môžu byť aktualizované v dôsledku zmien v legislatíve alebo technológiách. Najnovšia verzia je vždy dostupná na tejto stránke.</p>
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
