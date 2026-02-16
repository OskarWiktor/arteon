import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'vi' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/vi/chinh-sach-bao-mat'),
    type: 'website',
  },
};

export default function ChinhSachBaoMatPage() {
  return (
    <>
      <Gap size="xs" />
      <Wrapper as="article" id="article-root" itemScope itemType="https://schema.org/Article" className="flex flex-col-reverse gap-8 select-none lg:grid lg:grid-cols-[1fr_300px]">
        <div>
          <h1>Chính sách bảo mật</h1>
          <p className="mt-2 text-sm opacity-70">
            Phiên bản: <strong>13.02.2026</strong>
          </p>

          <Gap size="xs" />

          <SectionInfo title="1. Bên kiểm soát dữ liệu">
            <p>Bên kiểm soát dữ liệu cá nhân là Arteon, có trụ sở tại xã Czernichów, Zagacie, ul. Jaśminowa 36, 32-070, Ba Lan.</p>
            <p>
              Mã số thuế (NIP): <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Liên hệ: <strong>kontakt@arteonagency.pl</strong>, điện thoại: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="2. Phạm vi dữ liệu thu thập">
            <ul className="list-disc space-y-1 pl-6">
              <li>dữ liệu gửi qua biểu mẫu liên hệ (họ, tên, email, nội dung tin nhắn),</li>
              <li>dữ liệu kỹ thuật được thu thập tự động (địa chỉ IP, thông tin thiết bị, cookie),</li>
              <li>dữ liệu phân tích từ Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics và Vercel Speed Insights,</li>
              <li>dữ liệu phân tích từ Metricool (thống kê lượt truy cập, nguồn lưu lượng),</li>
              <li>dữ liệu được Google AdSense thu thập nhằm mục đích hiển thị quảng cáo (mã định danh quảng cáo, cookie quảng cáo, dữ liệu tương tác quảng cáo),</li>
              <li>nhật ký máy chủ và sự kiện bảo mật (ví dụ: dấu thời gian, địa chỉ IP, tiêu đề yêu cầu).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="3. Mục đích và cơ sở pháp lý của việc xử lý">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Liên hệ khách hàng</strong> – trả lời các câu hỏi từ biểu mẫu liên hệ (Điều 6(1)(b) và (f) GDPR).
              </li>
              <li>
                <strong>Tiếp thị và phân tích</strong> – thống kê trang web, tối ưu hóa nội dung (Điều 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Cung cấp dịch vụ</strong> – chuẩn bị báo giá, hợp đồng, hóa đơn (Điều 6(1)(b) GDPR).
              </li>
              <li>
                <strong>Nghĩa vụ pháp lý</strong> – ví dụ: lưu giữ tài liệu kế toán (Điều 6(1)(c) GDPR).
              </li>
              <li>
                <strong>Bảo mật và khiếu nại</strong> – duy trì nhật ký, ngăn chặn lạm dụng, thiết lập/theo đuổi/bảo vệ khiếu nại (Điều 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Hiển thị quảng cáo</strong> – hiển thị quảng cáo dựa trên sở thích qua Google AdSense (Điều 6(1)(a) GDPR – sự đồng ý của người dùng thông qua banner cookie).
              </li>
            </ol>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="4. Cookie">
            <p>Trang web sử dụng cookie cho các mục đích sau:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>đảm bảo chức năng hoạt động đúng của trang web,</li>
              <li>phân tích lưu lượng truy cập (Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, Metricool),</li>
              <li>mục đích tiếp thị,</li>
              <li>hiển thị quảng cáo dựa trên sở thích (Google AdSense / DoubleClick).</li>
            </ul>
            <p>
              Google AdSense có thể sử dụng cookie DoubleClick để phân phối quảng cáo dựa trên các lần truy cập trước đó của người dùng vào trang web của chúng tôi hoặc các trang web khác. Các nhà
              cung cấp bên thứ ba (bao gồm Google) sử dụng các cookie này để phân phối quảng cáo dựa trên lịch sử duyệt web.
            </p>
            <p>
              Bạn có thể từ chối quảng cáo cá nhân hóa tại{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                Cài đặt Google Ads
              </a>{' '}
              hoặc tại{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>Trang web sử dụng Google Consent Mode v2. Điều này có nghĩa là các tập lệnh phân tích và quảng cáo của Google không thu thập dữ liệu cho đến khi người dùng đồng ý qua banner cookie.</p>
            <p>Bạn có thể quản lý cookie trong cài đặt trình duyệt. Việc hạn chế cookie có thể ảnh hưởng đến một số tính năng của trang web.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="5. Người nhận dữ liệu">
            <p>Dữ liệu có thể được chia sẻ với các đơn vị hỗ trợ chúng tôi cung cấp dịch vụ, chẳng hạn như:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>nhà cung cấp hosting/ứng dụng (ví dụ: Vercel),</li>
              <li>nhà cung cấp công cụ phân tích (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>nhà cung cấp dịch vụ quảng cáo (Google Ireland Ltd. – Google AdSense),</li>
              <li>văn phòng kế toán, đơn vị xử lý thanh toán hoặc cố vấn pháp lý – nếu cần thiết.</li>
            </ul>
            <p>Tất cả người nhận xử lý dữ liệu tuân thủ GDPR dựa trên các thỏa thuận phù hợp.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="6. Thỏa thuận xử lý dữ liệu (DPA)">
            <p>
              Theo yêu cầu, chúng tôi ký kết thỏa thuận xử lý dữ liệu (DPA) khi chúng tôi xử lý dữ liệu thay mặt cho khách hàng (ví dụ: trong khuôn khổ bảo trì trang web, cấu hình công cụ hoặc hệ
              thống).
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="7. Chuyển dữ liệu ra ngoài EEA">
            <p>
              Google và Vercel có thể xử lý dữ liệu bên ngoài Khu vực Kinh tế Châu Âu. Các biện pháp bảo vệ pháp lý phù hợp được áp dụng (bao gồm Điều khoản Hợp đồng Tiêu chuẩn được Ủy ban Châu Âu phê
              duyệt) và, khi có thể, các biện pháp kỹ thuật (giả danh hóa, tối thiểu hóa).
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="8. Thời gian lưu giữ dữ liệu">
            <ul className="list-disc space-y-1 pl-6">
              <li>Dữ liệu biểu mẫu liên hệ – tối đa 12 tháng sau khi kết thúc trao đổi.</li>
              <li>Dữ liệu khách hàng – trong thời gian theo quy định pháp luật (tài liệu kế toán).</li>
              <li>Dữ liệu phân tích – theo chính sách Google Analytics (ví dụ: 26 tháng).</li>
              <li>Nhật ký – trong thời gian cần thiết cho bảo mật và trách nhiệm giải trình (thường tối đa 12 tháng, trừ khi quy định pháp luật khác).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="9. Quyền của bạn">
            <p>Bạn có quyền:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>truy cập dữ liệu và nhận bản sao,</li>
              <li>chỉnh sửa dữ liệu,</li>
              <li>xóa dữ liệu,</li>
              <li>hạn chế xử lý,</li>
              <li>chuyển đổi dữ liệu,</li>
              <li>phản đối việc xử lý (bao gồm tiếp thị),</li>
              <li>nộp đơn khiếu nại tới cơ quan giám sát có thẩm quyền (tại Ba Lan: Chủ tịch Văn phòng Bảo vệ Dữ liệu Cá nhân, UODO).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="10. Cung cấp dữ liệu tự nguyện">
            <p>Việc cung cấp dữ liệu cá nhân là tự nguyện, nhưng cần thiết để liên hệ hoặc cung cấp dịch vụ.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="11. Biện pháp bảo mật">
            <p>Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức để bảo vệ dữ liệu cá nhân khỏi truy cập trái phép, mất mát hoặc phá hủy.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="12. Thay đổi chính sách">
            <p>Chính sách bảo mật này có thể được cập nhật để phản ánh các thay đổi trong pháp luật hoặc công nghệ. Phiên bản hiện tại luôn có sẵn trên trang này.</p>
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
