import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'bg' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/bg/politika-za-poveritelnost'),
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
          <h1>Политика за поверителност</h1>
          <p className="mt-2 text-sm opacity-70">
            Версия: <strong>13.02.2026</strong>
          </p>
          <Gap size="xs" />
          <SectionInfo title="1. Администратор на данни">
            <p>Администратор на лични данни е Arteon със седалище в община Czernichów, Zagacie, ул. Jasminowa 36, 32-070, Полша.</p>
            <p>
              ДДС номер: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Контакт: <strong>kontakt@arteonagency.pl</strong>, тел.: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="2. Обхват на данните">
            <ul className="list-disc space-y-1 pl-6">
              <li>данни от контактната форма (име, фамилия, имейл, съдържание),</li>
              <li>автоматично събирани технически данни (IP, данни за устройството, бисквитки),</li>
              <li>аналитични данни от Google Analytics 4, Ahrefs, Vercel Analytics и Vercel Speed Insights,</li>
              <li>аналитични данни от Metricool,</li>
              <li>данни от Google AdSense за показване на реклами,</li>
              <li>сървърни логове и събития за сигурност.</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="3. Цели и правно основание">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Комуникация с клиенти</strong> — обработка на запитвания (чл. 6(1)(б) и (е) GDPR).
              </li>
              <li>
                <strong>Маркетинг и аналитика</strong> — статистика, оптимизация (чл. 6(1)(е) GDPR).
              </li>
              <li>
                <strong>Предоставяне на услуги</strong> — оферти, договори, фактури (чл. 6(1)(б) GDPR).
              </li>
              <li>
                <strong>Законови задължения</strong> — счетоводни документи (чл. 6(1)(в) GDPR).
              </li>
              <li>
                <strong>Сигурност</strong> — логове, предотвратяване на злоупотреби (чл. 6(1)(е) GDPR).
              </li>
              <li>
                <strong>Показване на реклами</strong> — чрез Google AdSense (чл. 6(1)(а) GDPR — съгласие).
              </li>
            </ol>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="4. Бисквитки">
            <p>Сайтът използва бисквитки за:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>правилно функциониране,</li>
              <li>анализ на трафика (Google Analytics 4, Ahrefs, Vercel Analytics, Metricool),</li>
              <li>маркетингови цели,</li>
              <li>показване на реклами (Google AdSense / DoubleClick).</li>
            </ul>
            <p>
              Персонализираните реклами можете да изключите в{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                настройките на Google Ads
              </a>{' '}
              или на{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>Сайтът използва Google Consent Mode v2. Скриптовете не събират данни до получаване на съгласие.</p>
            <p>Бисквитките можете да управлявате в настройките на браузъра.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="5. Получатели на данни">
            <p>Данните могат да бъдат споделени с:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>доставчик на хостинг (Vercel),</li>
              <li>доставчици на аналитика (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>доставчик на реклами (Google Ireland Ltd. — Google AdSense),</li>
              <li>одитор, платежен посредник или юридически съветник — при необходимост.</li>
            </ul>
            <p>Всички получатели обработват данни съгласно GDPR.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="6. Споразумение за обработка (DPA)">
            <p>При поискване сключваме споразумение за обработка на данни (DPA), когато обработваме данни от името на клиент.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="7. Трансфер извън ЕИП">
            <p>Google и Vercel могат да обработват данни извън ЕИП. Прилагат се подходящи правни мерки (стандартни договорни клаузи, технически мерки).</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="8. Период на съхранение">
            <ul className="list-disc space-y-1 pl-6">
              <li>Контактна форма — до 12 месеца.</li>
              <li>Клиентски данни — съгласно законодателството.</li>
              <li>Аналитични — съгласно Google Analytics (напр. 26 месеца).</li>
              <li>Логове — до 12 месеца.</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="9. Вашите права">
            <p>Имате право на:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>достъп до данните си,</li>
              <li>коригиране,</li>
              <li>изтриване,</li>
              <li>ограничаване на обработката,</li>
              <li>преносимост,</li>
              <li>възражение (включително маркетинг),</li>
              <li>подаване на жалба до надзорен орган (в Полша: UODO).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="10. Доброволност">
            <p>Предоставянето на лични данни е доброволно, но необходимо за комуникация или предоставяне на услуги.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="11. Мерки за сигурност">
            <p>Прилагаме технически и организационни мерки за защита на личните данни.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="12. Промени в политиката">
            <p>Тази политика за поверителност може да бъде актуализирана. Последната версия е винаги достъпна на тази страница.</p>
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
