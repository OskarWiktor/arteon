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
  title: 'Ücretsiz çevrimiçi araçlar | Görseller, SEO, renkler, favicon',
  description: '10 ücretsiz çevrimiçi araç: WebP dönüştürücü, favicon oluşturucu, metin sayacı, renk çıkarıcı ve QR kodları. Web siteleri, sosyal medya ve baskı için. Kayıt gerekmez.',
  alternates: getToolsIndexAlternates('tr'),
  openGraph: {
    title: 'Ücretsiz çevrimiçi araçlar | Görseller, SEO, renkler, favicon',
    description: '10 ücretsiz çevrimiçi araç: WebP dönüştürücü, favicon oluşturucu, metin sayacı, renk çıkarıcı ve QR kodları. Web siteleri, sosyal medya ve baskı için. Kayıt gerekmez.',
    url: toAbsoluteUrl('/tr/araclar'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Ücretsiz çevrimiçi araçlar',
  description: '10 ücretsiz çevrimiçi araç: WebP dönüştürücü, favicon oluşturucu, metin sayacı, renk çıkarıcı ve QR kodları. Web siteleri, sosyal medya ve baskı için. Kayıt gerekmez.',
  url: toAbsoluteUrl('/tr/araclar'),
  inLanguage: 'tr',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Görsel optimizasyonu' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Renkler ve marka kimliği' },
    { '@type': 'Thing', name: 'Çevrimiçi oluşturucular' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'JPG ve PNG WebP dönüştürücü çevrimiçi',
        description: "Ücretsiz çevrimiçi JPG ve PNG WebP dönüştürücü. Dosya boyutunu kalite kaybı olmadan %35'e kadar azaltın. Kayıt gerekmez — dosyalar tarayıcınızda kalır.",
        url: toAbsoluteUrl('/tr/araclar/jpg-png-webp-donusturucu'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Çevrimiçi görsel düzenleyici',
        description: 'Sosyal medya ve web siteleri için görselleri kırpın ve yeniden boyutlandırın. Hazır formatlar, özel piksel boyutları ve yuvarlak avatar desteği.',
        url: toAbsoluteUrl('/tr/araclar/gorsel-duzenleyici'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Çevrimiçi favicon oluşturucu',
        description: "Ücretsiz çevrimiçi favicon oluşturucu. Tek bir görselden favicon.ico ve PNG simgeleri (16×16'dan 512×512'ye) oluşturun — tarayıcı ve Lighthouse gereksinimlerine uygun.",
        url: toAbsoluteUrl('/tr/araclar/ucretsiz-favicon-olusturucu'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Meta başlık ve açıklama kontrolü',
        description: 'Google önizlemeli meta başlık ve açıklama uzunluk kontrolü. Karakter sayısını ve piksel genişliğini göstererek başlık ve açıklamaların kesilmesini önler.',
        url: toAbsoluteUrl('/tr/araclar/meta-baslik-ve-aciklama-kontrol'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'HTML e-posta imza oluşturucu',
        description: "Ücretsiz HTML e-posta imza oluşturucu. İletişim bilgilerini, CTA linkini ve sosyal medya profillerini girin, ardından hazır HTML kodunu Gmail veya Outlook'a kopyalayın.",
        url: toAbsoluteUrl('/tr/araclar/ucretsiz-e-posta-imza-olusturucu'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Renk kontrast kontrolü',
        description: "Metin ve arka plan renklerinin kontrast ve okunabilirliğini WCAG'a göre kontrol edin. Kontrast oranını hesaplar ve otomatik renk ayarlamasına yardımcı olur.",
        url: toAbsoluteUrl('/tr/araclar/renk-kontrast-kontrolu'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Görselden renk çıkarıcı çevrimiçi',
        description: "Ücretsiz çevrimiçi renk çıkarıcı. Bir fotoğraf veya logo yükleyin ve 12'ye kadar baskın renk (HEX ve RGB) içeren bir palet alın.",
        url: toAbsoluteUrl('/tr/araclar/gorsel-renk-cikarici'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Renk paleti oluşturucu çevrimiçi',
        description: 'Tek bir ana renkten renk paletleri oluşturun. Monokromatik, triadik, analog, komplementer şemalar ile pastel, koyu ve minimalist varyantlar.',
        url: toAbsoluteUrl('/tr/araclar/renk-paleti-olusturucu'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Kelime ve karakter sayacı çevrimiçi',
        description:
          'Ücretsiz kelime ve karakter sayacı ile metin uzunluğu değerlendirmesi. Metin uzunluğunun ana sayfa, hizmet sayfası, blog yazısı veya ürün açıklaması için uygun olup olmadığını kontrol edin.',
        url: toAbsoluteUrl('/tr/araclar/kelime-ve-karakter-sayaci'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'QR kod oluşturucu çevrimiçi',
        description: "Ücretsiz çevrimiçi QR kod oluşturucu. Web siteleri, vCard'lar, restoran menüleri veya broşürler için QR kod oluşturun. PNG ve SVG olarak dışa aktarın, giriş veya sınır yok.",
        url: toAbsoluteUrl('/tr/araclar/ucretsiz-qr-kod-olusturucu'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Araçların maliyeti nedir?', answer: 'Hiçbir şey. Tüm araçlar ücretsizdir, abonelik ve gizli ücret yoktur.' },
  { question: 'Dosyalarım bir sunucuya gönderiliyor mu?', answer: 'Hayır. Tüm araçlar tamamen tarayıcınızda çalışır. Dosyalar asla bilgisayarınızdan ayrılmaz ve hiçbir yerde saklanmaz.' },
  { question: 'Hesaba ihtiyacım var mı?', answer: 'Hayır. Giriş yapmadan veya hesap oluşturmadan hemen kullanabilirsiniz.' },
  { question: 'Kullanım sınırı var mı?', answer: 'Hayır. Kısıtlama olmadan kullanın — günlük limit yok, dosya limiti yok, dönüşüm limiti yok.' },
  {
    question: 'Bu araçlar ne için?',
    answer:
      'Web siteleri, sosyal medya ve baskı için materyal hazırlamaya yardımcı olurlar: görselleri optimize etme, favicon oluşturma, metin uzunluğu kontrolü, QR kod oluşturma, renk seçme ve okunabilirlik kontrolü.',
  },
  { question: 'Araçlar mobilde çalışıyor mu?', answer: 'Evet, ancak bazı araçlar (WebP dönüştürücü, favicon oluşturucu) büyük dosyaları işledikleri için masaüstünde daha iyi çalışır.' },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Ücretsiz çevrimiçi araçlar"
        description="Görsel dönüştürücü, favicon oluşturucu, metin sayacı, renk araçları ve QR kodları. Kayıt gerekmez, sınır yok — her şey tarayıcınızda çalışır."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Görseller ve faviconlar"
          description="Web siteleri ve sosyal medya için fotoğraf, grafik ve simge hazırlamaya yönelik araçlar."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'JPG/PNG WebP dönüştürücü',
              topImageAlt: 'JPG/PNG WebP dönüştürücü Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    JPG veya PNG görsellerini <strong>WebP</strong> formatına dönüştürün ve dosya boyutunu küçültün. Web siteniz için daha hızlı yüklenme süreleri.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/tr/araclar/jpg-png-webp-donusturucu">
                      Aracı aç
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Görsel düzenleyici',
              topImageAlt: 'Görsel düzenleyici Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Sosyal medya veya web siteniz için görselleri mükemmel şekilde kırpın. Hazır bir format seçin veya özel piksel boyutları girin — PNG, JPG veya WebP olarak indirin.</p>
                  <div className="mt-4">
                    <Button arrow link="/tr/araclar/gorsel-duzenleyici">
                      Aracı aç
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Favicon ve simge oluşturucu',
              topImageAlt: 'Favicon oluşturucu Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Tek bir görselden <strong>favicon.ico</strong> ve PNG simgeleri 180x180, 192x192 ve 512x512 oluşturun — tarayıcı ve Lighthouse gereksinimlerine uygun.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/tr/araclar/ucretsiz-favicon-olusturucu">
                      Aracı aç
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Metin ve SEO"
          description="Metin uzunluğu, meta etiketleri kontrol etme ve sayfanızın arama sonuçlarındaki önizlemesini görme araçları."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Meta başlık ve açıklama kontrolü',
              topImageAlt: 'Meta başlık ve açıklama kontrolü Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Karakter sayısını, kelime sayısını ve piksel genişliğini kontrol edin — Google önizlemesiyle. Arama sonuçlarında kesilen başlık ve açıklamalardan kaçının.</p>
                  <div className="mt-4">
                    <Button arrow link="/tr/araclar/meta-baslik-ve-aciklama-kontrol">
                      Aracı aç
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Kelime ve karakter sayacı',
              topImageAlt: 'Kelime ve karakter sayacı Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Metin uzunluğunu kontrol edin ve ana sayfa, hizmet sayfası, blog yazısı veya ürün açıklaması için uygun olup olmadığını değerlendirin. Araç kelimeleri, karakterleri, paragrafları
                    ve okuma süresini sayar.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/tr/araclar/kelime-ve-karakter-sayaci">
                      Aracı aç
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="E-posta ve iletişim"
          description="Profesyonel e-posta iletişimi ve tutarlı marka imajı için araçlar."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Ücretsiz HTML e-posta imza oluşturucu',
              topImageAlt: 'Ücretsiz HTML e-posta imza oluşturucu Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Dakikalar içinde profesyonel bir e-posta imzası oluşturun. Bilgilerinizi girin, renkleri seçin ve hazır HTML kodunu Gmail, Outlook veya diğer e-posta istemcilerine kopyalayın.</p>
                  <div className="mt-4">
                    <Button arrow link="/tr/araclar/ucretsiz-e-posta-imza-olusturucu">
                      Aracı aç
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="QR kodları"
          description="Web siteleri, kartvizitler, menüler ve basılı materyaller için QR kod oluşturucu."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Ücretsiz QR kod oluşturucu',
              topImageAlt: 'Ücretsiz QR kod oluşturucu Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Web sitesi, vCard, restoran menüsü veya broşür için QR kod oluşturun. PNG ve SVG olarak dışa aktarın — giriş gerekmez, sınır yok.</p>
                  <div className="mt-4">
                    <Button arrow link="/tr/araclar/ucretsiz-qr-kod-olusturucu">
                      Aracı aç
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Renkler ve erişilebilirlik"
          description="Renkler, kontrast ve WCAG erişilebilirliği ile çalışma araçları."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Renk kontrast kontrolü',
              topImageAlt: 'Renk kontrast kontrolü Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Metin ve arka plan renklerinizin okunaklı olup olmadığını kontrol edin. Renk kodlarını girin, <strong>WCAG</strong>&apos;a göre kontrast oranını görün ve otomatik düzeltme için{' '}
                    <strong>Match</strong> işlevini kullanın.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/tr/araclar/renk-kontrast-kontrolu">
                      Aracı aç
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Görsel renk çıkarıcı',
              topImageAlt: 'Görsel renk çıkarıcı Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Bir fotoğraf veya logo yükleyin — araç baskın renkleri çıkaracaktır. HEX kodlarını tek tıkla kopyalayın ve her yerde kullanın.</p>
                  <div className="mt-4">
                    <Button arrow link="/tr/araclar/gorsel-renk-cikarici">
                      Aracı aç
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Renk paleti oluşturucu',
              topImageAlt: 'Renk paleti oluşturucu Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Bir ana renk seçin ve 9 renk paleti oluşturun: monokromatik, komplementer, triadik, pastel, koyu ve daha fazlası. HEX kodlarını tek tıkla kopyalayın.</p>
                  <div className="mt-4">
                    <Button arrow link="/tr/araclar/renk-paleti-olusturucu">
                      Aracı aç
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Arteon araçları nedir?">
          <p className="mb-4">
            Web siteleri, sosyal medya ve baskı için materyal hazırlamaya yönelik 10 ücretsiz çevrimiçi araç — WebP dönüştürücü, favicon oluşturucu, metin sayacı, renk çıkarıcı, palet oluşturucu ve QR
            kodları.
          </p>
          <p>Tüm araçlar tarayıcınızda çalışır — dosyalar asla bir sunucuya gönderilmez. Kayıt olmadan ve sınır olmadan kullanın.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Neden Arteon araçlarını kullanmalısınız?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Tam gizlilik',
              description: 'Tüm araçlar dosyaları tarayıcınızda yerel olarak işler. Hiçbir şey bir sunucuya gönderilmez — sekmeyi kapattığınızda veriler kaybolur.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Kullanım sınırı yok',
              description: 'Kısıtlama olmadan kullanın — günlük limit yok, dosya limiti yok, dönüşüm limiti yok. İhtiyacınız kadar.',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'Kayıt gerekmez',
              description: 'Hesap gerekmez. Aracı açın, kullanın, bitti.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Türkçe olarak mevcut',
              description: 'Tüm araçlar Türkçe olarak mevcuttur — arayüz, talimatlar ve mesajlar.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Araçlarımız hakkında sık sorulan sorular" />

        <Gap size="sm" />
      </Wrapper>

      <Script id="ld-json-tools-tr" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
