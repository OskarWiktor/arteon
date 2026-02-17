import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'tr' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/tr/gizlilik-politikasi'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

export default function GizlilikPolitikasiPage() {
  return (
    <>
      <Gap size="xs" />
      <Wrapper as="article" id="article-root" itemScope itemType="https://schema.org/Article" className="flex flex-col-reverse gap-8 select-none lg:grid lg:grid-cols-[1fr_300px]">
        <div>
          <h1>Gizlilik Politikası</h1>
          <p className="mt-2 text-sm opacity-70">
            Sürüm: <strong>13.02.2026</strong>
          </p>

          <Gap size="xs" />

          <SectionInfo title="1. Veri Sorumlusu">
            <p>Kişisel verilerin sorumlusu, Polonya&apos;da Czernichów belediyesi, Zagacie, ul. Jaśminowa 36, 32-070 adresinde kayıtlı Arteon&apos;dur.</p>
            <p>
              Vergi numarası (NIP): <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              İletişim: <strong>kontakt@arteonagency.pl</strong>, tel.: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="2. Toplanan Verilerin Kapsamı">
            <ul className="list-disc space-y-1 pl-6">
              <li>iletişim formu aracılığıyla gönderilen veriler (ad, soyad, e-posta, mesaj içeriği),</li>
              <li>otomatik olarak toplanan teknik veriler (IP adresi, cihaz bilgileri, çerezler),</li>
              <li>Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics ve Vercel Speed Insights&apos;tan analitik veriler,</li>
              <li>Metricool&apos;dan analitik veriler (ziyaret istatistikleri, trafik kaynakları),</li>
              <li>reklam gösterimi amacıyla Google AdSense tarafından toplanan veriler (reklam tanımlayıcıları, reklam çerezleri, reklam etkileşim verileri),</li>
              <li>sunucu ve güvenlik olay günlükleri (örneğin zaman damgaları, IP adresi, istek başlıkları).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="3. İşleme Amaçları ve Yasal Dayanakları">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Müşteri iletişimi</strong> – iletişim formundan gelen sorulara yanıt verme (KVKK Madde 6(1)(b) ve (f) GDPR).
              </li>
              <li>
                <strong>Pazarlama ve analitik</strong> – site istatistikleri, içerik optimizasyonu (Madde 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Hizmet sunumu</strong> – teklif, sözleşme, fatura hazırlama (Madde 6(1)(b) GDPR).
              </li>
              <li>
                <strong>Yasal yükümlülükler</strong> – örneğin muhasebe belgelerinin saklanması (Madde 6(1)(c) GDPR).
              </li>
              <li>
                <strong>Güvenlik ve talepler</strong> – günlük tutma, kötüye kullanımı önleme, taleplerin tesis/takip/savunması (Madde 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Reklam gösterimi</strong> – Google AdSense aracılığıyla ilgi alanına dayalı reklamların gösterilmesi (Madde 6(1)(a) GDPR – çerez banner&apos;ı aracılığıyla verilen kullanıcı
                onayı).
              </li>
            </ol>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="4. Çerezler">
            <p>Web sitesi aşağıdaki amaçlarla çerez kullanmaktadır:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>web sitesinin düzgün çalışmasını sağlama,</li>
              <li>trafik analizi (Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, Metricool),</li>
              <li>pazarlama amaçları,</li>
              <li>ilgi alanına dayalı reklamların gösterilmesi (Google AdSense / DoubleClick).</li>
            </ul>
            <p>
              Google AdSense, kullanıcının web sitemize veya diğer web sitelerine önceki ziyaretlerine dayalı olarak reklam sunmak için DoubleClick çerezlerini kullanabilir. Üçüncü taraf sağlayıcılar
              (Google dahil) bu çerezleri tarama geçmişine dayalı reklam sunmak için kullanır.
            </p>
            <p>
              Kişiselleştirilmiş reklamları{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                Google Ads Ayarları
              </a>{' '}
              veya{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>{' '}
              üzerinden devre dışı bırakabilirsiniz.
            </p>
            <p>
              Web sitesi Google Consent Mode v2 kullanmaktadır. Bu, Google analitik ve reklam komut dosyalarının, kullanıcı çerez banner&apos;ı aracılığıyla onay verene kadar veri toplamadığı anlamına
              gelir.
            </p>
            <p>Çerezleri tarayıcı ayarlarınızdan yönetebilirsiniz. Çerezlerin kısıtlanması web sitesinin bazı özelliklerini etkileyebilir.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="5. Veri Alıcıları">
            <p>Veriler, hizmet sunumunda bize destek olan kuruluşlarla paylaşılabilir, örneğin:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>barındırma/uygulama sağlayıcıları (örneğin Vercel),</li>
              <li>analitik araç sağlayıcıları (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>reklam hizmeti sağlayıcıları (Google Ireland Ltd. – Google AdSense),</li>
              <li>muhasebe ofisi, ödeme işlemcileri veya hukuk danışmanları – gerektiğinde.</li>
            </ul>
            <p>Tüm alıcılar, uygun anlaşmalar temelinde GDPR&apos;a uygun olarak verileri işlemektedir.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="6. Veri İşleme Sözleşmesi (DPA)">
            <p>Talep üzerine, bir müşteri adına veri işlediğimizde (örneğin web sitesi bakımı, araç veya sistem yapılandırması kapsamında) bir veri işleme sözleşmesi (DPA) imzalarız.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="7. AEA Dışına Veri Aktarımı">
            <p>
              Google ve Vercel, Avrupa Ekonomik Alanı dışında veri işleyebilir. Uygun yasal güvenceler uygulanır (Avrupa Komisyonu tarafından onaylanan Standart Sözleşme Maddeleri dahil) ve mümkün
              olduğunda teknik önlemler (takma ad kullanımı, en aza indirme) alınır.
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="8. Veri Saklama Süresi">
            <ul className="list-disc space-y-1 pl-6">
              <li>İletişim formu verileri – yazışmanın sona ermesinden itibaren 12 aya kadar.</li>
              <li>Müşteri verileri – yasaların gerektirdiği süre boyunca (muhasebe belgeleri).</li>
              <li>Analitik veriler – Google Analytics politikasına uygun olarak (örneğin 26 ay).</li>
              <li>Günlükler – güvenlik ve hesap verebilirlik için gerekli süre boyunca (genellikle 12 aya kadar, düzenlemeler aksini belirtmedikçe).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="9. Haklarınız">
            <p>Aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>verilerinize erişim ve kopya alma,</li>
              <li>verilerin düzeltilmesi,</li>
              <li>verilerin silinmesi,</li>
              <li>işlemenin kısıtlanması,</li>
              <li>veri taşınabilirliği,</li>
              <li>işlemeye itiraz (pazarlama dahil),</li>
              <li>yetkili denetim makamına şikayette bulunma (Polonya&apos;da: Kişisel Verileri Koruma Ofisi Başkanı, UODO).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="10. Gönüllü Veri Sağlama">
            <p>Kişisel verilerin sağlanması gönüllüdür, ancak iletişim veya hizmet sunumu için gereklidir.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="11. Güvenlik Önlemleri">
            <p>Kişisel verileri yetkisiz erişim, kayıp veya imhaya karşı korumak için teknik ve organizasyonel önlemler uygulamaktayız.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="12. Politika Değişiklikleri">
            <p>Bu gizlilik politikası, mevzuat veya teknolojideki değişiklikleri yansıtmak üzere güncellenebilir. Güncel sürüm her zaman bu sayfada mevcuttur.</p>
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
