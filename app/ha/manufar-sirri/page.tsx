import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'ha' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/ha/manufar-sirri'),
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
          <h1>Manufar sirri</h1>
          <p className="mt-2 text-sm opacity-70">
            Sigar: <strong>13.02.2026</strong>
          </p>
          <Gap size="xs" />
          <SectionInfo title="1. Mai kula da bayanai">
            <p>Mai kula da bayanan sirri shine Arteon da ke zaune a ƙasar Czernichów, Zagacie, ul. Jasminowa 36, 32-070, Poland.</p>
            <p>
              NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Tuntuɓa: <strong>kontakt@arteonagency.pl</strong>, waya: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="2. Irin bayanan da ake tattarawa">
            <ul className="list-disc space-y-1 pl-6">
              <li>bayanai daga fom ɗin tuntuɓa (suna, sunan iyali, imel, abin da aka rubuta),</li>
              <li>bayanan fasaha da ake tattara ta atomatik (IP, bayanan na’ura, cookies),</li>
              <li>bayanan bincike daga Google Analytics 4, Ahrefs, Vercel Analytics da Vercel Speed Insights,</li>
              <li>bayanan bincike daga Metricool,</li>
              <li>bayanai da Google AdSense ke tattarawa don nuna tallace-tallace,</li>
              <li>bayanan sabar da abubuwan tsaro.</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="3. Dalilai da tushen doka">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Sadarwa da abokan ciniki</strong> — sarrafa tambayoyi (Sashe 6(1)(b) da (f) GDPR).
              </li>
              <li>
                <strong>Tallace-tallace da bincike</strong> — kididdiga, ingantawa (Sashe 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Bayar da ayyuka</strong> — tayin farashi, kwangila, takardar biyan kuɗi (Sashe 6(1)(b) GDPR).
              </li>
              <li>
                <strong>Wajibin doka</strong> — takardun lissafi (Sashe 6(1)(c) GDPR).
              </li>
              <li>
                <strong>Tsaro</strong> — bayanan shiga, hana cin zarafi (Sashe 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Nuna tallace-tallace</strong> — ta hanyar Google AdSense (Sashe 6(1)(a) GDPR — yarda).
              </li>
            </ol>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="4. Cookies">
            <p>Shafin yanar gizo yana amfani da cookies don:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>aiki daidai,</li>
              <li>binciken zirga-zirga (Google Analytics 4, Ahrefs, Vercel Analytics, Metricool),</li>
              <li>dalilai na tallace-tallace,</li>
              <li>nuna tallace-tallace (Google AdSense / DoubleClick).</li>
            </ul>
            <p>
              Kuna iya kashe tallace-tallacen da aka keɓance a{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                saitin Google Ads
              </a>{' '}
              ko a{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>Shafin yana amfani da Google Consent Mode v2.</p>
            <p>Kuna iya sarrafa cookies a saitin mai binciken ku.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="5. Masu karɓar bayanai">
            <ul className="list-disc space-y-1 pl-6">
              <li>mai bayar da masaukin yanar gizo (Vercel),</li>
              <li>masu bayar da bincike (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>mai bayar da tallace-tallace (Google Ireland Ltd. — Google AdSense),</li>
              <li>mai duba lissafi, mai sarrafa biyan kuɗi ko mai ba da shawara kan doka — idan ya cancanta.</li>
            </ul>
            <p>Duk masu karɓa suna sarrafa bayanai bisa GDPR.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="6. Yarjejeniyar sarrafa bayanai (DPA)">
            <p>A kan buƙata, muna yin yarjejeniyar sarrafa bayanai (DPA) lokacin da muke sarrafa bayanai a madadin abokin ciniki.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="7. Canja wuri bayan EEA">
            <p>Google da Vercel na iya sarrafa bayanai a wajen EEA. Ana amfani da matakan doka masu dacewa.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="8. Lokacin ajiye bayanai">
            <ul className="list-disc space-y-1 pl-6">
              <li>Fom ɗin tuntuɓa — har zuwa watanni 12.</li>
              <li>Bayanan abokan ciniki — bisa doka.</li>
              <li>Bincike — bisa Google Analytics (misali watanni 26).</li>
              <li>Bayanan shiga — har zuwa watanni 12.</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="9. Haƙƙoƙin ku">
            <p>Kuna da haƙƙin:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>samun damar bayanan ku,</li>
              <li>gyarawa,</li>
              <li>gogewa,</li>
              <li>taƙaita sarrafawa,</li>
              <li>canjawa,</li>
              <li>ƙin yarda (gami da tallace-tallace),</li>
              <li>shigar da ƙara ga hukumar da ta dace (a Poland: UODO).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="10. Son rai">
            <p>Bayar da bayanan sirri na son rai ne amma ya zama dole don sadarwa ko bayar da ayyuka.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="11. Matakan tsaro">
            <p>Muna aiwatar da matakan fasaha da na tsari don kare bayanan sirri.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="12. Canje-canjen manufa">
            <p>Za a iya sabunta wannan manufar sirri. Sigar da ta fi sabuwa tana samuwa a wannan shafin koyaushe.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <Gap size="xs" />
        </div>
        <TableOfContents rootSelector="#article-root" size="large" />
      </Wrapper>
      <ButtonToTop />
      <Gap />
    </>
  );
}
