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
  title: 'Безкоштовні інструменти | Зображення, SEO, кольори, favicon',
  description: '10 безкоштовних інструментів: конвертер WebP, генератор favicon, лічильник слів, екстрактор кольорів та QR-коди. Для вебсайтів та соціальних мереж.',
  alternates: getToolsIndexAlternates('uk'),
  openGraph: {
    title: 'Безкоштовні інструменти | Зображення, SEO, кольори, favicon',
    description: '10 безкоштовних інструментів: конвертер WebP, генератор favicon, лічильник слів, екстрактор кольорів та QR-коди. Для вебсайтів та соціальних мереж.',
    url: toAbsoluteUrl('/uk/instrumenty'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Безкоштовні інструменти',
  description: '10 безкоштовних інструментів для вебсайтів, соціальних мереж та друку.',
  url: toAbsoluteUrl('/uk/instrumenty'),
  inLanguage: 'uk',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Оптимізація зображень' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Кольори та брендинг' },
    { '@type': 'Thing', name: 'Генератори' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Конвертер JPG/PNG у WebP',
        url: toAbsoluteUrl('/uk/instrumenty/konverter-jpg-png-u-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Редактор зображень',
        url: toAbsoluteUrl('/uk/instrumenty/redaktor-zobrazhen'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Генератор favicon',
        url: toAbsoluteUrl('/uk/instrumenty/bezkoshtovnyi-generator-favicon'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Перевірка мета-заголовка та опису',
        url: toAbsoluteUrl('/uk/instrumenty/perevirka-meta-zaholovka-ta-opysu'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Лічильник слів та символів',
        url: toAbsoluteUrl('/uk/instrumenty/lichylnyk-sliv-i-symvoliv'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Генератор підпису електронної пошти',
        url: toAbsoluteUrl('/uk/instrumenty/bezkoshtovnyi-generator-pidpysu-email'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Перевірка контрасту кольорів',
        url: toAbsoluteUrl('/uk/instrumenty/perevirka-kontrastu-koloriv'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Екстрактор кольорів із зображення',
        url: toAbsoluteUrl('/uk/instrumenty/ekstraktor-koloriv-z-zobrazhennia'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Генератор колірних палітр',
        url: toAbsoluteUrl('/uk/instrumenty/generator-kolirnykh-palitr'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Безкоштовний генератор QR-коду',
        url: toAbsoluteUrl('/uk/instrumenty/bezkoshtovnyi-generator-qr-kodu'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Скільки коштують інструменти?', answer: 'Нічого. Усі інструменти повністю безкоштовні, без підписок та прихованих платежів.' },
  { question: 'Чи надсилаються мої файли на сервер?', answer: 'Ні. Усі інструменти працюють безпосередньо у браузері. Файли ніколи не залишають ваш пристрій і ніде не зберігаються.' },
  { question: 'Чи потрібен обліковий запис?', answer: 'Ні. Ви можете користуватися інструментами одразу без входу або реєстрації.' },
  { question: 'Чи є обмеження на використання?', answer: 'Ні. Використовуйте без обмежень — без денного ліміту, без ліміту файлів, без ліміту конвертацій.' },
  {
    question: 'Для чого призначені інструменти?',
    answer:
      'Допомагають підготувати матеріали для вебсайтів, соціальних мереж та друку: оптимізація зображень, створення favicon, перевірка довжини тексту, генерація QR-кодів, підбір кольорів та перевірка читабельності.',
  },
  {
    question: 'Чи працюють інструменти на мобільному пристрої?',
    answer: "Так, але деякі інструменти (конвертер WebP, генератор favicon) краще працюють на комп'ютері, оскільки обробляють більші файли.",
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Безкоштовні інструменти"
        description="Конвертер зображень, генератор favicon, лічильник слів, інструменти для роботи з кольорами та QR-коди. Без реєстрації, без обмежень — усе працює у браузері."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />
        <SectionSteps
          title="Зображення та favicon"
          description="Інструменти для підготовки зображень, графіки та іконок для вебсайтів та соціальних мереж."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Конвертер JPG/PNG у WebP',
              topImageAlt: 'Конвертер JPG/PNG у WebP Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Конвертуйте зображення JPG та PNG у формат <strong>WebP</strong> і зменшіть розмір файлів. Швидше завантаження сторінок.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/uk/instrumenty/konverter-jpg-png-u-webp">
                      Відкрити інструмент
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Редактор зображень',
              topImageAlt: 'Редактор зображень Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Обріжте зображення для соціальних мереж або вебсайту. Оберіть готовий формат або введіть власні розміри — завантажте у PNG, JPG або WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/uk/instrumenty/redaktor-zobrazhen">
                      Відкрити інструмент
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Генератор favicon',
              topImageAlt: 'Генератор favicon Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Створіть <strong>favicon.ico</strong> та PNG-іконки 180x180, 192x192 та 512x512 з одного зображення — відповідно до вимог браузерів та Lighthouse.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/uk/instrumenty/bezkoshtovnyi-generator-favicon">
                      Відкрити інструмент
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Текст та SEO"
          description="Інструменти для перевірки довжини тексту, мета-тегів та візуалізації сторінки у результатах пошуку."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Перевірка мета-заголовка та опису',
              topImageAlt: 'Перевірка мета-заголовка та опису Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Перевірте кількість символів та слів, а також ширину у пікселях — з попереднім переглядом Google. Уникайте обрізаних заголовків та описів у результатах пошуку.</p>
                  <div className="mt-4">
                    <Button arrow link="/uk/instrumenty/perevirka-meta-zaholovka-ta-opysu">
                      Відкрити інструмент
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Лічильник слів та символів',
              topImageAlt: 'Лічильник слів та символів Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Перевірте довжину тексту та оцініть, чи відповідає він головній сторінці, сторінці послуги, статті блогу чи опису продукту. Рахує слова, символи, абзаци та час читання.</p>
                  <div className="mt-4">
                    <Button arrow link="/uk/instrumenty/lichylnyk-sliv-i-symvoliv">
                      Відкрити інструмент
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Електронна пошта та комунікація"
          description="Інструменти для професійної email-комунікації та єдиної візуальної ідентичності."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Генератор підпису електронної пошти',
              topImageAlt: 'Генератор підпису електронної пошти Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Створіть професійний підпис електронної пошти за кілька хвилин. Введіть дані, оберіть кольори та скопіюйте готовий HTML-код у Gmail, Outlook або інший клієнт.</p>
                  <div className="mt-4">
                    <Button arrow link="/uk/instrumenty/bezkoshtovnyi-generator-pidpysu-email">
                      Відкрити інструмент
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="QR-коди"
          description="Генератор QR-кодів для вебсайтів, візиток, меню та друкованих матеріалів."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Безкоштовний генератор QR-коду',
              topImageAlt: 'Генератор QR-коду Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Створіть QR-код для вебсайту, vCard візитки, меню ресторану або листівки. Експорт у PNG та SVG — без реєстрації, без обмежень.</p>
                  <div className="mt-4">
                    <Button arrow link="/uk/instrumenty/bezkoshtovnyi-generator-qr-kodu">
                      Відкрити інструмент
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Кольори та доступність"
          description="Інструменти для роботи з кольорами, контрастом та доступністю згідно з WCAG."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Перевірка контрасту кольорів',
              topImageAlt: 'Перевірка контрасту кольорів Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Перевірте, чи читається текст на обраному фоні. Введіть коди кольорів, перевірте коефіцієнт контрасту за стандартом <strong>WCAG</strong> та використовуйте функцію{' '}
                    <strong>Match</strong> для автоматичної корекції.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/uk/instrumenty/perevirka-kontrastu-koloriv">
                      Відкрити інструмент
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Екстрактор кольорів із зображення',
              topImageAlt: 'Екстрактор кольорів із зображення Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Завантажте фото або логотип — інструмент виділить домінуючі кольори. Скопіюйте HEX-коди одним кліком та використовуйте будь-де.</p>
                  <div className="mt-4">
                    <Button arrow link="/uk/instrumenty/ekstraktor-koloriv-z-zobrazhennia">
                      Відкрити інструмент
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Генератор колірних палітр',
              topImageAlt: 'Генератор колірних палітр Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Оберіть базовий колір та створіть 9 колірних палітр: монохромну, комплементарну, тріадну, пастельну, темну та інші. Скопіюйте HEX-коди одним кліком.</p>
                  <div className="mt-4">
                    <Button arrow link="/uk/instrumenty/generator-kolirnykh-palitr">
                      Відкрити інструмент
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap variant="line" />
        <SectionInfo title="Що таке інструменти Arteon?">
          <p className="mb-4">
            10 безкоштовних інструментів для підготовки матеріалів для вебсайтів, соціальних мереж та друку — конвертер WebP, генератор favicon, лічильник слів, екстрактор кольорів, генератор палітр
            та QR-коди.
          </p>
          <p>Усі інструменти працюють у браузері — файли ніколи не надсилаються на сервер. Користуйтеся без реєстрації та без обмежень.</p>
        </SectionInfo>
        <Gap variant="line" />
        <SectionSteps
          title="Чому варто використовувати інструменти Arteon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Повна конфіденційність',
              description: 'Усі інструменти обробляють файли локально у браузері. Нічого не надсилається на сервер — дані зникають, коли ви закриваєте вкладку.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Без обмежень',
              description: 'Користуйтеся без обмежень — без денного ліміту, без ліміту файлів, без ліміту конвертацій. Скільки завгодно разів.',
            },
            { icon: <RiLockLine className="h-6 w-6" />, title: 'Без реєстрації', description: 'Обліковий запис не потрібен. Відкрийте інструмент, скористайтеся ним, готово.' },
            { icon: <RiGlobalLine className="h-6 w-6" />, title: 'Українською мовою', description: 'Усі інструменти доступні українською — інтерфейс, інструкції та повідомлення.' },
          ]}
        />
        <Gap variant="line" />
        <FaqPanels items={faqItems} title="Часті запитання про наші інструменти" />
        <Gap size="sm" />
      </Wrapper>
      <Script id="ld-json-tools-uk" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
