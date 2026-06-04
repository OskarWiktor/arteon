import { Fragment, type ReactNode } from 'react';
import Divider from '@/components/atoms/Divider';
import { JsonLd } from '@/components/atoms/JsonLd';
import AdSense from '@/components/molecules/AdSense';
import Breadcrumbs from '@/components/molecules/BreadCrumbs';
import ToolsCarousel from '@/components/organisms/carousels/ToolsCarousel';
import HeroBanner from '@/components/organisms/HeroBanner';
import SectionFaqPanels from '@/components/organisms/sections/SectionFaqPanels';
import DynamicToolRenderer from '@/components/pages/tools/DynamicToolRenderer';
import ToolEditorLayout from '@/components/templates/ToolEditorLayout';
import { DESKTOP_ONLY_UI } from '@/lib/i18n/locales';
import {
  getToolAlternates,
  getToolSoftwareSchema,
  getToolHowToSchema,
  getToolWebPageSchema,
} from '@/lib/i18n/pages/toolMeta';
import { getToolHref } from '@/lib/i18n/toolRegistry';
import { getToolIcon } from '@/lib/tools/iconRegistry';
import type { Locale, DesktopOnlyUi } from '@/types/locale';
import type { ToolPageData, ToolContentBlock } from '@/types/tool-page';
import type { ToolItemKey } from '@/types/tools/common';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';
import SectionBasic from '../organisms/sections/SectionBasic';
import SectionContactForm from '../organisms/sections/SectionContactForm';
import SectionDemo from '../organisms/sections/SectionDemo';
import SectionTable from '../organisms/sections/SectionTable';
import SectionInfo from '../organisms/sections/SectionInfo';
import SectionSteps from '../organisms/sections/SectionSteps';
import SectionTabs from '../organisms/sections/SectionTabs';
import SectionTimeline from '../organisms/sections/SectionTimeline';
import RelatedConverters from '../organisms/tools/RelatedConverters';
import RelatedUnitConverters from '../organisms/tools/RelatedUnitConverters';
import { Metadata } from 'next';

const AD_SECTION_INTERVAL = 3;
const AD_SKIP_AFTER = new Set(['faq', 'toolsCarousel']);

const DESKTOP_ONLY_TOOLS = new Set([
  'jpgToWebp',
  'imageResize',
  'favicon',
  'emailSignature',
  'jpgToWebpSimple',
  'pngToWebpSimple',
]);

/**
 * Render a styled notice that informs users the tool is available only on desktop using localized copy.
 *
 * @param t - Localized text for the notice (`title`, `description`, `tipTitle`, `tipText`)
 * @returns A React element containing the desktop-only notice section with title, description, and tip box
 */
function DesktopOnlyNotice({ t }: { t: DesktopOnlyUi }) {
  return (
    <section className='mx-auto my-6 max-w-xl rounded-lg border border-neutral-200 bg-white/90 p-6 text-sm shadow-sm'>
      <h2 className='mb-3 text-lg font-semibold'>{t.title}</h2>
      <p className='mb-3'>{t.description}</p>
      <div className='rounded-lg bg-neutral-50 px-4 py-3 text-xs text-light'>
        <p className='mb-1 font-medium'>{t.tipTitle}</p>
        <p>{t.tipText}</p>
      </div>
    </section>
  );
}

export function generateToolMetadata(data: ToolPageData): Metadata {
  const canonicalPath = getToolHref(
    data.toolKey as ToolItemKey,
    data.locale as Locale,
  );
  return {
    title: data.metadata.title,
    description: data.metadata.description,
    alternates: getToolAlternates(
      data.toolKey as ToolItemKey,
      data.locale as Locale,
    ),
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
    openGraph: {
      title: data.metadata.title,
      description: data.metadata.description,
      url: toAbsoluteUrl(canonicalPath),
      type: 'website',
      images: [
        { url: toAbsoluteUrl(data.metadata.ogImage), width: 1200, height: 630 },
      ],
    },
  };
}

