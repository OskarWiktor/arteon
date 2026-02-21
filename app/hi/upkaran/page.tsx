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
  title: 'मुफ़्त टूल्स | इमेज, SEO, रंग, favicon',
  description: '10 मुफ़्त टूल्स: WebP कन्वर्टर, favicon जनरेटर, शब्द काउंटर, कलर टूल्स और QR कोड। वेबसाइट और सोशल मीडिया के लिए।',
  alternates: getToolsIndexAlternates('hi'),
  openGraph: {
    title: 'मुफ़्त टूल्स | इमेज, SEO, रंग, favicon',
    description: '10 मुफ़्त टूल्स: WebP कन्वर्टर, favicon जनरेटर, शब्द काउंटर, कलर टूल्स और QR कोड।',
    url: toAbsoluteUrl('/hi/upkaran'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'मुफ़्त टूल्स',
  description: 'वेबसाइट, सोशल मीडिया और प्रिंट के लिए 10 मुफ़्त टूल्स।',
  url: toAbsoluteUrl('/hi/upkaran'),
  inLanguage: 'hi',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'इमेज प्रोसेसिंग' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'रंग और पैलेट' },
    { '@type': 'Thing', name: 'जनरेटर' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'JPG/PNG को WebP में बदलें',
        url: toAbsoluteUrl('/hi/upkaran/jpg-png-se-webp-badlein'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'इमेज एडिटर',
        url: toAbsoluteUrl('/hi/upkaran/chitra-sampadak'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'फ़ेविकॉन जनरेटर',
        url: toAbsoluteUrl('/hi/upkaran/favicon-nirmata'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'मेटा टाइटल और डिस्क्रिप्शन चेकर',
        url: toAbsoluteUrl('/hi/upkaran/meta-sheerashak-jaanch'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'शब्द और कैरेक्टर काउंटर',
        url: toAbsoluteUrl('/hi/upkaran/shabd-ganak'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'ईमेल सिग्नेचर जनरेटर',
        url: toAbsoluteUrl('/hi/upkaran/email-hastakshar-nirmata'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'कलर कंट्रास्ट चेकर',
        url: toAbsoluteUrl('/hi/upkaran/rang-virodh-jaanch'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'इमेज से रंग निकालें',
        url: toAbsoluteUrl('/hi/upkaran/chitra-se-rang-nikaalein'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'रंग पैलेट जनरेटर',
        url: toAbsoluteUrl('/hi/upkaran/rang-palette-nirmata'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'QR कोड जनरेटर',
        url: toAbsoluteUrl('/hi/upkaran/qr-code-nirmata'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  {
    question: 'क्या ये टूल्स मुफ़्त हैं?',
    answer: 'हाँ, सभी 10 टूल्स पूरी तरह मुफ़्त हैं। कोई मासिक शुल्क नहीं, कोई छिपी लागत नहीं।',
  },
  {
    question: 'क्या मेरी फ़ाइलें सर्वर पर भेजी जाती हैं?',
    answer: 'नहीं। सभी टूल्स ब्राउज़र में काम करते हैं। फ़ाइलें आपके डिवाइस से बाहर नहीं जातीं, कहीं स्टोर नहीं होतीं।',
  },
  {
    question: 'क्या अकाउंट बनाना ज़रूरी है?',
    answer: 'नहीं। आप बिना लॉगिन या रजिस्ट्रेशन के तुरंत टूल्स का उपयोग कर सकते हैं।',
  },
  {
    question: 'क्या उपयोग की कोई सीमा है?',
    answer: 'नहीं। बिना किसी सीमा के उपयोग करें — कोई दैनिक सीमा नहीं, कोई फ़ाइल सीमा नहीं, कोई कन्वर्शन सीमा नहीं।',
  },
  {
    question: 'ये टूल्स क्या करते हैं?',
    answer: 'ये वेबसाइट, सोशल मीडिया और प्रिंट के लिए सामग्री तैयार करने में मदद करते हैं: इमेज एडिटिंग, favicon बनाना, टेक्स्ट लंबाई जाँचना, QR कोड बनाना, रंग चुनना और कंट्रास्ट जाँचना।',
  },
  {
    question: 'क्या ये टूल्स मोबाइल पर काम करते हैं?',
    answer: 'हाँ, लेकिन कुछ टूल्स (WebP कन्वर्टर, favicon जनरेटर) कंप्यूटर पर बेहतर काम करते हैं क्योंकि वे बड़ी फ़ाइलों को प्रोसेस करते हैं।',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="मुफ़्त टूल्स"
        description="इमेज कन्वर्शन, favicon जनरेटर, शब्द काउंटर, कलर टूल्स और QR कोड। बिना रजिस्ट्रेशन, बिना सीमा — सब कुछ ब्राउज़र में काम करता है।"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />
        <SectionSteps
          title="इमेज और favicon"
          description="वेबसाइट और सोशल मीडिया के लिए इमेज, फ़ोटो और आइकन प्रबंधित करने के टूल्स।"
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'JPG/PNG को WebP में बदलें',
              topImageAlt: 'JPG/PNG को WebP में बदलें Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    JPG और PNG इमेज को <strong>WebP</strong> फ़ॉर्मेट में बदलें और फ़ाइल साइज़ कम करें। पेज तेज़ी से लोड होंगे।
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/hi/upkaran/jpg-png-se-webp-badlein">
                      टूल खोलें
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'इमेज एडिटर',
              topImageAlt: 'इमेज एडिटर Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>सोशल मीडिया या वेबसाइट के लिए फ़ोटो क्रॉप करें। प्रीसेट फ़ॉर्मेट चुनें या कस्टम आयाम दर्ज करें — PNG, JPG या WebP में डाउनलोड करें।</p>
                  <div className="mt-4">
                    <Button arrow link="/hi/upkaran/chitra-sampadak">
                      टूल खोलें
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'फ़ेविकॉन जनरेटर',
              topImageAlt: 'फ़ेविकॉन जनरेटर Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    एक इमेज से <strong>favicon.ico</strong> और PNG आइकन 180x180, 192x192 और 512x512 बनाएँ — ब्राउज़र और Lighthouse की आवश्यकताओं के अनुसार।
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/hi/upkaran/favicon-nirmata">
                      टूल खोलें
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="टेक्स्ट और SEO"
          description="टेक्स्ट लंबाई, मेटा टैग जाँचने और सर्च रिज़ल्ट में पेज प्रीव्यू देखने के टूल्स।"
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'मेटा टाइटल और डिस्क्रिप्शन चेकर',
              topImageAlt: 'मेटा टाइटल चेकर Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>कैरेक्टर, शब्द गिनती और पिक्सेल चौड़ाई जाँचें — Google प्रीव्यू के साथ। कटे हुए स्निपेट से बचें।</p>
                  <div className="mt-4">
                    <Button arrow link="/hi/upkaran/meta-sheerashak-jaanch">
                      टूल खोलें
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'शब्द और कैरेक्टर काउंटर',
              topImageAlt: 'शब्द काउंटर Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>टेक्स्ट की लंबाई जाँचें और मूल्यांकन करें कि यह होम पेज, सर्विस पेज, ब्लॉग पोस्ट या प्रोडक्ट डिस्क्रिप्शन के लिए उपयुक्त है। शब्द, कैरेक्टर, पैराग्राफ और पढ़ने का समय गिनें।</p>
                  <div className="mt-4">
                    <Button arrow link="/hi/upkaran/shabd-ganak">
                      टूल खोलें
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="ईमेल और संवाद"
          description="प्रोफ़ेशनल ईमेल संवाद और ब्रांड पहचान के टूल्स।"
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'ईमेल सिग्नेचर जनरेटर',
              topImageAlt: 'ईमेल सिग्नेचर जनरेटर Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>कुछ मिनटों में प्रोफ़ेशनल ईमेल सिग्नेचर बनाएँ। अपना डेटा दर्ज करें, रंग चुनें और तैयार HTML कोड Gmail, Outlook या किसी अन्य ऐप में पेस्ट करें।</p>
                  <div className="mt-4">
                    <Button arrow link="/hi/upkaran/email-hastakshar-nirmata">
                      टूल खोलें
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="QR कोड"
          description="वेबसाइट, बिज़नेस कार्ड, मेनू और फ़्लायर के लिए QR कोड जनरेटर।"
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'QR कोड जनरेटर',
              topImageAlt: 'QR कोड जनरेटर Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>वेबसाइट, vCard, रेस्टोरेंट मेनू या फ़्लायर के लिए QR कोड बनाएँ। PNG और SVG में एक्सपोर्ट — बिना रजिस्ट्रेशन, बिना सीमा।</p>
                  <div className="mt-4">
                    <Button arrow link="/hi/upkaran/qr-code-nirmata">
                      टूल खोलें
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="रंग और एक्सेसिबिलिटी"
          description="रंगों, कंट्रास्ट और WCAG एक्सेसिबिलिटी के साथ काम करने के टूल्स।"
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'कलर कंट्रास्ट चेकर',
              topImageAlt: 'कलर कंट्रास्ट चेकर Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    जाँचें कि टेक्स्ट और बैकग्राउंड रंग पठनीय हैं। कलर कोड दर्ज करें, <strong>WCAG</strong> के अनुसार कंट्रास्ट अनुपात देखें और स्वचालित सुधार के लिए <strong>Match</strong> फ़ंक्शन का
                    उपयोग करें।
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/hi/upkaran/rang-virodh-jaanch">
                      टूल खोलें
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'इमेज से रंग निकालें',
              topImageAlt: 'कलर एक्सट्रैक्टर Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>फ़ोटो या लोगो अपलोड करें — टूल प्रमुख रंग निकालेगा। एक क्लिक में HEX कोड कॉपी करें और कहीं भी उपयोग करें।</p>
                  <div className="mt-4">
                    <Button arrow link="/hi/upkaran/chitra-se-rang-nikaalein">
                      टूल खोलें
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'रंग पैलेट जनरेटर',
              topImageAlt: 'रंग पैलेट जनरेटर Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>एक बेस रंग चुनें और 9 पैलेट बनाएँ: monochromatic, complementary, triadic, analogous और अन्य। एक क्लिक में HEX कोड कॉपी करें।</p>
                  <div className="mt-4">
                    <Button arrow link="/hi/upkaran/rang-palette-nirmata">
                      टूल खोलें
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap variant="line" />
        <SectionInfo title="Arteon टूल्स क्या हैं?">
          <p className="mb-4">वेबसाइट, सोशल मीडिया और प्रिंट के लिए सामग्री तैयार करने के 10 मुफ़्त टूल्स — WebP कन्वर्शन, favicon जनरेशन, शब्द गणना, कलर एक्सट्रैक्शन, पैलेट जनरेशन और QR कोड।</p>
          <p>सभी टूल्स ब्राउज़र में काम करते हैं — फ़ाइलें सर्वर पर नहीं भेजी जातीं। बिना रजिस्ट्रेशन और बिना सीमा के उपयोग करें।</p>
        </SectionInfo>
        <Gap variant="line" />
        <SectionSteps
          title="Arteon टूल्स क्यों चुनें?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'पूर्ण गोपनीयता',
              description: 'सभी टूल्स ब्राउज़र में निजी तौर पर फ़ाइलें प्रोसेस करते हैं। सर्वर पर कुछ नहीं भेजा जाता — टैब बंद करने पर डेटा मिट जाता है।',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'कोई उपयोग सीमा नहीं',
              description: 'बिना किसी सीमा के उपयोग करें — कोई दैनिक सीमा नहीं, कोई फ़ाइल सीमा नहीं, कोई कन्वर्शन सीमा नहीं। जब चाहें तब।',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'रजिस्ट्रेशन नहीं चाहिए',
              description: 'कोई अकाउंट ज़रूरी नहीं। टूल खोलें, उपयोग करें, बस।',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'हिन्दी में उपलब्ध',
              description: 'सभी टूल्स हिन्दी में उपलब्ध हैं — इंटरफ़ेस, निर्देश और सूचनाएँ।',
            },
          ]}
        />
        <Gap variant="line" />
        <FaqPanels items={faqItems} title="हमारे टूल्स के बारे में अक्सर पूछे जाने वाले सवाल" />
        <Gap size="sm" />
      </Wrapper>
      <Script id="ld-json-tools-hi" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
