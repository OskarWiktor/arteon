import { Fragment, type ReactNode } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import type { ToolPageData, ToolContentBlock } from '@/types/tool-page';
import type { Locale, DesktopOnlyUi } from '@/types/locale';
import type { ToolItemKey } from '@/types/tools/common';

import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import DynamicToolRenderer from '@/components/sections/tools/DynamicToolRenderer';
import LazyToolsCarousel from '@/components/sections/tools/LazyToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionBasic from '@/components/ui/sections/SectionBasic';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionTabs from '@/components/ui/sections/SectionTabs';
import SectionFeatureComparison from '@/components/ui/sections/SectionFeatureComparison';
import SectionTimeline from '@/components/ui/sections/SectionTimeline';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import AdSense from '@/components/ui/AdSense';

import { toAbsoluteUrl } from '@/utils/absoluteUrl';
import { getToolAlternates, getToolSoftwareSchema, getToolHowToSchema, getToolWebPageSchema } from '@/lib/i18n/pages/tool-meta';
import { getToolHref } from '@/lib/i18n/tool-registry';
import { getToolIcon } from '@/lib/tools/icon-registry';
import { DESKTOP_ONLY_UI } from '@/lib/i18n/locales';
import ToolContactForm from './ToolContactForm';
import RelatedConverters from './RelatedConverters';

const AD_SECTION_INTERVAL = 4;
const AD_SKIP_AFTER = new Set(['faq', 'toolsCarousel']);

const DESKTOP_ONLY_TOOLS = new Set(['jpgToWebp', 'imageResize', 'favicon', 'emailSignature', 'jpgToWebpSimple', 'pngToWebpSimple']);

function DesktopOnlyNotice({ t }: { t: DesktopOnlyUi }) {
  return (
    <section className="mx-auto my-6 max-w-xl rounded-2xl border border-black/10 bg-white/90 p-6 text-sm shadow-sm">
      <h2 className="mb-3 text-lg font-semibold">{t.title}</h2>
      <p className="text-mid mb-3">{t.description}</p>
      <div className="text-light rounded-xl bg-neutral-50 px-4 py-3 text-xs">
        <p className="mb-1 font-medium">{t.tipTitle}</p>
        <p>{t.tipText}</p>
      </div>
    </section>
  );
}

export function generateToolMetadata(data: ToolPageData): Metadata {
  const canonicalPath = getToolHref(data.toolKey as ToolItemKey, data.locale as Locale);
  return {
    title: data.metadata.title,
    description: data.metadata.description,
    alternates: getToolAlternates(data.toolKey as ToolItemKey, data.locale as Locale),
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
      images: [{ url: toAbsoluteUrl(data.metadata.ogImage), width: 1200, height: 630 }],
    },
  };
}

function renderBlock(block: ToolContentBlock, idx: number, pageUrl: string): ReactNode {
  switch (block.type) {
    case 'gap':
      return <Gap key={`gap-${idx}`} variant={block.variant} size={block.size} />;

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
          btnOne={block.btnOne}
          btnOneLink={block.btnOneLink}
          items={block.items.map((item) => ({
            icon: getToolIcon(item.icon),
            title: item.title,
            description: <span dangerouslySetInnerHTML={{ __html: item.description }} />,
          }))}
        />
      );

    case 'sectionDemo':
      return (
        <SectionDemo key={`demo-${idx}`} title={block.title} subtitle={block.subtitle} variant={block.variant} demo={<div dangerouslySetInnerHTML={{ __html: block.demoHtml }} />}>
          <div dangerouslySetInnerHTML={{ __html: block.html }} />
        </SectionDemo>
      );

    case 'faq':
      return <FaqPanels key={`faq-${idx}`} title={block.title} openByDefault={block.openByDefault} items={block.items} pageUrl={pageUrl} />;

    case 'sectionTabs':
      return (
        <SectionTabs
          key={`tabs-${idx}`}
          title={block.title}
          tabs={block.tabs.map((tab) => ({
            title: tab.title,
            icon: getToolIcon(tab.icon),
            content: <div dangerouslySetInnerHTML={{ __html: tab.html }} />,
          }))}
        />
      );

    case 'sectionFeatureComparison':
      return <SectionFeatureComparison key={`comparison-${idx}`} title={block.title} plans={block.plans} features={block.features} />;

    case 'sectionTimeline':
      return (
        <SectionTimeline
          key={`timeline-${idx}`}
          title={block.title}
          description={block.description}
          items={block.items.map((item) => ({
            icon: getToolIcon(item.icon),
            title: item.title,
            description: <span dangerouslySetInnerHTML={{ __html: item.description }} />,
          }))}
        />
      );

    case 'toolsCarousel':
      return <LazyToolsCarousel key={`carousel-${idx}`} title={block.title} />;

    case 'sectionBasic':
      return (
        <SectionBasic key={`basic-${idx}`} title={block.title} imageSrc={block.imageSrc} imageAlt={block.imageAlt} variant={block.variant}>
          <div dangerouslySetInnerHTML={{ __html: block.html }} />
        </SectionBasic>
      );

    case 'contactForm':
      return <ToolContactForm key={`contact-${idx}`} title={block.title} description={block.description} imageSrc={block.imageSrc} imageAlt={block.imageAlt} defaultSubject={block.defaultSubject} />;

    default:
      return null;
  }
}

interface ToolPageRendererProps {
  data: ToolPageData;
  tool?: ReactNode;
}

export default function ToolPageRenderer({ data, tool }: ToolPageRendererProps) {
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

  return (
    <>
      <Script id={`ld-json-${data.toolKey}-webpage-${data.locale}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <Script id={`ld-json-${data.toolKey}-software-${data.locale}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <Script id={`ld-json-${data.toolKey}-howto-${data.locale}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner title={data.hero.title} description={data.hero.description} overlay="black" backgroundImage={data.hero.backgroundImage} size="tools" />

      <Breadcrumbs second={data.breadcrumbs.second} third={data.breadcrumbs.third} includeJsonLd size="compact" locale={data.locale} />

      <ToolEditorLayout>
        <div className="hidden lg:block">
          <AdSense variant="tool-banner" className="my-3" />
        </div>
        <div className="block lg:hidden">
          <AdSense variant="responsive" className="my-3" />
        </div>
        {isDesktopOnly ? (
          <>
            <div className="hidden lg:block">{tool ?? <DynamicToolRenderer toolKey={data.toolKey} />}</div>
            <div className="block lg:hidden">
              <DesktopOnlyNotice t={desktopOnlyT} />
            </div>
          </>
        ) : (
          (tool ?? <DynamicToolRenderer toolKey={data.toolKey} />)
        )}

        <div className="mx-auto w-full max-w-[1420px] px-[3%]">
          {(() => {
            const adPositions = new Set<number>();
            let contentCount = 0;
            data.contentBlocks.forEach((block, idx) => {
              if (block.type !== 'gap') {
                contentCount++;
                if (contentCount % AD_SECTION_INTERVAL === 0 && !AD_SKIP_AFTER.has(block.type)) {
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
                <div key={`ad-after-${idx}`} className="ad-slot-wrapper">
                  <Gap variant="line" />
                  <div className="not-prose -mx-[3%] flex justify-center py-4">
                    <AdSense variant="responsive" />
                  </div>
                  <Gap variant="line" />
                </div>
              ) : null;

              if (insertRelated) {
                return (
                  <Fragment key={`block-rel-${idx}`}>
                    <RelatedConverters toolKey={data.toolKey} locale={data.locale as Locale} />
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
