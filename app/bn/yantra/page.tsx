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
  title: 'বিনামূল্যে টুল | ছবি, SEO, রং, favicon',
  description: '১০টি বিনামূল্যে টুল: WebP কনভার্টার, favicon জেনারেটর, শব্দ গণনাকারী, কালার টুল ও QR কোড। ওয়েবসাইট ও সোশ্যাল মিডিয়ার জন্য।',
  alternates: getToolsIndexAlternates('bn'),
  openGraph: {
    title: 'বিনামূল্যে টুল | ছবি, SEO, রং, favicon',
    description: '১০টি বিনামূল্যে টুল: WebP কনভার্টার, favicon জেনারেটর, শব্দ গণনাকারী, কালার টুল ও QR কোড।',
    url: toAbsoluteUrl('/bn/yantra'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'বিনামূল্যে টুল',
  description: 'ওয়েবসাইট, সোশ্যাল মিডিয়া ও প্রিন্টের জন্য ১০টি বিনামূল্যে টুল।',
  url: toAbsoluteUrl('/bn/yantra'),
  inLanguage: 'bn',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'ছবি প্রসেসিং' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'রং ও প্যালেট' },
    { '@type': 'Thing', name: 'জেনারেটর' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'JPG/PNG থেকে WebP কনভার্টার',
        url: toAbsoluteUrl('/bn/yantra/jpg-png-theke-webp-rupantor'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'ছবি সম্পাদক',
        url: toAbsoluteUrl('/bn/yantra/chhobi-sompadok'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'ফেভিকন জেনারেটর',
        url: toAbsoluteUrl('/bn/yantra/favicon-toyri'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'মেটা টাইটেল ও বর্ণনা পরীক্ষক',
        url: toAbsoluteUrl('/bn/yantra/meta-shirshonam-pariksha'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'শব্দ ও অক্ষর গণনাকারী',
        url: toAbsoluteUrl('/bn/yantra/shobdo-gonok'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'ইমেইল স্বাক্ষর জেনারেটর',
        url: toAbsoluteUrl('/bn/yantra/email-shakkhor-toyri'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'রং কনট্রাস্ট পরীক্ষক',
        url: toAbsoluteUrl('/bn/yantra/rong-boiporitto-pariksha'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'ছবি থেকে রং এক্সট্র্যাক্টর',
        url: toAbsoluteUrl('/bn/yantra/chhobi-theke-rong-ber-korun'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'কালার প্যালেট জেনারেটর',
        url: toAbsoluteUrl('/bn/yantra/rong-palette-toyri'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'QR কোড জেনারেটর',
        url: toAbsoluteUrl('/bn/yantra/qr-code-toyri'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  {
    question: 'এই টুলগুলো কি বিনামূল্যে?',
    answer: 'হ্যাঁ, সবগুলো ১০টি টুল সম্পূর্ণ বিনামূল্যে। কোনো মাসিক ফি নেই, কোনো লুকানো খরচ নেই।',
  },
  {
    question: 'আমার ফাইল কি সার্ভারে পাঠানো হয়?',
    answer: 'না। সব টুল ব্রাউজারে কাজ করে। ফাইল আপনার ডিভাইস থেকে বাইরে যায় না, কোথাও সংরক্ষিত হয় না।',
  },
  {
    question: 'অ্যাকাউন্ট তৈরি করা কি প্রয়োজন?',
    answer: 'না। আপনি লগইন বা রেজিস্ট্রেশন ছাড়াই তৎক্ষণাৎ টুল ব্যবহার করতে পারেন।',
  },
  {
    question: 'ব্যবহারের কোনো সীমা আছে?',
    answer: 'না। কোনো সীমা ছাড়াই ব্যবহার করুন — কোনো দৈনিক সীমা নেই, কোনো ফাইল সীমা নেই, কোনো রূপান্তর সীমা নেই।',
  },
  {
    question: 'এই টুলগুলো কী করে?',
    answer: 'এগুলো ওয়েবসাইট, সোশ্যাল মিডিয়া ও প্রিন্টের জন্য উপকরণ তৈরিতে সাহায্য করে: ছবি সম্পাদনা, favicon তৈরি, টেক্সট দৈর্ঘ্য পরীক্ষা, QR কোড তৈরি, রং নির্বাচন ও কনট্রাস্ট পরীক্ষা।',
  },
  {
    question: 'এই টুলগুলো কি মোবাইলে কাজ করে?',
    answer: 'হ্যাঁ, তবে কিছু টুল (WebP কনভার্টার, favicon জেনারেটর) কম্পিউটারে ভালো কাজ করে কারণ এগুলো বড় ফাইল প্রসেস করে।',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="বিনামূল্যে টুল"
        description="ছবি রূপান্তর, favicon জেনারেটর, শব্দ গণনাকারী, কালার টুল ও QR কোড। রেজিস্ট্রেশন ছাড়া, সীমা ছাড়া — সব কিছু ব্রাউজারে কাজ করে।"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />
        <SectionSteps
          title="ছবি ও favicon"
          description="ওয়েবসাইট ও সোশ্যাল মিডিয়ার জন্য ছবি, ফটো ও আইকন পরিচালনার টুল।"
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'JPG/PNG থেকে WebP কনভার্টার',
              topImageAlt: 'JPG/PNG থেকে WebP কনভার্টার Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    JPG ও PNG ছবি <strong>WebP</strong> ফরম্যাটে রূপান্তর করে ফাইল সাইজ কমান। পেজ দ্রুত লোড হবে।
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/bn/yantra/jpg-png-theke-webp-rupantor">
                      টুল খুলুন
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'ছবি সম্পাদক',
              topImageAlt: 'ছবি সম্পাদক Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>সোশ্যাল মিডিয়া বা ওয়েবসাইটের জন্য ফটো ক্রপ করুন। প্রিসেট ফরম্যাট বেছে নিন বা কাস্টম মাপ দিন — PNG, JPG বা WebP তে ডাউনলোড করুন।</p>
                  <div className="mt-4">
                    <Button arrow link="/bn/yantra/chhobi-sompadok">
                      টুল খুলুন
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'ফেভিকন জেনারেটর',
              topImageAlt: 'ফেভিকন জেনারেটর Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    একটি ছবি থেকে <strong>favicon.ico</strong> ও PNG আইকন 180x180, 192x192 ও 512x512 তৈরি করুন — ব্রাউজার ও Lighthouse এর প্রয়োজনীয়তা অনুযায়ী।
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/bn/yantra/favicon-toyri">
                      টুল খুলুন
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="টেক্সট ও SEO"
          description="টেক্সট দৈর্ঘ্য, মেটা ট্যাগ পরীক্ষা ও সার্চ রেজাল্টে পেজ প্রিভিউ দেখার টুল।"
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'মেটা টাইটেল ও বর্ণনা পরীক্ষক',
              topImageAlt: 'মেটা টাইটেল পরীক্ষক Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>অক্ষর, শব্দ সংখ্যা ও পিক্সেল প্রস্থ পরীক্ষা করুন — Google প্রিভিউসহ। কাটা স্নিপেট এড়িয়ে চলুন।</p>
                  <div className="mt-4">
                    <Button arrow link="/bn/yantra/meta-shirshonam-pariksha">
                      টুল খুলুন
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'শব্দ ও অক্ষর গণনাকারী',
              topImageAlt: 'শব্দ গণনাকারী Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>টেক্সটের দৈর্ঘ্য পরীক্ষা করুন এবং মূল্যায়ন করুন হোম পেজ, সার্ভিস পেজ, ব্লগ পোস্ট বা পণ্যের বর্ণনার জন্য উপযুক্ত কি না। শব্দ, অক্ষর, অনুচ্ছেদ ও পড়ার সময় গণনা করুন।</p>
                  <div className="mt-4">
                    <Button arrow link="/bn/yantra/shobdo-gonok">
                      টুল খুলুন
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="ইমেইল ও যোগাযোগ"
          description="পেশাদার ইমেইল যোগাযোগ ও ব্র্যান্ড পরিচয়ের টুল।"
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'ইমেইল স্বাক্ষর জেনারেটর',
              topImageAlt: 'ইমেইল স্বাক্ষর জেনারেটর Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>কয়েক মিনিটে পেশাদার ইমেইল স্বাক্ষর তৈরি করুন। আপনার ডেটা দিন, রং বেছে নিন এবং তৈরি HTML কোড Gmail, Outlook বা অন্য অ্যাপে পেস্ট করুন।</p>
                  <div className="mt-4">
                    <Button arrow link="/bn/yantra/email-shakkhor-toyri">
                      টুল খুলুন
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="QR কোড"
          description="ওয়েবসাইট, বিজনেস কার্ড, মেনু ও ফ্লায়ারের জন্য QR কোড জেনারেটর।"
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'QR কোড জেনারেটর',
              topImageAlt: 'QR কোড জেনারেটর Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>ওয়েবসাইট, vCard, রেস্টুরেন্ট মেনু বা ফ্লায়ারের জন্য QR কোড তৈরি করুন। PNG ও SVG তে এক্সপোর্ট — রেজিস্ট্রেশন ছাড়া, সীমা ছাড়া।</p>
                  <div className="mt-4">
                    <Button arrow link="/bn/yantra/qr-code-toyri">
                      টুল খুলুন
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="রং ও অ্যাক্সেসিবিলিটি"
          description="রং, কনট্রাস্ট ও WCAG অ্যাক্সেসিবিলিটি নিয়ে কাজ করার টুল।"
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'রং কনট্রাস্ট পরীক্ষক',
              topImageAlt: 'রং কনট্রাস্ট পরীক্ষক Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    টেক্সট ও ব্যাকগ্রাউন্ড রং পাঠযোগ্য কি না পরীক্ষা করুন। কালার কোড দিন, <strong>WCAG</strong> অনুযায়ী কনট্রাস্ট অনুপাত দেখুন এবং স্বয়ংক্রিয় সংশোধনের জন্য <strong>Match</strong>{' '}
                    ফাংশন ব্যবহার করুন।
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/bn/yantra/rong-boiporitto-pariksha">
                      টুল খুলুন
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'ছবি থেকে রং এক্সট্র্যাক্টর',
              topImageAlt: 'কালার এক্সট্র্যাক্টর Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>ফটো বা লোগো আপলোড করুন — টুলটি প্রধান রংগুলো বের করবে। এক ক্লিকে HEX কোড কপি করুন এবং যেকোনো জায়গায় ব্যবহার করুন।</p>
                  <div className="mt-4">
                    <Button arrow link="/bn/yantra/chhobi-theke-rong-ber-korun">
                      টুল খুলুন
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'কালার প্যালেট জেনারেটর',
              topImageAlt: 'কালার প্যালেট জেনারেটর Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>একটি বেস রং বেছে নিন এবং ৯টি প্যালেট তৈরি করুন: monochromatic, complementary, triadic, analogous ও আরও। এক ক্লিকে HEX কোড কপি করুন।</p>
                  <div className="mt-4">
                    <Button arrow link="/bn/yantra/rong-palette-toyri">
                      টুল খুলুন
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap variant="line" />
        <SectionInfo title="Arteon টুল কী?">
          <p className="mb-4">ওয়েবসাইট, সোশ্যাল মিডিয়া ও প্রিন্টের জন্য উপকরণ তৈরির ১০টি বিনামূল্যে টুল — WebP রূপান্তর, favicon তৈরি, শব্দ গণনা, রং এক্সট্র্যাকশন, প্যালেট তৈরি ও QR কোড।</p>
          <p>সব টুল ব্রাউজারে কাজ করে — ফাইল সার্ভারে পাঠানো হয় না। রেজিস্ট্রেশন ছাড়া ও সীমা ছাড়া ব্যবহার করুন।</p>
        </SectionInfo>
        <Gap variant="line" />
        <SectionSteps
          title="Arteon টুল কেন বেছে নেবেন?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'সম্পূর্ণ গোপনীয়তা',
              description: 'সব টুল ব্রাউজারে ব্যক্তিগতভাবে ফাইল প্রসেস করে। সার্ভারে কিছু পাঠানো হয় না — ট্যাব বন্ধ করলে ডেটা মুছে যায়।',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'কোনো ব্যবহার সীমা নেই',
              description: 'কোনো সীমা ছাড়াই ব্যবহার করুন — কোনো দৈনিক সীমা নেই, কোনো ফাইল সীমা নেই, কোনো রূপান্তর সীমা নেই। যখন চান তখন।',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'রেজিস্ট্রেশন লাগে না',
              description: 'কোনো অ্যাকাউন্ট দরকার নেই। টুল খুলুন, ব্যবহার করুন, ব্যস।',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'বাংলায় উপলব্ধ',
              description: 'সব টুল বাংলায় পাওয়া যায় — ইন্টারফেস, নির্দেশনা ও বিজ্ঞপ্তি।',
            },
          ]}
        />
        <Gap variant="line" />
        <FaqPanels items={faqItems} title="আমাদের টুল সম্পর্কে প্রায়শই জিজ্ঞাসিত প্রশ্ন" />
        <Gap size="sm" />
      </Wrapper>
      <Script id="ld-json-tools-bn" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
