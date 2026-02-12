import { RiAppsLine, RiArticleLine, RiContrast2Line, RiCropLine, RiFileTextLine, RiImageEditLine, RiMailLine, RiPaletteLine, RiPantoneLine, RiQrCodeLine, RiSearchLine } from 'react-icons/ri';

import type { HeaderNavItemEN, LegalLinkEN } from '@/types/navigation';
import type { ToolsSectionEN } from '@/types/tools/common';
export type { HeaderNavItemKeyEN, HeaderNavItemEN, LegalLinkEN } from '@/types/navigation';
export type { ToolSectionItemEN, ToolsSectionEN } from '@/types/tools/common';

export const DESKTOP_NAV_ITEMS_EN: HeaderNavItemEN[] = [{ key: 'tools', href: '/en/tools', label: 'Tools' }];

export const MOBILE_NAV_ITEMS_EN: HeaderNavItemEN[] = DESKTOP_NAV_ITEMS_EN;

export const TOOLS_SECTIONS_EN: ToolsSectionEN[] = [
  {
    key: 'obrazy',
    title: 'Images & favicons',
    icon: RiImageEditLine,
    items: [
      {
        key: 'jpgToWebp',
        href: '/en/tools/jpg-png-to-webp-unlimited',
        title: 'JPG/PNG to WebP converter',
        description: 'Reduce image file size without losing quality. Convert JPG and PNG to WebP and speed up your website.',
        image: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
        icon: RiImageEditLine,
      },
      {
        key: 'imageResize',
        href: '/en/tools/online-image-editor',
        title: 'Online image editor',
        description: 'Prepare the perfect crop for social media or your website. Choose a ready-made format or enter custom dimensions.',
        image: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
        icon: RiCropLine,
      },
      {
        key: 'favicon',
        href: '/en/tools/free-favicon-generator',
        title: 'Favicon generator',
        description: 'Generate favicon.ico and PNG icons from a single image, compliant with browser and Lighthouse requirements.',
        image: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
        icon: RiAppsLine,
      },
    ],
  },
  {
    key: 'seo',
    title: 'Meta & SEO',
    icon: RiSearchLine,
    items: [
      {
        key: 'metaCounter',
        href: '/en/tools/meta-title-description-length-checker',
        title: 'Meta title & description checker',
        description: 'Check character count and preview how your page looks in Google. Avoid truncated titles and descriptions in search results.',
        image: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
        icon: RiFileTextLine,
      },
      {
        key: 'wordCounter',
        href: '/en/tools/word-and-character-counter',
        title: 'Word & character counter',
        description: 'Check text length and evaluate whether it fits a homepage, service page, blog post, or product description.',
        image: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
        icon: RiArticleLine,
      },
    ],
  },
  {
    key: 'email',
    title: 'Email & communication',
    icon: RiMailLine,
    items: [
      {
        key: 'emailSignature',
        href: '/en/tools/free-email-signature-generator',
        title: 'Email signature generator',
        description: 'Build a professional email signature in minutes. Copy the ready HTML code into Gmail or Outlook.',
        image: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
        icon: RiMailLine,
      },
    ],
  },
  {
    key: 'kolory',
    title: 'Colors & accessibility',
    icon: RiPaletteLine,
    items: [
      {
        key: 'contrastChecker',
        href: '/en/tools/color-contrast-checker',
        title: 'Color contrast checker',
        description: 'Check if your text and background colors are readable. The tool calculates contrast per WCAG and helps pick the right color.',
        image: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
        icon: RiContrast2Line,
      },
      {
        key: 'paletteExtractor',
        href: '/en/tools/image-color-extractor',
        title: 'Image color extractor',
        description: 'Upload a photo or logo and the tool will extract dominant colors. Copy generated color codes with a single click.',
        image: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
        icon: RiPantoneLine,
      },
      {
        key: 'colorPalette',
        href: '/en/tools/color-palette-generator',
        title: 'Color palette generator',
        description: 'Pick one color and generate 9 palettes: monochromatic, complementary, triadic, and more.',
        image: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
        icon: RiPaletteLine,
      },
    ],
  },
  {
    key: 'druk',
    title: 'Print & materials',
    icon: RiQrCodeLine,
    items: [
      {
        key: 'qrCode',
        href: '/en/tools/free-qr-code-generator',
        title: 'Free QR code generator',
        description: 'Create a QR code for a website, vCard, menu, or flyer. Export to PNG and SVG, no login, no limits.',
        image: '/assets/tools/narzedzia-generator-kodu-qr.webp',
        icon: RiQrCodeLine,
      },
    ],
  },
];

export const LEGAL_LINKS_EN: LegalLinkEN[] = [
  { key: 'regulamin', href: '/regulamin', label: 'Terms of Service' },
  { key: 'privacy', href: '/polityka-prywatnosci', label: 'Privacy Policy' },
];
