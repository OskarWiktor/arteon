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
  title: 'Công cụ miễn phí | Hình ảnh, SEO, màu sắc, favicon',
  description: '10 công cụ miễn phí: chuyển đổi WebP, tạo favicon, đếm văn bản, trích xuất màu và mã QR. Cho trang web, mạng xã hội và in ấn. Không cần đăng ký.',
  alternates: getToolsIndexAlternates('vi'),
  openGraph: {
    title: 'Công cụ miễn phí | Hình ảnh, SEO, màu sắc, favicon',
    description: '10 công cụ miễn phí: chuyển đổi WebP, tạo favicon, đếm văn bản, trích xuất màu và mã QR. Cho trang web, mạng xã hội và in ấn. Không cần đăng ký.',
    url: toAbsoluteUrl('/vi/cong-cu'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Công cụ miễn phí',
  description: '10 công cụ miễn phí: chuyển đổi WebP, tạo favicon, đếm văn bản, trích xuất màu và mã QR. Cho trang web, mạng xã hội và in ấn. Không cần đăng ký.',
  url: toAbsoluteUrl('/vi/cong-cu'),
  inLanguage: 'vi',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Tối ưu hình ảnh' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Màu sắc và thương hiệu' },
    { '@type': 'Thing', name: 'Công cụ tạo trực tuyến' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Chuyển đổi JPG và PNG sang WebP trực tuyến',
        description: 'Công cụ chuyển đổi miễn phí JPG và PNG sang WebP. Giảm kích thước file lên đến 35% mà không mất chất lượng. Không cần đăng ký — file được xử lý trong trình duyệt.',
        url: toAbsoluteUrl('/vi/cong-cu/chuyen-doi-jpg-png-sang-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Chỉnh sửa hình ảnh trực tuyến',
        description: 'Cắt và thay đổi kích thước hình ảnh cho mạng xã hội và trang web. Định dạng có sẵn, kích thước pixel tùy chỉnh và hỗ trợ avatar tròn.',
        url: toAbsoluteUrl('/vi/cong-cu/chinh-sua-hinh-anh'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Tạo favicon trực tuyến',
        description: 'Công cụ tạo favicon miễn phí. Tạo favicon.ico và biểu tượng PNG (16×16 đến 512×512) từ một hình ảnh duy nhất — phù hợp với yêu cầu trình duyệt và Lighthouse.',
        url: toAbsoluteUrl('/vi/cong-cu/tao-favicon-mien-phi'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Kiểm tra meta title và description',
        description: 'Kiểm tra độ dài meta title và description với xem trước Google. Hiển thị số ký tự và chiều rộng pixel để tránh tiêu đề và mô tả bị cắt.',
        url: toAbsoluteUrl('/vi/cong-cu/kiem-tra-meta-title-va-description'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Tạo chữ ký email HTML',
        description: 'Công cụ tạo chữ ký email HTML miễn phí. Nhập thông tin liên hệ, link CTA và hồ sơ mạng xã hội, sau đó sao chép mã HTML sẵn vào Gmail hoặc Outlook.',
        url: toAbsoluteUrl('/vi/cong-cu/tao-chu-ky-email-mien-phi'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Kiểm tra độ tương phản màu',
        description: 'Kiểm tra độ tương phản và khả năng đọc của màu chữ và nền theo WCAG. Tính tỷ lệ tương phản và hỗ trợ điều chỉnh màu tự động.',
        url: toAbsoluteUrl('/vi/cong-cu/kiem-tra-do-tuong-phan-mau'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Trích xuất màu từ hình ảnh trực tuyến',
        description: 'Công cụ trích xuất màu miễn phí. Tải lên ảnh hoặc logo và nhận bảng màu lên đến 12 màu chủ đạo (HEX và RGB).',
        url: toAbsoluteUrl('/vi/cong-cu/trich-xuat-mau-tu-hinh-anh'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Tạo bảng màu trực tuyến',
        description: 'Tạo bảng màu từ một màu cơ bản. Đơn sắc, bộ ba, tương tự, bổ sung và nhiều hơn — cộng thêm biến thể pastel, tối và tối giản.',
        url: toAbsoluteUrl('/vi/cong-cu/tao-bang-mau'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Đếm từ và ký tự trực tuyến',
        description: 'Công cụ đếm từ và ký tự miễn phí với đánh giá độ dài. Kiểm tra xem độ dài văn bản có phù hợp với trang chủ, trang dịch vụ, bài blog hay mô tả sản phẩm không.',
        url: toAbsoluteUrl('/vi/cong-cu/dem-tu-va-ky-tu'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Tạo mã QR trực tuyến',
        description: 'Công cụ tạo mã QR miễn phí. Tạo mã QR cho trang web, vCard, menu nhà hàng hoặc tờ rơi. Xuất ra PNG và SVG, không cần đăng nhập, không giới hạn.',
        url: toAbsoluteUrl('/vi/cong-cu/tao-ma-qr-mien-phi'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Các công cụ có tính phí không?', answer: 'Không. Tất cả công cụ đều miễn phí, không đăng ký và không phí ẩn.' },
  {
    question: 'File của tôi có được gửi đến máy chủ không?',
    answer: 'Không. Tất cả công cụ chạy hoàn toàn trong trình duyệt của bạn. File không bao giờ rời khỏi máy tính và không được lưu trữ ở đâu cả.',
  },
  { question: 'Tôi có cần tài khoản không?', answer: 'Không. Bạn có thể sử dụng ngay mà không cần đăng nhập hay tạo tài khoản.' },
  { question: 'Có giới hạn sử dụng không?', answer: 'Không. Sử dụng không giới hạn — không có giới hạn hàng ngày, không giới hạn file, không giới hạn chuyển đổi.' },
  {
    question: 'Các công cụ này dùng để làm gì?',
    answer: 'Giúp chuẩn bị tài liệu cho trang web, mạng xã hội và in ấn: tối ưu hình ảnh, tạo favicon, kiểm tra độ dài văn bản, tạo mã QR, chọn màu và kiểm tra khả năng đọc.',
  },
  { question: 'Các công cụ có hoạt động trên điện thoại không?', answer: 'Có, nhưng một số công cụ (chuyển đổi WebP, tạo favicon) hoạt động tốt hơn trên máy tính do xử lý file lớn hơn.' },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Công cụ miễn phí"
        description="Chuyển đổi hình ảnh, tạo favicon, đếm văn bản, công cụ màu sắc và mã QR. Không cần đăng ký, không giới hạn — tất cả chạy trong trình duyệt của bạn."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Hình ảnh & favicon"
          description="Công cụ để chuẩn bị ảnh, đồ họa và biểu tượng cho trang web và mạng xã hội."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Chuyển đổi JPG/PNG sang WebP',
              topImageAlt: 'Chuyển đổi JPG/PNG sang WebP Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Chuyển đổi hình ảnh JPG hoặc PNG sang định dạng <strong>WebP</strong> và giảm kích thước file. Tốc độ tải nhanh hơn cho trang web của bạn.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/vi/cong-cu/chuyen-doi-jpg-png-sang-webp">
                      Mở công cụ
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Chỉnh sửa hình ảnh',
              topImageAlt: 'Chỉnh sửa hình ảnh Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Cắt hình ảnh hoàn hảo cho mạng xã hội hoặc trang web. Chọn định dạng có sẵn hoặc nhập kích thước pixel tùy chỉnh — tải về dưới dạng PNG, JPG hoặc WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/vi/cong-cu/chinh-sua-hinh-anh">
                      Mở công cụ
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Tạo favicon & biểu tượng',
              topImageAlt: 'Tạo favicon Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Tạo <strong>favicon.ico</strong> và biểu tượng PNG 180x180, 192x192 và 512x512 từ một hình ảnh duy nhất — phù hợp với yêu cầu trình duyệt và Lighthouse.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/vi/cong-cu/tao-favicon-mien-phi">
                      Mở công cụ
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Văn bản & SEO"
          description="Công cụ kiểm tra độ dài văn bản, thẻ meta và xem trước trang trong kết quả tìm kiếm."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Kiểm tra meta title & description',
              topImageAlt: 'Kiểm tra meta title và description Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Kiểm tra số ký tự, số từ và chiều rộng pixel — với xem trước Google. Tránh tiêu đề và mô tả bị cắt trong kết quả tìm kiếm.</p>
                  <div className="mt-4">
                    <Button arrow link="/vi/cong-cu/kiem-tra-meta-title-va-description">
                      Mở công cụ
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Đếm từ & ký tự',
              topImageAlt: 'Đếm từ và ký tự Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Kiểm tra độ dài văn bản và đánh giá xem có phù hợp với trang chủ, trang dịch vụ, bài blog hay mô tả sản phẩm không. Công cụ đếm từ, ký tự, đoạn văn và thời gian đọc.</p>
                  <div className="mt-4">
                    <Button arrow link="/vi/cong-cu/dem-tu-va-ky-tu">
                      Mở công cụ
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Email & giao tiếp"
          description="Công cụ hỗ trợ giao tiếp email chuyên nghiệp và hình ảnh thương hiệu nhất quán."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Tạo chữ ký email HTML miễn phí',
              topImageAlt: 'Tạo chữ ký email HTML miễn phí Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Tạo chữ ký email chuyên nghiệp trong vài phút. Nhập thông tin, chọn màu sắc và sao chép mã HTML sẵn vào Gmail, Outlook hoặc ứng dụng email khác.</p>
                  <div className="mt-4">
                    <Button arrow link="/vi/cong-cu/tao-chu-ky-email-mien-phi">
                      Mở công cụ
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Mã QR"
          description="Công cụ tạo mã QR cho trang web, danh thiếp, menu và tài liệu in ấn."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Tạo mã QR miễn phí',
              topImageAlt: 'Tạo mã QR miễn phí Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Tạo mã QR cho trang web, vCard, menu nhà hàng hoặc tờ rơi. Xuất ra PNG và SVG — không cần đăng nhập, không giới hạn.</p>
                  <div className="mt-4">
                    <Button arrow link="/vi/cong-cu/tao-ma-qr-mien-phi">
                      Mở công cụ
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Màu sắc & trợ năng"
          description="Công cụ làm việc với màu sắc, độ tương phản và trợ năng WCAG."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Kiểm tra độ tương phản màu',
              topImageAlt: 'Kiểm tra độ tương phản màu Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Kiểm tra xem màu chữ và nền có dễ đọc không. Nhập mã màu, xem tỷ lệ tương phản theo <strong>WCAG</strong> và sử dụng chức năng <strong>Match</strong> để điều chỉnh tự động.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/vi/cong-cu/kiem-tra-do-tuong-phan-mau">
                      Mở công cụ
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Trích xuất màu từ hình ảnh',
              topImageAlt: 'Trích xuất màu từ hình ảnh Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Tải lên ảnh hoặc logo — công cụ sẽ trích xuất các màu chủ đạo. Sao chép mã HEX với một lần nhấn và sử dụng ở bất kỳ đâu.</p>
                  <div className="mt-4">
                    <Button arrow link="/vi/cong-cu/trich-xuat-mau-tu-hinh-anh">
                      Mở công cụ
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Tạo bảng màu',
              topImageAlt: 'Tạo bảng màu Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Chọn một màu cơ bản và tạo 9 bảng màu: đơn sắc, bổ sung, bộ ba, pastel, tối và nhiều hơn. Sao chép mã HEX với một lần nhấn.</p>
                  <div className="mt-4">
                    <Button arrow link="/vi/cong-cu/tao-bang-mau">
                      Mở công cụ
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Công cụ Arteon là gì?">
          <p className="mb-4">10 công cụ miễn phí để chuẩn bị tài liệu cho trang web, mạng xã hội và in ấn — chuyển đổi WebP, tạo favicon, đếm văn bản, trích xuất màu, tạo bảng màu và mã QR.</p>
          <p>Tất cả công cụ chạy trong trình duyệt — file không bao giờ được gửi đến máy chủ. Sử dụng không cần đăng ký và không giới hạn.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Tại sao sử dụng công cụ Arteon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Bảo mật hoàn toàn',
              description: 'Tất cả công cụ xử lý file cục bộ trong trình duyệt. Không gì được gửi đến máy chủ — dữ liệu biến mất khi bạn đóng tab.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Không giới hạn sử dụng',
              description: 'Sử dụng không hạn chế — không giới hạn hàng ngày, không giới hạn file, không giới hạn chuyển đổi. Bao nhiêu lần tùy bạn.',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'Không cần đăng ký',
              description: 'Không cần tài khoản. Mở công cụ, sử dụng, xong.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Có sẵn bằng tiếng Việt',
              description: 'Tất cả công cụ có sẵn bằng tiếng Việt — giao diện, hướng dẫn và thông báo.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Câu hỏi thường gặp về công cụ của chúng tôi" />

        <Gap size="sm" />
      </Wrapper>

      <Script id="ld-json-tools-vi" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
