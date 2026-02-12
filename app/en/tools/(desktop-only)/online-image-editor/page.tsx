import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ImageResizeTool from '@/components/sections/tools/ImageResizeTool';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionTabs from '@/components/ui/sections/SectionTabs';
import Badge from '@/components/ui/Badge';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import { RiInstagramLine, RiFacebookLine, RiLinkedinLine, RiImageLine, RiCropLine, RiLayoutGridLine, RiFileImageLine, RiAspectRatioLine } from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Free online image editor — resize, crop, and convert',
  description: 'Resize images online for free. Crop for Instagram, Facebook, LinkedIn. Convert JPG to WebP. Create circular avatars. Local processing in the browser.',
  alternates: {
    canonical: toAbsoluteUrl('/en/tools/online-image-editor'),
    languages: { pl: toAbsoluteUrl('/narzedzia/edytor-zdjec-online'), en: toAbsoluteUrl('/en/tools/online-image-editor') },
  },
  openGraph: {
    title: 'Free online image editor — resize, crop, and convert',
    description: 'Resize images online for free. Crop for Instagram, Facebook, LinkedIn. Convert JPG to WebP. Create circular avatars. Local processing in the browser.',
    url: toAbsoluteUrl('/en/tools/online-image-editor'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Free online image editor',
  alternateName: [
    'Online image resizer',
    'Online image cropper',
    'Instagram image size tool',
    'Facebook image size tool',
    'JPG to WebP converter',
    'Circular profile picture tool',
    'Image compression online',
  ],
  url: toAbsoluteUrl('/en/tools/online-image-editor'),
  applicationCategory: 'MultimediaApplication',
  applicationSubCategory: 'ImageEditor',
  operatingSystem: 'Any',
  description:
    'Free online image editor for resizing, cropping, and format conversion. Ready-made presets for Instagram, Facebook, and LinkedIn. Circular avatar creation. Export to JPG, PNG, and WebP with quality control. Local processing in the browser.',
  featureList: [
    'Resize images to any dimensions',
    'Crop with interactive area selection',
    'Ready-made Instagram formats (square post, portrait post, story, reels)',
    'Ready-made Facebook formats (post, page cover)',
    'Ready-made LinkedIn formats (post, profile banner)',
    'Ready-made web formats (OG image, hero, banner, thumbnail)',
    'Crop shapes: rectangle, square, circle (round avatar)',
    '3x3 grid (rule of thirds) with color selection',
    'Crop zoom 100–300%',
    'Precise crop position (X, Y) with centering',
    'Format conversion: JPG, PNG, WebP',
    'Compression quality control 60–100%',
    'Local processing in the browser',
    'Free tool, no login required',
  ],
  inLanguage: 'en',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to resize and crop an image for social media',
  description: 'How to resize an image for Instagram (1080x1080, 1080x1350, story), Facebook, LinkedIn, and OG image. JPG to WebP conversion and circular avatar creation.',
  url: toAbsoluteUrl('/en/tools/online-image-editor'),
  step: [
    { '@type': 'HowToStep', name: 'Add an image', text: 'Drag a file onto the designated area or select an image from your device. Supported formats: JPG, PNG, WebP.' },
    { '@type': 'HowToStep', name: 'Choose dimensions or a preset', text: 'Enter target dimensions in pixels or select a ready-made format (e.g., Instagram post, Facebook cover, OG image).' },
    { '@type': 'HowToStep', name: 'Adjust the crop', text: 'Move and zoom the image to select the best area. The bright area in the preview shows exactly what will be saved.' },
    { '@type': 'HowToStep', name: 'Choose format and download', text: 'Select the file format (JPG, PNG, or WebP), set compression quality, and download the finished image.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Does the editor handle very large images?',
    answer:
      "Yes, though processing may be slower for images above 4000×4000 pixels — this depends on the device's power and available browser memory. All processing happens locally, without sending files to a server.",
    answerSchemaText: 'Yes. Processing may be slower above 4000×4000 px. All processing is local.',
  },
  {
    question: 'Which export format to choose — JPG, PNG, or WebP?',
    answer:
      'JPG is a good choice for photos with many colors and gradients — files are small with good quality. PNG preserves the highest quality and supports transparency (e.g., circular avatar). WebP combines the advantages of both — small files with high quality and transparency support.',
    answerSchemaText: 'JPG for photos, PNG for transparency, WebP combines small files with high quality.',
  },
  {
    question: 'How to create a circular profile picture?',
    answer:
      'In the Crop Shapes tab, select the Circle option. The tool will automatically switch the format to PNG or WebP (JPG does not support transparency). The area outside the circle will be transparent.',
    answerSchemaText: 'Select Circle in the Crop Shapes tab. The area outside the circle is transparent.',
  },
  {
    question: 'What are the image dimensions for Instagram?',
    answer:
      'Instagram supports three main formats: square post (1080×1080 px, 1:1 ratio), portrait post (1080×1350 px, 4:5 ratio), and story/reels (1080×1920 px, 9:16 ratio). The tool has ready-made formats for each of these dimensions.',
    answerSchemaText: 'Square post: 1080×1080 px, portrait post: 1080×1350 px, story/reels: 1080×1920 px.',
  },
  {
    question: 'How does the quality slider work?',
    answer:
      'The quality slider (60–100%) controls the compression level for JPG and WebP formats. A higher value means better image quality but a larger file size. For most social media use cases, the optimal value is 70–85%.',
    answerSchemaText: 'The slider controls JPG and WebP compression. 70–85% is optimal for social media.',
  },
];

export default function OnlineImageEditorPage() {
  return (
    <>
      <Script id="ld-json-image-editor-en" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-image-editor-howto-en" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Free online image editor"
        description="Resize, crop, and convert images for Instagram, Facebook, and LinkedIn. Ready-made formats, circular avatars, export to JPG, PNG, and WebP. Local processing in the browser."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp"
      />

      <Breadcrumbs second={{ href: '/en/tools', label: 'Tools' }} third={{ href: '/en/tools/online-image-editor', label: 'Online image editor' }} includeJsonLd locale="en" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <ImageResizeTool />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Resize images online — crop, convert, and compress in one tool">
          <p className="text-mid">
            The online image editor lets you quickly adapt images to specific dimensions. You can resize an image to any pixel dimensions, select a ready-made format for social media, or crop a
            section of the image with precise framing.
          </p>
          <p className="text-mid mt-3">In addition to resizing, the tool offers format conversion (JPG, PNG, WebP), circular avatar creation, and compression quality control.</p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="How to resize an image online"
          description="Editing an image takes just a few seconds:"
          grid="three"
          items={[
            { title: '1. Add an image', description: 'Drag a file onto the designated area or select an image from your device. Supported formats: JPG, PNG, WebP.' },
            { title: '2. Set dimensions', description: 'Enter dimensions in pixels or select a ready-made format (Instagram, Facebook, YouTube, LinkedIn, OG image).' },
            { title: '3. Download', description: 'Adjust the crop, choose the file format (JPG, PNG, WebP), set quality, and download the finished image.' },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="How to add an image">
          <p className="text-mid">The tool accepts images in JPG, PNG, and WebP formats. You can add an image in two ways:</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Drag and drop</strong> — grab a file from a folder on your computer and drop it onto the file upload area (the area with a dashed border).
            </li>
            <li>
              <strong>Select from device</strong> — clicking the file upload area opens a file selection dialog.
            </li>
          </ul>
          <p className="text-mid mt-3">After adding an image, the tool automatically reads its original dimensions and displays a preview. You can now proceed to crop settings.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Set target dimensions"
          demo={
            <div className="tool-section space-y-3">
              <div className="flex flex-wrap gap-2">
                <button className="bg-primary flex items-center gap-2 rounded-md border px-3 py-1.5 text-[14px]! text-white">
                  <span>Dimensions in px</span>
                </button>
                <button className="flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-1.5 text-[14px]! hover:bg-neutral-100">
                  <span>Ready-made formats</span>
                </button>
              </div>
              <div className="space-y-3">
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="text-[14px]! font-medium">Width (px)</label>
                    <input type="number" className="mt-1 w-full! rounded-md border border-neutral-300 bg-white px-3! py-2! text-sm!" value="1080" readOnly />
                  </div>
                  <div>
                    <label className="text-[14px]! font-medium">Height (px)</label>
                    <input type="number" className="mt-1 w-full! rounded-md border border-neutral-300 bg-white px-3! py-2! text-sm!" value="1350" readOnly />
                  </div>
                </div>
                <label className="flex items-center gap-2 text-[14px]! font-medium">
                  <input type="checkbox" defaultChecked disabled className="h-4 w-4! rounded border-neutral-300 p-0!" />
                  <span>Keep proportions (auto second dimension)</span>
                </label>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            In the <strong>Dimensions in px</strong> tab, you enter width and height manually. The <strong>Keep proportions</strong> option automatically adjusts the second dimension.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Image dimensions for Instagram, Facebook, and LinkedIn">
          <p className="text-mid mb-4">The tool includes ready-made formats with optimal dimensions for the most popular platforms:</p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Platform</th>
                  <th className="py-2 pr-4 font-semibold">Format</th>
                  <th className="py-2 pr-4 font-semibold">Dimensions (px)</th>
                  <th className="py-2 font-semibold">Ratio</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Instagram</td>
                  <td className="py-2 pr-4">Square post</td>
                  <td className="py-2 pr-4">1080 x 1080</td>
                  <td className="py-2">1:1</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Instagram</td>
                  <td className="py-2 pr-4">Portrait post</td>
                  <td className="py-2 pr-4">1080 x 1350</td>
                  <td className="py-2">4:5</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Instagram</td>
                  <td className="py-2 pr-4">Story / Reels</td>
                  <td className="py-2 pr-4">1080 x 1920</td>
                  <td className="py-2">9:16</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Facebook</td>
                  <td className="py-2 pr-4">Post</td>
                  <td className="py-2 pr-4">1200 x 630</td>
                  <td className="py-2">~1.9:1</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Facebook</td>
                  <td className="py-2 pr-4">Page cover</td>
                  <td className="py-2 pr-4">820 x 360</td>
                  <td className="py-2">~2.3:1</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">LinkedIn</td>
                  <td className="py-2 pr-4">Post</td>
                  <td className="py-2 pr-4">1200 x 1200</td>
                  <td className="py-2">1:1</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">LinkedIn</td>
                  <td className="py-2 pr-4">Profile banner</td>
                  <td className="py-2 pr-4">1584 x 396</td>
                  <td className="py-2">4:1</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">OG image</td>
                  <td className="py-2 pr-4">Link sharing</td>
                  <td className="py-2 pr-4">1200 x 630</td>
                  <td className="py-2">~1.9:1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-mid mt-4 text-sm">Dimensions in the table are recommended sizes for each platform. The tool automatically sets these dimensions when you select the appropriate format.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Ready-made formats — which to choose?"
          description="Each format corresponds to specific platform or use case requirements:"
          grid="two"
          items={[
            {
              icon: <RiInstagramLine className="h-6 w-6" />,
              title: 'Instagram — square post (1080×1080)',
              description: 'Standard Instagram post format. 1:1 ratio. Works well in the feed and looks good on both phone and desktop.',
            },
            {
              icon: <RiInstagramLine className="h-6 w-6" />,
              title: 'Instagram — portrait post (1080×1350)',
              description: 'Vertical post format (4:5 ratio). Takes up more space in the feed than a square, which may increase engagement.',
            },
            {
              icon: <RiInstagramLine className="h-6 w-6" />,
              title: 'Instagram — story / reels (1080×1920)',
              description: 'Full-screen vertical format (9:16 ratio). Used in stories and reels. Fills the entire phone screen.',
            },
            { icon: <RiFacebookLine className="h-6 w-6" />, title: 'Facebook — post (1200×630)', description: 'Optimal format for Facebook posts and shared links. Ratio close to 16:9.' },
            {
              icon: <RiFacebookLine className="h-6 w-6" />,
              title: 'Facebook — page cover (820×360)',
              description: 'Background photo for a Facebook business page. Wide, panoramic format — may be cropped differently on various devices.',
            },
            { icon: <RiLinkedinLine className="h-6 w-6" />, title: 'LinkedIn — post (1200×1200)', description: 'Square format for LinkedIn posts. Looks good in the feed and on mobile devices.' },
            {
              icon: <RiLinkedinLine className="h-6 w-6" />,
              title: 'LinkedIn — profile banner (1584×396)',
              description: 'Background image for a personal or company LinkedIn profile. Very wide format — center the key element in the crop.',
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'OG image (1200×630)',
              description: 'Graphic displayed when sharing a link on social media (Open Graph). Standard for Facebook, Twitter, LinkedIn, and other platforms.',
            },
            {
              icon: <RiFileImageLine className="h-6 w-6" />,
              title: 'Article graphic (1600×900)',
              description: 'Wide format suitable for blog article headers. 16:9 ratio looks good on text-heavy pages.',
            },
            {
              icon: <RiAspectRatioLine className="h-6 w-6" />,
              title: 'Website banner (1920×600)',
              description: 'Very wide format for website banners. Works as a background under headers or in offer sections.',
            },
            {
              icon: <RiCropLine className="h-6 w-6" />,
              title: 'Article thumbnail (800×600)',
              description: 'Smaller format for thumbnails on article lists, product carousels, or search result previews.',
            },
            {
              icon: <RiLayoutGridLine className="h-6 w-6" />,
              title: 'Hero section (1920×1080)',
              description: 'Full HD full-screen format. Used as the main section background on homepages or offer pages.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="How to crop an image">
          <p className="text-mid">
            After setting target dimensions, an interactive crop area appears on the preview. The bright part of the image is the section that will be saved — the rest is dimmed.
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-dark font-semibold">Dragging the crop</p>
              <p className="text-mid mt-1">Grab the bright area and drag it to any part of the image. This way you choose which section of the photo will be exported.</p>
            </div>
            <div>
              <p className="text-dark font-semibold">Resizing via handles</p>
              <p className="text-mid mt-1">
                In the corners of the crop area there are small squares (handles). Dragging them changes the crop size — you can enlarge or shrink it while maintaining the chosen proportions.
              </p>
            </div>
            <div>
              <p className="text-dark font-semibold">Zoom</p>
              <p className="text-mid mt-1">
                In the <strong>Zoom</strong> tab you will find a slider to adjust zoom (100–300%). A higher value means the crop covers a smaller section of the original image — useful when you want
                to cut out a specific detail.
              </p>
            </div>
            <div>
              <p className="text-dark font-semibold">Precise position control</p>
              <p className="text-mid mt-1">
                In the <strong>Position</strong> tab you can set the exact crop position in percentages (0–100% for X and Y axes). Centering buttons let you quickly position the crop at the center of
                the image.
              </p>
            </div>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Crop shapes"
          demo={
            <div className="tool-section space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge as="button" variant="default" size="lg" className="border-black/10 hover:bg-neutral-100">
                  Rectangle
                </Badge>
                <Badge as="button" variant="selected" size="lg">
                  Square
                </Badge>
                <Badge as="button" variant="default" size="lg" className="border-black/10 hover:bg-neutral-100">
                  Circle
                </Badge>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            In the <strong>Crop Shapes</strong> tab, you choose the shape of the exported image: rectangle (with selected proportions), square (forces 1:1), or circle (with transparent background).
          </p>
          <p className="text-mid mt-3">
            The circle shape creates a round avatar with a transparent background outside the circle. The tool automatically switches the format to PNG or WebP, since JPG does not support
            transparency.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="3×3 grid — what is it for?">
          <p className="text-mid">
            A grid dividing the image into 9 equal parts is visible on the crop area. This is a visualization of the <strong>rule of thirds</strong> — one of the fundamental principles of photographic
            composition.
          </p>
          <p className="text-mid mt-3">
            The rule states that the most important elements of a photo (face, product, point of interest) should be placed at the intersections of the grid lines or along them. Such composition is
            more dynamic and pleasing to the eye than placing the subject exactly in the center.
          </p>
          <p className="text-mid mt-3">
            In the <strong>Grid color</strong> tab you can change the line color (green, white, black, red, yellow) so the grid is clearly visible on different images.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionTabs
          title="Export — which format to choose?"
          tabs={[
            {
              title: 'JPG',
              icon: <RiImageLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">
                    The most popular format for photos. Good compression while maintaining visual quality. Does not support transparency — the background will always be filled with a color.
                  </p>
                  <p className="text-mid">A good choice for product photos, portraits, and most website graphics. The quality slider (60–100%) controls compression.</p>
                </div>
              ),
            },
            {
              title: 'PNG',
              icon: <RiFileImageLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">Lossless format — preserves full quality, but files are larger. Supports transparency (required for the circle shape).</p>
                  <p className="text-mid">A good choice for graphics with text, icons, and images requiring sharp edges.</p>
                </div>
              ),
            },
            {
              title: 'WebP',
              icon: <RiCropLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">Modern format combining the advantages of JPG and PNG — small files, good quality, transparency support. Supported by all modern browsers.</p>
                  <p className="text-mid">Recommended for websites — smaller files mean faster loading.</p>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Aspect ratios — what do they mean?"
          description="The aspect ratio is the relationship between the width and height of an image. Written as two numbers separated by a colon:"
          grid="two"
          items={[
            { icon: <RiLayoutGridLine className="h-6 w-6" />, title: '1:1 (square)', description: 'Width equals height. Instagram square post, profile pictures, icons.' },
            {
              icon: <RiAspectRatioLine className="h-6 w-6" />,
              title: '4:5 (portrait)',
              description: 'Slightly vertical format. Instagram portrait post — takes up more space in the feed than a square.',
            },
            { icon: <RiImageLine className="h-6 w-6" />, title: '3:2 (classic)', description: 'Traditional analog photography proportions. Many digital cameras also use this format.' },
            { icon: <RiCropLine className="h-6 w-6" />, title: '16:9 (widescreen)', description: 'Standard HD video, presentation, and monitor format. YouTube, Facebook video, website banners.' },
            {
              icon: <RiInstagramLine className="h-6 w-6" />,
              title: '9:16 (vertical full-screen)',
              description: 'Inverted 16:9 — a vertical format filling the entire phone screen. Instagram Stories, TikTok, YouTube Shorts.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          title="Frequently asked questions about the image editor"
          items={[
            ...faqItems,
            {
              question: 'Why is JPG format unavailable with the circle shape?',
              answer:
                'JPG format does not support transparency. The circle shape requires a transparent background outside the circle, so the tool automatically limits the choice to PNG or WebP — formats with an alpha channel.',
              answerSchemaText: 'JPG does not support transparency. Circle shape requires PNG or WebP.',
            },
            {
              question: 'What do aspect ratios like 4:5 or 16:9 mean?',
              answer:
                'Aspect ratios define the relationship between the width and height of an image. For example, 4:5 means the width is 4 parts and the height is 5 parts. 16:9 is the typical ratio for films and presentations. Instagram portrait post uses 4:5, while story and reels use 9:16.',
              answerSchemaText: '4:5 = width 4 parts, height 5 parts. 16:9 = standard widescreen.',
            },
          ]}
          openByDefault={1}
          pageUrl={toAbsoluteUrl('/en/tools/online-image-editor')}
        />

        <Gap size="sm" />

        <ToolsCarousel title="Explore other tools" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
