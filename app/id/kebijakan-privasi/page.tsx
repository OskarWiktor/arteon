import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'id' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/id/kebijakan-privasi'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

export default function KebijakanPrivasiPage() {
  return (
    <>
      <Gap size="xs" />
      <Wrapper as="article" id="article-root" itemScope itemType="https://schema.org/Article" className="flex flex-col-reverse gap-8 select-none lg:grid lg:grid-cols-[1fr_300px]">
        <div>
          <h1>Kebijakan Privasi</h1>
          <p className="mt-2 text-sm opacity-70">
            Versi: <strong>13.02.2026</strong>
          </p>

          <Gap size="xs" />

          <SectionInfo title="1. Pengendali Data">
            <p>Pengendali data pribadi adalah Arteon, berkedudukan di gmina Czernichów, Zagacie, ul. Jaśminowa 36, 32-070, Polandia.</p>
            <p>
              NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Kontak: <strong>kontakt@arteonagency.pl</strong>, tel.: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="2. Ruang Lingkup Data yang Dikumpulkan">
            <ul className="list-disc space-y-1 pl-6">
              <li>data yang dikirimkan melalui formulir kontak (nama depan, nama belakang, email, isi pesan),</li>
              <li>data teknis yang dikumpulkan secara otomatis (alamat IP, informasi perangkat, cookie),</li>
              <li>data analitik dari Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, dan Vercel Speed Insights,</li>
              <li>data analitik dari Metricool (statistik kunjungan, sumber lalu lintas),</li>
              <li>data yang dikumpulkan oleh Google AdSense untuk tujuan menampilkan iklan (pengidentifikasi iklan, cookie iklan, data interaksi iklan),</li>
              <li>log server dan peristiwa keamanan (misalnya cap waktu, alamat IP, header permintaan).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="3. Tujuan dan Dasar Hukum Pemrosesan">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Kontak pelanggan</strong> – menanggapi pertanyaan dari formulir kontak (Pasal 6(1)(b) dan (f) GDPR).
              </li>
              <li>
                <strong>Pemasaran dan analitik</strong> – statistik situs, optimalisasi konten (Pasal 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Penyediaan layanan</strong> – penyiapan penawaran, kontrak, faktur (Pasal 6(1)(b) GDPR).
              </li>
              <li>
                <strong>Kewajiban hukum</strong> – misalnya penyimpanan dokumentasi akuntansi (Pasal 6(1)(c) GDPR).
              </li>
              <li>
                <strong>Keamanan dan klaim</strong> – pemeliharaan log, pencegahan penyalahgunaan, penetapan/penegakan/pembelaan klaim (Pasal 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Penayangan iklan</strong> – menampilkan iklan berbasis minat melalui Google AdSense (Pasal 6(1)(a) GDPR – persetujuan pengguna yang diberikan melalui banner cookie).
              </li>
            </ol>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="4. Cookie">
            <p>Situs web menggunakan cookie untuk tujuan berikut:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>memastikan fungsi situs web yang tepat,</li>
              <li>analisis lalu lintas (Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, Metricool),</li>
              <li>tujuan pemasaran,</li>
              <li>menampilkan iklan berbasis minat (Google AdSense / DoubleClick).</li>
            </ul>
            <p>
              Google AdSense dapat menggunakan cookie DoubleClick untuk menayangkan iklan berdasarkan kunjungan sebelumnya pengguna ke situs web kami atau situs web lain. Penyedia pihak ketiga
              (termasuk Google) menggunakan cookie ini untuk menayangkan iklan berdasarkan riwayat penjelajahan.
            </p>
            <p>
              Anda dapat menonaktifkan iklan yang dipersonalisasi di{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                Pengaturan Google Ads
              </a>{' '}
              atau di{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>Situs web menggunakan Google Consent Mode v2. Ini berarti skrip analitik dan iklan Google tidak mengumpulkan data sampai pengguna memberikan persetujuan melalui banner cookie.</p>
            <p>Anda dapat mengelola cookie di pengaturan browser. Membatasi cookie dapat memengaruhi beberapa fitur situs web.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="5. Penerima Data">
            <p>Data dapat dibagikan dengan entitas yang mendukung kami dalam menyediakan layanan, seperti:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>penyedia hosting/aplikasi (misalnya Vercel),</li>
              <li>penyedia alat analitik (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>penyedia layanan iklan (Google Ireland Ltd. – Google AdSense),</li>
              <li>kantor akuntan, pemroses pembayaran, atau penasihat hukum – jika diperlukan.</li>
            </ul>
            <p>Semua penerima memproses data sesuai dengan GDPR berdasarkan perjanjian yang sesuai.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="6. Perjanjian Pemrosesan Data (DPA)">
            <p>
              Atas permintaan, kami membuat perjanjian pemrosesan data (DPA) ketika kami memproses data atas nama klien (misalnya dalam rangka pemeliharaan situs web, konfigurasi alat atau sistem).
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="7. Transfer Data di Luar EEA">
            <p>
              Google dan Vercel dapat memproses data di luar Wilayah Ekonomi Eropa. Perlindungan hukum yang sesuai diterapkan (termasuk Klausul Kontraktual Standar yang disetujui oleh Komisi Eropa)
              dan, jika memungkinkan, langkah-langkah teknis (pseudonimisasi, minimalisasi).
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="8. Periode Penyimpanan Data">
            <ul className="list-disc space-y-1 pl-6">
              <li>Data formulir kontak – hingga 12 bulan setelah akhir korespondensi.</li>
              <li>Data klien – untuk periode yang diwajibkan oleh hukum (dokumentasi akuntansi).</li>
              <li>Data analitik – sesuai dengan kebijakan Google Analytics (misalnya 26 bulan).</li>
              <li>Log – untuk periode yang diperlukan untuk keamanan dan akuntabilitas (umumnya hingga 12 bulan, kecuali peraturan menentukan lain).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="9. Hak-Hak Anda">
            <p>Anda berhak untuk:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>mengakses data Anda dan mendapatkan salinannya,</li>
              <li>perbaikan data,</li>
              <li>penghapusan data,</li>
              <li>pembatasan pemrosesan,</li>
              <li>portabilitas data,</li>
              <li>keberatan terhadap pemrosesan (termasuk pemasaran),</li>
              <li>mengajukan keluhan ke otoritas pengawas yang berwenang (di Polandia: Presiden Kantor Perlindungan Data Pribadi, UODO).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="10. Pemberian Data Secara Sukarela">
            <p>Pemberian data pribadi bersifat sukarela, tetapi diperlukan untuk kontak atau penyediaan layanan.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="11. Langkah-Langkah Keamanan">
            <p>Kami menerapkan langkah-langkah teknis dan organisasi untuk melindungi data pribadi dari akses tidak sah, kehilangan, atau perusakan.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="12. Perubahan Kebijakan">
            <p>Kebijakan privasi ini dapat diperbarui untuk mencerminkan perubahan dalam undang-undang atau teknologi. Versi terkini selalu tersedia di halaman ini.</p>
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
