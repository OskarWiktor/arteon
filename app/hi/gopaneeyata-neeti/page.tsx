import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'hi' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/hi/gopaneeyata-neeti'),
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
          <h1>गोपनीयता नीति</h1>
          <p className="mt-2 text-sm opacity-70">
            अंतिम अपडेट: <strong>13.02.2026</strong>
          </p>
          <Gap size="xs" />
          <SectionInfo title="1. डेटा नियंत्रक">
            <p>व्यक्तिगत डेटा का नियंत्रक Arteon है, जिसका पंजीकृत कार्यालय Czernich&oacute;w, Zagacie, ul. Jasminowa 36, 32-070, पोलैंड में है।</p>
            <p>
              NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              संपर्क: <strong>kontakt@arteonagency.pl</strong>, फ़ोन: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="2. एकत्रित डेटा का दायरा">
            <ul className="list-disc space-y-1 pl-6">
              <li>संपर्क फ़ॉर्म से डेटा (नाम, उपनाम, ईमेल, संदेश),</li>
              <li>स्वचालित रूप से एकत्रित तकनीकी डेटा (IP, डिवाइस डेटा, कुकीज़),</li>
              <li>Google Analytics 4, Ahrefs, Vercel Analytics और Vercel Speed Insights से एनालिटिक्स डेटा,</li>
              <li>Metricool से एनालिटिक्स डेटा,</li>
              <li>Google AdSense द्वारा विज्ञापन प्रदर्शन के लिए एकत्रित डेटा,</li>
              <li>सर्वर लॉग और सुरक्षा घटनाएँ।</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="3. उद्देश्य और कानूनी आधार">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>ग्राहक संपर्क</strong> — पूछताछ संभालना (अनुच्छेद 6(1)(b) और (f) GDPR)।
              </li>
              <li>
                <strong>मार्केटिंग और एनालिटिक्स</strong> — आँकड़े, अनुकूलन (अनुच्छेद 6(1)(f) GDPR)।
              </li>
              <li>
                <strong>सेवा प्रदान</strong> — अनुबंध निष्पादन, चालान (अनुच्छेद 6(1)(b) GDPR)।
              </li>
              <li>
                <strong>कानूनी दायित्व</strong> — चालान (अनुच्छेद 6(1)(c) GDPR)।
              </li>
              <li>
                <strong>सुरक्षा</strong> — लॉग, दुरुपयोग रोकथाम (अनुच्छेद 6(1)(f) GDPR)।
              </li>
              <li>
                <strong>विज्ञापन प्रदर्शन</strong> — Google AdSense के माध्यम से (अनुच्छेद 6(1)(a) GDPR — सहमति)।
              </li>
            </ol>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="4. कुकीज़">
            <p>यह वेबसाइट कुकीज़ का उपयोग करती है:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>उचित कार्यप्रणाली के लिए,</li>
              <li>ट्रैफ़िक एनालिटिक्स (Google Analytics 4, Ahrefs, Vercel Analytics, Metricool),</li>
              <li>मार्केटिंग उद्देश्यों के लिए,</li>
              <li>विज्ञापन प्रदर्शन (Google AdSense / DoubleClick)।</li>
            </ul>
            <p>
              आप{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                Google Ads सेटिंग्स
              </a>{' '}
              या{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>{' '}
              पर व्यक्तिगत विज्ञापन बंद कर सकते हैं।
            </p>
            <p>यह वेबसाइट Google Consent Mode v2 का उपयोग करती है।</p>
            <p>आप अपने ब्राउज़र सेटिंग्स में कुकीज़ प्रबंधित कर सकते हैं।</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="5. डेटा प्राप्तकर्ता">
            <ul className="list-disc space-y-1 pl-6">
              <li>होस्टिंग प्रदाता (Vercel),</li>
              <li>एनालिटिक्स प्रदाता (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>विज्ञापन प्रदाता (Google Ireland Ltd. — Google AdSense),</li>
              <li>लेखा परीक्षक, भुगतान प्रोसेसर या कानूनी सलाहकार — यदि आवश्यक हो।</li>
            </ul>
            <p>सभी प्राप्तकर्ता GDPR के अनुसार डेटा प्रोसेस करते हैं।</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="6. डेटा प्रोसेसिंग समझौता (DPA)">
            <p>अनुरोध पर, हम ग्राहक के लिए डेटा प्रोसेस करते समय डेटा प्रोसेसिंग समझौता (DPA) निष्पादित करते हैं।</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="7. EEA के बाहर स्थानांतरण">
            <p>Google और Vercel EEA के बाहर डेटा प्रोसेस कर सकते हैं। हम उचित कानूनी तंत्र का उपयोग करते हैं।</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="8. संग्रहण अवधि">
            <ul className="list-disc space-y-1 pl-6">
              <li>संपर्क फ़ॉर्म — 12 महीने तक।</li>
              <li>ग्राहक डेटा — कानून के अनुसार।</li>
              <li>एनालिटिक्स — Google Analytics सेटिंग्स के अनुसार (जैसे 26 महीने)।</li>
              <li>लॉग — 12 महीने तक।</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="9. आपके अधिकार">
            <p>आपके पास निम्नलिखित अधिकार हैं:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>अपने डेटा तक पहुँच,</li>
              <li>सुधार,</li>
              <li>हटाना,</li>
              <li>प्रोसेसिंग सीमित करना,</li>
              <li>पोर्टेबिलिटी,</li>
              <li>आपत्ति (मार्केटिंग सहित),</li>
              <li>सक्षम प्राधिकरण (पोलैंड में: UODO) में शिकायत दर्ज करना।</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="10. स्वैच्छिकता">
            <p>व्यक्तिगत डेटा प्रदान करना स्वैच्छिक है लेकिन संपर्क या सेवा प्राप्त करने के लिए आवश्यक है।</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="11. सुरक्षा उपाय">
            <p>हम व्यक्तिगत डेटा की सुरक्षा के लिए तकनीकी और संगठनात्मक उपाय लागू करते हैं।</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="12. नीति में परिवर्तन">
            <p>इस गोपनीयता नीति को संशोधित किया जा सकता है। नवीनतम अपडेट हमेशा इस पेज पर उपलब्ध है।</p>
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