function renderBlock(
  block: ToolContentBlock,
  idx: number,
  pageUrl: string,
): ReactNode {
  switch (block.type) {
    case 'gap':
      return <Divider key={`gap-${idx}`} line size='md' />;

    case 'sectionInfo':
      return (
        <SectionInfo key={`info-${idx}`} title={block.title}>
          <div dangerouslySetInnerHTML={{ __html: block.html }} />
        </SectionInfo>
      );

    case 'sectionSteps':
      return (
        <SectionSteps
          key={`steps-${idx}`}
          title={block.title}
          description={block.description}
          grid={block.grid}
          inlineIcon={block.inlineIcon}
          buttonText={block.btnOne}
          buttonHref={block.btnOneHref}
          items={block.items.map(item => ({
            icon: getToolIcon(item.icon),
            title: item.title,
            description: (
              <span dangerouslySetInnerHTML={{ __html: item.description }} />
            ),
          }))}
        />
      );

    case 'sectionDemo':
      return (
        <SectionDemo
          key={`demo-${idx}`}
          title={block.title}
          subtitle={block.subtitle}
          variant={block.variant}
          demo={<div dangerouslySetInnerHTML={{ __html: block.demoHtml }} />}
        >
          <div dangerouslySetInnerHTML={{ __html: block.html }} />
        </SectionDemo>
      );

    case 'faq':
      return (
        <SectionFaqPanels
          key={`faq-${idx}`}
          title={block.title}
          items={block.items}
          pageUrl={pageUrl}
        />
      );

    case 'sectionTabs':
      return (
        <SectionTabs
          key={`tabs-${idx}`}
          title={block.title}
          tabs={block.tabs.map(tab => ({
            title: tab.title,
            icon: getToolIcon(tab.icon),
            content: <div dangerouslySetInnerHTML={{ __html: tab.html }} />,
          }))}
        />
      );

    case 'sectionTable':
      return (
        <SectionTable
          key={`table-${idx}`}
          title={block.title}
          description={block.description}
          caption={block.caption}
          labelHeader={block.labelHeader}
          cols={block.cols}
          rows={block.rows}
        />
      );

    case 'sectionTimeline':
      return (
        <SectionTimeline
          key={`timeline-${idx}`}
          title={block.title}
          description={block.description}
          items={block.items.map(item => ({
            icon: getToolIcon(item.icon),
            title: item.title,
            description: (
              <span dangerouslySetInnerHTML={{ __html: item.description }} />
            ),
          }))}
        />
      );

    case 'toolsCarousel':
      return <ToolsCarousel key={`carousel-${idx}`} title={block.title} />;

    case 'sectionBasic':
      return (
        <SectionBasic
          key={`basic-${idx}`}
          title={block.title}
          imageSrc={block.imageSrc}
          imageAlt={block.imageAlt}
          variant={block.variant}
        >
          <div dangerouslySetInnerHTML={{ __html: block.html }} />
        </SectionBasic>
      );

    case 'contactForm':
      return (
        <SectionContactForm
          variant='tool-page'
          key={`contact-${idx}`}
          title={block.title}
          description={block.description}
          imageSrc={block.imageSrc}
          imageAlt={block.imageAlt}
          defaultSubject={block.defaultSubject}
        />
      );

    default:
      return null;
  }
}

interface ToolPageProps {
  data: ToolPageData;
  tool?: ReactNode;
}

