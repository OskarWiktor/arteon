import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'ms' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/ms/dasar-privasi'),
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
          <h1>Dasar Privasi</h1>
          <p className="mt-2 text-sm opacity-70">
            Versi: <strong>13.02.2026</strong>
          </p>
          <Gap size="xs" />
          <SectionInfo title="1. Pengawal Data">
            <p>Pengawal data peribadi ialah Arteon, berkedudukan di gmina Czernichow, Zagacie, ul. Jasminowa 36, 32-070, Poland.</p>
            <p>
              NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Hubungi: <strong>kontakt@arteonagency.pl</strong>, tel.: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="2. Skop Data yang Dikumpul">
            <ul className="list-disc space-y-1 pl-6">
              <li>data yang dihantar melalui borang hubungan (nama pertama, nama akhir, e-mel, kandungan mesej),</li>
              <li>data teknikal yang dikumpul secara automatik (alamat IP, maklumat peranti, kuki),</li>
              <li>data analitik daripada Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, dan Vercel Speed Insights,</li>
              <li>data analitik daripada Metricool (statistik lawatan, sumber trafik),</li>
              <li>data yang dikumpul oleh Google AdSense untuk tujuan memaparkan iklan (pengecam iklan, kuki iklan, data interaksi iklan),</li>
              <li>log pelayan dan peristiwa keselamatan (cth. cap masa, alamat IP, pengepala permintaan).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="3. Tujuan dan Asas Undang-undang Pemprosesan">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Hubungan pelanggan</strong> -- menjawab pertanyaan daripada borang hubungan (Perkara 6(1)(b) dan (f) GDPR).
              </li>
              <li>
                <strong>Pemasaran dan analitik</strong> -- statistik laman, pengoptimuman kandungan (Perkara 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Penyediaan perkhidmatan</strong> -- penyediaan tawaran, kontrak, invois (Perkara 6(1)(b) GDPR).
              </li>
              <li>
                <strong>Kewajipan undang-undang</strong> -- cth. penyimpanan dokumentasi perakaunan (Perkara 6(1)(c) GDPR).
              </li>
              <li>
                <strong>Keselamatan dan tuntutan</strong> -- penyelenggaraan log, pencegahan penyalahgunaan, penubuhan/penguatkuasaan/pembelaan tuntutan (Perkara 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Paparan iklan</strong> -- memaparkan iklan berasaskan minat melalui Google AdSense (Perkara 6(1)(a) GDPR -- persetujuan pengguna yang diberikan melalui sepanduk kuki).
              </li>
            </ol>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="4. Kuki">
            <p>Laman web menggunakan kuki untuk tujuan berikut:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>memastikan fungsi laman web yang betul,</li>
              <li>analisis trafik (Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, Metricool),</li>
              <li>tujuan pemasaran,</li>
              <li>memaparkan iklan berasaskan minat (Google AdSense / DoubleClick).</li>
            </ul>
            <p>Google AdSense boleh menggunakan kuki DoubleClick untuk menyampaikan iklan berdasarkan lawatan terdahulu pengguna ke laman web kami atau laman web lain.</p>
            <p>
              Anda boleh melumpuhkan iklan yang diperibadikan di{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                Tetapan Google Ads
              </a>{' '}
              atau di{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>Laman web menggunakan Google Consent Mode v2. Ini bermakna skrip analitik dan pengiklanan Google tidak mengumpul data sehingga pengguna memberikan persetujuan melalui sepanduk kuki.</p>
            <p>Anda boleh menguruskan kuki dalam tetapan pelayar. Mengehadkan kuki boleh menjejaskan beberapa ciri laman web.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="5. Penerima Data">
            <p>Data boleh dikongsi dengan entiti yang menyokong kami dalam menyediakan perkhidmatan, seperti:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>pembekal pengehosan/aplikasi (cth. Vercel),</li>
              <li>pembekal alat analitik (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>pembekal perkhidmatan pengiklanan (Google Ireland Ltd. -- Google AdSense),</li>
              <li>firma perakaunan, pemproses pembayaran, atau penasihat undang-undang -- jika perlu.</li>
            </ul>
            <p>Semua penerima memproses data mengikut GDPR berdasarkan perjanjian yang sesuai.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="6. Perjanjian Pemprosesan Data (DPA)">
            <p>
              Atas permintaan, kami membuat perjanjian pemprosesan data (DPA) apabila kami memproses data bagi pihak pelanggan (cth. dalam penyelenggaraan laman web, konfigurasi alat atau sistem).
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="7. Pemindahan Data di Luar EEA">
            <p>
              Google dan Vercel boleh memproses data di luar Kawasan Ekonomi Eropah. Perlindungan undang-undang yang sewajarnya digunakan (termasuk Klausa Kontrak Standard yang diluluskan oleh
              Suruhanjaya Eropah) dan, jika boleh, langkah teknikal (penyamaran nama, pengurangan).
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="8. Tempoh Penyimpanan Data">
            <ul className="list-disc space-y-1 pl-6">
              <li>Data borang hubungan -- sehingga 12 bulan selepas tamat surat-menyurat.</li>
              <li>Data pelanggan -- untuk tempoh yang dikehendaki oleh undang-undang (dokumentasi perakaunan).</li>
              <li>Data analitik -- mengikut dasar Google Analytics (cth. 26 bulan).</li>
              <li>Log -- untuk tempoh yang diperlukan untuk keselamatan dan akauntabiliti (biasanya sehingga 12 bulan, melainkan peraturan menentukan sebaliknya).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="9. Hak Anda">
            <p>Anda berhak untuk:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>mengakses data anda dan mendapatkan salinannya,</li>
              <li>pembetulan data,</li>
              <li>pemadaman data,</li>
              <li>sekatan pemprosesan,</li>
              <li>pemindahan data,</li>
              <li>bantahan terhadap pemprosesan (termasuk pemasaran),</li>
              <li>memfailkan aduan kepada pihak berkuasa penyeliaan yang berkaitan (di Poland: Presiden Pejabat Perlindungan Data Peribadi, UODO).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="10. Pemberian Data Secara Sukarela">
            <p>Pemberian data peribadi adalah secara sukarela, tetapi diperlukan untuk hubungan atau penyediaan perkhidmatan.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="11. Langkah Keselamatan">
            <p>Kami melaksanakan langkah teknikal dan organisasi untuk melindungi data peribadi daripada akses tanpa kebenaran, kehilangan, atau kemusnahan.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="12. Perubahan Dasar">
            <p>Dasar privasi ini boleh dikemas kini untuk mencerminkan perubahan dalam undang-undang atau teknologi. Versi terkini sentiasa tersedia di halaman ini.</p>
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
