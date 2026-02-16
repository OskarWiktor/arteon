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
  title: 'Alatan percuma | Imej, SEO, warna, favicon',
  description: '10 alatan percuma: penukar WebP, penjana favicon, pengira teks, pengekstrak warna, dan kod QR. Untuk laman web, media sosial, dan cetakan. Tanpa pendaftaran.',
  alternates: getToolsIndexAlternates('ms'),
  openGraph: {
    title: 'Alatan percuma | Imej, SEO, warna, favicon',
    description: '10 alatan percuma: penukar WebP, penjana favicon, pengira teks, pengekstrak warna, dan kod QR. Untuk laman web, media sosial, dan cetakan. Tanpa pendaftaran.',
    url: toAbsoluteUrl('/ms/alatan'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Alatan percuma',
  description: '10 alatan percuma: penukar WebP, penjana favicon, pengira teks, pengekstrak warna, dan kod QR. Untuk laman web, media sosial, dan cetakan. Tanpa pendaftaran.',
  url: toAbsoluteUrl('/ms/alatan'),
  inLanguage: 'ms',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Pengoptimuman imej' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Warna dan penjenamaan' },
    { '@type': 'Thing', name: 'Penjana' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Penukar JPG/PNG ke WebP',
        description: 'Penukar percuma JPG dan PNG ke WebP. Kurangkan saiz fail sehingga 35% tanpa kehilangan kualiti. Tanpa pendaftaran — fail kekal dalam pelayar anda.',
        url: toAbsoluteUrl('/ms/alatan/penukar-jpg-png-ke-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Editor imej',
        description: 'Potong dan ubah saiz imej untuk media sosial dan laman web. Format sedia ada, saiz piksel tersuai, dan sokongan avatar bulat.',
        url: toAbsoluteUrl('/ms/alatan/editor-imej'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Penjana favicon',
        description: 'Penjana favicon percuma. Cipta favicon.ico dan ikon PNG (16x16 hingga 512x512) daripada satu imej — mematuhi keperluan pelayar dan Lighthouse.',
        url: toAbsoluteUrl('/ms/alatan/penjana-favicon-percuma'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Penyemak meta tajuk dan penerangan',
        description: 'Penyemak panjang meta tajuk dan penerangan dengan pratonton Google. Menunjukkan bilangan aksara dan lebar piksel supaya tajuk dan penerangan tidak terpotong.',
        url: toAbsoluteUrl('/ms/alatan/penyemak-meta-tajuk-dan-penerangan'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Penjana tandatangan e-mel percuma',
        description: 'Penjana percuma tandatangan e-mel HTML. Masukkan butiran hubungan, pautan CTA, dan profil media sosial, kemudian salin kod HTML sedia ada ke Gmail atau Outlook.',
        url: toAbsoluteUrl('/ms/alatan/penjana-tandatangan-emel-percuma'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Penyemak kontras warna',
        description: 'Semak kontras dan kebolehbacaan warna teks dan latar belakang mengikut WCAG. Mengira nisbah kontras dan membantu dengan pelarasan warna automatik.',
        url: toAbsoluteUrl('/ms/alatan/penyemak-kontras-warna'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Pengekstrak warna dari imej',
        description: 'Pengekstrak warna percuma. Muat naik foto atau logo dan dapatkan palet sehingga 12 warna dominan (HEX dan RGB).',
        url: toAbsoluteUrl('/ms/alatan/pengekstrak-warna-dari-imej'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Penjana palet warna',
        description: 'Cipta palet warna daripada satu warna asas. Monokromatik, triadik, analogus, pelengkap, dan lain-lain — serta varian pastel, gelap, dan minimalis.',
        url: toAbsoluteUrl('/ms/alatan/penjana-palet-warna'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Pengira perkataan dan aksara',
        description: 'Pengira percuma perkataan dan aksara dengan penilaian panjang teks. Semak sama ada panjang teks sesuai untuk halaman utama, perkhidmatan, artikel blog, atau penerangan produk.',
        url: toAbsoluteUrl('/ms/alatan/pengira-perkataan-dan-aksara'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Penjana kod QR percuma',
        description: 'Penjana percuma kod QR. Cipta kod QR untuk laman web, vCard, menu restoran, atau risalah. Eksport ke PNG dan SVG, tanpa log masuk, tanpa had.',
        url: toAbsoluteUrl('/ms/alatan/penjana-kod-qr-percuma'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Berapakah kos alatan ini?', answer: 'Percuma. Semua alatan adalah percuma, tanpa langganan dan tanpa caj tersembunyi.' },
  {
    question: 'Adakah fail saya dihantar ke pelayan?',
    answer: 'Tidak. Semua alatan berjalan sepenuhnya dalam pelayar anda. Fail tidak pernah meninggalkan komputer anda dan tidak disimpan di mana-mana.',
  },
  { question: 'Adakah saya memerlukan akaun?', answer: 'Tidak. Anda boleh terus menggunakannya tanpa log masuk atau membuat akaun.' },
  { question: 'Adakah terdapat had penggunaan?', answer: 'Tidak. Gunakan tanpa had — tiada had harian, tiada had fail, tiada had penukaran.' },
  {
    question: 'Untuk apa alatan ini?',
    answer:
      'Membantu menyediakan bahan untuk laman web, media sosial, dan cetakan: mengoptimumkan imej, mencipta favicon, menyemak panjang teks, mencipta kod QR, memilih warna, dan menyemak kebolehbacaannya.',
  },
  {
    question: 'Adakah alatan ini berfungsi pada telefon bimbit?',
    answer: 'Ya, tetapi sesetengah alatan (penukar WebP, penjana favicon) lebih baik digunakan pada desktop kerana memproses fail yang lebih besar.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Alatan percuma"
        description="Penukar imej, penjana favicon, pengira teks, alatan warna, dan kod QR. Tanpa pendaftaran, tanpa had — semuanya berjalan dalam pelayar anda."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Imej dan favicon"
          description="Alatan untuk menyediakan foto, grafik, dan ikon untuk laman web dan media sosial."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Penukar JPG/PNG ke WebP',
              topImageAlt: 'Penukar JPG/PNG ke WebP Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Tukar imej JPG atau PNG kepada format <strong>WebP</strong> dan kurangkan saiz fail. Pemuatan lebih pantas untuk laman web anda.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/ms/alatan/penukar-jpg-png-ke-webp">
                      Buka alatan
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Editor imej',
              topImageAlt: 'Editor imej Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Potong imej dengan sempurna untuk media sosial atau laman web anda. Pilih format sedia ada atau masukkan saiz piksel tersuai — muat turun dalam PNG, JPG, atau WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/ms/alatan/editor-imej">
                      Buka alatan
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Penjana favicon dan ikon',
              topImageAlt: 'Penjana favicon Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Cipta <strong>favicon.ico</strong> dan ikon PNG 180x180, 192x192, dan 512x512 daripada satu imej — mematuhi keperluan pelayar dan Lighthouse.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/ms/alatan/penjana-favicon-percuma">
                      Buka alatan
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Teks dan SEO"
          description="Alatan untuk menyemak panjang teks, meta tag, dan pratonton halaman dalam hasil carian."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Penyemak meta tajuk dan penerangan',
              topImageAlt: 'Penyemak meta tajuk dan penerangan Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Semak bilangan aksara, bilangan perkataan, dan lebar piksel — dengan pratonton Google. Elak tajuk dan penerangan yang terpotong dalam hasil carian.</p>
                  <div className="mt-4">
                    <Button arrow link="/ms/alatan/penyemak-meta-tajuk-dan-penerangan">
                      Buka alatan
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Pengira perkataan dan aksara',
              topImageAlt: 'Pengira perkataan dan aksara Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Semak panjang teks dan nilaikan sama ada sesuai untuk halaman utama, halaman perkhidmatan, artikel blog, atau penerangan produk. Alat ini mengira perkataan, aksara, perenggan, dan
                    masa membaca.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/ms/alatan/pengira-perkataan-dan-aksara">
                      Buka alatan
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="E-mel dan komunikasi"
          description="Alatan untuk komunikasi e-mel profesional dan imej jenama yang konsisten."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Penjana tandatangan e-mel HTML percuma',
              topImageAlt: 'Penjana tandatangan e-mel HTML percuma Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Cipta tandatangan e-mel profesional dalam beberapa minit. Masukkan butiran anda, pilih warna, dan salin kod HTML sedia ada ke Gmail, Outlook, atau klien e-mel lain.</p>
                  <div className="mt-4">
                    <Button arrow link="/ms/alatan/penjana-tandatangan-emel-percuma">
                      Buka alatan
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Kod QR"
          description="Penjana kod QR untuk laman web, kad perniagaan, menu, dan bahan cetakan."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Penjana kod QR percuma',
              topImageAlt: 'Penjana kod QR percuma Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Cipta kod QR untuk laman web, vCard, menu restoran, atau risalah. Eksport ke PNG dan SVG — tanpa log masuk, tanpa had.</p>
                  <div className="mt-4">
                    <Button arrow link="/ms/alatan/penjana-kod-qr-percuma">
                      Buka alatan
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Warna dan kebolehcapaian"
          description="Alatan untuk bekerja dengan warna, kontras, dan kebolehcapaian WCAG."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Penyemak kontras warna',
              topImageAlt: 'Penyemak kontras warna Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Semak sama ada warna teks dan latar belakang anda boleh dibaca. Masukkan kod warna, lihat nisbah kontras mengikut <strong>WCAG</strong>, dan gunakan fungsi <strong>Match</strong>{' '}
                    untuk pembetulan automatik.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/ms/alatan/penyemak-kontras-warna">
                      Buka alatan
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Pengekstrak warna dari imej',
              topImageAlt: 'Pengekstrak warna dari imej Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Muat naik foto atau logo — alat ini akan mengekstrak warna dominan. Salin kod HEX dengan satu klik dan gunakannya di mana-mana.</p>
                  <div className="mt-4">
                    <Button arrow link="/ms/alatan/pengekstrak-warna-dari-imej">
                      Buka alatan
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Penjana palet warna',
              topImageAlt: 'Penjana palet warna Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Pilih satu warna asas dan cipta 9 palet warna: monokromatik, pelengkap, triadik, pastel, gelap, dan lain-lain. Salin kod HEX dengan satu klik.</p>
                  <div className="mt-4">
                    <Button arrow link="/ms/alatan/penjana-palet-warna">
                      Buka alatan
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Apakah alatan Arteon?">
          <p className="mb-4">
            10 alatan percuma untuk menyediakan bahan bagi laman web, media sosial, dan cetakan — penukar WebP, penjana favicon, pengira teks, pengekstrak warna, penjana palet, dan kod QR.
          </p>
          <p>Semua alatan berjalan dalam pelayar anda — fail tidak pernah dihantar ke pelayan. Gunakan tanpa pendaftaran dan tanpa had.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Mengapa menggunakan alatan Arteon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Privasi penuh',
              description: 'Semua alatan memproses fail secara setempat dalam pelayar anda. Tiada apa-apa yang dihantar ke pelayan — data hilang apabila anda menutup tab.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Tanpa had penggunaan',
              description: 'Gunakan tanpa had — tiada had harian, tiada had fail, tiada had penukaran. Sebanyak yang anda perlukan.',
            },
            { icon: <RiLockLine className="h-6 w-6" />, title: 'Tanpa pendaftaran', description: 'Tidak perlu akaun. Buka alatan, gunakan, selesai.' },
            { icon: <RiGlobalLine className="h-6 w-6" />, title: 'Tersedia dalam Bahasa Melayu', description: 'Semua alatan tersedia dalam Bahasa Melayu — antara muka, arahan, dan mesej.' },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Soalan lazim tentang alatan kami" />

        <Gap size="sm" />
      </Wrapper>

      <Script id="ld-json-tools-ms" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
