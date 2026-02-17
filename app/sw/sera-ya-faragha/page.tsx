import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'sw' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/sw/sera-ya-faragha'),
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
          <h1>Sera ya Faragha</h1>
          <p className="mt-2 text-sm opacity-70">
            Toleo: <strong>13.02.2026</strong>
          </p>
          <Gap size="xs" />
          <SectionInfo title="1. Mdhibiti wa Data">
            <p>Mdhibiti wa data binafsi ni Arteon, yenye makao yake katika gmina Czernichow, Zagacie, ul. Jasminowa 36, 32-070, Poland.</p>
            <p>
              NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Mawasiliano: <strong>kontakt@arteonagency.pl</strong>, simu: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="2. Wigo wa Data Inayokusanywa">
            <ul className="list-disc space-y-1 pl-6">
              <li>data inayotumwa kupitia fomu ya mawasiliano (jina la kwanza, jina la mwisho, barua pepe, maudhui ya ujumbe),</li>
              <li>data ya kiufundi inayokusanywa kiotomatiki (anwani ya IP, taarifa ya kifaa, vidakuzi),</li>
              <li>data ya uchambuzi kutoka Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, na Vercel Speed Insights,</li>
              <li>data ya uchambuzi kutoka Metricool (takwimu za ziara, vyanzo vya trafiki),</li>
              <li>data inayokusanywa na Google AdSense kwa madhumuni ya kuonyesha matangazo (vitambulisho vya matangazo, vidakuzi vya matangazo, data ya mwingiliano wa matangazo),</li>
              <li>kumbukumbu za seva na matukio ya usalama (mf. muhuri wa wakati, anwani za IP, vichwa vya ombi).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="3. Madhumuni na Msingi wa Kisheria wa Uchakataji">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Mawasiliano na wateja</strong> -- kujibu maswali kutoka fomu ya mawasiliano (Kifungu 6(1)(b) na (f) GDPR).
              </li>
              <li>
                <strong>Masoko na uchambuzi</strong> -- takwimu za tovuti, uboreshaji wa maudhui (Kifungu 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Utoaji wa huduma</strong> -- maandalizi ya ofa, mikataba, ankara (Kifungu 6(1)(b) GDPR).
              </li>
              <li>
                <strong>Wajibu wa kisheria</strong> -- mf. uhifadhi wa nyaraka za uhasibu (Kifungu 6(1)(c) GDPR).
              </li>
              <li>
                <strong>Usalama na madai</strong> -- utunzaji wa kumbukumbu, kuzuia matumizi mabaya, kuanzisha/kutekeleza/kulinda madai (Kifungu 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Kuonyesha matangazo</strong> -- kuonyesha matangazo yanayotegemea masilahi kupitia Google AdSense (Kifungu 6(1)(a) GDPR -- idhini ya mtumiaji iliyotolewa kupitia bango la
                vidakuzi).
              </li>
            </ol>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="4. Vidakuzi">
            <p>Tovuti inatumia vidakuzi kwa madhumuni yafuatayo:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>kuhakikisha utendaji sahihi wa tovuti,</li>
              <li>uchambuzi wa trafiki (Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, Metricool),</li>
              <li>madhumuni ya masoko,</li>
              <li>kuonyesha matangazo yanayotegemea masilahi (Google AdSense / DoubleClick).</li>
            </ul>
            <p>Google AdSense inaweza kutumia vidakuzi vya DoubleClick kutoa matangazo kulingana na ziara za awali za mtumiaji kwenye tovuti yetu au tovuti nyingine.</p>
            <p>
              Unaweza kuzima matangazo yaliyobinafsishwa katika{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                Mipangilio ya Google Ads
              </a>{' '}
              au katika{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>Tovuti inatumia Google Consent Mode v2. Hii inamaanisha hati za uchambuzi na utangazaji za Google hazikusanyi data hadi mtumiaji atakapotoa idhini kupitia bango la vidakuzi.</p>
            <p>Unaweza kudhibiti vidakuzi katika mipangilio ya kivinjari. Kuzuia vidakuzi kunaweza kuathiri vipengele fulani vya tovuti.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="5. Wapokeaji wa Data">
            <p>Data inaweza kushirikiwa na vyombo vinavyotusaidia kutoa huduma, kama vile:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>mtoa huduma wa upangishaji/programu (mf. Vercel),</li>
              <li>watoa huduma wa zana za uchambuzi (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>mtoa huduma wa utangazaji (Google Ireland Ltd. -- Google AdSense),</li>
              <li>ofisi ya uhasibu, mchakataji wa malipo, au mshauri wa kisheria -- ikiwa ni lazima.</li>
            </ul>
            <p>Wapokeaji wote wanachakata data kulingana na GDPR kwa msingi wa makubaliano yanayofaa.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="6. Makubaliano ya Uchakataji wa Data (DPA)">
            <p>Kwa ombi, tunaunda makubaliano ya uchakataji wa data (DPA) tunapochakata data kwa niaba ya mteja (mf. ndani ya matengenezo ya tovuti, usanidi wa zana au mifumo).</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="7. Uhamisho wa Data Nje ya EEA">
            <p>
              Google na Vercel wanaweza kuchakata data nje ya Eneo la Kiuchumi la Ulaya. Ulinzi unaofaa wa kisheria unatumika (ikiwa ni pamoja na Vifungu vya Kawaida vya Kimkataba vilivyoidhinishwa na
              Tume ya Ulaya) na, inapowezekana, hatua za kiufundi (uficho wa majina, upunguzaji).
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="8. Kipindi cha Uhifadhi wa Data">
            <ul className="list-disc space-y-1 pl-6">
              <li>Data ya fomu ya mawasiliano -- hadi miezi 12 baada ya mwisho wa mawasiliano.</li>
              <li>Data ya mteja -- kwa kipindi kinachohitajika na sheria (nyaraka za uhasibu).</li>
              <li>Data ya uchambuzi -- kulingana na sera ya Google Analytics (mf. miezi 26).</li>
              <li>Kumbukumbu -- kwa kipindi kinachohitajika kwa usalama na uwajibikaji (kwa kawaida hadi miezi 12, isipokuwa kanuni zinaelekeza vinginevyo).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="9. Haki Zako">
            <p>Una haki ya:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>kufikia data yako na kupata nakala yake,</li>
              <li>kusahihisha data,</li>
              <li>kufuta data,</li>
              <li>kuzuia uchakataji,</li>
              <li>uhamishaji wa data,</li>
              <li>kupinga uchakataji (ikiwa ni pamoja na masoko),</li>
              <li>kuwasilisha malalamiko kwa mamlaka husika ya usimamizi (nchini Poland: Rais wa Ofisi ya Ulinzi wa Data Binafsi, UODO).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="10. Utoaji wa Hiari wa Data">
            <p>Utoaji wa data binafsi ni wa hiari, lakini ni muhimu kwa mawasiliano au utoaji wa huduma.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="11. Hatua za Usalama">
            <p>Tunatumia hatua za kiufundi na shirika kulinda data binafsi dhidi ya upatikanaji usioidhinishwa, upotevu, au uharibifu.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="12. Mabadiliko ya Sera">
            <p>Sera hii ya faragha inaweza kusasishwa ili kuonyesha mabadiliko katika sheria au teknolojia. Toleo la hivi karibuni zaidi linapatikana kila wakati kwenye ukurasa huu.</p>
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
