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
  title: 'Безплатни инструменти | Изображения, SEO, цветове, favicon',
  description: '10 безплатни инструмента: WebP конвертор, генератор на favicon, брояч на думи, извличане на цветове и QR кодове. За уебсайтове и социални мрежи.',
  alternates: getToolsIndexAlternates('bg'),
  openGraph: {
    title: 'Безплатни инструменти | Изображения, SEO, цветове, favicon',
    description: '10 безплатни инструмента: WebP конвертор, генератор на favicon, брояч на думи, извличане на цветове и QR кодове. За уебсайтове и социални мрежи.',
    url: toAbsoluteUrl('/bg/instrumenti'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Безплатни инструменти',
  description: '10 безплатни инструмента за уебсайтове, социални мрежи и печат.',
  url: toAbsoluteUrl('/bg/instrumenti'),
  inLanguage: 'bg',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Оптимизация на изображения' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Цветове и брандинг' },
    { '@type': 'Thing', name: 'Генератори' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Конвертор JPG/PNG в WebP',
        url: toAbsoluteUrl('/bg/instrumenti/konvertor-jpg-png-v-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Редактор на изображения',
        url: toAbsoluteUrl('/bg/instrumenti/redaktor-na-izobrazhenia'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Генератор на favicon',
        url: toAbsoluteUrl('/bg/instrumenti/bezplaten-generator-na-favicon'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Проверка на meta заглавие и описание',
        url: toAbsoluteUrl('/bg/instrumenti/proverka-na-meta-zaglavie-i-opisanie'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Брояч на думи и символи',
        url: toAbsoluteUrl('/bg/instrumenti/broiach-na-dumi-i-simvoli'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Генератор на подпис за email',
        url: toAbsoluteUrl('/bg/instrumenti/bezplaten-generator-na-podpis-za-email'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Проверка на контраст на цветове',
        url: toAbsoluteUrl('/bg/instrumenti/proverka-na-kontrast-na-tsvetove'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Екстрактор на цветове от изображение',
        url: toAbsoluteUrl('/bg/instrumenti/ekstraktor-na-tsvetove-ot-izobrazhenie'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Генератор на цветови палитри',
        url: toAbsoluteUrl('/bg/instrumenti/generator-na-tsvetovi-palitri'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Безплатен генератор на QR код',
        url: toAbsoluteUrl('/bg/instrumenti/bezplaten-generator-na-qr-kod'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Колко струват инструментите?', answer: 'Нищо. Всички инструменти са напълно безплатни, без абонаменти и скрити такси.' },
  { question: 'Файловете ми изпращат ли се на сървър?', answer: 'Не. Всички инструменти работят директно в браузъра. Файловете никога не напускат устройството ви и не се съхраняват никъде.' },
  { question: 'Нужен ли ми е акаунт?', answer: 'Не. Можете да използвате инструментите веднага без вход или регистрация.' },
  { question: 'Има ли ограничения за използване?', answer: 'Не. Използвайте без ограничения – без дневен лимит, без лимит на файлове, без лимит на конверсии.' },
  {
    question: 'За какво служат инструментите?',
    answer:
      'Помагат за подготовката на материали за уебсайтове, социални мрежи и печат: оптимизиране на изображения, създаване на favicon, проверка на дължината на текст, генериране на QR кодове, избор на цветове и проверка на четливост.',
  },
  {
    question: 'Инструментите работят ли на мобилно устройство?',
    answer: 'Да, но някои инструменти (WebP конвертор, генератор на favicon) работят по-добре на компютър, тъй като обработват по-големи файлове.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Безплатни инструменти"
        description="Конвертор на изображения, генератор на favicon, брояч на думи, цветови инструменти и QR кодове. Без регистрация, без ограничения – всичко работи в браузъра."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />
        <SectionSteps
          title="Изображения и favicon"
          description="Инструменти за подготовка на изображения, графики и икони за уебсайтове и социални мрежи."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Конвертор JPG/PNG в WebP',
              topImageAlt: 'Конвертор JPG/PNG в WebP Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Конвертирайте JPG и PNG изображения във формат <strong>WebP</strong> и намалете размера на файловете. По-бързо зареждане на страниците.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/bg/instrumenti/konvertor-jpg-png-v-webp">
                      Отвори инструмент
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Редактор на изображения',
              topImageAlt: 'Редактор на изображения Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Изрежете изображението за социални мрежи или уебсайт. Изберете предварително зададен формат или въведете персонализирани размери – изтеглете в PNG, JPG или WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/bg/instrumenti/redaktor-na-izobrazhenia">
                      Отвори инструмент
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Генератор на favicon',
              topImageAlt: 'Генератор на favicon Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Създайте <strong>favicon.ico</strong> и PNG икони 180x180, 192x192 и 512x512 от едно изображение – в съответствие с изискванията на браузърите и Lighthouse.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/bg/instrumenti/bezplaten-generator-na-favicon">
                      Отвори инструмент
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Текст и SEO"
          description="Инструменти за проверка на дължината на текст, мета тагове и визуализация на страница в резултатите от търсене."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Проверка на meta заглавие и описание',
              topImageAlt: 'Проверка на meta заглавие и описание Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Проверете броя на символите и думите, както и ширината в пиксели – с Google визуализация. Избегнете отрязани заглавия и описания в резултатите от търсене.</p>
                  <div className="mt-4">
                    <Button arrow link="/bg/instrumenti/proverka-na-meta-zaglavie-i-opisanie">
                      Отвори инструмент
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Брояч на думи и символи',
              topImageAlt: 'Брояч на думи и символи Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Проверете дължината на текста и оценете дали е подходящ за начална страница, страница с услуги, статия в блог или описание на продукт. Брои думи, символи, параграфи и време за
                    четене.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/bg/instrumenti/broiach-na-dumi-i-simvoli">
                      Отвори инструмент
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Имейл и комуникация"
          description="Инструменти за професионална имейл комуникация и единна визуална идентичност."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Генератор на подпис за email',
              topImageAlt: 'Генератор на подпис за email Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Създайте професионален подпис за email за няколко минути. Въведете данните си, изберете цветове и копирайте готовия HTML код в Gmail, Outlook или друг клиент.</p>
                  <div className="mt-4">
                    <Button arrow link="/bg/instrumenti/bezplaten-generator-na-podpis-za-email">
                      Отвори инструмент
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="QR кодове"
          description="Генератор на QR кодове за уебсайтове, визитки, менюта и печатни материали."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Безплатен генератор на QR код',
              topImageAlt: 'Генератор на QR код Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Създайте QR код за уебсайт, vCard визитка, меню на ресторант или листовка. Експорт в PNG и SVG – без регистрация, без ограничения.</p>
                  <div className="mt-4">
                    <Button arrow link="/bg/instrumenti/bezplaten-generator-na-qr-kod">
                      Отвори инструмент
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Цветове и достъпност"
          description="Инструменти за работа с цветове, контраст и достъпност по WCAG."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Проверка на контраст на цветове',
              topImageAlt: 'Проверка на контраст на цветове Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Проверете дали цветовете на текста и фона са четливи. Въведете цветови кодове, проверете съотношението на контраста по стандарта <strong>WCAG</strong> и използвайте функцията{' '}
                    <strong>Match</strong> за автоматична корекция.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/bg/instrumenti/proverka-na-kontrast-na-tsvetove">
                      Отвори инструмент
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Екстрактор на цветове от изображение',
              topImageAlt: 'Екстрактор на цветове от изображение Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Качете снимка или лого – инструментът ще извлече доминиращите цветове. Копирайте HEX кодове с едно кликване и ги използвайте навсякъде.</p>
                  <div className="mt-4">
                    <Button arrow link="/bg/instrumenti/ekstraktor-na-tsvetove-ot-izobrazhenie">
                      Отвори инструмент
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Генератор на цветови палитри',
              topImageAlt: 'Генератор на цветови палитри Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Изберете основен цвят и създайте 9 цветови палитри: монохроматична, допълваща, триадична, пастелна, тъмна и други. Копирайте HEX кодове с едно кликване.</p>
                  <div className="mt-4">
                    <Button arrow link="/bg/instrumenti/generator-na-tsvetovi-palitri">
                      Отвори инструмент
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap variant="line" />
        <SectionInfo title="Какво представляват инструментите на Arteon?">
          <p className="mb-4">
            10 безплатни инструмента за подготовка на материали за уебсайтове, социални мрежи и печат – WebP конвертор, генератор на favicon, брояч на думи, извличане на цветове, генератор на палитри
            и QR кодове.
          </p>
          <p>Всички инструменти работят в браузъра – файловете никога не се изпращат на сървър. Използвайте без регистрация и без ограничения.</p>
        </SectionInfo>
        <Gap variant="line" />
        <SectionSteps
          title="Защо да използвате инструментите на Arteon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Пълна поверителност',
              description: 'Всички инструменти обработват файлове локално в браузъра. Нищо не се изпраща на сървър – данните изчезват, когато затворите раздела.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Без ограничения',
              description: 'Използвайте без ограничения – без дневен лимит, без лимит на файлове, без лимит на конверсии. Колкото пъти е необходимо.',
            },
            { icon: <RiLockLine className="h-6 w-6" />, title: 'Без регистрация', description: 'Акаунт не е необходим. Отворете инструмента, използвайте го, готово.' },
            { icon: <RiGlobalLine className="h-6 w-6" />, title: 'На български', description: 'Всички инструменти са налични на български – интерфейс, инструкции и известия.' },
          ]}
        />
        <Gap variant="line" />
        <FaqPanels items={faqItems} title="Често задавани въпроси за нашите инструменти" />
        <Gap size="sm" />
      </Wrapper>
      <Script id="ld-json-tools-bg" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
