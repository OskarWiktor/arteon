import Badge from '@/components/ui/Badge';

interface ToolUploadContentProps {
  dragLabel: string;
  clickLabel: string;
  formatsLabel: string;
}

export default function ToolUploadContent({ dragLabel, clickLabel, formatsLabel }: ToolUploadContentProps) {
  return (
    <>
      <span className="mb-1 text-sm! font-medium">{dragLabel}</span>
      <span className="tool-meta mb-2">{clickLabel}</span>
      <Badge variant="default" size="sm" className="bg-white shadow-sm">
        {formatsLabel}
      </Badge>
    </>
  );
}
