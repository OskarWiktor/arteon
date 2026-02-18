import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'uk' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/uk/polityka-konfidentsiinosti'),
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
          <h1>Політика конфіденційності</h1>
          <p className="mt-2 text-sm opacity-70">
            Версія: <strong>13.02.2026</strong>
          </p>
          <Gap size="xs" />
          <SectionInfo title="1. Адміністратор даних">
            <p>Адміністратором персональних даних є Arteon із зареєстрованим офісом у муніципалітеті Czernichów, Zagacie, вул. Jasminowa 36, 32-070, Польща.</p>
            <p>
              ІПН: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Контакт: <strong>kontakt@arteonagency.pl</strong>, тел.: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="2. Обсяг даних">
            <ul className="list-disc space-y-1 pl-6">
              <li>дані з контактної форми (ім'я, прізвище, електронна пошта, зміст),</li>
              <li>автоматично зібрані технічні дані (IP, дані пристрою, файли cookie),</li>
              <li>аналітичні дані з Google Analytics 4, Ahrefs, Vercel Analytics та Vercel Speed Insights,</li>
              <li>аналітичні дані з Metricool,</li>
              <li>дані з Google AdSense для показу реклами,</li>
              <li>серверні журнали та події безпеки.</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="3. Цілі та правова основа">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Комунікація з клієнтами</strong> — обробка запитів (ст. 6(1)(б) та (е) GDPR).
              </li>
              <li>
                <strong>Маркетинг та аналітика</strong> — статистика, оптимізація (ст. 6(1)(е) GDPR).
              </li>
              <li>
                <strong>Надання послуг</strong> — пропозиції, договори, рахунки (ст. 6(1)(б) GDPR).
              </li>
              <li>
                <strong>Законодавчі зобов'язання</strong> — бухгалтерські документи (ст. 6(1)(в) GDPR).
              </li>
              <li>
                <strong>Безпека</strong> — журнали, запобігання зловживанням (ст. 6(1)(е) GDPR).
              </li>
              <li>
                <strong>Показ реклами</strong> — через Google AdSense (ст. 6(1)(а) GDPR — згода).
              </li>
            </ol>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="4. Файли cookie">
            <p>Сайт використовує файли cookie для:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>коректної роботи,</li>
              <li>аналізу трафіку (Google Analytics 4, Ahrefs, Vercel Analytics, Metricool),</li>
              <li>маркетингових цілей,</li>
              <li>показу реклами (Google AdSense / DoubleClick).</li>
            </ul>
            <p>
              Персоналізовану рекламу можна вимкнути у{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                налаштуваннях Google Ads
              </a>{' '}
              або на{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>Сайт використовує Google Consent Mode v2. Скрипти не збирають дані до отримання згоди.</p>
            <p>Файлами cookie можна керувати у налаштуваннях браузера.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="5. Отримувачі даних">
            <p>Дані можуть бути передані:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>постачальнику хостингу (Vercel),</li>
              <li>постачальникам аналітики (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>постачальнику реклами (Google Ireland Ltd. — Google AdSense),</li>
              <li>аудитору, платіжному посереднику або юридичному консультанту — за необхідності.</li>
            </ul>
            <p>Усі отримувачі обробляють дані відповідно до GDPR.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="6. Угода про обробку даних (DPA)">
            <p>На запит ми укладаємо угоду про обробку даних (DPA), коли обробляємо дані від імені клієнта.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="7. Передача за межі ЄЕП">
            <p>Google та Vercel можуть обробляти дані за межами ЄЕП. Застосовуються відповідні правові заходи (стандартні договірні положення, технічні заходи).</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="8. Термін зберігання">
            <ul className="list-disc space-y-1 pl-6">
              <li>Контактна форма — до 12 місяців.</li>
              <li>Клієнтські дані — відповідно до законодавства.</li>
              <li>Аналітичні — відповідно до Google Analytics (напр. 26 місяців).</li>
              <li>Журнали — до 12 місяців.</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="9. Ваші права">
            <p>Ви маєте право на:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>доступ до своїх даних,</li>
              <li>виправлення,</li>
              <li>видалення,</li>
              <li>обмеження обробки,</li>
              <li>перенесення даних,</li>
              <li>заперечення (включно з маркетингом),</li>
              <li>подання скарги до наглядового органу (у Польщі: UODO).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="10. Добровільність">
            <p>Надання персональних даних є добровільним, але необхідним для комунікації або надання послуг.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="11. Заходи безпеки">
            <p>Ми застосовуємо технічні та організаційні заходи для захисту персональних даних.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="12. Зміни в політиці">
            <p>Ця політика конфіденційності може бути оновлена. Остання версія завжди доступна на цій сторінці.</p>
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
