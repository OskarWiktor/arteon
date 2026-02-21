import { Fragment, type ReactNode } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import type { ToolPageData, ToolContentBlock } from '@/types/tool-page';
import type { Locale } from '@/types/locale';
import type { ToolItemKey } from '@/types/tools/common';

import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import DynamicToolRenderer from '@/components/sections/tools/DynamicToolRenderer';
import LazyToolsCarousel from '@/components/sections/tools/LazyToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionTabs from '@/components/ui/sections/SectionTabs';
import SectionFeatureComparison from '@/components/ui/sections/SectionFeatureComparison';
import SectionTimeline from '@/components/ui/sections/SectionTimeline';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import AdSense from '@/components/ui/AdSense';

import { toAbsoluteUrl } from '@/utils/absoluteUrl';
import { getToolAlternates, getToolSoftwareSchema, getToolHowToSchema, getToolWebPageSchema } from '@/lib/i18n/pages/tool-meta';
import { getToolHref } from '@/lib/i18n/tool-registry';
import { getToolIcon } from '@/lib/tools/icon-registry';

const AD_SECTION_INTERVAL = 4;

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
        <AdSense variant="tool-banner" className="my-3" />
        {tool ?? <DynamicToolRenderer toolKey={data.toolKey} />}
      </ToolEditorLayout>

      <Wrapper>
        {(() => {
          const adPositions = new Set<number>();
          let contentCount = 0;
          data.contentBlocks.forEach((block, idx) => {
            if (block.type !== 'gap') {
              contentCount++;
              if (contentCount % AD_SECTION_INTERVAL === 0) {
                adPositions.add(idx);
              }
            }
          });

          return data.contentBlocks.map((block, idx) => {
            const node = renderBlock(block, idx, pageUrl);
            if (adPositions.has(idx)) {
              return (
                <Fragment key={`block-ad-${idx}`}>
                  {node}
                  <div className="not-prose mt-8 flex justify-center">
                    <AdSense variant="tool-banner" />
                  </div>
                </Fragment>
              );
            }
            return node;
          });
        })()}
      </Wrapper>

      {data.cta && (
        <CTABanner
          title={data.cta.title}
          description={data.cta.description}
          btnOne={data.cta.btnOne}
          btnOneLink={data.cta.btnOneLink}
          btnTwo={data.cta.btnTwo}
          btnTwoLink={data.cta.btnTwoLink}
          backgroundImage={data.cta.backgroundImage}
          overlay={data.cta.overlay as 'black' | 'white' | 'none'}
        />
      )}
    </>
  );
}
