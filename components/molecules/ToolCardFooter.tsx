import ArrowIcon from '@/components/atoms/ArrowIcon';
import InlineLink from '@/components/atoms/InlineLink';

interface ToolCardFooterProps {
  href: string;
  label: string;
}

/**
 * CTA footer for the dark tool cards on the tool index pages: a thin divider
 * line plus an inline "open tool" link with an arrow. Mirrors the footer of the
 * tool cards in the tools carousel (the `tool` variant of CarouselCard) so the
 * index-page cards and the carousel cards look identical.
 */
export default function ToolCardFooter({ href, label }: ToolCardFooterProps) {
  return (
    <div className='mt-auto'>
      <div className='mt-4 mb-2 h-px w-full bg-[#504E4C]!' aria-hidden='true' />
      <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium'>
        <InlineLink
          href={href}
          className='inline-flex rounded-lg text-[#B3B0AC]! transition'
        >
          <span className='text-[#F9F5F2]!'>{label}</span>
          <ArrowIcon />
        </InlineLink>
      </div>
    </div>
  );
}
