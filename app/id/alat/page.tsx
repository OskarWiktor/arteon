import HeroBanner from '@/components/sections/HeroBanner';
import Button from '@/components/ui/buttons/Button';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import FaqPanels from '@/components/ui/FaqPanels';
import Wrapper from '@/components/ui/Wrapper';
import Script from 'next/script';
import {
  RiImageEditLine,
  RiCropLine,
  RiAppsLine,
  RiFileTextLine,
  RiArticleLine,
  RiMailLine,
  RiContrast2Line,
  RiPaletteLine,
  RiPantoneLine,
  RiQrCodeLine,
  RiShieldCheckLine,
  RiInfinityFill,
  RiGlobalLine,
  RiLockLine,
} from 'react-icons/ri';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolsIndexAlternates } from '@/lib/i18n/pages/tool-meta';

export const metadata = {
  title: 'Alat online gratis | Gambar, SEO, warna, favicon',
  description: '10 alat gratis: konverter WebP, generator favicon, penghitung teks, ekstraktor warna, dan kode QR. Untuk situs web, media sosial, dan cetak.',
  alternates: getToolsIndexAlternates('id'),
  openGraph: {
    title: 'Alat online gratis | Gambar, SEO, warna, favicon',
    description: '10 alat gratis: konverter WebP, generator favicon, penghitung teks, ekstraktor warna, dan kode QR. Untuk situs web, media sosial, dan cetak.',
    url: toAbsoluteUrl('/id/alat'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Alat online gratis',
  description: '10 alat gratis: konverter WebP, generator favicon, penghitung teks, ekstraktor warna, dan kode QR. Untuk situs web, media sosial, dan cetak.',
  url: toAbsoluteUrl('/id/alat'),
  inLanguage: 'id',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Optimasi gambar' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Warna dan branding' },
    { '@type': 'Thing', name: 'Generator online' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Konverter JPG dan PNG ke WebP online',
        description: 'Konverter gratis JPG dan PNG ke WebP online. Kurangi ukuran file hingga 35% tanpa kehilangan kualitas. Tanpa registrasi — file tetap di browser Anda.',
        url: toAbsoluteUrl('/id/alat/konverter-jpg-png-ke-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Editor gambar online',
        description: 'Potong dan ubah ukuran gambar untuk media sosial dan situs web. Format siap pakai, ukuran piksel kustom, dan dukungan avatar bulat.',
        url: toAbsoluteUrl('/id/alat/editor-gambar'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Generator favicon online',
        description: 'Generator favicon gratis online. Buat favicon.ico dan ikon PNG (16×16 hingga 512×512) dari satu gambar — sesuai persyaratan browser dan Lighthouse.',
        url: toAbsoluteUrl('/id/alat/generator-favicon-gratis'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Pemeriksa meta judul dan deskripsi',
        description: 'Pemeriksa panjang meta judul dan deskripsi dengan pratinjau Google. Menampilkan jumlah karakter dan lebar piksel agar judul dan deskripsi tidak terpotong.',
        url: toAbsoluteUrl('/id/alat/pemeriksa-meta-judul-dan-deskripsi'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Generator tanda tangan email HTML',
        description: 'Generator tanda tangan email HTML gratis. Masukkan detail kontak, link CTA, dan profil media sosial, lalu salin kode HTML siap pakai ke Gmail atau Outlook.',
        url: toAbsoluteUrl('/id/alat/generator-tanda-tangan-email-gratis'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Pemeriksa kontras warna',
        description: 'Periksa kontras dan keterbacaan warna teks dan latar belakang sesuai WCAG. Menghitung rasio kontras dan membantu dengan penyesuaian warna otomatis.',
        url: toAbsoluteUrl('/id/alat/pemeriksa-kontras-warna'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Ekstraktor warna dari gambar online',
        description: 'Ekstraktor warna gratis online. Unggah foto atau logo dan dapatkan palet hingga 12 warna dominan (HEX dan RGB).',
        url: toAbsoluteUrl('/id/alat/ekstraktor-warna-dari-gambar'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Generator palet warna online',
        description: 'Buat palet warna dari satu warna dasar. Monokromatik, triadik, analog, komplementer, dan lainnya — plus varian pastel, gelap, dan minimalis.',
        url: toAbsoluteUrl('/id/alat/generator-palet-warna'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Penghitung kata dan karakter online',
        description: 'Penghitung kata dan karakter gratis dengan evaluasi panjang teks. Periksa apakah panjang teks sesuai untuk halaman utama, halaman layanan, artikel blog, atau deskripsi produk.',
        url: toAbsoluteUrl('/id/alat/penghitung-kata-dan-karakter'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Generator kode QR online',
        description: 'Generator kode QR gratis online. Buat kode QR untuk situs web, vCard, menu restoran, atau brosur. Ekspor ke PNG dan SVG, tanpa login, tanpa batasan.',
        url: toAbsoluteUrl('/id/alat/generator-kode-qr-gratis'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Berapa biaya alat ini?', answer: 'Gratis. Semua alat gratis, tanpa langganan dan tanpa biaya tersembunyi.' },
  { question: 'Apakah file saya dikirim ke server?', answer: 'Tidak. Semua alat berjalan sepenuhnya di browser Anda. File tidak pernah meninggalkan komputer Anda dan tidak disimpan di mana pun.' },
  { question: 'Apakah saya perlu akun?', answer: 'Tidak. Anda bisa langsung menggunakannya tanpa login atau membuat akun.' },
  { question: 'Apakah ada batasan penggunaan?', answer: 'Tidak. Gunakan tanpa batasan — tidak ada limit harian, tidak ada limit file, tidak ada limit konversi.' },
  {
    question: 'Untuk apa alat-alat ini?',
    answer:
      'Membantu menyiapkan materi untuk situs web, media sosial, dan cetak: mengoptimalkan gambar, membuat favicon, memeriksa panjang teks, membuat kode QR, memilih warna, dan memeriksa keterbacaannya.',
  },
  { question: 'Apakah alat ini berfungsi di ponsel?', answer: 'Ya, tetapi beberapa alat (konverter WebP, generator favicon) lebih baik digunakan di desktop karena memproses file yang lebih besar.' },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Alat online gratis"
        description="Konverter gambar, generator favicon, penghitung teks, alat warna, dan kode QR. Tanpa registrasi, tanpa batasan — semuanya berjalan di browser Anda."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Gambar & favicon"
          description="Alat untuk menyiapkan foto, grafik, dan ikon untuk situs web dan media sosial."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Konverter JPG/PNG ke WebP',
              topImageAlt: 'Konverter JPG/PNG ke WebP Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Konversi gambar JPG atau PNG ke format <strong>WebP</strong> dan kurangi ukuran file. Waktu muat lebih cepat untuk situs web Anda.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/id/alat/konverter-jpg-png-ke-webp">
                      Buka alat
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Editor gambar',
              topImageAlt: 'Editor gambar Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Potong gambar dengan sempurna untuk media sosial atau situs web Anda. Pilih format siap pakai atau masukkan ukuran piksel kustom — unduh dalam PNG, JPG, atau WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/id/alat/editor-gambar">
                      Buka alat
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Generator favicon & ikon',
              topImageAlt: 'Generator favicon Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Buat <strong>favicon.ico</strong> dan ikon PNG 180x180, 192x192, dan 512x512 dari satu gambar — sesuai persyaratan browser dan Lighthouse.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/id/alat/generator-favicon-gratis">
                      Buka alat
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Teks & SEO"
          description="Alat untuk memeriksa panjang teks, tag meta, dan pratinjau halaman Anda di hasil pencarian."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Pemeriksa meta judul & deskripsi',
              topImageAlt: 'Pemeriksa meta judul dan deskripsi Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Periksa jumlah karakter, jumlah kata, dan lebar piksel — dengan pratinjau Google. Hindari judul dan deskripsi yang terpotong di hasil pencarian.</p>
                  <div className="mt-4">
                    <Button arrow link="/id/alat/pemeriksa-meta-judul-dan-deskripsi">
                      Buka alat
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Penghitung kata & karakter',
              topImageAlt: 'Penghitung kata dan karakter Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Periksa panjang teks dan evaluasi apakah sesuai untuk halaman utama, halaman layanan, artikel blog, atau deskripsi produk. Alat ini menghitung kata, karakter, paragraf, dan waktu
                    baca.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/id/alat/penghitung-kata-dan-karakter">
                      Buka alat
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Email & komunikasi"
          description="Alat untuk komunikasi email profesional dan citra merek yang konsisten."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Generator tanda tangan email HTML gratis',
              topImageAlt: 'Generator tanda tangan email HTML gratis Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Buat tanda tangan email profesional dalam hitungan menit. Masukkan detail Anda, pilih warna, dan salin kode HTML siap pakai ke Gmail, Outlook, atau klien email lainnya.</p>
                  <div className="mt-4">
                    <Button arrow link="/id/alat/generator-tanda-tangan-email-gratis">
                      Buka alat
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Kode QR"
          description="Generator kode QR untuk situs web, kartu nama, menu, dan materi cetak."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Generator kode QR gratis',
              topImageAlt: 'Generator kode QR gratis Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Buat kode QR untuk situs web, vCard, menu restoran, atau brosur. Ekspor ke PNG dan SVG — tanpa login, tanpa batasan.</p>
                  <div className="mt-4">
                    <Button arrow link="/id/alat/generator-kode-qr-gratis">
                      Buka alat
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Warna & aksesibilitas"
          description="Alat untuk bekerja dengan warna, kontras, dan aksesibilitas WCAG."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Pemeriksa kontras warna',
              topImageAlt: 'Pemeriksa kontras warna Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Periksa apakah warna teks dan latar belakang Anda mudah dibaca. Masukkan kode warna, lihat rasio kontras sesuai <strong>WCAG</strong>, dan gunakan fungsi <strong>Match</strong>{' '}
                    untuk koreksi otomatis.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/id/alat/pemeriksa-kontras-warna">
                      Buka alat
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Ekstraktor warna dari gambar',
              topImageAlt: 'Ekstraktor warna dari gambar Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Unggah foto atau logo — alat ini akan mengekstrak warna dominan. Salin kode HEX dengan satu klik dan gunakan di mana saja.</p>
                  <div className="mt-4">
                    <Button arrow link="/id/alat/ekstraktor-warna-dari-gambar">
                      Buka alat
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Generator palet warna',
              topImageAlt: 'Generator palet warna Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Pilih satu warna dasar dan buat 9 palet warna: monokromatik, komplementer, triadik, pastel, gelap, dan lainnya. Salin kode HEX dengan satu klik.</p>
                  <div className="mt-4">
                    <Button arrow link="/id/alat/generator-palet-warna">
                      Buka alat
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Apa itu alat Arteon?">
          <p className="mb-4">
            10 alat online gratis untuk menyiapkan materi untuk situs web, media sosial, dan cetak — konverter WebP, generator favicon, penghitung teks, ekstraktor warna, generator palet, dan kode QR.
          </p>
          <p>Semua alat berjalan di browser Anda — file tidak pernah dikirim ke server. Gunakan tanpa registrasi dan tanpa batasan.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Mengapa menggunakan alat Arteon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Privasi penuh',
              description: 'Semua alat memproses file secara lokal di browser Anda. Tidak ada yang dikirim ke server — data hilang saat Anda menutup tab.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Tanpa batasan penggunaan',
              description: 'Gunakan tanpa batasan — tidak ada limit harian, tidak ada limit file, tidak ada limit konversi. Sebanyak yang Anda butuhkan.',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'Tanpa registrasi',
              description: 'Tidak perlu akun. Buka alat, gunakan, selesai.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Tersedia dalam Bahasa Indonesia',
              description: 'Semua alat tersedia dalam Bahasa Indonesia — antarmuka, petunjuk, dan pesan.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Pertanyaan yang sering diajukan tentang alat kami" />

        <Gap size="sm" />
      </Wrapper>

      <Script id="ld-json-tools-id" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
