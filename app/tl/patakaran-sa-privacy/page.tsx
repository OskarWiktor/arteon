import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'tl' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/tl/patakaran-sa-privacy'),
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
          <h1>Patakaran sa Privacy</h1>
          <p className="mt-2 text-sm opacity-70">
            Bersyon: <strong>13.02.2026</strong>
          </p>
          <Gap size="xs" />
          <SectionInfo title="1. Tagapangasiwa ng Data">
            <p>Ang tagapangasiwa ng personal na data ay ang Arteon, na may tanggapan sa gmina Czernichow, Zagacie, ul. Jasminowa 36, 32-070, Poland.</p>
            <p>
              NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Makipag-ugnayan: <strong>kontakt@arteonagency.pl</strong>, tel.: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="2. Saklaw ng Kinokolektang Data">
            <ul className="list-disc space-y-1 pl-6">
              <li>data na isinumite sa pamamagitan ng contact form (pangalan, apelyido, email, nilalaman ng mensahe),</li>
              <li>teknikal na data na awtomatikong kinokolekta (IP address, impormasyon ng device, cookies),</li>
              <li>analytics data mula sa Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, at Vercel Speed Insights,</li>
              <li>analytics data mula sa Metricool (estadistika ng pagbisita, pinagmulan ng trapiko),</li>
              <li>data na kinokolekta ng Google AdSense para sa pagpapakita ng mga ad (ad identifiers, ad cookies, data ng interaksyon sa ad),</li>
              <li>server logs at security events (hal. timestamps, IP addresses, request headers).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="3. Layunin at Legal na Batayan ng Pagproseso">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Pakikipag-ugnayan sa customer</strong> -- pagsagot sa mga tanong mula sa contact form (Art. 6(1)(b) at (f) GDPR).
              </li>
              <li>
                <strong>Marketing at analytics</strong> -- estadistika ng site, pag-optimize ng nilalaman (Art. 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Pagbibigay ng serbisyo</strong> -- paghahanda ng alok, kontrata, invoice (Art. 6(1)(b) GDPR).
              </li>
              <li>
                <strong>Legal na obligasyon</strong> -- hal. pag-iimbak ng accounting documentation (Art. 6(1)(c) GDPR).
              </li>
              <li>
                <strong>Seguridad at mga claim</strong> -- pagpapanatili ng logs, pag-iwas sa pang-aabuso, pagtatag/pagpapatupad/pagtatanggol ng mga claim (Art. 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Pagpapakita ng mga ad</strong> -- pagpapakita ng interest-based na mga ad sa pamamagitan ng Google AdSense (Art. 6(1)(a) GDPR -- pahintulot ng user na ibinigay sa pamamagitan
                ng cookie banner).
              </li>
            </ol>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="4. Cookies">
            <p>Ang website ay gumagamit ng cookies para sa mga sumusunod na layunin:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>pagtiyak ng maayos na paggana ng website,</li>
              <li>pagsusuri ng trapiko (Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, Metricool),</li>
              <li>layuning pang-marketing,</li>
              <li>pagpapakita ng interest-based na mga ad (Google AdSense / DoubleClick).</li>
            </ul>
            <p>
              Ang Google AdSense ay maaaring gumamit ng DoubleClick cookies para maghatid ng mga ad batay sa mga naunang pagbisita ng user sa aming website o iba pang website. Ang mga third-party
              provider (kasama ang Google) ay gumagamit ng mga cookies na ito para maghatid ng mga ad batay sa kasaysayan ng pag-browse.
            </p>
            <p>
              Maaari mong i-disable ang personalized na mga ad sa{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                Google Ads Settings
              </a>{' '}
              o sa{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>
              Ang website ay gumagamit ng Google Consent Mode v2. Ibig sabihin nito na ang Google analytics at advertising scripts ay hindi nagkokolekta ng data hanggang sa magbigay ng pahintulot ang
              user sa pamamagitan ng cookie banner.
            </p>
            <p>Maaari mong pamahalaan ang cookies sa settings ng browser. Ang paglilimita ng cookies ay maaaring makaapekto sa ilang mga feature ng website.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="5. Mga Tatanggap ng Data">
            <p>Ang data ay maaaring ibahagi sa mga entity na sumusuporta sa amin sa pagbibigay ng serbisyo, tulad ng:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>hosting/application provider (hal. Vercel),</li>
              <li>analytics tool provider (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>advertising service provider (Google Ireland Ltd. -- Google AdSense),</li>
              <li>accounting firm, payment processor, o legal advisor -- kung kinakailangan.</li>
            </ul>
            <p>Lahat ng tatanggap ay nagpoproseso ng data alinsunod sa GDPR batay sa naaangkop na mga kasunduan.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="6. Data Processing Agreement (DPA)">
            <p>
              Sa kahilingan, gumagawa kami ng data processing agreement (DPA) kapag nagpoproseso kami ng data sa ngalan ng kliyente (hal. sa loob ng website maintenance, configuration ng tools o
              systems).
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="7. Paglilipat ng Data sa Labas ng EEA">
            <p>
              Ang Google at Vercel ay maaaring magproseso ng data sa labas ng European Economic Area. Naaangkop na legal na proteksyon ang inilalapat (kasama ang Standard Contractual Clauses na
              inaprubahan ng European Commission) at, kung posible, mga teknikal na hakbang (pseudonymization, minimization).
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="8. Panahon ng Pag-iimbak ng Data">
            <ul className="list-disc space-y-1 pl-6">
              <li>Data ng contact form -- hanggang 12 buwan pagkatapos ng huling korespondensiiya.</li>
              <li>Data ng kliyente -- para sa panahong kinakailangan ng batas (accounting documentation).</li>
              <li>Analytics data -- alinsunod sa patakaran ng Google Analytics (hal. 26 na buwan).</li>
              <li>Logs -- para sa panahong kinakailangan para sa seguridad at accountability (karaniwang hanggang 12 buwan, maliban kung iba ang itinatakda ng regulasyon).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="9. Ang Iyong mga Karapatan">
            <p>May karapatan kang:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>i-access ang iyong data at makakuha ng kopya nito,</li>
              <li>pagwawasto ng data,</li>
              <li>pagtanggal ng data,</li>
              <li>paglilimita ng pagproseso,</li>
              <li>portability ng data,</li>
              <li>pagtutol sa pagproseso (kasama ang marketing),</li>
              <li>magsumite ng reklamo sa may kasamang supervisory authority (sa Poland: Presidente ng Office of Personal Data Protection, UODO).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="10. Boluntaryong Pagbibigay ng Data">
            <p>Ang pagbibigay ng personal na data ay boluntaryo, ngunit kinakailangan para sa pakikipag-ugnayan o pagbibigay ng serbisyo.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="11. Mga Hakbang sa Seguridad">
            <p>Nagpapatupad kami ng mga teknikal at organisasyonal na hakbang upang protektahan ang personal na data mula sa hindi awtorisadong pag-access, pagkawala, o pagkasira.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="12. Mga Pagbabago sa Patakaran">
            <p>Ang patakaran sa privacy na ito ay maaaring i-update upang ipakita ang mga pagbabago sa batas o teknolohiya. Ang pinakabagong bersyon ay palaging available sa pahinang ito.</p>
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
