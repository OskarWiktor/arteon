import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import QrCodeGenerator from '@/components/sections/tools/QrCodeGenerator';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionFeatureComparison from '@/components/ui/sections/SectionFeatureComparison';
import Badge from '@/components/ui/Badge';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiGlobalLine,
  RiFileTextLine,
  RiContactsBookLine,
  RiMailLine,
  RiPhoneLine,
  RiRestaurantLine,
  RiPrinterLine,
  RiBuilding2Line,
  RiHospitalLine,
  RiHome4Line,
  RiTruckLine,
  RiShoppingCartLine,
  RiCalendarEventLine,
  RiPaletteLine,
  RiRulerLine,
  RiLayoutGridLine,
  RiContrastLine,
  RiShieldCheckLine,
  RiInfinityLine,
  RiLockLine,
  RiStackLine,
  RiEyeLine,
  RiDownloadLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Free QR code generator online - PNG and SVG export',
  description: 'Free online QR code generator. Create QR codes for websites, vCards, emails, phone numbers, menus, and flyers. Export to PNG and SVG. Customize colors and size. No registration.',
  alternates: {
    canonical: toAbsoluteUrl('/en/tools/free-qr-code-generator'),
    languages: { pl: toAbsoluteUrl('/narzedzia/darmowy-generator-kodow-qr'), en: toAbsoluteUrl('/en/tools/free-qr-code-generator'), de: toAbsoluteUrl('/de/tools/kostenloser-qr-code-generator') },
  },
  openGraph: {
    title: 'Free QR code generator online - PNG and SVG export',
    description: 'Free online QR code generator. Create QR codes for websites, vCards, emails, and more. Export to PNG and SVG. No registration.',
    url: toAbsoluteUrl('/en/tools/free-qr-code-generator'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-generator-kodu-qr.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Free QR code generator online',
  alternateName: [
    'QR code creator online',
    'vCard QR code generator',
    'Free QR generator',
    'QR code tool',
    'Restaurant menu QR code generator',
    'QR code for print PNG SVG',
    'Electronic business card vCard generator',
    'QR code generator no registration',
    'Free QR code generator no limits',
  ],
  url: toAbsoluteUrl('/en/tools/free-qr-code-generator'),
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'QRCodeGenerator',
  operatingSystem: 'Any',
  description: 'Create a QR code for a website, business card, menu, or flyer. Choose the data type, customize colors and size, then download a PNG or SVG file.',
  featureList: [
    'QR code for URL (website)',
    'QR code for plain text',
    'vCard QR code (contact details)',
    'QR code for email (address, subject, body)',
    'QR code for phone number',
    'Customizable code and background colors',
    'Code size selection in pixels',
    'Export to PNG format (raster)',
    'Export to SVG format (vector)',
    'Live code preview',
    'Local processing in the browser',
    'Reed-Solomon error correction',
  ],
  inLanguage: 'en',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to use the free QR code generator',
  description: 'How to create a QR code for a website, vCard business card, email, or phone - from choosing the data type to downloading the ready file for printing.',
  url: toAbsoluteUrl('/en/tools/free-qr-code-generator'),
  step: [
    { '@type': 'HowToStep', name: 'Choose the data type', text: 'Decide what the QR code should contain: URL, text, business card (vCard), email, or phone number.' },
    { '@type': 'HowToStep', name: 'Enter the data', text: 'Fill in the appropriate fields. For URL, enter the website address; for vCard, provide contact details.' },
    { '@type': 'HowToStep', name: 'Customize the appearance', text: 'Choose size, margin, code and background colors, and error correction level.' },
    { '@type': 'HowToStep', name: 'Download the code', text: 'The ready QR code can be downloaded as a PNG file (for print and web) or SVG (vector, scales without quality loss).' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

export default function QrCodeGeneratorPage() {
  return (
    <>
      <Script id="ld-json-qr-generator-en" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-qr-howto-en" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Free QR code generator online"
        description="Create a QR code for a website, vCard business card, email, phone, or text. Customize colors, size, and error correction level, then download a ready PNG or SVG file."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-generator-kodu-qr.webp"
      />

      <Breadcrumbs second={{ href: '/en/tools', label: 'Tools' }} third={{ href: '/en/tools/free-qr-code-generator', label: 'Free QR code generator' }} includeJsonLd locale="en" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <QrCodeGenerator />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="What is a QR code and how does it work?">
          <p className="text-mid">
            A QR code (Quick Response) is a two-dimensional barcode that can be scanned with a smartphone camera. Unlike traditional barcodes, QR codes store data both horizontally and vertically,
            allowing them to encode significantly more information - up to approximately 3,000 alphanumeric characters.
          </p>
          <p className="text-mid mt-3">
            The QR code was developed in 1994 by the Japanese company Denso Wave (part of the Toyota group) for tracking car parts. Today, QR codes are widely used in marketing, hospitality,
            logistics, and business communication. They gained particular popularity during the COVID-19 pandemic, when restaurants began replacing paper menus with QR codes.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="How to use the free QR code generator"
          description="Creating a QR code takes just a few seconds:"
          grid="three"
          items={[
            { title: '1. Choose the data type', description: 'Select what you want to encode: URL, text, vCard business card, email, or phone number.' },
            { title: '2. Enter the data', description: 'Fill in the appropriate fields - website address, contact details, or message content.' },
            { title: '3. Download the code', description: 'Customize the appearance (colors, size, margin) and download as PNG or SVG.' },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="QR code types - URL, vCard, email, phone, text"
          description="The free QR code generator supports five data types - each useful in different situations:"
          grid="two"
          items={[
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'URL',
              description: 'A link to a website. After scanning, the phone opens the page in the browser. Ideal for business cards, flyers, and posters.',
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: 'Text',
              description: 'Any text up to 3,000 characters. After scanning, the phone displays the text on screen. Useful for discount coupons and short instructions.',
            },
            {
              icon: <RiContactsBookLine className="h-6 w-6" />,
              title: 'vCard business card',
              description:
                'A digital business card with contact data (name, company, phone, email, address). After scanning, the phone offers to save the contact. Ideal for professional business cards.',
            },
            {
              icon: <RiMailLine className="h-6 w-6" />,
              title: 'Email',
              description: 'An email address with optional subject and body. After scanning, the phone opens the mail app with a pre-filled form.',
            },
            { icon: <RiPhoneLine className="h-6 w-6" />, title: 'Phone', description: 'A phone number. After scanning, the phone offers to make a call. Useful for hotlines and customer support.' },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="QR code technical specifications"
          demo={
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                  <span className="text-dark text-sm! font-medium">Capacity</span>
                  <span className="text-mid text-sm!">up to 4,296 characters</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                  <span className="text-dark text-sm! font-medium">Error correction</span>
                  <span className="text-mid text-sm!">7% – 30%</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                  <span className="text-dark text-sm! font-medium">Min. print size</span>
                  <span className="text-mid text-sm!">2 × 2 cm</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                  <span className="text-dark text-sm! font-medium">Min. contrast</span>
                  <span className="text-mid text-sm!">3:1</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                  <span className="text-dark text-sm! font-medium">Margin</span>
                  <span className="text-mid text-sm!">min. 4 modules</span>
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">Knowing the technical parameters helps create QR codes that are readable in all conditions:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Data capacity</strong> - a QR code can hold up to 7,089 digits, 4,296 alphanumeric characters, or 2,953 bytes of binary data. In practice, this is more than enough for URLs and
              business cards.
            </li>
            <li>
              <strong>Reed-Solomon error correction</strong> - a mathematical algorithm that enables reading the code even when part of it is damaged or obscured. Levels: L (7%), M (15%), Q (25%), H
              (30%).
            </li>
            <li>
              <strong>Margin</strong> - the white area around the code required for proper scanning. The recommended minimum is 4 modules (code units).
            </li>
            <li>
              <strong>Minimum print size</strong> - for standard scanning conditions, the code should be at least 2×2 cm. For large format printing (banners, billboards), scale up accordingly.
            </li>
            <li>
              <strong>Contrast</strong> - the contrast ratio between the code and background should be at least 3:1. The generator automatically warns about too low contrast.
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="QR code applications - business cards, flyers, restaurant menus"
          description="QR codes find use in many industries and scenarios:"
          grid="three"
          items={[
            {
              icon: <RiContactsBookLine className="h-6 w-6" />,
              title: 'Business cards',
              description: 'A vCard code on a business card lets the recipient save the contact with a single scan, without manually typing data.',
            },
            {
              icon: <RiRestaurantLine className="h-6 w-6" />,
              title: 'Restaurant and café menus',
              description: 'A QR code on the table directs to a digital menu. A hygienic solution popular since the COVID-19 pandemic.',
            },
            { icon: <RiPrinterLine className="h-6 w-6" />, title: 'Flyers and posters', description: 'QR code with a link to a product page, registration form, or special offer.' },
            { icon: <RiBuilding2Line className="h-6 w-6" />, title: 'Product packaging', description: 'Link to user manual, warranty card, or manufacturer website.' },
            { icon: <RiHospitalLine className="h-6 w-6" />, title: 'Medical offices', description: 'QR codes on patient cards linking to the patient portal or appointment booking system.' },
            { icon: <RiHome4Line className="h-6 w-6" />, title: 'Real estate', description: 'Codes on banners linking to the full listing with photo gallery and details.' },
            { icon: <RiTruckLine className="h-6 w-6" />, title: 'Warehouses and logistics', description: 'QR labels for tracking product batches, warehouse locations, and shipment history.' },
            { icon: <RiShoppingCartLine className="h-6 w-6" />, title: 'E-commerce', description: 'Codes on packaging linking to return instructions, customer reviews, or loyalty programs.' },
            { icon: <RiCalendarEventLine className="h-6 w-6" />, title: 'Events and conferences', description: 'Tickets with QR codes for quick verification at entry.' },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="QR code appearance customization"
          variant="left"
          demo={
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                <span className="text-dark text-sm! font-medium">Size</span>
                <Badge variant="default" size="sm">
                  300 px
                </Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                <span className="text-dark text-sm! font-medium">Margin</span>
                <Badge variant="default" size="sm">
                  4
                </Badge>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <span className="text-dark text-sm! font-medium">Code color</span>
                <span className="inline-block h-6 w-6 rounded border border-neutral-200" style={{ backgroundColor: '#000000' }} />
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <span className="text-dark text-sm! font-medium">Background color</span>
                <span className="inline-block h-6 w-6 rounded border border-neutral-200" style={{ backgroundColor: '#ffffff' }} />
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">The generator lets you customize several parameters affecting the appearance and readability of the code:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Size (px)</strong> - code dimension in pixels. For standard print (flyers, business cards) choose 300–500 px. For digital use, 150–200 px is sufficient.
            </li>
            <li>
              <strong>Margin</strong> - white area around the code required for proper scanning. Recommended value is 2–4. A value of 0 may make scanning difficult on a dark background.
            </li>
            <li>
              <strong>QR code color</strong> - black by default (#000000). You can change it to any dark color matching your visual identity.
            </li>
            <li>
              <strong>Background color</strong> - white by default (#ffffff). You can change it to any light color. The generator will warn if contrast is too low.
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Tip:</strong> Maintain high contrast between the code and background (minimum 3:1). A dark code on a light background scans most easily.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionDemo
          title="Error correction levels - L, M, Q, H"
          demo={
            <div className="space-y-2">
              {[
                { level: 'L', pct: '7%', label: 'Low', width: '7%' },
                { level: 'M', pct: '15%', label: 'Medium', width: '15%' },
                { level: 'Q', pct: '25%', label: 'Quartile', width: '25%' },
                { level: 'H', pct: '30%', label: 'High', width: '30%' },
              ].map((item) => (
                <div key={item.level} className="rounded-lg border border-neutral-200 bg-white p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-dark text-sm! font-medium">
                      {item.level} ({item.label})
                    </span>
                    <Badge variant={item.level === 'M' ? 'selected' : 'default'} size="sm">
                      {item.pct}
                    </Badge>
                  </div>
                  <div className="h-2 w-full rounded-full bg-neutral-100">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${parseInt(item.pct)}%`, minWidth: '12px' }} />
                  </div>
                </div>
              ))}
            </div>
          }
        >
          <p className="text-mid mb-4">
            Error correction is a mechanism that enables reading a QR code even when part of it is damaged, dirty, or obscured. The generator uses the Reed-Solomon algorithm, a standard in QR codes.
          </p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>L (Low) - 7%</strong> - least redundancy, code is most compact. Choose when the code will be used in ideal conditions (screen, high-quality print).
            </li>
            <li>
              <strong>M (Medium) - 15%</strong> - default value, a good balance between capacity and resilience. Suitable for most applications.
            </li>
            <li>
              <strong>Q (Quartile) - 25%</strong> - greater resistance to damage. Choose for codes printed on materials prone to getting dirty.
            </li>
            <li>
              <strong>H (High) - 30%</strong> - highest resilience. Recommended for outdoor print materials, packaging, and situations where the code may be partially obscured (e.g., a logo in the
              center).
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Note:</strong> A higher correction level means a larger and more complex code. With large amounts of data and level H, the code can become very dense.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionFeatureComparison
          title="PNG vs SVG - which format to choose for printing?"
          plans={[
            { id: 'png', name: 'PNG (raster)' },
            { id: 'svg', name: 'SVG (vector)', highlighted: true },
          ]}
          features={[
            { name: 'Websites and social media', values: { png: true, svg: true } },
            { name: 'Flyers and business cards', values: { png: true, svg: true } },
            { name: 'Posters and banners (large format)', values: { png: false, svg: true } },
            { name: 'Scaling without quality loss', values: { png: false, svg: true } },
            { name: 'Editing in a graphics program', values: { png: false, svg: true } },
            { name: 'Smaller file size', values: { png: false, svg: true } },
            { name: 'Presentations', values: { png: true, svg: true } },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="QR code printing tips"
          description="To ensure the QR code is readable after printing, follow a few rules:"
          grid="two"
          items={[
            {
              icon: <RiRulerLine className="h-6 w-6" />,
              title: 'Minimum size',
              description: 'The code should be at least 2×2 cm for close-range scanning. The greater the scanning distance, the larger the code must be.',
            },
            { icon: <RiContrastLine className="h-6 w-6" />, title: 'Contrast', description: 'Dark code on a light background. Avoid pastel colors and low contrast.' },
            {
              icon: <RiLayoutGridLine className="h-6 w-6" />,
              title: 'Margin around the code',
              description: 'Keep empty space around the code. Do not place other graphic elements too close - the margin is essential for proper scanning.',
            },
            { icon: <RiEyeLine className="h-6 w-6" />, title: 'Testing', description: 'Before mass printing, test the code on different phones and in various lighting conditions.' },
            { icon: <RiShieldCheckLine className="h-6 w-6" />, title: 'Correction level', description: 'For outdoor print and materials prone to damage, choose level Q or H.' },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="What makes this QR code generator special?"
          grid="two"
          items={[
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Local generation in the browser',
              description: 'Data entered into the generator is not sent to any server - all processing happens locally on your device.',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'Five data types in one tool',
              description: 'URL, text, vCard business card, email, and phone - each type generates a QR code in the appropriate standard.',
            },
            {
              icon: <RiStackLine className="h-6 w-6" />,
              title: 'QR code appearance customization',
              description: 'Code and background colors, size in pixels, margin, and error correction level - every parameter can be customized.',
            },
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: 'Four error correction levels',
              description: 'The Reed-Solomon algorithm lets you choose code resilience to damage - from 7% (L) to 30% (H). Higher levels are useful for print on materials prone to getting dirty.',
            },
            { icon: <RiEyeLine className="h-6 w-6" />, title: 'Live preview', description: 'You see the result immediately after entering data, without clicking "Generate".' },
            { icon: <RiDownloadLine className="h-6 w-6" />, title: 'PNG and SVG export', description: 'Download the code in the format appropriate for your use case.' },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/en/tools/free-qr-code-generator')}
          title="Frequently asked questions about the QR code generator"
          openByDefault={1}
          items={[
            {
              question: 'Does a QR code generated with this tool expire?',
              answer:
                'No. A static QR code (like the one generated by this tool) does not expire. The content - e.g., a URL or business card data - is encoded directly in the code. As long as the target page exists, the code will work.',
              answerSchemaText: 'No. Static QR codes do not expire. Content is encoded directly in the code.',
            },
            {
              question: 'Can I change the URL in an existing QR code?',
              answer:
                'With a static QR code, you cannot change the encoded content - you need to generate a new code with a new address. Dynamic QR codes (editable after generation) require external paid services.',
              answerSchemaText: 'No, static QR codes cannot be edited. Generate a new code for a different URL.',
            },
            {
              question: 'PNG or SVG - which QR code format should I choose for printing?',
              answer:
                'PNG works for most use cases: websites, social media, printing up to A4 size. SVG is vector-based - it can be scaled to any size without quality loss, making it suitable for banners, billboards, and large advertising formats.',
              answerSchemaText: 'PNG for web and standard print. SVG for large format and lossless scaling.',
            },
            {
              question: 'What QR code size should I choose for a business card?',
              answer:
                'For printed materials (business cards, flyers), the code should be at least 2×2 cm, optimally 3×3 cm. In the generator, this corresponds to a resolution of 300 px at standard print quality (300 DPI). For larger formats (posters, banners), choose a larger size or SVG format.',
              answerSchemaText: 'At least 2×2 cm (300 px at 300 DPI). Optimally 3×3 cm for business cards.',
            },
            {
              question: 'Can I add a logo to the center of the QR code?',
              answer:
                'This tool does not support adding a logo directly. However, you can download the code in SVG format and overlay a logo in a graphics program - in that case, it is necessary to set a high error correction level (H) so the code remains readable despite partial obscuring.',
              answerSchemaText: 'Not directly. Download SVG and add a logo in a graphics program with H error correction.',
            },
            {
              question: "Why doesn't my QR code scan after printing?",
              answer:
                'Most common causes: too low contrast between code and background, too small code size, no margin around the code, or print damage. Try increasing the size, improving contrast, and raising the error correction level (Q or H).',
              answerSchemaText: 'Check contrast, size, margin, and error correction level.',
            },
            {
              question: 'Can I use generated QR codes commercially?',
              answer: 'Yes. Generated QR codes can be freely used in any project - commercial and non-commercial, without licensing restrictions.',
              answerSchemaText: 'Yes, without restrictions in commercial and non-commercial projects.',
            },
            {
              question: 'What is the difference between a vCard business card and a plain text QR code?',
              answer:
                'A vCard QR code contains contact data in a standardized format (name, company, phone, email, address). After scanning, the phone automatically offers to save the contact in the address book. A text code displays data as plain text - without the option to automatically save it.',
              answerSchemaText: 'vCard saves contact automatically. Text QR just displays text.',
            },
          ]}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Explore other free tools" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