export default function ToolPage({ data, tool }: ToolPageProps) {
  const pageUrl = toAbsoluteUrl(data.metadata.path);
  const isDesktopOnly = DESKTOP_ONLY_TOOLS.has(data.toolKey);
  const desktopOnlyT = DESKTOP_ONLY_UI[data.locale as Locale];

  const softwareSchema = getToolSoftwareSchema({
    toolKey: data.toolKey as ToolItemKey,
    locale: data.locale as Locale,
    name: data.schemas.software.name,
    alternateName: data.schemas.software.alternateName,
    applicationCategory: data.schemas.software.applicationCategory,
    applicationSubCategory: data.schemas.software.applicationSubCategory,
    description: data.schemas.software.description,
    featureList: data.schemas.software.featureList,
    ogImage: data.metadata.ogImage,
  });

  const howToSchema = getToolHowToSchema({
    toolKey: data.toolKey as ToolItemKey,
    locale: data.locale as Locale,
    name: data.schemas.howTo.name,
    description: data.schemas.howTo.description,
    totalTime: data.schemas.howTo.totalTime,
    steps: data.schemas.howTo.steps,
    ogImage: data.metadata.ogImage,
  });

  const webPageSchema = getToolWebPageSchema({
    locale: data.locale as Locale,
    title: data.metadata.title,
    description: data.metadata.description,
    path: data.metadata.path,
    ogImage: data.metadata.ogImage,
    toolName: data.schemas.software.name,
  });

  const combinedSchemas = [webPageSchema, softwareSchema, howToSchema];

  return (
    <>
      <JsonLd
        schema={combinedSchemas}
        id={`ld-json-${data.toolKey}-${data.locale}`}
      />

      <HeroBanner
        title={data.hero.title}
        description={data.hero.description}
        overlay='black'
        backgroundImage={data.hero.backgroundImage}
        size='compact'
      />

      <Breadcrumbs
        second={data.breadcrumbs.second}
        third={data.breadcrumbs.third}
        includeJsonLd
        size='compact'
        locale={data.locale}
      />

      <ToolEditorLayout>
        {isDesktopOnly ? (
          <>
            <div className='hidden lg:block'>
              {tool ?? <DynamicToolRenderer toolKey={data.toolKey} />}
            </div>
            <div className='block lg:hidden'>
              <DesktopOnlyNotice t={desktopOnlyT} />
            </div>
          </>
        ) : (
          (tool ?? <DynamicToolRenderer toolKey={data.toolKey} />)
        )}
        {/* <div className='hidden lg:block mt-42'>
          <AdSense variant='tool-banner' locale={data.locale} />
        </div>
        <div className='mt-24 block lg:hidden'>
          <AdSense variant='responsive' locale={data.locale} />
        </div> */}
        <div className='mx-auto w-full max-w-355 px-[3%]'>
          {(() => {
            const adPositions = new Set<number>();
            let contentCount = 0;
            data.contentBlocks.forEach((block, idx) => {
              if (block.type !== 'gap') {
                contentCount++;
                if (
                  contentCount % AD_SECTION_INTERVAL === 0 &&
                  !AD_SKIP_AFTER.has(block.type)
                ) {
                  adPositions.add(idx);
                }
              }
            });

            let relatedInserted = false;
            return data.contentBlocks.map((block, idx) => {
              const insertRelated = !relatedInserted && block.type === 'faq';
              if (insertRelated) relatedInserted = true;

              const node = renderBlock(block, idx, pageUrl);
              const adNode = adPositions.has(idx) ? (
                <div
                  key={`ad-after-${idx}`}
                  className='ad-slot-wrapper min-h-70'
                >
                  <Divider line />
                  <div className='not-prose mx-[-3%] flex justify-center py-4'>
                    <AdSense variant='responsive' locale={data.locale} />
                  </div>
                </div>
              ) : null;

              if (insertRelated) {
                return (
                  <Fragment key={`block-rel-${idx}`}>
                    <RelatedConverters
                      toolKey={data.toolKey}
                      locale={data.locale as Locale}
                    />
                    <RelatedUnitConverters
                      toolKey={data.toolKey}
                      locale={data.locale as Locale}
                    />
                    {node}
                    {adNode}
                  </Fragment>
                );
              }

              if (adNode) {
                return (
                  <Fragment key={`block-ad-${idx}`}>
                    {node}
                    {adNode}
                  </Fragment>
                );
              }
              return node;
            });
          })()}
        </div>
      </ToolEditorLayout>
    </>
  );
}
