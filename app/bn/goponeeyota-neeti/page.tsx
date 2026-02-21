import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'bn' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/bn/goponeeyota-neeti'),
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
          <h1>গোপনীয়তা নীতি</h1>
          <p className="mt-2 text-sm opacity-70">
            সর্বশেষ আপডেট: <strong>13.02.2026</strong>
          </p>
          <Gap size="xs" />
          <SectionInfo title="1. ডেটা নিয়ন্ত্রক">
            <p>ব্যক্তিগত ডেটার নিয়ন্ত্রক হলো Arteon, যার নিবন্ধিত অফিস Czernich&oacute;w, Zagacie, ul. Jasminowa 36, 32-070, পোল্যান্ডে।</p>
            <p>
              NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              যোগাযোগ: <strong>kontakt@arteonagency.pl</strong>, ফোন: <strong>+48 516 466 255</strong>।
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="2. সংগৃহীত ডেটার পরিধি">
            <ul className="list-disc space-y-1 pl-6">
              <li>যোগাযোগ ফর্ম থেকে ডেটা (নাম, উপাধি, ইমেইল, বার্তা),</li>
              <li>স্বয়ংক্রিয়ভাবে সংগৃহীত প্রযুক্তিগত ডেটা (IP, ডিভাইস ডেটা, কুকিজ),</li>
              <li>Google Analytics 4, Ahrefs, Vercel Analytics ও Vercel Speed Insights থেকে অ্যানালিটিক্স ডেটা,</li>
              <li>Metricool থেকে অ্যানালিটিক্স ডেটা,</li>
              <li>Google AdSense দ্বারা বিজ্ঞাপন প্রদর্শনের জন্য সংগৃহীত ডেটা,</li>
              <li>সার্ভার লগ ও নিরাপত্তা ঘটনা।</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="3. উদ্দেশ্য ও আইনি ভিত্তি">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>গ্রাহক যোগাযোগ</strong> — অনুসন্ধান পরিচালনা (অনুচ্ছেদ 6(1)(b) ও (f) GDPR)।
              </li>
              <li>
                <strong>মার্কেটিং ও অ্যানালিটিক্স</strong> — পরিসংখ্যান, অপ্টিমাইজেশন (অনুচ্ছেদ 6(1)(f) GDPR)।
              </li>
              <li>
                <strong>সেবা প্রদান</strong> — চুক্তি সম্পাদন, চালান (অনুচ্ছেদ 6(1)(b) GDPR)।
              </li>
              <li>
                <strong>আইনি বাধ্যবাধকতা</strong> — চালান (অনুচ্ছেদ 6(1)(c) GDPR)।
              </li>
              <li>
                <strong>নিরাপত্তা</strong> — লগ, অপব্যবহার প্রতিরোধ (অনুচ্ছেদ 6(1)(f) GDPR)।
              </li>
              <li>
                <strong>বিজ্ঞাপন প্রদর্শন</strong> — Google AdSense এর মাধ্যমে (অনুচ্ছেদ 6(1)(a) GDPR — সম্মতি)।
              </li>
            </ol>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="4. কুকিজ">
            <p>এই ওয়েবসাইট কুকিজ ব্যবহার করে:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>সঠিক কার্যকারিতার জন্য,</li>
              <li>ট্র্যাফিক অ্যানালিটিক্স (Google Analytics 4, Ahrefs, Vercel Analytics, Metricool),</li>
              <li>মার্কেটিং উদ্দেশ্যে,</li>
              <li>বিজ্ঞাপন প্রদর্শন (Google AdSense / DoubleClick)।</li>
            </ul>
            <p>
              আপনি{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                Google Ads সেটিংস
              </a>{' '}
              বা{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>{' '}
              তে ব্যক্তিগতকৃত বিজ্ঞাপন বন্ধ করতে পারেন।
            </p>
            <p>এই ওয়েবসাইট Google Consent Mode v2 ব্যবহার করে।</p>
            <p>আপনি ব্রাউজার সেটিংসে কুকিজ পরিচালনা করতে পারেন।</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="5. ডেটা প্রাপক">
            <ul className="list-disc space-y-1 pl-6">
              <li>হোস্টিং প্রদানকারী (Vercel),</li>
              <li>অ্যানালিটিক্স প্রদানকারী (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>বিজ্ঞাপন প্রদানকারী (Google Ireland Ltd. — Google AdSense),</li>
              <li>নিরীক্ষক, পেমেন্ট প্রসেসর বা আইনি পরামর্শদাতা — প্রয়োজনে।</li>
            </ul>
            <p>সকল প্রাপক GDPR অনুযায়ী ডেটা প্রসেস করে।</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="6. ডেটা প্রসেসিং চুক্তি (DPA)">
            <p>অনুরোধে, গ্রাহকের জন্য ডেটা প্রসেস করার সময় আমরা ডেটা প্রসেসিং চুক্তি (DPA) সম্পাদন করি।</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="7. EEA এর বাইরে স্থানান্তর">
            <p>Google ও Vercel EEA এর বাইরে ডেটা প্রসেস করতে পারে। আমরা যথাযথ আইনি প্রক্রিয়া ব্যবহার করি।</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="8. সংরক্ষণ সময়কাল">
            <ul className="list-disc space-y-1 pl-6">
              <li>যোগাযোগ ফর্ম — 12 মাস পর্যন্ত।</li>
              <li>গ্রাহক ডেটা — আইন অনুযায়ী।</li>
              <li>অ্যানালিটিক্স — Google Analytics সেটিংস অনুযায়ী (যেমন 26 মাস)।</li>
              <li>লগ — 12 মাস পর্যন্ত।</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="9. আপনার অধিকার">
            <p>আপনার নিম্নলিখিত অধিকার রয়েছে:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>আপনার ডেটায় প্রবেশাধিকার,</li>
              <li>সংশোধন,</li>
              <li>মুছে ফেলা,</li>
              <li>প্রসেসিং সীমিতকরণ,</li>
              <li>পোর্টেবিলিটি,</li>
              <li>আপত্তি (মার্কেটিংসহ),</li>
              <li>সক্ষম কর্তৃপক্ষে (পোল্যান্ডে: UODO) অভিযোগ দাখিল।</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="10. স্বেচ্ছাকৃততা">
            <p>ব্যক্তিগত ডেটা প্রদান স্বেচ্ছামূলক কিন্তু যোগাযোগ বা সেবা পেতে প্রয়োজনীয়।</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="11. নিরাপত্তা ব্যবস্থা">
            <p>আমরা ব্যক্তিগত ডেটা সুরক্ষার জন্য প্রযুক্তিগত ও সাংগঠনিক ব্যবস্থা প্রয়োগ করি।</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="12. নীতি পরিবর্তন">
            <p>এই গোপনীয়তা নীতি সংশোধন করা যেতে পারে। সর্বশেষ আপডেট সবসময় এই পেজে পাওয়া যাবে।</p>
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
